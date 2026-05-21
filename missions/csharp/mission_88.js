// ══════════════════════════════════════════════════════
// EPÍLOGO — O LEGADO
// MISSÃO 89 — NOVA ORDEM
// Tema: .NET 8/9 features — frozen collections, keyed DI, TimeProvider
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_88 = {
  id: 88,
  title: "MISSÃO 89 — NOVA ORDEM",
  icon: '🌅',
  free: false,
  desc: "O confronto terminou. Uma nova era começa para Leon e para o .NET. As últimas missões revelam o estado da arte do desenvolvimento moderno — as features mais recentes do .NET 8 e 9 que definem o futuro.",
  objs: [
    "Usar FrozenDictionary e FrozenSet para coleções imutáveis otimizadas",
    "Aplicar Keyed DI Services do .NET 8",
    "Usar TimeProvider para código testável com tempo",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>FrozenDictionary&lt;TK, TV&gt;</strong> (.NET 8) é uma coleção imutável otimizada para leitura — gerada uma vez, lookup mais rápido que Dictionary normal para dados que não mudam.',
      q: 'Quando usar FrozenDictionary em vez de Dictionary regular?',
      hint: 'Dados que não mudam após inicialização',
      opts: [
        { t: 'Para dados que mudam frequentemente', ok: false },
        { t: 'Para lookup intensivo em dados que são inicializados uma vez e depois apenas lidos', ok: true },
        { t: 'FrozenDictionary é sempre melhor', ok: false },
        { t: 'Apenas em aplicações de jogos', ok: false },
      ],
      exp: 'FrozenDictionary: construção mais lenta que Dictionary, mas lookup mais rápido. Ideal para: tabelas de configuração, lookup tables, dados de referência — write-once, read-many.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<strong>Keyed DI Services</strong> (.NET 8): registrar múltiplas implementações da mesma interface com uma chave. Resolve o problema de "qual implementação injetar?".',
      q: 'Qual cenário resolve bem os Keyed DI Services?',
      hint: 'Múltiplas implementações da mesma interface',
      opts: [
        { t: 'Registrar um único serviço global', ok: false },
        { t: 'Múltiplas implementações de IArmazenamento: um para SQL, outro para Redis — injetar pelo nome', ok: true },
        { t: 'Substituir Singleton por Scoped', ok: false },
        { t: 'Apenas para ASP.NET Core', ok: false },
      ],
      exp: 'services.AddKeyedSingleton<ICache, MemoryCache>("memory"). AddKeyedSingleton<ICache, RedisCache>("redis"). Injetar: [FromKeyedServices("memory")] ICache cache.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<strong>TimeProvider</strong> (.NET 8) abstrai o tempo do sistema — permite injetar tempo falso em testes sem usar DateTime.Now diretamente.',
      q: 'Por que usar TimeProvider em vez de DateTime.UtcNow?',
      hint: 'Testabilidade',
      opts: [
        { t: 'TimeProvider é mais preciso', ok: false },
        { t: 'TimeProvider é injetável — testes podem usar FakeTimeProvider para controlar o tempo sem depender do relógio do OS', ok: true },
        { t: 'DateTime.UtcNow não é thread-safe', ok: false },
        { t: 'TimeProvider suporta mais fusos horários', ok: false },
      ],
      exp: 'DateTime.UtcNow: hard-coded ao relógio. TimeProvider.GetUtcNow(): injetável. Testes com FakeTimeProvider (Microsoft.Extensions.TimeProvider.Testing): avançar o tempo artificialmente.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<strong>IHostedService</strong> e <strong>BackgroundService</strong> — serviços que rodam em background durante a lifetime da aplicação. Ideal para tarefas periódicas, processamento de filas.',
      q: 'Qual a diferença entre IHostedService e BackgroundService?',
      hint: 'BackgroundService é helper de IHostedService',
      opts: [
        { t: 'São equivalentes', ok: false },
        { t: 'BackgroundService é classe base abstrata que implementa IHostedService com loop em ExecuteAsync — menos boilerplate', ok: true },
        { t: 'IHostedService é deprecated', ok: false },
        { t: 'BackgroundService não suporta CancellationToken', ok: false },
      ],
      exp: 'IHostedService: StartAsync e StopAsync manualmente. BackgroundService: override ExecuteAsync(CancellationToken) com loop — mais simples para background loops.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Criando FrozenDictionary:',
      code: `<span class="kw">var</span> dict = <span class="kw">new</span> Dictionary&lt;<span class="kw">string</span>, <span class="kw">int</span>&gt;
{
    [<span class="st">"Alpha"</span>] = <span class="nm">1</span>, [<span class="st">"Beta"</span>] = <span class="nm">2</span>
};
<span class="kw">var</span> frozen = dict.<span class="mt">_______</span>();`,
      q: 'Qual método de extensão cria um FrozenDictionary a partir de Dictionary?',
      hint: 'To Frozen Dictionary',
      ans: 'ToFrozenDictionary',
      exp: '.ToFrozenDictionary(): constrói FrozenDictionary otimizado para leitura. Após criado, não pode ser modificado. Também: .ToFrozenSet() para HashSet.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Registrando serviço com chave:',
      code: `services.<span class="mt">AddKeyedSingleton</span>&lt;ICache, MemoryCache&gt;(<span class="st">"_______"</span>);
services.<span class="mt">AddKeyedSingleton</span>&lt;ICache, RedisCache&gt;(<span class="st">"redis"</span>);`,
      q: 'Qual seria a chave convencional para o cache em memória?',
      hint: 'Tipo do cache: memory',
      ans: 'memory',
      exp: 'Chave é qualquer string/objeto. Convenção: nome descritivo. Injeção: constructor([FromKeyedServices("memory")] ICache cache) ou IKeyedServiceProvider.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Usando TimeProvider para obter hora atual:',
      code: `<span class="kw">class</span> LogService(<span class="tp">TimeProvider</span> time)
{
    <span class="kw">public string</span> <span class="mt">Agora</span>() =>
        time.<span class="mt">_______</span>().<span class="mt">ToString</span>(<span class="st">"HH:mm"</span>);
}`,
      q: 'Qual método TimeProvider retorna o UTC atual como DateTimeOffset?',
      hint: 'Get Utc Now',
      ans: 'GetUtcNow',
      exp: 'TimeProvider.GetUtcNow(): DateTimeOffset UTC atual. Em produção: TimeProvider.System. Em testes: FakeTimeProvider com tempo controlado.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'FrozenDictionary lookup.',
      code: `<span class="kw">var</span> lookup = <span class="kw">new</span> Dictionary&lt;<span class="kw">string</span>, <span class="kw">int</span>&gt;
{
    [<span class="st">"sword"</span>] = <span class="nm">50</span>, [<span class="st">"shotgun"</span>] = <span class="nm">80</span>
}.<span class="mt">ToFrozenDictionary</span>();

Console.<span class="mt">WriteLine</span>(lookup[<span class="st">"shotgun"</span>]);
Console.<span class="mt">WriteLine</span>(lookup.<span class="mt">ContainsKey</span>(<span class="st">"pistol"</span>));`,
      q: 'O que será exibido?',
      hint: 'Valor de shotgun e chave inexistente',
      opts: [
        { t: '80 e False', ok: true },
        { t: '80 e True', ok: false },
        { t: '50 e False', ok: false },
        { t: 'Erro — FrozenDictionary imutável', ok: false },
      ],
      exp: 'lookup["shotgun"] = 80. ContainsKey("pistol") = false (não existe). FrozenDictionary suporta leitura normal. "80" e "False".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'BackgroundService loop simulado.',
      code: `<span class="kw">var</span> count = <span class="nm">0</span>;
<span class="kw">var</span> cts = <span class="kw">new</span> CancellationTokenSource();

<span class="cm">// Simula ExecuteAsync de BackgroundService:</span>
<span class="kw">while</span> (!cts.Token.IsCancellationRequested && count < <span class="nm">3</span>)
{
    count++;
    <span class="kw">await</span> Task.<span class="mt">Delay</span>(<span class="nm">1</span>, cts.Token);
}
Console.<span class="mt">WriteLine</span>(count);`,
      q: 'O que será exibido?',
      hint: 'Loop roda 3 vezes',
      opts: [
        { t: '0', ok: false },
        { t: '3', ok: true },
        { t: 'Infinito — sem cancelamento', ok: false },
        { t: 'Erro — Task.Delay com token', ok: false },
      ],
      exp: 'Loop: count 1,2,3. Condição count<3 falsa com count=3 → sai. Console.WriteLine(3). "3".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'FrozenSet para verificações rápidas.',
      code: `<span class="kw">var</span> permitidos = <span class="kw">new</span>[] { <span class="st">"admin"</span>, <span class="st">"operador"</span>, <span class="st">"agente"</span> }
    .<span class="mt">ToFrozenSet</span>();

<span class="kw">string</span>[] usuarios = { <span class="st">"leon"</span>, <span class="st">"admin"</span>, <span class="st">"spy"</span>, <span class="st">"agente"</span> };
<span class="kw">int</span> autorizados = usuarios.<span class="mt">Count</span>(u => permitidos.<span class="mt">Contains</span>(u));
Console.<span class="mt">WriteLine</span>(autorizados);`,
      q: 'O que será exibido?',
      hint: 'Quantos usuários estão no set de permitidos?',
      opts: [
        { t: '1', ok: false },
        { t: '2', ok: true },
        { t: '3', ok: false },
        { t: '4', ok: false },
      ],
      exp: 'permitidos = {admin, operador, agente}. Usuários: leon(não), admin(sim), spy(não), agente(sim). Count = 2. "2".',
    },

  ]
};
