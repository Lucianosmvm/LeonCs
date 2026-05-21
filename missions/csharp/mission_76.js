// ══════════════════════════════════════════════════════
// ACT V — A FUGA
// MISSÃO 77 — MEMÓRIA DO SISTEMA
// Tema: Memory management — GC, finalizers, WeakReference, object pooling
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_76 = {
  id: 76,
  title: "MISSÃO 77 — MEMÓRIA DO SISTEMA",
  icon: '🧠',
  free: false,
  desc: "Cada recurso alocado é uma carga que pode travar a fuga. Leon precisa entender como o .NET gerencia memória — o que o GC coleta, o que escapa e como liberar recursos com precisão.",
  objs: [
    "Entender as gerações do Garbage Collector",
    "Usar WeakReference para caches sem prevenir coleta",
    "Identificar memory leaks comuns em C#",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'O GC do .NET tem 3 gerações: <strong>Gen 0</strong> (objetos novos), <strong>Gen 1</strong> (sobreviventes de Gen 0), <strong>Gen 2</strong> (objetos de longa vida). Coletas de Gen 0 são baratas.',
      q: 'Por que objetos de curta duração (como variáveis locais) são eficientes no GC?',
      hint: 'Gen 0 é coletado com frequência e rapidez',
      opts: [
        { t: 'Não são coletados pelo GC', ok: false },
        { t: 'Morrem em Gen 0 — coleta rápida e frequente sem promover para Gen 1 ou 2', ok: true },
        { t: 'São armazenados no stack e nunca precisam de GC', ok: false },
        { t: 'O GC ignora objetos pequenos', ok: false },
      ],
      exp: 'Gen 0: coletada com frequência (~100x mais que Gen 2). Objeto nasce em Gen 0, se sobrevive → Gen 1 → Gen 2. Objetos de vida curta morrem em Gen 0 — barato.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>WeakReference&lt;T&gt;</code> referencia um objeto sem prevenir sua coleta pelo GC. Útil para caches onde você quer "se ainda existir, use; senão, recrie".',
      q: 'Qual o cenário ideal para WeakReference<T>?',
      hint: 'Cache que não impede GC',
      opts: [
        { t: 'Objetos que nunca devem ser coletados', ok: false },
        { t: 'Cache de objetos caros onde o GC pode coletar se necessário — TryGetTarget para verificar', ok: true },
        { t: 'Substituir referências normais em todos os casos', ok: false },
        { t: 'Sincronização entre threads', ok: false },
      ],
      exp: 'WeakReference<T>: se GC precisar de memória, coleta o objeto. Cache: try { wr.TryGetTarget(out var obj) } catch. Se falhou → recria.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Memory leak clássico em C#: <strong>event handlers não removidos</strong>. Se um objeto longo (publisher) tem evento assinado por objeto curto (subscriber), o publisher mantém referência ao subscriber vivo.',
      q: 'Como evitar memory leak com eventos em C#?',
      hint: 'Remover assinatura quando não mais necessário',
      opts: [
        { t: 'Usar static events', ok: false },
        { t: 'Remover handlers com -= quando o subscriber for descartado', ok: true },
        { t: 'Apenas usar Action em vez de event', ok: false },
        { t: 'Events não causam memory leaks', ok: false },
      ],
      exp: 'Publisher → subscriber via evento = referência forte. Se publisher dura mais que subscriber, subscriber nunca é coletado. Solução: -= no Dispose ou usar WeakEventManager.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<strong>LOH</strong> (Large Object Heap) armazena objetos ≥ 85.000 bytes. Coletado apenas em Gen 2 (caro!) e pode causar fragmentação.',
      q: 'Por que alocar arrays grandes frequentemente pode prejudicar performance?',
      hint: 'LOH e Gen 2',
      opts: [
        { t: 'Arrays grandes são armazenados no stack e transbordam', ok: false },
        { t: 'Vão para LOH — coletados só com Gen 2, caro e pode fragmentar memória', ok: true },
        { t: 'Arrays não são gerenciados pelo GC', ok: false },
        { t: 'O limite de array é 85 bytes', ok: false },
      ],
      exp: 'Array ≥ 85KB → LOH. Gen 2 / LOH collection: stop-the-world mais longa. Fragmentação (LOH não compacta por padrão). Use ArrayPool para buffers grandes reutilizáveis.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Usando WeakReference para cache:',
      code: `<span class="kw">var</span> wr = <span class="kw">new</span> WeakReference&lt;Mapa&gt;(<span class="kw">new</span> Mapa());
<span class="kw">if</span> (wr.<span class="mt">_______</span>(<span class="kw">out var</span> mapa))
    Console.<span class="mt">WriteLine</span>(<span class="st">"Cache hit"</span>);
<span class="kw">else</span>
    Console.<span class="mt">WriteLine</span>(<span class="st">"Recarregar"</span>);`,
      q: 'Qual método tenta obter o alvo da WeakReference?',
      hint: 'Try Get Target',
      ans: 'TryGetTarget',
      exp: '.TryGetTarget(out T target): retorna true e preenche target se objeto ainda não foi coletado. false se GC já coletou.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Forçando GC para benchmark (uso controlado):',
      code: `GC.<span class="mt">_______</span>();
GC.<span class="mt">WaitForPendingFinalizers</span>();
GC.<span class="mt">Collect</span>();
<span class="cm">// Agora medir alocações limpas</span>`,
      q: 'Qual método GC força coleta de todas as gerações?',
      hint: 'Collect sem parâmetro',
      ans: 'Collect',
      exp: 'GC.Collect(): coleta todas as gerações. Para benchmark: Collect() → WaitForPendingFinalizers() → Collect() novamente para estado limpo.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Verificando geração de um objeto:',
      code: `<span class="kw">var</span> obj = <span class="kw">new</span> <span class="tp">object</span>();
<span class="kw">int</span> gen = GC.<span class="mt">_______</span>(obj);
Console.<span class="mt">WriteLine</span>(gen); <span class="cm">// 0 logo após criação</span>`,
      q: 'Qual método retorna a geração atual de um objeto?',
      hint: 'Get Generation',
      ans: 'GetGeneration',
      exp: 'GC.GetGeneration(obj): retorna 0, 1 ou 2. Novo objeto = 0. Após sobreviver a coletas: promovido. Útil para debugging de GC.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'Geração de objetos no GC.',
      code: `<span class="kw">var</span> obj = <span class="kw">new</span> <span class="tp">object</span>();
Console.<span class="mt">WriteLine</span>(GC.<span class="mt">GetGeneration</span>(obj));
GC.<span class="mt">Collect</span>(<span class="nm">0</span>);
Console.<span class="mt">WriteLine</span>(GC.<span class="mt">GetGeneration</span>(obj));`,
      q: 'O que será exibido após criar objeto e coletar Gen 0?',
      hint: 'Sobrevive a Gen 0 → promovido para Gen 1',
      opts: [
        { t: '0 e 0', ok: false },
        { t: '0 e 1', ok: true },
        { t: '1 e 2', ok: false },
        { t: '0 e 2', ok: false },
      ],
      exp: 'Novo objeto: Gen 0. GC.Collect(0) coleta Gen 0 — obj ainda referenciado, sobrevive → promovido para Gen 1. "0" e "1".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'WeakReference — objeto coletado.',
      code: `WeakReference&lt;<span class="tp">object</span>&gt; wr;
{
    <span class="kw">var</span> obj = <span class="kw">new</span> <span class="tp">object</span>();
    wr = <span class="kw">new</span> WeakReference&lt;<span class="tp">object</span>&gt;(obj);
} <span class="cm">// obj sai de escopo</span>
GC.<span class="mt">Collect</span>();
Console.<span class="mt">WriteLine</span>(wr.<span class="mt">TryGetTarget</span>(<span class="kw">out</span> _));`,
      q: 'O que será exibido?',
      hint: 'obj sem referência forte → GC pode coletar',
      opts: [
        { t: 'True', ok: false },
        { t: 'False', ok: true },
        { t: 'Erro — WeakReference inválida', ok: false },
        { t: 'Resultado não determinístico', ok: false },
      ],
      exp: 'obj sai de escopo → sem referência forte. GC.Collect() coleta. TryGetTarget retorna false — objeto coletado. "False".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'IDisposable e finalizer — ordem de limpeza.',
      code: `<span class="kw">class</span> Recurso : IDisposable
{
    ~Recurso() => Console.<span class="mt">Write</span>(<span class="st">"F "</span>);
    <span class="kw">public void</span> <span class="mt">Dispose</span>()
    {
        Console.<span class="mt">Write</span>(<span class="st">"D "</span>);
        GC.<span class="mt">SuppressFinalize</span>(<span class="kw">this</span>);
    }
}
<span class="kw">using</span> (<span class="kw">var</span> r = <span class="kw">new</span> Recurso()) { }
Console.<span class="mt">Write</span>(<span class="st">"X"</span>);`,
      q: 'O que será exibido?',
      hint: 'SuppressFinalize evita o finalizer após Dispose',
      opts: [
        { t: 'F D X', ok: false },
        { t: 'D X', ok: true },
        { t: 'D F X', ok: false },
        { t: 'X', ok: false },
      ],
      exp: 'using → Dispose() chamado: "D ". SuppressFinalize cancela o finalizer (~Recurso). "F" não aparece. Depois "X". Resultado: "D X".',
    },

  ]
};
