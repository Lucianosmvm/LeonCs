// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 05 — STRINGS
// Tema: Métodos de string, fatiamento, f-strings básico
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_4 = {
  id: 4,
  title: "MISSÃO 05 — STRINGS",
  icon: '💬',
  free: true,
  desc: "Texto é o tipo de dado mais comum. Strings em Python têm dezenas de métodos poderosos — aprenda os essenciais.",
  objs: [
    "Usar len(), upper(), lower(), strip()",
    "Acessar caracteres com índices e fatiamento",
    "Formatar strings com f-strings"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'A função <code>len()</code> retorna o número de caracteres de uma string.',
      q: 'O que retorna: len("Python")?',
      opts: [
        { t: '6', ok: true },
        { t: '5', ok: false },
        { t: 'Erro', ok: false },
        { t: '7', ok: false },
      ],
      exp: '"Python" tem 6 caracteres: P-y-t-h-o-n. len() conta espaços também.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Índices em Python começam do <strong>zero</strong>. O primeiro caractere é o índice 0, o segundo é 1, e assim por diante.',
      q: 'Qual é o resultado de: "Leon"[0]?',
      opts: [
        { t: 'Erro', ok: false },
        { t: '"Leon"', ok: false },
        { t: '"L"', ok: true },
        { t: '"e"', ok: false },
      ],
      exp: 'Índice 0 é o primeiro caractere. "Leon"[0] = "L", "Leon"[1] = "e", "Leon"[-1] = "n" (último).',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Índices negativos contam do fim. <code>-1</code> é o último caractere, <code>-2</code> é o penúltimo.',
      q: 'Qual é o resultado de: "Agente"[-1]?',
      opts: [
        { t: 'Erro', ok: false },
        { t: '"e"', ok: true },
        { t: '"t"', ok: false },
        { t: '"A"', ok: false },
      ],
      exp: '"Agente"[-1] = "e" (último). "Agente"[-2] = "t" (penúltimo). Índices negativos são muito úteis.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>.upper()</code> converte para maiúsculas, <code>.lower()</code> para minúsculas. São métodos — chamados com ponto.',
      q: 'O que exibe: print("python".upper())?',
      opts: [
        { t: 'Erro', ok: false },
        { t: 'Python', ok: false },
        { t: '"python"', ok: false },
        { t: 'PYTHON', ok: true },
      ],
      exp: '.upper() retorna nova string em maiúsculas. A original não é alterada — strings são imutáveis em Python.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>.strip()</code> remove espaços (e quebras de linha) do início e fim da string. Muito útil ao processar input().',
      q: 'O que retorna: "  Leon  ".strip()?',
      opts: [
        { t: 'Erro', ok: false },
        { t: '"  Leon  "', ok: false },
        { t: '"Leon"', ok: true },
        { t: '"Leon  "', ok: false },
      ],
      exp: '.strip() remove espaços de ambos os lados. .lstrip() só esquerda, .rstrip() só direita.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<strong>f-strings</strong> permitem inserir variáveis diretamente no texto com <code>f"texto {variavel}"</code>.',
      q: 'Qual f-string exibe "Nível: 5"?',
      opts: [
        { t: '"Nível: " + nivel', ok: false },
        { t: 'f"Nível: {nivel}"', ok: true },
        { t: '"Nível: %s" % nivel', ok: false },
        { t: '"Nível: " + str(nivel)', ok: false },
      ],
      exp: 'f-strings (Python 3.6+) são a forma moderna e mais legível. f"Nível: {nivel}" insere o valor de nivel automaticamente.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: '<strong>Fatiamento</strong> (slicing) extrai partes de uma string: <code>texto[inicio:fim]</code> (fim não incluso).',
      q: 'O que retorna: "Missão"[0:3]?',
      opts: [
        { t: 'Erro', ok: false },
        { t: '"issã"', ok: false },
        { t: '"Missã"', ok: false },
        { t: '"Mis"', ok: true },
      ],
      exp: '[0:3] pega índices 0, 1, 2 (fim não incluso). "Missão"[0]="M", [1]="i", [2]="s" → "Mis".',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'f-strings inserem variáveis dentro de chaves {}.',
      code: `nome = <span class="st">"Leon"</span>\nnivel = <span class="nm">7</span>\n<span class="mt">print</span>(<span class="kw">_______</span><span class="st">"Agente {nome}, nível {nivel}"</span>)`,
      q: 'Qual prefixo transforma uma string comum em f-string?',
      ans: 'f',
      exp: 'O prefixo f antes das aspas ativa a interpolação de variáveis. f"..." avalia {expressões} dentro.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'len() conta os caracteres.',
      code: `senha = <span class="st">"RE4Leon"</span>\n<span class="mt">print</span>(<span class="mt">_______</span>(senha))\n<span class="cm"># exibe: 7</span>`,
      q: 'Qual função retorna o comprimento?',
      ans: 'len',
      exp: 'len("RE4Leon") = 7. R-E-4-L-e-o-n são 7 caracteres.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise este uso de métodos de string.',
      code: `usuario = <span class="st">"  AGENTE_07  "</span>\nusuario = usuario.<span class="mt">strip</span>().<span class="mt">lower</span>()\n<span class="mt">print</span>(usuario)`,
      q: 'O que este código exibe?',
      opts: [
        { t: '"  AGENTE_07  "', ok: false },
        { t: 'agente_07', ok: true },
        { t: 'AGENTE_07', ok: false },
        { t: '  agente_07  ', ok: false },
      ],
      exp: '.strip() remove os espaços → "AGENTE_07". .lower() converte para minúsculas → "agente_07". Métodos encadeados executam da esquerda para direita.',
    },

  ]
};
