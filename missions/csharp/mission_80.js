// ══════════════════════════════════════════════════════
// ACT VI — O CONFRONTO FINAL
// MISSÃO 81 — LABORATÓRIO DE OZWELL
// Tema: Entity Framework Core — DbContext, migrations, LINQ queries
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_80 = {
  id: 80,
  title: "MISSÃO 81 — LABORATÓRIO DE OZWELL",
  icon: '🗄️',
  free: false,
  desc: "No laboratório secreto de Ozwell E. Spencer, Leon encontra os bancos de dados de Umbrella. Entity Framework Core é o acesso direto aos segredos — DbContext, migrations e LINQ para extrair cada arquivo.",
  objs: [
    "Configurar DbContext e entidades para Entity Framework Core",
    "Usar LINQ com EF Core para consultas ao banco",
    "Entender migrations e o fluxo Code-First",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<code>DbContext</code> é a classe central do EF Core — representa uma sessão com o banco de dados. Cada <code>DbSet&lt;T&gt;</code> corresponde a uma tabela.',
      q: 'Como o EF Core sabe quais tabelas criar no banco de dados?',
      hint: 'DbSet e configuração de entidades',
      opts: [
        { t: 'Pela herança de DbContext', ok: false },
        { t: 'Pelas propriedades DbSet<T> no DbContext — cada DbSet<T> = uma tabela', ok: true },
        { t: 'Por um arquivo XML de mapeamento', ok: false },
        { t: 'Automaticamente por reflexão sem configuração', ok: false },
      ],
      exp: 'DbContext com "public DbSet<Missao> Missoes { get; set; }": EF cria tabela Missoes com colunas para cada propriedade de Missao.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<strong>Migrations</strong> EF Core rastreiam mudanças no modelo de dados e geram scripts SQL para atualizar o banco sem perder dados.',
      q: 'Qual o comando para criar uma nova migration após modificar uma entidade?',
      hint: 'dotnet ef migrations',
      opts: [
        { t: 'dotnet ef database update', ok: false },
        { t: 'dotnet ef migrations add NomeDaMigration', ok: true },
        { t: 'dotnet ef migrations create', ok: false },
        { t: 'dotnet ef scaffold', ok: false },
      ],
      exp: '"dotnet ef migrations add NomeDaMigration": gera arquivos de migration com Up() e Down(). "dotnet ef database update": aplica migrations pendentes ao banco.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'EF Core usa <strong>lazy loading</strong> ou <strong>eager loading</strong> para navegar entre entidades relacionadas. Sem Include(), navegações retornam null (lazy desativado por padrão).',
      q: 'Como carregar a lista de missões de um agente junto com o agente no EF Core?',
      hint: 'Include() para eager loading',
      opts: [
        { t: 'context.Agentes.Where(a => a.Id == id) — EF carrega automaticamente', ok: false },
        { t: 'context.Agentes.Include(a => a.Missoes).Where(a => a.Id == id)', ok: true },
        { t: 'context.Agentes.Join(context.Missoes, ...)', ok: false },
        { t: 'context.Agentes.Load().Missoes', ok: false },
      ],
      exp: '.Include(a => a.Missoes): eager loading — EF faz JOIN no SQL e popula a coleção. Sem Include: Missoes é null (lazy loading desativado por padrão).',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>AsNoTracking()</code> desativa o change tracker para consultas somente-leitura. Mais rápido pois EF não precisa rastrear mudanças para objetos retornados.',
      q: 'Quando usar AsNoTracking() com EF Core?',
      hint: 'Read-only, sem Update/Delete posterior',
      opts: [
        { t: 'Sempre — AsNoTracking é mais rápido em todos os casos', ok: false },
        { t: 'Para consultas somente-leitura onde não há Update/Delete posterior dos objetos retornados', ok: true },
        { t: 'Apenas para grandes volumes de dados', ok: false },
        { t: 'AsNoTracking desativa o cache de consultas', ok: false },
      ],
      exp: 'AsNoTracking(): sem overhead de change tracking. Se for fazer context.SaveChanges() após modificar o objeto retornado, NÃO use — EF não rastreia mudanças.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Definindo um DbContext simples:',
      code: `<span class="kw">class</span> AppDbContext : DbContext
{
    <span class="kw">public</span> DbSet&lt;Missao&gt; <span class="mt">_______</span> { <span class="kw">get</span>; <span class="kw">set</span>; }
    <span class="kw">protected override void</span> <span class="mt">OnConfiguring</span>(DbContextOptionsBuilder o)
        => o.<span class="mt">UseSqlite</span>(<span class="st">"Data Source=app.db"</span>);
}`,
      q: 'Qual nome convencional para a propriedade DbSet de Missao?',
      hint: 'Plural do tipo',
      ans: 'Missoes',
      exp: 'Convenção EF Core: DbSet com nome plural do tipo. "Missoes" para Missao. EF cria tabela "Missoes". Pode usar [Table("nome")] para personalizar.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Consultando com LINQ e EF Core:',
      code: `<span class="kw">await using var</span> ctx = <span class="kw">new</span> AppDbContext();
<span class="kw">var</span> missoes = <span class="kw">await</span> ctx.Missoes
    .<span class="mt">Where</span>(m => m.XP > <span class="nm">100</span>)
    .<span class="mt">_______</span>();`,
      q: 'Qual método materializa a query em uma lista assíncrona no EF Core?',
      hint: 'To List Async',
      ans: 'ToListAsync',
      exp: '.ToListAsync(): materializa IQueryable<T> em List<T> assincronamente. EF Core gera SQL e executa. .FirstOrDefaultAsync(), .SingleAsync(), .CountAsync() — mesma convenção.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Adicionando e salvando uma entidade:',
      code: `<span class="kw">await using var</span> ctx = <span class="kw">new</span> AppDbContext();
ctx.Missoes.<span class="mt">Add</span>(<span class="kw">new</span> Missao { Nome = <span class="st">"Infiltrar"</span>, XP = <span class="nm">200</span> });
<span class="kw">await</span> ctx.<span class="mt">_______</span>();`,
      q: 'Qual método persiste as mudanças no banco de dados?',
      hint: 'Save Changes Async',
      ans: 'SaveChangesAsync',
      exp: 'ctx.SaveChangesAsync(): gera e executa INSERT/UPDATE/DELETE para todas as mudanças rastreadas. Retorna int (número de registros afetados).',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'LINQ To Objects simulando EF query.',
      code: `<span class="kw">record</span> Missao(<span class="kw">int</span> Id, <span class="kw">string</span> Nome, <span class="kw">int</span> XP);
<span class="kw">var</span> missoes = <span class="kw">new</span>[] {
    <span class="kw">new</span> Missao(<span class="nm">1</span>, <span class="st">"Alpha"</span>, <span class="nm">50</span>),
    <span class="kw">new</span> Missao(<span class="nm">2</span>, <span class="st">"Beta"</span>, <span class="nm">150</span>),
    <span class="kw">new</span> Missao(<span class="nm">3</span>, <span class="st">"Gamma"</span>, <span class="nm">200</span>),
};
<span class="kw">var</span> resultado = missoes
    .<span class="mt">Where</span>(m => m.XP >= <span class="nm">150</span>)
    .<span class="mt">Select</span>(m => m.Nome)
    .<span class="mt">First</span>();
Console.<span class="mt">WriteLine</span>(resultado);`,
      q: 'O que será exibido?',
      hint: 'Primeiro com XP >= 150',
      opts: [
        { t: 'Alpha', ok: false },
        { t: 'Beta', ok: true },
        { t: 'Gamma', ok: false },
        { t: 'Erro — XP >= 150 match dois', ok: false },
      ],
      exp: 'Where(XP>=150): Beta(150) e Gamma(200). First() retorna o primeiro = Beta. "Beta".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Include simulando eager loading.',
      code: `<span class="kw">record</span> Agente(<span class="kw">string</span> Nome, List&lt;<span class="kw">string</span>&gt; Missoes);
<span class="kw">var</span> leon = <span class="kw">new</span> Agente(<span class="st">"Leon"</span>, <span class="kw">new</span> List&lt;<span class="kw">string</span>&gt; { <span class="st">"M1"</span>, <span class="st">"M2"</span> });
Console.<span class="mt">WriteLine</span>(leon.Nome);
Console.<span class="mt">WriteLine</span>(leon.Missoes.<span class="mt">Count</span>);`,
      q: 'O que será exibido?',
      hint: 'Nome e quantidade de missões',
      opts: [
        { t: 'Leon e 1', ok: false },
        { t: 'Leon e 2', ok: true },
        { t: 'Leon e 0', ok: false },
        { t: 'Erro — record com List', ok: false },
      ],
      exp: 'leon.Nome="Leon". leon.Missoes.Count=2 (M1, M2). "Leon" e "2".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'AsNoTracking — verificação de rastreamento.',
      code: `<span class="kw">record</span> Item(<span class="kw">int</span> Id, <span class="kw">string</span> Nome);
<span class="kw">var</span> items = <span class="kw">new</span>[] { <span class="kw">new</span> Item(<span class="nm">1</span>, <span class="st">"Shotgun"</span>) }
    .<span class="mt">AsQueryable</span>()
    .<span class="mt">Where</span>(i => i.Id == <span class="nm">1</span>)
    .<span class="mt">ToList</span>();
<span class="kw">var</span> item = items[<span class="nm">0</span>];
Console.<span class="mt">WriteLine</span>(item.Nome);`,
      q: 'O que será exibido?',
      hint: 'LINQ filtra por Id == 1',
      opts: [
        { t: 'null', ok: false },
        { t: 'Shotgun', ok: true },
        { t: 'Item { Id = 1, Nome = Shotgun }', ok: false },
        { t: 'Erro — AsQueryable em array', ok: false },
      ],
      exp: 'AsQueryable() em array funciona como LINQ to Objects. Where(Id==1) retorna Shotgun. items[0].Nome = "Shotgun".',
    },

  ]
};
