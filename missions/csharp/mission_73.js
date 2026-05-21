// ══════════════════════════════════════════════════════
// ACT V — A FUGA
// MISSÃO 74 — PROTOCOLO HTTP
// Tema: HttpClient, REST APIs, System.Net.Http
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_73 = {
  id: 73,
  title: "MISSÃO 74 — PROTOCOLO HTTP",
  icon: '🌐',
  free: false,
  desc: "Durante a fuga, Leon precisa se comunicar com a sede via rede. HttpClient é o rádio de campo do C# — envie requests, receba responses e deserialize os dados da operação.",
  objs: [
    "Usar HttpClient para fazer requests GET e POST",
    "Deserializar respostas JSON com System.Text.Json",
    "Aplicar IHttpClientFactory para gerenciamento correto de HttpClient",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<code>HttpClient</code> não deve ser instanciado para cada request — socket exhaustion. Use um singleton, static ou IHttpClientFactory.',
      q: 'Por que "using var client = new HttpClient()" em um loop é problemático?',
      hint: 'Sockets não são liberados imediatamente',
      opts: [
        { t: 'HttpClient é muito lento', ok: false },
        { t: 'Cada new HttpClient abre sockets que não são liberados imediatamente — socket exhaustion no OS', ok: true },
        { t: 'HttpClient não pode ser usado em loops', ok: false },
        { t: 'O GC não coleta HttpClient', ok: false },
      ],
      exp: 'HttpClient usa sockets do OS. Mesmo com Dispose, os sockets ficam em TIME_WAIT por tempo. Muitos news = porta esgotada. Use singleton ou IHttpClientFactory.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>IHttpClientFactory</code> (ASP.NET Core) gerencia ciclo de vida dos HttpClientHandlers, rotaciona DNS e evita socket exhaustion.',
      q: 'Qual o benefício principal de IHttpClientFactory?',
      hint: 'Gerência de handlers',
      opts: [
        { t: 'É mais rápido que HttpClient direto', ok: false },
        { t: 'Gerencia o ciclo de vida dos HttpMessageHandlers — rotaciona periodicamente para refletir mudanças de DNS', ok: true },
        { t: 'Permite apenas uma request por vez', ok: false },
        { t: 'Substitui HttpClient completamente', ok: false },
      ],
      exp: 'IHttpClientFactory: handlers reutilizados mas rotacionados a cada 2min para DNS. Evita socket exhaustion. Suporta named e typed clients com configuração centralizada.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>HttpResponseMessage.EnsureSuccessStatusCode()</code> lança HttpRequestException se o status code não for 2xx.',
      q: 'Qual a diferença entre verificar StatusCode manualmente e EnsureSuccessStatusCode()?',
      hint: 'Exceção vs verificação manual',
      opts: [
        { t: 'São equivalentes', ok: false },
        { t: 'EnsureSuccessStatusCode lança exceção; verificação manual permite tratamento customizado por código', ok: true },
        { t: 'EnsureSuccessStatusCode verifica apenas 200', ok: false },
        { t: 'Verificação manual é sempre melhor', ok: false },
      ],
      exp: 'EnsureSuccessStatusCode: simples, lança HttpRequestException para qualquer não-2xx. Verificação manual: if (resp.StatusCode == 404) tratarNotFound(); mais granular.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Para grandes payloads, prefira <code>GetStreamAsync</code> + <code>DeserializeAsync</code> em vez de <code>GetStringAsync</code> + <code>Deserialize</code> — evita materializar string gigante.',
      q: 'Por que GetStreamAsync é mais eficiente que GetStringAsync para JSON grande?',
      hint: 'String é alocação desnecessária',
      opts: [
        { t: 'GetStreamAsync é mais rápido em rede', ok: false },
        { t: 'GetStreamAsync: JSON deserializado diretamente do stream sem criar string intermediária na memória', ok: true },
        { t: 'GetStringAsync não suporta JSON', ok: false },
        { t: 'Não há diferença prática', ok: false },
      ],
      exp: 'GetStringAsync: payload inteiro em string (memória). DeserializeAsync<T>(stream): lê e desserializa em streaming — muito menor uso de memória para payloads grandes.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Fazendo GET e lendo a resposta como string:',
      code: `<span class="kw">using var</span> client = <span class="kw">new</span> HttpClient();\n<span class="kw">string</span> resposta = <span class="kw">await</span> client.<span class="mt">_______</span>(<span class="st">"https://api.exemplo.com/dados"</span>);`,
      q: 'Qual método faz GET e retorna o body como string?',
      hint: 'Get + String + Async',
      ans: 'GetStringAsync',
      exp: '"GetStringAsync(url)" = GET assíncrono, retorna Task<string> com o body. "GetAsync" retorna HttpResponseMessage para mais controle.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Deserializando JSON para objeto C#:',
      code: `<span class="kw">var</span> json = <span class="kw">await</span> client.<span class="mt">GetStringAsync</span>(url);\n<span class="kw">var</span> obj = JsonSerializer.<span class="mt">_______</span>&lt;MeuTipo&gt;(json);`,
      q: 'Qual método JsonSerializer converte JSON em objeto?',
      hint: 'Desserializar em inglês',
      ans: 'Deserialize',
      exp: '"JsonSerializer.Deserialize<T>(json)" converte string JSON para T. Para streams: "await JsonSerializer.DeserializeAsync<T>(stream)".',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Fazendo POST com JSON no body:',
      code: `<span class="kw">var</span> payload = JsonSerializer.<span class="mt">Serialize</span>(obj);\n<span class="kw">var</span> content = <span class="kw">new</span> StringContent(payload, Encoding.UTF8, <span class="st">"_______"</span>);\n<span class="kw">var</span> resp = <span class="kw">await</span> client.<span class="mt">PostAsync</span>(url, content);`,
      q: 'Qual Content-Type usar para enviar JSON?',
      hint: 'Tipo MIME do JSON',
      ans: 'application/json',
      exp: '"application/json" é o Content-Type para JSON. StringContent com "application/json" configura o header automaticamente. Em .NET 5+, use PostAsJsonAsync para simplificar.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'Serialização e deserialização com System.Text.Json.',
      code: `<span class="kw">record</span> Inimigo(<span class="kw">string</span> Nome, <span class="kw">int</span> HP);\n\n<span class="kw">var</span> original = <span class="kw">new</span> Inimigo(<span class="st">"Ganado"</span>, <span class="nm">80</span>);\n<span class="kw">string</span> json = JsonSerializer.<span class="mt">Serialize</span>(original);\nConsole.<span class="mt">WriteLine</span>(json);\n<span class="kw">var</span> recuperado = JsonSerializer.<span class="mt">Deserialize</span>&lt;Inimigo&gt;(json)!;\nConsole.<span class="mt">WriteLine</span>(recuperado.HP);`,
      q: 'O que será exibido?',
      hint: 'JSON serializado e depois HP recuperado',
      opts: [
        { t: '{"Nome":"Ganado","HP":80} e 80', ok: true },
        { t: 'Ganado 80 e 80', ok: false },
        { t: 'Erro — record não serializável', ok: false },
        { t: '{"nome":"Ganado","hp":80} e 80', ok: false },
      ],
      exp: 'JsonSerializer serializa com nomes das propriedades: {"Nome":"Ganado","HP":80}. Deserialize recupera HP=80.',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Verificando status code de resposta HTTP.',
      code: `<span class="kw">using var</span> client = <span class="kw">new</span> HttpClient();\n<span class="kw">var</span> resp = <span class="kw">await</span> client.<span class="mt">GetAsync</span>(<span class="st">"https://httpstat.us/200"</span>);\nConsole.<span class="mt">WriteLine</span>((int)resp.StatusCode);\nConsole.<span class="mt">WriteLine</span>(resp.<span class="mt">IsSuccessStatusCode</span>);`,
      q: 'O que seria exibido para uma resposta 200 OK?',
      hint: '200 e true',
      opts: [
        { t: '200 e False', ok: false },
        { t: '200 e True', ok: true },
        { t: 'OK e True', ok: false },
        { t: 'Erro — não pode acessar StatusCode', ok: false },
      ],
      exp: '(int)resp.StatusCode = 200. IsSuccessStatusCode = StatusCode >= 200 && < 300 = true. "200" e "True".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'JsonSerializerOptions para case insensitive.',
      code: `<span class="kw">string</span> json = <span class="st">@"{""nome"":""Leon"",""hp"":100}"</span>;\n<span class="kw">var</span> opts = <span class="kw">new</span> JsonSerializerOptions\n    { PropertyNameCaseInsensitive = <span class="kw">true</span> };\n<span class="kw">var</span> obj = JsonSerializer.<span class="mt">Deserialize</span>&lt;Inimigo&gt;(json, opts)!;\nConsole.<span class="mt">WriteLine</span>(obj.Nome);`,
      q: 'O que será exibido? (Inimigo tem "Nome" e "HP" maiúsculos)',
      hint: 'CaseInsensitive mapeia "nome" para "Nome"',
      opts: [
        { t: 'null', ok: false },
        { t: 'Leon', ok: true },
        { t: 'nome', ok: false },
        { t: 'Erro — propriedades case-sensitive', ok: false },
      ],
      exp: '"nome" (JSON) → "Nome" (C#) com PropertyNameCaseInsensitive=true. obj.Nome = "Leon".',
    },

  ]
};
