// ══════════════════════════════════════════════════════
// ACT III — A ILHA
// MISSÃO 60 — O COMANDANTE DA ILHA ⚔️
// Tema: REVISÃO Act III — async, Generics, Iteradores, Reflection, Span
// Tipo: Chefe (18 questões) | 6 MC → 5 Fill → 7 Code
// ══════════════════════════════════════════════════════

const MISSION_59 = {
  id: 59,
  title: "MISSÃO 60 — O COMANDANTE DA ILHA ⚔️",
  icon: '⚔️',
  free: false,
  desc: "O Comandante da ilha é a síntese de todos os desafios: um adversário que usa cada fraqueza do sistema. Esta batalha exige domínio completo do Act III — async, Generics, Iteradores, Reflection e Span.",
  objs: [
    "Revisão completa do Act III",
    "Integrar conceitos avançados em soluções completas",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Revisão: async/await e Task.',
      q: 'O que retornar em um método async que não tem valor de retorno?',
      hint: 'async sem retorno',
      opts: [
        { t: 'void', ok: false },
        { t: 'Task', ok: true },
        { t: 'Task<void>', ok: false },
        { t: 'bool', ok: false },
      ],
      exp: '"async Task" = sem retorno. "async void" só para event handlers — não propagates exceções e não pode ser awaited.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Revisão: Task.WhenAll vs WhenAny.',
      q: 'Task.WhenAny(t1, t2, t3) retorna quando...?',
      hint: 'A primeira que terminar',
      opts: [
        { t: 'Todas as Tasks terminarem', ok: false },
        { t: 'A primeira Task terminar', ok: true },
        { t: 'Qualquer Task falhar', ok: false },
        { t: 'Metade das Tasks terminarem', ok: false },
      ],
      exp: 'WhenAny retorna a Task concluída (a primeira). WhenAll aguarda todas. WhenAny é para timeout ou "race condition" intencional.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Revisão: CancellationToken.',
      q: 'Como um código sinaliza que foi cancelado de forma cooperativa?',
      hint: 'Lança exceção',
      opts: [
        { t: 'Retorna false', ok: false },
        { t: 'Chama token.ThrowIfCancellationRequested() que lança OperationCanceledException', ok: true },
        { t: 'A thread é abortada automaticamente', ok: false },
        { t: 'O método retorna Task.Cancelled', ok: false },
      ],
      exp: 'Cancelamento cooperativo: o código chama ThrowIfCancellationRequested(). Lança OperationCanceledException se cancelado. O chamador captura.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Revisão: yield return.',
      q: 'Qual é o tipo de retorno de um método que usa yield return com strings?',
      hint: 'Interface de iterador',
      opts: [
        { t: 'string[]', ok: false },
        { t: 'List<string>', ok: false },
        { t: 'IEnumerable<string>', ok: true },
        { t: 'IEnumerator<string>', ok: false },
      ],
      exp: '"IEnumerable<string>" é o tipo de retorno padrão para iteradores com yield. O compilador gera a máquina de estado automaticamente.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Revisão: Span<T> vs Memory<T>.',
      q: 'Em qual situação você deve usar Memory<T> em vez de Span<T>?',
      hint: 'Quando precisa ir para o heap',
      opts: [
        { t: 'Quando a performance é crítica', ok: false },
        { t: 'Em métodos async ou quando precisa armazenar em campo de classe', ok: true },
        { t: 'Quando trabalhando com strings', ok: false },
        { t: 'Span<T> e Memory<T> são intercambiáveis', ok: false },
      ],
      exp: 'Memory<T> vai para o heap — pode ser usado em async, campos de classe, closures. Span<T> é ref struct — apenas stack, não funciona com async.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Revisão: Attributes customizados.',
      q: 'Para que serve [AttributeUsage(AttributeTargets.Method, AllowMultiple = true)]?',
      hint: 'Permite repetir o attribute no mesmo alvo',
      opts: [
        { t: 'Permite aplicar o attribute em múltiplos tipos', ok: false },
        { t: 'Restringe o attribute a métodos e permite aplicar o mesmo attribute múltiplas vezes no mesmo método', ok: true },
        { t: 'Faz o attribute ser herdado pelas subclasses', ok: false },
        { t: 'Permite attributes sem construtor', ok: false },
      ],
      exp: 'AttributeTargets.Method restringe ao método. AllowMultiple=true permite [Comando("a")][Comando("b")] no mesmo método. Padrão é false.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Revisão: método async que retorna valor.',
      code: `<span class="kw">public async</span> Task&lt;<span class="kw">int</span>&gt; <span class="mt">ContarAsync</span>()\n{\n    <span class="kw">await</span> Task.<span class="mt">Delay</span>(<span class="nm">100</span>);\n    <span class="kw">_______</span> <span class="nm">42</span>;\n}`,
      q: 'Como retornar o valor em método async Task<int>?',
      hint: 'Palavra de retorno',
      ans: 'return',
      exp: '"return 42" em async Task<int> funciona normalmente. O compilador envolve o 42 em Task<int> automaticamente.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Revisão: cancelamento automático por timeout.',
      code: `<span class="kw">using var</span> cts = <span class="kw">new</span> CancellationTokenSource();\ncts.<span class="mt">_______</span>(<span class="nm">5000</span>); <span class="cm">// cancela após 5s</span>`,
      q: 'Qual método agenda o cancelamento após X milissegundos?',
      hint: 'Cancel + After',
      ans: 'CancelAfter',
      exp: '"CancelAfter(5000)" agenda cancelamento após 5 segundos. Equivale a criar com "new CancellationTokenSource(5000)".',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Revisão: iterador com condição de parada.',
      code: `<span class="kw">static</span> IEnumerable&lt;<span class="kw">int</span>&gt; <span class="mt">Positivos</span>(<span class="kw">int</span>[] arr)\n{\n    <span class="kw">foreach</span> (<span class="kw">var</span> n <span class="kw">in</span> arr)\n        <span class="kw">if</span> (n > <span class="nm">0</span>) <span class="kw">yield _______</span> n;\n}`,
      q: 'Como retornar um valor no iterador?',
      hint: 'Yield + retornar',
      ans: 'return',
      exp: '"yield return n" retorna n e pausa. O foreach continua pedindo valores até terminar ou o iterador usar yield break.',
    },

    // Q10 — Fill
    {
      type: 'fill',
      bubble: 'Revisão: obtendo nome de tipo via Reflection.',
      code: `<span class="kw">string</span> nome = <span class="kw">typeof</span>(List&lt;<span class="kw">int</span>&gt;).<span class="mt">_______</span>;\nConsole.<span class="mt">WriteLine</span>(nome); <span class="cm">// "List\`1"</span>`,
      q: 'Qual propriedade retorna o nome do tipo?',
      hint: 'Nome em inglês',
      ans: 'Name',
      exp: '"typeof(List<int>).Name" = "List`1". O `1 indica 1 parâmetro genérico. "FullName" inclui namespace. "ToString()" inclui tipos genéricos.',
    },

    // Q11 — Fill
    {
      type: 'fill',
      bubble: 'Revisão: Span para fatiar string sem alocação.',
      code: `<span class="kw">string</span> dados = <span class="st">"HP:100;MP:50"</span>;\nReadOnlySpan&lt;<span class="kw">char</span>&gt; hp = dados.<span class="mt">_______</span>().<span class="mt">Slice</span>(<span class="nm">3</span>, <span class="nm">3</span>);\nConsole.<span class="mt">WriteLine</span>(hp.<span class="mt">ToString</span>());`,
      q: 'Qual método converte string para ReadOnlySpan<char>?',
      hint: 'Como + Span',
      ans: 'AsSpan',
      exp: '"AsSpan()" cria ReadOnlySpan<char> sobre a string original. Slice(3,3) = chars 3,4,5 = "100". ToString() converte de volta.',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'Revisão: Task.WhenAll com resultados.',
      code: `<span class="kw">static async</span> Task&lt;<span class="kw">int</span>&gt; <span class="mt">ValorAsync</span>(<span class="kw">int</span> n) => n * <span class="nm">10</span>;\n\n<span class="kw">var</span> resultados = <span class="kw">await</span> Task.<span class="mt">WhenAll</span>(\n    <span class="mt">ValorAsync</span>(<span class="nm">1</span>), <span class="mt">ValorAsync</span>(<span class="nm">2</span>), <span class="mt">ValorAsync</span>(<span class="nm">3</span>)\n);\nConsole.<span class="mt">WriteLine</span>(resultados.<span class="mt">Sum</span>());`,
      q: 'O que será exibido?',
      hint: '10 + 20 + 30',
      opts: [
        { t: '30', ok: false },
        { t: '60', ok: true },
        { t: '6', ok: false },
        { t: 'Erro — ValorAsync não usa await', ok: false },
      ],
      exp: 'ValorAsync(1)=10, ValorAsync(2)=20, ValorAsync(3)=30. WhenAll coleta [10,20,30]. Sum()=60.',
    },

    // Q13 — Code
    {
      type: 'code',
      bubble: 'Revisão: iterador com filtro.',
      code: `<span class="kw">static</span> IEnumerable&lt;<span class="kw">string</span>&gt; <span class="mt">Ativos</span>(IEnumerable&lt;<span class="kw">string</span>&gt; nomes)\n{\n    <span class="kw">foreach</span> (<span class="kw">var</span> n <span class="kw">in</span> nomes)\n        <span class="kw">if</span> (n.<span class="mt">StartsWith</span>(<span class="st">"A"</span>)) <span class="kw">yield return</span> n;\n}\n\n<span class="kw">var</span> lista = <span class="kw">new</span>[] { <span class="st">"Ada"</span>, <span class="st">"Leon"</span>, <span class="st">"Ashley"</span>, <span class="st">"Krauser"</span> };\nConsole.<span class="mt">WriteLine</span>(<span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">","</span>, <span class="mt">Ativos</span>(lista)));`,
      q: 'O que será exibido?',
      hint: 'Nomes que começam com "A"',
      opts: [
        { t: 'Ada,Leon,Ashley', ok: false },
        { t: 'Ada,Ashley', ok: true },
        { t: 'Ashley', ok: false },
        { t: 'Ada', ok: false },
      ],
      exp: 'Filtro StartsWith("A"): Ada ✓, Leon ✗, Ashley ✓, Krauser ✗. Resultado: "Ada,Ashley".',
    },

    // Q14 — Code
    {
      type: 'code',
      bubble: 'Revisão: Reflection para invocar método.',
      code: `<span class="kw">class</span> Calc\n{\n    <span class="kw">public int</span> <span class="mt">Dobrar</span>(<span class="kw">int</span> n) => n * <span class="nm">2</span>;\n}\n<span class="kw">var</span> calc = <span class="kw">new</span> Calc();\n<span class="kw">var</span> m = <span class="kw">typeof</span>(Calc).<span class="mt">GetMethod</span>(<span class="st">"Dobrar"</span>)!;\n<span class="kw">int</span> r = (<span class="kw">int</span>)m.<span class="mt">Invoke</span>(calc, <span class="kw">new object</span>[] { <span class="nm">21</span> })!;\nConsole.<span class="mt">WriteLine</span>(r);`,
      q: 'O que será exibido?',
      hint: '21 * 2',
      opts: [
        { t: '21', ok: false },
        { t: '42', ok: true },
        { t: 'Erro — Invoke retorna object', ok: false },
        { t: 'null', ok: false },
      ],
      exp: 'GetMethod("Dobrar") obtém MethodInfo. Invoke(calc, [21]) executa Dobrar(21) = 42. Cast para int. Console.WriteLine(42).',
    },

    // Q15 — Code
    {
      type: 'code',
      bubble: 'Revisão: Attribute + Reflection.',
      code: `[AttributeUsage(AttributeTargets.Method)]\n<span class="kw">class</span> LogAttribute : Attribute { <span class="kw">public string</span> Tag { <span class="kw">get</span>; <span class="kw">init</span>; } }\n\n<span class="kw">class</span> Servico\n{\n    [Log(Tag = <span class="st">"CRÍTICO"</span>)]\n    <span class="kw">public void</span> <span class="mt">Operar</span>() { }\n}\n<span class="kw">var</span> m = <span class="kw">typeof</span>(Servico).<span class="mt">GetMethod</span>(<span class="st">"Operar"</span>)!;\n<span class="kw">var</span> log = m.<span class="mt">GetCustomAttribute</span>&lt;LogAttribute&gt;()!;\nConsole.<span class="mt">WriteLine</span>(log.Tag);`,
      q: 'O que será exibido?',
      hint: 'O valor de Tag',
      opts: [
        { t: 'Log', ok: false },
        { t: 'CRÍTICO', ok: true },
        { t: 'Operar', ok: false },
        { t: 'null', ok: false },
      ],
      exp: 'GetCustomAttribute<LogAttribute>() obtém o attribute. log.Tag = "CRÍTICO". Console.WriteLine("CRÍTICO").',
    },

    // Q16 — Code
    {
      type: 'code',
      bubble: 'Revisão: CancellationToken em Task.Delay.',
      code: `<span class="kw">var</span> cts = <span class="kw">new</span> CancellationTokenSource(<span class="nm">50</span>); <span class="cm">// 50ms</span>\n<span class="kw">try</span>\n{\n    <span class="kw">await</span> Task.<span class="mt">Delay</span>(<span class="nm">1000</span>, cts.Token);\n    Console.<span class="mt">WriteLine</span>(<span class="st">"OK"</span>);\n}\n<span class="kw">catch</span> (OperationCanceledException)\n{\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Timeout"</span>);\n}`,
      q: 'O que será exibido?',
      hint: '50ms < 1000ms',
      opts: [
        { t: 'OK', ok: false },
        { t: 'Timeout', ok: true },
        { t: 'Nada', ok: false },
        { t: 'Erro não tratado', ok: false },
      ],
      exp: 'CTS com 50ms timeout. Task.Delay(1000ms) é cancelada após 50ms. OperationCanceledException capturada. "Timeout".',
    },

    // Q17 — Code
    {
      type: 'code',
      bubble: 'Revisão: Generics com constraint + LINQ.',
      code: `<span class="kw">static</span> T <span class="mt">Min</span>&lt;T&gt;(IEnumerable&lt;T&gt; items) <span class="kw">where</span> T : IComparable&lt;T&gt;\n    => items.<span class="mt">Aggregate</span>((a, b) => a.<span class="mt">CompareTo</span>(b) < <span class="nm">0</span> ? a : b);\n\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Min</span>(<span class="kw">new</span>[] { <span class="nm">42</span>, <span class="nm">7</span>, <span class="nm">99</span>, <span class="nm">15</span> }));`,
      q: 'O que será exibido?',
      hint: 'Mínimo de {42, 7, 99, 15}',
      opts: [
        { t: '42', ok: false },
        { t: '7', ok: true },
        { t: '15', ok: false },
        { t: '99', ok: false },
      ],
      exp: 'Aggregate compara pares: Min(42,7)=7, Min(7,99)=7, Min(7,15)=7. Resultado: 7.',
    },

    // Q18 — Code (DESAFIO CHEFE)
    {
      type: 'code',
      bubble: '🏆 DESAFIO CHEFE — Pipeline async com cancelamento e iterador.',
      code: `<span class="kw">static</span> IEnumerable&lt;<span class="kw">int</span>&gt; <span class="mt">Gerar</span>(<span class="kw">int</span> n)\n{\n    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">1</span>; i <= n; i++) <span class="kw">yield return</span> i;\n}\n\n<span class="kw">static async</span> Task&lt;<span class="kw">int</span>&gt; <span class="mt">ProcessarAsync</span>(IEnumerable&lt;<span class="kw">int</span>&gt; nums)\n{\n    <span class="kw">int</span> soma = <span class="nm">0</span>;\n    <span class="kw">foreach</span> (<span class="kw">var</span> n <span class="kw">in</span> nums)\n    {\n        <span class="kw">await</span> Task.<span class="mt">Delay</span>(<span class="nm">0</span>);\n        soma += n;\n    }\n    <span class="kw">return</span> soma;\n}\n\nConsole.<span class="mt">WriteLine</span>(<span class="kw">await</span> <span class="mt">ProcessarAsync</span>(<span class="mt">Gerar</span>(<span class="nm">5</span>)));`,
      q: 'O que será exibido?',
      hint: 'Gerar(5) = 1..5, somar tudo',
      opts: [
        { t: '10', ok: false },
        { t: '15', ok: true },
        { t: '5', ok: false },
        { t: 'Erro — async com foreach de IEnumerable', ok: false },
      ],
      exp: 'Gerar(5): 1,2,3,4,5. ProcessarAsync soma: 1+2+3+4+5=15. await retorna 15. Console.WriteLine(15).',
    },

  ]
};
