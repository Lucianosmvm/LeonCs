// ══════════════════════════════════════════════════════
// WEB — MISSÃO 01 — COMO A WEB FUNCIONA
// Tema: Introdução ao desenvolvimento web e os 3 pilares
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_WEBDEV_0 = {
  id: 0,
  title: "MISSÃO 01 — COMO A WEB FUNCIONA",
  icon: '🌐',
  free: true,
  desc: "Toda página que você acessa nasce de três tecnologias trabalhando juntas. Hora de entender a base da web.",
  objs: [
    "Entender o que são HTML, CSS e JavaScript",
    "Saber o papel do navegador",
    "Conhecer a estrutura de um site"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>HTML</strong> (HyperText Markup Language) é a linguagem que define a <strong>estrutura</strong> e o conteúdo de uma página.',
      q: 'O que significa HTML?',
      opts: [
        { t: 'HyperText Markup Language', ok: true },
        { t: 'High Tech Modern Language', ok: false },
        { t: 'Home Tool Markup Logic', ok: false },
        { t: 'Hyperlink Text Machine Language', ok: false },
      ],
      exp: 'HTML = HyperText Markup Language. É uma linguagem de marcação: descreve a estrutura do conteúdo com tags.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Os <strong>3 pilares</strong> do frontend: HTML (estrutura), CSS (estilo) e JavaScript (comportamento).',
      q: 'Qual tecnologia cuida da APARÊNCIA (cores, layout)?',
      opts: [
        { t: 'HTML', ok: false },
        { t: 'CSS', ok: true },
        { t: 'JavaScript', ok: false },
        { t: 'SQL', ok: false },
      ],
      exp: 'CSS (Cascading Style Sheets) controla a aparência: cores, fontes, espaçamento e layout.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<strong>JavaScript</strong> adiciona <strong>interatividade</strong>: reage a cliques, valida formulários, atualiza a página.',
      q: 'Qual tecnologia adiciona interatividade à página?',
      opts: [
        { t: 'HTML', ok: false },
        { t: 'CSS', ok: false },
        { t: 'JavaScript', ok: true },
        { t: 'HTTP', ok: false },
      ],
      exp: 'JavaScript é a linguagem de programação da web: torna a página dinâmica e responsiva a ações do usuário.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'O <strong>navegador</strong> (Chrome, Firefox...) lê o HTML, CSS e JS e os transforma na página visível.',
      q: 'Qual o papel do navegador?',
      opts: [
        { t: 'Guardar o banco de dados', ok: false },
        { t: 'Compilar C++', ok: false },
        { t: 'Enviar e-mails', ok: false },
        { t: 'Interpretar o código e renderizar a página', ok: true },
      ],
      exp: 'O navegador interpreta HTML/CSS/JS e desenha a página na tela — esse processo se chama renderização.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'HTML é uma linguagem de <strong>marcação</strong>, não de programação: descreve conteúdo, não executa lógica.',
      q: 'HTML é uma linguagem de:',
      opts: [
        { t: 'Marcação', ok: true },
        { t: 'Programação', ok: false },
        { t: 'Banco de dados', ok: false },
        { t: 'Estilização', ok: false },
      ],
      exp: 'Marcação = marca partes do conteúdo com tags (título, parágrafo, imagem). Não tem laços nem condições como uma linguagem de programação.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'O arquivo principal de um site costuma se chamar <code>index.html</code>.',
      q: 'Qual a extensão de um arquivo HTML?',
      opts: [
        { t: '.web', ok: false },
        { t: '.html', ok: true },
        { t: '.page', ok: false },
        { t: '.doc', ok: false },
      ],
      exp: 'Arquivos HTML terminam em .html. O navegador abre index.html como a página inicial por padrão.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'O <strong>frontend</strong> roda no navegador do usuário; o <strong>backend</strong> roda no servidor.',
      q: 'HTML, CSS e JS rodam principalmente onde?',
      opts: [
        { t: 'No servidor (backend)', ok: false },
        { t: 'No banco de dados', ok: false },
        { t: 'No navegador (frontend)', ok: true },
        { t: 'No sistema operacional', ok: false },
      ],
      exp: 'Esses três são a base do frontend: executam no navegador do usuário, do lado do cliente.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Complete o nome do arquivo inicial de um site.',
      code: `<span class="cm">// arquivo principal do site</span>\nindex.<span class="kw">_______</span>`,
      q: 'Qual a extensão de um arquivo HTML (sem o ponto)?',
      ans: 'html',
      exp: 'index.html é a página inicial padrão que o navegador carrega primeiro.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Complete a tecnologia que estiliza a página.',
      code: `<span class="cm">// controla cores, fontes e layout</span>\n<span class="kw">_______</span>`,
      q: 'Qual sigla (3 letras) cuida do estilo visual?',
      ans: 'css',
      exp: 'CSS (Cascading Style Sheets) define a aparência da página.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Cada uma das três tecnologias tem um papel distinto.',
      code: `<span class="cm">// Estrutura:  HTML</span>\n<span class="cm">// Estilo:     CSS</span>\n<span class="cm">// Interação:  JavaScript</span>`,
      q: 'Qual tecnologia é responsável pela ESTRUTURA do conteúdo?',
      opts: [
        { t: 'CSS', ok: false },
        { t: 'JavaScript', ok: false },
        { t: 'HTTP', ok: false },
        { t: 'HTML', ok: true },
      ],
      exp: 'HTML monta a estrutura (o esqueleto), CSS veste (estilo) e JavaScript dá vida (interação).',
    },

  ]
};
