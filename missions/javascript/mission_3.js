// ══════════════════════════════════════════════════════
// JAVASCRIPT — MISSÃO 04 — CONDICIONAIS
// Tema: if/else, switch e operador ternário
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_JAVASCRIPT_3 = {
  id: 3,
  title: "MISSÃO 04 — CONDICIONAIS",
  icon: '🔀',
  free: true,
  desc: "Programas tomam decisões. Aprenda if/else, switch e o ternário para escolher caminhos conforme as condições.",
  objs: [
    "Escrever if / else if / else",
    "Usar switch para múltiplos casos",
    "Aplicar o operador ternário"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'O <code>if</code> executa um bloco quando a condição é verdadeira.',
      q: 'Qual a sintaxe correta de um if?',
      opts: [
        { t: 'if x > 5 then ...', ok: false },
        { t: 'if x > 5: ...', ok: false },
        { t: 'when (x > 5) { ... }', ok: false },
        { t: 'if (x > 5) { ... }', ok: true },
      ],
      exp: 'A condição vai entre parênteses e o bloco entre chaves: if (x > 5) { ... }.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>else</code> roda quando o if é falso; <code>else if</code> testa outra condição.',
      q: 'O que else if permite?',
      opts: [
        { t: 'Testar uma condição alternativa', ok: true },
        { t: 'Repetir o mesmo teste', ok: false },
        { t: 'Encerrar o programa', ok: false },
        { t: 'Criar uma função', ok: false },
      ],
      exp: 'else if encadeia condições: se o if falhar, testa a próxima antes de cair no else.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Valores <strong>falsy</strong>: <code>0</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>, <code>false</code>.',
      q: 'Qual destes valores é falsy?',
      opts: [
        { t: '"oi"', ok: false },
        { t: '0', ok: true },
        { t: '1', ok: false },
        { t: '"false"', ok: false },
      ],
      exp: '0 é falsy. Note que "false" (string) e "0" (string) são truthy — só a string vazia "" é falsy.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'O <strong>operador ternário</strong>: <code>condição ? valorSeVerdade : valorSeFalso</code>.',
      q: 'O que (5 > 3) ? "sim" : "não" retorna?',
      opts: [
        { t: '"não"', ok: false },
        { t: 'true', ok: false },
        { t: '"sim"', ok: true },
        { t: 'Erro', ok: false },
      ],
      exp: '5 > 3 é true, então o ternário devolve o valor antes dos dois-pontos: "sim".',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>switch</code> compara um valor com vários <code>case</code>.',
      q: 'O que o break faz dentro de um switch?',
      opts: [
        { t: 'Repete o case', ok: false },
        { t: 'Ignora a condição', ok: false },
        { t: 'Lança um erro', ok: false },
        { t: 'Encerra o switch, evitando cair nos próximos cases', ok: true },
      ],
      exp: 'Sem break, a execução "vaza" para os cases seguintes. break sai do switch.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'O <code>default</code> do switch roda se nenhum case corresponder.',
      q: 'Quando o default de um switch executa?',
      opts: [
        { t: 'Quando nenhum case corresponde', ok: true },
        { t: 'Sempre primeiro', ok: false },
        { t: 'Nunca', ok: false },
        { t: 'Somente com break', ok: false },
      ],
      exp: 'default é o "senão" do switch: roda quando o valor não bate com nenhum case.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'A condição do if é avaliada como <strong>truthy</strong> ou <strong>falsy</strong>.',
      q: 'O bloco de if ("") { ... } executa?',
      opts: [
        { t: 'Sim, sempre', ok: false },
        { t: 'Não, "" é falsy', ok: true },
        { t: 'Sim, string é truthy', ok: false },
        { t: 'Gera erro', ok: false },
      ],
      exp: 'A string vazia "" é falsy, então a condição é falsa e o bloco não roda.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Complete a palavra-chave da condição.',
      code: `<span class="kw">_______</span> (vidas <span class="kw">===</span> <span class="nm">0</span>) {\n  <span class="mt">console</span>.log(<span class="st">"Game Over"</span>);\n}`,
      q: 'Qual palavra-chave inicia a condição?',
      ans: 'if',
      exp: 'if (condição) { ... } executa o bloco quando a condição é verdadeira.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Complete o operador ternário.',
      code: `<span class="kw">const</span> status <span class="kw">=</span> (xp <span class="kw">&gt;</span> <span class="nm">100</span>) <span class="kw">_______</span> <span class="st">"Pro"</span> : <span class="st">"Novato"</span>;`,
      q: 'Qual símbolo vem logo após a condição no ternário?',
      ans: '?',
      exp: 'condição ? seVerdade : seFalso. O ? separa a condição do primeiro valor.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise esta decisão encadeada.',
      code: `<span class="kw">let</span> nota <span class="kw">=</span> <span class="nm">7</span>;\n<span class="kw">if</span> (nota <span class="kw">&gt;=</span> <span class="nm">9</span>) {\n  <span class="mt">console</span>.log(<span class="st">"A"</span>);\n} <span class="kw">else if</span> (nota <span class="kw">&gt;=</span> <span class="nm">6</span>) {\n  <span class="mt">console</span>.log(<span class="st">"B"</span>);\n} <span class="kw">else</span> {\n  <span class="mt">console</span>.log(<span class="st">"C"</span>);\n}`,
      q: 'O que este código exibe?',
      opts: [
        { t: 'A', ok: false },
        { t: 'C', ok: false },
        { t: 'B', ok: true },
        { t: 'A B C', ok: false },
      ],
      exp: 'nota 7: não é >= 9, mas é >= 6, então cai no segundo bloco e exibe "B".',
    },

  ]
};
