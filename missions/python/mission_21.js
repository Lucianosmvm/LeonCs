// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 22 — GENERATORS E ITERATORS
// Tema: Sequências preguiçosas com yield
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_21 = {
  id: 21,
  title: "MISSÃO 22 — GENERATORS E ITERATORS",
  icon: '♻️',
  free: false,
  desc: "Generators produzem valores sob demanda, economizando memória. Base de streams infinitos e processamento de grandes volumes.",
  objs: [
    "Entender iteradores e o protocolo de iteração",
    "Criar generators com yield",
    "Diferenciar avaliação preguiçosa de listas"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Um <strong>generator</strong> produz valores um a um, sob demanda, sem guardar tudo na memória de uma vez.',
      q: 'Qual a principal vantagem de um generator?',
      opts: [
        { t: 'Executa mais rápido em qualquer caso', ok: false },
        { t: 'Ordena os valores automaticamente', ok: false },
        { t: 'Permite indexação com [ ]', ok: false },
        { t: 'Economiza memória gerando valores sob demanda', ok: true },
      ],
      exp: 'Generators são preguiçosos (lazy): calculam o próximo valor só quando pedido, ideal para grandes volumes ou fluxos infinitos.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'A palavra-chave <code>yield</code> transforma uma função em generator, pausando e devolvendo um valor por vez.',
      q: 'Qual palavra-chave cria um generator?',
      opts: [
        { t: 'return', ok: false },
        { t: 'async', ok: false },
        { t: 'yield', ok: true },
        { t: 'lazy', ok: false },
      ],
      exp: 'yield devolve um valor e pausa a função, retomando do mesmo ponto na próxima iteração.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Para obter o próximo valor de um generator manualmente, usamos <code>next()</code>.',
      q: 'Qual função obtém o próximo valor de um generator?',
      opts: [
        { t: 'more()', ok: false },
        { t: 'next()', ok: true },
        { t: 'get()', ok: false },
        { t: 'pop()', ok: false },
      ],
      exp: 'next(gen) avança o generator até o próximo yield. Quando esgota, lança StopIteration.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Quando um generator esgota, o loop <code>for</code> para automaticamente ao capturar a exceção de fim.',
      q: 'Qual exceção sinaliza o fim de um iterador?',
      opts: [
        { t: 'StopIteration', ok: true },
        { t: 'EndError', ok: false },
        { t: 'IndexError', ok: false },
        { t: 'ValueError', ok: false },
      ],
      exp: 'StopIteration é lançada quando não há mais valores. O for a captura internamente e encerra o laço.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Uma <strong>generator expression</strong> usa parênteses no lugar dos colchetes de uma list comprehension.',
      q: 'Qual é uma generator expression?',
      opts: [
        { t: '[x*2 for x in nums]', ok: false },
        { t: '(x*2 for x in nums)', ok: true },
        { t: '{x*2 for x in nums}', ok: false },
        { t: '{x: x*2 for x in nums}', ok: false },
      ],
      exp: 'Parênteses () criam um generator preguiçoso; [] cria lista, {} cria set, {k:v} cria dict.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Um objeto é <strong>iterável</strong> se implementa <code>__iter__</code>, e <strong>iterador</strong> se também implementa <code>__next__</code>.',
      q: 'Qual método torna um objeto um iterador?',
      opts: [
        { t: '__len__', ok: false },
        { t: '__getitem__', ok: false },
        { t: '__next__', ok: true },
        { t: '__call__', ok: false },
      ],
      exp: 'O protocolo de iteração exige __iter__ (devolve o iterador) e __next__ (devolve o próximo valor).',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Generators só podem ser percorridos <strong>uma vez</strong>. Depois de esgotados, não reiniciam.',
      q: 'O que acontece ao percorrer um generator já esgotado?',
      opts: [
        { t: 'Reinicia do começo', ok: false },
        { t: 'Lança erro imediato', ok: false },
        { t: 'Repete o último valor', ok: false },
        { t: 'Não produz nenhum valor', ok: true },
      ],
      exp: 'Um generator esgotado está vazio: um novo for simplesmente não itera. Para repetir, crie um novo generator.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Complete a função para que ela vire um generator devolvendo valores um a um.',
      code: `<span class="kw">def</span> contar(n):\n    i <span class="kw">=</span> <span class="nm">0</span>\n    <span class="kw">while</span> i <span class="kw">&lt;</span> n:\n        <span class="kw">_______</span> i\n        i <span class="kw">+=</span> <span class="nm">1</span>`,
      q: 'Qual palavra-chave devolve cada valor sem encerrar a função?',
      ans: 'yield',
      exp: 'yield i devolve o valor atual e pausa; na próxima chamada continua após o yield.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Obtenha manualmente o próximo valor do generator.',
      code: `g <span class="kw">=</span> contar(<span class="nm">3</span>)\n<span class="mt">print</span>(<span class="kw">_______</span>(g))\n<span class="cm"># exibe: 0</span>`,
      q: 'Qual função pega o próximo valor?',
      ans: 'next',
      exp: 'next(g) avança o generator até o primeiro yield, devolvendo 0.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise o consumo deste generator.',
      code: `<span class="kw">def</span> pares():\n    <span class="kw">for</span> n <span class="kw">in</span> <span class="mt">range</span>(<span class="nm">6</span>):\n        <span class="kw">if</span> n <span class="kw">%</span> <span class="nm">2</span> <span class="kw">==</span> <span class="nm">0</span>:\n            <span class="kw">yield</span> n\n\n<span class="mt">print</span>(<span class="mt">list</span>(pares()))`,
      q: 'O que este código exibe?',
      opts: [
        { t: '[0, 2, 4]', ok: true },
        { t: '[2, 4, 6]', ok: false },
        { t: '[1, 3, 5]', ok: false },
        { t: '<generator object>', ok: false },
      ],
      exp: 'range(6) é 0..5. yield só nos pares: 0, 2, 4. list() consome o generator formando [0, 2, 4].',
    },

  ]
};
