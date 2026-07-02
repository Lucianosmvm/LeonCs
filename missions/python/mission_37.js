// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 38 — LOGGING
// Tema: Registro de eventos com o módulo logging
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_37 = {
  id: 37,
  title: "MISSÃO 38 — LOGGING",
  icon: '📝',
  free: false,
  desc: "print() serve para brincar; sistemas reais usam logging — com níveis, formatos e destinos configuráveis. Rastreie o que acontece.",
  objs: [
    "Registrar mensagens com logging",
    "Entender os níveis de severidade",
    "Configurar o nível mínimo exibido"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'O módulo padrão <code>logging</code> registra eventos com níveis de severidade.',
      q: 'Por que usar logging em vez de print?',
      opts: [
        { t: 'É mais curto de escrever', ok: false },
        { t: 'Permite níveis, formato e destinos configuráveis', ok: true },
        { t: 'Executa mais rápido', ok: false },
        { t: 'Substitui os testes', ok: false },
      ],
      exp: 'logging separa mensagens por severidade, permite ligar/desligar por nível e mandar para arquivo, console etc.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Os níveis, do menos ao mais grave: <strong>DEBUG, INFO, WARNING, ERROR, CRITICAL</strong>.',
      q: 'Qual é o nível MENOS severo?',
      opts: [
        { t: 'CRITICAL', ok: false },
        { t: 'ERROR', ok: false },
        { t: 'DEBUG', ok: true },
        { t: 'WARNING', ok: false },
      ],
      exp: 'DEBUG (mais detalhado/menos grave) < INFO < WARNING < ERROR < CRITICAL (mais grave).',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'O nível padrão do logging é <strong>WARNING</strong>: mensagens abaixo não aparecem sem configuração.',
      q: 'Sem configurar, qual nível mínimo é exibido?',
      opts: [
        { t: 'DEBUG', ok: false },
        { t: 'INFO', ok: false },
        { t: 'ERROR', ok: false },
        { t: 'WARNING', ok: true },
      ],
      exp: 'Por padrão, logging.info(...) e logging.debug(...) não aparecem — só WARNING para cima.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>logging.basicConfig(level=...)</code> ajusta o nível mínimo exibido.',
      q: 'Como fazer o INFO aparecer?',
      opts: [
        { t: 'logging.basicConfig(level=logging.INFO)', ok: true },
        { t: 'logging.show(INFO)', ok: false },
        { t: 'logging.enable("INFO")', ok: false },
        { t: 'logging.level = INFO apenas', ok: false },
      ],
      exp: 'basicConfig(level=logging.INFO) faz INFO e níveis mais graves serem exibidos.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Cada nível tem sua função: <code>logging.warning("msg")</code>.',
      q: 'Qual função registra um aviso?',
      opts: [
        { t: 'logging.alert()', ok: false },
        { t: 'logging.warning()', ok: true },
        { t: 'logging.warn_msg()', ok: false },
        { t: 'logging.notice()', ok: false },
      ],
      exp: 'Há logging.debug, .info, .warning, .error e .critical, uma para cada nível.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'É boa prática criar um logger próprio com <code>logging.getLogger(__name__)</code>.',
      q: 'O que logging.getLogger(__name__) devolve?',
      opts: [
        { t: 'O nível atual', ok: false },
        { t: 'Uma string com o nome', ok: false },
        { t: 'Um logger identificado pelo módulo', ok: true },
        { t: 'A configuração global', ok: false },
      ],
      exp: 'Um logger nomeado por módulo facilita filtrar e configurar logs por parte do sistema.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: '<code>logging.error()</code> costuma registrar falhas; dentro de except pode incluir o traceback.',
      q: 'Qual nível usar para registrar uma falha grave que impede uma operação?',
      opts: [
        { t: 'DEBUG', ok: false },
        { t: 'INFO', ok: false },
        { t: 'NOTSET', ok: false },
        { t: 'ERROR', ok: true },
      ],
      exp: 'ERROR indica que algo falhou. CRITICAL é reservado para falhas que ameaçam o sistema inteiro.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Importe o módulo de registro de eventos.',
      code: `<span class="kw">import</span> <span class="kw">_______</span>\n\nlogging.warning(<span class="st">"cuidado!"</span>)`,
      q: 'Qual módulo importar?',
      ans: 'logging',
      exp: 'import logging habilita logging.debug/info/warning/error/critical e basicConfig.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Configure o nível mínimo para exibir mensagens INFO.',
      code: `logging.basicConfig(<span class="kw">_______</span><span class="kw">=</span>logging.INFO)\nlogging.info(<span class="st">"iniciando"</span>)`,
      q: 'Qual parâmetro define o nível mínimo?',
      ans: 'level',
      exp: 'basicConfig(level=logging.INFO) baixa o limiar para INFO, exibindo INFO e acima.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise o que aparece SEM configuração de nível.',
      code: `<span class="kw">import</span> logging\nlogging.info(<span class="st">"oi"</span>)\nlogging.warning(<span class="st">"alerta"</span>)`,
      q: 'O que é exibido por padrão?',
      opts: [
        { t: 'Apenas o aviso "alerta"', ok: true },
        { t: 'Apenas "oi"', ok: false },
        { t: 'Ambas as mensagens', ok: false },
        { t: 'Nada', ok: false },
      ],
      exp: 'Nível padrão é WARNING: info("oi") é suprimido; só o warning("alerta") aparece.',
    },

  ]
};
