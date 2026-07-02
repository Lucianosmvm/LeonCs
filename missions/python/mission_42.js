// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 43 — MATH E RANDOM
// Tema: Módulos math e random
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_42 = {
  id: 42,
  title: "MISSÃO 43 — MATH E RANDOM",
  icon: '🎲',
  free: false,
  desc: "Cálculos matemáticos e aleatoriedade movem jogos, simulações e ciência. Os módulos math e random entregam as ferramentas.",
  objs: [
    "Usar funções do módulo math",
    "Gerar números aleatórios com random",
    "Sortear e embaralhar coleções"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<code>math.sqrt(x)</code> devolve a raiz quadrada de x.',
      q: 'O que math.sqrt(16) retorna?',
      opts: [
        { t: '256', ok: false },
        { t: '8', ok: false },
        { t: '4.0', ok: true },
        { t: '4', ok: false },
      ],
      exp: 'sqrt devolve float: math.sqrt(16) = 4.0.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>math.ceil()</code> arredonda para cima; <code>math.floor()</code> para baixo.',
      q: 'O que math.ceil(4.1) retorna?',
      opts: [
        { t: '4', ok: false },
        { t: '4.0', ok: false },
        { t: '4.1', ok: false },
        { t: '5', ok: true },
      ],
      exp: 'ceil arredonda sempre para cima: 4.1 → 5. floor(4.9) daria 4.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>math.pi</code> é a constante π.',
      q: 'O que math.pi representa?',
      opts: [
        { t: 'A constante π (≈3.14159)', ok: true },
        { t: 'O número de Euler', ok: false },
        { t: 'A raiz de 2', ok: false },
        { t: 'O infinito', ok: false },
      ],
      exp: 'math.pi ≈ 3.14159. Há também math.e (número de Euler) e math.inf (infinito).',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>random.randint(a, b)</code> sorteia um inteiro entre a e b, <strong>inclusive</strong>.',
      q: 'Qual faixa random.randint(1, 6) pode devolver?',
      opts: [
        { t: '1 a 5', ok: false },
        { t: '1 a 6, incluindo ambos', ok: true },
        { t: '0 a 6', ok: false },
        { t: '2 a 6', ok: false },
      ],
      exp: 'Diferente de range, randint inclui os dois extremos: qualquer inteiro de 1 a 6.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>random.choice(seq)</code> sorteia um elemento da sequência.',
      q: 'O que random.choice(["a", "b", "c"]) retorna?',
      opts: [
        { t: 'Um índice', ok: false },
        { t: 'A lista embaralhada', ok: false },
        { t: 'Um dos elementos da lista', ok: true },
        { t: 'Sempre "a"', ok: false },
      ],
      exp: 'choice escolhe aleatoriamente um item da sequência.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<code>random.shuffle(lista)</code> embaralha a lista <strong>no lugar</strong>.',
      q: 'O que random.shuffle(lista) retorna?',
      opts: [
        { t: 'Uma nova lista embaralhada', ok: false },
        { t: 'O primeiro elemento', ok: false },
        { t: 'A lista ordenada', ok: false },
        { t: 'None (altera a lista original)', ok: true },
      ],
      exp: 'shuffle modifica a lista in-place e devolve None. Para uma cópia sorteada use random.sample.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: '<code>random.random()</code> devolve um float entre 0.0 e 1.0.',
      q: 'Qual a faixa de random.random()?',
      opts: [
        { t: '0.0 (inclusive) a 1.0 (exclusive)', ok: true },
        { t: '0 a 100', ok: false },
        { t: '-1 a 1', ok: false },
        { t: '1 a 10', ok: false },
      ],
      exp: 'random() gera um float em [0.0, 1.0). Multiplique/escale para outras faixas.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Importe o módulo matemático.',
      code: `<span class="kw">import</span> <span class="kw">_______</span>\n\n<span class="mt">print</span>(math.sqrt(<span class="nm">9</span>))\n<span class="cm"># 3.0</span>`,
      q: 'Qual módulo traz sqrt, ceil e pi?',
      ans: 'math',
      exp: 'import math dá acesso a sqrt, ceil, floor, pi, e outras funções matemáticas.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Sorteie um inteiro de 1 a 6 (um dado).',
      code: `<span class="kw">import</span> random\ndado <span class="kw">=</span> random.<span class="kw">_______</span>(<span class="nm">1</span>, <span class="nm">6</span>)`,
      q: 'Qual função sorteia um inteiro inclusive nos extremos?',
      ans: 'randint',
      exp: 'random.randint(1, 6) devolve um inteiro entre 1 e 6, incluindo ambos.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise o tipo devolvido por sqrt.',
      code: `<span class="kw">import</span> math\nx <span class="kw">=</span> math.floor(<span class="nm">3.9</span>) <span class="kw">+</span> math.ceil(<span class="nm">3.1</span>)\n<span class="mt">print</span>(x)`,
      q: 'O que este código exibe?',
      opts: [
        { t: '6', ok: false },
        { t: '7', ok: true },
        { t: '8', ok: false },
        { t: '6.0', ok: false },
      ],
      exp: 'floor(3.9) = 3 e ceil(3.1) = 4. Ambos devolvem int, então 3 + 4 = 7.',
    },

  ]
};
