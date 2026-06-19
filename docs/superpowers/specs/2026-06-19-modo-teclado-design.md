# Modo Teclado — Design Spec

**Data:** 2026-06-19

## Objetivo

Permitir que o usuário escreva no diário usando teclado físico ou virtual (celular/tablet) como alternativa à caneta. O modo é global (todos os 4 idiomas trocam juntos) e os dois modos de entrada coexistem: traços e texto são armazenados de forma independente por dia/idioma, e trocar de modo não apaga nada.

---

## Arquitetura

### Estado global (`App.tsx`)

| Estado | Tipo | Persistência |
|---|---|---|
| `inputMode` | `'draw' \| 'type'` | `localStorage('diary_inputMode')` |
| `typedTexts` | `{ EN: string, IT: string, DE: string, JP: string }` | memória; fonte de verdade = IndexedDB |

`typedTexts` é carregado do IndexedDB ao montar o app e sempre que `viewDate` muda.

### Storage (`DiaryStore.ts`)

**Nova função de chave:**
```ts
export const textKey = (isoStr: string, lang: string) =>
  `diary_text_${isoStr}_${lang}`;
```

**Novas funções:**
```ts
export async function saveText(isoStr: string, lang: string, text: string): Promise<boolean>
export function loadText(isoStr: string, lang: string): Promise<string>
```

`saveText` segue a mesma lógica de `saveInk` para atualizar `DiaryMeta.days`:
- Texto não-vazio (após `trim()`) → adiciona `lang` ao array do dia
- Texto vazio → remove `lang` do array (somente se não houver traços para aquele lang no mesmo dia)

**Atualização de `dayHasInk`:** renomeada internamente para `dayHasContent` — um dia/idioma conta como feito se tiver traços OU texto. A função pública `dayHasInk` é mantida para compatibilidade de interface, mas delega para a nova lógica.

**Backup/importação:** sem mudança — `dbGetAll()` já captura `diary_text_*` no mesmo `STORE_NAME`.

---

## Componente `WritingBox`

### Novos props

```ts
inputMode: 'draw' | 'type';
typedText: string;
onTextChange: (text: string) => void;
```

### Modo `'draw'` (comportamento atual)

Renderiza o `<canvas>` exatamente como hoje. Sem mudança.

### Modo `'type'`

O `<canvas>` **não é renderizado**. No mesmo contêiner que exibe o `guideStyle` (background CSS do papel), aparece uma `<textarea>`:

```tsx
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
    fontSize: 16,          // ≥16px evita zoom automático no iOS
    fontWeight: 600,
    color: t.ink,          // mesma cor de tinta do tema do idioma
    lineHeight: 1.6,
    boxSizing: 'border-box',
  }}
  placeholder="Escreva aqui…"
  spellCheck={false}
/>
```

O papel (pautado, quadriculado, pontilhado, cornell) continua visível por baixo da textarea transparente.

### Header do card

Sem mudança. O botão de limpar (`Trash2`) em modo teclado limpa o `typedText` (chama `onTextChange('')`).

---

## Toolbar (`App.tsx`)

### Botão de toggle de modo

Adicionado à barra inferior, ao lado do botão de rejeição de toque (`PenTool`/`Smartphone`):

```tsx
<button
  onClick={() => setInputMode(m => m === 'draw' ? 'type' : 'draw')}
  title={inputMode === 'draw' ? 'Modo caneta (clique para teclado)' : 'Modo teclado (clique para caneta)'}
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

### Controles de caneta em modo teclado

Os grupos de cores, espessura, borracha, desfazer e refazer ficam com `opacity: 0.35` e `pointerEvents: 'none'` — permanecem no DOM para não alterar o layout, mas não são clicáveis.

---

## Ciclo de vida do InkPad

`registerCanvas` passa a ser o único ponto de criação e destruição de InkPads:

```ts
const registerCanvas = useCallback((code: string, el: HTMLCanvasElement | null) => {
  if (el) {
    if (pads.current[code]) pads.current[code]!.destroy();
    pads.current[code] = new InkPad(el, {
      onChange: (s) => handleInk(code, s),
      penOnly: () => penOnlyRef.current,
      onActive: (active) => setActiveCanvas(active ? code : null),
    });
    pads.current[code]!.setTool(toolRef.current);
    DS.loadInk(DS.iso(viewRef.current), code).then((s) => pads.current[code]?.load(s));
  } else {
    pads.current[code]?.destroy();
    pads.current[code] = null;
  }
}, [handleInk]);
```

`toolRef` é um `useRef<InkPadTool>` que espelha o estado `tool` via `useEffect`, evitando closure stale.

O `useEffect` de inicialização original mantém apenas: migração de dados legados (`migrateLegacyData`) e carregamento inicial de `typedTexts`.

### Troca de modo

- **`draw → type`**: canvas desmonta → React chama `registerCanvas(code, null)` → InkPad destruído. Não afeta traços no IndexedDB.
- **`type → draw`**: canvas monta → `registerCanvas(code, el)` cria novo InkPad → carrega traços do IndexedDB. Não afeta texto no IndexedDB.

---

## Mudança de dia

Quando `viewDate` muda, além do carregamento atual de traços nos InkPads, carrega também os textos:

```ts
useEffect(() => {
  const isoStr = DS.iso(viewDate);
  const texts: Record<string, string> = {};
  Promise.all(
    DS.LANGS.map(async (code) => {
      texts[code] = await DS.loadText(isoStr, code);
    })
  ).then(() => setTypedTexts(texts as typeof typedTexts));
}, [viewDate]);
```

---

## Atalho de teclado

`Ctrl+M` (ou `⌘+M`) alterna o modo globalmente. Adicionado ao handler de `keydown` existente, mas **somente quando `inputMode === 'draw'`** para evitar capturar o atalho enquanto o usuário digita.

---

## Progresso e medalhas

Sem mudança na lógica de medalhas. `handleText` segue o mesmo padrão de `handleInk`: após salvar, relê `DiaryMeta`, calcula estatísticas e emite toast se nova medalha for conquistada.

---

## Arquivos alterados

| Arquivo | Mudança |
|---|---|
| `src/services/DiaryStore.ts` | `textKey`, `saveText`, `loadText`; atualização de `dayHasInk` para contar texto |
| `src/components/WritingBox.tsx` | Props `inputMode`, `typedText`, `onTextChange`; render condicional canvas/textarea |
| `src/App.tsx` | Estado `inputMode` + `typedTexts`; `registerCanvas` reativo; `toolRef`; `handleText`; toggle na toolbar; carregamento de textos ao trocar de dia |

---

## Fora de escopo

- Formatação rica (negrito, listas) — YAGNI
- Contador de palavras/caracteres — YAGNI
- Exportação PNG de texto digitado — o canvas não existe em modo teclado; exportar PNG só exporta as caixas em modo caneta
- OCR / conversão de traços para texto — funcionalidade separada
