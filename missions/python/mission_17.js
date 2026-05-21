// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 18 — ARQUIVOS  [PREMIUM]
// Tema: open(), read/write, with, modos de abertura
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_17 = {
  id: 17,
  title: "MISSÃO 18 — ARQUIVOS",
  icon: '💾',
  free: false,
  desc: "Programas precisam persistir dados. Ler e escrever arquivos é essencial — de logs a configurações a datasets.",
  objs: [
    "Abrir arquivos com open() e modos r, w, a",
    "Usar with para garantir fechamento seguro",
    "Ler e escrever linhas de texto"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<code>open("arquivo.txt", "r")</code> abre para leitura. Modos: <code>"r"</code> (read), <code>"w"</code> (write), <code>"a"</code> (append).',
      q: 'Qual modo sobrescreve o arquivo se ele já existir?',
      opts: [
        { t: '"r"', ok: false },
        { t: '"a"', ok: false },
        { t: '"w"', ok: true },
        { t: '"x"', ok: false },
      ],
      exp: '"w" abre para escrita e APAGA o conteúdo existente. "a" adiciona ao final sem apagar. "x" cria novo, falha se existe.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'O bloco <code>with open(...) as f:</code> garante que o arquivo é fechado automaticamente, mesmo se houver erro.',
      q: 'Por que usar "with open()" em vez de open() direto?',
      opts: [
        { t: 'É mais rápido', ok: false },
        { t: 'Fecha o arquivo automaticamente, mesmo se ocorrer erro', ok: true },
        { t: 'Permite abrir múltiplos arquivos', ok: false },
        { t: 'É obrigatório no Python 3', ok: false },
      ],
      exp: 'with é um context manager. Garante f.close() automático. Sem with, você pode esquecer de fechar — causando vazamento.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>.read()</code> lê o arquivo inteiro como string. <code>.readlines()</code> retorna uma lista de linhas.',
      q: 'O que retorna .readlines() para um arquivo com 3 linhas?',
      opts: [
        { t: 'Uma string com todo o conteúdo', ok: false },
        { t: 'Uma lista com 3 strings (uma por linha)', ok: true },
        { t: 'Um inteiro indicando o número de linhas', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: '.readlines() retorna ["linha1\n", "linha2\n", "linha3"]. Cada item inclui o \n exceto a última linha.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>.write(texto)</code> escreve texto no arquivo. Não adiciona \n automaticamente.',
      q: 'Para escrever linhas separadas em um arquivo, você precisa:',
      opts: [
        { t: 'Usar .writeline() com nova linha automática', ok: false },
        { t: 'Incluir \\n explicitamente: f.write("linha\n")', ok: true },
        { t: 'Abrir com modo "l" (lines)', ok: false },
        { t: 'Usar print() em vez de write()', ok: false },
      ],
      exp: '.write() não adiciona quebra de linha. Você deve incluir "\\n" explicitamente ou usar print(texto, file=f).',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Você pode iterar diretamente sobre um arquivo para ler linha por linha.',
      q: 'Qual é a forma mais eficiente de ler um arquivo grande linha por linha?',
      opts: [
        { t: 'f.readlines() e depois for na lista', ok: false },
        { t: 'f.read().split("\\n")', ok: false },
        { t: 'for linha in f: (itera direto no arquivo)', ok: true },
        { t: 'while f.read(): pass', ok: false },
      ],
      exp: '"for linha in f:" lê linha por linha sem carregar tudo na memória. Ideal para arquivos grandes (GBs).',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'O modo <code>"a"</code> (append) adiciona ao final do arquivo sem apagar o conteúdo existente.',
      q: 'Você tem um arquivo de log. Qual modo usar para adicionar novas entradas sem perder as antigas?',
      opts: [
        { t: '"w"', ok: false },
        { t: '"r"', ok: false },
        { t: '"a"', ok: true },
        { t: '"rw"', ok: false },
      ],
      exp: '"a" (append) posiciona o cursor no final e escreve sem apagar. Perfeito para logs.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'FileNotFoundError ocorre ao tentar abrir um arquivo que não existe no modo "r".',
      q: 'Como evitar FileNotFoundError ao abrir um arquivo que pode não existir?',
      opts: [
        { t: 'Usar modo "r+"', ok: false },
        { t: 'Usar try/except FileNotFoundError', ok: true },
        { t: 'Abrir com modo "r?" ', ok: false },
        { t: 'Python cria o arquivo automaticamente', ok: false },
      ],
      exp: 'Capture com try/except FileNotFoundError: para tratar o caso do arquivo ausente graciosamente.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Abra o arquivo de forma segura.',
      code: `<span class="kw">with</span> <span class="mt">open</span>(<span class="st">"dados.txt"</span>, <span class="st">"r"</span>) <span class="kw">as</span> <span class="kw">_______</span>:\n    conteudo = f.<span class="mt">read</span>()\n    <span class="mt">print</span>(conteudo)`,
      q: 'Qual variável representa o arquivo aberto?',
      ans: 'f',
      exp: '"as f" associa o arquivo à variável f. Convencionalmente usa-se "f" ou "arquivo".',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Escreva no arquivo com o modo correto.',
      code: `<span class="kw">with</span> <span class="mt">open</span>(<span class="st">"log.txt"</span>, <span class="st">"_______"</span>) <span class="kw">as</span> f:\n    f.<span class="mt">write</span>(<span class="st">"Nova entrada\n"</span>)`,
      q: 'Qual modo adiciona ao final sem apagar?',
      ans: 'a',
      exp: 'Modo "a" (append) escreve no final do arquivo. Ideal para logs. "w" apagaria o conteúdo anterior.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise este contador de linhas.',
      code: `<span class="kw">try</span>:\n    <span class="kw">with</span> <span class="mt">open</span>(<span class="st">"missao.txt"</span>) <span class="kw">as</span> f:\n        linhas = f.<span class="mt">readlines</span>()\n    <span class="mt">print</span>(<span class="kw">f</span><span class="st">"Linhas: {len(linhas)}"</span>)\n<span class="kw">except</span> <span class="mt">FileNotFoundError</span>:\n    <span class="mt">print</span>(<span class="st">"Arquivo não encontrado"</span>)`,
      q: 'Se o arquivo não existir, o que este código exibe?',
      opts: [
        { t: 'Linhas: 0', ok: false },
        { t: 'O programa trava', ok: false },
        { t: 'Arquivo não encontrado', ok: true },
        { t: 'FileNotFoundError: ...', ok: false },
      ],
      exp: 'open() em arquivo inexistente lança FileNotFoundError. O except captura e exibe a mensagem amigável.',
    },

  ]
};
