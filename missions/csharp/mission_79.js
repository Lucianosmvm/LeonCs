// ══════════════════════════════════════════════════════
// ACT V — A FUGA
// MISSÃO 80 — EXTRAÇÃO FINAL ⚔️
// Tema: ACT V Boss — Review completo: async, performance, modern C#, HTTP
// Tipo: Boss (18 questões) | 6 MC → 5 Fill → 7 Code
// ══════════════════════════════════════════════════════

const MISSION_79 = {
  id: 79,
  title: "MISSÃO 80 — EXTRAÇÃO FINAL ⚔️",
  icon: '🚁',
  free: false,
  desc: "O helicóptero está a 10 minutos. Leon precisa passar por todos os sistemas da fuga — async, performance, C# moderno, HTTP, Source Generators, testes. O resgate só acontece para quem sobreviver.",
  objs: [
    "Consolidar todos os tópicos do ACT V",
    "Aplicar async/await, records, performance e HTTP em conjunto",
    "Resolver problemas complexos combinando múltiplos conceitos",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Revisão: <code>await Task.WhenAll</code> vs <code>await Task.WhenAny</code>.',
      q: 'Qual a diferença entre Task.WhenAll e Task.WhenAny?',
      hint: 'Todos vs qualquer um',
      opts: [
        { t: 'WhenAll aguarda qualquer task; WhenAny aguarda todas', ok: false },
        { t: 'WhenAll aguarda todas as tasks; WhenAny aguarda a primeira a completar', ok: true },
        { t: 'São equivalentes para duas tasks', ok: false },
        { t: 'WhenAny cancela as tasks restantes automaticamente', ok: false },
      ],
      exp: 'WhenAll: todas devem completar → retorna array de resultados. WhenAny: primeira que completa → retorna aquela Task. WhenAny não cancela as outras.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Record com with expression e igualdade estrutural.',
      q: 'Dado "record Missao(string Nome, int XP)", qual afirmação é verdadeira?',
      hint: 'Igualdade por valor',
      opts: [
        { t: 'new Missao("A", 1) == new Missao("A", 1) é False (referências diferentes)', ok: false },
        { t: 'new Missao("A", 1) == new Missao("A", 1) é True (igualdade por valor)', ok: true },
        { t: 'Records não suportam ==', ok: false },
        { t: 'Records comparam apenas por Id', ok: false },
      ],
      exp: 'Records têm igualdade estrutural — comparam por valores. Duas instâncias com mesmos dados são iguais com ==.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Source Generators e AOT compatibility.',
      q: 'Por que [JsonSerializable] + JsonSerializerContext são necessários para apps AOT?',
      hint: 'AOT não pode usar Reflection',
      opts: [
        { t: 'Para serialização mais rápida apenas', ok: false },
        { t: 'AOT (NativeAOT/WASM) não suporta Reflection em runtime — código de serialização gerado em compilação', ok: true },
        { t: '[JsonSerializable] é apenas decorativo', ok: false },
        { t: 'Apenas em .NET 7+', ok: false },
      ],
      exp: 'AOT: código IL não disponível em runtime. Reflection falha. Source Generator gera serializadores específicos em compilação — zero Reflection.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'CancellationToken e cooperative cancellation.',
      q: 'Como um método assíncrono deve reagir a um CancellationToken cancelado?',
      hint: 'OperationCanceledException',
      opts: [
        { t: 'Ignorar — o token é opcional', ok: false },
        { t: 'Lançar OperationCanceledException (ou usar token.ThrowIfCancellationRequested())', ok: true },
        { t: 'Retornar default(T)', ok: false },
        { t: 'Chamar token.Cancel()', ok: false },
      ],
      exp: 'Cooperative cancellation: método verifica token.IsCancellationRequested ou chama token.ThrowIfCancellationRequested(). Lança OperationCanceledException.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'IIncrementalGenerator vs ISourceGenerator.',
      q: 'Por que IIncrementalGenerator é preferido para Source Generators?',
      hint: 'Performance do IDE com projetos grandes',
      opts: [
        { t: 'Gera código em runtime', ok: false },
        { t: 'Recalcula apenas partes que mudaram — evita lentidão do IDE em projetos grandes', ok: true },
        { t: 'É mais fácil de implementar', ok: false },
        { t: 'ISourceGenerator foi removido no .NET 7', ok: false },
      ],
      exp: 'ISourceGenerator: roda todo o pipeline a cada mudança → IDE lento. IIncrementalGenerator: cache de transformações, recalcula só o diff → IDE rápido.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'ArrayPool e pressure no GC.',
      q: 'Qual o propósito principal de ArrayPool<T>.Shared?',
      hint: 'Reutilizar buffers temporários',
      opts: [
        { t: 'Armazenar arrays permanentemente', ok: false },
        { t: 'Reutilizar buffers de curta duração — reduz alocações no heap e pressão no GC', ok: true },
        { t: 'Sincronizar acesso a arrays entre threads', ok: false },
        { t: 'Limitar o tamanho máximo de arrays', ok: false },
      ],
      exp: 'ArrayPool: Rent() → usa → Return(). Sem new[], sem GC pressure. Para buffers de encoding, parsing, network — alta frequência, vida curta.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Fazendo múltiplas requests em paralelo:',
      code: `<span class="kw">var</span> t1 = client.<span class="mt">GetStringAsync</span>(<span class="st">"url1"</span>);
<span class="kw">var</span> t2 = client.<span class="mt">GetStringAsync</span>(<span class="st">"url2"</span>);
<span class="kw">string</span>[] resultados = <span class="kw">await</span> Task.<span class="mt">_______</span>(t1, t2);`,
      q: 'Qual método Task aguarda todas as tasks em paralelo?',
      hint: 'When All',
      ans: 'WhenAll',
      exp: 'Task.WhenAll(t1, t2): ambas rodam em paralelo. Retorna string[] com resultados na mesma ordem das tasks. Mais eficiente que await sequencial.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Criando cópia de record com campo modificado:',
      code: `<span class="kw">record</span> Agente(<span class="kw">string</span> Nome, <span class="kw">int</span> HP);
<span class="kw">var</span> leon = <span class="kw">new</span> Agente(<span class="st">"Leon"</span>, <span class="nm">100</span>);
<span class="kw">var</span> ferido = leon <span class="kw">with</span> { HP = <span class="nm">_______</span> };`,
      q: 'Qual valor de HP representaria "estado crítico" (10% de 100)?',
      hint: '10% de 100',
      ans: '10',
      exp: 'leon with { HP = 10 }: cria Agente("Leon", 10). leon.HP permanece 100. with expression = non-destructive mutation.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Cancelando operação após timeout:',
      code: `<span class="kw">using var</span> cts = <span class="kw">new</span> CancellationTokenSource(<span class="tp">TimeSpan</span>.<span class="mt">FromSeconds</span>(<span class="nm">5</span>));
<span class="kw">try</span> {
    <span class="kw">await</span> client.<span class="mt">GetStringAsync</span>(url, cts.<span class="mt">_______</span>);
} <span class="kw">catch</span> (OperationCanceledException) { }`,
      q: 'Qual propriedade de CancellationTokenSource expõe o CancellationToken?',
      hint: 'Propriedade Token',
      ans: 'Token',
      exp: 'cts.Token: o CancellationToken para passar aos métodos. CancellationTokenSource(TimeSpan): auto-cancela após o tempo. cts.Token passado ao método.',
    },

    // Q10 — Fill
    {
      type: 'fill',
      bubble: 'C# 12: primary constructor em classe:',
      code: `<span class="kw">class</span> MissaoService(<span class="tp">ILogger</span> logger)
{
    <span class="kw">public void</span> <span class="mt">Log</span>(<span class="kw">string</span> msg)
        => _______.<span class="mt">LogInfo</span>(msg);
}`,
      q: 'Como referenciar o parâmetro do primary constructor no corpo da classe?',
      hint: 'O nome do parâmetro diretamente',
      ans: 'logger',
      exp: 'Primary constructor: parâmetros acessíveis diretamente no corpo da classe. "logger.LogInfo(msg)" usa o ILogger injetado. Não precisa declarar campo separado.',
    },

    // Q11 — Fill
    {
      type: 'fill',
      bubble: 'GetStringAsync com tratamento de status:',
      code: `<span class="kw">var</span> resp = <span class="kw">await</span> client.<span class="mt">GetAsync</span>(url);
resp.<span class="mt">_______</span>();
<span class="kw">var</span> json = <span class="kw">await</span> resp.Content.<span class="mt">ReadAsStringAsync</span>();`,
      q: 'Qual método lança exceção para status não-2xx?',
      hint: 'Ensure Success Status Code',
      ans: 'EnsureSuccessStatusCode',
      exp: '.EnsureSuccessStatusCode(): lança HttpRequestException se StatusCode não for 2xx. Alternativa a verificar manualmente resp.IsSuccessStatusCode.',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'WhenAll com resultados individuais.',
      code: `<span class="kw">async</span> Task&lt;<span class="kw">int</span>&gt; <span class="mt">Calcular</span>(<span class="kw">int</span> n) =>
    <span class="kw">await</span> Task.<span class="mt">FromResult</span>(n * n);

<span class="kw">var</span> resultados = <span class="kw">await</span> Task.<span class="mt">WhenAll</span>(
    <span class="mt">Calcular</span>(<span class="nm">2</span>),
    <span class="mt">Calcular</span>(<span class="nm">3</span>),
    <span class="mt">Calcular</span>(<span class="nm">4</span>)
);
Console.<span class="mt">WriteLine</span>(<span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">","</span>, resultados));`,
      q: 'O que será exibido?',
      hint: '2²=4, 3²=9, 4²=16',
      opts: [
        { t: '2,3,4', ok: false },
        { t: '4,9,16', ok: true },
        { t: '16,9,4', ok: false },
        { t: 'Ordem aleatória', ok: false },
      ],
      exp: 'WhenAll preserva ordem dos resultados. Calcular(2)=4, Calcular(3)=9, Calcular(4)=16. "4,9,16".',
    },

    // Q13 — Code
    {
      type: 'code',
      bubble: 'Record struct com with expression.',
      code: `<span class="kw">record struct</span> Arma(<span class="kw">string</span> Nome, <span class="kw">int</span> Dano, <span class="kw">bool</span> Recarregando);
<span class="kw">var</span> shotgun = <span class="kw">new</span> Arma(<span class="st">"Shotgun"</span>, <span class="nm">80</span>, <span class="kw">false</span>);
<span class="kw">var</span> reload = shotgun <span class="kw">with</span> { Recarregando = <span class="kw">true</span> };
Console.<span class="mt">WriteLine</span>(<span class="st">$"{reload.Nome} {reload.Dano} {reload.Recarregando}"</span>);`,
      q: 'O que será exibido?',
      hint: 'Nome e Dano copiados, Recarregando alterado',
      opts: [
        { t: 'Shotgun 80 False', ok: false },
        { t: 'Shotgun 80 True', ok: true },
        { t: 'Shotgun 0 True', ok: false },
        { t: 'Erro — record struct não suporta with', ok: false },
      ],
      exp: 'reload = shotgun with { Recarregando = true }. Nome="Shotgun" e Dano=80 copiados. Recarregando=true. "Shotgun 80 True".',
    },

    // Q14 — Code
    {
      type: 'code',
      bubble: 'yield return com filtragem.',
      code: `<span class="kw">static</span> IEnumerable&lt;<span class="kw">int</span>&gt; <span class="mt">Pares</span>(<span class="kw">int</span> max)
{
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">1</span>; i <= max; i++)
        <span class="kw">if</span> (i % <span class="nm">2</span> == <span class="nm">0</span>) <span class="kw">yield return</span> i;
}
Console.<span class="mt">WriteLine</span>(<span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">","</span>, <span class="mt">Pares</span>(<span class="nm">8</span>)));`,
      q: 'O que será exibido?',
      hint: 'Pares de 1 a 8',
      opts: [
        { t: '1,2,3,4,5,6,7,8', ok: false },
        { t: '2,4,6,8', ok: true },
        { t: '1,3,5,7', ok: false },
        { t: '2,4,6', ok: false },
      ],
      exp: 'Pares(8): i=1(ímpar), i=2(yield 2), i=3(ímpar), i=4(yield 4), i=6(yield 6), i=8(yield 8). "2,4,6,8".',
    },

    // Q15 — Code
    {
      type: 'code',
      bubble: 'Span<T> para slice sem alocação.',
      code: `<span class="kw">int</span>[] array = { <span class="nm">10</span>, <span class="nm">20</span>, <span class="nm">30</span>, <span class="nm">40</span>, <span class="nm">50</span> };
Span&lt;<span class="kw">int</span>&gt; span = array.<span class="mt">AsSpan</span>(<span class="nm">1</span>, <span class="nm">3</span>);
<span class="kw">int</span> soma = <span class="nm">0</span>;
<span class="kw">foreach</span> (<span class="kw">var</span> n <span class="kw">in</span> span) soma += n;
Console.<span class="mt">WriteLine</span>(soma);`,
      q: 'O que será exibido?',
      hint: 'AsSpan(1,3) = índice 1 por 3 elementos',
      opts: [
        { t: '100', ok: false },
        { t: '60', ok: false },
        { t: '90', ok: true },
        { t: '50', ok: false },
      ],
      exp: 'AsSpan(1,3): começa no índice 1, 3 elementos = {20,30,40}. Soma=90. "90".',
    },

    // Q16 — Code
    {
      type: 'code',
      bubble: 'LINQ com GroupBy e Count.',
      code: `<span class="kw">string</span>[] missoes = { <span class="st">"A"</span>, <span class="st">"B"</span>, <span class="st">"A"</span>, <span class="st">"C"</span>, <span class="st">"A"</span>, <span class="st">"B"</span> };
<span class="kw">var</span> grupos = missoes
    .<span class="mt">GroupBy</span>(m => m)
    .<span class="mt">Select</span>(g => <span class="st">$"{g.Key}:{g.Count()}"</span>)
    .<span class="mt">OrderBy</span>(s => s);
Console.<span class="mt">WriteLine</span>(<span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">","</span>, grupos));`,
      q: 'O que será exibido?',
      hint: 'A aparece 3x, B 2x, C 1x',
      opts: [
        { t: 'A:3,B:2,C:1', ok: true },
        { t: 'C:1,B:2,A:3', ok: false },
        { t: 'A,B,C', ok: false },
        { t: '3,2,1', ok: false },
      ],
      exp: 'GroupBy agrupa: A→3, B→2, C→1. Select formata. OrderBy alfabético: "A:3,B:2,C:1".',
    },

    // Q17 — Code
    {
      type: 'code',
      bubble: 'C# 12 collection expressions.',
      code: `<span class="kw">int</span>[] a = [<span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span>];
<span class="kw">int</span>[] b = [<span class="nm">4</span>, <span class="nm">5</span>];
<span class="kw">int</span>[] c = [..a, ..b];
Console.<span class="mt">WriteLine</span>(c.<span class="mt">Length</span>);
Console.<span class="mt">WriteLine</span>(c[<span class="nm">3</span>]);`,
      q: 'O que será exibido?',
      hint: 'Spread operator .. combina arrays',
      opts: [
        { t: '5 e 4', ok: true },
        { t: '2 e 4', ok: false },
        { t: '5 e 5', ok: false },
        { t: 'Erro — collection expressions', ok: false },
      ],
      exp: '[..a, ..b] = [1,2,3,4,5]. Length=5. c[3]=4 (índice 3 = quarto elemento). "5" e "4".',
    },

    // Q18 — Code
    {
      type: 'code',
      bubble: 'CancellationToken já cancelado.',
      code: `<span class="kw">var</span> cts = <span class="kw">new</span> CancellationTokenSource();
cts.<span class="mt">Cancel</span>();
<span class="kw">try</span> {
    cts.Token.<span class="mt">ThrowIfCancellationRequested</span>();
    Console.<span class="mt">WriteLine</span>(<span class="st">"Continuou"</span>);
} <span class="kw">catch</span> (OperationCanceledException) {
    Console.<span class="mt">WriteLine</span>(<span class="st">"Cancelado"</span>);
}`,
      q: 'O que será exibido?',
      hint: 'Token já cancelado antes de ThrowIfCancellationRequested',
      opts: [
        { t: 'Continuou', ok: false },
        { t: 'Cancelado', ok: true },
        { t: 'Continuou e Cancelado', ok: false },
        { t: 'Nenhuma saída — exceção não tratada', ok: false },
      ],
      exp: 'cts.Cancel() → token cancelado. ThrowIfCancellationRequested() lança OperationCanceledException imediatamente. Catch captura → "Cancelado".',
    },

  ]
};
