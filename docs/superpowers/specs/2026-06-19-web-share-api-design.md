# Web Share API — Design Spec

**Data:** 2026-06-19

## Objetivo

Permitir que o usuário compartilhe o PNG exportado do dia usando o menu nativo de compartilhamento do sistema operacional (WhatsApp, e-mail, etc.), em vez de sempre forçar um download.

---

## Comportamento

- Ao clicar no botão de exportar PNG, o app tenta usar `navigator.share()` com o arquivo.
- Se o navegador suporta `navigator.share` com arquivos (`navigator.canShare({ files: [...] })` retorna `true`), o menu nativo de compartilhamento é exibido.
- Se o usuário cancela o share (rejeita a Promise), o app faz o download normalmente como fallback.
- Se o navegador não suporta Web Share (Firefox desktop, Safari < 15), o app faz o download normalmente — comportamento idêntico ao atual.
- Sem nova UI, sem novo botão, sem toast, sem indicador de estado.

---

## Implementação

### Arquivo alterado: `src/App.tsx`

A função `exportPNG` (linha ~448) é convertida de síncrona para `async` e o trecho final é substituído:

**Antes (linhas 470–473):**
```ts
const a = document.createElement('a');
a.href = off.toDataURL('image/png');
a.download = `diario-${DS.iso(viewRef.current)}.png`;
a.click();
```

**Depois:**
```ts
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
    } catch {
      // Usuário cancelou ou share falhou — fallback para download
    }
  }
}

// Fallback: download (comportamento original)
const a = document.createElement('a');
a.href = dataURL;
a.download = filename;
a.click();
```

### Por que `toDataURL` antes do `await`

`navigator.share()` exige um contexto de gesto do usuário (user gesture). Ao gerar o `dataURL` de forma síncrona antes do primeiro `await`, o valor já está disponível quando o share é chamado. O `fetch(dataURL)` converte o data URL para Blob sem sair da cadeia assíncrona iniciada pelo clique, preservando o contexto de gesto.

### TypeScript

`navigator.canShare` é opcional (não existe em todos os browsers) — o optional chaining `?.` garante segurança. O tipo `File` e `navigator.share` estão nas lib DOM nativas do TypeScript 4+.

---

## Fora de escopo

- Botão de share separado na toolbar — YAGNI
- Compartilhar texto/strokes — YAGNI; apenas o PNG exportado é compartilhado
- Feedback visual de "compartilhado com sucesso" — YAGNI

---

## Arquivos alterados

| Arquivo | Mudança |
|---|---|
| `src/App.tsx` | Converter `exportPNG` para `async`; substituir bloco de download por share com fallback (~10 linhas) |
