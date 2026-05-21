// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 06 — CONDICIONAIS
// Tema: if, elif, else
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_5 = {
  id: 5,
  title: "MISSÃO 06 — CONDICIONAIS",
  icon: '🔀',
  free: true,
  desc: "Programas precisam tomar decisões. Com if, elif e else você controla qual caminho o código vai seguir.",
  objs: [
    "Usar if para executar código condicionalmente",
    "Encadear condições com elif e else",
    "Entender a indentação obrigatória em blocos"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'O <code>if</code> executa um bloco de código apenas se a condição for True. O bloco é definido pela <strong>indentação</strong>.',
      q: 'O que exibe este código: vidas = 3; if vidas > 0: print("Vivo")?',
      opts: [
        { t: 'Nada', ok: false },
        { t: 'Vivo', ok: true },
        { t: 'True', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: '3 > 0 é True, então o bloco do if executa e exibe "Vivo".',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'O <code>else</code> executa quando a condição do <code>if</code> é False.',
      q: 'Qual é a saída: if 0 > 5: print("A") else: print("B")?',
      opts: [
        { t: 'Nada', ok: false },
        { t: 'A e B', ok: false },
        { t: 'A', ok: false },
        { t: 'B', ok: true },
      ],
      exp: '0 > 5 é False, então o else executa: exibe "B".',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>elif</code> (else if) testa uma nova condição quando a anterior foi False. Python usa <code>elif</code>, não <code>else if</code>.',
      q: 'Qual palavra-chave Python usa para "senão se"?',
      opts: [
        { t: 'elif', ok: true },
        { t: 'else if', ok: false },
        { t: 'or if', ok: false },
        { t: 'elseif', ok: false },
      ],
      exp: 'Python usa elif (contração de else if). Outras linguagens usam else if ou elseif, mas em Python só funciona elif.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'A indentação em Python define o bloco. Código sem indentação após if causa SyntaxError.',
      q: 'Qual é o erro neste código?\n\nif True:\nprint("ok")',
      opts: [
        { t: 'NameError', ok: false },
        { t: 'TypeError', ok: false },
        { t: 'IndentationError', ok: true },
        { t: 'Nenhum — funciona', ok: false },
      ],
      exp: 'O print dentro do if precisa de indentação (4 espaços padrão). Sem ela: IndentationError.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Condições podem ser compostas com <code>and</code>, <code>or</code> e <code>not</code>.',
      q: 'Quando executa o print: if vida > 0 and munição > 0: print("Atirar")?',
      opts: [
        { t: 'Nunca', ok: false },
        { t: 'Se vida > 0 OR munição > 0', ok: false },
        { t: 'Sempre', ok: false },
        { t: 'Se vida > 0 AND munição > 0', ok: true },
      ],
      exp: 'and exige que AMBAS as condições sejam True. Se vida = 0, o print não executa mesmo que munição > 0.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Python permite verificar se um valor está dentro de um intervalo de forma elegante.',
      q: 'Qual forma é válida em Python para verificar se nota está entre 7 e 10?',
      opts: [
        { t: 'if nota > 7 AND nota <= 10', ok: false },
        { t: 'if 7 < nota <= 10', ok: true },
        { t: 'if nota > 7 && nota <= 10', ok: false },
        { t: 'if nota between 7 and 10', ok: false },
      ],
      exp: 'Python suporta comparações encadeadas: "7 < nota <= 10" é válido e legível. && não existe em Python — use and.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Em Python, valores "falsy" são tratados como False em condicionais: 0, "", None, [], {}.',
      q: 'O que exibe: if "": print("A") else: print("B")?',
      opts: [
        { t: 'Nada', ok: false },
        { t: 'Erro', ok: false },
        { t: 'B', ok: true },
        { t: 'A', ok: false },
      ],
      exp: 'String vazia "" é falsy em Python. O if avalia como False e o else executa: "B".',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Use elif para múltiplas condições.',
      code: `nota = <span class="nm">8</span>\n<span class="kw">if</span> nota <span class="kw">>=</span> <span class="nm">9</span>:\n    <span class="mt">print</span>(<span class="st">"A"</span>)\n<span class="kw">_______</span> nota <span class="kw">>=</span> <span class="nm">7</span>:\n    <span class="mt">print</span>(<span class="st">"B"</span>)\n<span class="kw">else</span>:\n    <span class="mt">print</span>(<span class="st">"C"</span>)`,
      q: 'Qual palavra-chave preenche o espaço?',
      ans: 'elif',
      exp: 'elif testa nova condição quando o if anterior foi False. nota=8, if 8>=9 False, elif 8>=7 True → exibe "B".',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'O bloco do if precisa de indentação.',
      code: `munição = <span class="nm">0</span>\n<span class="kw">if</span> munição <span class="kw">==</span> <span class="nm">0</span>:\n<span class="kw">_______</span><span class="mt">print</span>(<span class="st">"Sem balas!"</span>)`,
      q: 'O que vai no espaço para indentar corretamente? (use 4 espaços)',
      ans: '    ',
      exp: '4 espaços (ou 1 tab) é o padrão Python. O bloco do if precisa estar indentado.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Trace a execução deste classificador.',
      code: `hp = <span class="nm">45</span>\n<span class="kw">if</span> hp <span class="kw">>=</span> <span class="nm">80</span>:\n    <span class="mt">print</span>(<span class="st">"Ótimo"</span>)\n<span class="kw">elif</span> hp <span class="kw">>=</span> <span class="nm">40</span>:\n    <span class="mt">print</span>(<span class="st">"OK"</span>)\n<span class="kw">else</span>:\n    <span class="mt">print</span>(<span class="st">"Crítico"</span>)`,
      q: 'O que este código exibe?',
      opts: [
        { t: 'OK', ok: true },
        { t: 'Ótimo', ok: false },
        { t: 'Ótimo e OK', ok: false },
        { t: 'Crítico', ok: false },
      ],
      exp: 'hp=45. if 45>=80? False. elif 45>=40? True → exibe "OK". O else não é avaliado.',
    },

  ]
};
