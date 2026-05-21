const MISSION_37 = {
  id: 37,
  title: "MISSÃO 38 — O AQUEDUTO",
  icon: '💧',
  free: false,
  desc: "O aqueduto transporta dados de um ponto a outro em pacotes eficientes. Tuplas e Records são estruturas leves para agrupar dados relacionados sem a burocracia de criar classes completas.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>Tuplas</strong> (ValueTuple em C# 7+) agrupam múltiplos valores sem criar uma classe. Sintaxe: <code>(tipo1, tipo2)</code> ou com nomes <code>(tipo1 nome1, tipo2 nome2)</code>.',
      q: 'Qual a vantagem das tuplas nomeadas sobre as posicionais (Item1, Item2)?',
      hint: 'Legibilidade',
      opts: [
        { t: 'Tuplas nomeadas são mais rápidas', ok: false },
        { t: 'Permitem acessar campos por nome descritivo em vez de Item1, Item2', ok: true },
        { t: 'Tuplas nomeadas suportam mais de 7 elementos', ok: false },
        { t: 'Não há diferença real', ok: false },
      ],
      exp: '"(int HP, string Nome) p" permite p.HP e p.Nome. Sem nomes, seria p.Item1 e p.Item2 — pouco descritivo.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<strong>Records</strong> (C# 9+) são tipos de referência imutáveis por padrão, com igualdade por valor e sintaxe concisa.',
      q: 'Qual a principal diferença entre record e class?',
      hint: 'Igualdade e imutabilidade',
      opts: [
        { t: 'Records são mais rápidos que classes', ok: false },
        { t: 'Records têm igualdade por valor (conteúdo) e são imutáveis por padrão', ok: true },
        { t: 'Records não podem ter métodos', ok: false },
        { t: 'Records são apenas sintaxe alternativa para class', ok: false },
      ],
      exp: 'class: igualdade por referência. record: igualdade por valor (todos campos iguais = objetos iguais). Records também têm ToString() automático.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<strong>Deconstruction</strong> permite extrair valores de tuplas e objetos em variáveis separadas com a sintaxe <code>var (a, b) = tupla</code>.',
      q: 'O que faz "var (nome, hp) = personagem" (se Personagem tiver Deconstruct)?',
      hint: 'Extrai os valores',
      opts: [
        { t: 'Cria uma cópia do personagem', ok: false },
        { t: 'Extrai os valores para variáveis nome e hp separadas', ok: true },
        { t: 'Converte personagem para tupla', ok: false },
        { t: 'É inválido — apenas tuplas suportam deconstruction', ok: false },
      ],
      exp: 'Deconstruction: extrai valores para variáveis locais de uma vez. Qualquer tipo com Deconstruct() suporta isso, não só tuplas.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<strong>Tipos anônimos</strong> (<code>new { Prop = val }</code>) criam objetos sem nome de tipo, úteis com LINQ mas sem uso fora do método.',
      q: 'Qual a limitação dos tipos anônimos?',
      hint: 'Onde podem ser usados',
      opts: [
        { t: 'Não podem ter propriedades numéricas', ok: false },
        { t: 'Só podem ser usados como var — o tipo não tem nome para usar como parâmetro ou retorno', ok: true },
        { t: 'São mais lentos que classes', ok: false },
        { t: 'Só funcionam dentro de LINQ', ok: false },
      ],
      exp: 'Tipos anônimos: úteis para projeções LINQ locais. Não podem ser retornados de métodos (sem tipo nomeado) nem usados como parâmetro tipado.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Declarando e usando uma tupla nomeada:',
      code: `(<span class="kw">string</span> Nome, <span class="kw">int</span> HP) inimigo = (<span class="st">"_______"</span>, <span class="nm">100</span>);\nConsole.<span class="mt">WriteLine</span>(inimigo.Nome);`,
      q: 'Qual nome de inimigo colocar para exibir "Krauser"?',
      hint: 'O vilão da missão',
      ans: 'Krauser',
      exp: 'Tupla nomeada: (string Nome, int HP). Acesso por nome: inimigo.Nome = "Krauser". Muito mais legível que inimigo.Item1.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Desestruturando uma tupla em variáveis separadas:',
      code: `<span class="kw">var</span> resultado = (<span class="kw">string</span>)(<span class="st">"Leon"</span>, <span class="nm">80</span>);\n<span class="kw">var</span> (nome, hp) = (<span class="st">"Leon"</span>, <span class="nm">_______</span>);\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"{nome}: {hp}hp"</span>);`,
      q: 'Qual número de HP para exibir "Leon: 80hp"?',
      hint: 'O valor de HP de Leon',
      ans: '80',
      exp: '"var (nome, hp) = ("Leon", 80)" desestrutura: nome="Leon", hp=80. Exibe "Leon: 80hp".',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Declarando um record com sintaxe de posicional (positional record):',
      code: `<span class="kw">public _______</span> Inimigo(<span class="kw">string</span> Nome, <span class="kw">int</span> HP);`,
      q: 'Qual palavra-chave declara um record em C# 9+?',
      hint: 'Registro em inglês',
      ans: 'record',
      exp: '"record Inimigo(string Nome, int HP)" — cria tipo imutável com Nome e HP como init-only properties. ToString() e Equals() automáticos.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Para criar uma cópia de um record com uma propriedade modificada, use "with":',
      code: `<span class="kw">var</span> original = <span class="kw">new</span> Inimigo(<span class="st">"Ganado"</span>, <span class="nm">50</span>);\n<span class="kw">var</span> ferido = original <span class="kw">_______</span> { HP = <span class="nm">20</span> };`,
      q: 'Qual palavra-chave cria uma cópia com modificação?',
      hint: 'Com em inglês',
      ans: 'with',
      exp: '"with { HP = 20 }" cria uma cópia do record com HP=20, mantendo Nome="Ganado". Record original inalterado.',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Função retornando tupla — múltiplos valores de retorno.',
      code: `<span class="kw">static</span> (<span class="kw">int</span> min, <span class="kw">int</span> max, <span class="kw">double</span> media) <span class="mt">Stats</span>(<span class="kw">int</span>[] arr)\n    => (arr.<span class="mt">Min</span>(), arr.<span class="mt">Max</span>(), arr.<span class="mt">Average</span>());\n\n<span class="kw">var</span> (min, max, med) = <span class="mt">Stats</span>(<span class="kw">new</span>[] {<span class="nm">10</span>,<span class="nm">50</span>,<span class="nm">30</span>,<span class="nm">20</span>});\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"Min:{min} Max:{max} Med:{med}"</span>);`,
      q: 'O que será exibido?',
      hint: 'Min=10, Max=50, Média de {10,50,30,20}',
      opts: [
        { t: 'Min:10 Max:50 Med:27.5', ok: true },
        { t: 'Min:10 Max:50 Med:25', ok: false },
        { t: 'Min:20 Max:50 Med:27.5', ok: false },
        { t: 'Erro — tupla como retorno inválido', ok: false },
      ],
      exp: 'Min=10, Max=50. Average=(10+50+30+20)/4=110/4=27.5. Desestruturação extrai os três valores.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Record com igualdade por valor.',
      code: `<span class="kw">record</span> Ponto(<span class="kw">int</span> X, <span class="kw">int</span> Y);\n\n<span class="kw">var</span> p1 = <span class="kw">new</span> Ponto(<span class="nm">3</span>, <span class="nm">4</span>);\n<span class="kw">var</span> p2 = <span class="kw">new</span> Ponto(<span class="nm">3</span>, <span class="nm">4</span>);\n<span class="kw">var</span> p3 = <span class="kw">new</span> Ponto(<span class="nm">1</span>, <span class="nm">2</span>);\nConsole.<span class="mt">WriteLine</span>(p1 == p2);\nConsole.<span class="mt">WriteLine</span>(p1 == p3);\nConsole.<span class="mt">WriteLine</span>(p1);`,
      q: 'O que será exibido?',
      hint: 'Records comparam por valor. ToString() é automático.',
      opts: [
        { t: 'False, False, Ponto', ok: false },
        { t: 'True, False, Ponto { X = 3, Y = 4 }', ok: true },
        { t: 'True, True, Ponto', ok: false },
        { t: 'False, False, Ponto { X = 3, Y = 4 }', ok: false },
      ],
      exp: 'p1==p2: mesmo conteúdo → True. p1==p3: conteúdo diferente → False. ToString() automático: "Ponto { X = 3, Y = 4 }".',
    },

    // Q11 — Code
    {
      type: 'code',
      bubble: 'Record "with" para criar variações imutáveis.',
      code: `<span class="kw">record</span> Inimigo(<span class="kw">string</span> Nome, <span class="kw">int</span> HP);\n\n<span class="kw">var</span> ganado = <span class="kw">new</span> Inimigo(<span class="st">"Ganado"</span>, <span class="nm">50</span>);\n<span class="kw">var</span> elite  = ganado <span class="kw">with</span> { HP = <span class="nm">150</span> };\n\nConsole.<span class="mt">WriteLine</span>(ganado);\nConsole.<span class="mt">WriteLine</span>(elite);`,
      q: 'O que será exibido?',
      hint: '"with" copia e modifica. Original inalterado.',
      opts: [
        { t: 'Inimigo { Nome = Ganado, HP = 150 } duas vezes', ok: false },
        { t: 'Inimigo { Nome = Ganado, HP = 50 } e Inimigo { Nome = Ganado, HP = 150 }', ok: true },
        { t: 'Inimigo { Nome = Ganado, HP = 50 } duas vezes', ok: false },
        { t: 'Erro — "with" inválido', ok: false },
      ],
      exp: '"with" cria cópia com HP=150. Original ganado inalterado (HP=50). Records são imutáveis.',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'Tipo anônimo com LINQ — projeção local.',
      code: `<span class="kw">var</span> inimigos = <span class="kw">new</span>[] {\n    <span class="kw">new</span> { Nome=<span class="st">"Ganado"</span>,  HP=<span class="nm">50</span>  },\n    <span class="kw">new</span> { Nome=<span class="st">"Krauser"</span>, HP=<span class="nm">500</span> },\n};\n<span class="kw">var</span> resumo = inimigos\n    .<span class="mt">Select</span>(e => <span class="kw">new</span> { e.Nome, Fraco = e.HP < <span class="nm">100</span> });\n<span class="kw">foreach</span> (<span class="kw">var</span> r <span class="kw">in</span> resumo)\n    Console.<span class="mt">WriteLine</span>(<span class="st">$"{r.Nome}: {r.Fraco}"</span>);`,
      q: 'O que será exibido?',
      hint: 'Ganado HP<100 = true; Krauser HP<100 = false',
      opts: [
        { t: 'Ganado: True e Krauser: False', ok: true },
        { t: 'Ganado: False e Krauser: True', ok: false },
        { t: 'Ganado: True e Krauser: True', ok: false },
        { t: 'Erro — tipo anônimo em Select', ok: false },
      ],
      exp: 'Select projeta para novo anônimo com Nome e Fraco. Ganado(50<100)=True. Krauser(500<100)=False.',
    },

  ]
};
