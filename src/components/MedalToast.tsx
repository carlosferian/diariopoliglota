import React from 'react';

interface MedalToastProps {
  medal: { icon: string; name: string } | null;
}

export const MedalToast: React.FC<MedalToastProps> = ({ medal }) => {
  if (!medal) return null;
  return (
    <div
      style={{
        position: 'fixed',
        top: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 300,
        background: 'linear-gradient(135deg, #FBBF24, #F97316)',
        color: '#0E1326',
        padding: '12px 24px',
        borderRadius: 16,
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        boxShadow: '0 12px 40px rgba(249,115,22,0.45)',
        fontFamily: "'Nunito', sans-serif",
        animation: 'toastIn .35s ease',
      }}
    >
      <span style={{ fontSize: 32 }}>{medal.icon}</span>
      <div>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, fontWeight: 700, letterSpacing: 1, opacity: 0.85 }}>
          MEDALHA DESBLOQUEADA!
        </div>
        <div style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: 18, lineHeight: 1.1 }}>
          {medal.name}
        </div>
      </div>
    </div>
  );
};
export default MedalToast;
