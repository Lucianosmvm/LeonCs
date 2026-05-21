const MISSION_39 = {
  id: 39,
  title: "MISSÃO 40 — A FUGA DO CASTELO",
  icon: '🏃',
  free: false,
  desc: "O castelo está desmoronando. Para escapar, você precisa dominar absolutamente tudo que aprendeu. Esta é a prova final do Act II — sem segunda chance.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Revisão: custo das coleções.',
      q: 'Para o sistema de inventário que verifica frequentemente se um item específico existe, qual coleção tem melhor performance?',
      hint: 'O(1) vs O(n)',
      opts: [
        { t: 'List<string> com Contains()', ok: false },
        { t: 'HashSet<string> com Contains()', ok: true },
        { t: 'string[] com Array.IndexOf()', ok: false },
        { t: 'Queue<string>', ok: false },
      ],
      exp: 'HashSet.Contains() = O(1). List.Contains() = O(n). Para verificações frequentes em grande volume, a diferença é enorme.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Revisão: interface vs classe abstrata.',
      q: 'Quando preferir interface sobre classe abstrata?',
      hint: 'Herança múltipla',
      opts: [
        { t: 'Sempre — interfaces são mais modernas', ok: false },
        { t: 'Quando tipos não relacionados precisam de comportamento comum, ou para herança múltipla de contratos', ok: true },
        { t: 'Quando precisa de campos e estado compartilhado', ok: false },
        { t: 'Interface e abstrata são equivalentes desde C# 8', ok: false },
      ],
      exp: 'Interface: contrato sem estado, múltiplas por classe. Abstrata: estado compartilhado, lógica comum para hierarquia de tipos relacionados.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Revisão: LINQ e materialização.',
      q: 'Qual é o efeito de chamar .ToList() num resultado LINQ?',
      hint: 'Lazy vs eager',
      opts: [
        { t: 'Apenas converte o tipo — não executa a consulta ainda', ok: false },
        { t: 'Executa a consulta imediatamente e armazena em List<T> na memória', ok: true },
        { t: 'Cria um índice para buscas futuras', ok: false },
        { t: 'Ordena os resultados automaticamente', ok: false },
      ],
      exp: 'ToList() = eager evaluation: executa TODA a consulta agora e guarda em List<T>. Útil para evitar múltiplas execuções ou para snapshot dos dados.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Revisão: records e imutabilidade.',
      q: 'Qual operação é inválida em um record posicional (sem set/init manual)?',
      hint: 'Records são imutáveis por padrão',
      opts: [
        { t: 'r.Nome = "Novo Nome"', ok: true },
        { t: 'var r2 = r with { Nome = "Novo" }', ok: false },
        { t: 'Console.WriteLine(r)', ok: false },
        { t: 'r == outroRecord', ok: false },
      ],
      exp: '"r.Nome = X" tenta modificar init-only property — erro de compilação. Use "with" para criar nova instância com modificação.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Revisão: Big O e escolha de estrutura.',
      q: 'Adicionar ao final de List<T> tem qual complexidade amortizada?',
      hint: 'Às vezes precisa realocar, mas na média...',
      opts: [
        { t: 'O(n) — sempre copia tudo', ok: false },
        { t: 'O(log n)', ok: false },
        { t: 'O(1) amortizado — raramente precisa realocar', ok: true },
        { t: 'O(n²)', ok: false },
      ],
      exp: 'List usa array interno. Add() é O(1) amortizado: quando cheio, dobra a capacidade (O(n)), mas isso acontece raramente. Média = O(1).',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Revisão: Generics com constraint para tipos que podem ser null.',
      code: `<span class="kw">static T</span> <span class="mt">PrimeiroOuPadrao</span>&lt;<span class="kw">T</span>&gt;(List&lt;<span class="kw">T</span>&gt; lista)\n    <span class="kw">where T</span> : <span class="kw">_______</span>\n    => lista.<span class="mt">Count</span> > <span class="nm">0</span> ? lista[<span class="nm">0</span>] : <span class="kw">null</span>;`,
      q: 'Qual constraint permite retornar null para T?',
      hint: 'Tipo de referência',
      ans: 'class',
      exp: '"where T : class" → T é tipo de referência → pode retornar null. Sem essa constraint, retornar null seria erro de compilação.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Revisão: lambda como Action para callback de conclusão.',
      code: `<span class="kw">static void</span> <span class="mt">Executar</span>(<span class="kw">string</span> cmd, <span class="kw">_______</span>&lt;<span class="kw">string</span>&gt; aoFinalizar)\n{\n    Console.<span class="mt">WriteLine</span>(<span class="st">$"Executando {cmd}"</span>);\n    aoFinalizar(cmd);\n}`,
      q: 'Qual tipo de delegate para o callback sem retorno?',
      hint: 'Ação que recebe string',
      ans: 'Action',
      exp: '"Action<string>" = delegate que recebe string e não retorna nada. Permite passar qualquer lambda compatível como callback.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Revisão: exceção customizada lançada com mensagem.',
      code: `<span class="kw">if</span> (nivel < <span class="nm">1</span> || nivel > <span class="nm">100</span>)\n    <span class="kw">throw new</span> _______(<span class="st">"Nível inválido"</span>);`,
      q: 'Qual exceção usar para argumento fora do intervalo válido?',
      hint: 'Argumento fora do intervalo',
      ans: 'ArgumentOutOfRangeException',
      exp: '"ArgumentOutOfRangeException" é a exceção semântica correta para valores fora de faixa. Melhor que Exception genérico — comunica a intenção.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Revisão: StringBuilder para construção eficiente em loop.',
      code: `<span class="kw">var</span> sb = <span class="kw">new</span> System.Text.StringBuilder();\n<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">1</span>; i <= <span class="nm">5</span>; i++)\n    sb.<span class="mt">_______</span>(<span class="st">$"Item {i}\\n"</span>);\nConsole.<span class="mt">Write</span>(sb);`,
      q: 'Qual método adiciona texto ao StringBuilder?',
      hint: 'Anexar em inglês',
      ans: 'Append',
      exp: '"Append(texto)" adiciona ao buffer. "AppendLine(texto)" adiciona com quebra de linha. "Insert(idx, texto)" insere na posição.',
    },

    // Q10 — Fill
    {
      type: 'fill',
      bubble: 'Revisão: enum [Flags] para verificar presença de uma flag.',
      code: `<span class="kw">if</span> (status.<span class="mt">_______</span>(StatusInimigo.Venenoso))\n    AplicarVeneno();`,
      q: 'Qual método de enum verifica se uma flag específica está ativa?',
      hint: 'Tem a flag?',
      ans: 'HasFlag',
      exp: '"HasFlag(flag)" retorna true se o bit da flag estiver ativo. "status & flag == flag" é equivalente mas menos legível.',
    },

    // Q11 — Code
    {
      type: 'code',
      bubble: 'Revisão: Dictionary + LINQ para relatório de inimigos.',
      code: `<span class="kw">var</span> mortos = <span class="kw">new</span> Dictionary&lt;<span class="kw">string</span>,<span class="kw">int</span>&gt;\n{\n    [<span class="st">"Ganado"</span>] = <span class="nm">12</span>, [<span class="st">"Cultista"</span>] = <span class="nm">5</span>,\n    [<span class="st">"Krauser"</span>] = <span class="nm">1</span>, [<span class="st">"Regenerador"</span>] = <span class="nm">3</span>\n};\n<span class="kw">var</span> top = mortos\n    .<span class="mt">OrderByDescending</span>(p => p.Value)\n    .<span class="mt">First</span>();\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"Mais morto: {top.Key} ({top.Value}x)"</span>);`,
      q: 'O que será exibido?',
      hint: 'Ordenar por Value desc, pegar o primeiro',
      opts: [
        { t: 'Mais morto: Krauser (1x)', ok: false },
        { t: 'Mais morto: Ganado (12x)', ok: true },
        { t: 'Mais morto: Cultista (5x)', ok: false },
        { t: 'Mais morto: Regenerador (3x)', ok: false },
      ],
      exp: 'OrderByDescending(Value): Ganado(12), Cultista(5), Regenerador(3), Krauser(1). First() = par Ganado/12.',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'Revisão: class abstrata + polimorfismo.',
      code: `<span class="kw">abstract class</span> Arma\n{\n    <span class="kw">public abstract int</span> <span class="mt">Dano</span>();\n    <span class="kw">public string</span> <span class="mt">Disparar</span>() => <span class="st">$"Pew! {<span class="mt">Dano</span>()}dmg"</span>;\n}\n<span class="kw">class</span> Pistola  : Arma { <span class="kw">public override int</span> <span class="mt">Dano</span>() => <span class="nm">25</span>;  }\n<span class="kw">class</span> Escopeta : Arma { <span class="kw">public override int</span> <span class="mt">Dano</span>() => <span class="nm">80</span>;  }\n\n<span class="kw">Arma</span> arma = <span class="kw">new</span> Escopeta();\nConsole.<span class="mt">WriteLine</span>(arma.<span class="mt">Disparar</span>());`,
      q: 'O que será exibido?',
      hint: 'Disparar() chama Dano() polimorficamente',
      opts: [
        { t: 'Pew! 25dmg', ok: false },
        { t: 'Pew! 80dmg', ok: true },
        { t: 'Pew! 0dmg', ok: false },
        { t: 'Erro — abstract não pode chamar Dano()', ok: false },
      ],
      exp: 'arma é Escopeta. Disparar() chama this.Dano() → override de Escopeta → 80. "Pew! 80dmg".',
    },

    // Q13 — Code
    {
      type: 'code',
      bubble: 'Revisão: Func + LINQ para pipeline de transformação.',
      code: `<span class="kw">Func</span>&lt;<span class="kw">int</span>, <span class="kw">int</span>&gt; ampliar  = x => x * <span class="nm">2</span>;\n<span class="kw">Func</span>&lt;<span class="kw">int</span>, <span class="kw">bool</span>&gt; ehAlto   = x => x > <span class="nm">100</span>;\n\n<span class="kw">var</span> danos = <span class="kw">new</span>[] { <span class="nm">30</span>, <span class="nm">60</span>, <span class="nm">70</span>, <span class="nm">20</span> };\n<span class="kw">var</span> criticos = danos\n    .<span class="mt">Select</span>(ampliar)\n    .<span class="mt">Where</span>(ehAlto)\n    .<span class="mt">ToList</span>();\nConsole.<span class="mt">WriteLine</span>(criticos.<span class="mt">Count</span>);`,
      q: 'Quantos danos são "altos" após ampliar?',
      hint: 'Ampliar: ×2. Altos: >100. Quais de {30,60,70,20}×2 passam?',
      opts: [
        { t: '2', ok: false },
        { t: '3', ok: true },
        { t: '4', ok: false },
        { t: '1', ok: false },
      ],
      exp: 'Ampliar: {60,120,140,40}. Where(>100): 120, 140 → só 2... Espera: 60 →120 (ok), 70→140 (ok), 30→60 (não), 20→40 (não). Total: 2.',
    },

    // Q14 — Code
    {
      type: 'code',
      bubble: 'Revisão: Nullable + null-safe chain.',
      code: `<span class="kw">record</span> Missao(<span class="kw">string</span> Nome, <span class="kw">int</span>? Recompensa);\n\n<span class="kw">var</span> missoes = <span class="kw">new</span>[] {\n    <span class="kw">new</span> Missao(<span class="st">"Patrulha"</span>, <span class="nm">100</span>),\n    <span class="kw">new</span> Missao(<span class="st">"Bônus"</span>,    <span class="kw">null</span>),\n    <span class="kw">new</span> Missao(<span class="st">"Resgate"</span>,  <span class="nm">250</span>),\n};\n<span class="kw">int</span> total = missoes.<span class="mt">Sum</span>(m => m.Recompensa ?? <span class="nm">0</span>);\nConsole.<span class="mt">WriteLine</span>(total);`,
      q: 'Qual o total de recompensas?',
      hint: 'null ?? 0 = 0',
      opts: [
        { t: '350', ok: true },
        { t: '450', ok: false },
        { t: '250', ok: false },
        { t: 'Erro — Sum com nullable', ok: false },
      ],
      exp: '100 + (null ?? 0) + 250 = 100 + 0 + 250 = 350. O ?? substitui null por 0 antes de somar.',
    },

    // Q15 — Code
    {
      type: 'code',
      bubble: 'Revisão: recursão com memoização.',
      code: `<span class="kw">static int</span> <span class="mt">Ack</span>(<span class="kw">int</span> m, <span class="kw">int</span> n) => (m, n) <span class="kw">switch</span>\n{\n    (<span class="nm">0</span>, _) => n + <span class="nm">1</span>,\n    (_, <span class="nm">0</span>) => <span class="mt">Ack</span>(m - <span class="nm">1</span>, <span class="nm">1</span>),\n    _      => <span class="mt">Ack</span>(m - <span class="nm">1</span>, <span class="mt">Ack</span>(m, n - <span class="nm">1</span>))\n};\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Ack</span>(<span class="nm">1</span>, <span class="nm">1</span>));`,
      q: 'Qual é Ack(1, 1)?',
      hint: 'Ack(1,1) = Ack(0, Ack(1,0)) = Ack(0, Ack(0,1)) = Ack(0, 2) = 3',
      opts: [
        { t: '2', ok: false },
        { t: '3', ok: true },
        { t: '4', ok: false },
        { t: '1', ok: false },
      ],
      exp: 'Ack(1,1) → Ack(0, Ack(1,0)) → Ack(0, Ack(0,1)) → Ack(0, 2) → 2+1 = 3.',
    },

    // Q16 — Code
    {
      type: 'code',
      bubble: 'Revisão: try/catch/finally com fluxo de execução.',
      code: `<span class="kw">var</span> log = <span class="kw">new</span> List&lt;<span class="kw">string</span>&gt;();\n<span class="kw">try</span>\n{\n    log.<span class="mt">Add</span>(<span class="st">"try"</span>);\n    <span class="kw">int</span> x = <span class="kw">int</span>.<span class="mt">Parse</span>(<span class="st">"ERRO"</span>);\n    log.<span class="mt">Add</span>(<span class="st">"após parse"</span>);\n}\n<span class="kw">catch</span> { log.<span class="mt">Add</span>(<span class="st">"catch"</span>); }\n<span class="kw">finally</span> { log.<span class="mt">Add</span>(<span class="st">"finally"</span>); }\nConsole.<span class="mt">WriteLine</span>(<span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">","</span>, log));`,
      q: 'O que será exibido?',
      hint: 'Parse("ERRO") lança exceção — rastrear o fluxo',
      opts: [
        { t: 'try,catch,finally', ok: true },
        { t: 'try,após parse,finally', ok: false },
        { t: 'try,catch', ok: false },
        { t: 'try,após parse,catch,finally', ok: false },
      ],
      exp: '"try" é adicionado. Parse lança FormatException. "após parse" nunca é adicionado. catch → "catch". finally → "finally". Resultado: "try,catch,finally".',
    },

    // Q17 — Code
    {
      type: 'code',
      bubble: 'Revisão: tupla como retorno múltiplo + desestruturação.',
      code: `<span class="kw">static</span> (<span class="kw">bool</span> ok, <span class="kw">string</span> msg) <span class="mt">Validar</span>(<span class="kw">int</span> hp)\n    => hp > <span class="nm">0</span> ? (<span class="kw">true</span>, <span class="st">"Vivo"</span>) : (<span class="kw">false</span>, <span class="st">"Morto"</span>);\n\n<span class="kw">var</span> (ok, msg) = <span class="mt">Validar</span>(-<span class="nm">5</span>);\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"OK:{ok} | {msg}"</span>);`,
      q: 'O que será exibido?',
      hint: 'hp = -5, que é > 0?',
      opts: [
        { t: 'OK:True | Vivo', ok: false },
        { t: 'OK:False | Morto', ok: true },
        { t: 'OK:False | Vivo', ok: false },
        { t: 'Erro — desestruturação inválida', ok: false },
      ],
      exp: '-5 > 0 = false → (false, "Morto"). Desestruturado: ok=false, msg="Morto". "OK:False | Morto".',
    },

    // Q18 — Code
    {
      type: 'code',
      bubble: 'Revisão: Struct vs Class — semântica de cópia.',
      code: `<span class="kw">class</span>  PontoC { <span class="kw">public int</span> X; }\n<span class="kw">struct</span> PontoS { <span class="kw">public int</span> X; }\n\n<span class="kw">var</span> c1 = <span class="kw">new</span> PontoC { X=<span class="nm">1</span> }; <span class="kw">var</span> c2 = c1; c2.X = <span class="nm">9</span>;\n<span class="kw">var</span> s1 = <span class="kw">new</span> PontoS { X=<span class="nm">1</span> }; <span class="kw">var</span> s2 = s1; s2.X = <span class="nm">9</span>;\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"class c1={c1.X} | struct s1={s1.X}"</span>);`,
      q: 'O que será exibido?',
      hint: 'class = referência, struct = valor',
      opts: [
        { t: 'class c1=9 | struct s1=9', ok: false },
        { t: 'class c1=1 | struct s1=9', ok: false },
        { t: 'class c1=9 | struct s1=1', ok: true },
        { t: 'class c1=1 | struct s1=1', ok: false },
      ],
      exp: 'c2 = c1: referência — c2.X=9 afeta c1. s2 = s1: cópia — s2.X=9 não afeta s1. "class c1=9 | struct s1=1".',
    },

    // Q19 — Code
    {
      type: 'code',
      bubble: 'Revisão: Generics + null safety + LINQ combinados.',
      code: `<span class="kw">static</span> List&lt;<span class="kw">T</span>&gt; <span class="mt">FiltrarNulos</span>&lt;<span class="kw">T</span>&gt;(IEnumerable&lt;<span class="kw">T</span>?&gt; fonte)\n    <span class="kw">where T</span> : <span class="kw">class</span>\n    => fonte.<span class="mt">Where</span>(x => x != <span class="kw">null</span>)\n            .<span class="mt">Select</span>(x => x!)\n            .<span class="mt">ToList</span>();\n\n<span class="kw">var</span> nomes = <span class="kw">new</span> <span class="kw">string</span>?[] { <span class="st">"Leon"</span>, <span class="kw">null</span>, <span class="st">"Ada"</span>, <span class="kw">null</span>, <span class="st">"Ashley"</span> };\nConsole.<span class="mt">WriteLine</span>(<span class="mt">FiltrarNulos</span>(nomes).<span class="mt">Count</span>);`,
      q: 'Quantos nomes não-nulos existem?',
      hint: 'Conta os strings que não são null',
      opts: [
        { t: '5', ok: false },
        { t: '2', ok: false },
        { t: '3', ok: true },
        { t: '0', ok: false },
      ],
      exp: '5 elementos, 2 nulls, 3 não-nulos (Leon, Ada, Ashley). FiltrarNulos remove os nulls → Count = 3.',
    },

    // Q20 — Code (DESAFIO FINAL)
    {
      type: 'code',
      bubble: '🏆 DESAFIO FINAL DO ACT II — Sistema completo: OOP + Coleções + LINQ + Exceções.',
      code: `<span class="kw">record</span> Personagem(<span class="kw">string</span> Nome, <span class="kw">int</span> HP, <span class="kw">bool</span> EHeroi);\n\n<span class="kw">static int</span> <span class="mt">SomarHP</span>(List&lt;Personagem&gt; lista, <span class="kw">bool</span> herois)\n{\n    <span class="kw">if</span> (lista == <span class="kw">null</span>) <span class="kw">throw new</span> ArgumentNullException(<span class="st">"lista"</span>);\n    <span class="kw">return</span> lista\n        .<span class="mt">Where</span>(p => p.EHeroi == herois)\n        .<span class="mt">Sum</span>(p => p.HP);\n}\n\n<span class="kw">var</span> cast = <span class="kw">new</span> List&lt;Personagem&gt;\n{\n    <span class="kw">new</span>(<span class="st">"Leon"</span>,    <span class="nm">100</span>, <span class="kw">true</span>),\n    <span class="kw">new</span>(<span class="st">"Ashley"</span>,  <span class="nm">60</span>,  <span class="kw">true</span>),\n    <span class="kw">new</span>(<span class="st">"Saddler"</span>, <span class="nm">500</span>, <span class="kw">false</span>),\n    <span class="kw">new</span>(<span class="st">"Krauser"</span>, <span class="nm">300</span>, <span class="kw">false</span>),\n};\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"Heróis:{<span class="mt">SomarHP</span>(cast,true)} Vilões:{<span class="mt">SomarHP</span>(cast,false)}"</span>);`,
      q: 'O que será exibido?',
      hint: 'HP dos heróis: Leon+Ashley. HP dos vilões: Saddler+Krauser.',
      opts: [
        { t: 'Heróis:160 Vilões:800', ok: true },
        { t: 'Heróis:800 Vilões:160', ok: false },
        { t: 'Heróis:100 Vilões:500', ok: false },
        { t: 'Exceção — lista null', ok: false },
      ],
      exp: 'Heróis: Leon(100)+Ashley(60)=160. Vilões: Saddler(500)+Krauser(300)=800. "Heróis:160 Vilões:800".',
    },

  ]
};
