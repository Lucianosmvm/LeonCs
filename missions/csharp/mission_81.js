// ══════════════════════════════════════════════════════
// ACT VI — O CONFRONTO FINAL
// MISSÃO 82 — SISTEMA DE INJEÇÃO
// Tema: ASP.NET Core — Minimal API, endpoints, middleware
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_81 = {
  id: 81,
  title: "MISSÃO 82 — SISTEMA DE INJEÇÃO",
  icon: '💉',
  free: false,
  desc: "O vírus Los Iluminados precisou de um vetor de transmissão. ASP.NET Core Minimal API é o sistema de injeção moderno do .NET — endpoints enxutos, DI integrada, performance máxima.",
  objs: [
    "Criar endpoints com ASP.NET Core Minimal API",
    "Configurar middlewares e pipeline de request",
    "Usar injeção de dependência em handlers",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>Minimal API</strong> (ASP.NET Core 6+) usa <code>app.MapGet</code>, <code>MapPost</code> etc. para definir endpoints sem controllers — menos boilerplate, mais direto.',
      q: 'Qual a principal vantagem da Minimal API sobre Controllers tradicionais?',
      hint: 'Simplicidade e performance',
      opts: [
        { t: 'Minimal API suporta mais verbos HTTP', ok: false },
        { t: 'Menos código boilerplate — define endpoint como lambda; melhor para microserviços simples', ok: true },
        { t: 'Minimal API é mais segura', ok: false },
        { t: 'Minimal API é obrigatória no .NET 8+', ok: false },
      ],
      exp: 'Minimal API: app.MapGet("/", () => "Hello"). Controllers: classe com atributos, herança. Minimal = menos overhead, boa para microserviços. Controllers = melhor para APIs grandes.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<strong>Middleware</strong> é um componente do pipeline de request/response. Cada middleware pode processar a request, chamar o próximo middleware (next) e processar a response.',
      q: 'Qual é a ordem correta para middlewares em ASP.NET Core?',
      hint: 'Ordem de registro importa',
      opts: [
        { t: 'A ordem não importa — ASP.NET organiza automaticamente', ok: false },
        { t: 'A ordem de app.Use() define a ordem de execução — primeiro registrado = primeiro executado', ok: true },
        { t: 'Middlewares sempre executam em paralelo', ok: false },
        { t: 'Apenas o último middleware executa', ok: false },
      ],
      exp: 'Pipeline: request passa por cada middleware na ordem de registro. app.UseAuthentication() antes de app.UseAuthorization(). Ordem incorreta = bugs de segurança.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Em Minimal API, parâmetros de endpoints podem ser: route params (<code>{id}</code>), query string (<code>?page=1</code>), body (JSON), ou injeção de dependência.',
      q: 'Como o ASP.NET Core sabe que um parâmetro de endpoint vem do body JSON?',
      hint: '[FromBody] ou inferência de tipo complexo',
      opts: [
        { t: 'Sempre vem do body automaticamente', ok: false },
        { t: 'Tipos complexos (classe/record) são inferidos do body; primitivos do route/query string', ok: true },
        { t: 'Apenas com atributo [JsonBody]', ok: false },
        { t: 'Não é possível em Minimal API', ok: false },
      ],
      exp: 'Minimal API: primitivos (int, string) → route params ou query. Tipos complexos (record, class) → body JSON automaticamente. Pode usar [FromBody], [FromRoute], [FromQuery] explicitamente.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>Results.Ok()</code>, <code>Results.NotFound()</code>, <code>Results.Created()</code> — retornos padronizados em Minimal API que configuram status code e body automaticamente.',
      q: 'Qual método Results usar para retornar 201 Created com o objeto criado?',
      hint: 'Created com location',
      opts: [
        { t: 'Results.Ok(objeto)', ok: false },
        { t: 'Results.Created("/url", objeto)', ok: true },
        { t: 'Results.StatusCode(201)', ok: false },
        { t: 'Results.New(objeto)', ok: false },
      ],
      exp: 'Results.Created(uri, value): 201 com Location header e body JSON. Results.Ok(value): 200. Results.NotFound(): 404. Results.BadRequest(): 400.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Criando endpoint GET mínimo:',
      code: `<span class="kw">var</span> builder = WebApplication.<span class="mt">CreateBuilder</span>(args);
<span class="kw">var</span> app = builder.<span class="mt">Build</span>();
app.<span class="mt">_______</span>(<span class="st">"/missoes"</span>, () => <span class="kw">new</span>[] { <span class="st">"M1"</span>, <span class="st">"M2"</span> });
app.<span class="mt">Run</span>();`,
      q: 'Qual método registra um endpoint HTTP GET?',
      hint: 'Map + Get',
      ans: 'MapGet',
      exp: 'app.MapGet(pattern, handler): GET endpoint. app.MapPost, MapPut, MapDelete — outros verbos. Handler pode ser lambda, método local ou método de classe.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Endpoint com route parameter:',
      code: `app.<span class="mt">MapGet</span>(<span class="st">"/missao/{id}"</span>, (<span class="kw">int</span> id) =>
    id > <span class="nm">0</span> ? Results.<span class="mt">Ok</span>(<span class="st">$"Missao {id}"</span>)
              : Results.<span class="mt">_______</span>());`,
      q: 'Qual método Results retorna 404 Not Found?',
      hint: 'Not Found',
      ans: 'NotFound',
      exp: 'Results.NotFound(): 404 sem body. Results.NotFound(objeto): 404 com body. "id" é automaticamente vinculado do route {id}.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Adicionando serviço ao container DI:',
      code: `builder.Services.<span class="mt">_______</span>&lt;IMissaoService, MissaoService&gt;();
<span class="cm">// Injetado automaticamente em endpoints:
// app.MapGet("/", (IMissaoService svc) => svc.Listar())</span>`,
      q: 'Qual método registra serviço com ciclo de vida Scoped?',
      hint: 'Add Scoped',
      ans: 'AddScoped',
      exp: 'AddScoped: nova instância por request HTTP. AddSingleton: única instância. AddTransient: nova instância a cada injeção. Scoped é padrão para serviços de negócio.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'Simulating route param binding.',
      code: `<span class="cm">// Simula binding de route params:</span>
<span class="kw">string</span> <span class="mt">HandleGet</span>(<span class="kw">int</span> id, <span class="kw">string</span> nome) =>
    <span class="st">$"id={id} nome={nome}"</span>;

Console.<span class="mt">WriteLine</span>(<span class="mt">HandleGet</span>(<span class="nm">42</span>, <span class="st">"Leon"</span>));`,
      q: 'O que será exibido?',
      hint: 'Interpolação simples',
      opts: [
        { t: 'id=42 nome=Leon', ok: true },
        { t: '42 Leon', ok: false },
        { t: 'HandleGet(42, Leon)', ok: false },
        { t: 'Erro — tipo misto', ok: false },
      ],
      exp: '"id=42 nome=Leon" — interpolação direta. Em Minimal API real, ASP.NET faz o binding dos route params para os parâmetros do handler.',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Results combinando lógica.',
      code: `<span class="kw">static</span> IResult <span class="mt">GetMissao</span>(<span class="kw">int</span> id)
{
    <span class="kw">if</span> (id <= <span class="nm">0</span>) <span class="kw">return</span> Results.<span class="mt">BadRequest</span>(<span class="st">"ID inválido"</span>);
    <span class="kw">if</span> (id > <span class="nm">100</span>) <span class="kw">return</span> Results.<span class="mt">NotFound</span>();
    <span class="kw">return</span> Results.<span class="mt">Ok</span>(<span class="st">$"Missao {id}"</span>);
}
<span class="kw">var</span> r = <span class="mt">GetMissao</span>(<span class="nm">50</span>);
Console.<span class="mt">WriteLine</span>(r.<span class="mt">GetType</span>().<span class="mt">Name</span>);`,
      q: 'O que será exibido (nome da classe de resultado)?',
      hint: 'Results.Ok() retorna tipo interno com nome específico',
      opts: [
        { t: 'OkResult', ok: false },
        { t: 'Ok', ok: false },
        { t: 'ContentHttpResult', ok: false },
        { t: 'O nome exato depende do runtime, mas é uma implementação de IResult', ok: true },
      ],
      exp: 'id=50: válido e <=100, retorna Results.Ok("Missao 50"). O tipo exato interno (ex: Ok<string>) depende da implementação. GetType().Name seria algo como "Ok`1" ou similar.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Middleware pipeline order.',
      code: `<span class="kw">var</span> log = <span class="kw">new</span> List&lt;<span class="kw">string</span>&gt;();
<span class="cm">// Simula middleware order:</span>
<span class="kw">void</span> <span class="mt">MW1</span>(Action next) { log.<span class="mt">Add</span>(<span class="st">"MW1-in"</span>); next(); log.<span class="mt">Add</span>(<span class="st">"MW1-out"</span>); }
<span class="kw">void</span> <span class="mt">MW2</span>(Action next) { log.<span class="mt">Add</span>(<span class="st">"MW2-in"</span>); next(); log.<span class="mt">Add</span>(<span class="st">"MW2-out"</span>); }
<span class="kw">void</span> <span class="mt">handler</span>() => log.<span class="mt">Add</span>(<span class="st">"handler"</span>);

<span class="mt">MW1</span>(() => <span class="mt">MW2</span>(handler));
Console.<span class="mt">WriteLine</span>(<span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">","</span>, log));`,
      q: 'O que será exibido?',
      hint: 'Middleware executa como pilha — entrada e saída',
      opts: [
        { t: 'MW1-in,MW2-in,handler,MW2-out,MW1-out', ok: true },
        { t: 'MW1-in,MW1-out,MW2-in,MW2-out,handler', ok: false },
        { t: 'handler,MW2-in,MW1-in,MW2-out,MW1-out', ok: false },
        { t: 'MW1-in,MW2-in,MW2-out,handler,MW1-out', ok: false },
      ],
      exp: 'Middleware executa como pilha russa. MW1: "in", chama MW2. MW2: "in", chama handler. handler executa. MW2: "out". MW1: "out". "MW1-in,MW2-in,handler,MW2-out,MW1-out".',
    },

  ]
};
