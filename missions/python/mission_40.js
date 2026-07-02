// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 41 — COMPREHENSIONS AVANÇADAS
// Tema: dict/set comprehension, filtros e aninhamento
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_40 = {
  id: 40,
  title: "MISSÃO 41 — COMPREHENSIONS AVANÇADAS",
  icon: '🧠',
  free: false,
  desc: "Além da list comprehension, existem dict e set comprehensions, filtros com if e aninhamento. Expressividade máxima.",
  objs: [
    "Criar dict e set comprehensions",
    "Filtrar com condições",
    "Aninhar loops em comprehensions"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Uma <strong>dict comprehension</strong> usa <code>{chave: valor for ...}</code>.',
      q: 'Qual sintaxe cria um dicionário por comprehension?',
      opts: [
        { t: '{k: v for ...}', ok: true },
        { t: '[k: v for ...]', ok: false },
        { t: '(k: v for ...)', ok: false },
        { t: '{k, v for ...}', ok: false },
      ],
      exp: 'Chaves {} com par chave:valor formam um dict: {x: x*x for x in range(3)}.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Uma <strong>set comprehension</strong> usa <code>{expr for ...}</code> (sem os dois-pontos).',
      q: 'O que {x for x in [1,1,2]} produz?',
      opts: [
        { t: 'Uma lista [1, 1, 2]', ok: false },
        { t: 'Um set {1, 2}', ok: true },
        { t: 'Um dict', ok: false },
        { t: 'Um erro', ok: false },
      ],
      exp: 'Chaves {} sem dois-pontos criam um set, que descarta duplicados: {1, 2}.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Um <code>if</code> ao final filtra os elementos.',
      q: 'O que [x for x in range(5) if x % 2 == 0] produz?',
      opts: [
        { t: '[1, 3]', ok: false },
        { t: '[0, 1, 2, 3, 4]', ok: false },
        { t: '[0, 2, 4]', ok: true },
        { t: '[2, 4]', ok: false },
      ],
      exp: 'O if x % 2 == 0 mantém apenas os pares de 0 a 4: [0, 2, 4].',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Um <code>if/else</code> na frente da expressão <strong>transforma</strong> (não filtra).',
      q: 'Onde fica o if quando serve para escolher o valor (com else)?',
      opts: [
        { t: 'Depois do for', ok: false },
        { t: 'Fora dos colchetes', ok: false },
        { t: 'Não é permitido', ok: false },
        { t: 'Antes do for, junto à expressão', ok: true },
      ],
      exp: '[a if cond else b for x in seq] — o ternário vem antes do for; o if de filtro viria depois.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Comprehensions podem ter <strong>loops aninhados</strong>.',
      q: 'O que [x*y for x in [1,2] for y in [10]] produz?',
      opts: [
        { t: '[10, 20]', ok: true },
        { t: '[1, 2]', ok: false },
        { t: '[[10], [20]]', ok: false },
        { t: '[11, 12]', ok: false },
      ],
      exp: 'Para cada x (1, 2) e cada y (10): 1*10=10 e 2*10=20 → [10, 20].',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'A ordem dos loops aninhados segue a leitura da esquerda para a direita.',
      q: 'Em [.. for a in A for b in B], qual laço é o externo?',
      opts: [
        { t: 'O de B', ok: false },
        { t: 'O de A (o primeiro)', ok: true },
        { t: 'Nenhum, rodam juntos', ok: false },
        { t: 'Depende dos valores', ok: false },
      ],
      exp: 'Lê-se como for a in A: for b in B: — o primeiro for é o externo.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Comprehensions são geralmente mais rápidas e legíveis que um loop com append.',
      q: 'Qual vantagem de uma comprehension sobre for + append?',
      opts: [
        { t: 'Aceita mais tipos', ok: false },
        { t: 'Nunca filtra', ok: false },
        { t: 'Mais concisa e geralmente mais rápida', ok: true },
        { t: 'Roda em paralelo', ok: false },
      ],
      exp: 'Menos código e otimização interna tornam a comprehension preferível para transformações simples.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Crie um dicionário de número para seu quadrado.',
      code: `quadrados <span class="kw">=</span> {x: x<span class="kw">**</span><span class="nm">2</span> <span class="kw">_______</span> x <span class="kw">in</span> <span class="mt">range</span>(<span class="nm">4</span>)}\n<span class="cm"># {0:0, 1:1, 2:4, 3:9}</span>`,
      q: 'Qual palavra-chave inicia o laço da comprehension?',
      ans: 'for',
      exp: '{x: x**2 for x in range(4)} percorre 0..3, mapeando cada número ao seu quadrado.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Filtre apenas os números positivos.',
      code: `nums <span class="kw">=</span> [<span class="nm">-1</span>, <span class="nm">2</span>, <span class="nm">-3</span>, <span class="nm">4</span>]\npos <span class="kw">=</span> [n <span class="kw">for</span> n <span class="kw">in</span> nums <span class="kw">_______</span> n <span class="kw">&gt;</span> <span class="nm">0</span>]\n<span class="cm"># pos = [2, 4]</span>`,
      q: 'Qual palavra-chave filtra os elementos ao final?',
      ans: 'if',
      exp: 'O if n > 0 no fim mantém apenas os positivos: [2, 4].',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise a set comprehension com duplicados.',
      code: `nums <span class="kw">=</span> [<span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">2</span>, <span class="nm">3</span>, <span class="nm">3</span>, <span class="nm">3</span>]\nunicos <span class="kw">=</span> {n <span class="kw">for</span> n <span class="kw">in</span> nums}\n<span class="mt">print</span>(<span class="mt">len</span>(unicos))`,
      q: 'O que este código exibe?',
      opts: [
        { t: '6', ok: false },
        { t: '1', ok: false },
        { t: '2', ok: false },
        { t: '3', ok: true },
      ],
      exp: 'O set remove duplicados: {1, 2, 3}. len = 3.',
    },

  ]
};
