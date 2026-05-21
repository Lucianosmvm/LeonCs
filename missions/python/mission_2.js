// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 03 — OPERADORES
// Tema: Aritméticos, comparação, lógicos
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_2 = {
  id: 2,
  title: "MISSÃO 03 — OPERADORES",
  icon: '⚙️',
  free: true,
  desc: "Operadores são as ferramentas da lógica. Calcule, compare e decida — é o coração de qualquer programa.",
  objs: [
    "Usar operadores aritméticos: +, -, *, /, //, %, **",
    "Comparar valores com ==, !=, <, >, <=, >=",
    "Combinar condições com and, or, not"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Operadores aritméticos básicos: <code>+</code> soma, <code>-</code> subtrai, <code>*</code> multiplica, <code>/</code> divide (sempre retorna float).',
      q: 'Qual é o resultado de: 10 / 2 em Python?',
      opts: [
        { t: '5', ok: false },
        { t: '5.0', ok: true },
        { t: '2', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: 'Em Python 3, / sempre retorna float. 10 / 2 = 5.0, não 5. Para divisão inteira use //.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'O operador <code>//</code> é a divisão inteira — descarta a parte decimal. O operador <code>%</code> retorna o resto da divisão.',
      q: 'Qual é o resultado de: 10 % 3?',
      opts: [
        { t: '3', ok: false },
        { t: '0', ok: false },
        { t: '1', ok: true },
        { t: '3.33', ok: false },
      ],
      exp: '10 ÷ 3 = 3 com resto 1. O operador % (módulo) retorna esse resto. Muito usado para verificar se um número é par (n % 2 == 0).',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'O operador <code>**</code> é a potenciação em Python.',
      q: 'Qual é o resultado de: 2 ** 8?',
      opts: [
        { t: '16', ok: false },
        { t: '256', ok: true },
        { t: '28', ok: false },
        { t: '64', ok: false },
      ],
      exp: '2 ** 8 = 2^8 = 256. O operador ** substitui Math.Pow() de outras linguagens.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Operadores de comparação retornam <code>True</code> ou <code>False</code>: <code>==</code> (igual), <code>!=</code> (diferente), <code><</code>, <code>></code>, <code><=</code>, <code>>=</code>.',
      q: 'O que retorna: 5 == 5.0?',
      opts: [
        { t: 'False — tipos diferentes', ok: false },
        { t: 'True', ok: true },
        { t: 'Erro de tipo', ok: false },
        { t: '5', ok: false },
      ],
      exp: 'Python compara o valor, não o tipo com ==. 5 e 5.0 têm o mesmo valor numérico, então True. Use "is" para comparar identidade.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'O operador lógico <code>and</code> retorna True só se AMBAS as condições forem verdadeiras.',
      q: 'O que retorna: (3 > 1) and (10 < 5)?',
      opts: [
        { t: 'True', ok: false },
        { t: 'False', ok: true },
        { t: 'Erro', ok: false },
        { t: 'None', ok: false },
      ],
      exp: '(3 > 1) é True. (10 < 5) é False. True and False = False. O and exige que ambos sejam True.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'O operador <code>not</code> inverte um booleano: <code>not True</code> = <code>False</code>, <code>not False</code> = <code>True</code>.',
      q: 'O que retorna: not (5 > 3)?',
      opts: [
        { t: 'True', ok: false },
        { t: 'False', ok: true },
        { t: '5 > 3', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: '(5 > 3) é True. not True = False.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'O operador <code>//</code> faz divisão inteira — resultado sempre é int (se ambos os operandos forem int).',
      q: 'Qual é o resultado de: 17 // 5?',
      opts: [
        { t: '3.4', ok: false },
        { t: '2', ok: false },
        { t: '3', ok: true },
        { t: '4', ok: false },
      ],
      exp: '17 // 5 = 3 (17 ÷ 5 = 3 com resto 2). A parte decimal é descartada.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Use o operador correto para verificar se dois valores são iguais.',
      code: `vidas = <span class="nm">3</span>\n<span class="mt">print</span>(vidas <span class="kw">_______</span> <span class="nm">3</span>)\n<span class="cm"># exibe: True</span>`,
      q: 'Qual operador compara igualdade?',
      ans: '==',
      exp: '== compara valores. = atribui. Confundir os dois é um erro muito comum em programação.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Potenciação em Python usa **.',
      code: `resultado = <span class="nm">3</span> <span class="kw">_______</span> <span class="nm">3</span>\n<span class="mt">print</span>(resultado)\n<span class="cm"># exibe: 27</span>`,
      q: 'Qual operador eleva à potência?',
      ans: '**',
      exp: '3 ** 3 = 27 (3³). Python não usa ^ para potência — ^ é XOR bit a bit.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Trace a execução deste código.',
      code: `a = <span class="nm">10</span>\nb = <span class="nm">3</span>\n<span class="mt">print</span>(a <span class="kw">//</span> b)\n<span class="mt">print</span>(a <span class="kw">%</span> b)`,
      q: 'O que este código exibe?',
      opts: [
        { t: '3.33 e 1', ok: false },
        { t: '3 e 1', ok: true },
        { t: '3 e 3', ok: false },
        { t: '3.0 e 1.0', ok: false },
      ],
      exp: '10 // 3 = 3 (divisão inteira). 10 % 3 = 1 (resto). Saída: 3 na primeira linha, 1 na segunda.',
    },

  ]
};
