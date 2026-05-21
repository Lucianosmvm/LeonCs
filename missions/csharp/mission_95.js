// ══════════════════════════════════════════════════════
// EPÍLOGO — O LEGADO
// MISSÃO 96 — LEGADO INFINITO ⚔️
// Tema: Epílogo Boss 2 — unsafe, Rx.NET, metaprogramação, todos os conceitos avançados
// Tipo: Boss (18 questões) | 6 MC → 5 Fill → 7 Code
// ══════════════════════════════════════════════════════

const MISSION_95 = {
  id: 95,
  title: "MISSÃO 96 — LEGADO INFINITO ⚔️",
  icon: '♾️',
  free: false,
  desc: "O legado de Leon é infinito. Este boss final do Epílogo reúne os conceitos mais avançados: unsafe code, Rx.NET, metaprogramação, resiliência, Clean Architecture. O teste definitivo do Dev Sobrevivente.",
  objs: [
    "Consolidar todos os conceitos avançados do Epílogo",
    "Integrar unsafe, reactive, dynamic e architecture patterns",
    "Demonstrar maestria completa do C# avançado",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Revisão: unsafe vs safe alternatives.',
      q: 'Qual alternativa safe substitui ponteiros de unsafe em muitos casos de alta performance?',
      hint: 'Span e Memory',
      opts: [
        { t: 'dynamic — acesso sem type safety', ok: false },
        { t: 'Span<T> e Memory<T> — acesso a memória contígua sem unsafe, com bounds checking', ok: true },
        { t: 'ref struct — apenas para leitura', ok: false },
        { t: 'Não há alternativa safe para unsafe', ok: false },
      ],
      exp: 'Span<T>: stack-only, acesso a arrays/stackalloc/heap contígua sem unsafe. Memory<T>: versão para heap. Juntos substituem ponteiros em 90% dos casos de performance.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Revisão: IObservable e backpressure.',
      q: 'Como tratar backpressure em Rx.NET quando o observable produz mais rápido que o subscriber consome?',
      hint: 'Buffer, Sample, Throttle',
      opts: [
        { t: 'Não é possível — Rx não suporta backpressure', ok: false },
        { t: 'Operadores como Buffer, Sample, Throttle e ObserveOn para controlar fluxo', ok: true },
        { t: 'Aumentar a velocidade do subscriber', ok: false },
        { t: 'Usar múltiplos subscribers', ok: false },
      ],
      exp: 'Buffer(N): lotes de N. Sample(interval): um valor por intervalo. Throttle: suprimir durante atividade. ObserveOn(ThreadPoolScheduler): processar em thread pool.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Revisão: ExpandoObject e IDictionary.',
      q: 'Como iterar todas as propriedades de um ExpandoObject?',
      hint: 'Cast para IDictionary',
      opts: [
        { t: 'Reflection — GetProperties()', ok: false },
        { t: 'Cast para IDictionary<string,object> e iterar os pares', ok: true },
        { t: 'dynamic.GetProperties()', ok: false },
        { t: 'ExpandoObject não é iterável', ok: false },
      ],
      exp: 'var dict = (IDictionary<string,object>)expando. foreach (var kvp in dict) { Console.WriteLine($"{kvp.Key}: {kvp.Value}"); }',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Revisão: stackalloc e Span safety.',
      q: 'Por que Span<T> gerado por stackalloc não pode escapar do método que o criou?',
      hint: 'Lifetime da stack frame',
      opts: [
        { t: 'Regra de compilador arbitrária', ok: false },
        { t: 'A stack frame é destruída quando o método retorna — Span apontaria para memória inválida', ok: true },
        { t: 'Span<T> é sempre copiado ao retornar', ok: false },
        { t: 'stackalloc não funciona com Span', ok: false },
      ],
      exp: 'stackalloc cria dados na stack frame atual. Retornar Span = ponteiro para frame destruída = undefined behavior. Compilador bloqueia: ref struct (Span) não pode estar em campos de classe nem ser retornado além do escopo.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Revisão: Polly e Microsoft.Extensions.Resilience.',
      q: 'Qual é o novo namespace para resiliência no .NET 8 com Polly v8?',
      hint: 'Microsoft.Extensions.Resilience',
      opts: [
        { t: 'Polly.Core apenas', ok: false },
        { t: 'Microsoft.Extensions.Resilience — integração com DI, logging e telemetria automáticos', ok: true },
        { t: 'System.Net.Resilience', ok: false },
        { t: 'Resilience não mudou no .NET 8', ok: false },
      ],
      exp: 'Microsoft.Extensions.Resilience: ResiliencePipelineBuilder com DI. AddStandardResilienceHandler() para HttpClient: retry, circuit breaker, timeout configurados automaticamente.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Revisão: Domain Driven Design — Aggregates.',
      q: 'O que é um Aggregate Root em DDD?',
      hint: 'Ponto de entrada para modificar o aggregate',
      opts: [
        { t: 'A entidade com o maior número de propriedades', ok: false },
        { t: 'A entidade raiz que garante consistência do aggregate — toda modificação passa por ela', ok: true },
        { t: 'A primeira entidade criada no domínio', ok: false },
        { t: 'Aggregate Root é apenas um padrão de nomenclatura', ok: false },
      ],
      exp: 'Pedido (Order) é Aggregate Root. ItemPedido, Desconto são entidades dentro do aggregate. Só repository de Order existe — ItemPedido não tem repository próprio.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Observable.Create para criar stream customizado:',
      code: `<span class="kw">var</span> obs = Observable.<span class="mt">_______</span>&lt;<span class="kw">int</span>&gt;(observer => {
    observer.<span class="mt">OnNext</span>(<span class="nm">1</span>);
    observer.<span class="mt">OnNext</span>(<span class="nm">2</span>);
    observer.<span class="mt">OnCompleted</span>();
    <span class="kw">return</span> Disposable.<span class="mt">Empty</span>;
});`,
      q: 'Qual método estático cria um IObservable customizado?',
      hint: 'Create',
      ans: 'Create',
      exp: 'Observable.Create<T>(observer => { ... return disposable; }): criação customizada. Retorna IDisposable para cleanup ao desinscrever. Disposable.Empty quando não há cleanup.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Roslyn scripting conceitual:',
      code: `<span class="kw">var</span> result = <span class="kw">await</span> CSharpScript.<span class="mt">_______</span>&lt;<span class="kw">int</span>&gt;(
    <span class="st">"2 + 2"</span>);
Console.<span class="mt">WriteLine</span>(result.<span class="mt">ReturnValue</span>);`,
      q: 'Qual método do Roslyn Scripting executa código C# como string?',
      hint: 'Run Async',
      ans: 'RunAsync',
      exp: 'CSharpScript.RunAsync<T>(code): compila e executa código C# em runtime. result.ReturnValue: valor retornado. Útil para engines de regras, notebooks.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'NativeMemory para buffer não gerenciado:',
      code: `<span class="kw">unsafe</span>
{
    <span class="kw">void</span>* ptr = NativeMemory.<span class="mt">Alloc</span>(<span class="nm">64</span>);
    <span class="cm">// usar o buffer...</span>
    NativeMemory.<span class="mt">_______</span>(ptr);
}`,
      q: 'Qual método libera memória alocada com NativeMemory.Alloc?',
      hint: 'Free',
      ans: 'Free',
      exp: 'NativeMemory.Free(ptr): libera memória nativa. Sem Free = memory leak. NativeMemory: wrapper seguro para malloc/free nativo. Alternativa: ArrayPool para buffers gerenciados.',
    },

    // Q10 — Fill
    {
      type: 'fill',
      bubble: 'DDD — Value Object:',
      code: `<span class="kw">record</span> Dinheiro(<span class="kw">decimal</span> Valor, <span class="kw">string</span> Moeda)
{
    <span class="kw">public static</span> Dinheiro <span class="mt">Criar</span>(<span class="kw">decimal</span> v, <span class="kw">string</span> m) =>
        v < <span class="nm">0</span> ? <span class="kw">throw new</span> ArgumentException() : <span class="kw">_______</span>(v, m);
}`,
      q: 'Como criar instância do record dentro da própria classe?',
      hint: 'new com os parâmetros',
      ans: 'new Dinheiro',
      exp: '"new Dinheiro(v, m)": chama o construtor do record. Value Objects em DDD: imutáveis, igualdade por valor, sem identidade. Record = implementação perfeita para Value Objects.',
    },

    // Q11 — Fill
    {
      type: 'fill',
      bubble: 'Rx.NET — combining operators:',
      code: `<span class="kw">var</span> obs1 = Observable.<span class="mt">Return</span>(<span class="st">"A"</span>);
<span class="kw">var</span> obs2 = Observable.<span class="mt">Return</span>(<span class="st">"B"</span>);
<span class="kw">var</span> combined = obs1._______(<span class="st">","</span>, obs2);`,
      q: 'Qual operador Rx concatena dois observables em sequência?',
      hint: 'Concat',
      ans: 'Concat',
      exp: 'obs1.Concat(separator?, obs2): obs1 primeiro, depois obs2. Merge: intercala. Zip: par a par. Concat: sequencial — obs2 começa após obs1 completar.',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'stackalloc — sum sem alocação heap.',
      code: `<span class="kw">static int</span> <span class="mt">SomaDireto</span>(<span class="kw">int</span> n)
{
    Span&lt;<span class="kw">int</span>&gt; buf = <span class="kw">stackalloc int</span>[n];
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i < n; i++) buf[i] = i + <span class="nm">1</span>;
    <span class="kw">int</span> s = <span class="nm">0</span>;
    <span class="kw">foreach</span> (<span class="kw">var</span> v <span class="kw">in</span> buf) s += v;
    <span class="kw">return</span> s;
}
Console.<span class="mt">WriteLine</span>(<span class="mt">SomaDireto</span>(<span class="nm">5</span>));`,
      q: 'O que será exibido?',
      hint: '1+2+3+4+5',
      opts: [
        { t: '10', ok: false },
        { t: '15', ok: true },
        { t: '5', ok: false },
        { t: 'Erro — stackalloc com variável', ok: false },
      ],
      exp: 'buf = {1,2,3,4,5}. Soma = 15. stackalloc com tamanho variável permitido em método (não em inicializadores de campo). "15".',
    },

    // Q13 — Code
    {
      type: 'code',
      bubble: 'Subject + Observable operators.',
      code: `<span class="kw">var</span> subject = <span class="kw">new</span> Subject&lt;<span class="kw">int</span>&gt;();
<span class="kw">var</span> log = <span class="kw">new</span> List&lt;<span class="kw">int</span>&gt;();
subject
    .<span class="mt">Where</span>(n => n > <span class="nm">5</span>)
    .<span class="mt">Select</span>(n => n * <span class="nm">2</span>)
    .<span class="mt">Subscribe</span>(n => log.<span class="mt">Add</span>(n));
subject.<span class="mt">OnNext</span>(<span class="nm">3</span>);
subject.<span class="mt">OnNext</span>(<span class="nm">7</span>);
subject.<span class="mt">OnNext</span>(<span class="nm">2</span>);
subject.<span class="mt">OnNext</span>(<span class="nm">10</span>);
Console.<span class="mt">WriteLine</span>(<span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">","</span>, log));`,
      q: 'O que será exibido?',
      hint: 'Filtra > 5, multiplica por 2',
      opts: [
        { t: '14,20', ok: true },
        { t: '6,14,4,20', ok: false },
        { t: '7,10', ok: false },
        { t: '14,20,3,2', ok: false },
      ],
      exp: '3≤5: filtrado. 7>5: *2=14. 2≤5: filtrado. 10>5: *2=20. log={14,20}. "14,20".',
    },

    // Q14 — Code
    {
      type: 'code',
      bubble: 'ExpandoObject com eventos dinâmicos.',
      code: `<span class="kw">dynamic</span> expando = <span class="kw">new</span> ExpandoObject();
<span class="kw">var</span> changeObs = (INotifyPropertyChanged)expando;
<span class="kw">var</span> changes = <span class="kw">new</span> List&lt;<span class="kw">string</span>&gt;();
changeObs.PropertyChanged += (s, e) =>
    changes.<span class="mt">Add</span>(e.PropertyName ?? <span class="st">""</span>);
expando.Nome = <span class="st">"Leon"</span>;
expando.HP = <span class="nm">100</span>;
Console.<span class="mt">WriteLine</span>(changes.<span class="mt">Count</span>);`,
      q: 'O que será exibido?',
      hint: 'ExpandoObject implementa INotifyPropertyChanged',
      opts: [
        { t: '0', ok: false },
        { t: '2', ok: true },
        { t: '1', ok: false },
        { t: 'Erro — cast inválido', ok: false },
      ],
      exp: 'ExpandoObject implementa INotifyPropertyChanged. Cada nova propriedade dispara PropertyChanged. Nome → 1, HP → 2. changes.Count = 2. "2".',
    },

    // Q15 — Code
    {
      type: 'code',
      bubble: 'Aggregate Root — invariant enforcement.',
      code: `<span class="kw">class</span> Pedido
{
    <span class="kw">private readonly</span> List&lt;<span class="kw">string</span>&gt; _itens = <span class="kw">new</span>();
    <span class="kw">public</span> IReadOnlyList&lt;<span class="kw">string</span>&gt; Itens => _itens;
    <span class="kw">public void</span> <span class="mt">Adicionar</span>(<span class="kw">string</span> item) {
        <span class="kw">if</span> (_itens.<span class="mt">Count</span> >= <span class="nm">5</span>) <span class="kw">throw new</span> InvalidOperationException();
        _itens.<span class="mt">Add</span>(item);
    }
}
<span class="kw">var</span> pedido = <span class="kw">new</span> Pedido();
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i < <span class="nm">3</span>; i++) pedido.<span class="mt">Adicionar</span>(<span class="st">$"i{i}"</span>);
Console.<span class="mt">WriteLine</span>(pedido.Itens.<span class="mt">Count</span>);`,
      q: 'O que será exibido?',
      hint: 'Adiciona 3 itens, limite é 5',
      opts: [
        { t: '5', ok: false },
        { t: '3', ok: true },
        { t: 'Erro — 5 no limite', ok: false },
        { t: '0', ok: false },
      ],
      exp: 'Loop i=0,1,2: 3 itens adicionados. Limite 5 não atingido. Itens.Count = 3. "3".',
    },

    // Q16 — Code
    {
      type: 'code',
      bubble: 'Scan operator — running aggregate em Rx.',
      code: `<span class="kw">var</span> somas = <span class="kw">new</span>[] { <span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span>, <span class="nm">4</span> }
    .<span class="mt">ToObservable</span>()
    .<span class="mt">Scan</span>(<span class="nm">0</span>, (acc, n) => acc + n);
<span class="kw">var</span> resultado = <span class="kw">new</span> List&lt;<span class="kw">int</span>&gt;();
somas.<span class="mt">Subscribe</span>(n => resultado.<span class="mt">Add</span>(n));
Console.<span class="mt">WriteLine</span>(<span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">","</span>, resultado));`,
      q: 'O que será exibido?',
      hint: 'Scan = running sum a cada elemento',
      opts: [
        { t: '10', ok: false },
        { t: '1,3,6,10', ok: true },
        { t: '1,2,3,4', ok: false },
        { t: '0,1,3,6,10', ok: false },
      ],
      exp: 'Scan: 0+1=1, 1+2=3, 3+3=6, 6+4=10. Emite cada acumulado: 1,3,6,10. "1,3,6,10".',
    },

    // Q17 — Code
    {
      type: 'code',
      bubble: 'Cold vs Hot observable.',
      code: `<span class="kw">var</span> cold = Observable.<span class="mt">Create</span>&lt;<span class="kw">int</span>&gt;(obs => {
    obs.<span class="mt">OnNext</span>(<span class="nm">1</span>);
    obs.<span class="mt">OnNext</span>(<span class="nm">2</span>);
    obs.<span class="mt">OnCompleted</span>();
    <span class="kw">return</span> Disposable.<span class="mt">Empty</span>;
});
<span class="kw">var</span> log1 = <span class="kw">new</span> List&lt;<span class="kw">int</span>&gt;();
<span class="kw">var</span> log2 = <span class="kw">new</span> List&lt;<span class="kw">int</span>&gt;();
cold.<span class="mt">Subscribe</span>(n => log1.<span class="mt">Add</span>(n));
cold.<span class="mt">Subscribe</span>(n => log2.<span class="mt">Add</span>(n));
Console.<span class="mt">WriteLine</span>(log1.<span class="mt">Count</span> + log2.<span class="mt">Count</span>);`,
      q: 'O que será exibido?',
      hint: 'Cold observable: cada subscriber recebe stream independente',
      opts: [
        { t: '2', ok: false },
        { t: '4', ok: true },
        { t: '1', ok: false },
        { t: '0', ok: false },
      ],
      exp: 'Cold observable: cada Subscribe cria stream novo. log1: {1,2} count=2. log2: {1,2} count=2. Total = 4. "4".',
    },

    // Q18 — Code
    {
      type: 'code',
      bubble: 'Dynamic dispatch vs static — performance conceito.',
      code: `<span class="kw">interface</span> ICalc { <span class="kw">int</span> <span class="mt">Dobrar</span>(<span class="kw">int</span> n); }
<span class="kw">class</span> Calc : ICalc { <span class="kw">public int</span> <span class="mt">Dobrar</span>(<span class="kw">int</span> n) => n * <span class="nm">2</span>; }

ICalc staticCalc = <span class="kw">new</span> Calc();
<span class="kw">dynamic</span> dynCalc = <span class="kw">new</span> Calc();

Console.<span class="mt">WriteLine</span>(staticCalc.<span class="mt">Dobrar</span>(<span class="nm">5</span>));
Console.<span class="mt">WriteLine</span>(dynCalc.<span class="mt">Dobrar</span>(<span class="nm">5</span>));`,
      q: 'O que será exibido?',
      hint: 'Ambos chamam Dobrar(5) = 10',
      opts: [
        { t: '10 e 10', ok: true },
        { t: '5 e 10', ok: false },
        { t: 'Erro no dynamic', ok: false },
        { t: '10 e Erro', ok: false },
      ],
      exp: 'staticCalc.Dobrar(5): dispatch estático = 10. dynCalc.Dobrar(5): DLR resolve Dobrar em runtime = 10. Mesmo resultado, diferente mecanismo. "10" e "10".',
    },

  ]
};
