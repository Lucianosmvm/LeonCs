// ══════════════════════════════════════════════════════
// WEB — MISSÃO 02 — ESTRUTURA HTML
// Tema: Esqueleto de um documento HTML
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_WEBDEV_1 = {
  id: 1,
  title: "MISSÃO 02 — ESTRUTURA HTML",
  icon: '🏗️',
  free: true,
  desc: "Todo documento HTML segue um esqueleto padrão. Aprenda as tags que formam a base de qualquer página.",
  objs: [
    "Conhecer o doctype e a tag html",
    "Diferenciar head de body",
    "Entender tags de abertura e fechamento"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Uma <strong>tag</strong> fica entre <code>&lt; &gt;</code>. A maioria vem em par: abertura <code>&lt;p&gt;</code> e fechamento <code>&lt;/p&gt;</code>.',
      q: 'Como é a tag de FECHAMENTO de um parágrafo?',
      opts: [
        { t: '&lt;p&gt;', ok: false },
        { t: '&lt;/p&gt;', ok: true },
        { t: '&lt;p/&gt;', ok: false },
        { t: '&lt;close p&gt;', ok: false },
      ],
      exp: 'A tag de fechamento repete o nome com uma barra: &lt;/p&gt;. Ela delimita o fim do elemento.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>&lt;!DOCTYPE html&gt;</code> na primeira linha declara que o documento é HTML5.',
      q: 'Para que serve &lt;!DOCTYPE html&gt;?',
      opts: [
        { t: 'Importar CSS', ok: false },
        { t: 'Criar um comentário', ok: false },
        { t: 'Declarar que o documento é HTML5', ok: true },
        { t: 'Definir o título', ok: false },
      ],
      exp: 'O doctype avisa ao navegador que deve interpretar a página como HTML5. Vai sempre na primeira linha.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'A tag <code>&lt;head&gt;</code> guarda informações sobre a página (título, charset, links de CSS) — não aparece no conteúdo.',
      q: 'O que vai dentro de &lt;head&gt;?',
      opts: [
        { t: 'O conteúdo visível da página', ok: false },
        { t: 'Somente imagens', ok: false },
        { t: 'O rodapé', ok: false },
        { t: 'Metadados: título, charset, links', ok: true },
      ],
      exp: 'O &lt;head&gt; contém metadados e configurações. Nada ali é exibido diretamente na página (exceto o título, na aba).',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'A tag <code>&lt;body&gt;</code> contém tudo que é <strong>visível</strong>: textos, imagens, botões.',
      q: 'Onde fica o conteúdo visível da página?',
      opts: [
        { t: 'No &lt;body&gt;', ok: true },
        { t: 'No &lt;head&gt;', ok: false },
        { t: 'No &lt;title&gt;', ok: false },
        { t: 'No doctype', ok: false },
      ],
      exp: 'Tudo que o usuário vê na tela fica dentro do &lt;body&gt;.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>&lt;title&gt;</code> define o texto exibido na <strong>aba</strong> do navegador.',
      q: 'O que a tag &lt;title&gt; controla?',
      opts: [
        { t: 'O maior cabeçalho da página', ok: false },
        { t: 'O título na aba do navegador', ok: true },
        { t: 'A cor de fundo', ok: false },
        { t: 'O nome do arquivo', ok: false },
      ],
      exp: '&lt;title&gt; fica no &lt;head&gt; e aparece na aba/guia do navegador e nos resultados de busca.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'A tag <code>&lt;html&gt;</code> é a <strong>raiz</strong>: envolve todo o documento.',
      q: 'Qual tag envolve o documento inteiro?',
      opts: [
        { t: '&lt;body&gt;', ok: false },
        { t: '&lt;head&gt;', ok: false },
        { t: '&lt;html&gt;', ok: true },
        { t: '&lt;page&gt;', ok: false },
      ],
      exp: '&lt;html&gt; é o elemento raiz; dentro dele ficam &lt;head&gt; e &lt;body&gt;.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Alguns elementos são <strong>vazios</strong> (sem fechamento), como <code>&lt;br&gt;</code> e <code>&lt;img&gt;</code>.',
      q: 'Qual destas é uma tag vazia (sem fechamento)?',
      opts: [
        { t: '&lt;p&gt;', ok: false },
        { t: '&lt;div&gt;', ok: false },
        { t: '&lt;h1&gt;', ok: false },
        { t: '&lt;br&gt;', ok: true },
      ],
      exp: '&lt;br&gt; (quebra de linha) não tem conteúdo nem tag de fechamento. Assim como &lt;img&gt; e &lt;hr&gt;.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Complete a tag raiz do documento.',
      code: `<span class="kw">&lt;!DOCTYPE html&gt;</span>\n<span class="kw">&lt;_______&gt;</span>\n  <span class="kw">&lt;head&gt;</span> ... <span class="kw">&lt;/head&gt;</span>\n  <span class="kw">&lt;body&gt;</span> ... <span class="kw">&lt;/body&gt;</span>\n<span class="kw">&lt;/html&gt;</span>`,
      q: 'Qual tag é a raiz do documento?',
      ans: 'html',
      exp: '&lt;html&gt; envolve todo o conteúdo, contendo o head e o body.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Complete a tag que guarda o conteúdo visível.',
      code: `<span class="kw">&lt;_______&gt;</span>\n  <span class="kw">&lt;h1&gt;</span>Olá!<span class="kw">&lt;/h1&gt;</span>\n<span class="kw">&lt;/_______&gt;</span>`,
      q: 'Qual tag contém o conteúdo visível?',
      ans: 'body',
      exp: 'Tudo que aparece na página vai dentro de &lt;body&gt;.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise este documento HTML mínimo.',
      code: `<span class="kw">&lt;!DOCTYPE html&gt;</span>\n<span class="kw">&lt;html&gt;</span>\n  <span class="kw">&lt;head&gt;</span>\n    <span class="kw">&lt;title&gt;</span>Meu Site<span class="kw">&lt;/title&gt;</span>\n  <span class="kw">&lt;/head&gt;</span>\n  <span class="kw">&lt;body&gt;</span>\n    <span class="kw">&lt;h1&gt;</span>Bem-vindo<span class="kw">&lt;/h1&gt;</span>\n  <span class="kw">&lt;/body&gt;</span>\n<span class="kw">&lt;/html&gt;</span>`,
      q: 'O que aparece NA ABA do navegador?',
      opts: [
        { t: 'Meu Site', ok: true },
        { t: 'Bem-vindo', ok: false },
        { t: 'html', ok: false },
        { t: 'Nada', ok: false },
      ],
      exp: 'O &lt;title&gt; ("Meu Site") aparece na aba. "Bem-vindo" (h1) aparece no corpo da página.',
    },

  ]
};
