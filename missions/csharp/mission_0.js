// ══════════════════════════════════════════════════════
// ACT I — A VILA
// MISSÃO 01 — INFILTRAÇÃO
// Tema: O que é programação / algoritmos
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_0 = {
  id: 0,
  title: "MISSÃO 01 — INFILTRAÇÃO",
  icon: '🕵️',
  free: true,
  desc: "Você acabou de pousar em território inimigo. Antes de qualquer ação, precisa entender o terreno — os fundamentos que vão guiar toda a operação.",
  objs: [
    "Entender o que é programação e algoritmos",
    "Conhecer a linguagem C# e seu papel",
    "Aprender os conceitos básicos para começar a codar"
  ],
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'Bem-vindo, agente. Antes de pegar uma arma, você precisa entender o básico. <strong>Programação</strong> é dar instruções precisas ao computador para resolver problemas.',
      q:'O que é programação?',
      opts:[
        {t:'Consertar computadores fisicamente', ok:false},
        {t:'Dar instruções ao computador para resolver problemas', ok:true},
        {t:'Criar hardware e processadores', ok:false},
        {t:'Usar aplicativos já prontos', ok:false},
      ],
      exp:'Programação é o ato de escrever instruções (código) que o computador executa para resolver um problema.',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'Uma <strong>linguagem de programação</strong> é o idioma que usamos para nos comunicar com o computador. C# é uma delas.',
      q:'Para que serve uma linguagem de programação?',
      opts:[
        {t:'Para comunicar instruções ao computador de forma estruturada', ok:true},
        {t:'Para traduzir textos entre humanos', ok:false},
        {t:'Para acelerar a internet', ok:false},
        {t:'Para proteger arquivos com senha', ok:false},
      ],
      exp:'Linguagens de programação permitem que humanos escrevam instruções num formato que pode ser traduzido para a linguagem da máquina.',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'<strong>C#</strong> (lê-se "C Sharp") é uma linguagem criada pela Microsoft, moderna, poderosa e usada em jogos, apps, sistemas web e muito mais.',
      q:'Quem criou a linguagem C#?',
      opts:[
        {t:'Google', ok:false},
        {t:'Apple', ok:false},
        {t:'Meta', ok:false},
        {t:'Microsoft', ok:true},
      ],
      exp:'C# foi criada pela Microsoft em 2000, liderada por Anders Hejlsberg. É amplamente usada com o ecossistema .NET.',
    },

    // Q4 — MC
    {
      type:'mc',
      bubble:'Um <strong>algoritmo</strong> é uma sequência finita de passos para resolver um problema. Como um plano de missão — cada etapa importa.',
      q:'Qual das opções melhor descreve um algoritmo?',
      opts:[
        {t:'Um tipo de computador', ok:false},
        {t:'Uma sequência de passos para resolver um problema', ok:true},
        {t:'Um erro de programação', ok:false},
        {t:'Um arquivo executável', ok:false},
      ],
      exp:'Algoritmo: sequência finita, ordenada e sem ambiguidade de instruções que resolve um problema. Base de toda programação.',
    },

    // Q5 — MC
    {
      type:'mc',
      bubble:'Todo algoritmo precisa ter três características: ser <strong>finito</strong> (termina), <strong>definido</strong> (sem ambiguidade) e <strong>eficaz</strong> (produz resultado).',
      q:'O que acontece se um algoritmo não for finito?',
      opts:[
        {t:'Funciona mais rápido', ok:false},
        {t:'O computador reinicia automaticamente', ok:false},
        {t:'O programa entra em loop infinito e nunca entrega resultado', ok:true},
        {t:'O código compila com aviso', ok:false},
      ],
      exp:'Um algoritmo não finito nunca termina — trava o programa. Todo algoritmo deve ter uma condição de parada clara.',
    },

    // Q6 — MC
    {
      type:'mc',
      bubble:'O fluxo básico de qualquer programa é: <strong>Entrada → Processamento → Saída</strong>. Dados entram, são transformados, e um resultado sai.',
      q:'Numa calculadora que soma dois números, qual é o "processamento"?',
      opts:[
        {t:'A operação de soma em si', ok:true},
        {t:'Os números digitados', ok:false},
        {t:'O resultado exibido na tela', ok:false},
        {t:'A bateria que alimenta a calculadora', ok:false},
      ],
      exp:'Entrada = números digitados. Processamento = a soma. Saída = resultado na tela. Esse fluxo existe em todo programa.',
    },

    // Q7 — MC
    {
      type:'mc',
      bubble:'Um <strong>compilador</strong> traduz seu código C# para linguagem de máquina. O compilador do C# se chama Roslyn.',
      q:'O que faz um compilador?',
      opts:[
        {t:'Executa o programa diretamente', ok:false},
        {t:'Corrige erros automaticamente', ok:false},
        {t:'Conecta o código à internet', ok:false},
        {t:'Traduz o código escrito em linguagem de máquina executável', ok:true},
      ],
      exp:'O compilador lê seu código fonte e traduz para binário que o processador executa. Erros de sintaxe são detectados aqui.',
    },

    // Q8 — Fill
    {
      type:'fill',
      bubble:'Em C#, todo programa começa sua execução pelo método <code>Main</code>. É o ponto de entrada do sistema.',
      code:`<span class="kw">static void</span> <span class="mt">_______</span>(<span class="kw">string</span>[] args)\n{\n    <span class="cm">// programa começa aqui</span>\n}`,
      q:'Qual é o nome do método de entrada de todo programa C#?',
      ans:'Main',
      exp:'"Main" é o ponto de entrada de todo programa C#. É onde a execução começa. O nome é obrigatório e case-sensitive.',
    },

    // Q9 — Fill
    {
      type:'fill',
      bubble:'O <strong>namespace</strong> organiza o código em grupos lógicos, como pastas para arquivos. Evita conflitos de nomes.',
      code:`<span class="kw">_______</span> MissaoInfiltracao\n{\n    <span class="cm">// código organizado aqui</span>\n}`,
      q:'Qual palavra-chave define um namespace em C#?',
      ans:'namespace',
      exp:'"namespace" agrupa classes relacionadas. Como pastas no Windows. Evita conflito de nomes iguais em projetos grandes.',
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'Bem-vindo ao seu primeiro código C#. O agente Leon envia uma mensagem de confirmação da missão.',
      code:`<span class="kw">using</span> System;\n\n<span class="kw">namespace</span> Infiltracao\n{\n    <span class="kw">class</span> Programa\n    {\n        <span class="kw">static void</span> <span class="mt">Main</span>(<span class="kw">string</span>[] args)\n        {\n            Console.<span class="mt">WriteLine</span>(<span class="st">"Missão iniciada, parceiro."</span>);\n        }\n    }\n}`,
      q:'O que este programa exibe ao executar?',
      opts:[
        {t:'Infiltracao', ok:false},
        {t:'Missão iniciada, parceiro.', ok:true},
        {t:'Main', ok:false},
        {t:'System', ok:false},
      ],
      exp:'Console.WriteLine() imprime o texto entre aspas e pula uma linha. "Missão iniciada, parceiro." será exibido.',
    },

  ]
};
