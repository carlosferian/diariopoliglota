# Screen Wake Lock — Design Spec

**Data:** 2026-06-19

## Objetivo

Impedir que a tela do dispositivo apague enquanto o Diário Políglota estiver aberto em primeiro plano, usando a Screen Wake Lock API do navegador.

---

## Comportamento

- O wake lock é adquirido automaticamente quando o app carrega.
- O navegador libera o lock automaticamente ao tab ir para background. Quando o usuário retorna ao tab (`visibilitychange → visible`), o lock é re-adquirido.
- Ao desmontar o app (tab fechado), o lock é liberado explicitamente.
- Em navegadores sem suporte (Safari, Firefox): degrada silenciosamente — nenhuma UI de erro, nenhum aviso ao usuário.
- Erros de aquisição (ex.: bateria fraca, permissão negada em alguns dispositivos) são capturados e ignorados silenciosamente.

---

## Implementação

### Arquivo alterado: `src/App.tsx`

Um único `useEffect` adicionado próximo ao topo dos effects existentes:

```ts
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

### TypeScript

`WakeLockSentinel` já está disponível nas lib DOM do TypeScript 4.4+. O projeto usa TypeScript ≥ 4.x, sem necessidade de `@types` adicionais.

---

## Fora de escopo

- Toggle manual na toolbar — YAGNI (o comportamento "sempre ativo" é suficiente)
- Indicador visual de estado do wake lock — YAGNI
- Configuração de tempo limite — YAGNI

---

## Arquivos alterados

| Arquivo | Mudança |
|---|---|
| `src/App.tsx` | Adicionar `useEffect` de wake lock (~10 linhas) |
