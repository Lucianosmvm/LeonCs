const MISSION_45 = {
  id: 45,
  title: "MISSÃO 46 — O ARQUIVO SECRETO",
  icon: '📁',
  free: false,
  desc: "Nos arquivos do castelo residem os segredos do Los Illuminados. File IO permite ler e gravar dados persistentes — informações que sobrevivem além da execução do programa.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'A classe estática <code>File</code> (<code>System.IO</code>) oferece métodos convenientes: <code>ReadAllText</code>, <code>WriteAllText</code>, <code>ReadAllLines</code>, <code>AppendAllText</code>.',
      q: 'Qual método lê o conteúdo inteiro de um arquivo como string?',
      hint: 'Ler todo o texto',
      opts: [
        { t: 'File.Open()', ok: false },
        { t: 'File.ReadAllText(caminho)', ok: true },
        { t: 'File.Load()', ok: false },
        { t: 'File.GetContent()', ok: false },
      ],
      exp: '"File.ReadAllText(path)" lê todo o arquivo e retorna string. "ReadAllLines" retorna string[]. "ReadAllBytes" retorna byte[].',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>StreamReader</code> e <code>StreamWriter</code> são preferíveis para arquivos grandes — leem/escrevem linha a linha sem carregar tudo na memória.',
      q: 'Por que usar StreamReader em vez de File.ReadAllText para arquivos muito grandes?',
      hint: 'Memória disponível',
      opts: [
        { t: 'StreamReader é mais rápido em qualquer caso', ok: false },
        { t: 'StreamReader lê incrementalmente — não carrega o arquivo inteiro na memória de uma vez', ok: true },
        { t: 'File.ReadAllText não suporta UTF-8', ok: false },
        { t: 'Não há diferença prática', ok: false },
      ],
      exp: 'Para arquivos de GB, ReadAllText estoura a memória. StreamReader lê linha por linha com ReadLine() — footprint constante.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'O bloco <code>using</code> garante que streams sejam fechadas/descartadas mesmo em caso de exceção — implementa IDisposable.',
      q: 'Por que usar "using (var sr = new StreamReader(...))" em vez de instanciar diretamente?',
      hint: 'Dispose automático',
      opts: [
        { t: 'Usando é mais rápido', ok: false },
        { t: 'Garante que o stream seja fechado e recursos liberados automaticamente — mesmo se ocorrer exceção', ok: true },
        { t: 'É obrigatório pelo compilador', ok: false },
        { t: 'Apenas para leitura de arquivos grandes', ok: false },
      ],
      exp: '"using" chama Dispose() automaticamente ao sair do bloco. Sem isso, o arquivo pode ficar bloqueado por outros processos.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'A classe <code>Path</code> manipula caminhos de arquivos de forma cross-platform (Windows usa \\, Linux usa /).',
      q: 'Qual método combina dois segmentos de caminho corretamente em qualquer OS?',
      hint: 'Combine = combinar',
      opts: [
        { t: 'pasta + "/" + arquivo', ok: false },
        { t: 'Path.Combine(pasta, arquivo)', ok: true },
        { t: 'string.Join("/", pasta, arquivo)', ok: false },
        { t: 'Directory.GetPath(pasta, arquivo)', ok: false },
      ],
      exp: '"Path.Combine("pasta", "arq.txt")" usa o separador correto do OS. Concatenação manual quebra em sistemas diferentes.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Para verificar se um arquivo existe antes de lê-lo:',
      code: `<span class="kw">if</span> (File.<span class="mt">_______</span>(<span class="st">"missao.txt"</span>))\n    <span class="kw">var</span> conteudo = File.<span class="mt">ReadAllText</span>(<span class="st">"missao.txt"</span>);`,
      q: 'Qual método verifica se o arquivo existe?',
      hint: 'Existe em inglês',
      ans: 'Exists',
      exp: '"File.Exists(path)" retorna bool. Evita FileNotFoundException. "Directory.Exists(path)" faz o mesmo para pastas.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Para escrever todas as linhas de um array em um arquivo:',
      code: `<span class="kw">string</span>[] logs = { <span class="st">"Missão 1"</span>, <span class="st">"Missão 2"</span>, <span class="st">"Missão 3"</span> };\nFile.<span class="mt">_______</span>(<span class="st">"log.txt"</span>, logs);`,
      q: 'Qual método escreve um array de strings, uma por linha?',
      hint: 'Escrever todas as linhas',
      ans: 'WriteAllLines',
      exp: '"File.WriteAllLines(path, lines)" cria ou sobrescreve o arquivo com cada elemento do array em uma linha. "AppendAllLines" adiciona ao final.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Para ler um arquivo linha por linha com StreamReader usando using declaration (C# 8+):',
      code: `<span class="kw">using var</span> sr = <span class="kw">new</span> StreamReader(<span class="st">"dados.txt"</span>);\n<span class="kw">while</span> (!sr.<span class="mt">_______</span>)\n{\n    <span class="kw">var</span> linha = sr.<span class="mt">ReadLine</span>();\n    Console.<span class="mt">WriteLine</span>(linha);\n}`,
      q: 'Qual propriedade indica que o StreamReader chegou ao fim do arquivo?',
      hint: 'Fim do Stream',
      ans: 'EndOfStream',
      exp: '"sr.EndOfStream" é true quando não há mais dados para ler. O while continua enquanto não chegou ao fim.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Para adicionar conteúdo ao final de um arquivo sem sobrescrever:',
      code: `File.<span class="mt">_______</span>(<span class="st">"log.txt"</span>, <span class="st">"Nova entrada\\n"</span>);`,
      q: 'Qual método adiciona texto ao final do arquivo?',
      hint: 'Anexar todo o texto',
      ans: 'AppendAllText',
      exp: '"AppendAllText" adiciona ao final. "WriteAllText" sobrescreve. "AppendAllLines" adiciona array de linhas.',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'File.ReadAllLines retorna array — processando cada linha.',
      code: `<span class="cm">// Arquivo "scores.txt" contém:</span>\n<span class="cm">// 100</span>\n<span class="cm">// 250</span>\n<span class="cm">// 180</span>\n\n<span class="kw">var</span> linhas = File.<span class="mt">ReadAllLines</span>(<span class="st">"scores.txt"</span>);\n<span class="kw">var</span> total = linhas\n    .<span class="mt">Select</span>(l => <span class="kw">int</span>.<span class="mt">Parse</span>(l))\n    .<span class="mt">Sum</span>();\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"Total: {total}"</span>);`,
      q: 'O que será exibido?',
      hint: '100 + 250 + 180',
      opts: [
        { t: 'Total: 530', ok: true },
        { t: 'Total: 3', ok: false },
        { t: 'Total: 100', ok: false },
        { t: 'Erro — Parse em array', ok: false },
      ],
      exp: 'ReadAllLines retorna ["100","250","180"]. Select converte cada string para int. Sum() = 100+250+180 = 530.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Path.Combine e Path.GetExtension.',
      code: `<span class="kw">string</span> pasta  = <span class="st">"/saves"</span>;\n<span class="kw">string</span> arquivo = <span class="st">"missao_01.json"</span>;\n<span class="kw">string</span> caminho = Path.<span class="mt">Combine</span>(pasta, arquivo);\n<span class="kw">string</span> ext     = Path.<span class="mt">GetExtension</span>(arquivo);\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"{caminho} | {ext}"</span>);`,
      q: 'O que será exibido?',
      hint: 'Combine une caminho, GetExtension pega a extensão',
      opts: [
        { t: '/saves/missao_01.json | .json', ok: true },
        { t: '/saves\\missao_01.json | json', ok: false },
        { t: '/saves/missao_01.json | json', ok: false },
        { t: 'saves/missao_01.json | .json', ok: false },
      ],
      exp: 'Path.Combine: "/saves/missao_01.json". GetExtension retorna ".json" (com o ponto). Exibe "/saves/missao_01.json | .json".',
    },

    // Q11 — Code
    {
      type: 'code',
      bubble: 'StreamWriter escrevendo com using.',
      code: `<span class="kw">using var</span> sw = <span class="kw">new</span> StreamWriter(<span class="st">"log.txt"</span>);\nsw.<span class="mt">WriteLine</span>(<span class="st">"Sessão iniciada"</span>);\nsw.<span class="mt">WriteLine</span>(<span class="st">$"Data: {DateTime.Now:yyyy-MM-dd}"</span>);\nConsole.<span class="mt">WriteLine</span>(<span class="st">"Arquivo gravado!"</span>);`,
      q: 'O que será exibido no console?',
      hint: 'WriteLine no StreamWriter grava no arquivo, não no console',
      opts: [
        { t: 'Sessão iniciada e Data: ...', ok: false },
        { t: 'Arquivo gravado!', ok: true },
        { t: 'Nada', ok: false },
        { t: 'Erro — StreamWriter não tem WriteLine', ok: false },
      ],
      exp: 'sw.WriteLine escreve NO ARQUIVO, não no console. Console.WriteLine("Arquivo gravado!") é o único output do console.',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'Tratando FileNotFoundException ao ler arquivo inexistente.',
      code: `<span class="kw">try</span>\n{\n    <span class="kw">var</span> txt = File.<span class="mt">ReadAllText</span>(<span class="st">"naoexiste.txt"</span>);\n    Console.<span class="mt">WriteLine</span>(txt);\n}\n<span class="kw">catch</span> (FileNotFoundException ex)\n{\n    Console.<span class="mt">WriteLine</span>(<span class="st">$"Arquivo não encontrado: {ex.FileName}"</span>);\n}`,
      q: 'O que será exibido?',
      hint: 'O arquivo não existe — a exceção é capturada',
      opts: [
        { t: 'O conteúdo do arquivo', ok: false },
        { t: 'Arquivo não encontrado: naoexiste.txt', ok: true },
        { t: 'Nada — exceção ignorada', ok: false },
        { t: 'Erro não tratado', ok: false },
      ],
      exp: 'ReadAllText lança FileNotFoundException. O catch captura e exibe "Arquivo não encontrado: naoexiste.txt" usando ex.FileName.',
    },

  ]
};
