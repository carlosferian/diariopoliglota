# File System Access API — Design Spec

**Data:** 2026-06-19

## Objetivo

Substituir o download forçado do backup e o `<input type="file">` oculto por diálogos nativos do sistema operacional (salvar e abrir arquivo), usando a File System Access API, com fallback transparente para browsers sem suporte.

---

## Comportamento

### Export (Salvar Backup)

- O botão de exportar backup chama `showSaveFilePicker()` com nome sugerido `diario-poliglota-backup-YYYY-MM-DD.json`.
- Se o usuário cancela (`AbortError`): não faz nada.
- Se outro erro ou browser sem suporte (`'showSaveFilePicker' in window` falso): faz o download automático via `<a>` — comportamento idêntico ao atual.
- Suporte: Chrome 86+, Edge 86+. Firefox e Safari: fallback para download.

### Import (Restaurar Backup)

- O botão "Restaurar" passa a usar `showOpenFilePicker()` quando disponível, em vez do `<label>/<input type="file">` oculto.
- Se o usuário cancela (`AbortError`): não faz nada.
- Se browser sem suporte: dispara `inputRef.current.click()` para abrir o seletor nativo via `<input type="file">` — comportamento idêntico ao atual.
- O `onImport(file)` existente em App.tsx não muda — continua recebendo um `File` objeto.

---

## Implementação

### `src/App.tsx` — função `exportBackup`

Converte de síncrona para `async`. Substitui apenas o bloco final de criação/download do arquivo:

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

> A função já era `async` por causa do `await DS.dbGetAll()`. A assinatura do `useCallback` não muda.

### `src/components/ProgressModal.tsx` — botão Restaurar

**Mudança:** Converter o `<label>` que wraps o `<input type="file">` oculto em um `<button>` com `useRef`:

```tsx
// 1. Adicionar ref no topo do componente (junto com outros hooks)
const fileInputRef = useRef<HTMLInputElement>(null);

// 2. Handler de clique
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
        fileInputRef.current?.click(); // fallback para seletor nativo
      }
      // AbortError: usuário cancelou — não faz nada
    }
    return;
  }
  fileInputRef.current?.click(); // sem suporte — usa seletor nativo
};

// 3. JSX: substituir <label> por <button> + <input> com ref
<button onClick={handleRestoreClick} style={/* mesmos estilos do <label> atual */}>
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

O `useRef` requer `import { useRef } from 'react'` — verificar se já está importado no arquivo.

---

## Fora de escopo

- Exportação incremental / append a arquivo existente — YAGNI
- Lembrança do último diretório usado (`FileSystemDirectoryHandle`) — YAGNI
- Modificações em `handleImport` (App.tsx) — sem mudanças; continua recebendo `File`

---

## Arquivos alterados

| Arquivo | Mudança |
|---|---|
| `src/App.tsx` | `exportBackup`: adicionar caminho FSA com fallback para download (~15 linhas substituídas) |
| `src/components/ProgressModal.tsx` | Botão Restaurar: `<label>` → `<button>` + `useRef` + `handleRestoreClick` (~20 linhas alteradas) |
