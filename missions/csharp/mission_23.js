const MISSION_23 = {
  id: 23,
  title: "MISSÃO 24 — CORREDOR DAS ARMADURAS",
  icon: '🛡️',
  free: false,
  desc: "As armaduras enfileiradas, as armas empilhadas, os itens únicos nos pedestais. Stack, Queue e HashSet — cada estrutura serve a um propósito específico.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'<strong>HashSet&lt;T&gt;</strong> armazena apenas elementos únicos e oferece verificação de existência O(1). Não há índice nem ordem garantida.',
      q:'Qual a principal característica de um HashSet<T>?',
      hint:'Pense em conjunto matemático',
      opts:[
        {t:'Armazena elementos em ordem inserção', ok:false},
        {t:'Armazena apenas elementos únicos com busca O(1)', ok:true},
        {t:'Permite acesso por índice', ok:false},
        {t:'É uma List com chaves', ok:false},
      ],
      exp:'HashSet<T>: sem duplicatas, sem índice, busca/inserção O(1). Ideal para verificar pertencimento: "está no conjunto?"',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'Stack usa <code>Push/Pop/Peek</code>. Queue usa <code>Enqueue/Dequeue/Peek</code>. Os nomes refletem o comportamento.',
      q:'Qual operação corresponde a "olhar o próximo da fila sem removê-lo" numa Queue?',
      hint:'Espiar sem mexer',
      opts:[
        {t:'Dequeue()', ok:false},
        {t:'Front()', ok:false},
        {t:'Peek()', ok:true},
        {t:'First()', ok:false},
      ],
      exp:'"Peek()" em Stack e Queue visualiza o próximo elemento sem removê-lo. Stack: topo. Queue: primeiro da fila.',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'<code>HashSet.IntersectWith()</code>, <code>UnionWith()</code> e <code>ExceptWith()</code> implementam operações de conjuntos.',
      q:'O que HashSet.IntersectWith(outro) faz?',
      hint:'Interseção matemática',
      opts:[
        {t:'Adiciona todos os elementos de outro', ok:false},
        {t:'Mantém apenas os elementos que existem em ambos os conjuntos', ok:true},
        {t:'Remove todos os elementos de outro', ok:false},
        {t:'Verifica se os conjuntos são iguais', ok:false},
      ],
      exp:'"IntersectWith" mantém apenas a interseção (elementos em comum). "UnionWith" une os dois. "ExceptWith" remove os do outro.',
    },

    // Q4 — MC
    {
      type:'mc',
      bubble:'Para processar missões em ordem de chegada, qual estrutura usar?',
      q:'Um sistema de tarefas que processa na ordem em que chegaram usa:',
      hint:'Primeiro a entrar, primeiro a sair',
      opts:[
        {t:'Stack<T> — LIFO', ok:false},
        {t:'Queue<T> — FIFO', ok:true},
        {t:'HashSet<T> — sem ordem', ok:false},
        {t:'List<T> com Sort()', ok:false},
      ],
      exp:'Queue FIFO: missões são processadas na ordem de chegada. Stack LIFO seria processar a última missão recebida primeiro.',
    },

    // Q5 — Fill
    {
      type:'fill',
      bubble:'Para adicionar ao topo de uma Stack:',
      code:`<span class="kw">var</span> pilha = <span class="kw">new</span> Stack&lt;<span class="kw">string</span>&gt;();\npilha.<span class="mt">_______</span>(<span class="st">"Missão A"</span>);`,
      q:'Qual método empurra um elemento para o topo da Stack?',
      hint:'Empurrar em inglês',
      ans:'Push',
      exp:'"Push(item)" adiciona ao topo da pilha. A Stack cresce pelo topo — o último adicionado é o primeiro a sair com Pop().',
    },

    // Q6 — Fill
    {
      type:'fill',
      bubble:'Para processar o próximo da fila removendo-o:',
      code:`<span class="kw">var</span> fila = <span class="kw">new</span> Queue&lt;<span class="kw">string</span>&gt;();\nfila.<span class="mt">Enqueue</span>(<span class="st">"Tarefa 1"</span>);\n<span class="kw">string</span> proxima = fila.<span class="mt">_______</span>();`,
      q:'Qual método remove e retorna o primeiro da Queue?',
      hint:'Sair da fila',
      ans:'Dequeue',
      exp:'"Dequeue()" remove e retorna o primeiro elemento (FIFO). Lança InvalidOperationException se a fila estiver vazia.',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'Para verificar se um elemento já foi visitado (evitar duplicatas), use HashSet:',
      code:`<span class="kw">var</span> visitados = <span class="kw">new</span> HashSet&lt;<span class="kw">string</span>&gt;();\nvisitados.<span class="mt">_______</span>(<span class="st">"Sala 1"</span>);\n<span class="kw">bool</span> jaViu = visitados.<span class="mt">Contains</span>(<span class="st">"Sala 1"</span>);`,
      q:'Qual método adiciona um elemento ao HashSet?',
      hint:'Mesmo método da List',
      ans:'Add',
      exp:'"Add(item)" adiciona ao HashSet. Se o elemento já existir, simplesmente retorna false sem erro. Útil para tracking de visitados.',
    },

    // Q8 — Code
    {
      type:'code',
      bubble:'Queue simulando fila de processamento de missões.',
      code:`<span class="kw">var</span> fila = <span class="kw">new</span> Queue&lt;<span class="kw">string</span>&gt;();\nfila.<span class="mt">Enqueue</span>(<span class="st">"Missão A"</span>);\nfila.<span class="mt">Enqueue</span>(<span class="st">"Missão B"</span>);\nfila.<span class="mt">Enqueue</span>(<span class="st">"Missão C"</span>);\n\n<span class="kw">while</span> (fila.<span class="mt">Count</span> > <span class="nm">0</span>)\n    Console.<span class="mt">Write</span>(fila.<span class="mt">Dequeue</span>() + <span class="st">" "</span>);`,
      q:'Em qual ordem as missões serão processadas?',
      hint:'FIFO — primeira a entrar é a primeira a sair',
      opts:[
        {t:'C B A', ok:false},
        {t:'A B C', ok:true},
        {t:'B A C', ok:false},
        {t:'Ordem aleatória', ok:false},
      ],
      exp:'Queue FIFO: A entrou primeiro → sai primeiro. Processamento em ordem: A, B, C.',
    },

    // Q9 — Code
    {
      type:'code',
      bubble:'HashSet removendo duplicatas de uma lista.',
      code:`<span class="kw">var</span> kills = <span class="kw">new</span> List&lt;<span class="kw">string</span>&gt;\n    { <span class="st">"Ganado"</span>,<span class="st">"Cultista"</span>,<span class="st">"Ganado"</span>,<span class="st">"Regenerador"</span>,<span class="st">"Cultista"</span> };\n<span class="kw">var</span> unicos = <span class="kw">new</span> HashSet&lt;<span class="kw">string</span>&gt;(kills);\nConsole.<span class="mt">WriteLine</span>(unicos.<span class="mt">Count</span>);`,
      q:'Quantos elementos únicos existem?',
      hint:'Ganado, Cultista, Regenerador — sem repetição',
      opts:[
        {t:'5', ok:false},{t:'2', ok:false},
        {t:'3', ok:true},{t:'4', ok:false},
      ],
      exp:'HashSet remove duplicatas automaticamente. {Ganado, Cultista, Regenerador} = 3 únicos. Passando a List para o construtor do HashSet, duplicatas são eliminadas.',
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'Stack para implementar undo (desfazer).',
      code:`<span class="kw">var</span> undo = <span class="kw">new</span> Stack&lt;<span class="kw">string</span>&gt;();\nundo.<span class="mt">Push</span>(<span class="st">"Mover Norte"</span>);\nundo.<span class="mt">Push</span>(<span class="st">"Abrir Porta"</span>);\nundo.<span class="mt">Push</span>(<span class="st">"Pegar Item"</span>);\n\nConsole.<span class="mt">WriteLine</span>(<span class="st">"Desfazendo: "</span> + undo.<span class="mt">Pop</span>());\nConsole.<span class="mt">WriteLine</span>(<span class="st">"Desfazendo: "</span> + undo.<span class="mt">Pop</span>());`,
      q:'O que será exibido?',
      hint:'LIFO: último adicionado é desfeito primeiro',
      opts:[
        {t:'Desfazendo: Mover Norte e Desfazendo: Abrir Porta', ok:false},
        {t:'Desfazendo: Pegar Item e Desfazendo: Abrir Porta', ok:true},
        {t:'Desfazendo: Pegar Item e Desfazendo: Mover Norte', ok:false},
        {t:'Desfazendo: Abrir Porta e Desfazendo: Mover Norte', ok:false},
      ],
      exp:'Topo da stack: "Pegar Item" (último adicionado). Pop() → "Pegar Item". Novo topo: "Abrir Porta". Pop() → "Abrir Porta".',
    },

    // Q11 — Code
    {
      type:'code',
      bubble:'HashSet para verificar permissões — acesso rápido O(1).',
      code:`<span class="kw">var</span> permitidos = <span class="kw">new</span> HashSet&lt;<span class="kw">string</span>&gt;\n    { <span class="st">"Leon"</span>, <span class="st">"Ada"</span>, <span class="st">"Hunnigan"</span> };\n\n<span class="kw">string</span>[] tentativas = { <span class="st">"Leon"</span>, <span class="st">"Saddler"</span>, <span class="st">"Ada"</span> };\n<span class="kw">foreach</span> (<span class="kw">var</span> nome <span class="kw">in</span> tentativas)\n    Console.<span class="mt">WriteLine</span>(<span class="st">$"{nome}: {(permitidos.Contains(nome) ? \"✓\" : \"✗\")}"</span>);`,
      q:'Quais acessos serão NEGADOS (✗)?',
      hint:'Quem não está no HashSet?',
      opts:[
        {t:'Leon e Ada', ok:false},
        {t:'Apenas Saddler', ok:true},
        {t:'Saddler e Ada', ok:false},
        {t:'Todos são negados', ok:false},
      ],
      exp:'"Leon" ✓ (está no set). "Saddler" ✗ (não está). "Ada" ✓ (está). Contains() é O(1) no HashSet — perfeito para listas de permissão.',
    },

  ]
};
