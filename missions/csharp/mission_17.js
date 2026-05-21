const MISSION_17 = {
  id: 17,
  title: "MISSÃO 18 — CIFRA DA ALDEIA",
  icon: '🔒',
  free: false,
  desc: "Os cultistas se comunicam em código. Para decifrar suas mensagens, você precisa de técnicas avançadas de manipulação de strings.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'<strong>StringBuilder</strong> é mutável e eficiente para concatenar muitas strings. Evita criar dezenas de objetos string temporários.',
      q:'Quando usar StringBuilder em vez de string + string?',
      hint:'Quando há muitas concatenações',
      opts:[
        {t:'Sempre — StringBuilder é sempre melhor', ok:false},
        {t:'Quando há muitas concatenações em loop — evita desperdício de memória', ok:true},
        {t:'Apenas para strings maiores que 100 chars', ok:false},
        {t:'StringBuilder não existe em C#', ok:false},
      ],
      exp:'Em loop com 1000 concatenações, "s += x" cria 1000 objetos string. StringBuilder reutiliza um buffer — muito mais eficiente.',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'<code>string.Format()</code> e interpolação <code>$""</code> são formas de formatar strings com valores dinâmicos.',
      q:'Qual é a forma mais moderna de formatar strings em C#?',
      hint:'Versão mais recente',
      opts:[
        {t:'string.Format("Olá {0}", nome)', ok:false},
        {t:'$"Olá {nome}" — interpolação', ok:true},
        {t:'"Olá" + nome', ok:false},
        {t:'Console.Write("Olá", nome)', ok:false},
      ],
      exp:'Interpolação com $ é a forma moderna (C# 6+). $"Olá {nome}" é mais legível que string.Format("Olá {0}", nome).',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'Strings podem ser comparadas ignorando maiúsculas/minúsculas com <code>StringComparison.OrdinalIgnoreCase</code>.',
      q:'Como comparar "Leon" e "leon" como iguais?',
      hint:'Ignore o case',
      opts:[
        {t:'"Leon" == "leon"', ok:false},
        {t:'"Leon".Equals("leon", StringComparison.OrdinalIgnoreCase)', ok:true},
        {t:'"Leon".ToUpper() == "leon".ToUpper()', ok:true},
        {t:'Ambas b e c funcionam', ok:true},
      ],
      exp:'Tanto Equals com StringComparison quanto converter ambas com ToUpper/ToLower funcionam. Equals com StringComparison é mais explícito.',
    },

    // Q4 — Fill
    {
      type:'fill',
      bubble:'<code>PadLeft(n)</code> adiciona espaços à esquerda até completar n caracteres. Útil para alinhar texto.',
      code:`<span class="kw">string</span> num = <span class="st">"42"</span>.<span class="mt">_______</span>(<span class="nm">5</span>); <span class="cm">// "   42"</span>`,
      q:'Qual método preenche com espaços à esquerda?',
      hint:'Pad à esquerda',
      ans:'PadLeft',
      exp:'"PadLeft(5)" preenche com espaços à esquerda até 5 chars: "   42". "PadRight(5)" preenche à direita: "42   ".',
    },

    // Q5 — Fill
    {
      type:'fill',
      bubble:'<code>StartsWith()</code> e <code>EndsWith()</code> verificam se a string começa ou termina com um texto específico.',
      code:`<span class="kw">bool</span> codigo = serial.<span class="mt">_______</span>(<span class="st">"RE4"</span>);`,
      q:'Qual método verifica se a string começa com "RE4"?',
      hint:'Começa com em inglês',
      ans:'StartsWith',
      exp:'"StartsWith("RE4")" = true se começar com "RE4". "EndsWith(".txt")" = true se terminar com ".txt".',
    },

    // Q6 — Fill
    {
      type:'fill',
      bubble:'Para inverter uma string, convertemos para array de chars, invertemos e recriamos a string.',
      code:`<span class="kw">char</span>[] chars = nome.<span class="mt">ToCharArray</span>();\nArray.<span class="mt">_______</span>(chars);\n<span class="kw">string</span> invertida = <span class="kw">new string</span>(chars);`,
      q:'Qual método inverte o array de chars?',
      hint:'Inverter o array',
      ans:'Reverse',
      exp:'"Array.Reverse(chars)" inverte o array in-place. "new string(chars)" reconstrói a string dos chars invertidos.',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'StringBuilder usa <code>Append()</code> para adicionar texto e <code>ToString()</code> para obter o resultado.',
      code:`<span class="kw">var</span> sb = <span class="kw">new</span> StringBuilder();\nsb.<span class="mt">_______</span>(<span class="st">"Missão: "</span>);\nsb.<span class="mt">Append</span>(<span class="st">"Concluída"</span>);`,
      q:'Qual método adiciona texto ao StringBuilder?',
      hint:'Acrescentar em inglês',
      ans:'Append',
      exp:'"sb.Append(texto)" adiciona ao final. "sb.AppendLine(texto)" adiciona com quebra de linha. "sb.ToString()" converte para string.',
    },

    // Q8 — Code
    {
      type:'code',
      bubble:'StringBuilder em loop — construindo relatório.',
      code:`<span class="kw">var</span> sb = <span class="kw">new</span> StringBuilder();\n<span class="kw">string</span>[] kills = {<span class="st">"Ganado"</span>,<span class="st">"Cultista"</span>,<span class="st">"Regenerador"</span>};\n<span class="kw">foreach</span>(<span class="kw">var</span> k <span class="kw">in</span> kills)\n    sb.<span class="mt">AppendLine</span>(<span class="st">$"✓ {k}"</span>);\nConsole.<span class="mt">Write</span>(sb.<span class="mt">ToString</span>());`,
      q:'Quantas linhas serão exibidas?',
      hint:'Um item, uma linha',
      opts:[
        {t:'1', ok:false},{t:'2', ok:false},
        {t:'3', ok:true},{t:'0', ok:false},
      ],
      exp:'AppendLine adiciona cada kill em uma linha. ToString() converte tudo. 3 elementos = 3 linhas.',
    },

    // Q9 — Code
    {
      type:'code',
      bubble:'Verificando se uma string é palíndromo.',
      code:`<span class="kw">static bool</span> <span class="mt">Palindromo</span>(<span class="kw">string</span> s)\n{\n    <span class="kw">char</span>[] c = s.<span class="mt">ToCharArray</span>();\n    Array.<span class="mt">Reverse</span>(c);\n    <span class="kw">return</span> s == <span class="kw">new string</span>(c);\n}\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Palindromo</span>(<span class="st">"arara"</span>));`,
      q:'O que será exibido?',
      hint:'"arara" ao contrário é...',
      opts:[
        {t:'False', ok:false},{t:'arara', ok:false},
        {t:'True', ok:true},{t:'Erro', ok:false},
      ],
      exp:'"arara" invertida = "arara". s == new string(c) → "arara" == "arara" = True.',
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'Formatação de número com PadLeft para placar.',
      code:`<span class="kw">int</span>[] scores = {<span class="nm">100</span>, <span class="nm">2500</span>, <span class="nm">45</span>};\n<span class="kw">foreach</span> (<span class="kw">int</span> s <span class="kw">in</span> scores)\n    Console.<span class="mt">WriteLine</span>(s.<span class="mt">ToString</span>().<span class="mt">PadLeft</span>(<span class="nm">6</span>));`,
      q:'Como os números aparecerão alinhados?',
      hint:'PadLeft(6) alinha à direita com 6 caracteres',
      opts:[
        {t:'100, 2500, 45 (sem alinhamento)', ok:false},
        {t:'Todos alinhados à direita com espaços à esquerda', ok:true},
        {t:'Todos com zeros à esquerda', ok:false},
        {t:'Erro de compilação', ok:false},
      ],
      exp:'PadLeft(6): "   100", "  2500", "    45". Todos com 6 chars, alinhados à direita — perfeito para placar.',
    },

    // Q11 — Code
    {
      type:'code',
      bubble:'Contando vogais com LINQ em string.',
      code:`<span class="kw">string</span> nome = <span class="st">"Leon S. Kennedy"</span>;\n<span class="kw">int</span> vogais = nome.<span class="mt">Count</span>(c => <span class="st">"aeiouAEIOU"</span>.<span class="mt">Contains</span>(c));\nConsole.<span class="mt">WriteLine</span>(vogais);`,
      q:'Quantas vogais tem "Leon S. Kennedy"?',
      hint:'e, o, e, n, e, d - conte apenas as vogais',
      opts:[
        {t:'4', ok:false},{t:'3', ok:false},
        {t:'5', ok:true},{t:'6', ok:false},
      ],
      exp:'"Leon S. Kennedy": e, o, e (Ken), e (ned) = e, o, e, e, ... Vogais: e(L-e-o-n), o, K-e-n-n-e-d-y = e,o,e,e = 5 vogais.',
    },

  ]
};
