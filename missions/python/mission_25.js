// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 26 — PROGRAMAÇÃO FUNCIONAL
// Tema: lambda, map, filter, reduce
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_25 = {
  id: 25,
  title: "MISSÃO 26 — PROGRAMAÇÃO FUNCIONAL",
  icon: '🧩',
  free: false,
  desc: "Funções anônimas e ferramentas funcionais transformam dados de forma enxuta. Menos código, mais expressividade.",
  objs: [
    "Escrever funções anônimas com lambda",
    "Transformar dados com map e filter",
    "Reduzir sequências com reduce"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Uma <code>lambda</code> é uma função anônima de expressão única.',
      q: 'O que é uma lambda?',
      opts: [
        { t: 'Um tipo de laço', ok: false },
        { t: 'Uma classe abstrata', ok: false },
        { t: 'Uma constante global', ok: false },
        { t: 'Uma função anônima de uma expressão', ok: true },
      ],
      exp: 'lambda x: x + 1 é uma função sem nome, útil onde se precisa de uma função curta e descartável.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>map(func, iterável)</code> aplica a função a cada elemento.',
      q: 'O que map() faz?',
      opts: [
        { t: 'Ordena a sequência', ok: false },
        { t: 'Aplica uma função a cada elemento', ok: true },
        { t: 'Filtra elementos verdadeiros', ok: false },
        { t: 'Soma todos os elementos', ok: false },
      ],
      exp: 'map(f, seq) devolve um iterador com f aplicado a cada item. Envolva em list() para materializar.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>filter(func, iterável)</code> mantém apenas os elementos em que a função devolve True.',
      q: 'O que filter() faz?',
      opts: [
        { t: 'Transforma cada elemento', ok: false },
        { t: 'Inverte a sequência', ok: false },
        { t: 'Mantém elementos onde a função é True', ok: true },
        { t: 'Remove duplicados', ok: false },
      ],
      exp: 'filter(f, seq) descarta os itens onde f(item) é falso, preservando apenas os verdadeiros.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>reduce()</code> (do módulo functools) combina os elementos acumulando um único resultado.',
      q: 'De onde vem a função reduce em Python 3?',
      opts: [
        { t: 'functools', ok: true },
        { t: 'É embutida (built-in)', ok: false },
        { t: 'itertools', ok: false },
        { t: 'operator', ok: false },
      ],
      exp: 'Em Python 3, reduce saiu dos built-ins: from functools import reduce.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'map e filter devolvem <strong>iteradores preguiçosos</strong>, não listas.',
      q: 'O que map() retorna diretamente?',
      opts: [
        { t: 'Uma lista', ok: false },
        { t: 'Uma tupla', ok: false },
        { t: 'Um dicionário', ok: false },
        { t: 'Um objeto iterador (map object)', ok: true },
      ],
      exp: 'Para ver os valores, converta: list(map(...)). O iterador só produz valores quando consumido.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Uma lambda pode receber vários parâmetros: <code>lambda a, b: a + b</code>.',
      q: 'Quantos parâmetros uma lambda pode ter?',
      opts: [
        { t: 'No máximo um', ok: false },
        { t: 'Zero ou mais', ok: true },
        { t: 'Exatamente dois', ok: false },
        { t: 'Nenhum', ok: false },
      ],
      exp: 'lambda aceita qualquer número de parâmetros, mas o corpo é uma única expressão (sem return explícito).',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'O parâmetro <code>key</code> de <code>sorted()</code> costuma receber uma lambda.',
      q: 'Para que serve o argumento key em sorted()?',
      opts: [
        { t: 'Definir a ordem reversa', ok: false },
        { t: 'Remover duplicados', ok: false },
        { t: 'Definir o critério de ordenação', ok: true },
        { t: 'Limitar a quantidade', ok: false },
      ],
      exp: 'sorted(lista, key=lambda x: x[1]) ordena pelo segundo elemento de cada item.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Complete a função anônima que dobra um número.',
      code: `dobro <span class="kw">=</span> <span class="kw">_______</span> x: x <span class="kw">*</span> <span class="nm">2</span>\n<span class="mt">print</span>(dobro(<span class="nm">5</span>))\n<span class="cm"># exibe: 10</span>`,
      q: 'Qual palavra-chave cria uma função anônima?',
      ans: 'lambda',
      exp: 'lambda x: x * 2 é uma função de um argumento que devolve o dobro.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Aplique uma função a cada elemento da lista.',
      code: `nums <span class="kw">=</span> [<span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span>]\ndobrados <span class="kw">=</span> <span class="mt">list</span>(<span class="kw">_______</span>(<span class="kw">lambda</span> x: x <span class="kw">*</span> <span class="nm">2</span>, nums))\n<span class="cm"># dobrados = [2, 4, 6]</span>`,
      q: 'Qual função aplica a lambda a cada elemento?',
      ans: 'map',
      exp: 'map(f, nums) aplica f a cada item; list() materializa o resultado [2, 4, 6].',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise a combinação de filter e list.',
      code: `nums <span class="kw">=</span> [<span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span>, <span class="nm">4</span>, <span class="nm">5</span>]\nres <span class="kw">=</span> <span class="mt">list</span>(<span class="mt">filter</span>(<span class="kw">lambda</span> x: x <span class="kw">%</span> <span class="nm">2</span> <span class="kw">==</span> <span class="nm">0</span>, nums))\n<span class="mt">print</span>(res)`,
      q: 'O que este código exibe?',
      opts: [
        { t: '[2, 4]', ok: true },
        { t: '[1, 3, 5]', ok: false },
        { t: '[2, 4, 6]', ok: false },
        { t: '[1, 2, 3, 4, 5]', ok: false },
      ],
      exp: 'filter mantém os itens onde x % 2 == 0 é True: apenas os pares 2 e 4.',
    },

  ]
};
