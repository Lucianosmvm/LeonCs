// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 14 — LIST COMPREHENSION  [PREMIUM]
// Tema: list comprehension, filtros, aninhada
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_13 = {
  id: 13,
  title: "MISSÃO 14 — LIST COMPREHENSION",
  icon: '⚡',
  free: false,
  desc: "List comprehension é Python idiomático — cria listas em uma linha com filtros e transformações. Código conciso e elegante.",
  objs: [
    "Criar listas com [expr for item in seq]",
    "Filtrar com condição: [expr for item in seq if cond]",
    "Comparar com loops equivalentes"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'List comprehension: <code>[expressão for variável in sequência]</code>. Cria uma nova lista aplicando a expressão.',
      q: 'O que resulta: [x * 2 for x in [1, 2, 3]]?',
      opts: [
        { t: '[1, 2, 3]', ok: false },
        { t: '[2, 4, 6]', ok: true },
        { t: '6', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: 'Para cada x em [1,2,3], calcula x*2: [1*2, 2*2, 3*2] = [2, 4, 6].',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Com condição: <code>[expr for x in seq if condição]</code>. Só inclui itens que passam no filtro.',
      q: 'O que resulta: [x for x in range(10) if x % 2 == 0]?',
      opts: [
        { t: '[1, 3, 5, 7, 9]', ok: false },
        { t: '[0, 2, 4, 6, 8]', ok: true },
        { t: '[0, 1, 2, 3, 4]', ok: false },
        { t: 'Todos os números', ok: false },
      ],
      exp: 'x % 2 == 0 filtra apenas pares. range(10) = 0..9. Pares: [0, 2, 4, 6, 8].',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'List comprehension é equivalente a um for loop com .append().',
      q: 'Qual loop é equivalente a: [x**2 for x in range(5)]?',
      opts: [
        { t: 'r=[]; for x in range(5): r = x**2', ok: false },
        { t: 'r=[]; for x in range(5): r.append(x**2)', ok: true },
        { t: 'r=[x**2]; for x in range(5): pass', ok: false },
        { t: 'r=x**2 for x in range(5)', ok: false },
      ],
      exp: 'O loop equivalente cria lista vazia, itera e usa .append(). List comprehension faz tudo em uma linha.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Você pode aplicar métodos de string em list comprehension.',
      q: 'O que resulta: [s.upper() for s in ["a", "b", "c"]]?',
      opts: [
        { t: '["a", "b", "c"]', ok: false },
        { t: '["A", "B", "C"]', ok: true },
        { t: '"ABC"', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: 's.upper() converte cada string para maiúscula. Resultado: ["A", "B", "C"].',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'List comprehension pode usar a condição if/else inline na expressão.',
      q: 'O que resulta: ["par" if x%2==0 else "ímpar" for x in [1,2,3,4]]?',
      opts: [
        { t: '["par", "par", "par", "par"]', ok: false },
        { t: '["ímpar", "par", "ímpar", "par"]', ok: true },
        { t: '[1, 2, 3, 4]', ok: false },
        { t: 'Erro de sintaxe', ok: false },
      ],
      exp: 'Ternário inline: "par" se x%2==0, "ímpar" caso contrário. [1→ímpar, 2→par, 3→ímpar, 4→par].',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'List comprehension é mais rápida que loop explícito para operações simples.',
      q: 'Qual é a principal vantagem de list comprehension?',
      opts: [
        { t: 'É a única forma de criar listas', ok: false },
        { t: 'Código mais conciso e geralmente mais rápido que loop explícito', ok: true },
        { t: 'Funciona apenas com números', ok: false },
        { t: 'Não precisa de memória extra', ok: false },
      ],
      exp: 'List comprehension é idiomática em Python: mais legível, concisa e otimizada internamente.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Você pode iterar sobre strings em list comprehension.',
      q: 'O que resulta: [c for c in "Leon" if c != "e"]?',
      opts: [
        { t: '["L", "e", "o", "n"]', ok: false },
        { t: '["L", "o", "n"]', ok: true },
        { t: '["e"]', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: 'Itera por "Leon", filtra tirando "e". Resultado: ["L", "o", "n"].',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Crie uma list comprehension que quadra cada número.',
      code: `nums = [<span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span>, <span class="nm">4</span>]\nquadrados = [x <span class="kw">_______</span> <span class="nm">2</span> <span class="kw">for</span> x <span class="kw">in</span> nums]\n<span class="mt">print</span>(quadrados)\n<span class="cm"># exibe: [1, 4, 9, 16]</span>`,
      q: 'Qual operador eleva ao quadrado?',
      ans: '**',
      exp: 'x**2 eleva x à potência 2. [1**2, 2**2, 3**2, 4**2] = [1, 4, 9, 16].',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Filtre apenas strings com mais de 3 caracteres.',
      code: `nomes = [<span class="st">"RE4"</span>, <span class="st">"Leon"</span>, <span class="st">"Ada"</span>, <span class="st">"Ashley"</span>]\nlongos = [n <span class="kw">for</span> n <span class="kw">in</span> nomes <span class="kw">if</span> <span class="mt">len</span>(n) <span class="kw">_______</span> <span class="nm">3</span>]\n<span class="mt">print</span>(longos)\n<span class="cm"># exibe: ['Leon', 'Ashley']</span>`,
      q: 'Qual operador filtra comprimento maior que 3?',
      ans: '>',
      exp: 'len(n) > 3: "RE4"(3)→não, "Leon"(4)→sim, "Ada"(3)→não, "Ashley"(6)→sim. Resultado: ["Leon", "Ashley"].',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise esta transformação de dados.',
      code: `danos = [<span class="nm">15</span>, <span class="nm">8</span>, <span class="nm">22</span>, <span class="nm">5</span>, <span class="nm">18</span>]\ngraves = [d <span class="kw">for</span> d <span class="kw">in</span> danos <span class="kw">if</span> d <span class="kw">>=</span> <span class="nm">15</span>]\n<span class="mt">print</span>(graves)`,
      q: 'O que este código exibe?',
      opts: [
        { t: '[15, 8, 22, 5, 18]', ok: false },
        { t: '[15, 22, 18]', ok: true },
        { t: '[8, 5]', ok: false },
        { t: '[22]', ok: false },
      ],
      exp: 'Filtra danos >= 15: 15→sim, 8→não, 22→sim, 5→não, 18→sim. Resultado: [15, 22, 18].',
    },

  ]
};
