const MISSION_49 = {
  id: 49,
  title: "MISSÃO 50 — A RENDIÇÃO DO CASTELO",
  icon: '🏁',
  free: false,
  desc: "O castelo está prestes a cair. Esta é a prova suprema — cada conceito do Act II será testado. Coleções, OOP, LINQ, async, eventos, IO, JSON, DateTime, Regex. Tudo ou nada.",
  objs: [],
  steps: [

    // Q1 — MC (Coleções)
    {
      type: 'mc',
      bubble: 'Revisão: escolhendo a coleção certa.',
      q: 'Para garantir que nenhum inimigo seja processado duas vezes, qual coleção usar?',
      hint: 'Unicidade garantida O(1)',
      opts: [
        { t: 'List<T> com Contains()', ok: false },
        { t: 'HashSet<T> — garante unicidade e Contains O(1)', ok: true },
        { t: 'Queue<T>', ok: false },
        { t: 'Dictionary com valores null', ok: false },
      ],
      exp: 'HashSet garante unicidade automaticamente. Add() ignora duplicatas. Contains() é O(1). List.Contains() é O(n).',
    },

    // Q2 — MC (OOP)
    {
      type: 'mc',
      bubble: 'Revisão: os pilares OOP.',
      q: 'Qual pilar OOP está em uso quando uma variável do tipo "Inimigo" executa o método de um "Regenerador"?',
      hint: 'Execução do método correto em runtime',
      opts: [
        { t: 'Encapsulamento', ok: false },
        { t: 'Herança', ok: false },
        { t: 'Polimorfismo', ok: true },
        { t: 'Abstração', ok: false },
      ],
      exp: 'Polimorfismo: a referência é do tipo pai (Inimigo), mas o método executado é do tipo real (Regenerador) — dynamic dispatch.',
    },

    // Q3 — MC (LINQ)
    {
      type: 'mc',
      bubble: 'Revisão LINQ: lazy evaluation.',
      q: 'Por que chamar ToList() ao final de uma cadeia LINQ pode ser importante?',
      hint: 'Evitar múltiplas execuções',
      opts: [
        { t: 'ToList() é obrigatório para LINQ funcionar', ok: false },
        { t: 'Materializa o resultado — evita executar a consulta múltiplas vezes ao reiterar', ok: true },
        { t: 'ToList() é mais lento sempre', ok: false },
        { t: 'Converte para tipo genérico', ok: false },
      ],
      exp: 'LINQ é lazy: sem ToList(), cada foreach re-executa a consulta. ToList() executa uma vez e armazena. Essencial com fontes mutáveis ou operações custosas.',
    },

    // Q4 — MC (Async)
    {
      type: 'mc',
      bubble: 'Revisão Async: Task.WhenAll vs sequencial.',
      q: 'Qual o benefício de usar Task.WhenAll(t1, t2) em vez de "await t1; await t2;"?',
      hint: 'Paralelismo vs sequência',
      opts: [
        { t: 'WhenAll é mais fácil de ler', ok: false },
        { t: 'WhenAll executa as Tasks em paralelo — tempo total = a mais longa, não a soma', ok: true },
        { t: 'WhenAll cancela as Tasks automaticamente', ok: false },
        { t: 'Não há diferença prática', ok: false },
      ],
      exp: '"await t1; await t2" = sequencial, espera t1 terminar antes de iniciar t2. WhenAll: ambas rodam em paralelo — muito mais rápido para IO.',
    },

    // Q5 — MC (Events)
    {
      type: 'mc',
      bubble: 'Revisão de Eventos: a restrição da palavra-chave event.',
      q: 'Por que "event" é preferível a um delegate público para notificações?',
      hint: 'Encapsulamento do mecanismo',
      opts: [
        { t: 'event é mais rápido', ok: false },
        { t: 'event impede que código externo invoque ou sobrescreva o delegate — só += e -= são permitidos', ok: true },
        { t: 'event só aceita EventHandler como tipo', ok: false },
        { t: 'event permite multicast, delegate não', ok: false },
      ],
      exp: 'Com "event", código externo só pode += (inscrever) e -= (desinscrever). Sem "event", qualquer código poderia invocar ou zerar o delegate.',
    },

    // Q6 — MC (Pattern Matching)
    {
      type: 'mc',
      bubble: 'Revisão Pattern Matching: switch expression com property pattern.',
      q: 'O que "obj is { HP: > 0, Nome: not null }" verifica?',
      hint: 'Property pattern com condições',
      opts: [
        { t: 'Apenas se obj tem as propriedades HP e Nome', ok: false },
        { t: 'Se HP > 0 E Nome não é null — ambas condições simultaneamente', ok: true },
        { t: 'Se HP ou Nome satisfazem uma condição', ok: false },
        { t: 'Lança exceção se obj for null', ok: false },
      ],
      exp: 'Property pattern verifica múltiplas propriedades com AND implícito. "not null" é negation pattern. Tudo numa expressão compacta.',
    },

    // Q7 — Fill (Dictionary)
    {
      type: 'fill',
      bubble: 'Padrão seguro para acessar Dictionary sem exceção:',
      code: `<span class="kw">if</span> (scores.<span class="mt">TryGetValue</span>(<span class="st">"Leon"</span>, <span class="kw">out int</span> _______)))\n    Console.<span class="mt">WriteLine</span>(<span class="st">$"Score: {score}"</span>);`,
      q: 'Qual nome dar à variável out que recebe o score?',
      hint: 'Pontuação',
      ans: 'score',
      exp: '"TryGetValue("Leon", out int score)" — se a chave existir, score recebe o valor e retorna true. Sem KeyNotFoundException.',
    },

    // Q8 — Fill (Interface)
    {
      type: 'fill',
      bubble: 'Declarando uma interface de salvamento:',
      code: `<span class="kw">public _______</span> ISalvavel\n{\n    <span class="kw">void</span> <span class="mt">Salvar</span>();\n    <span class="kw">void</span> <span class="mt">Carregar</span>();\n}`,
      q: 'Qual palavra-chave declara uma interface?',
      hint: 'Contrato sem implementação',
      ans: 'interface',
      exp: '"interface" declara o contrato. Membros são implicitamente public e abstract. Convenção: "I" no início do nome (ISalvavel).',
    },

    // Q9 — Fill (Generics)
    {
      type: 'fill',
      bubble: 'Método genérico que retorna o maior elemento de uma lista:',
      code: `<span class="kw">static</span> T <span class="mt">Maior</span>&lt;<span class="kw">_______</span>&gt;(List&lt;T&gt; lista)\n    <span class="kw">where</span> T : IComparable&lt;T&gt;\n    => lista.<span class="mt">Max</span>();`,
      q: 'Qual placeholder de tipo genérico usar?',
      hint: 'Parâmetro de tipo por convenção',
      ans: 'T',
      exp: '"T" é o parâmetro de tipo genérico por convenção. "where T : IComparable<T>" garante que T pode ser comparado.',
    },

    // Q10 — Fill (Async/IO)
    {
      type: 'fill',
      bubble: 'Para ler um arquivo de forma assíncrona:',
      code: `<span class="kw">var</span> conteudo = <span class="kw">await</span> File.<span class="mt">_______</span>(<span class="st">"dados.txt"</span>);`,
      q: 'Qual método async lê todo o conteúdo de um arquivo como string?',
      hint: 'ReadAllText + Async',
      ans: 'ReadAllTextAsync',
      exp: '"File.ReadAllTextAsync(path)" é a versão async de ReadAllText. Libera a thread durante a leitura em vez de bloqueá-la.',
    },

    // Q11 — Fill (DateTime)
    {
      type: 'fill',
      bubble: 'Para formatar um DateTime no padrão ISO 8601 (usado em APIs):',
      code: `<span class="kw">string</span> iso = DateTime.UtcNow.<span class="mt">ToString</span>(<span class="st">"_______"</span>);`,
      q: 'Qual formato produz "2025-03-15T22:00:00" (data + T + hora)?',
      hint: 'yyyy-MM-dd + T + HH:mm:ss',
      ans: 'yyyy-MM-ddTHH:mm:ss',
      exp: '"yyyy-MM-ddTHH:mm:ss" = formato ISO 8601. O "T" literal no meio separa data de hora. Padrão universal de APIs REST.',
    },

    // Q12 — Fill (JSON)
    {
      type: 'fill',
      bubble: 'Para serializar com indentação legível por humanos:',
      code: `<span class="kw">var</span> opts = <span class="kw">new</span> JsonSerializerOptions { _______ = <span class="kw">true</span> };\n<span class="kw">var</span> json = JsonSerializer.<span class="mt">Serialize</span>(obj, opts);`,
      q: 'Qual opção ativa a formatação com espaços e quebras de linha?',
      hint: 'Escrever com indentação',
      ans: 'WriteIndented',
      exp: '"WriteIndented = true" formata o JSON com indentação para leitura humana. Em produção, use false para menor payload.',
    },

    // Q13 — Code (LINQ + OOP)
    {
      type: 'code',
      bubble: 'LINQ com objetos — filtrando chefes com mais HP.',
      code: `<span class="kw">record</span> Inimigo(<span class="kw">string</span> Nome, <span class="kw">int</span> HP, <span class="kw">bool</span> EhChefe);\n<span class="kw">var</span> sala = <span class="kw">new</span>[] {\n    <span class="kw">new</span> Inimigo(<span class="st">"Ganado"</span>,    <span class="nm">50</span>,   <span class="kw">false</span>),\n    <span class="kw">new</span> Inimigo(<span class="st">"Saddler"</span>,   <span class="nm">1000</span>, <span class="kw">true</span>),\n    <span class="kw">new</span> Inimigo(<span class="st">"Krauser"</span>,   <span class="nm">500</span>,  <span class="kw">true</span>),\n    <span class="kw">new</span> Inimigo(<span class="st">"Cultista"</span>,  <span class="nm">60</span>,   <span class="kw">false</span>),\n};\n<span class="kw">var</span> hpTotal = sala\n    .<span class="mt">Where</span>(e => e.EhChefe)\n    .<span class="mt">Sum</span>(e => e.HP);\nConsole.<span class="mt">WriteLine</span>(hpTotal);`,
      q: 'Qual o HP total dos chefes?',
      hint: 'Saddler(1000) + Krauser(500)',
      opts: [
        { t: '1610', ok: false },
        { t: '1500', ok: true },
        { t: '500', ok: false },
        { t: '1000', ok: false },
      ],
      exp: 'Where(EhChefe): Saddler e Krauser. Sum(HP): 1000+500 = 1500.',
    },

    // Q14 — Code (Events + Async)
    {
      type: 'code',
      bubble: 'Evento disparado após operação async.',
      code: `<span class="kw">public class</span> Motor\n{\n    <span class="kw">public event</span> EventHandler&lt;<span class="kw">int</span>&gt; Concluiu;\n    <span class="kw">public async</span> Task <span class="mt">RodarAsync</span>(<span class="kw">int</span> valor)\n    {\n        <span class="kw">await</span> Task.<span class="mt">Delay</span>(<span class="nm">0</span>);\n        Concluiu?.<span class="mt">Invoke</span>(<span class="kw">this</span>, valor * <span class="nm">2</span>);\n    }\n}\n<span class="kw">var</span> m = <span class="kw">new</span> Motor();\nm.Concluiu += (_, v) => Console.<span class="mt">WriteLine</span>(<span class="st">$"Resultado: {v}"</span>);\n<span class="kw">await</span> m.<span class="mt">RodarAsync</span>(<span class="nm">21</span>);`,
      q: 'O que será exibido?',
      hint: 'valor * 2 = 21 * 2',
      opts: [
        { t: 'Resultado: 21', ok: false },
        { t: 'Resultado: 42', ok: true },
        { t: 'Nada — evento async não dispara', ok: false },
        { t: 'Resultado: 0', ok: false },
      ],
      exp: 'RodarAsync(21) → await → Invoke(this, 21*2=42). Handler: "Resultado: 42".',
    },

    // Q15 — Code (Pattern + Dictionary)
    {
      type: 'code',
      bubble: 'Pattern matching com dados de Dictionary.',
      code: `<span class="kw">var</span> armas = <span class="kw">new</span> Dictionary&lt;<span class="kw">string</span>,<span class="kw">int</span>&gt;\n    { [<span class="st">"Pistola"</span>]=<span class="nm">25</span>, [<span class="st">"Escopeta"</span>]=<span class="nm">80</span>, [<span class="st">"Rifle"</span>]=<span class="nm">120</span> };\n<span class="kw">foreach</span> (<span class="kw">var</span> (nome, dano) <span class="kw">in</span> armas)\n{\n    <span class="kw">string</span> tier = dano <span class="kw">switch</span>\n    {\n        >= <span class="nm">100</span> => <span class="st">"S"</span>,\n        >= <span class="nm">50</span>  => <span class="st">"A"</span>,\n        <span class="kw">_</span>      => <span class="st">"B"</span>\n    };\n    Console.<span class="mt">Write</span>(<span class="st">$"{nome}:{tier} "</span>);\n}`,
      q: 'O que será exibido?',
      hint: 'Pistola=25→B, Escopeta=80→A, Rifle=120→S',
      opts: [
        { t: 'Pistola:B Escopeta:A Rifle:S', ok: true },
        { t: 'Pistola:A Escopeta:S Rifle:S', ok: false },
        { t: 'Pistola:B Escopeta:B Rifle:A', ok: false },
        { t: 'Rifle:S Escopeta:A Pistola:B', ok: false },
      ],
      exp: '25 < 50 → B. 80 >= 50 → A. 120 >= 100 → S. Pistola:B Escopeta:A Rifle:S.',
    },

    // Q16 — Code (Regex + JSON)
    {
      type: 'code',
      bubble: 'Regex validando antes de desserializar.',
      code: `<span class="kw">static bool</span> <span class="mt">JsonValido</span>(<span class="kw">string</span> s)\n    => Regex.<span class="mt">IsMatch</span>(s, <span class="st">@"^\\{.*\\}$"</span>);\n\nConsole.<span class="mt">WriteLine</span>(<span class="mt">JsonValido</span>(<span class="st">@"{""hp"":100}"</span>));\nConsole.<span class="mt">WriteLine</span>(<span class="mt">JsonValido</span>(<span class="st">"não é json"</span>));`,
      q: 'O que será exibido?',
      hint: 'Padrão verifica se começa com { e termina com }',
      opts: [
        { t: 'True e True', ok: false },
        { t: 'True e False', ok: true },
        { t: 'False e False', ok: false },
        { t: 'Erro — Regex inválida', ok: false },
      ],
      exp: '"{...}"  começa com { e termina com } → True. "não é json" não satisfaz → False.',
    },

    // Q17 — Code (DateTime + LINQ)
    {
      type: 'code',
      bubble: 'DateTime com LINQ filtrando missões recentes.',
      code: `<span class="kw">var</span> missoes = <span class="kw">new</span>[]\n{\n    <span class="kw">new</span> { Nome=<span class="st">"M1"</span>, Data=<span class="kw">new</span> DateTime(<span class="nm">2025</span>,<span class="nm">1</span>,<span class="nm">10</span>) },\n    <span class="kw">new</span> { Nome=<span class="st">"M2"</span>, Data=<span class="kw">new</span> DateTime(<span class="nm">2025</span>,<span class="nm">3</span>,<span class="nm">20</span>) },\n    <span class="kw">new</span> { Nome=<span class="st">"M3"</span>, Data=<span class="kw">new</span> DateTime(<span class="nm">2025</span>,<span class="nm">2</span>,<span class="nm">5</span>)  }\n};\n<span class="kw">var</span> corte = <span class="kw">new</span> DateTime(<span class="nm">2025</span>,<span class="nm">2</span>,<span class="nm">1</span>);\n<span class="kw">var</span> recentes = missoes.<span class="mt">Where</span>(m => m.Data > corte).<span class="mt">Count</span>();\nConsole.<span class="mt">WriteLine</span>(recentes);`,
      q: 'Quantas missões são posteriores a 01/02/2025?',
      hint: 'M2 (março) e M3 (fevereiro/5) são maiores que 01/fev',
      opts: [
        { t: '1', ok: false },
        { t: '2', ok: true },
        { t: '3', ok: false },
        { t: '0', ok: false },
      ],
      exp: 'Corte = 01/02/2025. M1(10/jan) < corte. M2(20/mar) > corte ✓. M3(05/fev) > corte ✓. Resultado: 2.',
    },

    // Q18 — Code (IO + JSON)
    {
      type: 'code',
      bubble: 'Fluxo completo: serializar e simular gravação.',
      code: `<span class="kw">record</span> Save(<span class="kw">string</span> Jogador, <span class="kw">int</span> Missao, <span class="kw">int</span> XP);\n\n<span class="kw">var</span> save = <span class="kw">new</span> Save(<span class="st">"Leon"</span>, <span class="nm">49</span>, <span class="nm">9800</span>);\n<span class="kw">string</span> json = JsonSerializer.<span class="mt">Serialize</span>(save);\n<span class="kw">var</span> recuperado = JsonSerializer.<span class="mt">Deserialize</span>&lt;Save&gt;(json)!;\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"{recuperado.Jogador} M{recuperado.Missao} {recuperado.XP}xp"</span>);`,
      q: 'O que será exibido?',
      hint: 'Serialize → Deserialize recupera os dados',
      opts: [
        { t: 'Erro — record não serializável', ok: false },
        { t: 'Leon M49 9800xp', ok: true },
        { t: 'Leon M0 0xp', ok: false },
        { t: 'null M0 0xp', ok: false },
      ],
      exp: 'Save é record — serializável. Deserialize recupera Jogador="Leon", Missao=49, XP=9800. Saída: "Leon M49 9800xp".',
    },

    // Q19 — Code (Extension + Pattern + LINQ)
    {
      type: 'code',
      bubble: 'Combinando extension method, pattern e LINQ.',
      code: `<span class="kw">public static class</span> Ext\n{\n    <span class="kw">public static string</span> <span class="mt">StatusHP</span>(<span class="kw">this int</span> hp) => hp <span class="kw">switch</span>\n    {\n        <= <span class="nm">0</span>  => <span class="st">"💀"</span>,\n        < <span class="nm">30</span>  => <span class="st">"🔴"</span>,\n        < <span class="nm">70</span>  => <span class="st">"🟡"</span>,\n        <span class="kw">_</span>      => <span class="st">"🟢"</span>\n    };\n}\n<span class="kw">var</span> hps = <span class="kw">new</span>[] { <span class="nm">100</span>, <span class="nm">25</span>, <span class="nm">0</span>, <span class="nm">55</span> };\n<span class="kw">var</span> res = hps.<span class="mt">Select</span>(h => h.<span class="mt">StatusHP</span>());\nConsole.<span class="mt">WriteLine</span>(<span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">" "</span>, res));`,
      q: 'O que será exibido?',
      hint: '100→🟢, 25→🔴, 0→💀, 55→🟡',
      opts: [
        { t: '🟢 🔴 💀 🟡', ok: true },
        { t: '🟢 🟡 💀 🟡', ok: false },
        { t: '🟢 🔴 🔴 🟡', ok: false },
        { t: '🟢 🟢 💀 🟡', ok: false },
      ],
      exp: '100: _ → 🟢. 25: <30 → 🔴. 0: <=0 → 💀. 55: <70 → 🟡. String.Join: "🟢 🔴 💀 🟡".',
    },

    // Q20 — Code (DESAFIO FINAL ACT II)
    {
      type: 'code',
      bubble: '🏆 DESAFIO FINAL DO ACT II — Sistema completo integrando tudo.',
      code: `<span class="kw">record</span> Missao(<span class="kw">string</span> Nome, <span class="kw">int</span> XP, <span class="kw">bool</span> Completa);\n\n<span class="kw">var</span> missoes = <span class="kw">new</span> List&lt;Missao&gt;\n{\n    <span class="kw">new</span>(<span class="st">"Infiltração"</span>, <span class="nm">100</span>, <span class="kw">true</span>),\n    <span class="kw">new</span>(<span class="st">"Castelo"</span>,    <span class="nm">200</span>, <span class="kw">true</span>),\n    <span class="kw">new</span>(<span class="st">"A Ilha"</span>,     <span class="nm">300</span>, <span class="kw">false</span>),\n};\n\n<span class="kw">var</span> xpTotal = missoes\n    .<span class="mt">Where</span>(m => m.Completa)\n    .<span class="mt">Sum</span>(m => m.XP);\n\n<span class="kw">string</span> json  = JsonSerializer.<span class="mt">Serialize</span>(<span class="kw">new</span> { XP = xpTotal, Rank = xpTotal >= <span class="nm">300</span> ? <span class="st">"A"</span> : <span class="st">"B"</span> });\n<span class="kw">var</span> resultado = JsonSerializer.<span class="mt">Deserialize</span>&lt;Dictionary&lt;<span class="kw">string</span>,JsonElement&gt;&gt;(json)!;\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"XP:{resultado[<span class=\"st\">\"XP\"</span>]} Rank:{resultado[<span class=\"st\">\"Rank\"</span>]}"</span>);`,
      q: 'O que será exibido?',
      hint: 'Missões completas: Infiltração+Castelo. XP = 300. Rank = 300 >= 300 → A',
      opts: [
        { t: 'XP:300 Rank:B', ok: false },
        { t: 'XP:300 Rank:A', ok: true },
        { t: 'XP:600 Rank:A', ok: false },
        { t: 'XP:100 Rank:B', ok: false },
      ],
      exp: 'Missões completas: Infiltração(100) + Castelo(200) = 300. 300 >= 300 → Rank="A". JSON serializado e desserializado. Saída: "XP:300 Rank:A".',
    },

  ]
};
