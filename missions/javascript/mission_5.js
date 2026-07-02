// ══════════════════════════════════════════════════════
// JAVASCRIPT — MISSÃO 06 — FUNÇÕES
// Tema: Declaração, arrow functions e parâmetros
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_JAVASCRIPT_5 = {
  id: 5,
  title: "MISSÃO 06 — FUNÇÕES",
  icon: '⚙️',
  free: false,
  desc: "Funções organizam e reaproveitam código. Aprenda a declará-las, usar arrow functions e trabalhar com parâmetros.",
  objs: [
    "Declarar funções e retornar valores",
    "Usar arrow functions",
    "Definir parâmetros e valores padrão"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'A palavra-chave <code>function</code> declara uma função.',
      q: 'Qual a sintaxe de uma função declarada?',
      opts: [
        { t: 'def somar(a, b): return a + b', ok: false },
        { t: 'function somar(a, b) { return a + b; }', ok: true },
        { t: 'func somar(a, b) => a + b', ok: false },
        { t: 'somar function(a, b) { }', ok: false },
      ],
      exp: 'function nome(params) { ... } declara uma função. return devolve o resultado.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>return</code> devolve um valor e encerra a função.',
      q: 'O que uma função sem return explícito devolve?',
      opts: [
        { t: '0', ok: false },
        { t: 'null', ok: false },
        { t: 'undefined', ok: true },
        { t: 'Um erro', ok: false },
      ],
      exp: 'Sem return, a função devolve undefined por padrão.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Uma <strong>arrow function</strong>: <code>(a, b) =&gt; a + b</code>.',
      q: 'Qual é uma arrow function válida?',
      opts: [
        { t: 'function => (a, b)', ok: false },
        { t: 'const f = (a, b) -> a + b;', ok: false },
        { t: 'arrow f(a, b) { }', ok: false },
        { t: 'const f = (a, b) => a + b;', ok: true },
      ],
      exp: 'A sintaxe é (params) => expressão. O retorno é implícito quando não há chaves.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Parâmetros podem ter <strong>valor padrão</strong>: <code>function oi(nome = "Agente")</code>.',
      q: 'O que faz um parâmetro padrão?',
      opts: [
        { t: 'Fornece um valor quando o argumento não é passado', ok: true },
        { t: 'Torna o parâmetro obrigatório', ok: false },
        { t: 'Impede chamar a função', ok: false },
        { t: 'Cria uma constante global', ok: false },
      ],
      exp: 'Se o argumento não for informado, o parâmetro assume o valor padrão definido.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Funções são <strong>valores</strong>: podem ser passadas como argumento (callbacks).',
      q: 'O que é uma callback?',
      opts: [
        { t: 'Uma variável global', ok: false },
        { t: 'Uma função passada como argumento para outra', ok: true },
        { t: 'Um tipo de loop', ok: false },
        { t: 'Um erro de execução', ok: false },
      ],
      exp: 'Callback é uma função passada a outra para ser chamada depois — base de eventos e código assíncrono.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Uma arrow de uma linha tem <strong>retorno implícito</strong> (sem return nem chaves).',
      q: 'O que const dobro = x => x * 2; faz?',
      opts: [
        { t: 'Não retorna nada', ok: false },
        { t: 'Gera erro de sintaxe', ok: false },
        { t: 'Retorna x * 2 automaticamente', ok: true },
        { t: 'Cria um loop', ok: false },
      ],
      exp: 'Sem chaves, a arrow retorna o valor da expressão: dobro(5) devolve 10.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'O operador <strong>rest</strong> <code>...args</code> agrupa argumentos extras em um array.',
      q: 'O que ...nums faz em function soma(...nums)?',
      opts: [
        { t: 'Ignora os argumentos', ok: false },
        { t: 'Limita a um argumento', ok: false },
        { t: 'Cria uma string', ok: false },
        { t: 'Agrupa todos os argumentos em um array', ok: true },
      ],
      exp: 'rest (...nums) reúne quantos argumentos vierem num array, permitindo funções variádicas.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Complete a palavra-chave que declara a função.',
      code: `<span class="kw">_______</span> saudar(nome) {\n  <span class="kw">return</span> <span class="st">"Olá, "</span> <span class="kw">+</span> nome;\n}`,
      q: 'Qual palavra-chave declara uma função?',
      ans: 'function',
      exp: 'function saudar(nome) { ... } declara a função.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Complete a seta da arrow function.',
      code: `<span class="kw">const</span> quadrado <span class="kw">=</span> x <span class="kw">_______</span> x <span class="kw">*</span> x;\n<span class="cm">// quadrado(4) === 16</span>`,
      q: 'Qual símbolo (2 caracteres) forma a seta da arrow function?',
      ans: '=>',
      exp: 'A seta => separa os parâmetros do corpo da arrow function.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise a função com parâmetro padrão.',
      code: `<span class="kw">function</span> potencia(base, exp <span class="kw">=</span> <span class="nm">2</span>) {\n  <span class="kw">return</span> base <span class="kw">**</span> exp;\n}\n<span class="mt">console</span>.log(potencia(<span class="nm">3</span>));`,
      q: 'O que este código exibe?',
      opts: [
        { t: '9', ok: true },
        { t: '6', ok: false },
        { t: '3', ok: false },
        { t: '5', ok: false },
      ],
      exp: 'Sem o segundo argumento, exp usa o padrão 2: 3 ** 2 = 9.',
    },

  ]
};
