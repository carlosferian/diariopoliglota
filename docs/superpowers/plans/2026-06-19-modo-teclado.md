# Modo Teclado — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Adicionar modo de entrada por teclado (físico e virtual) como alternativa global à caneta, sem apagar dados existentes ao trocar de modo.

**Architecture:** Três arquivos em sequência: DiaryStore recebe `saveText`/`loadText`; WritingBox ganha render condicional canvas/textarea; App.tsx orquestra estado global, ciclo de vida reativo do InkPad via `registerCanvas` e botão de toggle na toolbar.

**Tech Stack:** React 18, TypeScript, IndexedDB (via DiaryStore existente), lucide-react

## Global Constraints

- `inputMode: 'draw' | 'type'` é global — todos os 4 idiomas trocam juntos
- Chave IndexedDB para texto: `diary_text_<isoStr>_<lang>` (mesmo `STORE_NAME` já existente — backup automático via `dbGetAll`)
- Trocar de modo não apaga dados: traços e texto são independentes
- Textarea: `fontSize: 16` (evita zoom automático no iOS), `background: transparent`, `border: none`, `outline: none`
- Fonte da textarea: `'Zen Maru Gothic'` para JP, `'Nunito'` para EN/IT/DE — igual aos exemplos de sugestões
- Cor do texto: `t.ink` do `LANG_THEME` do idioma
- Em modo teclado: grupos de cores/caneta/borracha/desfazer ficam com `opacity: 0.35` e `pointerEvents: 'none'`
- Atalhos de teclado ('1','2','3','4','e', setas) NÃO devem disparar quando textarea está focada
- `Ctrl+M` / `⌘+M` alterna o modo em qualquer contexto (incluindo com textarea focada)
- `npx tsc --noEmit` deve passar sem erros após cada task

---

## Task 1: DiaryStore — storage de texto

**Files:**
- Modify: `src/services/DiaryStore.ts`

**Interfaces:**
- Produces:
  - `textKey(isoStr: string, lang: string): string`
  - `loadText(isoStr: string, lang: string): Promise<string>`
  - `saveText(isoStr: string, lang: string, text: string): Promise<boolean>`

- [ ] **Step 1: Adicionar `textKey`, `loadText` e `saveText` em `src/services/DiaryStore.ts`**

Adicionar o bloco abaixo logo após a função `saveInkRaw` (linha ~177), antes de `getMeta`:

```ts
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
```

- [ ] **Step 2: Verificar TypeScript**

```bash
npx tsc --noEmit
```

Esperado: sem erros.

- [ ] **Step 3: Commit**

```bash
git add src/services/DiaryStore.ts
git commit -m "Feat: adicionar saveText/loadText ao DiaryStore para modo teclado"
```

---

## Task 2: WritingBox — renderização condicional canvas/textarea

**Files:**
- Modify: `src/components/WritingBox.tsx`

**Interfaces:**
- Consumes: nenhum de Task 1 (WritingBox não usa DiaryStore diretamente)
- Produces: props adicionais `inputMode: 'draw' | 'type'`, `typedText: string`, `onTextChange: (text: string) => void`

- [ ] **Step 1: Adicionar os três novos props à interface `WritingBoxProps`**

Localizar a interface `WritingBoxProps` em `src/components/WritingBox.tsx` (linha ~44) e substituir pela versão abaixo (campos novos no final):

```ts
interface WritingBoxProps {
  code: string;
  data: LanguagePrompt;
  T: ThemeColors;
  paper: string;
  registerCanvas: (code: string, el: HTMLCanvasElement | null) => void;
  onClearBox: (code: string) => void;
  isActive: boolean;
  suggestions: string[];
  inputMode: 'draw' | 'type';
  typedText: string;
  onTextChange: (text: string) => void;
}
```

- [ ] **Step 2: Adicionar os novos props na desestruturação do componente**

Localizar `export const WritingBox: React.FC<WritingBoxProps> = ({` (linha ~84) e atualizar a desestruturação:

```ts
export const WritingBox: React.FC<WritingBoxProps> = ({
  code,
  data,
  T,
  paper,
  registerCanvas,
  onClearBox,
  isActive,
  suggestions,
  inputMode,
  typedText,
  onTextChange,
}) => {
```

- [ ] **Step 3: Substituir a área do canvas pelo render condicional**

Localizar o bloco `{/* Área do Canvas */}` (linha ~377) — atualmente:

```tsx
{/* Área do Canvas */}
<div
  style={{
    position: 'relative',
    flex: 1,
    minHeight: 0,
    margin: '8px 12px 12px',
    borderRadius: 12,
    backgroundColor: T.cream,
    overflow: 'hidden',
    boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.05)',
    ...guideStyle(code, t, paper),
  }}
>
  <canvas
    ref={(el) => registerCanvas(code, el)}
    style={{
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      cursor: 'crosshair',
    }}
  />
</div>
```

Substituir por:

```tsx
{/* Área de escrita */}
<div
  style={{
    position: 'relative',
    flex: 1,
    minHeight: 0,
    margin: '8px 12px 12px',
    borderRadius: 12,
    backgroundColor: T.cream,
    overflow: 'hidden',
    boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.05)',
    ...guideStyle(code, t, paper),
  }}
>
  {inputMode === 'draw' ? (
    <canvas
      ref={(el) => registerCanvas(code, el)}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        cursor: 'crosshair',
      }}
    />
  ) : (
    <textarea
      value={typedText}
      onChange={(e) => onTextChange(e.target.value)}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        background: 'transparent',
        border: 'none',
        outline: 'none',
        resize: 'none',
        padding: '12px',
        fontFamily: jp ? "'Zen Maru Gothic', sans-serif" : "'Nunito', sans-serif",
        fontSize: 16,
        fontWeight: 600,
        color: t.ink,
        lineHeight: 1.6,
        boxSizing: 'border-box',
      }}
      placeholder="Escreva aqui…"
      spellCheck={false}
    />
  )}
</div>
```

- [ ] **Step 4: Verificar TypeScript**

```bash
npx tsc --noEmit
```

Esperado: erros em `src/App.tsx` por causa dos novos props obrigatórios ainda não passados — isso é esperado e será corrigido na Task 3. `WritingBox.tsx` em si não deve ter erros.

- [ ] **Step 5: Commit**

```bash
git add src/components/WritingBox.tsx
git commit -m "Feat: WritingBox renderiza textarea transparente em modo teclado"
```

---

## Task 3: App.tsx — integração completa

**Files:**
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes (Task 1): `DS.saveText`, `DS.loadText`
- Consumes (Task 2): props `inputMode`, `typedText`, `onTextChange` de `WritingBox`

- [ ] **Step 1: Adicionar `Keyboard` ao import do lucide-react**

Localizar a linha de import do lucide-react no topo do arquivo (linha ~2) e adicionar `Keyboard`:

```ts
import { 
  ChevronLeft, ChevronRight, Camera, Sun, Moon, Coffee, Columns, MoreHorizontal,
  Undo2, Redo2, AlignJustify, Square, Grid3X3, PenTool, Smartphone, Eraser, Keyboard
} from 'lucide-react';
```

- [ ] **Step 2: Adicionar estados `inputMode` e `typedTexts`**

Localizar a linha `const [activeCanvas, setActiveCanvas] = useState<string | null>(null);` (linha ~69) e adicionar logo após:

```ts
const [inputMode, setInputMode] = useState<'draw' | 'type'>(
  () => (localStorage.getItem('diary_inputMode') as 'draw' | 'type') || 'draw'
);
const [typedTexts, setTypedTexts] = useState<Record<string, string>>(
  { EN: '', IT: '', DE: '', JP: '' }
);
```

- [ ] **Step 3: Adicionar `toolRef`, `inputModeRef` e persistência de `inputMode`**

Localizar `const penOnlyRef = useRef(penOnly);` (linha ~231) e adicionar logo após:

```ts
const toolRef = useRef(tool);
const inputModeRef = useRef(inputMode);
```

Localizar o bloco de `useEffect` de persistência (após `useEffect(() => { localStorage.setItem('diary_penOnly'...`) e adicionar três novos efeitos:

```ts
useEffect(() => { toolRef.current = tool; }, [tool]);
useEffect(() => { inputModeRef.current = inputMode; }, [inputMode]);
useEffect(() => { localStorage.setItem('diary_inputMode', inputMode); }, [inputMode]);
```

- [ ] **Step 4: Refatorar `registerCanvas` para criar/destruir InkPad reativamente**

Localizar o `registerCanvas` atual (linha ~252):

```ts
const registerCanvas = useCallback((code: string, el: HTMLCanvasElement | null) => {
  if (el) canvasEls.current[code] = el;
}, []);
```

Substituir por:

```ts
const registerCanvas = useCallback((code: string, el: HTMLCanvasElement | null) => {
  if (el) {
    canvasEls.current[code] = el;
    if (pads.current[code]) pads.current[code]!.destroy();
    pads.current[code] = new InkPad(el, {
      onChange: (s) => handleInk(code, s),
      penOnly: () => penOnlyRef.current,
      onActive: (active) => setActiveCanvas(active ? code : null),
    });
    pads.current[code]!.setTool(toolRef.current);
    DS.loadInk(DS.iso(viewRef.current), code).then((s) => pads.current[code]?.load(s));
  } else {
    canvasEls.current[code] = null;
    pads.current[code]?.destroy();
    pads.current[code] = null;
  }
}, [handleInk]);
```

Nota: `handleInk` já existe e está definido logo abaixo. O `toolRef` foi adicionado no Step 3. `canvasEls.current[code] = null` é necessário para que `exportPNG` não use um canvas desmontado.

- [ ] **Step 5: Adicionar `handleText` callback**

Localizar o `handleInk` callback (linha ~256) e adicionar `handleText` logo após:

```ts
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
```

- [ ] **Step 6: Atualizar `clearBox` para lidar com modo teclado**

Localizar `const clearBox = (code: string) => {` (linha ~478) e substituir por:

```ts
const clearBox = (code: string) => {
  if (inputModeRef.current === 'draw') {
    const p = pads.current[code];
    if (p) p.clear();
  } else {
    setTypedTexts((prev) => ({ ...prev, [code]: '' }));
    handleText(code, '');
  }
};
```

- [ ] **Step 7: Atualizar o `useEffect` de inicialização**

Localizar o grande `useEffect(() => { ... }, [])` (linha ~412) que cria InkPads e carrega dados. Substituir por:

```ts
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
```

Nota: a criação dos InkPads foi movida para `registerCanvas` (Step 4). O carregamento de traços também ocorre dentro de `registerCanvas` quando o canvas monta. Este efeito agora cuida apenas da migração e dos textos iniciais.

- [ ] **Step 8: Atualizar o `useEffect` de mudança de dia para carregar textos**

Localizar `useEffect(() => { ... }, [viewDate])` (linha ~446) e substituir por:

```ts
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
```

- [ ] **Step 9: Atualizar o handler de atalhos de teclado**

Localizar `useEffect(() => { const onKey = ...`, [showCal])` (linha ~491) e substituir o corpo de `onKey` por:

```ts
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
```

- [ ] **Step 10: Desabilitar controles de caneta na toolbar em modo teclado**

Localizar o comentário `{/* Grupo Cores */}` na toolbar (linha ~787) e adicionar `opacity` e `pointerEvents` condicionais na `<div>` envolvente:

```tsx
{/* Grupo Cores */}
<div style={{ display: 'flex', gap: 4, flexShrink: 0, opacity: inputMode === 'type' ? 0.35 : 1, pointerEvents: inputMode === 'type' ? 'none' : 'auto' }}>
  {INK_COLORS.map((c) => (
    ...
  ))}
</div>
```

Localizar o comentário `{/* Grupo Caneta/Tamanho/Borracha/Desfazer/Refazer */}` (linha ~808) e adicionar os mesmos atributos na `<div>` envolvente:

```tsx
<div style={{ display: 'flex', gap: 3, background: T.ctrlBg, borderRadius: 10, padding: 2, flexShrink: 0, opacity: inputMode === 'type' ? 0.35 : 1, pointerEvents: inputMode === 'type' ? 'none' : 'auto' }}>
  ...
</div>
```

- [ ] **Step 11: Adicionar botão de toggle de modo na toolbar**

Localizar o botão `setPenOnly` (comentário `{/* Botão Rejeição Toque */}`, linha ~926) e adicionar logo após ele (antes do `</div>` de fechamento da toolbar):

```tsx
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
```

- [ ] **Step 12: Passar novos props para `WritingBox` no render da grade**

Localizar o bloco `{DS.LANGS.map((code) => (<WritingBox .../>))}` (linha ~751) e substituir por:

```tsx
{DS.LANGS.map((code) => (
  <WritingBox
    key={code}
    code={code}
    data={W.L[code as 'EN' | 'IT' | 'DE' | 'JP']}
    T={T}
    paper={paper}
    registerCanvas={registerCanvas}
    onClearBox={clearBox}
    isActive={activeCanvas === code}
    suggestions={SUGGESTIONS[flat]?.[code as 'EN' | 'IT' | 'DE' | 'JP'] || []}
    inputMode={inputMode}
    typedText={typedTexts[code] || ''}
    onTextChange={(text) => {
      setTypedTexts((prev) => ({ ...prev, [code]: text }));
      handleText(code, text);
    }}
  />
))}
```

- [ ] **Step 13: Verificar TypeScript**

```bash
npx tsc --noEmit
```

Esperado: sem erros.

- [ ] **Step 14: Testar manualmente no browser**

```bash
npm run dev
```

Verificar:
1. App abre em modo caneta (padrão); ícone de teclado visível na toolbar
2. Clicar no ícone de teclado → todos os 4 cards mostram textarea com papel visível por baixo
3. Digitar texto em um card → mudar de dia e voltar → texto persiste
4. Trocar para modo caneta → desenhar → traços persistem independentemente do texto digitado
5. Botão 🗑️ em modo teclado limpa o texto mas não os traços; em modo caneta limpa traços mas não o texto
6. `Ctrl+M` alterna o modo
7. Digitar '1', '2', 'e' na textarea NÃO muda ferramentas de caneta; setas NÃO mudam o dia
8. Recarregar a página → modo persiste
9. Texto digitado conta para sequência/medalhas (dia marcado como feito)
10. Cores/caneta/borracha/desfazer aparecem desbotados em modo teclado e não respondem a cliques

- [ ] **Step 15: Commit**

```bash
git add src/App.tsx
git commit -m "Feat: modo teclado global com toggle na toolbar, Ctrl+M e storage independente"
```
