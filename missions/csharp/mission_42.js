const MISSION_42 = {
  id: 42,
  title: "MISSÃO 43 — A PASSAGEM SECRETA",
  icon: '🚪',
  free: false,
  desc: "Leon descobre uma passagem oculta — uma extensão do mapa que ninguém esperava. Extension Methods adicionam funcionalidades a tipos existentes sem modificar seu código-fonte.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>Extension Methods</strong> permitem adicionar métodos a tipos existentes (inclusive os do .NET) sem herança ou modificação da classe original.',
      q: 'Quais são os requisitos para criar um extension method?',
      hint: 'Classe estática + método estático + this no primeiro parâmetro',
      opts: [
        { t: 'Qualquer método em qualquer classe', ok: false },
        { t: 'Método estático em classe estática, com "this TipoExtendido" como primeiro parâmetro', ok: true },
        { t: 'Método público em uma interface', ok: false },
        { t: 'Método virtual em classe abstrata', ok: false },
      ],
      exp: '3 regras: (1) classe deve ser "static", (2) método deve ser "static", (3) primeiro parâmetro: "this TipoAlvo nome".',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Extension methods são açúcar sintático — internamente viram chamadas estáticas normais. <code>texto.ParaMaiusculo()</code> vira <code>StringExtensions.ParaMaiusculo(texto)</code>.',
      q: 'Extension methods modificam o tipo original (a classe string, por exemplo)?',
      hint: 'É só açúcar sintático',
      opts: [
        { t: 'Sim — adicionam código à classe original em runtime', ok: false },
        { t: 'Não — são métodos estáticos chamados com sintaxe de instância', ok: true },
        { t: 'Apenas para classes sealed', ok: false },
        { t: 'Somente em interfaces', ok: false },
      ],
      exp: 'Extension methods não alteram a classe original. O compilador transforma "obj.Metodo()" em "ClasseExtensao.Metodo(obj)" automaticamente.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Todos os métodos LINQ (Where, Select, OrderBy...) são extension methods em <code>IEnumerable&lt;T&gt;</code>.',
      q: 'Como LINQ consegue funcionar em qualquer coleção (List, array, Dictionary.Values...)?',
      hint: 'Todos implementam a mesma interface',
      opts: [
        { t: 'LINQ é um recurso especial da linguagem', ok: false },
        { t: 'Extension methods em IEnumerable<T> funcionam em qualquer tipo que implemente essa interface', ok: true },
        { t: 'LINQ funciona apenas com List<T>', ok: false },
        { t: 'O compilador gera código específico para cada tipo', ok: false },
      ],
      exp: 'LINQ = extension methods em IEnumerable<T>. Como List, array, HashSet etc. implementam IEnumerable<T>, todos ganham Where, Select e companhia.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Se a classe original tiver um método com o mesmo nome do extension method, o método <strong>original tem prioridade</strong>.',
      q: 'Um extension method "string.IsNullOrEmpty()" e o método estático original — qual é chamado em "texto.IsNullOrEmpty()"?',
      hint: 'O método de instância/original tem prioridade',
      opts: [
        { t: 'O extension method — por estar mais próximo no código', ok: false },
        { t: 'O método original da classe — ele tem prioridade sobre extension methods', ok: true },
        { t: 'Depende da ordem de importação dos namespaces', ok: false },
        { t: 'Gera erro de ambiguidade', ok: false },
      ],
      exp: 'Métodos de instância existentes têm prioridade. Extension methods só são chamados se não houver método de instância compatível.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Estrutura básica de um extension method para a classe string:',
      code: `<span class="kw">public static class</span> StringExtensions\n{\n    <span class="kw">public static string</span> <span class="mt">Capitalizar</span>(<span class="kw">this _______</span> texto)\n        => char.<span class="mt">ToUpper</span>(texto[<span class="nm">0</span>]) + texto[<span class="nm">1</span>..].ToLower();\n}`,
      q: 'Qual tipo colocar após "this" para estender a classe string?',
      hint: 'O tipo que está sendo estendido',
      ans: 'string',
      exp: '"this string texto" — o "this" marca o extension method, "string" é o tipo que está sendo estendido, "texto" é o nome do parâmetro.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'A classe que contém extension methods deve ser estática.',
      code: `<span class="kw">public _______ class</span> IntExtensions\n{\n    <span class="kw">public static bool</span> <span class="mt">EhPar</span>(<span class="kw">this int</span> n) => n % <span class="nm">2</span> == <span class="nm">0</span>;\n}`,
      q: 'Qual modificador é obrigatório na classe que contém extension methods?',
      hint: 'Estático em inglês',
      ans: 'static',
      exp: 'A classe deve ser "static" para conter extension methods. Não pode ser instanciada — funciona como container de utilitários.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Extension methods podem encadear chamadas (fluent interface) pois retornam o mesmo tipo:',
      code: `<span class="kw">public static</span> List&lt;T&gt; <span class="mt">Embaralhar</span>&lt;T&gt;(<span class="kw">this</span> List&lt;T&gt; lista)\n{\n    <span class="kw">var</span> r = <span class="kw">new</span> Random();\n    <span class="kw">return</span> lista.<span class="mt">_______</span>(x => r.<span class="mt">Next</span>()).<span class="mt">ToList</span>();\n}`,
      q: 'Qual método LINQ ordena por uma chave aleatória para embaralhar?',
      hint: 'Ordenar por em inglês',
      ans: 'OrderBy',
      exp: '"OrderBy(x => random.Next())" produz ordenação aleatória — uma forma simples de embaralhar. O extension retorna a lista para permitir encadeamento.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Para usar extension methods de outro namespace, é necessário importá-lo com using.',
      code: `<span class="kw">_______</span> MeuProjeto.Extensions;\n\n<span class="kw">var</span> msg = <span class="st">"leon"</span>.<span class="mt">Capitalizar</span>();`,
      q: 'Qual diretiva importa um namespace?',
      hint: 'Usando em inglês',
      ans: 'using',
      exp: '"using NomeDoNamespace" importa os extension methods. Sem isso, o compilador não encontra o método mesmo que a classe esteja no projeto.',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Extension method em int — verificação elegante.',
      code: `<span class="kw">public static class</span> IntExt\n{\n    <span class="kw">public static bool</span> <span class="mt">Entre</span>(<span class="kw">this int</span> n, <span class="kw">int</span> min, <span class="kw">int</span> max)\n        => n >= min && n <= max;\n}\n\n<span class="kw">int</span> hp = <span class="nm">45</span>;\nConsole.<span class="mt">WriteLine</span>(hp.<span class="mt">Entre</span>(<span class="nm">0</span>, <span class="nm">100</span>));\nConsole.<span class="mt">WriteLine</span>(hp.<span class="mt">Entre</span>(<span class="nm">50</span>, <span class="nm">100</span>));`,
      q: 'O que será exibido?',
      hint: '45 entre 0-100? Entre 50-100?',
      opts: [
        { t: 'True e True', ok: false },
        { t: 'True e False', ok: true },
        { t: 'False e False', ok: false },
        { t: 'Erro — extension em int', ok: false },
      ],
      exp: '45.Entre(0,100): 45>=0 && 45<=100 = True. 45.Entre(50,100): 45>=50 = False → False.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Extension method em string — validação de HP.',
      code: `<span class="kw">public static class</span> StrExt\n{\n    <span class="kw">public static bool</span> <span class="mt">EhNumero</span>(<span class="kw">this string</span> s)\n        => <span class="kw">int</span>.<span class="mt">TryParse</span>(s, <span class="kw">out</span> _);\n}\n\n<span class="kw">var</span> inputs = <span class="kw">new</span>[] { <span class="st">"100"</span>, <span class="st">"abc"</span>, <span class="st">"75"</span> };\n<span class="kw">foreach</span> (<span class="kw">var</span> s <span class="kw">in</span> inputs)\n    Console.<span class="mt">Write</span>(s.<span class="mt">EhNumero</span>() + <span class="st">" "</span>);`,
      q: 'O que será exibido?',
      hint: '"100" e "75" são números; "abc" não é',
      opts: [
        { t: 'True True True', ok: false },
        { t: 'True False True', ok: true },
        { t: 'False False False', ok: false },
        { t: 'True False False', ok: false },
      ],
      exp: '"100".EhNumero() = True. "abc".EhNumero() = False (TryParse falha). "75".EhNumero() = True. Saída: "True False True ".',
    },

    // Q11 — Code
    {
      type: 'code',
      bubble: 'Extension method em IEnumerable — adicionando funcionalidade ao LINQ.',
      code: `<span class="kw">public static class</span> EnumExt\n{\n    <span class="kw">public static</span> IEnumerable&lt;T&gt; <span class="mt">NaoNulo</span>&lt;T&gt;(<span class="kw">this</span> IEnumerable&lt;T?&gt; src)\n        <span class="kw">where</span> T : <span class="kw">class</span>\n        => src.<span class="mt">Where</span>(x => x != <span class="kw">null</span>)!;\n}\n\n<span class="kw">var</span> lista = <span class="kw">new</span> List&lt;<span class="kw">string</span>?&gt; { <span class="st">"Leon"</span>, <span class="kw">null</span>, <span class="st">"Ada"</span>, <span class="kw">null</span>, <span class="st">"Ashley"</span> };\nConsole.<span class="mt">WriteLine</span>(lista.<span class="mt">NaoNulo</span>().<span class="mt">Count</span>());`,
      q: 'O que será exibido?',
      hint: 'Filtra os nulls, conta o que sobrou',
      opts: [
        { t: '5', ok: false },
        { t: '2', ok: false },
        { t: '3', ok: true },
        { t: 'Erro — IEnumerable nullable', ok: false },
      ],
      exp: 'NaoNulo() filtra nulls. Sobram "Leon", "Ada", "Ashley" = 3 elementos. Count() = 3.',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'Fluent interface com extension methods encadeados.',
      code: `<span class="kw">public static class</span> ListExt\n{\n    <span class="kw">public static</span> List&lt;T&gt; <span class="mt">Adicionar</span>&lt;T&gt;(<span class="kw">this</span> List&lt;T&gt; l, T item)\n        { l.<span class="mt">Add</span>(item); <span class="kw">return</span> l; }\n}\n\n<span class="kw">var</span> inv = <span class="kw">new</span> List&lt;<span class="kw">string</span>&gt;()\n    .<span class="mt">Adicionar</span>(<span class="st">"Pistola"</span>)\n    .<span class="mt">Adicionar</span>(<span class="st">"Erva"</span>)\n    .<span class="mt">Adicionar</span>(<span class="st">"Escopeta"</span>);\nConsole.<span class="mt">WriteLine</span>(inv.<span class="mt">Count</span>);`,
      q: 'O que será exibido?',
      hint: 'Cada Adicionar() retorna a própria lista',
      opts: [
        { t: '1', ok: false },
        { t: '3', ok: true },
        { t: '0', ok: false },
        { t: 'Erro — encadeamento inválido', ok: false },
      ],
      exp: 'Cada Adicionar() adiciona e retorna "this" (a própria lista). Fluent interface. 3 chamadas = 3 itens. Count = 3.',
    },

  ]
};
