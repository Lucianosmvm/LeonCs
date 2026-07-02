// ══════════════════════════════════════════════════════
// WEB — MISSÃO 07 — BOX MODEL
// Tema: margin, padding, border e content
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_WEBDEV_6 = {
  id: 6,
  title: "MISSÃO 07 — BOX MODEL",
  icon: '📦',
  free: false,
  desc: "Todo elemento é uma caixa. Entender margin, border e padding é a chave para controlar espaçamento e layout.",
  objs: [
    "Entender o box model",
    "Diferenciar margin de padding",
    "Controlar tamanho e bordas"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'No <strong>box model</strong>, cada elemento tem: conteúdo, <code>padding</code>, <code>border</code> e <code>margin</code>.',
      q: 'Quais são as camadas do box model (de dentro pra fora)?',
      opts: [
        { t: 'margin → border → padding → conteúdo', ok: false },
        { t: 'border → conteúdo → margin → padding', ok: false },
        { t: 'conteúdo → padding → border → margin', ok: true },
        { t: 'padding → conteúdo → margin → border', ok: false },
      ],
      exp: 'De dentro pra fora: o conteúdo, o padding (espaço interno), a border (borda) e a margin (espaço externo).',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>padding</code> é o espaço <strong>interno</strong>, entre o conteúdo e a borda.',
      q: 'O que é o padding?',
      opts: [
        { t: 'O espaço externo entre elementos', ok: false },
        { t: 'A espessura da borda', ok: false },
        { t: 'A cor de fundo', ok: false },
        { t: 'O espaço interno entre conteúdo e borda', ok: true },
      ],
      exp: 'padding empurra o conteúdo para dentro, afastando-o da borda.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>margin</code> é o espaço <strong>externo</strong>, que afasta o elemento dos vizinhos.',
      q: 'O que a margin controla?',
      opts: [
        { t: 'O espaço externo (distância dos vizinhos)', ok: true },
        { t: 'O espaço interno', ok: false },
        { t: 'A cor do texto', ok: false },
        { t: 'A fonte', ok: false },
      ],
      exp: 'margin cria espaço FORA da borda, separando o elemento dos que estão ao redor.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>border</code> define a <strong>borda</strong>: espessura, estilo e cor.',
      q: 'Qual valor de border é válido?',
      opts: [
        { t: 'border: black 2;', ok: false },
        { t: 'border: 2px solid black;', ok: true },
        { t: 'border = solid;', ok: false },
        { t: 'border: line;', ok: false },
      ],
      exp: 'border: espessura estilo cor. Ex: 2px solid black = borda preta sólida de 2px.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'As propriedades <code>width</code> e <code>height</code> definem largura e altura do conteúdo.',
      q: 'Qual propriedade define a largura?',
      opts: [
        { t: 'size', ok: false },
        { t: 'length', ok: false },
        { t: 'width', ok: true },
        { t: 'w', ok: false },
      ],
      exp: 'width define a largura e height a altura da área de conteúdo.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<code>box-sizing: border-box</code> faz width incluir padding e border.',
      q: 'O que box-sizing: border-box faz?',
      opts: [
        { t: 'Remove a borda', ok: false },
        { t: 'Centraliza o elemento', ok: false },
        { t: 'Esconde o elemento', ok: false },
        { t: 'Faz a largura incluir padding e border', ok: true },
      ],
      exp: 'Com border-box, a width total já conta padding e border — facilita muito o cálculo do layout.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Valores comuns de tamanho: <code>px</code> (pixels), <code>%</code> (porcentagem), <code>em</code>/<code>rem</code>.',
      q: 'O que a unidade px representa?',
      opts: [
        { t: 'Pixels (pontos na tela)', ok: true },
        { t: 'Porcentagem', ok: false },
        { t: 'Espaço em branco', ok: false },
        { t: 'Tamanho da fonte-raiz', ok: false },
      ],
      exp: 'px = pixels, uma unidade fixa. %, em e rem são relativas a outros valores.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Complete a propriedade do espaço INTERNO.',
      code: `.card {\n  <span class="mt">_______</span><span class="kw">:</span> <span class="nm">16px</span>;\n  <span class="cm">/* afasta o conteúdo da borda */</span>\n}`,
      q: 'Qual propriedade cria espaço interno?',
      ans: 'padding',
      exp: 'padding: 16px afasta o conteúdo 16px da borda em todos os lados.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Complete a propriedade do espaço EXTERNO.',
      code: `.card {\n  <span class="mt">_______</span><span class="kw">:</span> <span class="nm">20px</span>;\n  <span class="cm">/* afasta dos elementos vizinhos */</span>\n}`,
      q: 'Qual propriedade cria espaço externo?',
      ans: 'margin',
      exp: 'margin: 20px afasta o elemento 20px dos vizinhos.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise o espaçamento aplicado.',
      code: `.box {\n  <span class="mt">padding</span><span class="kw">:</span> <span class="nm">10px</span>;\n  <span class="mt">border</span><span class="kw">:</span> <span class="nm">2px</span> <span class="st">solid</span> <span class="st">red</span>;\n  <span class="mt">margin</span><span class="kw">:</span> <span class="nm">30px</span>;\n}`,
      q: 'O que o "margin: 30px" faz nesta caixa?',
      opts: [
        { t: 'Afasta o conteúdo da borda', ok: false },
        { t: 'Afasta a caixa dos elementos vizinhos', ok: true },
        { t: 'Engrossa a borda', ok: false },
        { t: 'Muda a cor da borda', ok: false },
      ],
      exp: 'margin é o espaço externo: separa a caixa dos elementos ao redor em 30px.',
    },

  ]
};
