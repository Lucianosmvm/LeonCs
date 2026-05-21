// ══════════════════════════════════════════════════════
// ACT III — A ILHA
// MISSÃO 57 — ESPELHOS DO SISTEMA
// Tema: Reflection básica — Type, MethodInfo, PropertyInfo
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_56 = {
  id: 56,
  title: "MISSÃO 57 — ESPELHOS DO SISTEMA",
  icon: '🪞',
  free: false,
  desc: "O laboratório da ilha tem espelhos que revelam a estrutura interna de qualquer objeto — seus métodos, propriedades, segredos. Reflection é exatamente isso: inspecionar o código em tempo de execução.",
  objs: [
    "Usar typeof e GetType() para obter informações de tipos",
    "Listar métodos e propriedades com MethodInfo e PropertyInfo",
    "Invocar métodos dinamicamente com Invoke()",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>Reflection</strong> permite inspecionar e manipular tipos, métodos e propriedades em tempo de execução. É a base de frameworks de DI, ORM e serialização.',
      q: 'Para que serve Reflection em aplicações reais?',
      hint: 'Frameworks usam muito',
      opts: [
        { t: 'Apenas para debug', ok: false },
        { t: 'Para frameworks de DI, ORM, serialização e testes inspecionarem e manipularem tipos dinamicamente', ok: true },
        { t: 'Para acelerar a execução', ok: false },
        { t: 'Para compilar código em runtime', ok: false },
      ],
      exp: 'Reflection: Entity Framework mapeia propriedades para colunas. ASP.NET injeta dependências. NUnit descobre métodos de teste. Serializers leem campos.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>typeof(T)</code> retorna o Type de T em tempo de compilação. <code>obj.GetType()</code> retorna o Type do objeto em tempo de execução.',
      q: 'Qual a diferença entre typeof(string) e "texto".GetType()?',
      hint: 'Compile time vs runtime',
      opts: [
        { t: 'São exatamente iguais sempre', ok: false },
        { t: 'typeof é compilação (T conhecido), GetType() é runtime (tipo real do objeto)', ok: true },
        { t: 'typeof só funciona com tipos primitivos', ok: false },
        { t: 'GetType() retorna o tipo declarado, typeof o tipo real', ok: false },
      ],
      exp: '"typeof(string)" é resolvido em compilação. "obj.GetType()" retorna o tipo real em runtime — útil para polimorfismo: uma variável "Animal" pode ser "Cachorro" em runtime.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>BindingFlags</code> controla quais membros são retornados por Reflection. Sem as flags corretas, membros privados e estáticos não aparecem.',
      q: 'Para obter métodos PRIVADOS de uma classe via Reflection, qual flag é necessária?',
      hint: 'Não-público',
      opts: [
        { t: 'BindingFlags.Public', ok: false },
        { t: 'BindingFlags.NonPublic | BindingFlags.Instance', ok: true },
        { t: 'BindingFlags.Private', ok: false },
        { t: 'BindingFlags.Hidden', ok: false },
      ],
      exp: '"BindingFlags.NonPublic | BindingFlags.Instance" obtém membros privados de instância. Combine com BindingFlags.Static para métodos estáticos privados.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Reflection tem custo de performance significativo comparado ao código estático. Use com moderação e considere caching dos objetos MethodInfo/PropertyInfo.',
      q: 'Como mitigar o custo de performance de Reflection em código crítico?',
      hint: 'Cache do trabalho pesado',
      opts: [
        { t: 'Usar Reflection apenas em Release builds', ok: false },
        { t: 'Cachear os objetos MethodInfo/PropertyInfo em variáveis estáticas para reutilização', ok: true },
        { t: 'Usar dynamic em vez de Reflection', ok: false },
        { t: 'Reflection tem o mesmo custo que código estático', ok: false },
      ],
      exp: 'Cachear MethodInfo/PropertyInfo em campos estáticos evita a busca repetida. Source generators (C# 9+) são alternativa moderna sem custo em runtime.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Obtendo o Type de uma variável em runtime:',
      code: `<span class="kw">object</span> obj = <span class="st">"Leon Kennedy"</span>;\nType tipo = obj.<span class="mt">_______</span>();\nConsole.<span class="mt">WriteLine</span>(tipo.Name);`,
      q: 'Qual método retorna o Type real de um objeto em runtime?',
      hint: 'Obter tipo',
      ans: 'GetType',
      exp: '"obj.GetType()" retorna o tipo real. Para obj = "Leon Kennedy", retorna Type de string. tipo.Name = "String".',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Obtendo todos os métodos públicos de um tipo:',
      code: `Type t = <span class="kw">typeof</span>(Inimigo);\nMethodInfo[] metodos = t.<span class="mt">_______</span>();\nConsole.<span class="mt">WriteLine</span>(metodos.<span class="mt">Length</span>);`,
      q: 'Qual método retorna os MethodInfo de todos os métodos públicos?',
      hint: 'Get + Methods',
      ans: 'GetMethods',
      exp: '"GetMethods()" retorna métodos públicos de instância e estáticos herdados. "GetMethods(BindingFlags)" para controle fino.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Invocando um método dinamicamente com Reflection:',
      code: `MethodInfo m = tipo.<span class="mt">GetMethod</span>(<span class="st">"Atacar"</span>)!;\nm.<span class="mt">_______</span>(instancia, <span class="kw">new object</span>[] { <span class="nm">50</span> }); <span class="cm">// Atacar(50)</span>`,
      q: 'Qual método de MethodInfo executa o método dinamicamente?',
      hint: 'Invocar em inglês',
      ans: 'Invoke',
      exp: '"m.Invoke(instancia, args[])" executa o método. null como instância para métodos estáticos. args[] são os parâmetros. Retorna object.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'Inspecionando propriedades de um objeto.',
      code: `<span class="kw">class</span> Personagem\n{\n    <span class="kw">public string</span> Nome { <span class="kw">get</span>; } = <span class="st">"Leon"</span>;\n    <span class="kw">public int</span> HP { <span class="kw">get</span>; } = <span class="nm">100</span>;\n}\n\n<span class="kw">var</span> props = <span class="kw">typeof</span>(Personagem).<span class="mt">GetProperties</span>();\nConsole.<span class="mt">WriteLine</span>(props.<span class="mt">Length</span>);`,
      q: 'Quantas propriedades públicas tem Personagem?',
      hint: 'Nome e HP são propriedades',
      opts: [
        { t: '0', ok: false },
        { t: '1', ok: false },
        { t: '2', ok: true },
        { t: 'Erro — Reflection não funciona com classes simples', ok: false },
      ],
      exp: 'Personagem tem 2 propriedades públicas: Nome e HP. GetProperties() retorna PropertyInfo[2]. Length = 2.',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Lendo valores de propriedades dinamicamente.',
      code: `<span class="kw">class</span> Arma { <span class="kw">public string</span> Nome { <span class="kw">get</span>; } = <span class="st">"Pistola"</span>; <span class="kw">public int</span> Dano { <span class="kw">get</span>; } = <span class="nm">25</span>; }\n\n<span class="kw">var</span> arma = <span class="kw">new</span> Arma();\n<span class="kw">var</span> prop = <span class="kw">typeof</span>(Arma).<span class="mt">GetProperty</span>(<span class="st">"Dano"</span>)!;\n<span class="kw">object</span>? valor = prop.<span class="mt">GetValue</span>(arma);\nConsole.<span class="mt">WriteLine</span>(valor);`,
      q: 'O que será exibido?',
      hint: 'GetValue lê o valor da propriedade',
      opts: [
        { t: 'Pistola', ok: false },
        { t: '25', ok: true },
        { t: 'Int32', ok: false },
        { t: 'Erro — GetValue não funciona com int', ok: false },
      ],
      exp: 'GetProperty("Dano") obtém PropertyInfo de Dano. GetValue(arma) lê o valor da instância "arma". Dano = 25. Console.WriteLine(25).',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Verificando se tipo implementa interface via IsAssignableTo.',
      code: `<span class="kw">interface</span> IAtacavel { }\n<span class="kw">class</span> Ganado : IAtacavel { }\n<span class="kw">class</span> Porta { }\n\nType[] tipos = { <span class="kw">typeof</span>(Ganado), <span class="kw">typeof</span>(Porta) };\n<span class="kw">foreach</span> (<span class="kw">var</span> t <span class="kw">in</span> tipos)\n    Console.<span class="mt">Write</span>(t.<span class="mt">IsAssignableTo</span>(<span class="kw">typeof</span>(IAtacavel)) + <span class="st">" "</span>);`,
      q: 'O que será exibido?',
      hint: 'Ganado implementa IAtacavel, Porta não',
      opts: [
        { t: 'True True', ok: false },
        { t: 'True False', ok: true },
        { t: 'False True', ok: false },
        { t: 'False False', ok: false },
      ],
      exp: 'Ganado : IAtacavel → IsAssignableTo(IAtacavel) = True. Porta não implementa → False. Saída: "True False".',
    },

  ]
};
