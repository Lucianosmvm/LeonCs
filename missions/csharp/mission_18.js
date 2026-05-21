const MISSION_18 = {
  id: 18,
  title: "MISSÃO 19 — DIÁRIO DE ASHLEY",
  icon: '🧪',
  free: false,
  desc: "No diário de Ashley, cada letra é uma pista. Caracteres individuais e conversões entre tipos revelam segredos escondidos nas mensagens codificadas.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'O tipo <strong>char</strong> representa um único caractere Unicode. Internamente, é um número de 16 bits.',
      q:'Por que podemos fazer aritmética com char em C#?',
      hint:'Char é um número por baixo',
      opts:[
        {t:'Por um bug histórico do C#', ok:false},
        {t:'Porque char armazena o código numérico Unicode do caractere', ok:true},
        {t:'Chars são strings de tamanho 1', ok:false},
        {t:'Não podemos fazer aritmética com char', ok:false},
      ],
      exp:"char 'A' = código 65. 'A' + 1 = 66 = 'B'. Isso permite percorrer o alfabeto: for (char c = 'A'; c <= 'Z'; c++).",
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'<code>char.IsLetter()</code>, <code>char.IsDigit()</code>, <code>char.IsWhiteSpace()</code> permitem classificar caracteres.',
      q:'Como verificar se um caractere é uma letra?',
      hint:'Método estático da struct char',
      opts:[
        {t:'c >= "a" && c <= "z"', ok:false},
        {t:'char.IsLetter(c)', ok:true},
        {t:'c.IsAlpha()', ok:false},
        {t:'c.GetType() == char', ok:false},
      ],
      exp:'"char.IsLetter(c)" retorna true para a-z e A-Z e letras de outros idiomas. Mais correto que comparar com a-z.',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'<code>Convert</code> vs <code>Parse</code>: Convert.ToInt32(null) retorna 0; int.Parse(null) lança exceção.',
      q:'Qual método é mais seguro para converter um valor que pode ser null?',
      hint:'Um tolera null, o outro explode',
      opts:[
        {t:'int.Parse() — mais rápido', ok:false},
        {t:'Convert.ToInt32() — trata null como 0', ok:true},
        {t:'São equivalentes para null', ok:false},
        {t:'Nenhum — use sempre TryParse', ok:false},
      ],
      exp:'"Convert.ToInt32(null)" = 0. "int.Parse(null)" lança ArgumentNullException. Para máxima segurança, use TryParse.',
    },

    // Q4 — Fill
    {
      type:'fill',
      bubble:'Para converter um char para seu código numérico, fazemos cast para int.',
      code:`<span class="kw">char</span> c = <span class="st">'A'</span>;\n<span class="kw">int</span> codigo = (<span class="kw">_______</span>)c; <span class="cm">// 65</span>`,
      q:'Qual tipo usar no cast para obter o código numérico de um char?',
      hint:'Número inteiro',
      ans:'int',
      exp:"(int)'A' = 65. (int)'a' = 97. Tabela ASCII: A=65, Z=90, a=97, z=122, '0'=48, '9'=57.",
    },

    // Q5 — Fill
    {
      type:'fill',
      bubble:'Para converter um código numérico de volta para char, fazemos cast para char.',
      code:`<span class="kw">int</span> codigo = <span class="nm">66</span>;\n<span class="kw">char</span> letra = (<span class="kw">_______</span>)codigo; <span class="cm">// 'B'</span>`,
      q:'Qual tipo usar no cast para converter número em char?',
      hint:'Caractere',
      ans:'char',
      exp:"(char)66 = 'B'. (char)65 = 'A'. Isso permite criar cifras: (char)('A' + 3) = 'D' (cifra de César).",
    },

    // Q6 — Fill
    {
      type:'fill',
      bubble:'<code>char.ToUpper(c)</code> converte um char para maiúscula.',
      code:`<span class="kw">char</span> maiuscula = <span class="kw">char</span>.<span class="mt">_______</span>(<span class="st">'a'</span>); <span class="cm">// 'A'</span>`,
      q:'Qual método converte um char para maiúscula?',
      hint:'To Upper para char',
      ans:'ToUpper',
      exp:'"char.ToUpper(\'a\')" = \'A\'. "char.ToLower(\'A\')" = \'a\'. Diferente de string: string.ToUpper() vs char.ToUpper(c).',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'<code>int.TryParse()</code> tenta converter sem lançar exceção, retornando bool indicando sucesso.',
      code:`<span class="kw">if</span> (<span class="kw">int</span>.<span class="mt">_______</span>(entrada, <span class="kw">out int</span> valor))\n    Console.<span class="mt">WriteLine</span>(<span class="st">$"Valor: {valor}"</span>);`,
      q:'Qual método tenta converter sem lançar exceção?',
      hint:'Try + Parse',
      ans:'TryParse',
      exp:'"TryParse" retorna bool e define o valor via "out". Se falhar, retorna false e valor = 0. Mais seguro para entrada do usuário.',
    },

    // Q8 — Code
    {
      type:'code',
      bubble:'Percorrendo o alfabeto com aritmética de char.',
      code:`<span class="kw">for</span> (<span class="kw">char</span> c = <span class="st">'A'</span>; c <= <span class="st">'E'</span>; c++)\n    Console.<span class="mt">Write</span>(c + <span class="st">" "</span>);`,
      q:'O que será exibido?',
      hint:"'A' a 'E' incrementando",
      opts:[
        {t:'65 66 67 68 69', ok:false},
        {t:'A B C D E', ok:true},
        {t:'ABCDE', ok:false},
        {t:'A A A A A', ok:false},
      ],
      exp:"c vai de 'A' (65) até 'E' (69). c++ incrementa o código. Console.Write(char) exibe a letra: A B C D E.",
    },

    // Q9 — Code
    {
      type:'code',
      bubble:'Cifra de César simples — desloca cada letra.',
      code:`<span class="kw">string</span> msg = <span class="st">"ACE"</span>;\n<span class="kw">int</span> chave = <span class="nm">2</span>;\n<span class="kw">foreach</span> (<span class="kw">char</span> c <span class="kw">in</span> msg)\n    Console.<span class="mt">Write</span>((<span class="kw">char</span>)(c + chave));`,
      q:'Qual será a mensagem cifrada?',
      hint:"A+2='C', C+2='E', E+2='G'",
      opts:[
        {t:'ACE', ok:false},{t:'BDF', ok:false},
        {t:'CEG', ok:true},{t:'246', ok:false},
      ],
      exp:"A(65)+2=67='C'. C(67)+2=69='E'. E(69)+2=71='G'. Resultado: \"CEG\". Cifra de César com chave 2.",
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'Contando letras maiúsculas numa string.',
      code:`<span class="kw">string</span> texto = <span class="st">"Leon S Kennedy"</span>;\n<span class="kw">int</span> maiusculas = <span class="nm">0</span>;\n<span class="kw">foreach</span> (<span class="kw">char</span> c <span class="kw">in</span> texto)\n    <span class="kw">if</span> (<span class="kw">char</span>.<span class="mt">IsUpper</span>(c)) maiusculas++;\nConsole.<span class="mt">WriteLine</span>(maiusculas);`,
      q:'Quantas maiúsculas tem "Leon S Kennedy"?',
      hint:'Conte: L, S, K',
      opts:[
        {t:'2', ok:false},{t:'4', ok:false},
        {t:'3', ok:true},{t:'1', ok:false},
      ],
      exp:'"Leon S Kennedy": maiúsculas = L, S, K = 3. char.IsUpper() detecta corretamente maiúsculas.',
    },

  ]
};
