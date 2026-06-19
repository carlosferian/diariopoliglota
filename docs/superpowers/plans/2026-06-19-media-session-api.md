# Media Session API Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Exibir metadados do TTS na lock screen e central de mídia do SO, com botões Play/Pause/Stop para controlar a fala sem abrir o app.

**Architecture:** Toda a lógica fica em `src/utils/speech.ts`. Um mapa de nomes de idioma é adicionado no topo do módulo. Dentro de `speakText()`, após `window.speechSynthesis.speak(utterance)`, um bloco guardado por `'mediaSession' in navigator` configura metadados, action handlers e event listeners no utterance. Sem mudanças em `App.tsx` ou qualquer outro arquivo.

**Tech Stack:** React 18 + TypeScript 6, Media Session API (DOM nativa), Web Speech API (já existente)

## Global Constraints

- Sem novos arquivos — alteração exclusivamente em `src/utils/speech.ts`
- Sem nova UI — a feature é silenciosa; a lock screen é controlada pelo SO
- Sem dependências npm adicionais
- Degradação silenciosa quando `'mediaSession' in navigator` for falso (Firefox parcial, Safari antigo)
- `LANG_NAME` definido como constante em nível de módulo (junto com `LANG_VOICE_MAP` existente), não dentro da função
- TypeScript: usar tipos DOM nativos (`MediaMetadata`, `MediaSessionAction`) sem `@types` adicionais

---

### Task 1: Adicionar Media Session em speech.ts

**Files:**
- Modify: `src/utils/speech.ts`

**Interfaces:**
- Consumes: nada de outros módulos
- Produces: nada (efeito colateral puro — atualiza `navigator.mediaSession`)

- [ ] **Step 1: Adicionar constante LANG_NAME no topo do módulo**

Abra `src/utils/speech.ts`. Após o bloco `LANG_VOICE_MAP` (linha 4–9), adicione a nova constante na linha 11 (antes da função `speakText`):

```ts
const LANG_VOICE_MAP: { [key: string]: string } = {
  EN: 'en-US',
  IT: 'it-IT',
  DE: 'de-DE',
  JP: 'ja-JP'
};

const LANG_NAME: { [key: string]: string } = {
  EN: 'English',
  IT: 'Italiano',
  DE: 'Deutsch',
  JP: '日本語',
};
```

- [ ] **Step 2: Adicionar bloco Media Session dentro de speakText()**

Após a linha `window.speechSynthesis.speak(utterance);` (linha 48), adicionar o bloco abaixo, imediatamente antes do fechamento da função (`}`):

```ts
  if ('mediaSession' in navigator) {
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

O arquivo completo resultante deve ser:

```ts
// Utilitário para Síntese de Voz (TTS)
// Lê frases e palavras com as vozes nativas de cada idioma usando o motor do navegador.

const LANG_VOICE_MAP: { [key: string]: string } = {
  EN: 'en-US',
  IT: 'it-IT',
  DE: 'de-DE',
  JP: 'ja-JP'
};

const LANG_NAME: { [key: string]: string } = {
  EN: 'English',
  IT: 'Italiano',
  DE: 'Deutsch',
  JP: '日本語',
};

export function speakText(text: string, langKey: string) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Síntese de voz não é suportada neste navegador.');
    return;
  }

  // Cancela falas em andamento
  window.speechSynthesis.cancel();

  // Remove marcações de pronúncia romaji para não falar o texto em inglês/português no player japonês
  let cleanText = text;
  if (langKey === 'JP') {
    // Se contiver parênteses (com romaji), lê apenas a parte japonesa antes do parêntese
    if (text.includes('(')) {
      cleanText = text.split('(')[0].trim();
    }
    // Remove caracteres romaji/português comuns de tradução
    if (cleanText.includes('—')) {
      cleanText = cleanText.split('—')[0].trim();
    }
  }

  const utterance = new SpeechSynthesisUtterance(cleanText);
  const targetLang = LANG_VOICE_MAP[langKey] || 'en-US';
  utterance.lang = targetLang;

  // Tenta selecionar a melhor voz nativa disponível no sistema
  const voices = window.speechSynthesis.getVoices();
  const bestVoice = voices.find(v => v.lang.toLowerCase() === targetLang.toLowerCase() || v.lang.startsWith(targetLang));
  
  if (bestVoice) {
    utterance.voice = bestVoice;
  }

  // Velocidade levemente ajustada para fins didáticos (um pouco mais pausado)
  utterance.rate = langKey === 'JP' ? 0.85 : 0.95;

  window.speechSynthesis.speak(utterance);

  if ('mediaSession' in navigator) {
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
}
```

- [ ] **Step 3: Verificar que TypeScript compila sem erros**

```bash
npx tsc --noEmit
```

Saída esperada: nenhuma linha de erro.

- [ ] **Step 4: Testar no Chrome desktop**

```bash
npm run dev
```

Abra `http://localhost:5173` no Chrome. Clique no botão de ouvir (ícone de alto-falante) em qualquer caixa de idioma. O que deve acontecer:

- A barra de mídia do sistema (Windows: barra de tarefas / macOS: menu de controles de mídia) deve aparecer com o texto lido como título e o idioma como artista.
- Os botões Pausar e Parar nessa barra devem funcionar.
- Após o TTS terminar, a barra de mídia deve desaparecer ou ficar inativa.

- [ ] **Step 5: Verificar degradação no Firefox**

Abra `http://localhost:5173` no Firefox. Clique no botão de ouvir. O TTS deve funcionar normalmente — sem erros no console, sem barra de mídia (Firefox não suporta `MediaSession` completamente).

- [ ] **Step 6: Commit**

```bash
git add src/utils/speech.ts
git commit -m "Feat: adicionar Media Session API para controles de TTS na lock screen"
```
