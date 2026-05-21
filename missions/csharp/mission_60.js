// ══════════════════════════════════════════════════════
// ACT IV — O BUNKER
// MISSÃO 61 — PORTAS DE AÇO
// Tema: Dependency Injection — conceito e padrão manual
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_60 = {
  id: 60,
  title: "MISSÃO 61 — PORTAS DE AÇO",
  icon: '🔑',
  free: false,
  desc: "O bunker secreto tem portas que só abrem com as chaves certas. Dependency Injection é o sistema de chaves do código moderno — cada componente recebe exatamente o que precisa, sem buscar por conta própria.",
  objs: [
    "Entender o princípio de Dependency Injection (DI)",
    "Diferenciar DI manual de containers de IoC",
    "Aplicar DI via construtor para reduzir acoplamento",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>Dependency Injection</strong> é um padrão onde um objeto recebe suas dependências de fora, em vez de criá-las internamente. Inverte o controle da criação.',
      q: 'Qual o problema que Dependency Injection resolve?',
      hint: 'Acoplamento e testabilidade',
      opts: [
        { t: 'Código muito lento', ok: false },
        { t: 'Alto acoplamento: classes criando suas próprias dependências, dificultando testes e manutenção', ok: true },
        { t: 'Uso excessivo de memória', ok: false },
        { t: 'Falta de encapsulamento', ok: false },
      ],
      exp: 'Sem DI: "new ServicoEmail()" dentro da classe torna difícil trocar a implementação ou testar. Com DI, a dependência vem de fora — mais flexível.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Existem três formas de injetar dependências: via <strong>construtor</strong> (preferida), via <strong>propriedade</strong> e via <strong>método</strong>.',
      q: 'Por que injeção via construtor é preferida?',
      hint: 'Garante que a dependência existe',
      opts: [
        { t: 'É mais rápida', ok: false },
        { t: 'Garante que o objeto é sempre criado com todas as dependências — sem estado inválido', ok: true },
        { t: 'É obrigatória em .NET', ok: false },
        { t: 'Reduz o número de parâmetros', ok: false },
      ],
      exp: 'Injeção via construtor: não dá para criar o objeto sem as dependências. O objeto nasce completo e válido. Via propriedade pode ter dependência null acidentalmente.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'O <strong>Princípio da Inversão de Dependência</strong> (DIP): dependa de abstrações, não de implementações concretas. Use interfaces, não classes concretas.',
      q: 'Qual violação do DIP está acontecendo aqui: "class Missao { ServicoEmail email = new ServicoEmail(); }"?',
      hint: 'Dependendo de concreto',
      opts: [
        { t: 'Nenhuma — isso é correto', ok: false },
        { t: 'Missao depende diretamente de ServicoEmail concreto — difícil trocar por MockEmail nos testes', ok: true },
        { t: 'Missao não tem construtor público', ok: false },
        { t: 'ServicoEmail deveria ser static', ok: false },
      ],
      exp: '"new ServicoEmail()" acopla fortemente. Com DIP: "class Missao { IEmailService email; Missao(IEmailService e) {...} }" — troca por qualquer implementação.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Um <strong>IoC Container</strong> (Inversion of Control) automatiza o registro e resolução de dependências. Em .NET, o built-in container usa <code>IServiceCollection</code>.',
      q: 'O que um container de IoC faz automaticamente?',
      hint: 'Resolve dependências em cadeia',
      opts: [
        { t: 'Gera código automaticamente', ok: false },
        { t: 'Registra interfaces com implementações e resolve cadeias de dependências ao criar objetos', ok: true },
        { t: 'Compila o código em tempo de execução', ok: false },
        { t: 'Substitui todos os new() do código', ok: false },
      ],
      exp: 'Container: você registra "IEmailService → ServicoEmail". Ao criar Missao, o container detecta que precisa de IEmailService e injecta ServicoEmail.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'DI via construtor — a dependência vem de fora:',
      code: `<span class="kw">public class</span> SistemaDefesa\n{\n    <span class="kw">private readonly</span> IArma _arma;\n    <span class="kw">public</span> <span class="mt">SistemaDefesa</span>(<span class="kw">_______</span> arma) => _arma = arma;\n    <span class="kw">public void</span> <span class="mt">Defender</span>() => _arma.<span class="mt">Usar</span>();\n}`,
      q: 'Qual tipo de parâmetro usar para injeção via interface?',
      hint: 'Abstração, não implementação',
      ans: 'IArma',
      exp: '"IArma arma" recebe qualquer implementação: Pistola, Espingarda, Rifle. SistemaDefesa não sabe qual arma é — baixo acoplamento.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Registrando serviço no container do .NET (em Program.cs):',
      code: `<span class="kw">var</span> builder = WebApplication.<span class="mt">CreateBuilder</span>(args);\nbuilder.Services.<span class="mt">_______</span>&lt;IArma, Pistola&gt;();`,
      q: 'Qual método registra um serviço como singleton (uma instância para todo o app)?',
      hint: 'Add + Singleton',
      ans: 'AddSingleton',
      exp: '"AddSingleton<IArma, Pistola>()" → uma única instância de Pistola para todo o app. AddScoped → por request. AddTransient → nova instância por injeção.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Resolvendo dependências manualmente sem container (DI manual):',
      code: `<span class="kw">var</span> arma   = <span class="kw">new</span> Pistola();\n<span class="kw">var</span> sistema = <span class="kw">new</span> <span class="mt">_______</span>(arma);`,
      q: 'Como criar SistemaDefesa passando a dependência manualmente?',
      hint: 'O nome da classe',
      ans: 'SistemaDefesa',
      exp: 'DI manual: você cria as dependências e passa no construtor. Sem container. Útil em apps simples e testes unitários.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'DI via construtor em ação — classe usa interface.',
      code: `<span class="kw">interface</span> ILogger { <span class="kw">void</span> <span class="mt">Log</span>(<span class="kw">string</span> msg); }\n<span class="kw">class</span> ConsoleLogger : ILogger\n    { <span class="kw">public void</span> <span class="mt">Log</span>(<span class="kw">string</span> m) => Console.<span class="mt">WriteLine</span>(<span class="st">$"[LOG] {m}"</span>); }\n\n<span class="kw">class</span> Missao\n{\n    <span class="kw">private readonly</span> ILogger _log;\n    <span class="kw">public</span> <span class="mt">Missao</span>(ILogger log) => _log = log;\n    <span class="kw">public void</span> <span class="mt">Executar</span>() => _log.<span class="mt">Log</span>(<span class="st">"Executando missão"</span>);\n}\n\n<span class="kw">var</span> missao = <span class="kw">new</span> Missao(<span class="kw">new</span> ConsoleLogger());\nmissao.<span class="mt">Executar</span>();`,
      q: 'O que será exibido?',
      hint: 'ConsoleLogger formata com [LOG]',
      opts: [
        { t: 'Executando missão', ok: false },
        { t: '[LOG] Executando missão', ok: true },
        { t: 'ConsoleLogger', ok: false },
        { t: 'Erro — ILogger não implementado', ok: false },
      ],
      exp: 'Missao recebe ConsoleLogger. Executar() chama _log.Log("Executando missão"). ConsoleLogger.Log formata: "[LOG] Executando missão".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Testabilidade — trocando implementação para teste.',
      code: `<span class="kw">class</span> MockLogger : ILogger\n{\n    <span class="kw">public</span> List&lt;<span class="kw">string</span>&gt; Logs = <span class="kw">new</span>();\n    <span class="kw">public void</span> <span class="mt">Log</span>(<span class="kw">string</span> m) => Logs.<span class="mt">Add</span>(m);\n}\n\n<span class="kw">var</span> mock = <span class="kw">new</span> MockLogger();\n<span class="kw">var</span> missao = <span class="kw">new</span> Missao(mock);\nmissao.<span class="mt">Executar</span>();\nConsole.<span class="mt">WriteLine</span>(mock.Logs[<span class="nm">0</span>]);`,
      q: 'O que será exibido?',
      hint: 'MockLogger captura as mensagens',
      opts: [
        { t: '[LOG] Executando missão', ok: false },
        { t: 'Executando missão', ok: true },
        { t: 'MockLogger', ok: false },
        { t: 'Erro — Mock não tem [LOG]', ok: false },
      ],
      exp: 'MockLogger.Log guarda em Logs sem formatar. mock.Logs[0] = "Executando missão". DI permite trocar para teste sem tocar em Missao.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Service Locator (anti-padrão) vs DI.',
      code: `<span class="kw">static class</span> Locator\n{\n    <span class="kw">static readonly</span> Dictionary&lt;Type, <span class="kw">object</span>&gt; _svcs = <span class="kw">new</span>();\n    <span class="kw">public static void</span> <span class="mt">Register</span>&lt;T&gt;(T svc) => _svcs[<span class="kw">typeof</span>(T)] = svc!;\n    <span class="kw">public static</span> T <span class="mt">Get</span>&lt;T&gt;() => (T)_svcs[<span class="kw">typeof</span>(T)];\n}\n\nLocator.<span class="mt">Register</span>&lt;ILogger&gt;(<span class="kw">new</span> ConsoleLogger());\n<span class="kw">var</span> log = Locator.<span class="mt">Get</span>&lt;ILogger&gt;();\nlog.<span class="mt">Log</span>(<span class="st">"Via Locator"</span>);`,
      q: 'Por que Service Locator é considerado anti-padrão?',
      hint: 'As dependências ficam ocultas',
      opts: [
        { t: 'É muito lento', ok: false },
        { t: 'As dependências ficam ocultas — difícil ver o que a classe precisa sem ler o código', ok: true },
        { t: 'Não funciona com interfaces', ok: false },
        { t: 'Não é um anti-padrão — é equivalente a DI', ok: false },
      ],
      exp: 'Service Locator: dependências ocultas. "Locator.Get<ILogger>()" dentro da classe não aparece no construtor. DI via construtor: todas as dependências visíveis na assinatura.',
    },

  ]
};
