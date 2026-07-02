// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 37 — PATHLIB
// Tema: Caminhos de arquivos orientados a objetos
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_36 = {
  id: 36,
  title: "MISSÃO 37 — PATHLIB",
  icon: '🗂️',
  free: false,
  desc: "pathlib trata caminhos como objetos, não strings frágeis. Multiplataforma, legível e cheio de utilidades.",
  objs: [
    "Criar caminhos com Path",
    "Compor caminhos com o operador /",
    "Consultar e ler arquivos via Path"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'A classe <code>Path</code> (do módulo pathlib) representa um caminho de arquivo ou pasta.',
      q: 'De qual módulo vem Path?',
      opts: [
        { t: 'pathlib', ok: true },
        { t: 'os', ok: false },
        { t: 'sys', ok: false },
        { t: 'filepath', ok: false },
      ],
      exp: 'from pathlib import Path — a interface moderna e orientada a objetos para caminhos.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'O operador <code>/</code> compõe caminhos: <code>Path("a") / "b"</code>.',
      q: 'Como juntar "pasta" e "arquivo.txt" com Path?',
      opts: [
        { t: 'Path("pasta") + "arquivo.txt"', ok: false },
        { t: 'Path("pasta") / "arquivo.txt"', ok: true },
        { t: 'Path("pasta").join("arquivo.txt")', ok: false },
        { t: 'Path("pasta", "arquivo.txt", sep)', ok: false },
      ],
      exp: 'O operador / monta o caminho de forma legível e correta em qualquer sistema operacional.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>.exists()</code> informa se o caminho existe no disco.',
      q: 'O que p.exists() retorna?',
      opts: [
        { t: 'O tamanho do arquivo', ok: false },
        { t: 'O conteúdo do arquivo', ok: false },
        { t: 'True se o caminho existir', ok: true },
        { t: 'A data de criação', ok: false },
      ],
      exp: 'p.exists() devolve True/False. Há também .is_file() e .is_dir() para distinguir arquivo de pasta.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>.name</code> devolve o nome final do caminho (com extensão).',
      q: 'O que Path("/a/b/c.txt").name retorna?',
      opts: [
        { t: '/a/b', ok: false },
        { t: 'c', ok: false },
        { t: '.txt', ok: false },
        { t: 'c.txt', ok: true },
      ],
      exp: '.name = "c.txt". .stem = "c" (sem extensão), .suffix = ".txt", .parent = o diretório pai.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>.suffix</code> devolve a extensão do arquivo.',
      q: 'O que Path("foto.png").suffix retorna?',
      opts: [
        { t: '.png', ok: true },
        { t: 'png', ok: false },
        { t: 'foto', ok: false },
        { t: 'foto.png', ok: false },
      ],
      exp: '.suffix inclui o ponto: ".png". Para só o nome-base use .stem ("foto").',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<code>.read_text()</code> lê todo o conteúdo do arquivo como string.',
      q: 'O que p.read_text() faz?',
      opts: [
        { t: 'Escreve texto no arquivo', ok: false },
        { t: 'Lê o arquivo inteiro como string', ok: true },
        { t: 'Retorna o tamanho em bytes', ok: false },
        { t: 'Deleta o arquivo', ok: false },
      ],
      exp: 'read_text() abre, lê tudo e fecha o arquivo. write_text() faz o inverso, gravando uma string.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: '<code>.glob("*.txt")</code> lista arquivos que casam com o padrão.',
      q: 'O que pasta.glob("*.py") retorna?',
      opts: [
        { t: 'O primeiro arquivo .py', ok: false },
        { t: 'O conteúdo dos arquivos', ok: false },
        { t: 'Todos os arquivos .py da pasta', ok: true },
        { t: 'Apenas subpastas', ok: false },
      ],
      exp: 'glob devolve um gerador com os caminhos que batem com o padrão. Use ** para busca recursiva.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Importe a classe de caminhos.',
      code: `<span class="kw">from</span> pathlib <span class="kw">import</span> <span class="kw">_______</span>\n\np <span class="kw">=</span> Path(<span class="st">"dados.txt"</span>)`,
      q: 'Qual classe importar de pathlib?',
      ans: 'Path',
      exp: 'from pathlib import Path — a base de toda manipulação de caminhos.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Componha o caminho pasta/arquivo com o operador apropriado.',
      code: `caminho <span class="kw">=</span> Path(<span class="st">"docs"</span>) <span class="kw">_______</span> <span class="st">"nota.txt"</span>\n<span class="cm"># docs/nota.txt</span>`,
      q: 'Qual operador junta partes de um Path?',
      ans: '/',
      exp: 'Path("docs") / "nota.txt" produz o caminho docs/nota.txt de forma portável.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise as propriedades do caminho.',
      code: `<span class="kw">from</span> pathlib <span class="kw">import</span> Path\np <span class="kw">=</span> Path(<span class="st">"relatorio.pdf"</span>)\n<span class="mt">print</span>(p.stem, p.suffix)`,
      q: 'O que este código exibe?',
      opts: [
        { t: 'relatorio.pdf .pdf', ok: false },
        { t: 'relatorio pdf', ok: false },
        { t: '.pdf relatorio', ok: false },
        { t: 'relatorio .pdf', ok: true },
      ],
      exp: '.stem é o nome sem extensão ("relatorio") e .suffix inclui o ponto (".pdf").',
    },

  ]
};
