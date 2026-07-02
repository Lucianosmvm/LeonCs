// ══════════════════════════════════════════════════════
// JAVASCRIPT — MISSÃO 03 — STRINGS
// Tema: Métodos de string e template literals
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_JAVASCRIPT_2 = {
  id: 2,
  title: "MISSÃO 03 — STRINGS",
  icon: '🔤',
  free: true,
  desc: "Texto está em toda parte. Aprenda a manipular strings e a montá-las de forma elegante com template literals.",
  objs: [
    "Usar métodos de string",
    "Montar textos com template literals",
    "Acessar tamanho e caracteres"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'A propriedade <code>.length</code> devolve o número de caracteres.',
      q: 'O que "abcd".length retorna?',
      opts: [
        { t: '3', ok: false },
        { t: '"abcd"', ok: false },
        { t: '4', ok: true },
        { t: '5', ok: false },
      ],
      exp: '.length conta os caracteres: "abcd" tem 4.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<strong>Template literals</strong> usam crases <code>`</code> e permitem interpolação com <code>${ }</code>.',
      q: 'Como interpolar a variável nome em um template literal?',
      opts: [
        { t: '`Olá, {nome}`', ok: false },
        { t: '"Olá, $nome"', ok: false },
        { t: '`Olá, +nome+`', ok: false },
        { t: '`Olá, ${nome}`', ok: true },
      ],
      exp: 'Dentro de crases, ${nome} insere o valor da variável no texto.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>toUpperCase()</code> e <code>toLowerCase()</code> mudam a caixa.',
      q: 'O que "oi".toUpperCase() retorna?',
      opts: [
        { t: '"OI"', ok: true },
        { t: '"oi"', ok: false },
        { t: '"Oi"', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: 'toUpperCase() coloca tudo em maiúsculas: "OI".',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>includes()</code> testa se um texto contém outro.',
      q: 'O que "javascript".includes("script") retorna?',
      opts: [
        { t: 'false', ok: false },
        { t: 'true', ok: true },
        { t: 'O índice', ok: false },
        { t: '"script"', ok: false },
      ],
      exp: 'includes devolve um booleano. "javascript" contém "script", então true.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>slice(inicio, fim)</code> extrai um pedaço da string (fim exclusivo).',
      q: 'O que "javascript".slice(0, 4) retorna?',
      opts: [
        { t: '"javas"', ok: false },
        { t: '"script"', ok: false },
        { t: '"java"', ok: true },
        { t: '"jav"', ok: false },
      ],
      exp: 'slice(0, 4) pega os índices 0 a 3 (4 exclusivo): "java".',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<code>split(sep)</code> divide a string em um array.',
      q: 'O que "a,b,c".split(",") retorna?',
      opts: [
        { t: '"abc"', ok: false },
        { t: '["a,b,c"]', ok: false },
        { t: '3', ok: false },
        { t: '["a", "b", "c"]', ok: true },
      ],
      exp: 'split(",") quebra no separador, devolvendo o array ["a", "b", "c"].',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Strings são <strong>imutáveis</strong>: métodos retornam uma nova string.',
      q: 'O que acontece com a string original ao chamar .toUpperCase()?',
      opts: [
        { t: 'Permanece intacta; retorna uma nova', ok: true },
        { t: 'É modificada no lugar', ok: false },
        { t: 'É apagada', ok: false },
        { t: 'Vira um array', ok: false },
      ],
      exp: 'A original não muda. O método devolve uma nova string, que você precisa guardar.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Complete o template literal interpolando o nome.',
      code: `<span class="kw">const</span> nome <span class="kw">=</span> <span class="st">"Leon"</span>;\n<span class="kw">const</span> msg <span class="kw">=</span> <span class="st">\`Olá, </span><span class="kw">_______</span><span class="st">nome}\`</span>;\n<span class="cm">// "Olá, Leon"</span>`,
      q: 'Qual símbolo (com chave) inicia a interpolação? Ex: __{',
      ans: '${',
      exp: '${nome} dentro de crases insere o valor da variável.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Complete a propriedade do tamanho da string.',
      code: `<span class="kw">const</span> senha <span class="kw">=</span> <span class="st">"1234"</span>;\n<span class="mt">console</span>.log(senha.<span class="kw">_______</span>);\n<span class="cm">// exibe: 4</span>`,
      q: 'Qual propriedade dá o número de caracteres?',
      ans: 'length',
      exp: '.length devolve a quantidade de caracteres da string.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise a montagem do texto.',
      code: `<span class="kw">const</span> item <span class="kw">=</span> <span class="st">"Espada"</span>;\n<span class="kw">const</span> qtd <span class="kw">=</span> <span class="nm">3</span>;\n<span class="mt">console</span>.log(<span class="st">\`</span><span class="st">\${qtd}x \${item}\`</span>);`,
      q: 'O que este código exibe?',
      opts: [
        { t: '${qtd}x ${item}', ok: false },
        { t: '3x Espada', ok: true },
        { t: '3 Espada 3', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: 'O template literal interpola qtd (3) e item (Espada): "3x Espada".',
    },

  ]
};
