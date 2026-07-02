// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 42 — MÉTODOS DE STRING
// Tema: Manipulação avançada de texto
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_41 = {
  id: 41,
  title: "MISSÃO 42 — MÉTODOS DE STRING",
  icon: '🔤',
  free: false,
  desc: "Strings têm dezenas de métodos prontos para limpar, dividir, juntar e transformar texto. Domine-os e trate dados como um profissional.",
  objs: [
    "Dividir e juntar strings",
    "Limpar e transformar texto",
    "Buscar e substituir dentro de strings"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<code>split()</code> divide a string em uma lista.',
      q: 'O que "a,b,c".split(",") retorna?',
      opts: [
        { t: "'a b c'", ok: false },
        { t: "['a', 'b', 'c']", ok: true },
        { t: "['a,b,c']", ok: false },
        { t: "['abc']", ok: false },
      ],
      exp: 'split(",") quebra no separador vírgula, devolvendo ["a", "b", "c"].',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>join()</code> faz o inverso: junta uma lista em string.',
      q: 'O que "-".join(["a", "b", "c"]) retorna?',
      opts: [
        { t: "['a', 'b', 'c']", ok: false },
        { t: "'abc'", ok: false },
        { t: "'a-b-c'", ok: true },
        { t: "'-a-b-c-'", ok: false },
      ],
      exp: 'O separador ("-") é usado entre os elementos: "a-b-c". Note que join é chamado no separador.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>strip()</code> remove espaços (ou caracteres) das pontas.',
      q: 'O que "  oi  ".strip() retorna?',
      opts: [
        { t: '"  oi  "', ok: false },
        { t: '"o i"', ok: false },
        { t: '"oi  "', ok: false },
        { t: '"oi"', ok: true },
      ],
      exp: 'strip() remove espaços do início e do fim: "oi". lstrip/rstrip removem só de um lado.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>replace(a, b)</code> troca todas as ocorrências de a por b.',
      q: 'O que "aaa".replace("a", "b") retorna?',
      opts: [
        { t: '"bbb"', ok: true },
        { t: '"aab"', ok: false },
        { t: '"aaa"', ok: false },
        { t: '"baa"', ok: false },
      ],
      exp: 'replace troca todas as ocorrências, não apenas a primeira: "bbb".',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>upper()</code> e <code>lower()</code> mudam a caixa das letras.',
      q: 'O que "Oi".upper() retorna?',
      opts: [
        { t: '"oi"', ok: false },
        { t: '"OI"', ok: true },
        { t: '"Oi"', ok: false },
        { t: '"oI"', ok: false },
      ],
      exp: 'upper() coloca tudo em maiúsculas. Há também .title() e .capitalize() para outros padrões.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<code>startswith()</code> e <code>endswith()</code> testam prefixo e sufixo.',
      q: 'O que "arquivo.txt".endswith(".txt") retorna?',
      opts: [
        { t: 'O índice do ".txt"', ok: false },
        { t: '".txt"', ok: false },
        { t: 'True', ok: true },
        { t: 'A extensão', ok: false },
      ],
      exp: 'endswith devolve um booleano. Aqui a string termina em ".txt", então True.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: '<code>find()</code> devolve o índice da primeira ocorrência, ou <code>-1</code> se não achar.',
      q: 'O que "python".find("z") retorna?',
      opts: [
        { t: '0', ok: false },
        { t: 'None', ok: false },
        { t: 'Erro', ok: false },
        { t: '-1', ok: true },
      ],
      exp: 'find devolve -1 quando não encontra (diferente de index, que lança ValueError).',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Divida a frase em palavras.',
      code: `frase <span class="kw">=</span> <span class="st">"o rato roeu"</span>\npalavras <span class="kw">=</span> frase.<span class="kw">_______</span>()\n<span class="cm"># ['o', 'rato', 'roeu']</span>`,
      q: 'Qual método divide a string em palavras?',
      ans: 'split',
      exp: 'split() sem argumento quebra em qualquer espaço em branco, devolvendo a lista de palavras.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Junte a lista em uma frase separada por espaços.',
      code: `palavras <span class="kw">=</span> [<span class="st">"vida"</span>, <span class="st">"longa"</span>]\nfrase <span class="kw">=</span> <span class="st">" "</span>.<span class="kw">_______</span>(palavras)\n<span class="cm"># "vida longa"</span>`,
      q: 'Qual método junta a lista em string?',
      ans: 'join',
      exp: '" ".join(palavras) intercala espaços entre os elementos: "vida longa".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise o encadeamento de métodos de string.',
      code: `texto <span class="kw">=</span> <span class="st">"  Ola Mundo  "</span>\nres <span class="kw">=</span> texto.strip().lower().replace(<span class="st">" "</span>, <span class="st">"_"</span>)\n<span class="mt">print</span>(res)`,
      q: 'O que este código exibe?',
      opts: [
        { t: 'ola_mundo', ok: true },
        { t: '  ola_mundo  ', ok: false },
        { t: 'Ola_Mundo', ok: false },
        { t: 'ola mundo', ok: false },
      ],
      exp: 'strip remove as pontas → "Ola Mundo"; lower → "ola mundo"; replace espaço por _ → "ola_mundo".',
    },

  ]
};
