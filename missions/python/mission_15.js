// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 16 — TRATAMENTO DE ERROS  [PREMIUM]
// Tema: try/except/finally, raise, exceções comuns
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_15 = {
  id: 15,
  title: "MISSÃO 16 — TRATAMENTO DE ERROS",
  icon: '🛡️',
  free: false,
  desc: "Programas robustos tratam erros graciosamente. try/except é a blindagem do seu código contra o inesperado.",
  objs: [
    "Usar try/except para capturar exceções",
    "Identificar exceções comuns: ValueError, TypeError, KeyError",
    "Usar finally e raise"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<code>try/except</code> executa código que pode falhar e captura o erro sem travar o programa.',
      q: 'Qual é a saída: try: int("abc") / except ValueError: print("Erro")?',
      opts: [
        { t: 'O programa trava', ok: false },
        { t: 'Erro', ok: true },
        { t: 'abc', ok: false },
        { t: '0', ok: false },
      ],
      exp: 'int("abc") lança ValueError. O except ValueError captura e exibe "Erro". O programa continua normalmente.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Exceções comuns em Python: <code>ValueError</code> (valor inválido), <code>TypeError</code> (tipo errado), <code>KeyError</code> (chave ausente), <code>IndexError</code> (índice fora do range).',
      q: 'Qual exceção ocorre em: [1, 2, 3][10]?',
      opts: [
        { t: 'ValueError', ok: false },
        { t: 'TypeError', ok: false },
        { t: 'IndexError', ok: true },
        { t: 'KeyError', ok: false },
      ],
      exp: 'IndexError: list index out of range. Índice 10 não existe numa lista de 3 itens.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'O bloco <code>finally</code> executa SEMPRE — com ou sem erro. Ideal para limpeza de recursos.',
      q: 'Quando o bloco finally executa?',
      opts: [
        { t: 'Apenas quando há erro', ok: false },
        { t: 'Apenas quando não há erro', ok: false },
        { t: 'Sempre — com ou sem exceção', ok: true },
        { t: 'Nunca — é opcional e não executado', ok: false },
      ],
      exp: 'finally sempre executa. Usado para fechar arquivos, conexões, liberar recursos — independente de erro.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Você pode capturar múltiplas exceções em um único except ou em excepts separados.',
      q: 'Como capturar ValueError e TypeError num só except?',
      opts: [
        { t: 'except ValueError or TypeError:', ok: false },
        { t: 'except (ValueError, TypeError):', ok: true },
        { t: 'except ValueError, TypeError:', ok: false },
        { t: 'except [ValueError, TypeError]:', ok: false },
      ],
      exp: 'Agrupe exceções numa tupla: except (ValueError, TypeError):. Sintaxe com vírgula simples é Python 2.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>raise</code> lança uma exceção manualmente.',
      q: 'Para que serve raise ValueError("mensagem")?',
      opts: [
        { t: 'Captura ValueError', ok: false },
        { t: 'Lança um ValueError com a mensagem especificada', ok: true },
        { t: 'Imprime "mensagem" no terminal', ok: false },
        { t: 'Ignora o ValueError', ok: false },
      ],
      exp: 'raise força a exceção. Usado para validar entradas: if idade < 0: raise ValueError("Idade inválida").',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'O objeto de exceção capturado com <code>as e</code> contém a mensagem de erro.',
      q: 'Como acessar a mensagem de erro em: except ValueError as e?',
      opts: [
        { t: 'ValueError.mensagem', ok: false },
        { t: 'str(e)', ok: true },
        { t: 'e.text', ok: false },
        { t: 'error.msg', ok: false },
      ],
      exp: 'str(e) ou print(e) exibe a mensagem do erro. "e" é o objeto da exceção capturada.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'except Exception: captura qualquer exceção (genérico). Use com cuidado — pode esconder bugs.',
      q: 'Por que capturar Exception genericamente pode ser problemático?',
      opts: [
        { t: 'É mais lento', ok: false },
        { t: 'Mascara erros inesperados, dificultando o debug', ok: true },
        { t: 'Não funciona em Python 3', ok: false },
        { t: 'Não há problema — é a melhor prática', ok: false },
      ],
      exp: 'except Exception: captura tudo, incluindo bugs reais que deveriam ser corrigidos. Prefira exceções específicas.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Capture o erro de conversão.',
      code: `<span class="kw">try</span>:\n    n = <span class="mt">int</span>(<span class="mt">input</span>(<span class="st">"Número: "</span>))\n<span class="kw">_______</span> <span class="mt">ValueError</span>:\n    <span class="mt">print</span>(<span class="st">"Digite um número válido!"</span>)`,
      q: 'Qual palavra-chave captura a exceção?',
      ans: 'except',
      exp: 'except ValueError: captura erros de conversão quando o usuário digitar texto não numérico.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'O finally garante limpeza.',
      code: `<span class="kw">try</span>:\n    resultado = <span class="nm">10</span> <span class="kw">/</span> <span class="nm">0</span>\n<span class="kw">except</span> <span class="mt">ZeroDivisionError</span>:\n    <span class="mt">print</span>(<span class="st">"Divisão por zero!"</span>)\n<span class="kw">_______</span>:\n    <span class="mt">print</span>(<span class="st">"Sempre executa"</span>)`,
      q: 'Qual palavra-chave garante execução sempre?',
      ans: 'finally',
      exp: 'finally executa independente de erro. Saída: "Divisão por zero!" depois "Sempre executa".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise este validador de entrada.',
      code: `<span class="kw">def</span> validar_idade(idade):\n    <span class="kw">if</span> idade <span class="kw"><</span> <span class="nm">0</span> <span class="kw">or</span> idade <span class="kw">></span> <span class="nm">150</span>:\n        <span class="kw">raise</span> <span class="mt">ValueError</span>(<span class="st">"Idade inválida"</span>)\n    <span class="kw">return</span> idade\n\n<span class="kw">try</span>:\n    <span class="mt">print</span>(validar_idade(<span class="nm">-5</span>))\n<span class="kw">except</span> <span class="mt">ValueError</span> <span class="kw">as</span> e:\n    <span class="mt">print</span>(e)`,
      q: 'O que este código exibe?',
      opts: [
        { t: '-5', ok: false },
        { t: 'Idade inválida', ok: true },
        { t: 'ValueError', ok: false },
        { t: 'O programa trava', ok: false },
      ],
      exp: 'validar_idade(-5): -5 < 0 é True → raise ValueError("Idade inválida"). O except captura e print(e) exibe a mensagem.',
    },

  ]
};
