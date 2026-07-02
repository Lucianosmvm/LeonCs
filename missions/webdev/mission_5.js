// ══════════════════════════════════════════════════════
// WEB — MISSÃO 06 — INTRODUÇÃO AO CSS
// Tema: Seletores, propriedades e cores
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_WEBDEV_5 = {
  id: 5,
  title: "MISSÃO 06 — INTRODUÇÃO AO CSS",
  icon: '🎨',
  free: false,
  desc: "É hora de vestir o HTML. CSS controla cores, fontes e todo o visual. Comece pelos seletores e propriedades.",
  objs: [
    "Escrever regras CSS",
    "Usar seletores de tag, classe e id",
    "Aplicar cores e fontes"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Uma regra CSS tem <strong>seletor</strong> e um bloco com <strong>propriedade: valor;</strong>.',
      q: 'Qual a estrutura de uma regra CSS?',
      opts: [
        { t: 'propriedade(seletor) = valor', ok: false },
        { t: 'seletor { propriedade: valor; }', ok: true },
        { t: '&lt;seletor valor&gt;', ok: false },
        { t: 'seletor = { valor }', ok: false },
      ],
      exp: 'Ex: p { color: red; } — o seletor "p" recebe a propriedade color com valor red.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'A propriedade <code>color</code> muda a cor do <strong>texto</strong>.',
      q: 'Qual propriedade muda a cor do texto?',
      opts: [
        { t: 'background', ok: false },
        { t: 'text-color', ok: false },
        { t: 'color', ok: true },
        { t: 'font', ok: false },
      ],
      exp: 'color define a cor do texto. Para o fundo, usa-se background-color.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Um <strong>seletor de classe</strong> começa com ponto: <code>.destaque</code>.',
      q: 'Como se escreve um seletor de classe?',
      opts: [
        { t: '#destaque', ok: false },
        { t: 'destaque', ok: false },
        { t: '@destaque', ok: false },
        { t: '.destaque', ok: true },
      ],
      exp: 'Classe usa ponto (.destaque) e pode ser aplicada a vários elementos via class="destaque".',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Um <strong>seletor de id</strong> começa com cerquilha: <code>#topo</code>. O id é único na página.',
      q: 'Como se escreve um seletor de id?',
      opts: [
        { t: '#topo', ok: true },
        { t: '.topo', ok: false },
        { t: '&topo', ok: false },
        { t: '*topo', ok: false },
      ],
      exp: 'id usa # (#topo) e deve ser único: só um elemento por página com aquele id.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'A propriedade <code>background-color</code> define a cor de <strong>fundo</strong>.',
      q: 'Qual propriedade define a cor de fundo?',
      opts: [
        { t: 'color', ok: false },
        { t: 'background-color', ok: true },
        { t: 'fill', ok: false },
        { t: 'bg', ok: false },
      ],
      exp: 'background-color pinta o fundo do elemento. color pinta o texto.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Cores podem ser nomes (<code>red</code>), hexadecimal (<code>#ff0000</code>) ou <code>rgb()</code>.',
      q: 'Qual destes é uma cor em hexadecimal?',
      opts: [
        { t: 'red', ok: false },
        { t: 'rgb(255,0,0)', ok: false },
        { t: '#ff0000', ok: true },
        { t: 'color:red', ok: false },
      ],
      exp: 'Hexadecimal começa com # e usa 6 dígitos: #ff0000 é vermelho puro.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'CSS pode ir em arquivo separado, ligado com <code>&lt;link&gt;</code> no head.',
      q: 'Como ligar um arquivo CSS externo ao HTML?',
      opts: [
        { t: 'Com &lt;script&gt;', ok: false },
        { t: 'Com &lt;css&gt;', ok: false },
        { t: 'Com @import apenas no body', ok: false },
        { t: 'Com &lt;link rel="stylesheet" href="estilo.css"&gt;', ok: true },
      ],
      exp: '&lt;link rel="stylesheet" href="estilo.css"&gt; no &lt;head&gt; conecta o CSS externo.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Complete a propriedade que muda a cor do texto.',
      code: `p {\n  <span class="mt">_______</span><span class="kw">:</span> <span class="st">blue</span>;\n}`,
      q: 'Qual propriedade muda a cor do texto?',
      ans: 'color',
      exp: 'color: blue deixa o texto dos parágrafos azul.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Complete o caractere que inicia um seletor de classe.',
      code: `<span class="mt">_______</span>botao {\n  <span class="mt">background-color</span><span class="kw">:</span> <span class="st">green</span>;\n}`,
      q: 'Qual caractere inicia um seletor de classe?',
      ans: '.',
      exp: 'O ponto (.botao) seleciona elementos com class="botao".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise esta regra CSS.',
      code: `h1 {\n  <span class="mt">color</span><span class="kw">:</span> <span class="st">white</span>;\n  <span class="mt">background-color</span><span class="kw">:</span> <span class="st">black</span>;\n}`,
      q: 'Como o &lt;h1&gt; será exibido?',
      opts: [
        { t: 'Texto branco em fundo preto', ok: true },
        { t: 'Texto preto em fundo branco', ok: false },
        { t: 'Todo vermelho', ok: false },
        { t: 'Sem alteração', ok: false },
      ],
      exp: 'color: white pinta o texto de branco; background-color: black deixa o fundo preto.',
    },

  ]
};
