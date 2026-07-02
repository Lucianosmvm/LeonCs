// ══════════════════════════════════════════════════════
// WEB — MISSÃO 04 — IMAGENS E FORMULÁRIOS
// Tema: img, input, formulários e atributos
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_WEBDEV_3 = {
  id: 3,
  title: "MISSÃO 04 — IMAGENS E FORMULÁRIOS",
  icon: '🖼️',
  free: true,
  desc: "Páginas ganham vida com imagens e coletam dados com formulários. Domine as tags que interagem com o usuário.",
  objs: [
    "Inserir imagens com a tag img",
    "Criar campos de formulário",
    "Entender atributos como src e alt"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'A tag <code>&lt;img&gt;</code> insere uma imagem. O caminho vai no atributo <code>src</code>.',
      q: 'Qual atributo define o arquivo da imagem?',
      opts: [
        { t: 'href', ok: false },
        { t: 'file', ok: false },
        { t: 'link', ok: false },
        { t: 'src', ok: true },
      ],
      exp: 'src (source) aponta o caminho do arquivo: &lt;img src="foto.jpg"&gt;.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'O atributo <code>alt</code> descreve a imagem — importante para acessibilidade e quando a imagem não carrega.',
      q: 'Para que serve o atributo alt em &lt;img&gt;?',
      opts: [
        { t: 'Texto alternativo/descrição da imagem', ok: true },
        { t: 'Definir a largura', ok: false },
        { t: 'A cor de fundo', ok: false },
        { t: 'O link de destino', ok: false },
      ],
      exp: 'alt fornece um texto descritivo, lido por leitores de tela e exibido se a imagem falhar ao carregar.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>&lt;img&gt;</code> é uma tag <strong>vazia</strong>: não tem fechamento.',
      q: 'A tag &lt;img&gt; precisa de fechamento &lt;/img&gt;?',
      opts: [
        { t: 'Sim, sempre', ok: false },
        { t: 'Não, é uma tag vazia', ok: true },
        { t: 'Só com imagens grandes', ok: false },
        { t: 'Só dentro de links', ok: false },
      ],
      exp: '&lt;img&gt; é autofechável: não envolve conteúdo, então não tem tag de fechamento.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'A tag <code>&lt;form&gt;</code> agrupa campos que enviam dados.',
      q: 'Qual tag agrupa os campos de um formulário?',
      opts: [
        { t: '&lt;input&gt;', ok: false },
        { t: '&lt;fields&gt;', ok: false },
        { t: '&lt;form&gt;', ok: true },
        { t: '&lt;data&gt;', ok: false },
      ],
      exp: '&lt;form&gt; envolve os campos e define para onde e como os dados serão enviados.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>&lt;input&gt;</code> cria campos. O <code>type</code> define o tipo (text, password, email...).',
      q: 'O que o atributo type de um &lt;input&gt; define?',
      opts: [
        { t: 'A cor do campo', ok: false },
        { t: 'O tamanho da fonte', ok: false },
        { t: 'A posição na página', ok: false },
        { t: 'O tipo do campo (texto, senha, e-mail...)', ok: true },
      ],
      exp: 'type="text", type="password", type="email" etc. mudam o comportamento e a validação do campo.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'O <code>type="password"</code> esconde os caracteres digitados.',
      q: 'Qual type de input oculta o que é digitado?',
      opts: [
        { t: 'password', ok: true },
        { t: 'text', ok: false },
        { t: 'hidden', ok: false },
        { t: 'secret', ok: false },
      ],
      exp: 'type="password" mostra bolinhas/asteriscos em vez do texto real, protegendo a senha.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'O <code>&lt;button&gt;</code> cria um botão clicável.',
      q: 'Qual tag cria um botão?',
      opts: [
        { t: '&lt;btn&gt;', ok: false },
        { t: '&lt;button&gt;', ok: true },
        { t: '&lt;click&gt;', ok: false },
        { t: '&lt;submit&gt;', ok: false },
      ],
      exp: '&lt;button&gt;Enviar&lt;/button&gt; cria um botão. Dentro de um form, pode enviar os dados.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Complete o atributo que aponta o arquivo da imagem.',
      code: `<span class="kw">&lt;img</span> <span class="mt">_______</span><span class="kw">=</span><span class="st">"logo.png"</span> <span class="mt">alt</span><span class="kw">=</span><span class="st">"Logo"</span><span class="kw">&gt;</span>`,
      q: 'Qual atributo define o caminho da imagem?',
      ans: 'src',
      exp: 'src indica o arquivo a ser exibido. alt fornece a descrição textual.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Complete o tipo de campo para ocultar a senha.',
      code: `<span class="kw">&lt;input</span> <span class="mt">type</span><span class="kw">=</span><span class="st">"_______"</span><span class="kw">&gt;</span>`,
      q: 'Qual type oculta os caracteres digitados?',
      ans: 'password',
      exp: 'type="password" mascara o texto digitado no campo.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise este trecho de formulário.',
      code: `<span class="kw">&lt;form&gt;</span>\n  <span class="kw">&lt;input</span> <span class="mt">type</span><span class="kw">=</span><span class="st">"text"</span> <span class="mt">placeholder</span><span class="kw">=</span><span class="st">"Nome"</span><span class="kw">&gt;</span>\n  <span class="kw">&lt;button&gt;</span>Enviar<span class="kw">&lt;/button&gt;</span>\n<span class="kw">&lt;/form&gt;</span>`,
      q: 'O que este código exibe?',
      opts: [
        { t: 'Uma imagem e um link', ok: false },
        { t: 'Apenas um botão', ok: false },
        { t: 'Um campo de texto com "Nome" e um botão "Enviar"', ok: true },
        { t: 'Uma lista', ok: false },
      ],
      exp: 'O input de texto mostra "Nome" como dica (placeholder) e o &lt;button&gt; exibe "Enviar".',
    },

  ]
};
