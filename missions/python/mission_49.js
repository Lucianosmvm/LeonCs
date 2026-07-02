// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 50 — SEGURANÇA E VALIDAÇÃO
// Tema: Validar entradas, hashing e perigos comuns
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_49 = {
  id: 49,
  title: "MISSÃO 50 — SEGURANÇA E VALIDAÇÃO",
  icon: '🛡️',
  free: false,
  desc: "Nunca confie na entrada do usuário. Validar dados, proteger senhas com hash e evitar armadilhas separa código seguro de código vulnerável. Missão final.",
  objs: [
    "Validar e sanear entradas",
    "Proteger senhas com hashing",
    "Reconhecer perigos como eval"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'A regra de ouro: <strong>nunca confie na entrada do usuário</strong> — sempre valide.',
      q: 'Qual princípio básico de segurança ao receber dados externos?',
      opts: [
        { t: 'Confiar sempre para ir mais rápido', ok: false },
        { t: 'Validar e nunca confiar cegamente na entrada', ok: true },
        { t: 'Ignorar a entrada', ok: false },
        { t: 'Salvar tudo sem checar', ok: false },
      ],
      exp: 'Toda entrada externa pode ser maliciosa ou malformada. Validar antes de usar previne falhas e ataques.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>eval()</code> executa uma string como código Python — extremamente perigoso com entrada externa.',
      q: 'Por que evitar eval() em dados do usuário?',
      opts: [
        { t: 'É lento', ok: false },
        { t: 'Não funciona com números', ok: false },
        { t: 'Pode executar código arbitrário e malicioso', ok: true },
        { t: 'Sempre lança erro', ok: false },
      ],
      exp: 'eval(entrada) roda o que o usuário mandar — inclusive comandos destrutivos. Prefira alternativas seguras.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Para converter texto em número com segurança, valide ou use try/except em vez de eval.',
      q: 'Como converter a string "42" em int com segurança?',
      opts: [
        { t: 'eval("42")', ok: false },
        { t: 'exec("42")', ok: false },
        { t: 'compile("42")', ok: false },
        { t: 'int("42") com tratamento de erro', ok: true },
      ],
      exp: 'int("42") converte de forma segura; envolva em try/except ValueError para entradas inválidas.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Senhas nunca devem ser guardadas em texto puro — use <strong>hash</strong>.',
      q: 'Como armazenar senhas com segurança?',
      opts: [
        { t: 'Como hash (idealmente com salt)', ok: true },
        { t: 'Em texto puro', ok: false },
        { t: 'Em maiúsculas', ok: false },
        { t: 'Invertidas', ok: false },
      ],
      exp: 'Guarda-se o hash da senha, não ela mesma. Assim, vazar o banco não revela as senhas originais.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Uma função de <strong>hash</strong> é de mão única: fácil calcular, inviável reverter.',
      q: 'O que caracteriza uma função de hash?',
      opts: [
        { t: 'É reversível facilmente', ok: false },
        { t: 'É de mão única (não se reverte o valor original)', ok: true },
        { t: 'Criptografa e descriptografa', ok: false },
        { t: 'Comprime arquivos', ok: false },
      ],
      exp: 'Do hash não se recupera a entrada. Por isso serve para verificar senhas sem armazená-las.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'O módulo <code>hashlib</code> fornece funções de hash como sha256.',
      q: 'Qual módulo padrão fornece funções de hash?',
      opts: [
        { t: 'crypt', ok: false },
        { t: 'secure', ok: false },
        { t: 'hashlib', ok: true },
        { t: 'random', ok: false },
      ],
      exp: 'import hashlib — hashlib.sha256(dados).hexdigest() gera o hash em hexadecimal.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Um <strong>salt</strong> é um valor aleatório adicionado à senha antes do hash.',
      q: 'Para que serve o salt no hashing de senhas?',
      opts: [
        { t: 'Acelerar o hash', ok: false },
        { t: 'Comprimir a senha', ok: false },
        { t: 'Reverter o hash', ok: false },
        { t: 'Impedir que senhas iguais gerem hashes iguais', ok: true },
      ],
      exp: 'O salt torna cada hash único, frustrando ataques com tabelas pré-computadas (rainbow tables).',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Importe o módulo de funções de hash.',
      code: `<span class="kw">import</span> <span class="kw">_______</span>\n\nh <span class="kw">=</span> hashlib.sha256(<span class="st">b"senha"</span>).hexdigest()`,
      q: 'Qual módulo fornece sha256?',
      ans: 'hashlib',
      exp: 'import hashlib dá acesso a sha256, md5, sha512 e outras funções de hash.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Valide a conversão tratando entrada inválida.',
      code: `<span class="kw">try</span>:\n    n <span class="kw">=</span> <span class="mt">int</span>(entrada)\n<span class="kw">except</span> <span class="kw">_______</span>:\n    <span class="mt">print</span>(<span class="st">"entrada inválida"</span>)`,
      q: 'Qual exceção int() lança para texto não numérico?',
      ans: 'ValueError',
      exp: 'int("abc") lança ValueError; capturá-la permite tratar entradas inválidas com segurança.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Missão final! Analise a validação segura de entrada.',
      code: `<span class="kw">def</span> idade_valida(texto):\n    <span class="kw">try</span>:\n        n <span class="kw">=</span> <span class="mt">int</span>(texto)\n    <span class="kw">except</span> ValueError:\n        <span class="kw">return</span> <span class="kw">False</span>\n    <span class="kw">return</span> <span class="nm">0</span> <span class="kw">&lt;=</span> n <span class="kw">&lt;=</span> <span class="nm">120</span>\n\n<span class="mt">print</span>(idade_valida(<span class="st">"abc"</span>))`,
      q: 'O que este código exibe?',
      opts: [
        { t: 'False', ok: true },
        { t: 'True', ok: false },
        { t: 'ValueError', ok: false },
        { t: '0', ok: false },
      ],
      exp: 'int("abc") lança ValueError, capturado pelo except, que retorna False. Parabéns, agente — jornada Python completa! 🏆',
    },

  ]
};
