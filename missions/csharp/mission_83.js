// ══════════════════════════════════════════════════════
// ACT VI — O CONFRONTO FINAL
// MISSÃO 84 — NÚCLEO DO SISTEMA ⚔️
// Tema: ACT VI Boss — EF Core, ASP.NET, Pattern Matching, DI avançado
// Tipo: Boss (18 questões) | 6 MC → 5 Fill → 7 Code
// ══════════════════════════════════════════════════════

const MISSION_83 = {
  id: 83,
  title: "MISSÃO 84 — NÚCLEO DO SISTEMA ⚔️",
  icon: '💀',
  free: false,
  desc: "O núcleo do sistema de Saddler — onde tudo se conecta. EF Core, ASP.NET Core, Pattern Matching avançado, DI e todos os conceitos do ACT VI convergem aqui. Somente o agente supremo sobrevive.",
  objs: [
    "Consolidar EF Core, Minimal API e Pattern Matching",
    "Aplicar DI, middleware e configuração corretamente",
    "Resolver problemas complexos de arquitetura .NET",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Revisão: DbContext lifetime em ASP.NET Core DI.',
      q: 'Qual o ciclo de vida correto para registrar DbContext no DI do ASP.NET Core?',
      hint: 'Uma instância por request HTTP',
      opts: [
        { t: 'Singleton — reutilizar para todas as requests', ok: false },
        { t: 'Scoped — uma instância por request HTTP', ok: true },
        { t: 'Transient — nova instância a cada injeção', ok: false },
        { t: 'Não importa o ciclo de vida para DbContext', ok: false },
      ],
      exp: 'DbContext é Scoped por padrão no AddDbContext(). Uma instância por request — garante que o change tracker seja descartado ao final da request.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Revisão: switch expression e exhaustiveness.',
      q: 'O que acontece se um switch expression não tem arm para o valor e não tem arm "_" (discard)?',
      hint: 'Exceção em runtime',
      opts: [
        { t: 'Retorna default(T) automaticamente', ok: false },
        { t: 'MatchFailureException em runtime — compilador avisa com warning', ok: true },
        { t: 'Compila com erro', ok: false },
        { t: 'Retorna null', ok: false },
      ],
      exp: 'Switch expression sem _ e sem cobertura total: SwitchExpressionException em runtime. Compilador dá warning CS8509. Sempre inclua "_" ou garanta exhaustiveness com tipos sealed.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Revisão: Minimal API e model binding.',
      q: 'Como receber um objeto JSON no body de um endpoint POST na Minimal API?',
      hint: 'Tipo complexo → body automático',
      opts: [
        { t: 'Usar [FromForm] no parâmetro', ok: false },
        { t: 'Declarar o tipo como parâmetro — tipos complexos são inferidos do body automaticamente', ok: true },
        { t: 'Ler HttpRequest.Body manualmente', ok: false },
        { t: 'Minimal API não suporta body JSON', ok: false },
      ],
      exp: 'app.MapPost("/", (MinhaCamanda cmd) => ...): cmd é inferido do body JSON. [FromBody] explícito é opcional. Primitivos (int, string) → route/query por padrão.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Revisão: IQueryable vs IEnumerable em EF Core.',
      q: 'Qual a diferença entre IQueryable<T> e IEnumerable<T> no contexto do EF Core?',
      hint: 'SQL vs in-memory',
      opts: [
        { t: 'São equivalentes para EF Core', ok: false },
        { t: 'IQueryable: query executada no banco (SQL); IEnumerable: dados já carregados, filtra na memória', ok: true },
        { t: 'IEnumerable é mais rápido para grandes volumes', ok: false },
        { t: 'IQueryable não suporta LINQ', ok: false },
      ],
      exp: 'context.Missoes.Where(x=>x.XP>100): IQueryable → SQL WHERE. context.Missoes.ToList().Where(x=>x.XP>100): IEnumerable → carrega tudo, filtra em memória (lento).',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Revisão: Pattern matching com or e and.',
      q: 'O que verifica "x is > 0 and < 100"?',
      hint: 'And combina dois patterns',
      opts: [
        { t: 'x entre 0 e 100 (exclusive)', ok: true },
        { t: 'x maior que 0 ou menor que 100', ok: false },
        { t: 'Sintaxe inválida', ok: false },
        { t: 'x igual a 0 E 100 simultaneamente', ok: false },
      ],
      exp: '"x is > 0 and < 100": x > 0 E x < 100 → 0 < x < 100. "x is < 0 or > 100": x fora do intervalo [0,100]. Combinação de relational patterns.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Revisão: migrations e schema evolution.',
      q: 'Qual a vantagem de usar migrations EF Core vs scripts SQL manuais?',
      hint: 'Histórico e reversibilidade',
      opts: [
        { t: 'Migrations geram SQL mais rápido', ok: false },
        { t: 'Migrations têm histórico versionado com Up() e Down() — permite avançar e reverter schema de forma controlada', ok: true },
        { t: 'Scripts SQL são mais seguros', ok: false },
        { t: 'Migrations são obrigatórias no EF Core', ok: false },
      ],
      exp: 'Migrations: Up() aplica mudança, Down() reverte. Rastreamento via __EFMigrationsHistory no banco. "dotnet ef database update --migration <anterior>" para rollback.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Configurando relacionamento um-para-muitos no EF Core:',
      code: `<span class="kw">class</span> Agente
{
    <span class="kw">public int</span> Id { <span class="kw">get</span>; <span class="kw">set</span>; }
    <span class="kw">public</span> ICollection&lt;Missao&gt; <span class="mt">_______</span> { <span class="kw">get</span>; <span class="kw">set</span>; }
}`,
      q: 'Qual nome convencional para a propriedade de navegação da coleção de Missões?',
      hint: 'Plural de Missao',
      ans: 'Missoes',
      exp: 'ICollection<Missao> Missoes: EF Core detecta pelo nome "Missoes" (plural de Missao) e cria FK MissaoId na tabela Missoes automaticamente.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Middleware personalizado com Use:',
      code: `app.<span class="mt">Use</span>(<span class="kw">async</span> (context, next) =>
{
    Console.<span class="mt">WriteLine</span>(<span class="st">"Antes"</span>);
    <span class="kw">await</span> _______();
    Console.<span class="mt">WriteLine</span>(<span class="st">"Depois"</span>);
});`,
      q: 'Como chamar o próximo middleware no pipeline?',
      hint: 'O delegate next',
      ans: 'next',
      exp: 'await next(): chama o próximo middleware. Se não chamar next(), a request é "short-circuited" — não prossegue. "Antes" e "Depois" delimitam execução ao redor do pipeline.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Pattern matching com or:',
      code: `<span class="kw">bool</span> <span class="mt">ÉFimDeSemana</span>(DayOfWeek dia) =>
    dia <span class="kw">is</span> DayOfWeek.Saturday <span class="kw">_______</span> DayOfWeek.Sunday;`,
      q: 'Qual operador combina dois patterns com "ou"?',
      hint: 'Or em inglês no pattern matching',
      ans: 'or',
      exp: '"is A or B": match se valor é A OU B. "is A and B": match se valor satisfaz A E B. Lowercase or/and são operadores de pattern — diferentes do || e &&.',
    },

    // Q10 — Fill
    {
      type: 'fill',
      bubble: 'Incluindo entidade relacionada com ThenInclude:',
      code: `<span class="kw">var</span> result = <span class="kw">await</span> ctx.Agentes
    .<span class="mt">Include</span>(a => a.Missoes)
    .<span class="mt">_______</span>(m => m.Recompensas)
    .<span class="mt">ToListAsync</span>();`,
      q: 'Qual método continua o Include para entidade aninhada?',
      hint: 'Then Include',
      ans: 'ThenInclude',
      exp: '.ThenInclude(): eager loading de subentidade. Agente → Missoes → Recompensas. Sem ThenInclude, Missoes.Recompensas seria null.',
    },

    // Q11 — Fill
    {
      type: 'fill',
      bubble: 'Endpoint com filtro de autorização:',
      code: `app.<span class="mt">MapGet</span>(<span class="st">"/admin"</span>, () => <span class="st">"Segredo"</span>)
   .<span class="mt">_______</span>();`,
      q: 'Qual método em Minimal API requer autenticação no endpoint?',
      hint: 'Require Authorization',
      ans: 'RequireAuthorization',
      exp: '.RequireAuthorization(): endpoint requer usuário autenticado. .RequireAuthorization("policy"): requer policy específica. app.UseAuthentication() e UseAuthorization() no pipeline primeiro.',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'EF Core LINQ — projeção com Select.',
      code: `<span class="kw">record</span> Missao(<span class="kw">int</span> Id, <span class="kw">string</span> Nome, <span class="kw">int</span> XP);
<span class="kw">record</span> MissaoDto(<span class="kw">string</span> Nome, <span class="kw">int</span> XP);

<span class="kw">var</span> missoes = <span class="kw">new</span>[] {
    <span class="kw">new</span> Missao(<span class="nm">1</span>, <span class="st">"Alpha"</span>, <span class="nm">100</span>),
    <span class="kw">new</span> Missao(<span class="nm">2</span>, <span class="st">"Beta"</span>, <span class="nm">200</span>)
};
<span class="kw">var</span> dtos = missoes
    .<span class="mt">Select</span>(m => <span class="kw">new</span> MissaoDto(m.Nome, m.XP))
    .<span class="mt">ToList</span>();
Console.<span class="mt">WriteLine</span>(dtos[<span class="nm">1</span>].Nome);`,
      q: 'O que será exibido?',
      hint: 'dtos[1] = segundo elemento',
      opts: [
        { t: 'Alpha', ok: false },
        { t: 'Beta', ok: true },
        { t: '200', ok: false },
        { t: 'Erro — projeção de record', ok: false },
      ],
      exp: 'Select projeta Missao → MissaoDto. dtos[1] = MissaoDto("Beta", 200). dtos[1].Nome = "Beta".',
    },

    // Q13 — Code
    {
      type: 'code',
      bubble: 'Switch expression exaustivo com sealed hierarchy.',
      code: `<span class="kw">abstract record</span> Forma;
<span class="kw">record</span> Circulo(<span class="kw">double</span> R) : Forma;
<span class="kw">record</span> Quadrado(<span class="kw">double</span> L) : Forma;

<span class="kw">static double</span> <span class="mt">Area</span>(Forma f) => f <span class="kw">switch</span>
{
    Circulo c  => Math.PI * c.R * c.R,
    Quadrado q => q.L * q.L,
};
Console.<span class="mt">WriteLine</span>(<span class="mt">Area</span>(<span class="kw">new</span> Quadrado(<span class="nm">4</span>)).<span class="mt">ToString</span>(<span class="st">"F0"</span>));`,
      q: 'O que será exibido?',
      hint: '4² = 16',
      opts: [
        { t: '12', ok: false },
        { t: '16', ok: true },
        { t: '4', ok: false },
        { t: 'Erro — switch sem discard', ok: false },
      ],
      exp: 'Quadrado(4): Area = 4*4 = 16. ToString("F0") = inteiro sem decimais = "16". Switch é exaustivo para hierarchy sealed com records.',
    },

    // Q14 — Code
    {
      type: 'code',
      bubble: 'Positional pattern com record.',
      code: `<span class="kw">record</span> Ponto(<span class="kw">int</span> X, <span class="kw">int</span> Y);
<span class="kw">static string</span> <span class="mt">Quadrante</span>(Ponto p) => p <span class="kw">switch</span>
{
    ( > <span class="nm">0</span>, > <span class="nm">0</span>) => <span class="st">"Q1"</span>,
    ( < <span class="nm">0</span>, > <span class="nm">0</span>) => <span class="st">"Q2"</span>,
    ( < <span class="nm">0</span>, < <span class="nm">0</span>) => <span class="st">"Q3"</span>,
    ( > <span class="nm">0</span>, < <span class="nm">0</span>) => <span class="st">"Q4"</span>,
    <span class="kw">_</span>             => <span class="st">"Eixo"</span>
};
Console.<span class="mt">WriteLine</span>(<span class="mt">Quadrante</span>(<span class="kw">new</span> Ponto(-<span class="nm">3</span>, <span class="nm">5</span>)));`,
      q: 'O que será exibido?',
      hint: 'X=-3, Y=5 — qual quadrante?',
      opts: [
        { t: 'Q1', ok: false },
        { t: 'Q2', ok: true },
        { t: 'Q3', ok: false },
        { t: 'Eixo', ok: false },
      ],
      exp: 'Ponto(-3, 5): positional pattern (X, Y) = (-3, 5). X < 0, Y > 0 → Q2. "Q2".',
    },

    // Q15 — Code
    {
      type: 'code',
      bubble: 'DI com factory method.',
      code: `<span class="kw">interface</span> IArma { <span class="kw">string</span> Nome { <span class="kw">get</span>; } }
<span class="kw">class</span> Pistola : IArma { <span class="kw">public string</span> Nome => <span class="st">"Pistola"</span>; }
<span class="kw">class</span> Shotgun : IArma { <span class="kw">public string</span> Nome => <span class="st">"Shotgun"</span>; }

<span class="kw">var</span> sp = <span class="kw">new</span> ServiceCollection()
    .<span class="mt">AddTransient</span>&lt;Pistola&gt;()
    .<span class="mt">AddTransient</span>&lt;Shotgun&gt;()
    .<span class="mt">BuildServiceProvider</span>();

<span class="kw">var</span> p = sp.<span class="mt">GetRequiredService</span>&lt;Pistola&gt;();
Console.<span class="mt">WriteLine</span>(p.Nome);`,
      q: 'O que será exibido?',
      hint: 'Resolve Pistola diretamente',
      opts: [
        { t: 'Shotgun', ok: false },
        { t: 'Pistola', ok: true },
        { t: 'Erro — não registrou IArma', ok: false },
        { t: 'null', ok: false },
      ],
      exp: 'GetRequiredService<Pistola>(): resolve Pistola diretamente (não IArma). Pistola.Nome = "Pistola".',
    },

    // Q16 — Code
    {
      type: 'code',
      bubble: 'EF Core: FirstOrDefault vs Single.',
      code: `<span class="kw">var</span> dados = <span class="kw">new</span>[] { <span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span>, <span class="nm">2</span> };
<span class="kw">var</span> a = dados.<span class="mt">FirstOrDefault</span>(x => x == <span class="nm">2</span>);
<span class="kw">try</span> {
    <span class="kw">var</span> b = dados.<span class="mt">Single</span>(x => x == <span class="nm">2</span>);
} <span class="kw">catch</span> (InvalidOperationException e) {
    Console.<span class="mt">WriteLine</span>(e.<span class="mt">Message</span>.<span class="mt">Contains</span>(<span class="st">"more than one"</span>));
}
Console.<span class="mt">WriteLine</span>(a);`,
      q: 'O que será exibido?',
      hint: 'Single lança exceção quando há mais de um match',
      opts: [
        { t: 'True e 2', ok: true },
        { t: 'False e 2', ok: false },
        { t: 'True e 1', ok: false },
        { t: 'Erro não tratado', ok: false },
      ],
      exp: 'Single(x==2): dois elementos == 2 → InvalidOperationException "sequence contains more than one element". Contains("more than one") = true. FirstOrDefault(x==2) = 2. "True" e "2".',
    },

    // Q17 — Code
    {
      type: 'code',
      bubble: 'Middleware de logging simulado.',
      code: `<span class="kw">var</span> requests = <span class="kw">new</span> List&lt;<span class="kw">string</span>&gt;();
Func&lt;Func&lt;<span class="kw">string</span>, <span class="kw">string</span>&gt;, Func&lt;<span class="kw">string</span>, <span class="kw">string</span>&gt;&gt; logMW =
    next => req => {
        requests.<span class="mt">Add</span>(req);
        <span class="kw">return</span> next(req);
    };

Func&lt;<span class="kw">string</span>, <span class="kw">string</span>&gt; handler = req => <span class="st">$"OK:{req}"</span>;
<span class="kw">var</span> pipeline = <span class="mt">logMW</span>(handler);
<span class="kw">var</span> result = <span class="mt">pipeline</span>(<span class="st">"GET /missao"</span>);
Console.<span class="mt">WriteLine</span>(requests.<span class="mt">Count</span>);
Console.<span class="mt">WriteLine</span>(result);`,
      q: 'O que será exibido?',
      hint: 'Middleware registra request e passa para handler',
      opts: [
        { t: '0 e OK:GET /missao', ok: false },
        { t: '1 e OK:GET /missao', ok: true },
        { t: '1 e GET /missao', ok: false },
        { t: 'Erro — Func aninhado', ok: false },
      ],
      exp: 'pipeline("GET /missao"): logMW adiciona à lista, chama handler. handler retorna "OK:GET /missao". requests.Count=1. "1" e "OK:GET /missao".',
    },

    // Q18 — Code
    {
      type: 'code',
      bubble: 'AsNoTracking comparação.',
      code: `<span class="kw">record</span> Item(<span class="kw">int</span> Id, <span class="kw">string</span> Nome);
<span class="kw">var</span> items = <span class="kw">new</span>[] {
    <span class="kw">new</span> Item(<span class="nm">1</span>, <span class="st">"A"</span>), <span class="kw">new</span> Item(<span class="nm">2</span>, <span class="st">"B"</span>)
}.<span class="mt">AsQueryable</span>();

<span class="kw">var</span> r1 = items.<span class="mt">Where</span>(i => i.Id > <span class="nm">0</span>).<span class="mt">Count</span>();
<span class="kw">var</span> r2 = items.<span class="mt">OrderBy</span>(i => i.Nome).<span class="mt">Last</span>().<span class="mt">Nome</span>;
Console.<span class="mt">WriteLine</span>(<span class="st">$"{r1} {r2}"</span>);`,
      q: 'O que será exibido?',
      hint: 'Count de Id>0, Last após ordenação por Nome',
      opts: [
        { t: '2 B', ok: true },
        { t: '2 A', ok: false },
        { t: '1 B', ok: false },
        { t: 'Erro — Last sem default', ok: false },
      ],
      exp: 'Where(Id>0).Count(): ambos têm Id>0 → 2. OrderBy(Nome): "A","B". Last().Nome = "B". "2 B".',
    },

  ]
};
