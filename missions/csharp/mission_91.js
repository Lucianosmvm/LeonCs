// ══════════════════════════════════════════════════════
// EPÍLOGO — O LEGADO
// MISSÃO 92 — OPERAÇÃO GLOBAL ⚔️
// Tema: Epílogo Boss — .NET moderno, resiliência, Clean Architecture, DI avançado
// Tipo: Boss (18 questões) | 6 MC → 5 Fill → 7 Code
// ══════════════════════════════════════════════════════

const MISSION_91 = {
  id: 91,
  title: "MISSÃO 92 — OPERAÇÃO GLOBAL ⚔️",
  icon: '🌍',
  free: false,
  desc: "Missão global — todos os sistemas conectados. O epílogo exige domínio total do .NET moderno: resiliência, Clean Architecture, DI avançado, .NET 8 features. O agente definitivo.",
  objs: [
    "Integrar todos os conceitos do Epílogo",
    "Aplicar .NET 8 features com Clean Architecture",
    "Demonstrar domínio de resiliência e design patterns",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Revisão: FrozenDictionary e performance.',
      q: 'Qual é o custo de FrozenDictionary.ToFrozenDictionary() comparado a uso posterior?',
      hint: 'Construção vs lookup',
      opts: [
        { t: 'Construção é O(1), lookup é O(n)', ok: false },
        { t: 'Construção é mais lenta que Dictionary — otimiza para lookups subsequentes mais rápidos', ok: true },
        { t: 'São equivalentes em ambos', ok: false },
        { t: 'Lookup é O(n) pois não tem hash', ok: false },
      ],
      exp: 'FrozenDictionary: construção mais cara (análise dos dados para otimização). Após construído: lookups mais rápidos que Dictionary (perfect hashing). Trade-off: construção cara, leitura rápida.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Revisão: Keyed services e resolução.',
      q: 'Como injetar um keyed service no construtor de uma classe?',
      hint: '[FromKeyedServices]',
      opts: [
        { t: 'IServiceProvider.GetService<T>("key")', ok: false },
        { t: '[FromKeyedServices("key")] no parâmetro do construtor', ok: true },
        { t: 'Apenas via IKeyedServiceProvider manualmente', ok: false },
        { t: 'Keyed services não podem ser injetados por construtor', ok: false },
      ],
      exp: 'class MyService([FromKeyedServices("memory")] ICache cache): atributo [FromKeyedServices] no parâmetro. Também via IKeyedServiceProvider.GetRequiredKeyedService<T>("key").',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Revisão: Clean Architecture e dependências.',
      q: 'Na Clean Architecture, qual camada pode conhecer Domain?',
      hint: 'Todas as camadas internas',
      opts: [
        { t: 'Apenas Presentation', ok: false },
        { t: 'Application e Infrastructure conhecem Domain; Presentation conhece Application', ok: true },
        { t: 'Apenas Infrastructure', ok: false },
        { t: 'Nenhuma camada deve conhecer Domain', ok: false },
      ],
      exp: 'Domain: centro, conhece ninguém. Application: conhece Domain. Infrastructure: conhece Domain e Application (implementa interfaces). Presentation: conhece Application.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Revisão: Circuit Breaker e estado.',
      q: 'Após o circuit breaker abrir, o que acontece com as chamadas subsequentes?',
      hint: 'Falha imediata sem tentar o serviço',
      opts: [
        { t: 'São colocadas em fila', ok: false },
        { t: 'São rejeitadas imediatamente com exceção (fast fail) — sem chamar o serviço downstream', ok: true },
        { t: 'São retentadas automaticamente', ok: false },
        { t: 'São redirecionadas para outro serviço', ok: false },
      ],
      exp: 'Open state: fast fail. BrokenCircuitException lançada imediatamente. Após timeout → HalfOpen: uma chamada de teste. Protege serviço downstream de "thundering herd".',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Revisão: BackgroundService e hosted services.',
      q: 'O que deve ser feito em ExecuteAsync para parar corretamente quando a aplicação encerra?',
      hint: 'CancellationToken de parada',
      opts: [
        { t: 'Não fazer nada — a aplicação mata o processo', ok: false },
        { t: 'Verificar stoppingToken.IsCancellationRequested ou passar o token para await operations', ok: true },
        { t: 'Chamar Environment.Exit(0)', ok: false },
        { t: 'Lançar exceção para sair do loop', ok: false },
      ],
      exp: 'ExecuteAsync(CancellationToken stoppingToken): loop while(!stoppingToken.IsCancellationRequested). Passar stoppingToken para Task.Delay e outras ops async. Saída graciosa.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Revisão: CQRS e MediatR.',
      q: 'Qual o papel do MediatR no padrão CQRS em .NET?',
      hint: 'Mediador entre handler e caller',
      opts: [
        { t: 'MediatR é um ORM para CQRS', ok: false },
        { t: 'Desacopla quem envia o comando/query de quem processa — in-process message bus', ok: true },
        { t: 'MediatR gerencia banco de dados', ok: false },
        { t: 'MediatR é obrigatório para CQRS', ok: false },
      ],
      exp: 'MediatR: sender.Send(new GetMissaoQuery(id)) → IRequestHandler<GetMissaoQuery, Missao> executa. Sender não conhece o handler. Desacoplamento via mediador.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Registrando FrozenDictionary no DI:',
      code: `<span class="kw">var</span> xpTable = <span class="kw">new</span> Dictionary&lt;<span class="kw">int</span>, <span class="kw">int</span>&gt;
    { [<span class="nm">1</span>] = <span class="nm">100</span>, [<span class="nm">2</span>] = <span class="nm">200</span> }
    .<span class="mt">ToFrozenDictionary</span>();
services.<span class="mt">_______</span>(xpTable);`,
      q: 'Qual ciclo de vida usar para uma coleção imutável (lida-once)?',
      hint: 'Singleton — criado uma vez',
      ans: 'AddSingleton',
      exp: 'AddSingleton(frozenDict): instância única para toda a aplicação. FrozenDictionary é thread-safe e imutável — perfeito para Singleton.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'TimeProvider em testes:',
      code: `<span class="kw">var</span> fakeTime = <span class="kw">new</span> FakeTimeProvider();
fakeTime.<span class="mt">_______</span>(TimeSpan.<span class="mt">FromHours</span>(<span class="nm">2</span>));
<span class="kw">var</span> agora = fakeTime.<span class="mt">GetUtcNow</span>();`,
      q: 'Qual método avança o tempo no FakeTimeProvider?',
      hint: 'Advance',
      ans: 'Advance',
      exp: 'fakeTime.Advance(TimeSpan): avança o relógio artificial. GetUtcNow() retorna tempo avançado. Permite testar lógica dependente de tempo sem esperar.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Polly pipeline com múltiplas strategies:',
      code: `<span class="kw">var</span> pipeline = <span class="kw">new</span> ResiliencePipelineBuilder()
    .<span class="mt">AddTimeout</span>(TimeSpan.<span class="mt">FromSeconds</span>(<span class="nm">5</span>))
    .<span class="mt">AddRetry</span>(<span class="kw">new</span> RetryStrategyOptions { MaxRetryAttempts = <span class="nm">3</span> })
    .<span class="mt">AddCircuitBreaker</span>(<span class="kw">new</span> CircuitBreakerStrategyOptions
        { FailureRatio = <span class="nm">0.5</span>, SamplingDuration = TimeSpan.<span class="mt">FromSeconds</span>(<span class="nm">30</span>) })
    .<span class="mt">_______</span>();`,
      q: 'Qual método finaliza a construção do pipeline Polly?',
      hint: 'Build',
      ans: 'Build',
      exp: '.Build(): constrói o ResiliencePipeline. Pipeline com: timeout 5s, retry 3x, circuit breaker com 50% falha em 30s. Executar: pipeline.ExecuteAsync(async ct => ...).',
    },

    // Q10 — Fill
    {
      type: 'fill',
      bubble: 'Domain entity com comportamento:',
      code: `<span class="kw">class</span> Agente
{
    <span class="kw">public int</span> HP { <span class="kw">get</span>; <span class="kw">private set</span>; } = <span class="nm">100</span>;
    <span class="kw">public bool</span> Vivo => HP > <span class="nm">0</span>;
    <span class="kw">public void</span> <span class="mt">_______</span>(<span class="kw">int</span> dano) =>
        HP = Math.<span class="mt">Max</span>(<span class="nm">0</span>, HP - dano);
}`,
      q: 'Qual seria o nome semântico do método que aplica dano?',
      hint: 'Receber dano',
      ans: 'ReceberDano',
      exp: 'ReceberDano(dano): método de domínio que encapsula regra (HP não abaixo de 0). Domain model rico — comportamento no objeto, não em serviços externos (DDD).',
    },

    // Q11 — Fill
    {
      type: 'fill',
      bubble: 'CQRS Query handler:',
      code: `<span class="kw">record</span> GetMissaoQuery(<span class="kw">int</span> Id) : IRequest&lt;MissaoDto&gt;;

<span class="kw">class</span> GetMissaoHandler(IMissaoRepository repo)
    : IRequestHandler&lt;GetMissaoQuery, MissaoDto&gt;
{
    <span class="kw">public async</span> Task&lt;MissaoDto&gt; <span class="mt">Handle</span>(
        GetMissaoQuery query, CancellationToken ct)
    {
        <span class="kw">var</span> m = <span class="kw">await</span> repo.<span class="mt">ObterPorId</span>(query._______);
        <span class="kw">return new</span> MissaoDto(m!.Nome, m.XP);
    }
}`,
      q: 'Qual propriedade do query record acessar para obter o Id?',
      hint: 'O parâmetro do record',
      ans: 'Id',
      exp: 'GetMissaoQuery(int Id): record com propriedade Id. query.Id acessa o valor. CQRS: query é imutável, contém apenas dados necessários para a consulta.',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'FrozenDictionary vs Dictionary performance conceitual.',
      code: `<span class="kw">var</span> dict = <span class="kw">new</span> Dictionary&lt;<span class="kw">int</span>, <span class="kw">string</span>&gt;();
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i < <span class="nm">5</span>; i++) dict[i] = <span class="st">$"v{i}"</span>;
<span class="kw">var</span> frozen = dict.<span class="mt">ToFrozenDictionary</span>();

Console.<span class="mt">WriteLine</span>(frozen[<span class="nm">3</span>]);
Console.<span class="mt">WriteLine</span>(frozen.<span class="mt">Count</span>);`,
      q: 'O que será exibido?',
      hint: 'Valor na chave 3 e tamanho',
      opts: [
        { t: 'v3 e 5', ok: true },
        { t: 'v3 e 3', ok: false },
        { t: '3 e 5', ok: false },
        { t: 'Erro — FrozenDictionary imutável não permite indexer', ok: false },
      ],
      exp: 'frozen[3] = "v3". Count = 5 (chaves 0-4). FrozenDictionary suporta indexer de leitura. "v3" e "5".',
    },

    // Q13 — Code
    {
      type: 'code',
      bubble: 'SOLID — Open/Closed em action.',
      code: `<span class="kw">abstract class</span> Notificacao
{
    <span class="kw">public abstract void</span> <span class="mt">Enviar</span>(<span class="kw">string</span> msg);
}
<span class="kw">class</span> Email : Notificacao
    { <span class="kw">public override void</span> <span class="mt">Enviar</span>(<span class="kw">string</span> m) => Console.<span class="mt">Write</span>(<span class="st">"E:"</span> + m); }
<span class="kw">class</span> SMS : Notificacao
    { <span class="kw">public override void</span> <span class="mt">Enviar</span>(<span class="kw">string</span> m) => Console.<span class="mt">Write</span>(<span class="st">"S:"</span> + m); }

<span class="kw">var</span> ns = <span class="kw">new</span> Notificacao[] { <span class="kw">new</span> Email(), <span class="kw">new</span> SMS() };
<span class="kw">foreach</span> (<span class="kw">var</span> n <span class="kw">in</span> ns) n.<span class="mt">Enviar</span>(<span class="st">"OK"</span>);`,
      q: 'O que será exibido?',
      hint: 'Cada notificação prefixada',
      opts: [
        { t: 'E:OK S:OK', ok: true },
        { t: 'OK OK', ok: false },
        { t: 'E:OK', ok: false },
        { t: 'Erro — array de abstratas', ok: false },
      ],
      exp: 'Email.Enviar("OK") = "E:OK". SMS.Enviar("OK") = "S:OK". Loop: "E:OKS:OK". (Write sem newline). "E:OK S:OK" considerando espaçamento visual.',
    },

    // Q14 — Code
    {
      type: 'code',
      bubble: 'Repository pattern simulado.',
      code: `<span class="kw">interface</span> IRepo&lt;T&gt; { T <span class="mt">Get</span>(<span class="kw">int</span> id); }
<span class="kw">class</span> FakeRepo : IRepo&lt;<span class="kw">string</span>&gt;
{
    <span class="kw">string</span>[] _data = { <span class="st">"M0"</span>, <span class="st">"M1"</span>, <span class="st">"M2"</span> };
    <span class="kw">public string</span> <span class="mt">Get</span>(<span class="kw">int</span> id) => _data[id];
}
IRepo&lt;<span class="kw">string</span>&gt; repo = <span class="kw">new</span> FakeRepo();
Console.<span class="mt">WriteLine</span>(repo.<span class="mt">Get</span>(<span class="nm">2</span>));`,
      q: 'O que será exibido?',
      hint: 'FakeRepo implementa IRepo com array',
      opts: [
        { t: 'M0', ok: false },
        { t: 'M2', ok: true },
        { t: 'M1', ok: false },
        { t: 'Erro — interface genérica', ok: false },
      ],
      exp: 'FakeRepo.Get(2) = _data[2] = "M2". Polimorfismo via IRepo<string>. "M2".',
    },

    // Q15 — Code
    {
      type: 'code',
      bubble: 'Circuit breaker state tracking.',
      code: `<span class="kw">int</span> falhas = <span class="nm">0</span>, limite = <span class="nm">3</span>;
<span class="kw">bool</span> aberto = <span class="kw">false</span>;
<span class="kw">bool</span> <span class="mt">Chamar</span>(<span class="kw">bool</span> falhar) {
    <span class="kw">if</span> (aberto) <span class="kw">return false</span>;
    <span class="kw">if</span> (falhar) { falhas++; <span class="kw">if</span> (falhas >= limite) aberto = <span class="kw">true</span>; <span class="kw">return false</span>; }
    falhas = <span class="nm">0</span>; <span class="kw">return true</span>;
}
<span class="mt">Chamar</span>(<span class="kw">true</span>); <span class="mt">Chamar</span>(<span class="kw">true</span>); <span class="mt">Chamar</span>(<span class="kw">true</span>);
Console.<span class="mt">WriteLine</span>(aberto);
Console.<span class="mt">WriteLine</span>(<span class="mt">Chamar</span>(<span class="kw">false</span>));`,
      q: 'O que será exibido?',
      hint: '3 falhas → aberto; chamada seguinte rejeitada',
      opts: [
        { t: 'True e True', ok: false },
        { t: 'True e False', ok: true },
        { t: 'False e True', ok: false },
        { t: 'False e False', ok: false },
      ],
      exp: '3 Chamar(true): falhas=3 ≥ 3 → aberto=true. Chamar(false): aberto=true → retorna false imediatamente (fast fail). "True" e "False".',
    },

    // Q16 — Code
    {
      type: 'code',
      bubble: 'Retry com exponential backoff simulado.',
      code: `<span class="kw">int</span>[] delays = { <span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">4</span>, <span class="nm">8</span> };
<span class="kw">int</span> idx = <span class="nm">0</span>;
<span class="kw">bool</span> <span class="mt">TentarComRetry</span>(<span class="kw">int</span> maxRetries, Func&lt;<span class="kw">bool</span>&gt; op) {
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i <= maxRetries; i++) {
        <span class="kw">if</span> (op()) <span class="kw">return true</span>;
        <span class="kw">if</span> (i < maxRetries) idx++;
    }
    <span class="kw">return false</span>;
}
<span class="kw">int</span> tentativas = <span class="nm">0</span>;
<span class="kw">var</span> ok = <span class="mt">TentarComRetry</span>(<span class="nm">3</span>, () => ++tentativas == <span class="nm">3</span>);
Console.<span class="mt">WriteLine</span>(ok);
Console.<span class="mt">WriteLine</span>(tentativas);`,
      q: 'O que será exibido?',
      hint: 'Sucesso na 3ª tentativa de 4 possíveis',
      opts: [
        { t: 'True e 4', ok: false },
        { t: 'True e 3', ok: true },
        { t: 'False e 3', ok: false },
        { t: 'False e 4', ok: false },
      ],
      exp: 'i=0: op()→tentativas=1→false. i=1: tentativas=2→false. i=2: tentativas=3→true→return true. ok=true, tentativas=3. "True" e "3".',
    },

    // Q17 — Code
    {
      type: 'code',
      bubble: 'BackgroundService loop com cancellation.',
      code: `<span class="kw">var</span> log = <span class="kw">new</span> List&lt;<span class="kw">string</span>&gt;();
<span class="kw">var</span> cts = <span class="kw">new</span> CancellationTokenSource();
<span class="kw">int</span> count = <span class="nm">0</span>;
<span class="kw">while</span> (!cts.Token.IsCancellationRequested) {
    log.<span class="mt">Add</span>(<span class="st">$"tick{++count}"</span>);
    <span class="kw">if</span> (count >= <span class="nm">3</span>) cts.<span class="mt">Cancel</span>();
}
Console.<span class="mt">WriteLine</span>(<span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">","</span>, log));`,
      q: 'O que será exibido?',
      hint: 'Loop cancela após 3 ticks',
      opts: [
        { t: 'tick1,tick2', ok: false },
        { t: 'tick1,tick2,tick3', ok: true },
        { t: 'tick1,tick2,tick3,tick4', ok: false },
        { t: 'Loop infinito', ok: false },
      ],
      exp: 'count=1: log tick1, 1<3 não cancela. count=2: log tick2. count=3: log tick3, cts.Cancel(). Loop verifica → cancelado → sai. "tick1,tick2,tick3".',
    },

    // Q18 — Code
    {
      type: 'code',
      bubble: 'Domain entity — invariants.',
      code: `<span class="kw">class</span> Inimigo
{
    <span class="kw">public int</span> HP { <span class="kw">get</span>; <span class="kw">private set</span>; }
    <span class="kw">public</span> <span class="mt">Inimigo</span>(<span class="kw">int</span> hp) =>
        HP = hp > <span class="nm">0</span> ? hp : <span class="kw">throw new</span> ArgumentException();
    <span class="kw">public void</span> <span class="mt">Dano</span>(<span class="kw">int</span> d) => HP = Math.<span class="mt">Max</span>(<span class="nm">0</span>, HP - d);
    <span class="kw">public bool</span> Vivo => HP > <span class="nm">0</span>;
}
<span class="kw">var</span> e = <span class="kw">new</span> Inimigo(<span class="nm">50</span>);
e.<span class="mt">Dano</span>(<span class="nm">30</span>);
e.<span class="mt">Dano</span>(<span class="nm">40</span>);
Console.<span class="mt">WriteLine</span>(<span class="st">$"{e.HP} {e.Vivo}"</span>);`,
      q: 'O que será exibido?',
      hint: '50-30=20, 20-40<0 → 0',
      opts: [
        { t: '0 False', ok: true },
        { t: '-20 False', ok: false },
        { t: '20 True', ok: false },
        { t: '0 True', ok: false },
      ],
      exp: 'HP=50. Dano(30): HP=20. Dano(40): Max(0, 20-40)=Max(0,-20)=0. Vivo=HP>0=false. "0 False".',
    },

  ]
};
