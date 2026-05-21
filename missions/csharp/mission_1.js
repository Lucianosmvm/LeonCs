// ══════════════════════════════════════════════════════
// ACT I — A VILA
// MISSÃO 02 — PRIMEIROS PASSOS
// Tema: Lógica e algoritmos nível 1
// Tipo: Normal (11 questões) | Progressão: 6 MC → 3 Fill → 2 Code
// ══════════════════════════════════════════════════════

const MISSION_01 = {
  id: 1,
  title: "MISSÃO 02 — PRIMEIROS PASSOS",
  icon: '👣',
  free: true,
  desc: "A missão está em andamento. Para sobreviver à vila, você precisa pensar com lógica — cada decisão tem consequências.",
  objs: [
    "Entender a importância da lógica de programação",
    "Aprender a decompor problemas em passos menores",
    "Conhecer as estruturas básicas de um algoritmo"
  ],
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'<strong>Lógica de programação</strong> é a habilidade de decompor problemas em passos pequenos e ordenados que o computador pode seguir.',
      q:'Por que a lógica é a habilidade mais importante de um programador?',
      opts:[
        {t:'Porque permite memorizar todos os comandos', ok:false},
        {t:'Porque digitar rápido economiza tempo', ok:false},
        {t:'Porque permite resolver problemas em qualquer linguagem', ok:true},
        {t:'Porque é exigida no currículo', ok:false},
      ],
      exp:'Linguagens mudam, frameworks surgem e somem. A lógica de pensar e decompor problemas é a habilidade que dura para sempre.',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'Antes de escrever código, devemos <strong>entender o problema</strong> completamente. Programar sem entender o problema é a receita do fracasso.',
      q:'Qual deve ser a primeira etapa ao receber um problema para programar?',
      opts:[
        {t:'Entender o problema completamente', ok:true},
        {t:'Abrir o editor e começar a digitar', ok:false},
        {t:'Escolher a linguagem de programação', ok:false},
        {t:'Pesquisar o código no Google', ok:false},
      ],
      exp:'Entender o problema é sempre o passo zero. Programadores experientes gastam mais tempo entendendo do que codificando.',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'<strong>Decomposição</strong> é quebrar um problema grande em partes menores e mais fáceis de resolver. Divide e conquista.',
      q:'Leon precisa resgatar Ashley do castelo. Como aplicar decomposição?',
      opts:[
        {t:'Resolver tudo de uma vez', ok:false},
        {t:'Esperar ajuda chegar', ok:false},
        {t:'Dividir em etapas: infiltrar → localizar → resgatar → escapar', ok:true},
        {t:'Ignorar o problema', ok:false},
      ],
      exp:'Decomposição: infiltrar → localizar Ashley → eliminar obstáculos → resgatar → escapar. Cada parte é um problema menor.',
    },

    // Q4 — MC
    {
      type:'mc',
      bubble:'<strong>Pseudocódigo</strong> é uma forma de planejar o algoritmo em linguagem próxima do humano, sem se preocupar com sintaxe.',
      q:'Qual é a principal vantagem de escrever pseudocódigo antes de codificar?',
      opts:[
        {t:'O computador consegue executar pseudocódigo', ok:false},
        {t:'É obrigatório em todas as linguagens', ok:false},
        {t:'Substitui completamente o código final', ok:false},
        {t:'Permite focar na lógica sem se preocupar com a sintaxe da linguagem', ok:true},
      ],
      exp:'Pseudocódigo libera sua mente para pensar na solução. Você resolve o problema antes de lutar com a sintaxe.',
    },

    // Q5 — MC
    {
      type:'mc',
      bubble:'As instruções executam em <strong>sequência</strong> — de cima para baixo, uma por vez. Mudar a ordem muda o resultado.',
      q:'Se você trocar a ordem das instruções de um algoritmo, o que pode acontecer?',
      opts:[
        {t:'O resultado pode ser completamente diferente ou errado', ok:true},
        {t:'Nada — a ordem não importa', ok:false},
        {t:'O código fica mais rápido', ok:false},
        {t:'O compilador corrige automaticamente', ok:false},
      ],
      exp:'Ordem é fundamental. "Aquecer forno depois de assar" é diferente de "Aquecer forno antes de assar". O mesmo vale para código.',
    },

    // Q6 — MC
    {
      type:'mc',
      bubble:'Um <strong>fluxograma</strong> representa visualmente um algoritmo com símbolos: oval (início/fim), retângulo (processo), losango (decisão).',
      q:'No fluxograma, qual símbolo representa uma decisão (sim/não)?',
      opts:[
        {t:'Retângulo', ok:false},
        {t:'Losango', ok:true},
        {t:'Oval', ok:false},
        {t:'Círculo', ok:false},
      ],
      exp:'Losango = decisão (if/else). Retângulo = processo/instrução. Oval = início ou fim. Setas indicam o fluxo.',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'No pseudocódigo, usamos <code>SE</code> para tomar decisões e <code>ENTÃO</code> para indicar o que fazer se a condição for verdadeira.',
      code:`<span class="cm">// Pseudocódigo:</span>\n<span class="kw">SE</span> inimigo_visível <span class="kw">_______</span>\n    atacar()\n<span class="kw">FIM SE</span>`,
      q:'Qual palavra usamos no pseudocódigo após a condição?',
      ans:'ENTÃO',
      exp:'"SE condição ENTÃO ação" é a estrutura básica de decisão em pseudocódigo. Em C# vira: if (condição) { ação }',
    },

    // Q8 — Fill
    {
      type:'fill',
      bubble:'A <strong>indentação</strong> (recuo do código) organiza visualmente os blocos. Em C# não é obrigatória, mas é essencial para legibilidade.',
      code:`<span class="kw">if</span> (vivo)\n{\n    <span class="kw">_______</span> Console.<span class="mt">WriteLine</span>(<span class="st">"Continuar missão"</span>);\n}`,
      q:'Qual caractere ou tecla usamos para indentar código?',
      ans:'    ',
      exp:'Indentação usa espaços ou Tab. Código indentado corretamente mostra a hierarquia dos blocos visualmente.',
    },

    // Q9 — Fill
    {
      type:'fill',
      bubble:'<strong>Comentários</strong> explicam o código para humanos. Em C#, comentário de linha começa com <code>//</code>.',
      code:`<span class="kw">int</span> vidas = <span class="nm">3</span>; <span class="cm">_______ Número de tentativas do jogador</span>`,
      q:'Qual símbolo inicia um comentário de linha em C#?',
      ans:'//',
      exp:'"// comentário" comenta o resto da linha. "/* comentário */" comenta múltiplas linhas. O compilador ignora comentários.',
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'Analise a ordem de execução deste algoritmo simples.',
      code:`Console.<span class="mt">WriteLine</span>(<span class="st">"1. Carregar arma"</span>);\nConsole.<span class="mt">WriteLine</span>(<span class="st">"2. Encontrar inimigo"</span>);\nConsole.<span class="mt">WriteLine</span>(<span class="st">"3. Atirar"</span>);`,
      q:'Em qual ordem as mensagens aparecem?',
      opts:[
        {t:'3, 2, 1', ok:false},
        {t:'Todas ao mesmo tempo', ok:false},
        {t:'1, 2, 3 — em ordem', ok:true},
        {t:'Em ordem aleatória', ok:false},
      ],
      exp:'Execução sequencial: linha 1 primeiro, depois linha 2, depois linha 3. Sempre de cima para baixo.',
    },

    // Q11 — Code
    {
      type:'code',
      bubble:'Identifique o erro lógico neste algoritmo de troca de valores.',
      code:`<span class="kw">int</span> a = <span class="nm">10</span>, b = <span class="nm">20</span>;\na = b; <span class="cm">// a agora vale 20</span>\nb = a; <span class="cm">// b agora vale... ?</span>\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"a={a} b={b}"</span>);`,
      q:'Qual é o problema nesta troca de valores?',
      opts:[
        {t:'Não há problema — troca corretamente', ok:false},
        {t:'A sintaxe está errada', ok:false},
        {t:'Falta declarar "temp"', ok:false},
        {t:'O valor original de "a" (10) foi perdido quando a=b foi executado', ok:true},
      ],
      exp:'Quando a=b executa, a=20 e o valor 10 se perde. Então b=a coloca 20 em b. Resultado: a=20, b=20. Para trocar corretamente precisa de uma variável temporária.',
    },

  ]
};
