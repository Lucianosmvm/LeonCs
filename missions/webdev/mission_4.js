// ══════════════════════════════════════════════════════
// WEB — MISSÃO 05 — HTML SEMÂNTICO
// Tema: header, nav, main, section, footer e div
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_WEBDEV_4 = {
  id: 4,
  title: "MISSÃO 05 — HTML SEMÂNTICO",
  icon: '🧩',
  free: true,
  desc: "Tags semânticas dão significado à estrutura, melhorando acessibilidade e SEO. Menos divs soltas, mais clareza.",
  objs: [
    "Usar tags semânticas (header, nav, footer)",
    "Diferenciar div de tags semânticas",
    "Estruturar uma página com significado"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Tags <strong>semânticas</strong> descrevem o papel do conteúdo: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;footer&gt;</code>.',
      q: 'O que significa "HTML semântico"?',
      opts: [
        { t: 'Usar tags que descrevem o significado do conteúdo', ok: true },
        { t: 'Escrever HTML mais curto', ok: false },
        { t: 'Usar apenas divs', ok: false },
        { t: 'Escrever em maiúsculas', ok: false },
      ],
      exp: 'Semântica = significado. Tags como &lt;header&gt; e &lt;article&gt; dizem o que aquele bloco representa.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'A tag <code>&lt;nav&gt;</code> agrupa a <strong>navegação</strong> (menu de links).',
      q: 'Qual tag representa o menu de navegação?',
      opts: [
        { t: '&lt;menu&gt;', ok: false },
        { t: '&lt;nav&gt;', ok: true },
        { t: '&lt;links&gt;', ok: false },
        { t: '&lt;bar&gt;', ok: false },
      ],
      exp: '&lt;nav&gt; envolve os principais links de navegação do site.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>&lt;header&gt;</code> é o topo/cabeçalho; <code>&lt;footer&gt;</code> é o rodapé.',
      q: 'Qual tag representa o rodapé da página?',
      opts: [
        { t: '&lt;bottom&gt;', ok: false },
        { t: '&lt;end&gt;', ok: false },
        { t: '&lt;footer&gt;', ok: true },
        { t: '&lt;header&gt;', ok: false },
      ],
      exp: '&lt;footer&gt; costuma conter direitos autorais, contatos e links secundários.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>&lt;div&gt;</code> é um contêiner <strong>genérico</strong>, sem significado próprio.',
      q: 'Qual a característica da tag &lt;div&gt;?',
      opts: [
        { t: 'Representa o cabeçalho', ok: false },
        { t: 'É sempre um botão', ok: false },
        { t: 'Cria uma imagem', ok: false },
        { t: 'É um contêiner genérico, sem significado', ok: true },
      ],
      exp: '&lt;div&gt; agrupa elementos sem dar significado. Prefira tags semânticas quando houver uma que descreva o bloco.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>&lt;main&gt;</code> marca o conteúdo <strong>principal</strong> e único da página.',
      q: 'O que a tag &lt;main&gt; representa?',
      opts: [
        { t: 'O conteúdo principal da página', ok: true },
        { t: 'O rodapé', ok: false },
        { t: 'O menu', ok: false },
        { t: 'Um botão importante', ok: false },
      ],
      exp: '&lt;main&gt; contém o conteúdo central e exclusivo daquela página, sem repetir menus ou rodapés.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Semântica ajuda o <strong>SEO</strong> e leitores de tela a entenderem a página.',
      q: 'Qual é uma vantagem do HTML semântico?',
      opts: [
        { t: 'Deixa a página mais pesada', ok: false },
        { t: 'Melhora acessibilidade e SEO', ok: true },
        { t: 'Elimina a necessidade de CSS', ok: false },
        { t: 'Torna o site mais lento', ok: false },
      ],
      exp: 'Tags semânticas ajudam buscadores (SEO) e tecnologias assistivas a interpretar a estrutura corretamente.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: '<code>&lt;section&gt;</code> agrupa um trecho temático; <code>&lt;article&gt;</code> é um conteúdo independente.',
      q: 'Qual tag representa um conteúdo autônomo (ex: um post)?',
      opts: [
        { t: '&lt;div&gt;', ok: false },
        { t: '&lt;span&gt;', ok: false },
        { t: '&lt;article&gt;', ok: true },
        { t: '&lt;section&gt;', ok: false },
      ],
      exp: '&lt;article&gt; faz sentido sozinho (um post, uma notícia). &lt;section&gt; agrupa partes temáticas da página.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Complete a tag semântica do topo da página.',
      code: `<span class="kw">&lt;_______&gt;</span>\n  <span class="kw">&lt;h1&gt;</span>Meu Site<span class="kw">&lt;/h1&gt;</span>\n<span class="kw">&lt;/_______&gt;</span>`,
      q: 'Qual tag semântica representa o cabeçalho/topo?',
      ans: 'header',
      exp: '&lt;header&gt; agrupa o topo da página: logo, título e às vezes a navegação.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Complete a tag semântica do menu de navegação.',
      code: `<span class="kw">&lt;_______&gt;</span>\n  <span class="kw">&lt;a</span> <span class="mt">href</span><span class="kw">=</span><span class="st">"#"</span><span class="kw">&gt;</span>Início<span class="kw">&lt;/a&gt;</span>\n<span class="kw">&lt;/_______&gt;</span>`,
      q: 'Qual tag agrupa a navegação?',
      ans: 'nav',
      exp: '&lt;nav&gt; envolve os links principais de navegação.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise esta estrutura semântica.',
      code: `<span class="kw">&lt;body&gt;</span>\n  <span class="kw">&lt;header&gt;</span>Topo<span class="kw">&lt;/header&gt;</span>\n  <span class="kw">&lt;main&gt;</span>Conteúdo<span class="kw">&lt;/main&gt;</span>\n  <span class="kw">&lt;footer&gt;</span>Rodapé<span class="kw">&lt;/footer&gt;</span>\n<span class="kw">&lt;/body&gt;</span>`,
      q: 'Qual tag marca o conteúdo principal?',
      opts: [
        { t: '&lt;header&gt;', ok: false },
        { t: '&lt;footer&gt;', ok: false },
        { t: '&lt;body&gt;', ok: false },
        { t: '&lt;main&gt;', ok: true },
      ],
      exp: '&lt;main&gt; envolve "Conteúdo", o corpo principal. header é o topo e footer é o rodapé.',
    },

  ]
};
