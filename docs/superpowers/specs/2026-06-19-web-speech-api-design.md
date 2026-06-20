# Web Speech API (Ditado por Voz) — Design Spec

**Data:** 2026-06-19

## Objetivo

Permitir que o usuário dite texto por voz em cada caixa de idioma, com reconhecimento na língua correspondente à caixa (en-US, it-IT, de-DE, ja-JP). O texto transcrito é adicionado ao final do conteúdo existente. Disponível apenas no modo teclado.

---

## Comportamento

- Um botão de microfone aparece no cabeçalho de cada WritingBox **somente quando `inputMode === 'type'`**.
- Se `SpeechRecognition` não está disponível no browser (Firefox): o botão não renderiza — zero impacto no layout.
- Tap no mic → inicia reconhecimento contínuo no idioma da caixa.
- Cada resultado final (pausa na fala) é adicionado ao final do `typedText` com espaço separador.
- Tap no mic novamente → para o reconhecimento.
- Quando o reconhecimento termina (`onend`) ou falha (`onerror`): botão volta ao estado inativo silenciosamente.
- Apenas uma caixa pode estar ouvindo por vez — mas isso é garantido naturalmente pelo browser (só uma instância de `SpeechRecognition` ativa por página).

---

## Implementação

### Arquivo alterado: `src/components/WritingBox.tsx`

#### Novos imports

```ts
import { Trash2, HelpCircle, Volume2, Mic, MicOff } from 'lucide-react';
```

#### Estado interno (dentro do componente WritingBox)

```ts
const [isListening, setIsListening] = useState(false);
const recogRef = useRef<SpeechRecognition | null>(null);
const typedTextRef = useRef(typedText);
useEffect(() => { typedTextRef.current = typedText; }, [typedText]);
```

`useRef` e `useEffect` não estão importados atualmente — adicionar ambos à importação existente: `import React, { useState, useRef, useEffect } from 'react'`.

#### Mapeamento de idioma para BCP 47

Constante definida no nível do módulo (fora do componente):

```ts
const LANG_BCP47: Record<string, string> = {
  EN: 'en-US',
  IT: 'it-IT',
  DE: 'de-DE',
  JP: 'ja-JP',
};
```

#### Detecção de suporte

```ts
const SpeechRec =
  typeof window !== 'undefined'
    ? (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    : null;
```

Definida no nível do módulo.

#### Handlers de ditado (dentro do componente)

```ts
const startDictation = () => {
  if (!SpeechRec) return;
  const recognition: SpeechRecognition = new SpeechRec();
  recognition.lang = LANG_BCP47[code] ?? 'en-US';
  recognition.continuous = true;
  recognition.interimResults = false;

  recognition.onresult = (e: SpeechRecognitionEvent) => {
    // Use e.resultIndex to get only the new result (not all accumulated ones).
    // Use typedTextRef to avoid stale closure when multiple phrases are dictated.
    const result = e.results[e.resultIndex];
    if (result?.isFinal) {
      const transcript = result[0].transcript.trim();
      if (transcript) {
        const cur = typedTextRef.current;
        onTextChange(cur + (cur ? ' ' : '') + transcript);
      }
    }
  };

  recognition.onerror = () => setIsListening(false);
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
```

#### Botão de mic no JSX (cabeçalho da caixa)

Adicionado no cabeçalho, antes do botão `Trash2`, visível somente quando `inputMode === 'type'` e `SpeechRec` existe. Nota: a variável de tema no componente é `t` (não `lt`) — `const t = LANG_THEME[code]` na linha 101.

```tsx
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

---

## Fora de escopo

- Resultados intermediários (interim) na textarea — YAGNI
- Indicador de volume/waveform — YAGNI
- Permissão de microfone explícita (o browser pede automaticamente no primeiro uso)
- Suporte a Firefox — não suporta SpeechRecognition; fallback é não exibir o botão

---

## Arquivos alterados

| Arquivo | Mudança |
|---|---|
| `src/components/WritingBox.tsx` | Imports `Mic`/`MicOff`/`useRef`/`useEffect`; constantes `LANG_BCP47` e `SpeechRec`; estado `isListening` + `recogRef` + `typedTextRef` + `useEffect` sync; `startDictation`/`stopDictation`; botão de mic no JSX do header |
