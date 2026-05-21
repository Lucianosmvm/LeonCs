// ══════════════════════════════════════════════════════
// ACT V — A FUGA
// MISSÃO 73 — SINAIS DO NORTE ⚔️
// Tema: C# 10-12 features — global using, file-scoped namespace, required, primary constructors
// Tipo: Chefe (18 questões) | 6 MC → 5 Fill → 7 Code
// ══════════════════════════════════════════════════════

const MISSION_72 = {
  id: 72,
  title: "MISSÃO 73 — SINAIS DO NORTE ⚔️",
  icon: '⚔️',
  free: false,
  desc: "Na fuga, você recebe sinais modernos — as features mais recentes do C# que reduzem ruído e aumentam clareza. Primary constructors, required members e global using são os novos protocolos de comunicação.",
  objs: [
    "Usar primary constructors do C# 12",
    "Aplicar required members para garantir inicialização",
    "Usar global using, file-scoped namespace e top-level statements",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>Primary constructors</strong> (C# 12) permitem declarar parâmetros do construtor diretamente na assinatura da classe, tornando-os disponíveis em todo o corpo.',
      q: 'O que "class Agente(string nome, int hp)" faz em C# 12?',
      hint: 'Parâmetros direto na classe',
      opts: [
        { t: 'Cria um record', ok: false },
        { t: 'Declara um construtor primário — nome e hp ficam disponíveis como parâmetros em todo o corpo da classe', ok: true },
        { t: 'Cria propriedades públicas automaticamente', ok: false },
        { t: 'É equivalente a um record struct', ok: false },
      ],
      exp: 'Primary constructor: parâmetros declarados na classe. Ficam em escopo no corpo. NÃO cria propriedades automaticamente como records — você precisa criar se quiser.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>required</code> (C# 11) força que uma propriedade seja definida no object initializer. Erro de compilação se não inicializada.',
      q: 'Qual a vantagem de "required" sobre construtor com parâmetros?',
      hint: 'Flexibilidade na inicialização',
      opts: [
        { t: 'required é mais rápido', ok: false },
        { t: 'required permite qualquer ordem de inicialização via object initializer, mantendo a obrigatoriedade', ok: true },
        { t: 'required funciona apenas com strings', ok: false },
        { t: 'required elimina a necessidade de construtor', ok: false },
      ],
      exp: '"required" combina object initializer (flexível) com obrigatoriedade. "new Missao { Nome = "x" }" — se Nome é required, esquecê-lo é erro de compilação.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>global using</code> (C# 10) aplica um using para todos os arquivos do projeto. <code>file-scoped namespace</code> elimina o nível de indentação da namespace.',
      q: 'Em qual arquivo colocar "global using System.Collections.Generic;"?',
      hint: 'Arquivo dedicado a usings globais',
      opts: [
        { t: 'Em todos os arquivos .cs', ok: false },
        { t: 'Em um arquivo dedicado (ex: GlobalUsings.cs) ou no csproj com ImplicitUsings', ok: true },
        { t: 'No Program.cs apenas', ok: false },
        { t: 'global using não existe em C#', ok: false },
      ],
      exp: '"GlobalUsings.cs" com todos os "global using" é padrão. O SDK .NET 6+ gera GlobalUsings automaticamente com ImplicitUsings no csproj.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Top-level statements (C# 9) eliminam a classe Program e o método Main. O arquivo Program.cs pode ter código diretamente.',
      q: 'Qual a vantagem dos top-level statements?',
      hint: 'Menos cerimônia',
      opts: [
        { t: 'Executam mais rápido que método Main', ok: false },
        { t: 'Reduzem cerimônia para scripts e aplicações simples — sem class Program/static void Main', ok: true },
        { t: 'Permitem múltiplos pontos de entrada', ok: false },
        { t: 'Funcionam apenas em .NET 6', ok: false },
      ],
      exp: 'Top-level: "Console.WriteLine("Hello");" é um programa completo válido. Sem namespace, sem class, sem Main. Ideal para scripts, demos e microservices simples.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>file</code> access modifier (C# 11) limita o tipo ao arquivo onde está declarado. Melhor que internal para encapsulamento de implementação.',
      q: 'Quando usar "file class MinhaClasse" em vez de "internal class MinhaClasse"?',
      hint: 'Visibilidade mais restrita',
      opts: [
        { t: 'file é equivalente a private', ok: false },
        { t: 'Quando a classe só deve ser visível dentro do mesmo arquivo — mais encapsulado que internal', ok: true },
        { t: 'file classes não podem ter métodos públicos', ok: false },
        { t: 'file é para arquivos gerados por source generators', ok: false },
      ],
      exp: '"file" restringe ao arquivo. "internal" restringe ao assembly. "file" é mais granular — ideal para helpers de implementação internos a um arquivo.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<strong>Collection Expressions</strong> (C# 12): <code>[1, 2, 3]</code> cria arrays, listas ou spans dependendo do contexto de tipo.',
      q: 'O que "int[] nums = [1, 2, 3]" usa de C# 12?',
      hint: 'Nova sintaxe para coleções',
      opts: [
        { t: 'Spread operator', ok: false },
        { t: 'Collection expression — sintaxe unificada para criar coleções', ok: true },
        { t: 'Range operator', ok: false },
        { t: 'Pattern matching avançado', ok: false },
      ],
      exp: 'Collection expressions: "[...]" funciona para int[], List<int>, Span<int> dependendo do tipo alvo. Substitui "new int[]{ }" e "new List<int>{ }".',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Primary constructor em classe com campo:',
      code: `<span class="kw">class</span> Inimigo(<span class="kw">string</span> nome, <span class="kw">int</span> hp)\n{\n    <span class="kw">public string</span> Nome { <span class="kw">get</span>; } = _______;\n    <span class="kw">public int</span> HP { <span class="kw">get</span>; <span class="kw">set</span>; } = hp;\n}`,
      q: 'Como referenciar o parâmetro "nome" do primary constructor?',
      hint: 'Igual ao nome do parâmetro',
      ans: 'nome',
      exp: 'Em primary constructor, "nome" e "hp" são parâmetros acessíveis em todo o corpo da classe. Não são propriedades — use como variáveis para inicializar propriedades.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Propriedade obrigatória com required:',
      code: `<span class="kw">class</span> Missao\n{\n    <span class="kw">public _______  string</span> Codigo { <span class="kw">get</span>; <span class="kw">init</span>; }\n    <span class="kw">public int</span> XP { <span class="kw">get</span>; <span class="kw">init</span>; } = <span class="nm">100</span>;\n}`,
      q: 'Qual modificador torna a propriedade obrigatória na inicialização?',
      hint: 'Obrigatório em inglês',
      ans: 'required',
      exp: '"required" + init: deve ser definido em "new Missao { Codigo = "M-51" }". Esquecer Codigo é erro de compilação CS9035.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'File-scoped namespace elimina indentação:',
      code: `<span class="cm">// Tradicional:</span>\n<span class="kw">namespace</span> MinhApp { <span class="kw">class</span> A { } }\n\n<span class="cm">// File-scoped (C# 10):</span>\n<span class="kw">namespace</span> MinhApp<span class="kw">_______</span>\n<span class="kw">class</span> A { }`,
      q: 'Qual símbolo termina a declaração de file-scoped namespace?',
      hint: 'Ponto e vírgula',
      ans: ';',
      exp: '"namespace MinhApp;" — ponto e vírgula. Elimina o bloco { } e a indentação. Todo o arquivo pertence ao namespace. Padrão moderno.',
    },

    // Q10 — Fill
    {
      type: 'fill',
      bubble: 'Collection expression com spread operator:',
      code: `<span class="kw">int</span>[] a = [<span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span>];\n<span class="kw">int</span>[] b = [<span class="nm">4</span>, <span class="nm">5</span>];\n<span class="kw">int</span>[] c = [<span class="kw">_______</span>a, <span class="kw">..</span>b];\n<span class="cm">// c = [1,2,3,4,5]</span>`,
      q: 'Qual operador expande uma coleção dentro de outra (spread)?',
      hint: 'Dois pontos',
      ans: '..',
      exp: '".." é o spread operator em collection expressions. "..a" expande os elementos de a. Combinar: "[..a, ..b]" concatena os dois arrays.',
    },

    // Q11 — Fill
    {
      type: 'fill',
      bubble: 'Global using para namespace de uso frequente:',
      code: `<span class="cm">// GlobalUsings.cs</span>\n<span class="kw">_______</span> <span class="kw">using</span> System.Collections.Generic;\n<span class="kw">global using</span> System.Text.Json;`,
      q: 'Qual palavra-chave torna um using global para todos os arquivos?',
      hint: 'Global em inglês',
      ans: 'global',
      exp: '"global using" aplica o using em todos os arquivos .cs do projeto. Elimina repetição. SDK .NET 6+ usa ImplicitUsings para gerá-los automaticamente.',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'Primary constructor em uso.',
      code: `<span class="kw">class</span> Arma(<span class="kw">string</span> nome, <span class="kw">int</span> dano)\n{\n    <span class="kw">public string</span> Nome { <span class="kw">get</span>; } = nome;\n    <span class="kw">public int</span> Dano { <span class="kw">get</span>; } = dano;\n    <span class="kw">public string</span> <span class="mt">Info</span>() => <span class="st">$"{Nome}:{Dano}"</span>;\n}\n\n<span class="kw">var</span> arma = <span class="kw">new</span> Arma(<span class="st">"Pistola"</span>, <span class="nm">25</span>);\nConsole.<span class="mt">WriteLine</span>(arma.<span class="mt">Info</span>());`,
      q: 'O que será exibido?',
      hint: 'Nome e Dano do primary constructor',
      opts: [
        { t: 'nome:dano', ok: false },
        { t: 'Pistola:25', ok: true },
        { t: 'Arma:25', ok: false },
        { t: 'Erro — primary constructor em classe', ok: false },
      ],
      exp: 'Primary constructor passa nome="Pistola" e dano=25. Propriedades inicializadas com esses valores. Info(): "Pistola:25".',
    },

    // Q13 — Code
    {
      type: 'code',
      bubble: 'required member forçando inicialização.',
      code: `<span class="kw">class</span> Rota\n{\n    <span class="kw">public required string</span> Destino { <span class="kw">get</span>; <span class="kw">init</span>; }\n    <span class="kw">public int</span> Distancia { <span class="kw">get</span>; <span class="kw">init</span>; } = <span class="nm">0</span>;\n}\n\n<span class="kw">var</span> r = <span class="kw">new</span> Rota { Destino = <span class="st">"Base"</span>, Distancia = <span class="nm">50</span> };\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"{r.Destino} {r.Distancia}"</span>);`,
      q: 'O que será exibido?',
      hint: 'Ambas propriedades inicializadas',
      opts: [
        { t: 'Erro — required não permitido em class', ok: false },
        { t: 'Base 50', ok: true },
        { t: 'Base 0', ok: false },
        { t: 'null 50', ok: false },
      ],
      exp: 'required Destino = "Base". init-only. Distancia = 50. "Base 50". Se Destino fosse omitido, erro CS9035.',
    },

    // Q14 — Code
    {
      type: 'code',
      bubble: 'Collection expression com spread.',
      code: `<span class="kw">int</span>[] inimigos  = [<span class="nm">5</span>, <span class="nm">10</span>, <span class="nm">15</span>];\n<span class="kw">int</span>[] chefes    = [<span class="nm">100</span>, <span class="nm">200</span>];\n<span class="kw">int</span>[] todosHPs  = [..inimigos, ..chefes];\nConsole.<span class="mt">WriteLine</span>(todosHPs.<span class="mt">Sum</span>());`,
      q: 'O que será exibido?',
      hint: '5+10+15+100+200',
      opts: [
        { t: '30', ok: false },
        { t: '300', ok: false },
        { t: '330', ok: true },
        { t: 'Erro — spread operator', ok: false },
      ],
      exp: 'todosHPs = [5,10,15,100,200]. Sum() = 5+10+15+100+200 = 330.',
    },

    // Q15 — Code
    {
      type: 'code',
      bubble: 'File-scoped namespace em ação.',
      code: `<span class="cm">// Arquivo: Arma.cs</span>\n<span class="kw">namespace</span> Jogo.Armas;\n\n<span class="kw">class</span> Pistola\n{\n    <span class="kw">public int</span> Dano => <span class="nm">25</span>;\n}\n\n<span class="cm">// Uso em outro arquivo:</span>\n<span class="kw">var</span> p = <span class="kw">new</span> Jogo.Armas.Pistola();\nConsole.<span class="mt">WriteLine</span>(p.Dano);`,
      q: 'O que será exibido?',
      hint: 'Pistola.Dano = 25',
      opts: [
        { t: 'Erro — file-scoped namespace inválido', ok: false },
        { t: '25', ok: true },
        { t: 'Jogo.Armas.Pistola', ok: false },
        { t: '0', ok: false },
      ],
      exp: '"namespace Jogo.Armas;" — sintaxe file-scoped. Pistola pertence a Jogo.Armas. p.Dano = 25.',
    },

    // Q16 — Code
    {
      type: 'code',
      bubble: 'Primary constructor com DI (C# 12).',
      code: `<span class="kw">interface</span> ILog { <span class="kw">void</span> <span class="mt">Log</span>(<span class="kw">string</span> m); }\n<span class="kw">class</span> ConsoleLog : ILog { <span class="kw">public void</span> <span class="mt">Log</span>(<span class="kw">string</span> m) => Console.<span class="mt">WriteLine</span>(<span class="st">$">{m}"</span>); }\n\n<span class="kw">class</span> Servico(ILog log)\n{\n    <span class="kw">public void</span> <span class="mt">Executar</span>() => log.<span class="mt">Log</span>(<span class="st">"Executando"</span>);\n}\n\n<span class="kw">new</span> Servico(<span class="kw">new</span> ConsoleLog()).<span class="mt">Executar</span>();`,
      q: 'O que será exibido?',
      hint: 'Primary constructor com DI via log',
      opts: [
        { t: 'Executando', ok: false },
        { t: '>Executando', ok: true },
        { t: 'ConsoleLog', ok: false },
        { t: 'Erro — primary constructor em class', ok: false },
      ],
      exp: 'Primary constructor captura "log". Executar() chama log.Log("Executando"). ConsoleLog formata: ">Executando".',
    },

    // Q17 — Code
    {
      type: 'code',
      bubble: 'Verificando required em objeto incompleto.',
      code: `<span class="kw">class</span> Config\n{\n    <span class="kw">public required string</span> ApiKey { <span class="kw">get</span>; <span class="kw">init</span>; }\n    <span class="kw">public string</span> Url { <span class="kw">get</span>; <span class="kw">init</span>; } = <span class="st">"https://api.default.com"</span>;\n}\n<span class="kw">var</span> c = <span class="kw">new</span> Config { ApiKey = <span class="st">"sk-123"</span> };\nConsole.<span class="mt">WriteLine</span>(c.Url);`,
      q: 'O que será exibido?',
      hint: 'Url usa valor padrão',
      opts: [
        { t: 'null', ok: false },
        { t: 'https://api.default.com', ok: true },
        { t: 'Erro — ApiKey é required', ok: false },
        { t: 'sk-123', ok: false },
      ],
      exp: 'ApiKey = "sk-123" (required cumprido). Url não passado → usa default "https://api.default.com". Console.WriteLine exibe a URL padrão.',
    },

    // Q18 — Code (DESAFIO CHEFE)
    {
      type: 'code',
      bubble: '🏆 DESAFIO CHEFE — Combinando features C# 12 modernas.',
      code: `<span class="kw">record</span> Item(<span class="kw">string</span> Nome, <span class="kw">int</span> Valor);\n\n<span class="kw">class</span> Inventario(List&lt;Item&gt; itens)\n{\n    <span class="kw">public int</span> ValorTotal => itens.<span class="mt">Sum</span>(i => i.Valor);\n    <span class="kw">public</span> Inventario <span class="mt">Adicionar</span>(Item item) => <span class="kw">new</span>([..itens, item]);\n}\n\n<span class="kw">var</span> inv = <span class="kw">new</span> Inventario([<span class="kw">new</span>(<span class="st">"Erva"</span>, <span class="nm">50</span>), <span class="kw">new</span>(<span class="st">"Faca"</span>, <span class="nm">200</span>)]);\n<span class="kw">var</span> inv2 = inv.<span class="mt">Adicionar</span>(<span class="kw">new</span>(<span class="st">"Pistola"</span>, <span class="nm">500</span>));\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"inv:{inv.ValorTotal} inv2:{inv2.ValorTotal}"</span>);`,
      q: 'O que será exibido?',
      hint: 'inv: Erva+Faca; inv2: Erva+Faca+Pistola',
      opts: [
        { t: 'inv:250 inv2:750', ok: true },
        { t: 'inv:750 inv2:750', ok: false },
        { t: 'inv:250 inv2:500', ok: false },
        { t: 'Erro — Adicionar retorna novo Inventario', ok: false },
      ],
      exp: 'inv: 50+200=250. Adicionar cria novo Inventario com spread + novo item. inv2: 50+200+500=750. inv não muda. "inv:250 inv2:750".',
    },

  ]
};
