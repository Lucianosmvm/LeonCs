// ══════════════════════════════════════════════════════
// JAVASCRIPT — MISSÃO 01 — FUNDAMENTOS
// Tema: Variáveis, tipos e declaração
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_JAVASCRIPT_0 = {
  id: 0,
  title: "MISSÃO 01 — FUNDAMENTOS",
  icon: '🟨',
  free: true,
  desc: "JavaScript é a linguagem da web e muito além. Comece pelo básico: variáveis, tipos e como declarar valores.",
  objs: [
    "Declarar variáveis com let e const",
    "Conhecer os tipos primitivos",
    "Entender tipagem dinâmica"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Em JavaScript declaramos variáveis com <code>let</code> (mutável) ou <code>const</code> (constante).',
      q: 'Qual palavra-chave cria uma variável que NÃO pode ser reatribuída?',
      opts: [
        { t: 'const', ok: true },
        { t: 'let', ok: false },
        { t: 'var', ok: false },
        { t: 'final', ok: false },
      ],
      exp: 'const cria uma constante: seu valor não pode ser reatribuído. let permite reatribuir.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'JavaScript tem <strong>tipagem dinâmica</strong>: o tipo é definido pelo valor, não declarado.',
      q: 'Como declarar uma variável idade com valor 18?',
      opts: [
        { t: 'int idade = 18;', ok: false },
        { t: 'let idade = 18;', ok: true },
        { t: 'idade: int = 18', ok: false },
        { t: 'dim idade = 18', ok: false },
      ],
      exp: 'Sem tipo explícito: let idade = 18. O interpretador infere que é um number.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Tipos primitivos incluem <code>number</code>, <code>string</code>, <code>boolean</code>, <code>null</code>, <code>undefined</code>.',
      q: 'Qual destes é um tipo primitivo em JavaScript?',
      opts: [
        { t: 'array', ok: false },
        { t: 'object', ok: false },
        { t: 'boolean', ok: true },
        { t: 'class', ok: false },
      ],
      exp: 'boolean (true/false) é primitivo. array e object são tipos de referência, não primitivos.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'JavaScript tem um único tipo numérico: <code>number</code> (inteiros e decimais juntos).',
      q: 'Qual o tipo de 3.14 e de 42 em JavaScript?',
      opts: [
        { t: 'float e int', ok: false },
        { t: 'double e long', ok: false },
        { t: 'decimal e integer', ok: false },
        { t: 'ambos number', ok: true },
      ],
      exp: 'Não há distinção int/float: 42 e 3.14 são ambos do tipo number.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'O operador <code>typeof</code> revela o tipo de um valor.',
      q: 'O que typeof "oi" retorna?',
      opts: [
        { t: '"string"', ok: true },
        { t: '"text"', ok: false },
        { t: '"char"', ok: false },
        { t: '"oi"', ok: false },
      ],
      exp: 'typeof devolve uma string com o nome do tipo: typeof "oi" é "string".',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<code>var</code> é a forma antiga; hoje prefere-se <code>let</code> e <code>const</code>.',
      q: 'Por que preferir let/const a var?',
      opts: [
        { t: 'São mais rápidos de digitar', ok: false },
        { t: 'Têm escopo de bloco, evitando bugs', ok: true },
        { t: 'Funcionam só no Node', ok: false },
        { t: 'Aceitam mais tipos', ok: false },
      ],
      exp: 'let e const têm escopo de bloco { }, mais previsível. var tem escopo de função e causa armadilhas.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Cada instrução pode terminar com ponto e vírgula <code>;</code>.',
      q: 'O que finaliza uma instrução em JavaScript (convenção)?',
      opts: [
        { t: 'Dois pontos :', ok: false },
        { t: 'Uma vírgula ,', ok: false },
        { t: 'Ponto e vírgula ;', ok: true },
        { t: 'Uma quebra de linha obrigatória', ok: false },
      ],
      exp: 'O ; encerra instruções. É opcional (inserção automática), mas usá-lo evita ambiguidades.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Declare uma constante para o nome.',
      code: `<span class="kw">_______</span> nome <span class="kw">=</span> <span class="st">"Leon"</span>;\n<span class="cm">// não será reatribuída</span>`,
      q: 'Qual palavra-chave declara uma constante?',
      ans: 'const',
      exp: 'const nome = "Leon" cria uma constante imutável na reatribuição.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Descubra o tipo de um valor.',
      code: `<span class="mt">console</span>.log(<span class="kw">_______</span> <span class="nm">42</span>);\n<span class="cm">// exibe: number</span>`,
      q: 'Qual operador revela o tipo de um valor?',
      ans: 'typeof',
      exp: 'typeof 42 devolve "number". É o operador para inspecionar tipos.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise a reatribuição de uma variável let.',
      code: `<span class="kw">let</span> pontos <span class="kw">=</span> <span class="nm">10</span>;\npontos <span class="kw">=</span> pontos <span class="kw">+</span> <span class="nm">5</span>;\n<span class="mt">console</span>.log(pontos);`,
      q: 'O que este código exibe?',
      opts: [
        { t: '10', ok: false },
        { t: '105', ok: false },
        { t: 'Erro', ok: false },
        { t: '15', ok: true },
      ],
      exp: 'let permite reatribuir: pontos vira 10 + 5 = 15.',
    },

  ]
};
