// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 48 — CSV E PICKLE
// Tema: Ler/gravar CSV e serializar objetos com pickle
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_47 = {
  id: 47,
  title: "MISSÃO 48 — CSV E PICKLE",
  icon: '💾',
  free: false,
  desc: "Dados tabulares vivem em CSV; objetos Python inteiros podem ser salvos com pickle. Persista informação entre execuções.",
  objs: [
    "Ler e escrever arquivos CSV",
    "Serializar objetos com pickle",
    "Escolher o formato certo para cada caso"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'CSV significa <strong>Comma-Separated Values</strong>: valores separados por vírgula.',
      q: 'O que significa CSV?',
      opts: [
        { t: 'Compressed Storage Volume', ok: false },
        { t: 'Common Serial Version', ok: false },
        { t: 'Custom Style Vector', ok: false },
        { t: 'Comma-Separated Values', ok: true },
      ],
      exp: 'CSV é um formato de texto simples para tabelas: cada linha é um registro, colunas separadas por vírgula.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'O módulo padrão <code>csv</code> lê e escreve arquivos CSV corretamente (tratando aspas, vírgulas em campos).',
      q: 'Por que usar o módulo csv em vez de split(",")?',
      opts: [
        { t: 'Trata corretamente aspas e vírgulas dentro de campos', ok: true },
        { t: 'É mais curto', ok: false },
        { t: 'Executa mais rápido sempre', ok: false },
        { t: 'Não precisa abrir o arquivo', ok: false },
      ],
      exp: 'split(",") quebra em vírgulas dentro de campos com aspas. O módulo csv respeita as regras do formato.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>csv.reader</code> percorre as linhas como listas de strings.',
      q: 'O que cada iteração de csv.reader devolve?',
      opts: [
        { t: 'Um dicionário', ok: false },
        { t: 'Uma lista com os campos da linha', ok: true },
        { t: 'Uma string única', ok: false },
        { t: 'Um número', ok: false },
      ],
      exp: 'reader devolve cada linha como lista: ["nome", "idade"], depois ["Leon", "15"] etc.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>csv.DictReader</code> usa a primeira linha como cabeçalho e devolve dicionários.',
      q: 'O que DictReader devolve por linha?',
      opts: [
        { t: 'Uma lista', ok: false },
        { t: 'Uma tupla', ok: false },
        { t: 'Um dicionário {coluna: valor}', ok: true },
        { t: 'Uma string', ok: false },
      ],
      exp: 'DictReader mapeia cada valor ao nome da coluna: {"nome": "Leon", "idade": "15"}.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>pickle</code> serializa <strong>objetos Python</strong> em bytes (formato binário).',
      q: 'O que o pickle serializa?',
      opts: [
        { t: 'Apenas strings', ok: false },
        { t: 'Somente números', ok: false },
        { t: 'Apenas texto CSV', ok: false },
        { t: 'Objetos Python quase arbitrários', ok: true },
      ],
      exp: 'pickle grava listas, dicts, objetos de classes etc. em binário, para recarregar depois.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Pickle é <strong>específico do Python</strong> e pode ser inseguro ao carregar dados não confiáveis.',
      q: 'Qual cuidado ter com pickle?',
      opts: [
        { t: 'Nunca carregar pickle de fonte não confiável', ok: true },
        { t: 'Só funciona com números', ok: false },
        { t: 'É legível por humanos', ok: false },
        { t: 'Funciona em qualquer linguagem', ok: false },
      ],
      exp: 'Carregar um pickle malicioso pode executar código arbitrário. Para dados externos, prefira JSON.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'JSON é texto e interoperável; pickle é binário e só Python. CSV é para tabelas.',
      q: 'Para trocar dados com outra linguagem, qual formato preferir?',
      opts: [
        { t: 'pickle', ok: false },
        { t: 'JSON', ok: true },
        { t: 'Nenhum funciona', ok: false },
        { t: 'Apenas pickle binário', ok: false },
      ],
      exp: 'JSON é universal e legível. pickle serve para persistência interna de objetos Python.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Importe o módulo de leitura/escrita de CSV.',
      code: `<span class="kw">import</span> <span class="kw">_______</span>\n\n<span class="kw">with</span> <span class="mt">open</span>(<span class="st">"dados.csv"</span>) <span class="kw">as</span> f:\n    leitor <span class="kw">=</span> csv.reader(f)`,
      q: 'Qual módulo importar para CSV?',
      ans: 'csv',
      exp: 'import csv habilita csv.reader, csv.writer, DictReader e DictWriter.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Serialize o objeto em bytes com a função de "despejo".',
      code: `<span class="kw">import</span> pickle\ndados <span class="kw">=</span> pickle.<span class="kw">_______</span>({<span class="st">"xp"</span>: <span class="nm">10</span>})\n<span class="cm"># dados = bytes serializados</span>`,
      q: 'Qual função serializa um objeto para bytes?',
      ans: 'dumps',
      exp: 'pickle.dumps(obj) devolve os bytes; pickle.loads(bytes) reconstrói o objeto.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise a ida e volta com pickle.',
      code: `<span class="kw">import</span> pickle\noriginal <span class="kw">=</span> [<span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span>]\nb <span class="kw">=</span> pickle.dumps(original)\nvolta <span class="kw">=</span> pickle.loads(b)\n<span class="mt">print</span>(volta <span class="kw">==</span> original)`,
      q: 'O que este código exibe?',
      opts: [
        { t: 'False', ok: false },
        { t: 'Erro', ok: false },
        { t: 'True', ok: true },
        { t: 'Os bytes', ok: false },
      ],
      exp: 'dumps serializa e loads reconstrói uma cópia idêntica. A lista recuperada é igual à original: True.',
    },

  ]
};
