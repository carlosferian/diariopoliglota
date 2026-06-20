# Web Speech API Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Adicionar um botão de microfone no cabeçalho de cada WritingBox para que o usuário possa ditar texto por voz, com reconhecimento no idioma da caixa, disponível apenas no modo teclado.

**Architecture:** Toda a implementação fica em `src/components/WritingBox.tsx`. Um ref `typedTextRef` sincronizado via `useEffect` evita stale closure nos handlers de reconhecimento. A API `SpeechRecognition` é detectada no nível do módulo — se ausente (Firefox), o botão simplesmente não renderiza. O reconhecimento é contínuo (`continuous = true`, `interimResults = false`) e cada resultado final é anexado ao texto existente usando `e.resultIndex` para não duplicar frases anteriores.

**Tech Stack:** React 18 + TypeScript 6, Web Speech API (`SpeechRecognition`/`webkitSpeechRecognition`), lucide-react (`Mic`, `MicOff`)

## Global Constraints

- Apenas `src/components/WritingBox.tsx` é modificado — nenhum outro arquivo
- Sem novas dependências npm
- Se `SpeechRecognition` não está disponível (Firefox): botão não renderiza, sem console.error, sem fallback UI
- Botão de mic visível apenas quando `inputMode === 'type'`
- Reconhecimento: `continuous = true`, `interimResults = false`
- Texto transcrito é *adicionado* ao final do `typedText` existente, com espaço separador
- `onresult` usa `e.resultIndex` (não `Array.from(e.results)`) para evitar duplicação
- `typedTextRef` é sincronizado via `useEffect` para evitar stale closure
- Botão de mic fica no header, antes do botão `Trash2`
- Estilo do botão segue o padrão dos outros botões do header: `background: rgba(255,255,255,0.35)` quando ativo, `rgba(255,255,255,0.15)` quando inativo, `color: '#fff'`, `borderRadius: 8`, `width: 28`, `height: 28`
- TypeScript: usar `(window as any).SpeechRecognition` e `(window as any).webkitSpeechRecognition` para evitar erros de tipo

---

### Task 1: Adicionar ditado por voz em WritingBox

**Files:**
- Modify: `src/components/WritingBox.tsx`

**Interfaces:**
- Consumes: `typedText: string` e `onTextChange: (text: string) => void` (props já existentes)
- Produces: nada — efeito colateral puro (atualiza `typedText` via `onTextChange`)

- [ ] **Step 1: Atualizar importações**

Abra `src/components/WritingBox.tsx`. A linha 1 e 2 são:

```ts
import React, { useState } from 'react';
import { Trash2, HelpCircle, Volume2 } from 'lucide-react';
```

Substitua por:

```ts
import React, { useState, useRef, useEffect } from 'react';
import { Trash2, HelpCircle, Volume2, Mic, MicOff } from 'lucide-react';
```

- [ ] **Step 2: Adicionar constantes no nível do módulo**

Após a linha `import { speakText } from '../utils/speech';` (linha 4), antes da declaração `export interface LanguageTheme`, adicione:

```ts
const LANG_BCP47: Record<string, string> = {
  EN: 'en-US',
  IT: 'it-IT',
  DE: 'de-DE',
  JP: 'ja-JP',
};

const SpeechRec =
  typeof window !== 'undefined'
    ? (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    : null;
```

- [ ] **Step 3: Verificar TypeScript (imports e constantes)**

```bash
npx tsc --noEmit
```

Saída esperada: nenhum erro.

- [ ] **Step 4: Adicionar estado e refs no componente**

Dentro do componente `WritingBox`, após a linha `const [showHelp, setShowHelp] = useState(false);` (linha 100), adicione:

```ts
const [isListening, setIsListening] = useState(false);
const recogRef = useRef<SpeechRecognition | null>(null);
const typedTextRef = useRef(typedText);
useEffect(() => { typedTextRef.current = typedText; }, [typedText]);
```

- [ ] **Step 5: Adicionar handlers de ditado**

Após o bloco de `useEffect` do Step 4 (ainda dentro do componente, antes do `return`), adicione:

```ts
const startDictation = () => {
  if (!SpeechRec) return;
  const recognition: SpeechRecognition = new SpeechRec();
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

- [ ] **Step 6: Verificar TypeScript (handlers)**

```bash
npx tsc --noEmit
```

Saída esperada: nenhum erro. Se `SpeechRecognition` não está nos tipos DOM (TS 6 inclui), pode aparecer erro de tipo — neste caso, trocar `new SpeechRec()` por `new SpeechRec() as SpeechRecognition` já está no código; se o tipo base falhar, tipar como `any` apenas a instância: `const recognition = new SpeechRec() as any;` e remover a anotação de tipo `: SpeechRecognition` da declaração.

- [ ] **Step 7: Adicionar botão de mic no JSX do header**

No JSX do componente, no bloco do header (`<div style={{ background: \`linear-gradient(90deg...)\` ...}>`), localize o botão de ajuda (`HelpCircle`) — linhas ~183–207. O botão de mic deve ser inserido **imediatamente antes** do botão `Trash2` (linhas ~209–231).

Localize exatamente este bloco (o botão Trash2):

```tsx
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
```

Insira o bloco do mic **imediatamente antes** desse botão Trash2:

```tsx
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
```

- [ ] **Step 8: Verificar TypeScript (JSX completo)**

```bash
npx tsc --noEmit
```

Saída esperada: nenhum erro.

- [ ] **Step 9: Testar no Chrome**

```bash
npm run dev
```

Abra `http://localhost:5173` no Chrome. Alterne para o modo teclado (ícone de teclado no topo). O que verificar:

1. **Botão aparece:** No cabeçalho de cada caixa (EN, IT, DE, JP), deve aparecer um ícone de microfone (`Mic`) ao lado do botão de lixeira.
2. **Botão ativo:** Clique no mic da caixa EN. O browser pede permissão de microfone na primeira vez — aceite. O ícone muda para `MicOff` e o fundo do botão fica mais claro (`rgba(255,255,255,0.35)`).
3. **Transcrição:** Fale algo em inglês. Após uma pausa, o texto transcrito deve aparecer no textarea da caixa EN.
4. **Append:** Se já havia texto no textarea, a transcrição deve ser adicionada ao final com um espaço.
5. **Parar:** Clique no mic novamente. O ícone volta para `Mic` e o fundo fica normal.
6. **Idioma correto:** Teste a caixa JP — ao ditar, o reconhecimento deve usar `ja-JP`. Fale japonês básico.
7. **Modo caneta:** Alterne para o modo caneta (ícone de pena). O botão de mic deve desaparecer de todas as caixas.

- [ ] **Step 10: Testar fallback no Firefox**

Abra `http://localhost:5173` no Firefox. No modo teclado, o botão de microfone **não deve aparecer** no cabeçalho das caixas — a ausência do botão é o comportamento correto. Nenhum erro deve aparecer no console.

- [ ] **Step 11: Commit**

```bash
git add src/components/WritingBox.tsx
git commit -m "Feat: adicionar Web Speech API para ditado por voz em cada caixa de idioma"
```
