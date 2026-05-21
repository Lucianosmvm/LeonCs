// ══════════════════════════════════════════════════════
// EPÍLOGO — O LEGADO
// MISSÃO 97 — TRANSMISSÃO FINAL
// Tema: gRPC, Protocol Buffers, streaming APIs
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_96 = {
  id: 96,
  title: "MISSÃO 97 — TRANSMISSÃO FINAL",
  icon: '📡',
  free: false,
  desc: "A última transmissão antes do silêncio rádio. gRPC é o protocolo de alta performance que liga os agentes de campo — contract-first, streaming bidirecional, eficiente além do REST tradicional.",
  objs: [
    "Entender gRPC e Protocol Buffers conceitos",
    "Comparar gRPC com REST/HTTP para casos de uso",
    "Usar gRPC streaming em ASP.NET Core",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>gRPC</strong> usa <strong>Protocol Buffers</strong> (Protobuf) para serialização binária eficiente — menor payload que JSON, mais rápido para serializar/deserializar.',
      q: 'Qual a principal vantagem de Protobuf sobre JSON?',
      hint: 'Binário vs texto',
      opts: [
        { t: 'Protobuf é mais legível que JSON', ok: false },
        { t: 'Protobuf: serialização binária — menor tamanho, mais rápido que JSON texto', ok: true },
        { t: 'Protobuf suporta mais tipos de dados', ok: false },
        { t: 'Protobuf é apenas para microserviços', ok: false },
      ],
      exp: 'Protobuf: binário compacto (campo = número, não nome string). ~3-10x menor que JSON equivalente. Serialização/deserialização muito mais rápida. Tradeoff: não legível para humanos.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'gRPC suporta 4 tipos de comunicação: Unary (request/response), Server streaming, Client streaming e Bidirectional streaming.',
      q: 'Qual tipo de gRPC usar para um feed de dados em tempo real do servidor para o cliente?',
      hint: 'Servidor envia múltiplos dados',
      opts: [
        { t: 'Unary — request/response', ok: false },
        { t: 'Server streaming — servidor envia stream de responses para uma request do cliente', ok: true },
        { t: 'Client streaming — cliente envia stream', ok: false },
        { t: 'Apenas REST suporta streaming', ok: false },
      ],
      exp: 'Server streaming: cliente faz uma request, servidor retorna IAsyncEnumerable ou stream de responses. Ideal para feeds de preços, notificações, live data.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'gRPC usa HTTP/2 — multiplexing, header compression, binary framing. REST típico usa HTTP/1.1 com overhead de headers de texto.',
      q: 'Qual cenário favorece gRPC sobre REST?',
      hint: 'Comunicação interna de alta performance',
      opts: [
        { t: 'APIs públicas consumidas por browsers', ok: false },
        { t: 'Comunicação internal service-to-service com alta performance e tipos fortemente definidos', ok: true },
        { t: 'APIs mobile com JSON', ok: false },
        { t: 'gRPC é sempre melhor que REST', ok: false },
      ],
      exp: 'gRPC: melhor para microserviços internos — eficiente, tipado, bidirecional. REST: melhor para APIs públicas (browser suporte universal, JSON legível). Cada um tem seu lugar.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<strong>proto file</strong> define contratos de serviço — mensagens e RPCs. O compilador <code>protoc</code> (ou MSBuild) gera classes C# a partir do .proto.',
      q: 'Qual a vantagem do design "contract-first" do gRPC com .proto files?',
      hint: 'Contrato antes da implementação',
      opts: [
        { t: 'Apenas uma forma de definir APIs', ok: false },
        { t: 'Contrato explícito, versionado, compartilhado — clientes gerados automaticamente em múltiplas linguagens', ok: true },
        { t: 'Proto files substituem documentação', ok: false },
        { t: 'Contract-first é mais lento de desenvolver sempre', ok: false },
      ],
      exp: '.proto define: message User { int32 id = 1; string name = 2; } service UserService { rpc Get(GetRequest) returns (User); }. Gera C#, Go, Python, Java...',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Definindo serviço gRPC unary em .proto (conceitual):',
      code: `<span class="cm">// arquivo: missao.proto</span>
<span class="kw">syntax</span> = <span class="st">"proto3"</span>;
<span class="kw">service</span> MissaoService {
    <span class="kw">_______</span> ObterMissao(MissaoRequest) <span class="kw">returns</span> (MissaoResponse);
}`,
      q: 'Qual palavra-chave define um método RPC no proto file?',
      hint: 'Remote Procedure Call',
      ans: 'rpc',
      exp: '"rpc NomeMetodo(Request) returns (Response)": define um Remote Procedure Call unary. Para streaming: "returns (stream Response)" ou "rpc(stream Request) returns (Response)".',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Configurando gRPC em ASP.NET Core:',
      code: `builder.Services.<span class="mt">AddGrpc</span>();
<span class="kw">var</span> app = builder.<span class="mt">Build</span>();
app.<span class="mt">_______</span>&lt;MissaoServiceImpl&gt;();
app.<span class="mt">Run</span>();`,
      q: 'Qual método registra o serviço gRPC no pipeline?',
      hint: 'Map Grpc Service',
      ans: 'MapGrpcService',
      exp: 'app.MapGrpcService<T>(): registra implementação do serviço gRPC. AddGrpc() registra serviços. HTTPS obrigatório para gRPC (HTTP/2).',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Server streaming em gRPC handler:',
      code: `<span class="kw">public override async</span> Task <span class="mt">StreamMissoes</span>(
    Empty req, IServerStreamWriter&lt;MissaoResponse&gt; stream,
    ServerCallContext ctx)
{
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i < <span class="nm">3</span>; i++)
        <span class="kw">await</span> stream.<span class="mt">_______</span>(<span class="kw">new</span> MissaoResponse { Id = i });
}`,
      q: 'Qual método escreve um item no stream de resposta do servidor?',
      hint: 'Write Async',
      ans: 'WriteAsync',
      exp: 'stream.WriteAsync(response): envia um item ao cliente. O cliente recebe via IAsyncEnumerable ao chamar o server streaming RPC.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'Simulating gRPC response message.',
      code: `<span class="kw">record</span> MissaoResponse(<span class="kw">int</span> Id, <span class="kw">string</span> Nome, <span class="kw">int</span> XP);
<span class="kw">var</span> resps = <span class="kw">new</span>[] {
    <span class="kw">new</span> MissaoResponse(<span class="nm">1</span>, <span class="st">"Alpha"</span>, <span class="nm">100</span>),
    <span class="kw">new</span> MissaoResponse(<span class="nm">2</span>, <span class="st">"Beta"</span>, <span class="nm">200</span>)
};
<span class="kw">int</span> totalXP = resps.<span class="mt">Sum</span>(r => r.XP);
Console.<span class="mt">WriteLine</span>(totalXP);`,
      q: 'O que será exibido?',
      hint: 'Soma de XP das respostas',
      opts: [
        { t: '100', ok: false },
        { t: '300', ok: true },
        { t: '200', ok: false },
        { t: '2', ok: false },
      ],
      exp: 'resps.Sum(r => r.XP) = 100 + 200 = 300. "300".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Async streaming com IAsyncEnumerable.',
      code: `<span class="kw">async</span> IAsyncEnumerable&lt;<span class="kw">int</span>&gt; <span class="mt">GrpcStream</span>()
{
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">1</span>; i <= <span class="nm">3</span>; i++)
    {
        <span class="kw">await</span> Task.<span class="mt">Delay</span>(<span class="nm">1</span>);
        <span class="kw">yield return</span> i * <span class="nm">10</span>;
    }
}
<span class="kw">int</span> soma = <span class="nm">0</span>;
<span class="kw">await foreach</span> (<span class="kw">var</span> v <span class="kw">in</span> <span class="mt">GrpcStream</span>())
    soma += v;
Console.<span class="mt">WriteLine</span>(soma);`,
      q: 'O que será exibido?',
      hint: '10+20+30',
      opts: [
        { t: '30', ok: false },
        { t: '60', ok: true },
        { t: '6', ok: false },
        { t: 'Erro — IAsyncEnumerable com yield', ok: false },
      ],
      exp: 'GrpcStream: 10, 20, 30. soma = 60. IAsyncEnumerable com yield return = streaming assíncrono. "60".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Protobuf field numbers (conceitual).',
      code: `<span class="cm">// Em protobuf: message Missao { int32 id = 1; string nome = 2; }</span>
<span class="cm">// Field numbers identificam campos no wire format</span>
<span class="cm">// Simulando com record:</span>
<span class="kw">record</span> Missao(<span class="kw">int</span> Id, <span class="kw">string</span> Nome);
<span class="kw">var</span> m = <span class="kw">new</span> Missao(<span class="nm">1</span>, <span class="st">"Infiltrar"</span>);
Console.<span class="mt">WriteLine</span>(<span class="st">$"id={m.Id} nome={m.Nome}"</span>);`,
      q: 'O que será exibido?',
      hint: 'Formato de interpolação',
      opts: [
        { t: 'id=1 nome=Infiltrar', ok: true },
        { t: '1 Infiltrar', ok: false },
        { t: 'Missao { Id = 1, Nome = Infiltrar }', ok: false },
        { t: 'Erro — record com interpolação', ok: false },
      ],
      exp: 'm.Id=1, m.Nome="Infiltrar". "id=1 nome=Infiltrar".',
    },

  ]
};
