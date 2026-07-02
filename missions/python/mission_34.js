// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 35 — COLLECTIONS
// Tema: Counter, defaultdict, namedtuple, deque
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_34 = {
  id: 34,
  title: "MISSÃO 35 — COLLECTIONS",
  icon: '📚',
  free: false,
  desc: "O módulo collections traz estruturas de dados especializadas que resolvem problemas comuns com elegância e desempenho.",
  objs: [
    "Contar itens com Counter",
    "Usar defaultdict para valores padrão",
    "Conhecer namedtuple e deque"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<code>Counter</code> conta ocorrências de elementos automaticamente.',
      q: 'O que Counter faz?',
      opts: [
        { t: 'Ordena elementos', ok: false },
        { t: 'Remove duplicados', ok: false },
        { t: 'Conta ocorrências de cada elemento', ok: true },
        { t: 'Inverte a sequência', ok: false },
      ],
      exp: 'Counter("banana") devolve {"a": 3, "n": 2, "b": 1} — a contagem de cada caractere.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>Counter.most_common(n)</code> devolve os n itens mais frequentes.',
      q: 'O que most_common(2) retorna?',
      opts: [
        { t: 'Os 2 primeiros itens inseridos', ok: false },
        { t: 'Os 2 menores valores', ok: false },
        { t: 'Um erro', ok: false },
        { t: 'Os 2 itens mais frequentes', ok: true },
      ],
      exp: 'most_common(2) devolve uma lista de tuplas (item, contagem) dos dois mais frequentes.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>defaultdict</code> cria um valor padrão automaticamente para chaves ausentes.',
      q: 'O que defaultdict(int) faz ao acessar uma chave nova?',
      opts: [
        { t: 'Cria a chave com valor 0', ok: true },
        { t: 'Lança KeyError', ok: false },
        { t: 'Retorna None', ok: false },
        { t: 'Remove a chave', ok: false },
      ],
      exp: 'defaultdict(int) inicia chaves novas com int() = 0, ideal para contagens: d[x] += 1 sem checar antes.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>namedtuple</code> cria tuplas com campos nomeados.',
      q: 'Qual a vantagem de um namedtuple sobre uma tupla comum?',
      opts: [
        { t: 'É mutável', ok: false },
        { t: 'Permite acessar campos por nome', ok: true },
        { t: 'Ocupa menos memória que uma lista', ok: false },
        { t: 'Ordena sozinho', ok: false },
      ],
      exp: 'Ponto = namedtuple("Ponto", "x y"); p.x é mais claro que p[0], mantendo a imutabilidade da tupla.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>deque</code> é uma fila de duas pontas com inserção/remoção rápida nas extremidades.',
      q: 'Para que serve um deque?',
      opts: [
        { t: 'Ordenar automaticamente', ok: false },
        { t: 'Contar itens', ok: false },
        { t: 'Inserir/remover eficientemente nas duas pontas', ok: true },
        { t: 'Armazenar pares chave-valor', ok: false },
      ],
      exp: 'deque tem appendleft/popleft O(1), enquanto list.insert(0, x) é O(n). Ideal para filas.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Todas essas estruturas vêm do módulo <code>collections</code>.',
      q: 'De qual módulo vêm Counter, defaultdict e deque?',
      opts: [
        { t: 'itertools', ok: false },
        { t: 'typing', ok: false },
        { t: 'functools', ok: false },
        { t: 'collections', ok: true },
      ],
      exp: 'from collections import Counter, defaultdict, namedtuple, deque.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Ao acessar chave inexistente, <code>defaultdict</code> não lança erro; um <code>dict</code> comum lança <code>KeyError</code>.',
      q: 'O que difere defaultdict de um dict comum ao acessar chave ausente?',
      opts: [
        { t: 'defaultdict cria valor padrão; dict lança KeyError', ok: true },
        { t: 'Nada muda', ok: false },
        { t: 'Ambos lançam KeyError', ok: false },
        { t: 'O dict comum cria valor padrão', ok: false },
      ],
      exp: 'O dict comum exige a chave existir; o defaultdict usa a factory para criar o valor na hora.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Conte as ocorrências dos elementos da lista.',
      code: `<span class="kw">from</span> collections <span class="kw">import</span> <span class="kw">_______</span>\n\nc <span class="kw">=</span> Counter([<span class="st">"a"</span>, <span class="st">"b"</span>, <span class="st">"a"</span>])\n<span class="cm"># c = {"a": 2, "b": 1}</span>`,
      q: 'Qual classe conta ocorrências?',
      ans: 'Counter',
      exp: 'from collections import Counter — Counter(lista) devolve as contagens.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Crie um dicionário que inicia chaves novas com 0.',
      code: `<span class="kw">from</span> collections <span class="kw">import</span> defaultdict\n\nd <span class="kw">=</span> defaultdict(<span class="kw">_______</span>)\nd[<span class="st">"x"</span>] <span class="kw">+=</span> <span class="nm">1</span>\n<span class="cm"># d["x"] == 1</span>`,
      q: 'Qual factory inicia com 0 numérico?',
      ans: 'int',
      exp: 'defaultdict(int) usa int() = 0 para chaves ausentes, permitindo d[x] += 1 direto.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise a contagem de caracteres.',
      code: `<span class="kw">from</span> collections <span class="kw">import</span> Counter\nc <span class="kw">=</span> Counter(<span class="st">"aabbc"</span>)\n<span class="mt">print</span>(c[<span class="st">"a"</span>], c[<span class="st">"z"</span>])`,
      q: 'O que este código exibe?',
      opts: [
        { t: 'KeyError', ok: false },
        { t: '2 0', ok: true },
        { t: '2 None', ok: false },
        { t: '2 1', ok: false },
      ],
      exp: '"a" aparece 2 vezes. Chave ausente ("z") num Counter devolve 0, não erro. Saída: 2 0.',
    },

  ]
};
