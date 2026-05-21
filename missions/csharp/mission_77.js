// ══════════════════════════════════════════════════════
// ACT V — A FUGA
// MISSÃO 78 — CANAIS DE COMUNICAÇÃO
// Tema: Channels, Pipelines, Producer-Consumer pattern
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_77 = {
  id: 77,
  title: "MISSÃO 78 — CANAIS DE COMUNICAÇÃO",
  icon: '📡',
  free: false,
  desc: "A fuga exige coordenação em tempo real — dados fluindo entre produtores e consumidores sem bloqueios. System.Threading.Channels é o rádio digital que mantém Leon conectado com a equipe durante a operação.",
  objs: [
    "Criar e usar Channel<T> para comunicação assíncrona",
    "Implementar o padrão Producer-Consumer",
    "Usar ChannelReader e ChannelWriter separadamente",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<code>Channel&lt;T&gt;</code> (System.Threading.Channels) é uma estrutura de dados assíncrona thread-safe para comunicação entre produtores e consumidores. Substitui BlockingCollection em cenários async.',
      q: 'Qual a vantagem de Channel<T> sobre BlockingCollection<T> em código async?',
      hint: 'Async vs blocking',
      opts: [
        { t: 'Channel é mais simples de usar', ok: false },
        { t: 'Channel.Writer.WriteAsync e Reader.ReadAsync são verdadeiramente assíncronos — não bloqueiam threads', ok: true },
        { t: 'BlockingCollection não é thread-safe', ok: false },
        { t: 'Channel suporta mais tipos', ok: false },
      ],
      exp: 'BlockingCollection: bloqueia a thread. Channel: WriteAsync/ReadAsync liberam a thread enquanto aguardam. Perfeito para async/await pipelines.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>Channel.CreateBounded&lt;T&gt;(capacidade)</code> limita quantos itens podem estar no canal. Produtor aguarda quando canal cheio — backpressure natural.',
      q: 'Quando usar Channel.CreateBounded vs Channel.CreateUnbounded?',
      hint: 'Controle de pressão',
      opts: [
        { t: 'Sempre usar Unbounded para máxima performance', ok: false },
        { t: 'Bounded quando o produtor pode ser mais rápido que o consumidor — evita consumo ilimitado de memória', ok: true },
        { t: 'Bounded é mais rápido que Unbounded', ok: false },
        { t: 'Unbounded não é thread-safe', ok: false },
      ],
      exp: 'Unbounded: sem limite — risco de OOM se produtor rápido. Bounded(N): produtor bloqueia/aguarda quando N itens no canal → backpressure. Escolha baseada no domínio.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>ChannelReader&lt;T&gt;.ReadAllAsync()</code> retorna IAsyncEnumerable — permite iterar com <code>await foreach</code> até o canal ser completado.',
      q: 'Como iterar todos os itens de um ChannelReader de forma assíncrona?',
      hint: 'await foreach',
      opts: [
        { t: 'while (reader.Count > 0) await reader.ReadAsync()', ok: false },
        { t: 'await foreach (var item in reader.ReadAllAsync())', ok: true },
        { t: 'reader.ToList()', ok: false },
        { t: 'Task.Run(() => reader.ForEach(...))', ok: false },
      ],
      exp: 'ReadAllAsync(): IAsyncEnumerable<T> — itera assincronamente até Writer.Complete() ser chamado. await foreach suspende sem bloquear thread.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Para completar um canal, o <strong>produtor</strong> chama <code>writer.Complete()</code>. O consumidor sabe que não chegará mais dados quando ReadAllAsync termina.',
      q: 'O que acontece se o consumidor chamar ReadAllAsync sem o produtor chamar Complete()?',
      hint: 'Esperará indefinidamente',
      opts: [
        { t: 'Lança exceção após timeout', ok: false },
        { t: 'O await foreach aguarda indefinidamente novos itens — nunca termina naturalmente', ok: true },
        { t: 'Retorna imediatamente com coleção vazia', ok: false },
        { t: 'Cancela automaticamente após 30 segundos', ok: false },
      ],
      exp: 'ReadAllAsync aguarda mais itens. Sem Complete() → loop infinito aguardando. Sempre chame writer.Complete() (no finally do produtor).',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Criando um channel não limitado:',
      code: `<span class="kw">var</span> channel = Channel.<span class="mt">_______</span>&lt;<span class="kw">string</span>&gt;();
<span class="kw">var</span> writer = channel.Writer;
<span class="kw">var</span> reader = channel.Reader;`,
      q: 'Qual método cria um channel sem limite de capacidade?',
      hint: 'Create + Unbounded',
      ans: 'CreateUnbounded',
      exp: 'Channel.CreateUnbounded<T>(): sem limite. Channel.CreateBounded<T>(N): máximo N itens. Ambos retornam Channel<T> com .Writer e .Reader.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Escrevendo no canal de forma assíncrona:',
      code: `<span class="kw">await</span> writer.<span class="mt">_______</span>(<span class="st">"Dado da missão"</span>);
writer.<span class="mt">Complete</span>(); <span class="cm">// Sinaliza fim da produção</span>`,
      q: 'Qual método escreve um item no canal de forma assíncrona?',
      hint: 'Write + Async',
      ans: 'WriteAsync',
      exp: 'writer.WriteAsync(item): aguarda espaço (bounded) ou escreve imediatamente (unbounded). writer.TryWrite(item): tenta sincrônico, retorna bool.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Lendo um item do canal de forma assíncrona:',
      code: `<span class="kw">var</span> item = <span class="kw">await</span> reader.<span class="mt">_______</span>();
Console.<span class="mt">WriteLine</span>(item);`,
      q: 'Qual método lê um único item do channel de forma assíncrona?',
      hint: 'Read + Async',
      ans: 'ReadAsync',
      exp: 'reader.ReadAsync(): aguarda item disponível. reader.TryRead(out T item): tenta sincrônico, retorna bool. Para todos os itens: await foreach em ReadAllAsync().',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'Channel básico producer-consumer.',
      code: `<span class="kw">var</span> ch = Channel.CreateUnbounded&lt;<span class="kw">int</span>&gt;();
<span class="kw">await</span> ch.Writer.<span class="mt">WriteAsync</span>(<span class="nm">10</span>);
<span class="kw">await</span> ch.Writer.<span class="mt">WriteAsync</span>(<span class="nm">20</span>);
ch.Writer.<span class="mt">Complete</span>();
<span class="kw">int</span> soma = <span class="nm">0</span>;
<span class="kw">await foreach</span> (<span class="kw">var</span> n <span class="kw">in</span> ch.Reader.<span class="mt">ReadAllAsync</span>())
    soma += n;
Console.<span class="mt">WriteLine</span>(soma);`,
      q: 'O que será exibido?',
      hint: '10 + 20',
      opts: [
        { t: '10', ok: false },
        { t: '20', ok: false },
        { t: '30', ok: true },
        { t: 'Erro — Channel não inicializado', ok: false },
      ],
      exp: 'Escrevemos 10 e 20. Complete() sinaliza fim. ReadAllAsync itera: soma = 10+20 = 30. "30".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'TryRead para leitura não bloqueante.',
      code: `<span class="kw">var</span> ch = Channel.CreateUnbounded&lt;<span class="kw">string</span>&gt;();
ch.Writer.<span class="mt">TryWrite</span>(<span class="st">"Alpha"</span>);
<span class="kw">if</span> (ch.Reader.<span class="mt">TryRead</span>(<span class="kw">out var</span> item))
    Console.<span class="mt">WriteLine</span>(item);
<span class="kw">if</span> (ch.Reader.<span class="mt">TryRead</span>(<span class="kw">out var</span> item2))
    Console.<span class="mt">WriteLine</span>(item2);
<span class="kw">else</span>
    Console.<span class="mt">WriteLine</span>(<span class="st">"Vazio"</span>);`,
      q: 'O que será exibido?',
      hint: 'Primeiro TryRead OK, segundo falha',
      opts: [
        { t: 'Alpha e Alpha', ok: false },
        { t: 'Alpha e Vazio', ok: true },
        { t: 'Vazio e Vazio', ok: false },
        { t: 'Erro — TryRead em canal não completado', ok: false },
      ],
      exp: 'TryWrite("Alpha") OK. Primeiro TryRead: item="Alpha" → true → imprime "Alpha". Segundo TryRead: canal vazio → false → "Vazio". "Alpha" e "Vazio".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Channel bounded com backpressure.',
      code: `<span class="kw">var</span> opts = <span class="kw">new</span> BoundedChannelOptions(<span class="nm">2</span>)
    { FullMode = BoundedChannelFullMode.DropNewest };
<span class="kw">var</span> ch = Channel.CreateBounded&lt;<span class="kw">int</span>&gt;(opts);
ch.Writer.<span class="mt">TryWrite</span>(<span class="nm">1</span>);
ch.Writer.<span class="mt">TryWrite</span>(<span class="nm">2</span>);
ch.Writer.<span class="mt">TryWrite</span>(<span class="nm">3</span>); <span class="cm">// Canal cheio!</span>
ch.Writer.<span class="mt">Complete</span>();
<span class="kw">await foreach</span> (<span class="kw">var</span> n <span class="kw">in</span> ch.Reader.<span class="mt">ReadAllAsync</span>())
    Console.<span class="mt">Write</span>(n + <span class="st">" "</span>);`,
      q: 'O que será exibido? (DropNewest descarta o item mais recente quando cheio)',
      hint: 'Canal de capacidade 2: 3 é descartado',
      opts: [
        { t: '1 2 3', ok: false },
        { t: '1 2', ok: true },
        { t: '2 3', ok: false },
        { t: '1 3', ok: false },
      ],
      exp: 'Capacidade 2. TryWrite(1)→OK, TryWrite(2)→OK, TryWrite(3)→canal cheio, DropNewest descarta 3. Leitura: 1 e 2. "1 2 ".',
    },

  ]
};
