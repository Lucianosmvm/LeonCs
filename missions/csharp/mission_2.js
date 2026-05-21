// ══════════════════════════════════════════════════════
// ACT I — A VILA
// MISSÃO 03 — RECONHECIMENTO
// Tema: Lógica e algoritmos nível 2
// Tipo: Normal (12 questões) | Progressão: 5 MC → 4 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_02 = {
  id: 2,
  title: "MISSÃO 03 — RECONHECIMENTO",
  icon: '🔭',
  free: true,
  desc: "O terreno ficou mais complexo. Aldeões em todos os lados, armadilhas escondidas. Hora de apurar o raciocínio e criar estratégias mais elaboradas.",
  objs: [
    "Aprender os conceitos de lógica e algoritmos avançados",
    "Praticar o pensamento computacional com problemas mais complexos",
    "Desenvolver habilidades para resolver desafios reais de programação"
  ],
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'<strong>Abstração</strong> é focar no essencial e ignorar os detalhes irrelevantes. Você não precisa saber como o motor funciona para dirigir um carro.',
      q:'Leon precisa calcular o dano total causado. Qual informação ele NÃO precisa abstrair?',
      hint:'O que realmente importa para o cálculo?',
      opts:[
        {t:'A cor do inimigo', ok:false},
        {t:'O dano por tiro e o número de tiros', ok:true},
        {t:'O nome do inimigo', ok:false},
        {t:'O país de origem do inimigo', ok:false},
      ],
      exp:'Abstração: para calcular dano total, só importa (dano por tiro × número de tiros). Cor e nome são irrelevantes para esse cálculo.',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'<strong>Reconhecimento de padrões</strong> é identificar estruturas similares em problemas diferentes para reutilizar soluções.',
      q:'Calcular a média de notas, a média de danos causados e a média de munição usada são problemas diferentes?',
      hint:'O que eles têm em comum?',
      opts:[
        {t:'Não — todos seguem o mesmo padrão: somar e dividir pela quantidade', ok:true},
        {t:'Sim — são completamente diferentes', ok:false},
        {t:'Sim — usam tipos de dados diferentes', ok:false},
        {t:'Depende da linguagem usada', ok:false},
      ],
      exp:'Reconhecimento de padrões: todos os três calculam uma média (soma / quantidade). Mesma solução, dados diferentes.',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'O operador <strong>%</strong> (módulo) retorna o resto da divisão inteira. É um dos operadores mais úteis na lógica de programação.',
      q:'Qual é o resultado de 17 % 5?',
      hint:'17 dividido por 5 dá 3 e sobra...',
      opts:[
        {t:'3', ok:false},
        {t:'3.4', ok:false},
        {t:'0', ok:false},
        {t:'2', ok:true},
      ],
      exp:'17 ÷ 5 = 3 com resto 2 (pois 5×3=15, e 17-15=2). O operador % retorna esse resto: 17 % 5 = 2.',
    },

    // Q4 — MC
    {
      type:'mc',
      bubble:'<strong>Refinamento progressivo</strong>: comece com uma solução simples e vá detalhando. Não tente resolver tudo de uma vez.',
      q:'Qual é a abordagem correta do refinamento progressivo?',
      hint:'Do geral para o específico',
      opts:[
        {t:'Escrever o código mais otimizado na primeira tentativa', ok:false},
        {t:'Pesquisar a solução pronta antes de pensar', ok:false},
        {t:'Começar com uma solução simples e ir detalhando progressivamente', ok:true},
        {t:'Resolver do final para o início', ok:false},
      ],
      exp:'Esboce primeiro: "receber número, calcular, exibir". Depois detalhe cada parte. Evita paralisar diante de problemas complexos.',
    },

    // Q5 — MC
    {
      type:'mc',
      bubble:'<strong>Teste de mesa</strong> é simular o algoritmo manualmente, rastreando o valor de cada variável passo a passo.',
      q:'Para que serve o teste de mesa?',
      hint:'Papel e caneta em ação',
      opts:[
        {t:'Para verificar a lógica antes de executar no computador', ok:true},
        {t:'Para testar a velocidade do código', ok:false},
        {t:'Para verificar erros de sintaxe', ok:false},
        {t:'Para medir uso de memória', ok:false},
      ],
      exp:'Teste de mesa: execute mentalmente/no papel, rastreando variáveis. Encontra erros de lógica antes de compilar.',
    },

    // Q6 — Fill
    {
      type:'fill',
      bubble:'Para verificar se um número é par, checamos se o resto da divisão por 2 é igual a zero.',
      code:`<span class="kw">bool</span> ePar = (numero <span class="kw">%</span> <span class="nm">_______</span> == <span class="nm">0</span>);`,
      q:'Por qual número dividimos para verificar se é par?',
      hint:'Par = divisível por...',
      ans:'2',
      exp:'Número par tem resto 0 ao dividir por 2. Ímpar tem resto 1. (numero % 2 == 0) é o teste clássico.',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'A operação de <strong>troca de valores</strong> entre duas variáveis exige uma terceira variável temporária.',
      code:`<span class="kw">int</span> a = <span class="nm">10</span>, b = <span class="nm">20</span>;\n<span class="kw">int</span> _______ = a;\na = b;\nb = temp;`,
      q:'Como chamamos a variável auxiliar que guarda o valor temporariamente?',
      hint:'Ela é temporária',
      ans:'temp',
      exp:'"temp" guarda o valor de "a" antes de ser sobrescrito. É o padrão clássico para trocar duas variáveis.',
    },

    // Q8 — Fill
    {
      type:'fill',
      bubble:'A <strong>divisão inteira</strong> em C# descarta a parte decimal. 7 dividido por 2 resulta em 3, não 3.5.',
      code:`<span class="kw">int</span> resultado = <span class="nm">7</span> <span class="kw">/</span> <span class="nm">2</span>; <span class="cm">// resultado = _______</span>`,
      q:'Qual é o resultado da divisão inteira de 7 por 2?',
      hint:'A parte decimal é descartada',
      ans:'3',
      exp:'Em C#, dividir dois inteiros faz divisão inteira: 7/2 = 3 (descarta o .5). Para 3.5, use double: 7.0/2.',
    },

    // Q9 — Fill
    {
      type:'fill',
      bubble:'O operador <code>++</code> incrementa uma variável em 1. É um atalho muito comum em loops e contadores.',
      code:`<span class="kw">int</span> kills = <span class="nm">0</span>;\nkills<span class="kw">_______</span>; <span class="cm">// kills agora vale 1</span>`,
      q:'Qual operador incrementa uma variável em 1?',
      hint:'Dois sinais de mais',
      ans:'++',
      exp:'"kills++" é equivalente a "kills = kills + 1". O operador ++ é um atalho para incremento. "--" decrementa.',
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'Faça o teste de mesa deste algoritmo rastreando o valor de cada variável.',
      code:`<span class="kw">int</span> x = <span class="nm">2</span>;\nx = x + <span class="nm">3</span>;\nx = x * <span class="nm">2</span>;\nx = x - <span class="nm">1</span>;\nConsole.<span class="mt">WriteLine</span>(x);`,
      q:'Qual é o valor final de x?',
      hint:'Siga passo a passo: 2 → +3 → ×2 → -1',
      opts:[
        {t:'8', ok:false},
        {t:'10', ok:false},
        {t:'9', ok:true},
        {t:'7', ok:false},
      ],
      exp:'x=2 → x=2+3=5 → x=5×2=10 → x=10-1=9. Teste de mesa: rastreie cada linha e o resultado fica claro.',
    },

    // Q11 — Code
    {
      type:'code',
      bubble:'Analise este algoritmo para calcular se Leon tem munição suficiente.',
      code:`<span class="kw">int</span> municao = <span class="nm">15</span>;\n<span class="kw">int</span> inimigos = <span class="nm">4</span>;\n<span class="kw">int</span> tirosPorInimigo = <span class="nm">3</span>;\n<span class="kw">int</span> necessario = inimigos * tirosPorInimigo;\n<span class="kw">bool</span> suficiente = municao >= necessario;\nConsole.<span class="mt">WriteLine</span>(suficiente);`,
      q:'O que será exibido?',
      hint:'15 >= (4 × 3)?',
      opts:[
        {t:'False', ok:false},
        {t:'True', ok:true},
        {t:'15', ok:false},
        {t:'12', ok:false},
      ],
      exp:'necessario = 4×3 = 12. suficiente = (15 >= 12) = True. Leon tem munição suficiente.',
    },

    // Q12 — Code
    {
      type:'code',
      bubble:'Veja o algoritmo de troca corrigido com variável temporária.',
      code:`<span class="kw">int</span> vida = <span class="nm">30</span>;\n<span class="kw">int</span> armadura = <span class="nm">70</span>;\n<span class="kw">int</span> temp = vida;\nvida = armadura;\narmadura = temp;\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"vida={vida} armadura={armadura}"</span>);`,
      q:'O que será exibido?',
      hint:'temp guarda o valor original de vida',
      opts:[
        {t:'vida=30 armadura=70', ok:false},
        {t:'vida=70 armadura=30', ok:true},
        {t:'vida=70 armadura=70', ok:false},
        {t:'vida=30 armadura=30', ok:false},
      ],
      exp:'temp=30, vida=70, armadura=30. Troca correta! vida=70, armadura=30.',
    },

  ]
};
