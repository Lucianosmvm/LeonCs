// ══════════════════════════════════════════════════════
// MISSÃO 08 — DECISÃO TÁTICA
// Tema: Condicionais if/else
// Tipo: Normal (11 questões) | 4 MC → 3 Fill → 4 Code
// ══════════════════════════════════════════════════════

const MISSION_07 = {
  id: 7,
  title: "MISSÃO 08 — DECISÃO TÁTICA",
  icon: '⚔️',
  free: true,
  desc: "Em campo, cada segundo conta. Atacar ou recuar? Usar a erva ou guardar? As condicionais permitem que seu programa tome decisões inteligentes.",
  objs: [
    "Entender a estrutura if/else para decisões binárias",
    "Usar else if para múltiplas condições",
  ],
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
