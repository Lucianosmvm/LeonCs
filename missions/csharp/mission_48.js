const MISSION_48 = {
  id: 48,
  title: "MISSÃO 49 — O DECODIFICADOR",
  icon: '🔐',
  free: false,
  desc: "O decodificador do castelo lê padrões cifrados nas paredes. Expressões Regulares são uma mini-linguagem para buscar, validar e extrair padrões em strings.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>Regex</strong> (Regular Expressions) é uma linguagem de padrões para strings. Em C#, a classe <code>Regex</code> fica em <code>System.Text.RegularExpressions</code>.',
      q: 'O que o padrão Regex "\\d+" significa?',
      hint: '\\d = dígito, + = um ou mais',
      opts: [
        { t: 'Uma letra qualquer', ok: false },
        { t: 'Um ou mais dígitos numéricos consecutivos', ok: true },
        { t: 'Um caractere de espaço', ok: false },
        { t: 'O literal "d+"', ok: false },
      ],
      exp: '"\\d" = qualquer dígito [0-9]. "+" = um ou mais. "\\d+" = sequência de um ou mais dígitos. "\\d{3}" = exatamente 3 dígitos.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>Regex.IsMatch(texto, padrão)</code> retorna bool — verifica se o padrão aparece em qualquer posição da string.',
      q: 'Regex.IsMatch("RE4-LEON-07", "\\d+") retorna o quê?',
      hint: 'Há dígitos em "RE4-LEON-07"?',
      opts: [
        { t: 'False — a string não é toda dígitos', ok: false },
        { t: 'True — há dígitos em alguma posição', ok: true },
        { t: 'Lança exceção — padrão inválido', ok: false },
        { t: 'Os dígitos encontrados: "4" e "07"', ok: false },
      ],
      exp: '"IsMatch" verifica se o padrão aparece EM ALGUM LUGAR da string. "RE4-LEON-07" contém dígitos → True. Para "toda a string", use "^\\d+$".',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<strong>Grupos de captura</strong> <code>(padrão)</code> extraem partes específicas de um match. Acessados via <code>match.Groups[1]</code>.',
      q: 'No padrão "(\\w+)-(\\d+)", quais são os grupos de captura?',
      hint: 'Parênteses definem grupos',
      opts: [
        { t: 'Apenas um grupo: a string toda', ok: false },
        { t: 'Dois grupos: o primeiro captura letras/números, o segundo captura dígitos', ok: true },
        { t: 'O hífen é o único grupo', ok: false },
        { t: 'Grupos não existem nesse padrão', ok: false },
      ],
      exp: '"(\\w+)" = grupo 1 (word chars). "(\\d+)" = grupo 2 (dígitos). Groups[0] = match completo, Groups[1] = primeiro grupo.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>Regex.Replace(texto, padrão, substituição)</code> substitui todas as ocorrências do padrão.',
      q: 'O que Regex.Replace("RE4-LEON", "\\d", "*") retorna?',
      hint: 'Substitui cada dígito por *',
      opts: [
        { t: 'RE*-LEON', ok: false },
        { t: 'RE4-LEON (sem mudança)', ok: false },
        { t: 'RE*-LEON', ok: true },
        { t: '***-LEON', ok: false },
      ],
      exp: '"\\d" corresponde a cada dígito individualmente. "RE4-LEON" tem apenas "4" como dígito → substituído por "*" → "RE*-LEON".',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Para verificar se uma string é um e-mail válido com Regex:',
      code: `<span class="kw">bool</span> valido = Regex.<span class="mt">_______</span>(email, <span class="st">@"^[\\w.-]+@[\\w.-]+\\.[a-z]{2,}$"</span>);`,
      q: 'Qual método retorna bool indicando se o padrão corresponde?',
      hint: 'Verificar correspondência',
      ans: 'IsMatch',
      exp: '"IsMatch(texto, padrão)" retorna true/false sem extrair dados. Para e-mail: começa com word chars, tem @, domínio e extensão de 2+ letras.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Para encontrar a PRIMEIRA correspondência e retornar um objeto Match:',
      code: `<span class="kw">var</span> m = Regex.<span class="mt">_______</span>(<span class="st">"Missão 07 — HP: 200"</span>, <span class="st">@"\\d+"</span>);`,
      q: 'Qual método retorna o primeiro Match encontrado?',
      hint: 'Encontrar (match) em inglês',
      ans: 'Match',
      exp: '"Regex.Match(texto, padrão)" retorna um Match com a primeira ocorrência. "m.Success" indica se encontrou. "m.Value" é o texto capturado.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Para encontrar TODAS as correspondências de um padrão:',
      code: `<span class="kw">var</span> numeros = Regex.<span class="mt">_______</span>(<span class="st">"HP:80 XP:500 Kills:3"</span>, <span class="st">@"\\d+"</span>);`,
      q: 'Qual método retorna todas as correspondências?',
      hint: 'Todos os matches',
      ans: 'Matches',
      exp: '"Regex.Matches(texto, padrão)" retorna MatchCollection com todas as ocorrências. Cada item tem ".Value" com o texto capturado.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'O prefixo @ em strings C# desabilita escape — útil para Regex com muitas barras invertidas:',
      code: `<span class="cm">// Sem @: "\\\\d+" (precisa escapar as barras)</span>\n<span class="cm">// Com @: mais limpo</span>\n<span class="kw">var</span> p = <span class="kw">_______</span>"\\d+";`,
      q: 'Qual prefixo cria uma verbatim string (sem escape)?',
      hint: 'Arroba',
      ans: '@',
      exp: '"@" antes da string = verbatim string. "@"\\d+"" é lido literalmente como backslash-d-mais. Sem @, precisaria de "\\\\d+".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Extraindo números de uma string com Matches.',
      code: `<span class="kw">var</span> texto = <span class="st">"Leon(HP:75) Krauser(HP:500) Ashley(HP:40)"</span>;\n<span class="kw">var</span> matches = Regex.<span class="mt">Matches</span>(texto, <span class="st">@"\\d+"</span>);\n<span class="kw">var</span> soma = matches.<span class="mt">Sum</span>(m => <span class="kw">int</span>.<span class="mt">Parse</span>(m.Value));\nConsole.<span class="mt">WriteLine</span>(soma);`,
      q: 'O que será exibido?',
      hint: '75 + 500 + 40',
      opts: [
        { t: '3', ok: false },
        { t: '615', ok: true },
        { t: '500', ok: false },
        { t: 'Erro — Sum em MatchCollection', ok: false },
      ],
      exp: 'Matches encontra "75", "500", "40". Sum converte cada Value para int e soma: 75+500+40 = 615.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Grupos de captura extraindo partes de um código.',
      code: `<span class="kw">var</span> cod = <span class="st">"RE4-LEON-07"</span>;\n<span class="kw">var</span> m = Regex.<span class="mt">Match</span>(cod, <span class="st">@"(\\w+)-(\\w+)-(\\d+)"</span>);\n<span class="kw">if</span> (m.Success)\n    Console.<span class="mt">WriteLine</span>(<span class="st">$"Jogo:{m.Groups[1].Value} Agente:{m.Groups[2].Value} N°:{m.Groups[3].Value}"</span>);`,
      q: 'O que será exibido?',
      hint: 'Grupos 1, 2, 3 capturam cada parte separada por hífen',
      opts: [
        { t: 'Jogo:RE4-LEON-07 Agente: N°:', ok: false },
        { t: 'Jogo:RE4 Agente:LEON N°:07', ok: true },
        { t: 'Jogo:RE4 Agente:RE4-LEON N°:07', ok: false },
        { t: 'Erro — grupos inválidos', ok: false },
      ],
      exp: 'Grupo 1: "RE4". Grupo 2: "LEON". Grupo 3: "07". Groups[0] = match completo "RE4-LEON-07".',
    },

    // Q11 — Code
    {
      type: 'code',
      bubble: 'Regex.Replace mascarando dados sensíveis.',
      code: `<span class="kw">var</span> log = <span class="st">"Token: abc123def456 | Score: 9000"</span>;\n<span class="kw">var</span> seguro = Regex.<span class="mt">Replace</span>(log, <span class="st">@"[a-f0-9]{6,}"</span>, <span class="st">"[REDACTED]"</span>);\nConsole.<span class="mt">WriteLine</span>(seguro);`,
      q: 'O que será exibido?',
      hint: 'Padrão captura sequências hex de 6+ chars',
      opts: [
        { t: 'Token: [REDACTED] | Score: 9000', ok: false },
        { t: 'Token: [REDACTED][REDACTED] | Score: 9000', ok: true },
        { t: 'Token: [REDACTED] | Score: [REDACTED]', ok: false },
        { t: '[REDACTED]', ok: false },
      ],
      exp: '"[a-f0-9]{6,}" captura "abc123" e "def456" (ambos hex com 6+ chars). "9000" não é hex [a-f0-9]. Dois [REDACTED] são inseridos.',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'Validando formato de código de missão.',
      code: `<span class="kw">static bool</span> <span class="mt">ValidarCodigo</span>(<span class="kw">string</span> cod)\n    => Regex.<span class="mt">IsMatch</span>(cod, <span class="st">@"^RE\\d-[A-Z]+-\\d{2}$"</span>);\n\nConsole.<span class="mt">WriteLine</span>(<span class="mt">ValidarCodigo</span>(<span class="st">"RE4-LEON-07"</span>));\nConsole.<span class="mt">WriteLine</span>(<span class="mt">ValidarCodigo</span>(<span class="st">"re4-leon-7"</span>));`,
      q: 'O que será exibido?',
      hint: 'Padrão: RE+dígito, hífen, letras maiúsculas, hífen, 2 dígitos',
      opts: [
        { t: 'True e True', ok: false },
        { t: 'True e False', ok: true },
        { t: 'False e False', ok: false },
        { t: 'False e True', ok: false },
      ],
      exp: '"RE4-LEON-07": RE\\d ✓, [A-Z]+ ✓, \\d{2} ✓ → True. "re4-leon-7": re minúsculo ✗, 7 é 1 dígito ✗ → False.',
    },

  ]
};
