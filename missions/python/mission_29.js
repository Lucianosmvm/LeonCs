// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 30 — BOAS PRÁTICAS E PEP 8
// Tema: Estilo, legibilidade e código limpo
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_29 = {
  id: 29,
  title: "MISSÃO 30 — BOAS PRÁTICAS E PEP 8",
  icon: '🏆',
  free: false,
  desc: "Código bom é código legível. PEP 8 e boas práticas separam scripts amadores de projetos profissionais. Missão final.",
  objs: [
    "Aplicar o guia de estilo PEP 8",
    "Escrever código limpo e legível",
    "Consolidar boas práticas de Python"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'A <strong>PEP 8</strong> é o guia oficial de estilo de código Python.',
      q: 'O que é a PEP 8?',
      opts: [
        { t: 'Uma versão do Python', ok: false },
        { t: 'O guia oficial de estilo de código', ok: true },
        { t: 'Um pacote de segurança', ok: false },
        { t: 'Um framework de testes', ok: false },
      ],
      exp: 'PEP 8 define convenções de formatação: indentação, nomes, espaços e organização — para código consistente e legível.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'A PEP 8 recomenda <strong>4 espaços</strong> por nível de indentação.',
      q: 'Quantos espaços a PEP 8 recomenda por indentação?',
      opts: [
        { t: '1 espaço', ok: false },
        { t: '2 espaços', ok: false },
        { t: '4 espaços', ok: true },
        { t: '8 espaços', ok: false },
      ],
      exp: 'A convenção é 4 espaços (não tabs) por nível. Ferramentas como black aplicam isso automaticamente.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Nomes de funções e variáveis usam <code>snake_case</code>; classes usam <code>PascalCase</code>.',
      q: 'Qual convenção a PEP 8 recomenda para nomes de função?',
      opts: [
        { t: 'camelCase', ok: false },
        { t: 'PascalCase', ok: false },
        { t: 'kebab-case', ok: false },
        { t: 'snake_case', ok: true },
      ],
      exp: 'Funções e variáveis: snake_case (calcular_total). Classes: PascalCase (ContaBancaria). Constantes: MAIÚSCULAS.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Constantes são escritas em <code>MAIÚSCULAS_COM_UNDERSCORE</code>.',
      q: 'Como nomear uma constante segundo a PEP 8?',
      opts: [
        { t: 'MAX_TENTATIVAS', ok: true },
        { t: 'maxTentativas', ok: false },
        { t: 'MaxTentativas', ok: false },
        { t: 'max_tentativas', ok: false },
      ],
      exp: 'Constantes em UPPER_CASE deixam claro que o valor não deve mudar: PI = 3.14, MAX_TENTATIVAS = 3.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'O <strong>Zen do Python</strong> (import this) resume a filosofia: "Explícito é melhor que implícito".',
      q: 'Segundo o Zen do Python, o que é melhor que implícito?',
      opts: [
        { t: 'Rápido', ok: false },
        { t: 'Explícito', ok: true },
        { t: 'Complexo', ok: false },
        { t: 'Aninhado', ok: false },
      ],
      exp: 'import this exibe o Zen: "Explicit is better than implicit", "Readability counts", entre outros princípios.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Uma <strong>docstring</strong> documenta módulos, funções e classes, entre aspas triplas.',
      q: 'Para que serve uma docstring?',
      opts: [
        { t: 'Executar testes', ok: false },
        { t: 'Importar módulos', ok: false },
        { t: 'Documentar o que o código faz', ok: true },
        { t: 'Definir constantes', ok: false },
      ],
      exp: 'A docstring """...""" logo após def/class descreve o propósito; fica acessível via help() e .__doc__.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'A PEP 8 sugere limitar as linhas a cerca de <strong>79 caracteres</strong>.',
      q: 'Qual o comprimento máximo de linha sugerido pela PEP 8?',
      opts: [
        { t: '40 caracteres', ok: false },
        { t: '120 caracteres', ok: false },
        { t: '256 caracteres', ok: false },
        { t: '79 caracteres', ok: true },
      ],
      exp: 'O limite clássico é 79 (para código) e 72 para comentários/docstrings, facilitando leitura lado a lado.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Escreva o nome desta função seguindo a convenção da PEP 8 (duas palavras).',
      code: `<span class="kw">def</span> calcular<span class="kw">_______</span>total(itens):\n    <span class="kw">return</span> <span class="mt">sum</span>(itens)`,
      q: 'Qual caractere separa palavras em snake_case?',
      ans: '_',
      exp: 'snake_case usa underscore entre palavras: calcular_total. Nada de camelCase em nomes de função.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Revele a filosofia da linguagem no interpretador.',
      code: `<span class="kw">import</span> <span class="kw">_______</span>\n<span class="cm"># exibe o Zen do Python</span>`,
      q: 'Qual "módulo" você importa para ver o Zen do Python?',
      ans: 'this',
      exp: 'import this é um easter egg que imprime "The Zen of Python", os princípios de design da linguagem.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Missão final! Analise este código limpo com docstring e boas práticas.',
      code: `<span class="kw">def</span> media(valores):\n    <span class="st">"""Retorna a média dos valores."""</span>\n    <span class="kw">return</span> <span class="mt">sum</span>(valores) <span class="kw">/</span> <span class="mt">len</span>(valores)\n\n<span class="mt">print</span>(media([<span class="nm">10</span>, <span class="nm">20</span>, <span class="nm">30</span>]))`,
      q: 'O que este código exibe?',
      opts: [
        { t: '20.0', ok: true },
        { t: '60', ok: false },
        { t: '20', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: 'sum = 60, len = 3, 60 / 3 = 20.0. A divisão / sempre devolve float em Python 3. Parabéns, agente! 🏆',
    },

  ]
};
