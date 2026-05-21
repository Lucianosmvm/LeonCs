// ══════════════════════════════════════════════════════
// ACT I — A VILA
// MISSÃO 06 — TIPOS DE MUNIÇÃO
// Tema: Tipos int, string, bool, double (aprofundamento)
// Tipo: Normal (11 questões) | Progressão: 4 MC → 4 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_05 = {
  id: 5,
  title: "MISSÃO 06 — TIPOS DE MUNIÇÃO",
  icon: '🔫',
  free: true,
  desc: "Cada arma usa um tipo diferente de munição. Na programação, cada problema exige o tipo certo de dado. Usar o tipo errado pode ser fatal.",
  objs: [
    "Entender os tipos numéricos int, long, float, double, decimal",
    "Saber quando usar cada tipo para evitar erros e imprecisões",
    "Aprender a converter entre tipos e lidar com limites e overflows"
  ],
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'O tipo <strong>long</strong> é como int, mas suporta números muito maiores — até 9 quintilhões. Use para IDs grandes, timestamps.',
      q:'Quando devo usar long em vez de int?',
      hint:'Quando o número pode ser muito grande',
      opts:[
        {t:'Quando o número tem decimais', ok:false},
        {t:'Quando o valor pode ultrapassar 2 bilhões', ok:true},
        {t:'Quando o número é negativo', ok:false},
        {t:'long e int são intercambiáveis', ok:false},
      ],
      exp:'"int" vai até ~2.1 bilhões. "long" vai até ~9.2 quintilhões. Use long para população mundial, IDs de banco de dados, timestamps.',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'<strong>Overflow</strong> ocorre quando um valor ultrapassa o limite do tipo. int.MaxValue + 1 = int.MinValue (volta do começo).',
      q:'O que acontece ao fazer int.MaxValue + 1 em C# sem checked?',
      hint:'Estoura e volta para o início',
      opts:[
        {t:'Lança uma exceção automaticamente', ok:false},
        {t:'O valor faz overflow e fica negativo (int.MinValue)', ok:true},
        {t:'O compilador impede a operação', ok:false},
        {t:'O resultado vira long automaticamente', ok:false},
      ],
      exp:'Overflow silencioso: int.MaxValue (2.147.483.647) + 1 = -2.147.483.648 (int.MinValue). Use "checked" para lançar exceção.',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'<strong>decimal</strong> é mais preciso que double para valores monetários. Double pode ter imprecisões com centavos.',
      q:'Para armazenar o preço de uma arma (R$ 299.99), qual tipo é mais adequado?',
      hint:'Precisa de centavos exatos',
      opts:[
        {t:'int', ok:false},
        {t:'double', ok:false},
        {t:'decimal', ok:true},
        {t:'float', ok:false},
      ],
      exp:'"decimal" é ideal para dinheiro — 28 dígitos de precisão. Double pode resultar em 0.1 + 0.2 = 0.30000000000000004.',
    },

    // Q4 — MC
    {
      type:'mc',
      bubble:'<strong>Casting</strong> é converter explicitamente de um tipo para outro. Nem toda conversão é automática.',
      q:'Por que precisamos de cast ao converter double para int?',
      hint:'Há perda de informação',
      opts:[
        {t:'Por questões de performance', ok:false},
        {t:'Porque a conversão descarta a parte decimal — há perda de dados', ok:true},
        {t:'C# não permite essa conversão', ok:false},
        {t:'Para aumentar a precisão', ok:false},
      ],
      exp:'double→int perde decimais: (int)3.9 = 3. O cast explícito confirma que você sabe da perda. Sem cast, erro de compilação.',
    },

    // Q5 — Fill
    {
      type:'fill',
      bubble:'Para converter double para int explicitamente, usamos cast com o tipo entre parênteses.',
      code:`<span class="kw">double</span> hp = <span class="nm">73.9</span>;\n<span class="kw">int</span> hpInteiro = (<span class="kw">_______</span>)hp; <span class="cm">// resultado: 73</span>`,
      q:'Qual tipo vai no cast para converter double para int?',
      hint:'O tipo de destino entre parênteses',
      ans:'int',
      exp:'"(int)73.9" trunca para 73 (não arredonda). Cast explicito necessário pois há perda de dados.',
    },

    // Q6 — Fill
    {
      type:'fill',
      bubble:'O método <code>ToString()</code> converte qualquer valor para sua representação em string.',
      code:`<span class="kw">int</span> kills = <span class="nm">42</span>;\n<span class="kw">string</span> texto = kills.<span class="mt">_______</span>(); <span class="cm">// "42"</span>`,
      q:'Qual método converte um valor para string?',
      hint:'Para string em inglês',
      ans:'ToString',
      exp:'"kills.ToString()" retorna "42". Você pode formatar: kills.ToString("D5") = "00042". Todo tipo em C# tem ToString().',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'<code>string.IsNullOrEmpty()</code> verifica se uma string é null ou vazia — muito útil antes de processar texto.',
      code:`<span class="kw">if</span> (<span class="kw">string</span>.<span class="mt">_______</span>(nome))\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Nome inválido!"</span>);`,
      q:'Qual método verifica se a string é null ou vazia?',
      hint:'IsNullOr...?',
      ans:'IsNullOrEmpty',
      exp:'"string.IsNullOrEmpty(s)" retorna true se s == null ou s == "". "IsNullOrWhiteSpace" também verifica espaços.',
    },

    // Q8 — Fill
    {
      type:'fill',
      bubble:'O sufixo <code>m</code> (ou <code>M</code>) indica que um literal numérico é do tipo decimal.',
      code:`<span class="kw">decimal</span> preco = <span class="nm">299.99</span><span class="kw">_______</span>;`,
      q:'Qual sufixo indica que o número é do tipo decimal?',
      hint:'Inicial de "money" (dinheiro)',
      ans:'m',
      exp:'"299.99m" é decimal. Sem o sufixo, seria double e precisaria de cast. Use "m" para valores monetários.',
    },

    // Q9 — Code
    {
      type:'code',
      bubble:'Veja as propriedades MaxValue e MinValue dos tipos numéricos.',
      code:`Console.<span class="mt">WriteLine</span>(<span class="kw">int</span>.<span class="mt">MaxValue</span>);\nConsole.<span class="mt">WriteLine</span>(<span class="kw">int</span>.<span class="mt">MinValue</span>);`,
      q:'O que será exibido?',
      hint:'int vai de -2 bilhões a +2 bilhões (aproximadamente)',
      opts:[
        {t:'2147483647 e -2147483648', ok:true},
        {t:'9999999999 e -9999999999', ok:false},
        {t:'Infinity e -Infinity', ok:false},
        {t:'32767 e -32768', ok:false},
      ],
      exp:'int.MaxValue = 2.147.483.647 (~2.1 bilhões). int.MinValue = -2.147.483.648. Faixa de 32 bits com sinal.',
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'Conversão segura com TryParse — não lança exceção se o valor for inválido.',
      code:`<span class="kw">string</span> entrada = <span class="st">"abc"</span>;\n<span class="kw">bool</span> ok = <span class="kw">int</span>.<span class="mt">TryParse</span>(entrada, <span class="kw">out int</span> numero);\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"ok={ok}, numero={numero}"</span>);`,
      q:'O que será exibido?',
      hint:'"abc" não é um número válido',
      opts:[
        {t:'ok=True, numero=0', ok:false},
        {t:'ok=False, numero=0', ok:true},
        {t:'Exceção FormatException', ok:false},
        {t:'ok=False, numero=abc', ok:false},
      ],
      exp:'TryParse falha silenciosamente: ok=false, numero=0 (valor padrão de int). Mais seguro que Parse para entradas do usuário.',
    },

    // Q11 — Code
    {
      type:'code',
      bubble:'Veja a diferença de precisão entre float e double.',
      code:`<span class="kw">float</span> f = <span class="nm">0.1f</span> + <span class="nm">0.2f</span>;\n<span class="kw">double</span> d = <span class="nm">0.1</span> + <span class="nm">0.2</span>;\nConsole.<span class="mt">WriteLine</span>(f);\nConsole.<span class="mt">WriteLine</span>(d);`,
      q:'Os resultados serão exatamente 0.3?',
      hint:'Ponto flutuante tem imprecisões',
      opts:[
        {t:'Sim, ambos mostram 0.3', ok:false},
        {t:'Não, ambos têm imprecisão de ponto flutuante', ok:true},
        {t:'Sim, double é exato; só float tem erro', ok:false},
        {t:'Lança exceção', ok:false},
      ],
      exp:'float e double usam binário para representar decimais — 0.1 não tem representação exata. Para valores exatos use decimal.',
    },

  ]
};
