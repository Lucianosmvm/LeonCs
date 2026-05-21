const MISSION_34 = {
  id: 34,
  title: "MISSÃO 35 — O TRONO DE SADDLER",
  icon: '👹',
  free: false,
  desc: "Saddler te aguarda no trono. Para chegar até ele, você precisa provar que domina tudo que o Castelo ensinou. Esta é a revisão completa — sem misericórdia.",
  objs: [],
  steps: [

    // Q1 — MC (Coleções)
    {
      type: 'mc',
      bubble: 'Revisão: escolhendo a coleção certa para cada situação.',
      q: 'Você precisa garantir que não existam IDs duplicados de inimigos. Qual coleção usar?',
      hint: 'Unicidade é a prioridade',
      opts: [
        { t: 'List<int>', ok: false },
        { t: 'Dictionary<int, string>', ok: false },
        { t: 'HashSet<int>', ok: true },
        { t: 'Queue<int>', ok: false },
      ],
      exp: 'HashSet<T> garante unicidade automaticamente. Add() de elemento duplicado retorna false sem erro. Busca O(1).',
    },

    // Q2 — MC (OOP)
    {
      type: 'mc',
      bubble: 'Revisão: pilares de OOP.',
      q: 'Uma função que aceita Inimigo mas funciona corretamente com Ganado, Cultista e Regenerador (todos filhos de Inimigo) demonstra qual pilar?',
      hint: 'Mesma interface, comportamentos diferentes',
      opts: [
        { t: 'Encapsulamento', ok: false },
        { t: 'Abstração', ok: false },
        { t: 'Polimorfismo', ok: true },
        { t: 'Herança', ok: false },
      ],
      exp: 'Polimorfismo: uma referência do tipo pai pode se comportar de formas diferentes dependendo do tipo real do objeto.',
    },

    // Q3 — MC (LINQ)
    {
      type: 'mc',
      bubble: 'Revisão: LINQ lazy evaluation.',
      q: 'Qual afirmação sobre "var q = lista.Where(x => x > 5)" é verdadeira?',
      hint: 'Deferred execution',
      opts: [
        { t: 'A consulta executa imediatamente e q é uma List', ok: false },
        { t: 'q é uma expressão que ainda não executou — só executa quando consumida', ok: true },
        { t: 'q sempre retorna null se lista for vazia', ok: false },
        { t: 'LINQ não aceita lambdas no Where', ok: false },
      ],
      exp: 'Deferred execution: Where retorna IEnumerable<T> não materializado. Só executa ao iterar (foreach, ToList(), Count(), etc.).',
    },

    // Q4 — MC (Generics)
    {
      type: 'mc',
      bubble: 'Revisão: constraints em Generics.',
      q: 'Por que usar "where T : class" em um método genérico?',
      hint: 'Restringe o tipo para permitir null',
      opts: [
        { t: 'Para aceitar apenas tipos primitivos', ok: false },
        { t: 'Para garantir que T é tipo de referência — permitindo null e métodos de object', ok: true },
        { t: 'Para melhorar performance', ok: false },
        { t: 'Apenas para compatibilidade com Java', ok: false },
      ],
      exp: '"where T : class" → T é referência → pode ser null, tem métodos de object. "where T : struct" → T é valor → não pode ser null.',
    },

    // Q5 — MC (Big O)
    {
      type: 'mc',
      bubble: 'Revisão: escolha de algoritmo pelo custo.',
      q: 'Para buscar um nome numa lista de 10.000.000 usuários repetidamente, qual abordagem é melhor?',
      hint: 'Considera o custo de cada busca',
      opts: [
        { t: 'List com Contains() — O(n) por busca', ok: false },
        { t: 'HashSet com Contains() — O(1) por busca', ok: true },
        { t: 'Array com busca linear — O(n)', ok: false },
        { t: 'Qualquer um — o hardware moderno compensa', ok: false },
      ],
      exp: 'HashSet.Contains() = O(1). Para 10M de buscas: HashSet faz 10M ops; List faz até 100T ops. A diferença é irrelevante para hardware compensar.',
    },

    // Q6 — Fill (Dictionary)
    {
      type: 'fill',
      bubble: 'Revisão: padrão seguro para acessar Dictionary.',
      code: `<span class="kw">if</span> (dic.<span class="mt">_______</span>(chave, <span class="kw">out var</span> valor))\n    Console.<span class="mt">WriteLine</span>(valor);`,
      q: 'Qual método é o mais seguro para obter valor sem exceção?',
      hint: 'Tenta obter o valor',
      ans: 'TryGetValue',
      exp: '"TryGetValue(key, out var v)" retorna false sem exceção se a chave não existe. Padrão preferido sobre dic[key].',
    },

    // Q7 — Fill (Lambda / Func)
    {
      type: 'fill',
      bubble: 'Revisão: delegate genérico para funções com retorno.',
      code: `<span class="kw">_______</span>&lt;<span class="kw">int</span>, <span class="kw">int</span>, <span class="kw">bool</span>&gt; maiorQue = (a, b) => a > b;`,
      q: 'Qual tipo de delegate genérico usar para funções que retornam valor?',
      hint: 'Função em inglês',
      ans: 'Func',
      exp: 'Func<int, int, bool>: recebe dois ints e retorna bool. O último tipo é sempre o retorno. Action para void.',
    },

    // Q8 — Fill (Nullable)
    {
      type: 'fill',
      bubble: 'Revisão: operador de fallback para null.',
      code: `<span class="kw">string</span> nome = entrada <span class="kw">_______</span> <span class="st">"Anônimo"</span>;`,
      q: 'Qual operador retorna o valor à direita quando o da esquerda é null?',
      hint: 'Duas interrogações',
      ans: '??',
      exp: '"??" (null-coalescing): retorna esquerda se não null, senão direita. Equivale a "entrada != null ? entrada : "Anônimo"".',
    },

    // Q9 — Fill (Recursão)
    {
      type: 'fill',
      bubble: 'Revisão: toda recursão precisa de caso base.',
      code: `<span class="kw">static int</span> <span class="mt">Contagem</span>(<span class="kw">int</span> n)\n{\n    <span class="kw">if</span> (n <= <span class="nm">0</span>) <span class="kw">return _______</span>;\n    <span class="kw">return</span> <span class="nm">1</span> + <span class="mt">Contagem</span>(n - <span class="nm">1</span>);\n}`,
      q: 'Qual deve ser o valor retornado no caso base para contar corretamente?',
      hint: 'Quando n<=0, não há elementos para contar',
      ans: '0',
      exp: 'Caso base retorna 0: não há elementos. Contagem(3) = 1 + Contagem(2) = 1+1+Contagem(1) = 1+1+1+0 = 3.',
    },

    // Q10 — Code (List + LINQ)
    {
      type: 'code',
      bubble: 'Revisão: List com LINQ encadeado.',
      code: `<span class="kw">var</span> scores = <span class="kw">new</span> List&lt;<span class="kw">int</span>&gt; { <span class="nm">10</span>, <span class="nm">55</span>, <span class="nm">30</span>, <span class="nm">80</span>, <span class="nm">20</span>, <span class="nm">95</span> };\n<span class="kw">var</span> top = scores\n    .<span class="mt">Where</span>(s => s >= <span class="nm">50</span>)\n    .<span class="mt">OrderByDescending</span>(s => s)\n    .<span class="mt">Take</span>(<span class="nm">2</span>)\n    .<span class="mt">ToList</span>();\nConsole.<span class="mt">WriteLine</span>(<span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">", "</span>, top));`,
      q: 'O que será exibido?',
      hint: 'Filtra ≥50, ordena desc, pega 2 primeiros',
      opts: [
        { t: '95, 80', ok: true },
        { t: '80, 55', ok: false },
        { t: '95, 80, 55', ok: false },
        { t: '55, 80', ok: false },
      ],
      exp: 'Where(≥50): {55,80,95}. OrderByDesc: {95,80,55}. Take(2): {95,80}. Join: "95, 80".',
    },

    // Q11 — Code (OOP + Polimorfismo)
    {
      type: 'code',
      bubble: 'Revisão: polimorfismo com lista de tipos mistos.',
      code: `<span class="kw">abstract class</span> Criatura\n{\n    <span class="kw">public abstract int</span> Poder();\n}\n<span class="kw">class</span> Lobo    : Criatura { <span class="kw">public override int</span> <span class="mt">Poder</span>() => <span class="nm">30</span>;  }\n<span class="kw">class</span> Gigante : Criatura { <span class="kw">public override int</span> <span class="mt">Poder</span>() => <span class="nm">200</span>; }\n<span class="kw">class</span> Ganado  : Criatura { <span class="kw">public override int</span> <span class="mt">Poder</span>() => <span class="nm">50</span>;  }\n\n<span class="kw">var</span> sala = <span class="kw">new</span> List&lt;Criatura&gt; { <span class="kw">new</span> Lobo(), <span class="kw">new</span> Gigante(), <span class="kw">new</span> Ganado() };\nConsole.<span class="mt">WriteLine</span>(sala.<span class="mt">Max</span>(c => c.<span class="mt">Poder</span>()));`,
      q: 'O que será exibido?',
      hint: 'Max de 30, 200, 50',
      opts: [
        { t: '50', ok: false },
        { t: '30', ok: false },
        { t: '200', ok: true },
        { t: '280', ok: false },
      ],
      exp: 'LINQ Max() com selector. sala.Max(c => c.Poder()): avalia Poder() de cada criatura → max(30, 200, 50) = 200.',
    },

    // Q12 — Code (Generics)
    {
      type: 'code',
      bubble: 'Revisão: método genérico com constraint.',
      code: `<span class="kw">static T</span> <span class="mt">Minimo</span>&lt;<span class="kw">T</span>&gt;(<span class="kw">T</span> a, <span class="kw">T</span> b) <span class="kw">where T</span> : IComparable&lt;<span class="kw">T</span>&gt;\n    => a.CompareTo(b) <= <span class="nm">0</span> ? a : b;\n\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Minimo</span>(<span class="nm">7</span>, <span class="nm">3</span>));\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Minimo</span>(<span class="st">"z"</span>, <span class="st">"a"</span>));`,
      q: 'O que será exibido?',
      hint: 'Mínimo entre 7/3 e entre "z"/"a"',
      opts: [
        { t: '3 e a', ok: true },
        { t: '7 e z', ok: false },
        { t: '3 e z', ok: false },
        { t: 'Erro — string não é IComparable', ok: false },
      ],
      exp: 'Minimo(7,3): 7.CompareTo(3) > 0 → retorna 3. Minimo("z","a"): "z".CompareTo("a") > 0 → retorna "a".',
    },

    // Q13 — Code (Null safety)
    {
      type: 'code',
      bubble: 'Revisão: encadeamento null-safe.',
      code: `<span class="kw">class</span> Arma  { <span class="kw">public int</span> Dano = <span class="nm">50</span>; }\n<span class="kw">class</span> Leon  { <span class="kw">public</span> Arma? ArmaAtual; }\n\n<span class="kw">var</span> leon1 = <span class="kw">new</span> Leon { ArmaAtual = <span class="kw">new</span> Arma() };\n<span class="kw">var</span> leon2 = <span class="kw">new</span> Leon();\n\nConsole.<span class="mt">WriteLine</span>(leon1.ArmaAtual?.Dano ?? <span class="nm">0</span>);\nConsole.<span class="mt">WriteLine</span>(leon2.ArmaAtual?.Dano ?? <span class="nm">0</span>);`,
      q: 'O que será exibido?',
      hint: 'leon1 tem arma, leon2 não',
      opts: [
        { t: '50 e 50', ok: false },
        { t: '50 e 0', ok: true },
        { t: 'Exceção em leon2', ok: false },
        { t: '0 e 0', ok: false },
      ],
      exp: 'leon1.ArmaAtual?.Dano = 50 → ?? não aplica → 50. leon2.ArmaAtual é null → ?.Dano = null → ?? 0 → 0.',
    },

    // Q14 — Code (Recursão + Fibonacci)
    {
      type: 'code',
      bubble: 'Revisão: Fibonacci com memoização.',
      code: `<span class="kw">var</span> memo = <span class="kw">new</span> Dictionary&lt;<span class="kw">int</span>,<span class="kw">long</span>&gt;();\n<span class="kw">static long</span> <span class="mt">Fib</span>(<span class="kw">int</span> n, Dictionary&lt;<span class="kw">int</span>,<span class="kw">long</span>&gt; m)\n{\n    <span class="kw">if</span> (n <= <span class="nm">1</span>) <span class="kw">return</span> n;\n    <span class="kw">if</span> (m.<span class="mt">TryGetValue</span>(n, <span class="kw">out var</span> v)) <span class="kw">return</span> v;\n    <span class="kw">var</span> r = <span class="mt">Fib</span>(n-<span class="nm">1</span>, m) + <span class="mt">Fib</span>(n-<span class="nm">2</span>, m);\n    m[n] = r; <span class="kw">return</span> r;\n}\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Fib</span>(<span class="nm">10</span>, memo));`,
      q: 'Qual é Fibonacci(10)?',
      hint: 'Fib: 0,1,1,2,3,5,8,13,21,34,55',
      opts: [
        { t: '34', ok: false },
        { t: '89', ok: false },
        { t: '55', ok: true },
        { t: '21', ok: false },
      ],
      exp: 'Fib(10) = 55. Sequência: 0,1,1,2,3,5,8,13,21,34,55. A memoização evita recalcular: Dictionary guarda resultados já computados.',
    },

    // Q15 — Code (Stack + Queue)
    {
      type: 'code',
      bubble: 'Revisão: escolhendo Stack ou Queue conforme o comportamento esperado.',
      code: `<span class="kw">var</span> s = <span class="kw">new</span> Stack&lt;<span class="kw">int</span>&gt;();\n<span class="kw">var</span> q = <span class="kw">new</span> Queue&lt;<span class="kw">int</span>&gt;();\n<span class="kw">foreach</span> (<span class="kw">var</span> n <span class="kw">in</span> <span class="kw">new</span>[] {<span class="nm">1</span>,<span class="nm">2</span>,<span class="nm">3</span>}) { s.<span class="mt">Push</span>(n); q.<span class="mt">Enqueue</span>(n); }\nConsole.<span class="mt">Write</span>(<span class="st">"Stack: "</span>);\n<span class="kw">while</span> (s.<span class="mt">Count</span> > <span class="nm">0</span>) Console.<span class="mt">Write</span>(s.<span class="mt">Pop</span>() + <span class="st">" "</span>);\nConsole.<span class="mt">Write</span>(<span class="st">"\nQueue: "</span>);\n<span class="kw">while</span> (q.<span class="mt">Count</span> > <span class="nm">0</span>) Console.<span class="mt">Write</span>(q.<span class="mt">Dequeue</span>() + <span class="st">" "</span>);`,
      q: 'O que será exibido?',
      hint: 'LIFO vs FIFO — ordens diferentes',
      opts: [
        { t: 'Stack: 3 2 1 | Queue: 3 2 1', ok: false },
        { t: 'Stack: 3 2 1 | Queue: 1 2 3', ok: true },
        { t: 'Stack: 1 2 3 | Queue: 1 2 3', ok: false },
        { t: 'Stack: 1 2 3 | Queue: 3 2 1', ok: false },
      ],
      exp: 'Stack LIFO: Push 1,2,3 → Pop retorna 3,2,1. Queue FIFO: Enqueue 1,2,3 → Dequeue retorna 1,2,3.',
    },

    // Q16 — Code (Encapsulamento)
    {
      type: 'code',
      bubble: 'Revisão: property com validação.',
      code: `<span class="kw">class</span> Escudo\n{\n    <span class="kw">private int</span> _durabilidade;\n    <span class="kw">public int</span> Durabilidade\n    {\n        <span class="kw">get</span> => _durabilidade;\n        <span class="kw">set</span> => _durabilidade = Math.<span class="mt">Clamp</span>(value, <span class="nm">0</span>, <span class="nm">100</span>);\n    }\n}\n<span class="kw">var</span> e = <span class="kw">new</span> Escudo();\ne.Durabilidade = <span class="nm">150</span>;\nConsole.<span class="mt">WriteLine</span>(e.Durabilidade);\ne.Durabilidade -= <span class="nm">200</span>;\nConsole.<span class="mt">WriteLine</span>(e.Durabilidade);`,
      q: 'O que será exibido?',
      hint: 'Math.Clamp limita entre 0 e 100',
      opts: [
        { t: '150 e -50', ok: false },
        { t: '100 e 0', ok: true },
        { t: '100 e -100', ok: false },
        { t: '150 e 0', ok: false },
      ],
      exp: 'Durabilidade=150 → Clamp(150,0,100)=100. Durabilidade=100-200=-100 → Clamp(-100,0,100)=0.',
    },

    // Q17 — Code (Interface)
    {
      type: 'code',
      bubble: 'Revisão: interface como contrato para diferentes tipos.',
      code: `<span class="kw">interface</span> ICuravel { <span class="kw">void</span> <span class="mt">Curar</span>(<span class="kw">int</span> hp); }\n<span class="kw">class</span> ErvaMedica : ICuravel\n    { <span class="kw">public void</span> <span class="mt">Curar</span>(<span class="kw">int</span> hp) => Console.<span class="mt">WriteLine</span>(<span class="st">$"+{hp}hp erva"</span>); }\n<span class="kw">class</span> Seringa : ICuravel\n    { <span class="kw">public void</span> <span class="mt">Curar</span>(<span class="kw">int</span> hp) => Console.<span class="mt">WriteLine</span>(<span class="st">$"+{hp}hp seringa"</span>); }\n\n<span class="kw">var</span> itens = <span class="kw">new</span> List&lt;ICuravel&gt; { <span class="kw">new</span> ErvaMedica(), <span class="kw">new</span> Seringa() };\nitens.<span class="mt">ForEach</span>(i => i.<span class="mt">Curar</span>(<span class="nm">20</span>));`,
      q: 'O que será exibido?',
      hint: 'Cada ICuravel implementa Curar diferente',
      opts: [
        { t: '+20hp erva e +20hp seringa', ok: true },
        { t: '+20hp erva duas vezes', ok: false },
        { t: 'Erro — List<ICuravel> inválido', ok: false },
        { t: '+0hp erva e +0hp seringa', ok: false },
      ],
      exp: 'ForEach chama Curar(20) para cada item. ErvaMedica → "+20hp erva". Seringa → "+20hp seringa".',
    },

    // Q18 — Code (DESAFIO FINAL)
    {
      type: 'code',
      bubble: '🏆 DESAFIO FINAL — Pipeline completo combinando tudo do Act II.',
      code: `<span class="kw">record</span> Inimigo(<span class="kw">string</span> Nome, <span class="kw">int</span> HP, <span class="kw">bool</span> EChefe);\n\n<span class="kw">var</span> sala = <span class="kw">new</span> List&lt;Inimigo&gt;\n{\n    <span class="kw">new</span>(<span class="st">"Ganado A"</span>,  <span class="nm">50</span>,  <span class="kw">false</span>),\n    <span class="kw">new</span>(<span class="st">"Saddler"</span>,   <span class="nm">500</span>, <span class="kw">true</span>),\n    <span class="kw">new</span>(<span class="st">"Ganado B"</span>,  <span class="nm">50</span>,  <span class="kw">false</span>),\n    <span class="kw">new</span>(<span class="st">"Krauser"</span>,   <span class="nm">300</span>, <span class="kw">true</span>),\n};\n\n<span class="kw">int</span> hpTotal = sala.<span class="mt">Where</span>(e => e.EChefe)\n                   .<span class="mt">Sum</span>(e => e.HP);\n<span class="kw">string</span> nomes = <span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">", "</span>, sala\n    .<span class="mt">Where</span>(e => !e.EChefe)\n    .<span class="mt">Select</span>(e => e.Nome));\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"Chefes HP: {hpTotal} | Servos: {nomes}"</span>);`,
      q: 'O que será exibido?',
      hint: 'Soma HP dos chefes; nomes dos não-chefes',
      opts: [
        { t: 'Chefes HP: 800 | Servos: Ganado A, Ganado B', ok: true },
        { t: 'Chefes HP: 900 | Servos: Saddler, Krauser', ok: false },
        { t: 'Chefes HP: 500 | Servos: Ganado A, Ganado B', ok: false },
        { t: 'Chefes HP: 800 | Servos: Ganado B', ok: false },
      ],
      exp: 'Chefes: Saddler(500)+Krauser(300)=800. Não-chefes: Where(!EChefe).Select(Nome)="Ganado A, Ganado B".',
    },

  ]
};
