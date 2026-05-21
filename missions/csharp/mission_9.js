// ══════════════════════════════════════════════════════
// ACT I — A VILA
// MISSÃO 10 — PATRULHA ⚔️ MISSÃO CHEFE
// Tema: Loop while e do-while
// Tipo: CHEFE (18 questões) | 6 MC → 5 Fill → 7 Code
// ══════════════════════════════════════════════════════

const MISSION_09 = {
  id: 9,
  title: "MISSÃO 10 — PATRULHA",
  icon: '🚶',
  free: true,
  desc: "Os inimigos patrulham em loop. Para derrotá-los, você precisa dominar a repetição — o loop while é sua ferramenta para executar ações enquanto uma condição for verdadeira.",
  objs: [
    "Entender a estrutura while para repetição controlada por condição",
    "Usar do-while para garantir execução mínima",
    "Controlar o fluxo do loop com break e continue",
    "Implementar acumuladores para somar ou contar durante o loop",
  ],
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'Um <strong>loop while</strong> repete um bloco de código <em>enquanto</em> uma condição for verdadeira. Verifica a condição antes de cada iteração.',
      q:'Quando o loop while para de executar?',
      hint:'A condição controla tudo',
      opts:[
        {t:'Após um número fixo de repetições', ok:false},
        {t:'Quando a condição se torna false', ok:true},
        {t:'Quando o break é encontrado obrigatoriamente', ok:false},
        {t:'Após 1000 iterações por padrão', ok:false},
      ],
      exp:'while (condição) repete enquanto condição = true. Quando condição = false, o loop encerra e o código continua.',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'Um <strong>loop infinito</strong> ocorre quando a condição de parada nunca se torna false. Trava o programa.',
      q:'O que causa um loop infinito no while?',
      hint:'A condição nunca para de ser true',
      opts:[
        {t:'Usar muitas iterações', ok:false},
        {t:'A condição nunca se tornar false — variável de controle não é atualizada', ok:true},
        {t:'Esquecer o ponto e vírgula', ok:false},
        {t:'A condição ter && e ||', ok:false},
      ],
      exp:'Loop infinito: while(true) sem break, ou esquecer de atualizar a variável que controla a condição.',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'O <strong>do-while</strong> executa o bloco ao menos uma vez, depois verifica a condição. Diferente do while que pode não executar.',
      q:'Quando usar do-while em vez de while?',
      hint:'O bloco sempre precisa executar ao menos uma vez',
      opts:[
        {t:'Quando há muitas iterações', ok:false},
        {t:'Quando o bloco deve executar ao menos uma vez antes de testar', ok:true},
        {t:'do-while é sempre mais rápido', ok:false},
        {t:'Para loops com contador', ok:false},
      ],
      exp:'"do-while" ideal para: mostrar menu e ler opção (sempre mostra ao menos uma vez, só sai se o usuário quiser).',
    },

    // Q4 — MC
    {
      type:'mc',
      bubble:'<code>break</code> encerra o loop imediatamente. <code>continue</code> pula para a próxima iteração sem executar o restante.',
      q:'Qual a diferença entre break e continue?',
      hint:'Um sai do loop, outro pula a iteração',
      opts:[
        {t:'São sinônimos em C#', ok:false},
        {t:'break sai do loop; continue pula para a próxima iteração', ok:true},
        {t:'break pula a iteração; continue sai do loop', ok:false},
        {t:'break funciona só em switch', ok:false},
      ],
      exp:'"break" encerra o loop inteiro. "continue" pula o resto da iteração atual e vai para a próxima.',
    },

    // Q5 — MC
    {
      type:'mc',
      bubble:'Em loops, a variável de controle (contador ou acumulador) é fundamental. Ela deve ser inicializada, testada e atualizada.',
      q:'Quais são os três componentes essenciais de um loop while correto?',
      hint:'Inicializar → Testar → Atualizar',
      opts:[
        {t:'Declarar variável, usar break, usar continue', ok:false},
        {t:'Inicializar variável → Testar condição → Atualizar variável', ok:true},
        {t:'Abrir chave, executar código, fechar chave', ok:false},
        {t:'Input, processing, output', ok:false},
      ],
      exp:'Sem inicialização: valor lixo. Sem teste: loop nunca executa ou é infinito. Sem atualização: loop infinito.',
    },

    // Q6 — MC
    {
      type:'mc',
      bubble:'Um <strong>acumulador</strong> é uma variável que acumula um valor ao longo do loop. Exemplo clássico: somar todos os elementos.',
      q:'Qual o papel da variável "soma" em: while(i<=10) { soma += i; i++; }',
      hint:'Acumula o quê?',
      opts:[
        {t:'Conta quantas iterações ocorreram', ok:false},
        {t:'Acumula a soma dos valores de i a cada iteração', ok:true},
        {t:'Controla quando o loop para', ok:false},
        {t:'Armazena o último valor de i', ok:false},
      ],
      exp:'"soma" é um acumulador: soma += i adiciona i ao total a cada iteração. Resultado: 1+2+...+10 = 55.',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'A estrutura while usa a palavra-chave <code>while</code> seguida da condição entre parênteses.',
      code:`<span class="kw">int</span> vidas = <span class="nm">3</span>;\n<span class="kw">_______</span> (vidas > <span class="nm">0</span>)\n{\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Tentando..."</span>);\n    vidas--;\n}`,
      q:'Qual palavra inicia o loop while?',
      hint:'Enquanto em inglês',
      ans:'while',
      exp:'"while (condição)" repete enquanto verdadeiro. "vidas--" decrementa a cada iteração, evitando loop infinito.',
    },

    // Q8 — Fill
    {
      type:'fill',
      bubble:'Para sair de um loop antes da condição se tornar false, usamos <code>break</code>.',
      code:`<span class="kw">while</span> (<span class="kw">true</span>)\n{\n    <span class="kw">string</span> input = Console.<span class="mt">ReadLine</span>();\n    <span class="kw">if</span> (input == <span class="st">"sair"</span>) <span class="kw">_______</span>;\n}`,
      q:'Qual palavra-chave encerra o loop quando o usuário digita "sair"?',
      hint:'Quebra o loop',
      ans:'break',
      exp:'"break" sai imediatamente do loop. "while(true)" com break é padrão para menus que rodam até o usuário sair.',
    },

    // Q9 — Fill
    {
      type:'fill',
      bubble:'Para pular a iteração atual e ir para a próxima, usamos <code>continue</code>.',
      code:`<span class="kw">int</span> i = <span class="nm">0</span>;\n<span class="kw">while</span> (i < <span class="nm">5</span>)\n{\n    i++;\n    <span class="kw">if</span> (i == <span class="nm">3</span>) <span class="kw">_______</span>;\n    Console.<span class="mt">WriteLine</span>(i);\n}`,
      q:'Qual palavra-chave pula a iteração onde i == 3?',
      hint:'Continua para a próxima',
      ans:'continue',
      exp:'"continue" pula o resto da iteração. Quando i=3, o WriteLine é pulado. Imprime: 1, 2, 4, 5.',
    },

    // Q10 — Fill
    {
      type:'fill',
      bubble:'O do-while usa <code>do</code> antes do bloco e <code>while (condição);</code> depois — com ponto e vírgula!',
      code:`<span class="kw">_______</span>\n{\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Tentativa!"</span>);\n    tentativas++;\n} <span class="kw">while</span> (tentativas < <span class="nm">3</span>);`,
      q:'Qual palavra inicia o bloco do-while?',
      hint:'A palavra antes das chaves',
      ans:'do',
      exp:'"do { } while (condição);" — o bloco executa, depois verifica. Sempre executa ao menos 1 vez.',
    },

    // Q11 — Fill
    {
      type:'fill',
      bubble:'Para calcular a soma de 1 a N, inicializamos o acumulador com zero.',
      code:`<span class="kw">int</span> soma = <span class="nm">_______</span>;\n<span class="kw">int</span> i = <span class="nm">1</span>;\n<span class="kw">while</span> (i <= <span class="nm">10</span>)\n{\n    soma += i;\n    i++;\n}`,
      q:'Com qual valor inicializamos o acumulador de soma?',
      hint:'Somar zero não muda nada',
      ans:'0',
      exp:'"soma = 0" — elemento neutro da adição. Acumuladores de soma começam em 0; de produto, em 1.',
    },

    // Q12 — Code
    {
      type:'code',
      bubble:'Quantas vezes este while executa?',
      code:`<span class="kw">int</span> n = <span class="nm">5</span>;\n<span class="kw">while</span> (n > <span class="nm">0</span>)\n{\n    Console.<span class="mt">Write</span>(n + <span class="st">" "</span>);\n    n--;\n}`,
      q:'O que será exibido?',
      hint:'Começa em 5 e vai até 1',
      opts:[
        {t:'5 4 3 2 1 0', ok:false},
        {t:'5 4 3 2 1', ok:true},
        {t:'1 2 3 4 5', ok:false},
        {t:'4 3 2 1 0', ok:false},
      ],
      exp:'n=5: print 5, n=4. n=4: print 4... n=1: print 1, n=0. n=0: condição false, para. Exibe: "5 4 3 2 1".',
    },

    // Q13 — Code
    {
      type:'code',
      bubble:'Identifique o loop infinito.',
      code:`<span class="kw">int</span> hp = <span class="nm">10</span>;\n<span class="kw">while</span> (hp > <span class="nm">0</span>)\n{\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Vivo!"</span>);\n    <span class="cm">// hp não é atualizado!</span>\n}`,
      q:'Por que este código cria um loop infinito?',
      hint:'hp muda de valor?',
      opts:[
        {t:'A condição está errada', ok:false},
        {t:'hp nunca é decrementado — condição nunca vira false', ok:true},
        {t:'while não suporta variáveis int', ok:false},
        {t:'Falta break após o WriteLine', ok:false},
      ],
      exp:'hp = 10 sempre. "hp > 0" sempre true. Loop infinito. Corrija adicionando "hp--" ou dano ao HP dentro do loop.',
    },

    // Q14 — Code
    {
      type:'code',
      bubble:'Acumulador em ação — somando danos causados.',
      code:`<span class="kw">int</span>[] danos = {<span class="nm">20</span>, <span class="nm">35</span>, <span class="nm">15</span>, <span class="nm">40</span>};\n<span class="kw">int</span> i = <span class="nm">0</span>, total = <span class="nm">0</span>;\n<span class="kw">while</span> (i < danos.<span class="mt">Length</span>)\n{\n    total += danos[i];\n    i++;\n}\nConsole.<span class="mt">WriteLine</span>(total);`,
      q:'Qual o total de danos?',
      hint:'20 + 35 + 15 + 40',
      opts:[
        {t:'40', ok:false},{t:'100', ok:false},
        {t:'110', ok:true},{t:'115', ok:false},
      ],
      exp:'total = 20+35+15+40 = 110. O while percorre todos os índices de 0 até danos.Length-1.',
    },

    // Q15 — Code
    {
      type:'code',
      bubble:'O continue pulando elementos indesejados.',
      code:`<span class="kw">int</span> i = <span class="nm">0</span>;\n<span class="kw">while</span> (i < <span class="nm">6</span>)\n{\n    i++;\n    <span class="kw">if</span> (i % <span class="nm">2</span> == <span class="nm">0</span>) <span class="kw">continue</span>;\n    Console.<span class="mt">Write</span>(i + <span class="st">" "</span>);\n}`,
      q:'O que será exibido?',
      hint:'Pula quando i é par',
      opts:[
        {t:'1 2 3 4 5 6', ok:false},
        {t:'2 4 6', ok:false},
        {t:'1 3 5', ok:true},
        {t:'1 2 3', ok:false},
      ],
      exp:'Continue pula quando i é par (i%2==0). Imprime apenas ímpares: 1, 3, 5.',
    },

    // Q16 — Code
    {
      type:'code',
      bubble:'Do-while para menu do jogo — sempre executa ao menos uma vez.',
      code:`<span class="kw">int</span> opcao = <span class="nm">0</span>;\n<span class="kw">do</span>\n{\n    Console.<span class="mt">WriteLine</span>(<span class="st">"1-Atacar 2-Fugir 3-Inventário"</span>);\n    opcao = <span class="kw">int</span>.<span class="mt">Parse</span>(Console.<span class="mt">ReadLine</span>());\n} <span class="kw">while</span> (opcao != <span class="nm">3</span>);`,
      q:'Quando este menu para de ser exibido?',
      hint:'A condição de saída do do-while',
      opts:[
        {t:'Após 3 tentativas', ok:false},
        {t:'Quando o usuário escolher a opção 3 (Inventário)', ok:true},
        {t:'Quando o usuário digitar qualquer coisa', ok:false},
        {t:'Imediatamente — executa só 1 vez', ok:false},
      ],
      exp:'"opcao != 3" continua enquanto opcao não for 3. Quando usuário digita 3, condição vira false e loop encerra.',
    },

    // Q17 — Code
    {
      type:'code',
      bubble:'Loop while para encontrar o primeiro inimigo com HP abaixo do limite.',
      code:`<span class="kw">int</span>[] hps = {<span class="nm">80</span>, <span class="nm">60</span>, <span class="nm">15</span>, <span class="nm">90</span>, <span class="nm">10</span>};\n<span class="kw">int</span> i = <span class="nm">0</span>;\n<span class="kw">while</span> (i < hps.<span class="mt">Length</span> && hps[i] >= <span class="nm">20</span>)\n    i++;\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"Alvo fraco no índice {i}"</span>);`,
      q:'Qual índice será exibido?',
      hint:'Qual é o primeiro HP abaixo de 20?',
      opts:[
        {t:'Alvo fraco no índice 0', ok:false},
        {t:'Alvo fraco no índice 2', ok:true},
        {t:'Alvo fraco no índice 4', ok:false},
        {t:'Alvo fraco no índice 1', ok:false},
      ],
      exp:'i=0: 80>=20 → continua. i=1: 60>=20 → continua. i=2: 15<20 → para. Exibe "Alvo fraco no índice 2".',
    },

    // Q18 — Code
    {
      type:'code',
      bubble:'🏆 DESAFIO CHEFE — Calcule o fatorial usando while.',
      code:`<span class="kw">int</span> n = <span class="nm">5</span>;\n<span class="kw">int</span> fatorial = <span class="nm">1</span>;\n<span class="kw">while</span> (n > <span class="nm">1</span>)\n{\n    fatorial *= n;\n    n--;\n}\nConsole.<span class="mt">WriteLine</span>(fatorial);`,
      q:'Qual o resultado de 5! (fatorial de 5)?',
      hint:'5 × 4 × 3 × 2 × 1',
      opts:[
        {t:'25', ok:false},{t:'15', ok:false},
        {t:'120', ok:true},{t:'60', ok:false},
      ],
      exp:'fatorial: 1×5=5, ×4=20, ×3=60, ×2=120. n=1 → condição false. 5! = 120. Acumulador de produto começa em 1.',
    },

  ]
};
