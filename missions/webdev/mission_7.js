// ══════════════════════════════════════════════════════
// WEB — MISSÃO 08 — LAYOUT COM FLEXBOX
// Tema: display flex, alinhamento e distribuição
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_WEBDEV_7 = {
  id: 7,
  title: "MISSÃO 08 — LAYOUT COM FLEXBOX",
  icon: '📐',
  free: false,
  desc: "Flexbox alinha e distribui elementos com facilidade. É a ferramenta moderna para montar layouts flexíveis.",
  objs: [
    "Ativar o flexbox com display: flex",
    "Controlar direção e alinhamento",
    "Distribuir espaço entre itens"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'O flexbox é ativado no contêiner com <code>display: flex</code>.',
      q: 'Como ativar o flexbox em um elemento?',
      opts: [
        { t: 'flex: on;', ok: false },
        { t: 'layout: flexbox;', ok: false },
        { t: 'position: flex;', ok: false },
        { t: 'display: flex;', ok: true },
      ],
      exp: 'display: flex no contêiner transforma os filhos em itens flexíveis, alinhados numa linha por padrão.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>flex-direction</code> define o eixo: <code>row</code> (linha) ou <code>column</code> (coluna).',
      q: 'O que flex-direction: column faz?',
      opts: [
        { t: 'Empilha os itens em coluna (vertical)', ok: true },
        { t: 'Alinha os itens em linha', ok: false },
        { t: 'Centraliza o texto', ok: false },
        { t: 'Remove os itens', ok: false },
      ],
      exp: 'column empilha os itens verticalmente. O padrão é row (horizontal).',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>justify-content</code> alinha os itens no <strong>eixo principal</strong>.',
      q: 'O que justify-content: center faz (em row)?',
      opts: [
        { t: 'Centraliza verticalmente', ok: false },
        { t: 'Centraliza os itens horizontalmente', ok: true },
        { t: 'Aumenta a fonte', ok: false },
        { t: 'Esconde os itens', ok: false },
      ],
      exp: 'Em flex-direction: row, justify-content controla o eixo horizontal. center os agrupa no meio.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>align-items</code> alinha os itens no <strong>eixo cruzado</strong> (perpendicular).',
      q: 'O que align-items controla (em row)?',
      opts: [
        { t: 'O alinhamento horizontal', ok: false },
        { t: 'A cor dos itens', ok: false },
        { t: 'O alinhamento vertical', ok: true },
        { t: 'A ordem dos itens', ok: false },
      ],
      exp: 'Em row, align-items controla o eixo vertical (cruzado). center alinha os itens no meio da altura.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>justify-content: space-between</code> distribui espaço IGUAL entre os itens.',
      q: 'O que space-between faz?',
      opts: [
        { t: 'Junta todos os itens à esquerda', ok: false },
        { t: 'Remove o espaçamento', ok: false },
        { t: 'Centraliza tudo', ok: false },
        { t: 'Coloca espaço igual ENTRE os itens, colados nas pontas', ok: true },
      ],
      exp: 'space-between cola o primeiro item na esquerda, o último na direita e distribui o resto do espaço entre eles.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Para centralizar perfeitamente: <code>justify-content: center</code> + <code>align-items: center</code>.',
      q: 'Como centralizar um item nos dois eixos com flexbox?',
      opts: [
        { t: 'justify-content: center + align-items: center', ok: true },
        { t: 'text-align: center apenas', ok: false },
        { t: 'margin: 0', ok: false },
        { t: 'position: center', ok: false },
      ],
      exp: 'Combinar justify-content e align-items em center coloca o item no centro exato do contêiner.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: '<code>gap</code> define o espaço entre os itens flex.',
      q: 'O que a propriedade gap faz em um flex container?',
      opts: [
        { t: 'Borda dos itens', ok: false },
        { t: 'Espaço entre os itens', ok: true },
        { t: 'Cor de fundo', ok: false },
        { t: 'Tamanho da fonte', ok: false },
      ],
      exp: 'gap: 10px adiciona 10px de espaço entre cada item, sem precisar de margins.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Complete o valor que ativa o flexbox.',
      code: `.container {\n  <span class="mt">display</span><span class="kw">:</span> <span class="st">_______</span>;\n}`,
      q: 'Qual valor de display ativa o flexbox?',
      ans: 'flex',
      exp: 'display: flex torna o elemento um flex container.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Complete a propriedade que alinha no eixo principal.',
      code: `.container {\n  <span class="mt">display</span><span class="kw">:</span> <span class="st">flex</span>;\n  <span class="mt">_______</span><span class="kw">:</span> <span class="st">center</span>;\n  <span class="cm">/* centraliza no eixo principal */</span>\n}`,
      q: 'Qual propriedade alinha itens no eixo principal?',
      ans: 'justify-content',
      exp: 'justify-content: center agrupa os itens no centro do eixo principal.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise este layout flex.',
      code: `.menu {\n  <span class="mt">display</span><span class="kw">:</span> <span class="st">flex</span>;\n  <span class="mt">justify-content</span><span class="kw">:</span> <span class="st">space-between</span>;\n}`,
      q: 'Como os itens do .menu ficam distribuídos?',
      opts: [
        { t: 'Empilhados verticalmente', ok: false },
        { t: 'Todos centralizados juntos', ok: false },
        { t: 'Em linha, com espaço igual entre eles e colados nas bordas', ok: true },
        { t: 'Escondidos', ok: false },
      ],
      exp: 'display: flex os põe em linha; space-between distribui o espaço entre eles, encostando nas pontas.',
    },

  ]
};
