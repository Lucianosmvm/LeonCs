// ══════════════════════════════════════════════════════
// ACT VI — O CONFRONTO FINAL
// MISSÃO 83 — MUTAÇÕES AVANÇADAS
// Tema: Pattern matching avançado — switch expressions, type patterns, list patterns
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_82 = {
  id: 82,
  title: "MISSÃO 83 — MUTAÇÕES AVANÇADAS",
  icon: '🧬',
  free: false,
  desc: "Os Plagas mutam em formas diferentes — cada tipo requer uma estratégia diferente. Pattern matching avançado em C# é a análise genética que identifica e despacha cada mutação para o tratamento correto.",
  objs: [
    "Usar switch expressions com type patterns",
    "Aplicar property patterns e positional patterns",
    "Combinar patterns com when guards e list patterns",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>Switch expression</strong> (C# 8+) é uma expressão que retorna valor. Mais conciso que switch statement — cada arm é <code>pattern => expression</code>.',
      q: 'Qual a diferença entre switch statement e switch expression?',
      hint: 'Statement vs expressão que retorna valor',
      opts: [
        { t: 'São equivalentes', ok: false },
        { t: 'Switch expression é uma expressão que retorna valor — pode ser usado em atribuição; statement não retorna', ok: true },
        { t: 'Switch expression suporta mais types', ok: false },
        { t: 'Switch statement é mais performático', ok: false },
      ],
      exp: 'var x = valor switch { A => 1, B => 2, _ => 0 }; — switch expression retorna int. Switch statement: usa break, não retorna. Expression = mais conciso para mapeamento de valores.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<strong>Property pattern</strong>: <code>{ Propriedade: valor }</code> — verifica se o objeto tem a propriedade com o valor especificado.',
      q: 'O que faz o pattern "{ HP: <= 0 }" em um switch?',
      hint: 'Verifica se HP é menor ou igual a zero',
      opts: [
        { t: 'Verifica se HP existe', ok: false },
        { t: 'Verifica se o objeto tem propriedade HP com valor <= 0', ok: true },
        { t: 'Define HP como 0', ok: false },
        { t: 'É sintaxe inválida', ok: false },
      ],
      exp: '{ HP: <= 0 } é property pattern + relational pattern. Match quando HP <= 0. Pode combinar: { HP: <= 0, Tipo: "Ganado" }.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<strong>List patterns</strong> (C# 11+): <code>[first, .., last]</code> verifica elementos em posições específicas de lista/array. <code>..</code> = qualquer quantidade no meio.',
      q: 'O que o pattern "[1, .., n]" verifica?',
      hint: 'Primeiro elemento é 1, último é n',
      opts: [
        { t: 'Array com apenas 2 elementos: 1 e n', ok: false },
        { t: 'Array que começa com 1, termina com n, qualquer coisa no meio', ok: true },
        { t: 'Array com n elementos, todos igual a 1', ok: false },
        { t: 'Lista pattern não existe em C#', ok: false },
      ],
      exp: '[1, .., n]: primeiro == 1, últmo == n, qualquer quantidade no meio (incluindo zero). [1, n]: exatamente dois elementos.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<strong>when guards</strong> em switch: <code>pattern when condição</code> adiciona condição extra ao arm do switch.',
      q: 'Para que serve "when" em um switch expression?',
      hint: 'Filtro adicional no arm',
      opts: [
        { t: 'Executar código assíncrono no arm', ok: false },
        { t: 'Adicionar condição booleana extra ao pattern — arm só executa se pattern E when são verdadeiros', ok: true },
        { t: 'Definir um valor padrão', ok: false },
        { t: '"when" não existe em switch expression', ok: false },
      ],
      exp: 'Inimigo e when e.HP > 100 => "Forte": só executa se é Inimigo E HP > 100. Útil para sub-condições que pattern simples não expressa.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Switch expression com type pattern:',
      code: `<span class="kw">string</span> <span class="mt">Descrever</span>(<span class="tp">object</span> obj) => obj <span class="kw">switch</span>
{
    <span class="kw">_______</span> n   => <span class="st">$"Int: {n}"</span>,
    <span class="kw">string</span> s  => <span class="st">$"Str: {s}"</span>,
    <span class="kw">_</span>          => <span class="st">"Outro"</span>
};`,
      q: 'Qual type pattern captura int com variável de binding "n"?',
      hint: 'tipo variavel',
      ans: 'int',
      exp: '"int n" é type pattern com binding — match se object é int, e vincula o valor a "n". Pode usar diretamente na expressão de resultado.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Property pattern com guard:',
      code: `<span class="kw">string</span> <span class="mt">Status</span>(Inimigo e) => e <span class="kw">switch</span>
{
    { HP: <span class="nm">0</span> }           => <span class="st">"Morto"</span>,
    { HP: var h } <span class="kw">_______</span> h < <span class="nm">20</span> => <span class="st">"Crítico"</span>,
    <span class="kw">_</span>               => <span class="st">"Vivo"</span>
};`,
      q: 'Qual palavra-chave adiciona a condição de guard no switch?',
      hint: 'Quando em inglês',
      ans: 'when',
      exp: '"when h < 20": guard adicional. { HP: var h } captura HP em h; "when h < 20" verifica se é menor que 20. Só executa se ambos são verdadeiros.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'List pattern para verificar início de array:',
      code: `<span class="kw">int</span>[] nums = { <span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span>, <span class="nm">4</span> };
<span class="kw">bool</span> começaComUm = nums <span class="kw">is</span> [<span class="nm">1</span>, <span class="mt">_______</span>];
Console.<span class="mt">WriteLine</span>(começaComUm);`,
      q: 'Qual pattern representa "qualquer número de elementos restantes"?',
      hint: 'Dois pontos consecutivos',
      ans: '..',
      exp: '[1, ..] = começa com 1, seguido por qualquer coisa (0 ou mais). [1, _, 3] = exatamente 3 elementos: 1, qualquer, 3.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'Switch expression com type patterns.',
      code: `<span class="kw">static string</span> <span class="mt">Tipo</span>(<span class="tp">object</span> o) => o <span class="kw">switch</span>
{
    <span class="kw">int</span> n    => <span class="st">$"int:{n}"</span>,
    <span class="kw">string</span> s => <span class="st">$"str:{s}"</span>,
    <span class="kw">bool</span> b   => <span class="st">$"bool:{b}"</span>,
    <span class="kw">_</span>        => <span class="st">"?"</span>
};
Console.<span class="mt">WriteLine</span>(<span class="mt">Tipo</span>(<span class="nm">42</span>));
Console.<span class="mt">WriteLine</span>(<span class="mt">Tipo</span>(<span class="st">"Leon"</span>));`,
      q: 'O que será exibido?',
      hint: '42 é int, "Leon" é string',
      opts: [
        { t: 'int:42 e str:Leon', ok: true },
        { t: '? e ?', ok: false },
        { t: 'int:42 e ?', ok: false },
        { t: 'Erro — switch com object', ok: false },
      ],
      exp: 'Tipo(42): 42 é int → "int:42". Tipo("Leon"): é string → "str:Leon". "int:42" e "str:Leon".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Property pattern com record.',
      code: `<span class="kw">record</span> Inimigo(<span class="kw">string</span> Tipo, <span class="kw">int</span> HP);
<span class="kw">static string</span> <span class="mt">Analisar</span>(Inimigo e) => e <span class="kw">switch</span>
{
    { HP: <= <span class="nm">0</span> }              => <span class="st">"Eliminado"</span>,
    { Tipo: <span class="st">"Ganado"</span>, HP: > <span class="nm">50</span> } => <span class="st">"Ganado Forte"</span>,
    { Tipo: <span class="st">"Ganado"</span> }         => <span class="st">"Ganado Fraco"</span>,
    <span class="kw">_</span>                          => <span class="st">"Outro"</span>
};
Console.<span class="mt">WriteLine</span>(<span class="mt">Analisar</span>(<span class="kw">new</span> Inimigo(<span class="st">"Ganado"</span>, <span class="nm">30</span>)));`,
      q: 'O que será exibido?',
      hint: 'HP=30, Tipo=Ganado — qual case corresponde?',
      opts: [
        { t: 'Eliminado', ok: false },
        { t: 'Ganado Forte', ok: false },
        { t: 'Ganado Fraco', ok: true },
        { t: 'Outro', ok: false },
      ],
      exp: 'HP=30 > 0: não Eliminado. Tipo=Ganado, HP=30: 30 não > 50, não "Ganado Forte". { Tipo: "Ganado" } match → "Ganado Fraco".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'List pattern matching.',
      code: `<span class="kw">static string</span> <span class="mt">Descrever</span>(<span class="kw">int</span>[] arr) => arr <span class="kw">switch</span>
{
    []          => <span class="st">"vazio"</span>,
    [<span class="kw">var</span> x]     => <span class="st">$"um:{x}"</span>,
    [<span class="kw">var</span> a, <span class="kw">var</span> b] => <span class="st">$"dois:{a},{b}"</span>,
    [..]        => <span class="st">"muitos"</span>
};
Console.<span class="mt">WriteLine</span>(<span class="mt">Descrever</span>(<span class="kw">new</span>[] { <span class="nm">5</span>, <span class="nm">10</span> }));
Console.<span class="mt">WriteLine</span>(<span class="mt">Descrever</span>(<span class="kw">new</span>[] { <span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span> }));`,
      q: 'O que será exibido?',
      hint: '{5,10} tem 2 elementos; {1,2,3} tem 3',
      opts: [
        { t: 'dois:5,10 e muitos', ok: true },
        { t: 'muitos e muitos', ok: false },
        { t: 'dois:5,10 e dois:1,2', ok: false },
        { t: 'Erro — list pattern em array', ok: false },
      ],
      exp: '{5,10}: 2 elementos → [var a, var b] → "dois:5,10". {1,2,3}: 3 elementos → [..] → "muitos". "dois:5,10" e "muitos".',
    },

  ]
};
