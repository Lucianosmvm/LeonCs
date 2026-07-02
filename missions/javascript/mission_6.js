// ══════════════════════════════════════════════════════
// JAVASCRIPT — MISSÃO 07 — ARRAYS
// Tema: Métodos de array (map, filter, push, reduce)
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_JAVASCRIPT_6 = {
  id: 6,
  title: "MISSÃO 07 — ARRAYS",
  icon: '📚',
  free: false,
  desc: "Arrays guardam listas de valores. Seus métodos poderosos (map, filter, reduce) transformam dados com elegância.",
  objs: [
    "Criar e acessar arrays",
    "Adicionar e remover elementos",
    "Transformar com map, filter e reduce"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Arrays são criados com colchetes: <code>[1, 2, 3]</code>. O índice começa em 0.',
      q: 'O que [10, 20, 30][1] retorna?',
      opts: [
        { t: '10', ok: false },
        { t: '30', ok: false },
        { t: '20', ok: true },
        { t: '1', ok: false },
      ],
      exp: 'O índice 1 é o segundo elemento (a contagem começa em 0): 20.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>push()</code> adiciona ao FIM; <code>pop()</code> remove do fim.',
      q: 'O que push("x") faz em um array?',
      opts: [
        { t: 'Remove o primeiro elemento', ok: false },
        { t: 'Ordena o array', ok: false },
        { t: 'Inverte o array', ok: false },
        { t: 'Adiciona "x" ao final', ok: true },
      ],
      exp: 'push adiciona no fim do array e devolve o novo tamanho.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>map()</code> cria um novo array aplicando uma função a cada elemento.',
      q: 'O que [1,2,3].map(x => x * 2) retorna?',
      opts: [
        { t: '[2, 4, 6]', ok: true },
        { t: '[1, 2, 3]', ok: false },
        { t: '6', ok: false },
        { t: '[1, 4, 9]', ok: false },
      ],
      exp: 'map transforma cada elemento: cada x vira x * 2 → [2, 4, 6].',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>filter()</code> mantém apenas os elementos onde a função retorna true.',
      q: 'O que [1,2,3,4].filter(x => x % 2 === 0) retorna?',
      opts: [
        { t: '[1, 3]', ok: false },
        { t: '[2, 4]', ok: true },
        { t: '[1, 2, 3, 4]', ok: false },
        { t: '2', ok: false },
      ],
      exp: 'filter mantém os que passam no teste: apenas os pares 2 e 4.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>.length</code> devolve o número de elementos do array.',
      q: 'O que [5, 10, 15].length retorna?',
      opts: [
        { t: '15', ok: false },
        { t: '2', ok: false },
        { t: '3', ok: true },
        { t: '30', ok: false },
      ],
      exp: '.length conta os elementos: o array tem 3.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<code>reduce()</code> combina todos os elementos em um único valor.',
      q: 'O que [1,2,3].reduce((a, b) => a + b, 0) retorna?',
      opts: [
        { t: '[6]', ok: false },
        { t: '0', ok: false },
        { t: '123', ok: false },
        { t: '6', ok: true },
      ],
      exp: 'reduce acumula: 0+1+2+3 = 6. O segundo argumento (0) é o valor inicial.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: '<code>includes()</code> testa se um valor está no array.',
      q: 'O que ["a","b"].includes("c") retorna?',
      opts: [
        { t: 'false', ok: true },
        { t: 'true', ok: false },
        { t: '-1', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: '"c" não está no array, então includes devolve false.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Complete o método que adiciona ao final do array.',
      code: `<span class="kw">const</span> fila <span class="kw">=</span> [<span class="st">"a"</span>];\nfila.<span class="mt">_______</span>(<span class="st">"b"</span>);\n<span class="cm">// fila = ["a", "b"]</span>`,
      q: 'Qual método adiciona um elemento ao final?',
      ans: 'push',
      exp: 'push("b") acrescenta "b" ao fim do array.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Complete o método que transforma cada elemento.',
      code: `<span class="kw">const</span> dobrados <span class="kw">=</span> [<span class="nm">1</span>, <span class="nm">2</span>].<span class="mt">_______</span>(x <span class="kw">=&gt;</span> x <span class="kw">*</span> <span class="nm">2</span>);\n<span class="cm">// [2, 4]</span>`,
      q: 'Qual método aplica uma função a cada elemento?',
      ans: 'map',
      exp: 'map cria um novo array com cada elemento transformado.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise a cadeia de métodos.',
      code: `<span class="kw">const</span> nums <span class="kw">=</span> [<span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span>, <span class="nm">4</span>];\n<span class="kw">const</span> r <span class="kw">=</span> nums.filter(x <span class="kw">=&gt;</span> x <span class="kw">&gt;</span> <span class="nm">2</span>).map(x <span class="kw">=&gt;</span> x <span class="kw">*</span> <span class="nm">10</span>);\n<span class="mt">console</span>.log(r);`,
      q: 'O que este código exibe?',
      opts: [
        { t: '[10, 20, 30, 40]', ok: false },
        { t: '[30, 40]', ok: true },
        { t: '[3, 4]', ok: false },
        { t: '[10, 20]', ok: false },
      ],
      exp: 'filter mantém > 2 → [3, 4]; map multiplica por 10 → [30, 40].',
    },

  ]
};
