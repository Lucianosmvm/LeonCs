// ══════════════════════════════════════════════════════
// MISSÃO 12 — HORDA | Loop foreach
// Tipo: Normal (10 questões) | 3 MC → 3 Fill → 4 Code
// ══════════════════════════════════════════════════════

const MISSION_11 = {
  id: 11,
  title: "MISSÃO 12 — HORDA",
  icon: '🧟',
  free: false,
  desc: "Uma horda de inimigos avança. Para processar cada ameaça sem contar índices, o foreach é sua arma — percorre coleções de forma limpa e direta.",
  objs:[
    'Entender a sintaxe e uso do foreach',
    'Comparar foreach com for tradicional',
    'Aplicar foreach em arrays e coleções como Dictionary',
  ],
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'O <strong>foreach</strong> itera sobre cada elemento de uma coleção sem gerenciar índices. Mais simples que o for para leitura.',
      q:'Qual a principal vantagem do foreach sobre o for?',
      hint:'Você não precisa gerenciar nada',
      opts:[
        {t:'É mais rápido que o for', ok:false},
        {t:'Não exige gerenciar índice — código mais limpo e seguro', ok:true},
        {t:'Funciona apenas com arrays', ok:false},
        {t:'Permite modificar a coleção durante a iteração', ok:false},
      ],
      exp:'foreach elimina erros de índice (off-by-one). Código mais limpo. Mas não acessa o índice nem modifica a coleção.',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'No foreach, a variável de iteração é <strong>somente leitura</strong>. Você não pode modificar os elementos da coleção por ela.',
      q:'O que acontece se tentarmos modificar a variável do foreach?',
      hint:'Ela é readonly',
      opts:[
        {t:'A coleção original é modificada', ok:false},
        {t:'Erro de compilação — a variável de iteração é readonly', ok:true},
        {t:'O loop reinicia', ok:false},
        {t:'Funciona normalmente', ok:false},
      ],
      exp:'"foreach (var item in lista) { item = novo; }" causa erro de compilação. Para modificar, use for com índice.',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'O foreach funciona com qualquer coleção que implemente <strong>IEnumerable</strong>: arrays, List, Dictionary, etc.',
      q:'Quais coleções o foreach pode iterar?',
      hint:'Se implementa IEnumerable, o foreach aceita',
      opts:[
        {t:'Apenas arrays', ok:false},
        {t:'Apenas List<T>', ok:false},
        {t:'Qualquer coleção que implemente IEnumerable', ok:true},
        {t:'Apenas coleções de strings', ok:false},
      ],
      exp:'foreach funciona com arrays, List, Dictionary, Stack, Queue, e qualquer coleção que implemente IEnumerable.',
    },

    // Q4 — Fill
    {
      type:'fill',
      bubble:'A sintaxe do foreach: <code>foreach (tipo variavel in coleção)</code>.',
      code:`<span class="kw">foreach</span> (<span class="kw">string</span> inimigo <span class="kw">_______</span> inimigos)`,
      q:'Qual palavra-chave conecta a variável à coleção no foreach?',
      hint:'Dentro de / em inglês',
      ans:'in',
      exp:'"in" é a palavra que conecta: "para cada elemento IN coleção". foreach (string s in lista) = para cada string na lista.',
    },

    // Q5 — Fill
    {
      type:'fill',
      bubble:'Para usar var no foreach, o compilador infere o tipo automaticamente.',
      code:`<span class="kw">foreach</span> (<span class="kw">_______</span> item <span class="kw">in</span> inventario)\n    Console.<span class="mt">WriteLine</span>(item);`,
      q:'Qual palavra deixa o compilador inferir o tipo automaticamente?',
      hint:'Inferência de tipo',
      ans:'var',
      exp:'"var" no foreach infere o tipo da coleção. Se inventario é List<string>, var item será string automaticamente.',
    },

    // Q6 — Fill
    {
      type:'fill',
      bubble:'Para iterar as chaves de um Dictionary, usamos <code>.Keys</code>.',
      code:`<span class="kw">foreach</span> (<span class="kw">var</span> chave <span class="kw">in</span> dic.<span class="mt">_______</span>)\n    Console.<span class="mt">WriteLine</span>(chave);`,
      q:'Qual propriedade retorna todas as chaves de um Dictionary?',
      hint:'As chaves',
      ans:'Keys',
      exp:'"dic.Keys" para chaves, "dic.Values" para valores, "dic" diretamente para pares KeyValuePair.',
    },

    // Q7 — Code
    {
      type:'code',
      bubble:'Foreach percorrendo todos os inimigos.',
      code:`<span class="kw">string</span>[] inimigos = {<span class="st">"Ganado"</span>, <span class="st">"Cultista"</span>, <span class="st">"Regenerador"</span>};\n<span class="kw">foreach</span> (<span class="kw">string</span> inimigo <span class="kw">in</span> inimigos)\n    Console.<span class="mt">WriteLine</span>(<span class="st">$"Eliminando: {inimigo}"</span>);`,
      q:'Quantas linhas serão exibidas?',
      hint:'Um elemento, uma linha',
      opts:[
        {t:'1', ok:false},{t:'2', ok:false},
        {t:'3', ok:true},{t:'0', ok:false},
      ],
      exp:'O array tem 3 elementos. Foreach itera sobre cada um. 3 linhas: "Eliminando: Ganado", "...Cultista", "...Regenerador".',
    },

    // Q8 — Code
    {
      type:'code',
      bubble:'Foreach calculando a soma de um array.',
      code:`<span class="kw">int</span>[] danos = {<span class="nm">10</span>, <span class="nm">20</span>, <span class="nm">30</span>, <span class="nm">40</span>};\n<span class="kw">int</span> soma = <span class="nm">0</span>;\n<span class="kw">foreach</span> (<span class="kw">int</span> d <span class="kw">in</span> danos)\n    soma += d;\nConsole.<span class="mt">WriteLine</span>(soma);`,
      q:'Qual o total de danos?',
      hint:'10+20+30+40',
      opts:[
        {t:'40', ok:false},{t:'90', ok:false},
        {t:'100', ok:true},{t:'10', ok:false},
      ],
      exp:'soma = 10+20+30+40 = 100. Foreach acumula cada elemento na variável soma.',
    },

    // Q9 — Code
    {
      type:'code',
      bubble:'Diferença entre for (com índice) e foreach (sem índice).',
      code:`<span class="kw">string</span>[] armas = {<span class="st">"Pistola"</span>, <span class="st">"Escopeta"</span>, <span class="st">"Rifle"</span>};\n\n<span class="cm">// Com índice:</span>\n<span class="kw">for</span> (<span class="kw">int</span> i=<span class="nm">0</span>; i<armas.<span class="mt">Length</span>; i++)\n    Console.<span class="mt">Write</span>(i + <span class="st">":"</span> + armas[i] + <span class="st">" "</span>);\nConsole.<span class="mt">WriteLine</span>();\n\n<span class="cm">// Sem índice:</span>\n<span class="kw">foreach</span> (<span class="kw">string</span> a <span class="kw">in</span> armas)\n    Console.<span class="mt">Write</span>(a + <span class="st">" "</span>);`,
      q:'Qual a diferença nas saídas?',
      hint:'Um mostra índice, outro não',
      opts:[
        {t:'São idênticas', ok:false},
        {t:'O for mostra "0:Pistola 1:Escopeta 2:Rifle"; o foreach mostra "Pistola Escopeta Rifle"', ok:true},
        {t:'O foreach é mais lento', ok:false},
        {t:'O for falha sem índice', ok:false},
      ],
      exp:'for com i mostra o índice: "0:Pistola 1:Escopeta 2:Rifle". foreach sem índice: "Pistola Escopeta Rifle".',
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'Foreach com Dictionary iterando pares chave-valor.',
      code:`<span class="kw">var</span> arsenal = <span class="kw">new</span> Dictionary&lt;<span class="kw">string</span>,<span class="kw">int</span>&gt; {\n    {<span class="st">"Pistola"</span>, <span class="nm">45</span>},\n    {<span class="st">"Escopeta"</span>, <span class="nm">12</span>}\n};\n<span class="kw">foreach</span> (<span class="kw">var</span> par <span class="kw">in</span> arsenal)\n    Console.<span class="mt">WriteLine</span>(<span class="st">$"{par.Key}: {par.Value} balas"</span>);`,
      q:'O que será exibido?',
      hint:'Cada par tem Key e Value',
      opts:[
        {t:'Pistola Escopeta', ok:false},
        {t:'Pistola: 45 balas e Escopeta: 12 balas', ok:true},
        {t:'45 12', ok:false},
        {t:'Erro — Dictionary não suporta foreach', ok:false},
      ],
      exp:'foreach em Dictionary itera KeyValuePair. par.Key = nome, par.Value = quantidade. Exibe cada arma com sua munição.',
    },

  ]
};
