const MISSION_33 = {
  id: 33,
  title: "MISSÃO 34 — O OBSERVATÓRIO",
  icon: '🔭',
  free: false,
  desc: "Do alto do observatório, você enxerga o campo de batalha inteiro. Complexidade de algoritmos é a arte de prever o comportamento do código antes de executá-lo — com n inimigos, quantas operações você precisará?",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>Big O</strong> descreve como o tempo de execução (ou uso de memória) cresce em relação ao tamanho da entrada <code>n</code>, ignorando constantes.',
      q: 'Por que ignoramos constantes na notação Big O? Ex: O(2n) vira O(n)?',
      hint: 'Importa o crescimento, não o coeficiente',
      opts: [
        { t: 'Porque constantes são sempre 1', ok: false },
        { t: 'Porque para n grande, o comportamento de crescimento domina sobre constantes multiplicativas', ok: true },
        { t: 'Por preguiça dos matemáticos', ok: false },
        { t: 'Porque constantes dependem do hardware', ok: false },
      ],
      exp: 'Para n=1000000, O(2n)=2M e O(n)=1M. O fator 2 importa menos que perceber que é linear. Big O foca no crescimento assintótico.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<strong>O(1)</strong> — constante: o tempo não depende de n. Acesso por índice em array, lookup em Dictionary.',
      q: 'Qual operação é O(1)?',
      hint: 'Não importa quantos elementos há',
      opts: [
        { t: 'Busca linear numa List', ok: false },
        { t: 'Acesso por índice arr[5] ou Dictionary["chave"]', ok: true },
        { t: 'Ordenar um array', ok: false },
        { t: 'foreach em uma lista', ok: false },
      ],
      exp: 'arr[i] acessa diretamente pela posição — O(1). Dictionary usa hash para acesso direto — O(1) amortizado. Independe do tamanho.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<strong>O(n²)</strong> — quadrático: loops aninhados. Para cada elemento, processa todos os outros.',
      q: 'Dois loops for aninhados, cada um de 0 a n. Qual a complexidade?',
      hint: 'n × n',
      opts: [
        { t: 'O(n)', ok: false },
        { t: 'O(2n)', ok: false },
        { t: 'O(n²)', ok: true },
        { t: 'O(log n)', ok: false },
      ],
      exp: 'Loop externo: n iterações. Loop interno: n iterações cada. Total: n×n = n² operações → O(n²). Bubble Sort e Insertion Sort são O(n²).',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<strong>O(log n)</strong> — logarítmico: a cada passo, o problema é dividido pela metade. Busca binária.',
      q: 'Para n=1024, quantas operações máximas faz uma busca binária O(log₂ n)?',
      hint: 'log₂(1024) = ?',
      opts: [
        { t: '1024', ok: false },
        { t: '512', ok: false },
        { t: '10', ok: true },
        { t: '32', ok: false },
      ],
      exp: 'log₂(1024) = 10. A cada passo, o espaço é cortado à metade: 1024→512→256→...→1. Máximo de 10 comparações.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Ordem crescente de complexidades: <strong>O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)</strong>.',
      q: 'Qual dessas é a pior complexidade para um algoritmo de ordenação com n=1000?',
      hint: 'Mais operações = pior',
      opts: [
        { t: 'O(n log n)', ok: false },
        { t: 'O(n²)', ok: false },
        { t: 'O(2ⁿ)', ok: true },
        { t: 'O(n)', ok: false },
      ],
      exp: 'O(2ⁿ): para n=1000, seriam 2^1000 operações — astronomicamente grande. Usado em força bruta. Nunca use para n grande.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Um único loop de 0 a n tem complexidade:',
      code: `<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i < n; i++)\n    Console.<span class="mt">WriteLine</span>(i);\n<span class="cm">// Complexidade: O(_______)</span>`,
      q: 'Qual a notação Big O de um único loop linear?',
      hint: 'Cresce linearmente com n',
      ans: 'n',
      exp: 'Um loop de 0 a n executa n vezes → O(n). Dobrar n dobra o tempo de execução.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Busca binária divide o espaço ao meio a cada passo. Sua complexidade é:',
      code: `<span class="cm">// A cada iteração, o intervalo é cortado à metade</span>\n<span class="cm">// Complexidade: O(_______)</span>`,
      q: 'Qual a complexidade da busca binária?',
      hint: 'Metades sucessivas = logaritmo',
      ans: 'log n',
      exp: 'O(log n): a cada passo, o problema vira metade. Para n=1M, max ~20 passos. Muito mais eficiente que O(n)=1M passos.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Para medir a complexidade de espaço (memória), usamos a mesma notação. Um array de n elementos usa:',
      code: `<span class="kw">int</span>[] arr = <span class="kw">new int</span>[n];\n<span class="cm">// Complexidade de espaço: O(_______)</span>`,
      q: 'Qual a complexidade de espaço de um array de tamanho n?',
      hint: 'n elementos, n espaços',
      ans: 'n',
      exp: 'O(n) de espaço: precisa de n células de memória. Algoritmos in-place usam O(1) extra (não criam estruturas proporcionais a n).',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Identificando a complexidade pelo formato do código.',
      code: `<span class="kw">static int</span> <span class="mt">Contar</span>(<span class="kw">int</span>[] a, <span class="kw">int</span>[] b)\n{\n    <span class="kw">int</span> pares = <span class="nm">0</span>;\n    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i < a.<span class="mt">Length</span>; i++)\n        <span class="kw">for</span> (<span class="kw">int</span> j = <span class="nm">0</span>; j < b.<span class="mt">Length</span>; j++)\n            <span class="kw">if</span> (a[i] == b[j]) pares++;\n    <span class="kw">return</span> pares;\n}`,
      q: 'Se a e b têm n elementos cada, qual a complexidade de Contar()?',
      hint: 'Dois loops, um dentro do outro',
      opts: [
        { t: 'O(n)', ok: false },
        { t: 'O(n + n)', ok: false },
        { t: 'O(n²)', ok: true },
        { t: 'O(log n)', ok: false },
      ],
      exp: 'Loop externo: n. Loop interno: n. Para cada i, percorre todo b. Total: n×n = O(n²).',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Comparando dois algoritmos na prática.',
      code: `<span class="cm">// Algoritmo A: busca linear</span>\n<span class="kw">static bool</span> <span class="mt">BuscaLinear</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> alvo)\n{\n    <span class="kw">foreach</span> (<span class="kw">var</span> x <span class="kw">in</span> arr) <span class="kw">if</span> (x == alvo) <span class="kw">return true</span>;\n    <span class="kw">return false</span>;\n}\n\n<span class="cm">// Algoritmo B: verificação em HashSet</span>\n<span class="kw">static bool</span> <span class="mt">BuscaHash</span>(HashSet&lt;<span class="kw">int</span>&gt; set, <span class="kw">int</span> alvo)\n    => set.<span class="mt">Contains</span>(alvo);`,
      q: 'Para buscar em 1.000.000 de elementos repetidamente, qual algoritmo é melhor?',
      hint: 'Compare as complexidades de cada um',
      opts: [
        { t: 'BuscaLinear — mais simples', ok: false },
        { t: 'BuscaHash — O(1) vs O(n)', ok: true },
        { t: 'São equivalentes para n grande', ok: false },
        { t: 'Depende do sistema operacional', ok: false },
      ],
      exp: 'BuscaLinear: O(n) — percorre até 1M elementos. BuscaHash: O(1) — acesso direto via hash. Para 1M buscas repetidas, a diferença é enorme.',
    },

    // Q11 — Code
    {
      type: 'code',
      bubble: 'Calculando operações para entender o crescimento.',
      code: `<span class="kw">static void</span> <span class="mt">Mostrar</span>(<span class="kw">int</span> n)\n{\n    <span class="kw">int</span> ops = <span class="nm">0</span>;\n    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">1</span>; i <= n; i *= <span class="nm">2</span>)\n        ops++;\n    Console.<span class="mt">WriteLine</span>(<span class="st">$"n={n}: {ops} ops"</span>);\n}\n<span class="mt">Mostrar</span>(<span class="nm">8</span>);\n<span class="mt">Mostrar</span>(<span class="nm">64</span>);`,
      q: 'O que será exibido?',
      hint: 'i dobra a cada iteração: 1,2,4,8... até n',
      opts: [
        { t: 'n=8: 3 ops e n=64: 6 ops', ok: true },
        { t: 'n=8: 8 ops e n=64: 64 ops', ok: false },
        { t: 'n=8: 4 ops e n=64: 7 ops', ok: false },
        { t: 'n=8: 3 ops e n=64: 32 ops', ok: false },
      ],
      exp: 'i dobra: 1,2,4,8 → 3 iterações para n=8 (log₂8=3). Para n=64: 1,2,4,8,16,32,64 → 6 iterações (log₂64=6). É O(log n).',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'Identificando complexidade de espaço.',
      code: `<span class="kw">static int</span>[] <span class="mt">Dobrar</span>(<span class="kw">int</span>[] arr)\n{\n    <span class="kw">int</span>[] resultado = <span class="kw">new int</span>[arr.<span class="mt">Length</span>];\n    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i < arr.<span class="mt">Length</span>; i++)\n        resultado[i] = arr[i] * <span class="nm">2</span>;\n    <span class="kw">return</span> resultado;\n}`,
      q: 'Qual a complexidade de tempo E de espaço de Dobrar()?',
      hint: 'Um loop linear e um novo array de mesmo tamanho',
      opts: [
        { t: 'Tempo O(n²), Espaço O(n)', ok: false },
        { t: 'Tempo O(n), Espaço O(1)', ok: false },
        { t: 'Tempo O(n), Espaço O(n)', ok: true },
        { t: 'Tempo O(1), Espaço O(n)', ok: false },
      ],
      exp: 'Tempo O(n): um loop de n iterações. Espaço O(n): cria um novo array de tamanho n. Não é in-place — usa memória extra proporcional a n.',
    },

  ]
};
