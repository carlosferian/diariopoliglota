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
