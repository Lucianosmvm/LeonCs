const MISSION_20 = {
  id: 20,
  title: "MISSÃO 21 — PORTÃO DO CASTELO",
  icon: '🏯',
  free: false,
  desc: "Você cruzou o portão do castelo. Aqui a missão se torna mais complexa — arrays simples não bastam mais. As coleções do C# são suas novas ferramentas de sobrevivência.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'As <strong>coleções</strong> do namespace <code>System.Collections.Generic</code> são estruturas de dados prontas: List, Dictionary, Stack, Queue e muito mais.',
      q:'Qual namespace precisa ser importado para usar List<T> e Dictionary<K,V>?',
      hint:'Generic Collections',
      opts:[
        {t:'System.Arrays', ok:false},
        {t:'System.Collections.Generic', ok:true},
        {t:'System.Data', ok:false},
        {t:'System.Linq', ok:false},
      ],
      exp:'"using System.Collections.Generic" habilita List<T>, Dictionary<K,V>, Stack<T>, Queue<T> e outras. Em projetos .NET 6+, está incluído por padrão.',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'A principal diferença entre <strong>Array</strong> e <strong>List&lt;T&gt;</strong> é que List cresce e encolhe dinamicamente.',
      q:'Qual a vantagem da List<T> sobre um array simples?',
      hint:'Pense em flexibilidade de tamanho',
      opts:[
        {t:'List é sempre mais rápida que array', ok:false},
        {t:'List tem tamanho dinâmico — cresce e encolhe conforme necessário', ok:true},
        {t:'List aceita tipos mistos (int e string juntos)', ok:false},
        {t:'List não precisa de tipo definido', ok:false},
      ],
      exp:'Array: tamanho fixo, definido na criação. List<T>: dinâmica, Add() adiciona e Remove() retira elementos. Mais flexível, ligeiramente mais lenta.',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'Um <strong>Dictionary&lt;TKey, TValue&gt;</strong> armazena pares chave-valor, onde cada chave é única e o acesso é O(1) via hashing.',
      q:'O que acontece ao inserir uma chave já existente num Dictionary?',
      hint:'Chaves são únicas',
      opts:[
        {t:'Cria uma segunda entrada com a mesma chave', ok:false},
        {t:'Lança ArgumentException — chave duplicada não é permitida', ok:true},
        {t:'Silenciosamente ignora a inserção', ok:false},
        {t:'Converte a chave em uma lista', ok:false},
      ],
      exp:'Dictionary não permite chaves duplicadas. Use dic[chave] = valor para atualizar, ou ContainsKey() para verificar antes de adicionar.',
    },

    // Q4 — MC
    {
      type:'mc',
      bubble:'Uma <strong>Stack&lt;T&gt;</strong> segue o princípio LIFO (Last In, First Out) — como uma pilha de pratos.',
      q:'Qual método remove e retorna o elemento do topo de uma Stack?',
      hint:'Tirar do topo',
      opts:[
        {t:'Dequeue()', ok:false},
        {t:'RemoveFirst()', ok:false},
        {t:'Pop()', ok:true},
        {t:'Pull()', ok:false},
      ],
      exp:'"Pop()" remove e retorna o topo da Stack (LIFO). "Push(item)" adiciona ao topo. "Peek()" visualiza sem remover.',
    },

    // Q5 — MC
    {
      type:'mc',
      bubble:'Uma <strong>Queue&lt;T&gt;</strong> segue o princípio FIFO (First In, First Out) — como uma fila de banco.',
      q:'Qual método adiciona um elemento ao final de uma Queue?',
      hint:'Entrar na fila',
      opts:[
        {t:'Push()', ok:false},
        {t:'Add()', ok:false},
        {t:'Enqueue()', ok:true},
        {t:'Insert()', ok:false},
      ],
      exp:'"Enqueue(item)" adiciona ao final. "Dequeue()" remove e retorna o primeiro. "Peek()" visualiza o primeiro sem remover.',
    },

    // Q6 — Fill
    {
      type:'fill',
      bubble:'Para criar uma List de strings vazia e depois adicionar elementos:',
      code:`<span class="kw">var</span> inimigos = <span class="kw">new</span> List&lt;<span class="kw">_______</span>&gt;();\ninimigos.<span class="mt">Add</span>(<span class="st">"Ganado"</span>);`,
      q:'Qual tipo de elemento a List armazena neste caso?',
      hint:'Tipo de dado textual',
      ans:'string',
      exp:'"List<string>" declara uma lista que só aceita strings. O tipo genérico T define o tipo dos elementos armazenados.',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'Para acessar um valor em um Dictionary usando sua chave:',
      code:`<span class="kw">var</span> arsenal = <span class="kw">new</span> Dictionary&lt;<span class="kw">string</span>, <span class="kw">int</span>&gt;();\narsenal[<span class="st">"Pistola"</span>] = <span class="nm">45</span>;\n<span class="kw">int</span> balas = arsenal[<span class="st">"_______"</span>];`,
      q:'Qual chave usar para acessar a quantidade de balas da Pistola?',
      hint:'A chave que foi inserida',
      ans:'Pistola',
      exp:'"arsenal["Pistola"]" acessa o valor associado à chave "Pistola", que é 45. Se a chave não existir, lança KeyNotFoundException.',
    },

    // Q8 — Fill
    {
      type:'fill',
      bubble:'Para verificar se uma chave existe antes de acessar, usamos <code>ContainsKey()</code>.',
      code:`<span class="kw">if</span> (arsenal.<span class="mt">_______</span>(<span class="st">"Rifle"</span>))\n    Console.<span class="mt">WriteLine</span>(arsenal[<span class="st">"Rifle"</span>]);`,
      q:'Qual método verifica se a chave existe no Dictionary?',
      hint:'Contém a chave?',
      ans:'ContainsKey',
      exp:'"ContainsKey(chave)" evita KeyNotFoundException. Padrão seguro: sempre verifique antes ou use TryGetValue().',
    },

    // Q9 — Code
    {
      type:'code',
      bubble:'List<T> em ação — gerenciando o inventário.',
      code:`<span class="kw">var</span> inv = <span class="kw">new</span> List&lt;<span class="kw">string</span>&gt; { <span class="st">"Pistola"</span>, <span class="st">"Faca"</span>, <span class="st">"Erva"</span> };\ninv.<span class="mt">Add</span>(<span class="st">"Escopeta"</span>);\ninv.<span class="mt">Remove</span>(<span class="st">"Faca"</span>);\nConsole.<span class="mt">WriteLine</span>(inv.<span class="mt">Count</span>);\nConsole.<span class="mt">WriteLine</span>(inv[<span class="nm">1</span>]);`,
      q:'O que será exibido?',
      hint:'Adiciona 1, remove 1. Quem fica no índice 1?',
      opts:[
        {t:'4 e Faca', ok:false},
        {t:'3 e Erva', ok:true},
        {t:'3 e Pistola', ok:false},
        {t:'4 e Erva', ok:false},
      ],
      exp:'Inicial: [Pistola, Faca, Erva]. Add: [Pistola, Faca, Erva, Escopeta]. Remove Faca: [Pistola, Erva, Escopeta]. Count=3, índice 1 = "Erva".',
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'Dictionary mapeando arma para dano.',
      code:`<span class="kw">var</span> danos = <span class="kw">new</span> Dictionary&lt;<span class="kw">string</span>,<span class="kw">int</span>&gt;\n{\n    [<span class="st">"Pistola"</span>]  = <span class="nm">25</span>,\n    [<span class="st">"Escopeta"</span>] = <span class="nm">80</span>,\n    [<span class="st">"Rifle"</span>]    = <span class="nm">120</span>\n};\n<span class="kw">foreach</span>(<span class="kw">var</span> par <span class="kw">in</span> danos)\n    Console.<span class="mt">WriteLine</span>(<span class="st">$"{par.Key}: {par.Value}"</span>);`,
      q:'Quantas linhas serão exibidas?',
      hint:'Um par, uma linha',
      opts:[
        {t:'1', ok:false},{t:'2', ok:false},
        {t:'3', ok:true},{t:'6', ok:false},
      ],
      exp:'O Dictionary tem 3 pares. foreach itera cada KeyValuePair. 3 linhas: "Pistola: 25", "Escopeta: 80", "Rifle: 120".',
    },

    // Q11 — Code
    {
      type:'code',
      bubble:'Stack (LIFO) simulando histórico de ações.',
      code:`<span class="kw">var</span> historico = <span class="kw">new</span> Stack&lt;<span class="kw">string</span>&gt;();\nhistorico.<span class="mt">Push</span>(<span class="st">"Mover"</span>);\nhistorico.<span class="mt">Push</span>(<span class="st">"Atacar"</span>);\nhistorico.<span class="mt">Push</span>(<span class="st">"Recarregar"</span>);\nConsole.<span class="mt">WriteLine</span>(historico.<span class="mt">Pop</span>());\nConsole.<span class="mt">WriteLine</span>(historico.<span class="mt">Peek</span>());`,
      q:'O que será exibido?',
      hint:'LIFO: último a entrar é o primeiro a sair',
      opts:[
        {t:'Mover e Atacar', ok:false},
        {t:'Recarregar e Atacar', ok:true},
        {t:'Recarregar e Recarregar', ok:false},
        {t:'Mover e Mover', ok:false},
      ],
      exp:'Push: [Mover, Atacar, Recarregar]. Pop() = "Recarregar" (topo, remove). Peek() = "Atacar" (novo topo, não remove).',
    },

  ]
};
