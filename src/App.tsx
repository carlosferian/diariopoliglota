import { useState, useEffect, useRef, useCallback } from 'react';
import {
  ChevronLeft, ChevronRight, Camera, Sun, Moon, Coffee, Columns, MoreHorizontal,
  Undo2, Redo2, AlignJustify, Square, Grid3X3, PenTool, Smartphone, Eraser, Keyboard
} from 'lucide-react';
import * as DS from './services/DiaryStore';
import { InkPad } from './services/InkPad';
import type { Stroke, InkPadTool } from './services/InkPad';
import { YEAR } from './data/prompts';
import { SUGGESTIONS } from './data/suggestions';
import { WritingBox } from './components/WritingBox';
import type { ThemeColors } from './components/WritingBox';
import { ProgressModal, MEDALS } from './components/ProgressModal';
import { MedalToast } from './components/MedalToast';

const getInkColors = (mode: 'light' | 'dark' | 'sepia') => {
  if (mode === 'dark') {
    return [
      { id: 'ink',    label: 'Tinta (1)',    v: '#F1F5F9' },
      { id: 'blue',   label: 'Azul (2)',     v: '#60A5FA' },
      { id: 'red',    label: 'Vermelho (3)', v: '#FB7185' },
      { id: 'green',  label: 'Verde (4)',   v: '#34D399' },
    ];
  }
  return [
    { id: 'ink',    label: 'Tinta (1)',    v: '#1b2030' },
    { id: 'blue',   label: 'Azul (2)',     v: '#2563EB' },
    { id: 'red',    label: 'Vermelho (3)', v: '#E11D48' },
    { id: 'green',  label: 'Verde (4)',   v: '#5a7a2e' },
  ];
};

const DIA_PT = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
const MES_PT = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
];

export function makeTheme(mode: 'light' | 'dark' | 'sepia'): ThemeColors {
  if (mode === 'light') return {
    mode, appBg: '#E9EEF7', grid: 'rgba(30,42,80,0.05)',
    card: '#FFFFFF', panel: '#FFFFFF', band: 'linear-gradient(90deg,#FFFFFF,#F2F6FC)',
    border: '#dce3f0', borderStrong: '#c6d0e4',
    text: '#1b2440', text2: '#46506b', dim: '#6b7690', faint: '#9aa3bb',
    ctrlBg: '#eef1f9', ctrlHover: '#e1e7f4',
    cream: '#FCFBF6', modalOverlay: 'rgba(20,28,50,0.38)', modalBg: '#FFFFFF', cellBg: '#F1F4FA',
    accent: '#0E9F6E', flame: '#F97316', shadow: '0 4px 20px rgba(30,42,80,0.08)',
  };
  if (mode === 'sepia') return {
    mode, appBg: '#F4ECD8', grid: 'rgba(92,64,36,0.05)',
    card: '#FAF4E8', panel: '#FAF4E8', band: 'linear-gradient(90deg,#FAF4E8,#EFE5CD)',
    border: '#E3D3B4', borderStrong: '#D0BD96',
    text: '#433422', text2: '#5C4830', dim: '#80684B', faint: '#A48E72',
    ctrlBg: '#EDE2C8', ctrlHover: '#E3D5B4',
    cream: '#FDFBF7', modalOverlay: 'rgba(67,52,34,0.35)', modalBg: '#FAF4E8', cellBg: '#EFE5CD',
    accent: '#8B5A2B', flame: '#D2691E', shadow: '0 4px 20px rgba(92,64,36,0.08)',
  };
  return {
    mode, appBg: '#0E1326', grid: 'rgba(255,255,255,0.03)',
    card: '#171E36', panel: '#141A30', band: 'linear-gradient(90deg,#1a2142,#171E36)',
    border: '#2a3358', borderStrong: '#38426e',
    text: '#ffffff', text2: '#cfd6ea', dim: '#8b93b0', faint: '#6b739a',
    ctrlBg: '#232c50', ctrlHover: '#2e3a66',
    cream: '#0B0F19', modalOverlay: 'rgba(6,9,16,0.72)', modalBg: '#141A30', cellBg: '#1b2240',
    accent: '#6EE7B7', flame: '#FBBF24', shadow: '0 8px 32px rgba(0,0,0,0.3)',
  };
}

export function App() {
  const [meta, setMeta] = useState<DS.DiaryMeta>(() => DS.getMeta());
  const [viewDate, setViewDate] = useState<Date>(() => DS.today());
  const [tool, setTool] = useState<InkPadTool>({ mode: 'pen', color: '#1b2030', width: 'grossa' });
  const [penOnly, setPenOnly] = useState<boolean>(() => localStorage.getItem('diary_penOnly') === 'true');
  const [paper, setPaper] = useState<string>(() => localStorage.getItem('diary_paper') || 'pautado');
  const [showCal, setShowCal] = useState<boolean>(false);
  const [quota, setQuota] = useState<boolean>(false);
  const [mode, setMode] = useState<string>(() => localStorage.getItem('diary_mode') || 'auto');
  const [toast, setToast] = useState<any | null>(null);
  const [activeCanvas, setActiveCanvas] = useState<string | null>(null);
  const [inputMode, setInputMode] = useState<'draw' | 'type'>(
    () => (localStorage.getItem('diary_inputMode') as 'draw' | 'type') || 'draw'
  );
  const [typedTexts, setTypedTexts] = useState<Record<string, string>>(
    { EN: '', IT: '', DE: '', JP: '', FR: '', ES: '' }
  );
  const [activeLangs, setActiveLangsState] = useState<string[]>(() => DS.getActiveLangs());
  const [, setTick] = useState<number>(0);

  const changeActiveLangs = useCallback((langs: string[]) => {
    setActiveLangsState(DS.setActiveLangs(langs));
  }, []);

  // Google Drive Sync States
  const [gdriveClientId, setGdriveClientId] = useState<string>(() => localStorage.getItem('diary_gdriveClientId') || '');
  const [gdriveToken, setGdriveToken] = useState<string | null>(null);

  // Lembrete States
  const [reminderTime, setReminderTime] = useState<string>(() => localStorage.getItem('diary_reminderTime') || '20:00');
  const [reminderEnabled, setReminderEnabled] = useState<boolean>(() => localStorage.getItem('diary_reminderEnabled') === 'true');

  const dayNight = () => {
    const h = new Date().getHours();
    return (h >= 7 && h < 19) ? 'light' : 'dark';
  };
  const effMode = (mode === 'auto' ? dayNight() : (mode === 'light' ? 'light' : (mode === 'sepia' ? 'sepia' : 'dark'))) as 'light' | 'dark' | 'sepia';
  const T = makeTheme(effMode);
  const INK_COLORS = getInkColors(effMode);

  const effModeRef = useRef(effMode);
  useEffect(() => { effModeRef.current = effMode; }, [effMode]);

  const activeLangsRef = useRef(activeLangs);
  useEffect(() => { activeLangsRef.current = activeLangs; }, [activeLangs]);

  // Inicializa Google Drive Identity
  useEffect(() => {
    if (gdriveClientId) {
      import('./services/GoogleDriveSync').then((GDS) => {
        GDS.initTokenClient(gdriveClientId, (token) => {
          setGdriveToken(token);
        });
      });
    }
  }, [gdriveClientId]);

  // Screen Wake Lock — mantém a tela acesa enquanto o app está em uso
  useEffect(() => {
    let sentinel: WakeLockSentinel | null = null;

    const acquire = async () => {
      if ('wakeLock' in navigator && document.visibilityState === 'visible') {
        try {
          sentinel = await navigator.wakeLock.request('screen');
        } catch {
          // API indisponível ou permissão negada — degradação silenciosa
        }
      }
    };

    acquire();
    document.addEventListener('visibilitychange', acquire);

    return () => {
      document.removeEventListener('visibilitychange', acquire);
      sentinel?.release();
    };
  }, []);

  // Salva Lembretes
  useEffect(() => {
    localStorage.setItem('diary_reminderTime', reminderTime);
  }, [reminderTime]);

  useEffect(() => {
    localStorage.setItem('diary_reminderEnabled', String(reminderEnabled));
    if (reminderEnabled && 'Notification' in window) {
      if (Notification.permission === 'default') {
        Notification.requestPermission();
      }
    }
  }, [reminderEnabled]);

  // Checa e dispara notificação local
  useEffect(() => {
    const checkNotification = () => {
      if (!reminderEnabled || !('Notification' in window) || Notification.permission !== 'granted') return;
      
      const t = new Date();
      const timeStr = `${DS.pad2(t.getHours())}:${DS.pad2(t.getMinutes())}`;
      if (timeStr === reminderTime) {
        const todayIso = DS.iso(t);
        const lastNotif = localStorage.getItem('diary_lastNotificationDate');
        if (lastNotif !== todayIso) {
          const m = DS.getMeta();
          if (!DS.dayHasInk(m, todayIso)) {
            new Notification('Hora de escrever! ✍️', {
              body: 'Você ainda não praticou sua escrita hoje. Mantenha sua sequência ativa!',
              icon: '/icon.svg'
            });
            localStorage.setItem('diary_lastNotificationDate', todayIso);
          }
        }
      }
    };

    const timer = setInterval(checkNotification, 60000);
    return () => clearInterval(timer);
  }, [reminderEnabled, reminderTime]);

  const saveClientId = (id: string) => {
    localStorage.setItem('diary_gdriveClientId', id);
    setGdriveClientId(id);
  };

  const connectGDrive = () => {
    import('./services/GoogleDriveSync').then((GDS) => {
      GDS.requestGoogleToken();
    });
  };

  const syncGDrive = async () => {
    if (!gdriveToken) return;
    try {
      const metaStr = localStorage.getItem('diary_meta_v1');
      const metaObj = metaStr ? JSON.parse(metaStr) : null;
      const settings: { [key: string]: string } = {};
      ['diary_mode', 'diary_paper', 'diary_penOnly', 'diary_gdriveClientId', 'diary_reminderTime', 'diary_reminderEnabled'].forEach((k) => {
        const v = localStorage.getItem(k);
        if (v !== null) settings[k] = v;
      });
      const strokes = await DS.dbGetAll();
      const backupData = {
        meta: metaObj,
        strokes,
        settings
      };
      const GDS = await import('./services/GoogleDriveSync');
      const fileId = await GDS.findBackupFile(gdriveToken);
      await GDS.uploadBackupFile(gdriveToken, fileId, backupData);
      alert('Progresso sincronizado com o Google Drive!');
    } catch (err) {
      console.error(err);
      alert('Erro ao enviar backup para o Google Drive.');
    }
  };

  const loadGDrive = async () => {
    if (!gdriveToken) return;
    if (!confirm('Deseja carregar o backup do Drive? Seus desenhos locais atuais serão substituídos!')) return;
    try {
      const GDS = await import('./services/GoogleDriveSync');
      const fileId = await GDS.findBackupFile(gdriveToken);
      if (!fileId) {
        alert('Nenhum backup encontrado no Google Drive.');
        return;
      }
      const data = await GDS.downloadBackupFile(gdriveToken, fileId);
      
      let metaObj = null;
      let strokesMap: { [key: string]: any[] } = {};

      if (data.meta && data.strokes) {
        metaObj = data.meta;
        strokesMap = data.strokes;
        if (data.settings) {
          Object.entries(data.settings).forEach(([k, v]) => localStorage.setItem(k, v as string));
        }
      }

      if (metaObj) {
        localStorage.setItem('diary_meta_v1', JSON.stringify(metaObj));
      }

      await DS.clearAll();
      for (const [key, strokes] of Object.entries(strokesMap)) {
        await DS.saveInkRaw(key, strokes);
      }

      // Atualiza interface
      const m = DS.getMeta();
      setMeta({ ...m });
      if (data.settings?.diary_gdriveClientId) setGdriveClientId(data.settings.diary_gdriveClientId);
      if (data.settings?.diary_reminderTime) setReminderTime(data.settings.diary_reminderTime);
      if (data.settings?.diary_reminderEnabled) setReminderEnabled(data.settings.diary_reminderEnabled === 'true');

      const isoStr = DS.iso(viewRef.current);
      for (const code of DS.LANGS) {
        const strokes = await DS.loadInk(isoStr, code);
        const p = pads.current[code];
        if (p) p.load(strokes);
      }
      const texts: Record<string, string> = {};
      await Promise.all(
        DS.LANGS.map(async (code) => {
          texts[code] = await DS.loadText(isoStr, code);
        })
      );
      setTypedTexts(texts);
      alert('Backup do Google Drive importado com sucesso!');
    } catch (err) {
      console.error(err);
      alert('Erro ao carregar backup do Drive.');
    }
  };

  const canvasEls = useRef<{ [code: string]: HTMLCanvasElement | null }>({});
  const pads = useRef<{ [code: string]: InkPad | null }>({});
  const viewRef = useRef(viewDate);
  const penOnlyRef = useRef(penOnly);
  const toolRef = useRef(tool);
  const inputModeRef = useRef(inputMode);
  const lastLang = useRef('EN');
  const swipeStart = useRef<number | null>(null);

  useEffect(() => { viewRef.current = viewDate; }, [viewDate]);
  useEffect(() => { penOnlyRef.current = penOnly; }, [penOnly]);
  useEffect(() => { localStorage.setItem('diary_mode', mode); }, [mode]);
  useEffect(() => { localStorage.setItem('diary_paper', paper); }, [paper]);
  useEffect(() => { localStorage.setItem('diary_penOnly', String(penOnly)); }, [penOnly]);
  useEffect(() => { toolRef.current = tool; }, [tool]);
  useEffect(() => { inputModeRef.current = inputMode; }, [inputMode]);
  useEffect(() => { localStorage.setItem('diary_inputMode', inputMode); }, [inputMode]);

  // Synchronize selected tool color when theme changes, so that e.g. dark pen becomes light pen.
  useEffect(() => {
    Object.values(pads.current).forEach((p) => {
      if (p) p.redraw();
    });

    const oldColors = getInkColors(effMode === 'dark' ? 'light' : 'dark');
    const newColors = getInkColors(effMode);
    const idx = oldColors.findIndex((c) => c.v === tool.color);
    if (idx !== -1) {
      setTool((t) => ({ ...t, color: newColors[idx].v }));
    } else {
      const curIdx = newColors.findIndex((c) => c.v === tool.color);
      if (curIdx === -1) {
        setTool((t) => ({ ...t, color: newColors[0].v }));
      }
    }
  }, [effMode]);

  useEffect(() => {
    const id = setInterval(() => setTick((n) => n + 1), 60000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 3400);
    return () => clearTimeout(id);
  }, [toast]);

  const handleInk = useCallback(async (code: string, strokes: Stroke[]) => {
    lastLang.current = code;
    const isoStr = DS.iso(viewRef.current);
    const ok = await DS.saveInk(isoStr, code, strokes);
    if (!ok) {
      setQuota(true);
      return;
    }
    const m = DS.getMeta();
    const s = DS.stats(m);
    const earned = m.medals || [];
    const newly = MEDALS.filter((md) => md.test(s) && !earned.includes(md.id));
    if (newly.length) {
      m.medals = earned.concat(newly.map((md) => md.id));
      DS.setMeta(m);
      setToast(newly[0]);
    }
    setMeta({ ...m });
  }, []);

  const registerCanvas = useCallback((code: string, el: HTMLCanvasElement | null) => {
    if (el) {
      canvasEls.current[code] = el;
      if (pads.current[code]) pads.current[code]!.destroy();
      pads.current[code] = new InkPad(el, {
        onChange: (s) => handleInk(code, s),
        penOnly: () => penOnlyRef.current,
        onActive: (active) => setActiveCanvas(active ? code : null),
        mode: () => effModeRef.current,
        onPenDetected: () => setPenOnly(true),
      });
      pads.current[code]!.setTool(toolRef.current);
      DS.loadInk(DS.iso(viewRef.current), code).then((s) => pads.current[code]?.load(s));
    } else {
      canvasEls.current[code] = null;
      pads.current[code]?.destroy();
      pads.current[code] = null;
    }
  }, [handleInk]);

  const handleText = useCallback(async (code: string, text: string) => {
    const isoStr = DS.iso(viewRef.current);
    const ok = await DS.saveText(isoStr, code, text);
    if (!ok) {
      setQuota(true);
      return;
    }
    const m = DS.getMeta();
    const s = DS.stats(m);
    const earned = m.medals || [];
    const newly = MEDALS.filter((md) => md.test(s) && !earned.includes(md.id));
    if (newly.length) {
      m.medals = earned.concat(newly.map((md) => md.id));
      DS.setMeta(m);
      setToast(newly[0]);
    }
    setMeta({ ...m });
  }, []);

  const deleteDay = useCallback(async (date: Date) => {
    const isoStr = DS.iso(date);
    for (const lang of DS.LANGS) {
      await DS.saveInk(isoStr, lang, []);
      await DS.saveText(isoStr, lang, '');
    }
    const m = DS.getMeta();
    if (isoStr === DS.iso(viewRef.current)) {
      DS.LANGS.forEach((code) => {
        const p = pads.current[code];
        if (p) p.load([]);
      });
      setTypedTexts({ EN: '', IT: '', DE: '', JP: '', FR: '', ES: '' });
    }
    setMeta({ ...m });
  }, []);

  const exportBackup = useCallback(async () => {
    try {
      const metaStr = localStorage.getItem('diary_meta_v1');
      const metaObj = metaStr ? JSON.parse(metaStr) : null;
      const settings: { [key: string]: string } = {};
      ['diary_mode', 'diary_paper', 'diary_penOnly'].forEach((k) => {
        const v = localStorage.getItem(k);
        if (v !== null) settings[k] = v;
      });
      const strokes = await DS.dbGetAll();
      const backupData = { meta: metaObj, strokes, settings };
      const json = JSON.stringify(backupData, null, 2);
      const filename = `diario-poliglota-backup-${DS.iso(DS.today())}.json`;

      if ('showSaveFilePicker' in window) {
        try {
          const handle = await (window as any).showSaveFilePicker({
            suggestedName: filename,
            types: [{ description: 'JSON Backup', accept: { 'application/json': ['.json'] } }],
          });
          const writable = await handle.createWritable();
          await writable.write(json);
          await writable.close();
          return;
        } catch (err) {
          if ((err as DOMException).name === 'AbortError') return;
          // outro erro — fallback para download
        }
      }

      // Fallback: download automático
      const blob = new Blob([json], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = filename;
      a.click();
      URL.revokeObjectURL(a.href);
    } catch (err) {
      console.error('Erro ao exportar backup:', err);
    }
  }, []);

  const handleImport = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = async (e: any) => {
      try {
        const data = JSON.parse(e.target.result);
        let metaObj = null;
        let strokesMap: { [key: string]: any[] } = {};

        if (data.meta && data.strokes) {
          metaObj = data.meta;
          strokesMap = data.strokes;
          if (data.settings) {
            Object.entries(data.settings).forEach(([k, v]) => localStorage.setItem(k, v as string));
          }
        } else {
          // Formato legado
          Object.entries(data).forEach(([k, v]) => {
            if (k === 'diary_meta_v1') {
              try { metaObj = JSON.parse(v as string); } catch (err) {}
            } else if (k.startsWith('diary_ink_')) {
              try { strokesMap[k] = JSON.parse(v as string); } catch (err) {}
            } else if (k.startsWith('diary_')) {
              localStorage.setItem(k, v as string);
            }
          });
        }

        if (metaObj) {
          localStorage.setItem('diary_meta_v1', JSON.stringify(metaObj));
        }

        for (const [key, strokes] of Object.entries(strokesMap)) {
          await DS.saveInkRaw(key, strokes);
        }

        const m = DS.getMeta();
        setMeta({ ...m });
        const isoStr = DS.iso(viewRef.current);
        DS.LANGS.forEach(async (code) => {
          const strokes = await DS.loadInk(isoStr, code);
          const p = pads.current[code];
          if (p) p.load(strokes);
        });
        const texts: Record<string, string> = {};
        await Promise.all(
          DS.LANGS.map(async (code) => {
            texts[code] = await DS.loadText(isoStr, code);
          })
        );
        setTypedTexts(texts);
      } catch (_) { /* arquivo inválido */ }
    };
    reader.readAsText(file);
  }, []);

  const exportPNG = useCallback(async () => {
    const langs = activeLangsRef.current;
    const firstEl = langs.map((c) => canvasEls.current[c]).find((el) => !!el);
    if (!firstEl) return;
    const cw = firstEl.width, ch = firstEl.height;
    const pad = 20;
    // Grade adaptável ao número de idiomas visíveis (1–4).
    const colsMap: { [n: number]: number } = { 1: 1, 2: 2, 3: 3, 4: 2 };
    const cols = colsMap[langs.length] || Math.min(langs.length, 2);
    const rows = Math.ceil(langs.length / cols);
    const off = document.createElement('canvas');
    off.width = cw * cols + pad * (cols + 1);
    off.height = ch * rows + pad * (rows + 1);
    const ctx = off.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = T.mode === 'dark' ? '#0E1326' : '#E9EEF7';
    ctx.fillRect(0, 0, off.width, off.height);
    langs.forEach((code, i) => {
      const el = canvasEls.current[code];
      if (!el) return;
      const col = i % cols, row = Math.floor(i / cols);
      const x = pad + col * (cw + pad);
      const y = pad + row * (ch + pad);
      ctx.fillStyle = T.cream;
      ctx.fillRect(x, y, el.width, el.height);
      ctx.drawImage(el, x, y);
    });

    const filename = `diario-${DS.iso(viewRef.current)}.png`;
    const dataURL = off.toDataURL('image/png');

    if ('share' in navigator) {
      const res = await fetch(dataURL);
      const blob = await res.blob();
      const file = new File([blob], filename, { type: 'image/png' });
      if (navigator.canShare?.({ files: [file] })) {
        try {
          await navigator.share({ files: [file], title: 'Diário Políglota', text: filename });
          return;
        } catch (err) {
          if ((err as DOMException).name === 'AbortError') return;
          // outro erro — fallback para download
        }
      }
    }

    const a = document.createElement('a');
    a.href = dataURL;
    a.download = filename;
    a.click();
  }, [T]);

  const clearAllHistory = useCallback(async () => {
    if (!confirm("Tem certeza que deseja apagar TODO o seu histórico de escrita e estatísticas? Esta ação não pode ser desfeita!")) return;
    try {
      await DS.clearAll();
      localStorage.removeItem('diary_meta_v1');
      const m = DS.getMeta();
      setMeta({ ...m });
      DS.LANGS.forEach((code) => {
        const p = pads.current[code];
        if (p) p.clear();
      });
      setShowCal(false);
      alert("Histórico apagado com sucesso!");
    } catch (err) {
      console.error(err);
      alert("Erro ao apagar histórico.");
    }
  }, []);

  useEffect(() => {
    async function init() {
      await DS.migrateLegacyData();
      const m = DS.getMeta();
      setMeta({ ...m });
      const isoStr = DS.iso(viewRef.current);
      const texts: Record<string, string> = {};
      await Promise.all(
        DS.LANGS.map(async (code) => {
          texts[code] = await DS.loadText(isoStr, code);
        })
      );
      setTypedTexts(texts);
    }
    init();

    return () => {
      Object.values(pads.current).forEach((p) => p && p.destroy());
      pads.current = {};
    };
  }, []);

  useEffect(() => {
    const isoStr = DS.iso(viewDate);
    DS.LANGS.forEach(async (code) => {
      const strokes = await DS.loadInk(isoStr, code);
      const p = pads.current[code];
      if (p) p.load(strokes);
    });
    const texts: Record<string, string> = {};
    Promise.all(
      DS.LANGS.map(async (code) => {
        texts[code] = await DS.loadText(isoStr, code);
      })
    ).then(() => setTypedTexts({ ...texts }));
  }, [viewDate]);

  useEffect(() => {
    Object.values(pads.current).forEach((p) => p && p.setTool(tool));
  }, [tool]);

  useEffect(() => {
    Object.values(pads.current).forEach((p) => {
      if (p) {
        // @ts-ignore
        if (p.canvas) {
          // @ts-ignore
          p.canvas.style.touchAction = penOnly ? 'pan-y' : 'none';
        }
      }
    });
  }, [penOnly]);

  const flat = DS.weekFlatForDate(meta, viewDate);
  const M = YEAR[Math.floor(flat / 4)], W = M.w[flat % 4];
  const streak = DS.currentStreak(meta);
  const dayN = Math.max(1, DS.dayNumber(meta, viewDate));
  const isToday = DS.iso(viewDate) === DS.iso(DS.today());

  const goDay = (n: number) => setViewDate((d) => DS.addDays(d, n));
  const clearBox = (code: string) => {
    if (inputModeRef.current === 'draw') {
      const p = pads.current[code];
      if (p) p.clear();
    } else {
      setTypedTexts((prev) => ({ ...prev, [code]: '' }));
      handleText(code, '');
    }
  };
  const undo = () => {
    const p = pads.current[lastLang.current];
    if (p) p.undo();
  };
  const redo = () => {
    const p = pads.current[lastLang.current];
    if (p) p.redo();
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (showCal) return;
      const isTextArea = (e.target as HTMLElement)?.tagName === 'TEXTAREA';
      // Ctrl+M / ⌘+M: alterna modo em qualquer contexto
      if ((e.metaKey || e.ctrlKey) && e.key === 'm') {
        e.preventDefault();
        setInputMode((m) => m === 'draw' ? 'type' : 'draw');
        return;
      }
      // Bloquear demais atalhos quando textarea está focada
      if (isTextArea) return;
      if (e.key === 'ArrowRight') goDay(1);
      if (e.key === 'ArrowLeft') goDay(-1);
      if ((e.metaKey || e.ctrlKey) && e.key === 'z') {
        e.preventDefault();
        if (e.shiftKey) { redo(); } else { undo(); }
      }
      if ((e.metaKey || e.ctrlKey) && (e.key === 'y' || e.key === 'Y')) {
        e.preventDefault();
        redo();
      }
      if (!e.metaKey && !e.ctrlKey && !e.altKey) {
        if (e.key === 'e' || e.key === 'E') setTool((t) => ({ ...t, mode: t.mode === 'eraser' ? 'pen' : 'eraser' }));
        if (e.key === '1') setTool((t) => ({ ...t, mode: 'pen', color: INK_COLORS[0].v }));
        if (e.key === '2') setTool((t) => ({ ...t, mode: 'pen', color: INK_COLORS[1].v }));
        if (e.key === '3') setTool((t) => ({ ...t, mode: 'pen', color: INK_COLORS[2].v }));
        if (e.key === '4') setTool((t) => ({ ...t, mode: 'pen', color: INK_COLORS[3].v }));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showCal, effMode]);

  const dateLabel = `${DIA_PT[viewDate.getDay()]}, ${viewDate.getDate()} de ${MES_PT[viewDate.getMonth()]}`;

  const headerBtnStyle = {
    background: T.ctrlBg,
    border: `1px solid ${T.borderStrong}`,
    color: T.text,
    borderRadius: 12,
    width: 38,
    height: 38,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'background 0.2s',
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: T.appBg,
        fontFamily: "'Nunito', sans-serif",
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `linear-gradient(${T.grid} 1px, transparent 1px), linear-gradient(90deg, ${T.grid} 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        overflow: 'hidden',
      }}
    >
      {/* TOP BAR */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 20px 6px', flex: '0 0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: '0 0 auto' }}>
          <button onClick={() => goDay(-1)} style={headerBtnStyle} title="Dia anterior (←)">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => goDay(1)} style={headerBtnStyle} title="Próximo dia (→)">
            <ChevronRight size={20} />
          </button>
        </div>

        <div style={{ minWidth: 0, flex: '1 1 auto', marginLeft: 4 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <span
              style={{
                fontFamily: "'Fredoka', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(18px, 3.5vw, 25px)',
                color: T.text,
                textTransform: 'capitalize',
                lineHeight: 1.1,
              }}
            >
              {dateLabel}
            </span>
            {!isToday && (
              <button
                onClick={() => setViewDate(DS.today())}
                style={{
                  ...headerBtnStyle,
                  width: 'auto',
                  padding: '2px 12px',
                  fontSize: 12,
                  height: 24,
                  borderRadius: 6,
                  fontWeight: 700,
                }}
              >
                hoje
              </button>
            )}
          </div>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: T.dim, marginTop: 4 }}>
            DIA {dayN} · MÓDULO {M.n}/12 · LVL {M.lv}
          </div>
        </div>

        {/* Botões do Topo à Direita */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
          <button onClick={exportPNG} style={headerBtnStyle} title="Exportar dia como imagem (PNG)">
            <Camera size={18} />
          </button>
          <button
            onClick={() => setMode(mode === 'auto' ? 'light' : (mode === 'light' ? 'sepia' : (mode === 'sepia' ? 'dark' : 'auto')))}
            title={
              mode === 'auto'
                ? 'Tema: automático (claro 7h–19h, escuro à noite)'
                : mode === 'light'
                ? 'Tema: claro'
                : mode === 'sepia'
                ? 'Tema: sépia'
                : 'Tema: escuro'
            }
            style={{ ...headerBtnStyle, position: 'relative' }}
          >
            {mode === 'auto' ? '🌗' : mode === 'light' ? <Sun size={18} /> : mode === 'sepia' ? <Coffee size={18} /> : <Moon size={18} />}
            {mode === 'auto' && (
              <span
                style={{
                  position: 'absolute',
                  bottom: 2,
                  right: 2,
                  fontSize: 8,
                  fontFamily: "'Space Mono', monospace",
                  fontWeight: 800,
                  color: T.accent,
                  background: T.appBg,
                  borderRadius: 4,
                  padding: '0 2px',
                  lineHeight: 1.3,
                }}
              >
                A
              </span>
            )}
          </button>
          <button
            onClick={() => setShowCal(true)}
            title="Calendário, medalhas e progresso"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: T.panel,
              border: `1px solid ${T.border}`,
              borderRadius: 14,
              padding: '6px 14px',
              cursor: 'pointer',
              height: 38,
            }}
          >
            <span style={{ fontSize: 18 }}>🔥</span>
            <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: "'Fredoka', sans-serif",
                  fontWeight: 600,
                  fontSize: 18,
                  color: T.flame,
                  lineHeight: 1,
                }}
              >
                {streak}
              </span>
              <span style={{ fontSize: 8, color: T.dim, fontWeight: 800, letterSpacing: 0.5 }}>
                {streak === 1 ? 'DIA' : 'DIAS'}
              </span>
            </div>
            <span style={{ marginLeft: 4, fontFamily: "'Space Mono', monospace", fontSize: 10, color: T.accent, fontWeight: 700 }}>
              medalhas ▾
            </span>
          </button>
        </div>
      </div>

      {/* THEME BAND */}
      <div
        style={{
          margin: '4px 20px 10px',
          background: T.band,
          borderRadius: 14,
          border: `1px solid ${T.border}`,
          padding: '10px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: 18,
          flex: '0 0 auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRight: `1px solid ${T.border}`,
            paddingRight: 16,
            flex: '0 0 auto',
          }}
        >
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: T.accent, letterSpacing: 1 }}>
            SEMANA
          </span>
          <span
            style={{
              fontFamily: "'Fredoka', sans-serif",
              fontWeight: 600,
              fontSize: 28,
              color: T.text,
              lineHeight: 1,
            }}
          >
            {flat + 1}
            <span style={{ fontSize: 13, color: T.faint }}>/48</span>
          </span>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: 22, color: T.text }}>
              "{W.t}"
            </span>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: T.dim }}>{M.c}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 9, marginTop: 2 }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: T.accent, letterSpacing: 0.5, whiteSpace: 'nowrap' }}>
              NAS 4 ›
            </span>
            <span style={{ fontSize: 16, fontWeight: 700, color: T.text2 }}>{W.q}</span>
          </div>
        </div>
        <div style={{ flex: '0 0 auto', maxWidth: 260, fontSize: 11.5, color: T.dim, fontWeight: 600, lineHeight: 1.3, textAlign: 'right' }}>
          💡 {M.g}
        </div>
      </div>

      {/* GRADE DE QUADROS RESPONSIVA */}
      <div
        className="diary-grid"
        data-count={activeLangs.length}
        style={{ flex: 1, minHeight: 0, gap: 12, padding: '0 20px 84px' }}
        onPointerDown={(e) => {
          if (e.pointerType !== 'touch') return;
          swipeStart.current = e.clientX;
        }}
        onPointerUp={(e) => {
          if (e.pointerType !== 'touch') return;
          if (swipeStart.current === null) return;
          const dx = e.clientX - swipeStart.current;
          if (Math.abs(dx) > 60) {
            if (dx < 0) {
              goDay(1);
            } else {
              goDay(-1);
            }
          }
          swipeStart.current = null;
        }}
        onPointerCancel={() => { swipeStart.current = null; }}
      >
        {activeLangs.map((code) => (
          <WritingBox
            key={code}
            code={code}
            data={W.L[code as 'EN' | 'IT' | 'DE' | 'JP' | 'FR' | 'ES']!}
            T={T}
            paper={paper}
            registerCanvas={registerCanvas}
            onClearBox={clearBox}
            isActive={activeCanvas === code}
            suggestions={SUGGESTIONS[flat]?.[code as 'EN' | 'IT' | 'DE' | 'JP' | 'FR' | 'ES'] || []}
            inputMode={inputMode}
            typedText={typedTexts[code] || ''}
            onTextChange={(text) => {
              setTypedTexts((prev) => ({ ...prev, [code]: text }));
              handleText(code, text);
            }}
          />
        ))}
      </div>

      {/* BARRA DE FERRAMENTAS CENTRALIZADA E COMPACTA */}
      <div
        style={{
          position: 'fixed',
          left: '50%',
          bottom: 16,
          transform: 'translateX(-50%)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: T.mode === 'light' ? 'rgba(255,255,255,0.97)' : 'rgba(20,26,48,0.95)',
          border: `1px solid ${T.border}`,
          borderRadius: 16,
          padding: '6px 10px',
          boxShadow: '0 10px 36px rgba(0,0,0,0.4)',
          backdropFilter: 'blur(6px)',
          maxWidth: 'calc(100vw - 24px)',
          overflowX: 'auto',
        }}
      >
        {/* Grupo Cores */}
        <div style={{ display: 'flex', gap: 4, flexShrink: 0, opacity: inputMode === 'type' ? 0.35 : 1, pointerEvents: inputMode === 'type' ? 'none' : 'auto' }}>
          {INK_COLORS.map((c) => (
            <button
              key={c.id}
              onClick={() => setTool((t) => ({ ...t, mode: 'pen', color: c.v }))}
              title={c.label}
              style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                background: c.v,
                cursor: 'pointer',
                border: tool.mode === 'pen' && tool.color === c.v ? `3px solid ${T.accent}` : `2px solid ${T.borderStrong}`,
                flexShrink: 0,
              }}
            />
          ))}
        </div>
        <div style={{ width: 1, height: 20, background: T.border, flexShrink: 0 }} />

        {/* Grupo Caneta/Tamanho/Borracha/Desfazer/Refazer */}
        <div style={{ display: 'flex', gap: 3, background: T.ctrlBg, borderRadius: 10, padding: 2, flexShrink: 0, opacity: inputMode === 'type' ? 0.35 : 1, pointerEvents: inputMode === 'type' ? 'none' : 'auto' }}>
          {[
            { w: 'fina' as const, label: 'Fina', size: 3 },
            { w: 'grossa' as const, label: 'Grossa', size: 6 }
          ].map((item) => (
            <button
              key={item.w}
              onClick={() => setTool((t) => ({ ...t, width: item.w, mode: 'pen' }))}
              title={item.label}
              style={{
                background: tool.width === item.w && tool.mode === 'pen' ? T.ctrlHover : 'transparent',
                border: 'none',
                color: T.text,
                borderRadius: 8,
                width: 28,
                height: 28,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <span style={{ width: item.size, height: item.size, borderRadius: '50%', background: T.text }} />
            </button>
          ))}
          <button
            onClick={() => setTool((t) => ({ ...t, mode: t.mode === 'eraser' ? 'pen' : 'eraser' }))}
            title="Borracha (E)"
            style={{
              background: tool.mode === 'eraser' ? T.accent : 'transparent',
              border: 'none',
              color: tool.mode === 'eraser' ? '#0E1326' : T.text,
              borderRadius: 8,
              width: 28,
              height: 28,
              fontSize: 13,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Eraser size={14} />
          </button>
          <button
            onClick={undo}
            title="Desfazer (Ctrl+Z)"
            style={{
              background: 'transparent',
              border: 'none',
              color: T.text,
              borderRadius: 8,
              width: 28,
              height: 28,
              fontSize: 13,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Undo2 size={14} />
          </button>
          <button
            onClick={redo}
            title="Refazer (Ctrl+Shift+Z / Ctrl+Y)"
            style={{
              background: 'transparent',
              border: 'none',
              color: T.text,
              borderRadius: 8,
              width: 28,
              height: 28,
              fontSize: 13,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Redo2 size={14} />
          </button>
        </div>
        <div style={{ width: 1, height: 20, background: T.border, flexShrink: 0 }} />

        {/* Grupo Folha de Fundo */}
        <div style={{ display: 'flex', gap: 3, background: T.ctrlBg, borderRadius: 10, padding: 2, flexShrink: 0 }}>
          {[
            { p: 'pautado', label: 'Pautado', icon: <AlignJustify size={14} /> },
            { p: 'quadriculado', label: 'Quadriculado', icon: <Grid3X3 size={14} /> },
            { p: 'pontilhado', label: 'Pontilhado', icon: <MoreHorizontal size={14} /> },
            { p: 'cornell', label: 'Cornell Notes', icon: <Columns size={14} /> },
            { p: 'branco', label: 'Em branco', icon: <Square size={12} /> }
          ].map((item) => (
            <button
              key={item.p}
              onClick={() => setPaper(item.p)}
              title={item.label}
              style={{
                background: paper === item.p ? T.ctrlHover : 'transparent',
                border: 'none',
                color: T.text,
                borderRadius: 8,
                width: 28,
                height: 28,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {item.icon}
            </button>
          ))}
        </div>
        <div style={{ width: 1, height: 20, background: T.border, flexShrink: 0 }} />

        {/* Botão Rejeição Toque */}
        <button
          onClick={() => setPenOnly((v) => !v)}
          title={penOnly ? "Ignorar toques (modo apenas caneta ativa)" : "Aceitar caneta e toque"}
          style={{
            background: penOnly ? T.accent : T.ctrlBg,
            border: `1px solid ${T.borderStrong}`,
            color: penOnly ? '#0E1326' : T.text,
            borderRadius: 10,
            width: 32,
            height: 32,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'background 0.2s',
          }}
        >
          {penOnly ? <PenTool size={14} /> : <Smartphone size={14} />}
        </button>
        <div style={{ width: 1, height: 20, background: T.border, flexShrink: 0 }} />
        <button
          onClick={() => setInputMode((m) => m === 'draw' ? 'type' : 'draw')}
          title={inputMode === 'draw' ? 'Mudar para modo teclado (Ctrl+M)' : 'Mudar para modo caneta (Ctrl+M)'}
          style={{
            background: inputMode === 'type' ? T.accent : T.ctrlBg,
            border: `1px solid ${T.borderStrong}`,
            color: inputMode === 'type' ? '#0E1326' : T.text,
            borderRadius: 10,
            width: 32,
            height: 32,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'background 0.2s',
          }}
        >
          {inputMode === 'type' ? <Keyboard size={14} /> : <PenTool size={14} />}
        </button>
      </div>

      {quota && (
        <div
          style={{
            position: 'fixed',
            bottom: 74,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 120,
            background: '#7f1d1d',
            color: '#fff',
            padding: '8px 16px',
            borderRadius: 10,
            fontSize: 13,
            fontWeight: 700,
            boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
          }}
        >
          Memória cheia — use 💾 Backup e apague dias antigos no calendário.
        </div>
      )}

      <MedalToast medal={toast} />
      
      {showCal && (
        <ProgressModal
          meta={meta}
          viewDate={viewDate}
          T={T}
          onPick={(d) => {
            setViewDate(d);
            setShowCal(false);
          }}
          onClose={() => setShowCal(false)}
          onDeleteDay={deleteDay}
          activeLangs={activeLangs}
          onChangeActiveLangs={changeActiveLangs}
          onExport={exportBackup}
          onImport={handleImport}
          onClearHistory={clearAllHistory}
          gdriveClientId={gdriveClientId}
          onSaveClientId={saveClientId}
          gdriveToken={gdriveToken}
          onConnectGDrive={connectGDrive}
          onSyncGDrive={syncGDrive}
          onLoadGDrive={loadGDrive}
          reminderTime={reminderTime}
          onSaveReminderTime={setReminderTime}
          reminderEnabled={reminderEnabled}
          onToggleReminder={setReminderEnabled}
        />
      )}
    </div>
  );
}
export default App;
