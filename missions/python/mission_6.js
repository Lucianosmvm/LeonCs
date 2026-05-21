// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 07 — LOOP WHILE
// Tema: while, break, continue
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_6 = {
  id: 6,
  title: "MISSÃO 07 — LOOP WHILE",
  icon: '🔄',
  free: true,
  desc: "Loops executam código repetidamente. O while repete enquanto uma condição for verdadeira — poderoso e perigoso.",
  objs: [
    "Criar loops com while",
    "Usar break para sair do loop",
    "Usar continue para pular uma iteração"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'O <code>while</code> executa um bloco enquanto a condição for True. Se a condição nunca ficar False, o loop é infinito.',
      q: 'Quantas vezes "OK" é exibido: n=0; while n < 3: print("OK"); n += 1?',
      opts: [
        { t: 'infinito', ok: false },
        { t: '4', ok: false },
        { t: '3', ok: true },
        { t: '2', ok: false },
      ],
      exp: 'n começa em 0. Loop: n=0 (OK), n=1 (OK), n=2 (OK), n=3 → 3 < 3 é False → para. Total: 3 vezes.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'O operador <code>+=</code> incrementa a variável. <code>n += 1</code> é equivalente a <code>n = n + 1</code>.',
      q: 'O que é n += 1 em Python?',
      opts: [
        { t: 'Adiciona 1 ao valor atual de n', ok: true },
        { t: 'n++ (não existe em Python)', ok: false },
        { t: 'Compara n com 1', ok: false },
        { t: 'Declara n como 1', ok: false },
      ],
      exp: 'n += 1 é abreviação de n = n + 1. Python não tem n++ como C# e JavaScript.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Um loop infinito ocorre quando a condição nunca se torna False. Use Ctrl+C para interromper.',
      q: 'Qual destes loops é infinito?',
      opts: [
        { t: 'while n < 10: n += 1', ok: false },
        { t: 'while x != 0: x -= 1', ok: false },
        { t: 'while len(lista) > 0: lista.pop()', ok: false },
        { t: 'while True: pass', ok: true },
      ],
      exp: 'while True: nunca para — True sempre é True. Os outros têm condições que eventualmente ficam False.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>break</code> sai imediatamente do loop, independente da condição.',
      q: 'O que exibe este código: n=0; while True: if n == 2: break; print(n); n += 1?',
      opts: [
        { t: 'Nada', ok: false },
        { t: '0, 1', ok: true },
        { t: '0, 1, 2, ...', ok: false },
        { t: '0, 1, 2', ok: false },
      ],
      exp: 'n=0: print(0); n=1: print(1); n=2: if 2==2 → break. O print(n) nunca executa para n=2.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>continue</code> pula o restante do bloco atual e vai para a próxima iteração do loop.',
      q: 'Com continue, o que exibe: n=0; while n<4: n+=1; if n==2: continue; print(n)?',
      opts: [
        { t: '1, 3, 4', ok: true },
        { t: '0, 1, 3, 4', ok: false },
        { t: '1, 2, 3', ok: false },
        { t: '1, 2, 3, 4', ok: false },
      ],
      exp: 'n=1: print(1); n=2: continue → pula o print; n=3: print(3); n=4: print(4). O 2 é pulado.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'O <code>while</code> pode ter um bloco <code>else</code> que executa quando a condição se torna False (não quando há break).',
      q: 'O bloco else do while executa quando:',
      opts: [
        { t: 'O loop executa pelo menos uma vez', ok: false },
        { t: 'Sempre após o loop', ok: false },
        { t: 'A condição se torna False normalmente (sem break)', ok: true },
        { t: 'Quando break é chamado', ok: false },
      ],
      exp: 'while/else: o else executa somente se o loop terminou por condição False. Se break interrompeu, o else é ignorado.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Loops while são usados quando o número de iterações não é conhecido antes de começar.',
      q: 'Qual situação É mais adequada para while (não for)?',
      opts: [
        { t: 'Percorrer todos os itens de uma lista', ok: false },
        { t: 'Ficar pedindo senha até o usuário acertar', ok: true },
        { t: 'Processar cada caractere de uma string', ok: false },
        { t: 'Repetir de 1 a 10', ok: false },
      ],
      exp: 'Pedir senha até acertar: não sabemos quantas tentativas serão necessárias. while é perfeito para isso.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Incremente o contador para evitar loop infinito.',
      code: `contador = <span class="nm">0</span>\n<span class="kw">while</span> contador <span class="kw"><</span> <span class="nm">5</span>:\n    <span class="mt">print</span>(contador)\n    contador <span class="kw">_______</span> <span class="nm">1</span>`,
      q: 'Qual operador incrementa o contador?',
      ans: '+=',
      exp: 'contador += 1 é equivalente a contador = contador + 1. Sem isso o loop seria infinito.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'break encerra o loop imediatamente.',
      code: `<span class="kw">while</span> <span class="kw">True</span>:\n    cmd = <span class="mt">input</span>(<span class="st">"Comando: "</span>)\n    <span class="kw">if</span> cmd <span class="kw">==</span> <span class="st">"sair"</span>:\n        <span class="kw">_______</span>`,
      q: 'Qual palavra-chave sai do loop?',
      ans: 'break',
      exp: 'break encerra o while True quando o usuário digitar "sair". Sem break esse loop rodaria para sempre.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Trace este código de contagem regressiva.',
      code: `n = <span class="nm">3</span>\n<span class="kw">while</span> n <span class="kw">></span> <span class="nm">0</span>:\n    <span class="mt">print</span>(n)\n    n <span class="kw">-=</span> <span class="nm">1</span>\n<span class="mt">print</span>(<span class="st">"Fogo!"</span>)`,
      q: 'O que este código exibe?',
      opts: [
        { t: 'Loop infinito', ok: false },
        { t: '3, 2, 1, 0, Fogo!', ok: false },
        { t: '3, 2, Fogo!', ok: false },
        { t: '3, 2, 1, Fogo!', ok: true },
      ],
      exp: 'n=3: print(3); n=2: print(2); n=1: print(1); n=0 → 0>0 é False → sai. print("Fogo!"). Saída: 3 2 1 Fogo!',
    },

  ]
};
