// ══════════════════════════════════════════════════════
// ACT V — A FUGA
// MISSÃO 75 — MAPA DO TERRENO
// Tema: Source Generators e Compile-time code generation conceitos
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_74 = {
  id: 74,
  title: "MISSÃO 75 — MAPA DO TERRENO",
  icon: '🗺️',
  free: false,
  desc: "O mapa do terreno é gerado automaticamente antes da missão. Source Generators geram código C# em tempo de compilação — sem reflexão em runtime, sem overhead. O código perfeito para o terreno perfeito.",
  objs: [
    "Entender o conceito de Source Generators",
    "Usar tipos gerados por Source Generators como JsonSerializerContext",
    "Conhecer atributos que disparam geração de código",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>Source Generators</strong> são componentes do compilador que analisam o código fonte e geram novo código C# durante a compilação. Zero overhead em runtime.',
      q: 'Qual a principal vantagem dos Source Generators sobre Reflection?',
      hint: 'Tempo de compilação vs runtime',
      opts: [
        { t: 'Source Generators são mais fáceis de escrever', ok: false },
        { t: 'O código é gerado em compilação — sem custo de Reflection em runtime, AOT-compatible', ok: true },
        { t: 'Source Generators funcionam apenas no .NET 5', ok: false },
        { t: 'Source Generators permitem modificar código existente', ok: false },
      ],
      exp: 'Source Generators: código gerado antes de rodar. Sem JIT de Reflection, sem dynamic. Compatível com AOT (Ahead-of-Time compilation) para WebAssembly e mobile.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>JsonSerializerContext</code> do System.Text.Json usa Source Generator para geração de serialização sem Reflection — essencial para AOT.',
      q: 'Por que usar [JsonSerializable] com JsonSerializerContext em apps AOT?',
      hint: 'AOT não suporta Reflection',
      opts: [
        { t: 'Para serializar tipos anônimos', ok: false },
        { t: 'AOT não suporta Reflection em runtime — Source Generator gera o código de serialização em compilação', ok: true },
        { t: 'Para serialização mais lenta porém precisa', ok: false },
        { t: '[JsonSerializable] é decorativo', ok: false },
      ],
      exp: 'AOT (NativeAOT, WebAssembly): sem Reflection. [JsonSerializable] + JsonSerializerContext: Source Generator gera serializadores específicos em compilação.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<strong>Incremental Source Generators</strong> (recomendados) são mais eficientes — recalculam apenas o que mudou, não analisam o projeto inteiro.',
      q: 'Por que usar IIncrementalGenerator em vez de ISourceGenerator (deprecated)?',
      hint: 'Performance do IDE',
      opts: [
        { t: 'IIncrementalGenerator gera código mais rápido em runtime', ok: false },
        { t: 'Incremental recalcula apenas partes que mudaram — evita slowdown do IDE em projetos grandes', ok: true },
        { t: 'ISourceGenerator não funciona no .NET 6+', ok: false },
        { t: 'São equivalentes para projetos pequenos apenas', ok: false },
      ],
      exp: 'ISourceGenerator roda completo a cada mudança → IDE lento. IIncrementalGenerator: pipeline de transformações com cache — só recalcula o que mudou.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '[<code>LoggerMessage</code>] Source Generator (Microsoft.Extensions.Logging) gera métodos de logging de alta performance sem alocações.',
      q: 'Qual é o benefício do [LoggerMessage] Source Generator?',
      hint: 'Zero alocação em logging',
      opts: [
        { t: 'Logs são salvos automaticamente', ok: false },
        { t: 'Gera métodos de logging fortemente tipados sem alocações — mais rápido que string interpolation em logs', ok: true },
        { t: 'Permite logs em múltiplos arquivos', ok: false },
        { t: '[LoggerMessage] é exclusivo para ASP.NET', ok: false },
      ],
      exp: '[LoggerMessage] gera: "partial void LogInimigo(Inimigo e)" → zero alocação. vs logger.LogInformation($"{e}") → sempre cria string mesmo se log level desativado.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Configurando JsonSerializerContext com Source Generator:',
      code: `[JsonSerializable(<span class="kw">typeof</span>(Missao))]\n<span class="kw">internal partial class</span> _______  : JsonSerializerContext\n{\n}`,
      q: 'Como nomear o context de serialização por convenção?',
      hint: 'Contexto customizado de serialização',
      ans: 'MissaoContext',
      exp: '"MissaoContext : JsonSerializerContext" é o context. [JsonSerializable(typeof(Missao))] diz ao Source Generator para gerar serialização para Missao.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Usando o context gerado para serializar sem Reflection:',
      code: `<span class="kw">var</span> json = JsonSerializer.<span class="mt">Serialize</span>(missao, MissaoContext.Default.<span class="mt">_______</span>);`,
      q: 'Qual propriedade do context acessar para o TypeInfo de Missao?',
      hint: 'O nome do tipo',
      ans: 'Missao',
      exp: '"MissaoContext.Default.Missao" é o JsonTypeInfo<Missao> gerado. Sem Reflection — código específico gerado em compilação.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Partial class necessária para Source Generator adicionar código:',
      code: `<span class="kw">_______  partial class</span> MissaoService\n{\n    <span class="cm">// Código existente aqui</span>\n    <span class="cm">// Source Generator adicionará código aqui</span>\n}`,
      q: 'Qual modificador permite que Source Generators adicionem partes à classe?',
      hint: 'Parcial em inglês',
      ans: 'public',
      exp: 'A classe precisa ser "partial" para Source Generators adicionarem partes. "public partial class" ou simplesmente "partial class" são necessários.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'AutoMapper-like com Source Generator conceitual.',
      code: `<span class="cm">// Suponha que um Source Generator gerou:</span>\n<span class="cm">// public static partial class Mapper {</span>\n<span class="cm">//   public static Dto ToDto(Entity e) => new(e.Id, e.Nome); }</span>\n\n<span class="kw">record</span> Entity(<span class="kw">int</span> Id, <span class="kw">string</span> Nome, <span class="kw">string</span> Senha);\n<span class="kw">record</span> Dto(<span class="kw">int</span> Id, <span class="kw">string</span> Nome);\n\n<span class="cm">// Simulando manualmente:</span>\n<span class="kw">static</span> Dto <span class="mt">ToDto</span>(Entity e) => <span class="kw">new</span>(e.Id, e.Nome);\n<span class="kw">var</span> e = <span class="kw">new</span> Entity(<span class="nm">1</span>, <span class="st">"Leon"</span>, <span class="st">"secret"</span>);\n<span class="kw">var</span> dto = <span class="mt">ToDto</span>(e);\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"{dto.Id} {dto.Nome}"</span>);`,
      q: 'O que será exibido?',
      hint: 'Dto não tem Senha — só Id e Nome',
      opts: [
        { t: '1 Leon secret', ok: false },
        { t: '1 Leon', ok: true },
        { t: 'Entity Leon', ok: false },
        { t: 'Erro — record com parâmetros', ok: false },
      ],
      exp: 'ToDto(e) cria Dto(1, "Leon") — sem Senha (segurança). dto.Id=1, dto.Nome="Leon". "1 Leon".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Enum com [EnumMember] e geração de descrições.',
      code: `<span class="kw">enum</span> Status { Ativo, Inativo, Suspendo }\n\n<span class="kw">static string</span> <span class="mt">Descricao</span>(Status s) => s <span class="kw">switch</span>\n{\n    Status.Ativo    => <span class="st">"🟢 Ativo"</span>,\n    Status.Inativo  => <span class="st">"🔴 Inativo"</span>,\n    _               => <span class="st">"⚠️ Suspenso"</span>\n};\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Descricao</span>(Status.Inativo));`,
      q: 'O que será exibido?',
      hint: 'Status.Inativo → segundo case',
      opts: [
        { t: '🟢 Ativo', ok: false },
        { t: '🔴 Inativo', ok: true },
        { t: '⚠️ Suspenso', ok: false },
        { t: 'Inativo', ok: false },
      ],
      exp: 'switch(Status.Inativo) → case Inativo → "🔴 Inativo".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Partial method gerada por Source Generator (simulado).',
      code: `<span class="kw">partial class</span> Processador\n{\n    <span class="kw">partial void</span> <span class="mt">OnProcessado</span>(<span class="kw">int</span> n);\n    <span class="kw">public void</span> <span class="mt">Processar</span>(<span class="kw">int</span> n)\n    {\n        <span class="mt">OnProcessado</span>(n); <span class="cm">// chamado se implementado</span>\n        Console.<span class="mt">WriteLine</span>(<span class="st">$"Processado: {n}"</span>);\n    }\n}\n\n<span class="kw">partial class</span> Processador\n{\n    <span class="kw">partial void</span> <span class="mt">OnProcessado</span>(<span class="kw">int</span> n)\n        => Console.<span class="mt">Write</span>(<span class="st">$"Pre:{n} "</span>);\n}\n\n<span class="kw">new</span> Processador().<span class="mt">Processar</span>(<span class="nm">42</span>);`,
      q: 'O que será exibido?',
      hint: 'OnProcessado chama antes de "Processado:"',
      opts: [
        { t: 'Processado: 42', ok: false },
        { t: 'Pre:42 Processado: 42', ok: true },
        { t: 'Pre:42', ok: false },
        { t: 'Erro — partial void não pode ter implementação', ok: false },
      ],
      exp: 'Processar chama OnProcessado(42) → "Pre:42 ". Depois "Processado: 42". Partial methods: definição em uma parte, implementação em outra.',
    },

  ]
};
