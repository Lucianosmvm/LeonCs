// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 12 — TUPLAS E SETS  [PREMIUM]
// Tema: tuple (imutável), set (único), operações
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_11 = {
  id: 11,
  title: "MISSÃO 12 — TUPLAS E SETS",
  icon: '🔒',
  free: false,
  desc: "Tuplas guardam dados imutáveis. Sets eliminam duplicatas automaticamente. Cada estrutura tem seu caso de uso ideal.",
  objs: [
    "Entender tuplas e sua imutabilidade",
    "Criar e operar sets",
    "Saber quando usar cada estrutura"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Tuplas são criadas com parênteses <code>()</code>. São <strong>imutáveis</strong> — não podem ser modificadas após criação.',
      q: 'Qual é a diferença principal entre lista e tupla?',
      opts: [
        { t: 'Tuplas aceitam mais tipos de dados', ok: false },
        { t: 'Não há diferença prática', ok: false },
        { t: 'Listas usam mais memória sempre', ok: false },
        { t: 'Tuplas são mais rápidas para leitura e imutáveis', ok: true },
      ],
      exp: 'Tuplas são imutáveis (não podem ser alteradas) e ligeiramente mais eficientes. Use-as para dados que não devem mudar.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Tuplas são acessadas com índices, assim como listas.',
      q: 'O que retorna: coords = (10, 20, 30); coords[1]?',
      opts: [
        { t: '10', ok: false },
        { t: 'Erro', ok: false },
        { t: '20', ok: true },
        { t: '30', ok: false },
      ],
      exp: 'coords[1] = 20. Índices em tuplas funcionam igual a listas. coords[-1] = 30 (último).',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Tentar modificar uma tupla causa TypeError.',
      q: 'O que acontece: t = (1, 2, 3); t[0] = 10?',
      opts: [
        { t: 'Funciona silenciosamente', ok: false },
        { t: 'TypeError — tupla é imutável', ok: true },
        { t: 't vira (10, 2, 3)', ok: false },
        { t: 'AttributeError', ok: false },
      ],
      exp: 'Tuplas não permitem atribuição de índices. TypeError: \'tuple\' object does not support item assignment.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Sets são criados com <code>{}</code> (sem chave:valor) ou <code>set()</code>. Eles <strong>não permitem duplicatas</strong> e não têm ordem.',
      q: 'O que resulta em: set([1, 2, 2, 3, 3, 3])?',
      opts: [
        { t: '[1, 2, 2, 3, 3, 3]', ok: false },
        { t: '{1, 2, 3}', ok: true },
        { t: '{1, 2, 2, 3}', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: 'Sets eliminam duplicatas automaticamente. set([1,2,2,3,3,3]) = {1, 2, 3}.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Sets suportam operações matemáticas de conjuntos: união, interseção, diferença.',
      q: 'O que retorna: {1, 2, 3} & {2, 3, 4}?',
      opts: [
        { t: '{1, 2, 3, 4}', ok: false },
        { t: '{2, 3}', ok: true },
        { t: '{1, 4}', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: '& é interseção — elementos em AMBOS os sets. {1,2,3} ∩ {2,3,4} = {2, 3}. | é união.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Sets não têm índices — você não pode acessar por posição.',
      q: 'O que acontece: s = {1, 2, 3}; s[0]?',
      opts: [
        { t: 'O primeiro elemento', ok: false },
        { t: 'Depende da ordem de inserção', ok: false },
        { t: '1', ok: false },
        { t: 'TypeError — sets não suportam índices', ok: true },
      ],
      exp: 'Sets são não-ordenados e não têm índices. TypeError: \'set\' object is not subscriptable.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: '<code>.add()</code> adiciona ao set; <code>.discard()</code> remove sem erro se não existir.',
      q: '.discard() difere de .remove() porque:',
      opts: [
        { t: '.discard() é mais rápido', ok: false },
        { t: '.discard() não gera erro se o elemento não existir', ok: true },
        { t: 'Não há diferença', ok: false },
        { t: '.remove() pode remover múltiplos', ok: false },
      ],
      exp: '.discard(x) silenciosamente ignora se x não está no set. .remove(x) lança KeyError se x não existe.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Desempacote uma tupla em variáveis.',
      code: `ponto = (<span class="nm">3</span>, <span class="nm">7</span>)\nx, <span class="kw">_______</span> = ponto\n<span class="mt">print</span>(x, y)\n<span class="cm"># exibe: 3 7</span>`,
      q: 'Qual variável recebe o segundo valor da tupla?',
      ans: 'y',
      exp: 'Desempacotamento: x, y = (3, 7) atribui x=3 e y=7 simultaneamente. Muito útil com coordenadas e retornos múltiplos.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Adicione elemento ao set.',
      code: `cores = {<span class="st">"vermelho"</span>, <span class="st">"azul"</span>}\ncores.<span class="mt">_______</span>(<span class="st">"verde"</span>)\n<span class="mt">print</span>(len(cores))\n<span class="cm"># exibe: 3</span>`,
      q: 'Qual método adiciona ao set?',
      ans: 'add',
      exp: '.add("verde") adiciona ao set. len(cores) = 3 pois agora tem 3 elementos únicos.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Use set para eliminar duplicatas.',
      code: `ids = [<span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">2</span>, <span class="nm">3</span>, <span class="nm">1</span>, <span class="nm">4</span>]\nunicos = <span class="mt">list</span>(<span class="mt">set</span>(ids))\n<span class="mt">print</span>(<span class="mt">len</span>(unicos))`,
      q: 'O que este código exibe?',
      opts: [
        { t: '4', ok: true },
        { t: 'Erro', ok: false },
        { t: '6', ok: false },
        { t: '3', ok: false },
      ],
      exp: 'set(ids) elimina duplicatas: {1, 2, 3, 4}. list() converte de volta. len = 4 elementos únicos.',
    },

  ]
};
