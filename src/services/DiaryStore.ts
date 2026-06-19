export const LANGS = ['EN', 'IT', 'DE', 'JP'];
const META_KEY = 'diary_meta_v1';
const DAY = 86400000;

export interface DiaryMeta {
  start: string;
  days: {
    [isoStr: string]: string[] | boolean;
  };
  medals?: string[];
}

export interface Stats {
  total: number;
  best: number;
  current: number;
  allLangs: boolean;
  maxWeek: number;
}

export const pad2 = (n: number): string => String(n).padStart(2, '0');
export const iso = (d: Date): string => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
export const fromIso = (s: string): Date => {
  const [y, m, d] = s.split('-').map(Number);
  return new Date(y, m - 1, d);
};
export const today = (): Date => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};
export const addDays = (d: Date, n: number): Date => {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
};
export const today0 = (d: Date): Date => {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
};

// --- MÓDULO INDEXEDDB ---
const DB_NAME = 'diario_poliglota_db';
const STORE_NAME = 'strokes';

export function getDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = (e: any) => {
      const db = e.target.result as IDBDatabase;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = (e: any) => resolve(e.target.result as IDBDatabase);
    request.onerror = (e: any) => reject(e.target.error);
  });
}

export function dbGet(key: string): Promise<any> {
  return getDB().then((db) => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  });
}

export function dbSet(key: string, val: any): Promise<void> {
  return getDB().then((db) => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(val, key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  });
}

export function dbDel(key: string): Promise<void> {
  return getDB().then((db) => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  });
}

export function dbGetAll(): Promise<{ [key: string]: any }> {
  return getDB().then((db) => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const keysReq = store.getAllKeys();
      const valsReq = store.getAll();
      keysReq.onsuccess = () => {
        valsReq.onsuccess = () => {
          const result: { [key: string]: any } = {};
          const keys = keysReq.result as string[];
          const vals = valsReq.result;
          for (let i = 0; i < keys.length; i++) {
            result[keys[i]] = vals[i];
          }
          resolve(result);
        };
      };
      keysReq.onerror = () => reject(keysReq.error);
      valsReq.onerror = () => reject(valsReq.error);
    });
  });
}

export function clearAll(): Promise<void> {
  return getDB().then((db) => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.clear();
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  });
}

// --- LÓGICA DE NEGÓCIO ---
export const inkKey = (isoStr: string, lang: string) => `diary_ink_${isoStr}_${lang}`;

export function loadInk(isoStr: string, lang: string): Promise<any[]> {
  return dbGet(inkKey(isoStr, lang)).then((val) => val || []);
}

export async function saveInk(isoStr: string, lang: string, strokes: any[]): Promise<boolean> {
  const key = inkKey(isoStr, lang);
  try {
    if (!strokes || !strokes.length) {
      await dbDel(key);
      const m = getMeta();
      if (m.days[isoStr] && Array.isArray(m.days[isoStr])) {
        m.days[isoStr] = (m.days[isoStr] as string[]).filter((l) => l !== lang);
        if ((m.days[isoStr] as string[]).length === 0) {
          delete m.days[isoStr];
        }
        setMeta(m);
      }
    } else {
      await dbSet(key, strokes);
      const m = getMeta();
      if (!m.days[isoStr] || m.days[isoStr] === true) {
        m.days[isoStr] = [];
      }
      if (Array.isArray(m.days[isoStr]) && !(m.days[isoStr] as string[]).includes(lang)) {
        (m.days[isoStr] as string[]).push(lang);
        setMeta(m);
      }
    }
    return true;
  } catch (e) {
    console.error('saveInk error:', e);
    return false;
  }
}

export async function saveInkRaw(key: string, strokes: any[]): Promise<void> {
  if (!strokes || !strokes.length) {
    await dbDel(key);
  } else {
    await dbSet(key, strokes);
  }
}

export const textKey = (isoStr: string, lang: string) => `diary_text_${isoStr}_${lang}`;

export function loadText(isoStr: string, lang: string): Promise<string> {
  return dbGet(textKey(isoStr, lang)).then((val) => (typeof val === 'string' ? val : ''));
}

export async function saveText(isoStr: string, lang: string, text: string): Promise<boolean> {
  const key = textKey(isoStr, lang);
  try {
    if (!text || !text.trim()) {
      await dbDel(key);
      // Remove lang do meta somente se também não há traços para este lang
      const inkData = await dbGet(inkKey(isoStr, lang));
      const hasInk = Array.isArray(inkData) && inkData.length > 0;
      if (!hasInk) {
        const m = getMeta();
        if (m.days[isoStr] && Array.isArray(m.days[isoStr])) {
          m.days[isoStr] = (m.days[isoStr] as string[]).filter((l) => l !== lang);
          if ((m.days[isoStr] as string[]).length === 0) delete m.days[isoStr];
          setMeta(m);
        }
      }
    } else {
      await dbSet(key, text);
      const m = getMeta();
      if (!m.days[isoStr] || m.days[isoStr] === true) m.days[isoStr] = [];
      if (Array.isArray(m.days[isoStr]) && !(m.days[isoStr] as string[]).includes(lang)) {
        (m.days[isoStr] as string[]).push(lang);
        setMeta(m);
      }
    }
    return true;
  } catch (e) {
    console.error('saveText error:', e);
    return false;
  }
}

export function getMeta(): DiaryMeta {
  let m: DiaryMeta | null = null;
  try {
    m = JSON.parse(localStorage.getItem(META_KEY) || 'null');
  } catch (e) {
    m = null;
  }
  if (!m) {
    m = { start: iso(today()), days: {} };
    localStorage.setItem(META_KEY, JSON.stringify(m));
  }
  if (!m.days) m.days = {};
  return m;
}

export function setMeta(m: DiaryMeta): void {
  localStorage.setItem(META_KEY, JSON.stringify(m));
}

export function dayHasInk(m: DiaryMeta, isoStr: string): boolean {
  const val = m.days[isoStr];
  return !!(val && Array.isArray(val) && val.length > 0);
}

export function dayHasAllLangs(m: DiaryMeta, isoStr: string): boolean {
  const val = m.days[isoStr];
  return !!(val && Array.isArray(val) && LANGS.every((l) => (val as string[]).includes(l)));
}

export function currentStreak(m: DiaryMeta): number {
  const t = today();
  const todayIso = iso(t);
  const prevIso = iso(addDays(t, -1));
  let anchor = m.days[todayIso] ? t : (m.days[prevIso] ? addDays(t, -1) : null);
  if (!anchor) return 0;
  let n = 0, cur = anchor;
  while (m.days[iso(cur)]) {
    n++;
    cur = addDays(cur, -1);
  }
  return n;
}

export function bestStreak(m: DiaryMeta): number {
  const keys = Object.keys(m.days).sort();
  let best = 0, run = 0, prev: Date | null = null;
  for (const k of keys) {
    const d = fromIso(k);
    if (prev && (d.getTime() - prev.getTime()) === DAY) {
      run++;
    } else {
      run = 1;
    }
    best = Math.max(best, run);
    prev = d;
  }
  return best;
}

export function totalDays(m: DiaryMeta): number {
  return Object.keys(m.days).length;
}

export function weekFlatForDate(m: DiaryMeta, date: Date): number {
  const diff = Math.floor((today0(date).getTime() - fromIso(m.start).getTime()) / DAY);
  return Math.max(0, Math.min(47, Math.floor(diff / 7)));
}

export function dayNumber(m: DiaryMeta, date: Date): number {
  return Math.floor((today0(date).getTime() - fromIso(m.start).getTime()) / DAY) + 1;
}

export function stats(m: DiaryMeta): Stats {
  const keys = Object.keys(m.days);
  let allLangs = false;
  let maxWeek = 0;
  for (const k of keys) {
    if (!allLangs && dayHasAllLangs(m, k)) allLangs = true;
    maxWeek = Math.max(maxWeek, weekFlatForDate(m, fromIso(k)) + 1);
  }
  return {
    total: keys.length,
    best: bestStreak(m),
    current: currentStreak(m),
    allLangs,
    maxWeek,
  };
}

// --- MIGRAÇÃO DE DADOS ---
export async function migrateLegacyData(): Promise<void> {
  const keysToMigrate: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('diary_ink_')) {
      keysToMigrate.push(key);
    }
  }
  if (keysToMigrate.length === 0) {
    const m = getMeta();
    let updated = false;
    for (const isoStr of Object.keys(m.days)) {
      if (m.days[isoStr] === true) {
        m.days[isoStr] = ['EN'];
        updated = true;
      }
    }
    if (updated) setMeta(m);
    return;
  }

  const m = getMeta();
  let updated = false;

  for (const key of keysToMigrate) {
    const val = localStorage.getItem(key);
    if (val && val !== '[]') {
      try {
        const strokes = JSON.parse(val);
        await dbSet(key, strokes);

        const parts = key.split('_');
        if (parts.length >= 4) {
          const isoStr = parts[2];
          const lang = parts[3];
          if (!m.days[isoStr] || m.days[isoStr] === true) {
            m.days[isoStr] = [];
          }
          if (Array.isArray(m.days[isoStr]) && !(m.days[isoStr] as string[]).includes(lang)) {
            (m.days[isoStr] as string[]).push(lang);
            updated = true;
          }
        }
      } catch (e) {
        console.error('Erro de migração na chave:', key, e);
      }
    }
    localStorage.removeItem(key);
  }

  for (const isoStr of Object.keys(m.days)) {
    if (m.days[isoStr] === true) {
      m.days[isoStr] = ['EN'];
      updated = true;
    }
  }

  if (updated || keysToMigrate.length > 0) {
    setMeta(m);
  }
}
