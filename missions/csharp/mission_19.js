const MISSION_19 = {
  id: 19,
  title: "MISSÃO 20 — EVACUAÇÃO",
  icon: '🚁',
  free: false,
  desc: "A missão está quase concluída. Sair da Vila exige usar TUDO que você aprendeu. Esta é a prova final — cada conceito do Act I será testado. Boa sorte, agente.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'Revisão final: qual a diferença fundamental entre <strong>valor</strong> e <strong>referência</strong> em C#?',
      q:'int e bool são tipos de valor; string e arrays são tipos de referência. O que isso significa?',
      hint:'Onde os dados ficam na memória',
      opts:[
        {t:'Tipos de valor ficam na heap; referência na stack', ok:false},
        {t:'Tipos de valor guardam o dado direto; referência guarda um ponteiro para o dado na heap', ok:true},
        {t:'São equivalentes em C#', ok:false},
        {t:'Apenas afeta o tamanho em bytes', ok:false},
      ],
      exp:'Valor (stack): int, bool, char, struct — guardam o dado diretamente. Referência (heap): string, arrays, objetos — guardam endereço de memória.',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'Revisão: qual loop usar em cada situação?',
      q:'Para ler entradas do usuário até ele digitar "sair", qual loop usar?',
      hint:'Não sabemos quantas vezes o usuário vai digitar',
      opts:[
        {t:'for — controle preciso do contador', ok:false},
        {t:'foreach — para percorrer coleções', ok:false},
        {t:'while ou do-while — condição dinâmica', ok:true},
        {t:'Não precisa de loop', ok:false},
      ],
      exp:'"while" ou "do-while" para condições dinâmicas. "for" para n iterações conhecidas. "foreach" para percorrer coleções já existentes.',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'Revisão: arrays vs List&lt;T&gt;.',
      q:'Quando usar List<T> em vez de array?',
      hint:'Pense em crescimento dinâmico',
      opts:[
        {t:'Sempre — List é sempre melhor', ok:false},
        {t:'Quando o número de elementos não é conhecido ou pode mudar', ok:true},
        {t:'Apenas para coleções de strings', ok:false},
        {t:'Arrays e List são completamente intercambiáveis', ok:false},
      ],
      exp:'Array: tamanho fixo, acesso O(1). List: dinâmico, Add/Remove eficientes. Use array para dados fixos, List para dados que crescem.',
    },

    // Q4 — MC
    {
      type:'mc',
      bubble:'Revisão de boas práticas.',
      q:'O que significa o princípio DRY?',
      hint:'Sigla em inglês para não repetir',
      opts:[
        {t:'Debug Ready Yesterday', ok:false},
        {t:"Don't Repeat Yourself — nunca duplique lógica", ok:true},
        {t:'Design Refactor Yield', ok:false},
        {t:'Direct Return Yield', ok:false},
      ],
      exp:"DRY = Don't Repeat Yourself. Código duplicado = bugs duplicados = manutenção dobrada. Extraia lógica repetida em funções.",
    },

    // Q5 — Fill
    {
      type:'fill',
      bubble:'Revisão de tipos: para armazenar a precisão de tiro (ex: 87.5%), qual tipo usar?',
      code:`<span class="kw">_______</span> precisao = <span class="nm">87.5</span>;`,
      q:'Qual tipo para valores decimais com boa precisão?',
      hint:'Número de ponto flutuante de 64 bits',
      ans:'double',
      exp:'"double" para decimais gerais. "decimal" para dinheiro. "float" para quando performance importa mais que precisão máxima.',
    },

    // Q6 — Fill
    {
      type:'fill',
      bubble:'Revisão de operador ternário.',
      code:`<span class="kw">string</span> resultado = kills > <span class="nm">10</span> ? <span class="st">"S Rank"</span> <span class="kw">_______</span> <span class="st">"A Rank"</span>;`,
      q:'Qual símbolo separa os valores no operador ternário?',
      hint:'Dois pontos',
      ans:':',
      exp:'"condição ? valorTrue : valorFalse". O ":" separa o caso verdadeiro do falso. kills > 10 ? "S Rank" : "A Rank".',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'Revisão de string: método para verificar se uma string começa com um prefixo.',
      code:`<span class="kw">bool</span> ehCodigo = serial.<span class="mt">_______</span>(<span class="st">"RE4-"</span>);`,
      q:'Qual método verifica se a string começa com "RE4-"?',
      hint:'Começa com em inglês',
      ans:'StartsWith',
      exp:'"StartsWith("RE4-")" retorna true se a string começar com esse prefixo. Muito usado para validar formatos.',
    },

    // Q8 — Fill
    {
      type:'fill',
      bubble:'Revisão de funções: palavra-chave para devolver um valor.',
      code:`<span class="kw">static int</span> <span class="mt">ContarInimigos</span>(<span class="kw">int</span>[] hps)\n{\n    <span class="kw">int</span> total = hps.<span class="mt">Length</span>;\n    <span class="kw">_______</span> total;\n}`,
      q:'Qual palavra-chave retorna o valor da função?',
      hint:'Devolver em inglês',
      ans:'return',
      exp:'"return total" encerra a função e devolve o valor. Sem return em função não-void, o compilador dá erro.',
    },

    // Q9 — Code
    {
      type:'code',
      bubble:'Revisão de variáveis e operadores — sistema de pontuação.',
      code:`<span class="kw">int</span> kills = <span class="nm">8</span>;\n<span class="kw">int</span> bonus = kills >= <span class="nm">10</span> ? <span class="nm">500</span> : <span class="nm">100</span>;\n<span class="kw">int</span> score = kills * <span class="nm">150</span> + bonus;\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"Score: {score}"</span>);`,
      q:'Qual o score final para kills = 8?',
      hint:'bonus = ? (8 >= 10 é false), depois score = 8 × 150 + bonus',
      opts:[
        {t:'Score: 1200', ok:false},
        {t:'Score: 1300', ok:true},
        {t:'Score: 1700', ok:false},
        {t:'Score: 500', ok:false},
      ],
      exp:'kills=8 < 10 → bonus=100. score = 8×150 + 100 = 1200 + 100 = 1300.',
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'Revisão de condicionais — sistema de status completo.',
      code:`<span class="kw">int</span> hp = <span class="nm">22</span>;\n<span class="kw">string</span> status;\n\n<span class="kw">if</span> (hp > <span class="nm">70</span>)      status = <span class="st">"🟢 Ótimo"</span>;\n<span class="kw">else if</span> (hp > <span class="nm">40</span>) status = <span class="st">"🟡 Alerta"</span>;\n<span class="kw">else if</span> (hp > <span class="nm">0</span>)  status = <span class="st">"🔴 Crítico"</span>;\n<span class="kw">else</span>               status = <span class="st">"💀 Morto"</span>;\n\nConsole.<span class="mt">WriteLine</span>(status);`,
      q:'Para hp = 22, qual status será exibido?',
      hint:'22 > 70? Não. 22 > 40? Não. 22 > 0? ...',
      opts:[
        {t:'🟢 Ótimo', ok:false},
        {t:'🟡 Alerta', ok:false},
        {t:'🔴 Crítico', ok:true},
        {t:'💀 Morto', ok:false},
      ],
      exp:'22 > 70 = false. 22 > 40 = false. 22 > 0 = true → "🔴 Crítico". O primeiro else if verdadeiro executa.',
    },

    // Q11 — Code
    {
      type:'code',
      bubble:'Revisão de loop for — gerando tabela de danos.',
      code:`<span class="kw">int</span> danoBase = <span class="nm">10</span>;\n<span class="kw">for</span> (<span class="kw">int</span> mult = <span class="nm">1</span>; mult <= <span class="nm">4</span>; mult++)\n    Console.<span class="mt">WriteLine</span>(<span class="st">$"x{mult}: {danoBase * mult} de dano"</span>);`,
      q:'Qual será a última linha exibida?',
      hint:'Quando mult = 4',
      opts:[
        {t:'x3: 30 de dano', ok:false},
        {t:'x5: 50 de dano', ok:false},
        {t:'x4: 40 de dano', ok:true},
        {t:'x4: 14 de dano', ok:false},
      ],
      exp:'mult vai de 1 a 4 (mult <= 4). Última iteração: mult=4, danoBase*4 = 40. Última linha: "x4: 40 de dano".',
    },

    // Q12 — Code
    {
      type:'code',
      bubble:'Revisão de while — contando munição até zerar.',
      code:`<span class="kw">int</span> municao = <span class="nm">6</span>;\n<span class="kw">int</span> tiros = <span class="nm">0</span>;\n<span class="kw">while</span> (municao > <span class="nm">0</span>)\n{\n    municao -= <span class="nm">2</span>;\n    tiros++;\n}\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"Tiros: {tiros}, Munição: {municao}"</span>);`,
      q:'O que será exibido?',
      hint:'Cada tiro consome 2 balas, começando com 6',
      opts:[
        {t:'Tiros: 6, Munição: 0', ok:false},
        {t:'Tiros: 3, Munição: 0', ok:true},
        {t:'Tiros: 2, Munição: 0', ok:false},
        {t:'Tiros: 3, Munição: -2', ok:false},
      ],
      exp:'municao: 6→4→2→0. tiros: 1→2→3. Quando municao=0, condição false para. Resultado: "Tiros: 3, Munição: 0".',
    },

    // Q13 — Code
    {
      type:'code',
      bubble:'Revisão de arrays — processando o inventário.',
      code:`<span class="kw">string</span>[] inventario = {<span class="st">"Pistola"</span>, <span class="st">"Erva Verde"</span>, <span class="st">"Escopeta"</span>, <span class="st">"Erva Verde"</span>};\n<span class="kw">int</span> ervas = <span class="nm">0</span>;\n<span class="kw">foreach</span> (<span class="kw">string</span> item <span class="kw">in</span> inventario)\n    <span class="kw">if</span> (item == <span class="st">"Erva Verde"</span>) ervas++;\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"Ervas: {ervas}"</span>);`,
      q:'Quantas ervas verdes no inventário?',
      hint:'Conte os elementos iguais a "Erva Verde"',
      opts:[
        {t:'Ervas: 1', ok:false},
        {t:'Ervas: 3', ok:false},
        {t:'Ervas: 2', ok:true},
        {t:'Ervas: 4', ok:false},
      ],
      exp:'O array tem "Erva Verde" nos índices 1 e 3. O foreach conta 2 ocorrências. Resultado: "Ervas: 2".',
    },

    // Q14 — Code
    {
      type:'code',
      bubble:'Revisão de funções — sistema de combate completo.',
      code:`<span class="kw">static int</span> <span class="mt">Calcular</span>(<span class="kw">int</span> base, <span class="kw">int</span> criticos)\n    => base + (criticos * base / <span class="nm">2</span>);\n\n<span class="kw">static string</span> <span class="mt">Resultado</span>(<span class="kw">int</span> dano)\n    => dano > <span class="nm">50</span> ? <span class="st">"FATAL"</span> : <span class="st">"Normal"</span>;\n\n<span class="kw">int</span> d = <span class="mt">Calcular</span>(<span class="nm">20</span>, <span class="nm">3</span>);\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"{d} — {<span class="mt">Resultado</span>(d)}"</span>);`,
      q:'O que será exibido?',
      hint:'Calcular(20, 3): base=20, criticos=3 → 20 + (3 × 20/2)',
      opts:[
        {t:'50 — Normal', ok:false},
        {t:'50 — FATAL', ok:false},
        {t:'50 — Normal', ok:false},
        {t:'50 — Normal', ok:true},
      ],
      exp:'20 + (3 × 20/2) = 20 + (3 × 10) = 20 + 30 = 50. Resultado(50): 50 > 50 = false → "Normal". Exibe "50 — Normal".',
    },

    // Q15 — Code
    {
      type:'code',
      bubble:'Revisão de string — processando código de missão.',
      code:`<span class="kw">string</span> cod = <span class="st">"RE4-LEON-07"</span>;\n<span class="kw">string</span>[] partes = cod.<span class="mt">Split</span>(<span class="st">'-'</span>);\n<span class="kw">string</span> agente = partes[<span class="nm">1</span>].<span class="mt">ToLower</span>();\n<span class="kw">int</span> missao = <span class="kw">int</span>.<span class="mt">Parse</span>(partes[<span class="nm">2</span>]);\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"{agente} | missão {missao}"</span>);`,
      q:'O que será exibido?',
      hint:'Split por "-" cria 3 partes: RE4, LEON, 07',
      opts:[
        {t:'LEON | missão 07', ok:false},
        {t:'leon | missão 7', ok:true},
        {t:'leon | missão 07', ok:false},
        {t:'RE4 | missão 7', ok:false},
      ],
      exp:'partes = ["RE4","LEON","07"]. ToLower() → "leon". int.Parse("07") = 7 (int remove zero à esquerda). Saída: "leon | missão 7".',
    },

    // Q16 — Code
    {
      type:'code',
      bubble:'Revisão de switch — escolhendo a arma certa.',
      code:`<span class="kw">int</span> distancia = <span class="nm">15</span>;\n<span class="kw">string</span> arma = distancia <span class="kw">switch</span>\n{\n    <= <span class="nm">5</span>  => <span class="st">"Faca"</span>,\n    <= <span class="nm">20</span> => <span class="st">"Pistola"</span>,\n    <= <span class="nm">50</span> => <span class="st">"Escopeta"</span>,\n    _     => <span class="st">"Rifle"</span>\n};\nConsole.<span class="mt">WriteLine</span>(arma);`,
      q:'Para distancia = 15, qual arma será exibida?',
      hint:'15 <= 5? Não. 15 <= 20? ...',
      opts:[
        {t:'Faca', ok:false},
        {t:'Pistola', ok:true},
        {t:'Escopeta', ok:false},
        {t:'Rifle', ok:false},
      ],
      exp:'15 <= 5 = false. 15 <= 20 = true → "Pistola". Switch expression testa cases em ordem, o primeiro verdadeiro vence.',
    },

    // Q17 — Code
    {
      type:'code',
      bubble:'Revisão de array 2D — mapa de missão.',
      code:`<span class="kw">int</span>[,] mapa = {\n    {<span class="nm">0</span>,<span class="nm">1</span>,<span class="nm">0</span>},\n    {<span class="nm">0</span>,<span class="nm">0</span>,<span class="nm">1</span>},\n    {<span class="nm">1</span>,<span class="nm">0</span>,<span class="nm">0</span>}\n};\n<span class="kw">int</span> inimigos = <span class="nm">0</span>;\n<span class="kw">for</span>(<span class="kw">int</span> i=<span class="nm">0</span>;i<<span class="nm">3</span>;i++)\n  <span class="kw">for</span>(<span class="kw">int</span> j=<span class="nm">0</span>;j<<span class="nm">3</span>;j++)\n    <span class="kw">if</span>(mapa[i,j]==<span class="nm">1</span>) inimigos++;\nConsole.<span class="mt">WriteLine</span>(inimigos);`,
      q:'Quantos inimigos (células com valor 1) há no mapa?',
      hint:'Conte os 1s no array 2D',
      opts:[
        {t:'2', ok:false},
        {t:'3', ok:true},
        {t:'4', ok:false},
        {t:'6', ok:false},
      ],
      exp:'Linha 0: 1 inimigo (col 1). Linha 1: 1 inimigo (col 2). Linha 2: 1 inimigo (col 0). Total: 3 inimigos.',
    },

    // Q18 — Code
    {
      type:'code',
      bubble:'Revisão de recursão — potência.',
      code:`<span class="kw">static int</span> <span class="mt">Pot</span>(<span class="kw">int</span> base, <span class="kw">int</span> exp)\n{\n    <span class="kw">if</span> (exp == <span class="nm">0</span>) <span class="kw">return</span> <span class="nm">1</span>;\n    <span class="kw">return</span> base * <span class="mt">Pot</span>(base, exp - <span class="nm">1</span>);\n}\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Pot</span>(<span class="nm">2</span>, <span class="nm">8</span>));`,
      q:'Qual é o resultado de 2⁸?',
      hint:'2×2×2×2×2×2×2×2',
      opts:[
        {t:'64', ok:false},
        {t:'16', ok:false},
        {t:'256', ok:true},
        {t:'128', ok:false},
      ],
      exp:'2⁸ = 256. Pot(2,8) = 2 × Pot(2,7) = 2 × 2 × ... até Pot(2,0) = 1. Caso base: exp==0 retorna 1.',
    },

    // Q19 — Code
    {
      type:'code',
      bubble:'Revisão de char — decifrando mensagem.',
      code:`<span class="kw">string</span> cifrada = <span class="st">"Khoor"</span>;\n<span class="kw">var</span> sb = <span class="kw">new</span> StringBuilder();\n<span class="kw">foreach</span> (<span class="kw">char</span> c <span class="kw">in</span> cifrada)\n    sb.<span class="mt">Append</span>((<span class="kw">char</span>)(c - <span class="nm">3</span>));\nConsole.<span class="mt">WriteLine</span>(sb.<span class="mt">ToString</span>());`,
      q:'Qual é a mensagem decifrada (cada char -3)?',
      hint:"K-3='H', h-3='e', o-3='l', o-3='l', r-3='o'",
      opts:[
        {t:'Khoor', ok:false},
        {t:'Hello', ok:true},
        {t:'World', ok:false},
        {t:'Nkrru', ok:false},
      ],
      exp:"K(75)-3=72='H', h(104)-3=101='e', o(111)-3=108='l', o-3='l', r(114)-3=111='o'. Resultado: \"Hello\". Cifra de César invertida.",
    },

    // Q20 — Code (DESAFIO FINAL)
    {
      type:'code',
      bubble:'🏆 DESAFIO FINAL DO ACT I — Sistema completo de missão. Analise cada peça.',
      code:`<span class="kw">static bool</span> <span class="mt">PodeContinuar</span>(<span class="kw">int</span> hp, <span class="kw">int</span> mun)\n    => hp > <span class="nm">0</span> && mun > <span class="nm">0</span>;\n\n<span class="kw">static string</span> <span class="mt">Relatorio</span>(<span class="kw">int</span> hp, <span class="kw">int</span> mun, <span class="kw">int</span> kills)\n    => <span class="st">$"HP:{hp} Mun:{mun} Kills:{kills} | {(PodeContinuar(hp,mun)?\"EM CAMPO\":\"RETIRADA\")}"</span>;\n\n<span class="kw">int</span>[] danos  = {<span class="nm">15</span>, <span class="nm">20</span>, <span class="nm">10</span>};\n<span class="kw">int</span> hp = <span class="nm">80</span>, mun = <span class="nm">10</span>, kills = <span class="nm">0</span>;\n\n<span class="kw">foreach</span> (<span class="kw">int</span> d <span class="kw">in</span> danos)\n{\n    hp -= d;\n    mun -= <span class="nm">2</span>;\n    kills++;\n}\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Relatorio</span>(hp, mun, kills));`,
      q:'O que será exibido após os 3 combates?',
      hint:'hp = 80-15-20-10, mun = 10-2-2-2, kills = 3',
      opts:[
        {t:'HP:35 Mun:4 Kills:3 | EM CAMPO', ok:true},
        {t:'HP:35 Mun:4 Kills:3 | RETIRADA', ok:false},
        {t:'HP:45 Mun:6 Kills:3 | EM CAMPO', ok:false},
        {t:'HP:35 Mun:4 Kills:0 | EM CAMPO', ok:false},
      ],
      exp:'hp: 80-15-20-10=35. mun: 10-2-2-2=4. kills=3. PodeContinuar(35,4): 35>0 && 4>0 = true → "EM CAMPO". Saída: "HP:35 Mun:4 Kills:3 | EM CAMPO".',
    },

  ]
};
