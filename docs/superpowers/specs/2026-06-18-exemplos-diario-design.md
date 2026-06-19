# Design: Exemplos de Texto com Progressão Gramatical Intencional

**Data:** 2026-06-18  
**Arquivo alvo:** `src/data/suggestions.ts`  
**Escopo:** Reescrever as 960 frases de exemplo (48 semanas × 5 níveis × 4 idiomas)

---

## Problema

Os exemplos atuais escalam mecanicamente: os 5 níveis de cada semana são basicamente a mesma frase com palavras adicionadas. Isso não ensina gramática — apenas aumenta o tamanho da sentença. Além disso, os exemplos soam como livro didático, não como falantes nativos.

## Solução

Cada conjunto de 5 exemplos por semana segue um **ladder gramatical** específico do seu módulo. Os 5 exemplos são frases genuinamente diferentes que demonstram, cada uma, um degrau da escada gramatical — de forma implícita, sem rótulos visíveis. O nível 5 incorpora sempre um elemento de registro nativo (partículas modais, construções participiais, expressões idiomáticas).

---

## Princípios

1. **Progressão micro:** A progressão gramatical acontece dentro de cada semana (os 5 exemplos), não entre módulos.
2. **Frases genuinamente diferentes:** Nenhum nível é derivado do anterior por adição de palavras. Cada exemplo é uma frase nova e autônoma.
3. **Formas equivalentes entre idiomas:** Cada nível ensina o conceito gramatical equivalente nos 4 idiomas (EN/IT/DE/JP) — não o mesmo conceito abstrato, mas a estrutura que cada idioma usa para expressar a mesma função.
4. **Empréstimo de registro nativo no nível 5:**
   - EN: contrações, expressões idiomáticas, inversão marcada
   - IT: congiuntivo, conectores literários (eppure, mica), construções participiais
   - DE: partículas modais (ja, doch, eigentlich, mal)
   - JP: んです/んですが (registro informal/explicativo), てしまう (carga emocional), sentence-final ね/よ com nuance

---

## Os 12 Ladders Gramaticais

### Módulo 1 — Janeiro: Rotina (Presente Simples)

| Nível | Conceito | EN | IT | DE | JP |
|---|---|---|---|---|---|
| 1 | SV mínimo | `S + verb` | `S + verbo` (sujeito omitido) | `S + Verb` (separável) | `V-masu` (sujeito omitido) |
| 2 | + Adjunto de tempo | `+ at 7 AM` | `+ alle 7` | `+ um 7 Uhr` | `+ 7時に` |
| 3 | Frequência fronteada | `Usually, I…` | `Di solito, …` | `Meistens stehe ich…` (inversão obrigatória!) | `たいてい〜` |
| 4 | Coordenação temporal | `…and then I…` | `…e poi…` | `…und dann…` | `〜て、〜ます` (te-form chaining) |
| 5 | Concessão + registro nativo | `Even though I…` + contrações | `…eppure…` / `una volta + participio` | `Obwohl ich ja… eigentlich` (partículas modais) | `〜んですが、〜てしまいます` |

---

### Módulo 2 — Fevereiro: Gostos

| Nível | Conceito | EN | IT | DE | JP |
|---|---|---|---|---|---|
| 1 | Gostar de + substantivo | `I love coffee` | `Adoro il caffè` | `Ich liebe Kaffee` | `〜が好きです` |
| 2 | Gostar de + infinitivo/gerúndio | `I love drinking…` | `Adoro bere…` | `Ich liebe es, zu…` | `〜のが好きです` |
| 3 | Intensificador | `I really love…` | `Mi piace moltissimo…` | `Ich liebe es sehr,…` | `〜が大好きです` |
| 4 | Comparativo de preferência | `I prefer X to Y` | `Preferisco X a Y` | `Ich mag X lieber als Y` | `YよりXの方が好きです` |
| 5 | Razão idiomática | `There's nothing like…` | `Non c'è niente di meglio di…` | `Nichts geht über…` | `〜ほど好きなものはない` |

---

### Módulo 3 — Março: Futuro Próximo

| Nível | Conceito | EN | IT | DE | JP |
|---|---|---|---|---|---|
| 1 | Futuro simples | `going to` | `ho intenzione di` | `werde…` | `〜つもりです` |
| 2 | + Complemento específico | `going to visit…` | `vado a…` | `werde…besuchen` | `〜に行くつもりです` |
| 3 | + Finalidade | `…in order to…` | `…per…` | `…um…zu…` | `〜ために` |
| 4 | + Condição temporal | `…if I have time` | `…se ho tempo` | `…wenn ich Zeit habe` | `〜たら` |
| 5 | Concessão futura + registro | `…even if it's hard` + idiomático | `…anche se sarà difficile` | `…auch wenn es schwer wird, doch` | `〜ても、きっと〜てみせます` |

---

### Módulo 4 — Abril: Passado

| Nível | Conceito | EN | IT | DE | JP |
|---|---|---|---|---|---|
| 1 | Passado + marcador temporal | `Yesterday I…` | `Ieri ho…` | `Gestern habe ich…` | `昨日〜ました` |
| 2 | Sequência de verbos no passado | `I …ed and …ed` | `Ho… e ho…` | `Ich habe… und…` | `〜て、〜ました` |
| 3 | Causa no passado | `…because I…` | `…perché…` | `…weil ich…` | `〜ので` |
| 4 | Contraste no passado | `…but I managed to…` | `…ma sono riuscito/a a…` | `…aber ich habe es geschafft,…` | `〜が、〜ました` |
| 5 | Anterioridade temporal + registro | `By the time…, I had already…` | `Quando…, avevo già…` | `Als…, hatte ich schon…` | `〜たとき、もう〜ていました` |

---

### Módulo 5 — Maio: Conectores Narrativos

| Nível | Conceito | EN | IT | DE | JP |
|---|---|---|---|---|---|
| 1 | Sequência: primeiro | `First, I…` | `Prima, ho…` | `Zuerst habe ich…` | `まず〜ました` |
| 2 | Sequência: depois | `Then, I…` | `Poi, ho…` | `Dann habe ich…` | `それから〜ました` |
| 3 | Consequência | `so I…` | `quindi ho…` | `also habe ich…` | `〜だから〜ました` |
| 4 | Causa explícita | `because…` | `perché…` | `weil…` (verbo no fim!) | `〜ので` |
| 5 | Concessão narrativa + registro | `even though…` idiomático | `anche se…, mica…` | `obwohl…, habe ich's doch…` | `〜けれど、〜てしまいました` |

---

### Módulo 6 — Junho: Comparação

| Nível | Conceito | EN | IT | DE | JP |
|---|---|---|---|---|---|
| 1 | Comparativo de superioridade | `bigger than` | `più grande di` | `größer als` | `〜より大きい` |
| 2 | Superlativo | `the most…` | `il più…` | `am meisten…` | `一番〜` |
| 3 | Comparativo de igualdade | `as…as` | `così…come` | `so…wie` | `〜と同じくらい` |
| 4 | Superlativo + relativa | `the best I've ever…` | `il migliore che abbia mai…` (congiuntivo!) | `das Beste, was ich je…` | `今まで〜した中で一番` |
| 5 | Preferência implícita + registro | `I'd take X over Y any day` | `Tra X e Y, X vince sempre` | `X gefällt mir eigentlich viel mehr` | `どちらかといえばXの方が断然好き` |

---

### Módulo 7 — Julho: Opinião

| Nível | Conceito | EN | IT | DE | JP |
|---|---|---|---|---|---|
| 1 | Opinião simples | `I think it's…` | `Penso che sia…` | `Ich finde es…` | `〜と思います` |
| 2 | Opinião + cláusula | `I think that…` | `Penso che…` (congiuntivo!) | `Ich finde, dass…` | `〜と思います` |
| 3 | Opinião + razão | `I think X because Y` | `Penso che X perché Y` | `Ich finde X, weil Y` | `〜と思います。なぜなら〜` |
| 4 | Concessão de opinião | `Although X, I believe Y` | `Anche se X, credo che Y` | `Obwohl X, glaube ich, dass Y` | `〜ですが、〜と思います` |
| 5 | Hedging formal + modo | `It seems to me that…` | `Mi sembra che…` (congiuntivo) | `Meiner Meinung nach dürfte…` (Konjunktiv II) | `〜のではないかと思います` |

---

### Módulo 8 — Agosto: Causa & Consequência

| Nível | Conceito | EN | IT | DE | JP |
|---|---|---|---|---|---|
| 1 | Consequência simples | `so I…` | `quindi ho…` | `deshalb habe ich…` | `〜だから〜ました` |
| 2 | Causa subordinada | `because I…` | `perché…` | `weil ich…` | `〜ので` |
| 3 | Propósito | `in order to…` | `per…` | `um…zu…` | `〜ために` |
| 4 | Resultado formal | `as a result,…` | `di conseguenza,…` | `dadurch…` | `その結果、〜` |
| 5 | Cadeia causal + registro | `…which led me to…` | `…il che mi ha portato a…` | `…was mich dazu gebracht hat,…` | `〜ことになり、〜てしまいました` |

---

### Módulo 9 — Setembro: Contraste

| Nível | Conceito | EN | IT | DE | JP |
|---|---|---|---|---|---|
| 1 | Coordenação adversativa | `but` | `ma` | `aber` | `〜が` |
| 2 | Conector adverbial formal | `however` | `però` | `jedoch` | `しかし` |
| 3 | Concessão subordinada | `although` | `anche se` | `obwohl` | `〜けれど` |
| 4 | Contraste paralelo | `on one hand…on the other` | `da un lato…dall'altro` | `einerseits…andererseits` | `一方では〜、他方では〜` |
| 5 | Concessão com preposição + registro | `despite + noun` formal | `nonostante + nome` | `trotz + Genitiv` | `〜にもかかわらず` |

---

### Módulo 10 — Outubro: Hipóteses

| Nível | Conceito | EN | IT | DE | JP |
|---|---|---|---|---|---|
| 1 | Condicional real | `If I have…, I will…` | `Se ho…, farò…` | `Wenn ich…habe, werde ich…` | `〜なら〜ます` |
| 2 | Condicional irreal presente | `If I had…, I would…` | `Se avessi…, farei…` | `Wenn ich…hätte, würde ich…` | `〜たら〜のに` |
| 3 | + Elaboração do resultado | `…I would finally be able to…` | `…potrei finalmente…` | `…könnte ich endlich…` | `〜ことができるのに` |
| 4 | Condicional irreal passado | `If I had done…, I would have…` | `Se avessi fatto…, avrei…` | `Wenn ich…hätte, hätte ich…` | `〜ていたら〜たのに` |
| 5 | Wish/desejo + registro | `I wish I had…` | `Magari avessi…` | `Ich wünschte, ich hätte…` | `〜ばよかった` |

---

### Módulo 11 — Novembro: Orações Relativas

| Nível | Conceito | EN | IT | DE | JP |
|---|---|---|---|---|---|
| 1 | Relativa de sujeito | `who/that…` | `che…` | `der/die/das…` | `〜人` |
| 2 | Relativa de objeto | `that I…` | `che ho…` | `den/die/das ich…` | `〜もの` |
| 3 | Relativa de lugar | `where…` | `dove…` | `wo…` | `〜ところ` |
| 4 | Relativa de tempo | `when…` | `quando…` | `als/wenn…` | `〜とき` |
| 5 | Relativa não-restritiva + registro | `…, which surprised me` | `…, il che mi ha sorpreso` | `…, was mich überrascht hat` | `〜で、それが意外でした` |

---

### Módulo 12 — Dezembro: Reflexão do Ano

| Nível | Conceito | EN | IT | DE | JP |
|---|---|---|---|---|---|
| 1 | Passado + avaliação | `This year was…` | `Quest'anno è stato…` | `Dieses Jahr war…` | `今年は〜でした` |
| 2 | Passado + aprendizado | `I learned that…` | `Ho imparato che…` | `Ich habe gelernt, dass…` | `〜と学びました` |
| 3 | Presente perfeito de conquista | `I've managed to…` | `Sono riuscito/a a…` | `Ich habe es geschafft,…` | `〜ことができました` |
| 4 | Futuro de esperança | `I hope to…` | `Spero di…` | `Ich hoffe, zu…` | `〜たいと思います` |
| 5 | Carta a si mesmo + modo | `I hope you are…` | `Spero che tu sia…` (congiuntivo) | `Ich hoffe, du bist…` | `〜でいてほしい` |

---

## Exemplo Completo: Semana 0 — "A minha manhã"

*Módulo 1, Semana 1. Demonstra o ladder completo do Módulo 1.*

### Nível 1 — SV mínimo
- EN: `I wake up early.`
- IT: `Mi sveglio presto.`
- DE: `Ich stehe früh auf.`
- JP: `早く起きます。(Hayaku okimasu.)`

### Nível 2 — + Adjunto de tempo
- EN: `I wake up at half past six.`
- IT: `Mi sveglio alle sei e mezza.`
- DE: `Ich stehe um halb sieben auf.`
- JP: `６時半に起きます。(Rokuji han ni okimasu.)`

### Nível 3 — Frequência fronteada (inversão obrigatória em DE)
- EN: `Most mornings, I wake up before my alarm even goes off.`
- IT: `Di solito mi sveglio prima che suoni la sveglia.`
- DE: `Meistens stehe ich auf, bevor der Wecker klingelt.`
- JP: `たいてい目覚ましが鳴る前に起きます。(Taitei mezamashi ga naru mae ni okimasu.)`

### Nível 4 — Coordenação temporal (て-form chaining em JP)
- EN: `I wake up, make myself a coffee, and sit by the window for a few minutes.`
- IT: `Mi sveglio, mi faccio un caffè e mi siedo vicino alla finestra.`
- DE: `Ich stehe auf, mache mir einen Kaffee und setze mich ans Fenster.`
- JP: `起きて、コーヒーを淹れて、窓の外をしばらく眺めます。(Okite, kōhī o irete, mado no soto o shibaraku nagamemasu.)`

### Nível 5 — Concessão + empréstimo de registro nativo
- EN: `Even though I'm really not a morning person, I always end up feeling so much better once I'm up.`
- IT: `Non sono proprio un tipo mattutino, eppure una volta alzato mi sento sempre molto meglio.`
- DE: `Obwohl ich ja kein Morgenmensch bin, geht es mir nach dem Aufstehen eigentlich immer besser.`
- JP: `朝が苦手なんですが、起き上がると不思議と気分がよくなってしまいます。(Asa ga nigate na n desu ga, okiagaru to fushigi to kibun ga yoku natte shimaimasu.)`

---

## Escopo da Implementação

- **Arquivo:** `src/data/suggestions.ts`
- **Entradas:** 48 (índices 0–47, uma por semana)
- **Por entrada:** 4 idiomas × 5 exemplos = 20 strings
- **Total:** 960 strings reescritas
- **Nenhuma mudança na interface TypeScript:** a estrutura `{ [weekIndex: number]: GradedSuggestions }` e `GradedSuggestions { EN, IT, DE, JP: string[] }` permanece idêntica
- **Nenhuma mudança em outros arquivos:** `prompts.ts`, `App.tsx` e demais arquivos não são alterados

## Mapeamento Semana → Módulo

| Semanas | Módulo | Ladder |
|---|---|---|
| 0–3 | Janeiro — Rotina | Módulo 1 |
| 4–7 | Fevereiro — Gostos | Módulo 2 |
| 8–11 | Março — Futuro | Módulo 3 |
| 12–15 | Abril — Passado | Módulo 4 |
| 16–19 | Maio — Conectores | Módulo 5 |
| 20–23 | Junho — Comparação | Módulo 6 |
| 24–27 | Julho — Opinião | Módulo 7 |
| 28–31 | Agosto — Causa/Consequência | Módulo 8 |
| 32–35 | Setembro — Contraste | Módulo 9 |
| 36–39 | Outubro — Hipóteses | Módulo 10 |
| 40–43 | Novembro — Relativos | Módulo 11 |
| 44–47 | Dezembro — Reflexão | Módulo 12 |
