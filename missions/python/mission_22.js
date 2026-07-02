// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 23 — EXPRESSÕES REGULARES (REGEX)
// Tema: Módulo re e padrões de texto
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_22 = {
  id: 22,
  title: "MISSÃO 23 — EXPRESSÕES REGULARES",
  icon: '🔍',
  free: false,
  desc: "Regex encontra e valida padrões em texto: e-mails, telefones, códigos. Ferramenta essencial para tratar dados sujos.",
  objs: [
    "Usar o módulo re para buscar padrões",
    "Conhecer metacaracteres comuns",
    "Extrair e validar texto com regex"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'O módulo padrão para expressões regulares em Python é o <code>re</code>.',
      q: 'Qual módulo fornece regex em Python?',
      opts: [
        { t: 'regex', ok: false },
        { t: 're', ok: true },
        { t: 'pattern', ok: false },
        { t: 'string', ok: false },
      ],
      exp: 'import re dá acesso a search, match, findall, sub e outras funções de expressão regular.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>re.search()</code> procura o padrão em qualquer posição da string e devolve um objeto Match ou None.',
      q: 'O que re.search() retorna quando NÃO encontra o padrão?',
      opts: [
        { t: 'None', ok: true },
        { t: 'Uma string vazia', ok: false },
        { t: 'Uma lista vazia', ok: false },
        { t: 'False', ok: false },
      ],
      exp: 'Sem correspondência, re.search devolve None — por isso testamos com if antes de usar .group().',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'O metacaractere <code>\\d</code> corresponde a um dígito (0–9).',
      q: 'O que o padrão \\d representa?',
      opts: [
        { t: 'Qualquer letra', ok: false },
        { t: 'Um espaço em branco', ok: false },
        { t: 'Início da string', ok: false },
        { t: 'Um dígito de 0 a 9', ok: true },
      ],
      exp: '\\d = dígito, \\w = alfanumérico, \\s = espaço em branco. Versões maiúsculas (\\D, \\W, \\S) negam.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>re.findall()</code> devolve uma lista com todas as ocorrências do padrão.',
      q: 'O que re.findall() retorna?',
      opts: [
        { t: 'O primeiro match', ok: false },
        { t: 'Um objeto Match', ok: false },
        { t: 'Uma lista com todas as ocorrências', ok: true },
        { t: 'A quantidade de ocorrências', ok: false },
      ],
      exp: 'findall percorre toda a string e retorna uma lista de strings (ou tuplas, se houver grupos).',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'O quantificador <code>+</code> significa "um ou mais" do elemento anterior.',
      q: 'O que \\d+ corresponde?',
      opts: [
        { t: 'Um ou mais dígitos', ok: true },
        { t: 'Exatamente um dígito', ok: false },
        { t: 'Zero ou um dígito', ok: false },
        { t: 'Nenhum dígito', ok: false },
      ],
      exp: '+ = um ou mais, * = zero ou mais, ? = zero ou um, {n} = exatamente n.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<code>re.sub(padrão, novo, texto)</code> substitui todas as ocorrências do padrão.',
      q: 'O que re.sub() faz?',
      opts: [
        { t: 'Divide a string em uma lista', ok: false },
        { t: 'Substitui as ocorrências do padrão', ok: true },
        { t: 'Conta ocorrências', ok: false },
        { t: 'Compila o padrão', ok: false },
      ],
      exp: 're.sub(r"\\d", "*", "a1b2") devolve "a*b*". Substitui tudo que casa com o padrão.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'O acento circunflexo <code>^</code> ancora o padrão no início da string.',
      q: 'O que ^ significa no início de um padrão?',
      opts: [
        { t: 'Negação de caractere', ok: false },
        { t: 'Fim da string', ok: false },
        { t: 'Qualquer caractere', ok: false },
        { t: 'Início da string', ok: true },
      ],
      exp: '^ ancora no início; $ ancora no fim. Dentro de colchetes [^...] significa negação.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Importe o módulo de expressões regulares.',
      code: `<span class="kw">import</span> <span class="kw">_______</span>\n\ntexto <span class="kw">=</span> <span class="st">"Agente 007"</span>`,
      q: 'Qual módulo importar para usar regex?',
      ans: 're',
      exp: 'import re habilita re.search, re.findall, re.sub e demais funções.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Complete a busca por um ou mais dígitos.',
      code: `resultado <span class="kw">=</span> re.<span class="kw">_______</span>(<span class="st">r"\\d+"</span>, <span class="st">"Nivel 42"</span>)\n<span class="mt">print</span>(resultado.group())\n<span class="cm"># exibe: 42</span>`,
      q: 'Qual função procura o padrão em qualquer posição e retorna um Match?',
      ans: 'search',
      exp: 're.search(r"\\d+", "Nivel 42") encontra "42" e .group() extrai o texto casado.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise a extração de todos os números.',
      code: `<span class="kw">import</span> re\ntexto <span class="kw">=</span> <span class="st">"x1 y22 z333"</span>\n<span class="mt">print</span>(re.findall(<span class="st">r"\\d+"</span>, texto))`,
      q: 'O que este código exibe?',
      opts: [
        { t: "['1', '2', '3']", ok: false },
        { t: '[1, 22, 333]', ok: false },
        { t: "['1', '22', '333']", ok: true },
        { t: "['x1', 'y22', 'z333']", ok: false },
      ],
      exp: '\\d+ captura sequências de dígitos. findall devolve strings: ["1", "22", "333"].',
    },

  ]
};
