// ══════════════════════════════════════════════════════
// JAVASCRIPT — MISSÃO 05 — LOOPS
// Tema: for, while e for...of
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_JAVASCRIPT_4 = {
  id: 4,
  title: "MISSÃO 05 — LOOPS",
  icon: '🔁',
  free: true,
  desc: "Repetir tarefas é essencial. Domine for, while e for...of para percorrer dados e automatizar repetições.",
  objs: [
    "Escrever loops for e while",
    "Percorrer arrays com for...of",
    "Controlar o fluxo com break e continue"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'O <code>for</code> tem três partes: inicialização; condição; incremento.',
      q: 'Qual a estrutura de um for clássico?',
      opts: [
        { t: 'for (let i = 0; i < 5; i++)', ok: true },
        { t: 'for i in range(5)', ok: false },
        { t: 'for (i = 0 to 5)', ok: false },
        { t: 'foreach (i < 5)', ok: false },
      ],
      exp: 'for (início; condição; passo). Ex: for (let i = 0; i < 5; i++) roda 5 vezes.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'O <code>while</code> repete enquanto a condição for verdadeira.',
      q: 'Quando o bloco de um while executa?',
      opts: [
        { t: 'Exatamente uma vez', ok: false },
        { t: 'Enquanto a condição for verdadeira', ok: true },
        { t: 'Sempre 10 vezes', ok: false },
        { t: 'Nunca', ok: false },
      ],
      exp: 'while (condição) { ... } repete o bloco até a condição virar falsa.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Esquecer o incremento em um while causa <strong>loop infinito</strong>.',
      q: 'O que causa um loop infinito?',
      opts: [
        { t: 'Usar for em vez de while', ok: false },
        { t: 'Declarar com let', ok: false },
        { t: 'Uma condição que nunca vira falsa', ok: true },
        { t: 'Usar break', ok: false },
      ],
      exp: 'Se a condição nunca fica falsa (ex: esquecer i++), o loop roda para sempre e trava.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>for...of</code> percorre os <strong>valores</strong> de um array.',
      q: 'O que for (const x of [10, 20]) itera?',
      opts: [
        { t: 'Os índices 0 e 1', ok: false },
        { t: 'O tamanho do array', ok: false },
        { t: 'Nada', ok: false },
        { t: 'Os valores 10 e 20', ok: true },
      ],
      exp: 'for...of dá os valores diretamente: x será 10, depois 20.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>break</code> encerra o loop imediatamente.',
      q: 'O que break faz dentro de um loop?',
      opts: [
        { t: 'Encerra o loop na hora', ok: true },
        { t: 'Pula para a próxima iteração', ok: false },
        { t: 'Reinicia o loop', ok: false },
        { t: 'Não faz nada', ok: false },
      ],
      exp: 'break sai do loop por completo, mesmo que a condição ainda fosse verdadeira.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<code>continue</code> pula para a próxima iteração, sem sair do loop.',
      q: 'O que continue faz?',
      opts: [
        { t: 'Encerra o loop', ok: false },
        { t: 'Pula para a próxima iteração', ok: true },
        { t: 'Repete a iteração atual', ok: false },
        { t: 'Sai do programa', ok: false },
      ],
      exp: 'continue ignora o resto do bloco naquela volta e segue para a próxima iteração.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: '<code>i++</code> incrementa i em 1 a cada iteração.',
      q: 'Quantas vezes roda for (let i = 0; i < 3; i++)?',
      opts: [
        { t: '2', ok: false },
        { t: '4', ok: false },
        { t: '3', ok: true },
        { t: 'Infinitas', ok: false },
      ],
      exp: 'i vale 0, 1, 2 (para em i = 3): três iterações.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Complete a palavra-chave do loop com contador.',
      code: `<span class="kw">_______</span> (<span class="kw">let</span> i <span class="kw">=</span> <span class="nm">0</span>; i <span class="kw">&lt;</span> <span class="nm">5</span>; i<span class="kw">++</span>) {\n  <span class="mt">console</span>.log(i);\n}`,
      q: 'Qual palavra-chave inicia o loop com contador?',
      ans: 'for',
      exp: 'for (início; condição; passo) é o loop mais comum com contador.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Complete a palavra que percorre os valores do array.',
      code: `<span class="kw">for</span> (<span class="kw">const</span> item <span class="kw">_______</span> mochila) {\n  <span class="mt">console</span>.log(item);\n}`,
      q: 'Qual palavra-chave (após a variável) percorre os valores?',
      ans: 'of',
      exp: 'for (const item of array) itera sobre os valores do array.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise a soma acumulada no loop.',
      code: `<span class="kw">let</span> total <span class="kw">=</span> <span class="nm">0</span>;\n<span class="kw">for</span> (<span class="kw">let</span> i <span class="kw">=</span> <span class="nm">1</span>; i <span class="kw">&lt;=</span> <span class="nm">3</span>; i<span class="kw">++</span>) {\n  total <span class="kw">+=</span> i;\n}\n<span class="mt">console</span>.log(total);`,
      q: 'O que este código exibe?',
      opts: [
        { t: '3', ok: false },
        { t: '9', ok: false },
        { t: '123', ok: false },
        { t: '6', ok: true },
      ],
      exp: 'Soma i de 1 a 3: 1 + 2 + 3 = 6.',
    },

  ]
};
