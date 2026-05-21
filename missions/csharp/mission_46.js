const MISSION_46 = {
  id: 46,
  title: "MISSÃO 47 — O GRIMÓRIO DIGITAL",
  icon: '📜',
  free: false,
  desc: "O grimório foi digitalizado — dados transmitidos em JSON entre sistemas. System.Text.Json é a biblioteca nativa do .NET para serializar e desserializar dados JSON.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>JSON</strong> (JavaScript Object Notation) é o formato padrão para troca de dados entre APIs, configurações e persistência leve.',
      q: 'Qual namespace do .NET 6+ oferece suporte nativo a JSON sem pacotes externos?',
      hint: 'System.Text.Json',
      opts: [
        { t: 'System.Xml', ok: false },
        { t: 'Newtonsoft.Json', ok: false },
        { t: 'System.Text.Json', ok: true },
        { t: 'System.Data.Json', ok: false },
      ],
      exp: '"System.Text.Json" é o namespace nativo do .NET para JSON — rápido e sem dependências externas. Newtonsoft.Json (Json.NET) é alternativa popular mas é pacote NuGet.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>JsonSerializer.Serialize(obj)</code> converte objeto C# → JSON string. <code>Deserialize&lt;T&gt;(json)</code> faz o inverso.',
      q: 'O que JsonSerializer.Deserialize<Inimigo>(jsonString) retorna?',
      hint: 'JSON → objeto C#',
      opts: [
        { t: 'Uma string formatada', ok: false },
        { t: 'Um objeto Inimigo preenchido com os dados do JSON', ok: true },
        { t: 'Um Dictionary<string, object>', ok: false },
        { t: 'Um byte[]', ok: false },
      ],
      exp: '"Deserialize<T>" transforma JSON string em objeto C# do tipo T, preenchendo as propriedades automaticamente.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>JsonSerializerOptions</code> permite configurar o comportamento: naming policy, indentação, ignorar nulls, etc.',
      q: 'Para serializar com nomes em camelCase (ex: "nomeInimigo" em vez de "NomeInimigo"), qual opção usar?',
      hint: 'CamelCase naming policy',
      opts: [
        { t: 'options.PropertyNameFormat = "camel"', ok: false },
        { t: 'options.PropertyNamingPolicy = JsonNamingPolicy.CamelCase', ok: true },
        { t: 'options.CamelCase = true', ok: false },
        { t: 'options.LowerCaseNames = true', ok: false },
      ],
      exp: '"JsonNamingPolicy.CamelCase" converte "NomeInimigo" para "nomeInimigo" na serialização — padrão das APIs REST modernas.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Por padrão, <code>System.Text.Json</code> é case-sensitive na desserialização. "nome" e "Nome" são campos diferentes.',
      q: 'Como tornar a desserialização case-insensitive?',
      hint: 'Opção de insensibilidade',
      opts: [
        { t: 'options.IgnoreCase = true', ok: false },
        { t: 'options.PropertyNameCaseInsensitive = true', ok: true },
        { t: 'Não é possível — é sempre case-sensitive', ok: false },
        { t: 'Usar JsonIgnore em cada propriedade', ok: false },
      ],
      exp: '"PropertyNameCaseInsensitive = true" aceita "nome", "Nome", "NOME" para a mesma propriedade. Útil para consumir APIs externas.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Para serializar um objeto para JSON string:',
      code: `<span class="kw">var</span> inimigo = <span class="kw">new</span> { Nome = <span class="st">"Krauser"</span>, HP = <span class="nm">500</span> };\n<span class="kw">string</span> json = JsonSerializer.<span class="mt">_______</span>(inimigo);`,
      q: 'Qual método converte objeto C# em JSON string?',
      hint: 'Serializar em inglês',
      ans: 'Serialize',
      exp: '"JsonSerializer.Serialize(obj)" retorna a representação JSON do objeto como string.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Para desserializar JSON string de volta para objeto C#:',
      code: `<span class="kw">var</span> inimigo = JsonSerializer.<span class="mt">_______</span>&lt;Inimigo&gt;(jsonString);`,
      q: 'Qual método converte JSON string em objeto C#?',
      hint: 'Desserializar em inglês',
      ans: 'Deserialize',
      exp: '"JsonSerializer.Deserialize<T>(json)" instancia e preenche T com os dados do JSON. Retorna null se json for "null".',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Para ignorar uma propriedade durante a serialização/desserialização, use o atributo JsonIgnore:',
      code: `<span class="kw">public class</span> Usuario\n{\n    <span class="kw">public string</span> Nome { <span class="kw">get</span>; <span class="kw">set</span>; }\n    [<span class="kw">_______</span>]\n    <span class="kw">public string</span> Senha { <span class="kw">get</span>; <span class="kw">set</span>; }\n}`,
      q: 'Qual atributo exclui a propriedade do JSON?',
      hint: 'Json + Ignorar',
      ans: 'JsonIgnore',
      exp: '"[JsonIgnore]" exclui a propriedade da serialização e desserialização. Essencial para senhas, tokens e dados sensíveis.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Para customizar o nome da propriedade no JSON sem mudar o nome em C#, use JsonPropertyName:',
      code: `[JsonPropertyName(<span class="st">"_______"</span>)]\n<span class="kw">public int</span> PontosDeVida { <span class="kw">get</span>; <span class="kw">set</span>; }`,
      q: 'Qual nome de propriedade JSON para "PontosDeVida" seguindo a convenção API REST?',
      hint: 'camelCase abreviado para HP',
      ans: 'hp',
      exp: '"[JsonPropertyName("hp")]" faz o JSON usar "hp" enquanto o C# usa "PontosDeVida". Separa a representação interna da API externa.',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Serialize e Deserialize básicos.',
      code: `<span class="kw">public record</span> Arma(<span class="kw">string</span> Nome, <span class="kw">int</span> Dano);\n\n<span class="kw">var</span> pistola = <span class="kw">new</span> Arma(<span class="st">"Matilda"</span>, <span class="nm">25</span>);\n<span class="kw">string</span> json = JsonSerializer.<span class="mt">Serialize</span>(pistola);\nConsole.<span class="mt">WriteLine</span>(json);\n\n<span class="kw">var</span> arma2 = JsonSerializer.<span class="mt">Deserialize</span>&lt;Arma&gt;(json);\nConsole.<span class="mt">WriteLine</span>(arma2!.Dano);`,
      q: 'O que será exibido na segunda linha (arma2.Dano)?',
      hint: 'Deserialize recupera os dados originais',
      opts: [
        { t: '0', ok: false },
        { t: '25', ok: true },
        { t: 'Matilda', ok: false },
        { t: 'Erro — record não serializável', ok: false },
      ],
      exp: 'Serialize → JSON com Nome e Dano. Deserialize recria o record. arma2.Dano = 25.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'JsonSerializerOptions com WriteIndented.',
      code: `<span class="kw">var</span> opts = <span class="kw">new</span> JsonSerializerOptions { WriteIndented = <span class="kw">true</span> };\n<span class="kw">var</span> obj = <span class="kw">new</span> { Nome = <span class="st">"Leon"</span>, HP = <span class="nm">100</span> };\n<span class="kw">string</span> json = JsonSerializer.<span class="mt">Serialize</span>(obj, opts);\nConsole.<span class="mt">WriteLine</span>(json.<span class="mt">Contains</span>(<span class="st">"\\n"</span>));`,
      q: 'O que será exibido?',
      hint: 'WriteIndented adiciona quebras de linha',
      opts: [
        { t: 'False', ok: false },
        { t: 'True', ok: true },
        { t: 'Erro', ok: false },
        { t: 'O JSON formatado completo', ok: false },
      ],
      exp: '"WriteIndented = true" formata o JSON com quebras de linha e espaços. json.Contains("\\n") = True.',
    },

    // Q11 — Code
    {
      type: 'code',
      bubble: 'Serializando uma lista de objetos.',
      code: `<span class="kw">var</span> inimigos = <span class="kw">new</span> List&lt;<span class="kw">string</span>&gt; { <span class="st">"Ganado"</span>, <span class="st">"Cultista"</span>, <span class="st">"Regenerador"</span> };\n<span class="kw">string</span> json = JsonSerializer.<span class="mt">Serialize</span>(inimigos);\n<span class="kw">var</span> recuperado = JsonSerializer.<span class="mt">Deserialize</span>&lt;List&lt;<span class="kw">string</span>&gt;&gt;(json);\nConsole.<span class="mt">WriteLine</span>(recuperado![<span class="nm">1</span>]);`,
      q: 'O que será exibido?',
      hint: 'Índice 1 da lista recuperada',
      opts: [
        { t: 'Ganado', ok: false },
        { t: 'Cultista', ok: true },
        { t: 'Regenerador', ok: false },
        { t: 'Erro — List não serializável', ok: false },
      ],
      exp: 'Serialize serializa a lista, Deserialize recupera. recuperado![1] = "Cultista" (índice 1).',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'JsonIgnore protegendo dados sensíveis.',
      code: `<span class="kw">public class</span> Save\n{\n    <span class="kw">public string</span> Jogador { <span class="kw">get</span>; <span class="kw">set</span>; }\n    <span class="kw">public int</span>    Missao  { <span class="kw">get</span>; <span class="kw">set</span>; }\n    [JsonIgnore]\n    <span class="kw">public string</span> Token   { <span class="kw">get</span>; <span class="kw">set</span>; }\n}\n<span class="kw">var</span> s = <span class="kw">new</span> Save { Jogador=<span class="st">"Leon"</span>, Missao=<span class="nm">5</span>, Token=<span class="st">"abc123"</span> };\n<span class="kw">var</span> json = JsonSerializer.<span class="mt">Serialize</span>(s);\nConsole.<span class="mt">WriteLine</span>(json.<span class="mt">Contains</span>(<span class="st">"Token"</span>));`,
      q: 'O que será exibido?',
      hint: '[JsonIgnore] exclui Token do JSON',
      opts: [
        { t: 'True', ok: false },
        { t: 'False', ok: true },
        { t: 'abc123', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: '"[JsonIgnore]" exclui Token da serialização. O JSON conterá apenas Jogador e Missao. json.Contains("Token") = False.',
    },

  ]
};
