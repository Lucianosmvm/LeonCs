// ══════════════════════════════════════════════════════
// EPÍLOGO — O LEGADO
// MISSÃO 98 — SENTINELA DA NUVEM
// Tema: Docker, Kubernetes, CI/CD com .NET — deploy, containers, health checks
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_97 = {
  id: 97,
  title: "MISSÃO 98 — SENTINELA DA NUVEM",
  icon: '☁️',
  free: false,
  desc: "O agente que não pode ser deployado não existe. Containers Docker, orquestração Kubernetes e pipelines CI/CD transformam código C# em serviços resilientes na nuvem — a infraestrutura que mantém Leon operacional em qualquer missão.",
  objs: [
    "Entender containers Docker para aplicações .NET",
    "Conhecer conceitos básicos de Kubernetes para .NET",
    "Configurar health checks e readiness probes",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>Docker</strong> empacota a aplicação com todas suas dependências em uma imagem imutável — funciona igual em desenvolvimento, staging e produção.',
      q: 'Qual a principal vantagem de containerizar uma aplicação .NET com Docker?',
      hint: 'Ambiente consistente',
      opts: [
        { t: 'Docker torna a aplicação mais rápida automaticamente', ok: false },
        { t: 'Elimina "funciona na minha máquina" — imagem garante ambiente idêntico em todo lugar', ok: true },
        { t: 'Docker substitui o runtime .NET', ok: false },
        { t: 'Apenas Linux suporta Docker', ok: false },
      ],
      exp: 'Docker: "build once, run anywhere". A imagem contém app + runtime + dependências. Ambiente de prod = staging = dev. Windows, Linux e macOS suportam Docker.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Multi-stage Dockerfile reduz o tamanho da imagem final — estágio de build usa SDK completo, estágio final usa apenas o runtime.',
      q: 'Por que usar multi-stage build em um Dockerfile .NET?',
      hint: 'SDK vs Runtime',
      opts: [
        { t: 'Multi-stage é mais lento para buildar', ok: false },
        { t: 'Imagem final com apenas o runtime (~100MB) vs SDK completo (~700MB) — menor e mais segura', ok: true },
        { t: 'Multi-stage é obrigatório para .NET', ok: false },
        { t: 'Multi-stage não funciona com ASP.NET', ok: false },
      ],
      exp: 'FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build ... FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final. Runtime: ~100MB. SDK: ~700MB. Menos superfície de ataque.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<strong>Health checks</strong> no ASP.NET Core permitem que Kubernetes saiba se o pod está pronto para receber tráfego (readiness) ou se precisa ser reiniciado (liveness).',
      q: 'Qual a diferença entre Liveness e Readiness probe no Kubernetes?',
      hint: 'Reiniciar vs Receber tráfego',
      opts: [
        { t: 'São idênticos — diferentes nomes para a mesma coisa', ok: false },
        { t: 'Liveness: reinicia o pod se falhar. Readiness: remove do load balancer se falhar', ok: true },
        { t: 'Readiness reinicia, Liveness remove do load balancer', ok: false },
        { t: 'Apenas Liveness existe no Kubernetes', ok: false },
      ],
      exp: 'Liveness: "está vivo?" — falha → pod reiniciado. Readiness: "está pronto?" — falha → pod removido do Service (sem tráfego). Startup probe: terceira opção para apps lentos para iniciar.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<strong>Environment variables</strong> e <strong>Secrets</strong> são a forma correta de configurar apps em containers — nunca hardcode connection strings na imagem.',
      q: 'Como passar configurações sensíveis (connection strings) para um container .NET?',
      hint: 'Environment variables ou Secrets',
      opts: [
        { t: 'Hardcode no appsettings.json dentro da imagem', ok: false },
        { t: 'Environment variables em runtime ou Kubernetes Secrets montados como volumes/env vars', ok: true },
        { t: 'Passar como argumentos de linha de comando visíveis no ps', ok: false },
        { t: 'Não é possível configurar apps dentro de containers', ok: false },
      ],
      exp: 'Kubernetes Secrets: base64 encoded, montados como env vars ou arquivos. .NET lê via IConfiguration que já suporta env vars. NUNCA na imagem — imagens são compartilhadas/públicas.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Configurando health checks no ASP.NET Core:',
      code: `builder.Services.<span class="mt">_______</span>();
<span class="kw">var</span> app = builder.<span class="mt">Build</span>();
app.<span class="mt">MapHealthChecks</span>(<span class="st">"/health"</span>);`,
      q: 'Qual método registra os serviços de health check?',
      hint: 'Add Health Checks',
      ans: 'AddHealthChecks',
      exp: 'builder.Services.AddHealthChecks(): registra serviços. app.MapHealthChecks("/health"): expõe endpoint. Kubernetes aponta liveness/readiness para /health. Retorna 200 OK ou 503.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Dockerfile multi-stage para ASP.NET Core:',
      code: `<span class="kw">FROM</span> mcr.microsoft.com/dotnet/sdk:<span class="nm">8.0</span> <span class="kw">AS</span> build
<span class="kw">WORKDIR</span> <span class="st">/src</span>
<span class="kw">COPY</span> . .
<span class="kw">RUN</span> dotnet <span class="mt">publish</span> -c Release -o /app

<span class="kw">FROM</span> mcr.microsoft.com/dotnet/<span class="mt">_______</span>:<span class="nm">8.0</span>
<span class="kw">WORKDIR</span> <span class="st">/app</span>
<span class="kw">COPY</span> --from=build /app .
<span class="kw">ENTRYPOINT</span> [<span class="st">"dotnet"</span>, <span class="st">"MeuApp.dll"</span>]`,
      q: 'Qual imagem base usar para o estágio final de uma aplicação ASP.NET Core?',
      hint: 'ASP.NET (não SDK)',
      ans: 'aspnet',
      exp: 'mcr.microsoft.com/dotnet/aspnet:8.0: runtime ASP.NET, sem SDK. sdk:8.0: SDK completo para build. runtime:8.0: runtime .NET básico (sem ASP.NET). aspnet é para web apps.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Lendo variáveis de ambiente no .NET:',
      code: `<span class="kw">var</span> connStr = builder.Configuration
    .<span class="mt">_______</span>(<span class="st">"ConnectionStrings:Default"</span>);`,
      q: 'Qual método lê uma configuração do IConfiguration?',
      hint: 'Get Value',
      ans: 'GetValue<string>',
      exp: 'builder.Configuration.GetValue<string>("chave"): lê de appsettings.json, env vars, secrets. Env var "ConnectionStrings__Default" (__ = :). IConfiguration unifica todas as fontes.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'Simulando lógica de health check.',
      code: `<span class="kw">record</span> HealthResult(<span class="kw">bool</span> Healthy, <span class="kw">string</span> Status);

<span class="kw">static</span> HealthResult <span class="mt">Check</span>(<span class="kw">bool</span> dbOk, <span class="kw">bool</span> cacheOk) =>
    (dbOk && cacheOk)
        ? <span class="kw">new</span>(<span class="kw">true</span>, <span class="st">"Healthy"</span>)
        : <span class="kw">new</span>(<span class="kw">false</span>, <span class="st">"Degraded"</span>);

<span class="kw">var</span> r = <span class="mt">Check</span>(<span class="kw">true</span>, <span class="kw">false</span>);
Console.<span class="mt">WriteLine</span>(r.Status);`,
      q: 'O que será exibido?',
      hint: 'cache = false',
      opts: [
        { t: 'Healthy', ok: false },
        { t: 'Degraded', ok: true },
        { t: 'False', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: 'dbOk=true, cacheOk=false. (true && false) = false → "Degraded". r.Status = "Degraded".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Configuração via environment variables no .NET.',
      code: `<span class="kw">var</span> config = <span class="kw">new</span> Dictionary&lt;<span class="kw">string</span>, <span class="kw">string</span>&gt; {
    [<span class="st">"App__Name"</span>] = <span class="st">"Leon.CS"</span>,
    [<span class="st">"App__Version"</span>] = <span class="st">"1.0"</span>
};
<span class="cm">// __ mapeia para : no IConfiguration</span>
<span class="cm">// App__Name => App:Name</span>
Console.<span class="mt">WriteLine</span>(config[<span class="st">"App__Name"</span>]);`,
      q: 'O que será exibido?',
      hint: 'Chave com __',
      opts: [
        { t: 'App:Name', ok: false },
        { t: 'Leon.CS', ok: true },
        { t: 'App__Name', ok: false },
        { t: 'Erro — chave inválida', ok: false },
      ],
      exp: 'config["App__Name"] = "Leon.CS". O mapeamento __ → : é feito pelo IConfiguration do .NET ao ler env vars, não no Dictionary. "Leon.CS".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Simulando retry com Polly em contexto de deploy.',
      code: `<span class="kw">int</span> tentativas = <span class="nm">0</span>;
<span class="kw">bool</span> Conectar()
{
    tentativas++;
    <span class="kw">return</span> tentativas >= <span class="nm">3</span>;
}
<span class="kw">while</span> (!<span class="mt">Conectar</span>())
    Console.<span class="mt">WriteLine</span>(<span class="st">$"Retry {tentativas}"</span>);
Console.<span class="mt">WriteLine</span>(<span class="st">$"Conectado na tentativa {tentativas}"</span>);`,
      q: 'O que será exibido?',
      hint: 'Loop até tentativas >= 3',
      opts: [
        { t: 'Retry 1\nRetry 2\nConectado na tentativa 3', ok: true },
        { t: 'Conectado na tentativa 1', ok: false },
        { t: 'Retry 1\nConectado na tentativa 2', ok: false },
        { t: 'Loop infinito', ok: false },
      ],
      exp: 'tentativas=1: false → "Retry 1". tentativas=2: false → "Retry 2". tentativas=3: true → sai do while → "Conectado na tentativa 3".',
    },

  ]
};
