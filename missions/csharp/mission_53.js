// ══════════════════════════════════════════════════════
// ACT III — A ILHA
// MISSÃO 54 — REDES DE COMUNICAÇÃO
// Tema: CancellationToken — cancelamento cooperativo
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_53 = {
  id: 53,
  title: "MISSÃO 54 — REDES DE COMUNICAÇÃO",
  icon: '📡',
  free: false,
  desc: "As redes de comunicação da ilha podem ser cortadas a qualquer momento. O CancellationToken é o sinal de abort — uma operação longa deve verificá-lo regularmente e parar quando ordenado.",
  objs: [
    "Entender o modelo de cancelamento cooperativo com CancellationToken",
    "Usar CancellationTokenSource para controlar o cancelamento",
    "Propagar CancellationToken para operações async",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'O cancelamento em .NET é <strong>cooperativo</strong>: o código que executa deve verificar o token e parar voluntariamente. Não é forçado de fora.',
      q: 'Por que o cancelamento em .NET é chamado de "cooperativo"?',
      hint: 'A operação precisa checar',
      opts: [
        { t: 'Porque precisa de dois threads cooperando', ok: false },
        { t: 'Porque o código que executa deve verificar o token e parar voluntariamente', ok: true },
        { t: 'Porque o cancelamento é automático após timeout', ok: false },
        { t: 'Porque CancellationToken compartilha dados', ok: false },
      ],
      exp: 'Cooperativo: ninguém força a parada. O código checa token.IsCancellationRequested ou chama token.ThrowIfCancellationRequested() e para sozinho.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>CancellationTokenSource</code> é o controlador do cancelamento. Você cria o source, obtém o token dele e distribui o token para as operações.',
      q: 'Qual classe você usa para CANCELAR uma operação?',
      hint: 'Fonte do cancelamento',
      opts: [
        { t: 'CancellationToken', ok: false },
        { t: 'CancellationTokenSource', ok: true },
        { t: 'CancelledException', ok: false },
        { t: 'TaskCanceledException', ok: false },
      ],
      exp: '"CancellationTokenSource" tem o método .Cancel(). Você distribui .Token para as operações. O token é só leitura — apenas verifica o estado.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Quando uma operação async é cancelada, ela lança <code>OperationCanceledException</code> (ou sua subclasse <code>TaskCanceledException</code>).',
      q: 'Qual exceção indica que uma Task foi cancelada?',
      hint: 'Operação + cancelada',
      opts: [
        { t: 'CancelException', ok: false },
        { t: 'InterruptedException', ok: false },
        { t: 'OperationCanceledException (ou TaskCanceledException)', ok: true },
        { t: 'TimeoutException', ok: false },
      ],
      exp: '"TaskCanceledException" herda de "OperationCanceledException". Catch "OperationCanceledException" para capturar ambas. Diferencie de outros erros.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>CancellationTokenSource(TimeSpan)</code> cria um source que cancela automaticamente após o tempo especificado — útil para timeout.',
      q: 'Como criar um cancelamento automático após 5 segundos?',
      hint: 'Source com timeout',
      opts: [
        { t: 'new CancellationToken(5000)', ok: false },
        { t: 'new CancellationTokenSource(TimeSpan.FromSeconds(5))', ok: true },
        { t: 'CancellationToken.WithTimeout(5)', ok: false },
        { t: 'Task.Delay(5000).ContinueWith(Cancel)', ok: false },
      ],
      exp: '"new CancellationTokenSource(TimeSpan.FromSeconds(5))" cancela automaticamente após 5s. Equivalente a criar o source e chamar .CancelAfter(5000).',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Criando o source e obtendo o token para distribuição:',
      code: `<span class="kw">var</span> cts = <span class="kw">new</span> CancellationTokenSource();\nCancellationToken token = cts.<span class="mt">_______</span>;\n<span class="cm">// passe "token" para as operações</span>`,
      q: 'Qual propriedade do CancellationTokenSource retorna o token?',
      hint: 'Token em inglês',
      ans: 'Token',
      exp: '"cts.Token" retorna o CancellationToken. Distribua-o. Para cancelar: "cts.Cancel()". Para verificar: "token.IsCancellationRequested".',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Verificar e lançar OperationCanceledException se cancelamento foi solicitado:',
      code: `<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i < <span class="nm">1000</span>; i++)\n{\n    token.<span class="mt">_______</span>(); <span class="cm">// lança se cancelado</span>\n    <span class="mt">ProcessarItem</span>(i);\n}`,
      q: 'Qual método lança automaticamente se o cancelamento foi solicitado?',
      hint: 'Throw if...',
      ans: 'ThrowIfCancellationRequested',
      exp: '"ThrowIfCancellationRequested()" é o ponto de verificação. Se o token foi cancelado, lança OperationCanceledException. Chame em loops longos.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Passando o token para métodos async do .NET (como Task.Delay):',
      code: `<span class="kw">await</span> Task.<span class="mt">Delay</span>(<span class="nm">5000</span>, <span class="mt">_______</span>);\n<span class="cm">// Se token cancelar, Delay lança OperationCanceledException</span>`,
      q: 'Qual variável passar como parâmetro de cancelamento?',
      hint: 'O token',
      ans: 'token',
      exp: 'Task.Delay(ms, token) aceita cancelamento. Se cancelado antes de 5s, lança OperationCanceledException imediatamente. Não espera o tempo todo.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'Cancelamento solicitado e verificado.',
      code: `<span class="kw">var</span> cts = <span class="kw">new</span> CancellationTokenSource();\ncts.<span class="mt">Cancel</span>(); <span class="cm">// cancela imediatamente</span>\n\n<span class="kw">try</span>\n{\n    <span class="kw">await</span> Task.<span class="mt">Delay</span>(<span class="nm">1000</span>, cts.Token);\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Concluído"</span>);\n}\n<span class="kw">catch</span> (OperationCanceledException)\n{\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Cancelado!"</span>);\n}`,
      q: 'O que será exibido?',
      hint: 'O token já estava cancelado',
      opts: [
        { t: 'Concluído', ok: false },
        { t: 'Cancelado!', ok: true },
        { t: 'Nada', ok: false },
        { t: 'Erro não tratado', ok: false },
      ],
      exp: 'Token já cancelado antes de Task.Delay. Task.Delay detecta e lança OperationCanceledException. Catch captura. "Cancelado!".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Timeout automático com CancellationTokenSource.',
      code: `<span class="kw">using var</span> cts = <span class="kw">new</span> CancellationTokenSource(TimeSpan.<span class="mt">FromMilliseconds</span>(<span class="nm">200</span>));\n<span class="kw">try</span>\n{\n    <span class="kw">await</span> Task.<span class="mt">Delay</span>(<span class="nm">1000</span>, cts.Token); <span class="cm">// 1s > 200ms</span>\n    Console.<span class="mt">WriteLine</span>(<span class="st">"OK"</span>);\n}\n<span class="kw">catch</span> (OperationCanceledException)\n{\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Timeout!"</span>);\n}`,
      q: 'O que será exibido?',
      hint: '200ms de timeout vs 1000ms de delay',
      opts: [
        { t: 'OK', ok: false },
        { t: 'Timeout!', ok: true },
        { t: 'Nada', ok: false },
        { t: 'Erro — using com CancellationTokenSource', ok: false },
      ],
      exp: 'O source cancela após 200ms. Task.Delay(1000ms) é interrompida após 200ms. OperationCanceledException. "Timeout!".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Verificando IsCancellationRequested num loop.',
      code: `<span class="kw">var</span> cts = <span class="kw">new</span> CancellationTokenSource();\n<span class="kw">int</span> i = <span class="nm">0</span>;\n<span class="kw">while</span> (!cts.Token.IsCancellationRequested && i < <span class="nm">5</span>)\n{\n    i++;\n    <span class="kw">if</span> (i == <span class="nm">3</span>) cts.<span class="mt">Cancel</span>();\n}\nConsole.<span class="mt">WriteLine</span>(i);`,
      q: 'Qual o valor de i quando o loop para?',
      hint: 'Cancel em i==3, mas o while checa antes',
      opts: [
        { t: '2', ok: false },
        { t: '3', ok: true },
        { t: '4', ok: false },
        { t: '5', ok: false },
      ],
      exp: 'i=1,2,3: em i=3, Cancel() é chamado. Próxima verificação do while: IsCancellationRequested=true. Loop para. i=3.',
    },

  ]
};
