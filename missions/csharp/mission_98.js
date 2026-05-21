// ══════════════════════════════════════════════════════
// EPÍLOGO — O LEGADO
// MISSÃO 99 — O ÚLTIMO BOSS ⚔️
// Tema: Boss Final — integração de todos os conceitos avançados: gRPC, Docker, Resilience, Architecture
// Tipo: Boss (18 questões) | 6 MC → 5 Fill → 7 Code
// ══════════════════════════════════════════════════════

const MISSION_98 = {
  id: 98,
  title: "MISSÃO 99 — O ÚLTIMO BOSS ⚔️",
  icon: '💀',
  free: false,
  desc: "Saddler. O chefe final. Este boss reúne TODOS os conceitos do Epílogo: gRPC, Docker, Clean Architecture, resiliência, Rx.NET, metaprogramação e deployment. O teste definitivo antes da vitória. Leon está pronto.",
  objs: [
    "Consolidar todos os conceitos do Epílogo",
    "Integrar arquitetura, deployment e comunicação avançada",
    "Demonstrar maestria completa de C# moderno",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Revisão: gRPC vs REST — escolha certa para cada cenário.',
      q: 'Um sistema de microserviços internos precisa de comunicação bidirecional em tempo real com baixa latência. Qual protocolo escolher?',
      hint: 'Streaming bidirecional',
      opts: [
        { t: 'REST com polling a cada segundo', ok: false },
        { t: 'gRPC com streaming bidirecional — HTTP/2, binário, baixa latência', ok: true },
        { t: 'WebSockets com JSON', ok: false },
        { t: 'REST sempre é suficiente', ok: false },
      ],
      exp: 'gRPC bidirecional: cliente e servidor enviam streams simultâneos. HTTP/2 multiplexing. Protobuf binário. Para APIs públicas de browser: REST ainda é melhor.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Revisão: Clean Architecture — Dependency Rule.',
      q: 'Na Clean Architecture, qual é a regra fundamental de dependências entre camadas?',
      hint: 'Dependências apontam para dentro',
      opts: [
        { t: 'Infrastructure pode depender de Domain', ok: false },
        { t: 'Dependências sempre apontam para o centro — Domain não conhece Infrastructure', ok: true },
        { t: 'Application pode depender de Infrastructure diretamente', ok: false },
        { t: 'Todas as camadas são iguais — sem hierarquia', ok: false },
      ],
      exp: 'Dependency Rule: Domain (centro) → Application → Infrastructure (periferia). Domain nunca referencia Infrastructure. Interfaces em Domain, implementações em Infrastructure.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Revisão: Docker multi-stage e tamanho de imagem.',
      q: 'Qual imagem base Microsoft é mais adequada para rodar (não buildar) uma API ASP.NET Core em produção?',
      hint: 'Runtime mínimo',
      opts: [
        { t: 'mcr.microsoft.com/dotnet/sdk:8.0', ok: false },
        { t: 'mcr.microsoft.com/dotnet/aspnet:8.0 — runtime ASP.NET, sem SDK, imagem mínima', ok: true },
        { t: 'ubuntu:22.04 com .NET instalado manualmente', ok: false },
        { t: 'mcr.microsoft.com/dotnet/runtime:8.0', ok: false },
      ],
      exp: 'aspnet:8.0: runtime ASP.NET (~200MB). sdk:8.0: SDK completo (~700MB). runtime:8.0: apenas runtime .NET sem libs ASP.NET. Para APIs web: aspnet é o correto.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Revisão: Polly Circuit Breaker.',
      q: 'Qual o estado do Circuit Breaker quando ele está testando se o serviço se recuperou após uma falha?',
      hint: 'Permite uma tentativa',
      opts: [
        { t: 'Closed — operação normal', ok: false },
        { t: 'Half-Open — permite uma requisição de teste para verificar recuperação', ok: true },
        { t: 'Open — bloqueia tudo', ok: false },
        { t: 'Reset — estado inicial', ok: false },
      ],
      exp: 'Circuit Breaker: Closed (normal) → Open (falhas acima do threshold, bloqueia) → Half-Open (aguarda tempo, testa uma req) → Closed se sucesso, Open se falha.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Revisão: IAsyncEnumerable e streaming.',
      q: 'Qual a diferença entre retornar IEnumerable<T> e IAsyncEnumerable<T> em uma API?',
      hint: 'Bloqueio vs assíncrono',
      opts: [
        { t: 'Sem diferença — compilador converte automaticamente', ok: false },
        { t: 'IAsyncEnumerable permite streaming item a item sem bloquear thread — ideal para grandes datasets', ok: true },
        { t: 'IEnumerable é mais rápido para datasets grandes', ok: false },
        { t: 'IAsyncEnumerable só funciona com gRPC', ok: false },
      ],
      exp: 'IAsyncEnumerable: yield return com await — items chegam ao cliente progressivamente. IEnumerable síncrono: carrega tudo na memória antes de retornar. ASP.NET Core suporta streaming de IAsyncEnumerable.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Revisão: Span<T> e performance.',
      q: 'Em qual situação Span<T> NÃO pode ser usado?',
      hint: 'Ref struct limitations',
      opts: [
        { t: 'Como parâmetro de método', ok: false },
        { t: 'Como variável local no método', ok: false },
        { t: 'Como campo de uma classe (não ref struct)', ok: true },
        { t: 'Como retorno de método', ok: false },
      ],
      exp: 'Span<T> é ref struct — só pode existir na stack. Não pode ser campo de classe (heap), boxed, capturado em lambda async, ou usado em código async. Memory<T> substitui nesses casos.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Pipeline de resiliência com Microsoft.Extensions.Resilience:',
      code: `builder.Services.<span class="mt">AddHttpClient</span>(<span class="st">"api"</span>)
    .<span class="mt">_______</span>();`,
      q: 'Qual método adiciona retry, circuit breaker e timeout ao HttpClient automaticamente?',
      hint: 'Standard Resilience Handler',
      ans: 'AddStandardResilienceHandler',
      exp: 'AddStandardResilienceHandler(): configura automaticamente retry (exponential backoff), circuit breaker, timeout e hedging. Integra com ILogger e telemetria. Polly v8 under the hood.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Proto file — definindo streaming server-side:',
      code: `<span class="kw">service</span> MissaoService {
    <span class="kw">rpc</span> StreamMissoes(Empty) <span class="kw">returns</span> (<span class="kw">_______</span> MissaoResponse);
}`,
      q: 'Qual palavra-chave indica server streaming no .proto?',
      hint: 'stream',
      ans: 'stream',
      exp: '"returns (stream Response)": server streaming — servidor envia múltiplas respostas. "rpc(stream Request)": client streaming. "rpc(stream Req) returns (stream Resp)": bidirecional.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Kubernetes Deployment — especificando imagem:',
      code: `<span class="kw">spec:</span>
  <span class="kw">containers:</span>
  - <span class="kw">name:</span> leon-api
    <span class="kw">_______:</span> meuregistry/leon-api:<span class="nm">1.0</span>
    <span class="kw">ports:</span>
    - <span class="kw">containerPort:</span> <span class="nm">8080</span>`,
      q: 'Qual campo do YAML Kubernetes especifica a imagem do container?',
      hint: 'image',
      ans: 'image',
      exp: 'image: registry/nome:tag. Se sem registry: Docker Hub. latest tag evitada em prod. Kubernetes faz pull da imagem no registry configurado com ImagePullSecrets.',
    },

    // Q10 — Fill
    {
      type: 'fill',
      bubble: 'Aggregate Root — domain event:',
      code: `<span class="kw">class</span> Missao
{
    <span class="kw">private readonly</span> List&lt;IDomainEvent&gt; _events = <span class="kw">new</span>();
    <span class="kw">public</span> IReadOnlyList&lt;IDomainEvent&gt; Events => _events;

    <span class="kw">public void</span> <span class="mt">Completar</span>() {
        Status = <span class="st">"Completa"</span>;
        _events.<span class="mt">_______</span>(<span class="kw">new</span> MissaoCompletadaEvent(Id));
    }
}`,
      q: 'Qual método da lista adiciona um domain event?',
      hint: 'Add',
      ans: 'Add',
      exp: '_events.Add(event): coleta domain events. Após salvar no repositório, o handler despacha os eventos. Domain events = fatos que aconteceram no domínio. Desacopla side effects.',
    },

    // Q11 — Fill
    {
      type: 'fill',
      bubble: 'Observable com timeout:',
      code: `<span class="kw">var</span> obs = Observable.<span class="mt">Timer</span>(TimeSpan.<span class="mt">FromSeconds</span>(<span class="nm">10</span>));
<span class="kw">var</span> withTimeout = obs
    .<span class="mt">_______</span>(TimeSpan.<span class="mt">FromSeconds</span>(<span class="nm">2</span>));`,
      q: 'Qual operador Rx lança TimeoutException se o observable não emite dentro do prazo?',
      hint: 'Timeout',
      ans: 'Timeout',
      exp: '.Timeout(TimeSpan): se observable não emitir dentro do prazo, lança TimeoutException. Combina com .Catch() para tratar. Útil para chamadas a serviços externos em Rx pipelines.',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'Clean Architecture — testando use case isolado.',
      code: `<span class="kw">interface</span> IMissaoRepo { <span class="kw">int</span> <span class="mt">Contar</span>(); }
<span class="kw">class</span> FakeRepo : IMissaoRepo
{
    <span class="kw">public int</span> <span class="mt">Contar</span>() => <span class="nm">42</span>;
}
<span class="kw">class</span> MissaoUseCase
{
    <span class="kw">readonly</span> IMissaoRepo _r;
    <span class="kw">public</span> MissaoUseCase(IMissaoRepo r) => _r = r;
    <span class="kw">public string</span> <span class="mt">Executar</span>() => <span class="st">$"Total: {_r.Contar()}"</span>;
}
<span class="kw">var</span> uc = <span class="kw">new</span> MissaoUseCase(<span class="kw">new</span> FakeRepo());
Console.<span class="mt">WriteLine</span>(uc.<span class="mt">Executar</span>());`,
      q: 'O que será exibido?',
      hint: 'FakeRepo.Contar() = 42',
      opts: [
        { t: 'Total: 0', ok: false },
        { t: 'Total: 42', ok: true },
        { t: 'Erro — interface não pode ser mockada assim', ok: false },
        { t: '42', ok: false },
      ],
      exp: 'FakeRepo.Contar() = 42. uc.Executar() = "Total: 42". Clean Architecture: Use Case depende de abstração (IMissaoRepo), não da implementação real — testável sem banco.',
    },

    // Q13 — Code
    {
      type: 'code',
      bubble: 'gRPC response simulation com record.',
      code: `<span class="kw">record</span> GrpcResp(<span class="kw">int</span> Code, <span class="kw">string</span> Msg);

<span class="kw">var</span> resps = <span class="kw">new</span>[] {
    <span class="kw">new</span> GrpcResp(<span class="nm">200</span>, <span class="st">"OK"</span>),
    <span class="kw">new</span> GrpcResp(<span class="nm">404</span>, <span class="st">"NotFound"</span>),
    <span class="kw">new</span> GrpcResp(<span class="nm">200</span>, <span class="st">"OK"</span>),
};
<span class="kw">int</span> ok = resps.<span class="mt">Count</span>(r => r.Code == <span class="nm">200</span>);
Console.<span class="mt">WriteLine</span>(ok);`,
      q: 'O que será exibido?',
      hint: 'Conta respostas com Code = 200',
      opts: [
        { t: '1', ok: false },
        { t: '2', ok: true },
        { t: '3', ok: false },
        { t: '200', ok: false },
      ],
      exp: 'resps com Code==200: primeiro e terceiro. Count = 2. "2".',
    },

    // Q14 — Code
    {
      type: 'code',
      bubble: 'Rx.NET — CombineLatest de dois streams.',
      code: `<span class="kw">var</span> s1 = <span class="kw">new</span> BehaviorSubject&lt;<span class="kw">int</span>&gt;(<span class="nm">1</span>);
<span class="kw">var</span> s2 = <span class="kw">new</span> BehaviorSubject&lt;<span class="kw">int</span>&gt;(<span class="nm">10</span>);
<span class="kw">var</span> log = <span class="kw">new</span> List&lt;<span class="kw">int</span>&gt;();
s1.<span class="mt">CombineLatest</span>(s2, (a, b) => a + b)
  .<span class="mt">Subscribe</span>(v => log.<span class="mt">Add</span>(v));
s1.<span class="mt">OnNext</span>(<span class="nm">2</span>);
s2.<span class="mt">OnNext</span>(<span class="nm">20</span>);
Console.<span class="mt">WriteLine</span>(<span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">","</span>, log));`,
      q: 'O que será exibido?',
      hint: 'BehaviorSubject emite valor inicial + cada OnNext',
      opts: [
        { t: '11,12,22', ok: true },
        { t: '11,30', ok: false },
        { t: '2,20', ok: false },
        { t: '12,22', ok: false },
      ],
      exp: 'BehaviorSubject emite imediatamente ao subscrever: s1=1, s2=10 → 11. s1.OnNext(2): s1=2, s2=10 → 12. s2.OnNext(20): s1=2, s2=20 → 22. log={11,12,22}.',
    },

    // Q15 — Code
    {
      type: 'code',
      bubble: 'NativeMemory — alocação e escrita manual.',
      code: `<span class="kw">unsafe</span>
{
    <span class="kw">byte</span>* buf = (<span class="kw">byte</span>*)NativeMemory.<span class="mt">Alloc</span>(<span class="nm">4</span>);
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i < <span class="nm">4</span>; i++) buf[i] = (<span class="kw">byte</span>)(i + <span class="nm">1</span>);
    <span class="kw">int</span> soma = <span class="nm">0</span>;
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i < <span class="nm">4</span>; i++) soma += buf[i];
    NativeMemory.<span class="mt">Free</span>(buf);
    Console.<span class="mt">WriteLine</span>(soma);
}`,
      q: 'O que será exibido?',
      hint: '1+2+3+4',
      opts: [
        { t: '4', ok: false },
        { t: '10', ok: true },
        { t: '0', ok: false },
        { t: 'Erro — unsafe requer pragma', ok: false },
      ],
      exp: 'buf: [1,2,3,4]. soma = 1+2+3+4 = 10. NativeMemory.Free libera. "10". AllowUnsafeBlocks=true no .csproj necessário.',
    },

    // Q16 — Code
    {
      type: 'code',
      bubble: 'CSharpScript — avaliação em runtime (conceitual).',
      code: `<span class="cm">// Simulando resultado de CSharpScript.RunAsync</span>
<span class="kw">string</span>[] scripts = {
    <span class="st">"2 + 2"</span>,     <span class="cm">// resultado: 4</span>
    <span class="st">"3 * 3"</span>,     <span class="cm">// resultado: 9</span>
    <span class="st">"10 - 1"</span>     <span class="cm">// resultado: 9</span>
};
<span class="kw">int</span>[] resultados = { <span class="nm">4</span>, <span class="nm">9</span>, <span class="nm">9</span> };
<span class="kw">int</span> distintos = resultados.<span class="mt">Distinct</span>().<span class="mt">Count</span>();
Console.<span class="mt">WriteLine</span>(distintos);`,
      q: 'O que será exibido?',
      hint: 'Quantos valores únicos em {4, 9, 9}',
      opts: [
        { t: '3', ok: false },
        { t: '2', ok: true },
        { t: '9', ok: false },
        { t: '4', ok: false },
      ],
      exp: 'resultados.Distinct(): {4, 9} — 9 aparece duas vezes, conta uma. Count() = 2. "2".',
    },

    // Q17 — Code
    {
      type: 'code',
      bubble: 'Polly v8 — ResiliencePipeline manual.',
      code: `<span class="kw">int</span> chamadas = <span class="nm">0</span>;
<span class="kw">int</span> limite = <span class="nm">3</span>;
<span class="kw">bool</span> <span class="mt">Chamar</span>()
{
    chamadas++;
    <span class="kw">if</span> (chamadas < limite) <span class="kw">throw new</span> Exception(<span class="st">"Falha"</span>);
    <span class="kw">return true</span>;
}
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i < <span class="nm">5</span>; i++) {
    <span class="kw">try</span> { <span class="kw">if</span> (<span class="mt">Chamar</span>()) <span class="kw">break</span>; }
    <span class="kw">catch</span> { }
}
Console.<span class="mt">WriteLine</span>(chamadas);`,
      q: 'O que será exibido?',
      hint: 'Quantas chamadas até sucesso',
      opts: [
        { t: '2', ok: false },
        { t: '3', ok: true },
        { t: '5', ok: false },
        { t: '1', ok: false },
      ],
      exp: 'chamadas=1: <3 → lança. chamadas=2: <3 → lança. chamadas=3: >=3 → retorna true → break. chamadas = 3. "3".',
    },

    // Q18 — Code
    {
      type: 'code',
      bubble: 'Integrando gRPC response + LINQ — cenário realista.',
      code: `<span class="kw">record</span> Agente(<span class="kw">string</span> Nome, <span class="kw">int</span> Nivel, <span class="kw">bool</span> Ativo);
<span class="kw">var</span> agentes = <span class="kw">new</span>[] {
    <span class="kw">new</span> Agente(<span class="st">"Leon"</span>, <span class="nm">10</span>, <span class="kw">true</span>),
    <span class="kw">new</span> Agente(<span class="st">"Ada"</span>, <span class="nm">9</span>, <span class="kw">true</span>),
    <span class="kw">new</span> Agente(<span class="st">"Krauser"</span>, <span class="nm">8</span>, <span class="kw">false</span>),
};
<span class="kw">var</span> top = agentes
    .<span class="mt">Where</span>(a => a.Ativo)
    .<span class="mt">OrderByDescending</span>(a => a.Nivel)
    .<span class="mt">First</span>();
Console.<span class="mt">WriteLine</span>(top.Nome);`,
      q: 'O que será exibido?',
      hint: 'Ativo=true, maior Nivel',
      opts: [
        { t: 'Ada', ok: false },
        { t: 'Leon', ok: true },
        { t: 'Krauser', ok: false },
        { t: 'Erro — múltiplos resultados', ok: false },
      ],
      exp: 'Filtra Ativo=true: Leon(10), Ada(9). OrderByDescending(Nivel): Leon primeiro. First() = Leon. "Leon".',
    },

  ]
};
