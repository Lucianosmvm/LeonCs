// ══════════════════════════════════════════════════════
// ACT III — A ILHA
// MISSÃO 58 — MARCAS DO COMBATE
// Tema: Atributos (Attributes) — criação, uso e leitura via Reflection
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_57 = {
  id: 57,
  title: "MISSÃO 58 — MARCAS DO COMBATE",
  icon: '🏷️',
  free: false,
  desc: "Cada inimigo na ilha tem marcadores especiais que revelam seu comportamento. Os Attributes em C# funcionam assim — metadados que marcam código e são lidos por frameworks em runtime.",
  objs: [
    "Entender o que são Attributes e para que servem",
    "Criar Attributes customizados herdando de Attribute",
    "Ler Attributes em runtime via Reflection",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>Attributes</strong> são metadados declarativos aplicados a tipos, métodos, propriedades, etc. com a sintaxe <code>[NomeDoAttribute]</code>.',
      q: 'O que um Attribute adiciona ao código?',
      hint: 'Meta informação',
      opts: [
        { t: 'Lógica de execução extra', ok: false },
        { t: 'Metadados que descrevem o código, lidos em runtime por ferramentas e frameworks', ok: true },
        { t: 'Comentários especiais do compilador', ok: false },
        { t: 'Modificadores de acesso adicionais', ok: false },
      ],
      exp: 'Attributes adicionam metadados sem alterar o comportamento diretamente. [Serializable], [Obsolete], [Required] — o código que os lê decide o que fazer.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Attributes customizados herdam de <code>System.Attribute</code>. Por convenção, o nome termina com "Attribute", mas ao usar omite-se o sufixo.',
      q: 'Se minha classe se chama "InfoMissaoAttribute", como aplico ela?',
      hint: 'O sufixo Attribute é omitido',
      opts: [
        { t: '[InfoMissaoAttribute]', ok: false },
        { t: '[InfoMissao]', ok: true },
        { t: '@InfoMissao', ok: false },
        { t: 'Attribute.Apply<InfoMissao>()', ok: false },
      ],
      exp: 'Convenção: classe "XyzAttribute" é usada como "[Xyz]". O compilador tenta "[Xyz]" e "[XyzAttribute]" automaticamente. Ambas as formas funcionam.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>AttributeUsage</code> define onde um attribute pode ser aplicado e se pode ser repetido. <code>AttributeTargets.Method | AttributeTargets.Class</code> permite ambos.',
      q: 'Como restringir um Attribute para ser usado apenas em métodos?',
      hint: 'Decorar o próprio Attribute',
      opts: [
        { t: '[AllowedTarget(Target.Method)]', ok: false },
        { t: '[AttributeUsage(AttributeTargets.Method)]', ok: true },
        { t: '[MethodOnly]', ok: false },
        { t: 'Attributes sempre funcionam em qualquer alvo', ok: false },
      ],
      exp: '"[AttributeUsage(AttributeTargets.Method)]" no seu Attribute customizado restringe onde ele pode ser aplicado. Uso em classe causaria erro de compilação.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Para ler um Attribute em runtime, usamos Reflection: <code>GetCustomAttribute&lt;T&gt;()</code> ou <code>GetCustomAttributes()</code>.',
      q: 'Como obter o Attribute [InfoMissao] de um método via Reflection?',
      hint: 'GetCustomAttribute genérico',
      opts: [
        { t: 'methodInfo.Attribute<InfoMissao>()', ok: false },
        { t: 'methodInfo.GetCustomAttribute<InfoMissaoAttribute>()', ok: true },
        { t: 'Attribute.Get(methodInfo)', ok: false },
        { t: 'methodInfo.Metadata[typeof(InfoMissao)]', ok: false },
      ],
      exp: '"methodInfo.GetCustomAttribute<InfoMissaoAttribute>()" retorna o atributo ou null. Para todos os atributos: GetCustomAttributes(). Funciona em Type, PropertyInfo, etc.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Criando um Attribute customizado para marcar missões:',
      code: `[AttributeUsage(AttributeTargets.Class)]\n<span class="kw">public class</span> MissaoAttribute : <span class="kw">_______</span>\n{\n    <span class="kw">public string</span> Codigo { <span class="kw">get</span>; }\n    <span class="kw">public</span> <span class="mt">MissaoAttribute</span>(<span class="kw">string</span> codigo) => Codigo = codigo;\n}`,
      q: 'De qual classe base todos os Attributes devem herdar?',
      hint: 'Classe base de atributos',
      ans: 'Attribute',
      exp: 'Todos os Attributes herdam de "System.Attribute". O sufixo "Attribute" na classe é a convenção padrão do .NET.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Aplicando o Attribute customizado a uma classe:',
      code: `[<span class="kw">_______</span>(<span class="st">"MISSAO-51"</span>)]\n<span class="kw">public class</span> OperacaoIlha\n{\n    <span class="cm">// classe marcada com metadado</span>\n}`,
      q: 'Como aplicar o MissaoAttribute (sem o sufixo)?',
      hint: 'Nome sem Attribute',
      ans: 'Missao',
      exp: '"[Missao("MISSAO-51")]" — o compilador encontra "MissaoAttribute". O construtor recebe o código. Parâmetros posicionais do construtor são os args do attribute.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Lendo o Attribute de uma classe em runtime:',
      code: `<span class="kw">var</span> attr = <span class="kw">typeof</span>(OperacaoIlha)\n    .<span class="mt">_______</span>&lt;MissaoAttribute&gt;()!;\nConsole.<span class="mt">WriteLine</span>(attr.Codigo);`,
      q: 'Qual método obtém um Attribute específico do Type?',
      hint: 'Get + Custom + Attribute',
      ans: 'GetCustomAttribute',
      exp: '"GetCustomAttribute<MissaoAttribute>()" retorna o MissaoAttribute ou null. attr.Codigo = "MISSAO-51". Funciona em Type, MethodInfo, PropertyInfo, etc.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'Attribute com múltiplas propriedades.',
      code: `[AttributeUsage(AttributeTargets.Method)]\n<span class="kw">class</span> ComandoAttribute : Attribute\n{\n    <span class="kw">public string</span> Nome { <span class="kw">get</span>; }\n    <span class="kw">public int</span> Prioridade { <span class="kw">get</span>; }\n    <span class="kw">public</span> <span class="mt">ComandoAttribute</span>(<span class="kw">string</span> nome, <span class="kw">int</span> p) { Nome=nome; Prioridade=p; }\n}\n\n<span class="kw">class</span> Bot\n{\n    [Comando(<span class="st">"atacar"</span>, <span class="nm">1</span>)]\n    <span class="kw">public void</span> <span class="mt">Atacar</span>() { }\n}\n\n<span class="kw">var</span> m = <span class="kw">typeof</span>(Bot).<span class="mt">GetMethod</span>(<span class="st">"Atacar"</span>)!;\n<span class="kw">var</span> cmd = m.<span class="mt">GetCustomAttribute</span>&lt;ComandoAttribute&gt;()!;\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"{cmd.Nome} p{cmd.Prioridade}"</span>);`,
      q: 'O que será exibido?',
      hint: 'Nome="atacar", Prioridade=1',
      opts: [
        { t: 'Atacar p0', ok: false },
        { t: 'atacar p1', ok: true },
        { t: 'ComandoAttribute', ok: false },
        { t: 'Erro — Attribute em método', ok: false },
      ],
      exp: 'GetCustomAttribute<ComandoAttribute>() obtém o attribute. cmd.Nome="atacar", cmd.Prioridade=1. Saída: "atacar p1".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Listando métodos marcados com um Attribute específico.',
      code: `[AttributeUsage(AttributeTargets.Method)]\n<span class="kw">class</span> TesteAttribute : Attribute { }\n\n<span class="kw">class</span> Suite\n{\n    [Teste] <span class="kw">public void</span> <span class="mt">T1</span>() { }\n    [Teste] <span class="kw">public void</span> <span class="mt">T2</span>() { }\n    <span class="kw">public void</span> <span class="mt">Helper</span>() { }\n}\n\n<span class="kw">var</span> testes = <span class="kw">typeof</span>(Suite).<span class="mt">GetMethods</span>()\n    .<span class="mt">Where</span>(m => m.<span class="mt">GetCustomAttribute</span>&lt;TesteAttribute&gt;() != <span class="kw">null</span>);\nConsole.<span class="mt">WriteLine</span>(testes.<span class="mt">Count</span>());`,
      q: 'Quantos métodos têm o attribute [Teste]?',
      hint: 'T1 e T2 têm; Helper não',
      opts: [
        { t: '1', ok: false },
        { t: '2', ok: true },
        { t: '3', ok: false },
        { t: 'Mais que 3 — GetMethods inclui métodos herdados de object', ok: false },
      ],
      exp: 'T1 e T2 têm [Teste]. Helper não tem. Where filtra: Count() = 2.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Attribute [Obsolete] — embutido no .NET para marcar código deprecated.',
      code: `<span class="kw">class</span> Agente\n{\n    [Obsolete(<span class="st">"Use AtacarV2"</span>, error: <span class="kw">false</span>)]\n    <span class="kw">public void</span> <span class="mt">Atacar</span>() => Console.<span class="mt">WriteLine</span>(<span class="st">"Legado"</span>);\n    <span class="kw">public void</span> <span class="mt">AtacarV2</span>() => Console.<span class="mt">WriteLine</span>(<span class="st">"Moderno"</span>);\n}\n<span class="kw">var</span> a = <span class="kw">new</span> Agente();\na.<span class="mt">Atacar</span>(); <span class="cm">// warning, não erro</span>`,
      q: 'O que acontece ao chamar Atacar()?',
      hint: 'error: false = apenas warning',
      opts: [
        { t: 'Erro de compilação — método obsoleto', ok: false },
        { t: 'Executa normalmente com warning de compilação', ok: true },
        { t: 'Lança ObsoleteException em runtime', ok: false },
        { t: 'Nada — código obsoleto é ignorado', ok: false },
      ],
      exp: '"error: false" → apenas warning CS0618. Compila e executa normalmente. "error: true" seria erro de compilação. O método imprime "Legado".',
    },

  ]
};
