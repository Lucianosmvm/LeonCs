// ══════════════════════════════════════════════════════
// ACT IV — O BUNKER
// MISSÃO 68 — COFRE CENTRAL ⚔️
// Tema: Coleções especializadas — SortedDictionary, LinkedList, Stack/Queue avançado
// Tipo: Chefe (18 questões) | 6 MC → 5 Fill → 7 Code
// ══════════════════════════════════════════════════════

const MISSION_67 = {
  id: 67,
  title: "MISSÃO 68 — COFRE CENTRAL ⚔️",
  icon: '⚔️',
  free: false,
  desc: "O cofre central do bunker guarda as estruturas de dados mais especializadas. SortedDictionary, LinkedList, Stack e Queue em uso avançado — cada estrutura otimizada para um tipo específico de acesso.",
  objs: [
    "Usar SortedDictionary e SortedSet para coleções ordenadas",
    "Entender LinkedList para inserções O(1) no meio",
    "Aplicar PriorityQueue para processamento por prioridade",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<code>SortedDictionary&lt;TKey, TValue&gt;</code> mantém as chaves sempre ordenadas. Inserção e busca são O(log n) — usa uma árvore rubro-negra internamente.',
      q: 'Quando preferir SortedDictionary em vez de Dictionary?',
      hint: 'Quando a ordem importa',
      opts: [
        { t: 'Para melhor performance de leitura', ok: false },
        { t: 'Quando você precisa iterar as chaves em ordem ou fazer consultas por intervalo', ok: true },
        { t: 'Quando há mais de 100 elementos', ok: false },
        { t: 'SortedDictionary é sempre melhor que Dictionary', ok: false },
      ],
      exp: 'SortedDictionary: chaves ordenadas, iteração em ordem, consultas "de A até B". Dictionary: O(1) mas sem ordem. SortedDictionary tem overhead de árvore.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>LinkedList&lt;T&gt;</code> permite inserção e remoção O(1) em qualquer posição dada uma referência ao nó. Mas acesso por índice é O(n).',
      q: 'Qual operação LinkedList faz MELHOR que List<T>?',
      hint: 'Inserir no meio',
      opts: [
        { t: 'Acesso por índice: list[i]', ok: false },
        { t: 'Inserção/remoção no meio com referência ao nó — O(1) vs O(n)', ok: true },
        { t: 'Ordenação', ok: false },
        { t: 'Busca de elemento', ok: false },
      ],
      exp: 'LinkedList: inserção/remoção no meio O(1) dado o nó. List: inserção no meio = mover elementos → O(n). Porém, encontrar o nó em LinkedList também é O(n).',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>PriorityQueue&lt;TElement, TPriority&gt;</code> (C# 10+) é uma fila de prioridade onde o elemento com menor prioridade sai primeiro.',
      q: 'Em uma fila de missões urgentes, como processar a mais urgente primeiro?',
      hint: 'Menor número = mais urgente',
      opts: [
        { t: 'Queue<T> com ordenação', ok: false },
        { t: 'PriorityQueue<Missao, int> onde menor int = maior urgência', ok: true },
        { t: 'SortedSet<Missao>', ok: false },
        { t: 'Stack<Missao>', ok: false },
      ],
      exp: 'PriorityQueue: Enqueue(missao, prioridade). Dequeue() retorna o de menor prioridade. Para "maior prioridade primeiro", use prioridade negativa.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>SortedSet&lt;T&gt;</code> é como HashSet mas mantém elementos ordenados. Também usa árvore rubro-negra — O(log n) para Add, Remove, Contains.',
      q: 'Qual estrutura garante elementos únicos E ordenados?',
      hint: 'Set + Sorted',
      opts: [
        { t: 'HashSet<T>', ok: false },
        { t: 'SortedSet<T>', ok: true },
        { t: 'List<T> com Sort()', ok: false },
        { t: 'SortedList<T, T>', ok: false },
      ],
      exp: '"SortedSet<T>" garante unicidade (como HashSet) e mantém elementos ordenados (como SortedDictionary). O(log n) para todas as operações.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>Stack&lt;T&gt;</code> é LIFO (Last In, First Out). <code>Queue&lt;T&gt;</code> é FIFO (First In, First Out). Escolha baseada no padrão de acesso.',
      q: 'Para implementar "desfazer" (undo) em um editor, qual estrutura usar?',
      hint: 'Último a entrar é o primeiro a desfazer',
      opts: [
        { t: 'Queue<T>', ok: false },
        { t: 'Stack<T> — LIFO: última ação é desfeita primeiro', ok: true },
        { t: 'List<T>', ok: false },
        { t: 'LinkedList<T>', ok: false },
      ],
      exp: 'Undo: última operação é desfeita primeiro → LIFO → Stack. Push() ao realizar ação. Pop() ao desfazer.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<code>CircularBuffer</code> não existe no .NET padrão, mas pode ser simulado com um array e índices circulares. ArrayDeque também não é nativo — use LinkedList ou Queue.',
      q: 'Para manter apenas os últimos N logs, qual padrão usar com Queue<T>?',
      hint: 'Descartar os mais antigos',
      opts: [
        { t: 'Sempre usar List<T> com RemoveAt(0)', ok: false },
        { t: 'Enqueue novos, Dequeue quando Count > N — mantém sempre os N mais recentes', ok: true },
        { t: 'HashSet<T> para deduplicação', ok: false },
        { t: 'CircularBuffer embutido no .NET', ok: false },
      ],
      exp: 'Buffer circular com Queue: if (Count > N) Dequeue(). Novo elemento entra, mais velho sai. Always N elementos mais recentes.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Adicionando itens ao SortedDictionary:',
      code: `<span class="kw">var</span> scores = <span class="kw">new</span> SortedDictionary&lt;<span class="kw">string</span>, <span class="kw">int</span>&gt;();\nscores.<span class="mt">_______</span>(<span class="st">"Leon"</span>, <span class="nm">1500</span>);\nscores.<span class="mt">Add</span>(<span class="st">"Ada"</span>, <span class="nm">2000</span>);\n<span class="cm">// Iteração: Ada(2000), Leon(1500) — chaves ordenadas</span>`,
      q: 'Qual método adiciona um par chave-valor ao dicionário?',
      hint: 'Adicionar em inglês',
      ans: 'Add',
      exp: '"Add(chave, valor)" insere no SortedDictionary. Duplicata lança InvalidOperationException. Use "scores[chave] = valor" para upsert sem exceção.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Inserindo após um nó específico em LinkedList:',
      code: `<span class="kw">var</span> lista = <span class="kw">new</span> LinkedList&lt;<span class="kw">int</span>&gt;(new[] { <span class="nm">1</span>, <span class="nm">3</span>, <span class="nm">5</span> });\n<span class="kw">var</span> no3 = lista.<span class="mt">Find</span>(<span class="nm">3</span>)!;\nlista.<span class="mt">_______</span>(no3, <span class="nm">4</span>); <span class="cm">// 1,3,4,5</span>`,
      q: 'Qual método insere um elemento após um nó em LinkedList?',
      hint: 'Add + After',
      ans: 'AddAfter',
      exp: '"AddAfter(nó, valor)" insere valor após o nó — O(1). "AddBefore(nó, valor)" insere antes. "AddFirst/AddLast" para início/fim.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'PriorityQueue — enfileirar com prioridade:',
      code: `<span class="kw">var</span> pq = <span class="kw">new</span> PriorityQueue&lt;<span class="kw">string</span>, <span class="kw">int</span>&gt;();\npq.<span class="mt">_______</span>(<span class="st">"Urgente"</span>, <span class="nm">1</span>);\npq.<span class="mt">Enqueue</span>(<span class="st">"Normal"</span>, <span class="nm">5</span>);\n<span class="kw">string</span> primeiro = pq.<span class="mt">Dequeue</span>(); <span class="cm">// "Urgente"</span>`,
      q: 'Qual método adiciona um elemento com sua prioridade?',
      hint: 'Enfileirar em inglês',
      ans: 'Enqueue',
      exp: '"Enqueue(elemento, prioridade)" adiciona. Dequeue() retorna o de MENOR prioridade. Urgente(1) < Normal(5) → Urgente sai primeiro.',
    },

    // Q10 — Fill
    {
      type: 'fill',
      bubble: 'Stack para histórico de ações:',
      code: `<span class="kw">var</span> historico = <span class="kw">new</span> Stack&lt;<span class="kw">string</span>&gt;();\nhistorico.<span class="mt">Push</span>(<span class="st">"Atirou"</span>);\nhistorico.<span class="mt">Push</span>(<span class="st">"Correu"</span>);\n<span class="kw">string</span> ultima = historico.<span class="mt">_______</span>(); <span class="cm">// "Correu"</span>`,
      q: 'Qual método retira o topo da Stack (LIFO)?',
      hint: 'Desempilhar em inglês',
      ans: 'Pop',
      exp: '"Pop()" remove e retorna o topo. "Peek()" vê sem remover. Push("Correu") foi o último → Pop() retorna "Correu". LIFO.',
    },

    // Q11 — Fill
    {
      type: 'fill',
      bubble: 'Convertendo coleção ordenada para LINQ:',
      code: `<span class="kw">var</span> top3 = scores\n    .<span class="mt">OrderByDescending</span>(p => p.Value)\n    .<span class="mt">_______</span>(<span class="nm">3</span>)\n    .<span class="mt">Select</span>(p => p.Key);`,
      q: 'Qual método LINQ limita aos primeiros N elementos?',
      hint: 'Tomar em inglês',
      ans: 'Take',
      exp: '"Take(3)" retorna os 3 primeiros elementos após OrderByDescending. Para paginação: Skip(page * size).Take(size).',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'SortedDictionary iterado em ordem de chave.',
      code: `<span class="kw">var</span> sd = <span class="kw">new</span> SortedDictionary&lt;<span class="kw">string</span>, <span class="kw">int</span>&gt;\n{\n    [<span class="st">"Zebu"</span>] = <span class="nm">3</span>, [<span class="st">"Ada"</span>] = <span class="nm">1</span>, [<span class="st">"Leon"</span>] = <span class="nm">2</span>\n};\n<span class="kw">foreach</span> (<span class="kw">var</span> (k, v) <span class="kw">in</span> sd)\n    Console.<span class="mt">Write</span>(<span class="st">$"{k} "</span>);`,
      q: 'Em que ordem as chaves serão exibidas?',
      hint: 'SortedDictionary mantém ordem alfabética',
      opts: [
        { t: 'Zebu Ada Leon (inserção)', ok: false },
        { t: 'Ada Leon Zebu (alfabética)', ok: true },
        { t: 'Ordem aleatória', ok: false },
        { t: 'Ada Zebu Leon', ok: false },
      ],
      exp: 'SortedDictionary ordena por chave. Ordem alfabética: Ada, Leon, Zebu.',
    },

    // Q13 — Code
    {
      type: 'code',
      bubble: 'LinkedList com AddAfter.',
      code: `<span class="kw">var</span> ll = <span class="kw">new</span> LinkedList&lt;<span class="kw">int</span>&gt;();\nll.<span class="mt">AddLast</span>(<span class="nm">1</span>);\nll.<span class="mt">AddLast</span>(<span class="nm">3</span>);\nll.<span class="mt">AddAfter</span>(ll.<span class="mt">Find</span>(<span class="nm">1</span>)!, <span class="nm">2</span>);\nConsole.<span class="mt">WriteLine</span>(<span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">","</span>, ll));`,
      q: 'O que será exibido?',
      hint: 'Inserindo 2 após 1',
      opts: [
        { t: '1,3,2', ok: false },
        { t: '1,2,3', ok: true },
        { t: '2,1,3', ok: false },
        { t: '3,1,2', ok: false },
      ],
      exp: 'Lista: 1→3. AddAfter(nó de 1, 2) insere 2 após 1: 1→2→3. Join: "1,2,3".',
    },

    // Q14 — Code
    {
      type: 'code',
      bubble: 'PriorityQueue processando por urgência.',
      code: `<span class="kw">var</span> pq = <span class="kw">new</span> PriorityQueue&lt;<span class="kw">string</span>, <span class="kw">int</span>&gt;();\npq.<span class="mt">Enqueue</span>(<span class="st">"Resgate"</span>, <span class="nm">3</span>);\npq.<span class="mt">Enqueue</span>(<span class="st">"Ataque"</span>,  <span class="nm">1</span>);\npq.<span class="mt">Enqueue</span>(<span class="st">"Patrulha"</span>, <span class="nm">5</span>);\n<span class="kw">while</span> (pq.<span class="mt">Count</span> > <span class="nm">0</span>)\n    Console.<span class="mt">Write</span>(pq.<span class="mt">Dequeue</span>() + <span class="st">" "</span>);`,
      q: 'O que será exibido?',
      hint: 'Menor prioridade primeiro',
      opts: [
        { t: 'Resgate Ataque Patrulha', ok: false },
        { t: 'Ataque Resgate Patrulha', ok: true },
        { t: 'Patrulha Resgate Ataque', ok: false },
        { t: 'Ordem de inserção', ok: false },
      ],
      exp: 'PriorityQueue ordena por prioridade crescente. Ataque(1) < Resgate(3) < Patrulha(5). Dequeue em ordem: "Ataque Resgate Patrulha".',
    },

    // Q15 — Code
    {
      type: 'code',
      bubble: 'Buffer circular simulado com Queue.',
      code: `<span class="kw">var</span> buffer = <span class="kw">new</span> Queue&lt;<span class="kw">int</span>&gt;();\n<span class="kw">int</span> maxSize = <span class="nm">3</span>;\n<span class="kw">foreach</span> (<span class="kw">var</span> n <span class="kw">in</span> <span class="kw">new</span>[] { <span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span>, <span class="nm">4</span>, <span class="nm">5</span> })\n{\n    buffer.<span class="mt">Enqueue</span>(n);\n    <span class="kw">if</span> (buffer.<span class="mt">Count</span> > maxSize) buffer.<span class="mt">Dequeue</span>();\n}\nConsole.<span class="mt">WriteLine</span>(<span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">","</span>, buffer));`,
      q: 'O que será exibido?',
      hint: 'Manter apenas os últimos 3',
      opts: [
        { t: '1,2,3', ok: false },
        { t: '3,4,5', ok: true },
        { t: '1,2,3,4,5', ok: false },
        { t: '2,3,4', ok: false },
      ],
      exp: 'Após 5 inserções com limite 3: Enqueue(5), Count=4>3, Dequeue() remove 2 (o mais antigo). Buffer final: 3,4,5.',
    },

    // Q16 — Code
    {
      type: 'code',
      bubble: 'SortedSet com operações de conjunto.',
      code: `<span class="kw">var</span> a = <span class="kw">new</span> SortedSet&lt;<span class="kw">int</span>&gt; { <span class="nm">1</span>, <span class="nm">3</span>, <span class="nm">5</span>, <span class="nm">7</span> };\n<span class="kw">var</span> b = <span class="kw">new</span> SortedSet&lt;<span class="kw">int</span>&gt; { <span class="nm">3</span>, <span class="nm">5</span>, <span class="nm">9</span> };\na.<span class="mt">IntersectWith</span>(b);\nConsole.<span class="mt">WriteLine</span>(<span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">","</span>, a));`,
      q: 'O que será exibido?',
      hint: 'Intersecção de {1,3,5,7} e {3,5,9}',
      opts: [
        { t: '1,3,5,7,9', ok: false },
        { t: '3,5', ok: true },
        { t: '1,7,9', ok: false },
        { t: '3,5,9', ok: false },
      ],
      exp: 'IntersectWith: modifica "a" para conter apenas elementos presentes em ambos. {1,3,5,7} ∩ {3,5,9} = {3,5}. "3,5".',
    },

    // Q17 — Code
    {
      type: 'code',
      bubble: 'Stack para avaliação de expressão (balanceamento de parênteses).',
      code: `<span class="kw">static bool</span> <span class="mt">Balanceado</span>(<span class="kw">string</span> s)\n{\n    <span class="kw">var</span> st = <span class="kw">new</span> Stack&lt;<span class="kw">char</span>&gt;();\n    <span class="kw">foreach</span> (<span class="kw">char</span> c <span class="kw">in</span> s)\n    {\n        <span class="kw">if</span> (c == <span class="st">'('</span>) st.<span class="mt">Push</span>(c);\n        <span class="kw">else if</span> (c == <span class="st">')'</span>) { <span class="kw">if</span> (st.<span class="mt">Count</span> == <span class="nm">0</span>) <span class="kw">return false</span>; st.<span class="mt">Pop</span>(); }\n    }\n    <span class="kw">return</span> st.<span class="mt">Count</span> == <span class="nm">0</span>;\n}\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Balanceado</span>(<span class="st">"(a+(b))"</span>));`,
      q: 'O que será exibido?',
      hint: 'Parênteses balanceados?',
      opts: [
        { t: 'False', ok: false },
        { t: 'True', ok: true },
        { t: 'Erro — Stack<char>', ok: false },
        { t: '2', ok: false },
      ],
      exp: '"(a+(b))": (push, a, (push, b, )pop, )pop. Stack vazio ao final → balanceado → True.',
    },

    // Q18 — Code (DESAFIO CHEFE)
    {
      type: 'code',
      bubble: '🏆 DESAFIO CHEFE — Sistema de processamento de tarefas por prioridade.',
      code: `<span class="kw">record</span> Tarefa(<span class="kw">string</span> Nome, <span class="kw">int</span> Prioridade, <span class="kw">int</span> XP);\n\n<span class="kw">var</span> pq = <span class="kw">new</span> PriorityQueue&lt;Tarefa, <span class="kw">int</span>&gt;();\nvar tarefas = <span class="kw">new</span>[] {\n    <span class="kw">new</span> Tarefa(<span class="st">"Defender"</span>, <span class="nm">2</span>, <span class="nm">300</span>),\n    <span class="kw">new</span> Tarefa(<span class="st">"Resgatar"</span>, <span class="nm">1</span>, <span class="nm">500</span>),\n    <span class="kw">new</span> Tarefa(<span class="st">"Explorar"</span>, <span class="nm">3</span>, <span class="nm">200</span>),\n};\n<span class="kw">foreach</span> (<span class="kw">var</span> t <span class="kw">in</span> tarefas) pq.<span class="mt">Enqueue</span>(t, t.Prioridade);\n<span class="kw">int</span> xpTotal = <span class="nm">0</span>;\n<span class="kw">while</span> (pq.<span class="mt">Count</span> > <span class="nm">0</span>) xpTotal += pq.<span class="mt">Dequeue</span>().XP;\nConsole.<span class="mt">WriteLine</span>(xpTotal);`,
      q: 'O que será exibido?',
      hint: 'XP de todas as tarefas somadas',
      opts: [
        { t: '500', ok: false },
        { t: '1000', ok: true },
        { t: '300', ok: false },
        { t: 'Ordem importa para o resultado', ok: false },
      ],
      exp: 'PriorityQueue processa em ordem: Resgatar(1)→500, Defender(2)→300, Explorar(3)→200. Total XP = 500+300+200 = 1000.',
    },

  ]
};
