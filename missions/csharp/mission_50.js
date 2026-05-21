// ══════════════════════════════════════════════════════
// ACT III — A ILHA
// MISSÃO 51 — DESEMBARQUE NA ILHA
// Tema: async/await — conceitos fundamentais
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_50 = {
  id: 50,
  title: "MISSÃO 51 — DESEMBARQUE NA ILHA",
  icon: '🌊',
  free: false,
  desc: "A ilha da Umbrella está protegida por sistemas automatizados. Para infiltrar sem alertar as defesas, você precisa dominar operações assíncronas — fazer várias coisas ao mesmo tempo sem travar o sistema.",
  objs: [
    "Entender o modelo async/await e Task em C#",
    "Diferenciar código síncrono de assíncrono",
    "Escrever métodos assíncronos básicos com Task",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Código <strong>síncrono</strong> bloqueia a thread até terminar. Código <strong>assíncrono</strong> libera a thread enquanto aguarda, permitindo que outras operações continuem.',
      q: 'Por que código assíncrono é importante para aplicações modernas?',
      hint: 'Pense em espera de rede ou disco',
      opts: [
        { t: 'Para executar mais rápido sempre', ok: false },
        { t: 'Para liberar a thread durante operações de espera (I/O, rede, disco)', ok: true },
        { t: 'Para usar múltiplos processadores simultaneamente', ok: false },
        { t: 'Para evitar bugs de concorrência', ok: false },
      ],
      exp: 'Async/await libera a thread enquanto espera I/O. Uma app web pode servir outros requests enquanto aguarda o banco de dados responder.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'A palavra-chave <code>async</code> marca um método como assíncrono. <code>await</code> suspende a execução do método até uma Task ser concluída, sem bloquear a thread.',
      q: 'O que acontece com a thread quando ela encontra um await?',
      hint: 'A thread não fica parada',
      opts: [
        { t: 'A thread fica bloqueada esperando o resultado', ok: false },
        { t: 'A thread é destruída e recriada', ok: false },
        { t: 'A thread é liberada para fazer outro trabalho enquanto aguarda', ok: true },
        { t: 'A thread cria uma nova thread paralela', ok: false },
      ],
      exp: 'await suspende o método (não a thread). A thread volta ao pool e pode processar outros trabalhos. Quando a Task termina, o método continua.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>Task</code> representa uma operação assíncrona que pode retornar void (Task) ou um valor (Task&lt;T&gt;). É o tipo central do modelo async do .NET.',
      q: 'Qual deve ser o tipo de retorno de um método async que retorna um int?',
      hint: 'Task mais o tipo do valor',
      opts: [
        { t: 'int', ok: false },
        { t: 'async int', ok: false },
        { t: 'Task<int>', ok: true },
        { t: 'void', ok: false },
      ],
      exp: '"Task<int>" = método async que eventualmente produz um int. "Task" = sem retorno (equivalente ao void síncrono). Nunca retorne "void" em async (exceto event handlers).',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>Task.Delay(ms)</code> é a versão assíncrona do Thread.Sleep(). Ele aguarda o tempo especificado sem bloquear a thread.',
      q: 'Qual a diferença entre Thread.Sleep(1000) e await Task.Delay(1000)?',
      hint: 'Um bloqueia, o outro não',
      opts: [
        { t: 'Não há diferença funcional', ok: false },
        { t: 'Thread.Sleep bloqueia a thread; Task.Delay libera a thread durante a espera', ok: true },
        { t: 'Task.Delay é mais lento', ok: false },
        { t: 'Thread.Sleep é assíncrono', ok: false },
      ],
      exp: 'Thread.Sleep(1000): thread bloqueada por 1 segundo. await Task.Delay(1000): thread liberada — pode fazer outros trabalhos enquanto aguarda.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Para marcar um método como assíncrono, adicione a palavra-chave <code>async</code> antes do tipo de retorno.',
      code: `<span class="kw">public _______</span> Task <span class="mt">InfiltrarBaseAsync</span>()\n{\n    <span class="kw">await</span> Task.<span class="mt">Delay</span>(<span class="nm">1000</span>);\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Base infiltrada!"</span>);\n}`,
      q: 'Qual palavra-chave transforma este método em assíncrono?',
      hint: 'Assíncrono em inglês abreviado',
      ans: 'async',
      exp: '"async" marca o método. Permite usar "await" dentro dele. Sem "async", usar "await" causa erro de compilação.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Para aguardar o resultado de uma Task, usamos <code>await</code> antes da expressão que retorna Task.',
      code: `<span class="kw">public async</span> Task&lt;<span class="kw">string</span>&gt; <span class="mt">LerMensagemAsync</span>()\n{\n    <span class="kw">string</span> msg = <span class="kw">_______</span> File.<span class="mt">ReadAllTextAsync</span>(<span class="st">"msg.txt"</span>);\n    <span class="kw">return</span> msg;\n}`,
      q: 'Qual palavra-chave aguarda a Task e extrai o resultado?',
      hint: 'Aguardar em inglês',
      ans: 'await',
      exp: '"await" suspende o método até File.ReadAllTextAsync terminar e extrai o valor da Task<string> para atribuir a "msg".',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Um método async sem valor de retorno deve declarar <code>Task</code> como retorno (não void). Isso permite que o chamador possa fazer await nele.',
      code: `<span class="kw">public async _______</span> <span class="mt">PatrulharAsync</span>()\n{\n    <span class="kw">await</span> Task.<span class="mt">Delay</span>(<span class="nm">500</span>);\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Patrulha concluída"</span>);\n}`,
      q: 'Qual tipo de retorno para async sem valor?',
      hint: 'Tarefa em inglês',
      ans: 'Task',
      exp: '"async Task" = método async sem retorno. Permite "await PatrulharAsync()". "async void" só para event handlers — não propagates exceções.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'Método assíncrono simples com Task.Delay e retorno de valor.',
      code: `<span class="kw">public async</span> Task&lt;<span class="kw">int</span>&gt; <span class="mt">ContarInimigoAsync</span>()\n{\n    <span class="kw">await</span> Task.<span class="mt">Delay</span>(<span class="nm">0</span>); <span class="cm">// simula I/O</span>\n    <span class="kw">return</span> <span class="nm">42</span>;\n}\n\n<span class="kw">int</span> count = <span class="kw">await</span> <span class="mt">ContarInimigoAsync</span>();\nConsole.<span class="mt">WriteLine</span>(count);`,
      q: 'O que será exibido?',
      hint: 'O método retorna 42',
      opts: [
        { t: '0', ok: false },
        { t: '42', ok: true },
        { t: 'Task<int>', ok: false },
        { t: 'Erro — await fora de método async', ok: false },
      ],
      exp: 'ContarInimigoAsync() retorna Task<int>. await extrai o valor 42 da Task. Console.WriteLine(42) exibe "42".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Encadeando múltiplos awaits sequencialmente.',
      code: `<span class="kw">static async</span> Task <span class="mt">MissaoAsync</span>()\n{\n    Console.<span class="mt">WriteLine</span>(<span class="st">"1. Preparando"</span>);\n    <span class="kw">await</span> Task.<span class="mt">Delay</span>(<span class="nm">0</span>);\n    Console.<span class="mt">WriteLine</span>(<span class="st">"2. Infiltrando"</span>);\n    <span class="kw">await</span> Task.<span class="mt">Delay</span>(<span class="nm">0</span>);\n    Console.<span class="mt">WriteLine</span>(<span class="st">"3. Concluído"</span>);\n}\n<span class="kw">await</span> <span class="mt">MissaoAsync</span>();`,
      q: 'Em que ordem as mensagens aparecem?',
      hint: 'Await mantém a ordem lógica',
      opts: [
        { t: 'Ordem aleatória — é assíncrono', ok: false },
        { t: '1, 2, 3 — em sequência', ok: true },
        { t: '3, 2, 1 — o último termina primeiro', ok: false },
        { t: 'Apenas 1 — await cancela o restante', ok: false },
      ],
      exp: 'await mantém a ordem sequencial. Cada await suspende brevemente, mas o método continua do ponto exato. Saída: 1, 2, 3.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Task.Run() executa código em uma thread de background.',
      code: `<span class="kw">var</span> t = Task.<span class="mt">Run</span>(() =>\n{\n    <span class="kw">int</span> soma = <span class="nm">0</span>;\n    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">1</span>; i <= <span class="nm">5</span>; i++) soma += i;\n    <span class="kw">return</span> soma;\n});\n<span class="kw">int</span> resultado = <span class="kw">await</span> t;\nConsole.<span class="mt">WriteLine</span>(resultado);`,
      q: 'O que será exibido?',
      hint: '1+2+3+4+5',
      opts: [
        { t: '10', ok: false },
        { t: '15', ok: true },
        { t: '5', ok: false },
        { t: 'Erro — Task.Run não retorna valor', ok: false },
      ],
      exp: 'Task.Run executa a lambda em background. Soma 1+2+3+4+5=15. await extrai o resultado. Console.WriteLine(15).',
    },

  ]
};
