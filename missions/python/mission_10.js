// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 11 — DICIONÁRIOS  [PREMIUM]
// Tema: dict, chave/valor, métodos
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_10 = {
  id: 10,
  title: "MISSÃO 11 — DICIONÁRIOS",
  icon: '📖',
  free: false,
  desc: "Dicionários mapeiam chaves a valores. São a estrutura perfeita para dados com identidade — nomes, configurações, registros.",
  objs: [
    "Criar e acessar dicionários com chaves",
    "Usar .keys(), .values(), .items()",
    "Adicionar, modificar e remover entradas"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Dicionários são criados com chaves <code>{}</code> no formato <code>{"chave": valor}</code>. As chaves devem ser únicas.',
      q: 'Como criar um dict com nome="Leon" e nivel=7?',
      opts: [
        { t: 'p = ["nome", "Leon", "nivel", 7]', ok: false },
        { t: 'p = {"nome": "Leon", "nivel": 7}', ok: true },
        { t: 'p = ("nome"="Leon", "nivel"=7)', ok: false },
        { t: 'p = dict["nome"="Leon"]', ok: false },
      ],
      exp: 'Dicionários usam chave: valor separados por vírgula dentro de {}. Chaves podem ser strings ou números.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Para acessar um valor, use a chave entre colchetes: <code>dict["chave"]</code>.',
      q: 'Como acessar o nome em: agente = {"nome": "Leon", "nivel": 7}?',
      opts: [
        { t: 'agente.nome', ok: false },
        { t: 'agente[0]', ok: false },
        { t: 'agente["nome"]', ok: true },
        { t: 'agente->nome', ok: false },
      ],
      exp: 'agente["nome"] retorna "Leon". agente.get("nome") também funciona e não causa erro se a chave não existir.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Acessar uma chave que não existe com <code>[]</code> causa <code>KeyError</code>. Use <code>.get()</code> para evitar isso.',
      q: 'O que retorna: agente.get("arma") se "arma" não existe no dict?',
      opts: [
        { t: 'KeyError', ok: false },
        { t: 'False', ok: false },
        { t: 'None', ok: true },
        { t: 'Erro de execução', ok: false },
      ],
      exp: '.get("chave") retorna None se a chave não existe (sem erro). .get("chave", "padrão") retorna o padrão especificado.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Para adicionar ou modificar uma entrada, use: <code>dict["chave"] = valor</code>.',
      q: 'Após: d = {"x": 1}; d["y"] = 2, qual é d?',
      opts: [
        { t: '{"x": 1}', ok: false },
        { t: '{"x": 1, "y": 2}', ok: true },
        { t: '{"y": 2}', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: 'd["y"] = 2 adiciona a chave "y" com valor 2. Se "y" já existisse, o valor seria atualizado.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>.keys()</code> retorna todas as chaves, <code>.values()</code> todos os valores, <code>.items()</code> pares (chave, valor).',
      q: 'O que retorna: {"a": 1, "b": 2}.values()?',
      opts: [
        { t: '["a", "b"]', ok: false },
        { t: 'dict_values([1, 2])', ok: true },
        { t: '[("a", 1), ("b", 2)]', ok: false },
        { t: '{1, 2}', ok: false },
      ],
      exp: '.values() retorna um objeto dict_values com os valores. Use list() para converter: list(d.values()) = [1, 2].',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Para remover uma chave, use <code>del dict["chave"]</code> ou <code>dict.pop("chave")</code>.',
      q: '.pop("chave") difere de del dict["chave"] porque:',
      opts: [
        { t: 'pop() é mais rápido', ok: false },
        { t: 'pop() retorna o valor removido', ok: true },
        { t: 'del pode remover múltiplas chaves', ok: false },
        { t: 'Não há diferença', ok: false },
      ],
      exp: '.pop("chave") remove E retorna o valor. del dict["chave"] apenas remove. Ambos causam KeyError se a chave não existe.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: '<code>in</code> verifica se uma chave existe no dicionário.',
      q: 'O que retorna: "nome" in {"nome": "Leon", "nivel": 7}?',
      opts: [
        { t: '"Leon"', ok: false },
        { t: 'True', ok: true },
        { t: 'False', ok: false },
        { t: '1', ok: false },
      ],
      exp: '"nome" in dict verifica a existência da CHAVE. Retorna True pois "nome" é uma chave do dicionário.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Acesse o valor de uma chave.',
      code: `config = {<span class="st">"volume"</span>: <span class="nm">80</span>, <span class="st">"idioma"</span>: <span class="st">"pt"</span>}\n<span class="mt">print</span>(config<span class="kw">_______</span><span class="st">"volume"</span><span class="kw">]</span>)\n<span class="cm"># exibe: 80</span>`,
      q: 'Qual caractere abre o acesso por chave?',
      ans: '[',
      exp: 'config["volume"] acessa o valor da chave "volume". O colchete [ inicia o acesso.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Percorra os pares chave/valor com .items().',
      code: `d = {<span class="st">"hp"</span>: <span class="nm">100</span>, <span class="st">"mp"</span>: <span class="nm">50</span>}\n<span class="kw">for</span> chave, valor <span class="kw">in</span> d.<span class="mt">_______</span>():\n    <span class="mt">print</span>(chave, valor)`,
      q: 'Qual método retorna pares (chave, valor)?',
      ans: 'items',
      exp: '.items() retorna pares (chave, valor). O for desempacota em chave e valor automaticamente.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise este código de inventário.',
      code: `inventario = {<span class="st">"balas"</span>: <span class="nm">30</span>, <span class="st">"granadas"</span>: <span class="nm">2</span>}\ninventario[<span class="st">"balas"</span>] <span class="kw">-=</span> <span class="nm">10</span>\ninventario[<span class="st">"faca"</span>] <span class="kw">=</span> <span class="nm">1</span>\n<span class="mt">print</span>(inventario)`,
      q: 'Qual é o estado final do inventário?',
      opts: [
        { t: '{"balas": 30, "granadas": 2}', ok: false },
        { t: '{"balas": 20, "granadas": 2, "faca": 1}', ok: true },
        { t: '{"balas": 20, "faca": 1}', ok: false },
        { t: 'Erro — não pode adicionar chave nova', ok: false },
      ],
      exp: 'balas -= 10: 30-10=20. inventario["faca"] = 1 adiciona nova chave. Resultado: {"balas": 20, "granadas": 2, "faca": 1}.',
    },

  ]
};
