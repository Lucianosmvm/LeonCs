// ══════════════════════════════════════════════════════
// ACT I — A VILA
// MISSÃO 04 — SINAL DE RÁDIO
// Tema: Entrada e saída (Console)
// Tipo: Normal (12 questões) | Progressão: 5 MC → 3 Fill → 4 Code
// ══════════════════════════════════════════════════════

const MISSION_03 = {
  id: 3,
  title: "MISSÃO 04 — SINAL DE RÁDIO",
  icon: '📻',
  free: true,
  desc: "Você capturou um rádio inimigo. Para se comunicar com o HQ e receber ordens, precisa dominar os canais de entrada e saída de informação.",
  objs: [
    "Entender como exibir mensagens no console",
    "Aprender a ler entradas do usuário",
    "Usar formatação e estilo para destacar informações"
  ],
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'<code>Console.WriteLine()</code> exibe texto no console e pula uma linha ao final. É a saída mais básica em C#.',
      q:'Qual a diferença entre Console.WriteLine() e Console.Write()?',
      hint:'Um pula linha, outro não',
      opts:[
        {t:'Não há diferença', ok:false},
        {t:'Write é mais rápido', ok:false},
        {t:'WriteLine aceita apenas números', ok:false},
        {t:'WriteLine pula uma linha ao final; Write não pula', ok:true},
      ],
      exp:'WriteLine = escreve + pula linha. Write = apenas escreve. Para imprimir na mesma linha, use Write várias vezes.',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'<code>Console.ReadLine()</code> lê uma linha digitada pelo usuário e retorna como <strong>string</strong>.',
      q:'Qual tipo de dado Console.ReadLine() sempre retorna?',
      hint:'Tudo que vem do teclado é texto',
      opts:[
        {t:'int', ok:false},
        {t:'bool', ok:false},
        {t:'string', ok:true},
        {t:'double', ok:false},
      ],
      exp:'ReadLine sempre retorna string. Se precisar de número, converta: int.Parse() ou Convert.ToInt32().',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'<strong>Interpolação de string</strong> com <code>$"texto {variavel}"</code> permite incluir variáveis diretamente no texto.',
      q:'Como incluir o valor de uma variável dentro de uma string?',
      hint:'Use $ e chaves',
      opts:[
        {t:'Console.WriteLine($"Olá {nome}")', ok:true},
        {t:'Console.WriteLine("Olá" + nome)', ok:false},
        {t:'Console.WriteLine(nome)', ok:false},
        {t:'Ambas as primeiras opções funcionam', ok:true},
      ],
      exp:'$"Olá {nome}" e "Olá" + nome funcionam. A interpolação é mais legível. O $ antes das aspas ativa o modo interpolação.',
    },

    // Q4 — MC
    {
      type:'mc',
      bubble:'Para converter uma string em número inteiro, usamos <code>int.Parse()</code> ou <code>Convert.ToInt32()</code>.',
      q:'Por que precisamos converter o retorno de ReadLine() para int?',
      hint:'ReadLine retorna string, operações matemáticas precisam de...',
      opts:[
        {t:'Para economizar memória', ok:false},
        {t:'Porque operações matemáticas exigem tipos numéricos', ok:true},
        {t:'Para deixar o código mais rápido', ok:false},
        {t:'Não precisamos converter', ok:false},
      ],
      exp:'Você não pode somar "5" + "3" como números (vira "53"). Converta para int primeiro: int.Parse("5") + int.Parse("3") = 8.',
    },

    // Q5 — MC
    {
      type:'mc',
      bubble:'<code>Console.Clear()</code> limpa o console. Útil para criar menus e interfaces mais limpas no terminal.',
      q:'Qual método limpa todo o conteúdo exibido no console?',
      hint:'Clear em inglês = limpar',
      opts:[
        {t:'Console.Delete()', ok:false},
        {t:'Console.Reset()', ok:false},
        {t:'Console.Clear()', ok:true},
        {t:'Console.Erase()', ok:false},
      ],
      exp:'"Console.Clear()" apaga tudo que foi escrito no console. Ideal para interfaces de menu interativas.',
    },

    // Q6 — Fill
    {
      type:'fill',
      bubble:'Para ler um número inteiro digitado pelo usuário, lemos com ReadLine e convertemos com int.Parse.',
      code:`<span class="kw">string</span> entrada = Console.<span class="mt">ReadLine</span>();\n<span class="kw">int</span> numero = <span class="kw">int</span>.<span class="mt">_______</span>(entrada);`,
      q:'Qual método converte string para int?',
      hint:'Analisar/interpretar em inglês',
      ans:'Parse',
      exp:'"int.Parse(texto)" converte string para int. Lança exceção se o texto não for um número válido.',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'<code>Console.ReadKey()</code> aguarda o usuário pressionar qualquer tecla. Útil para pausar a execução.',
      code:`Console.<span class="mt">WriteLine</span>(<span class="st">"Pressione qualquer tecla para continuar..."</span>);\nConsole.<span class="mt">_______</span>();`,
      q:'Qual método aguarda uma tecla ser pressionada?',
      hint:'Lê uma tecla',
      ans:'ReadKey',
      exp:'"Console.ReadKey()" pausa até o usuário pressionar uma tecla. O parâmetro "true" oculta a tecla: Console.ReadKey(true).',
    },

    // Q8 — Fill
    {
      type:'fill',
      bubble:'Para exibir texto colorido no console, definimos a cor com <code>Console.ForegroundColor</code>.',
      code:`Console.<span class="mt">ForegroundColor</span> = ConsoleColor.<span class="mt">_______</span>;\nConsole.<span class="mt">WriteLine</span>(<span class="st">"ALERTA: Inimigos próximos!"</span>);`,
      q:'Qual cor de ConsoleColor indica perigo/alerta?',
      hint:'A cor do sangue',
      ans:'Red',
      exp:'ConsoleColor.Red define texto vermelho. Outras: Green (sucesso), Yellow (aviso), Cyan (info). Redefina com ResetColor().',
    },

    // Q9 — Code
    {
      type:'code',
      bubble:'Veja o fluxo completo de entrada e saída.',
      code:`Console.<span class="mt">Write</span>(<span class="st">"Digite seu nome de agente: "</span>);\n<span class="kw">string</span> nome = Console.<span class="mt">ReadLine</span>();\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"Missão iniciada, agente {nome}!"</span>);`,
      q:'Se o usuário digitar "Leon", o que será exibido?',
      hint:'O nome é inserido na string interpolada',
      opts:[
        {t:'Digite seu nome de agente: Leon', ok:false},
        {t:'Missão iniciada, agente Leon!', ok:true},
        {t:'Missão iniciada, agente {nome}!', ok:false},
        {t:'nome', ok:false},
      ],
      exp:'"nome" recebe "Leon". A interpolação $"...{nome}..." substitui {nome} pelo valor "Leon". Saída: "Missão iniciada, agente Leon!"',
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'O código lê dois números e soma.',
      code:`Console.<span class="mt">Write</span>(<span class="st">"Primeiro número: "</span>);\n<span class="kw">int</span> a = <span class="kw">int</span>.<span class="mt">Parse</span>(Console.<span class="mt">ReadLine</span>());\nConsole.<span class="mt">Write</span>(<span class="st">"Segundo número: "</span>);\n<span class="kw">int</span> b = <span class="kw">int</span>.<span class="mt">Parse</span>(Console.<span class="mt">ReadLine</span>());\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"Soma: {a + b}"</span>);`,
      q:'Se o usuário digitar 8 e depois 5, o que será exibido na última linha?',
      hint:'8 + 5 = ?',
      opts:[
        {t:'Soma: 13', ok:true},
        {t:'Soma: {a + b}', ok:false},
        {t:'Soma: 85', ok:false},
        {t:'Soma: a + b', ok:false},
      ],
      exp:'int.Parse converte "8" para 8 e "5" para 5. a + b = 13. $"Soma: {a + b}" exibe "Soma: 13".',
    },

    // Q11 — Code
    {
      type:'code',
      bubble:'Analise o uso de Console.Write (sem pular linha) vs Console.WriteLine.',
      code:`Console.<span class="mt">Write</span>(<span class="st">"Leon "</span>);\nConsole.<span class="mt">Write</span>(<span class="st">"S. "</span>);\nConsole.<span class="mt">WriteLine</span>(<span class="st">"Kennedy"</span>);\nConsole.<span class="mt">WriteLine</span>(<span class="st">"Agente da DSO"</span>);`,
      q:'Quantas linhas serão exibidas no console?',
      hint:'Write não pula linha, WriteLine pula',
      opts:[
        {t:'4 linhas', ok:false},
        {t:'1 linha', ok:false},
        {t:'2 linhas', ok:true},
        {t:'3 linhas', ok:false},
      ],
      exp:'Os três primeiros Write/WriteLine ficam na mesma linha ("Leon S. Kennedy"). O último WriteLine cria a segunda linha.',
    },

    // Q12 — Code
    {
      type:'code',
      bubble:'Veja o uso de Console.ForegroundColor para dar estilo à saída.',
      code:`Console.<span class="mt">ForegroundColor</span> = ConsoleColor.<span class="mt">Green</span>;\nConsole.<span class="mt">WriteLine</span>(<span class="st">"[OK] Missão concluída!"</span>);\nConsole.<span class="mt">ResetColor</span>();\nConsole.<span class="mt">WriteLine</span>(<span class="st">"Retornando à base."</span>);`,
      q:'Qual linha será exibida em verde?',
      hint:'A cor é definida antes e resetada depois',
      opts:[
        {t:'Ambas as linhas em verde', ok:false},
        {t:'Apenas "[OK] Missão concluída!"', ok:true},
        {t:'Apenas "Retornando à base."', ok:false},
        {t:'Nenhuma — precisa de biblioteca extra', ok:false},
      ],
      exp:'ForegroundColor.Green define verde. Após ResetColor(), a cor volta ao padrão. Só a primeira linha sai verde.',
    },

  ]
};
