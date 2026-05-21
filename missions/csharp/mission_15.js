const MISSION_15 = {
  id: 15,
  title: "MISSÃO 16 — ORDEM DE MISSÃO",
  icon: '🗡️',
  free: false,
  desc: "Cada ordem chega com parâmetros específicos: local, alvo, armamento. Funções com parâmetros bem definidos são ordens claras — sem ambiguidade.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'<strong>Sobrecarga (overloading)</strong> permite criar múltiplas funções com o mesmo nome mas parâmetros diferentes.',
      q:'O que define qual versão sobrecarregada de uma função é chamada?',
      hint:'Os argumentos passados na chamada',
      opts:[
        {t:'O tipo de retorno', ok:false},
        {t:'O número e tipo dos argumentos passados', ok:true},
        {t:'A ordem de declaração', ok:false},
        {t:'O nome é suficiente — qualquer versão funciona', ok:false},
      ],
      exp:'Overloading: o compilador escolhe a versão correta pelo número e tipo dos argumentos. Atacar(int) ≠ Atacar(int, bool).',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'Parâmetros <strong>ref</strong> e <strong>out</strong> permitem que a função modifique variáveis do chamador.',
      q:'Qual a diferença entre ref e out?',
      hint:'Um exige inicialização prévia, o outro não',
      opts:[
        {t:'São idênticos', ok:false},
        {t:'ref exige que a variável esteja inicializada; out não exige mas deve ser atribuído na função', ok:true},
        {t:'out é mais rápido', ok:false},
        {t:'ref funciona apenas com strings', ok:false},
      ],
      exp:'"ref": variável já deve ter valor. "out": não precisa de valor inicial, mas a função DEVE atribuir um antes de retornar.',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'<strong>Params</strong> permite passar um número variável de argumentos para uma função.',
      q:'static void Imprimir(params string[] msgs) pode ser chamada com:',
      hint:'Params é flexível',
      opts:[
        {t:'Apenas um argumento', ok:false},
        {t:'Qualquer número de argumentos string', ok:true},
        {t:'Nenhum argumento', ok:false},
        {t:'Apenas arrays previamente criados', ok:false},
      ],
      exp:'"params" aceita 0 ou mais argumentos. Imprimir("a"), Imprimir("a","b"), Imprimir("a","b","c") — todos funcionam.',
    },

    // Q4 — Fill
    {
      type:'fill',
      bubble:'Para retornar múltiplos valores, podemos usar tuplas: <code>(tipo1, tipo2)</code> como tipo de retorno.',
      code:`<span class="kw">static</span> (<span class="kw">int</span>, <span class="kw">bool</span>) <span class="mt">Atacar</span>(<span class="kw">int</span> dano)\n    => (dano * <span class="nm">2</span>, dano > <span class="nm">50</span>);\n\n<span class="kw">var</span> (<span class="kw">_______</span>, critico) = <span class="mt">Atacar</span>(<span class="nm">30</span>);`,
      q:'Qual nome dar à primeira variável da tupla desestruturada?',
      hint:'O primeiro valor é o dano calculado',
      ans:'danoFinal',
      exp:'Tupla retorna dois valores. "(danoFinal, critico) = Atacar(30)" desestrutura: danoFinal=60, critico=false.',
    },

    // Q5 — Fill
    {
      type:'fill',
      bubble:'Funções podem chamar outras funções. O código fica organizado em camadas de abstração.',
      code:`<span class="kw">static void</span> <span class="mt">ExecutarMissao</span>()\n{\n    <span class="mt">_______</span>();\n    <span class="mt">EliminarInimigos</span>();\n    <span class="mt">Evacuar</span>();\n}`,
      q:'Qual função de reconhecimento deveria ser a primeira chamada?',
      hint:'Antes de agir, reconheça',
      ans:'Reconhecer',
      exp:'Composição de funções: ExecutarMissao chama Reconhecer → EliminarInimigos → Evacuar. Cada função faz sua parte.',
    },

    // Q6 — Fill
    {
      type:'fill',
      bubble:'A expression body <code>=></code> é um atalho para funções com retorno em uma linha.',
      code:`<span class="kw">static bool</span> <span class="mt">EhCritico</span>(<span class="kw">int</span> dano) <span class="kw">_______</span> dano > <span class="nm">100</span>;`,
      q:'Qual símbolo substitui "{ return ... }" no expression body?',
      hint:'Uma seta',
      ans:'=>',
      exp:'"=>" expression body: "static bool EhCritico(int d) => d > 100" é equivalente a "{ return d > 100; }". Mais conciso.',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'Para usar o parâmetro out na chamada, também precisamos da palavra-chave out.',
      code:`<span class="kw">int</span> resultado;\n<span class="kw">bool</span> ok = <span class="kw">int</span>.<span class="mt">TryParse</span>(<span class="st">"42"</span>, <span class="kw">_______</span> resultado);`,
      q:'Qual palavra-chave usar antes do parâmetro out na chamada?',
      hint:'Mesma palavra da definição',
      ans:'out',
      exp:'"out resultado" na chamada. TryParse define o valor de "resultado" se a conversão for bem-sucedida.',
    },

    // Q8 — Code
    {
      type:'code',
      bubble:'Sobrecarga de funções.',
      code:`<span class="kw">static int</span> <span class="mt">Dano</span>(<span class="kw">int</span> b) => b;\n<span class="kw">static int</span> <span class="mt">Dano</span>(<span class="kw">int</span> b, <span class="kw">bool</span> c) => c ? b*<span class="nm">2</span> : b;\n\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Dano</span>(<span class="nm">20</span>));\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Dano</span>(<span class="nm">20</span>, <span class="kw">true</span>));`,
      q:'O que será exibido?',
      hint:'Primeira chama a versão com 1 param, segunda com 2',
      opts:[
        {t:'20 e 20', ok:false},
        {t:'20 e 40', ok:true},
        {t:'Erro — nome duplicado', ok:false},
        {t:'40 e 40', ok:false},
      ],
      exp:'"Dano(20)" chama a versão de 1 parâmetro → 20. "Dano(20, true)" chama a de 2 parâmetros → 20*2 = 40.',
    },

    // Q9 — Code
    {
      type:'code',
      bubble:'Usando params para somar quantidade variável.',
      code:`<span class="kw">static int</span> <span class="mt">Somar</span>(<span class="kw">params int</span>[] nums)\n{\n    <span class="kw">int</span> t = <span class="nm">0</span>;\n    <span class="kw">foreach</span>(<span class="kw">int</span> n <span class="kw">in</span> nums) t += n;\n    <span class="kw">return</span> t;\n}\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Somar</span>(<span class="nm">1</span>,<span class="nm">2</span>,<span class="nm">3</span>,<span class="nm">4</span>,<span class="nm">5</span>));`,
      q:'O que será exibido?',
      hint:'Soma de 1 a 5',
      opts:[
        {t:'5', ok:false},{t:'10', ok:false},
        {t:'15', ok:true},{t:'54321', ok:false},
      ],
      exp:'"params int[] nums" recebe 1,2,3,4,5 como array. Soma = 1+2+3+4+5 = 15.',
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'Retornando tupla com múltiplos valores.',
      code:`<span class="kw">static</span> (<span class="kw">int</span> min, <span class="kw">int</span> max) <span class="mt">MinMax</span>(<span class="kw">int</span>[] a)\n    => (a.<span class="mt">Min</span>(), a.<span class="mt">Max</span>());\n\n<span class="kw">var</span> (min, max) = <span class="mt">MinMax</span>(<span class="kw">new int</span>[] {<span class="nm">3</span>,<span class="nm">7</span>,<span class="nm">1</span>,<span class="nm">9</span>,<span class="nm">4</span>});\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"Min:{min} Max:{max}"</span>);`,
      q:'O que será exibido?',
      hint:'Menor e maior do array {3,7,1,9,4}',
      opts:[
        {t:'Min:3 Max:9', ok:false},
        {t:'Min:1 Max:9', ok:true},
        {t:'Min:1 Max:7', ok:false},
        {t:'Min:3 Max:7', ok:false},
      ],
      exp:'.Min() = 1, .Max() = 9. A tupla retorna (1, 9) e desestrutura em min e max.',
    },

    // Q11 — Code
    {
      type:'code',
      bubble:'Funções com expressão guard (early return) para validação.',
      code:`<span class="kw">static void</span> <span class="mt">Recarregar</span>(<span class="kw">int</span> municao)\n{\n    <span class="kw">if</span> (municao >= <span class="nm">30</span>)\n    {\n        Console.<span class="mt">WriteLine</span>(<span class="st">"Cheio — não precisa recarregar"</span>);\n        <span class="kw">return</span>;\n    }\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Recarregando..."</span>);\n}\n<span class="mt">Recarregar</span>(<span class="nm">30</span>);`,
      q:'O que será exibido para municao = 30?',
      hint:'30 >= 30 é verdadeiro',
      opts:[
        {t:'Recarregando...', ok:false},
        {t:'Cheio — não precisa recarregar', ok:true},
        {t:'Ambas as mensagens', ok:false},
        {t:'Nada', ok:false},
      ],
      exp:'municao=30 >= 30 = true. Imprime a mensagem e "return" encerra a função. A segunda linha não executa.',
    },

  ]
};
