import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Trash2, HelpCircle, Volume2, Mic, MicOff } from 'lucide-react';
import type { LanguagePrompt } from '../data/prompts';
import { speakText } from '../utils/speech';

const LANG_BCP47: Record<string, string> = {
  EN: 'en-US',
  IT: 'it-IT',
  DE: 'de-DE',
  JP: 'ja-JP',
};

const SpeechRec: (new () => any) | null =
  typeof window !== 'undefined'
    ? ((window as any).SpeechRecognition ?? (window as any).webkitSpeechRecognition ?? null)
    : null;

export interface LanguageTheme {
  primary: string;
  soft: string;
  ink: string;
  name: string;
}

export const LANG_THEME: { [key: string]: LanguageTheme } = {
  EN: { primary: '#2563EB', soft: '#E9F1FE', ink: '#173A85', name: 'Inglês' },
  IT: { primary: '#15A34A', soft: '#E7F8EC', ink: '#0C5C2C', name: 'Italiano' },
  DE: { primary: '#D9A21A', soft: '#FBF1DA', ink: '#6E4F0C', name: 'Alemão' },
  JP: { primary: '#E11D48', soft: '#FCE7EC', ink: '#8A1733', name: 'Japonês' },
};

export interface ThemeColors {
  mode: 'light' | 'dark' | 'sepia';
  appBg: string;
  grid: string;
  card: string;
  panel: string;
  band: string;
  border: string;
  borderStrong: string;
  text: string;
  text2: string;
  dim: string;
  faint: string;
  ctrlBg: string;
  ctrlHover: string;
  cream: string;
  modalOverlay: string;
  modalBg: string;
  cellBg: string;
  accent: string;
  flame: string;
  shadow: string;
}

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

function guideStyle(code: string, t: LanguageTheme, paper: string) {
  if (paper === 'branco') return {};
  if (paper === 'quadriculado') {
    const cell = code === 'JP' ? 54 : 40;
    return {
      backgroundColor: t.primary + '03',
      backgroundImage: `repeating-linear-gradient(to right, ${t.primary}22 0 1px, transparent 1px ${cell}px), repeating-linear-gradient(to bottom, ${t.primary}22 0 1px, transparent 1px ${cell}px)`,
    };
  }
  if (paper === 'pontilhado') {
    const size = code === 'JP' ? 32 : 24;
    return {
      backgroundImage: `radial-gradient(${t.primary}44 1.5px, transparent 1.5px)`,
      backgroundSize: `${size}px ${size}px`,
    };
  }
  if (paper === 'cornell') {
    return {
      backgroundImage: `linear-gradient(to right, transparent 74px, rgba(239, 68, 68, 0.25) 74px, rgba(239, 68, 68, 0.25) 76px, transparent 76px), repeating-linear-gradient(to bottom, transparent 0, transparent 42px, ${t.primary}18 42px, ${t.primary}18 44px)`,
      backgroundPosition: '0 8px',
    };
  }
  // pautado
  return {
    backgroundImage: `repeating-linear-gradient(to bottom, transparent 0, transparent 42px, ${t.primary}30 42px, ${t.primary}30 44px)`,
    backgroundPosition: '0 8px',
  };
}

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
  const [showHelp, setShowHelp] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const recogRef = useRef<any>(null);
  const typedTextRef = useRef(typedText);
  useEffect(() => { typedTextRef.current = typedText; }, [typedText]);

  // Stable ref callback: prevents InkPad from being destroyed/recreated on every re-render.
  // An inline arrow `ref={(el) => registerCanvas(code, el)}` is a new function identity each
  // render, so React calls ref(null)+ref(el) on every re-render, clearing the canvas mid-stroke.
  const stableCanvasRef = useCallback((el: HTMLCanvasElement | null) => {
    registerCanvas(code, el);
  }, [registerCanvas, code]);

  // Fix 1: Unmount cleanup
  useEffect(() => {
    return () => {
      recogRef.current?.stop();
      recogRef.current = null;
    };
  }, []);

  // Fix 2: Stop recognition when inputMode changes to 'draw'
  useEffect(() => {
    if (inputMode !== 'type' && recogRef.current) {
      recogRef.current.stop();
      recogRef.current = null;
      setIsListening(false);
    }
  }, [inputMode]);
  const t = LANG_THEME[code];
  const jp = code === 'JP';

  const startDictation = () => {
    if (!SpeechRec) return;
    const recognition = new SpeechRec();
    recognition.lang = LANG_BCP47[code] ?? 'en-US';
    recognition.continuous = true;
    recognition.interimResults = false;

    recognition.onresult = (e: SpeechRecognitionEvent) => {
      const result = e.results[e.resultIndex];
      if (result?.isFinal) {
        const transcript = result[0].transcript.trim();
        if (transcript) {
          const cur = typedTextRef.current;
          onTextChange(cur + (cur ? ' ' : '') + transcript);
        }
      }
    };

    recognition.onerror = (e: SpeechRecognitionErrorEvent) => {
      if ((e as any).error === 'not-allowed') {
        console.warn('Microphone permission denied');
      }
      setIsListening(false);
    };
    recognition.onend = () => setIsListening(false);

    recogRef.current = recognition;
    recognition.start();
    setIsListening(true);
  };

  const stopDictation = () => {
    recogRef.current?.stop();
    recogRef.current = null;
    setIsListening(false);
  };

  return (
    <div
      className="diary-card"
      style={{
        background: T.card,
        borderRadius: 16,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0,
        boxShadow: isActive
          ? `0 0 0 3px ${t.primary}, ${T.shadow}`
          : `0 0 0 1px ${t.primary}${T.mode === 'light' ? '33' : '55'}, ${T.shadow}`,
        transition: 'box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Header do Box */}
      <div
        style={{
          background: `linear-gradient(90deg, ${t.primary}, ${t.primary}cc)`,
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          flex: '0 0 auto',
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.22)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Space Mono', monospace",
            fontWeight: 700,
            fontSize: 13,
            flex: '0 0 auto',
          }}
        >
          {code}
        </div>
        <div style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: 17, color: '#fff' }}>
          {t.name}
        </div>
        
        {/* Palavra em Foco */}
        <div
          style={{
            marginLeft: 'auto',
            background: 'rgba(0,0,0,0.22)',
            borderRadius: 8,
            padding: '4px 10px',
            display: 'flex',
            alignItems: 'baseline',
            gap: 7,
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{ fontSize: 9, fontFamily: "'Space Mono', monospace", color: 'rgba(255,255,255,0.85)' }}>
            +1
          </span>
          <span
            style={{
              fontFamily: jp ? "'Zen Maru Gothic', sans-serif" : "'Nunito', sans-serif",
              fontWeight: 800,
              fontSize: 15,
              color: '#fff',
            }}
          >
            {data.w}
          </span>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.75)' }}>{data.tr}</span>
        </div>

        {/* Botão de Ajuda */}
        {suggestions && suggestions.length > 0 && (
          <button
            onClick={() => setShowHelp((prev) => !prev)}
            title="Exemplos de frases de ajuda (Inspiração)"
            style={{
              flex: '0 0 auto',
              background: showHelp ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.15)',
              border: 'none',
              color: '#fff',
              borderRadius: 8,
              width: 28,
              height: 28,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s',
              marginRight: 4,
            }}
            onMouseEnter={(e) => !showHelp && (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)')}
            onMouseLeave={(e) => !showHelp && (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)')}
          >
            <HelpCircle size={14} />
          </button>
        )}

        {/* Botão de Ditado por Voz */}
        {inputMode === 'type' && SpeechRec && (
          <button
            onClick={isListening ? stopDictation : startDictation}
            title={isListening ? 'Parar ditado' : 'Ditar por voz'}
            style={{
              flex: '0 0 auto',
              background: isListening ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.15)',
              border: 'none',
              color: '#fff',
              borderRadius: 8,
              width: 28,
              height: 28,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s',
            }}
          >
            {isListening ? <MicOff size={14} /> : <Mic size={14} />}
          </button>
        )}

        {/* Botão de Limpar */}
        <button
          onClick={() => onClearBox(code)}
          title="Limpar este quadro"
          style={{
            flex: '0 0 auto',
            background: 'rgba(255,255,255,0.15)',
            border: 'none',
            color: '#fff',
            borderRadius: 8,
            width: 28,
            height: 28,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)')}
        >
          <Trash2 size={14} />
        </button>
      </div>

      {/* Painel de Sugestões de Ajuda */}
      {showHelp && suggestions && suggestions.length > 0 && (
        <div
          style={{
            background: T.cellBg,
            borderBottom: `1px solid ${T.borderStrong}`,
            padding: '12px 14px',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            animation: 'toastIn 0.2s ease',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 11, fontWeight: 800, color: T.dim, letterSpacing: 0.5, textTransform: 'uppercase' }}>
              💡 Exemplos (Simples ➔ Complexo)
            </span>
            <button
              onClick={() => setShowHelp(false)}
              style={{
                background: 'none',
                border: 'none',
                color: T.dim,
                cursor: 'pointer',
                fontSize: 11,
                fontWeight: 700,
              }}
            >
              fechar
            </button>
          </div>
          <div className="suggestions-list">
            {suggestions.map((item, idx) => {
              const levels = [
                { name: 'Simples', color: '#10B981' },
                { name: 'Fácil', color: '#3B82F6' },
                { name: 'Médio', color: '#F59E0B' },
                { name: 'Complexo', color: '#EF4444' },
                { name: 'Avançado', color: '#8B5CF6' }
              ];
              const lvl = levels[idx] || levels[0];
              return (
                <div
                  key={idx}
                  style={{
                    background: T.card,
                    borderRadius: 8,
                    padding: '8px 10px',
                    border: `1px solid ${T.border}`,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 800,
                        color: '#fff',
                        background: lvl.color,
                        padding: '2px 6px',
                        borderRadius: 4,
                        textTransform: 'uppercase',
                        lineHeight: 1.1,
                      }}
                    >
                      {lvl.name}
                    </span>
                    <button
                      onClick={() => speakText(item, code)}
                      title="Ouvir esta frase de exemplo"
                      style={{
                        background: 'none',
                        border: 'none',
                        color: T.dim,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: 2,
                        borderRadius: 4,
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = T.ctrlBg)}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      <Volume2 size={11} />
                    </button>
                  </div>
                  <span
                    style={{
                      fontFamily: jp ? "'Zen Maru Gothic', sans-serif" : "'Nunito', sans-serif",
                      fontSize: 13.5,
                      color: T.text,
                      fontWeight: 600,
                      lineHeight: 1.3,
                    }}
                  >
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div style={{ padding: '8px 14px 0', flex: '0 0 auto', display: 'flex', alignItems: 'baseline', gap: 6, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: t.primary, letterSpacing: 1 }}>
            ▸ COMECE ASSIM
          </span>
          <button
            onClick={() => speakText(data.s, code)}
            title="Ouvir pronúncia da frase inicial"
            style={{
              background: 'none',
              border: 'none',
              color: t.primary,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              padding: '2px 4px',
              borderRadius: 4,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = t.soft)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <Volume2 size={12} />
          </button>
        </div>
        <div>
          <span
            style={{
              fontFamily: jp ? "'Zen Maru Gothic', sans-serif" : "'Nunito', sans-serif",
              fontWeight: 700,
              fontSize: 15.5,
              color: T.text2,
            }}
          >
            {data.s}
          </span>
          {data.r && (
            <span style={{ fontSize: 12, color: T.faint, fontStyle: 'italic' }}>
              &nbsp;· {data.r}
            </span>
          )}
        </div>
      </div>

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
            ref={stableCanvasRef}
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
    </div>
  );
};
export default WritingBox;
