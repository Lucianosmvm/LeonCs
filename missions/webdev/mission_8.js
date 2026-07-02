// ══════════════════════════════════════════════════════
// WEB — MISSÃO 09 — RESPONSIVIDADE
// Tema: Media queries, unidades relativas e viewport
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_WEBDEV_8 = {
  id: 8,
  title: "MISSÃO 09 — RESPONSIVIDADE",
  icon: '📱',
  free: false,
  desc: "Um site precisa funcionar no celular e no desktop. Media queries e unidades flexíveis adaptam o layout a cada tela.",
  objs: [
    "Usar media queries",
    "Aplicar unidades relativas",
    "Configurar a viewport"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>Responsividade</strong> é a página se adaptar a diferentes tamanhos de tela.',
      q: 'O que significa um site responsivo?',
      opts: [
        { t: 'Ele se adapta a diferentes tamanhos de tela', ok: true },
        { t: 'Ele responde e-mails', ok: false },
        { t: 'Ele carrega mais rápido', ok: false },
        { t: 'Ele usa apenas imagens', ok: false },
      ],
      exp: 'Responsivo = o layout se ajusta a celular, tablet e desktop, oferecendo boa experiência em qualquer tela.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Uma <code>@media</code> query aplica CSS só quando uma condição de tela é atendida.',
      q: 'Para que serve uma media query?',
      opts: [
        { t: 'Tocar áudio', ok: false },
        { t: 'Aplicar estilos conforme o tamanho da tela', ok: true },
        { t: 'Importar imagens', ok: false },
        { t: 'Criar animações apenas', ok: false },
      ],
      exp: '@media (max-width: 600px) { ... } aplica as regras internas só em telas de até 600px, por exemplo.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>max-width</code> em uma media query aplica o estilo até um limite de largura.',
      q: 'O que @media (max-width: 600px) alcança?',
      opts: [
        { t: 'Telas com 600px ou mais', ok: false },
        { t: 'Somente exatamente 600px', ok: false },
        { t: 'Telas com 600px ou menos', ok: true },
        { t: 'Nenhuma tela', ok: false },
      ],
      exp: 'max-width: 600px = "até 600px". Ideal para aplicar o layout de celular.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Unidades relativas (<code>%</code>, <code>em</code>, <code>rem</code>, <code>vw</code>) escalam melhor que px fixos.',
      q: 'Qual unidade é relativa à largura da viewport?',
      opts: [
        { t: 'px', ok: false },
        { t: 'pt', ok: false },
        { t: 'cm', ok: false },
        { t: 'vw', ok: true },
      ],
      exp: 'vw = viewport width. 50vw = metade da largura da tela. Ótimo para layouts fluidos.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'A meta tag <code>viewport</code> no head faz o site escalar corretamente no celular.',
      q: 'Onde fica a meta tag viewport?',
      opts: [
        { t: 'No &lt;head&gt;', ok: true },
        { t: 'No &lt;body&gt;', ok: false },
        { t: 'No arquivo CSS', ok: false },
        { t: 'No JavaScript', ok: false },
      ],
      exp: '&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt; vai no &lt;head&gt;.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<strong>Mobile-first</strong> é projetar primeiro para o celular e depois expandir.',
      q: 'O que é a abordagem mobile-first?',
      opts: [
        { t: 'Ignorar o celular', ok: false },
        { t: 'Projetar primeiro para telas pequenas', ok: true },
        { t: 'Usar só imagens grandes', ok: false },
        { t: 'Desabilitar o CSS no celular', ok: false },
      ],
      exp: 'Mobile-first começa pelo layout do celular (base) e usa media queries para telas maiores.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'A unidade <code>%</code> é relativa ao <strong>elemento pai</strong>.',
      q: 'width: 50% deixa o elemento com qual largura?',
      opts: [
        { t: '50 pixels', ok: false },
        { t: 'Metade da fonte', ok: false },
        { t: 'Metade da largura do elemento pai', ok: true },
        { t: 'Sempre 50px no celular', ok: false },
      ],
      exp: 'Porcentagem é calculada em relação ao contêiner pai: 50% = metade da largura dele.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Complete a regra que aplica CSS em telas pequenas.',
      code: `<span class="kw">@_______</span> (max-width: <span class="nm">600px</span>) {\n  .menu { <span class="mt">flex-direction</span><span class="kw">:</span> <span class="st">column</span>; }\n}`,
      q: 'Qual regra (após @) aplica estilos por tamanho de tela?',
      ans: 'media',
      exp: '@media (max-width: 600px) aplica as regras internas em telas de até 600px.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Complete a condição que alcança telas de até 768px.',
      code: `@media (<span class="mt">_______</span>: <span class="nm">768px</span>) {\n  <span class="cm">/* estilos para tablet e menor */</span>\n}`,
      q: 'Qual condição significa "até X de largura"?',
      ans: 'max-width',
      exp: 'max-width: 768px aplica o estilo em telas com largura igual ou menor que 768px.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise esta media query.',
      code: `.grid { <span class="mt">display</span><span class="kw">:</span> <span class="st">flex</span>; }\n\n<span class="kw">@media</span> (max-width: <span class="nm">500px</span>) {\n  .grid { <span class="mt">flex-direction</span><span class="kw">:</span> <span class="st">column</span>; }\n}`,
      q: 'O que acontece em uma tela de 400px?',
      opts: [
        { t: 'Os itens ficam em linha', ok: false },
        { t: 'O grid some', ok: false },
        { t: 'Nada muda', ok: false },
        { t: 'Os itens empilham em coluna', ok: true },
      ],
      exp: '400px é ≤ 500px, então a media query ativa flex-direction: column, empilhando os itens.',
    },

  ]
};
