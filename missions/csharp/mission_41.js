const MISSION_41 = {
  id: 41,
  title: "MISSÃO 42 — O RELICÁRIO",
  icon: '✨',
  free: false,
  desc: "As relíquias do castelo levam tempo para serem encontradas — enquanto espera, Leon não fica parado. async/await permite executar operações demoradas sem travar o programa.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>async/await</strong> é o modelo de programação assíncrona do C#. Permite aguardar operações lentas (IO, rede) sem bloquear a thread.',
      q: 'Qual o problema que async/await resolve?',
      hint: 'Thread travada esperando',
      opts: [
        { t: 'Execução paralela em múltiplos núcleos', ok: false },
        { t: 'Evitar que a thread fique bloqueada esperando operações lentas de IO ou rede', ok: true },
        { t: 'Executar código mais rápido', ok: false },
        { t: 'Substituir loops for', ok: false },
      ],
      exp: 'Sem async: a thread bloqueia esperando IO. Com async/await: a thread é liberada para outras tarefas enquanto espera. Melhor uso de recursos.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Um método <code>async</code> deve retornar <code>Task</code>, <code>Task&lt;T&gt;</code> ou <code>void</code> (apenas em event handlers).',
      q: 'Qual o tipo de retorno correto para um método async que retorna um int?',
      hint: 'Task envolve o tipo de retorno',
      opts: [
        { t: 'int', ok: false },
        { t: 'async int', ok: false },
        { t: 'Task<int>', ok: true },
        { t: 'Promise<int>', ok: false },
      ],
      exp: '"Task<int>" — o int é "prometido" de forma assíncrona. "await" desempacota o Task<int> para int. "Task" sem genérico = void assíncrono.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>await</code> suspende o método atual até o Task completar, sem bloquear a thread. A execução continua após o Task.',
      q: 'O que acontece com a thread quando encontra um await?',
      hint: 'Suspende o método, não a thread',
      opts: [
        { t: 'A thread fica bloqueada até o Task completar', ok: false },
        { t: 'O método é suspenso e a thread fica livre para outras tarefas', ok: true },
        { t: 'Uma nova thread é criada automaticamente', ok: false },
        { t: 'O programa para completamente', ok: false },
      ],
      exp: 'await suspende o método (não a thread). A thread volta ao pool e pode executar outros trabalhos. Quando o Task completa, o método resume.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>Task.Delay(ms)</code> é o equivalente assíncrono de <code>Thread.Sleep(ms)</code> — aguarda sem bloquear.',
      q: 'Qual a diferença entre Thread.Sleep(1000) e await Task.Delay(1000)?',
      hint: 'Um bloqueia, o outro não',
      opts: [
        { t: 'São idênticos', ok: false },
        { t: 'Thread.Sleep bloqueia a thread; Task.Delay libera a thread enquanto aguarda', ok: true },
        { t: 'Task.Delay é mais preciso em milissegundos', ok: false },
        { t: 'Thread.Sleep é assíncrono também', ok: false },
      ],
      exp: '"Thread.Sleep" trava a thread completamente. "await Task.Delay" suspende apenas o método — a thread fica livre. Enorme diferença em servidores.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Para marcar um método como assíncrono, usa-se a palavra-chave async na assinatura:',
      code: `<span class="kw">public _______</span> <span class="kw">async</span> Task <span class="mt">CarregarMissaoAsync</span>()\n{\n    <span class="kw">await</span> Task.<span class="mt">Delay</span>(<span class="nm">1000</span>);\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Missão carregada!"</span>);\n}`,
      q: 'Qual modificador de acesso usar para um método público?',
      hint: 'Acessível de qualquer lugar',
      ans: 'public',
      exp: '"public async Task" — public é o modificador de acesso, async indica que o método é assíncrono, Task é o tipo de retorno.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Para aguardar um Task dentro de um método async:',
      code: `<span class="kw">var</span> dados = <span class="kw">_______</span> BuscarDadosAsync();`,
      q: 'Qual palavra-chave desempacota o resultado de um Task?',
      hint: 'Aguardar em inglês',
      ans: 'await',
      exp: '"await" desempacota Task<T> para T. Sem await: você teria um Task<T> não resolvido, não os dados em si.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Para criar um Task já completado com um valor (útil em testes e implementações síncronas de interfaces async):',
      code: `<span class="kw">return</span> Task.<span class="mt">_______</span>(<span class="nm">42</span>);`,
      q: 'Qual método cria um Task já completado com um valor?',
      hint: 'Completado com resultado',
      ans: 'FromResult',
      exp: '"Task.FromResult(42)" retorna um Task<int> já completado com valor 42. Útil quando precisa retornar Task mas não tem operação assíncrona real.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Para executar múltiplos Tasks em paralelo e aguardar TODOS completarem:',
      code: `<span class="kw">await</span> Task.<span class="mt">_______</span>(task1, task2, task3);`,
      q: 'Qual método aguarda múltiplos Tasks ao mesmo tempo?',
      hint: 'Todos em inglês',
      ans: 'WhenAll',
      exp: '"Task.WhenAll" aguarda todos os Tasks completarem. "Task.WhenAny" completa quando o primeiro terminar. Paralelismo simples.',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Método async retornando valor.',
      code: `<span class="kw">static async</span> Task&lt;<span class="kw">int</span>&gt; <span class="mt">ContarInimigoAsync</span>()\n{\n    <span class="kw">await</span> Task.<span class="mt">Delay</span>(<span class="nm">0</span>); <span class="cm">// simula IO</span>\n    <span class="kw">return</span> <span class="nm">42</span>;\n}\n\n<span class="kw">static async</span> Task <span class="mt">Main</span>()\n{\n    <span class="kw">int</span> total = <span class="kw">await</span> <span class="mt">ContarInimigoAsync</span>();\n    Console.<span class="mt">WriteLine</span>(<span class="st">$"Inimigos: {total}"</span>);\n}`,
      q: 'O que será exibido?',
      hint: 'await desempacota o Task<int>',
      opts: [
        { t: 'Task<int>', ok: false },
        { t: 'Inimigos: 42', ok: true },
        { t: 'Erro — não pode await em Main', ok: false },
        { t: 'Inimigos: 0', ok: false },
      ],
      exp: 'await desempacota Task<int> → int 42. "async Task Main()" é válido em C# 7.1+. Exibe "Inimigos: 42".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Tratando exceção em método async.',
      code: `<span class="kw">static async</span> Task <span class="mt">ExemploAsync</span>()\n{\n    <span class="kw">try</span>\n    {\n        <span class="kw">await</span> Task.<span class="mt">Delay</span>(<span class="nm">0</span>);\n        <span class="kw">throw new</span> Exception(<span class="st">"Falha na missão!"</span>);\n    }\n    <span class="kw">catch</span> (Exception ex)\n    {\n        Console.<span class="mt">WriteLine</span>(<span class="st">$"Capturado: {ex.Message}"</span>);\n    }\n}`,
      q: 'O que será exibido ao chamar ExemploAsync()?',
      hint: 'try/catch funciona normalmente com async',
      opts: [
        { t: 'Falha na missão! (sem captura)', ok: false },
        { t: 'Capturado: Falha na missão!', ok: true },
        { t: 'Exceção não capturada', ok: false },
        { t: 'Nada — exceção em async é ignorada', ok: false },
      ],
      exp: 'try/catch funciona normalmente com await. A exceção é capturada e exibe "Capturado: Falha na missão!".',
    },

    // Q11 — Code
    {
      type: 'code',
      bubble: 'WhenAll — executando duas operações em paralelo.',
      code: `<span class="kw">static async</span> Task&lt;<span class="kw">int</span>&gt; <span class="mt">A</span>() { <span class="kw">await</span> Task.<span class="mt">Delay</span>(<span class="nm">0</span>); <span class="kw">return</span> <span class="nm">10</span>; }\n<span class="kw">static async</span> Task&lt;<span class="kw">int</span>&gt; <span class="mt">B</span>() { <span class="kw">await</span> Task.<span class="mt">Delay</span>(<span class="nm">0</span>); <span class="kw">return</span> <span class="nm">20</span>; }\n\n<span class="kw">static async</span> Task <span class="mt">Main</span>()\n{\n    <span class="kw">var</span> resultados = <span class="kw">await</span> Task.<span class="mt">WhenAll</span>(<span class="mt">A</span>(), <span class="mt">B</span>());\n    Console.<span class="mt">WriteLine</span>(resultados.<span class="mt">Sum</span>());\n}`,
      q: 'O que será exibido?',
      hint: 'WhenAll retorna array com os resultados; 10 + 20',
      opts: [
        { t: '10', ok: false },
        { t: '20', ok: false },
        { t: '30', ok: true },
        { t: 'Erro — WhenAll não retorna valores', ok: false },
      ],
      exp: 'Task.WhenAll(A(), B()) retorna int[] com os resultados de cada Task: [10, 20]. Sum() = 30.',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'ConfigureAwait — detalhe importante para libraries.',
      code: `<span class="kw">static async</span> Task&lt;<span class="kw">string</span>&gt; <span class="mt">BuscarNomeAsync</span>()\n{\n    <span class="kw">await</span> Task.<span class="mt">Delay</span>(<span class="nm">0</span>).<span class="mt">ConfigureAwait</span>(<span class="kw">false</span>);\n    <span class="kw">return</span> <span class="st">"Leon"</span>;\n}\n<span class="kw">static async</span> Task <span class="mt">Main</span>()\n{\n    <span class="kw">var</span> nome = <span class="kw">await</span> <span class="mt">BuscarNomeAsync</span>();\n    Console.<span class="mt">WriteLine</span>(nome);\n}`,
      q: 'O que ConfigureAwait(false) indica?',
      hint: 'Contexto de sincronização',
      opts: [
        { t: 'Que o método não é realmente async', ok: false },
        { t: 'Que não precisa voltar ao contexto de sincronização original — melhor para libraries', ok: true },
        { t: 'Que a Task pode falhar silenciosamente', ok: false },
        { t: 'Nada — é apenas documentação', ok: false },
      ],
      exp: '"ConfigureAwait(false)" evita retornar ao contexto original (ex: UI thread). Recomendado em libraries para evitar deadlocks e melhorar performance.',
    },

  ]
};
