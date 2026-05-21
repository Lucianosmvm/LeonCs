// ══════════════════════════════════════════════════════
// ACT III — A ILHA
// MISSÃO 55 — O ARSENAL GENÉRICO ⚔️
// Tema: Generics avançados — constraints, covariância, métodos genéricos
// Tipo: Chefe (18 questões) | 6 MC → 5 Fill → 7 Code
// ══════════════════════════════════════════════════════

const MISSION_54 = {
  id: 54,
  title: "MISSÃO 55 — O ARSENAL GENÉRICO ⚔️",
  icon: '⚔️',
  free: false,
  desc: "O arsenal da ilha tem armas para todo tipo de missão. Os Generics avançados são seu arsenal mais versátil — código que funciona para qualquer tipo, com segurança total em tempo de compilação.",
  objs: [
    "Dominar constraints de Generics (where T : class/struct/new()/interface)",
    "Entender covariância e contravariância (out/in)",
    "Criar métodos e classes genéricas com restrições complexas",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'A constraint <code>where T : new()</code> exige que T tenha um construtor público sem parâmetros. Permite criar instâncias de T dentro do método genérico.',
      q: 'Por que usar "where T : new()"?',
      hint: 'Para poder criar instâncias de T',
      opts: [
        { t: 'Para garantir que T é um número', ok: false },
        { t: 'Para poder fazer "new T()" dentro do método genérico', ok: true },
        { t: 'Para que T seja imutável', ok: false },
        { t: 'Para que T herde de object', ok: false },
      ],
      exp: '"where T : new()" garante que T tem construtor sem parâmetros. Sem ela, "new T()" não compila — o compilador não sabe se T tem esse construtor.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Múltiplas constraints são combinadas com vírgula: <code>where T : class, IComparable&lt;T&gt;, new()</code>. Todas devem ser satisfeitas.',
      q: 'Qual constraint combina exigência de tipo de referência E interface?',
      hint: 'class + interface juntos',
      opts: [
        { t: 'where T : class or IInimigo', ok: false },
        { t: 'where T : class, IInimigo', ok: true },
        { t: 'where T extends class, IInimigo', ok: false },
        { t: 'where T : class | IInimigo', ok: false },
      ],
      exp: '"where T : class, IInimigo" — vírgula combina constraints. T deve ser tipo de referência E implementar IInimigo.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<strong>Covariância</strong> (<code>out T</code>) permite usar IEnumerable&lt;Derived&gt; onde IEnumerable&lt;Base&gt; é esperado. <strong>Contravariância</strong> (<code>in T</code>) é o oposto.',
      q: 'Por que IEnumerable<string> pode ser usado onde IEnumerable<object> é esperado?',
      hint: 'string é object. IEnumerable<out T>',
      opts: [
        { t: 'Porque string herda de object', ok: false },
        { t: 'Porque IEnumerable<T> é covariante (out T) — permite atribuição do derivado ao base', ok: true },
        { t: 'Porque object e string são tipos primitivos', ok: false },
        { t: 'Isso não é possível em C#', ok: false },
      ],
      exp: 'IEnumerable<out T>: covariante. IEnumerable<string> → IEnumerable<object> funciona. List<T> NÃO é covariante, então List<string> → List<object> falha.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'O constraint <code>where T : struct</code> exige que T seja um tipo de valor (struct, enum). Não pode ser null.',
      q: 'Qual constraint usar para criar um método que funciona apenas com tipos de valor?',
      hint: 'Tipo de valor',
      opts: [
        { t: 'where T : class', ok: false },
        { t: 'where T : value', ok: false },
        { t: 'where T : struct', ok: true },
        { t: 'where T : ValueType', ok: false },
      ],
      exp: '"where T : struct" → T é tipo de valor (int, double, DateTime, structs customizadas). Garante que T nunca é null e tem cópia por valor.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Métodos genéricos podem ter seus tipos inferidos automaticamente pelo compilador baseado nos argumentos passados.',
      q: 'Para "static T Maior<T>(T a, T b) where T : IComparable<T>", qual tipo é inferido em Maior(10, 20)?',
      hint: 'O compilador vê os argumentos',
      opts: [
        { t: 'É necessário especificar: Maior<int>(10, 20)', ok: false },
        { t: 'T é inferido como int automaticamente', ok: true },
        { t: 'T é inferido como object', ok: false },
        { t: 'Não é possível inferir com constraints', ok: false },
      ],
      exp: 'O compilador infere T=int de Maior(10, 20). Não precisa de Maior<int>(10, 20). A inferência de tipo funciona mesmo com constraints.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<code>default(T)</code> retorna o valor padrão para T: null para tipos de referência, 0/false/struct vazia para tipos de valor.',
      q: 'O que "default(T)" retorna para um T genérico que pode ser qualquer tipo?',
      hint: 'Depende de class ou struct',
      opts: [
        { t: 'Sempre null', ok: false },
        { t: 'Sempre 0', ok: false },
        { t: 'null para tipos de referência; zero/false/vazio para tipos de valor', ok: true },
        { t: 'Lança exceção — T desconhecido', ok: false },
      ],
      exp: '"default(T)" é seguro para qualquer T. null se T é class. 0 se T é int. false se T é bool. Struct vazia se T é struct customizada.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Método genérico com constraint de interface comparável:',
      code: `<span class="kw">static</span> T <span class="mt">Maximo</span>&lt;T&gt;(T a, T b)\n    <span class="kw">where</span> T : <span class="kw">_______</span>&lt;T&gt;\n    => a.<span class="mt">CompareTo</span>(b) >= <span class="nm">0</span> ? a : b;`,
      q: 'Qual interface garante que T pode ser comparado?',
      hint: 'Comparável de T',
      ans: 'IComparable',
      exp: '"IComparable<T>" garante o método CompareTo(T). Permite "a.CompareTo(b)" no código genérico. Tipos como int, string, DateTime implementam essa interface.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Criando instâncias de T dentro de método genérico com constraint new():',
      code: `<span class="kw">static</span> T <span class="mt">CriarNovo</span>&lt;T&gt;() <span class="kw">where</span> T : <span class="kw">_______</span>()\n    => <span class="kw">new</span> T();`,
      q: 'Qual constraint permite "new T()" no corpo do método?',
      hint: 'New com parênteses vazios',
      ans: 'new',
      exp: '"where T : new()" garante que T tem construtor sem parâmetros. Permite "new T()" no corpo. Deve ser a última constraint na lista.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Classe genérica para repositório de qualquer tipo com constraint de classe:',
      code: `<span class="kw">class</span> Repositorio&lt;T&gt; <span class="kw">where</span> T : <span class="kw">_______</span>\n{\n    <span class="kw">private readonly</span> List&lt;T&gt; _itens = <span class="kw">new</span>();\n    <span class="kw">public void</span> <span class="mt">Adicionar</span>(T item) => _itens.<span class="mt">Add</span>(item);\n}`,
      q: 'Qual constraint garante que T é tipo de referência (não nulo acidentalmente)?',
      hint: 'Classe em inglês',
      ans: 'class',
      exp: '"where T : class" → T é tipo de referência. Pode ser null, mas é objeto. Permite == null, as T, is T. "where T : struct" para tipos de valor.',
    },

    // Q10 — Fill
    {
      type: 'fill',
      bubble: 'Usando default(T) para retornar valor padrão quando lista está vazia:',
      code: `<span class="kw">static</span> T <span class="mt">PrimeiroOuPadrao</span>&lt;T&gt;(List&lt;T&gt; lista)\n    => lista.<span class="mt">Count</span> > <span class="nm">0</span> ? lista[<span class="nm">0</span>] : <span class="kw">_______</span>(T);`,
      q: 'Qual expressão retorna o valor padrão de T?',
      hint: 'Padrão em inglês',
      ans: 'default',
      exp: '"default(T)" = valor padrão: null (class), 0 (int), false (bool). Em C# moderno, "default" sem parênteses também funciona quando T é inferido.',
    },

    // Q11 — Fill
    {
      type: 'fill',
      bubble: 'Convertendo tipo genérico com restrição unmanaged para uso com Span:',
      code: `<span class="kw">static</span> Span&lt;T&gt; <span class="mt">ComoSpan</span>&lt;T&gt;(<span class="kw">ref</span> T valor)\n    <span class="kw">where</span> T : <span class="kw">_______</span>\n    => MemoryMarshal.<span class="mt">CreateSpan</span>(<span class="kw">ref</span> valor, <span class="nm">1</span>);`,
      q: 'Qual constraint permite uso seguro com ponteiros e Span (tipos sem referências gerenciadas)?',
      hint: 'Não gerenciado em inglês',
      ans: 'unmanaged',
      exp: '"where T : unmanaged" → T não tem campos de tipo de referência (int, double, struct com só primitivos). Permite uso com ponteiros e Span<T>.',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'Método genérico com inferência de tipo.',
      code: `<span class="kw">static</span> T[] <span class="mt">Repetir</span>&lt;T&gt;(T valor, <span class="kw">int</span> vezes)\n{\n    <span class="kw">var</span> arr = <span class="kw">new</span> T[vezes];\n    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i < vezes; i++) arr[i] = valor;\n    <span class="kw">return</span> arr;\n}\n<span class="kw">var</span> bala = <span class="mt">Repetir</span>(<span class="st">"💥"</span>, <span class="nm">3</span>);\nConsole.<span class="mt">WriteLine</span>(<span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">","</span>, bala));`,
      q: 'O que será exibido?',
      hint: '3 repetições de "💥"',
      opts: [
        { t: '💥💥💥', ok: false },
        { t: '💥,💥,💥', ok: true },
        { t: '3', ok: false },
        { t: 'Erro — T não tem constraint', ok: false },
      ],
      exp: 'Repetir<string>("💥", 3) cria ["💥","💥","💥"]. string.Join(",", arr) = "💥,💥,💥".',
    },

    // Q13 — Code
    {
      type: 'code',
      bubble: 'Constraint IComparable para encontrar máximo.',
      code: `<span class="kw">static</span> T <span class="mt">Max</span>&lt;T&gt;(T a, T b) <span class="kw">where</span> T : IComparable&lt;T&gt;\n    => a.<span class="mt">CompareTo</span>(b) >= <span class="nm">0</span> ? a : b;\n\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Max</span>(<span class="nm">42</span>, <span class="nm">17</span>));\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Max</span>(<span class="st">"Zebra"</span>, <span class="st">"Abelha"</span>));`,
      q: 'O que será exibido?',
      hint: 'Maior int e maior string alfabeticamente',
      opts: [
        { t: '42 e Abelha', ok: false },
        { t: '17 e Zebra', ok: false },
        { t: '42 e Zebra', ok: true },
        { t: 'Erro — string não é IComparable', ok: false },
      ],
      exp: 'Max(42,17): 42.CompareTo(17)=1>=0 → 42. Max("Zebra","Abelha"): Z>A → "Zebra". Saída: "42" e "Zebra".',
    },

    // Q14 — Code
    {
      type: 'code',
      bubble: 'Classe genérica com múltiplas constraints.',
      code: `<span class="kw">class</span> Pool&lt;T&gt; <span class="kw">where</span> T : <span class="kw">class</span>, <span class="kw">new</span>()\n{\n    <span class="kw">private</span> Queue&lt;T&gt; _pool = <span class="kw">new</span>();\n    <span class="kw">public</span> T <span class="mt">Obter</span>() => _pool.<span class="mt">Count</span> > <span class="nm">0</span> ? _pool.<span class="mt">Dequeue</span>() : <span class="kw">new</span> T();\n    <span class="kw">public void</span> <span class="mt">Devolver</span>(T obj) => _pool.<span class="mt">Enqueue</span>(obj);\n}\n\n<span class="kw">var</span> p = <span class="kw">new</span> Pool&lt;List&lt;<span class="kw">int</span>&gt;&gt;();\n<span class="kw">var</span> lista = p.<span class="mt">Obter</span>();\nConsole.<span class="mt">WriteLine</span>(lista.<span class="mt">GetType</span>().<span class="mt">Name</span>);`,
      q: 'O que será exibido?',
      hint: 'Lista<int> criada via new()',
      opts: [
        { t: 'Pool`1', ok: false },
        { t: 'List`1', ok: true },
        { t: 'T', ok: false },
        { t: 'Erro — List<int> não satisfaz constraints', ok: false },
      ],
      exp: 'Pool está vazio → new T() = new List<int>(). GetType().Name de List<int> = "List`1". (O `1 indica 1 parâmetro genérico.)',
    },

    // Q15 — Code
    {
      type: 'code',
      bubble: 'Covariância — IEnumerable<Derived> como IEnumerable<Base>.',
      code: `<span class="kw">static void</span> <span class="mt">Exibir</span>(IEnumerable&lt;<span class="kw">object</span>&gt; itens)\n{\n    <span class="kw">foreach</span> (<span class="kw">var</span> item <span class="kw">in</span> itens)\n        Console.<span class="mt">Write</span>(item + <span class="st">" "</span>);\n}\n\nList&lt;<span class="kw">string</span>&gt; nomes = <span class="kw">new</span>() { <span class="st">"Leon"</span>, <span class="st">"Ada"</span> };\n<span class="mt">Exibir</span>(nomes);`,
      q: 'Este código compila?',
      hint: 'IEnumerable é covariante',
      opts: [
        { t: 'Não — List<string> não é IEnumerable<object>', ok: false },
        { t: 'Sim — IEnumerable<string> é covariante com IEnumerable<object>', ok: true },
        { t: 'Sim, mas com cast explícito necessário', ok: false },
        { t: 'Não — List não implementa IEnumerable', ok: false },
      ],
      exp: 'IEnumerable<out T> é covariante. IEnumerable<string> pode ser usado como IEnumerable<object> pois string herda de object. Saída: "Leon Ada".',
    },

    // Q16 — Code
    {
      type: 'code',
      bubble: 'default(T) em método genérico sem constraint.',
      code: `<span class="kw">static</span> T <span class="mt">ValorPadrao</span>&lt;T&gt;() => <span class="kw">default</span>(T);\n\nConsole.<span class="mt">WriteLine</span>(<span class="mt">ValorPadrao</span>&lt;<span class="kw">int</span>&gt;());\nConsole.<span class="mt">WriteLine</span>(<span class="mt">ValorPadrao</span>&lt;<span class="kw">bool</span>&gt;());\nConsole.<span class="mt">WriteLine</span>(<span class="mt">ValorPadrao</span>&lt;<span class="kw">string</span>&gt;() == <span class="kw">null</span>);`,
      q: 'O que será exibido?',
      hint: 'default de int, bool e string',
      opts: [
        { t: '0, False, True', ok: true },
        { t: '0, False, False', ok: false },
        { t: 'null, null, True', ok: false },
        { t: 'Erro — default não funciona com tipos primitivos', ok: false },
      ],
      exp: 'default(int)=0. default(bool)=false. default(string)=null (tipo de referência). null==null → true. Saída: "0", "False", "True".',
    },

    // Q17 — Code
    {
      type: 'code',
      bubble: 'Método genérico troca dois valores usando ref.',
      code: `<span class="kw">static void</span> <span class="mt">Trocar</span>&lt;T&gt;(<span class="kw">ref</span> T a, <span class="kw">ref</span> T b)\n{\n    T temp = a;\n    a = b;\n    b = temp;\n}\n<span class="kw">int</span> x = <span class="nm">10</span>, y = <span class="nm">20</span>;\n<span class="mt">Trocar</span>(<span class="kw">ref</span> x, <span class="kw">ref</span> y);\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"{x} {y}"</span>);`,
      q: 'O que será exibido?',
      hint: 'Troca valores de x e y',
      opts: [
        { t: '10 20', ok: false },
        { t: '20 10', ok: true },
        { t: '0 0', ok: false },
        { t: 'Erro — T sem constraint para int', ok: false },
      ],
      exp: 'Trocar<int>(ref x, ref y): temp=10, x=20, y=10. ref permite modificar as variáveis originais. x=20, y=10.',
    },

    // Q18 — Code (DESAFIO CHEFE)
    {
      type: 'code',
      bubble: '🏆 DESAFIO CHEFE — Repositório genérico com constraint e LINQ.',
      code: `<span class="kw">class</span> Repo&lt;T&gt; <span class="kw">where</span> T : <span class="kw">class</span>\n{\n    <span class="kw">private</span> List&lt;T&gt; _data = <span class="kw">new</span>();\n    <span class="kw">public void</span> <span class="mt">Add</span>(T item) => _data.<span class="mt">Add</span>(item);\n    <span class="kw">public</span> IEnumerable&lt;T&gt; <span class="mt">Filtrar</span>(Func&lt;T,<span class="kw">bool</span>&gt; pred) => _data.<span class="mt">Where</span>(pred);\n}\n<span class="kw">var</span> repo = <span class="kw">new</span> Repo&lt;<span class="kw">string</span>&gt;();\nrepo.<span class="mt">Add</span>(<span class="st">"Leon"</span>); repo.<span class="mt">Add</span>(<span class="st">"Ada"</span>); repo.<span class="mt">Add</span>(<span class="st">"Ashley"</span>);\n<span class="kw">var</span> longos = repo.<span class="mt">Filtrar</span>(s => s.<span class="mt">Length</span> > <span class="nm">3</span>);\nConsole.<span class="mt">WriteLine</span>(<span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">","</span>, longos));`,
      q: 'O que será exibido?',
      hint: 'Nomes com mais de 3 letras',
      opts: [
        { t: 'Leon,Ada,Ashley', ok: false },
        { t: 'Leon,Ashley', ok: true },
        { t: 'Ashley', ok: false },
        { t: 'Ada', ok: false },
      ],
      exp: 'Leon(4)>3 ✓, Ada(3)=3 não >3 ✗, Ashley(6)>3 ✓. Filtrar retorna ["Leon","Ashley"]. Join = "Leon,Ashley".',
    },

  ]
};
