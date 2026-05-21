// ══════════════════════════════════════════════════════
// ACT I — A VILA
// MISSÃO 05 — O INVENTÁRIO ⚔️ MISSÃO CHEFE
// Tema: Variáveis e tipos de dados
// Tipo: CHEFE (18 questões) | Progressão: 7 MC → 5 Fill → 6 Code
// ══════════════════════════════════════════════════════

const MISSION_04 = {
  id: 4,
  title: "MISSÃO 05 — O INVENTÁRIO",
  icon: '🎒',
  free: true,
  desc: "O inventário é o coração da sua sobrevivência. Para gerenciar armas, munição e itens, você precisa dominar variáveis e tipos de dados — os blocos fundamentais de qualquer programa.",
  objs: [
    "Entender o que são variáveis e tipos de dados",
    "Aprender os tipos básicos em C#: int, double, bool, string, char",
    "Praticar declaração, atribuição e operações com variáveis"
  ],
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'Uma <strong>variável</strong> é um espaço nomeado na memória que armazena um valor. Como uma caixa com etiqueta no inventário.',
      q:'O que é uma variável em programação?',
      hint:'Caixa com etiqueta na memória',
      opts:[
        {t:'Um valor fixo que nunca muda', ok:false},
        {t:'Um espaço nomeado na memória para armazenar um valor', ok:true},
        {t:'Um tipo de loop', ok:false},
        {t:'Uma função sem retorno', ok:false},
      ],
      exp:'Variável = nome + tipo + valor armazenado na memória. O valor pode mudar (vary = variar) durante a execução.',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'Em C#, toda variável tem um <strong>tipo</strong> que define que tipo de dado ela pode armazenar: número, texto, verdadeiro/falso...',
      q:'Por que o tipo de uma variável é importante?',
      hint:'Você não coloca uma espada na bainha de uma pistola',
      opts:[
        {t:'Apenas para fins estéticos', ok:false},
        {t:'Define que operações podem ser feitas e quanto espaço usa', ok:true},
        {t:'É obrigatório apenas em linguagens antigas', ok:false},
        {t:'Não importa em C#', ok:false},
      ],
      exp:'O tipo define: quais valores cabem, quais operações são válidas e quanto de memória será alocado.',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'O tipo <strong>int</strong> armazena números inteiros de -2 bilhões a +2 bilhões. Para contar inimigos, munição e vidas.',
      q:'Qual tipo usar para armazenar o número de balas?',
      hint:'Balas são sempre números inteiros',
      opts:[
        {t:'string', ok:false},
        {t:'bool', ok:false},
        {t:'int', ok:true},
        {t:'double', ok:false},
      ],
      exp:'"int" para inteiros. 15 balas = int. 15.5 balas não existe. Use int para contagens e índices.',
    },

    // Q4 — MC
    {
      type:'mc',
      bubble:'O tipo <strong>double</strong> armazena números decimais com alta precisão. Para vida em porcentagem, coordenadas, porcentagens.',
      q:'Qual tipo usar para armazenar 73.5% de HP?',
      hint:'Tem casas decimais',
      opts:[
        {t:'int', ok:false},
        {t:'double', ok:true},
        {t:'bool', ok:false},
        {t:'char', ok:false},
      ],
      exp:'"double" para decimais. 73.5 não cabe em int (seria truncado para 73). Use double para valores com precisão decimal.',
    },

    // Q5 — MC
    {
      type:'mc',
      bubble:'O tipo <strong>bool</strong> armazena apenas dois valores: <code>true</code> (verdadeiro) ou <code>false</code> (falso). Perfeito para estados.',
      q:'Qual tipo usar para armazenar se a missão foi concluída?',
      hint:'É sim ou não',
      opts:[
        {t:'int (0 ou 1)', ok:false},
        {t:'string ("sim" ou "não")', ok:false},
        {t:'bool', ok:true},
        {t:'double', ok:false},
      ],
      exp:'"bool" para verdadeiro/falso. bool missaoConcluida = true. É mais eficiente e expressivo que usar 0/1 ou "sim"/"não".',
    },

    // Q6 — MC
    {
      type:'mc',
      bubble:'O tipo <strong>string</strong> armazena texto de qualquer tamanho. Nomes, mensagens, códigos — qualquer sequência de caracteres.',
      q:'Qual tipo usar para armazenar o nome do agente?',
      hint:'Texto é sempre...',
      opts:[
        {t:'char', ok:false},
        {t:'string', ok:true},
        {t:'int', ok:false},
        {t:'bool', ok:false},
      ],
      exp:'"string" para textos. "Leon S. Kennedy" é uma string. Use aspas duplas para literais de string em C#.',
    },

    // Q7 — MC
    {
      type:'mc',
      bubble:'O tipo <strong>char</strong> armazena um único caractere. Use aspas simples: <code>\'A\'</code>. Para letras, dígitos e símbolos individuais.',
      q:'Como declarar corretamente um char em C#?',
      hint:'Um caractere, aspas simples',
      opts:[
        {t:'char letra = "A";', ok:false},
        {t:"char letra = 'A';", ok:true},
        {t:'char letra = A;', ok:false},
        {t:'char letra = 65;', ok:false},
      ],
      exp:"char usa aspas simples: char c = 'A'. String usa aspas duplas: string s = \"A\". A diferença importa em C#.",
    },

    // Q8 — Fill
    {
      type:'fill',
      bubble:'Declaramos uma variável com: <code>tipo nomeDaVariavel = valorInicial;</code>',
      code:`<span class="kw">_______</span> municao = <span class="nm">30</span>;`,
      q:'Qual tipo declarar para armazenar 30 balas?',
      hint:'Número inteiro',
      ans:'int',
      exp:'"int municao = 30" declara uma variável inteira chamada "municao" com valor inicial 30.',
    },

    // Q9 — Fill
    {
      type:'fill',
      bubble:'A palavra-chave <code>var</code> permite que o compilador <strong>infira</strong> o tipo automaticamente pelo valor atribuído.',
      code:`<span class="kw">var</span> hp = <span class="nm">100</span>; <span class="cm">// compilador infere que hp é _______</span>`,
      q:'Qual tipo o compilador infere para var hp = 100?',
      hint:'100 é um número inteiro',
      ans:'int',
      exp:'"var" infere o tipo: var hp = 100 → hp é int. var nome = "Leon" → nome é string. O tipo ainda é estático.',
    },

    // Q10 — Fill
    {
      type:'fill',
      bubble:'Constantes são declaradas com <code>const</code> e seu valor não pode ser alterado após a declaração.',
      code:`<span class="kw">const int</span> MAX_HP = <span class="nm">_______</span>;`,
      q:'Qual seria um valor lógico para o HP máximo de um personagem?',
      hint:'Valor máximo padrão em jogos',
      ans:'100',
      exp:'"const int MAX_HP = 100" cria uma constante imutável. Tentar reatribuir causa erro de compilação.',
    },

    // Q11 — Fill
    {
      type:'fill',
      bubble:'Para concatenar strings com o operador <code>+</code>, ambos os lados precisam ser strings.',
      code:`<span class="kw">string</span> agente = <span class="st">"Agente: "</span> <span class="kw">+</span> <span class="st">"_______"</span>;`,
      q:'Qual nome colocar para formar "Agente: Leon"?',
      hint:'O protagonista da missão',
      ans:'Leon',
      exp:'"Agente: " + "Leon" = "Agente: Leon". Concatenação une strings. Com variável: "Agente: " + nome.',
    },

    // Q12 — Fill
    {
      type:'fill',
      bubble:'O sufixo <code>f</code> indica que o literal é do tipo <code>float</code>. Sem ele, o compilador assume double.',
      code:`<span class="kw">float</span> velocidade = <span class="nm">9.8</span><span class="kw">_______</span>;`,
      q:'Qual sufixo indica que o número é float e não double?',
      hint:'Inicial de float',
      ans:'f',
      exp:'"9.8f" é float. "9.8" (sem sufixo) é double. float tem menos precisão mas usa menos memória.',
    },

    // Q13 — Code
    {
      type:'code',
      bubble:'Identifique os tipos das variáveis neste inventário.',
      code:`<span class="kw">int</span> municao = <span class="nm">45</span>;\n<span class="kw">double</span> hpAtual = <span class="nm">73.5</span>;\n<span class="kw">bool</span> temEscopeta = <span class="kw">true</span>;\n<span class="kw">string</span> nomeArma = <span class="st">"Pistola Matilda"</span>;\nConsole.<span class="mt">WriteLine</span>(nomeArma);`,
      q:'O que será exibido?',
      hint:'Qual variável é passada para WriteLine?',
      opts:[
        {t:'Pistola Matilda', ok:true},
        {t:'nomeArma', ok:false},
        {t:'string', ok:false},
        {t:'45', ok:false},
      ],
      exp:'"nomeArma" contém "Pistola Matilda". Console.WriteLine(nomeArma) imprime o valor da variável.',
    },

    // Q14 — Code
    {
      type:'code',
      bubble:'Tente identificar o erro de tipo neste código.',
      code:`<span class="kw">int</span> vidas = <span class="nm">3</span>;\nvidas = <span class="st">"três"</span>; <span class="cm">// ← problema aqui</span>\nConsole.<span class="mt">WriteLine</span>(vidas);`,
      q:'Por que este código NÃO compila?',
      hint:'Tipo int não aceita string',
      opts:[
        {t:'O nome "vidas" é reservado', ok:false},
        {t:'Não se pode reatribuir variáveis', ok:false},
        {t:'Tentativa de atribuir string a uma variável int', ok:true},
        {t:'Console.WriteLine está errado', ok:false},
      ],
      exp:'C# é fortemente tipado: int só aceita inteiros. Atribuir "três" (string) a int causa erro de compilação.',
    },

    // Q15 — Code
    {
      type:'code',
      bubble:'Veja a diferença entre int e double numa divisão.',
      code:`<span class="kw">int</span> a = <span class="nm">7</span>, b = <span class="nm">2</span>;\n<span class="kw">int</span> divInt = a / b;\n<span class="kw">double</span> divDouble = (<span class="kw">double</span>)a / b;\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"{divInt} | {divDouble}"</span>);`,
      q:'O que será exibido?',
      hint:'Divisão inteira trunca; cast para double preserva decimal',
      opts:[
        {t:'3 | 3', ok:false},
        {t:'3 | 3.5', ok:true},
        {t:'3.5 | 3.5', ok:false},
        {t:'3 | 3,5', ok:false},
      ],
      exp:'a/b (int/int) = 3 (trunca). (double)a/b = 3.5 (o cast força divisão decimal). Resultado: "3 | 3.5".',
    },

    // Q16 — Code
    {
      type:'code',
      bubble:'Veja como strings e números interagem com o operador +.',
      code:`<span class="kw">string</span> s = <span class="st">"Kills: "</span>;\n<span class="kw">int</span> n = <span class="nm">42</span>;\nConsole.<span class="mt">WriteLine</span>(s + n);`,
      q:'O que será exibido?',
      hint:'string + int = ?',
      opts:[
        {t:'Kills: 42', ok:true},
        {t:'Erro de compilação', ok:false},
        {t:'"Kills: " + 42', ok:false},
        {t:'Kills42', ok:false},
      ],
      exp:'"string + int" converte int para string automaticamente e concatena. Resultado: "Kills: 42".',
    },

    // Q17 — Code
    {
      type:'code',
      bubble:'O tipo bool em ação — verificando o estado do personagem.',
      code:`<span class="kw">bool</span> vivo = <span class="kw">true</span>;\n<span class="kw">bool</span> temArma = <span class="kw">false</span>;\n<span class="kw">bool</span> podeLutar = vivo && temArma;\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"Pode lutar: {podeLutar}"</span>);`,
      q:'O que será exibido?',
      hint:'true AND false = ?',
      opts:[
        {t:'Pode lutar: True', ok:false},
        {t:'Pode lutar: False', ok:true},
        {t:'Pode lutar: true', ok:false},
        {t:'Pode lutar: 0', ok:false},
      ],
      exp:'"vivo && temArma" = true && false = false. Em C#, bool.ToString() = "True" ou "False" (com maiúscula). Saída: "Pode lutar: False".',
    },

    // Q18 — Code
    {
      type:'code',
      bubble:'🏆 DESAFIO CHEFE — Complete o inventário completo do Leon.',
      code:`<span class="kw">string</span> agente = <span class="st">"Leon S. Kennedy"</span>;\n<span class="kw">int</span> municao = <span class="nm">45</span>;\n<span class="kw">double</span> hp = <span class="nm">100.0</span>;\n<span class="kw">bool</span> temFaca = <span class="kw">true</span>;\n<span class="kw">char</span> grau = <span class="st">'A'</span>;\nConsole.<span class="mt">WriteLine</span>(\n  <span class="st">$"{agente} | HP:{hp} | Munição:{municao} | Faca:{temFaca} | Grau:{grau}"</span>\n);`,
      q:'O que será exibido?',
      hint:'Todos os valores interpolados na string',
      opts:[
        {t:'Leon S. Kennedy | HP:100 | Munição:45 | Faca:true | Grau:A', ok:false},
        {t:'Leon S. Kennedy | HP:100 | Munição:45 | Faca:True | Grau:A', ok:true},
        {t:'agente | HP:hp | Munição:municao | Faca:temFaca | Grau:grau', ok:false},
        {t:'Erro — tipos mistos na interpolação', ok:false},
      ],
      exp:'Interpolação converte cada variável para string. bool vira "True" (maiúsculo). double 100.0 vira "100". Grau \'A\' vira "A".',
    },

  ]
};
