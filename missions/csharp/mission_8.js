// ══════════════════════════════════════════════════════
// MISSÃO 09 — ENCRUZILHADA
// Tema: Condicionais aninhadas e switch
// Tipo: Normal (12 questões) | 4 MC → 4 Fill → 4 Code
// ══════════════════════════════════════════════════════

const MISSION_08 = {
  id: 8,
  title: "MISSÃO 09 — ENCRUZILHADA",
  icon: '🔀',
  free: true,
  desc: "A missão se ramifica em múltiplos caminhos. Para cada direção, uma decisão diferente. O switch é seu mapa para navegar por múltiplas opções.",
  objs: [
    "Entender a estrutura switch para múltiplas condições",
    "Usar break para controlar o fluxo dentro do switch",
    "Aplicar switch expression para código mais conciso",
  ],
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
