const MISSION_28 = {
  id: 28,
  title: "MISSÃO 29 — A TORRE DO RELÓGIO",
  icon: '🕰️',
  free: false,
  desc: "O relógio filtra, ordena e transforma. LINQ (Language Integrated Query) é a linguagem de consulta embutida no C# — manipule coleções com elegância e poder.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>LINQ</strong> (Language Integrated Query) permite consultar e transformar coleções com sintaxe de alto nível, usando métodos como Where, Select, OrderBy.',
      q: 'O que o método Where() faz em uma coleção LINQ?',
      hint: 'Filtra elementos',
      opts: [
        { t: 'Ordena os elementos', ok: false },
        { t: 'Filtra elementos que satisfazem um predicado', ok: true },
        { t: 'Transforma cada elemento em outro tipo', ok: false },
        { t: 'Agrupa elementos', ok: false },
      ],
      exp: '"Where(pred)" filtra: retorna apenas os elementos onde pred(elemento) = true. Similar ao SELECT ... WHERE do SQL.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<strong>LINQ é lazy (preguiçoso)</strong> — a consulta não executa até você iterar o resultado (foreach, ToList(), Count(), etc.).',
      q: 'Quando a consulta LINQ "var resultado = lista.Where(x => x > 5)" efetivamente executa?',
      hint: 'Não executa ao ser declarada',
      opts: [
        { t: 'Imediatamente ao ser declarada', ok: false },
        { t: 'Apenas quando o resultado for consumido (iterado, convertido, etc.)', ok: true },
        { t: 'No próximo garbage collection', ok: false },
        { t: 'Nunca executa sem ToList()', ok: false },
      ],
      exp: 'Deferred execution: "Where" cria uma expressão que só executa ao ser consumida. "resultado.ToList()" ou "foreach(var x in resultado)" dispara a execução.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>Select()</code> transforma cada elemento em outro valor — similar ao "map" de outras linguagens.',
      q: 'O que "nomes.Select(n => n.ToUpper())" retorna?',
      hint: 'Transforma cada nome',
      opts: [
        { t: 'O primeiro nome em maiúsculas', ok: false },
        { t: 'Uma nova sequência com todos os nomes em maiúsculas', ok: true },
        { t: 'Apenas os nomes com mais de 5 letras', ok: false },
        { t: 'A contagem de nomes', ok: false },
      ],
      exp: '"Select" projeta: cada "n" vira "n.ToUpper()". Retorna IEnumerable<string> com todos os nomes em maiúsculas.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>First()</code> retorna o primeiro elemento — lança exceção se vazio. <code>FirstOrDefault()</code> retorna null/padrão se vazio.',
      q: 'Quando usar FirstOrDefault() em vez de First()?',
      hint: 'Quando a coleção pode estar vazia',
      opts: [
        { t: 'Quando você quer o último elemento', ok: false },
        { t: 'Quando a coleção pode estar vazia e você quer null em vez de exceção', ok: true },
        { t: 'Apenas com coleções de strings', ok: false },
        { t: 'FirstOrDefault é sempre preferível pois é mais rápido', ok: false },
      ],
      exp: '"First()" em lista vazia → InvalidOperationException. "FirstOrDefault()" → null (reference types) ou 0/false (value types).',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Para filtrar inimigos com HP abaixo de 20 usando LINQ:',
      code: `<span class="kw">var</span> fracos = inimigos.<span class="mt">_______</span>(e => e.HP < <span class="nm">20</span>);`,
      q: 'Qual método LINQ filtra por uma condição?',
      hint: 'Onde em inglês',
      ans: 'Where',
      exp: '"Where(predicado)" filtra a coleção. Retorna IEnumerable com apenas os elementos onde o predicado é true.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Para projetar apenas os nomes dos inimigos (transformar Inimigo em string):',
      code: `<span class="kw">var</span> nomes = inimigos.<span class="mt">_______</span>(e => e.Nome);`,
      q: 'Qual método LINQ transforma/projeta cada elemento?',
      hint: 'Selecionar em inglês',
      ans: 'Select',
      exp: '"Select(transformação)" projeta cada elemento. "inimigos.Select(e => e.Nome)" retorna IEnumerable<string> com os nomes.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Para ordenar inimigos do maior HP para o menor:',
      code: `<span class="kw">var</span> ordenados = inimigos.<span class="mt">OrderBy</span>(e => e.HP)\n                         .<span class="mt">_______</span>();`,
      q: 'Qual método inverte a ordem após OrderBy para obter decrescente?',
      hint: 'Order + Descending',
      ans: 'Reverse',
      exp: '"OrderBy(x => x.HP).Reverse()" ou diretamente "OrderByDescending(e => e.HP)" para ordem decrescente.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Para executar a consulta e materializar em uma List concreta:',
      code: `<span class="kw">var</span> lista = inimigos\n    .<span class="mt">Where</span>(e => e.HP > <span class="nm">50</span>)\n    .<span class="mt">_______</span>();`,
      q: 'Qual método materializa o resultado LINQ numa List<T>?',
      hint: 'Para List em inglês',
      ans: 'ToList',
      exp: '"ToList()" executa a consulta e armazena o resultado em uma List<T>. Força a execução imediata (eager evaluation).',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Cadeia LINQ — filtrar, ordenar, projetar.',
      code: `<span class="kw">var</span> hps = <span class="kw">new</span> List&lt;<span class="kw">int</span>&gt; { <span class="nm">80</span>, <span class="nm">15</span>, <span class="nm">45</span>, <span class="nm">5</span>, <span class="nm">60</span> };\n<span class="kw">var</span> resultado = hps\n    .<span class="mt">Where</span>(hp => hp >= <span class="nm">40</span>)\n    .<span class="mt">OrderBy</span>(hp => hp)\n    .<span class="mt">ToList</span>();\nConsole.<span class="mt">WriteLine</span>(<span class="kw">string</span>.<span class="mt">Join</span>(<span class="st">", "</span>, resultado));`,
      q: 'O que será exibido?',
      hint: 'Filtra ≥ 40, depois ordena crescente',
      opts: [
        { t: '80, 45, 60', ok: false },
        { t: '45, 60, 80', ok: true },
        { t: '5, 15, 45, 60, 80', ok: false },
        { t: '80, 60, 45', ok: false },
      ],
      exp: 'Where(≥40): {80,45,60}. OrderBy: {45,60,80}. Join com ", ": "45, 60, 80".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Select transformando objetos.',
      code: `<span class="kw">var</span> inimigos = <span class="kw">new</span>[] { (<span class="st">"Ganado"</span>,<span class="nm">50</span>), (<span class="st">"Cultista"</span>,<span class="nm">80</span>), (<span class="st">"Regenerador"</span>,<span class="nm">200</span>) };\n<span class="kw">var</span> relatorio = inimigos\n    .<span class="mt">Select</span>(e => <span class="st">$"{e.Item1}: {e.Item2}hp"</span>);\n<span class="kw">foreach</span> (<span class="kw">var</span> linha <span class="kw">in</span> relatorio)\n    Console.<span class="mt">WriteLine</span>(linha);`,
      q: 'Quantas linhas serão exibidas?',
      hint: 'Select projeta cada tupla em string',
      opts: [
        { t: '1', ok: false },
        { t: '3', ok: true },
        { t: '6', ok: false },
        { t: '0', ok: false },
      ],
      exp: 'Select projeta cada um dos 3 inimigos em string. foreach itera as 3 strings. 3 linhas exibidas.',
    },

    // Q11 — Code
    {
      type: 'code',
      bubble: 'Operadores de agregação — Sum, Count, Any, All.',
      code: `<span class="kw">var</span> hps = <span class="kw">new</span> List&lt;<span class="kw">int</span>&gt; { <span class="nm">80</span>, <span class="nm">15</span>, <span class="nm">45</span>, <span class="nm">5</span>, <span class="nm">60</span> };\nConsole.<span class="mt">WriteLine</span>(hps.<span class="mt">Sum</span>());\nConsole.<span class="mt">WriteLine</span>(hps.<span class="mt">Count</span>(hp => hp < <span class="nm">20</span>));\nConsole.<span class="mt">WriteLine</span>(hps.<span class="mt">Any</span>(hp => hp == <span class="nm">0</span>));`,
      q: 'O que será exibido nas três linhas?',
      hint: 'Soma total, quantos < 20, algum = 0?',
      opts: [
        { t: '205, 2, False', ok: true },
        { t: '205, 1, True', ok: false },
        { t: '205, 2, True', ok: false },
        { t: '200, 2, False', ok: false },
      ],
      exp: 'Sum() = 80+15+45+5+60 = 205. Count(< 20): 15 e 5 = 2. Any(== 0): nenhum é 0 → False.',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'LINQ com objetos complexos — First com predicado.',
      code: `<span class="kw">var</span> sala = <span class="kw">new</span>[] {\n    <span class="kw">new</span> { Nome=<span class="st">"Ganado"</span>,    HP=<span class="nm">50</span>  },\n    <span class="kw">new</span> { Nome=<span class="st">"Krauser"</span>,   HP=<span class="nm">500</span> },\n    <span class="kw">new</span> { Nome=<span class="st">"Cultista"</span>,  HP=<span class="nm">60</span>  }\n};\n<span class="kw">var</span> chefe = sala\n    .<span class="mt">OrderByDescending</span>(e => e.HP)\n    .<span class="mt">First</span>();\nConsole.<span class="mt">WriteLine</span>(chefe.Nome);`,
      q: 'O que será exibido?',
      hint: 'OrderByDescending pelo HP, depois First()',
      opts: [
        { t: 'Ganado', ok: false },
        { t: 'Cultista', ok: false },
        { t: 'Krauser', ok: true },
        { t: 'Erro — First sem filtro', ok: false },
      ],
      exp: 'OrderByDescending(HP): Krauser(500), Cultista(60), Ganado(50). First() = Krauser. O inimigo mais forte é o chefe.',
    },

  ]
};
