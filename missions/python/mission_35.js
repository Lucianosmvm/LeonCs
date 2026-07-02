// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 36 — ITERTOOLS
// Tema: Ferramentas de iteração eficientes
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_35 = {
  id: 35,
  title: "MISSÃO 36 — ITERTOOLS",
  icon: '🔁',
  free: false,
  desc: "itertools oferece blocos de construção para iteração rápida e econômica: combinações, agrupamentos, ciclos e mais.",
  objs: [
    "Combinar iteráveis com chain",
    "Gerar combinações e permutações",
    "Usar count, cycle e islice"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<code>chain()</code> junta vários iteráveis em uma única sequência.',
      q: 'O que itertools.chain([1,2], [3,4]) produz?',
      opts: [
        { t: '[[1,2],[3,4]]', ok: false },
        { t: '[1, 3] e [2, 4]', ok: false },
        { t: 'Um erro', ok: false },
        { t: '1, 2, 3, 4 em sequência', ok: true },
      ],
      exp: 'chain concatena iteráveis preguiçosamente: percorre o primeiro, depois o segundo — 1, 2, 3, 4.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>count(start)</code> gera números infinitamente a partir de start.',
      q: 'Como é a sequência de itertools.count?',
      opts: [
        { t: 'Infinita, incrementando', ok: true },
        { t: 'Finita e ordenada', ok: false },
        { t: 'Aleatória', ok: false },
        { t: 'Sempre de 0 a 9', ok: false },
      ],
      exp: 'count(10) produz 10, 11, 12... sem fim. Combine com islice ou break para não travar.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>cycle(iterável)</code> repete os elementos indefinidamente.',
      q: 'O que cycle([1,2]) produz?',
      opts: [
        { t: '1, 2 e para', ok: false },
        { t: '1, 2, 1, 2, 1, 2... sem fim', ok: true },
        { t: 'Um erro', ok: false },
        { t: '2, 1 invertido', ok: false },
      ],
      exp: 'cycle percorre o iterável repetidamente para sempre. Use com controle de parada.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>combinations(iter, r)</code> gera todos os subconjuntos de tamanho r, sem repetição de ordem.',
      q: 'Quantas combinations de tamanho 2 há em [1,2,3]?',
      opts: [
        { t: '6', ok: false },
        { t: '9', ok: false },
        { t: '3', ok: true },
        { t: '2', ok: false },
      ],
      exp: '(1,2), (1,3), (2,3) = 3 combinações. A ordem não importa, então (2,1) não conta.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>permutations(iter, r)</code> considera a ordem: (1,2) e (2,1) são distintas.',
      q: 'Quantas permutations de tamanho 2 há em [1,2,3]?',
      opts: [
        { t: '3', ok: false },
        { t: '2', ok: false },
        { t: '9', ok: false },
        { t: '6', ok: true },
      ],
      exp: 'Como a ordem importa: (1,2),(2,1),(1,3),(3,1),(2,3),(3,2) = 6 permutações.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<code>islice(iter, n)</code> fatia um iterador (útil com geradores infinitos).',
      q: 'Por que usar islice em vez de fatiar com [ ]?',
      opts: [
        { t: 'Porque iteradores/generators não suportam [ ]', ok: true },
        { t: 'Porque é mais bonito', ok: false },
        { t: 'Porque islice ordena', ok: false },
        { t: 'Porque [ ] é proibido em Python', ok: false },
      ],
      exp: 'Generators não são indexáveis. islice(gen, 5) pega os 5 primeiros valores de forma preguiçosa.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Todas essas funções vêm do módulo <code>itertools</code>.',
      q: 'De qual módulo vêm chain, count e combinations?',
      opts: [
        { t: 'functools', ok: false },
        { t: 'itertools', ok: true },
        { t: 'collections', ok: false },
        { t: 'operator', ok: false },
      ],
      exp: 'import itertools — depois itertools.chain, itertools.count, itertools.combinations etc.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Importe o módulo de ferramentas de iteração.',
      code: `<span class="kw">import</span> <span class="kw">_______</span>\n\njunto <span class="kw">=</span> <span class="mt">list</span>(itertools.chain([<span class="nm">1</span>], [<span class="nm">2</span>]))\n<span class="cm"># junto = [1, 2]</span>`,
      q: 'Qual módulo importar?',
      ans: 'itertools',
      exp: 'import itertools dá acesso a chain, count, cycle, combinations e outras.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Gere os pares de tamanho 2 sem repetir ordem.',
      code: `<span class="kw">from</span> itertools <span class="kw">import</span> <span class="kw">_______</span>\n\npares <span class="kw">=</span> <span class="mt">list</span>(combinations([<span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span>], <span class="nm">2</span>))`,
      q: 'Qual função gera combinações?',
      ans: 'combinations',
      exp: 'combinations([1,2,3], 2) devolve (1,2), (1,3), (2,3).',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise a concatenação de dois iteráveis.',
      code: `<span class="kw">from</span> itertools <span class="kw">import</span> chain\nres <span class="kw">=</span> <span class="mt">list</span>(chain(<span class="st">"ab"</span>, [<span class="nm">1</span>, <span class="nm">2</span>]))\n<span class="mt">print</span>(res)`,
      q: 'O que este código exibe?',
      opts: [
        { t: "['ab', 1, 2]", ok: false },
        { t: "['a', 'b', '1', '2']", ok: false },
        { t: "['a', 'b', 1, 2]", ok: true },
        { t: 'Erro', ok: false },
      ],
      exp: 'chain percorre "ab" caractere a caractere ("a","b") e depois a lista (1,2): ["a","b",1,2].',
    },

  ]
};
