import React from 'react';
import { Trash2 } from 'lucide-react';
import type { LanguagePrompt } from '../data/prompts';

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
  mode: 'light' | 'dark';
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
}

function guideStyle(code: string, t: LanguageTheme, paper: string) {
  if (paper === 'branco') return {};
  if (paper === 'quadriculado') {
    const cell = code === 'JP' ? 54 : 40;
    return {
      backgroundColor: t.primary + '0a',
      backgroundImage: `repeating-linear-gradient(to right, ${t.primary}33 0 1px, transparent 1px ${cell}px), repeating-linear-gradient(to bottom, ${t.primary}33 0 1px, transparent 1px ${cell}px)`,
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
}) => {
  const t = LANG_THEME[code];
  const jp = code === 'JP';

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

      {/* Sugestão de início */}
      <div style={{ padding: '8px 14px 0', flex: '0 0 auto' }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: t.primary, letterSpacing: 1 }}>
          ▸ COMECE ASSIM&nbsp;&nbsp;
        </span>
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

      {/* Área do Canvas */}
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
        <canvas
          ref={(el) => registerCanvas(code, el)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            cursor: 'crosshair',
          }}
        />
      </div>
    </div>
  );
};
export default WritingBox;
