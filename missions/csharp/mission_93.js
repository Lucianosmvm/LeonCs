// ══════════════════════════════════════════════════════
// EPÍLOGO — O LEGADO
// MISSÃO 94 — MATRIX DO CÓDIGO
// Tema: Metaprogramming — dynamic, ExpandoObject, IL, Roslyn scripting
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_93 = {
  id: 93,
  title: "MISSÃO 94 — MATRIX DO CÓDIGO",
  icon: '🖥️',
  free: false,
  desc: "O código que escreve código. Metaprogramação em C# — dynamic, ExpandoObject, scripts Roslyn, criação dinâmica de tipos. O agente que entende a matrix pode dobrar as regras do sistema.",
  objs: [
    "Usar dynamic e ExpandoObject para objetos dinâmicos",
    "Entender late binding e DLR (Dynamic Language Runtime)",
    "Conhecer Roslyn Scripting API para execução de código C#",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<code>dynamic</code> em C# adia a verificação de tipo para runtime usando o DLR (Dynamic Language Runtime). Flexível, mas sem type safety em compilação.',
      q: 'Quando usar "dynamic" em C#?',
      hint: 'Interop com objetos sem tipo conhecido em compilação',
      opts: [
        { t: 'Como substituto para todas as variáveis', ok: false },
        { t: 'Interop com COM objects, JSON dinâmico, linguagens dinâmicas como Python via DLR', ok: true },
        { t: 'Para melhorar performance', ok: false },
        { t: 'dynamic é equivalente a var', ok: false },
      ],
      exp: 'dynamic: útil para COM Interop (Office automation), ExpandoObject, resultados de chamadas a linguagens dinâmicas. Custo: sem IntelliSense, erros em runtime.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>ExpandoObject</code> permite adicionar propriedades dinamicamente em runtime — como um dicionário disfarçado de objeto.',
      q: 'Como ExpandoObject implementa propriedades dinâmicas?',
      hint: 'IDictionary<string, object>',
      opts: [
        { t: 'Usa Reflection para criar campos em runtime', ok: false },
        { t: 'Implementa IDynamicMetaObjectProvider e IDictionary<string,object> internamente', ok: true },
        { t: 'Gera código IL dinamicamente', ok: false },
        { t: 'É uma classe sealed sem herança', ok: false },
      ],
      exp: 'ExpandoObject: implementa IDynamicMetaObjectProvider. Acessível como IDictionary<string,object>. expando.Nome = "x" → expando["Nome"] = "x" internamente.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<strong>Roslyn Scripting API</strong> (Microsoft.CodeAnalysis.CSharp.Scripting) permite compilar e executar código C# em runtime como string.',
      q: 'Qual cenário usa bem Roslyn Scripting?',
      hint: 'Execução de código definido pelo usuário',
      opts: [
        { t: 'Otimizar código existente', ok: false },
        { t: 'Interpretar fórmulas ou regras definidas pelo usuário em C# em runtime', ok: true },
        { t: 'Compilação AOT', ok: false },
        { t: 'Geração de banco de dados', ok: false },
      ],
      exp: 'Roslyn Scripting: motor de regras de negócio em C#, notebooks interativos (como .NET Interactive), calculadoras de fórmulas definidas pelo usuário.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>CallSite</code> é o mecanismo de cache do DLR — após primeira resolução dinâmica, o resultado é cacheado para chamadas futuras com mesmo tipo.',
      q: 'Por que código dynamic pode ser comparável em performance a código estático em loops?',
      hint: 'CallSite cache',
      opts: [
        { t: 'dynamic é compilado para código específico pelo JIT', ok: false },
        { t: 'DLR usa CallSite cache — após primeira resolução, chamadas subsequentes com mesmo tipo são rápidas', ok: true },
        { t: 'dynamic não tem overhead nenhum', ok: false },
        { t: 'dynamic é sempre lento — nunca comparável', ok: false },
      ],
      exp: 'CallSite: primeira chamada dynamic = lenta (resolução). Segunda+ com mesmo tipo: cache hit → quase tão rápido quanto código estático. Em loops com tipos consistentes: OK.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Criando objeto com ExpandoObject:',
      code: `<span class="kw">dynamic</span> missao = <span class="kw">new</span> _______();
missao.Nome = <span class="st">"Infiltrar"</span>;
missao.XP = <span class="nm">100</span>;
Console.<span class="mt">WriteLine</span>(missao.Nome);`,
      q: 'Qual classe permite adicionar propriedades dinamicamente?',
      hint: 'Expando Object',
      ans: 'ExpandoObject',
      exp: 'ExpandoObject: dynamic object que aceita novas propriedades em runtime. "missao.Nome" é adicionado dinamicamente. Acessível via IDictionary<string,object> também.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Usando ExpandoObject como dicionário:',
      code: `<span class="kw">dynamic</span> expando = <span class="kw">new</span> ExpandoObject();
expando.HP = <span class="nm">100</span>;
<span class="kw">var</span> dict = (IDictionary&lt;<span class="kw">string</span>, <span class="tp">object</span>&gt;)expando;
Console.<span class="mt">WriteLine</span>(dict.<span class="mt">_______</span>(<span class="st">"HP"</span>));`,
      q: 'Qual método IDictionary verifica se a chave existe?',
      hint: 'Contains Key',
      ans: 'ContainsKey',
      exp: 'dict.ContainsKey("HP"): true se propriedade "HP" existe no ExpandoObject. Casting para IDictionary<string,object> revela o mecanismo interno.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Dynamic com método:',
      code: `<span class="kw">dynamic</span> obj = <span class="st">"Leon"</span>;
<span class="kw">var</span> result = obj.<span class="mt">_______</span>(<span class="nm">0</span>, <span class="nm">2</span>);
Console.<span class="mt">WriteLine</span>(result);`,
      q: 'Qual método de string retorna uma substring começando no índice 0 com tamanho 2?',
      hint: 'Sub string',
      ans: 'Substring',
      exp: '"Leon".Substring(0, 2) = "Le". dynamic resolve Substring em runtime via DLR. Late binding — sem type safety em compilação.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'ExpandoObject dinâmico.',
      code: `<span class="kw">dynamic</span> agente = <span class="kw">new</span> ExpandoObject();
agente.Nome = <span class="st">"Leon"</span>;
agente.Nivel = <span class="nm">10</span>;
agente.<span class="mt">Saudar</span> = <span class="kw">new</span> Func&lt;<span class="kw">string</span>&gt;(
    () => <span class="st">$"Olá, {agente.Nome} Nível {agente.Nivel}"</span>);
Console.<span class="mt">WriteLine</span>(agente.<span class="mt">Saudar</span>());`,
      q: 'O que será exibido?',
      hint: 'ExpandoObject com Func dinâmica',
      opts: [
        { t: 'Olá, Leon Nível 10', ok: true },
        { t: 'Erro — ExpandoObject não suporta Func', ok: false },
        { t: 'Leon 10', ok: false },
        { t: 'Olá, agente.Nome Nível agente.Nivel', ok: false },
      ],
      exp: 'ExpandoObject aceita Func como propriedade. agente.Saudar() invoca a Func. Interpolação captura agente.Nome e agente.Nivel. "Olá, Leon Nível 10".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'dynamic com tipo desconhecido em compilação.',
      code: `<span class="kw">object</span>[] items = { <span class="nm">42</span>, <span class="st">"hello"</span>, <span class="nm">3.14</span> };
<span class="kw">foreach</span> (<span class="kw">dynamic</span> item <span class="kw">in</span> items)
{
    Console.<span class="mt">Write</span>(item.<span class="mt">GetType</span>().<span class="mt">Name</span> + <span class="st">" "</span>);
}`,
      q: 'O que será exibido?',
      hint: 'Tipos reais de cada objeto boxed',
      opts: [
        { t: 'Object Object Object', ok: false },
        { t: 'Int32 String Double', ok: true },
        { t: 'int string double', ok: false },
        { t: 'Erro — dynamic em foreach', ok: false },
      ],
      exp: 'dynamic resolve GetType() em runtime. 42: Int32. "hello": String. 3.14: Double. "Int32 String Double ".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'IDictionary view de ExpandoObject.',
      code: `<span class="kw">dynamic</span> expando = <span class="kw">new</span> ExpandoObject();
expando.A = <span class="nm">1</span>;
expando.B = <span class="nm">2</span>;
expando.C = <span class="nm">3</span>;
<span class="kw">var</span> dict = (IDictionary&lt;<span class="kw">string</span>, <span class="tp">object</span>&gt;)expando;
Console.<span class="mt">WriteLine</span>(dict.<span class="mt">Count</span>);
<span class="kw">foreach</span> (<span class="kw">var</span> kvp <span class="kw">in</span> dict)
    Console.<span class="mt">Write</span>(kvp.Value + <span class="st">" "</span>);`,
      q: 'O que será exibido?',
      hint: '3 propriedades e seus valores',
      opts: [
        { t: '3 e 1 2 3', ok: true },
        { t: '3 e A B C', ok: false },
        { t: 'Erro — cast inválido', ok: false },
        { t: '0 e nada', ok: false },
      ],
      exp: 'dict.Count = 3 (A, B, C). ForEach: kvp.Value = 1, 2, 3. "3" e "1 2 3 ".',
    },

  ]
};
