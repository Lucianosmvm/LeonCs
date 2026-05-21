// ══════════════════════════════════════════════════════
// EPÍLOGO — O LEGADO
// MISSÃO 95 — SISTEMA NERVOSO
// Tema: Reactive Extensions (Rx.NET) — IObservable, Subject, operators
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_94 = {
  id: 94,
  title: "MISSÃO 95 — SISTEMA NERVOSO",
  icon: '⚡',
  free: false,
  desc: "O sistema nervoso da operação — fluxos reativos de dados. Reactive Extensions (Rx.NET) transforma eventos e dados assíncronos em streams composáveis, como o sistema nervoso central que coordena todas as ações de Leon.",
  objs: [
    "Entender IObservable<T> e IObserver<T>",
    "Usar Subject<T> para criar streams manualmente",
    "Aplicar operadores Rx como Where, Select, Throttle",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>Reactive Extensions</strong>: <code>IObservable&lt;T&gt;</code> é um stream de dados ao longo do tempo. Você se inscreve (<code>Subscribe</code>) e recebe: OnNext (dado), OnError (erro), OnCompleted (fim).',
      q: 'Qual a diferença entre IEnumerable<T> e IObservable<T>?',
      hint: 'Pull vs push',
      opts: [
        { t: 'São equivalentes — ambos iteram sequências', ok: false },
        { t: 'IEnumerable: pull (você pede dados). IObservable: push (dados chegam a você quando disponíveis)', ok: true },
        { t: 'IObservable só funciona com tipos primitivos', ok: false },
        { t: 'IEnumerable é mais rápido', ok: false },
      ],
      exp: 'IEnumerable: foreach "puxa" dados. IObservable: dados são "empurrados" quando disponíveis — eventos, sensores, WebSockets. Dual de IEnumerable (teoria das categorias).',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>Subject&lt;T&gt;</code> é tanto IObservable quanto IObserver — permite emitir valores manualmente enquanto outros observam.',
      q: 'Como Subject<T> é usado para conectar produtor e consumidor?',
      hint: 'Implementa ambas as interfaces',
      opts: [
        { t: 'Subject é apenas para debugging', ok: false },
        { t: 'Subject implementa IObservable e IObserver — produtor chama OnNext, consumidores se subscrevem ao Subject', ok: true },
        { t: 'Subject é equivalente a Task<T>', ok: false },
        { t: 'Subject apenas filtra streams existentes', ok: false },
      ],
      exp: 'var subject = new Subject<int>(). Consumidor: subject.Subscribe(n => ...). Produtor: subject.OnNext(42). subject é o "hub" que distribui valores.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>Throttle</code> suprime valores emitidos muito rapidamente — só emite se não houve novo valor por X milissegundos. Ideal para search-as-you-type.',
      q: 'Para implementar "busca ao digitar" com 300ms de debounce, qual operador Rx usar?',
      hint: 'Suprimir valores frequentes',
      opts: [
        { t: 'Sample — pega um valor por intervalo', ok: false },
        { t: 'Throttle (ou Debounce) — emite após X ms sem novos valores', ok: true },
        { t: 'Buffer — coleta em lotes', ok: false },
        { t: 'Delay — atrasa todos os valores', ok: false },
      ],
      exp: 'keystrokes.Throttle(TimeSpan.FromMilliseconds(300)): só emite se usuário parou de digitar por 300ms. Sem Throttle: busca a cada tecla = muitas requests.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>Observable.Interval</code> emite valores crescentes em intervalos regulares — como um timer reativo.',
      q: 'Qual a diferença entre Observable.Timer e Observable.Interval?',
      hint: 'Uma vez vs repetido',
      opts: [
        { t: 'São equivalentes', ok: false },
        { t: 'Timer: emite uma vez após delay. Interval: emite repetidamente em intervalos regulares', ok: true },
        { t: 'Interval é mais preciso que Timer', ok: false },
        { t: 'Timer é para UI e Interval para background', ok: false },
      ],
      exp: 'Timer(TimeSpan.FromSeconds(1)): emite 0 após 1s, depois para. Interval(TimeSpan.FromSeconds(1)): emite 0,1,2,3... a cada 1s indefinidamente.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Criando observable de array:',
      code: `<span class="kw">var</span> observable = <span class="kw">new</span>[] { <span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span> }
    .<span class="mt">_______</span>();`,
      q: 'Qual método de extensão converte IEnumerable para IObservable?',
      hint: 'To Observable',
      ans: 'ToObservable',
      exp: '.ToObservable(): IEnumerable → IObservable. Emite cada elemento como OnNext, depois OnCompleted. Contrário: .ToArray(), .ToList() materializam IObservable.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Inscrevendo-se em um observable:',
      code: `observable.<span class="mt">_______</span>(
    onNext: v => Console.<span class="mt">WriteLine</span>(v),
    onError: e => Console.<span class="mt">WriteLine</span>(e),
    onCompleted: () => Console.<span class="mt">WriteLine</span>(<span class="st">"Done"</span>));`,
      q: 'Qual método registra os handlers do observable?',
      hint: 'Subscribe',
      ans: 'Subscribe',
      exp: '.Subscribe(onNext, onError, onCompleted): registra handlers. Retorna IDisposable — Dispose() para cancelar assinatura e evitar memory leak.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Subject emitindo valores:',
      code: `<span class="kw">var</span> subject = <span class="kw">new</span> Subject&lt;<span class="kw">int</span>&gt;();
subject.<span class="mt">Subscribe</span>(n => Console.<span class="mt">Write</span>(n + <span class="st">" "</span>));
subject.<span class="mt">_______</span>(<span class="nm">10</span>);
subject.<span class="mt">OnNext</span>(<span class="nm">20</span>);
subject.<span class="mt">OnCompleted</span>();`,
      q: 'Qual método emite um valor para todos os subscribers?',
      hint: 'On Next',
      ans: 'OnNext',
      exp: 'subject.OnNext(value): emite para todos inscritos. OnError: sinaliza erro. OnCompleted: sinaliza fim do stream. Após OnCompleted, novos OnNext são ignorados.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'Observable pipeline com Where e Select.',
      code: `<span class="kw">var</span> resultados = <span class="kw">new</span> List&lt;<span class="kw">string</span>&gt;();
<span class="kw">var</span> obs = <span class="kw">new</span>[] { <span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span>, <span class="nm">4</span>, <span class="nm">5</span> }
    .<span class="mt">ToObservable</span>()
    .<span class="mt">Where</span>(n => n % <span class="nm">2</span> == <span class="nm">0</span>)
    .<span class="mt">Select</span>(n => <span class="st">$"par:{n}"</span>);
obs.<span class="mt">Subscribe</span>(s => resultados.<span class="mt">Add</span>(s));
Console.<span class="mt">WriteLine</span>(<span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">","</span>, resultados));`,
      q: 'O que será exibido?',
      hint: 'Pares: 2 e 4',
      opts: [
        { t: 'par:2,par:4', ok: true },
        { t: 'par:1,par:3,par:5', ok: false },
        { t: '2,4', ok: false },
        { t: 'Erro — ToObservable', ok: false },
      ],
      exp: 'Where filtra pares: 2,4. Select mapeia: "par:2", "par:4". Subscribe adiciona ao log. "par:2,par:4".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Subject<T> como event bus.',
      code: `<span class="kw">var</span> bus = <span class="kw">new</span> Subject&lt;<span class="kw">string</span>&gt;();
<span class="kw">var</span> log = <span class="kw">new</span> List&lt;<span class="kw">string</span>&gt;();
<span class="kw">using</span> <span class="kw">var</span> sub = bus.<span class="mt">Subscribe</span>(msg => log.<span class="mt">Add</span>(msg));
bus.<span class="mt">OnNext</span>(<span class="st">"Alerta"</span>);
bus.<span class="mt">OnNext</span>(<span class="st">"Missão"</span>);
sub.<span class="mt">Dispose</span>(); <span class="cm">// cancela assinatura</span>
bus.<span class="mt">OnNext</span>(<span class="st">"Ignorado"</span>);
Console.<span class="mt">WriteLine</span>(log.<span class="mt">Count</span>);`,
      q: 'O que será exibido?',
      hint: 'Dispose cancela após 2 mensagens',
      opts: [
        { t: '3', ok: false },
        { t: '2', ok: true },
        { t: '1', ok: false },
        { t: '0', ok: false },
      ],
      exp: 'Subscribe: log adiciona mensagens. OnNext("Alerta") e OnNext("Missão"): log.Count=2. sub.Dispose(): desinscreve. OnNext("Ignorado"): ignorado. "2".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Merge de dois observables.',
      code: `<span class="kw">var</span> obs1 = <span class="kw">new</span>[] { <span class="nm">1</span>, <span class="nm">3</span> }.<span class="mt">ToObservable</span>();
<span class="kw">var</span> obs2 = <span class="kw">new</span>[] { <span class="nm">2</span>, <span class="nm">4</span> }.<span class="mt">ToObservable</span>();
<span class="kw">var</span> merged = obs1.<span class="mt">Merge</span>(obs2);
<span class="kw">var</span> resultado = <span class="kw">new</span> List&lt;<span class="kw">int</span>&gt;();
merged.<span class="mt">Subscribe</span>(n => resultado.<span class="mt">Add</span>(n));
Console.<span class="mt">WriteLine</span>(resultado.<span class="mt">Sum</span>());`,
      q: 'O que será exibido?',
      hint: 'Merge intercala, soma deve ser 1+2+3+4',
      opts: [
        { t: '4', ok: false },
        { t: '10', ok: true },
        { t: '6', ok: false },
        { t: 'Resultado não determinístico', ok: false },
      ],
      exp: 'Merge combina obs1 e obs2. Todos os elementos de ambos são emitidos. Sum = 1+3+2+4 = 10 (soma independe da ordem). "10".',
    },

  ]
};
