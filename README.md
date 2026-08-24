# Diário Poliglota ✍️🌍

O **Diário Poliglota** é uma aplicação web progressiva (PWA) projetada para ajudar no aprendizado e prática de múltiplos idiomas simultaneamente (Inglês, Italiano, Alemão e Japonês). Combinando escrita manual (desenho no canvas) **ou** digitação por teclado, ditado por voz e sugestões de frases com progressão gramatical intencional, o projeto oferece uma experiência rica e imersiva para consolidar vocabulário diário.

🚀 **Hospedado para testes em**: [diariopoliglota.netlify.app](https://diariopoliglota.netlify.app)

---

## 🚀 Principais Funcionalidades

### ✍️ Dois Modos de Entrada: Caneta e Teclado
* **Modo Desenho (Canvas)**: Escreva à mão com o dedo ou caneta stylus em cada idioma.
* **Modo Teclado**: Alterne para digitação por teclado físico ou virtual — ideal para celular ou uso rápido. O modo é global (todos os idiomas trocam juntos) e os dois tipos de entrada coexistem: traços e texto são armazenados de forma independente por dia/idioma, então **trocar de modo nunca apaga nada**.
* **Atalho rápido**: `Ctrl+M` / `⌘+M` alterna entre caneta e teclado em qualquer contexto.

### 📝 Prática de Escrita à Mão (Canvas)
* **Desenho de alta precisão**: Traços suaves com o dedo ou caneta stylus.
* **Ferramentas de desenho**: Ajuste a espessura da ponta (fina, grossa), escolha a cor da tinta (Tinta clássica, Azul, Vermelho, Verde) e use a borracha.
* **Desfazer & Refazer (Undo/Redo)**: Suporte completo para navegar pelo histórico de traços.
* **Limpeza rápida**: Limpe o quadro instantaneamente com um botão dedicado.
* **Modo "Só Caneta" Automático**: Bloqueia o desenho para canetas stylus, permitindo que gestos com o dedo rolem a tela livremente. O recurso ativa-se de forma inteligente e automática assim que o primeiro traço com caneta é detectado (ideal para iPads e tablets).
* **Otimização de Escrita em Letra de Forma**: Evita cancelamentos de traço inesperados em movimentos verticais rápidos da caneta.

### 📖 Estilos de Papel Personalizados
Alterne o fundo do canvas para simular cadernos reais:
* **Pautado**: Linhas horizontais clássicas.
* **Cornell**: Layout com margem esquerda vermelha para anotações e sumário.
* **Quadriculado**: Ideal para escrita de caracteres orientais (Japonês/Kanji).
* **Pontilhado**: Grid de pontos sutis para guiar a escrita.
* **Branco**: Canvas livre sem linhas guia.

### 💡 Sugestões com Progressão Gramatical e TTS (Pronúncia)
* **Exemplos de inspiração**: Se estiver sem ideias, expanda as sugestões para ver frases de exemplo.
* **Ladder gramatical intencional**: As frases propostas seguem uma escada gramatical (*Simples ➔ Fácil ➔ Médio ➔ Complexo ➔ Avançado*). Cada nível é uma frase **genuinamente diferente** que demonstra um degrau de gramática — não a mesma frase com palavras adicionadas — ensinando estrutura de forma implícita. O nível mais avançado sempre incorpora registro nativo (contrações, partículas modais, expressões idiomáticas).
* **Ouvir Pronúncia**: Botão de Text-to-Speech (TTS) nativo do navegador para escutar a pronúncia correta de cada frase ou palavra em foco.
* **Palavra do Dia**: Cada idioma exibe um termo em destaque com sua tradução e uma frase de exemplo inicial.

### 🎙️ Ditado por Voz (Web Speech API)
* No **modo teclado**, um botão de microfone aparece no cabeçalho de cada caixa de idioma.
* O reconhecimento de fala usa a língua correta de cada caixa (`en-US`, `it-IT`, `de-DE`, `ja-JP`) e adiciona o texto transcrito ao final do conteúdo existente.
* Degradação silenciosa: em navegadores sem suporte (ex.: Firefox), o botão simplesmente não aparece.

### 🌓 Temas Dinâmicos e Cores Harmoniosas
* Temas dedicados com contraste refinado: **Claro**, **Escuro** (fundo de papel escuro de alto contraste) e **Sépia** (confortável para leitura noturna).
* Modo **Automático**: Ajusta o tema de acordo com o horário do dia.
* **Canetas e Tintas Adaptativas**: Cores e escritas antigas convertem-se de forma transparente entre temas claro/escuro para legibilidade contínua.
* Cores com identidade visual exclusiva para cada idioma.

### 📤 Exportar e Compartilhar
* **Exportar PNG do dia**: Gere uma imagem do seu dia. Em dispositivos compatíveis, o app abre o **menu nativo de compartilhamento** (Web Share API — WhatsApp, e-mail, etc.); onde não houver suporte, faz o download automaticamente.
* **Backup em JSON**: Exporte e restaure todos os seus dados. Usa a **File System Access API** para abrir os diálogos nativos de salvar/abrir arquivo do sistema operacional, com fallback transparente para download/`<input file>` em navegadores sem suporte.

### 🔄 Sincronização e Produtividade
* **Google Drive Sync**: Conecte o app ao seu Google Drive pessoal para salvar/sincronizar seus dados, mantendo o progresso unificado entre dispositivos sem depender de servidores centralizados.
* **Lembretes Diários**: Configure um horário personalizado para receber notificações locais no navegador, ajudando você a manter sua ofensiva (*streak*).
* **Medalhas & Ofensivas**: Sistema de conquistas integrado que premia consistência (dias seguidos, quadros preenchidos, etc.).

### 📱 Recursos Nativos (PWA)
* **Instalável e offline**: PWA com manifest e service worker — instale na tela inicial e use sem conexão.
* **Screen Wake Lock**: A tela não apaga enquanto você escreve; o lock é re-adquirido automaticamente ao voltar para o app.
* **Media Session**: O texto lido pelo TTS aparece na tela de bloqueio / central de mídia do sistema, com controles de Play/Pause/Stop.
* Todos esses recursos degradam silenciosamente onde o navegador não os suporta.

### ⌨️ Atalhos de Teclado
| Atalho | Ação |
|---|---|
| `←` / `→` | Navegar entre os dias |
| `1` `2` `3` `4` | Selecionar cor da tinta |
| `E` | Alternar borracha |
| `Ctrl+Z` / `⌘+Z` | Desfazer |
| `Ctrl+Shift+Z` / `Ctrl+Y` | Refazer |
| `Ctrl+M` / `⌘+M` | Alternar entre modo caneta e teclado |

---

## 🛠️ Tecnologias Utilizadas

* **React 19** & **TypeScript**
* **Vite** (Build tool rápida e otimizada)
* **Lucide React** (Pacote moderno de ícones)
* **HTML5 Canvas** (Para desenho de traços)
* **IndexedDB** (Persistência local de traços e textos)
* **Local Storage** (Preferências e estado rápido)
* **Web APIs nativas**: Speech Synthesis (TTS) & Speech Recognition (ditado), Web Share, File System Access, Screen Wake Lock, Media Session, Notifications
* **PWA** (Manifest + Service Worker)

---

## 📦 Instalação e Execução Local

Siga as etapas abaixo para rodar o projeto em sua máquina:

1. **Clonar o Repositório**:
   ```bash
   git clone https://github.com/carlosferian/diariopoliglota.git
   cd diariopoliglota
   ```

2. **Instalar Dependências**:
   ```bash
   npm install
   ```

3. **Executar o Servidor de Desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse a URL indicada no terminal (geralmente `http://localhost:5173`).

4. **Compilar para Produção**:
   ```bash
   npm run build
   ```
   Os arquivos finais otimizados serão gerados na pasta `dist/`.

5. **Verificar o Código (Lint)**:
   ```bash
   npm run lint
   ```

---

## 📂 Estrutura do Projeto

```
diariopoliglota/
├── docs/                       # Especificações de design e planos de implementação
│   └── superpowers/
│       ├── specs/              # Design specs das funcionalidades
│       └── plans/              # Planos de implementação
├── public/                     # Assets públicos (ícones, manifest, service worker)
├── src/
│   ├── components/             # Componentes React (WritingBox, ProgressModal, MedalToast)
│   ├── data/                   # Dados locais de prompts e sugestões diárias
│   ├── services/               # Regras de desenho (InkPad), persistência (DiaryStore) e Google Drive Sync
│   ├── utils/                  # Funções utilitárias (TTS/speech, validações)
│   ├── App.tsx                 # Componente raiz da aplicação
│   ├── App.css                 # Estilização complementar
│   ├── index.css               # Estilização global e sistema de grid
│   └── main.tsx                # Ponto de entrada do React
├── eslint.config.js            # Configuração do Linter
├── vite.config.ts              # Configuração do Vite
├── netlify.toml                # Configuração de build/deploy no Netlify
└── tsconfig.json               # Configuração do TypeScript
```

---

## 💡 Como Configurar o Google Drive Sync

Para sincronizar o progresso no Google Drive, insira um **Google Client ID** nas configurações avançadas do app.
1. Vá até o [Google Cloud Console](https://console.cloud.google.com/).
2. Crie um projeto, ative a **Google Drive API** e configure a tela de consentimento OAuth.
3. Crie uma credencial de **ID do cliente OAuth** do tipo "Aplicativo da Web".
4. Adicione a URL do seu app (ex: `https://seu-site.netlify.app` ou `http://localhost:5173`) na lista de **Origens JavaScript autorizadas**.
5. Copie o Client ID gerado, cole-o no menu de configurações do Diário Poliglota e clique em **Conectar**.

---

## 📚 Documentação

O diretório [`docs/superpowers`](docs/superpowers) contém as *design specs* e os planos de implementação de cada funcionalidade (modo teclado, ditado por voz, File System Access, Web Share, Media Session, Screen Wake Lock e a progressão gramatical das sugestões). São uma boa referência para entender as decisões de design e o comportamento esperado de cada recurso.

---

## 📄 Licença

Este projeto está licenciado sob os termos da licença descrita no repositório. Sinta-se livre para usar, estudar e contribuir!
