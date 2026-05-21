// ══════════════════════════════════════════════════════
// ACT IV — O BUNKER
// MISSÃO 67 — ANÁLISE FORENSE
// Tema: String avançado — StringBuilder, StringComparison, Regex
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_66 = {
  id: 66,
  title: "MISSÃO 67 — ANÁLISE FORENSE",
  icon: '🔍',
  free: false,
  desc: "A análise forense do bunker requer processar milhares de logs em busca de padrões. StringBuilder para construção eficiente, StringComparison para comparações corretas e Regex para padrões complexos são suas ferramentas.",
  objs: [
    "Usar StringBuilder para construção eficiente de strings",
    "Aplicar StringComparison para comparações culturalmente corretas",
    "Extrair dados com Regex.Match, Groups e Named Groups",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Strings são imutáveis em C#. Concatenar strings em loop cria um novo objeto a cada iteração. <code>StringBuilder</code> usa buffer mutável internamente.',
      q: 'Qual o problema de concatenar string em loop com "s += item"?',
      hint: 'Quantos objetos são criados?',
      opts: [
        { t: 'Nenhum — string + é eficiente', ok: false },
        { t: 'Cada += cria um novo objeto string — O(n²) de operações para n concatenações', ok: true },
        { t: 'O loop fica infinito', ok: false },
        { t: 'A string fica corrompida', ok: false },
      ],
      exp: '"s += item": copia s inteiro para nova string. 1000 concatenações = 1+2+3...+1000 ≈ 500.000 caracteres copiados. StringBuilder: O(n) amortizado.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>StringComparison.OrdinalIgnoreCase</code> é a comparação mais rápida e recomendada para strings técnicas (caminhos, chaves, identificadores).',
      q: 'Para comparar nomes de arquivos como "foto.PNG" == "foto.png", qual StringComparison usar?',
      hint: 'Sem case, sem cultura',
      opts: [
        { t: 'StringComparison.CurrentCulture', ok: false },
        { t: 'StringComparison.OrdinalIgnoreCase', ok: true },
        { t: 'StringComparison.InvariantCulture', ok: false },
        { t: 'string.ToLower() e ==', ok: false },
      ],
      exp: '"OrdinalIgnoreCase" — mais rápido, compara byte a byte ignorando case. Para arquivos, emails, URLs. "InvariantCulture" para texto de usuário sem influência da cultura local.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Regex usa grupos para capturar partes específicas do padrão. <code>(?&lt;nome&gt;...)</code> é um named group acessado por <code>match.Groups["nome"].Value</code>.',
      q: 'Qual a vantagem de named groups em Regex?',
      hint: 'Legibilidade e robustez',
      opts: [
        { t: 'Named groups são mais rápidos', ok: false },
        { t: 'Permitem acessar grupos por nome em vez de índice — código mais legível e robusto a mudanças', ok: true },
        { t: 'Funcionam apenas em .NET 6+', ok: false },
        { t: 'Named groups não afetam o padrão', ok: false },
      ],
      exp: '"match.Groups[1].Value" vs "match.Groups["nome"].Value". Nome auto-documenta. Se o padrão muda, o nome continua correto; o índice pode quebrar.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>Regex.IsMatch()</code> verifica se o padrão existe. <code>Match()</code> retorna o primeiro match. <code>Matches()</code> retorna todos.',
      q: 'Para extrair TODOS os emails de um texto, qual método Regex usar?',
      hint: 'Todos os matches',
      opts: [
        { t: 'Regex.IsMatch()', ok: false },
        { t: 'Regex.Match()', ok: false },
        { t: 'Regex.Matches()', ok: true },
        { t: 'Regex.Replace()', ok: false },
      ],
      exp: '"Regex.Matches(texto, padrão)" retorna MatchCollection com todos os matches. Itere para processar cada email encontrado.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'StringBuilder para construção eficiente em loop:',
      code: `<span class="kw">var</span> sb = <span class="kw">new</span> System.Text.StringBuilder();\n<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">1</span>; i <= <span class="nm">3</span>; i++)\n    sb.<span class="mt">_______</span>(<span class="st">$"Item {i}; "</span>);\nConsole.<span class="mt">Write</span>(sb.<span class="mt">ToString</span>());`,
      q: 'Qual método adiciona texto ao StringBuilder?',
      hint: 'Anexar em inglês',
      ans: 'Append',
      exp: '"Append(texto)" adiciona ao buffer interno sem criar nova string. ToString() converte ao final. AppendLine() adiciona com quebra de linha.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Comparação de strings ignorando case de forma correta:',
      code: `<span class="kw">string</span> cmd = <span class="st">"ATACAR"</span>;\n<span class="kw">if</span> (<span class="kw">string</span>.<span class="mt">Equals</span>(cmd, <span class="st">"atacar"</span>, StringComparison.<span class="mt">_______</span>))\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Comando reconhecido"</span>);`,
      q: 'Qual StringComparison ignora maiúsculas/minúsculas sem cultura?',
      hint: 'Ordinal + Ignore + Case',
      ans: 'OrdinalIgnoreCase',
      exp: '"OrdinalIgnoreCase" compara sem cultura e sem case. Para comandos, teclas e identificadores — não depende da localidade do sistema.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Regex com named group para extrair número do código de missão:',
      code: `<span class="kw">var</span> m = Regex.<span class="mt">Match</span>(<span class="st">"MISSAO-51"</span>, <span class="st">@"MISSAO-(?&lt;num&gt;\\d+)"</span>);\nConsole.<span class="mt">WriteLine</span>(m.Groups[<span class="st">"_______"</span>].Value);`,
      q: 'Qual o nome do grupo para acessar o número?',
      hint: 'Conforme declarado no padrão',
      ans: 'num',
      exp: '"(?<num>\\d+)" define o named group "num". m.Groups["num"].Value = "51". Named groups tornam o Regex auto-documentado.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'StringBuilder com múltiplos métodos.',
      code: `<span class="kw">var</span> sb = <span class="kw">new</span> System.Text.StringBuilder(<span class="st">"MISSAO"</span>);\nsb.<span class="mt">Append</span>(<span class="st">"-"</span>).<span class="mt">Append</span>(<span class="nm">51</span>);\nsb.<span class="mt">Insert</span>(<span class="nm">0</span>, <span class="st">"["</span>);\nsb.<span class="mt">Append</span>(<span class="st">"]"</span>);\nConsole.<span class="mt">WriteLine</span>(sb.<span class="mt">ToString</span>());`,
      q: 'O que será exibido?',
      hint: 'Construindo o texto passo a passo',
      opts: [
        { t: 'MISSAO-51', ok: false },
        { t: '[MISSAO-51]', ok: true },
        { t: '[]MISSAO-51', ok: false },
        { t: 'Erro — Append encadeado', ok: false },
      ],
      exp: '"MISSAO" → Append("-") → "MISSAO-" → Append(51) → "MISSAO-51" → Insert(0,"[") → "[MISSAO-51" → Append("]") → "[MISSAO-51]".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Regex extraindo IPs de log.',
      code: `<span class="kw">string</span> log = <span class="st">"Acesso: 192.168.1.5 e 10.0.0.1"</span>;\n<span class="kw">var</span> ips = Regex.<span class="mt">Matches</span>(log, <span class="st">@"\\d+\\.\\d+\\.\\d+\\.\\d+"</span>)\n             .<span class="mt">Select</span>(m => m.Value);\nConsole.<span class="mt">WriteLine</span>(<span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">", "</span>, ips));`,
      q: 'O que será exibido?',
      hint: 'Dois padrões IP no texto',
      opts: [
        { t: '192.168.1.5', ok: false },
        { t: '192.168.1.5, 10.0.0.1', ok: true },
        { t: 'Erro — Matches retorna MatchCollection, não LINQ', ok: false },
        { t: '10.0.0.1', ok: false },
      ],
      exp: 'Regex encontra "192.168.1.5" e "10.0.0.1". Matches retorna MatchCollection que implementa IEnumerable. Select extrai .Value. Join: "192.168.1.5, 10.0.0.1".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Regex.Replace para sanitizar dados.',
      code: `<span class="kw">string</span> entrada = <span class="st">"Leon K3nn3dy"</span>;\n<span class="kw">string</span> limpo = Regex.<span class="mt">Replace</span>(entrada, <span class="st">@"[^a-zA-Z ]"</span>, <span class="st">""</span>);\nConsole.<span class="mt">WriteLine</span>(limpo);`,
      q: 'O que será exibido?',
      hint: 'Remove tudo que não é letra ou espaço',
      opts: [
        { t: 'Leon Kennedy', ok: false },
        { t: 'Leon Knndy', ok: true },
        { t: 'LeonKnndy', ok: false },
        { t: 'Erro — Regex inválida', ok: false },
      ],
      exp: '"[^a-zA-Z ]" = classe negada: qualquer coisa que NÃO é letra ou espaço. Replace por "". "3" removidos: "Leon Knndy".',
    },

  ]
};
