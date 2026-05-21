const MISSION_30 = {
  id: 30,
  title: "MISSÃO 31 — A FORJA",
  icon: '⚒️',
  free: false,
  desc: "Na forja do castelo, o ferreiro cria armaduras para qualquer tamanho de guerreiro usando o mesmo molde. Generics permitem escrever código que funciona com qualquer tipo — o molde universal.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>Generics</strong> permitem criar classes, métodos e interfaces que funcionam com qualquer tipo <code>T</code>, definido apenas no momento do uso.',
      q: 'Qual o principal benefício dos Generics sobre usar "object"?',
      hint: 'Type safety sem boxing',
      opts: [
        { t: 'Generics são mais rápidos por padrão', ok: false },
        { t: 'Garantem type safety em tempo de compilação e evitam boxing/casting', ok: true },
        { t: 'Generics aceitam null automaticamente', ok: false },
        { t: 'Generics só funcionam com coleções', ok: false },
      ],
      exp: '"object" perde o tipo e exige casting + boxing. Generics mantêm o tipo: List<int> garante em compilação que só ints entram.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'A letra <strong>T</strong> é convencional para o tipo genérico, mas qualquer nome funciona. <code>TKey</code>, <code>TValue</code>, <code>TResult</code> são convenções comuns.',
      q: 'Por que a convenção usa T (e não X ou Q) para tipos genéricos?',
      hint: 'É apenas uma convenção da comunidade',
      opts: [
        { t: 'T é uma palavra reservada em C#', ok: false },
        { t: 'É convenção da comunidade: T = Type. Outros nomes funcionam igualmente', ok: true },
        { t: 'Apenas T é aceito pelo compilador', ok: false },
        { t: 'T executa mais rápido', ok: false },
      ],
      exp: 'T = Type. É apenas convenção, mas universalmente reconhecida. Você pode usar qualquer nome: "TItem", "TChave", etc.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<strong>Constraints</strong> (<code>where T : ...</code>) restringem quais tipos podem ser usados como T. Ex: <code>where T : class</code> aceita apenas tipos de referência.',
      q: 'O que "where T : new()" exige do tipo T?',
      hint: 'New implica construtor',
      opts: [
        { t: 'Que T seja uma classe nova', ok: false },
        { t: 'Que T tenha um construtor público sem parâmetros', ok: true },
        { t: 'Que T seja imutável', ok: false },
        { t: 'Que T herده de object', ok: false },
      ],
      exp: '"where T : new()" exige que T tenha construtor padrão (sem parâmetros). Permite usar "new T()" dentro do método genérico.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Um método genérico define o tipo T na própria assinatura: <code>static T Exemplo&lt;T&gt;(T item)</code>.',
      q: 'Como o compilador sabe qual tipo usar ao chamar um método genérico?',
      hint: 'Olha para os argumentos',
      opts: [
        { t: 'Sempre usa "object"', ok: false },
        { t: 'Infere pelo tipo dos argumentos passados (ou especificação explícita)', ok: true },
        { t: 'Usa o tipo de retorno esperado', ok: false },
        { t: 'Exige especificação explícita sempre', ok: false },
      ],
      exp: 'Inferência de tipo: "Trocar(ref a, ref b)" com a,b int → compilador infere T=int. Ou explicitamente: "Trocar<int>(ref a, ref b)".',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Declarando uma classe genérica Caixa que pode guardar qualquer tipo:',
      code: `<span class="kw">public class</span> Caixa&lt;<span class="kw">_______</span>&gt;\n{\n    <span class="kw">public T</span> Conteudo { <span class="kw">get</span>; <span class="kw">set</span>; }\n}`,
      q: 'Qual é o parâmetro de tipo convencional para classes genéricas?',
      hint: 'A letra T',
      ans: 'T',
      exp: '"class Caixa<T>" — T é o parâmetro de tipo. "new Caixa<int>()" cria uma Caixa de inteiros. "new Caixa<string>()" uma de strings.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Para restringir T a tipos que implementam IComparable (para poder comparar):',
      code: `<span class="kw">static T</span> <span class="mt">Maior</span>&lt;<span class="kw">T</span>&gt;(<span class="kw">T</span> a, <span class="kw">T</span> b) <span class="kw">where T</span> : <span class="kw">_______</span>\n    => a.CompareTo(b) >= <span class="nm">0</span> ? a : b;`,
      q: 'Qual constraint permite usar CompareTo() em T?',
      hint: 'Interface que define comparação',
      ans: 'IComparable',
      exp: '"where T : IComparable" garante que T tem CompareTo(). Sem constraint, o compilador não sabe se T tem esse método.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Para criar uma instância do tipo T dentro de um método genérico, T precisa da constraint new():',
      code: `<span class="kw">static T</span> <span class="mt">Criar</span>&lt;<span class="kw">T</span>&gt;() <span class="kw">where T</span> : <span class="kw">_______</span>\n    => <span class="kw">new</span> T();`,
      q: 'Qual constraint permite usar "new T()" dentro do método?',
      hint: 'New com parênteses',
      ans: 'new()',
      exp: '"where T : new()" permite "new T()". Sem essa constraint, o compilador não garante que T tem construtor padrão.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Método genérico que troca dois valores usando ref:',
      code: `<span class="kw">static void</span> <span class="mt">Trocar</span>&lt;<span class="kw">T</span>&gt;(<span class="kw">ref T</span> a, <span class="kw">ref T</span> b)\n{\n    <span class="kw">T</span> temp = a; a = b; b = _______;\n}`,
      q: 'O que vai no lugar de _______ para completar a troca?',
      hint: 'O valor temporário guardado',
      ans: 'temp',
      exp: '"b = temp" completa a troca. temp guardou o valor original de a. Agora a=b e b=temp (o antigo a).',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Classe genérica Caixa em ação.',
      code: `<span class="kw">public class</span> Caixa&lt;<span class="kw">T</span>&gt;\n{\n    <span class="kw">public T</span> Item { <span class="kw">get</span>; <span class="kw">set</span>; }\n    <span class="kw">public</span> Caixa(<span class="kw">T</span> item) => Item = item;\n    <span class="kw">public override string</span> <span class="mt">ToString</span>()\n        => <span class="st">$"Caixa[{typeof(T).Name}]: {Item}"</span>;\n}\nConsole.<span class="mt">WriteLine</span>(<span class="kw">new</span> Caixa&lt;<span class="kw">int</span>&gt;(<span class="nm">42</span>));\nConsole.<span class="mt">WriteLine</span>(<span class="kw">new</span> Caixa&lt;<span class="kw">string</span>&gt;(<span class="st">"Leon"</span>));`,
      q: 'O que será exibido?',
      hint: 'typeof(T).Name retorna o nome do tipo',
      opts: [
        { t: 'Caixa[T]: 42 e Caixa[T]: Leon', ok: false },
        { t: 'Caixa[Int32]: 42 e Caixa[String]: Leon', ok: true },
        { t: 'Caixa[int]: 42 e Caixa[string]: Leon', ok: false },
        { t: 'Caixa: 42 e Caixa: Leon', ok: false },
      ],
      exp: 'typeof(T).Name retorna o nome CLR: "Int32" para int, "String" para string. Exibe "Caixa[Int32]: 42" e "Caixa[String]: Leon".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Método genérico com inferência de tipo.',
      code: `<span class="kw">static void</span> <span class="mt">Imprimir</span>&lt;<span class="kw">T</span>&gt;(<span class="kw">T</span> valor)\n    => Console.<span class="mt">WriteLine</span>(<span class="st">$"[{typeof(T).Name}] {valor}"</span>);\n\n<span class="mt">Imprimir</span>(<span class="nm">42</span>);\n<span class="mt">Imprimir</span>(<span class="kw">true</span>);\n<span class="mt">Imprimir</span>(<span class="st">"Krauser"</span>);`,
      q: 'O que será exibido na segunda linha?',
      hint: 'Imprimir(true) — bool em C# é Boolean',
      opts: [
        { t: '[bool] True', ok: false },
        { t: '[Boolean] True', ok: true },
        { t: '[Bool] true', ok: false },
        { t: '[bool] true', ok: false },
      ],
      exp: 'typeof(bool).Name = "Boolean" (nome CLR). bool.ToString() = "True" (maiúsculo). Exibe "[Boolean] True".',
    },

    // Q11 — Code
    {
      type: 'code',
      bubble: 'Constraint IComparable — método Maior genérico.',
      code: `<span class="kw">static T</span> <span class="mt">Maior</span>&lt;<span class="kw">T</span>&gt;(<span class="kw">T</span> a, <span class="kw">T</span> b) <span class="kw">where T</span> : IComparable&lt;<span class="kw">T</span>&gt;\n    => a.CompareTo(b) >= <span class="nm">0</span> ? a : b;\n\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Maior</span>(<span class="nm">10</span>, <span class="nm">25</span>));\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Maior</span>(<span class="st">"banana"</span>, <span class="st">"abacaxi"</span>));`,
      q: 'O que será exibido?',
      hint: 'Maior entre 10/25 e entre "banana"/"abacaxi" (alfabético)',
      opts: [
        { t: '25 e banana', ok: true },
        { t: '10 e abacaxi', ok: false },
        { t: '25 e abacaxi', ok: false },
        { t: 'Erro — string não é IComparable', ok: false },
      ],
      exp: 'Maior(10,25): 10.CompareTo(25) < 0 → retorna 25. Maior("banana","abacaxi"): "b" > "a" → retorna "banana".',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'Stack genérica implementada do zero.',
      code: `<span class="kw">public class</span> Pilha&lt;<span class="kw">T</span>&gt;\n{\n    <span class="kw">private</span> List&lt;<span class="kw">T</span>&gt; _items = <span class="kw">new</span>();\n    <span class="kw">public void</span>  <span class="mt">Push</span>(<span class="kw">T</span> item) => _items.<span class="mt">Add</span>(item);\n    <span class="kw">public T</span>     <span class="mt">Pop</span>()         { <span class="kw">var</span> t=_items[^<span class="nm">1</span>]; _items.<span class="mt">RemoveAt</span>(_items.<span class="mt">Count</span>-<span class="nm">1</span>); <span class="kw">return</span> t; }\n    <span class="kw">public int</span>   Count  => _items.<span class="mt">Count</span>;\n}\n<span class="kw">var</span> p = <span class="kw">new</span> Pilha&lt;<span class="kw">string</span>&gt;();\np.<span class="mt">Push</span>(<span class="st">"A"</span>); p.<span class="mt">Push</span>(<span class="st">"B"</span>); p.<span class="mt">Push</span>(<span class="st">"C"</span>);\nConsole.<span class="mt">WriteLine</span>(p.<span class="mt">Pop</span>() + <span class="st">" | "</span> + p.Count);`,
      q: 'O que será exibido?',
      hint: 'Pop retorna o último; Count depois da remoção',
      opts: [
        { t: 'A | 2', ok: false },
        { t: 'C | 2', ok: true },
        { t: 'C | 3', ok: false },
        { t: 'B | 2', ok: false },
      ],
      exp: 'Push A, B, C. Pop() = "C" (último), Remove deixa [A,B]. Count = 2. Exibe "C | 2".',
    },

  ]
};
