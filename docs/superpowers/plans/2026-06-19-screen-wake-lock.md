# Screen Wake Lock Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Impedir que a tela do dispositivo apague enquanto o Diário Políglota estiver aberto, usando a Screen Wake Lock API nativa do navegador.

**Architecture:** Um único `useEffect` em `src/App.tsx` adquire o wake lock na montagem e re-adquire sempre que o tab volta ao foco (via `visibilitychange`). O lock é liberado no cleanup do efeito. Sem nova UI, sem novos arquivos.

**Tech Stack:** React 18 + TypeScript 6, Screen Wake Lock API (DOM nativa), Vite PWA

## Global Constraints

- Sem novos arquivos — alteração exclusivamente em `src/App.tsx`
- Sem nova UI (botão, ícone, toast) — a feature é silenciosa
- Sem dependências npm adicionais
- Degradação silenciosa em navegadores sem suporte (Safari, Firefox): nenhum erro, nenhum aviso ao usuário
- Erros de aquisição do lock (bateria fraca, permissão negada) capturados e ignorados silenciosamente
- TypeScript: usar o tipo `WakeLockSentinel` das lib DOM nativas (sem `@types` adicionais)

---

### Task 1: Adicionar wake lock em App.tsx

**Files:**
- Modify: `src/App.tsx` — adicionar `useEffect` de wake lock após o effect de inicialização do Google Drive (linha ~102)

**Interfaces:**
- Consumes: nada de outros módulos
- Produces: nada (efeito colateral puro)

- [ ] **Step 1: Localizar ponto de inserção**

Abra `src/App.tsx`. Encontre o bloco após o efeito de inicialização do Google Drive (termina em `}, [gdriveClientId]);`, em torno da linha 102). O novo effect será inserido logo abaixo desse bloco.

- [ ] **Step 2: Inserir o useEffect de wake lock**

Imediatamente após `}, [gdriveClientId]);` (linha ~102), adicione:

```ts
  // Screen Wake Lock — mantém a tela acesa enquanto o app está em uso
  useEffect(() => {
    let sentinel: WakeLockSentinel | null = null;

    const acquire = async () => {
      if ('wakeLock' in navigator && document.visibilityState === 'visible') {
        try {
          sentinel = await navigator.wakeLock.request('screen');
        } catch {
          // API indisponível ou permissão negada — degradação silenciosa
        }
      }
    };

    acquire();
    document.addEventListener('visibilitychange', acquire);

    return () => {
      document.removeEventListener('visibilitychange', acquire);
      sentinel?.release();
    };
  }, []);
```

- [ ] **Step 3: Verificar que TypeScript compila sem erros**

Execute no terminal (dentro de `E:/cursos/diariopoliglota`):

```bash
npx tsc --noEmit
```

Saída esperada: nenhuma linha de erro (saída vazia ou apenas warnings irrelevantes preexistentes).

- [ ] **Step 4: Iniciar o dev server e verificar no Chrome**

```bash
npm run dev
```

Abra `http://localhost:5173` no Chrome (desktop ou Android). Abra DevTools → Application → Background Services → Wake Locks. Você deve ver uma entrada `Screen` ativa enquanto o tab estiver em foco.

- [ ] **Step 5: Verificar re-aquisição ao voltar ao tab**

Com o app aberto no Chrome, alterne para outra aba por 3 segundos e volte. Em DevTools → Application → Wake Locks, o lock deve reaparecer com um novo timestamp. O lock some enquanto o tab está em background — esse é o comportamento correto.

- [ ] **Step 6: Verificar degradação silenciosa no Firefox**

Abra `http://localhost:5173` no Firefox. A tela não deve mostrar nenhum erro, aviso ou comportamento diferente do normal. O app funciona normalmente; apenas o wake lock não está ativo (Firefox não suporta a API).

- [ ] **Step 7: Commit**

```bash
git add src/App.tsx
git commit -m "Feat: adicionar Screen Wake Lock para manter tela acesa durante uso"
```
