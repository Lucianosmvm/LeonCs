// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 04 — INPUT E CONVERSÃO
// Tema: input(), int(), float(), str()
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_3 = {
  id: 3,
  title: "MISSÃO 04 — INPUT E CONVERSÃO",
  icon: '⌨️',
  free: true,
  desc: "Programas úteis interagem com o usuário. Aprenda a ler dados do teclado e converter entre tipos.",
  objs: [
    "Usar input() para ler dados do usuário",
    "Converter tipos com int(), float() e str()",
    "Entender por que input() sempre retorna string"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'A função <code>input()</code> pausa o programa e espera o usuário digitar algo. O valor digitado é retornado como <strong>string</strong>.',
      q: 'Qual é o tipo retornado por input()?',
      opts: [
        { t: 'float', ok: false },
        { t: 'int', ok: false },
        { t: 'depende do que foi digitado', ok: false },
        { t: 'str', ok: true },
      ],
      exp: 'input() sempre retorna string, mesmo que o usuário digite um número. Você precisa converter manualmente.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Para converter uma string em inteiro, use <code>int()</code>. Para decimal, use <code>float()</code>.',
      q: 'Como ler um número inteiro digitado pelo usuário?',
      opts: [
        { t: 'n = int(input())', ok: true },
        { t: 'n = integer(input())', ok: false },
        { t: 'n = input()', ok: false },
        { t: 'n = (int)input()', ok: false },
      ],
      exp: 'int(input()) primeiro lê a string e imediatamente a converte para int. É o padrão mais comum em Python.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'O que acontece se você tentar converter "abc" para int com int("abc")?',
      q: 'int("abc") causa:',
      opts: [
        { t: 'TypeError', ok: false },
        { t: 'ValueError', ok: true },
        { t: '0', ok: false },
        { t: 'None', ok: false },
      ],
      exp: 'int() falha com ValueError se a string não representa um número válido. Trate com try/except em código real.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'A função <code>input()</code> aceita uma mensagem como argumento, que é exibida antes de esperar a entrada.',
      q: 'Qual linha exibe "Digite seu nome: " e aguarda a entrada?',
      opts: [
        { t: 'nome = read("Digite seu nome: ")', ok: false },
        { t: 'nome = scan("Digite seu nome: ")', ok: false },
        { t: 'nome = input("Digite seu nome: ")', ok: true },
        { t: 'print("Digite seu nome: "); nome = input()', ok: false },
      ],
      exp: 'input("mensagem") exibe a mensagem e aguarda. É a forma mais limpa — uma linha só.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Se você tentar somar uma string com um número sem converter, Python lança TypeError.',
      q: 'Qual erro ocorre em: "5" + 3?',
      opts: [
        { t: '8', ok: false },
        { t: 'ValueError', ok: false },
        { t: '"53"', ok: false },
        { t: 'TypeError', ok: true },
      ],
      exp: 'Python não soma string com int automaticamente. Use int("5") + 3 = 8 ou "5" + str(3) = "53".',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<code>str()</code> converte qualquer valor para string. Útil para concatenar números com texto.',
      q: 'O que exibe: print("Pontos: " + str(100))?',
      opts: [
        { t: 'Pontos: 100', ok: true },
        { t: 'Erro', ok: false },
        { t: 'Pontos + 100', ok: false },
        { t: '"Pontos: 100"', ok: false },
      ],
      exp: 'str(100) converte o inteiro 100 para a string "100". A concatenação com + funciona porque ambos são strings.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: '<code>float()</code> converte strings numéricas com decimais.',
      q: 'O que retorna: float("3.14")?',
      opts: [
        { t: 'Erro — tem ponto', ok: false },
        { t: '3.14 como float', ok: true },
        { t: '"3.14"', ok: false },
        { t: '3', ok: false },
      ],
      exp: 'float("3.14") converte a string "3.14" para o número decimal 3.14. int("3.14") falharia com ValueError.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Converta a entrada do usuário para inteiro antes de operar.',
      code: `idade = <span class="mt">_______</span>(<span class="mt">input</span>(<span class="st">"Idade: "</span>))\n<span class="mt">print</span>(<span class="st">"Ano que vem:"</span>, idade <span class="kw">+</span> <span class="nm">1</span>)`,
      q: 'Qual função converte string para inteiro?',
      ans: 'int',
      exp: 'int(input(...)) converte a string digitada para int. Sem isso, idade + 1 causaria TypeError.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Para exibir um número junto com texto, converta para string.',
      code: `pontos = <span class="nm">500</span>\n<span class="mt">print</span>(<span class="st">"Você tem "</span> <span class="kw">+</span> <span class="mt">_______</span>(pontos) <span class="kw">+</span> <span class="st">" pontos"</span>)`,
      q: 'Qual função converte número para string?',
      ans: 'str',
      exp: 'str(pontos) converte 500 para "500", permitindo a concatenação com +.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise este programa de cálculo de idade.',
      code: `ano_nasc = <span class="mt">int</span>(<span class="mt">input</span>(<span class="st">"Ano de nascimento: "</span>))\nidade = <span class="nm">2024</span> <span class="kw">-</span> ano_nasc\n<span class="mt">print</span>(<span class="st">"Você tem"</span>, idade, <span class="st">"anos"</span>)`,
      q: 'Por que int() é necessário neste código?',
      opts: [
        { t: 'Para formatar a saída', ok: false },
        { t: 'Para arredondar o resultado', ok: false },
        { t: 'input() retorna string; sem int() a subtração causaria TypeError', ok: true },
        { t: 'int() não é necessário aqui', ok: false },
      ],
      exp: 'input() retorna string. Sem int(), "2024 - '2000'" causaria TypeError pois não dá para subtrair string de int.',
    },

  ]
};
