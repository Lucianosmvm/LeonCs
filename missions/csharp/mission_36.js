const MISSION_36 = {
  id: 36,
  title: "MISSÃO 37 — A CÂMARA DE TORTURA",
  icon: '⛓️',
  free: false,
  desc: "Strings escondem armadilhas para quem não as conhece. Imutabilidade, concatenação ineficiente, encoding... A câmara de tortura revela os segredos das strings em C#.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Strings em C# são <strong>imutáveis</strong>. Toda operação como "ToUpper()" ou "+" cria uma nova string na heap.',
      q: 'Por que concatenar strings em loop com "+" é ineficiente?',
      hint: 'Cada + cria um novo objeto',
      opts: [
        { t: '"+" é mais lento que outros operadores', ok: false },
        { t: 'Cada concatenação cria uma nova string, gerando muitos objetos descartados na heap', ok: true },
        { t: 'Strings não suportam "+" em loops', ok: false },
        { t: 'O compilador proíbe "+" em loops', ok: false },
      ],
      exp: 'Para 1000 concatenações, são criados ~1000 objetos string intermediários. StringBuilder resolve isso com buffer mutável.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<strong>StringBuilder</strong> é um buffer mutável para construção eficiente de strings. Use quando concatenar em loops.',
      q: 'Quando NÃO vale a pena usar StringBuilder?',
      hint: 'Overhead fixo',
      opts: [
        { t: 'Sempre — StringBuilder é sempre melhor', ok: false },
        { t: 'Para poucas concatenações (2-5), o "+" é mais legível e fast enough', ok: true },
        { t: 'StringBuilder não funciona com números', ok: false },
        { t: 'Em métodos async', ok: false },
      ],
      exp: 'StringBuilder tem overhead de criação. Para poucas concatenações, o compilador otimiza "+" automaticamente. Use para loops ou muitas concatenações.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>string.Intern()</code> e <strong>string pool</strong>: o CLR pode reutilizar strings literais idênticas, economizando memória.',
      q: 'Dois literais "abc" == "abc" retorna true ou false?',
      hint: 'String pool e valor vs referência',
      opts: [
        { t: 'False — são objetos diferentes', ok: false },
        { t: 'True — comparação por valor (conteúdo), não referência', ok: true },
        { t: 'Depende da versão do .NET', ok: false },
        { t: 'Lança exceção', ok: false },
      ],
      exp: '"==" em strings compara conteúdo, não referência (ao contrário de outros tipos de referência). "abc"=="abc" = true.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>string.Format()</code>, interpolação <code>$""</code> e <code>string.Concat()</code> têm usos diferentes. Interpolação é a mais moderna e legível.',
      q: 'Qual a forma mais moderna e legível de construir "Leon: 100hp"?',
      hint: 'C# 6+ introduziu esse recurso',
      opts: [
        { t: '"Leon" + ": " + hp + "hp"', ok: false },
        { t: 'string.Format("Leon: {0}hp", hp)', ok: false },
        { t: '$"Leon: {hp}hp"', ok: true },
        { t: 'string.Concat("Leon: ", hp, "hp")', ok: false },
      ],
      exp: 'Interpolação $"" (C# 6+) é mais legível que Format e +. Suporta expressões: $"{hp * 2}hp".',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Criando e usando StringBuilder para construção eficiente:',
      code: `<span class="kw">var</span> sb = <span class="kw">new</span> System.Text.<span class="kw">_______</span>();\nsb.<span class="mt">Append</span>(<span class="st">"Leon"</span>);\nsb.<span class="mt">Append</span>(<span class="st">" S. Kennedy"</span>);\n<span class="kw">string</span> resultado = sb.<span class="mt">ToString</span>();`,
      q: 'Qual classe usar para construção eficiente de strings?',
      hint: 'Construtor de strings',
      ans: 'StringBuilder',
      exp: '"StringBuilder" no namespace System.Text. Append() adiciona ao buffer. ToString() converte para string imutável no final.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Para dividir uma string por um separador e obter um array de partes:',
      code: `<span class="kw">string</span> csv = <span class="st">"Leon,Ada,Ashley"</span>;\n<span class="kw">string</span>[] nomes = csv.<span class="mt">_______</span>(<span class="st">','</span>);`,
      q: 'Qual método divide a string por um caractere separador?',
      hint: 'Dividir em inglês',
      ans: 'Split',
      exp: '"Split(\',\')" divide por vírgula: {"Leon","Ada","Ashley"}. Aceita char, string ou array de delimitadores.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Para verificar se uma string contém uma substring:',
      code: `<span class="kw">bool</span> temCodigo = serial.<span class="mt">_______</span>(<span class="st">"RE4"</span>);`,
      q: 'Qual método verifica se a substring está presente?',
      hint: 'Contém em inglês',
      ans: 'Contains',
      exp: '"Contains("RE4")" retorna true se a substring existir. Por padrão case-sensitive. Para ignorar caso: Contains("re4", StringComparison.OrdinalIgnoreCase).',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Para remover espaços do início e fim de uma string (comum ao ler input):',
      code: `<span class="kw">string</span> limpo = entrada.<span class="mt">_______</span>();`,
      q: 'Qual método remove espaços nas bordas da string?',
      hint: 'Aparar, cortar as bordas',
      ans: 'Trim',
      exp: '"Trim()" remove espaços (e outros whitespace) do início e fim. "TrimStart()" apenas início. "TrimEnd()" apenas fim.',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Imutabilidade de strings em ação.',
      code: `<span class="kw">string</span> nome = <span class="st">"leon"</span>;\nnome.<span class="mt">ToUpper</span>();            <span class="cm">// não modifica nome!</span>\nConsole.<span class="mt">WriteLine</span>(nome);\n\nnome = nome.<span class="mt">ToUpper</span>();    <span class="cm">// reatribui</span>\nConsole.<span class="mt">WriteLine</span>(nome);`,
      q: 'O que será exibido?',
      hint: 'Strings são imutáveis — métodos retornam novas strings',
      opts: [
        { t: 'LEON e LEON', ok: false },
        { t: 'leon e LEON', ok: true },
        { t: 'leon e leon', ok: false },
        { t: 'Erro — ToUpper() não existe', ok: false },
      ],
      exp: '"nome.ToUpper()" retorna "LEON" mas não modifica nome. nome ainda é "leon". Só ao reatribuir "nome = nome.ToUpper()" ele vira "LEON".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'StringBuilder para construção em loop.',
      code: `<span class="kw">var</span> sb = <span class="kw">new</span> System.Text.StringBuilder();\n<span class="kw">string</span>[] inimigos = {<span class="st">"Ganado"</span>, <span class="st">"Cultista"</span>, <span class="st">"Regenerador"</span>};\n<span class="kw">foreach</span> (<span class="kw">var</span> e <span class="kw">in</span> inimigos)\n    sb.<span class="mt">AppendLine</span>(<span class="st">$"- {e}"</span>);\nConsole.<span class="mt">Write</span>(sb.<span class="mt">ToString</span>().<span class="mt">Trim</span>());`,
      q: 'Quantas linhas serão exibidas?',
      hint: 'AppendLine adiciona texto + nova linha',
      opts: [
        { t: '1', ok: false },
        { t: '3', ok: true },
        { t: '4', ok: false },
        { t: '0', ok: false },
      ],
      exp: 'AppendLine adiciona cada inimigo com "\\n". Trim() remove o \\n final. 3 linhas: "- Ganado", "- Cultista", "- Regenerador".',
    },

    // Q11 — Code
    {
      type: 'code',
      bubble: 'Métodos de busca e substituição em strings.',
      code: `<span class="kw">string</span> msg = <span class="st">"Missão: salvar Ashley. Boa sorte, Ashley."</span>;\n<span class="kw">string</span> nova = msg.<span class="mt">Replace</span>(<span class="st">"Ashley"</span>, <span class="st">"a refém"</span>);\nConsole.<span class="mt">WriteLine</span>(nova.<span class="mt">Contains</span>(<span class="st">"Ashley"</span>));\nConsole.<span class="mt">WriteLine</span>(nova.<span class="mt">Split</span>(<span class="st">"a refém"</span>).<span class="mt">Length</span> - <span class="nm">1</span>);`,
      q: 'O que será exibido?',
      hint: 'Replace substitui todas as ocorrências. Split cria N+1 partes para N delimitadores.',
      opts: [
        { t: 'True e 1', ok: false },
        { t: 'False e 2', ok: true },
        { t: 'False e 1', ok: false },
        { t: 'True e 2', ok: false },
      ],
      exp: 'Replace substitui todas as "Ashley". nova não contém mais "Ashley" → Contains = False. Split por "a refém" cria 3 partes → Length-1 = 2.',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'String.Join para montar saída elegante.',
      code: `<span class="kw">var</span> armas = <span class="kw">new</span>[] { <span class="st">"Pistola"</span>, <span class="st">"Escopeta"</span>, <span class="st">"Rifle"</span> };\n<span class="kw">string</span> lista  = <span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">" | "</span>, armas);\n<span class="kw">string</span> ultima = armas[^<span class="nm">1</span>];\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"{lista} ({armas.<span class="mt">Length</span>} armas, última: {ultima})"</span>);`,
      q: 'O que será exibido?',
      hint: 'Join concatena com separador; [^1] acessa o último',
      opts: [
        { t: 'Pistola | Escopeta | Rifle (3 armas, última: Rifle)', ok: true },
        { t: 'Pistola, Escopeta, Rifle (3 armas, última: Pistola)', ok: false },
        { t: 'Pistola | Escopeta | Rifle (3 armas, última: Pistola)', ok: false },
        { t: 'Erro — [^1] inválido para array', ok: false },
      ],
      exp: 'Join(" | ", armas) = "Pistola | Escopeta | Rifle". armas[^1] = "Rifle" (índice do fim). armas.Length = 3.',
    },

  ]
};
