// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 44 — EXCEÇÕES AVANÇADAS
// Tema: raise, finally, else e exceções personalizadas
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_43 = {
  id: 43,
  title: "MISSÃO 44 — EXCEÇÕES AVANÇADAS",
  icon: '🧯',
  free: false,
  desc: "Ir além do try/except básico: lançar erros, garantir limpeza com finally e criar exceções próprias para o seu domínio.",
  objs: [
    "Lançar exceções com raise",
    "Usar finally e else no tratamento",
    "Criar exceções personalizadas"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'A palavra-chave <code>raise</code> lança uma exceção deliberadamente.',
      q: 'O que raise faz?',
      opts: [
        { t: 'Ignora um erro', ok: false },
        { t: 'Repete o bloco try', ok: false },
        { t: 'Encerra o programa silenciosamente', ok: false },
        { t: 'Lança uma exceção', ok: true },
      ],
      exp: 'raise ValueError("mensagem") interrompe o fluxo e propaga a exceção até ser tratada.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'O bloco <code>finally</code> sempre executa, com ou sem exceção.',
      q: 'Quando o bloco finally executa?',
      opts: [
        { t: 'Sempre, ao final do try', ok: true },
        { t: 'Só quando há erro', ok: false },
        { t: 'Só quando NÃO há erro', ok: false },
        { t: 'Nunca', ok: false },
      ],
      exp: 'finally roda em qualquer caso — ideal para liberar recursos (fechar arquivos, conexões).',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'O bloco <code>else</code> do try roda apenas se <strong>nenhuma</strong> exceção ocorreu.',
      q: 'Quando o else de um try/except executa?',
      opts: [
        { t: 'Sempre', ok: false },
        { t: 'Só se NÃO ocorreu exceção', ok: true },
        { t: 'Só se ocorreu exceção', ok: false },
        { t: 'Nunca', ok: false },
      ],
      exp: 'O else roda quando o try terminou sem erro — separa o código "de sucesso" do try.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Exceções personalizadas herdam de <code>Exception</code>.',
      q: 'De qual classe uma exceção personalizada deve herdar?',
      opts: [
        { t: 'Error', ok: false },
        { t: 'object', ok: false },
        { t: 'Exception', ok: true },
        { t: 'BaseException diretamente', ok: false },
      ],
      exp: 'class MeuErro(Exception): pass cria uma exceção própria. Herdar de Exception (não BaseException) é a prática recomendada.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'É possível capturar vários tipos com uma tupla: <code>except (A, B):</code>.',
      q: 'Como capturar ValueError e TypeError no mesmo except?',
      opts: [
        { t: 'except ValueError and TypeError:', ok: false },
        { t: 'except ValueError | TypeError:', ok: false },
        { t: 'except ValueError, TypeError:', ok: false },
        { t: 'except (ValueError, TypeError):', ok: true },
      ],
      exp: 'Uma tupla de tipos entre parênteses trata qualquer um deles no mesmo bloco.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'O <code>as</code> captura o objeto da exceção: <code>except ValueError as e:</code>.',
      q: 'Para que serve o "as e" no except?',
      opts: [
        { t: 'Acessar o objeto da exceção', ok: true },
        { t: 'Renomear o bloco', ok: false },
        { t: 'Ignorar o erro', ok: false },
        { t: 'Relançar automaticamente', ok: false },
      ],
      exp: 'except Exception as e: dá acesso à mensagem e detalhes via str(e), e.args etc.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Um <code>raise</code> sem argumento dentro de um except <strong>relança</strong> a exceção atual.',
      q: 'O que faz raise sozinho dentro de um except?',
      opts: [
        { t: 'Cria um novo erro genérico', ok: false },
        { t: 'Relança a exceção capturada', ok: true },
        { t: 'Ignora a exceção', ok: false },
        { t: 'Encerra o programa', ok: false },
      ],
      exp: 'raise sem argumento propaga a mesma exceção — útil para logar e repassar adiante.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Lance uma exceção de valor inválido.',
      code: `<span class="kw">if</span> idade <span class="kw">&lt;</span> <span class="nm">0</span>:\n    <span class="kw">_______</span> ValueError(<span class="st">"idade negativa"</span>)`,
      q: 'Qual palavra-chave lança a exceção?',
      ans: 'raise',
      exp: 'raise ValueError("idade negativa") interrompe e sinaliza o erro.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Garanta que o recurso seja liberado sempre.',
      code: `<span class="kw">try</span>:\n    processar()\n<span class="kw">_______</span>:\n    <span class="mt">print</span>(<span class="st">"limpeza"</span>)`,
      q: 'Qual bloco sempre executa, com ou sem erro?',
      ans: 'finally',
      exp: 'O bloco finally roda em qualquer situação, ideal para limpeza garantida.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise a ordem com except e finally.',
      code: `<span class="kw">try</span>:\n    <span class="kw">raise</span> ValueError(<span class="st">"x"</span>)\n<span class="kw">except</span> ValueError:\n    <span class="mt">print</span>(<span class="st">"peguei"</span>)\n<span class="kw">finally</span>:\n    <span class="mt">print</span>(<span class="st">"fim"</span>)`,
      q: 'O que este código exibe (em ordem)?',
      opts: [
        { t: 'fim peguei', ok: false },
        { t: 'Apenas peguei', ok: false },
        { t: 'peguei fim', ok: true },
        { t: 'ValueError não tratado', ok: false },
      ],
      exp: 'O raise é capturado pelo except (imprime "peguei"); depois o finally sempre roda (imprime "fim").',
    },

  ]
};
