const MISSION_16 = {
  id: 16,
  title: "MISSÃO 17 — COMUNICAÇÃO",
  icon: '🏰',
  free: false,
  desc: "Mensagens codificadas, relatórios de campo, transmissões de rádio — tudo é texto. Dominar os métodos de string é essencial para processar qualquer informação.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'Strings em C# são <strong>imutáveis</strong>. Qualquer operação que parece modificar uma string cria uma nova na memória.',
      q:'Por que strings são imutáveis em C#?',
      hint:'Segurança e performance (caching)',
      opts:[
        {t:'Para dificultar a programação', ok:false},
        {t:'Por segurança e otimização — strings idênticas podem compartilhar memória', ok:true},
        {t:'É uma limitação do compilador', ok:false},
        {t:'Strings podem ser modificadas com ref', ok:false},
      ],
      exp:'Imutabilidade garante thread-safety e permite string interning (mesmos literais compartilham memória). Para mutabilidade, use StringBuilder.',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'<code>string.Length</code> retorna o número de caracteres. Espaços e símbolos também contam.',
      q:'Qual o Length de "Leon"?',
      hint:'Conte as letras',
      opts:[
        {t:'3', ok:false},{t:'5', ok:false},
        {t:'4', ok:true},{t:'0', ok:false},
      ],
      exp:'"Leon" tem 4 caracteres: L-e-o-n. Length conta todos os caracteres, incluindo espaços e símbolos.',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'<code>==</code> para strings compara o conteúdo, não a referência (diferente de Java). Usa comparação de valor.',
      q:'Como comparar se duas strings têm o mesmo conteúdo em C#?',
      hint:'Mais simples que você pensa',
      opts:[
        {t:'str1.Equals(str2) — == não funciona para strings', ok:false},
        {t:'str1 == str2 — compara conteúdo diretamente', ok:true},
        {t:'str1.CompareTo(str2) == 0', ok:false},
        {t:'str1.ReferenceEquals(str2)', ok:false},
      ],
      exp:'Em C#, "==" para strings compara conteúdo. "Leon" == "Leon" = true. Diferente de Java onde == compara referência.',
    },

    // Q4 — Fill
    {
      type:'fill',
      bubble:'<code>ToUpper()</code> converte toda a string para maiúsculas. Útil para comparações case-insensitive.',
      code:`<span class="kw">string</span> nome = <span class="st">"leon"</span>.<span class="mt">_______</span>(); <span class="cm">// "LEON"</span>`,
      q:'Qual método converte para maiúsculas?',
      hint:'To Upper Case',
      ans:'ToUpper',
      exp:'"ToUpper()" = maiúsculas. "ToLower()" = minúsculas. Para comparação: nome.ToLower() == "leon" — ignora o case.',
    },

    // Q5 — Fill
    {
      type:'fill',
      bubble:'<code>Trim()</code> remove espaços em branco do início e do fim da string.',
      code:`<span class="kw">string</span> limpa = <span class="st">"  Leon  "</span>.<span class="mt">_______</span>(); <span class="cm">// "Leon"</span>`,
      q:'Qual método remove espaços das extremidades?',
      hint:'Aparar em inglês',
      ans:'Trim',
      exp:'"Trim()" remove espaços (e outros whitespace) do início e fim. "TrimStart()" só do início. "TrimEnd()" só do fim.',
    },

    // Q6 — Fill
    {
      type:'fill',
      bubble:'<code>Contains()</code> verifica se uma string contém outra como substring.',
      code:`<span class="kw">bool</span> temArma = arsenal.<span class="mt">_______</span>(<span class="st">"Pistola"</span>);`,
      q:'Qual método verifica se a string contém uma substring?',
      hint:'Contém?',
      ans:'Contains',
      exp:'"Contains(sub)" retorna true se "sub" aparecer em qualquer posição. Case-sensitive por padrão.',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'<code>Replace(antigo, novo)</code> substitui todas as ocorrências de uma substring por outra.',
      code:`<span class="kw">string</span> msg = <span class="st">"Ganado Ganado Ganado"</span>.\n    <span class="mt">_______</span>(<span class="st">"Ganado"</span>, <span class="st">"Eliminado"</span>);`,
      q:'Qual método substitui substrings?',
      hint:'Trocar em inglês',
      ans:'Replace',
      exp:'"Replace(old, new)" substitui TODAS as ocorrências. Retorna nova string (imutável). Resultado: "Eliminado Eliminado Eliminado".',
    },

    // Q8 — Code
    {
      type:'code',
      bubble:'Métodos de string em cadeia (method chaining).',
      code:`<span class="kw">string</span> input = <span class="st">"  Leon Kennedy  "</span>;\n<span class="kw">string</span> resultado = input.<span class="mt">Trim</span>().<span class="mt">ToUpper</span>().\n    <span class="mt">Replace</span>(<span class="st">" "</span>, <span class="st">"_"</span>);\nConsole.<span class="mt">WriteLine</span>(resultado);`,
      q:'O que será exibido?',
      hint:'Trim → maiúsculas → troca espaço por _',
      opts:[
        {t:'Leon Kennedy', ok:false},
        {t:'LEON_KENNEDY', ok:true},
        {t:'leon_kennedy', ok:false},
        {t:'  LEON KENNEDY  ', ok:false},
      ],
      exp:'Trim() → "Leon Kennedy". ToUpper() → "LEON KENNEDY". Replace(" ","_") → "LEON_KENNEDY".',
    },

    // Q9 — Code
    {
      type:'code',
      bubble:'Split para dividir uma string em partes.',
      code:`<span class="kw">string</span> missao = <span class="st">"Infiltrar,Resgatar,Escapar"</span>;\n<span class="kw">string</span>[] etapas = missao.<span class="mt">Split</span>(<span class="st">','</span>);\nConsole.<span class="mt">WriteLine</span>(etapas.<span class="mt">Length</span>);\nConsole.<span class="mt">WriteLine</span>(etapas[<span class="nm">1</span>]);`,
      q:'O que será exibido?',
      hint:'Split divide pela vírgula em 3 partes',
      opts:[
        {t:'3 e Infiltrar', ok:false},
        {t:'3 e Resgatar', ok:true},
        {t:'2 e Resgatar', ok:false},
        {t:'Infiltrar,Resgatar,Escapar', ok:false},
      ],
      exp:'Split(",") cria array: ["Infiltrar","Resgatar","Escapar"]. Length = 3. etapas[1] = "Resgatar".',
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'Substring para extrair parte de uma string.',
      code:`<span class="kw">string</span> codigo = <span class="st">"RE4-LEON-DSO"</span>;\n<span class="kw">string</span> agente = codigo.<span class="mt">Substring</span>(<span class="nm">4</span>, <span class="nm">4</span>);\nConsole.<span class="mt">WriteLine</span>(agente);`,
      q:'O que será exibido?',
      hint:'Substring(startIndex, length) — começa no índice 4 e pega 4 chars',
      opts:[
        {t:'RE4-', ok:false},{t:'LEON', ok:true},
        {t:'-DSO', ok:false},{t:'LEON-', ok:false},
      ],
      exp:'"RE4-LEON-DSO": índice 4 = \'L\'. Pega 4 chars: L-E-O-N = "LEON". Substring(startIndex, length).',
    },

    // Q11 — Code
    {
      type:'code',
      bubble:'IndexOf para encontrar a posição de uma substring.',
      code:`<span class="kw">string</span> msg = <span class="st">"Missão: Resgatar Ashley"</span>;\n<span class="kw">int</span> pos = msg.<span class="mt">IndexOf</span>(<span class="st">"Ashley"</span>);\nConsole.<span class="mt">WriteLine</span>(pos);`,
      q:'Qual é a posição de início de "Ashley"?',
      hint:'Conta a partir do índice 0',
      opts:[
        {t:'17', ok:true},{t:'6', ok:false},
        {t:'0', ok:false},{t:'-1', ok:false},
      ],
      exp:'"Missão: Resgatar Ashley" — "Ashley" começa no índice 17. IndexOf retorna -1 se não encontrar.',
    },

  ]
};
