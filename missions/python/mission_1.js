// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 02 — VARIÁVEIS E TIPOS
// Tema: Variáveis, tipos básicos, type()
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_1 = {
  id: 1,
  title: "MISSÃO 02 — VARIÁVEIS E TIPOS",
  icon: '📦',
  free: true,
  desc: "Variáveis são caixas que guardam dados. Em Python, cada caixa pode guardar qualquer tipo — sem declaração prévia.",
  objs: [
    "Criar variáveis em Python",
    "Conhecer os tipos básicos: int, float, str, bool",
    "Usar a função type() para verificar tipos"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Em Python, variáveis são criadas simplesmente atribuindo um valor. Não é preciso declarar o tipo.',
      q: 'Como criar uma variável "pontos" com valor 100 em Python?',
      opts: [
        { t: 'int pontos = 100;', ok: false },
        { t: 'var pontos = 100', ok: false },
        { t: 'pontos = 100', ok: true },
        { t: 'declare pontos = 100', ok: false },
      ],
      exp: 'Python usa tipagem dinâmica. "pontos = 100" cria a variável automaticamente como int.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Os tipos básicos em Python são: <code>int</code> (inteiro), <code>float</code> (decimal), <code>str</code> (texto), <code>bool</code> (verdadeiro/falso).',
      q: 'Qual é o tipo do valor 3.14 em Python?',
      opts: [
        { t: 'int', ok: false },
        { t: 'float', ok: true },
        { t: 'str', ok: false },
        { t: 'double', ok: false },
      ],
      exp: 'Números com ponto decimal são float em Python. "double" existe em C# e Java, não em Python.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Textos (strings) em Python são delimitados por aspas simples <code>\'\'</code> ou duplas <code>""</code>. Ambas funcionam.',
      q: 'Qual das opções abaixo é uma string válida em Python?',
      opts: [
        { t: 'nome = Leon', ok: false },
        { t: 'nome = "Leon"', ok: true },
        { t: 'nome = <Leon>', ok: false },
        { t: 'nome = [Leon]', ok: false },
      ],
      exp: '"Leon" entre aspas é uma string. Sem aspas, Python tentaria encontrar uma variável chamada Leon.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'O tipo <code>bool</code> só tem dois valores possíveis: <code>True</code> ou <code>False</code>. Atenção: começa com letra maiúscula!',
      q: 'Qual é a forma correta de criar uma variável booleana verdadeira em Python?',
      opts: [
        { t: 'ativo = true', ok: false },
        { t: 'ativo = TRUE', ok: false },
        { t: 'ativo = True', ok: true },
        { t: 'ativo = 1b', ok: false },
      ],
      exp: 'Em Python, True e False são escritos com a primeira letra maiúscula. "true" (minúsculo) causa NameError.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'A função <code>type()</code> retorna o tipo de qualquer variável ou valor.',
      q: 'O que exibe: print(type(42))?',
      opts: [
        { t: '42', ok: false },
        { t: '<class \'int\'>', ok: true },
        { t: 'integer', ok: false },
        { t: 'int', ok: false },
      ],
      exp: 'type() retorna o objeto do tipo, exibido como <class \'int\'>. Útil para depurar código.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Em Python, você pode reatribuir uma variável com um tipo diferente a qualquer momento. Isso é tipagem dinâmica.',
      q: 'O que acontece ao executar: x = 10 → x = "dez"?',
      opts: [
        { t: 'Erro de tipo', ok: false },
        { t: 'x passa a valer a string "dez"', ok: true },
        { t: 'x fica com o valor numérico 10', ok: false },
        { t: 'x vira None', ok: false },
      ],
      exp: 'Python permite mudar o tipo de uma variável livremente. x = "dez" substitui completamente o valor anterior.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Nomes de variáveis em Python: começam com letra ou _, sem espaços, sem caracteres especiais. Case-sensitive.',
      q: 'Qual nome de variável é INVÁLIDO em Python?',
      opts: [
        { t: '_vida', ok: false },
        { t: 'vida1', ok: false },
        { t: '1vida', ok: true },
        { t: 'vidaExtra', ok: false },
      ],
      exp: 'Nomes não podem começar com número. "1vida" causa SyntaxError. "_vida", "vida1" e "vidaExtra" são válidos.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'A função <code>type()</code> verifica o tipo de um valor.',
      code: `nome = <span class="st">"Leon"</span>\n<span class="mt">print</span>(<span class="mt">_______</span>(nome))\n<span class="cm"># exibe: &lt;class 'str'&gt;</span>`,
      q: 'Qual função verifica o tipo de uma variável?',
      ans: 'type',
      exp: 'type(nome) retorna <class \'str\'> porque nome é uma string.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Valores decimais usam ponto, não vírgula.',
      code: `preco = <span class="nm">_______</span>\n<span class="mt">print</span>(<span class="mt">type</span>(preco))\n<span class="cm"># exibe: &lt;class 'float'&gt;</span>`,
      q: 'Qual valor decimal atribuir para que o tipo seja float? (escreva 9.99)',
      ans: '9.99',
      exp: 'Em Python, decimais usam ponto. 9.99 é float. 9,99 causaria SyntaxError.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise este código com múltiplas variáveis.',
      code: `nome = <span class="st">"Agente"</span>\nidade = <span class="nm">25</span>\nativo = <span class="kw">True</span>\n<span class="mt">print</span>(nome, idade, ativo)`,
      q: 'O que este código exibe?',
      opts: [
        { t: '"Agente" 25 True', ok: false },
        { t: 'Agente 25 True', ok: true },
        { t: 'Agente, 25, True', ok: false },
        { t: 'Erro de tipo', ok: false },
      ],
      exp: 'print() com múltiplos argumentos os exibe separados por espaço. Strings perdem as aspas na saída.',
    },

  ]
};
