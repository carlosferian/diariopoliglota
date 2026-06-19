# Progressão Gramatical — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reescrever as 960 frases de `src/data/suggestions.ts` para que os 5 exemplos de cada semana sigam um ladder gramatical intencional, ensinando implicitamente gramática e vocabulário nativo.

**Architecture:** Um único arquivo é alterado — `src/data/suggestions.ts`. A interface TypeScript não muda. Cada conjunto de 5 strings por idioma passa a demonstrar 5 degraus gramaticais distintos conforme os 12 ladders definidos na spec. O trabalho é dividido em 12 tarefas, uma por módulo (4 semanas cada).

**Tech Stack:** TypeScript, dados estáticos (sem dependências externas)

**Spec de referência:** `docs/superpowers/specs/2026-06-18-exemplos-diario-design.md`

## Global Constraints

- Nenhuma mudança na interface `GradedSuggestions` nem em `SUGGESTIONS`
- Cada array tem exatamente 5 strings, ordenadas do nível 1 (mais simples) ao nível 5 (mais nativo)
- JP: toda frase inclui romaji entre parênteses no formato `texto。(Romaji.)`
- Nível 5: sempre inclui elemento de registro nativo (ver spec, seção "Empréstimo de registro nativo")
- Os 5 exemplos são frases genuinamente diferentes — nunca variações da mesma frase com palavras adicionadas
- Cada nível demonstra o degrau do ladder do módulo correspondente (ver tabela Mapeamento Semana→Módulo na spec)

---

## Mapeamento Semana → Módulo

| Índices | Módulo | Tema | Ladder |
|---|---|---|---|
| 0–3 | Jan | Rotina | SV → +tempo → freq. fronteada → coord. → concessão |
| 4–7 | Fev | Gostos | S+N → S+inf → intensif. → comparativo → razão idiomática |
| 8–11 | Mar | Futuro | fut.simples → +complemento → +finalidade → +condição → concessão futura |
| 12–15 | Abr | Passado | passado+tempo → sequência → causa → contraste → anterioridade |
| 16–19 | Mai | Conectores | primeiro → depois → consequência → causa → concessão narrativa |
| 20–23 | Jun | Comparação | comparativo → superlativo → igualdade → sup+relativa → preferência implícita |
| 24–27 | Jul | Opinião | opinião simples → +cláusula → +razão → concessão → hedging formal |
| 28–31 | Ago | Causa/Conseq. | consequência → causa subord. → propósito → resultado formal → cadeia causal |
| 32–35 | Set | Contraste | but → however → although → on one hand → despite |
| 36–39 | Out | Hipóteses | cond.real → cond.irreal pres. → elaboração → cond.irreal pass. → wish |
| 40–43 | Nov | Relativos | relat.sujeito → relat.objeto → relat.lugar → relat.tempo → relat.não-restritiva |
| 44–47 | Dez | Reflexão | passado+aval. → aprendizado → conquista → esperança → carta a si mesmo |

---

## Task 1: Módulo Janeiro — Rotina (semanas 0–3)

**Files:**
- Modify: `src/data/suggestions.ts` — índices 0, 1, 2, 3

**Ladder (Módulo 1):**
- L1: SV mínimo (sujeito omitido onde natural em IT/JP)
- L2: + adjunto de tempo
- L3: frequência fronteada → inversão obrigatória em DE (`Meistens stehe ich…`)
- L4: coordenação temporal (て-form chaining em JP)
- L5: concessão + partículas modais DE (`ja`, `eigentlich`), `んですが`+`てしまいます` JP, `eppure`/participio IT, contrações EN

**Temas das 4 semanas:**
- Semana 0: manhã (acordar, café)
- Semana 1: trajeto ao trabalho/escola
- Semana 2: noite (relaxar, dormir)
- Semana 3: sábado típico

- [ ] **Step 1:** Reescrever semanas 0–3 em `src/data/suggestions.ts` seguindo o ladder acima. Verificar: (a) nenhum exemplo é variação do anterior; (b) L3 DE usa inversão; (c) L5 tem elemento nativo; (d) JP tem romaji.
- [ ] **Step 2:** Confirmar que `npx tsc --noEmit` passa sem erros.
- [ ] **Step 3:** Commit: `git commit -m "Content: reescrever módulo Janeiro com ladder gramatical"`

---

## Task 2: Módulo Fevereiro — Gostos (semanas 4–7)

**Files:**
- Modify: `src/data/suggestions.ts` — índices 4, 5, 6, 7

**Ladder (Módulo 2):**
- L1: gostar de + substantivo
- L2: gostar de + infinitivo/gerúndio (`〜のが好きです`, `Ich liebe es, zu…`)
- L3: intensificador (`really`, `moltissimo`, `sehr`, `大好き`)
- L4: comparativo de preferência (`prefer X to Y`, `lieber als`, `〜より〜の方が`)
- L5: razão idiomática (`There's nothing like…`, `Nichts geht über…`, `〜ほど好きなものはない`)

**Temas das 4 semanas:**
- Semana 4: comida favorita
- Semana 5: hobbies no tempo livre
- Semana 6: música e filmes
- Semana 7: coisas que não gosta

- [ ] **Step 1:** Reescrever semanas 4–7. Para semana 7 (coisas que não gosta), inverter o ladder: L1 é "não gosto de + N", L5 é a forma idiomática negativa nativa.
- [ ] **Step 2:** Confirmar `npx tsc --noEmit` passa.
- [ ] **Step 3:** Commit: `git commit -m "Content: reescrever módulo Fevereiro com ladder gramatical"`

---

## Task 3: Módulo Março — Futuro Próximo (semanas 8–11)

**Files:**
- Modify: `src/data/suggestions.ts` — índices 8, 9, 10, 11

**Ladder (Módulo 3):**
- L1: futuro simples (`going to`, `ho intenzione di`, `werde`, `〜つもりです`)
- L2: + complemento específico
- L3: + finalidade (`in order to`, `per`, `um…zu`, `〜ために`)
- L4: + condição temporal (`if I have time`, `wenn ich Zeit habe`, `〜たら`)
- L5: concessão futura + registro (`even if it's hard`, `auch wenn es schwer wird, doch`, `〜ても、きっと〜てみせます`)

**Temas das 4 semanas:**
- Semana 8: planos de hoje
- Semana 9: próximo fim de semana
- Semana 10: viagem dos sonhos
- Semana 11: metas do mês

- [ ] **Step 1:** Reescrever semanas 8–11.
- [ ] **Step 2:** Confirmar `npx tsc --noEmit` passa.
- [ ] **Step 3:** Commit: `git commit -m "Content: reescrever módulo Março com ladder gramatical"`

---

## Task 4: Módulo Abril — Passado (semanas 12–15)

**Files:**
- Modify: `src/data/suggestions.ts` — índices 12, 13, 14, 15

**Ladder (Módulo 4):**
- L1: passado + marcador temporal (`Yesterday I…`, `Ieri ho…`, `Gestern habe ich…`, `昨日〜ました`)
- L2: sequência de verbos no passado (て-form em JP, `e ho` IT, `und` DE)
- L3: causa no passado (`because`, `perché`, `weil` + verbo no fim, `〜ので`)
- L4: contraste no passado (`but I managed to`, `ma sono riuscito/a a`, `aber ich habe es geschafft`)
- L5: anterioridade temporal (`By the time…, I had already…`, `Quando…, avevo già…`, `Als…, hatte ich schon…`, `〜たとき、もう〜ていました`)

**Temas das 4 semanas:**
- Semana 12: ontem
- Semana 13: melhor refeição
- Semana 14: lugar visitado
- Semana 15: algo que aconteceu esta semana

- [ ] **Step 1:** Reescrever semanas 12–15.
- [ ] **Step 2:** Confirmar `npx tsc --noEmit` passa.
- [ ] **Step 3:** Commit: `git commit -m "Content: reescrever módulo Abril com ladder gramatical"`

---

## Task 5: Módulo Maio — Conectores Narrativos (semanas 16–19)

**Files:**
- Modify: `src/data/suggestions.ts` — índices 16, 17, 18, 19

**Ladder (Módulo 5):**
- L1: primeiro (`First`, `Prima`, `Zuerst`, `まず`)
- L2: depois (`Then`, `Poi`, `Dann`, `それから`)
- L3: consequência (`so`, `quindi`, `also`, `〜だから`)
- L4: causa explícita (`because`, `perché`, `weil` + verbo no fim, `〜ので`)
- L5: concessão narrativa + registro (`even though…`, `anche se…, mica`, `obwohl…, habe ich's doch`, `〜けれど、〜てしまいました`)

**Temas das 4 semanas:**
- Semana 16: manhã passo a passo
- Semana 17: um pequeno problema resolvido
- Semana 18: por que fiz isso
- Semana 19: uma história curta vivida

- [ ] **Step 1:** Reescrever semanas 16–19.
- [ ] **Step 2:** Confirmar `npx tsc --noEmit` passa.
- [ ] **Step 3:** Commit: `git commit -m "Content: reescrever módulo Maio com ladder gramatical"`

---

## Task 6: Módulo Junho — Comparação (semanas 20–23)

**Files:**
- Modify: `src/data/suggestions.ts` — índices 20, 21, 22, 23

**Ladder (Módulo 6):**
- L1: comparativo de superioridade (`bigger than`, `più grande di`, `größer als`, `〜より大きい`)
- L2: superlativo (`the most`, `il più`, `am meisten`, `一番`)
- L3: comparativo de igualdade (`as…as`, `così…come`, `so…wie`, `〜と同じくらい`)
- L4: superlativo + relativa (`the best I've ever…`, `il migliore che abbia mai…` com congiuntivo!, `das Beste, was ich je…`, `今まで〜した中で一番`)
- L5: preferência implícita + registro (`I'd take X over Y any day`, `Tra X e Y, X vince sempre`, `X gefällt mir eigentlich viel mehr`, `どちらかといえばXの方が断然好き`)

**Temas das 4 semanas:**
- Semana 20: duas cidades comparadas
- Semana 21: pessoa que admiro
- Semana 22: antes e agora (o que mudou)
- Semana 23: o melhor da minha cidade

- [ ] **Step 1:** Reescrever semanas 20–23.
- [ ] **Step 2:** Confirmar `npx tsc --noEmit` passa.
- [ ] **Step 3:** Commit: `git commit -m "Content: reescrever módulo Junho com ladder gramatical"`

---

## Task 7: Módulo Julho — Opinião (semanas 24–27)

**Files:**
- Modify: `src/data/suggestions.ts` — índices 24, 25, 26, 27

**Ladder (Módulo 7):**
- L1: opinião simples (`I think it's…`, `Penso che sia…`, `Ich finde es…`, `〜と思います`)
- L2: opinião + cláusula (`I think that…`, `Penso che…` + congiuntivo!, `Ich finde, dass…`, `〜と思います`)
- L3: opinião + razão (`I think X because Y`, `perché`, `weil`, `なぜなら`)
- L4: concessão de opinião (`Although X, I believe Y`, `Anche se X, credo che Y`, `Obwohl X, glaube ich, dass Y`, `〜ですが、〜と思います`)
- L5: hedging formal + modo (`It seems to me that…`, `Mi sembra che…` congiuntivo, `Meiner Meinung nach dürfte…` Konjunktiv II, `〜のではないかと思います`)

**Temas das 4 semanas:**
- Semana 24: redes sociais
- Semana 25: concordar/discordar sobre aprender línguas
- Semana 26: melhor conselho a dar
- Semana 27: dinheiro traz felicidade?

- [ ] **Step 1:** Reescrever semanas 24–27.
- [ ] **Step 2:** Confirmar `npx tsc --noEmit` passa.
- [ ] **Step 3:** Commit: `git commit -m "Content: reescrever módulo Julho com ladder gramatical"`

---

## Task 8: Módulo Agosto — Causa & Consequência (semanas 28–31)

**Files:**
- Modify: `src/data/suggestions.ts` — índices 28, 29, 30, 31

**Ladder (Módulo 8):**
- L1: consequência simples (`so`, `quindi`, `deshalb`, `〜だから`)
- L2: causa subordinada (`because`, `perché`, `weil` + verbo no fim, `〜ので`)
- L3: propósito (`in order to`, `per`, `um…zu`, `〜ために`)
- L4: resultado formal (`as a result`, `di conseguenza`, `dadurch`, `その結果`)
- L5: cadeia causal + registro (`…which led me to…`, `…il che mi ha portato a…`, `…was mich dazu gebracht hat,…`, `〜ことになり、〜てしまいました`)

**Temas das 4 semanas:**
- Semana 28: algo que aconteceu por uma causa
- Semana 29: uma decisão difícil
- Semana 30: quando não durmo bem
- Semana 31: algo difícil que valeu a pena

- [ ] **Step 1:** Reescrever semanas 28–31.
- [ ] **Step 2:** Confirmar `npx tsc --noEmit` passa.
- [ ] **Step 3:** Commit: `git commit -m "Content: reescrever módulo Agosto com ladder gramatical"`

---

## Task 9: Módulo Setembro — Contraste (semanas 32–35)

**Files:**
- Modify: `src/data/suggestions.ts` — índices 32, 33, 34, 35

**Ladder (Módulo 9):**
- L1: coordenação adversativa (`but`, `ma`, `aber`, `〜が`)
- L2: conector adverbial formal (`however`, `però`, `jedoch`, `しかし`)
- L3: concessão subordinada (`although`, `anche se`, `obwohl`, `〜けれど`)
- L4: contraste paralelo (`on one hand…on the other`, `da un lato…dall'altro`, `einerseits…andererseits`, `一方では〜、他方では〜`)
- L5: concessão com preposição + registro (`despite + noun`, `nonostante + nome`, `trotz + Genitiv`, `〜にもかかわらず`)

**Temas das 4 semanas:**
- Semana 32: algo bom com lado ruim
- Semana 33: algo feito sem vontade
- Semana 34: vantagens e desvantagens de morar na cidade
- Semana 35: algo difícil pelo qual sou grato

- [ ] **Step 1:** Reescrever semanas 32–35.
- [ ] **Step 2:** Confirmar `npx tsc --noEmit` passa.
- [ ] **Step 3:** Commit: `git commit -m "Content: reescrever módulo Setembro com ladder gramatical"`

---

## Task 10: Módulo Outubro — Hipóteses (semanas 36–39)

**Files:**
- Modify: `src/data/suggestions.ts` — índices 36, 37, 38, 39

**Ladder (Módulo 10):**
- L1: condicional real (`If I have…, I will…`, `Se ho…, farò…`, `Wenn ich…habe, werde ich…`, `〜なら〜ます`)
- L2: condicional irreal presente (`If I had…, I would…`, `Se avessi…, farei…`, `Wenn ich…hätte, würde ich…`, `〜たら〜のに`)
- L3: + elaboração do resultado (`I would finally be able to…`, `potrei finalmente…`, `könnte ich endlich…`, `〜ことができるのに`)
- L4: condicional irreal passado (`If I had done…, I would have…`, `Se avessi fatto…, avrei…`, `Wenn ich…hätte, hätte ich…`, `〜ていたら〜たのに`)
- L5: wish/desejo + registro (`I wish I had…`, `Magari avessi…`, `Ich wünschte, ich hätte…`, `〜ばよかった`)

**Temas das 4 semanas:**
- Semana 36: se eu pudesse mudar algo
- Semana 37: dia perfeito
- Semana 38: no lugar de alguém (conselho)
- Semana 39: e se ganhasse na loteria

- [ ] **Step 1:** Reescrever semanas 36–39.
- [ ] **Step 2:** Confirmar `npx tsc --noEmit` passa.
- [ ] **Step 3:** Commit: `git commit -m "Content: reescrever módulo Outubro com ladder gramatical"`

---

## Task 11: Módulo Novembro — Orações Relativas (semanas 40–43)

**Files:**
- Modify: `src/data/suggestions.ts` — índices 40, 41, 42, 43

**Ladder (Módulo 11):**
- L1: relativa de sujeito (`who/that`, `che`, `der/die/das`, `〜人`)
- L2: relativa de objeto (`that I`, `che ho`, `den/die/das ich`, `〜もの`)
- L3: relativa de lugar (`where`, `dove`, `wo`, `〜ところ`)
- L4: relativa de tempo (`when`, `quando`, `als/wenn`, `〜とき`)
- L5: relativa não-restritiva + registro (`…, which surprised me`, `…, il che mi ha sorpreso`, `…, was mich überrascht hat`, `〜で、それが意外でした`)

**Temas das 4 semanas:**
- Semana 40: pessoa que mudou minha vida
- Semana 41: lugar onde me sinto bem
- Semana 42: algo que aprendi
- Semana 43: um dia que nunca esquecerei

- [ ] **Step 1:** Reescrever semanas 40–43.
- [ ] **Step 2:** Confirmar `npx tsc --noEmit` passa.
- [ ] **Step 3:** Commit: `git commit -m "Content: reescrever módulo Novembro com ladder gramatical"`

---

## Task 12: Módulo Dezembro — Reflexão do Ano (semanas 44–47)

**Files:**
- Modify: `src/data/suggestions.ts` — índices 44, 45, 46, 47

**Ladder (Módulo 12):**
- L1: passado + avaliação (`This year was…`, `Quest'anno è stato…`, `Dieses Jahr war…`, `今年は〜でした`)
- L2: passado + aprendizado (`I learned that…`, `Ho imparato che…`, `Ich habe gelernt, dass…`, `〜と学びました`)
- L3: presente perfeito de conquista (`I've managed to…`, `Sono riuscito/a a…`, `Ich habe es geschafft,…`, `〜ことができました`)
- L4: futuro de esperança (`I hope to…`, `Spero di…`, `Ich hoffe, zu…`, `〜たいと思います`)
- L5: carta a si mesmo + modo (`I hope you are…`, `Spero che tu sia…` congiuntivo, `Ich hoffe, du bist…`, `〜でいてほしい`)

**Temas das 4 semanas:**
- Semana 44: como foi o ano
- Semana 45: do que me orgulho
- Semana 46: o que quero para o próximo ano
- Semana 47: carta para mim mesmo

- [ ] **Step 1:** Reescrever semanas 44–47.
- [ ] **Step 2:** Confirmar `npx tsc --noEmit` passa.
- [ ] **Step 3:** Commit: `git commit -m "Content: reescrever módulo Dezembro com ladder gramatical"`

---

## Self-Review

**Cobertura da spec:**
- ✅ 12 ladders definidos (spec seção "Os 12 Ladders Gramaticais") → Tasks 1–12
- ✅ Elemento de registro nativo no L5 → especificado em cada task
- ✅ Frases genuinamente diferentes → explicitado no passo de verificação de cada task
- ✅ JP com romaji → Global Constraints
- ✅ Interface TypeScript inalterada → Global Constraints + nenhuma task cria/remove campos

**Placeholder scan:** Nenhum TBD, TODO ou "similar ao anterior".

**Consistência:** Todas as tasks referenciam o mesmo arquivo (`src/data/suggestions.ts`) e os mesmos índices sequenciais sem sobreposição (0–3, 4–7, … 44–47).
