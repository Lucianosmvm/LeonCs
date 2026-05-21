// ══════════════════════════════════════════════════════
// ACT V — A FUGA
// MISSÃO 71 — VELOCIDADE MÁXIMA
// Tema: Performance em C# — benchmarking, Big O, otimizações
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_70 = {
  id: 70,
  title: "MISSÃO 71 — VELOCIDADE MÁXIMA",
  icon: '🚀',
  free: false,
  desc: "A fuga está em andamento — cada milissegundo conta. Para que o código sobreviva ao volume de dados da operação, você precisa dominar as técnicas de performance do C# moderno.",
  objs: [
    "Identificar gargalos de performance comuns em C#",
    "Aplicar otimizações como pooling, SIMD e struct tuning",
    "Usar BenchmarkDotNet para medir performance corretamente",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>BenchmarkDotNet</strong> é a biblioteca padrão para microbenchmarking em .NET. Mede com rigor estatístico — elimina JIT warmup e variações do OS.',
      q: 'Por que não usar Stopwatch para benchmarks de performance?',
      hint: 'JIT e outros fatores',
      opts: [
        { t: 'Stopwatch é menos preciso que DateTime', ok: false },
        { t: 'Stopwatch mede o primeiro run que inclui JIT compilation — número distorcido; BenchmarkDotNet aquece o código primeiro', ok: true },
        { t: 'Stopwatch não funciona em Release mode', ok: false },
        { t: 'Stopwatch é mais lento para medir', ok: false },
      ],
      exp: 'Stopwatch: inclui JIT compilation na primeira execução. BenchmarkDotNet: aquece o método, roda milhares de vezes, aplica estatística. Para decisões de performance, use BenchmarkDotNet.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<strong>ArrayPool&lt;T&gt;</strong> e <strong>MemoryPool&lt;T&gt;</strong> reutilizam buffers alocados, reduzindo pressão no GC para buffers temporários.',
      q: 'Quando usar ArrayPool<T>.Shared em vez de new T[]?',
      hint: 'Buffers temporários frequentes',
      opts: [
        { t: 'Sempre — ArrayPool é sempre melhor', ok: false },
        { t: 'Para buffers temporários de vida curta e alta frequência — evita alocações no heap e coleta pelo GC', ok: true },
        { t: 'Apenas para arrays maiores que 1MB', ok: false },
        { t: 'ArrayPool é thread-unsafe', ok: false },
      ],
      exp: 'ArrayPool: aluga → usa → devolve. Sem nova alocação, sem pressão no GC. Para buffers de encoding, compressão, parsing frequentes.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'O <strong>GC.Collect()</strong> força uma coleta de lixo. Em produção, nunca chame isso — o GC sabe melhor quando coletar.',
      q: 'Quando é aceitável chamar GC.Collect() explicitamente?',
      hint: 'Casos muito específicos',
      opts: [
        { t: 'Sempre após liberar objetos grandes', ok: false },
        { t: 'Em produção regularmente para manter a memória', ok: false },
        { t: 'Após carregar/descarregar uma grande quantidade de dados em momento de baixa carga (ex: após loading screen)', ok: true },
        { t: 'Nunca — GC.Collect() não deve ser chamado', ok: false },
      ],
      exp: 'GC.Collect() tem custo alto. Aceitável: após operação one-time que gerou muito lixo (carregar mapa) quando um pausar é aceitável. Em loops de game: nunca.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Structs pequenas (até ~16 bytes) podem ser mais eficientes que classes por evitar alocação no heap e pressure no GC. Passadas por valor.',
      q: 'Quando structs têm desvantagem em performance comparadas a classes?',
      hint: 'Cópia por valor',
      opts: [
        { t: 'Structs são sempre piores que classes', ok: false },
        { t: 'Quando são grandes (>16 bytes) e copiadas com frequência — cópia por valor custa mais que passar referência', ok: true },
        { t: 'Structs não podem ser usadas em loops', ok: false },
        { t: 'Structs com interfaces têm boxing overhead', ok: false },
      ],
      exp: 'Struct grande + passada por valor = cópia cara. Use "ref" para evitar cópia: "static void Atualizar(ref MinhaStruct s)". Struct > ~16 bytes → considere class.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Alugando buffer do ArrayPool:',
      code: `<span class="kw">var</span> pool = ArrayPool&lt;<span class="kw">byte</span>&gt;.Shared;\n<span class="kw">byte</span>[] buffer = pool.<span class="mt">_______</span>(<span class="nm">1024</span>);\n<span class="kw">try</span> { <span class="cm">/* usar buffer */</span> }\n<span class="kw">finally</span> { pool.<span class="mt">Return</span>(buffer); }`,
      q: 'Qual método aluga um buffer do pool?',
      hint: 'Alugar em inglês',
      ans: 'Rent',
      exp: '"Rent(1024)" retorna um buffer de pelo menos 1024 bytes. Pode ser maior. "Return(buffer)" devolve ao pool. Sempre no finally!',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Evitando boxing ao usar interface com struct:',
      code: `<span class="kw">interface</span> IValor&lt;T&gt; { T <span class="mt">Obter</span>(); }\n<span class="kw">struct</span> Hp : IValor&lt;<span class="kw">int</span>&gt; { <span class="kw">public int</span> <span class="mt">Obter</span>() => <span class="nm">100</span>; }\n\n<span class="kw">static</span> T <span class="mt">Ler</span>&lt;T, TVal&gt;(TVal val) <span class="kw">where</span> TVal : <span class="mt">_______</span>&lt;T&gt;\n    => val.<span class="mt">Obter</span>();`,
      q: 'Qual constraint evita boxing ao usar interface com struct genérica?',
      hint: 'Interface de IValor',
      ans: 'IValor',
      exp: '"where TVal : IValor<T>" com TVal como parâmetro genérico evita boxing. O compilador gera código específico para Hp, sem virtual dispatch.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'String interning para comparações rápidas de strings literais:',
      code: `<span class="kw">string</span> s1 = <span class="kw">string</span>.<span class="mt">_______</span>(<span class="st">"MISSAO"</span>);\n<span class="kw">string</span> s2 = <span class="kw">string</span>.<span class="mt">Intern</span>(<span class="st">"MISSAO"</span>);\nConsole.<span class="mt">WriteLine</span>(ReferenceEquals(s1, s2)); <span class="cm">// True</span>`,
      q: 'Qual método força o interning de uma string?',
      hint: 'Internar em inglês',
      ans: 'Intern',
      exp: '"string.Intern(s)" retorna referência à string interned. Mesma string literal = mesma referência. ReferenceEquals torna-se comparação de ponteiro — O(1).',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'ArrayPool reduzindo alocações.',
      code: `<span class="kw">var</span> pool = ArrayPool&lt;<span class="kw">int</span>&gt;.Shared;\n<span class="kw">var</span> buf = pool.<span class="mt">Rent</span>(<span class="nm">10</span>);\n<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i < <span class="nm">5</span>; i++) buf[i] = (i + <span class="nm">1</span>) * <span class="nm">10</span>;\n<span class="kw">int</span> soma = <span class="nm">0</span>;\n<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i < <span class="nm">5</span>; i++) soma += buf[i];\npool.<span class="mt">Return</span>(buf);\nConsole.<span class="mt">WriteLine</span>(soma);`,
      q: 'O que será exibido?',
      hint: '10+20+30+40+50',
      opts: [
        { t: '100', ok: false },
        { t: '150', ok: true },
        { t: '50', ok: false },
        { t: 'Resultado não determinístico', ok: false },
      ],
      exp: 'buf[0..4] = 10,20,30,40,50. Soma = 150. Pool.Return devolve sem limpar. Correto pois usamos apenas os 5 primeiros.',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Evitando boxing com readonly struct.',
      code: `<span class="kw">readonly struct</span> Ponto\n{\n    <span class="kw">public readonly int</span> X, Y;\n    <span class="kw">public</span> <span class="mt">Ponto</span>(<span class="kw">int</span> x, <span class="kw">int</span> y) { X=x; Y=y; }\n    <span class="kw">public double</span> Distancia => Math.<span class="mt">Sqrt</span>(X*X + Y*Y);\n}\n\n<span class="kw">var</span> p = <span class="kw">new</span> Ponto(<span class="nm">3</span>, <span class="nm">4</span>);\nConsole.<span class="mt">WriteLine</span>(p.Distancia);`,
      q: 'O que será exibido?',
      hint: 'Distância de (3,4) à origem',
      opts: [
        { t: '5', ok: true },
        { t: '7', ok: false },
        { t: '25', ok: false },
        { t: 'Erro — readonly struct', ok: false },
      ],
      exp: 'Sqrt(3²+4²) = Sqrt(9+16) = Sqrt(25) = 5. readonly struct não permite modificar campos após construção — defensivo por design.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Comparando capacidade de List para evitar realocações.',
      code: `<span class="kw">var</span> l1 = <span class="kw">new</span> List&lt;<span class="kw">int</span>&gt;();\n<span class="kw">var</span> l2 = <span class="kw">new</span> List&lt;<span class="kw">int</span>&gt;(<span class="nm">1000</span>);\n<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i < <span class="nm">1000</span>; i++) { l1.<span class="mt">Add</span>(i); l2.<span class="mt">Add</span>(i); }\nConsole.<span class="mt">WriteLine</span>(l1.<span class="mt">Count</span> == l2.<span class="mt">Count</span>);`,
      q: 'O que será exibido? Qual a diferença de performance entre l1 e l2?',
      hint: 'Mesmo resultado, diferente número de realocações',
      opts: [
        { t: 'False — capacidades diferentes', ok: false },
        { t: 'True — l1 sofre ~10 realocações, l2 não sofre nenhuma', ok: true },
        { t: 'True — sem diferença de performance', ok: false },
        { t: 'Erro — List com capacidade inicial', ok: false },
      ],
      exp: 'Ambos têm Count=1000. l1: começa capacidade 0, dobra a cada overflow → ~10 realocações+cópias. l2: 1000 de início → 0 realocações. Count igual, performance diferente.',
    },

  ]
};
