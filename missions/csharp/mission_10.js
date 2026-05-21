// ══════════════════════════════════════════════════════
// MISSÃO 11 — RONDA NOTURNA | Loop for
// Tipo: Normal (12 questões) | 4 MC → 4 Fill → 4 Code
// ══════════════════════════════════════════════════════

const MISSION_10 = {
  id: 10,
  title: "MISSÃO 11 — RONDA NOTURNA",
  icon: '🌙',
  free: false,
  desc: "A ronda é precisa: começa no portão, passa por cada ponto e termina na base. O for é o loop dos contadores — controle total sobre início, fim e passo.",
  objs: [
    "Entender a estrutura do for: inicialização, condição, incremento.",
    "Saber quando usar for vs while.",
  ],
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'O loop <strong>for</strong> tem três partes: inicialização, condição e incremento. Tudo na mesma linha.',
      q:'Qual é a ordem correta das partes do for?',
      hint:'Init ; condição ; incremento',
      opts: [
        {t:'incremento ; init ; condição', ok:false},
        {t:'init ; condição ; incremento', ok:true},
        {t:'init ; incremento ; condição', ok:false},
        {t:'condição ; init ; incremento', ok:false},
      ],
      exp:'"for (init; condição; incremento)". Exemplo: for (int i = 0; i < 10; i++). Leia: "de 0, enquanto menor que 10, incrementando."',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'O for é ideal quando você sabe <strong>exatamente</strong> quantas vezes o loop deve executar. O while é melhor para condições dinâmicas.',
      q:'Para imprimir os números de 1 a 100, qual loop é mais adequado?',
      hint:'Número fixo de iterações',
      opts: [
        {t:'for — número de iterações conhecido', ok:true},
        {t:'Qualquer um é igualmente adequado', ok:false},
        {t:'do-while — sempre executa ao menos uma vez', ok:false},
        {t:'while — mais flexível', ok:false},
      ],
      exp:'"for" quando você sabe quantas vezes. 1 a 100 = 100 iterações exatas. while para "enquanto não encontrar X".',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'O incremento do for pode ser qualquer expressão: i++, i--, i+=2, i*=2. Você controla o passo.',
      q:'Para percorrer apenas os índices pares (0, 2, 4...) de um array, qual incremento usar?',
      hint:'Pule de 2 em 2',
      opts: [
        {t:'i+=2', ok:true},{t:'i%2', ok:false},
        {t:'i*=2', ok:false},{t:'i++', ok:false},
      ],
      exp:'"i+=2" avança o índice de 2 em 2: 0, 2, 4, 6... Para de 3 em 3: i+=3. Para trás: i-- ou i-=2.',
    },

    // Q4 — MC
    {
      type:'mc',
      bubble:'Um <strong>for aninhado</strong> é um for dentro de outro. O loop interno completa todas suas iterações para cada iteração do externo.',
      q:'Um for externo com 3 iterações e um interno com 4 iterações: quantas vezes o interno executa ao total?',
      hint:'Multiplique',
      opts: [
        {t:'12', ok:true},
        {t:'3', ok:false},
        {t:'7', ok:false},
        {t:'4', ok:false},
      ],
      exp:'3 × 4 = 12. Para cada uma das 3 iterações do externo, o interno roda 4 vezes. Total: 12 execuções.',
    },

    // Q5 — Fill
    {
      type:'fill',
      bubble:'O for clássico para percorrer um array de 0 até Length-1.',
      code:`<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i < arr.<span class="mt">_______</span>; i++)`,
      q:'Qual propriedade retorna o tamanho de um array?',
      hint:'Comprimento em inglês',
      ans:'Length',
      exp:'"arr.Length" retorna o número de elementos. O loop vai de 0 até Length-1, cobrindo todos os índices válidos.',
    },

    // Q6 — Fill
    {
      type:'fill',
      bubble:'Para percorrer ao contrário (do último para o primeiro), inicializamos com Length-1 e decrementamos.',
      code:`<span class="kw">for</span> (<span class="kw">int</span> i = arr.<span class="mt">Length</span> - <span class="nm">1</span>; i >= <span class="nm">0</span>; i<span class="kw">_______</span>)`,
      q:'Qual operador decrementa i para percorrer ao contrário?',
      hint:'Diminui 1',
      ans:'--',
      exp:'"i--" decrementa a cada iteração. Começa no último índice (Length-1) e vai até 0, percorrendo ao contrário.',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'Nos for aninhados, as variáveis contadoras devem ter nomes diferentes. Convenção: i, j, k.',
      code:`<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i < <span class="nm">3</span>; i++)\n    <span class="kw">for</span> (<span class="kw">int</span> <span class="kw">_______</span> = <span class="nm">0</span>; j < <span class="nm">3</span>; j++)`,
      q:'Qual nome convencional usar para o segundo contador?',
      hint:'Letra após i no alfabeto',
      ans:'j',
      exp:'Convenção: i → j → k para loops aninhados. Nomes diferentes evitam conflito. i, j, k são universalmente reconhecidos.',
    },

    // Q8 — Fill
    {
      type:'fill',
      bubble:'Para somar todos elementos de um array com for, somamos arr[i] a cada iteração.',
      code:`<span class="kw">int</span> soma = <span class="nm">0</span>;\n<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i < nums.<span class="mt">Length</span>; i++)\n    soma <span class="kw">+=</span> nums[<span class="kw">_______</span>];`,
      q:'Qual variável usamos para acessar cada elemento do array?',
      hint:'O contador do for',
      ans:'i',
      exp:'"nums[i]" acessa o elemento no índice i. A cada iteração, i avança e pegamos o próximo elemento.',
    },

    // Q9 — Code
    {
      type:'code',
      bubble:'Quantas vezes este for executa e o que imprime?',
      code:`<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">1</span>; i <= <span class="nm">5</span>; i++)\n    Console.<span class="mt">Write</span>(i * i + <span class="st">" "</span>);`,
      q:'O que será exibido?',
      hint:'Quadrados de 1 a 5',
      opts: [
        {t:'1 4 9 16 25 36', ok:false},
        {t:'1 2 3 4 5', ok:false},
        {t:'2 4 6 8 10', ok:false},
        {t:'1 4 9 16 25', ok:true},
      ],
      exp:'i*i: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25. O for vai de 1 a 5 (i<=5). Exibe: "1 4 9 16 25".',
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'For aninhado para criar uma grade — padrão de xadrez.',
      code:`<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">1</span>; i <= <span class="nm">3</span>; i++)\n{\n    <span class="kw">for</span> (<span class="kw">int</span> j = <span class="nm">1</span>; j <= <span class="nm">3</span>; j++)\n        Console.<span class="mt">Write</span>(<span class="st">$"{i},{j} "</span>);\n    Console.<span class="mt">WriteLine</span>();\n}`,
      q:'Quantas linhas serão exibidas?',
      hint:'O loop externo controla as linhas',
      opts: [
        {t:'3', ok:true},
        {t:'6', ok:false},
        {t:'9', ok:false},
        {t:'1', ok:false},
      ],
      exp:'O loop externo (i) roda 3 vezes. Cada iteração do externo = 1 linha (com 3 pares i,j). Total: 3 linhas.',
    },

    // Q11 — Code
    {
      type:'code',
      bubble:'For com incremento diferente de 1.',
      code:`<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i <= <span class="nm">10</span>; i += <span class="nm">2</span>)\n    Console.<span class="mt">Write</span>(i + <span class="st">" "</span>);`,
      q:'O que será exibido?',
      hint:'De 0 a 10, pulando de 2 em 2',
      opts: [
        {t:'0 2 4 6 8', ok:false},
        {t:'1 3 5 7 9', ok:false},
        {t:'2 4 6 8 10', ok:false},
        {t:'0 2 4 6 8 10', ok:true},
      ],
      exp:'"i<=10" inclui o 10. "i+=2" pula de 2 em 2. Exibe: "0 2 4 6 8 10". Os números pares de 0 a 10.',
    },

    // Q12 — Code
    {
      type:'code',
      bubble:'Encontrando o maior elemento de um array com for.',
      code:`<span class="kw">int</span>[] danos = {<span class="nm">15</span>, <span class="nm">42</span>, <span class="nm">8</span>, <span class="nm">67</span>, <span class="nm">23</span>};\n<span class="kw">int</span> maior = danos[<span class="nm">0</span>];\n<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">1</span>; i < danos.<span class="mt">Length</span>; i++)\n    <span class="kw">if</span> (danos[i] > maior)\n        maior = danos[i];\nConsole.<span class="mt">WriteLine</span>(maior);`,
      q:'Qual o maior dano do array?',
      hint:'Qual o maior entre 15, 42, 8, 67, 23?',
      opts: [
        {t:'15', ok:false},
        {t:'23', ok:false},
        {t:'67', ok:true},
        {t:'42', ok:false},
      ],
      exp:'maior começa em 15. 42>15→maior=42. 8<42. 67>42→maior=67. 23<67. Resultado: 67.',
    },

  ]
};
