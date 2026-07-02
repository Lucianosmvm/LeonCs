// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 47 — CLOSURES E ESCOPO
// Tema: LEGB, closures e nonlocal
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_46 = {
  id: 46,
  title: "MISSÃO 47 — CLOSURES E ESCOPO",
  icon: '🔒',
  free: false,
  desc: "Entender onde as variáveis vivem — e como funções internas 'lembram' valores — desbloqueia decorators, callbacks e código elegante.",
  objs: [
    "Entender a regra de escopo LEGB",
    "Criar closures que capturam variáveis",
    "Usar global e nonlocal"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'A busca de nomes segue a regra <strong>LEGB</strong>: Local, Enclosing, Global, Built-in.',
      q: 'O que a regra LEGB descreve?',
      opts: [
        { t: 'A ordem de importação de módulos', ok: false },
        { t: 'A ordem de execução de funções', ok: false },
        { t: 'A ordem de busca de variáveis por escopo', ok: true },
        { t: 'A precedência de operadores', ok: false },
      ],
      exp: 'Python procura o nome primeiro no escopo Local, depois Enclosing, Global e por fim Built-in.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Uma <strong>closure</strong> é uma função interna que "lembra" variáveis do escopo onde foi criada.',
      q: 'O que caracteriza uma closure?',
      opts: [
        { t: 'Uma classe sem métodos', ok: false },
        { t: 'Um loop infinito', ok: false },
        { t: 'Uma variável global', ok: false },
        { t: 'Uma função que captura variáveis do escopo externo', ok: true },
      ],
      exp: 'A função interna mantém acesso às variáveis da função externa mesmo após esta retornar.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Por padrão, atribuir a uma variável dentro de uma função cria uma variável <strong>local</strong>.',
      q: 'O que acontece ao atribuir x = 1 dentro de uma função?',
      opts: [
        { t: 'Cria uma variável local', ok: true },
        { t: 'Altera a global de mesmo nome', ok: false },
        { t: 'Gera erro', ok: false },
        { t: 'Cria uma constante', ok: false },
      ],
      exp: 'A atribuição cria um nome local, distinto de qualquer global de mesmo nome (a menos que use global).',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>global x</code> permite reatribuir uma variável do escopo global de dentro da função.',
      q: 'O que a declaração global x faz?',
      opts: [
        { t: 'Cria uma constante', ok: false },
        { t: 'Permite reatribuir a variável global x', ok: true },
        { t: 'Torna x somente leitura', ok: false },
        { t: 'Apaga x', ok: false },
      ],
      exp: 'Sem global, a atribuição criaria uma local. Com global x, a função altera a variável global.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>nonlocal</code> permite alterar a variável do escopo <strong>enclosing</strong> (função externa).',
      q: 'Quando usar nonlocal?',
      opts: [
        { t: 'Para criar uma variável global', ok: false },
        { t: 'Para importar módulos', ok: false },
        { t: 'Para alterar variável da função externa (não global)', ok: true },
        { t: 'Para declarar constantes', ok: false },
      ],
      exp: 'nonlocal refere-se ao escopo da função que envolve — útil em closures que atualizam um contador, por exemplo.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Ler (sem atribuir) uma variável externa dentro da função é permitido sem declaração.',
      q: 'Posso LER uma variável global dentro de uma função sem declará-la?',
      opts: [
        { t: 'Não, nunca', ok: false },
        { t: 'Só com nonlocal', ok: false },
        { t: 'Só se for constante', ok: false },
        { t: 'Sim, leitura não exige global', ok: true },
      ],
      exp: 'Leitura segue LEGB e encontra a global normalmente. Só a atribuição exige global/nonlocal.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'O "B" de LEGB são os <strong>built-ins</strong> — nomes como <code>len</code>, <code>print</code>, <code>range</code>.',
      q: 'O que é o escopo Built-in?',
      opts: [
        { t: 'Os nomes embutidos como len e print', ok: true },
        { t: 'As variáveis locais', ok: false },
        { t: 'Os módulos importados', ok: false },
        { t: 'As variáveis da função externa', ok: false },
      ],
      exp: 'Built-in é o último nível pesquisado: onde vivem funções como len, print, sum, range.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Permita alterar a variável da função externa dentro da interna.',
      code: `<span class="kw">def</span> contador():\n    n <span class="kw">=</span> <span class="nm">0</span>\n    <span class="kw">def</span> inc():\n        <span class="kw">_______</span> n\n        n <span class="kw">+=</span> <span class="nm">1</span>\n    ...`,
      q: 'Qual palavra-chave altera a variável do escopo enclosing?',
      ans: 'nonlocal',
      exp: 'nonlocal n permite que inc() modifique o n definido em contador().',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Permita reatribuir a variável global dentro da função.',
      code: `total <span class="kw">=</span> <span class="nm">0</span>\n<span class="kw">def</span> somar(v):\n    <span class="kw">_______</span> total\n    total <span class="kw">+=</span> v`,
      q: 'Qual palavra-chave permite reatribuir a global?',
      ans: 'global',
      exp: 'global total autoriza a função a alterar a variável global em vez de criar uma local.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise esta closure que gera funções somadoras.',
      code: `<span class="kw">def</span> somador(x):\n    <span class="kw">def</span> soma(y):\n        <span class="kw">return</span> x <span class="kw">+</span> y\n    <span class="kw">return</span> soma\n\nsoma5 <span class="kw">=</span> somador(<span class="nm">5</span>)\n<span class="mt">print</span>(soma5(<span class="nm">3</span>))`,
      q: 'O que este código exibe?',
      opts: [
        { t: '5', ok: false },
        { t: '8', ok: true },
        { t: '3', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: 'somador(5) devolve uma closure que lembra x=5. soma5(3) faz 5 + 3 = 8.',
    },

  ]
};
