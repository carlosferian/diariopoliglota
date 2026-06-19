# Diário Poliglota ✍️🌍

O **Diário Poliglota** é uma aplicação web progressiva projetada para ajudar no aprendizado e prática de múltiplos idiomas simultaneamente (Inglês, Italiano, Alemão e Japonês). Utilizando escrita manual (desenho no canvas) e sugestões de frases interativas, o projeto oferece uma experiência rica e imersiva para consolidar vocabulário diário.

---

## 🚀 Principais Funcionalidades

### 📝 Prática de Escrita à Mão (Canvas)
* **Desenho de alta precisão**: Desenhe com o dedo ou caneta stylus em cada idioma.
* **Ferramentas de desenho**: Ajuste a espessura da ponta (fina, média, grossa) e altere a cor da tinta (Tinta clássica, Azul, Vermelho, Lápis).
* **Desfazer & Refazer (Undo/Redo)**: Suporte completo para navegar pelo histórico de traços.
* **Limpeza rápida**: Limpe o quadro instantaneamente com um botão dedicado.
* **Modo "Só Caneta"**: Bloqueia o desenho apenas para canetas stylus, permitindo que gestos com a mão rolem a tela livremente (ideal para iPads e tablets Android).

### 📖 Estilos de Papel Personalizados
Alterne o fundo do canvas para simular cadernos reais:
* **Pautado**: Linhas horizontais clássicas.
* **Cornell**: Layout com margem esquerda vermelha para anotações e sumário.
* **Quadriculado**: Ideal para escrita de caracteres orientais (Japonês/Kanji).
* **Pontilhado**: Grid de pontos sutis para guiar a escrita.
* **Branco**: Canvas livre sem linhas guia.

### 💡 Sugestões Progressivas e TTS (Pronúncia)
* **Exemplos de inspiração**: Se estiver sem ideias, expanda as sugestões para ver frases de exemplo.
* **Níveis de dificuldade**: As frases propostas são catalogadas de forma gradativa: *Simples ➔ Fácil ➔ Médio ➔ Complexo ➔ Avançado*.
* **Ouvir Pronúncia**: Botão de Text-to-Speech (TTS) nativo do navegador para escutar a pronúncia correta de cada frase ou palavra em foco.
* **Palavra do Dia**: Cada idioma exibe um termo em destaque com sua tradução e uma frase de exemplo inicial.

### 🌓 Temas Dinâmicos e Cores Harmoniosas
* Temas dedicados com contraste refinado: **Claro**, **Escuro** e **Sépia** (confortável para leitura noturna).
* Modo **Automático**: Ajusta o tema de acordo com o horário do dia.
* Cores com identidade visual exclusiva para cada idioma.

### 🔄 Sincronização e Produtividade
* **Google Drive Sync**: Conecte o app ao seu Google Drive pessoal para salvar/sincronizar seus dados, mantendo o progresso unificado entre dispositivos sem depender de servidores centralizados.
* **Lembretes Diários**: Configure um horário personalizado para receber notificações locais no navegador, ajudando você a manter sua ofensiva (*streak*).
* **Medalhas & Ofensivas**: Sistema de conquistas integrado que premia consistência (Dias seguidos, quadros preenchidos, etc.).

---

## 🛠️ Tecnologias Utilizadas

* **React 19** & **TypeScript**
* **Vite** (Build tool rápida e otimizada)
* **Lucide React** (Pacote moderno de ícones)
* **HTML5 Canvas** (Para desenho de traços)
* **Web Audio API & Speech Synthesis** (Para Text-To-Speech)
* **Local Storage** (Persistência local rápida)

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

---

## 📂 Estrutura do Projeto

```
diariopoliglota/
├── public/                 # Assets públicos (ícones, manifest, etc.)
├── src/
│   ├── components/         # Componentes React (WritingBox, ProgressModal, MedalToast)
│   ├── data/               # Dados locais de prompts e sugestões diárias
│   ├── services/           # Regras de negócio de desenho (InkPad) e persistência/GDSync
│   ├── utils/              # Funções utilitárias (TTS, validações)
│   ├── App.tsx             # Componente raiz da aplicação
│   ├── App.css             # Estilização complementar
│   ├── index.css           # Estilização global e sistema de grid
│   └── main.tsx            # Ponto de entrada do React
├── eslint.config.js        # Configuração do Linter
├── vite.config.ts          # Configuração do Vite
└── tsconfig.json           # Configuração do TypeScript
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

## 📄 Licença

Este projeto está licenciado sob os termos da licença descrita no repositório. Sinta-se livre para usar, estudar e contribuir!
