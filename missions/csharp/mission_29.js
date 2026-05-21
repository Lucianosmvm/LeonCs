const MISSION_29 = {
  id: 29,
  title: "MISSÃO 30 — O SALÃO DOS ILUMINADOS",
  icon: '💡',
  free: false,
  desc: "Os Iluminados passam ordens por mensageiros — código que carrega comportamento como se fosse dado. Delegates, lambdas e Func/Action são os mensageiros do C# moderno.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Um <strong>delegate</strong> é um tipo que representa uma referência a um método. Permite tratar funções como dados — passá-las como argumento.',
      q: 'O que um delegate tem em comum com um ponteiro de função em C?',
      hint: 'Ambos referenciam funções',
      opts: [
        { t: 'Nada — são conceitos opostos', ok: false },
        { t: 'Ambos armazenam referência a uma função que pode ser chamada indiretamente', ok: true },
        { t: 'Delegates são mais lentos que ponteiros', ok: false },
        { t: 'Delegates só funcionam com métodos static', ok: false },
      ],
      exp: 'Delegate = ponteiro de função type-safe. Armazena referência a um método e permite chamá-lo indiretamente. Mas delegates são seguros em tipos.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<strong>Lambda</strong> é uma função anônima definida inline com a sintaxe <code>(params) => expressão</code> ou <code>(params) => { bloco }</code>.',
      q: 'Qual é o tipo de "x => x * 2" quando usado como argumento?',
      hint: 'Depende do contexto',
      opts: [
        { t: 'Sempre int', ok: false },
        { t: 'Sempre void', ok: false },
        { t: 'Inferido pelo compilador com base no contexto (Func<int,int>, por exemplo)', ok: true },
        { t: 'Lambda não tem tipo', ok: false },
      ],
      exp: 'O tipo da lambda é inferido pelo contexto. "Func<int,int> f = x => x * 2" → recebe int, retorna int. Sem contexto, o compilador não sabe o tipo.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>Func&lt;T, TResult&gt;</code> é um delegate genérico para funções que retornam valor. O último tipo genérico é sempre o tipo de retorno.',
      q: 'Qual o tipo de retorno de Func<string, int, bool>?',
      hint: 'O último tipo genérico sempre é o retorno',
      opts: [
        { t: 'string', ok: false },
        { t: 'int', ok: false },
        { t: 'bool', ok: true },
        { t: 'void', ok: false },
      ],
      exp: 'Em Func<string, int, bool>: string e int são parâmetros, bool é o retorno. O último tipo é sempre o retorno.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>Action&lt;T&gt;</code> é um delegate genérico para métodos que não retornam valor (void).',
      q: 'Qual a diferença entre Action<string> e Func<string>?',
      hint: 'Um retorna, o outro não',
      opts: [
        { t: 'Não há diferença prática', ok: false },
        { t: 'Action<string> recebe string e retorna void; Func<string> não tem parâmetros e retorna string', ok: true },
        { t: 'Action é mais rápida', ok: false },
        { t: 'Func<string> recebe string e retorna void', ok: false },
      ],
      exp: '"Action<string>" = método que recebe string e não retorna nada. "Func<string>" = método sem parâmetros que retorna string.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<strong>Closures</strong>: lambdas podem capturar variáveis do escopo em que foram definidas.',
      q: 'O que é uma closure em uma lambda?',
      hint: 'A lambda lembra onde nasceu',
      opts: [
        { t: 'Um erro de escopo', ok: false },
        { t: 'A capacidade da lambda de capturar e usar variáveis do escopo externo', ok: true },
        { t: 'Uma lambda sem parâmetros', ok: false },
        { t: 'Uma lambda recursiva', ok: false },
      ],
      exp: 'Closure: a lambda "fecha" sobre variáveis do escopo externo. "int x = 5; Func<int,int> f = n => n + x;" — f captura x.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<strong>Multicast delegate</strong>: um delegate pode referenciar múltiplos métodos. Operadores += e -= adicionam/removem.',
      q: 'O que acontece ao invocar um delegate multicast?',
      hint: 'Todos os métodos registrados executam',
      opts: [
        { t: 'Apenas o último método registrado executa', ok: false },
        { t: 'Todos os métodos registrados executam em ordem de adição', ok: true },
        { t: 'Lança exceção — só pode ter um método', ok: false },
        { t: 'O primeiro método cancela os demais', ok: false },
      ],
      exp: 'Multicast: todos os métodos na invocation list executam em sequência. Usado em eventos. Retorna apenas o valor do último.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Declarando uma variável Func que recebe int e retorna bool:',
      code: `<span class="kw">_______</span>&lt;<span class="kw">int</span>, <span class="kw">bool</span>&gt; ehPar = n => n % <span class="nm">2</span> == <span class="nm">0</span>;`,
      q: 'Qual tipo genérico de delegate para funções com retorno?',
      hint: 'Função em inglês',
      ans: 'Func',
      exp: '"Func<int, bool>" — recebe int, retorna bool. "n => n % 2 == 0" retorna true se n for par.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Declarando um Action que recebe string (sem retorno):',
      code: `<span class="kw">_______</span>&lt;<span class="kw">string</span>&gt; imprimir = msg => Console.<span class="mt">WriteLine</span>(msg);`,
      q: 'Qual tipo de delegate para métodos sem retorno?',
      hint: 'Ação em inglês',
      ans: 'Action',
      exp: '"Action<string>" — recebe string, não retorna nada (void). "Action" sem genérico = sem parâmetros e sem retorno.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Para passar uma lambda como parâmetro que substitui um método bool:',
      code: `<span class="kw">Predicate</span>&lt;<span class="kw">int</span>&gt; ehGrande = hp => hp > <span class="nm">_______</span>;`,
      q: 'Qual valor define "grande" como HP acima de 100?',
      hint: 'Cem',
      ans: '100',
      exp: '"Predicate<int>" é equivalente a "Func<int, bool>". Predicate<T> é o tipo de delegate esperado por métodos como List.Find().',
    },

    // Q10 — Fill
    {
      type: 'fill',
      bubble: 'Adicionando múltiplos métodos a um delegate multicast com +=:',
      code: `Action log = () => Console.<span class="mt">WriteLine</span>(<span class="st">"Log A"</span>);\nlog <span class="kw">_______</span> (() => Console.<span class="mt">WriteLine</span>(<span class="st">"Log B"</span>));`,
      q: 'Qual operador adiciona um método ao delegate?',
      hint: 'Adição e atribuição',
      ans: '+=',
      exp: '"+=" adiciona ao multicast. "log()" executará "Log A" e depois "Log B". "-=" remove um método do delegate.',
    },

    // Q11 — Fill
    {
      type: 'fill',
      bubble: 'Lambdas de uma linha podem usar expression body sem chaves e sem return:',
      code: `<span class="kw">Func</span>&lt;<span class="kw">int</span>, <span class="kw">int</span>, <span class="kw">int</span>&gt; somar = (a, b) <span class="kw">_______</span> a + b;`,
      q: 'Qual símbolo separa parâmetros do corpo da lambda?',
      hint: 'Seta de lambda',
      ans: '=>',
      exp: '"=>" separa parâmetros do corpo. "(a, b) => a + b" é uma lambda que soma dois ints. Equivale a: (a, b) => { return a + b; }',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'Lambda simples — calculando dano com Func.',
      code: `<span class="kw">Func</span>&lt;<span class="kw">int</span>, <span class="kw">bool</span>, <span class="kw">int</span>&gt; calcDano =\n    (base_, critico) => critico ? base_ * <span class="nm">2</span> : base_;\n\nConsole.<span class="mt">WriteLine</span>(calcDano(<span class="nm">30</span>, <span class="kw">true</span>));\nConsole.<span class="mt">WriteLine</span>(calcDano(<span class="nm">30</span>, <span class="kw">false</span>));`,
      q: 'O que será exibido?',
      hint: 'Crítico dobra o dano',
      opts: [
        { t: '60 e 30', ok: true },
        { t: '30 e 30', ok: false },
        { t: '60 e 60', ok: false },
        { t: '30 e 60', ok: false },
      ],
      exp: 'calcDano(30, true): critico=true → 30*2 = 60. calcDano(30, false): critico=false → 30. Exibe "60" e "30".',
    },

    // Q13 — Code
    {
      type: 'code',
      bubble: 'Action como callback — executando ação ao completar missão.',
      code: `<span class="kw">static void</span> <span class="mt">CompletarMissao</span>(<span class="kw">string</span> nome, Action&lt;<span class="kw">string</span>&gt; callback)\n{\n    Console.<span class="mt">WriteLine</span>(<span class="st">$"Missão {nome} concluída!"</span>);\n    callback(nome);\n}\n\n<span class="mt">CompletarMissao</span>(<span class="st">"Infiltração"</span>,\n    m => Console.<span class="mt">WriteLine</span>(<span class="st">$"[Salvando {m}...]"</span>));`,
      q: 'O que será exibido?',
      hint: 'Primeiro a função, depois o callback',
      opts: [
        { t: '[Salvando Infiltração...]', ok: false },
        { t: 'Missão Infiltração concluída! e [Salvando Infiltração...]', ok: true },
        { t: 'Missão Infiltração concluída!', ok: false },
        { t: 'Erro — Action passada como argumento', ok: false },
      ],
      exp: 'CompletarMissao imprime a conclusão, depois chama callback("Infiltração"). A lambda imprime "[Salvando Infiltração...]".',
    },

    // Q14 — Code
    {
      type: 'code',
      bubble: 'Closure capturando variável externa.',
      code: `<span class="kw">int</span> multiplicador = <span class="nm">3</span>;\n<span class="kw">Func</span>&lt;<span class="kw">int</span>, <span class="kw">int</span>&gt; triplicar = n => n * multiplicador;\n\nmultiplicador = <span class="nm">5</span>;\nConsole.<span class="mt">WriteLine</span>(triplicar(<span class="nm">10</span>));`,
      q: 'O que será exibido?',
      hint: 'A closure captura a referência da variável, não o valor',
      opts: [
        { t: '30 — capturou multiplicador = 3', ok: false },
        { t: '50 — capturou a referência; multiplicador é 5 na execução', ok: true },
        { t: 'Erro de escopo', ok: false },
        { t: '10', ok: false },
      ],
      exp: 'A closure captura a referência de "multiplicador", não o valor 3. Quando triplicar(10) executa, multiplicador = 5. Resultado: 10 × 5 = 50.',
    },

    // Q15 — Code
    {
      type: 'code',
      bubble: 'Predicate usado com List.Find().',
      code: `<span class="kw">var</span> hps = <span class="kw">new</span> List&lt;<span class="kw">int</span>&gt; { <span class="nm">80</span>, <span class="nm">15</span>, <span class="nm">45</span>, <span class="nm">5</span>, <span class="nm">60</span> };\n<span class="kw">Predicate</span>&lt;<span class="kw">int</span>&gt; ehCritico = hp => hp < <span class="nm">20</span>;\n<span class="kw">int</span> primeiro = hps.<span class="mt">Find</span>(ehCritico);\nConsole.<span class="mt">WriteLine</span>(primeiro);`,
      q: 'O que será exibido?',
      hint: 'Find retorna o primeiro elemento que satisfaz o predicado',
      opts: [
        { t: '5', ok: false },
        { t: '15', ok: true },
        { t: '45', ok: false },
        { t: '0', ok: false },
      ],
      exp: '"Find(pred)" retorna o PRIMEIRO elemento que satisfaz o predicado. Percorre em ordem: 80 (não), 15 (sim!) → retorna 15.',
    },

    // Q16 — Code
    {
      type: 'code',
      bubble: 'Delegate multicast — log com múltiplos destinos.',
      code: `Action&lt;<span class="kw">string</span>&gt; logger = msg => Console.<span class="mt">WriteLine</span>(<span class="st">$"[Console] {msg}"</span>);\nlogger += msg => Console.<span class="mt">WriteLine</span>(<span class="st">$"[Arquivo] {msg}"</span>);\nlogger(<span class="st">"Missão concluída"</span>);`,
      q: 'Quantas linhas serão exibidas?',
      hint: 'Dois métodos registrados',
      opts: [
        { t: '1 — apenas o último', ok: false },
        { t: '2 — ambos executam', ok: true },
        { t: '0 — multicast lança exceção', ok: false },
        { t: '3', ok: false },
      ],
      exp: 'Multicast delegate: ambos os métodos registrados executam. "[Console] Missão concluída" e "[Arquivo] Missão concluída" — 2 linhas.',
    },

    // Q17 — Code
    {
      type: 'code',
      bubble: 'Func como estratégia intercambiável — padrão Strategy.',
      code: `<span class="kw">Func</span>&lt;<span class="kw">int</span>, <span class="kw">int</span>, <span class="kw">int</span>&gt; estrategia;\n<span class="kw">bool</span> usarForca = <span class="kw">true</span>;\n\n<span class="kw">if</span> (usarForca)\n    estrategia = (a, b) => a + b + <span class="nm">10</span>; <span class="cm">// bônus força</span>\n<span class="kw">else</span>\n    estrategia = (a, b) => a + b;     <span class="cm">// normal</span>\n\nConsole.<span class="mt">WriteLine</span>(estrategia(<span class="nm">20</span>, <span class="nm">15</span>));`,
      q: 'O que será exibido?',
      hint: 'usarForca = true → estratégia com bônus',
      opts: [
        { t: '35', ok: false },
        { t: '45', ok: true },
        { t: '10', ok: false },
        { t: 'Erro — delegate não atribuído', ok: false },
      ],
      exp: 'usarForca=true → estrategia = (a,b) => a+b+10. estrategia(20,15) = 20+15+10 = 45. Padrão Strategy via delegate.',
    },

    // Q18 — Code
    {
      type: 'code',
      bubble: '🏆 DESAFIO CHEFE — Pipeline de processamento com Func encadeadas.',
      code: `<span class="kw">Func</span>&lt;<span class="kw">int</span>, <span class="kw">int</span>&gt; dobrar   = n => n * <span class="nm">2</span>;\n<span class="kw">Func</span>&lt;<span class="kw">int</span>, <span class="kw">int</span>&gt; somar10  = n => n + <span class="nm">10</span>;\n<span class="kw">Func</span>&lt;<span class="kw">int</span>, <span class="kw">bool</span>&gt; ehGrande = n => n > <span class="nm">50</span>;\n\n<span class="kw">int</span>[] valores = { <span class="nm">10</span>, <span class="nm">20</span>, <span class="nm">30</span> };\n<span class="kw">foreach</span> (<span class="kw">var</span> v <span class="kw">in</span> valores)\n{\n    <span class="kw">int</span> resultado = somar10(dobrar(v));\n    Console.<span class="mt">WriteLine</span>(<span class="st">$"{v} → {resultado} → {ehGrande(resultado)}"</span>);\n}`,
      q: 'O que será exibido para o valor 20?',
      hint: 'dobrar(20) → somar10 → ehGrande',
      opts: [
        { t: '20 → 50 → False', ok: true },
        { t: '20 → 50 → True', ok: false },
        { t: '20 → 40 → False', ok: false },
        { t: '20 → 30 → False', ok: false },
      ],
      exp: 'dobrar(20) = 40. somar10(40) = 50. ehGrande(50): 50 > 50 = False. "20 → 50 → False".',
    },

  ]
};
