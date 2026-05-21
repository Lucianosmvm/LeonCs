// ══════════════════════════════════════════════════════
// ACT VI — O CONFRONTO FINAL
// MISSÃO 87 — ALGORITMOS DE GUERRA
// Tema: Algoritmos e estruturas de dados — sorting, searching, complexidade
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_86 = {
  id: 86,
  title: "MISSÃO 87 — ALGORITMOS DE GUERRA",
  icon: '⚡',
  free: false,
  desc: "Cada segundo conta no confronto final — Leon precisa dos algoritmos mais eficientes. Binary search, quicksort, grafos — os algoritmos de guerra que determinam quem sobrevive ao confronto.",
  objs: [
    "Analisar complexidade de tempo Big O",
    "Implementar binary search e sorting eficientes",
    "Usar estruturas de dados adequadas para cada problema",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>Binary Search</strong> requer array <strong>ordenado</strong>. Complexidade O(log n) — divide o espaço de busca pela metade a cada comparação.',
      q: 'Por que Binary Search é O(log n) e não O(n)?',
      hint: 'Divide e conquista',
      opts: [
        { t: 'Porque verifica apenas metade dos elementos', ok: false },
        { t: 'Porque a cada passo elimina metade do espaço de busca — log₂(n) passos no máximo', ok: true },
        { t: 'Porque o array é ordenado', ok: false },
        { t: 'Porque usa recursão', ok: false },
      ],
      exp: 'Binary search: mid = (low+high)/2. Se menor, busca na esquerda; se maior, direita. Cada passo: n/2 elementos restantes. n → n/2 → n/4 → 1: log₂(n) passos.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<strong>Dictionary&lt;TKey, TValue&gt;</strong> tem lookup O(1) médio (hash table). <strong>SortedDictionary</strong> tem lookup O(log n) mas mantém chaves ordenadas.',
      q: 'Para lookup frequente por chave sem necessidade de ordem, qual é mais eficiente?',
      hint: 'O(1) vs O(log n)',
      opts: [
        { t: 'SortedDictionary — ordenado é sempre melhor', ok: false },
        { t: 'Dictionary — O(1) médio vs O(log n) do SortedDictionary', ok: true },
        { t: 'List com binary search — evita overhead de hash', ok: false },
        { t: 'São equivalentes para lookup', ok: false },
      ],
      exp: 'Dictionary: hash → O(1) médio. SortedDictionary: árvore B → O(log n). Se não precisa de ordem, Dictionary é mais rápido para lookup frequente.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<strong>Array.Sort</strong> usa Introsort (quicksort + heapsort + insertion sort) — O(n log n) médio e pior caso garantido. <strong>LINQ OrderBy</strong> usa mergesort estável.',
      q: 'Qual a vantagem do LINQ OrderBy sobre Array.Sort para preservar ordem relativa?',
      hint: 'Estabilidade do sort',
      opts: [
        { t: 'OrderBy é mais rápido', ok: false },
        { t: 'OrderBy é estável — elementos iguais mantêm ordem relativa original; Array.Sort não é garantidamente estável', ok: true },
        { t: 'Array.Sort não funciona com tipos complexos', ok: false },
        { t: 'São equivalentes em estabilidade', ok: false },
      ],
      exp: 'Sort estável: elementos com mesma chave mantêm ordem original. OrderBy usa mergesort estável. Array.Sort: Introsort não garante estabilidade (usa Array.Sort com Comparison para controle).',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<strong>Stack&lt;T&gt;</strong> (LIFO) e <strong>Queue&lt;T&gt;</strong> (FIFO) — estruturas para diferentes padrões de acesso. <strong>PriorityQueue&lt;T, P&gt;</strong> processa por prioridade.',
      q: 'Para processar missões em ordem de urgência (alta prioridade primeiro), qual estrutura usar?',
      hint: 'Fila com prioridade',
      opts: [
        { t: 'Queue<T> — primeiro a entrar, primeiro a sair', ok: false },
        { t: 'PriorityQueue<T, int> — dequeue retorna o de menor valor de prioridade', ok: true },
        { t: 'Stack<T> — processamento LIFO', ok: false },
        { t: 'List<T> com Sort antes de cada acesso', ok: false },
      ],
      exp: 'PriorityQueue<TElement, TPriority>: Enqueue(elemento, prioridade). Dequeue retorna o elemento com menor prioridade. Para alta prioridade = menor número: 1=urgente, 10=baixo.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Binary search em array ordenado:',
      code: `<span class="kw">int</span>[] arr = { <span class="nm">1</span>, <span class="nm">3</span>, <span class="nm">5</span>, <span class="nm">7</span>, <span class="nm">9</span>, <span class="nm">11</span> };
<span class="kw">int</span> idx = Array.<span class="mt">_______</span>(arr, <span class="nm">7</span>);
Console.<span class="mt">WriteLine</span>(idx); <span class="cm">// 3</span>`,
      q: 'Qual método Array realiza busca binária?',
      hint: 'Binary Search',
      ans: 'BinarySearch',
      exp: 'Array.BinarySearch(array, value): retorna índice se encontrado, negativo se não. Requer array ordenado. Índice de 7 = 3 (base 0).',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Usando Stack para LIFO:',
      code: `<span class="kw">var</span> pilha = <span class="kw">new</span> Stack&lt;<span class="kw">string</span>&gt;();
pilha.<span class="mt">Push</span>(<span class="st">"primeiro"</span>);
pilha.<span class="mt">Push</span>(<span class="st">"segundo"</span>);
<span class="kw">var</span> topo = pilha.<span class="mt">_______</span>();
Console.<span class="mt">WriteLine</span>(topo); <span class="cm">// segundo</span>`,
      q: 'Qual método remove e retorna o elemento do topo da Stack?',
      hint: 'Pop em inglês',
      ans: 'Pop',
      exp: 'Stack.Pop(): remove e retorna o topo (LIFO). Stack.Peek(): retorna sem remover. "segundo" foi adicionado por último → é o topo.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Enfileirando com prioridade:',
      code: `<span class="kw">var</span> pq = <span class="kw">new</span> PriorityQueue&lt;<span class="kw">string</span>, <span class="kw">int</span>&gt;();
pq.<span class="mt">Enqueue</span>(<span class="st">"Baixa"</span>, <span class="nm">10</span>);
pq.<span class="mt">Enqueue</span>(<span class="st">"Alta"</span>, <span class="nm">1</span>);
<span class="kw">var</span> primeiro = pq.<span class="mt">_______</span>();
Console.<span class="mt">WriteLine</span>(primeiro); <span class="cm">// Alta</span>`,
      q: 'Qual método remove e retorna o elemento de maior prioridade?',
      hint: 'Dequeue',
      ans: 'Dequeue',
      exp: 'PriorityQueue.Dequeue(): retorna elemento com menor valor de prioridade. "Alta" tem prioridade 1 (menor) → dequeue primeiro.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'Array.Sort e BinarySearch.',
      code: `<span class="kw">int</span>[] nums = { <span class="nm">5</span>, <span class="nm">3</span>, <span class="nm">8</span>, <span class="nm">1</span>, <span class="nm">9</span> };
Array.<span class="mt">Sort</span>(nums);
Console.<span class="mt">WriteLine</span>(<span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">","</span>, nums));
<span class="kw">int</span> idx = Array.<span class="mt">BinarySearch</span>(nums, <span class="nm">8</span>);
Console.<span class="mt">WriteLine</span>(idx);`,
      q: 'O que será exibido?',
      hint: 'Array ordenado e índice de 8',
      opts: [
        { t: '1,3,5,8,9 e 3', ok: true },
        { t: '5,3,8,1,9 e 2', ok: false },
        { t: '1,3,5,8,9 e 4', ok: false },
        { t: '9,8,5,3,1 e 3', ok: false },
      ],
      exp: 'Sort: {1,3,5,8,9}. BinarySearch(8): índice 3 (base 0: 0=1,1=3,2=5,3=8,4=9). "1,3,5,8,9" e "3".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Stack LIFO — ordem de saída.',
      code: `<span class="kw">var</span> stack = <span class="kw">new</span> Stack&lt;<span class="kw">int</span>&gt;();
<span class="kw">foreach</span> (<span class="kw">var</span> n <span class="kw">in</span> <span class="kw">new</span>[] { <span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span> })
    stack.<span class="mt">Push</span>(n);
<span class="kw">while</span> (stack.<span class="mt">Count</span> > <span class="nm">0</span>)
    Console.<span class="mt">Write</span>(stack.<span class="mt">Pop</span>() + <span class="st">" "</span>);`,
      q: 'O que será exibido?',
      hint: 'LIFO — último entra, primeiro sai',
      opts: [
        { t: '1 2 3', ok: false },
        { t: '3 2 1', ok: true },
        { t: '2 1 3', ok: false },
        { t: 'Resultado aleatório', ok: false },
      ],
      exp: 'Push 1,2,3. Topo = 3. Pop: 3, 2, 1. "3 2 1 ".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Dictionary lookup O(1).',
      code: `<span class="kw">var</span> xpPorMissao = <span class="kw">new</span> Dictionary&lt;<span class="kw">string</span>, <span class="kw">int</span>&gt;
{
    [<span class="st">"Alpha"</span>] = <span class="nm">100</span>,
    [<span class="st">"Beta"</span>] = <span class="nm">200</span>,
    [<span class="st">"Gamma"</span>] = <span class="nm">300</span>
};
<span class="kw">var</span> total = xpPorMissao.<span class="mt">Values</span>.<span class="mt">Sum</span>();
Console.<span class="mt">WriteLine</span>(total);
Console.<span class="mt">WriteLine</span>(xpPorMissao.<span class="mt">ContainsKey</span>(<span class="st">"Delta"</span>));`,
      q: 'O que será exibido?',
      hint: 'Soma dos valores e verificação de chave',
      opts: [
        { t: '600 e True', ok: false },
        { t: '600 e False', ok: true },
        { t: '300 e False', ok: false },
        { t: '600 e Erro', ok: false },
      ],
      exp: 'Values.Sum() = 100+200+300 = 600. ContainsKey("Delta"): "Delta" não existe → false. "600" e "False".',
    },

  ]
};
