// ══════════════════════════════════════════════════════
// JAVASCRIPT — MISSÃO 09 — DOM E EVENTOS
// Tema: Selecionar, alterar e reagir a eventos
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_JAVASCRIPT_8 = {
  id: 8,
  title: "MISSÃO 09 — DOM E EVENTOS",
  icon: '🖱️',
  free: false,
  desc: "O DOM conecta o JavaScript à página. Selecione elementos, altere conteúdo e reaja a cliques e digitação.",
  objs: [
    "Selecionar elementos do DOM",
    "Alterar conteúdo e estilo",
    "Reagir a eventos do usuário"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<code>document.querySelector()</code> seleciona o PRIMEIRO elemento que casa com um seletor CSS.',
      q: 'Como selecionar o primeiro elemento de classe "btn"?',
      opts: [
        { t: 'document.querySelector(".btn")', ok: true },
        { t: 'document.getClass("btn")', ok: false },
        { t: 'document.select("btn")', ok: false },
        { t: 'query(".btn")', ok: false },
      ],
      exp: 'querySelector(".btn") usa sintaxe de seletor CSS e devolve o primeiro elemento correspondente.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>getElementById()</code> seleciona pelo id (sem o #).',
      q: 'Como selecionar o elemento com id="menu"?',
      opts: [
        { t: 'getElementById("#menu")', ok: false },
        { t: 'document.getElementById("menu")', ok: true },
        { t: 'document.querySelector("menu")', ok: false },
        { t: 'document.byId("menu")', ok: false },
      ],
      exp: 'getElementById recebe apenas o nome do id, sem o # (diferente do querySelector).',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>textContent</code> altera o texto; <code>innerHTML</code> altera o HTML interno.',
      q: 'Qual propriedade insere HTML dentro de um elemento?',
      opts: [
        { t: 'textContent', ok: false },
        { t: 'value', ok: false },
        { t: 'innerHTML', ok: true },
        { t: 'innerText apenas', ok: false },
      ],
      exp: 'innerHTML interpreta tags HTML. textContent trata tudo como texto puro.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>addEventListener(evento, fn)</code> registra uma reação a um evento.',
      q: 'Qual evento corresponde a um clique?',
      opts: [
        { t: '"press"', ok: false },
        { t: '"tap"', ok: false },
        { t: '"mouse"', ok: false },
        { t: '"click"', ok: true },
      ],
      exp: 'O evento "click" dispara quando o elemento é clicado.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Em um input, <code>.value</code> lê ou define o texto digitado.',
      q: 'Como ler o que o usuário digitou em um input campo?',
      opts: [
        { t: 'campo.value', ok: true },
        { t: 'campo.text', ok: false },
        { t: 'campo.content', ok: false },
        { t: 'campo.innerHTML', ok: false },
      ],
      exp: '.value contém o texto atual do campo de formulário.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'O objeto <code>event</code> traz informações sobre o evento disparado.',
      q: 'O que o parâmetro do callback de um evento recebe?',
      opts: [
        { t: 'O elemento pai', ok: false },
        { t: 'Um objeto com dados do evento', ok: true },
        { t: 'Sempre undefined', ok: false },
        { t: 'A página inteira', ok: false },
      ],
      exp: 'addEventListener("click", e => ...) — e é o objeto do evento (com target, tipo, etc.).',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: '<code>.classList.add()</code> e <code>.classList.toggle()</code> manipulam classes CSS.',
      q: 'O que classList.toggle("ativo") faz?',
      opts: [
        { t: 'Remove todas as classes', ok: false },
        { t: 'Sempre adiciona a classe', ok: false },
        { t: 'Adiciona a classe se não existe, remove se existe', ok: true },
        { t: 'Renomeia o elemento', ok: false },
      ],
      exp: 'toggle alterna: liga a classe se estiver ausente, desliga se presente. Ótimo para menus e temas.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Complete o método que registra a reação ao clique.',
      code: `botao.<span class="mt">_______</span>(<span class="st">"click"</span>, () <span class="kw">=&gt;</span> {\n  <span class="mt">console</span>.log(<span class="st">"cliquei"</span>);\n});`,
      q: 'Qual método registra um ouvinte de evento?',
      ans: 'addEventListener',
      exp: 'addEventListener("click", fn) executa fn a cada clique.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Complete o método que seleciona por seletor CSS.',
      code: `<span class="kw">const</span> titulo <span class="kw">=</span> document.<span class="mt">_______</span>(<span class="st">"h1"</span>);`,
      q: 'Qual método seleciona o primeiro elemento por seletor CSS?',
      ans: 'querySelector',
      exp: 'querySelector("h1") devolve o primeiro &lt;h1&gt; da página.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise a alteração do DOM.',
      code: `<span class="kw">const</span> t <span class="kw">=</span> document.getElementById(<span class="st">"msg"</span>);\nt.textContent <span class="kw">=</span> <span class="st">"Pronto!"</span>;`,
      q: 'O que este código faz?',
      opts: [
        { t: 'Cria um novo elemento', ok: false },
        { t: 'Apaga o elemento', ok: false },
        { t: 'Recarrega a página', ok: false },
        { t: 'Troca o texto do elemento #msg para "Pronto!"', ok: true },
      ],
      exp: 'Seleciona #msg e substitui seu texto interno por "Pronto!".',
    },

  ]
};
