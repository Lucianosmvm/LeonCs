// ══════════════════════════════════════════════════════
// ACT IV — O BUNKER
// MISSÃO 69 — SISTEMA DE EXPRESSÕES
// Tema: Expression Trees básico, Func dinâmico, compilação em runtime
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_68 = {
  id: 68,
  title: "MISSÃO 69 — SISTEMA DE EXPRESSÕES",
  icon: '🌳',
  free: false,
  desc: "O sistema de IA do bunker constrói regras de combate dinamicamente — expressões que são montadas em runtime e compiladas como código real. Expression Trees são a camada mais profunda do poder do C#.",
  objs: [
    "Entender o conceito de Expression Trees",
    "Usar Expression<Func<T,bool>> para inspeção vs execução",
    "Compilar e executar expressões em runtime",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<code>Expression&lt;Func&lt;T, bool&gt;&gt;</code> representa o código como dados — uma árvore de expressão que pode ser inspecionada, transformada ou compilada.',
      q: 'Qual a diferença entre Func<T,bool> e Expression<Func<T,bool>>?',
      hint: 'Código vs dados',
      opts: [
        { t: 'São exatamente iguais', ok: false },
        { t: 'Func é código executável; Expression é a representação em árvore — pode ser inspecionada e traduzida (ex: para SQL)', ok: true },
        { t: 'Expression é mais rápida', ok: false },
        { t: 'Expression não pode ser compilada', ok: false },
      ],
      exp: 'Func: aponta para código. Expression: descreve o código como árvore. EF Core usa Expression para traduzir "x => x.HP > 100" para "WHERE HP > 100" em SQL.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Expression Trees são usadas por LINQ to SQL, EF Core e outros ORMs para traduzir predicados C# para queries de banco de dados.',
      q: 'Por que EF Core aceita Expression<Func<T,bool>> e não Func<T,bool>?',
      hint: 'EF precisa ver o código para traduzir',
      opts: [
        { t: 'Por limitação técnica do C#', ok: false },
        { t: 'Expression permite ao EF Core inspecionar o predicado e traduzi-lo para SQL', ok: true },
        { t: 'Func seria mais lento para EF Core', ok: false },
        { t: 'Não há diferença para EF Core', ok: false },
      ],
      exp: 'Com Func<T,bool>: EF teria que trazer todos os dados para memória e filtrar em C# (lento). Com Expression: EF lê a árvore e gera "WHERE X > Y" no banco.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>expression.Compile()</code> converte uma Expression Tree em um delegate executável. Compile() tem custo — faça caching do resultado.',
      q: 'O que .Compile() faz com uma Expression<Func<T,bool>>?',
      hint: 'Transforma em executável',
      opts: [
        { t: 'Valida a expressão', ok: false },
        { t: 'Gera código IL e retorna um Func<T,bool> executável', ok: true },
        { t: 'Serializa para JSON', ok: false },
        { t: 'Traduz para SQL', ok: false },
      ],
      exp: '.Compile() gera código IL em runtime e retorna Func<T,bool>. Custo: JIT compilation. Cache o resultado para não recompilar a cada chamada.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'A API <code>System.Linq.Expressions</code> permite construir Expression Trees programaticamente: <code>Expression.Parameter</code>, <code>Expression.Property</code>, <code>Expression.Lambda</code>.',
      q: 'Para construir "x => x.HP > 100" como Expression programaticamente, qual a ordem?',
      hint: 'Parâmetro → propriedade → constante → compare → lambda',
      opts: [
        { t: 'Lambda → Parameter → Body', ok: false },
        { t: 'Parameter("x") → Property(x,"HP") → Constant(100) → GreaterThan → Lambda', ok: true },
        { t: 'Expression.Compile() primeiro', ok: false },
        { t: 'Expression.New() para criar o predicado', ok: false },
      ],
      exp: '1. param = Expression.Parameter(typeof(T), "x"). 2. prop = Expression.Property(param, "HP"). 3. const = Expression.Constant(100). 4. body = GreaterThan(prop, const). 5. lambda = Lambda<Func<T,bool>>(body, param).',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Atribuindo uma lambda como Expression (não como Func):',
      code: `Expression&lt;Func&lt;<span class="kw">int</span>, <span class="kw">bool</span>&gt;&gt; _______ = n => n > <span class="nm">50</span>;`,
      q: 'Qual nome dar à variável Expression que verifica se n é maior que 50?',
      hint: 'Nome descritivo',
      ans: 'ehGrande',
      exp: 'Expression<Func<int,bool>> armazena a árvore de expressão, não o código compilado. Pode ser inspecionada: ehGrande.Body mostra "n > 50".',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Compilando uma Expression para Func e executando:',
      code: `Expression&lt;Func&lt;<span class="kw">int</span>, <span class="kw">bool</span>&gt;&gt; expr = n => n % <span class="nm">2</span> == <span class="nm">0</span>;\nFunc&lt;<span class="kw">int</span>, <span class="kw">bool</span>&gt; ehPar = expr.<span class="mt">_______</span>();\nConsole.<span class="mt">WriteLine</span>(ehPar(<span class="nm">4</span>));`,
      q: 'Qual método converte Expression em Func executável?',
      hint: 'Compilar em inglês',
      ans: 'Compile',
      exp: '"expr.Compile()" gera código IL e retorna Func<int,bool>. ehPar(4): 4%2==0 → true. Console.WriteLine(True).',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Inspecionando o tipo do nó raiz de uma Expression:',
      code: `Expression&lt;Func&lt;<span class="kw">int</span>, <span class="kw">int</span>&gt;&gt; dobrar = n => n * <span class="nm">2</span>;\nConsole.<span class="mt">WriteLine</span>(dobrar.<span class="mt">_______</span>.<span class="mt">GetType</span>().<span class="mt">Name</span>);`,
      q: 'Qual propriedade de Expression acessa o nó de código (corpo)?',
      hint: 'Corpo em inglês',
      ans: 'Body',
      exp: '"dobrar.Body" é o nó BinaryExpression (n * 2). Body.GetType().Name = "BinaryExpression". Permite inspecionar a estrutura do código.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'Expression compilada e executada.',
      code: `Expression&lt;Func&lt;<span class="kw">int</span>, <span class="kw">int</span>&gt;&gt; quadrado = n => n * n;\n<span class="kw">var</span> fn = quadrado.<span class="mt">Compile</span>();\nConsole.<span class="mt">WriteLine</span>(fn(<span class="nm">7</span>));`,
      q: 'O que será exibido?',
      hint: '7 * 7',
      opts: [
        { t: '7', ok: false },
        { t: '49', ok: true },
        { t: 'n * n', ok: false },
        { t: 'Erro — Expression não pode ser compilada assim', ok: false },
      ],
      exp: 'quadrado é Expression, não Func. .Compile() gera Func<int,int>. fn(7) = 7*7 = 49.',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Inspecionando parâmetros de uma Expression.',
      code: `Expression&lt;Func&lt;<span class="kw">int</span>, <span class="kw">int</span>, <span class="kw">int</span>&gt;&gt; somar = (a, b) => a + b;\nConsole.<span class="mt">WriteLine</span>(somar.Parameters.<span class="mt">Count</span>);\nConsole.<span class="mt">WriteLine</span>(somar.Parameters[<span class="nm">0</span>].Name);`,
      q: 'O que será exibido?',
      hint: 'Dois parâmetros: a e b',
      opts: [
        { t: '1 e "a"', ok: false },
        { t: '2 e "a"', ok: true },
        { t: '2 e "somar"', ok: false },
        { t: 'Erro — Parameters não disponível', ok: false },
      ],
      exp: 'somar.Parameters tem 2 parâmetros (a e b). Count=2. Parameters[0].Name = "a". Expression como dados — inspecionável.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Construindo Expression programaticamente.',
      code: `<span class="kw">var</span> param = Expression.<span class="mt">Parameter</span>(<span class="kw">typeof</span>(<span class="kw">int</span>), <span class="st">"x"</span>);\n<span class="kw">var</span> corpo = Expression.<span class="mt">Multiply</span>(param, Expression.<span class="mt">Constant</span>(<span class="nm">3</span>));\n<span class="kw">var</span> lambda = Expression.<span class="mt">Lambda</span>&lt;Func&lt;<span class="kw">int</span>, <span class="kw">int</span>&gt;&gt;(corpo, param);\n<span class="kw">var</span> fn = lambda.<span class="mt">Compile</span>();\nConsole.<span class="mt">WriteLine</span>(fn(<span class="nm">7</span>));`,
      q: 'O que será exibido?',
      hint: '7 multiplicado por 3',
      opts: [
        { t: '10', ok: false },
        { t: '21', ok: true },
        { t: '3', ok: false },
        { t: 'Erro — Expression construída manualmente', ok: false },
      ],
      exp: 'Expression construída: "x => x * 3". Compile() → Func<int,int>. fn(7) = 7*3 = 21. Expressão construída programaticamente funciona igual a lambda.',
    },

  ]
};
