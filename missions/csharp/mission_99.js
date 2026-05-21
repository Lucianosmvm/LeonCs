// ══════════════════════════════════════════════════════
// EPÍLOGO — O LEGADO
// MISSÃO 100 — DEV SOBREVIVENTE 🏆
// Tema: Missão Final — reflexão, revisão total, celebração
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_99 = {
  id: 99,
  title: "MISSÃO 100 — DEV SOBREVIVENTE 🏆",
  icon: '🏆',
  free: false,
  desc: "A ilha explodiu. Salé e Leon escaparam. A missão acabou — mas o desenvolvedor sobrevivente nunca para de evoluir. Esta é a última missão: uma revisão de toda a jornada, do Hello World ao gRPC. Você chegou até aqui. Você é o Dev Sobrevivente.",
  objs: [
    "Revisar os principais conceitos da jornada completa",
    "Consolidar o aprendizado de C# do básico ao avançado",
    "Celebrar a conclusão da jornada Dev Sobrevivente",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '🏁 Revisão total: o que diferencia um Dev Sobrevivente de um iniciante em C#?',
      q: 'Qual conjunto de habilidades define um desenvolvedor C# avançado?',
      hint: 'Tudo que você aprendeu nessa jornada',
      opts: [
        { t: 'Apenas conhecer a sintaxe básica de if/for/while', ok: false },
        { t: 'Sintaxe + LINQ + async/await + patterns + arquitetura + performance + deploy', ok: true },
        { t: 'Memorizar todos os métodos do .NET', ok: false },
        { t: 'Apenas saber fazer APIs REST', ok: false },
      ],
      exp: 'Dev Sobrevivente: domina o ecossistema completo. Sintaxe fluente, LINQ expressivo, async correto, design patterns, Clean Architecture, performance consciente, deployment confiante.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Revisão: quando usar cada recurso avançado.',
      q: 'Qual recurso é mais adequado para processar grandes datasets em pipeline sem carregar tudo na memória?',
      hint: 'Lazy evaluation',
      opts: [
        { t: 'List<T> com ForEach', ok: false },
        { t: 'IAsyncEnumerable<T> com yield return — processa item a item de forma lazy e assíncrona', ok: true },
        { t: 'Array[] — acesso por índice é o mais rápido', ok: false },
        { t: 'Dictionary<K,V> — lookup O(1)', ok: false },
      ],
      exp: 'IAsyncEnumerable: yield return + await = cada item processado ao ser requisitado. Não carrega dataset na memória. Ideal para: banco de dados, arquivos grandes, streams de rede.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Revisão: design patterns mais importantes.',
      q: 'Qual padrão de design permite adicionar comportamentos a objetos dinamicamente sem alterar a classe original?',
      hint: 'Envolve o objeto',
      opts: [
        { t: 'Singleton — garante uma instância', ok: false },
        { t: 'Decorator — envolve o objeto adicionando responsabilidades', ok: true },
        { t: 'Factory — cria objetos', ok: false },
        { t: 'Observer — notifica mudanças', ok: false },
      ],
      exp: 'Decorator: IComponent + ConcreteComponent + Decorator(IComponent). Adiciona logging, cache, retry transparentemente. Middleware do ASP.NET Core é Decorator em ação.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Revisão: a regra de ouro do async/await.',
      q: 'Qual é a prática mais importante para evitar deadlocks com async/await no .NET?',
      hint: 'Async all the way',
      opts: [
        { t: 'Usar .Result ou .Wait() para esperar Tasks síncronamente', ok: false },
        { t: 'Async all the way — nunca misturar código síncrono bloqueante com async', ok: true },
        { t: 'Sempre usar Task.Run para operações I/O', ok: false },
        { t: 'Usar ConfigureAwait(true) em todas as chamadas', ok: false },
      ],
      exp: 'Async all the way: se um método é async, todos que o chamam devem ser async. .Result/.Wait() em contexto com SynchronizationContext (WinForms, ASP.NET clássico) → deadlock.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'O padrão mais importante de C# moderno — null safety:',
      code: `<span class="kw">string</span>? nome = <span class="mt">ObterNome</span>();
<span class="kw">string</span> resultado = nome <span class="mt">_______</span> <span class="st">"Agente Desconhecido"</span>;`,
      q: 'Qual operador retorna o valor da esquerda se não-nulo, senão o da direita?',
      hint: 'Null coalescing',
      ans: '??',
      exp: 'nome ?? "fallback": se nome for null, retorna "fallback". ??= : atribui se null. ?. : acessa membro se não null. Nullable reference types + ?? = código seguro.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Pattern matching — o poder do switch moderno:',
      code: `<span class="kw">string</span> <span class="mt">Classificar</span>(<span class="kw">int</span> xp) => xp <span class="kw">_______</span>
{
    >= <span class="nm">1000</span> => <span class="st">"Lendário"</span>,
    >= <span class="nm">500</span>  => <span class="st">"Veterano"</span>,
    _         => <span class="st">"Recruta"</span>
};`,
      q: 'Qual keyword inicia uma switch expression em C#?',
      hint: 'switch',
      ans: 'switch',
      exp: 'switch expression: valor switch { padrão => resultado, _ => default }. Mais conciso que switch statement. Suporta: relational patterns (>= 500), type patterns, and/or patterns.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Injeção de dependência — o coração do .NET moderno:',
      code: `builder.Services.<span class="mt">_______</span>&lt;IArmaRepo, ArmaRepoImpl&gt;();`,
      q: 'Qual lifetime registra uma nova instância por requisição HTTP?',
      hint: 'Scoped',
      ans: 'AddScoped',
      exp: 'AddScoped: nova instância por escopo (requisição HTTP). AddTransient: nova a cada resolve. AddSingleton: uma instância para todo o app. Scoped = padrão para repositórios.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'LINQ — a ferramenta mais poderosa do C#.',
      code: `<span class="kw">var</span> missoes = <span class="kw">new</span>[] {
    (<span class="st">"Aldeia"</span>, <span class="nm">100</span>),
    (<span class="st">"Castelo"</span>, <span class="nm">250</span>),
    (<span class="st">"Ilha"</span>, <span class="nm">500</span>),
    (<span class="st">"Epílogo"</span>, <span class="nm">1000</span>)
};
<span class="kw">var</span> totalXP = missoes
    .<span class="mt">Where</span>(m => m.<span class="mt">Item2</span> >= <span class="nm">250</span>)
    .<span class="mt">Sum</span>(m => m.<span class="mt">Item2</span>);
Console.<span class="mt">WriteLine</span>(totalXP);`,
      q: 'O que será exibido?',
      hint: 'Soma dos XP >= 250',
      opts: [
        { t: '1750', ok: true },
        { t: '1850', ok: false },
        { t: '1500', ok: false },
        { t: '250', ok: false },
      ],
      exp: 'Filtra >= 250: Castelo(250), Ilha(500), Epílogo(1000). Sum = 250+500+1000 = 1750. "1750".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Records — imutabilidade e with expression.',
      code: `<span class="kw">record</span> Leon(<span class="kw">string</span> Arma, <span class="kw">int</span> HP);
<span class="kw">var</span> v1 = <span class="kw">new</span> Leon(<span class="st">"Shotgun"</span>, <span class="nm">100</span>);
<span class="kw">var</span> v2 = v1 <span class="kw">with</span> { Arma = <span class="st">"Rifle"</span> };
Console.<span class="mt">WriteLine</span>(<span class="st">$"{v1.Arma} | {v2.Arma} | {v2.HP}"</span>);`,
      q: 'O que será exibido?',
      hint: 'with cria cópia, não muta o original',
      opts: [
        { t: 'Rifle | Rifle | 100', ok: false },
        { t: 'Shotgun | Rifle | 100', ok: true },
        { t: 'Shotgun | Shotgun | 100', ok: false },
        { t: 'Erro — records são imutáveis', ok: false },
      ],
      exp: 'v1: Arma=Shotgun, HP=100. v2 = v1 with {Arma="Rifle"}: nova instância, HP=100 copiado. v1 não muda. "Shotgun | Rifle | 100".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: '🏆 A última questão da jornada Dev Sobrevivente.',
      code: `<span class="kw">var</span> jornada = <span class="kw">new</span>[] {
    <span class="st">"Aldeia"</span>, <span class="st">"Castelo"</span>, <span class="st">"Ilha"</span>, <span class="st">"Epílogo"</span>
};
<span class="kw">var</span> conquista = <span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">" → "</span>, jornada);
Console.<span class="mt">WriteLine</span>(<span class="st">$"Dev Sobrevivente: {conquista} ✓"</span>);`,
      q: 'O que será exibido?',
      hint: 'A jornada completa',
      opts: [
        { t: 'Dev Sobrevivente: Aldeia → Castelo → Ilha → Epílogo ✓', ok: true },
        { t: 'Dev Sobrevivente: Aldeia, Castelo, Ilha, Epílogo ✓', ok: false },
        { t: 'Aldeia → Castelo → Ilha → Epílogo', ok: false },
        { t: 'Erro — emoji em string', ok: false },
      ],
      exp: 'string.Join(" → ", array): une com separador. conquista = "Aldeia → Castelo → Ilha → Epílogo". Resultado: "Dev Sobrevivente: Aldeia → Castelo → Ilha → Epílogo ✓". Parabéns, Dev Sobrevivente! 🏆',
    },

  ]
};
