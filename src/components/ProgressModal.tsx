import React, { useState, useRef, useEffect } from 'react';
import { 
  X, Trophy, Flame, BookOpen, ChevronLeft, ChevronRight, 
  Download, Upload, Trash2, ShieldAlert
} from 'lucide-react';
import * as DS from '../services/DiaryStore';
import { LANG_THEME } from './WritingBox';

interface ProgressModalProps {
  meta: DS.DiaryMeta;
  viewDate: Date;
  T: any;
  onPick: (date: Date) => void;
  onClose: () => void;
  onDeleteDay: (date: Date) => void;

  // Abrir já rolado até a área de ajustes/idiomas (via ícone de engrenagem)
  focusSettings?: boolean;

  // Seleção de idiomas visíveis (1–4)
  activeLangs: string[];
  onChangeActiveLangs: (langs: string[]) => void;

  onExport: () => void;
  onImport: (file: File) => void;
  onClearHistory: () => void;

  // Google Drive Sync
  gdriveClientId: string;
  onSaveClientId: (id: string) => void;
  gdriveToken: string | null;
  onConnectGDrive: () => void;
  onSyncGDrive: () => void;
  onLoadGDrive: () => void;

  // Lembrete PWA
  reminderTime: string;
  onSaveReminderTime: (time: string) => void;
  reminderEnabled: boolean;
  onToggleReminder: (enabled: boolean) => void;
}

const WD_PT = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const MES_PT = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
];

export const MEDALS = [
  { id: 'first', icon: '🌱', name: 'Primeira página', desc: 'Escreva seu 1º dia',     test: (s: DS.Stats) => s.total >= 1 },
  { id: 's3',    icon: '⚡', name: 'Engrenando',      desc: '3 dias seguidos',         test: (s: DS.Stats) => s.best >= 3 },
  { id: 's7',    icon: '🔥', name: 'Semana de fogo',  desc: '7 dias seguidos',         test: (s: DS.Stats) => s.best >= 7 },
  { id: 't25',   icon: '📚', name: 'Colecionador',    desc: '25 dias escritos',        test: (s: DS.Stats) => s.total >= 25 },
  { id: 's30',   icon: '🚀', name: 'Mês imparável',   desc: '30 dias seguidos',        test: (s: DS.Stats) => s.best >= 30 },
  { id: 'poly',  icon: '🌍', name: 'Poliglota',       desc: 'Todas as línguas num só dia', test: (s: DS.Stats) => s.allLangs },
  { id: 'b1',    icon: '🎓', name: 'Rumo ao B1',      desc: 'Chegue ao Módulo 5',      test: (s: DS.Stats) => s.maxWeek >= 17 },
  { id: 's100',  icon: '👑', name: 'Centurião',       desc: '100 dias seguidos',       test: (s: DS.Stats) => s.best >= 100 },
];

export const ProgressModal: React.FC<ProgressModalProps> = ({
  meta,
  viewDate,
  T,
  onPick,
  onClose,
  onDeleteDay,
  focusSettings,
  activeLangs,
  onChangeActiveLangs,
  onExport,
  onImport,
  onClearHistory,
  gdriveClientId,
  onSaveClientId,
  gdriveToken,
  onConnectGDrive,
  onSyncGDrive,
  onLoadGDrive,
  reminderTime,
  onSaveReminderTime,
  reminderEnabled,
  onToggleReminder,
}) => {
  const [currentMonthDate, setCurrentMonthDate] = useState(() => new Date(viewDate.getFullYear(), viewDate.getMonth(), 1));
  const [confirmDelIso, setConfirmDelIso] = useState<string | null>(null);
  const [clientIdInput, setClientIdInput] = useState(gdriveClientId);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);

  // Ao abrir pela engrenagem, rola direto para a área de ajustes/idiomas.
  useEffect(() => {
    if (focusSettings) {
      const id = setTimeout(() => {
        settingsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
      return () => clearTimeout(id);
    }
  }, [focusSettings]);

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

  const stats = DS.stats(meta);
  const t0 = DS.today();
  const firstDayOfMonth = new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth(), 1);
  const offset = firstDayOfMonth.getDay();
  const ndays = new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() + 1, 0).getDate();

  const cells: (number | null)[] = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let d = 1; d <= ndays; d++) cells.push(d);

  const handlePrevMonth = () => {
    setCurrentMonthDate(new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonthDate(new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() + 1, 1));
  };

  const navBtnStyle = {
    background: T.ctrlBg,
    border: `1px solid ${T.borderStrong}`,
    color: T.text,
    borderRadius: 8,
    width: 32,
    height: 32,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s',
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: T.modalOverlay,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(4px)',
        padding: 16,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: T.modalBg,
          border: `1px solid ${T.border}`,
          borderRadius: 24,
          padding: 24,
          width: 760,
          maxWidth: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          fontFamily: "'Nunito', sans-serif",
          boxShadow: T.shadow,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 24,
          position: 'relative',
        }}
      >
        {/* Botão de Fechar Modal */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            background: T.ctrlBg,
            border: 'none',
            color: T.text,
            width: 32,
            height: 32,
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          <X size={16} />
        </button>

        {/* Coluna do Calendário e Estatísticas */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Grid de Estatísticas */}
          <div style={{ display: 'flex', gap: 8 }}>
            {[
              { label: 'sequência', val: stats.current, icon: <Flame size={20} color={T.flame} /> },
              { label: 'recorde', val: stats.best, icon: <Trophy size={20} color="#FBBF24" /> },
              { label: 'dias escritos', val: stats.total, icon: <BookOpen size={20} color={T.accent} /> }
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  background: T.cellBg,
                  borderRadius: 16,
                  padding: '12px 8px',
                  textAlign: 'center',
                  border: `1px solid ${T.border}`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 4
                }}
              >
                {item.icon}
                <div style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: 24, color: T.text, lineHeight: 1 }}>
                  {item.val}
                </div>
                <div style={{ fontSize: 10, color: T.dim, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Navegação do Mês */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
            <button onClick={handlePrevMonth} style={navBtnStyle}>
              <ChevronLeft size={16} />
            </button>
            <div style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: 18, color: T.text, textTransform: 'capitalize' }}>
              {MES_PT[currentMonthDate.getMonth()]} {currentMonthDate.getFullYear()}
            </div>
            <button onClick={handleNextMonth} style={navBtnStyle}>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Grid do Calendário */}
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6, marginBottom: 8 }}>
              {WD_PT.map((d, i) => (
                <div key={i} style={{ textAlign: 'center', fontSize: 11, fontWeight: 800, color: T.faint }}>
                  {d}
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6 }}>
              {cells.map((d, i) => {
                if (d === null) return <div key={`empty-${i}`} />;
                const date = new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth(), d);
                const isoStr = DS.iso(date);
                const languagesWritten = meta.days[isoStr];
                const done = Array.isArray(languagesWritten) && languagesWritten.length > 0;
                
                const isToday = isoStr === DS.iso(t0);
                const isView = isoStr === DS.iso(viewDate);
                const future = DS.today0(date).getTime() > t0.getTime();
                const isConfirming = confirmDelIso === isoStr;

                return (
                  <button
                    key={`day-${d}`}
                    onClick={() => {
                      if (future) return;
                      if (done) {
                        setConfirmDelIso(isConfirming ? null : isoStr);
                      } else {
                        onPick(date);
                      }
                    }}
                    style={{
                      aspectRatio: '1',
                      borderRadius: 10,
                      cursor: future ? 'default' : 'pointer',
                      fontSize: 12,
                      fontWeight: 800,
                      border: isConfirming 
                        ? `2px solid #dc2626` 
                        : (isView ? `2px solid ${T.accent}` : (isToday ? `2px solid ${T.flame}` : `1px solid ${T.border}`)),
                      background: done 
                        ? 'linear-gradient(135deg, #FBBF24, #F97316)' 
                        : T.cellBg,
                      color: done ? '#0E1326' : (future ? T.faint : T.dim),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.1s',
                    }}
                    onMouseEnter={(e) => {
                      if (!future) e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      if (!future) e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    {done ? '✓' : d}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Painel de confirmação de exclusão */}
          {confirmDelIso && (
            <div
              style={{
                padding: '12px 14px',
                background: T.cellBg,
                border: `1px solid #dc2626`,
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                flexWrap: 'wrap',
                animation: 'toastIn 0.2s ease',
              }}
            >
              <span style={{ flex: 1, fontSize: 12, color: T.text2 }}>
                Apagar registro de <strong>{confirmDelIso}</strong>?
              </span>
              <button
                onClick={() => {
                  onPick(DS.fromIso(confirmDelIso));
                  setConfirmDelIso(null);
                }}
                style={{
                  background: T.ctrlBg,
                  border: `1px solid ${T.border}`,
                  color: T.text,
                  borderRadius: 8,
                  padding: '6px 12px',
                  cursor: 'pointer',
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                Ver Dia
              </button>
              <button
                onClick={() => {
                  onDeleteDay(DS.fromIso(confirmDelIso));
                  setConfirmDelIso(null);
                }}
                style={{
                  background: '#dc2626',
                  border: 'none',
                  color: '#fff',
                  borderRadius: 8,
                  padding: '6px 12px',
                  cursor: 'pointer',
                  fontSize: 12,
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4
                }}
              >
                <Trash2 size={12} /> Apagar
              </button>
              <button
                onClick={() => setConfirmDelIso(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: T.dim,
                  cursor: 'pointer',
                  fontSize: 16,
                  padding: 4,
                }}
              >
                ×
              </button>
            </div>
          )}
          {!confirmDelIso && (
            <p style={{ fontSize: 11.5, color: T.faint, margin: 0 }}>
              Dica: clique em um dia concluído (✓) para apagar ou visualizar a escrita.
            </p>
          )}
        </div>

        {/* Coluna das Medalhas e Ações Globais */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: 18, color: T.text }}>
              Medalhas Conquistadas
            </span>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: T.accent, fontWeight: 700 }}>
              {MEDALS.filter((md) => md.test(stats)).length}/{MEDALS.length}
            </span>
          </div>

          {/* Grid de Medalhas */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, flex: 1 }}>
            {MEDALS.map((md) => {
              const got = md.test(stats);
              return (
                <div
                  key={md.id}
                  style={{
                    background: got ? 'linear-gradient(135deg, rgba(251,191,36,0.1), rgba(249,115,22,0.05))' : T.cellBg,
                    border: got ? `1px solid ${T.flame}` : `1px dashed ${T.border}`,
                    borderRadius: 16,
                    padding: '10px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    opacity: got ? 1 : 0.45,
                    transition: 'all 0.2s',
                  }}
                >
                  <span style={{ fontSize: 26, filter: got ? 'none' : 'grayscale(1)' }}>{md.icon}</span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontWeight: 800, fontSize: 13, color: T.text, lineHeight: 1.1 }}>
                      {md.name}
                    </div>
                    <div style={{ fontSize: 10.5, color: T.dim, marginTop: 2, lineHeight: 1.2 }}>
                      {md.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Seleção de Idiomas Visíveis (1–4) */}
          <div ref={settingsRef} style={{ display: 'flex', flexDirection: 'column', gap: 8, background: T.cellBg, padding: 14, borderRadius: 16, border: `1px solid ${T.border}`, scrollMarginTop: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 800, fontSize: 13.5, color: T.text }}>
                <span>🌐 Idiomas na tela</span>
              </div>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: T.dim, fontWeight: 700 }}>
                {activeLangs.length}/4
              </span>
            </div>
            <span style={{ fontSize: 11, color: T.dim, lineHeight: 1.3 }}>
              Escolha de 1 a 4 idiomas para praticar. Trocar não apaga o que você já escreveu.
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 2 }}>
              {DS.ALL_LANGS.map((code) => {
                const theme = LANG_THEME[code];
                const selected = activeLangs.includes(code);
                const atMax = activeLangs.length >= 4;
                const isLast = selected && activeLangs.length <= 1;
                const disabled = (!selected && atMax) || isLast;
                const toggle = () => {
                  if (disabled) return;
                  if (selected) {
                    onChangeActiveLangs(activeLangs.filter((l) => l !== code));
                  } else {
                    onChangeActiveLangs([...activeLangs, code]);
                  }
                };
                return (
                  <button
                    key={code}
                    onClick={toggle}
                    disabled={disabled}
                    title={
                      isLast
                        ? 'É necessário manter pelo menos um idioma'
                        : (!selected && atMax)
                        ? 'Máximo de 4 idiomas na tela'
                        : selected
                        ? `Ocultar ${theme.name}`
                        : `Mostrar ${theme.name}`
                    }
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 7,
                      background: selected ? theme.primary : T.card,
                      border: `2px solid ${selected ? theme.primary : T.border}`,
                      color: selected ? '#fff' : T.text2,
                      borderRadius: 10,
                      padding: '6px 11px',
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: 800,
                      fontSize: 12.5,
                      cursor: disabled ? 'not-allowed' : 'pointer',
                      opacity: disabled && !selected ? 0.4 : 1,
                      transition: 'background 0.15s, border-color 0.15s',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontWeight: 700,
                        fontSize: 10,
                        background: selected ? 'rgba(255,255,255,0.25)' : theme.primary,
                        color: '#fff',
                        borderRadius: 5,
                        padding: '1px 5px',
                      }}
                    >
                      {code}
                    </span>
                    {theme.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sincronização Google Drive (Privado) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, background: T.cellBg, padding: 14, borderRadius: 16, border: `1px dashed ${T.borderStrong}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 800, fontSize: 13.5, color: T.text }}>
              <span>☁️ Google Drive Sync (Privado)</span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 10, fontWeight: 800, color: T.dim, textTransform: 'uppercase', letterSpacing: 0.5 }}>Google Client ID</span>
              <div style={{ display: 'flex', gap: 6 }}>
                <input
                  type="password"
                  value={clientIdInput}
                  onChange={(e) => setClientIdInput(e.target.value)}
                  placeholder="Cole seu Google Client ID aqui..."
                  style={{
                    flex: 1,
                    background: T.card,
                    border: `1px solid ${T.border}`,
                    borderRadius: 8,
                    padding: '5px 8px',
                    color: T.text,
                    fontSize: 11.5,
                  }}
                />
                <button
                  onClick={() => onSaveClientId(clientIdInput)}
                  style={{
                    background: T.ctrlBg,
                    border: `1px solid ${T.borderStrong}`,
                    color: T.text,
                    borderRadius: 8,
                    padding: '5px 10px',
                    fontSize: 11,
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  Salvar
                </button>
              </div>
            </div>

            {gdriveClientId ? (
              <div style={{ display: 'flex', gap: 6 }}>
                {!gdriveToken ? (
                  <button
                    onClick={onConnectGDrive}
                    style={{
                      flex: 1,
                      background: T.accent,
                      color: T.mode === 'light' ? '#fff' : '#0E1326',
                      border: 'none',
                      borderRadius: 10,
                      padding: '8px',
                      fontSize: 11.5,
                      fontWeight: 800,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 4,
                    }}
                  >
                    Conectar Drive
                  </button>
                ) : (
                  <>
                    <button
                      onClick={onSyncGDrive}
                      style={{
                        flex: 1,
                        background: '#10B981',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 10,
                        padding: '8px',
                        fontSize: 11.5,
                        fontWeight: 800,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 4,
                      }}
                    >
                      Salvar Nuvem
                    </button>
                    <button
                      onClick={onLoadGDrive}
                      style={{
                        flex: 1,
                        background: '#3B82F6',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 10,
                        padding: '8px',
                        fontSize: 11.5,
                        fontWeight: 800,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 4,
                      }}
                    >
                      Ler Nuvem
                    </button>
                  </>
                )}
              </div>
            ) : (
              <div style={{ fontSize: 10, color: T.dim, fontStyle: 'italic', lineHeight: 1.2 }}>
                * Insira o seu Client ID do Google Cloud Console para sincronizar com seu Google Drive de forma 100% privada e gratuita.
              </div>
            )}
          </div>

          {/* Lembretes Diários (PWA) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, background: T.cellBg, padding: 14, borderRadius: 16, border: `1px solid ${T.border}` }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 800, fontSize: 13.5, color: T.text }}>
                <span>🔔 Lembretes Diários</span>
              </div>
              <label style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={reminderEnabled}
                  onChange={(e) => onToggleReminder(e.target.checked)}
                  style={{ width: 16, height: 16, accentColor: T.accent, cursor: 'pointer' }}
                />
              </label>
            </div>
            
            {reminderEnabled && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginTop: 4 }}>
                <span style={{ fontSize: 11.5, color: T.dim }}>Notificar às:</span>
                <input
                  type="time"
                  value={reminderTime}
                  onChange={(e) => onSaveReminderTime(e.target.value)}
                  style={{
                    background: T.card,
                    border: `1px solid ${T.border}`,
                    borderRadius: 8,
                    padding: '4px 8px',
                    color: T.text,
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                />
              </div>
            )}
          </div>

          {/* Ações de Backup e Restauração */}
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            <button
              onClick={onExport}
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
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
              }}
            >
              <Download size={14} /> Backup
            </button>
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
          </div>

          {/* Botão de Limpeza Completa */}
          <button
            onClick={onClearHistory}
            style={{
              width: '100%',
              background: '#dc262622',
              border: `1px solid #dc262655`,
              color: '#ef4444',
              borderRadius: 12,
              padding: '10px',
              fontWeight: 800,
              cursor: 'pointer',
              fontFamily: "'Nunito', sans-serif",
              fontSize: 13,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#dc262633')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#dc262622')}
          >
            <ShieldAlert size={14} /> Limpar Todo o Histórico
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProgressModal;
