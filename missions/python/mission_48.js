// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 49 — PERFORMANCE
// Tema: Eficiência, built-ins e complexidade
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_48 = {
  id: 48,
  title: "MISSÃO 49 — PERFORMANCE",
  icon: '🚀',
  free: false,
  desc: "Código correto pode ser lento. Escolher a estrutura certa e usar built-ins otimizados faz seus programas voarem.",
  objs: [
    "Escolher estruturas de dados eficientes",
    "Aproveitar built-ins otimizados",
    "Raciocinar sobre complexidade"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Verificar pertinência (<code>x in ...</code>) é O(1) em <strong>set</strong>, mas O(n) em <strong>list</strong>.',
      q: 'Qual estrutura tem busca de pertinência mais rápida?',
      opts: [
        { t: 'set', ok: true },
        { t: 'list', ok: false },
        { t: 'tupla', ok: false },
        { t: 'string', ok: false },
      ],
      exp: 'set usa hashing: "x in conjunto" é O(1) médio. Em lista, precisa varrer tudo: O(n).',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Funções embutidas como <code>sum</code>, <code>min</code>, <code>max</code> são implementadas em C e mais rápidas que loops manuais.',
      q: 'Por que preferir built-ins como sum() a um loop manual?',
      opts: [
        { t: 'Aceitam mais tipos', ok: false },
        { t: 'São implementados em C e mais rápidos', ok: true },
        { t: 'Nunca dão erro', ok: false },
        { t: 'Ocupam mais memória', ok: false },
      ],
      exp: 'Built-ins rodam em código C otimizado, tipicamente superando um for equivalente em Python puro.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Concatenar strings em loop com <code>+=</code> é O(n²); <code>"".join(lista)</code> é O(n).',
      q: 'Qual a forma eficiente de montar uma string a partir de muitas partes?',
      opts: [
        { t: 'Somar com += num loop', ok: false },
        { t: 'Usar append em string', ok: false },
        { t: 'Usar "".join(lista)', ok: true },
        { t: 'Formatar uma a uma com %', ok: false },
      ],
      exp: 'Strings são imutáveis: cada += recria a string. join monta tudo de uma vez, bem mais rápido.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'A notação <strong>Big O</strong> descreve como o tempo cresce com o tamanho da entrada.',
      q: 'O que a complexidade O(n) indica?',
      opts: [
        { t: 'Tempo constante', ok: false },
        { t: 'Tempo cresce ao quadrado', ok: false },
        { t: 'Tempo cresce logaritmicamente', ok: false },
        { t: 'Tempo cresce proporcional ao tamanho da entrada', ok: true },
      ],
      exp: 'O(n) = linear: dobrar a entrada dobra o tempo. O(1) é constante; O(n²) cresce muito mais rápido.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Acessar um valor por chave em um <code>dict</code> é O(1) em média.',
      q: 'Qual a complexidade média de d[chave] em um dict?',
      opts: [
        { t: 'O(1)', ok: true },
        { t: 'O(n)', ok: false },
        { t: 'O(n²)', ok: false },
        { t: 'O(log n)', ok: false },
      ],
      exp: 'Dicts usam tabela hash: acesso, inserção e remoção por chave são O(1) em média.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Generators economizam memória por não materializar toda a sequência.',
      q: 'Quando um generator ajuda no desempenho?',
      opts: [
        { t: 'Ao ordenar listas pequenas', ok: false },
        { t: 'Ao processar grandes volumes sem carregar tudo na memória', ok: true },
        { t: 'Ao acessar por índice', ok: false },
        { t: 'Nunca', ok: false },
      ],
      exp: 'Para fluxos grandes, o generator produz um item por vez, evitando alocar a coleção inteira.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'O módulo <code>timeit</code> mede o tempo de trechos de código com precisão.',
      q: 'Para que serve o módulo timeit?',
      opts: [
        { t: 'Agendar tarefas', ok: false },
        { t: 'Criar temporizadores de interface', ok: false },
        { t: 'Medir o tempo de execução de um trecho', ok: true },
        { t: 'Formatar datas', ok: false },
      ],
      exp: 'timeit roda o trecho muitas vezes e reporta o tempo médio, evitando ruído de medições únicas.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Some a lista com o built-in otimizado.',
      code: `nums <span class="kw">=</span> [<span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span>, <span class="nm">4</span>]\ntotal <span class="kw">=</span> <span class="kw">_______</span>(nums)\n<span class="cm"># total = 10</span>`,
      q: 'Qual built-in soma os elementos?',
      ans: 'sum',
      exp: 'sum(nums) roda em C e é mais rápido e claro que um loop com acumulador.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Converta a lista para a estrutura de busca O(1) antes de checar pertinência muitas vezes.',
      code: `permitidos <span class="kw">=</span> <span class="kw">_______</span>([<span class="st">"a"</span>, <span class="st">"b"</span>, <span class="st">"c"</span>])\n<span class="mt">print</span>(<span class="st">"a"</span> <span class="kw">in</span> permitidos)  <span class="cm"># O(1)</span>`,
      q: 'Qual tipo dá pertinência O(1)?',
      ans: 'set',
      exp: 'set([...]) permite "x in permitidos" em O(1), ideal para checagens repetidas.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise a forma eficiente de juntar strings.',
      code: `partes <span class="kw">=</span> [<span class="st">"a"</span>, <span class="st">"b"</span>, <span class="st">"c"</span>]\nres <span class="kw">=</span> <span class="st">""</span>.join(partes)\n<span class="mt">print</span>(res)`,
      q: 'O que este código exibe?',
      opts: [
        { t: 'a b c', ok: false },
        { t: "['a', 'b', 'c']", ok: false },
        { t: 'a-b-c', ok: false },
        { t: 'abc', ok: true },
      ],
      exp: '"".join(partes) concatena sem separador: "abc" — a forma eficiente e recomendada.',
    },

  ]
};
