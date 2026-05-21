// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 01 — INTRODUÇÃO
// Tema: O que é Python / primeiros passos
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_0 = {
  id: 0,
  title: "MISSÃO 01 — PRIMEIROS PASSOS",
  icon: '🐍',
  free: true,
  desc: "Python é uma das linguagens mais usadas no mundo. Simples, poderosa e versátil. Hora de entender por quê.",
  objs: [
    "Entender o que é Python e onde é usado",
    "Conhecer a sintaxe básica",
    "Escrever seu primeiro código Python"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>Python</strong> é uma linguagem de programação criada por Guido van Rossum e lançada em 1991. É conhecida pela sintaxe limpa e legível.',
      q: 'Quem criou o Python?',
      opts: [
        { t: 'Linus Torvalds', ok: false },
        { t: 'Guido van Rossum', ok: true },
        { t: 'James Gosling', ok: false },
        { t: 'Brendan Eich', ok: false },
      ],
      exp: 'Python foi criado por Guido van Rossum e lançado em 1991. O nome é inspirado no grupo de comédia britânico Monty Python.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Python é usado em <strong>ciência de dados</strong>, <strong>inteligência artificial</strong>, <strong>automação</strong>, <strong>web</strong> e muito mais.',
      q: 'Qual das áreas abaixo NÃO é um uso comum de Python?',
      opts: [
        { t: 'Inteligência Artificial', ok: false },
        { t: 'Desenvolvimento de jogos AAA', ok: true },
        { t: 'Automação de tarefas', ok: false },
        { t: 'Ciência de dados', ok: false },
      ],
      exp: 'Python é raro em jogos AAA por questões de desempenho. C++ domina essa área. Python brilha em IA, dados, automação e scripts.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Em Python, <strong>não existem chaves { }</strong> para delimitar blocos de código. A <strong>indentação</strong> (espaços/tabs) define a estrutura.',
      q: 'O que define blocos de código em Python?',
      opts: [
        { t: 'Chaves { }', ok: false },
        { t: 'Parênteses ( )', ok: false },
        { t: 'Indentação (espaços)', ok: true },
        { t: 'Ponto e vírgula ;', ok: false },
      ],
      exp: 'Python usa indentação obrigatória para definir blocos. Erros de indentação causam IndentationError — diferente de C#, Java e outras.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Para exibir texto no terminal em Python, usamos a função <code>print()</code>.',
      q: 'Qual função exibe texto no terminal em Python?',
      opts: [
        { t: 'Console.WriteLine()', ok: false },
        { t: 'echo()', ok: false },
        { t: 'print()', ok: true },
        { t: 'write()', ok: false },
      ],
      exp: 'print() é a função padrão para saída de texto em Python. Console.WriteLine() é C#, echo() é PHP/Bash.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Em Python, <strong>não é necessário declarar o tipo</strong> da variável. O interpretador descobre automaticamente.',
      q: 'Como declarar uma variável chamada "idade" com valor 18 em Python?',
      opts: [
        { t: 'int idade = 18;', ok: false },
        { t: 'var idade = 18', ok: false },
        { t: 'idade = 18', ok: true },
        { t: 'let idade = 18', ok: false },
      ],
      exp: 'Python usa tipagem dinâmica. Sem tipo, sem ponto e vírgula. Só: nome = valor. O interpretador infere que 18 é int.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Comentários em Python começam com <code>#</code>. Tudo após o # na mesma linha é ignorado pelo interpretador.',
      q: 'Qual símbolo inicia um comentário em Python?',
      opts: [
        { t: '//', ok: false },
        { t: '/* */', ok: false },
        { t: '--', ok: false },
        { t: '#', ok: true },
      ],
      exp: '# é o marcador de comentário de linha em Python. // é usado em C#, Java e JavaScript.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Python é uma linguagem <strong>interpretada</strong> — o código é executado linha por linha, sem compilação prévia para binário.',
      q: 'Python é uma linguagem:',
      opts: [
        { t: 'Compilada para binário nativo', ok: false },
        { t: 'Interpretada', ok: true },
        { t: 'Compilada para bytecode exclusivo de CPU', ok: false },
        { t: 'Transpilada para C', ok: false },
      ],
      exp: 'Python é interpretada: o interpretador CPython lê e executa o código diretamente. Isso facilita o desenvolvimento mas é mais lento que compilado.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'A função <code>print()</code> exibe qualquer valor. Para exibir texto, coloque entre aspas simples ou duplas.',
      code: `<span class="mt">_______</span>(<span class="st">"Olá, Python!"</span>)`,
      q: 'Qual função exibe texto no terminal?',
      ans: 'print',
      exp: 'print() é a função de saída padrão do Python. Aceita qualquer tipo: strings, números, listas.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Variáveis em Python não precisam de tipo. Atribua direto com <code>=</code>.',
      code: `nome <span class="kw">=</span> <span class="st">"Leon"</span>\n<span class="mt">print</span>(nome)\n<span class="cm"># exibe: Leon</span>`,
      q: 'Qual símbolo atribui um valor a uma variável em Python?',
      ans: '=',
      exp: '= é o operador de atribuição. == é comparação. Python não usa := para atribuição normal (apenas walrus operator em contextos específicos).',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Seu primeiro programa Python completo. Simples, direto, poderoso.',
      code: `<span class="cm"># Meu primeiro programa Python</span>\nnome <span class="kw">=</span> <span class="st">"Agente"</span>\n<span class="mt">print</span>(<span class="st">"Bem-vindo, "</span> <span class="kw">+</span> nome <span class="kw">+</span> <span class="st">"!"</span>)`,
      q: 'O que este programa exibe?',
      opts: [
        { t: 'nome', ok: false },
        { t: 'Bem-vindo, Agente!', ok: true },
        { t: 'Bem-vindo, "Agente"!', ok: false },
        { t: 'Erro de sintaxe', ok: false },
      ],
      exp: 'O operador + concatena strings em Python. "Bem-vindo, " + "Agente" + "!" resulta em "Bem-vindo, Agente!".',
    },

  ]
};
