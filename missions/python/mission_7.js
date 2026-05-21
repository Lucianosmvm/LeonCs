// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 08 — LOOP FOR
// Tema: for, range(), iteração em strings e listas
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_7 = {
  id: 7,
  title: "MISSÃO 08 — LOOP FOR",
  icon: '🔁',
  free: true,
  desc: "O for percorre sequências automaticamente. Com range(), você controla exatamente quantas iterações quer.",
  objs: [
    "Usar for com range() para repetições controladas",
    "Percorrer strings e listas com for",
    "Entender os parâmetros de range(início, fim, passo)"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'O <code>for</code> em Python itera sobre uma sequência. <code>range(n)</code> gera números de 0 a n-1.',
      q: 'Quantas vezes "x" é exibido: for i in range(4): print("x")?',
      opts: [
        { t: '3', ok: false },
        { t: '4', ok: true },
        { t: '5', ok: false },
        { t: '0', ok: false },
      ],
      exp: 'range(4) gera 0, 1, 2, 3 — quatro valores. O loop executa 4 vezes.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>range(inicio, fim)</code> gera números de inicio até fim-1 (fim não incluso).',
      q: 'Quais números range(2, 6) gera?',
      opts: [
        { t: '2, 3, 4, 5, 6', ok: false },
        { t: '2, 3, 4, 5', ok: true },
        { t: '1, 2, 3, 4, 5', ok: false },
        { t: '2, 3, 4', ok: false },
      ],
      exp: 'range(2, 6) = 2, 3, 4, 5. O fim (6) não é incluído — comportamento consistente com fatiamento.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>range(início, fim, passo)</code> permite saltar de N em N.',
      q: 'Quais valores range(0, 10, 2) gera?',
      opts: [
        { t: '0, 1, 2, 3, 4', ok: false },
        { t: '2, 4, 6, 8, 10', ok: false },
        { t: '0, 2, 4, 6, 8', ok: true },
        { t: '0, 2, 4, 6, 8, 10', ok: false },
      ],
      exp: 'range(0, 10, 2): começa em 0, vai até 10 (exclusive), pula de 2 em 2. Gera: 0, 2, 4, 6, 8.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'O <code>for</code> pode percorrer diretamente os caracteres de uma string.',
      q: 'O que exibe: for c in "AB": print(c)?',
      opts: [
        { t: '"AB"', ok: false },
        { t: 'A e B em linhas separadas', ok: true },
        { t: '0 e 1', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: 'for c in "AB" itera caractere a caractere. Exibe "A" na primeira linha, "B" na segunda.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'A variável do for (o "i") não precisa ser usada dentro do bloco — convencionalmente usa-se "_" quando ignorada.',
      q: 'Como executar um bloco exatamente 5 vezes sem usar o índice?',
      opts: [
        { t: 'for i in range(5): ...', ok: true },
        { t: 'for 5: ...', ok: false },
        { t: 'repeat 5: ...', ok: false },
        { t: 'while 5 times: ...', ok: false },
      ],
      exp: 'for i in range(5) é o padrão. Se não precisar de i, use "for _ in range(5):" — o _ indica intencionalmente descartado.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'range() com passo negativo conta regressivamente.',
      q: 'Quais valores range(5, 0, -1) gera?',
      opts: [
        { t: '5, 4, 3, 2, 1, 0', ok: false },
        { t: '5, 4, 3, 2, 1', ok: true },
        { t: '4, 3, 2, 1, 0', ok: false },
        { t: 'Erro — passo negativo inválido', ok: false },
      ],
      exp: 'range(5, 0, -1) começa em 5, vai até 0 (exclusive), passo -1. Gera: 5, 4, 3, 2, 1.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Diferença entre for e while: for é para sequências/quantidade conhecida; while é para condição desconhecida.',
      q: 'Qual é mais adequado para percorrer todos os itens de uma lista?',
      opts: [
        { t: 'while', ok: false },
        { t: 'for', ok: true },
        { t: 'Ambos igualmente', ok: false },
        { t: 'Nenhum dos dois', ok: false },
      ],
      exp: 'for é ideal para percorrer sequências — listas, strings, ranges. while é para condições dinâmicas.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Use range() para controlar o loop.',
      code: `<span class="kw">for</span> i <span class="kw">in</span> <span class="mt">_______</span>(<span class="nm">1</span>, <span class="nm">6</span>):\n    <span class="mt">print</span>(i)\n<span class="cm"># exibe: 1 2 3 4 5</span>`,
      q: 'Qual função gera a sequência numérica?',
      ans: 'range',
      exp: 'range(1, 6) gera 1, 2, 3, 4, 5. O 6 não é incluído.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'O for percorre strings caractere a caractere.',
      code: `palavra = <span class="st">"Leon"</span>\n<span class="kw">for</span> <span class="kw">_______</span> <span class="kw">in</span> palavra:\n    <span class="mt">print</span>(letra)`,
      q: 'Qual variável de iteração usar? (escreva: letra)',
      ans: 'letra',
      exp: '"for letra in palavra" percorre L-e-o-n, exibindo cada caractere em uma linha.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Calcule a soma usando for.',
      code: `soma = <span class="nm">0</span>\n<span class="kw">for</span> i <span class="kw">in</span> <span class="mt">range</span>(<span class="nm">1</span>, <span class="nm">5</span>):\n    soma <span class="kw">+=</span> i\n<span class="mt">print</span>(soma)`,
      q: 'O que este código exibe?',
      opts: [
        { t: '10', ok: true },
        { t: '15', ok: false },
        { t: '6', ok: false },
        { t: '4', ok: false },
      ],
      exp: 'range(1,5) = 1,2,3,4. soma: 0+1=1, +2=3, +3=6, +4=10. Exibe 10.',
    },

  ]
};
