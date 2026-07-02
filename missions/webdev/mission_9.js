// ══════════════════════════════════════════════════════
// WEB — MISSÃO 10 — JAVASCRIPT NA WEB
// Tema: Variáveis, DOM, eventos e interatividade
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_WEBDEV_9 = {
  id: 9,
  title: "MISSÃO 10 — JAVASCRIPT NA WEB",
  icon: '⚡',
  free: false,
  desc: "Hora de dar vida à página. JavaScript reage a cliques, altera o HTML e torna o site interativo. Missão final da jornada.",
  objs: [
    "Declarar variáveis em JavaScript",
    "Selecionar e alterar elementos do DOM",
    "Reagir a eventos como cliques"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Em JavaScript, variáveis são declaradas com <code>let</code> (mutável) ou <code>const</code> (constante).',
      q: 'Qual palavra-chave declara uma variável que NÃO muda?',
      opts: [
        { t: 'let', ok: false },
        { t: 'const', ok: true },
        { t: 'var', ok: false },
        { t: 'def', ok: false },
      ],
      exp: 'const cria uma constante (não reatribuível). let cria uma variável que pode mudar.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'O <strong>DOM</strong> é a representação da página como uma árvore de elementos que o JS pode manipular.',
      q: 'O que é o DOM?',
      opts: [
        { t: 'Um banco de dados', ok: false },
        { t: 'Um framework CSS', ok: false },
        { t: 'A árvore de elementos da página, manipulável por JS', ok: true },
        { t: 'Um servidor', ok: false },
      ],
      exp: 'DOM = Document Object Model. O JavaScript usa o DOM para ler e alterar o HTML dinamicamente.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>document.getElementById("id")</code> seleciona um elemento pelo id.',
      q: 'Como selecionar o elemento com id="titulo"?',
      opts: [
        { t: 'document.select("#titulo")', ok: false },
        { t: 'getElement("titulo")', ok: false },
        { t: 'document.id("titulo")', ok: false },
        { t: 'document.getElementById("titulo")', ok: true },
      ],
      exp: 'getElementById devolve o elemento cujo id corresponde. É uma das formas mais comuns de selecionar.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>textContent</code> lê ou altera o texto de um elemento.',
      q: 'Como mudar o texto de um elemento selecionado el?',
      opts: [
        { t: 'el.textContent = "oi"', ok: true },
        { t: 'el.value = "oi"', ok: false },
        { t: 'el.text("oi")', ok: false },
        { t: 'el.write("oi")', ok: false },
      ],
      exp: 'el.textContent = "oi" substitui o texto interno do elemento.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>addEventListener</code> registra uma função para reagir a um evento.',
      q: 'Como reagir ao clique de um botão btn?',
      opts: [
        { t: 'btn.onclick("run")', ok: false },
        { t: 'btn.addEventListener("click", funcao)', ok: true },
        { t: 'btn.click = funcao', ok: false },
        { t: 'btn.listen(click)', ok: false },
      ],
      exp: 'addEventListener("click", funcao) executa a função sempre que o botão for clicado.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<code>console.log()</code> exibe valores no console do navegador — ótimo para depurar.',
      q: 'O que console.log() faz?',
      opts: [
        { t: 'Cria um alerta na tela', ok: false },
        { t: 'Salva um arquivo', ok: false },
        { t: 'Exibe valores no console do navegador', ok: true },
        { t: 'Recarrega a página', ok: false },
      ],
      exp: 'console.log é usado para inspecionar valores durante o desenvolvimento, no console (F12).',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'O JS pode ir num arquivo <code>.js</code>, ligado com <code>&lt;script src="app.js"&gt;</code>.',
      q: 'Qual tag inclui um arquivo JavaScript no HTML?',
      opts: [
        { t: '&lt;link&gt;', ok: false },
        { t: '&lt;js&gt;', ok: false },
        { t: '&lt;code&gt;', ok: false },
        { t: '&lt;script&gt;', ok: true },
      ],
      exp: '&lt;script src="app.js"&gt;&lt;/script&gt; carrega o arquivo JS. Costuma ir no final do body.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Complete a palavra-chave de uma variável constante.',
      code: `<span class="kw">_______</span> PI <span class="kw">=</span> <span class="nm">3.14</span>;\n<span class="cm">// não pode ser reatribuída</span>`,
      q: 'Qual palavra-chave declara uma constante?',
      ans: 'const',
      exp: 'const PI = 3.14 cria uma constante que não pode ser reatribuída.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Complete o método que seleciona um elemento pelo id.',
      code: `<span class="kw">const</span> titulo <span class="kw">=</span> document.<span class="mt">_______</span>(<span class="st">"titulo"</span>);`,
      q: 'Qual método seleciona um elemento pelo id?',
      ans: 'getElementById',
      exp: 'document.getElementById("titulo") retorna o elemento com aquele id.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Missão final! Analise este código que reage a um clique.',
      code: `<span class="kw">const</span> btn <span class="kw">=</span> document.getElementById(<span class="st">"b"</span>);\nbtn.addEventListener(<span class="st">"click"</span>, () <span class="kw">=&gt;</span> {\n  btn.textContent <span class="kw">=</span> <span class="st">"Clicado!"</span>;\n});`,
      q: 'O que acontece ao clicar no botão?',
      opts: [
        { t: 'O texto do botão vira "Clicado!"', ok: true },
        { t: 'A página recarrega', ok: false },
        { t: 'Um alerta aparece', ok: false },
        { t: 'Nada acontece', ok: false },
      ],
      exp: 'O evento "click" dispara a função, que troca o textContent do botão para "Clicado!". Parabéns — jornada web completa! 🏆',
    },

  ]
};
