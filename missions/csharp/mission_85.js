// ══════════════════════════════════════════════════════
// ACT VI — O CONFRONTO FINAL
// MISSÃO 86 — ARQUIVO SECRETO
// Tema: File I/O — System.IO, streams, File, Directory, Path
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_85 = {
  id: 85,
  title: "MISSÃO 86 — ARQUIVO SECRETO",
  icon: '📁',
  free: false,
  desc: "Os arquivos de pesquisa de Umbrella estão no servidor. Leon precisa ler, escrever e manipular arquivos com precisão — System.IO é o kit de ferramentas para acessar os segredos armazenados em disco.",
  objs: [
    "Usar File e FileStream para leitura e escrita de arquivos",
    "Trabalhar com Path para manipulação de caminhos",
    "Aplicar StreamReader e StreamWriter para texto",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<code>File.ReadAllText</code> lê o arquivo inteiro na memória como string. Para arquivos grandes, prefira <code>File.ReadLines</code> (lazy) ou <code>StreamReader</code>.',
      q: 'Qual a diferença entre File.ReadAllText e File.ReadLines?',
      hint: 'Memória vs lazy/streaming',
      opts: [
        { t: 'ReadAllText é mais rápido sempre', ok: false },
        { t: 'ReadAllText carrega tudo na memória; ReadLines é lazy — processa linha por linha sem carregar tudo', ok: true },
        { t: 'ReadLines suporta apenas UTF-8', ok: false },
        { t: 'São equivalentes', ok: false },
      ],
      exp: 'ReadAllText: string com todo conteúdo. ReadLines: IEnumerable<string> lazy — cada iteração lê uma linha. Para arquivos grandes: ReadLines evita OOM.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>Path.Combine</code> é a forma correta de combinar caminhos em .NET — usa o separador correto para cada OS (<code>\\</code> no Windows, <code>/</code> no Unix).',
      q: 'Por que usar Path.Combine em vez de string concatenation para caminhos?',
      hint: 'Portabilidade e separadores',
      opts: [
        { t: 'Apenas por convenção', ok: false },
        { t: 'Path.Combine usa o separador correto para cada SO — portável entre Windows e Linux/Mac', ok: true },
        { t: 'Path.Combine verifica se o arquivo existe', ok: false },
        { t: 'Concatenação de strings é inválida para paths', ok: false },
      ],
      exp: 'Path.Combine("pasta", "arquivo.txt"): "pasta\\arquivo.txt" no Windows, "pasta/arquivo.txt" no Unix. String concatenation pode criar caminhos inválidos.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>using var writer = new StreamWriter(path)</code> — sempre usar using para garantir que streams sejam fechados/flushed mesmo em caso de exceção.',
      q: 'O que acontece se StreamWriter não for fechado (sem using/Dispose)?',
      hint: 'Buffer não é escrito no disco',
      opts: [
        { t: 'O arquivo é deletado automaticamente', ok: false },
        { t: 'Dados no buffer podem não ser escritos no disco — arquivo pode ficar incompleto ou vazio', ok: true },
        { t: 'Dados são escritos imediatamente, sem buffer', ok: false },
        { t: 'O OS fecha automaticamente sem problemas', ok: false },
      ],
      exp: 'StreamWriter usa buffer interno. Flush() ou Dispose() escrevem o buffer no disco. Sem fechar: dados perdidos. using garante Dispose() sempre chamado.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>FileMode.OpenOrCreate</code>, <code>FileMode.Append</code>, <code>FileMode.Truncate</code> — modos de abertura de arquivo com FileStream.',
      q: 'Qual FileMode usar para adicionar texto ao final de um arquivo existente sem apagar?',
      hint: 'Append em inglês',
      opts: [
        { t: 'FileMode.Create', ok: false },
        { t: 'FileMode.Append', ok: true },
        { t: 'FileMode.Truncate', ok: false },
        { t: 'FileMode.Open', ok: false },
      ],
      exp: 'FileMode.Append: abre ou cria, posiciona no final para escrita. FileMode.Create: cria novo ou sobrescreve. FileMode.Truncate: abre e apaga conteúdo. FileMode.Open: abre existente ou exceção.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Escrevendo texto em arquivo:',
      code: `<span class="kw">await</span> File.<span class="mt">_______</span>(
    <span class="st">"log.txt"</span>,
    <span class="st">"Missão iniciada\\n"</span>);`,
      q: 'Qual método File escreve texto assincronamente (cria ou sobrescreve)?',
      hint: 'Write All Text Async',
      ans: 'WriteAllTextAsync',
      exp: 'File.WriteAllTextAsync(path, text): cria ou sobrescreve com o texto. File.AppendAllTextAsync: adiciona ao final. File.ReadAllTextAsync: leitura assíncrona.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Obtendo extensão de arquivo:',
      code: `<span class="kw">string</span> arquivo = <span class="st">"dados_missao.json"</span>;
<span class="kw">string</span> ext = Path.<span class="mt">_______</span>(arquivo);
Console.<span class="mt">WriteLine</span>(ext); <span class="cm">// .json</span>`,
      q: 'Qual método Path retorna a extensão do arquivo (com ponto)?',
      hint: 'Get Extension',
      ans: 'GetExtension',
      exp: 'Path.GetExtension("arquivo.json") = ".json" (com ponto). Path.GetFileNameWithoutExtension: "arquivo". Path.GetFileName: "arquivo.json".',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Lendo arquivo linha por linha com StreamReader:',
      code: `<span class="kw">using var</span> reader = <span class="kw">new</span> StreamReader(<span class="st">"dados.txt"</span>);
<span class="kw">string</span>? linha;
<span class="kw">while</span> ((linha = <span class="kw">await</span> reader.<span class="mt">_______</span>()) != <span class="kw">null</span>)
    Console.<span class="mt">WriteLine</span>(linha);`,
      q: 'Qual método lê uma linha do StreamReader de forma assíncrona?',
      hint: 'Read Line Async',
      ans: 'ReadLineAsync',
      exp: 'reader.ReadLineAsync(): retorna Task<string?>, null quando EOF. reader.ReadToEndAsync(): lê tudo de uma vez. reader.ReadLine(): síncrono.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'Path.Combine e GetFileName.',
      code: `<span class="kw">string</span> dir = <span class="st">"C:\\\\Umbrella\\\\Labs"</span>;
<span class="kw">string</span> file = <span class="st">"plaga.dat"</span>;
<span class="kw">string</span> full = Path.<span class="mt">Combine</span>(dir, file);
Console.<span class="mt">WriteLine</span>(Path.<span class="mt">GetFileName</span>(full));
Console.<span class="mt">WriteLine</span>(Path.<span class="mt">GetExtension</span>(full));`,
      q: 'O que será exibido?',
      hint: 'Nome do arquivo e extensão',
      opts: [
        { t: 'plaga.dat e .dat', ok: true },
        { t: 'C:\\Umbrella\\Labs e plaga', ok: false },
        { t: 'plaga e dat', ok: false },
        { t: 'Erro — Path.Combine', ok: false },
      ],
      exp: 'GetFileName("C:\\Umbrella\\Labs\\plaga.dat") = "plaga.dat". GetExtension = ".dat". "plaga.dat" e ".dat".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'File.Exists antes de ler.',
      code: `<span class="kw">string</span> path = <span class="st">"arquivo_que_nao_existe.txt"</span>;
<span class="kw">if</span> (File.<span class="mt">Exists</span>(path))
    Console.<span class="mt">WriteLine</span>(<span class="st">"Encontrado"</span>);
<span class="kw">else</span>
    Console.<span class="mt">WriteLine</span>(<span class="st">"Não encontrado"</span>);`,
      q: 'O que será exibido (arquivo não existe no sistema)?',
      hint: 'File.Exists retorna false para arquivo inexistente',
      opts: [
        { t: 'Encontrado', ok: false },
        { t: 'Não encontrado', ok: true },
        { t: 'Exceção FileNotFoundException', ok: false },
        { t: 'null', ok: false },
      ],
      exp: 'File.Exists(path): retorna bool, nunca lança exceção. Arquivo não existe → false → "Não encontrado". File.Exists é seguro para verificar antes de ler.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Directory operations.',
      code: `<span class="kw">string</span>[] files = { <span class="st">"a.json"</span>, <span class="st">"b.txt"</span>, <span class="st">"c.json"</span>, <span class="st">"d.xml"</span> };
<span class="kw">var</span> jsons = files
    .<span class="mt">Where</span>(f => Path.<span class="mt">GetExtension</span>(f) == <span class="st">".json"</span>)
    .<span class="mt">Count</span>();
Console.<span class="mt">WriteLine</span>(jsons);`,
      q: 'O que será exibido?',
      hint: 'Quantos arquivos .json?',
      opts: [
        { t: '1', ok: false },
        { t: '2', ok: true },
        { t: '3', ok: false },
        { t: '4', ok: false },
      ],
      exp: 'a.json e c.json têm extensão ".json". Count = 2. "2".',
    },

  ]
};
