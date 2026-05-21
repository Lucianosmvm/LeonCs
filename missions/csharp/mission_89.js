// ══════════════════════════════════════════════════════
// EPÍLOGO — O LEGADO
// MISSÃO 90 — ENGENHARIA DE RESILIÊNCIA
// Tema: Polly, resilience patterns — retry, circuit breaker, timeout
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_89 = {
  id: 89,
  title: "MISSÃO 90 — ENGENHARIA DE RESILIÊNCIA",
  icon: '🛡️',
  free: false,
  desc: "Depois do confronto final, Leon entende: sistemas resilientes são mais duráveis que os mais fortes. Polly e os patterns de resiliência do .NET — retry, circuit breaker, timeout — para código que sobrevive a falhas.",
  objs: [
    "Implementar retry com backoff exponencial",
    "Usar circuit breaker para prevenir cascade failures",
    "Aplicar timeout e fallback em operações críticas",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>Retry Pattern</strong>: retentar operações que falham devido a falhas transientes (rede temporária, sobrecarga momentânea). Com backoff exponencial para não sobrecarregar o serviço.',
      q: 'O que é backoff exponencial em retry?',
      hint: 'Espera crescente entre tentativas',
      opts: [
        { t: 'Retentar sempre imediatamente', ok: false },
        { t: 'Aumentar o tempo de espera entre tentativas exponencialmente — evita sobrecarregar serviço em recuperação', ok: true },
        { t: 'Reduzir o timeout a cada tentativa', ok: false },
        { t: 'Tentar número exponencial de vezes', ok: false },
      ],
      exp: 'Backoff exponencial: 1s, 2s, 4s, 8s... entre tentativas. Evita "thundering herd" — muitos clientes retentando ao mesmo tempo. Com jitter (variação aleatória): ainda melhor.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<strong>Circuit Breaker Pattern</strong>: após N falhas consecutivas, o circuito "abre" e rejeita chamadas imediatamente por um período — dá ao serviço downstream tempo para recuperar.',
      q: 'Quais são os três estados do circuit breaker?',
      hint: 'Fechado, aberto, half-open',
      opts: [
        { t: 'Online, offline, reiniciando', ok: false },
        { t: 'Closed (operando), Open (rejeitando), Half-Open (testando recuperação)', ok: true },
        { t: 'Ativo, inativo, pausado', ok: false },
        { t: 'Verde, amarelo, vermelho', ok: false },
      ],
      exp: 'Closed: operação normal. Open: circuito aberto, rejeita chamadas. Half-Open: após timeout, tenta uma chamada de teste — se sucesso volta a Closed, se falha volta a Open.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<strong>Polly</strong> (.NET) é a biblioteca padrão para resiliência — policies para retry, circuit breaker, timeout, bulkhead, fallback. Integrado com IHttpClientFactory.',
      q: 'Como integrar Polly com IHttpClientFactory no ASP.NET Core?',
      hint: 'AddHttpClient + AddPolicyHandler',
      opts: [
        { t: 'Usar HttpClient manualmente com try/catch', ok: false },
        { t: 'builder.Services.AddHttpClient("nome").AddPolicyHandler(policy)', ok: true },
        { t: 'Herdar de HttpClient e sobrescrever métodos', ok: false },
        { t: 'Polly não se integra com IHttpClientFactory', ok: false },
      ],
      exp: 'AddHttpClient("api").AddPolicyHandler(GetRetryPolicy()): Polly policy aplicada automaticamente a cada request. GetRetryPolicy(): Policy.Handle<HttpRequestException>().WaitAndRetryAsync(3, ...).',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<strong>Fallback Pattern</strong>: quando uma operação falha definitivamente (após retries, circuito aberto), retorna um valor padrão ou executa ação alternativa.',
      q: 'Qual o propósito do Fallback em patterns de resiliência?',
      hint: 'Graceful degradation',
      opts: [
        { t: 'Impedir qualquer falha', ok: false },
        { t: 'Fornecer resposta alternativa quando a operação principal falha — degradação graciosa', ok: true },
        { t: 'Logar erros automaticamente', ok: false },
        { t: 'Cancelar operações pendentes', ok: false },
      ],
      exp: 'Fallback: se API falha → retornar cache. Se DB offline → retornar dados padrão. "Graceful degradation" — sistema continua funcionando com capacidade reduzida.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Simulating retry logic:',
      code: `<span class="kw">int</span> tentativas = <span class="nm">0</span>;
<span class="kw">bool</span> sucesso = <span class="kw">false</span>;
<span class="kw">while</span> (tentativas < <span class="nm">3</span> && !sucesso)
{
    tentativas++;
    sucesso = tentativas == <span class="nm">_______</span>;
}
Console.<span class="mt">WriteLine</span>(tentativas);`,
      q: 'Em qual tentativa deve acontecer sucesso para ter exatamente 3 tentativas?',
      hint: 'Última tentativa = 3',
      ans: '3',
      exp: 'sucesso = tentativas == 3. Rodadas: tent=1(false), tent=2(false), tent=3(true). Loop sai. tentativas=3.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Circuit breaker state machine simplificado:',
      code: `<span class="kw">enum</span> Estado { Closed, Open, HalfOpen }
Estado estado = Estado.Closed;
<span class="kw">int</span> falhas = <span class="nm">0</span>;
<span class="kw">void</span> <span class="mt">Falha</span>() {
    falhas++;
    <span class="kw">if</span> (falhas >= <span class="nm">3</span>) estado = Estado._______;
}`,
      q: 'Para qual estado o circuito muda após 3 falhas?',
      hint: 'Circuito aberto',
      ans: 'Open',
      exp: 'Após N falhas consecutivas → Open. No estado Open: chamadas rejeitadas imediatamente. Após timeout → HalfOpen para testar recuperação.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Polly retry policy (.NET 8 Resilience):',
      code: `<span class="kw">var</span> pipeline = <span class="kw">new</span> ResiliencePipelineBuilder()
    .<span class="mt">AddRetry</span>(<span class="kw">new</span> RetryStrategyOptions {
        MaxRetryAttempts = _______,
        Delay = TimeSpan.<span class="mt">FromSeconds</span>(<span class="nm">1</span>)
    })
    .<span class="mt">Build</span>();`,
      q: 'Qual valor numérico para máximo 3 tentativas (não recontando a primeira)?',
      hint: '3 retries além da tentativa original',
      ans: '3',
      exp: 'MaxRetryAttempts = 3: mais 3 tentativas após a primeira. Total = 4 tentativas. Delay: espera 1s entre cada retry. UseJitter: true para variação aleatória.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'Retry com backoff simulado.',
      code: `<span class="kw">int</span> tentativa = <span class="nm">0</span>;
<span class="kw">int</span> maxTentativas = <span class="nm">4</span>;
<span class="kw">bool</span> <span class="mt">Operar</span>(<span class="kw">int</span> t) => t >= maxTentativas;

<span class="kw">while</span> (tentativa < maxTentativas) {
    tentativa++;
    <span class="kw">if</span> (<span class="mt">Operar</span>(tentativa)) <span class="kw">break</span>;
}
Console.<span class="mt">WriteLine</span>(<span class="st">$"Sucesso na tentativa {tentativa}"</span>);`,
      q: 'O que será exibido?',
      hint: 'Operar retorna true quando tentativa >= 4',
      opts: [
        { t: 'Sucesso na tentativa 3', ok: false },
        { t: 'Sucesso na tentativa 4', ok: true },
        { t: 'Sucesso na tentativa 1', ok: false },
        { t: 'Loop infinito', ok: false },
      ],
      exp: 't=1: Operar(1)=false. t=2: false. t=3: false. t=4: Operar(4)=true → break. "Sucesso na tentativa 4".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Fallback pattern.',
      code: `<span class="kw">static string</span> <span class="mt">ObterDados</span>(<span class="kw">bool</span> falhar)
{
    <span class="kw">if</span> (falhar) <span class="kw">throw new</span> Exception(<span class="st">"Serviço indisponível"</span>);
    <span class="kw">return</span> <span class="st">"Dados reais"</span>;
}

<span class="kw">static string</span> <span class="mt">ComFallback</span>(<span class="kw">bool</span> falhar)
{
    <span class="kw">try</span> { <span class="kw">return</span> <span class="mt">ObterDados</span>(falhar); }
    <span class="kw">catch</span> { <span class="kw">return</span> <span class="st">"Dados cache"</span>; }
}
Console.<span class="mt">WriteLine</span>(<span class="mt">ComFallback</span>(<span class="kw">true</span>));`,
      q: 'O que será exibido?',
      hint: 'Falha → fallback para cache',
      opts: [
        { t: 'Dados reais', ok: false },
        { t: 'Dados cache', ok: true },
        { t: 'Serviço indisponível', ok: false },
        { t: 'Exceção não tratada', ok: false },
      ],
      exp: 'ComFallback(true): ObterDados(true) lança exceção. Catch retorna "Dados cache". "Dados cache".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Timeout com CancellationToken.',
      code: `<span class="kw">using var</span> cts = <span class="kw">new</span> CancellationTokenSource(
    TimeSpan.<span class="mt">FromMilliseconds</span>(<span class="nm">50</span>));
<span class="kw">try</span> {
    <span class="kw">await</span> Task.<span class="mt">Delay</span>(<span class="nm">5000</span>, cts.Token);
    Console.<span class="mt">WriteLine</span>(<span class="st">"Completou"</span>);
} <span class="kw">catch</span> (OperationCanceledException) {
    Console.<span class="mt">WriteLine</span>(<span class="st">"Timeout"</span>);
}`,
      q: 'O que será exibido?',
      hint: 'Token cancela em 50ms, Delay é 5000ms',
      opts: [
        { t: 'Completou', ok: false },
        { t: 'Timeout', ok: true },
        { t: 'Nenhuma saída — aguarda 5s', ok: false },
        { t: 'Erro — CancellationToken inválido', ok: false },
      ],
      exp: 'CancellationTokenSource(50ms): cancela após 50ms. Task.Delay(5000ms): seria 5s mas token cancela em 50ms → OperationCanceledException. "Timeout".',
    },

  ]
};
