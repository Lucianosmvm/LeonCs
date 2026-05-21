// ══════════════════════════════════════════════════════
// ACT III — A ILHA
// MISSÃO 56 — ITERADORES DO ABISMO
// Tema: yield return, IEnumerable<T> customizado, IEnumerator
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_55 = {
  id: 55,
  title: "MISSÃO 56 — ITERADORES DO ABISMO",
  icon: '🔄',
  free: false,
  desc: "Os corredores da ilha parecem infinitos — um labirinto que gera inimigos sob demanda. Os iteradores com yield return são assim: geram valores um por vez, apenas quando solicitados, sem gastar memória.",
  objs: [
    "Criar iteradores com yield return e yield break",
    "Entender execução lazy de métodos com yield",
    "Implementar IEnumerable<T> customizado",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<code>yield return</code> pausa a execução do método e retorna um valor. Na próxima iteração, o método continua do ponto de pausa.',
      q: 'O que é a execução "lazy" de um iterador com yield?',
      hint: 'Gera apenas quando pedido',
      opts: [
        { t: 'O método executa todo de uma vez ao ser chamado', ok: false },
        { t: 'Os valores são calculados e retornados um por vez, apenas quando solicitados', ok: true },
        { t: 'O método executa em background', ok: false },
        { t: 'yield armazena tudo em lista antes de retornar', ok: false },
      ],
      exp: 'Lazy: o código após "yield return" só executa quando o próximo valor é solicitado (MoveNext). Ideal para sequências grandes ou infinitas.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>yield break</code> encerra o iterador prematuramente, como um return em método normal.',
      q: 'Quando usar yield break?',
      hint: 'Encerrar a sequência',
      opts: [
        { t: 'Para retornar o valor final', ok: false },
        { t: 'Para pausar temporariamente', ok: false },
        { t: 'Para encerrar a iteração antes do fim natural', ok: true },
        { t: 'yield break é equivalente a yield return default(T)', ok: false },
      ],
      exp: '"yield break" encerra o iterador — não há mais valores. Como "return" sem valor em método void. Útil para early exit com condição.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Métodos com yield devem retornar <code>IEnumerable&lt;T&gt;</code> ou <code>IEnumerator&lt;T&gt;</code>. O compilador gera uma máquina de estado automaticamente.',
      q: 'O que o compilador gera quando você usa yield return em um método?',
      hint: 'Classe especial para controlar o estado',
      opts: [
        { t: 'Uma lista com todos os valores', ok: false },
        { t: 'Uma classe de máquina de estado que implementa IEnumerator<T>', ok: true },
        { t: 'Um método assíncrono equivalente', ok: false },
        { t: 'Uma lambda que retorna IEnumerable', ok: false },
      ],
      exp: 'O compilador cria uma classe interna de máquina de estado. Ela guarda o ponto de pausa e as variáveis locais entre chamadas a MoveNext().',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'A vantagem dos iteradores é a eficiência de memória: não precisa materializar toda a sequência. Uma sequência infinita é possível com yield.',
      q: 'Por que um gerador infinito com yield não esgota a memória?',
      hint: 'Calcula um por vez',
      opts: [
        { t: 'Porque yield usa compressão de dados', ok: false },
        { t: 'Porque apenas um valor é calculado por vez — não há lista em memória', ok: true },
        { t: 'Porque yield usa a heap de forma especial', ok: false },
        { t: 'Porque o GC limpa os valores usados', ok: false },
      ],
      exp: 'yield não cria lista. Cada valor é calculado sob demanda e descartado após uso. Sequências infinitas são viáveis — basta parar de pedir valores.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Criando um iterador simples que gera números de 1 a n:',
      code: `<span class="kw">static</span> IEnumerable&lt;<span class="kw">int</span>&gt; <span class="mt">Contar</span>(<span class="kw">int</span> n)\n{\n    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">1</span>; i <= n; i++)\n        <span class="kw">yield _______</span> i;\n}`,
      q: 'Qual palavra-chave retorna um valor e pausa o iterador?',
      hint: 'Yield + retornar',
      ans: 'return',
      exp: '"yield return i" retorna i e pausa. Na próxima iteração do foreach, o loop for continua do ponto de pausa com i incrementado.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Encerrando um iterador com condição de parada:',
      code: `<span class="kw">static</span> IEnumerable&lt;<span class="kw">int</span>&gt; <span class="mt">AteNegativo</span>(<span class="kw">int</span>[] nums)\n{\n    <span class="kw">foreach</span> (<span class="kw">var</span> n <span class="kw">in</span> nums)\n    {\n        <span class="kw">if</span> (n < <span class="nm">0</span>) <span class="kw">yield _______</span>;\n        <span class="kw">yield return</span> n;\n    }\n}`,
      q: 'Qual palavra-chave encerra o iterador antes do fim?',
      hint: 'Yield + parar',
      ans: 'break',
      exp: '"yield break" encerra o iterador — nenhum valor mais será retornado. O foreach que consume o iterador para naturalmente.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Tipo de retorno de um método iterador que produz strings:',
      code: `<span class="kw">static _______</span>&lt;<span class="kw">string</span>&gt; <span class="mt">GerarNomes</span>()\n{\n    <span class="kw">yield return</span> <span class="st">"Leon"</span>;\n    <span class="kw">yield return</span> <span class="st">"Ada"</span>;\n    <span class="kw">yield return</span> <span class="st">"Ashley"</span>;\n}`,
      q: 'Qual interface de retorno usar para iteradores?',
      hint: 'Enumerável em inglês',
      ans: 'IEnumerable',
      exp: '"IEnumerable<string>" é o contrato de iterador. Qualquer foreach funciona com IEnumerable. O método em si pode usar yield return.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'Iterador sendo consumido por foreach.',
      code: `<span class="kw">static</span> IEnumerable&lt;<span class="kw">int</span>&gt; <span class="mt">Quadrados</span>(<span class="kw">int</span> n)\n{\n    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">1</span>; i <= n; i++)\n        <span class="kw">yield return</span> i * i;\n}\n\n<span class="kw">foreach</span> (<span class="kw">var</span> q <span class="kw">in</span> <span class="mt">Quadrados</span>(<span class="nm">4</span>))\n    Console.<span class="mt">Write</span>(q + <span class="st">" "</span>);`,
      q: 'O que será exibido?',
      hint: '1², 2², 3², 4²',
      opts: [
        { t: '1 2 3 4', ok: false },
        { t: '1 4 9 16', ok: true },
        { t: '4 9 16 25', ok: false },
        { t: '1 4 9 16 25', ok: false },
      ],
      exp: 'Quadrados(4): i=1→1, i=2→4, i=3→9, i=4→16. foreach consume cada valor: "1 4 9 16".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Iterador infinito — sequência de Fibonacci.',
      code: `<span class="kw">static</span> IEnumerable&lt;<span class="kw">long</span>&gt; <span class="mt">Fibonacci</span>()\n{\n    <span class="kw">long</span> a = <span class="nm">0</span>, b = <span class="nm">1</span>;\n    <span class="kw">while</span> (<span class="kw">true</span>)\n    {\n        <span class="kw">yield return</span> a;\n        (a, b) = (b, a + b);\n    }\n}\n\n<span class="kw">var</span> primeiros5 = <span class="mt">Fibonacci</span>().<span class="mt">Take</span>(<span class="nm">5</span>);<br>Console.<span class="mt">WriteLine</span>(<span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">","</span>, primeiros5));`,
      q: 'O que será exibido?',
      hint: 'Primeiros 5 de Fibonacci: 0,1,1,2,3',
      opts: [
        { t: '0,1,2,3,4', ok: false },
        { t: '0,1,1,2,3', ok: true },
        { t: '1,1,2,3,5', ok: false },
        { t: 'Loop infinito — travar', ok: false },
      ],
      exp: 'Fibonacci: 0,1,1,2,3,5,8... .Take(5) para após 5 valores. String.Join(",") = "0,1,1,2,3". O while(true) não trava pois Take limita.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'yield break para encerrar antes do fim.',
      code: `<span class="kw">static</span> IEnumerable&lt;<span class="kw">int</span>&gt; <span class="mt">AteMax</span>(<span class="kw">int</span>[] nums, <span class="kw">int</span> max)\n{\n    <span class="kw">foreach</span> (<span class="kw">var</span> n <span class="kw">in</span> nums)\n    {\n        <span class="kw">if</span> (n > max) <span class="kw">yield break</span>;\n        <span class="kw">yield return</span> n;\n    }\n}\n<span class="kw">var</span> res = <span class="mt">AteMax</span>(<span class="kw">new</span>[] { <span class="nm">2</span>, <span class="nm">5</span>, <span class="nm">8</span>, <span class="nm">3</span>, <span class="nm">1</span> }, <span class="nm">6</span>);\nConsole.<span class="mt">WriteLine</span>(<span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">","</span>, res));`,
      q: 'O que será exibido?',
      hint: 'Para quando encontra valor > 6',
      opts: [
        { t: '2,5,8,3,1', ok: false },
        { t: '2,5', ok: true },
        { t: '2,5,3,1', ok: false },
        { t: '2,5,6', ok: false },
      ],
      exp: '2<=6 → yield. 5<=6 → yield. 8>6 → yield break. Para aqui. "2,5" — o 3 e 1 nunca são vistos.',
    },

  ]
};
