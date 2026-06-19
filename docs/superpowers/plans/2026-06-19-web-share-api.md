# Web Share API Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Substituir o download automático do PNG exportado pelo menu nativo de compartilhamento do sistema, com fallback para download quando Web Share não é suportado.

**Architecture:** A função `exportPNG` em `src/App.tsx` (linha ~448) é convertida de síncrona para `async`. Após compor o canvas, tenta `navigator.share()` com um `File`; se o usuário cancela (`AbortError`) não faz nada; se outro erro ou sem suporte, faz download via `<a>`. Sem novos arquivos, sem nova UI.

**Tech Stack:** React 18 + TypeScript 6, Web Share API (DOM nativa), Vite PWA

## Global Constraints

- Sem novos arquivos — alteração exclusivamente em `src/App.tsx`
- Sem nova UI (botão, ícone, toast, indicador de estado)
- Sem dependências npm adicionais
- `AbortError` (cancelamento pelo usuário) = não faz nada; outro erro = fallback para download
- Browsers sem suporte (Firefox desktop, Safari < 15): comportamento idêntico ao atual (download direto)
- TypeScript: usar tipos DOM nativos (`File`, `DOMException`, `navigator.share`) sem `@types` adicionais

---

### Task 1: Converter exportPNG para async com Web Share e fallback

**Files:**
- Modify: `src/App.tsx` — função `exportPNG` (linha ~448–474)

**Interfaces:**
- Consumes: nada de outros módulos
- Produces: nada (efeito colateral puro — share ou download)

- [ ] **Step 1: Localizar a função exportPNG**

Abra `src/App.tsx`. Procure a função:

```ts
const exportPNG = useCallback(() => {
```

Ela está em torno da linha 448. Identifique o bloco final que cria o `<a>` e chama `.click()` (linhas ~470–473):

```ts
const a = document.createElement('a');
a.href = off.toDataURL('image/png');
a.download = `diario-${DS.iso(viewRef.current)}.png`;
a.click();
```

- [ ] **Step 2: Substituir o bloco final e tornar a função async**

Substitua toda a declaração `exportPNG` pela versão abaixo. A composição do canvas (linhas 449–469) permanece idêntica — apenas o trecho final muda e o `useCallback` recebe `async`:

```ts
const exportPNG = useCallback(async () => {
  const firstEl = canvasEls.current['EN'];
  if (!firstEl) return;
  const cw = firstEl.width, ch = firstEl.height;
  const pad = 20;
  const off = document.createElement('canvas');
  off.width = cw * 2 + pad * 3;
  off.height = ch * 2 + pad * 3;
  const ctx = off.getContext('2d');
  if (!ctx) return;
  ctx.fillStyle = T.mode === 'dark' ? '#0E1326' : '#E9EEF7';
  ctx.fillRect(0, 0, off.width, off.height);
  DS.LANGS.forEach((code, i) => {
    const el = canvasEls.current[code];
    if (!el) return;
    const col = i % 2, row = Math.floor(i / 2);
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
```

> **Atenção:** o `dataURL` é gerado com `off.toDataURL()` de forma síncrona **antes** do primeiro `await`. Isso preserva o contexto de gesto do usuário (user gesture) exigido por `navigator.share()` em alguns browsers.

- [ ] **Step 3: Verificar que TypeScript compila sem erros**

Execute no terminal (dentro de `E:/cursos/diariopoliglota`):

```bash
npx tsc --noEmit
```

Saída esperada: nenhuma linha de erro (saída vazia ou apenas warnings preexistentes).

- [ ] **Step 4: Testar no Chrome desktop**

```bash
npm run dev
```

Abra `http://localhost:5173` no Chrome. Clique no botão de exportar PNG (ícone de câmera na toolbar superior). O que deve acontecer:

- **Chrome desktop:** o menu nativo de compartilhamento do Windows/macOS abre com o arquivo PNG. Escolha uma opção ou cancele — ao cancelar, nada acontece (sem download automático).

- [ ] **Step 5: Testar fallback no Firefox**

Abra `http://localhost:5173` no Firefox. Clique no botão de exportar PNG. O que deve acontecer:

- **Firefox desktop:** como `navigator.share` não existe, o app faz o download direto do arquivo `diario-YYYY-MM-DD.png` — comportamento idêntico ao anterior.

- [ ] **Step 6: Commit**

```bash
git add src/App.tsx
git commit -m "Feat: usar Web Share API para compartilhar PNG exportado"
```
