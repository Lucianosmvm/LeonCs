// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 24 — DATA E TEMPO (datetime)
// Tema: Módulo datetime, formatação e cálculos
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_23 = {
  id: 23,
  title: "MISSÃO 24 — DATA E TEMPO",
  icon: '⏰',
  free: false,
  desc: "Manipular datas e horários é rotina em sistemas reais: prazos, logs, agendamentos. O módulo datetime cuida disso.",
  objs: [
    "Criar e obter datas com datetime",
    "Formatar datas com strftime",
    "Calcular intervalos com timedelta"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'O módulo <code>datetime</code> reúne as classes para trabalhar com datas e horários.',
      q: 'Qual módulo manipula datas e horários?',
      opts: [
        { t: 'time', ok: false },
        { t: 'calendar', ok: false },
        { t: 'datetime', ok: true },
        { t: 'clock', ok: false },
      ],
      exp: 'from datetime import datetime, date, timedelta traz as principais classes de manipulação temporal.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>datetime.now()</code> devolve a data e hora atuais.',
      q: 'Qual método retorna a data e hora atuais?',
      opts: [
        { t: 'datetime.today_time()', ok: false },
        { t: 'datetime.current()', ok: false },
        { t: 'datetime.get()', ok: false },
        { t: 'datetime.now()', ok: true },
      ],
      exp: 'datetime.now() retorna um objeto datetime com ano, mês, dia, hora, minuto, segundo do momento atual.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>strftime()</code> formata um objeto de data em uma string legível.',
      q: 'O que strftime() faz?',
      opts: [
        { t: 'Converte data em string formatada', ok: true },
        { t: 'Converte string em data', ok: false },
        { t: 'Soma dois horários', ok: false },
        { t: 'Retorna o dia da semana como número', ok: false },
      ],
      exp: 'strftime = "string format time". data.strftime("%d/%m/%Y") produz algo como "02/07/2026".',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>strptime()</code> faz o inverso: interpreta uma string e cria um datetime.',
      q: 'O que strptime() faz?',
      opts: [
        { t: 'Formata data como texto', ok: false },
        { t: 'Interpreta string e cria um datetime', ok: true },
        { t: 'Retorna o timestamp Unix', ok: false },
        { t: 'Adiciona dias a uma data', ok: false },
      ],
      exp: 'strptime = "string parse time". datetime.strptime("02/07/2026", "%d/%m/%Y") vira um objeto datetime.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>timedelta</code> representa uma duração — a diferença entre duas datas.',
      q: 'Para que serve timedelta?',
      opts: [
        { t: 'Formatar a hora', ok: false },
        { t: 'Obter o fuso horário', ok: false },
        { t: 'Representar uma duração/intervalo', ok: true },
        { t: 'Converter para string', ok: false },
      ],
      exp: 'timedelta(days=7) representa 7 dias. Some a um datetime para calcular datas futuras ou passadas.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'O código de formato <code>%Y</code> representa o ano com 4 dígitos.',
      q: 'O que %Y representa em strftime?',
      opts: [
        { t: 'Ano com 2 dígitos', ok: false },
        { t: 'O dia do ano', ok: false },
        { t: 'O minuto', ok: false },
        { t: 'Ano com 4 dígitos', ok: true },
      ],
      exp: '%Y = ano 4 dígitos (2026), %y = ano 2 dígitos (26), %m = mês, %d = dia, %H = hora.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Subtrair dois objetos datetime devolve um <code>timedelta</code>.',
      q: 'Qual o resultado de dt2 - dt1 (dois datetimes)?',
      opts: [
        { t: 'Um objeto timedelta', ok: true },
        { t: 'Um número inteiro de dias', ok: false },
        { t: 'Uma string', ok: false },
        { t: 'Erro de tipo', ok: false },
      ],
      exp: 'A diferença entre datetimes é um timedelta; use .days e .seconds para extrair componentes.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Importe a classe principal do módulo de datas.',
      code: `<span class="kw">from</span> datetime <span class="kw">import</span> <span class="kw">_______</span>\n\nagora <span class="kw">=</span> datetime.now()`,
      q: 'Qual classe importar para usar datetime.now()?',
      ans: 'datetime',
      exp: 'from datetime import datetime importa a classe datetime de dentro do módulo de mesmo nome.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Formate a data no padrão dia/mês/ano.',
      code: `data.<span class="kw">_______</span>(<span class="st">"%d/%m/%Y"</span>)\n<span class="cm"># exibe algo como: 02/07/2026</span>`,
      q: 'Qual método formata a data em string?',
      ans: 'strftime',
      exp: 'strftime("%d/%m/%Y") converte o objeto de data em texto no formato indicado.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise o cálculo com timedelta.',
      code: `<span class="kw">from</span> datetime <span class="kw">import</span> date, timedelta\nhoje <span class="kw">=</span> date(<span class="nm">2026</span>, <span class="nm">7</span>, <span class="nm">2</span>)\nprazo <span class="kw">=</span> hoje <span class="kw">+</span> timedelta(days<span class="kw">=</span><span class="nm">10</span>)\n<span class="mt">print</span>(prazo)`,
      q: 'O que este código exibe?',
      opts: [
        { t: '2026-07-02', ok: false },
        { t: '2026-07-12', ok: true },
        { t: '2026-17-02', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: '2 de julho + 10 dias = 12 de julho. date imprime no formato ISO: 2026-07-12.',
    },

  ]
};
