# File System Access API Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Substituir o download forçado de backup e o `<input type="file">` oculto por diálogos nativos do SO usando File System Access API, com fallback transparente para browsers sem suporte.

**Architecture:** Dois arquivos alterados independentemente. `exportBackup` em `src/App.tsx` ganha o caminho FSA com `showSaveFilePicker` antes do fallback de download. O botão Restaurar em `src/components/ProgressModal.tsx` troca de `<label>` wrapping oculto para `<button>` + `useRef` + `showOpenFilePicker`. O `handleImport(file: File)` em App.tsx não muda — continua recebendo um `File`.

**Tech Stack:** React 18 + TypeScript 6, File System Access API (DOM nativa), Vite PWA

## Global Constraints

- Sem novos arquivos
- Sem nova UI visível — os diálogos são nativos do SO
- Sem dependências npm adicionais
- `AbortError` (cancelamento pelo usuário) = não faz nada — nem FSA nem download
- Browsers sem suporte (Firefox, Safari): fallback transparente para comportamento atual
- TypeScript: usar `(window as any).showSaveFilePicker` / `(window as any).showOpenFilePicker` para evitar erros de tipo (a API não está nas lib DOM do TS 6 ainda)
- `handleImport(file: File)` em App.tsx não muda de assinatura

---

### Task 1: FSA no exportBackup (src/App.tsx)

**Files:**
- Modify: `src/App.tsx` — função `exportBackup` (linha ~367–391)

**Interfaces:**
- Consumes: `DS.dbGetAll()`, `DS.iso()`, `DS.today()`, `localStorage`
- Produces: nada (efeito colateral puro)

- [ ] **Step 1: Localizar exportBackup**

Abra `src/App.tsx`. Procure `const exportBackup = useCallback(async () => {` (linha ~367). A função termina em `}, []);` (linha ~391). Identifique o bloco final que cria o `blob` e faz o download (linhas ~382–390):

```ts
const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
const a = document.createElement('a');
a.href = URL.createObjectURL(blob);
a.download = `diario-poliglota-backup-${DS.iso(DS.today())}.json`;
a.click();
URL.revokeObjectURL(a.href);
```

- [ ] **Step 2: Substituir o bloco final por FSA com fallback**

Substitua o trecho do `try { ... } catch (err) { console.error(...) }` de `exportBackup` pela versão abaixo. O código antes de `const blob` (coleta de meta/strokes/settings) permanece idêntico:

```ts
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
```

- [ ] **Step 3: Verificar TypeScript**

```bash
npx tsc --noEmit
```

Saída esperada: nenhum erro.

- [ ] **Step 4: Testar no Chrome**

```bash
npm run dev
```

Abra `http://localhost:5173`. Clique em Progresso (ícone de troféu) → botão Backup. Deve abrir o diálogo nativo de salvar arquivo do SO com o nome sugerido `diario-poliglota-backup-YYYY-MM-DD.json`. Cancele — nada deve acontecer. Salve — o arquivo deve ser gravado no local escolhido.

- [ ] **Step 5: Testar fallback no Firefox**

Abra `http://localhost:5173` no Firefox. Clique Backup. Deve fazer o download automático como antes (sem diálogo FSA).

- [ ] **Step 6: Commit**

```bash
git add src/App.tsx
git commit -m "Feat: usar File System Access API para salvar backup com diálogo nativo"
```

---

### Task 2: FSA no botão Restaurar (src/components/ProgressModal.tsx)

**Files:**
- Modify: `src/components/ProgressModal.tsx` — importação, ref, handler e JSX do botão Restaurar

**Interfaces:**
- Consumes: `onImport: (file: File) => void` (prop existente, sem mudança)
- Produces: nada (efeito colateral puro)

- [ ] **Step 1: Atualizar importação do React**

Na linha 1 de `src/components/ProgressModal.tsx`, adicione `useRef` à importação existente:

**Antes:**
```ts
import React, { useState } from 'react';
```

**Depois:**
```ts
import React, { useState, useRef } from 'react';
```

- [ ] **Step 2: Adicionar ref e handler no topo do componente**

Após a linha `const [clientIdInput, setClientIdInput] = useState(gdriveClientId);` (linha ~74), adicione:

```ts
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleRestoreClick = async () => {
    if ('showOpenFilePicker' in window) {
      try {
        const [handle] = await (window as any).showOpenFilePicker({
          types: [{ description: 'JSON Backup', accept: { 'application/json': ['.json'] } }],
          multiple: false,
        });
        const file = await (handle as any).getFile();
        onImport(file);
        onClose();
      } catch (err) {
        if ((err as DOMException).name !== 'AbortError') {
          fileInputRef.current?.click();
        }
        // AbortError: usuário cancelou — não faz nada
      }
      return;
    }
    fileInputRef.current?.click();
  };
```

- [ ] **Step 3: Substituir o `<label>` pelo `<button>` + `<input ref>`**

Localize o `<label>` do Restaurar (linha ~578–609):

```tsx
<label
  style={{
    flex: 1,
    background: T.ctrlBg,
    border: `1px solid ${T.borderStrong}`,
    color: T.text,
    borderRadius: 12,
    padding: '10px 8px',
    fontWeight: 800,
    cursor: 'pointer',
    fontFamily: "'Nunito', sans-serif",
    fontSize: 13,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  }}
>
  <Upload size={14} /> Restaurar
  <input
    type="file"
    accept=".json"
    style={{ display: 'none' }}
    onChange={(e) => {
      if (e.target.files && e.target.files[0]) {
        onImport(e.target.files[0]);
        onClose();
      }
    }}
  />
</label>
```

Substitua por:

```tsx
<button
  onClick={handleRestoreClick}
  style={{
    flex: 1,
    background: T.ctrlBg,
    border: `1px solid ${T.borderStrong}`,
    color: T.text,
    borderRadius: 12,
    padding: '10px 8px',
    fontWeight: 800,
    cursor: 'pointer',
    fontFamily: "'Nunito', sans-serif",
    fontSize: 13,
    textAlign: 'center' as const,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  }}
>
  <Upload size={14} /> Restaurar
</button>
<input
  ref={fileInputRef}
  type="file"
  accept=".json"
  style={{ display: 'none' }}
  onChange={(e) => {
    if (e.target.files && e.target.files[0]) {
      onImport(e.target.files[0]);
      onClose();
    }
  }}
/>
```

- [ ] **Step 4: Verificar TypeScript**

```bash
npx tsc --noEmit
```

Saída esperada: nenhum erro.

- [ ] **Step 5: Testar no Chrome**

Abra `http://localhost:5173`. Abra o modal de Progresso. Clique no botão Restaurar. Deve abrir o diálogo nativo de abrir arquivo do SO filtrando `.json`. Cancele — nada deve acontecer. Selecione um backup válido — deve restaurar normalmente e fechar o modal.

- [ ] **Step 6: Testar fallback no Firefox**

Abra `http://localhost:5173` no Firefox. Clique Restaurar. Deve abrir o seletor de arquivo nativo do Firefox (via `<input type="file">`) — comportamento idêntico ao atual.

- [ ] **Step 7: Commit**

```bash
git add src/components/ProgressModal.tsx
git commit -m "Feat: usar File System Access API para restaurar backup com diálogo nativo"
```
