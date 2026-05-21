// ══════════════════════════════════════════════════════
// ACT IV — O BUNKER
// MISSÃO 63 — PROTOCOLO DE LIMPEZA
// Tema: IDisposable, using, finalizers, padrão Dispose
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_62 = {
  id: 62,
  title: "MISSÃO 63 — PROTOCOLO DE LIMPEZA",
  icon: '🧹',
  free: false,
  desc: "Ao terminar uma missão, Leon sempre limpa os rastros — fecha conexões, libera recursos, destrói evidências. IDisposable é o protocolo de limpeza do .NET para recursos não gerenciados.",
  objs: [
    "Implementar IDisposable para liberar recursos determinicamente",
    "Usar using statement e using declaration para auto-dispose",
    "Entender quando usar finalizers (~Destructor) em conjunto com Dispose",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<code>IDisposable</code> define o contrato para liberar recursos de forma determinística. Diferente do GC, o Dispose() é chamado quando <em>você</em> decide.',
      q: 'Por que usar IDisposable em vez de confiar no GC?',
      hint: 'Recursos não gerenciados',
      opts: [
        { t: 'O GC não existe em .NET moderno', ok: false },
        { t: 'O GC coleta memória mas não fecha conexões, arquivos, sockets — IDisposable libera esses recursos cedo', ok: true },
        { t: 'IDisposable é mais rápido que o GC', ok: false },
        { t: 'O GC chama Dispose automaticamente', ok: false },
      ],
      exp: 'GC libera memória. Mas conexões DB, filehandles, sockets — o OS limita a quantidade. IDisposable fecha imediatamente quando não precisamos mais.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'O bloco <code>using (var r = new Resource()) { ... }</code> garante que Dispose() é chamado ao sair do bloco, mesmo se uma exceção ocorrer.',
      q: 'O que acontece se uma exceção for lançada dentro do using block?',
      hint: 'Dispose é sempre chamado',
      opts: [
        { t: 'A exceção ignora o Dispose', ok: false },
        { t: 'Dispose() é chamado antes de propagar a exceção — equivale a try/finally', ok: true },
        { t: 'O using captura a exceção', ok: false },
        { t: 'Dispose() não é chamado se houver exceção', ok: false },
      ],
      exp: '"using" é açúcar sintático para try/finally com Dispose() no finally. Exceção ou não, Dispose() é sempre chamado.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'O <strong>padrão Dispose</strong> completo tem: Dispose(bool disposing) para separar limpeza de recursos gerenciados e não gerenciados, e um finalizer como salvaguarda.',
      q: 'Quando o finalizer (~Classe) é chamado?',
      hint: 'Quando Dispose não foi chamado',
      opts: [
        { t: 'Ao chamar Dispose()', ok: false },
        { t: 'Imediatamente ao sair do escopo', ok: false },
        { t: 'Pelo GC quando coleta o objeto — serve como salvaguarda caso Dispose não tenha sido chamado', ok: true },
        { t: 'Nunca — finalizers são obsoletos em .NET moderno', ok: false },
      ],
      exp: 'Finalizer: chamado pelo GC (indeterminado). Serve como seguro caso alguém esqueça o using. GC.SuppressFinalize() evita o finalizer se Dispose já foi chamado.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>using var r = new Resource();</code> (C# 8+) é a declaração using — sem bloco, o Dispose é chamado ao final do escopo da variável.',
      q: 'Qual a diferença entre "using var" e "using (var)"?',
      hint: 'Escopo da variável',
      opts: [
        { t: 'São idênticos', ok: false },
        { t: '"using var" = Dispose ao fim do escopo atual; "using(var){}" = Dispose ao fim do bloco específico', ok: true },
        { t: '"using var" não funciona com IAsyncDisposable', ok: false },
        { t: '"using (var)" é obsoleto', ok: false },
      ],
      exp: '"using (var r = ...) { }" — Dispose ao fechar o bloco. "using var r = ..." — Dispose ao fim do método/bloco contendo a declaração. Mais curto.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Implementando IDisposable na classe:',
      code: `<span class="kw">public class</span> ConexaoBase : <span class="kw">_______</span>\n{\n    <span class="kw">private bool</span> _disposed;\n    <span class="kw">public void</span> <span class="mt">Dispose</span>()\n    {\n        <span class="kw">if</span> (_disposed) <span class="kw">return</span>;\n        <span class="cm">// fechar conexão aqui</span>\n        _disposed = <span class="kw">true</span>;\n    }\n}`,
      q: 'Qual interface implementar para Dispose?',
      hint: 'Descartável em inglês',
      ans: 'IDisposable',
      exp: '"IDisposable" exige o método Dispose(). O flag _disposed evita double-dispose. GC.SuppressFinalize(this) no final evita finalizer desnecessário.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Usando a declaração using de C# 8:',
      code: `<span class="kw">public void</span> <span class="mt">LerArquivo</span>(<span class="kw">string</span> path)\n{\n    <span class="kw">using _______</span> reader = <span class="kw">new</span> StreamReader(path);\n    <span class="kw">string</span> conteudo = reader.<span class="mt">ReadToEnd</span>();\n    Console.<span class="mt">WriteLine</span>(conteudo);\n} <span class="cm">// Dispose chamado aqui</span>`,
      q: 'Qual palavra-chave na declaração using moderna (sem bloco)?',
      hint: 'Var com using',
      ans: 'var',
      exp: '"using var reader = ..." — Dispose chamado ao fechar o método. Sem bloco {}, mais limpo. Equivale a "using (var reader = ...) { ... }".',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Para recursos async, use IAsyncDisposable com await using:',
      code: `<span class="kw">await using var</span> conn = <span class="kw">new</span> _______();\n<span class="kw">await</span> conn.<span class="mt">AbrirAsync</span>();`,
      q: 'Qual tipo fictício de conexão async para o exemplo?',
      hint: 'Nome genérico de conexão',
      ans: 'ConexaoBase',
      exp: '"await using" chama DisposeAsync() — a versão assíncrona. IAsyncDisposable exige ValueTask DisposeAsync(). Essencial para conexões de banco async.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'Verificando que Dispose é chamado ao sair do using.',
      code: `<span class="kw">class</span> Recurso : IDisposable\n{\n    <span class="kw">public bool</span> Descartado = <span class="kw">false</span>;\n    <span class="kw">public void</span> <span class="mt">Dispose</span>() => Descartado = <span class="kw">true</span>;\n}\n\nRecurso r;\n<span class="kw">using</span> (r = <span class="kw">new</span> Recurso())\n{\n    Console.<span class="mt">WriteLine</span>(r.Descartado);\n}\nConsole.<span class="mt">WriteLine</span>(r.Descartado);`,
      q: 'O que será exibido?',
      hint: 'Antes e depois do using',
      opts: [
        { t: 'True True', ok: false },
        { t: 'False True', ok: true },
        { t: 'False False', ok: false },
        { t: 'True False', ok: false },
      ],
      exp: 'Dentro do using: Descartado = false. Ao sair do using (Dispose chamado): Descartado = true. "False" depois "True".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Dispose chamado mesmo com exceção.',
      code: `<span class="kw">class</span> Log : IDisposable\n{\n    <span class="kw">public</span> List&lt;<span class="kw">string</span>&gt; Msgs = <span class="kw">new</span>();\n    <span class="kw">public void</span> <span class="mt">Dispose</span>() => Msgs.<span class="mt">Add</span>(<span class="st">"closed"</span>);\n}\n<span class="kw">var</span> log = <span class="kw">new</span> Log();\n<span class="kw">try</span>\n{\n    <span class="kw">using</span> (log) { Msgs.<span class="mt">Add</span>(<span class="st">"open"</span>); <span class="kw">throw new</span> Exception(); }\n}\n<span class="kw">catch</span> { }\nConsole.<span class="mt">WriteLine</span>(<span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">","</span>, log.Msgs));`,
      q: 'O que será exibido?',
      hint: 'Mesmo com exceção, Dispose é chamado',
      opts: [
        { t: 'open', ok: false },
        { t: 'open,closed', ok: true },
        { t: 'closed', ok: false },
        { t: 'Nada — exceção cancela tudo', ok: false },
      ],
      exp: '"open" adicionado. Exceção lançada. Dispose() chamado antes de propagar → "closed" adicionado. Catch captura. "open,closed".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Padrão Dispose com flag de proteção.',
      code: `<span class="kw">class</span> Seguro : IDisposable\n{\n    <span class="kw">private bool</span> _ok;\n    <span class="kw">public void</span> <span class="mt">Dispose</span>()\n    {\n        <span class="kw">if</span> (_ok) { Console.<span class="mt">WriteLine</span>(<span class="st">"Já descartado"</span>); <span class="kw">return</span>; }\n        _ok = <span class="kw">true</span>;\n        Console.<span class="mt">WriteLine</span>(<span class="st">"Descartando"</span>);\n    }\n}\n<span class="kw">var</span> s = <span class="kw">new</span> Seguro();\ns.<span class="mt">Dispose</span>();\ns.<span class="mt">Dispose</span>();`,
      q: 'O que será exibido?',
      hint: 'Double-dispose é protegido',
      opts: [
        { t: 'Descartando duas vezes', ok: false },
        { t: 'Descartando e Já descartado', ok: true },
        { t: 'Erro — double dispose', ok: false },
        { t: 'Nada', ok: false },
      ],
      exp: 'Primeiro Dispose: _ok=false → "Descartando", _ok=true. Segundo Dispose: _ok=true → "Já descartado". Padrão correto para idempotência.',
    },

  ]
};
