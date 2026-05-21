// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 17 — MÓDULOS E IMPORTS  [PREMIUM]
// Tema: import, from...import, módulos padrão, pip
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_16 = {
  id: 16,
  title: "MISSÃO 17 — MÓDULOS E IMPORTS",
  icon: '📦',
  free: false,
  desc: "Módulos são bibliotecas de código reutilizável. A biblioteca padrão do Python e o ecossistema PyPI dão superpoderes ao seu código.",
  objs: [
    "Importar módulos com import e from...import",
    "Usar módulos padrão: math, random, datetime",
    "Entender o ecossistema pip e PyPI"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<code>import modulo</code> importa o módulo completo. Acesse funções com <code>modulo.funcao()</code>.',
      q: 'Como usar sqrt do módulo math após "import math"?',
      opts: [
        { t: 'sqrt(16)', ok: false },
        { t: 'math.sqrt(16)', ok: true },
        { t: 'math->sqrt(16)', ok: false },
        { t: 'from math(sqrt(16))', ok: false },
      ],
      exp: 'Com "import math", acesse com math.sqrt(). O prefixo evita conflitos de nomes entre módulos.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>from modulo import funcao</code> importa apenas a função específica — sem necessidade do prefixo.',
      q: 'Após "from math import sqrt", como usar a função?',
      opts: [
        { t: 'math.sqrt(16)', ok: false },
        { t: 'sqrt(16)', ok: true },
        { t: 'from.sqrt(16)', ok: false },
        { t: 'import.sqrt(16)', ok: false },
      ],
      exp: 'from math import sqrt importa sqrt diretamente no namespace. Agora "sqrt(16)" funciona sem prefixo.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'O módulo <code>random</code> gera números aleatórios.',
      q: 'O que faz: import random; random.randint(1, 6)?',
      opts: [
        { t: 'Sempre retorna 3', ok: false },
        { t: 'Retorna número aleatório inteiro entre 1 e 6 (inclusivo)', ok: true },
        { t: 'Retorna float entre 1.0 e 6.0', ok: false },
        { t: 'Retorna lista [1, 2, 3, 4, 5, 6]', ok: false },
      ],
      exp: 'random.randint(a, b) retorna inteiro aleatório em [a, b] — ambos inclusivos. Perfeito para simular dado.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'O módulo <code>math</code> contém constantes e funções matemáticas.',
      q: 'Qual é o valor de: import math; math.pi?',
      opts: [
        { t: '3.14', ok: false },
        { t: '3.141592653589793', ok: true },
        { t: '"pi"', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: 'math.pi é a constante π com precisão total. Outros úteis: math.e (número de Euler), math.sqrt(), math.floor().',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Você pode criar apelidos para módulos com <code>import modulo as alias</code>.',
      q: 'Após "import random as r", como chamar randint?',
      opts: [
        { t: 'random.randint(1, 6)', ok: false },
        { t: 'r.randint(1, 6)', ok: true },
        { t: 'randint(1, 6)', ok: false },
        { t: 'alias.randint(1, 6)', ok: false },
      ],
      exp: '"import random as r" cria o apelido r. Agora r.randint() funciona. Muito comum com numpy (np) e pandas (pd).',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<code>pip install pacote</code> instala pacotes externos do PyPI (Python Package Index).',
      q: 'Como instalar o pacote "requests" para fazer requisições HTTP?',
      opts: [
        { t: 'import install requests', ok: false },
        { t: 'python add requests', ok: false },
        { t: 'pip install requests', ok: true },
        { t: 'get-package requests', ok: false },
      ],
      exp: 'pip é o gerenciador de pacotes Python. "pip install requests" baixa e instala do PyPI. Depois: import requests.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'O módulo <code>datetime</code> manipula datas e horas.',
      q: 'Como obter a data e hora atual?',
      opts: [
        { t: 'datetime.now()', ok: false },
        { t: 'from datetime import datetime; datetime.now()', ok: true },
        { t: 'import time; time.date()', ok: false },
        { t: 'Date.today()', ok: false },
      ],
      exp: 'datetime.datetime.now() retorna data+hora atual. Mais legível: from datetime import datetime; datetime.now().',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Importe apenas a constante pi.',
      code: `<span class="kw">from</span> math <span class="kw">_______</span> pi, sqrt\n<span class="mt">print</span>(<span class="mt">sqrt</span>(pi))\n<span class="cm"># ~1.7724</span>`,
      q: 'Qual palavra-chave importa itens específicos?',
      ans: 'import',
      exp: '"from math import pi, sqrt" importa apenas pi e sqrt. Agora usamos sem prefixo: sqrt(pi).',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Crie um dado virtual.',
      code: `<span class="kw">import</span> random\ndado = random.<span class="mt">_______</span>(<span class="nm">1</span>, <span class="nm">6</span>)\n<span class="mt">print</span>(<span class="kw">f</span><span class="st">"Você tirou: {dado}"</span>)`,
      q: 'Qual função gera inteiro aleatório?',
      ans: 'randint',
      exp: 'random.randint(1, 6) simula um dado de 6 faces. Retorna 1, 2, 3, 4, 5 ou 6 aleatoriamente.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise este uso do módulo math.',
      code: `<span class="kw">import</span> math\n\n<span class="kw">def</span> hipotenusa(a, b):\n    <span class="kw">return</span> math.<span class="mt">sqrt</span>(a<span class="kw">**</span><span class="nm">2</span> <span class="kw">+</span> b<span class="kw">**</span><span class="nm">2</span>)\n\n<span class="mt">print</span>(<span class="kw">f</span><span class="st">"{hipotenusa(<span class="nm">3</span>, <span class="nm">4</span>):.1f}"</span>)`,
      q: 'O que este código exibe?',
      opts: [
        { t: '7.0', ok: false },
        { t: '5.0', ok: true },
        { t: '25.0', ok: false },
        { t: '5', ok: false },
      ],
      exp: 'Teorema de Pitágoras: √(3²+4²) = √(9+16) = √25 = 5.0. :.1f formata com 1 decimal: "5.0".',
    },

  ]
};
