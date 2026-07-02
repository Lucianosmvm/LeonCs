// ══════════════════════════════════════════════════════
// WEB — MISSÃO 03 — TEXTO E LINKS
// Tema: Cabeçalhos, parágrafos, listas e links
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_WEBDEV_2 = {
  id: 2,
  title: "MISSÃO 03 — TEXTO E LINKS",
  icon: '🔗',
  free: true,
  desc: "Conteúdo é rei. Aprenda a marcar títulos, parágrafos, listas e a conectar páginas com links.",
  objs: [
    "Usar cabeçalhos e parágrafos",
    "Criar listas ordenadas e não ordenadas",
    "Fazer links com a tag a"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Cabeçalhos vão de <code>&lt;h1&gt;</code> (maior) a <code>&lt;h6&gt;</code> (menor).',
      q: 'Qual é o cabeçalho de MAIOR nível?',
      opts: [
        { t: '&lt;h6&gt;', ok: false },
        { t: '&lt;head&gt;', ok: false },
        { t: '&lt;h1&gt;', ok: true },
        { t: '&lt;big&gt;', ok: false },
      ],
      exp: '&lt;h1&gt; é o título principal e mais importante. Use apenas um por página, idealmente.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'A tag <code>&lt;p&gt;</code> define um <strong>parágrafo</strong> de texto.',
      q: 'Qual tag cria um parágrafo?',
      opts: [
        { t: '&lt;par&gt;', ok: false },
        { t: '&lt;text&gt;', ok: false },
        { t: '&lt;t&gt;', ok: false },
        { t: '&lt;p&gt;', ok: true },
      ],
      exp: '&lt;p&gt; envolve um bloco de texto. O navegador adiciona espaço antes e depois automaticamente.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'A tag <code>&lt;a&gt;</code> (anchor) cria um <strong>link</strong>. O destino vai no atributo <code>href</code>.',
      q: 'Qual atributo define o destino de um link?',
      opts: [
        { t: 'href', ok: true },
        { t: 'src', ok: false },
        { t: 'link', ok: false },
        { t: 'url', ok: false },
      ],
      exp: '&lt;a href="https://..."&gt;texto&lt;/a&gt;. O href (hypertext reference) aponta para onde o link leva.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>&lt;ul&gt;</code> cria lista NÃO ordenada (marcadores); <code>&lt;ol&gt;</code> cria lista ordenada (números).',
      q: 'Qual tag cria uma lista com NÚMEROS?',
      opts: [
        { t: '&lt;ul&gt;', ok: false },
        { t: '&lt;ol&gt;', ok: true },
        { t: '&lt;list&gt;', ok: false },
        { t: '&lt;li&gt;', ok: false },
      ],
      exp: '&lt;ol&gt; (ordered list) numera os itens. &lt;ul&gt; (unordered) usa marcadores (bolinhas).',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Cada item de uma lista usa a tag <code>&lt;li&gt;</code> (list item).',
      q: 'Qual tag representa um item de lista?',
      opts: [
        { t: '&lt;item&gt;', ok: false },
        { t: '&lt;p&gt;', ok: false },
        { t: '&lt;li&gt;', ok: true },
        { t: '&lt;dot&gt;', ok: false },
      ],
      exp: '&lt;li&gt; vai dentro de &lt;ul&gt; ou &lt;ol&gt; e representa cada elemento da lista.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<code>&lt;strong&gt;</code> dá ênfase forte (negrito) e <code>&lt;em&gt;</code> ênfase (itálico).',
      q: 'Qual tag deixa o texto em negrito com significado de importância?',
      opts: [
        { t: '&lt;b&gt; apenas', ok: false },
        { t: '&lt;big&gt;', ok: false },
        { t: '&lt;bold&gt;', ok: false },
        { t: '&lt;strong&gt;', ok: true },
      ],
      exp: '&lt;strong&gt; indica importância (renderizado em negrito). &lt;em&gt; indica ênfase (itálico).',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Um link pode abrir em nova aba com <code>target="_blank"</code>.',
      q: 'O que target="_blank" faz em um link?',
      opts: [
        { t: 'Abre o link em uma nova aba', ok: true },
        { t: 'Deixa o link vermelho', ok: false },
        { t: 'Desativa o link', ok: false },
        { t: 'Baixa um arquivo', ok: false },
      ],
      exp: 'target="_blank" faz o link abrir em nova aba/janela em vez de substituir a página atual.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Complete o atributo que define o destino do link.',
      code: `<span class="kw">&lt;a</span> <span class="mt">_______</span><span class="kw">=</span><span class="st">"https://google.com"</span><span class="kw">&gt;</span>Buscar<span class="kw">&lt;/a&gt;</span>`,
      q: 'Qual atributo aponta o destino do link?',
      ans: 'href',
      exp: 'href define para onde o link leva. Sem ele, o &lt;a&gt; não navega.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Complete a tag de cada item da lista.',
      code: `<span class="kw">&lt;ul&gt;</span>\n  <span class="kw">&lt;_______&gt;</span>Maçã<span class="kw">&lt;/_______&gt;</span>\n  <span class="kw">&lt;_______&gt;</span>Banana<span class="kw">&lt;/_______&gt;</span>\n<span class="kw">&lt;/ul&gt;</span>`,
      q: 'Qual tag representa cada item da lista?',
      ans: 'li',
      exp: '&lt;li&gt; marca cada item dentro de uma lista &lt;ul&gt; ou &lt;ol&gt;.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise esta lista.',
      code: `<span class="kw">&lt;ol&gt;</span>\n  <span class="kw">&lt;li&gt;</span>Primeiro<span class="kw">&lt;/li&gt;</span>\n  <span class="kw">&lt;li&gt;</span>Segundo<span class="kw">&lt;/li&gt;</span>\n<span class="kw">&lt;/ol&gt;</span>`,
      q: 'Como esta lista é exibida?',
      opts: [
        { t: 'Com bolinhas (marcadores)', ok: false },
        { t: 'Numerada: 1. Primeiro  2. Segundo', ok: true },
        { t: 'Em uma única linha', ok: false },
        { t: 'Como um link', ok: false },
      ],
      exp: '&lt;ol&gt; é lista ordenada: o navegador numera automaticamente (1, 2, ...).',
    },

  ]
};
