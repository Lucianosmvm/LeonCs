// ══════════════════════════════════════════════════════
// ACT III — A ILHA
// MISSÃO 52 — OPERAÇÃO PARALELA
// Tema: Task.WhenAll, Task.WhenAny, paralelismo
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_51 = {
  id: 51,
  title: "MISSÃO 52 — OPERAÇÃO PARALELA",
  icon: '⚡',
  free: false,
  desc: "A ilha tem múltiplos objetivos simultâneos. Derrrubar as comunicações, cortar a energia e neutralizar os guardas — tudo ao mesmo tempo. Task.WhenAll é sua arma para o paralelismo.",
  objs: [
    "Executar múltiplas Tasks em paralelo com Task.WhenAll",
    "Entender Task.WhenAny para resposta ao primeiro resultado",
    "Medir a diferença de tempo entre paralelo e sequencial",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<code>Task.WhenAll(t1, t2, t3)</code> aguarda que <strong>todas</strong> as Tasks terminem. O tempo total é o da Task mais longa, não a soma.',
      q: 'Três Tasks demoram 3s, 5s e 2s. Com Task.WhenAll, qual o tempo total?',
      hint: 'A mais longa determina o tempo',
      opts: [
        { t: '10 segundos (soma)', ok: false },
        { t: '5 segundos (a mais longa)', ok: true },
        { t: '2 segundos (a mais curta)', ok: false },
        { t: '3 segundos (a média)', ok: false },
      ],
      exp: 'Tasks paralelas: todas rodam ao mesmo tempo. O tempo total = a mais longa (5s). Vs sequencial: 3+5+2=10s. Paralelismo economiza 5s.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>Task.WhenAny(t1, t2, t3)</code> retorna quando a <strong>primeira</strong> Task terminar. Útil para timeout ou para pegar o resultado mais rápido.',
      q: 'Qual o uso mais adequado de Task.WhenAny?',
      hint: 'Quem chegar primeiro',
      opts: [
        { t: 'Aguardar todas as Tasks terminarem', ok: false },
        { t: 'Implementar timeout ou pegar o primeiro servidor a responder', ok: true },
        { t: 'Cancelar as Tasks restantes automaticamente', ok: false },
        { t: 'Executar Tasks em sequência', ok: false },
      ],
      exp: 'WhenAny: útil para "o que responder primeiro ganha" ou "espera no máximo X segundos". As outras Tasks não são canceladas automaticamente.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>Task.WhenAll</code> retorna um <code>Task&lt;T[]&gt;</code> quando as Tasks têm retorno. Os resultados ficam num array na mesma ordem das Tasks.',
      q: 'O que Task.WhenAll<int>(t1, t2, t3) retorna?',
      hint: 'Array de resultados',
      opts: [
        { t: 'O resultado da primeira Task', ok: false },
        { t: 'Task<int[]> com os resultados de todas as Tasks em ordem', ok: true },
        { t: 'A soma dos resultados', ok: false },
        { t: 'Um único int', ok: false },
      ],
      exp: 'await Task.WhenAll(t1, t2, t3) retorna int[] com [resultado_t1, resultado_t2, resultado_t3] na ordem em que foram passadas.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Se qualquer Task lançar exceção, <code>Task.WhenAll</code> propaga <strong>todas</strong> as exceções via <code>AggregateException</code>.',
      q: 'Task.WhenAll tem 3 Tasks e 2 lançam exceção. O que acontece?',
      hint: 'WhenAll coleta exceções',
      opts: [
        { t: 'Apenas a primeira exceção é lançada', ok: false },
        { t: 'O programa ignora as exceções', ok: false },
        { t: 'Uma AggregateException contendo as 2 exceções é lançada', ok: true },
        { t: 'WhenAll cancela automaticamente antes de lançar', ok: false },
      ],
      exp: 'WhenAll aguarda TODAS as Tasks. Agrega todas as exceções em AggregateException. Útil para ver todos os erros, não só o primeiro.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Para aguardar múltiplas Tasks em paralelo e coletar todos os resultados:',
      code: `Task&lt;<span class="kw">int</span>&gt; t1 = <span class="mt">ObterDanoAsync</span>();\nTask&lt;<span class="kw">int</span>&gt; t2 = <span class="mt">ObterHPAsync</span>();\n<span class="kw">int</span>[] resultados = <span class="kw">await</span> Task.<span class="mt">_______</span>(t1, t2);`,
      q: 'Qual método aguarda todas as Tasks e coleta resultados?',
      hint: 'Quando todas',
      ans: 'WhenAll',
      exp: '"Task.WhenAll(t1, t2)" aguarda ambas em paralelo e retorna Task<int[]>. resultados[0] = resultado de t1, resultados[1] = t2.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Para implementar timeout, aguardamos a Task ou uma Task.Delay, o que vier primeiro:',
      code: `<span class="kw">var</span> timeout = Task.<span class="mt">Delay</span>(<span class="nm">5000</span>);\n<span class="kw">var</span> concluida = <span class="kw">await</span> Task.<span class="mt">_______</span>(operacao, timeout);`,
      q: 'Qual método retorna quando a primeira Task terminar?',
      hint: 'Quando qualquer uma',
      ans: 'WhenAny',
      exp: '"Task.WhenAny(operacao, timeout)" retorna ao terminar qualquer uma. Se timeout terminar primeiro, você sabe que a operação demorou demais.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Para iniciar múltiplas Tasks SEM fazer await imediatamente (iniciar em paralelo):',
      code: `<span class="kw">var</span> t1 = <span class="mt">BuscarDadosAsync</span>(); <span class="cm">// inicia agora</span>\n<span class="kw">var</span> t2 = <span class="mt">BuscarConfigAsync</span>(); <span class="cm">// inicia agora</span>\n<span class="kw">await</span> Task.<span class="mt">WhenAll</span>(t1, t2); <span class="cm">// aguarda _______</span>`,
      q: 'Quais Tasks são aguardadas?',
      hint: 'Todas as duas',
      ans: 'ambas',
      exp: 'Criar Tasks sem await imediato as inicia em paralelo. Fazer await depois aguarda ambas. Se fizéssemos "await t1; await t2", seriam sequenciais.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'Comparando tempo paralelo vs sequencial.',
      code: `<span class="kw">static async</span> Task&lt;<span class="kw">int</span>&gt; <span class="mt">ObterAsync</span>(<span class="kw">int</span> n)\n{\n    <span class="kw">await</span> Task.<span class="mt">Delay</span>(<span class="nm">100</span>);\n    <span class="kw">return</span> n * <span class="nm">10</span>;\n}\n\n<span class="kw">var</span> t1 = <span class="mt">ObterAsync</span>(<span class="nm">3</span>);\n<span class="kw">var</span> t2 = <span class="mt">ObterAsync</span>(<span class="nm">5</span>);\n<span class="kw">int</span>[] res = <span class="kw">await</span> Task.<span class="mt">WhenAll</span>(t1, t2);\nConsole.<span class="mt">WriteLine</span>(res[<span class="nm">0</span>] + res[<span class="nm">1</span>]);`,
      q: 'O que será exibido?',
      hint: '3×10 + 5×10',
      opts: [
        { t: '30', ok: false },
        { t: '50', ok: false },
        { t: '80', ok: true },
        { t: '15', ok: false },
      ],
      exp: 'ObterAsync(3) → 30. ObterAsync(5) → 50. WhenAll coleta [30, 50]. res[0]+res[1] = 30+50 = 80.',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Task.WhenAny detectando qual terminou primeiro.',
      code: `<span class="kw">var</span> rapida  = Task.<span class="mt">Delay</span>(<span class="nm">100</span>).<span class="mt">ContinueWith</span>(_ => <span class="st">"Rápido"</span>);\n<span class="kw">var</span> lenta   = Task.<span class="mt">Delay</span>(<span class="nm">500</span>).<span class="mt">ContinueWith</span>(_ => <span class="st">"Lento"</span>);\n<span class="kw">var</span> primeira = <span class="kw">await</span> Task.<span class="mt">WhenAny</span>(rapida, lenta);\nConsole.<span class="mt">WriteLine</span>(<span class="kw">await</span> primeira);`,
      q: 'O que será exibido?',
      hint: '100ms vs 500ms',
      opts: [
        { t: '"Lento"', ok: false },
        { t: '"Rápido"', ok: true },
        { t: 'Ambos em sequência', ok: false },
        { t: 'Erro — ContinueWith inválido', ok: false },
      ],
      exp: '"rapida" termina em ~100ms, "lenta" em ~500ms. WhenAny retorna a Task que terminou primeiro (rapida). Exibe "Rápido".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Iniciando Tasks em paralelo corretamente.',
      code: `<span class="kw">static async</span> Task&lt;<span class="kw">int</span>&gt; <span class="mt">SomaPararela</span>()\n{\n    <span class="kw">var</span> ts = <span class="kw">new</span>[] {\n        Task.<span class="mt">FromResult</span>(<span class="nm">10</span>),\n        Task.<span class="mt">FromResult</span>(<span class="nm">20</span>),\n        Task.<span class="mt">FromResult</span>(<span class="nm">30</span>),\n    };\n    <span class="kw">int</span>[] valores = <span class="kw">await</span> Task.<span class="mt">WhenAll</span>(ts);\n    <span class="kw">return</span> valores.<span class="mt">Sum</span>();\n}\nConsole.<span class="mt">WriteLine</span>(<span class="kw">await</span> <span class="mt">SomaPararela</span>());`,
      q: 'O que será exibido?',
      hint: '10 + 20 + 30',
      opts: [
        { t: '10', ok: false },
        { t: '30', ok: false },
        { t: '60', ok: true },
        { t: 'Erro — Task.FromResult não é async', ok: false },
      ],
      exp: 'Task.FromResult cria Tasks já completas. WhenAll coleta [10,20,30]. Sum() = 60. Console.WriteLine(60).',
    },

  ]
};
