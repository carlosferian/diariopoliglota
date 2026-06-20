// Utilitário para Síntese de Voz (TTS)
// Lê frases e palavras com as vozes nativas de cada idioma usando o motor do navegador.

type LangKey = 'EN' | 'IT' | 'DE' | 'JP';

const LANG_VOICE_MAP: Record<LangKey, string> = {
  EN: 'en-US',
  IT: 'it-IT',
  DE: 'de-DE',
  JP: 'ja-JP',
};

const LANG_NAME: Record<LangKey, string> = {
  EN: 'English',
  IT: 'Italiano',
  DE: 'Deutsch',
  JP: '日本語',
};

let currentUtterance: SpeechSynthesisUtterance | null = null;

if (typeof navigator !== 'undefined' && 'mediaSession' in navigator) {
  navigator.mediaSession.setActionHandler('pause', () => {
    window.speechSynthesis.pause();
  });
  navigator.mediaSession.setActionHandler('stop', () => {
    window.speechSynthesis.cancel();
  });
}

export function speakText(text: string, langKey: string) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Síntese de voz não é suportada neste navegador.');
    return;
  }

  window.speechSynthesis.cancel();

  let cleanText = text;
  if (langKey === 'JP') {
    if (text.includes('(')) {
      cleanText = text.split('(')[0].trim();
    }
    if (cleanText.includes('—')) {
      cleanText = cleanText.split('—')[0].trim();
    }
  }

  const utterance = new SpeechSynthesisUtterance(cleanText);
  const targetLang = LANG_VOICE_MAP[langKey as LangKey] || 'en-US';
  utterance.lang = targetLang;

  const voices = window.speechSynthesis.getVoices();
  const bestVoice = voices.find(v => v.lang.toLowerCase() === targetLang.toLowerCase() || v.lang.startsWith(targetLang));
  if (bestVoice) {
    utterance.voice = bestVoice;
  }

  utterance.rate = langKey === 'JP' ? 0.85 : 0.95;

  currentUtterance = utterance;
  window.speechSynthesis.speak(utterance);

  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: cleanText,
      artist: LANG_NAME[langKey as LangKey] ?? langKey,
    });

    const teardown = function (this: SpeechSynthesisUtterance) {
      if (this !== currentUtterance) return;
      navigator.mediaSession.playbackState = 'none';
      navigator.mediaSession.metadata = null;
    };

    utterance.onstart = function () {
      if (this !== currentUtterance) return;
      navigator.mediaSession.playbackState = 'playing';
    };
    utterance.onpause = function () {
      if (this !== currentUtterance) return;
      navigator.mediaSession.playbackState = 'paused';
    };
    utterance.onresume = function () {
      if (this !== currentUtterance) return;
      navigator.mediaSession.playbackState = 'playing';
    };
    utterance.onend = teardown;
    utterance.onerror = teardown;
  }
}
