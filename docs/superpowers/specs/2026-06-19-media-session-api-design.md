# Media Session API — Design Spec

**Data:** 2026-06-19

## Objetivo

Exibir metadados do TTS (texto lido e idioma) na tela de bloqueio e no centro de mídia do sistema operacional, e disponibilizar botões de Play/Pause/Stop para controlar a fala sem precisar abrir o app.

---

## Comportamento

- Quando `speakText()` é chamado, o sistema operacional passa a mostrar o texto sendo lido como "título" e o nome do idioma como "artista" na lock screen / central de mídia.
- Os botões Play, Pause e Stop na lock screen controlam o `SpeechSynthesis` do navegador.
- O estado de reprodução (`playbackState`) é sincronizado automaticamente com os eventos do `SpeechSynthesisUtterance`.
- Em navegadores sem suporte (`'mediaSession' in navigator` falso): degradação silenciosa, sem erros, sem UI de aviso.

### Mapeamento de estados

| Evento do utterance | `playbackState` |
|---|---|
| `onstart` | `'playing'` |
| `onpause` | `'paused'` |
| `onresume` | `'playing'` |
| `onend` | `'none'` |
| `onerror` | `'none'` |

### Ação do handler → comportamento

| Ação | Chamada | `playbackState` resultante |
|---|---|---|
| `play` | `speechSynthesis.resume()` | `'playing'` |
| `pause` | `speechSynthesis.pause()` | `'paused'` |
| `stop` | `speechSynthesis.cancel()` | `'none'` |

---

## Implementação

### Arquivo alterado: `src/utils/speech.ts`

Após a linha `window.speechSynthesis.speak(utterance)`, adicionar o bloco de Media Session:

```ts
if ('mediaSession' in navigator) {
  const LANG_NAME: Record<string, string> = {
    EN: 'English', IT: 'Italiano', DE: 'Deutsch', JP: '日本語',
  };

  navigator.mediaSession.metadata = new MediaMetadata({
    title: cleanText,
    artist: LANG_NAME[langKey] ?? langKey,
  });

  navigator.mediaSession.setActionHandler('play', () => {
    window.speechSynthesis.resume();
    navigator.mediaSession.playbackState = 'playing';
  });
  navigator.mediaSession.setActionHandler('pause', () => {
    window.speechSynthesis.pause();
    navigator.mediaSession.playbackState = 'paused';
  });
  navigator.mediaSession.setActionHandler('stop', () => {
    window.speechSynthesis.cancel();
    navigator.mediaSession.playbackState = 'none';
  });

  utterance.onstart  = () => { navigator.mediaSession.playbackState = 'playing'; };
  utterance.onpause  = () => { navigator.mediaSession.playbackState = 'paused';  };
  utterance.onresume = () => { navigator.mediaSession.playbackState = 'playing'; };
  utterance.onend    = () => { navigator.mediaSession.playbackState = 'none';    };
  utterance.onerror  = () => { navigator.mediaSession.playbackState = 'none';    };
}
```

### Por que após `speak()` e não antes

Os action handlers precisam estar registrados enquanto a mídia está ativa. Registrar após `speak()` garante que o sistema operacional já tem a sessão iniciada antes de vincular os handlers.

### Sem artwork

Mantém o spec simples. A lock screen exibe título (texto) e artista (idioma) sem imagem de capa — suficiente para identificar o contexto.

---

## Fora de escopo

- Botões Anterior/Próximo para navegar entre frases — YAGNI
- Artwork (imagem de capa) na lock screen — YAGNI
- Modificações em `App.tsx` — todas as mudanças são em `speech.ts`

---

## Arquivos alterados

| Arquivo | Mudança |
|---|---|
| `src/utils/speech.ts` | Adicionar bloco Media Session após `speak()` (~25 linhas) |
