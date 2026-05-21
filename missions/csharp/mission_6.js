// ══════════════════════════════════════════════════════
// MISSÃO 07 — IDENTIFICAÇÃO
// Tema: Operadores aritméticos, relacionais e lógicos
// Tipo: Normal (11 questões) | 4 MC → 3 Fill → 4 Code
// ══════════════════════════════════════════════════════

const MISSION_06 = {
  id: 6,
  title: "MISSÃO 07 — IDENTIFICAÇÃO",
  icon: '🪪',
  free: true,
  desc: "Para identificar ameaças, você precisa comparar, calcular e combinar condições. Operadores são as ferramentas matemáticas e lógicas da programação.",
  objs: [
    "Compreender os operadores aritméticos, relacionais e lógicos",
    "Saber como e quando usar cada operador",
    "Praticar a combinação de condições em expressões complexas"
  ],
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'Os <strong>operadores aritméticos</strong> em C# são: + (soma), - (subtração), * (multiplicação), / (divisão), % (módulo).',
      q:'Qual operador calcula o resto da divisão?',
      hint:'Parece símbolo de porcentagem',
      opts:[
        {t:'/', ok:false},{t:'*', ok:false},
        {t:'%', ok:true},{t:'//', ok:false},
      ],
      exp:'"%" é o módulo: 10 % 3 = 1. Útil para par/ímpar, ciclos, e verificar se é múltiplo de algo.',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'<strong>Operadores relacionais</strong> comparam dois valores e retornam bool: == (igual), != (diferente), > < >= <=',
      q:'Para verificar se o HP é diferente de zero, qual operador usar?',
      hint:'Diferente de',
      opts:[
        {t:'hp == 0', ok:false},{t:'hp <> 0', ok:false},
        {t:'hp != 0', ok:true},{t:'hp = 0', ok:false},
      ],
      exp:'"!=" significa "diferente de". "hp != 0" retorna true se hp não for zero. Lembre: "=" atribui, "==" compara.',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'<strong>Operadores lógicos:</strong> && (E — ambos verdadeiros), || (OU — pelo menos um verdadeiro), ! (NÃO — inverte).',
      q:'A condição "vivo && temMunicao" é verdadeira quando:',
      hint:'&& exige ambos verdadeiros',
      opts:[
        {t:'Pelo menos um for verdadeiro', ok:false},
        {t:'Ambos forem verdadeiros simultaneamente', ok:true},
        {t:'Apenas vivo for verdadeiro', ok:false},
        {t:'Nenhum for verdadeiro', ok:false},
      ],
      exp:'"&&" (AND): ambos precisam ser true. "vivo && temMunicao": true && true = true. true && false = false.',
    },

    // Q4 — MC
    {
      type:'mc',
      bubble:'O operador <strong>+=</strong> é um atalho: <code>x += 5</code> é o mesmo que <code>x = x + 5</code>.',
      q:'O que faz "municao -= 3"?',
      hint:'É um atalho para subtração',
      opts:[
        {t:'Subtrai municao de 3', ok:false},
        {t:'Define municao como -3', ok:false},
        {t:'Subtrai 3 do valor atual de municao', ok:true},
        {t:'Erro de sintaxe', ok:false},
      ],
      exp:'"municao -= 3" é o mesmo que "municao = municao - 3". Diminui 3 do valor atual. Atalhos: +=, -=, *=, /=, %=.',
    },

    // Q5 — Fill
    {
      type:'fill',
      bubble:'O operador lógico <code>||</code> representa o OU — verdadeiro se pelo menos uma condição for verdadeira.',
      code:`<span class="kw">bool</span> fugir = (hp < <span class="nm">20</span>) <span class="kw">_______</span> (!temArma);`,
      q:'Qual operador representa "OU" lógico em C#?',
      hint:'Duas barras verticais',
      ans:'||',
      exp:'"||" é o OR: true se hp < 20 OU se não tem arma. Qualquer uma das condições verdadeira = true.',
    },

    // Q6 — Fill
    {
      type:'fill',
      bubble:'O operador <code>!</code> (NOT) inverte um bool: !true = false, !false = true.',
      code:`<span class="kw">bool</span> morto = <span class="kw">!</span>vivo; <span class="cm">// se vivo=true, morto=_______</span>`,
      q:'Qual é o valor de morto se vivo = true?',
      hint:'NOT inverte',
      ans:'false',
      exp:'"!vivo" inverte o bool. Se vivo=true, !vivo = false. Se vivo=false, !vivo = true.',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'Para verificar se um número está dentro de um intervalo, combinamos dois comparadores com &&.',
      code:`<span class="kw">bool</span> hpCritico = (hp > <span class="nm">0</span>) <span class="kw">&&</span> (hp <span class="kw">_______</span> <span class="nm">30</span>);`,
      q:'Qual operador verifica se hp é menor ou igual a 30?',
      hint:'Menor que ou igual a',
      ans:'<=',
      exp:'"<=" é menor ou igual. "hp > 0 && hp <= 30" = HP entre 1 e 30 (intervalo crítico). Combine com && para intervalos.',
    },

    // Q8 — Code
    {
      type:'code',
      bubble:'Calcule o dano total com os operadores aritméticos.',
      code:`<span class="kw">int</span> danoBase = <span class="nm">25</span>;\n<span class="kw">int</span> critico = <span class="nm">2</span>;\n<span class="kw">int</span> armor = <span class="nm">10</span>;\n<span class="kw">int</span> danoFinal = (danoBase * critico) - armor;\nConsole.<span class="mt">WriteLine</span>(danoFinal);`,
      q:'Qual o dano final?',
      hint:'(25 × 2) - 10',
      opts:[
        {t:'30', ok:false},{t:'40', ok:true},
        {t:'50', ok:false},{t:'35', ok:false},
      ],
      exp:'(25 × 2) - 10 = 50 - 10 = 40. Multiplicação tem precedência sobre subtração.',
    },

    // Q9 — Code
    {
      type:'code',
      bubble:'Operadores relacionais retornam bool.',
      code:`<span class="kw">int</span> hp = <span class="nm">45</span>;\nConsole.<span class="mt">WriteLine</span>(hp > <span class="nm">50</span>);\nConsole.<span class="mt">WriteLine</span>(hp >= <span class="nm">45</span>);\nConsole.<span class="mt">WriteLine</span>(hp != <span class="nm">0</span>);`,
      q:'Qual será a saída das três linhas?',
      hint:'Compare hp=45 com cada expressão',
      opts:[
        {t:'True, True, True', ok:false},
        {t:'False, True, True', ok:true},
        {t:'False, False, True', ok:false},
        {t:'True, False, True', ok:false},
      ],
      exp:'45 > 50 = False. 45 >= 45 = True. 45 != 0 = True. Resultado: False, True, True.',
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'Prioridade dos operadores: multiplicação antes de adição, parênteses primeiro.',
      code:`<span class="kw">int</span> r1 = <span class="nm">2</span> + <span class="nm">3</span> * <span class="nm">4</span>;\n<span class="kw">int</span> r2 = (<span class="nm">2</span> + <span class="nm">3</span>) * <span class="nm">4</span>;\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"{r1} | {r2}"</span>);`,
      q:'Qual será a saída?',
      hint:'Multiplicação tem prioridade sobre adição',
      opts:[
        {t:'20 | 20', ok:false},{t:'14 | 20', ok:true},
        {t:'20 | 14', ok:false},{t:'14 | 14', ok:false},
      ],
      exp:'r1: 3*4=12, +2=14. r2: (2+3)=5, *4=20. Saída: "14 | 20". Parênteses alteram a precedência.',
    },

    // Q11 — Code
    {
      type:'code',
      bubble:'Operador ternário: forma compacta de if/else para atribuição.',
      code:`<span class="kw">int</span> hp = <span class="nm">15</span>;\n<span class="kw">string</span> status = hp > <span class="nm">0</span> ? <span class="st">"Vivo"</span> : <span class="st">"Morto"</span>;\nConsole.<span class="mt">WriteLine</span>(status);`,
      q:'O que será exibido?',
      hint:'hp = 15 > 0 é verdadeiro',
      opts:[
        {t:'Morto', ok:false},{t:'hp > 0', ok:false},
        {t:'Vivo', ok:true},{t:'True', ok:false},
      ],
      exp:'"condição ? valorSe True : valorSeFalse". hp > 0 = true → status = "Vivo".',
    },

  ]
};

// ══════════════════════════════════════════════════════
// MISSÃO 08 — DECISÃO TÁTICA
// Tema: Condicionais if/else
// Tipo: Normal (11 questões) | 4 MC → 3 Fill → 4 Code
// ══════════════════════════════════════════════════════

const missao08 = {
  id: 8, act: 1,
  titulo: "MISSÃO 08 — DECISÃO TÁTICA",
  subtitulo: "A Vila",
  descricao: "Em campo, cada segundo conta. Atacar ou recuar? Usar a erva ou guardar? As condicionais permitem que seu programa tome decisões inteligentes.",
  xp: 130, boss: false,
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'A estrutura <strong>if/else</strong> executa blocos diferentes dependendo de uma condição booleana.',
      q:'Qual é a estrutura correta de um if/else em C#?',
      hint:'Chaves delimitam os blocos',
      opts:[
        {t:'if condição { } else { }', ok:false},
        {t:'if (condição) { } else { }', ok:true},
        {t:'if [condição] then { } else { }', ok:false},
        {t:'case (condição) { } default { }', ok:false},
      ],
      exp:'C# usa parênteses na condição e chaves nos blocos: if (condição) { bloco se true } else { bloco se false }.',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'Um <strong>else if</strong> permite testar múltiplas condições em sequência. O primeiro que for verdadeiro executa.',
      q:'Quantos blocos else if podemos encadear?',
      hint:'Não há limite',
      opts:[
        {t:'Apenas 1', ok:false},{t:'No máximo 3', ok:false},
        {t:'Sem limite — quantos forem necessários', ok:true},{t:'No máximo 5', ok:false},
      ],
      exp:'Podemos encadear quantos else if precisarmos. Mas muitos else if podem indicar que switch seria mais adequado.',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'Quando o bloco if tem apenas <strong>uma linha</strong>, as chaves são opcionais — mas é boa prática usá-las sempre.',
      q:'Qual o risco de omitir chaves num if com uma linha?',
      hint:'O que acontece quando adicionamos outra linha?',
      opts:[
        {t:'Erro de compilação', ok:false},
        {t:'Ao adicionar outra linha, ela não faz parte do if sem as chaves', ok:true},
        {t:'Nenhum risco — é equivalente', ok:false},
        {t:'O código fica mais lento', ok:false},
      ],
      exp:'Sem chaves, só a próxima linha faz parte do if. Adicionar outra linha sem chaves cria bugs silenciosos difíceis de achar.',
    },

    // Q4 — MC
    {
      type:'mc',
      bubble:'O <strong>operador ternário</strong> <code>condição ? valorTrue : valorFalse</code> é um if/else compacto para atribuições simples.',
      q:'Quando é ideal usar o operador ternário?',
      hint:'Simples e direto',
      opts:[
        {t:'Para lógicas complexas com múltiplos passos', ok:false},
        {t:'Para atribuições simples baseadas em uma condição', ok:true},
        {t:'Substitui completamente o if/else', ok:false},
        {t:'Apenas para comparar strings', ok:false},
      ],
      exp:'Ternário é ideal para: string cor = hp > 50 ? "verde" : "vermelho". Para lógicas complexas, use if/else completo.',
    },

    // Q5 — Fill
    {
      type:'fill',
      bubble:'A palavra-chave <code>else</code> define o bloco que executa quando a condição do if é falsa.',
      code:`<span class="kw">if</span> (hp > <span class="nm">0</span>)\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Vivo"</span>);\n<span class="kw">_______</span>\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Game Over"</span>);`,
      q:'Qual palavra vai no bloco alternativo?',
      hint:'Caso contrário em inglês',
      ans:'else',
      exp:'"else" é executado quando a condição do if é false. Se hp > 0 for false, cai no else e imprime "Game Over".',
    },

    // Q6 — Fill
    {
      type:'fill',
      bubble:'Para testar múltiplos intervalos de HP, encadeamos else if.',
      code:`<span class="kw">if</span> (hp > <span class="nm">70</span>) status = <span class="st">"Ótimo"</span>;\n<span class="kw">else _______</span> (hp > <span class="nm">30</span>) status = <span class="st">"Alerta"</span>;\n<span class="kw">else</span> status = <span class="st">"Crítico"</span>;`,
      q:'Qual palavra-chave completa o segundo teste?',
      hint:'Else mais If',
      ans:'if',
      exp:'"else if" testa a próxima condição se a anterior foi false. Formando: ótimo → alerta → crítico.',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'O operador ternário usa <code>?</code> para o valor verdadeiro e <code>:</code> para o falso.',
      code:`<span class="kw">string</span> acao = municao > <span class="nm">0</span> ? <span class="st">"Atirar"</span> <span class="kw">_______</span> <span class="st">"Esquivar"</span>;`,
      q:'Qual símbolo separa o valor false no operador ternário?',
      hint:'Dois pontos',
      ans:':',
      exp:'"condição ? valorTrue : valorFalse". Os ":" separam true de false. municao > 0 ? "Atirar" : "Esquivar".',
    },

    // Q8 — Code
    {
      type:'code',
      bubble:'Analise este sistema de status do personagem.',
      code:`<span class="kw">int</span> hp = <span class="nm">45</span>;\n<span class="kw">if</span> (hp > <span class="nm">70</span>)\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Saudável"</span>);\n<span class="kw">else if</span> (hp > <span class="nm">30</span>)\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Ferido"</span>);\n<span class="kw">else</span>\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Crítico"</span>);`,
      q:'Para hp = 45, o que será exibido?',
      hint:'45 > 70? Não. 45 > 30? ...',
      opts:[
        {t:'Saudável', ok:false},{t:'Ferido', ok:true},
        {t:'Crítico', ok:false},{t:'Nada é exibido', ok:false},
      ],
      exp:'hp=45: 45>70 = false → else if: 45>30 = true → "Ferido". Quando uma condição é true, os outros blocos são pulados.',
    },

    // Q9 — Code
    {
      type:'code',
      bubble:'Veja o if/else verificando múltiplas condições com &&.',
      code:`<span class="kw">bool</span> temChave = <span class="kw">true</span>;\n<span class="kw">bool</span> portaBloqueada = <span class="kw">false</span>;\n\n<span class="kw">if</span> (temChave && !portaBloqueada)\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Porta aberta!"</span>);\n<span class="kw">else</span>\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Não pode passar."</span>);`,
      q:'O que será exibido?',
      hint:'temChave=true, !portaBloqueada = !false = true',
      opts:[
        {t:'Não pode passar.', ok:false},
        {t:'Porta aberta!', ok:true},
        {t:'Erro — condição inválida', ok:false},
        {t:'Nada', ok:false},
      ],
      exp:'temChave = true, !portaBloqueada = !false = true. true && true = true → "Porta aberta!".',
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'If aninhado — if dentro de if.',
      code:`<span class="kw">int</span> hp = <span class="nm">80</span>;\n<span class="kw">int</span> municao = <span class="nm">0</span>;\n\n<span class="kw">if</span> (hp > <span class="nm">0</span>)\n{\n    <span class="kw">if</span> (municao > <span class="nm">0</span>)\n        Console.<span class="mt">WriteLine</span>(<span class="st">"Atacar!"</span>);\n    <span class="kw">else</span>\n        Console.<span class="mt">WriteLine</span>(<span class="st">"Sem munição — fugir!"</span>);\n}\n<span class="kw">else</span>\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Game Over"</span>);`,
      q:'Com hp=80 e municao=0, o que será exibido?',
      hint:'Vivo mas sem munição',
      opts:[
        {t:'Atacar!', ok:false},
        {t:'Sem munição — fugir!', ok:true},
        {t:'Game Over', ok:false},
        {t:'Nada', ok:false},
      ],
      exp:'hp>0 = true (entra). municao>0 = false → else → "Sem munição — fugir!". If aninhado para lógicas em camadas.',
    },

    // Q11 — Code
    {
      type:'code',
      bubble:'Cuidado com o erro clássico: usar = (atribuição) em vez de == (comparação).',
      code:`<span class="kw">int</span> vidas = <span class="nm">3</span>;\n<span class="kw">if</span> (vidas == <span class="nm">0</span>)\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Game Over"</span>);\n<span class="kw">else</span>\n    Console.<span class="mt">WriteLine</span>(<span class="st">$"Vidas restantes: {vidas}"</span>);`,
      q:'O que será exibido para vidas = 3?',
      hint:'3 == 0 é...',
      opts:[
        {t:'Game Over', ok:false},
        {t:'Vidas restantes: 3', ok:true},
        {t:'Erro de compilação', ok:false},
        {t:'Vidas restantes: 0', ok:false},
      ],
      exp:'vidas == 0 → 3 == 0 = false → else → "Vidas restantes: 3". Use sempre == para comparar, nunca = em condições.',
    },

  ]
};

// ══════════════════════════════════════════════════════
// MISSÃO 09 — ENCRUZILHADA
// Tema: Condicionais aninhadas e switch
// Tipo: Normal (12 questões) | 4 MC → 4 Fill → 4 Code
// ══════════════════════════════════════════════════════

const missao09 = {
  id: 9, act: 1,
  titulo: "MISSÃO 09 — ENCRUZILHADA",
  subtitulo: "A Vila",
  descricao: "A missão se ramifica em múltiplos caminhos. Para cada direção, uma decisão diferente. O switch é seu mapa para navegar por múltiplas opções.",
  xp: 140, boss: false,
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'O <strong>switch</strong> testa uma variável contra múltiplos valores fixos. Mais limpo que vários else if para o mesmo campo.',
      q:'Quando o switch é preferível ao else if?',
      hint:'Quando testamos o mesmo campo várias vezes',
      opts:[
        {t:'Quando as condições são intervalos de valores', ok:false},
        {t:'Quando testamos a mesma variável contra vários valores fixos', ok:true},
        {t:'O switch sempre é melhor', ok:false},
        {t:'Para condições com &&', ok:false},
      ],
      exp:'switch é ideal para: "se arma == pistola... se arma == escopeta... se arma == faca...". Mesma variável, valores fixos.',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'O <strong>break</strong> encerra um case no switch. Sem ele, a execução "cai" (fall-through) para o próximo case.',
      q:'O que acontece em C# se esquecer o break num case?',
      hint:'C# é diferente de C/C++ aqui',
      opts:[
        {t:'Cai para o próximo case silenciosamente', ok:false},
        {t:'Erro de compilação — C# exige break ou return em cada case', ok:true},
        {t:'O programa encerra', ok:false},
        {t:'Nada — break é opcional', ok:false},
      ],
      exp:'Em C#, esquecer break é erro de compilação (diferente de C/C++). Cada case precisa de break, return, ou throw.',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'O <strong>default</strong> no switch é executado quando nenhum case combina. Equivale ao else final.',
      q:'O default no switch é obrigatório?',
      hint:'E se nenhum case combinar?',
      opts:[
        {t:'Sim, sempre obrigatório', ok:false},
        {t:'Não, mas é boa prática para tratar casos inesperados', ok:true},
        {t:'Apenas se houver mais de 5 cases', ok:false},
        {t:'Não existe default em C#', ok:false},
      ],
      exp:'"default" não é obrigatório mas é boa prática. Se nenhum case combinar e não há default, o switch não faz nada.',
    },

    // Q4 — MC
    {
      type:'mc',
      bubble:'O <strong>switch expression</strong> (C# 8+) é uma versão compacta e moderna do switch clássico para atribuições.',
      q:'Qual vantagem do switch expression sobre o switch clássico?',
      hint:'Forma mais moderna e concisa',
      opts:[
        {t:'É mais rápido em runtime', ok:false},
        {t:'Sintaxe mais compacta para retornar/atribuir valores', ok:true},
        {t:'Suporta mais cases', ok:false},
        {t:'Não precisa de break', ok:false},
      ],
      exp:'Switch expression: var resultado = valor switch { case1 => r1, case2 => r2, _ => padrão }. Muito mais conciso.',
    },

    // Q5 — Fill
    {
      type:'fill',
      bubble:'A estrutura básica do switch usa a palavra-chave <code>switch</code> seguida da variável a testar.',
      code:`<span class="kw">_______</span> (arma)\n{\n    <span class="kw">case</span> <span class="st">"pistola"</span>: dano = <span class="nm">25</span>; <span class="kw">break</span>;\n    <span class="kw">case</span> <span class="st">"escopeta"</span>: dano = <span class="nm">80</span>; <span class="kw">break</span>;\n}`,
      q:'Qual palavra inicia a estrutura switch?',
      hint:'O nome da estrutura',
      ans:'switch',
      exp:'"switch (variável)" inicia a estrutura. Cada "case valor:" testa se variável == valor.',
    },

    // Q6 — Fill
    {
      type:'fill',
      bubble:'O case padrão que executa quando nenhum case combina usa a palavra-chave <code>default</code>.',
      code:`<span class="kw">switch</span> (comando)\n{\n    <span class="kw">case</span> <span class="st">"atacar"</span>: Atacar(); <span class="kw">break</span>;\n    <span class="kw">case</span> <span class="st">"fugir"</span>: Fugir(); <span class="kw">break</span>;\n    <span class="kw">_______</span>: Console.<span class="mt">WriteLine</span>(<span class="st">"Comando inválido"</span>); <span class="kw">break</span>;\n}`,
      q:'Qual palavra define o caso padrão?',
      hint:'Padrão em inglês',
      ans:'default',
      exp:'"default:" é o case que captura tudo que não casou com nenhum case anterior. Sempre coloque no final.',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'No switch expression moderno, o underscore <code>_</code> é o padrão para quando nenhum case combina.',
      code:`<span class="kw">string</span> tipo = nivel <span class="kw">switch</span>\n{\n    <span class="nm">1</span> => <span class="st">"Recruta"</span>,\n    <span class="nm">2</span> => <span class="st">"Agente"</span>,\n    <span class="kw">_______</span> => <span class="st">"Veterano"</span>\n};`,
      q:'Qual símbolo representa o caso padrão no switch expression?',
      hint:'Underscore',
      ans:'_',
      exp:'"_" é o discard pattern — case padrão no switch expression. Equivale ao "default" do switch clássico.',
    },

    // Q8 — Fill
    {
      type:'fill',
      bubble:'Múltiplos cases podem compartilhar o mesmo bloco empilhando labels.',
      code:`<span class="kw">case</span> <span class="st">"norte"</span>:\n<span class="kw">case</span> <span class="st">"_______"</span>:\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Direção vertical"</span>);\n    <span class="kw">break</span>;`,
      q:'Para incluir "sul" no mesmo bloco, o que escrevemos no segundo case?',
      hint:'Oposto de norte',
      ans:'sul',
      exp:'Empilhar cases sem break entre eles faz todos compartilhar o mesmo bloco. "norte" e "sul" executam o mesmo código.',
    },

    // Q9 — Code
    {
      type:'code',
      bubble:'Switch para selecionar a arma do inventário.',
      code:`<span class="kw">string</span> arma = <span class="st">"escopeta"</span>;\n<span class="kw">int</span> dano;\n\n<span class="kw">switch</span> (arma)\n{\n    <span class="kw">case</span> <span class="st">"pistola"</span>:   dano = <span class="nm">25</span>; <span class="kw">break</span>;\n    <span class="kw">case</span> <span class="st">"escopeta"</span>:  dano = <span class="nm">80</span>; <span class="kw">break</span>;\n    <span class="kw">case</span> <span class="st">"rifle"</span>:     dano = <span class="nm">120</span>; <span class="kw">break</span>;\n    <span class="kw">default</span>:          dano = <span class="nm">10</span>; <span class="kw">break</span>;\n}\nConsole.<span class="mt">WriteLine</span>(dano);`,
      q:'O que será exibido para arma = "escopeta"?',
      hint:'Qual case combina com "escopeta"?',
      opts:[
        {t:'25', ok:false},{t:'120', ok:false},
        {t:'80', ok:true},{t:'10', ok:false},
      ],
      exp:'"escopeta" combina com o segundo case. dano = 80. Break impede de cair no próximo case.',
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'Switch expression — versão moderna e compacta.',
      code:`<span class="kw">int</span> nivel = <span class="nm">3</span>;\n<span class="kw">string</span> rank = nivel <span class="kw">switch</span>\n{\n    <span class="nm">1</span> => <span class="st">"Recruta"</span>,\n    <span class="nm">2</span> => <span class="st">"Agente"</span>,\n    <span class="nm">3</span> => <span class="st">"Especialista"</span>,\n    _ => <span class="st">"Veterano"</span>\n};\nConsole.<span class="mt">WriteLine</span>(rank);`,
      q:'Para nivel = 3, o que será exibido?',
      hint:'Qual valor corresponde ao caso 3?',
      opts:[
        {t:'Agente', ok:false},{t:'Veterano', ok:false},
        {t:'Especialista', ok:true},{t:'3', ok:false},
      ],
      exp:'nivel = 3 combina com o case 3 => "Especialista". Switch expression é atribuição direta sem break.',
    },

    // Q11 — Code
    {
      type:'code',
      bubble:'Condicionais aninhadas — if dentro de switch.',
      code:`<span class="kw">string</span> arma = <span class="st">"pistola"</span>;\n<span class="kw">int</span> municao = <span class="nm">0</span>;\n\n<span class="kw">switch</span> (arma)\n{\n    <span class="kw">case</span> <span class="st">"pistola"</span>:\n        <span class="kw">if</span> (municao > <span class="nm">0</span>)\n            Console.<span class="mt">WriteLine</span>(<span class="st">"Bang!"</span>);\n        <span class="kw">else</span>\n            Console.<span class="mt">WriteLine</span>(<span class="st">"*clique* Sem munição!"</span>);\n        <span class="kw">break</span>;\n}`,
      q:'Com arma="pistola" e municao=0, o que será exibido?',
      hint:'Entra no case pistola, depois checa munição',
      opts:[
        {t:'Bang!', ok:false},
        {t:'*clique* Sem munição!', ok:true},
        {t:'Nada — municao=0 bloqueia', ok:false},
        {t:'Erro de compilação', ok:false},
      ],
      exp:'Case "pistola" combina. municao=0, 0>0 = false → else → "*clique* Sem munição!". Switch e if podem se combinar.',
    },

    // Q12 — Code
    {
      type:'code',
      bubble:'Teste final: switch com when (guard clause) para condições extras.',
      code:`<span class="kw">int</span> hp = <span class="nm">15</span>;\n<span class="kw">string</span> alerta = hp <span class="kw">switch</span>\n{\n    > <span class="nm">70</span>          => <span class="st">"Verde"</span>,\n    > <span class="nm">30</span>          => <span class="st">"Amarelo"</span>,\n    > <span class="nm">0</span>           => <span class="st">"Vermelho"</span>,\n    _              => <span class="st">"Morto"</span>\n};\nConsole.<span class="mt">WriteLine</span>(alerta);`,
      q:'Para hp = 15, qual cor será exibida?',
      hint:'15 > 70? Não. 15 > 30? Não. 15 > 0? ...',
      opts:[
        {t:'Verde', ok:false},{t:'Amarelo', ok:false},
        {t:'Vermelho', ok:true},{t:'Morto', ok:false},
      ],
      exp:'15 > 70 = false. 15 > 30 = false. 15 > 0 = true → "Vermelho". Switch expression aceita comparadores como cases.',
    },

  ]
};
