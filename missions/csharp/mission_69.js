// ══════════════════════════════════════════════════════
// ACT IV — O BUNKER
// MISSÃO 70 — A FORTALEZA CAÍDA
// Tema: REVISÃO Act IV — DI, Events, Dispose, Concorrência, LINQ Avançado, Patterns
// Tipo: Chefe Final Act IV (20 questões)
// ══════════════════════════════════════════════════════

const MISSION_69 = {
  id: 69,
  title: "MISSÃO 70 — A FORTALEZA CAÍDA",
  icon: '🏰',
  free: false,
  desc: "A fortaleza do Act IV está destruída, mas o sistema ainda funciona. Cada sensor, lock e pipeline precisa de um mestre para operar. Esta prova final testa tudo do bunker — sem segunda chance.",
  objs: [
    "Revisão completa do Act IV",
    "Integrar DI, Eventos, Dispose, Concorrência e Design Patterns",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Revisão: DI e SOLID.',
      q: 'Qual princípio do SOLID diz "dependa de abstrações, não de implementações"?',
      hint: 'D de SOLID',
      opts: [
        { t: 'Single Responsibility', ok: false },
        { t: 'Open/Closed', ok: false },
        { t: 'Dependency Inversion Principle', ok: true },
        { t: 'Liskov Substitution', ok: false },
      ],
      exp: 'DIP: Dependency Inversion Principle. "Dependa de abstrações (interfaces), não de classes concretas." Base teórica do Dependency Injection.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Revisão: ciclo de vida de serviços no .NET DI.',
      q: 'AddScoped registra o serviço com qual ciclo de vida?',
      hint: 'Por request em ASP.NET',
      opts: [
        { t: 'Uma instância para todo o aplicativo', ok: false },
        { t: 'Uma nova instância por injeção', ok: false },
        { t: 'Uma instância por escopo (request em ASP.NET, ou IServiceScope manual)', ok: true },
        { t: 'Uma instância por thread', ok: false },
      ],
      exp: 'Singleton: uma para tudo. Scoped: uma por escopo (request). Transient: nova a cada injeção. Errar o ciclo de vida é bug clássico em ASP.NET.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Revisão: eventos e memória.',
      q: 'Quando um evento causa memory leak?',
      hint: 'Subscriber vive menos que publisher',
      opts: [
        { t: 'Quando o evento tem muitos subscribers', ok: false },
        { t: 'Quando o subscriber não desinscre com -= e o publisher vive mais', ok: true },
        { t: 'Quando o evento usa EventArgs customizado', ok: false },
        { t: 'Quando o evento é static', ok: false },
      ],
      exp: 'Publisher segura referência ao subscriber via delegate. Sem -=, o subscriber "morto" não é coletado enquanto publisher viver. Memory leak.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Revisão: IDisposable e using.',
      q: 'O bloco "using (var r = new Resource())" garante que Dispose() é chamado quando?',
      hint: 'Mesmo com exceção',
      opts: [
        { t: 'Apenas se não houver exceção', ok: false },
        { t: 'Apenas quando o GC coletar', ok: false },
        { t: 'Sempre — ao sair do bloco, mesmo com exceção (equivale a try/finally)', ok: true },
        { t: 'Apenas se o tipo implementar IDisposable', ok: false },
      ],
      exp: '"using" é açúcar para try/finally com Dispose() no finally. Exceção ou saída normal — Dispose sempre chamado.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Revisão: lock e deadlock.',
      q: 'Qual a causa fundamental de um deadlock com múltiplos locks?',
      hint: 'Espera circular',
      opts: [
        { t: 'Usar lock(this)', ok: false },
        { t: 'Threads adquirindo locks em ordens diferentes — Thread A espera B, Thread B espera A', ok: true },
        { t: 'Usar muitos locks no código', ok: false },
        { t: 'Locks em métodos async', ok: false },
      ],
      exp: 'Deadlock: espera circular. A espera lock que B segura, B espera lock que A segura. Solução: ordem consistente de aquisição.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Revisão: padrão Strategy vs if/else.',
      q: 'O padrão Strategy é mais adequado quando?',
      hint: 'Comportamentos intercambiáveis em runtime',
      opts: [
        { t: 'Há apenas 2 comportamentos possíveis', ok: false },
        { t: 'Algoritmos precisam ser trocados em runtime sem modificar o contexto', ok: true },
        { t: 'Precisa criar objetos complexos', ok: false },
        { t: 'Apenas uma instância é necessária', ok: false },
      ],
      exp: 'Strategy: contexto.Estrategia = new NovaEstrategia(). Nenhuma alteração no contexto. if/else cresce com cada novo algoritmo — Strategy é extensível.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Revisão: DI via construtor com interface.',
      code: `<span class="kw">class</span> Agente\n{\n    <span class="kw">private readonly</span> IArma _arma;\n    <span class="kw">public</span> <span class="mt">Agente</span>(<span class="kw">_______</span> arma) => _arma = arma;\n}`,
      q: 'Qual tipo da dependência injetada (abstração)?',
      hint: 'Interface de arma',
      ans: 'IArma',
      exp: 'Injetar IArma (abstração) permite trocar Pistola, Rifle, Escopeta sem mudar Agente. DIP na prática.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Revisão: disparando evento com segurança null-conditional.',
      code: `<span class="kw">public event</span> EventHandler AcaoRealizada;\n<span class="kw">protected void</span> <span class="mt">OnAcao</span>()\n    => AcaoRealizada<span class="kw">_______</span>.<span class="mt">Invoke</span>(<span class="kw">this</span>, EventArgs.Empty);`,
      q: 'Qual operador garante null-safe ao invocar evento?',
      hint: 'Null conditional',
      ans: '?',
      exp: '"?." (null-conditional) verifica se AcaoRealizada não é null antes de Invoke. Thread-safe: copia o delegate antes de verificar.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Revisão: flag de proteção double-dispose.',
      code: `<span class="kw">private bool</span> _disposed;\n<span class="kw">public void</span> <span class="mt">Dispose</span>()\n{\n    <span class="kw">if</span> (<span class="kw">_______</span>) <span class="kw">return</span>;\n    _disposed = <span class="kw">true</span>;\n    <span class="cm">// limpar recursos</span>\n}`,
      q: 'Qual variável verificar para evitar double-dispose?',
      hint: 'A flag de descarte',
      ans: '_disposed',
      exp: '"if (_disposed) return" — se já descartado, não faz nada. Dispose deve ser idempotente: chamar múltiplas vezes sem erro.',
    },

    // Q10 — Fill
    {
      type: 'fill',
      bubble: 'Revisão: Interlocked para operação atômica.',
      code: `<span class="kw">private int</span> _total;\n<span class="kw">public void</span> <span class="mt">AdicionarXP</span>(<span class="kw">int</span> xp)\n    => Interlocked.<span class="mt">_______</span>(<span class="kw">ref</span> _total, xp);`,
      q: 'Qual método Interlocked adiciona atomicamente um valor?',
      hint: 'Add em inglês',
      ans: 'Add',
      exp: '"Interlocked.Add(ref _total, xp)" é thread-safe sem lock. Retorna o novo valor. Para incrementar de 1: Interlocked.Increment(ref _total).',
    },

    // Q11 — Fill
    {
      type: 'fill',
      bubble: 'Revisão: LINQ GroupBy para relatório.',
      code: `<span class="kw">var</span> rel = inimigos\n    .<span class="mt">_______</span>(e => e.Tipo)\n    .<span class="mt">Select</span>(g => <span class="st">$"{g.Key}: {g.Count()}"</span>);`,
      q: 'Qual método LINQ agrupa por tipo?',
      hint: 'Group + By',
      ans: 'GroupBy',
      exp: '"GroupBy(e => e.Tipo)" agrupa inimigos por tipo. g.Key = tipo. g.Count() = quantos desse tipo.',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'Revisão: DI testável.',
      code: `<span class="kw">interface</span> IServico { <span class="kw">int</span> <span class="mt">Calcular</span>(<span class="kw">int</span> n); }\n<span class="kw">class</span> ServDouble : IServico { <span class="kw">public int</span> <span class="mt">Calcular</span>(<span class="kw">int</span> n) => n * <span class="nm">2</span>; }\n<span class="kw">class</span> Proc { <span class="kw">readonly</span> IServico _s; <span class="kw">public</span> <span class="mt">Proc</span>(IServico s)=>_s=s; <span class="kw">public int</span> <span class="mt">Run</span>(<span class="kw">int</span> n)=>_s.<span class="mt">Calcular</span>(n)+<span class="nm">10</span>; }\n<span class="kw">var</span> p = <span class="kw">new</span> Proc(<span class="kw">new</span> ServDouble());\nConsole.<span class="mt">WriteLine</span>(p.<span class="mt">Run</span>(<span class="nm">15</span>));`,
      q: 'O que será exibido?',
      hint: '15*2 + 10',
      opts: [
        { t: '25', ok: false },
        { t: '40', ok: true },
        { t: '30', ok: false },
        { t: '15', ok: false },
      ],
      exp: 'ServDouble.Calcular(15) = 30. Proc.Run: 30 + 10 = 40.',
    },

    // Q13 — Code
    {
      type: 'code',
      bubble: 'Revisão: evento com dados.',
      code: `<span class="kw">class</span> EA : EventArgs { <span class="kw">public int</span> Val { <span class="kw">get</span>; <span class="kw">init</span>; } }\n<span class="kw">class</span> Pub { <span class="kw">public event</span> EventHandler&lt;EA&gt; Evt; <span class="kw">public void</span> <span class="mt">Fire</span>(<span class="kw">int</span> v) => Evt?.<span class="mt">Invoke</span>(<span class="kw">this</span>, <span class="kw">new</span> EA{Val=v}); }\n<span class="kw">var</span> sum = <span class="nm">0</span>;\n<span class="kw">var</span> pub = <span class="kw">new</span> Pub();\npub.Evt += (_, e) => sum += e.Val;\npub.<span class="mt">Fire</span>(<span class="nm">10</span>); pub.<span class="mt">Fire</span>(<span class="nm">20</span>); pub.<span class="mt">Fire</span>(<span class="nm">30</span>);\nConsole.<span class="mt">WriteLine</span>(sum);`,
      q: 'O que será exibido?',
      hint: '10+20+30',
      opts: [
        { t: '30', ok: false },
        { t: '60', ok: true },
        { t: '20', ok: false },
        { t: 'Erro — EventArgs com init', ok: false },
      ],
      exp: 'Três eventos disparados: sum += 10, sum += 20, sum += 30. Total: 60.',
    },

    // Q14 — Code
    {
      type: 'code',
      bubble: 'Revisão: using e Dispose garantido.',
      code: `<span class="kw">class</span> R : IDisposable\n{\n    <span class="kw">public bool</span> OK = <span class="kw">true</span>;\n    <span class="kw">public void</span> <span class="mt">Dispose</span>() { OK = <span class="kw">false</span>; Console.<span class="mt">Write</span>(<span class="st">"D"</span>); }\n}\n<span class="kw">R</span> ref1;\n<span class="kw">using</span> (ref1 = <span class="kw">new</span> R()) Console.<span class="mt">Write</span>(<span class="st">"U"</span>);\nConsole.<span class="mt">Write</span>(ref1.OK);`,
      q: 'O que será exibido?',
      hint: 'Dentro do using → U, ao fechar → D',
      opts: [
        { t: 'UDTrue', ok: false },
        { t: 'UDFalse', ok: true },
        { t: 'UD', ok: false },
        { t: 'DUFalse', ok: false },
      ],
      exp: '"U" dentro do using. Dispose: "D", OK=false. Após using: OK=false → "False". Saída: "UDFalse".',
    },

    // Q15 — Code
    {
      type: 'code',
      bubble: 'Revisão: lock thread-safe com múltiplas threads.',
      code: `<span class="kw">var</span> lk = <span class="kw">new</span> <span class="kw">object</span>(); <span class="kw">int</span> c = <span class="nm">0</span>;\n<span class="kw">var</span> t1 = Task.<span class="mt">Run</span>(() => { <span class="kw">for</span>(<span class="kw">var</span> i=<span class="nm">0</span>;i<<span class="nm">1000</span>;i++) <span class="kw">lock</span>(lk) c++; });\n<span class="kw">var</span> t2 = Task.<span class="mt">Run</span>(() => { <span class="kw">for</span>(<span class="kw">var</span> i=<span class="nm">0</span>;i<<span class="nm">1000</span>;i++) <span class="kw">lock</span>(lk) c++; });\n<span class="kw">await</span> Task.<span class="mt">WhenAll</span>(t1, t2);\nConsole.<span class="mt">WriteLine</span>(c);`,
      q: 'O que será exibido?',
      hint: 'lock garante 2000 incrementos',
      opts: [
        { t: 'Valor entre 1000-1999', ok: false },
        { t: '2000', ok: true },
        { t: '1000', ok: false },
        { t: 'Resultado não determinístico', ok: false },
      ],
      exp: 'lock garante exclusão mútua. 2 × 1000 = 2000 incrementos sem perda. Sem lock: race condition e resultado não determinístico.',
    },

    // Q16 — Code
    {
      type: 'code',
      bubble: 'Revisão: Factory + Strategy combinados.',
      code: `<span class="kw">interface</span> ICalc { <span class="kw">int</span> <span class="mt">Exec</span>(<span class="kw">int</span> a, <span class="kw">int</span> b); }\n<span class="kw">class</span> Soma : ICalc { <span class="kw">public int</span> <span class="mt">Exec</span>(<span class="kw">int</span> a, <span class="kw">int</span> b) => a + b; }\n<span class="kw">class</span> Mult : ICalc { <span class="kw">public int</span> <span class="mt">Exec</span>(<span class="kw">int</span> a, <span class="kw">int</span> b) => a * b; }\n<span class="kw">static</span> ICalc <span class="mt">Get</span>(<span class="kw">string</span> op) => op == <span class="st">"+"</span> ? <span class="kw">new</span> Soma() : <span class="kw">new</span> Mult();\n\n<span class="kw">var</span> calc = <span class="mt">Get</span>(<span class="st">"*"</span>);\nConsole.<span class="mt">WriteLine</span>(calc.<span class="mt">Exec</span>(<span class="nm">6</span>, <span class="nm">7</span>));`,
      q: 'O que será exibido?',
      hint: 'op="*" → Mult, 6*7',
      opts: [
        { t: '13', ok: false },
        { t: '42', ok: true },
        { t: '6', ok: false },
        { t: 'Erro — Factory com interface', ok: false },
      ],
      exp: 'Get("*") retorna new Mult(). calc.Exec(6,7) = 6*7 = 42.',
    },

    // Q17 — Code
    {
      type: 'code',
      bubble: 'Revisão: LINQ Join + GroupBy para relatório.',
      code: `<span class="kw">record</span> A(<span class="kw">int</span> Id, <span class="kw">string</span> Dep);\n<span class="kw">record</span> M(<span class="kw">int</span> AId, <span class="kw">int</span> XP);\n<span class="kw">var</span> ags = <span class="kw">new</span>[] { <span class="kw">new</span> A(<span class="nm">1</span>,<span class="st">"HQ"</span>), <span class="kw">new</span> A(<span class="nm">2</span>,<span class="st">"HQ"</span>), <span class="kw">new</span> A(<span class="nm">3</span>,<span class="st">"Field"</span>) };\n<span class="kw">var</span> mis = <span class="kw">new</span>[] { <span class="kw">new</span> M(<span class="nm">1</span>,<span class="nm">100</span>), <span class="kw">new</span> M(<span class="nm">2</span>,<span class="nm">200</span>), <span class="kw">new</span> M(<span class="nm">3</span>,<span class="nm">300</span>) };\n<span class="kw">var</span> r = ags.<span class="mt">Join</span>(mis, a=>a.Id, m=>m.AId, (a,m)=><span class="kw">new</span>{a.Dep,m.XP})\n           .<span class="mt">GroupBy</span>(x=>x.Dep)\n           .<span class="mt">Select</span>(g=><span class="st">$"{g.Key}:{g.Sum(x=>x.XP)}"</span>);\nConsole.<span class="mt">WriteLine</span>(<span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">","</span>, r));`,
      q: 'O que será exibido?',
      hint: 'HQ: 100+200, Field: 300',
      opts: [
        { t: 'HQ:300,Field:300', ok: true },
        { t: 'HQ:200,Field:300', ok: false },
        { t: 'Field:300,HQ:300', ok: false },
        { t: 'HQ:600,Field:300', ok: false },
      ],
      exp: 'Join: A1+M1(HQ,100), A2+M2(HQ,200), A3+M3(Field,300). GroupBy(Dep): HQ=[100,200]→300, Field=[300]→300. "HQ:300,Field:300".',
    },

    // Q18 — Code
    {
      type: 'code',
      bubble: 'Revisão: Builder + LINQ.',
      code: `<span class="kw">class</span> QB { <span class="kw">int</span> _min; <span class="kw">public</span> QB <span class="mt">Min</span>(<span class="kw">int</span> n){_min=n;<span class="kw">return this</span>;} <span class="kw">public</span> Func&lt;<span class="kw">int</span>,<span class="kw">bool</span>&gt; <span class="mt">Build</span>()=>n=>n>=_min; }\n<span class="kw">var</span> pred = <span class="kw">new</span> QB().<span class="mt">Min</span>(<span class="nm">10</span>).<span class="mt">Build</span>();\n<span class="kw">var</span> nums = <span class="kw">new</span>[] { <span class="nm">5</span>, <span class="nm">10</span>, <span class="nm">15</span>, <span class="nm">3</span>, <span class="nm">20</span> };\nConsole.<span class="mt">WriteLine</span>(nums.<span class="mt">Count</span>(pred));`,
      q: 'O que será exibido?',
      hint: 'Números >= 10: {10,15,20}',
      opts: [
        { t: '2', ok: false },
        { t: '3', ok: true },
        { t: '5', ok: false },
        { t: 'Erro — Func como predicado de Count', ok: false },
      ],
      exp: 'pred = n >= 10. Números >= 10: 10, 15, 20 = 3. Count(pred) = 3.',
    },

    // Q19 — Code
    {
      type: 'code',
      bubble: 'Revisão: SemaphoreSlim + async para throttling.',
      code: `<span class="kw">var</span> sem = <span class="kw">new</span> SemaphoreSlim(<span class="nm">2</span>, <span class="nm">2</span>);\n<span class="kw">int</span> ativos = <span class="nm">0</span>, max = <span class="nm">0</span>;\n<span class="kw">async</span> Task <span class="mt">Tarefa</span>()\n{\n    <span class="kw">await</span> sem.<span class="mt">WaitAsync</span>();\n    Interlocked.<span class="mt">Increment</span>(<span class="kw">ref</span> ativos);\n    Interlocked.<span class="mt">Exchange</span>(<span class="kw">ref</span> max, Math.<span class="mt">Max</span>(max, ativos));\n    <span class="kw">await</span> Task.<span class="mt">Delay</span>(<span class="nm">10</span>);\n    Interlocked.<span class="mt">Decrement</span>(<span class="kw">ref</span> ativos);\n    sem.<span class="mt">Release</span>();\n}\n<span class="kw">await</span> Task.<span class="mt">WhenAll</span>(Enumerable.<span class="mt">Range</span>(<span class="nm">0</span>,<span class="nm">5</span>).<span class="mt">Select</span>(_=><span class="mt">Tarefa</span>()));\nConsole.<span class="mt">WriteLine</span>(max <= <span class="nm">2</span>);`,
      q: 'O que será exibido?',
      hint: 'SemaphoreSlim(2,2) limita a 2 simultâneos',
      opts: [
        { t: 'False', ok: false },
        { t: 'True', ok: true },
        { t: '2', ok: false },
        { t: 'Erro — Interlocked.Exchange com Max', ok: false },
      ],
      exp: 'SemaphoreSlim(2,2) limita a 2 tarefas simultâneas. max nunca excede 2. max <= 2 → True.',
    },

    // Q20 — Code (DESAFIO FINAL)
    {
      type: 'code',
      bubble: '🏆 DESAFIO FINAL ACT IV — Sistema integrado com DI, eventos, dispose e concorrência.',
      code: `<span class="kw">interface</span> IProc { <span class="kw">int</span> <span class="mt">Proc</span>(<span class="kw">int</span> n); }\n<span class="kw">class</span> DoubleProc : IProc { <span class="kw">public int</span> <span class="mt">Proc</span>(<span class="kw">int</span> n) => n*<span class="nm">2</span>; }\n<span class="kw">class</span> Motor : IDisposable\n{\n    <span class="kw">readonly</span> IProc _p;\n    <span class="kw">public event</span> EventHandler&lt;<span class="kw">int</span>&gt; Resultado;\n    <span class="kw">public</span> <span class="mt">Motor</span>(IProc p) => _p = p;\n    <span class="kw">public async</span> Task <span class="mt">ProcessarAsync</span>(<span class="kw">int</span> n)\n    {\n        <span class="kw">await</span> Task.<span class="mt">Delay</span>(<span class="nm">0</span>);\n        Resultado?.<span class="mt">Invoke</span>(<span class="kw">this</span>, _p.<span class="mt">Proc</span>(n));\n    }\n    <span class="kw">public void</span> <span class="mt">Dispose</span>() { }\n}\n<span class="kw">int</span> total = <span class="nm">0</span>;\n<span class="kw">await using var</span> motor = <span class="kw">new</span> Motor(<span class="kw">new</span> DoubleProc());\nmotor.Resultado += (_, v) => Interlocked.<span class="mt">Add</span>(<span class="kw">ref</span> total, v);\n<span class="kw">await</span> Task.<span class="mt">WhenAll</span>(<span class="kw">new</span>[] { <span class="nm">5</span>, <span class="nm">10</span>, <span class="nm">15</span> }.<span class="mt">Select</span>(n => motor.<span class="mt">ProcessarAsync</span>(n)));\nConsole.<span class="mt">WriteLine</span>(total);`,
      q: 'O que será exibido?',
      hint: 'DI + Evento + Async + Interlocked. Valores: 5*2 + 10*2 + 15*2',
      opts: [
        { t: '30', ok: false },
        { t: '60', ok: true },
        { t: '15', ok: false },
        { t: 'Erro — await using com Motor', ok: false },
      ],
      exp: 'DoubleProc.Proc: 5→10, 10→20, 15→30. Eventos disparam, Interlocked.Add soma: 10+20+30=60.',
    },

  ]
};
