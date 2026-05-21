// ══════════════════════════════════════════════════════
// MISSÃO 14 — ESTOQUE DE SUPRIMENTOS | Arrays multidimensionais
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_13 = {
  id: 13,
  title: "MISSÃO 14 — ESTOQUE DE SUPRIMENTOS",
  icon: '🎮',
  free: false,
  desc: "O depósito inimigo tem prateleiras e colunas — uma grade organizada. Arrays multidimensionais representam tabelas, grids e mapas de forma eficiente.",
    objs: [
    "Compreender a estrutura de arrays multidimensionais (2D) em C#.",
    "Saber acessar, modificar e iterar arrays 2D.",
    "Diferenciar entre arrays retangulares (int[,]) e jagged (int[][]).",
  ],
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'Um <strong>array 2D</strong> em C# é uma tabela de linhas e colunas: <code>int[,] grade = new int[3,4]</code> cria 3 linhas × 4 colunas.',
      q:'Quantos elementos tem um array int[3,4]?',
      hint:'Linhas × colunas',
      opts:[
        {t:'7', ok:false},{t:'34', ok:false},
        {t:'12', ok:true},{t:'3', ok:false},
      ],
      exp:'3 linhas × 4 colunas = 12 elementos. Acessados por grade[linha, coluna] — de grade[0,0] até grade[2,3].',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'Arrays <strong>jagged</strong> (dentados) são arrays de arrays, onde cada linha pode ter tamanho diferente.',
      q:'Qual a diferença entre int[,] e int[][]?',
      hint:'Um é retangular, outro pode ser irregular',
      opts:[
        {t:'São a mesma coisa com sintaxe diferente', ok:false},
        {t:'int[,] é retangular; int[][] é jagged (linhas de tamanhos diferentes)', ok:true},
        {t:'int[,] é mais rápido', ok:false},
        {t:'int[][] não existe em C#', ok:false},
      ],
      exp:'"int[,]" = todas as linhas com o mesmo número de colunas (retangular). "int[][]" = cada linha pode ter tamanho diferente.',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'Para obter o número de linhas e colunas de um array 2D, usamos <code>GetLength(dimensão)</code>.',
      q:'Como obter o número de colunas de um array 2D?',
      hint:'A segunda dimensão é o índice 1',
      opts:[
        {t:'arr.Length', ok:false},
        {t:'arr.GetLength(0)', ok:false},
        {t:'arr.GetLength(1)', ok:true},
        {t:'arr.Columns', ok:false},
      ],
      exp:'"GetLength(0)" = número de linhas. "GetLength(1)" = número de colunas. "arr.Length" retorna o total de elementos.',
    },

    // Q4 — MC
    {
      type:'mc',
      bubble:'Arrays 2D são usados para representar: mapas de jogo, matrizes matemáticas, grades, tabelas de dados.',
      q:'Qual estrutura se representa naturalmente com array 2D?',
      hint:'Grade com linhas e colunas',
      opts:[
        {t:'Uma lista de nomes', ok:false},
        {t:'Um mapa de jogo em grade (como Minecraft top-down)', ok:true},
        {t:'Uma sequência de eventos', ok:false},
        {t:'Um dicionário de sinônimos', ok:false},
      ],
      exp:'Mapas em grade, matrizes, pixels de imagem, planilhas — qualquer estrutura de linhas × colunas é um array 2D natural.',
    },

    // Q5 — Fill
    {
      type:'fill',
      bubble:'Para acessar um elemento do array 2D, usamos dois índices separados por vírgula.',
      code:`<span class="kw">int</span> valor = estoque[<span class="nm">1</span><span class="kw">,</span> <span class="nm">_______</span>]; <span class="cm">// linha 1, coluna 2</span>`,
      q:'Qual índice acessa a terceira coluna (coluna 2)?',
      hint:'Colunas começam em 0',
      ans:'2',
      exp:'"estoque[1, 2]" acessa linha 1, coluna 2. Lembre: índices começam em 0. Linha 1 = segunda linha.',
    },

    // Q6 — Fill
    {
      type:'fill',
      bubble:'Para declarar e inicializar um array 2D com valores, usamos chaves aninhadas.',
      code:`<span class="kw">int</span>[,] mapa = \n{\n    { <span class="nm">1</span>, <span class="nm">0</span>, <span class="nm">1</span> },\n    { <span class="nm">_______</span>, <span class="nm">1</span>, <span class="nm">0</span> }\n};`,
      q:'Para que o canto inferior esquerdo (linha 1, coluna 0) seja 0, qual valor colocar?',
      hint:'Queremos 0 na primeira posição da segunda linha',
      ans:'0',
      exp:'A segunda linha {0, 1, 0} tem 0 na coluna 0 (índice 0). mapa[1,0] = 0.',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'Para percorrer um array 2D completamente, usamos dois for aninhados — um para linhas, outro para colunas.',
      code:`<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i < mapa.<span class="mt">GetLength</span>(<span class="nm">0</span>); i++)\n    <span class="kw">for</span> (<span class="kw">int</span> j = <span class="nm">0</span>; j < mapa.<span class="mt">GetLength</span>(<span class="nm">_______</span>); j++)`,
      q:'Qual índice usar em GetLength para obter o número de colunas?',
      hint:'A segunda dimensão',
      ans:'1',
      exp:'"GetLength(0)" = linhas, "GetLength(1)" = colunas. O for externo percorre linhas, o interno percorre colunas.',
    },

    // Q8 — Code
    {
      type:'code',
      bubble:'Acessando posições específicas do mapa 2D.',
      code:`<span class="kw">int</span>[,] mapa = {\n    {<span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span>},\n    {<span class="nm">4</span>, <span class="nm">5</span>, <span class="nm">6</span>}\n};\nConsole.<span class="mt">WriteLine</span>(mapa[<span class="nm">1</span>, <span class="nm">2</span>]);`,
      q:'O que será exibido?',
      hint:'Linha 1, coluna 2',
      opts:[
        {t:'3', ok:false},{t:'5', ok:false},
        {t:'6', ok:true},{t:'2', ok:false},
      ],
      exp:'mapa[1,2]: linha 1 (segunda linha) = {4,5,6}. Coluna 2 (terceira) = 6.',
    },

    // Q9 — Code
    {
      type:'code',
      bubble:'Somando todos os elementos de um array 2D.',
      code:`<span class="kw">int</span>[,] grid = {{<span class="nm">1</span>,<span class="nm">2</span>},{<span class="nm">3</span>,<span class="nm">4</span>},{<span class="nm">5</span>,<span class="nm">6</span>}};\n<span class="kw">int</span> soma = <span class="nm">0</span>;\n<span class="kw">for</span>(<span class="kw">int</span> i=<span class="nm">0</span>;i<grid.<span class="mt">GetLength</span>(<span class="nm">0</span>);i++)\n  <span class="kw">for</span>(<span class="kw">int</span> j=<span class="nm">0</span>;j<grid.<span class="mt">GetLength</span>(<span class="nm">1</span>);j++)\n    soma += grid[i,j];\nConsole.<span class="mt">WriteLine</span>(soma);`,
      q:'Qual a soma de todos os elementos?',
      hint:'1+2+3+4+5+6',
      opts:[
        {t:'15', ok:false},{t:'6', ok:false},
        {t:'21', ok:true},{t:'12', ok:false},
      ],
      exp:'1+2+3+4+5+6 = 21. O for duplo percorre todas as 3 linhas × 2 colunas = 6 elementos.',
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'Array jagged — cada "linha" é um array independente.',
      code:`<span class="kw">int</span>[][] jagged = {\n    <span class="kw">new int</span>[] {<span class="nm">1</span>, <span class="nm">2</span>},\n    <span class="kw">new int</span>[] {<span class="nm">3</span>, <span class="nm">4</span>, <span class="nm">5</span>}\n};\nConsole.<span class="mt">WriteLine</span>(jagged[<span class="nm">1</span>][<span class="nm">2</span>]);`,
      q:'O que será exibido?',
      hint:'Linha 1, elemento 2 (terceiro)',
      opts:[
        {t:'4', ok:false},{t:'2', ok:false},
        {t:'5', ok:true},{t:'3', ok:false},
      ],
      exp:'"jagged[1]" = {3,4,5}. "[2]" = terceiro elemento = 5. Jagged usa dois colchetes separados: [linha][coluna].',
    },

  ]
};
