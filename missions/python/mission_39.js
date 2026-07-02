// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 40 — SLICING AVANÇADO
// Tema: Fatiamento de sequências com passo
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_39 = {
  id: 39,
  title: "MISSÃO 40 — SLICING AVANÇADO",
  icon: '✂️',
  free: false,
  desc: "Fatiar sequências é uma superpotência do Python: extrair, inverter e pular elementos com uma sintaxe compacta.",
  objs: [
    "Fatiar com início, fim e passo",
    "Usar índices negativos",
    "Inverter sequências com slicing"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'A sintaxe de fatiamento é <code>seq[inicio:fim:passo]</code>.',
      q: 'O que representa o terceiro valor em seq[a:b:c]?',
      opts: [
        { t: 'O índice inicial', ok: false },
        { t: 'O índice final', ok: false },
        { t: 'O tamanho', ok: false },
        { t: 'O passo (incremento)', ok: true },
      ],
      exp: 'inicio:fim:passo. O passo define de quantos em quantos elementos avançar (2 = pula um).',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'O índice final de uma fatia é <strong>exclusivo</strong>.',
      q: 'O que [1, 2, 3, 4][0:2] retorna?',
      opts: [
        { t: '[1, 2]', ok: true },
        { t: '[1, 2, 3]', ok: false },
        { t: '[2, 3]', ok: false },
        { t: '[1]', ok: false },
      ],
      exp: '[0:2] pega os índices 0 e 1 (o fim 2 é excluído): [1, 2].',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Índices negativos contam a partir do fim: <code>-1</code> é o último.',
      q: 'O que [10, 20, 30][-1] retorna?',
      opts: [
        { t: '10', ok: false },
        { t: '30', ok: true },
        { t: '20', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: '-1 é o último elemento, -2 o penúltimo, e assim por diante.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>seq[::-1]</code> inverte a sequência.',
      q: 'O que "abc"[::-1] retorna?',
      opts: [
        { t: '"abc"', ok: false },
        { t: '"acb"', ok: false },
        { t: '"cba"', ok: true },
        { t: 'Erro', ok: false },
      ],
      exp: 'Passo -1 percorre de trás para frente, invertendo: "cba".',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Omitir início e fim usa os extremos: <code>seq[::2]</code> pega de 2 em 2 do começo ao fim.',
      q: 'O que [0,1,2,3,4][::2] retorna?',
      opts: [
        { t: '[1, 3]', ok: false },
        { t: '[0, 1, 2]', ok: false },
        { t: '[2, 4]', ok: false },
        { t: '[0, 2, 4]', ok: true },
      ],
      exp: 'Sem início/fim, do começo ao fim com passo 2: índices 0, 2, 4 → [0, 2, 4].',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Fatiar uma lista devolve uma <strong>nova lista</strong> (cópia rasa).',
      q: 'O que seq[:] produz?',
      opts: [
        { t: 'Uma cópia rasa da sequência', ok: true },
        { t: 'Um erro', ok: false },
        { t: 'A mesma lista (referência)', ok: false },
        { t: 'A lista invertida', ok: false },
      ],
      exp: 'seq[:] copia todos os elementos numa nova lista — útil para não alterar a original.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Fatias fora do tamanho não geram erro — são ajustadas.',
      q: 'O que [1, 2, 3][0:99] retorna?',
      opts: [
        { t: 'IndexError', ok: false },
        { t: '[1, 2, 3]', ok: true },
        { t: '[1, 2, 3, None...]', ok: false },
        { t: '[]', ok: false },
      ],
      exp: 'Slicing tolera limites grandes: o fim é cortado no tamanho real. Retorna [1, 2, 3].',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Inverta a string usando slicing.',
      code: `s <span class="kw">=</span> <span class="st">"leon"</span>\ninvertida <span class="kw">=</span> s[::<span class="kw">_______</span>]\n<span class="cm"># invertida = "noel"</span>`,
      q: 'Qual passo inverte a sequência?',
      ans: '-1',
      exp: 's[::-1] percorre de trás para frente, invertendo a string.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Pegue os três primeiros elementos.',
      code: `nums <span class="kw">=</span> [<span class="nm">10</span>, <span class="nm">20</span>, <span class="nm">30</span>, <span class="nm">40</span>]\nprimeiros <span class="kw">=</span> nums[:<span class="kw">_______</span>]\n<span class="cm"># primeiros = [10, 20, 30]</span>`,
      q: 'Qual índice final pega os 3 primeiros?',
      ans: '3',
      exp: 'nums[:3] pega os índices 0, 1, 2 (fim 3 exclusivo): [10, 20, 30].',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise a fatia com passo.',
      code: `nums <span class="kw">=</span> [<span class="nm">0</span>, <span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span>, <span class="nm">4</span>, <span class="nm">5</span>]\n<span class="mt">print</span>(nums[<span class="nm">1</span>:<span class="nm">5</span>:<span class="nm">2</span>])`,
      q: 'O que este código exibe?',
      opts: [
        { t: '[1, 2, 3, 4]', ok: false },
        { t: '[1, 3, 5]', ok: false },
        { t: '[1, 3]', ok: true },
        { t: '[2, 4]', ok: false },
      ],
      exp: 'De índice 1 até 4 (5 exclusivo), pulando de 2 em 2: índices 1 e 3 → [1, 3].',
    },

  ]
};
