// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 25 — JSON E APIs
// Tema: Serialização JSON e consumo de APIs
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_24 = {
  id: 24,
  title: "MISSÃO 25 — JSON E APIs",
  icon: '🌐',
  free: false,
  desc: "JSON é o formato universal de troca de dados na web. Aprenda a converter dados e consumir APIs REST.",
  objs: [
    "Serializar e desserializar JSON",
    "Entender o mapeamento JSON ↔ Python",
    "Consumir uma API com requests"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'O módulo padrão <code>json</code> converte entre objetos Python e texto JSON.',
      q: 'Qual módulo trata JSON na biblioteca padrão?',
      opts: [
        { t: 'json', ok: true },
        { t: 'requests', ok: false },
        { t: 'pickle', ok: false },
        { t: 'csv', ok: false },
      ],
      exp: 'import json fornece dumps/loads (strings) e dump/load (arquivos).',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>json.dumps()</code> converte um objeto Python em uma string JSON.',
      q: 'O que json.dumps() faz?',
      opts: [
        { t: 'Lê um arquivo JSON', ok: false },
        { t: 'Faz uma requisição HTTP', ok: false },
        { t: 'Converte objeto Python em string JSON', ok: true },
        { t: 'Valida um esquema JSON', ok: false },
      ],
      exp: 'dumps = "dump string". json.dumps({"a": 1}) devolve o texto \'{"a": 1}\'.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>json.loads()</code> faz o inverso: transforma uma string JSON em objeto Python.',
      q: 'O que json.loads() retorna a partir de \'{"x": 1}\'?',
      opts: [
        { t: 'Uma string', ok: false },
        { t: 'Um dicionário Python', ok: true },
        { t: 'Uma lista', ok: false },
        { t: 'Um objeto JSON especial', ok: false },
      ],
      exp: 'loads = "load string". Um objeto JSON vira dict; um array JSON vira list.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Um objeto JSON (chaves e valores) corresponde a um <code>dict</code> em Python.',
      q: 'Um objeto JSON { } vira qual tipo em Python?',
      opts: [
        { t: 'list', ok: false },
        { t: 'tuple', ok: false },
        { t: 'set', ok: false },
        { t: 'dict', ok: true },
      ],
      exp: 'Objeto JSON → dict; array → list; string → str; number → int/float; true/false → True/False; null → None.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'A biblioteca <code>requests</code> (externa) facilita requisições HTTP.',
      q: 'Qual biblioteca é popular para consumir APIs HTTP?',
      opts: [
        { t: 'requests', ok: true },
        { t: 'json', ok: false },
        { t: 'urllib3.parse', ok: false },
        { t: 'httplib', ok: false },
      ],
      exp: 'requests.get(url) faz uma requisição GET e devolve um objeto Response com .json(), .status_code etc.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'O código de status <code>200</code> indica que a requisição HTTP teve sucesso.',
      q: 'O que o status HTTP 200 indica?',
      opts: [
        { t: 'Recurso não encontrado', ok: false },
        { t: 'Erro do servidor', ok: false },
        { t: 'Sucesso', ok: true },
        { t: 'Redirecionamento', ok: false },
      ],
      exp: '200 = OK. 404 = não encontrado, 500 = erro do servidor, 3xx = redirecionamento, 4xx = erro do cliente.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'O método <code>.json()</code> de um Response já converte o corpo JSON em objeto Python.',
      q: 'O que resp.json() retorna numa resposta da requests?',
      opts: [
        { t: 'A string bruta', ok: false },
        { t: 'O corpo já convertido em dict/list', ok: true },
        { t: 'O código de status', ok: false },
        { t: 'Os cabeçalhos HTTP', ok: false },
      ],
      exp: 'resp.json() desserializa o corpo JSON — equivale a json.loads(resp.text).',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Importe o módulo padrão de JSON.',
      code: `<span class="kw">import</span> <span class="kw">_______</span>\n\ndados <span class="kw">=</span> {<span class="st">"nome"</span>: <span class="st">"Leon"</span>}`,
      q: 'Qual módulo importar para serializar JSON?',
      ans: 'json',
      exp: 'import json habilita dumps, loads, dump e load.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Converta o dicionário em uma string JSON.',
      code: `texto <span class="kw">=</span> json.<span class="kw">_______</span>({<span class="st">"xp"</span>: <span class="nm">100</span>})\n<span class="mt">print</span>(texto)\n<span class="cm"># exibe: {"xp": 100}</span>`,
      q: 'Qual função converte objeto Python em string JSON?',
      ans: 'dumps',
      exp: 'json.dumps(obj) serializa o dict em texto JSON.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise a ida e volta entre JSON e Python.',
      code: `<span class="kw">import</span> json\ntexto <span class="kw">=</span> <span class="st">'{"nivel": 5, "vidas": 3}'</span>\nd <span class="kw">=</span> json.loads(texto)\n<span class="mt">print</span>(d[<span class="st">"nivel"</span>] <span class="kw">+</span> d[<span class="st">"vidas"</span>])`,
      q: 'O que este código exibe?',
      opts: [
        { t: '53', ok: false },
        { t: 'Erro', ok: false },
        { t: '"nivelvidas"', ok: false },
        { t: '8', ok: true },
      ],
      exp: 'loads devolve um dict com inteiros. d["nivel"] + d["vidas"] = 5 + 3 = 8.',
    },

  ]
};
