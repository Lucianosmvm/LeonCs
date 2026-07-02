// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 32 — DATACLASSES
// Tema: Classes de dados com @dataclass
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_31 = {
  id: 31,
  title: "MISSÃO 32 — DATACLASSES",
  icon: '🧱',
  free: false,
  desc: "Dataclasses eliminam o código repetitivo de classes que só guardam dados: __init__, __repr__ e __eq__ vêm de graça.",
  objs: [
    "Criar classes com @dataclass",
    "Definir campos com valores padrão",
    "Entender os métodos gerados automaticamente"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'O decorator <code>@dataclass</code> gera automaticamente <code>__init__</code>, <code>__repr__</code> e <code>__eq__</code>.',
      q: 'O que @dataclass gera automaticamente?',
      opts: [
        { t: 'Apenas __init__', ok: false },
        { t: 'Métodos de rede', ok: false },
        { t: 'Testes unitários', ok: false },
        { t: '__init__, __repr__ e __eq__', ok: true },
      ],
      exp: '@dataclass evita escrever manualmente o construtor, a representação e a comparação de igualdade.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Os campos de uma dataclass são declarados com <strong>anotações de tipo</strong> no corpo da classe.',
      q: 'Como se declara um campo em uma dataclass?',
      opts: [
        { t: 'Com anotação de tipo: x: int', ok: true },
        { t: 'self.x = 0 no __init__', ok: false },
        { t: 'Com a palavra field antes', ok: false },
        { t: 'Fora da classe', ok: false },
      ],
      exp: 'Basta anotar: nome: str, idade: int. O @dataclass usa essas anotações para montar o __init__.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'O decorator vem do módulo <code>dataclasses</code>.',
      q: 'De onde importar @dataclass?',
      opts: [
        { t: 'typing', ok: false },
        { t: 'dataclasses', ok: true },
        { t: 'classes', ok: false },
        { t: 'collections', ok: false },
      ],
      exp: 'from dataclasses import dataclass, field.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Campos podem ter valor padrão: <code>ativo: bool = True</code>.',
      q: 'Como dar um valor padrão a um campo?',
      opts: [
        { t: 'ativo := True', ok: false },
        { t: 'default(ativo, True)', ok: false },
        { t: 'ativo: bool = True', ok: true },
        { t: 'ativo -> True', ok: false },
      ],
      exp: 'Campos com padrão devem vir depois dos sem padrão, igual a parâmetros de função.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Duas dataclasses do mesmo tipo com os mesmos valores são <strong>iguais</strong> graças ao __eq__ gerado.',
      q: 'O que retorna a comparação == entre duas dataclasses de mesmos valores?',
      opts: [
        { t: 'False (comparam identidade)', ok: false },
        { t: 'Erro', ok: false },
        { t: 'None', ok: false },
        { t: 'True', ok: true },
      ],
      exp: 'O __eq__ gerado compara campo a campo, então instâncias com valores idênticos são iguais.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Para campos mutáveis (como listas) usa-se <code>field(default_factory=list)</code>.',
      q: 'Por que usar default_factory para uma lista padrão?',
      opts: [
        { t: 'Para evitar compartilhar a mesma lista entre instâncias', ok: true },
        { t: 'Para deixar mais rápido', ok: false },
        { t: 'Porque listas não são permitidas', ok: false },
        { t: 'Para ordenar a lista', ok: false },
      ],
      exp: 'Um padrão mutável seria compartilhado por todas as instâncias. default_factory cria uma lista nova por objeto.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: '<code>@dataclass(frozen=True)</code> torna as instâncias imutáveis.',
      q: 'O que frozen=True faz numa dataclass?',
      opts: [
        { t: 'Congela a execução', ok: false },
        { t: 'Torna as instâncias imutáveis', ok: true },
        { t: 'Impede herança', ok: false },
        { t: 'Remove o __init__', ok: false },
      ],
      exp: 'Com frozen=True, tentar alterar um campo após a criação lança FrozenInstanceError.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Importe o decorator que cria classes de dados.',
      code: `<span class="kw">from</span> dataclasses <span class="kw">import</span> <span class="kw">_______</span>\n\n<span class="kw">@</span>dataclass\n<span class="kw">class</span> Ponto:\n    x: <span class="mt">int</span>\n    y: <span class="mt">int</span>`,
      q: 'Qual nome importar de dataclasses?',
      ans: 'dataclass',
      exp: 'from dataclasses import dataclass — depois aplica-se @dataclass acima da classe.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Aplique o decorator acima da classe.',
      code: `<span class="kw">_______</span>dataclass\n<span class="kw">class</span> Item:\n    nome: <span class="mt">str</span>\n    preco: <span class="mt">float</span>`,
      q: 'Qual símbolo aplica o decorator?',
      ans: '@',
      exp: '@dataclass acima da class gera o __init__(self, nome, preco) automaticamente.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise a igualdade entre duas instâncias.',
      code: `<span class="kw">from</span> dataclasses <span class="kw">import</span> dataclass\n\n<span class="kw">@</span>dataclass\n<span class="kw">class</span> P:\n    x: <span class="mt">int</span>\n    y: <span class="mt">int</span>\n\n<span class="mt">print</span>(P(<span class="nm">1</span>, <span class="nm">2</span>) <span class="kw">==</span> P(<span class="nm">1</span>, <span class="nm">2</span>))`,
      q: 'O que este código exibe?',
      opts: [
        { t: 'False', ok: false },
        { t: 'Erro', ok: false },
        { t: 'True', ok: true },
        { t: 'None', ok: false },
      ],
      exp: 'O __eq__ gerado compara os campos: 1==1 e 2==2, então True.',
    },

  ]
};
