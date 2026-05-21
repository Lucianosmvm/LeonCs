// ══════════════════════════════════════════════════════
// ACT IV — O BUNKER
// MISSÃO 65 — BANCO DE DADOS ENCRIPTADO
// Tema: LINQ avançado — GroupBy, Join, Aggregate, query syntax
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_64 = {
  id: 64,
  title: "MISSÃO 65 — BANCO DE DADOS ENCRIPTADO",
  icon: '🗄️',
  free: false,
  desc: "O banco de dados do bunker contém informações sobre todos os agentes e missões. Para extrair inteligência útil, você precisa dominar as queries avançadas do LINQ — joins, agrupamentos e agregações.",
  objs: [
    "Usar GroupBy para agrupar e agregar dados",
    "Fazer Join e GroupJoin entre sequências",
    "Escrever queries complexas com Aggregate e query syntax",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<code>GroupBy(keySelector)</code> agrupa elementos por uma chave, retornando <code>IEnumerable&lt;IGrouping&lt;TKey, TElement&gt;&gt;</code>.',
      q: 'Para agrupar missões por tipo e contar quantas de cada tipo há, qual sequência usar?',
      hint: 'GroupBy + Count por grupo',
      opts: [
        { t: '.Where(m => m.Tipo == tipo).Count()', ok: false },
        { t: '.GroupBy(m => m.Tipo).Select(g => new { Tipo = g.Key, Total = g.Count() })', ok: true },
        { t: '.OrderBy(m => m.Tipo)', ok: false },
        { t: '.Distinct() por Tipo', ok: false },
      ],
      exp: 'GroupBy agrupa. g.Key = a chave (Tipo). g.Count() = quantos no grupo. Select projeta o resultado. Padrão clássico de Group-Count.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>Join</code> combina duas sequências pela chave correspondente — equivale ao INNER JOIN do SQL.',
      q: 'O que Join(outer, inner, outerKey, innerKey, result) retorna?',
      hint: 'Apenas quando ambos têm a chave',
      opts: [
        { t: 'Todas as combinações possíveis', ok: false },
        { t: 'Apenas elementos onde a chave existe em ambas as sequências (INNER JOIN)', ok: true },
        { t: 'Todos os elementos da primeira sequência', ok: false },
        { t: 'Elementos sem correspondência', ok: false },
      ],
      exp: 'Join = INNER JOIN. Apenas pares com chave correspondente. Para "left join", use GroupJoin + SelectMany com DefaultIfEmpty.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>Aggregate(seed, func)</code> é o fold/reduce do LINQ. Combina todos os elementos em um único valor acumulado.',
      q: 'O que ".Aggregate(0, (acc, x) => acc + x)" faz?',
      hint: 'Acumula somando',
      opts: [
        { t: 'Retorna o maior elemento', ok: false },
        { t: 'Soma todos os elementos — equivale a Sum()', ok: true },
        { t: 'Retorna o primeiro elemento', ok: false },
        { t: 'Conta os elementos', ok: false },
      ],
      exp: 'Aggregate: começa com seed=0, aplica (acc+x) para cada elemento. acc vai acumulando: 0+x1=x1, x1+x2, etc. Resultado = soma total.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Query syntax é uma alternativa ao method chain para LINQ. <code>from x in lista where condição select x</code> é mais legível para queries complexas.',
      q: 'Qual é a equivalência entre query syntax e method syntax?',
      hint: 'Açúcar sintático',
      opts: [
        { t: 'São compilados para código diferente', ok: false },
        { t: 'Query syntax é compilada para method chain — resultado idêntico', ok: true },
        { t: 'Query syntax é mais rápida', ok: false },
        { t: 'Method syntax tem mais operadores disponíveis', ok: true },
      ],
      exp: 'Query syntax é açúcar sintático. Compilada para method chain. Method syntax tem mais operadores (Take, Skip, Zip, etc) — ambas são complementares.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Agrupando por tipo e somando XP de cada grupo:',
      code: `<span class="kw">var</span> porTipo = missoes\n    .<span class="mt">_______</span>(m => m.Tipo)\n    .<span class="mt">Select</span>(g => <span class="kw">new</span> { Tipo = g.Key, XP = g.<span class="mt">Sum</span>(m => m.XP) });`,
      q: 'Qual método LINQ agrupa os elementos?',
      hint: 'Group + By',
      ans: 'GroupBy',
      exp: '"GroupBy(m => m.Tipo)" agrupa missões pelo campo Tipo. Cada grupo g tem g.Key (o tipo) e os elementos do grupo.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Fazendo inner join entre agentes e missões pela chave AgentId:',
      code: `<span class="kw">var</span> resultado = agentes\n    .<span class="mt">_______</span>(\n        missoes,\n        a => a.Id,\n        m => m.AgentId,\n        (a, m) => <span class="st">$"{a.Nome}:{m.Codigo}"</span>);`,
      q: 'Qual método LINQ faz inner join entre duas sequências?',
      hint: 'Juntar em inglês',
      ans: 'Join',
      exp: '"Join(inner, outerKey, innerKey, resultado)" combina agentes com missões onde a.Id == m.AgentId. Retorna projeção para cada par.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Concatenando strings de uma lista com Aggregate:',
      code: `<span class="kw">string</span> relatorio = nomes\n    .<span class="mt">_______</span>((acc, nome) => acc + <span class="st">", "</span> + nome);`,
      q: 'Qual método LINQ aplica redução acumulativa?',
      hint: 'Agregar em inglês',
      ans: 'Aggregate',
      exp: '"Aggregate((acc, x) => ...)" sem seed usa o primeiro elemento como acumulador inicial. Concatena: "Leon, Ada, Ashley".',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'GroupBy com contagem e ordenação.',
      code: `<span class="kw">var</span> dados = <span class="kw">new</span>[] { <span class="st">"A"</span>,<span class="st">"B"</span>,<span class="st">"A"</span>,<span class="st">"C"</span>,<span class="st">"B"</span>,<span class="st">"A"</span> };\n<span class="kw">var</span> contagem = dados\n    .<span class="mt">GroupBy</span>(x => x)\n    .<span class="mt">OrderByDescending</span>(g => g.<span class="mt">Count</span>())\n    .<span class="mt">Select</span>(g => <span class="st">$"{g.Key}:{g.Count()}"</span>);\nConsole.<span class="mt">WriteLine</span>(<span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">" "</span>, contagem));`,
      q: 'O que será exibido?',
      hint: 'A×3, B×2, C×1 ordenados por frequência',
      opts: [
        { t: 'A:3 B:2 C:1', ok: true },
        { t: 'C:1 B:2 A:3', ok: false },
        { t: 'A:1 B:1 C:1', ok: false },
        { t: 'A B C', ok: false },
      ],
      exp: 'A aparece 3x, B 2x, C 1x. OrderByDescending(Count): A(3), B(2), C(1). "A:3 B:2 C:1".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Aggregate para encontrar máximo manualmente.',
      code: `<span class="kw">var</span> danos = <span class="kw">new</span>[] { <span class="nm">15</span>, <span class="nm">42</span>, <span class="nm">8</span>, <span class="nm">67</span>, <span class="nm">23</span> };\n<span class="kw">int</span> maxDano = danos\n    .<span class="mt">Aggregate</span>(<span class="kw">int</span>.MinValue, (max, x) => x > max ? x : max);\nConsole.<span class="mt">WriteLine</span>(maxDano);`,
      q: 'O que será exibido?',
      hint: 'Maior valor do array',
      opts: [
        { t: '42', ok: false },
        { t: '67', ok: true },
        { t: '15', ok: false },
        { t: 'int.MinValue', ok: false },
      ],
      exp: 'Aggregate com seed=int.MinValue, compara cada elemento com max. Maior de {15,42,8,67,23} = 67.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Query syntax com join e where.',
      code: `<span class="kw">record</span> Agente(<span class="kw">int</span> Id, <span class="kw">string</span> Nome);\n<span class="kw">record</span> Miss(<span class="kw">int</span> AId, <span class="kw">string</span> Cod);\n\n<span class="kw">var</span> ags  = <span class="kw">new</span>[] { <span class="kw">new</span> Agente(<span class="nm">1</span>,<span class="st">"Leon"</span>), <span class="kw">new</span> Agente(<span class="nm">2</span>,<span class="st">"Ada"</span>) };\n<span class="kw">var</span> miss = <span class="kw">new</span>[] { <span class="kw">new</span> Miss(<span class="nm">1</span>,<span class="st">"M1"</span>), <span class="kw">new</span> Miss(<span class="nm">1</span>,<span class="st">"M2"</span>), <span class="kw">new</span> Miss(<span class="nm">2</span>,<span class="st">"M3"</span>) };\n\n<span class="kw">var</span> q = <span class="kw">from</span> a <span class="kw">in</span> ags\n         <span class="kw">join</span> m <span class="kw">in</span> miss <span class="kw">on</span> a.Id <span class="kw">equals</span> m.AId\n         <span class="kw">where</span> a.Nome == <span class="st">"Leon"</span>\n         <span class="kw">select</span> m.Cod;\nConsole.<span class="mt">WriteLine</span>(<span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">","</span>, q));`,
      q: 'O que será exibido?',
      hint: 'Join + Where(Leon) + Select código',
      opts: [
        { t: 'M1,M2,M3', ok: false },
        { t: 'M1,M2', ok: true },
        { t: 'M3', ok: false },
        { t: 'Leon,Ada', ok: false },
      ],
      exp: 'Join por Id. Where(Nome="Leon"): agente 1. Missões de agente 1: M1, M2. Select(Cod): ["M1","M2"]. Join: "M1,M2".',
    },

  ]
};
