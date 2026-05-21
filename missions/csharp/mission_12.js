// ══════════════════════════════════════════════════════
// MISSÃO 13 — ARSENAL | Arrays
// Tipo: Normal (12 questões) | 4 MC → 4 Fill → 4 Code
// ══════════════════════════════════════════════════════

const MISSION_12 = {
  id: 12,
  title: "MISSÃO 13 — ARSENAL",
  icon: '🗡️',
  free: false,
  desc: "O arsenal é organizado em fileiras precisas. Arrays armazenam múltiplos valores do mesmo tipo com índices numerados — a estrutura de dados mais fundamental.",
  objs: [
    "Entender a estrutura e sintaxe de arrays em C#.",
    "Saber acessar, modificar e iterar arrays.",
    "Aplicar métodos úteis como Sort, Reverse e IndexOf.",
  ],
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'Um <strong>array</strong> é uma coleção de tamanho <em>fixo</em> de elementos do mesmo tipo, acessados por índice começando em 0.',
      q:'Qual é o índice do primeiro elemento de um array em C#?',
      hint:'Conta do zero em programação',
      opts:[
        {t:'1', ok:false},{t:'-1', ok:false},
        {t:'0', ok:true},{t:'Depende do array', ok:false},
      ],
      exp:'Arrays em C# começam no índice 0. Um array de 5 elementos tem índices 0, 1, 2, 3, 4. O último é sempre Length-1.',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'Tentar acessar um índice fora dos limites do array lança <strong>IndexOutOfRangeException</strong>.',
      q:'O que acontece ao acessar arr[5] em um array de 5 elementos?',
      hint:'O último índice válido é 4',
      opts:[
        {t:'Retorna null', ok:false},
        {t:'Retorna 0 (valor padrão)', ok:false},
        {t:'Lança IndexOutOfRangeException', ok:true},
        {t:'Retorna o último elemento', ok:false},
      ],
      exp:'Array de 5 elementos: índices 0-4. arr[5] está fora. C# lança IndexOutOfRangeException em runtime.',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'Arrays em C# têm tamanho <strong>fixo</strong> definido na criação. Para tamanho dinâmico, use List<T>.',
      q:'Qual a limitação principal de um array em C#?',
      hint:'Criou com tamanho 10, fica com 10 para sempre',
      opts:[
        {t:'Só aceita strings', ok:false},
        {t:'Não pode ser iterado com foreach', ok:false},
        {t:'Tamanho fixo — não pode crescer ou diminuir após a criação', ok:true},
        {t:'É mais lento que List', ok:false},
      ],
      exp:'Array: tamanho fixo, alocado na criação. Para adicionar/remover elementos, use List<T> (array dinâmico).',
    },

    // Q4 — MC
    {
      type:'mc',
      bubble:'O método <code>Array.Sort()</code> ordena um array em ordem crescente no lugar (in-place), sem criar novo array.',
      q:'Array.Sort(arr) modifica o array original ou cria um novo?',
      hint:'In-place',
      opts:[
        {t:'Cria e retorna um novo array ordenado', ok:false},
        {t:'Modifica o array original in-place', ok:true},
        {t:'Retorna uma List ordenada', ok:false},
        {t:'Não funciona para arrays de inteiros', ok:false},
      ],
      exp:'"Array.Sort(arr)" ordena o array original. Se precisar preservar o original, copie antes: var copia = arr.Clone().',
    },

    // Q5 — Fill
    {
      type:'fill',
      bubble:'Arrays são declarados com colchetes após o tipo.',
      code:`<span class="kw">int</span><span class="kw">[]</span> municoes = <span class="kw">new int</span>[<span class="nm">_______</span>];`,
      q:'Para criar um array de 5 posições, qual número vai nos colchetes?',
      hint:'Quantas posições você quer?',
      ans:'5',
      exp:'"new int[5]" cria array com 5 posições (índices 0-4), todos inicializados com 0 (padrão de int).',
    },

    // Q6 — Fill
    {
      type:'fill',
      bubble:'Arrays podem ser iniciados com valores já declarados usando chaves.',
      code:`<span class="kw">string</span>[] armas = <span class="kw">_______</span> <span class="st">"Pistola"</span>, <span class="st">"Faca"</span>, <span class="st">"Escopeta"</span> <span class="kw">}</span>;`,
      q:'Qual símbolo inicia o bloco de valores iniciais?',
      hint:'Chave aberta',
      ans:'{',
      exp:'"string[] armas = { \"Pistola\", \"Faca\", \"Escopeta\" }" inicializa o array com 3 elementos. Tamanho inferido automaticamente.',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'Para acessar um elemento específico, usamos o nome do array seguido do índice entre colchetes.',
      code:`<span class="kw">string</span> primeiraArma = armas[<span class="nm">_______</span>];`,
      q:'Qual índice acessa o primeiro elemento?',
      hint:'Começamos a contar do zero',
      ans:'0',
      exp:'"armas[0]" acessa o primeiro elemento. armas[1] o segundo, armas[armas.Length-1] o último.',
    },

    // Q8 — Fill
    {
      type:'fill',
      bubble:'<code>Array.Reverse(arr)</code> inverte a ordem dos elementos no array original.',
      code:`Array.<span class="mt">_______</span>(inimigos);`,
      q:'Qual método inverte os elementos de um array?',
      hint:'Inverter em inglês',
      ans:'Reverse',
      exp:'"Array.Reverse(arr)" inverte in-place. {1,2,3} vira {3,2,1}. Combinado com Sort: Sort + Reverse = ordem decrescente.',
    },

    // Q9 — Code
    {
      type:'code',
      bubble:'Acessando e modificando elementos do array.',
      code:`<span class="kw">int</span>[] hp = {<span class="nm">100</span>, <span class="nm">80</span>, <span class="nm">60</span>};\nhp[<span class="nm">1</span>] = <span class="nm">50</span>;\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"{hp[0]} {hp[1]} {hp[2]}"</span>);`,
      q:'O que será exibido?',
      hint:'hp[1] foi modificado para 50',
      opts:[
        {t:'100 80 60', ok:false},
        {t:'100 50 60', ok:true},
        {t:'50 80 60', ok:false},
        {t:'100 80 50', ok:false},
      ],
      exp:'"hp[1] = 50" modifica o segundo elemento (índice 1). O array vira {100, 50, 60}.',
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'Array.Sort ordenando o arsenal por dano.',
      code:`<span class="kw">int</span>[] danos = {<span class="nm">45</span>, <span class="nm">10</span>, <span class="nm">80</span>, <span class="nm">25</span>};\nArray.<span class="mt">Sort</span>(danos);\n<span class="kw">foreach</span> (<span class="kw">int</span> d <span class="kw">in</span> danos)\n    Console.<span class="mt">Write</span>(d + <span class="st">" "</span>);`,
      q:'O que será exibido?',
      hint:'Ordenado de menor para maior',
      opts:[
        {t:'45 10 80 25', ok:false},
        {t:'10 25 45 80', ok:true},
        {t:'80 45 25 10', ok:false},
        {t:'10 45 25 80', ok:false},
      ],
      exp:'"Array.Sort" ordena em ordem crescente. {45,10,80,25} → {10,25,45,80}.',
    },

    // Q11 — Code
    {
      type:'code',
      bubble:'Buscando um elemento com Array.IndexOf.',
      code:`<span class="kw">string</span>[] armas = {<span class="st">"Pistola"</span>, <span class="st">"Escopeta"</span>, <span class="st">"Rifle"</span>};\n<span class="kw">int</span> pos = Array.<span class="mt">IndexOf</span>(armas, <span class="st">"Escopeta"</span>);\nConsole.<span class="mt">WriteLine</span>(pos);`,
      q:'O que será exibido?',
      hint:'"Escopeta" está em qual posição?',
      opts:[
        {t:'0', ok:false},{t:'2', ok:false},
        {t:'1', ok:true},{t:'-1', ok:false},
      ],
      exp:'"Escopeta" está no índice 1. Array.IndexOf retorna o índice do elemento ou -1 se não encontrar.',
    },

    // Q12 — Code
    {
      type:'code',
      bubble:'Array de bool para rastrear missões completadas.',
      code:`<span class="kw">bool</span>[] missoes = {<span class="kw">true</span>, <span class="kw">true</span>, <span class="kw">false</span>, <span class="kw">true</span>, <span class="kw">false</span>};\n<span class="kw">int</span> completas = <span class="nm">0</span>;\n<span class="kw">foreach</span> (<span class="kw">bool</span> m <span class="kw">in</span> missoes)\n    <span class="kw">if</span> (m) completas++;\nConsole.<span class="mt">WriteLine</span>(completas);`,
      q:'Quantas missões foram completadas?',
      hint:'Conte os "true" no array',
      opts:[
        {t:'2', ok:false},{t:'5', ok:false},
        {t:'3', ok:true},{t:'1', ok:false},
      ],
      exp:'{true, true, false, true, false}: 3 valores true. completas = 3.',
    },

  ]
};
