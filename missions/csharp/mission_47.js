const MISSION_47 = {
  id: 47,
  title: "MISSÃO 48 — O RELÓGIO DO CASTELO",
  icon: '⏰',
  free: false,
  desc: "O grande relógio controla cada missão do castelo. DateTime e TimeSpan são as ferramentas do C# para trabalhar com datas, horas, durações e cálculos temporais.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<code>DateTime.Now</code> retorna data e hora local. <code>DateTime.UtcNow</code> retorna UTC. Para APIs e persistência, prefira UTC.',
      q: 'Por que usar DateTime.UtcNow em vez de DateTime.Now para salvar timestamps no banco?',
      hint: 'Fusos horários e consistência',
      opts: [
        { t: 'UtcNow é mais rápido', ok: false },
        { t: 'UTC é universal — não sofre com fusos horários ou horário de verão', ok: true },
        { t: 'DateTime.Now não existe em .NET 6+', ok: false },
        { t: 'Não há diferença prática', ok: false },
      ],
      exp: 'UTC não varia por região nem horário de verão. Timestamps em UTC garantem consistência em sistemas distribuídos e ao exibir para usuários em fusos diferentes.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>TimeSpan</code> representa uma duração (diferença entre datas). Pode ser criado com <code>TimeSpan.FromSeconds()</code>, <code>FromMinutes()</code>, etc.',
      q: 'O que o resultado de "dataFim - dataInicio" produz?',
      hint: 'Subtração de dois DateTime',
      opts: [
        { t: 'Um DateTime', ok: false },
        { t: 'Um TimeSpan representando a duração entre as duas datas', ok: true },
        { t: 'Um long de milissegundos', ok: false },
        { t: 'Erro de compilação', ok: false },
      ],
      exp: 'Subtrair dois DateTime produz um TimeSpan. "ts.TotalSeconds", "ts.TotalMinutes", "ts.Days" acessam a duração em diferentes unidades.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>DateTime.Parse()</code> converte string → DateTime. <code>TryParse()</code> é a versão segura que não lança exceção.',
      q: 'O que DateTime.Parse("não-é-data") faz?',
      hint: 'Parse em string inválida',
      opts: [
        { t: 'Retorna DateTime.MinValue', ok: false },
        { t: 'Retorna null', ok: false },
        { t: 'Lança FormatException', ok: true },
        { t: 'Retorna DateTime.Now', ok: false },
      ],
      exp: '"Parse" lança FormatException para string inválida. Use "TryParse(str, out DateTime dt)" para tratar sem exceção.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>DateTime.ToString("formato")</code> formata a data. Padrões comuns: "yyyy-MM-dd", "dd/MM/yyyy", "HH:mm:ss".',
      q: 'O que "DateTime.Now.ToString("yyyy-MM-dd")" retorna?',
      hint: 'Ano-Mês-Dia no formato ISO',
      opts: [
        { t: 'A data completa com hora', ok: false },
        { t: 'Data no formato ISO 8601: "2025-03-15" por exemplo', ok: true },
        { t: 'Um número Unix timestamp', ok: false },
        { t: 'Erro — formato inválido', ok: false },
      ],
      exp: '"yyyy-MM-dd" produz "2025-03-15". "dd/MM/yyyy" produz "15/03/2025". "HH:mm:ss" produz "14:30:00".',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Para criar um DateTime específico para 1º de janeiro de 2025:',
      code: `<span class="kw">var</span> inicio = <span class="kw">new</span> DateTime(<span class="nm">_______</span>, <span class="nm">1</span>, <span class="nm">1</span>);`,
      q: 'Qual o primeiro parâmetro do construtor DateTime (ano, mês, dia)?',
      hint: 'O ano que queremos',
      ans: '2025',
      exp: '"new DateTime(ano, mês, dia)" cria um DateTime específico. "new DateTime(2025, 1, 1)" = 1º de janeiro de 2025.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Para adicionar 7 dias a um DateTime:',
      code: `<span class="kw">var</span> prazo = DateTime.Now.<span class="mt">_______</span>(<span class="nm">7</span>);`,
      q: 'Qual método adiciona dias a um DateTime?',
      hint: 'Adicionar dias em inglês',
      ans: 'AddDays',
      exp: '"AddDays(7)" adiciona 7 dias. "AddMonths()", "AddHours()", "AddMinutes()" funcionam analogamente. DateTime é imutável — retorna novo valor.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Para calcular o total de segundos de um TimeSpan:',
      code: `<span class="kw">var</span> inicio = DateTime.Now;\n<span class="cm">// ... operação demorada ...</span>\n<span class="kw">double</span> segundos = (DateTime.Now - inicio).<span class="mt">_______</span>;`,
      q: 'Qual propriedade retorna o total de segundos de um TimeSpan?',
      hint: 'Total de segundos',
      ans: 'TotalSeconds',
      exp: '"TotalSeconds" retorna double com o total. "Seconds" retorna apenas os segundos da parte fracionária (0-59). Diferença importante!',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Para comparar se uma data é anterior a outra, use operadores de comparação normalmente:',
      code: `<span class="kw">if</span> (prazo <span class="kw">_______</span> DateTime.Now)\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Missão expirada!"</span>);`,
      q: 'Qual operador verifica se o prazo é anterior ao momento atual?',
      hint: 'Menor que',
      ans: '<',
      exp: '"prazo < DateTime.Now" verifica se prazo já passou. DateTime implementa IComparable — <, >, ==, != funcionam normalmente.',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Calculando duração de uma operação.',
      code: `<span class="kw">var</span> inicio = <span class="kw">new</span> DateTime(<span class="nm">2025</span>, <span class="nm">1</span>, <span class="nm">1</span>, <span class="nm">8</span>, <span class="nm">0</span>, <span class="nm">0</span>);\n<span class="kw">var</span> fim    = <span class="kw">new</span> DateTime(<span class="nm">2025</span>, <span class="nm">1</span>, <span class="nm">1</span>, <span class="nm">10</span>, <span class="nm">30</span>, <span class="nm">0</span>);\n<span class="kw">var</span> duracao = fim - inicio;\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"{duracao.Hours}h {duracao.Minutes}m"</span>);`,
      q: 'O que será exibido?',
      hint: '08:00 até 10:30 = quanto tempo?',
      opts: [
        { t: '2h 0m', ok: false },
        { t: '2h 30m', ok: true },
        { t: '10h 30m', ok: false },
        { t: '150h 0m', ok: false },
      ],
      exp: '10:30 - 08:00 = 2h30min. duracao.Hours = 2, duracao.Minutes = 30. Exibe "2h 30m".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'ToString formatando data para exibição.',
      code: `<span class="kw">var</span> missao = <span class="kw">new</span> DateTime(<span class="nm">2025</span>, <span class="nm">3</span>, <span class="nm">15</span>, <span class="nm">22</span>, <span class="nm">45</span>, <span class="nm">0</span>);\nConsole.<span class="mt">WriteLine</span>(missao.<span class="mt">ToString</span>(<span class="st">"dd/MM/yyyy HH:mm"</span>));\nConsole.<span class="mt">WriteLine</span>(missao.<span class="mt">DayOfWeek</span>);`,
      q: 'O que será exibido?',
      hint: '15 de março de 2025 às 22:45 — que dia da semana?',
      opts: [
        { t: '15/03/2025 22:45 e Saturday', ok: true },
        { t: '2025/03/15 22:45 e Saturday', ok: false },
        { t: '15/03/2025 22:45 e Sunday', ok: false },
        { t: '03/15/2025 22:45 e Friday', ok: false },
      ],
      exp: '"dd/MM/yyyy HH:mm" → "15/03/2025 22:45". 15/03/2025 é um sábado → DayOfWeek = Saturday.',
    },

    // Q11 — Code
    {
      type: 'code',
      bubble: 'AddDays e comparação de datas.',
      code: `<span class="kw">var</span> hoje   = <span class="kw">new</span> DateTime(<span class="nm">2025</span>, <span class="nm">3</span>, <span class="nm">10</span>);\n<span class="kw">var</span> prazo  = hoje.<span class="mt">AddDays</span>(<span class="nm">7</span>);\n<span class="kw">var</span> entrega = <span class="kw">new</span> DateTime(<span class="nm">2025</span>, <span class="nm">3</span>, <span class="nm">18</span>);\nConsole.<span class="mt">WriteLine</span>(entrega <= prazo ? <span class="st">"No prazo"</span> : <span class="st">"Atrasado"</span>);`,
      q: 'O que será exibido?',
      hint: 'Prazo = 10+7 = 17 de março. Entrega = 18',
      opts: [
        { t: 'No prazo', ok: false },
        { t: 'Atrasado', ok: true },
        { t: 'Erro', ok: false },
        { t: 'No prazo', ok: false },
      ],
      exp: 'prazo = 10/03 + 7 dias = 17/03. entrega = 18/03. 18/03 <= 17/03 = false → "Atrasado".',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'TimeSpan.FromMinutes e operações de duração.',
      code: `<span class="kw">var</span> sessao  = TimeSpan.<span class="mt">FromMinutes</span>(<span class="nm">90</span>);\n<span class="kw">var</span> intervalo = TimeSpan.<span class="mt">FromMinutes</span>(<span class="nm">15</span>);\n<span class="kw">var</span> total  = sessao + intervalo + sessao;\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"{total.TotalHours:F1}h"</span>);`,
      q: 'O que será exibido?',
      hint: '90 + 15 + 90 = 195 minutos = ? horas',
      opts: [
        { t: '3.0h', ok: false },
        { t: '3.3h', ok: true },
        { t: '3.5h', ok: false },
        { t: '195.0h', ok: false },
      ],
      exp: '90 + 15 + 90 = 195 minutos = 3.25 horas. Format "F1" arredonda para 1 casa: 3.3h.',
    },

  ]
};
