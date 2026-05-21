const MISSION_22 = {
  id: 22,
  title: "MISSÃO 23 — SALA DO TRONO",
  icon: '👑',
  free: false,
  desc: "Na sala do trono, cada cultista tem um papel específico — identificados por nome, mapeados para suas funções. O Dictionary é o mapa de poder desta sala.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'<code>TryGetValue(chave, out valor)</code> é o padrão mais seguro para acessar Dictionary — não lança exceção se a chave não existe.',
      q:'Por que preferir TryGetValue() a dic[chave]?',
      hint:'Segurança primeiro',
      opts:[
        {t:'TryGetValue é mais rápido', ok:false},
        {t:'TryGetValue não lança KeyNotFoundException se a chave não existir', ok:true},
        {t:'dic[chave] não funciona com string', ok:false},
        {t:'Não há diferença prática', ok:false},
      ],
      exp:'"dic[chave]" lança KeyNotFoundException se a chave não existir. "TryGetValue" retorna false sem exceção. Preferível para código robusto.',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'Para iterar um Dictionary, podemos usar foreach com <code>KeyValuePair&lt;K,V&gt;</code> ou desestruturar com <code>var (k, v)</code>.',
      q:'Qual sintaxe moderna para desestruturar um par de Dictionary no foreach?',
      hint:'C# 7+ permite desestruturação',
      opts:[
        {t:'foreach (KeyValuePair<string,int> par in dic)', ok:false},
        {t:'foreach (var (chave, valor) in dic)', ok:true},
        {t:'for (int i = 0; i < dic.Count; i++)', ok:false},
        {t:'dic.ForEach((k,v) => {})', ok:false},
      ],
      exp:'"foreach (var (chave, valor) in dic)" desestrutura diretamente. Mais limpo que acessar par.Key e par.Value separadamente.',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'<code>Dictionary.GetValueOrDefault(chave, padrão)</code> retorna o valor ou um padrão se a chave não existir.',
      q:'O que GetValueOrDefault("Lança", 0) retorna se "Lança" não estiver no Dictionary?',
      hint:'O segundo parâmetro é o valor padrão',
      opts:[
        {t:'Lança exceção', ok:false},
        {t:'null', ok:false},
        {t:'0 — o valor padrão especificado', ok:true},
        {t:'-1', ok:false},
      ],
      exp:'"GetValueOrDefault(key, default)" retorna o valor se a chave existir, ou o padrão (0) se não existir. Sem exceção.',
    },

    // Q4 — MC
    {
      type:'mc',
      bubble:'Dicionários podem ser usados para contar frequências — um padrão clássico em algoritmos.',
      q:'Para contar quantas vezes cada arma aparece numa lista, qual estrutura usar?',
      hint:'Chave = nome da arma, valor = contagem',
      opts:[
        {t:'List<string>', ok:false},
        {t:'int[]', ok:false},
        {t:'Dictionary<string, int>', ok:true},
        {t:'Stack<string>', ok:false},
      ],
      exp:'"Dictionary<string, int>" mapeia arma → contagem. Padrão: if (dic.ContainsKey(k)) dic[k]++; else dic[k] = 1.',
    },

    // Q5 — Fill
    {
      type:'fill',
      bubble:'Para remover uma entrada do Dictionary pela chave:',
      code:`arsenal.<span class="mt">_______</span>(<span class="st">"Faca"</span>); <span class="cm">// remove a entrada "Faca"</span>`,
      q:'Qual método remove uma entrada do Dictionary pela chave?',
      hint:'Remover em inglês',
      ans:'Remove',
      exp:'"Remove(chave)" remove a entrada e retorna true se a chave existia, false se não. O elemento sumiu do dicionário.',
    },

    // Q6 — Fill
    {
      type:'fill',
      bubble:'Para obter apenas os valores de um Dictionary sem as chaves:',
      code:`<span class="kw">foreach</span> (<span class="kw">var</span> dano <span class="kw">in</span> arsenal.<span class="mt">_______</span>)\n    Console.<span class="mt">WriteLine</span>(dano);`,
      q:'Qual propriedade retorna somente os valores do Dictionary?',
      hint:'Valores em inglês',
      ans:'Values',
      exp:'"dic.Values" retorna uma coleção de todos os valores. "dic.Keys" retorna todas as chaves. Ambos são iteráveis.',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'TryGetValue retorna bool e define o valor via parâmetro out.',
      code:`<span class="kw">if</span> (arsenal.<span class="mt">TryGetValue</span>(<span class="st">"Pistola"</span>, <span class="kw">out int</span> _______)))\n    Console.<span class="mt">WriteLine</span>(<span class="st">$"Pistola: {balas} balas"</span>);`,
      q:'Qual nome dar à variável out que recebe o valor?',
      hint:'Quantidade de balas',
      ans:'balas',
      exp:'"TryGetValue("Pistola", out int balas)" — se a chave existir, balas recebe o valor e retorna true.',
    },

    // Q8 — Fill
    {
      type:'fill',
      bubble:'Para criar um Dictionary com initializer syntax (inicialização com chaves):',
      code:`<span class="kw">var</span> ranks = <span class="kw">new</span> Dictionary&lt;<span class="kw">string</span>, <span class="kw">int</span>&gt;\n{\n    { <span class="st">"S"</span>, <span class="nm">_______</span> },\n    { <span class="st">"A"</span>, <span class="nm">2</span> }\n};`,
      q:'Qual valor colocar para que "S" seja o rank 1 (melhor)?',
      hint:'O topo da hierarquia',
      ans:'1',
      exp:'{ "S", 1 } cria a entrada com chave "S" e valor 1. Sintaxe alternativa moderna: ["S"] = 1.',
    },

    // Q9 — Code
    {
      type:'code',
      bubble:'TryGetValue protegendo o acesso.',
      code:`<span class="kw">var</span> hps = <span class="kw">new</span> Dictionary&lt;<span class="kw">string</span>,<span class="kw">int</span>&gt;\n    { [<span class="st">"Leon"</span>] = <span class="nm">80</span>, [<span class="st">"Ashley"</span>] = <span class="nm">60</span> };\n\n<span class="kw">if</span> (hps.<span class="mt">TryGetValue</span>(<span class="st">"Ada"</span>, <span class="kw">out int</span> hp))\n    Console.<span class="mt">WriteLine</span>(<span class="st">$"Ada: {hp}"</span>);\n<span class="kw">else</span>\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Ada não encontrada"</span>);`,
      q:'O que será exibido?',
      hint:'"Ada" está no Dictionary?',
      opts:[
        {t:'Ada: 0', ok:false},
        {t:'Ada não encontrada', ok:true},
        {t:'Exceção KeyNotFoundException', ok:false},
        {t:'Ada: 80', ok:false},
      ],
      exp:'"Ada" não é chave no Dictionary. TryGetValue retorna false → cai no else → "Ada não encontrada". Sem exceção.',
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'Contando frequências com Dictionary — padrão clássico.',
      code:`<span class="kw">string</span>[] kills = {<span class="st">"Ganado"</span>,<span class="st">"Cultista"</span>,<span class="st">"Ganado"</span>,<span class="st">"Ganado"</span>,<span class="st">"Cultista"</span>};\n<span class="kw">var</span> contagem = <span class="kw">new</span> Dictionary&lt;<span class="kw">string</span>,<span class="kw">int</span>&gt;();\n<span class="kw">foreach</span> (<span class="kw">var</span> k <span class="kw">in</span> kills)\n    contagem[k] = contagem.<span class="mt">GetValueOrDefault</span>(k, <span class="nm">0</span>) + <span class="nm">1</span>;\nConsole.<span class="mt">WriteLine</span>(contagem[<span class="st">"Ganado"</span>]);`,
      q:'Quantos Ganados foram contados?',
      hint:'Aparecem 3 vezes no array',
      opts:[
        {t:'1', ok:false},{t:'2', ok:false},
        {t:'3', ok:true},{t:'5', ok:false},
      ],
      exp:'"Ganado" aparece 3 vezes. GetValueOrDefault retorna 0 se não existir, incrementa +1 a cada ocorrência. contagem["Ganado"] = 3.',
    },

    // Q11 — Code
    {
      type:'code',
      bubble:'Invertendo um Dictionary (swap chave/valor).',
      code:`<span class="kw">var</span> original = <span class="kw">new</span> Dictionary&lt;<span class="kw">string</span>,<span class="kw">int</span>&gt;\n    { [<span class="st">"Leon"</span>]=<span class="nm">1</span>, [<span class="st">"Ada"</span>]=<span class="nm">2</span>, [<span class="st">"Ashley"</span>]=<span class="nm">3</span> };\n<span class="kw">var</span> invertido = <span class="kw">new</span> Dictionary&lt;<span class="kw">int</span>,<span class="kw">string</span>&gt;();\n<span class="kw">foreach</span> (<span class="kw">var</span> (k,v) <span class="kw">in</span> original)\n    invertido[v] = k;\nConsole.<span class="mt">WriteLine</span>(invertido[<span class="nm">2</span>]);`,
      q:'O que será exibido?',
      hint:'Chave 2 no dicionário invertido',
      opts:[
        {t:'Leon', ok:false},{t:'Ashley', ok:false},
        {t:'Ada', ok:true},{t:'2', ok:false},
      ],
      exp:'original: Leon→1, Ada→2, Ashley→3. Invertido: 1→Leon, 2→Ada, 3→Ashley. invertido[2] = "Ada".',
    },

    // Q12 — Code
    {
      type:'code',
      bubble:'Dictionary como tabela de despacho (dispatch table) — substituindo switch.',
      code:`<span class="kw">var</span> acoes = <span class="kw">new</span> Dictionary&lt;<span class="kw">string</span>, Action&gt;\n{\n    [<span class="st">"atacar"</span>]    = () => Console.<span class="mt">WriteLine</span>(<span class="st">"Bang!"</span>),\n    [<span class="st">"recarregar"</span>] = () => Console.<span class="mt">WriteLine</span>(<span class="st">"Clique!"</span>),\n    [<span class="st">"fugir"</span>]     = () => Console.<span class="mt">WriteLine</span>(<span class="st">"Correndo!"</span>)\n};\n<span class="kw">string</span> cmd = <span class="st">"recarregar"</span>;\nacoes[cmd]();`,
      q:'O que será exibido?',
      hint:'O comando é "recarregar"',
      opts:[
        {t:'Bang!', ok:false},{t:'Correndo!', ok:false},
        {t:'Clique!', ok:true},{t:'Erro', ok:false},
      ],
      exp:'acoes["recarregar"] retorna a lambda que imprime "Clique!". A "()" no final a executa. Padrão dispatch table — substitui switch/case.',
    },

  ]
};
