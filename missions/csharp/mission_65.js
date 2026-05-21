// ══════════════════════════════════════════════════════
// ACT IV — O BUNKER
// MISSÃO 66 — ARSENAL DE PADRÕES
// Tema: Design Patterns — Strategy, Factory, Builder
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_65 = {
  id: 65,
  title: "MISSÃO 66 — ARSENAL DE PADRÕES",
  icon: '🔧',
  free: false,
  desc: "Cada missão exige um arsenal diferente. Os Design Patterns são os blueprints testados e aprovados para construir código robusto — Strategy para comportamento intercambiável, Factory para criação, Builder para objetos complexos.",
  objs: [
    "Implementar o padrão Strategy para comportamentos intercambiáveis",
    "Usar Factory Method para encapsular criação de objetos",
    "Aplicar Builder para construção passo a passo de objetos complexos",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'O padrão <strong>Strategy</strong> define uma família de algoritmos, encapsula cada um e os torna intercambiáveis. O cliente usa a estratégia via interface.',
      q: 'Qual problema o padrão Strategy resolve?',
      hint: 'Troca de comportamento sem if/else',
      opts: [
        { t: 'Criação de objetos complexos', ok: false },
        { t: 'Herança múltipla de implementação', ok: false },
        { t: 'Eliminação de if/else gigantes para trocar algoritmos em runtime', ok: true },
        { t: 'Compartilhamento de estado entre objetos', ok: false },
      ],
      exp: 'Sem Strategy: if (tipo == "A") algoA() else if (tipo == "B") algoB()... Com Strategy: contexto.Estrategia.Executar() — troca a estratégia sem mudar o contexto.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'O padrão <strong>Factory Method</strong> define uma interface para criar objetos, mas deixa as subclasses/métodos decidirem qual classe instanciar.',
      q: 'Qual o benefício principal do Factory Method?',
      hint: 'Encapsula o "new"',
      opts: [
        { t: 'Evita o uso de interfaces', ok: false },
        { t: 'Centraliza e encapsula a criação de objetos — cliente não precisa saber qual classe concreta instanciar', ok: true },
        { t: 'Cria apenas um objeto (Singleton)', ok: false },
        { t: 'Reduz o uso de memória', ok: false },
      ],
      exp: 'Factory: "ArmaFactory.Criar("pistola")" retorna IArma sem o cliente saber se é Pistola, PistolaUpgradada, etc. Troca a implementação sem mudar o cliente.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'O padrão <strong>Builder</strong> constrói objetos complexos passo a passo, separando a construção da representação. Útil quando um objeto tem muitos campos opcionais.',
      q: 'Quando usar Builder em vez de construtores com muitos parâmetros?',
      hint: 'Muitos parâmetros opcionais',
      opts: [
        { t: 'Quando o objeto tem menos de 3 campos', ok: false },
        { t: 'Quando o objeto tem muitos campos, especialmente opcionais — Builder torna o código legível', ok: true },
        { t: 'Builder é mais rápido que new()', ok: false },
        { t: 'Quando o objeto precisa de herança', ok: false },
      ],
      exp: '"new Missao("nome", null, null, 0, true, false, null)" é impossível de ler. Builder: missaoBuilder.ComNome("x").ComXP(100).Build() — claro e legível.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'O padrão <strong>Singleton</strong> garante que uma classe tenha apenas uma instância. Em C# moderno, use Lazy&lt;T&gt; ou static readonly para thread-safety.',
      q: 'Qual implementação de Singleton é thread-safe em C#?',
      hint: 'Inicialização estática é thread-safe no .NET',
      opts: [
        { t: 'public static Singleton Instance = new Singleton()', ok: false },
        { t: 'private static readonly Singleton _instance = new Singleton()', ok: true },
        { t: 'if (_instance == null) _instance = new()', ok: false },
        { t: 'Nenhuma — Singleton é anti-padrão', ok: false },
      ],
      exp: 'Campos static readonly são inicializados uma vez de forma thread-safe pelo CLR. Lazy<T> também garante thread-safety. O "if null" sem lock tem race condition.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Padrão Strategy com interface de estratégia:',
      code: `<span class="kw">interface</span> IAtaque { <span class="kw">int</span> <span class="mt">Calcular</span>(<span class="kw">int</span> base_); }\n<span class="kw">class</span> AtaqueNormal  : IAtaque { <span class="kw">public int</span> <span class="mt">Calcular</span>(<span class="kw">int</span> b) => b; }\n<span class="kw">class</span> AtaqueCritico : IAtaque { <span class="kw">public int</span> <span class="mt">Calcular</span>(<span class="kw">int</span> b) => b * <span class="nm">2</span>; }\n\n<span class="kw">class</span> Combatente\n{\n    <span class="kw">public _______</span> Estrategia { <span class="kw">get</span>; <span class="kw">set</span>; }\n    <span class="kw">public int</span> <span class="mt">Atacar</span>(<span class="kw">int</span> b) => Estrategia.<span class="mt">Calcular</span>(b);\n}`,
      q: 'Qual tipo usar para a propriedade Estrategia?',
      hint: 'A interface',
      ans: 'IAtaque',
      exp: '"IAtaque Estrategia" aceita qualquer implementação. Trocar "combatente.Estrategia = new AtaqueCritico()" muda o comportamento sem alterar Combatente.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Factory Method para criar armas por código:',
      code: `<span class="kw">static</span> IArma <span class="mt">_______</span>(<span class="kw">string</span> tipo) => tipo <span class="kw">switch</span>\n{\n    <span class="st">"pistola"</span>  => <span class="kw">new</span> Pistola(),\n    <span class="st">"escopeta"</span> => <span class="kw">new</span> Escopeta(),\n    _           => <span class="kw">throw new</span> ArgumentException(<span class="st">$"Arma {tipo} desconhecida"</span>)\n};`,
      q: 'Qual nome descritivo para o método factory?',
      hint: 'Criar em inglês',
      ans: 'Criar',
      exp: '"Criar(tipo)" encapsula a criação. O cliente chama "ArmaFactory.Criar("pistola")" sem saber a classe concreta. Adicionar nova arma: apenas uma linha no switch.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Builder fluente — cada método retorna o próprio builder:',
      code: `<span class="kw">class</span> MissaoBuilder\n{\n    <span class="kw">private string</span> _nome;\n    <span class="kw">private int</span> _xp;\n    <span class="kw">public</span> MissaoBuilder <span class="mt">ComNome</span>(<span class="kw">string</span> n) { _nome = n; <span class="kw">_______</span> <span class="kw">this</span>; }\n    <span class="kw">public</span> MissaoBuilder <span class="mt">ComXP</span>(<span class="kw">int</span> x) { _xp = x; <span class="kw">return</span> <span class="kw">this</span>; }\n    <span class="kw">public</span> Missao <span class="mt">Build</span>() => <span class="kw">new</span> Missao(_nome, _xp);\n}`,
      q: 'Como retornar o próprio builder para encadeamento fluente?',
      hint: 'Retornar',
      ans: 'return',
      exp: '"return this" permite encadeamento: builder.ComNome("x").ComXP(100).Build(). Cada método retorna o builder modificado — padrão Fluent Interface.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'Strategy em ação.',
      code: `<span class="kw">interface</span> IMov { <span class="kw">string</span> <span class="mt">Mover</span>(); }\n<span class="kw">class</span> Correr : IMov { <span class="kw">public string</span> <span class="mt">Mover</span>() => <span class="st">"Correndo"</span>; }\n<span class="kw">class</span> Nadar  : IMov { <span class="kw">public string</span> <span class="mt">Mover</span>() => <span class="st">"Nadando"</span>; }\n\n<span class="kw">IMov</span> mov = <span class="kw">new</span> Correr();\nConsole.<span class="mt">WriteLine</span>(mov.<span class="mt">Mover</span>());\nmov = <span class="kw">new</span> Nadar();\nConsole.<span class="mt">WriteLine</span>(mov.<span class="mt">Mover</span>());`,
      q: 'O que será exibido?',
      hint: 'Correr então Nadar',
      opts: [
        { t: 'Correndo Correndo', ok: false },
        { t: 'Correndo Nadando', ok: true },
        { t: 'Nadando Correndo', ok: false },
        { t: 'Erro — troca de estratégia inválida', ok: false },
      ],
      exp: 'mov=Correr → "Correndo". mov=Nadar → "Nadando". Strategy: troca o comportamento atribuindo nova implementação.',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Factory Method criando objetos polimorficamente.',
      code: `<span class="kw">interface</span> INivel { <span class="kw">int</span> Dificuldade { <span class="kw">get</span>; } }\n<span class="kw">class</span> NvFacil   : INivel { <span class="kw">public int</span> Dificuldade => <span class="nm">1</span>; }\n<span class="kw">class</span> NvDificil : INivel { <span class="kw">public int</span> Dificuldade => <span class="nm">5</span>; }\n\n<span class="kw">static</span> INivel <span class="mt">CriarNivel</span>(<span class="kw">bool</span> hard)\n    => hard ? <span class="kw">new</span> NvDificil() : <span class="kw">new</span> NvFacil();\n\n<span class="kw">var</span> nv = <span class="mt">CriarNivel</span>(<span class="kw">true</span>);\nConsole.<span class="mt">WriteLine</span>(nv.Dificuldade);`,
      q: 'O que será exibido?',
      hint: 'hard=true → NvDificil',
      opts: [
        { t: '1', ok: false },
        { t: '5', ok: true },
        { t: 'NvDificil', ok: false },
        { t: 'Erro — Factory retorna interface', ok: false },
      ],
      exp: 'CriarNivel(true) → new NvDificil(). nv.Dificuldade = 5. Cliente só conhece INivel — não sabe qual classe concreta.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Builder fluente para objeto complexo.',
      code: `<span class="kw">record</span> Missao(<span class="kw">string</span> Nome, <span class="kw">int</span> XP, <span class="kw">bool</span> Premium);\n\n<span class="kw">class</span> MB\n{\n    <span class="kw">string</span> _n = <span class="st">""</span>; <span class="kw">int</span> _x; <span class="kw">bool</span> _p;\n    <span class="kw">public</span> MB <span class="mt">N</span>(<span class="kw">string</span> n) { _n=n; <span class="kw">return</span> <span class="kw">this</span>; }\n    <span class="kw">public</span> MB <span class="mt">X</span>(<span class="kw">int</span> x)  { _x=x; <span class="kw">return</span> <span class="kw">this</span>; }\n    <span class="kw">public</span> MB <span class="mt">P</span>()       { _p=<span class="kw">true</span>; <span class="kw">return</span> <span class="kw">this</span>; }\n    <span class="kw">public</span> Missao <span class="mt">Build</span>() => <span class="kw">new</span>(_n, _x, _p);\n}\n<span class="kw">var</span> m = <span class="kw">new</span> MB().<span class="mt">N</span>(<span class="st">"Ilha"</span>).<span class="mt">X</span>(<span class="nm">500</span>).<span class="mt">P</span>().<span class="mt">Build</span>();\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"{m.Nome} {m.XP} {m.Premium}"</span>);`,
      q: 'O que será exibido?',
      hint: 'Nome=Ilha, XP=500, Premium=true',
      opts: [
        { t: 'Ilha 500 False', ok: false },
        { t: 'Ilha 500 True', ok: true },
        { t: 'MB 500 True', ok: false },
        { t: 'Erro — record com Builder', ok: false },
      ],
      exp: 'Builder: N("Ilha"), X(500), P() define Premium=true. Build() cria Missao("Ilha",500,true). "Ilha 500 True".',
    },

  ]
};
