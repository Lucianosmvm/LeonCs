// ══════════════════════════════════════════════════════
// ACT IV — O BUNKER
// MISSÃO 64 — ZONA DE QUARENTENA ⚔️
// Tema: Programação concorrente — lock, Monitor, Interlocked
// Tipo: Chefe (18 questões) | 6 MC → 5 Fill → 7 Code
// ══════════════════════════════════════════════════════

const MISSION_63 = {
  id: 63,
  title: "MISSÃO 64 — ZONA DE QUARENTENA ⚔️",
  icon: '⚔️',
  free: false,
  desc: "A zona de quarentena processa múltiplos sujeitos simultaneamente. Quando várias threads acessam os mesmos recursos, o caos é inevitável — a menos que você domine os mecanismos de sincronização.",
  objs: [
    "Entender race conditions e por que surgem",
    "Usar lock para exclusão mútua em seções críticas",
    "Aplicar Interlocked para operações atômicas simples",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Uma <strong>race condition</strong> ocorre quando duas ou mais threads acessam dados compartilhados simultaneamente e o resultado depende da ordem de execução.',
      q: 'O que pode acontecer sem sincronização em "contador++" por 2 threads?',
      hint: 'Read-modify-write não é atômico',
      opts: [
        { t: 'Nada — ++ é thread-safe', ok: false },
        { t: 'Ambas as threads podem ler o mesmo valor, ambas incrementam, uma sobrescreve a outra — perde um incremento', ok: true },
        { t: 'Uma thread para e espera a outra', ok: false },
        { t: 'O compilador detecta e serializa automaticamente', ok: false },
      ],
      exp: 'contador++ = ler + incrementar + escrever. Thread A lê 5, Thread B lê 5, A escreve 6, B escreve 6. Esperado: 7. Resultado: 6. Incremento perdido.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>lock(objeto)</code> garante exclusão mútua — apenas uma thread executa o bloco por vez. Outras threads ficam bloqueadas esperando.',
      q: 'Qual objeto usar como lock em uma classe?',
      hint: 'Objeto dedicado, não this',
      opts: [
        { t: 'lock(this) — sempre correto', ok: false },
        { t: 'Um objeto privado readonly dedicado: private readonly object _lock = new object()', ok: true },
        { t: 'lock(typeof(MinhaClasse))', ok: false },
        { t: 'Qualquer objeto funciona igualmente', ok: false },
      ],
      exp: 'lock(this) expõe o lock para código externo — deadlock potencial. Campo privado _lock = new object() garante que só seu código controla o lock.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>Interlocked</code> fornece operações atômicas primitivas (Increment, Decrement, Add, Exchange, CompareExchange) sem o overhead do lock completo.',
      q: 'Quando preferir Interlocked.Increment em vez de lock?',
      hint: 'Operação simples de incremento',
      opts: [
        { t: 'Sempre — Interlocked é mais seguro', ok: false },
        { t: 'Para operações atômicas simples (incremento, decremento, compare-and-swap) — sem overhead de lock', ok: true },
        { t: 'Quando múltiplas operações precisam ser atômicas juntas', ok: false },
        { t: 'Interlocked não funciona com int', ok: false },
      ],
      exp: 'Interlocked.Increment(ref n) = atômico, sem lock de monitor. Para "n++" thread-safe, é mais eficiente. Para operações compostas (ler e escrever juntos), use lock.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<strong>Deadlock</strong> ocorre quando Thread A espera o lock que Thread B segura, e Thread B espera o lock que Thread A segura — ambas bloqueiam para sempre.',
      q: 'Como prevenir deadlocks com múltiplos locks?',
      hint: 'Ordem consistente de aquisição',
      opts: [
        { t: 'Usar lock(this)', ok: false },
        { t: 'Sempre adquirir locks na mesma ordem em todas as threads', ok: true },
        { t: 'Usar SemaphoreSlim em vez de lock', ok: false },
        { t: 'Nunca usar mais de um lock', ok: false },
      ],
      exp: 'Ordem consistente evita deadlock. Thread A: lock A então B. Thread B: lock A então B. Nunca: A→B para uma e B→A para outra.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>SemaphoreSlim</code> controla quantas threads podem acessar um recurso simultaneamente. SemaphoreSlim(1,1) equivale a um lock assíncrono.',
      q: 'Para limitar a 3 downloads simultâneos, qual primitiva usar?',
      hint: 'Controla contagem de acessos',
      opts: [
        { t: 'lock — bloqueia a N downloads', ok: false },
        { t: 'SemaphoreSlim(3, 3) — 3 threads podem entrar simultaneamente', ok: true },
        { t: 'Monitor.Enter com contador', ok: false },
        { t: 'Interlocked.Add', ok: false },
      ],
      exp: '"new SemaphoreSlim(3, 3)" — 3 "vagas". WaitAsync() entra se tem vaga. Release() libera vaga. Funciona com async/await diferente do lock.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<code>volatile</code> garante que leituras/escritas de uma variável não sejam reordenadas pelo compilador ou CPU. Útil para flags simples entre threads.',
      q: 'O que "volatile bool _rodando = true" garante?',
      hint: 'Visibilidade entre threads',
      opts: [
        { t: 'Que apenas uma thread acesse _rodando por vez', ok: false },
        { t: 'Que toda thread veja o valor mais recente — sem cache de CPU ou reordenamento', ok: true },
        { t: 'Que _rodando nunca seja false', ok: false },
        { t: 'volatile substitui lock', ok: false },
      ],
      exp: 'volatile garante visibilidade — toda thread lê da memória principal. Mas NÃO garante atomicidade de operações compostas. Para isso, use lock ou Interlocked.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Protegendo seção crítica com lock:',
      code: `<span class="kw">private readonly object</span> _lock = <span class="kw">new</span>();\n<span class="kw">private int</span> _contador = <span class="nm">0</span>;\n\n<span class="kw">public void</span> <span class="mt">Incrementar</span>()\n{\n    <span class="kw">_______</span> (_lock)\n    {\n        _contador++;\n    }\n}`,
      q: 'Qual palavra-chave bloqueia o mutex?',
      hint: 'Travar',
      ans: 'lock',
      exp: '"lock(_lock)" garante exclusão mútua. Apenas uma thread por vez executa "_contador++". Outras aguardam. Equivale a Monitor.Enter/Exit com try/finally.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Incremento atômico com Interlocked:',
      code: `<span class="kw">private int</span> _kills = <span class="nm">0</span>;\n\n<span class="kw">public void</span> <span class="mt">RegistrarKill</span>()\n    => Interlocked.<span class="mt">_______</span>(<span class="kw">ref</span> _kills);`,
      q: 'Qual método Interlocked incrementa atomicamente?',
      hint: 'Incrementar em inglês',
      ans: 'Increment',
      exp: '"Interlocked.Increment(ref _kills)" = operação atômica de incremento. Thread-safe sem lock. Mais eficiente para contadores simples.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'SemaphoreSlim para limitar acesso concorrente:',
      code: `<span class="kw">var</span> sem = <span class="kw">new</span> SemaphoreSlim(<span class="nm">2</span>, <span class="nm">2</span>); <span class="cm">// 2 simultâneos</span>\n<span class="kw">await</span> sem.<span class="mt">WaitAsync</span>();\n<span class="kw">try</span> { <span class="kw">await</span> <span class="mt">OperacaoAsync</span>(); }\n<span class="kw">finally</span> { sem.<span class="mt">_______</span>(); } <span class="cm">// libera</span>`,
      q: 'Qual método libera o semáforo?',
      hint: 'Liberar em inglês',
      ans: 'Release',
      exp: '"Release()" libera uma "vaga" no semáforo. Outro WaitAsync() pode entrar. Sempre no finally para garantir liberação mesmo com exceção.',
    },

    // Q10 — Fill
    {
      type: 'fill',
      bubble: 'Compare-and-swap atômico — essencial para lock-free programming:',
      code: `<span class="kw">int</span> esperado = <span class="nm">0</span>, novo = <span class="nm">1</span>;\n<span class="kw">int</span> original = Interlocked.<span class="mt">_______</span>(<span class="kw">ref</span> _estado, novo, esperado);`,
      q: 'Qual método Interlocked troca atomicamente SE o valor atual é o esperado?',
      hint: 'Compare + Exchange',
      ans: 'CompareExchange',
      exp: '"CompareExchange(ref val, novoVal, esperado)" — se val == esperado, troca por novoVal atomicamente. Retorna o valor original. Base de algoritmos lock-free.',
    },

    // Q11 — Fill
    {
      type: 'fill',
      bubble: 'Variável volátil para flag de parada entre threads:',
      code: `<span class="kw">private _______</span> <span class="kw">bool</span> _continuar = <span class="kw">true</span>;\n<span class="kw">public void</span> <span class="mt">Parar</span>() => _continuar = <span class="kw">false</span>;`,
      q: 'Qual modificador garante visibilidade imediata entre threads?',
      hint: 'Volátil em inglês',
      ans: 'volatile',
      exp: '"volatile bool _continuar" garante que a thread de trabalho veja _continuar=false imediatamente após Parar(). Sem volatile, pode ler valor em cache.',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'Counter thread-safe com lock.',
      code: `<span class="kw">class</span> Contador\n{\n    <span class="kw">private int</span> _n;\n    <span class="kw">private readonly object</span> _lk = <span class="kw">new</span>();\n    <span class="kw">public void</span> <span class="mt">Inc</span>() { <span class="kw">lock</span>(_lk) _n++; }\n    <span class="kw">public int</span> <span class="mt">Valor</span>() { <span class="kw">lock</span>(_lk) <span class="kw">return</span> _n; }\n}\n<span class="kw">var</span> c = <span class="kw">new</span> Contador();\n<span class="kw">var</span> tasks = Enumerable.<span class="mt">Range</span>(<span class="nm">0</span>,<span class="nm">10</span>).<span class="mt">Select</span>(_ => Task.<span class="mt">Run</span>(() => c.<span class="mt">Inc</span>()));\n<span class="kw">await</span> Task.<span class="mt">WhenAll</span>(tasks);\nConsole.<span class="mt">WriteLine</span>(c.<span class="mt">Valor</span>());`,
      q: 'O que será exibido?',
      hint: '10 tasks, cada uma incrementa uma vez',
      opts: [
        { t: 'Valor entre 1-9 (race condition)', ok: false },
        { t: '10 — lock garante os 10 incrementos', ok: true },
        { t: 'Erro — lock em async', ok: false },
        { t: '0', ok: false },
      ],
      exp: 'lock garante que cada Inc() é atômico. 10 tasks × 1 incremento = 10. Sem lock, resultado seria não-determinístico.',
    },

    // Q13 — Code
    {
      type: 'code',
      bubble: 'Interlocked.Increment para contador thread-safe.',
      code: `<span class="kw">int</span> total = <span class="nm">0</span>;\n<span class="kw">var</span> ts = Enumerable.<span class="mt">Range</span>(<span class="nm">1</span>,<span class="nm">5</span>)\n    .<span class="mt">Select</span>(i => Task.<span class="mt">Run</span>(() => Interlocked.<span class="mt">Add</span>(<span class="kw">ref</span> total, i)));\n<span class="kw">await</span> Task.<span class="mt">WhenAll</span>(ts);\nConsole.<span class="mt">WriteLine</span>(total);`,
      q: 'O que será exibido?',
      hint: '1+2+3+4+5',
      opts: [
        { t: 'Valor não determinístico', ok: false },
        { t: '15', ok: true },
        { t: '5', ok: false },
        { t: 'Erro — Interlocked.Add retorna int, não void', ok: false },
      ],
      exp: 'Interlocked.Add é atômico. Cada task adiciona seu valor a total. 1+2+3+4+5=15. Resultado sempre 15 — sem race condition.',
    },

    // Q14 — Code
    {
      type: 'code',
      bubble: 'Monitor.TryEnter para lock com timeout.',
      code: `<span class="kw">var</span> recurso = <span class="kw">new</span> <span class="kw">object</span>();\n<span class="kw">if</span> (Monitor.<span class="mt">TryEnter</span>(recurso, <span class="nm">0</span>))\n{\n    <span class="kw">try</span>   { Console.<span class="mt">WriteLine</span>(<span class="st">"Obteve lock"</span>); }\n    <span class="kw">finally</span> { Monitor.<span class="mt">Exit</span>(recurso); }\n}\n<span class="kw">else</span> { Console.<span class="mt">WriteLine</span>(<span class="st">"Não obteve lock"</span>); }`,
      q: 'O que será exibido? (o recurso não está bloqueado)',
      hint: 'TryEnter com timeout 0 — tenta imediatamente',
      opts: [
        { t: 'Não obteve lock', ok: false },
        { t: 'Obteve lock', ok: true },
        { t: 'Erro — Monitor.TryEnter em objeto não inicializado', ok: false },
        { t: 'Nada', ok: false },
      ],
      exp: 'Recurso livre. TryEnter(timeout=0) tenta adquirir imediatamente. Sucesso → true → "Obteve lock". Monitor.Exit libera no finally.',
    },

    // Q15 — Code
    {
      type: 'code',
      bubble: 'ReaderWriterLockSlim — múltiplos leitores OU um escritor.',
      code: `<span class="kw">var</span> rw = <span class="kw">new</span> ReaderWriterLockSlim();\n<span class="kw">int</span> dados = <span class="nm">0</span>;\n\n<span class="kw">void</span> <span class="mt">Ler</span>() { rw.<span class="mt">EnterReadLock</span>(); <span class="kw">try</span> { Console.<span class="mt">Write</span>(dados + <span class="st">" "</span>); } <span class="kw">finally</span> { rw.<span class="mt">ExitReadLock</span>(); } }\n<span class="kw">void</span> <span class="mt">Escrever</span>(<span class="kw">int</span> v) { rw.<span class="mt">EnterWriteLock</span>(); <span class="kw">try</span> { dados = v; } <span class="kw">finally</span> { rw.<span class="mt">ExitWriteLock</span>(); } }\n\n<span class="mt">Escrever</span>(<span class="nm">42</span>);\n<span class="mt">Ler</span>(); <span class="mt">Ler</span>();`,
      q: 'O que será exibido?',
      hint: 'Dois leitores após escrever 42',
      opts: [
        { t: '0 0', ok: false },
        { t: '42 42', ok: true },
        { t: '42 0', ok: false },
        { t: 'Erro — múltiplos leitores', ok: false },
      ],
      exp: 'Escrever(42): write lock, dados=42. Ler(): read lock, imprime 42. Ler(): read lock, imprime 42. "42 42".',
    },

    // Q16 — Code
    {
      type: 'code',
      bubble: 'SemaphoreSlim como mutex assíncrono.',
      code: `<span class="kw">var</span> mutex = <span class="kw">new</span> SemaphoreSlim(<span class="nm">1</span>, <span class="nm">1</span>);\n<span class="kw">int</span> compartilhado = <span class="nm">0</span>;\n\n<span class="kw">async</span> Task <span class="mt">IncrAsync</span>()\n{\n    <span class="kw">await</span> mutex.<span class="mt">WaitAsync</span>();\n    <span class="kw">try</span>  { compartilhado++; }\n    <span class="kw">finally</span> { mutex.<span class="mt">Release</span>(); }\n}\n\n<span class="kw">await</span> Task.<span class="mt">WhenAll</span>(Enumerable.<span class="mt">Range</span>(<span class="nm">0</span>,<span class="nm">5</span>).<span class="mt">Select</span>(_ => <span class="mt">IncrAsync</span>()));\nConsole.<span class="mt">WriteLine</span>(compartilhado);`,
      q: 'O que será exibido?',
      hint: 'SemaphoreSlim(1,1) = mutex — um por vez',
      opts: [
        { t: 'Valor entre 1-4', ok: false },
        { t: '5', ok: true },
        { t: 'Erro — await dentro de lock não funciona', ok: false },
        { t: '0', ok: false },
      ],
      exp: 'SemaphoreSlim(1,1) = mutex async. WaitAsync garante exclusão. 5 incrementos atômicos = 5. lock normal não pode ser usado com await.',
    },

    // Q17 — Code
    {
      type: 'code',
      bubble: 'Lazy<T> para inicialização thread-safe.',
      code: `<span class="kw">var</span> lazySingleton = <span class="kw">new</span> Lazy&lt;<span class="kw">string</span>&gt;(() =>\n{\n    Console.<span class="mt">Write</span>(<span class="st">"Criando... "</span>);\n    <span class="kw">return</span> <span class="st">"Leon Kennedy"</span>;\n});\nConsole.<span class="mt">Write</span>(<span class="st">"Antes. "</span>);\nConsole.<span class="mt">WriteLine</span>(lazySingleton.Value);\nConsole.<span class="mt">WriteLine</span>(lazySingleton.Value);`,
      q: 'O que será exibido?',
      hint: 'Lazy cria apenas uma vez, ao acessar .Value',
      opts: [
        { t: 'Criando... Antes. Leon Kennedy Leon Kennedy', ok: false },
        { t: 'Antes. Criando... Leon Kennedy Leon Kennedy', ok: true },
        { t: 'Criando... Criando... Antes. Leon Kennedy', ok: false },
        { t: 'Antes. Leon Kennedy', ok: false },
      ],
      exp: '"Antes." primeiro. lazySingleton.Value: fábrica executada uma vez → "Criando... " + retorna "Leon Kennedy". Segunda vez: já criado → "Leon Kennedy". Criação preguiçosa e thread-safe.',
    },

    // Q18 — Code (DESAFIO CHEFE)
    {
      type: 'code',
      bubble: '🏆 DESAFIO CHEFE — Contador thread-safe com Interlocked e relatório.',
      code: `<span class="kw">int</span> total = <span class="nm">0</span>, max = <span class="nm">0</span>;\n<span class="kw">var</span> tasks = <span class="kw">new</span>[] { <span class="nm">10</span>, <span class="nm">25</span>, <span class="nm">15</span>, <span class="nm">30</span>, <span class="nm">5</span> }\n    .<span class="mt">Select</span>(dano => Task.<span class="mt">Run</span>(() =>\n    {\n        Interlocked.<span class="mt">Add</span>(<span class="kw">ref</span> total, dano);\n        <span class="kw">int</span> prev;\n        <span class="kw">do</span> { prev = max; }\n        <span class="kw">while</span> (dano > prev && Interlocked.<span class="mt">CompareExchange</span>(<span class="kw">ref</span> max, dano, prev) != prev);\n    }));\n<span class="kw">await</span> Task.<span class="mt">WhenAll</span>(tasks);\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"Total:{total} Max:{max}"</span>);`,
      q: 'O que será exibido?',
      hint: 'Total = soma de todos; Max = maior dano',
      opts: [
        { t: 'Total:85 Max:30', ok: true },
        { t: 'Total:85 Max:25', ok: false },
        { t: 'Total não determinístico', ok: false },
        { t: 'Erro — CompareExchange em loop', ok: false },
      ],
      exp: 'Total: 10+25+15+30+5=85. Max: CompareExchange CAS loop encontra o máximo = 30. "Total:85 Max:30".',
    },

  ]
};
