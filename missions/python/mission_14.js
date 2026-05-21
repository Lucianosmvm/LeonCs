// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 15 — FUNÇÕES AVANÇADAS  [PREMIUM]
// Tema: *args, **kwargs, lambda, funções de ordem superior
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_14 = {
  id: 14,
  title: "MISSÃO 15 — FUNÇÕES AVANÇADAS",
  icon: '🧠',
  free: false,
  desc: "Funções em Python são cidadãos de primeira classe. Lambda, *args e **kwargs desbloqueiam padrões poderosos.",
  objs: [
    "Usar *args para parâmetros variáveis",
    "Criar funções anônimas com lambda",
    "Passar funções como argumentos (map, filter, sorted)"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<code>*args</code> permite que uma função receba qualquer número de argumentos posicionais como uma tupla.',
      q: 'O que exibe: def soma(*n): return sum(n); print(soma(1,2,3,4))?',
      opts: [
        { t: 'Erro — muitos argumentos', ok: false },
        { t: '10', ok: true },
        { t: '4', ok: false },
        { t: '(1, 2, 3, 4)', ok: false },
      ],
      exp: '*n captura todos os argumentos como tupla (1,2,3,4). sum() soma todos: 1+2+3+4=10.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>**kwargs</code> captura argumentos nomeados como um dicionário.',
      q: 'Após: def f(**kw): print(kw); f(nome="Leon", nivel=7) — o que exibe?',
      opts: [
        { t: 'nome nivel', ok: false },
        { t: '{"nome": "Leon", "nivel": 7}', ok: true },
        { t: '("Leon", 7)', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: '**kwargs captura nome="Leon" e nivel=7 como dicionário. print(kw) exibe {"nome": "Leon", "nivel": 7}.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>lambda</code> cria funções anônimas de uma linha: <code>lambda params: expressão</code>.',
      q: 'Qual é o resultado: dobro = lambda x: x * 2; dobro(5)?',
      opts: [
        { t: 'None', ok: false },
        { t: 'Erro', ok: false },
        { t: '10', ok: true },
        { t: 'lambda x: x * 2', ok: false },
      ],
      exp: 'lambda x: x * 2 cria uma função que recebe x e retorna x*2. dobro(5) = 5*2 = 10.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>map(func, lista)</code> aplica uma função a cada item da lista.',
      q: 'O que resulta: list(map(lambda x: x**2, [1, 2, 3]))?',
      opts: [
        { t: '[1, 2, 3]', ok: false },
        { t: '[1, 4, 9]', ok: true },
        { t: '14', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: 'map aplica x**2 a cada elemento: [1², 2², 3²] = [1, 4, 9]. list() converte o iterador.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>filter(func, lista)</code> mantém apenas os itens onde a função retorna True.',
      q: 'O que resulta: list(filter(lambda x: x > 3, [1, 2, 3, 4, 5]))?',
      opts: [
        { t: '[1, 2, 3]', ok: false },
        { t: '[4, 5]', ok: true },
        { t: '[3, 4, 5]', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: 'filter mantém apenas onde x > 3 é True: 4 e 5. Resultado: [4, 5].',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<code>sorted(lista, key=func)</code> ordena usando o resultado da função como critério.',
      q: 'Como ordenar ["banana", "kiwi", "uva"] por comprimento?',
      opts: [
        { t: 'sorted(frutas)', ok: false },
        { t: 'sorted(frutas, key=lambda f: len(f))', ok: true },
        { t: 'sorted(frutas, len)', ok: false },
        { t: 'frutas.sort(len)', ok: false },
      ],
      exp: 'key=lambda f: len(f) usa o comprimento como critério. "uva"(3), "kiwi"(4), "banana"(6).',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Em Python, funções são objetos e podem ser passadas como argumentos para outras funções.',
      q: 'O que significa "função de primeira classe" em Python?',
      opts: [
        { t: 'Funções que retornam True', ok: false },
        { t: 'Funções definidas no nível global', ok: false },
        { t: 'Funções que nunca falham', ok: false },
        { t: 'Funções podem ser atribuídas a variáveis e passadas como argumentos', ok: true },
      ],
      exp: 'First-class functions: podem ser armazenadas em variáveis, passadas como argumentos e retornadas de outras funções.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Crie uma lambda que adiciona 10 ao argumento.',
      code: `adicionar10 = <span class="kw">_______</span> x: x <span class="kw">+</span> <span class="nm">10</span>\n<span class="mt">print</span>(adicionar10(<span class="nm">5</span>))\n<span class="cm"># exibe: 15</span>`,
      q: 'Qual palavra-chave cria função anônima?',
      ans: 'lambda',
      exp: 'lambda x: x + 10 cria função anônima. adicionar10(5) = 5+10 = 15.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Use map para transformar uma lista.',
      code: `nomes = [<span class="st">"leon"</span>, <span class="st">"ada"</span>, <span class="st">"ashley"</span>]\nresult = <span class="mt">list</span>(<span class="mt">_______</span>(<span class="kw">lambda</span> n: n.<span class="mt">title</span>(), nomes))\n<span class="mt">print</span>(result)`,
      q: 'Qual função aplica a lambda a cada item?',
      ans: 'map',
      exp: 'map(lambda n: n.title(), nomes) converte cada nome para Title Case. Resultado: ["Leon", "Ada", "Ashley"].',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise o uso de sorted com key.',
      code: `inimigos = [{<span class="st">"nome"</span>: <span class="st">"Ganado"</span>, <span class="st">"hp"</span>: <span class="nm">50</span>},\n             {<span class="st">"nome"</span>: <span class="st">"Illuminado"</span>, <span class="st">"hp"</span>: <span class="nm">30</span>},\n             {<span class="st">"nome"</span>: <span class="st">"Regenerador"</span>, <span class="st">"hp"</span>: <span class="nm">200</span>}]\norte = sorted(inimigos, key=<span class="kw">lambda</span> e: e[<span class="st">"hp"</span>])\n<span class="mt">print</span>(orte[<span class="nm">0</span>][<span class="st">"nome"</span>])`,
      q: 'O que este código exibe?',
      opts: [
        { t: 'Erro', ok: false },
        { t: 'Ganado', ok: false },
        { t: 'Illuminado', ok: true },
        { t: 'Regenerador', ok: false },
      ],
      exp: 'sorted por hp: Illuminado(30), Ganado(50), Regenerador(200). orte[0] é o primeiro (menor hp): Illuminado.',
    },

  ]
};
