// ══════════════════════════════════════════════════════
// JAVASCRIPT — MISSÃO 02 — OPERADORES
// Tema: Aritméticos, comparação e lógicos
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_JAVASCRIPT_1 = {
  id: 1,
  title: "MISSÃO 02 — OPERADORES",
  icon: '➗',
  free: true,
  desc: "Operadores combinam e comparam valores. Aritmética, comparação e lógica são a base de qualquer cálculo e decisão.",
  objs: [
    "Usar operadores aritméticos",
    "Comparar com === e !==",
    "Combinar condições com && e ||"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Operadores aritméticos: <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code> e <code>%</code> (resto).',
      q: 'O que 10 % 3 retorna?',
      opts: [
        { t: '3', ok: false },
        { t: '1', ok: true },
        { t: '0', ok: false },
        { t: '3.33', ok: false },
      ],
      exp: '% é o resto da divisão. 10 dividido por 3 = 3 com resto 1.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>===</code> compara valor E tipo (igualdade estrita); <code>==</code> converte tipos antes.',
      q: 'O que 5 === "5" retorna?',
      opts: [
        { t: 'true', ok: false },
        { t: 'Erro', ok: false },
        { t: 'false', ok: true },
        { t: '"5"', ok: false },
      ],
      exp: '=== exige mesmo tipo. number 5 e string "5" têm tipos diferentes, então false.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Sempre prefira <code>===</code> a <code>==</code> para evitar conversões inesperadas.',
      q: 'Qual a diferença de === para ==?',
      opts: [
        { t: 'Não há diferença', ok: false },
        { t: '=== é atribuição', ok: false },
        { t: '== é mais seguro', ok: false },
        { t: '=== compara tipo e valor; == converte tipos', ok: true },
      ],
      exp: '== faz coerção (0 == "" é true!). === não converte, sendo mais previsível e recomendado.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Operadores lógicos: <code>&&</code> (E), <code>||</code> (OU), <code>!</code> (NÃO).',
      q: 'O que true && false retorna?',
      opts: [
        { t: 'false', ok: true },
        { t: 'true', ok: false },
        { t: 'undefined', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: '&& só é true se AMBOS os lados forem true. Como um é false, o resultado é false.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>||</code> é true se PELO MENOS um lado for true.',
      q: 'O que false || true retorna?',
      opts: [
        { t: 'false', ok: false },
        { t: 'true', ok: true },
        { t: 'null', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: '|| (OU) é true quando qualquer lado é true. Aqui o segundo é true, então true.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'O operador <code>+</code> com strings faz <strong>concatenação</strong>.',
      q: 'O que "Web" + "Dev" retorna?',
      opts: [
        { t: '"Web Dev"', ok: false },
        { t: 'Erro', ok: false },
        { t: '"WebDev"', ok: true },
        { t: '0', ok: false },
      ],
      exp: 'Com strings, + junta os textos: "Web" + "Dev" = "WebDev".',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: '<code>++</code> incrementa em 1; <code>+=</code> soma e reatribui.',
      q: 'Após let x = 5; x += 3; quanto vale x?',
      opts: [
        { t: '5', ok: false },
        { t: '3', ok: false },
        { t: '53', ok: false },
        { t: '8', ok: true },
      ],
      exp: 'x += 3 equivale a x = x + 3 = 5 + 3 = 8.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Complete o operador de igualdade estrita.',
      code: `<span class="kw">if</span> (idade <span class="kw">_______</span> <span class="nm">18</span>) {\n  <span class="mt">console</span>.log(<span class="st">"maior de idade"</span>);\n}`,
      q: 'Qual operador compara valor E tipo (3 caracteres)?',
      ans: '===',
      exp: '=== compara sem converter tipos, sendo a comparação recomendada.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Complete o operador lógico E.',
      code: `<span class="kw">if</span> (logado <span class="kw">_______</span> admin) {\n  <span class="mt">console</span>.log(<span class="st">"acesso total"</span>);\n}`,
      q: 'Qual operador lógico significa E (2 caracteres)?',
      ans: '&&',
      exp: '&& exige que ambas as condições sejam verdadeiras.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise a combinação de operadores.',
      code: `<span class="kw">let</span> a <span class="kw">=</span> <span class="nm">4</span>;\n<span class="kw">let</span> b <span class="kw">=</span> <span class="nm">2</span>;\n<span class="mt">console</span>.log(a <span class="kw">*</span> b <span class="kw">+</span> <span class="nm">1</span>);`,
      q: 'O que este código exibe?',
      opts: [
        { t: '9', ok: true },
        { t: '10', ok: false },
        { t: '12', ok: false },
        { t: '7', ok: false },
      ],
      exp: '* tem precedência sobre +: 4 * 2 = 8, depois 8 + 1 = 9.',
    },

  ]
};
