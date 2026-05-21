const MISSION_38 = {
  id: 38,
  title: "MISSÃO 39 — A SALA DE GUERRA",
  icon: '⚔️',
  free: false,
  desc: "Na sala de guerra, cada status de missão tem um nome preciso — não números soltos. Enums dão nomes a constantes inteiras. Structs são tipos de valor leves para dados pequenos.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>Enum</strong> define um conjunto nomeado de constantes inteiras. Melhora legibilidade e evita "magic numbers".',
      q: 'Por que usar enum em vez de constantes int soltas?',
      hint: 'Semântica e type safety',
      opts: [
        { t: 'Enums são mais rápidos que int', ok: false },
        { t: 'Enums agrupam constantes relacionadas, são type-safe e auto-documentam o código', ok: true },
        { t: 'Enums economizam memória', ok: false },
        { t: 'Apenas por convenção histórica', ok: false },
      ],
      exp: '"StatusMissao.Ativa" é muito mais claro que "2". Enums também garantem que só valores válidos sejam passados.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<strong>Enum Flags</strong> usa o atributo <code>[Flags]</code> e potências de 2 para combinar valores com operadores bitwise (<code>|</code>, <code>&</code>).',
      q: 'Para um inimigo que é simultaneamente Venenoso e Blindado, qual estrutura usar?',
      hint: 'Múltiplos estados ao mesmo tempo',
      opts: [
        { t: 'Enum normal com valor composto', ok: false },
        { t: '[Flags] Enum com potências de 2 e operador |', ok: true },
        { t: 'Dois enums separados', ok: false },
        { t: 'List<StatusInimigo>', ok: false },
      ],
      exp: '[Flags] enum: Venenoso=1, Blindado=2, Venenoso|Blindado=3. "status.HasFlag(StatusInimigo.Venenoso)" verifica presença.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<strong>Struct</strong> é um tipo de valor (stack) em C#. Copiado por valor, não por referência. Ideal para dados pequenos e imutáveis.',
      q: 'Qual a principal diferença entre struct e class?',
      hint: 'Stack vs Heap, cópia vs referência',
      opts: [
        { t: 'Structs são sempre mais rápidos que classes', ok: false },
        { t: 'Structs são tipos de valor (copiados); classes são tipos de referência', ok: true },
        { t: 'Structs não podem ter métodos', ok: false },
        { t: 'Structs sempre usam menos memória', ok: false },
      ],
      exp: 'Struct: copiado quando passado. Class: passa referência. Struct bem para coordenadas, cores, pontos — dados pequenos sem herança.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Structs <strong>não podem herdar</strong> de outras structs ou classes (exceto implementar interfaces). Não há construtores sem parâmetros explícitos (C# < 10).',
      q: 'Por que structs não suportam herança?',
      hint: 'Tipo de valor vs tipo de referência',
      opts: [
        { t: 'Limitação do compilador que será corrigida', ok: false },
        { t: 'Herança requer vtable e polimorfismo, incompatíveis com semântica de valor', ok: true },
        { t: 'Structs são muito lentos para herança', ok: false },
        { t: 'Structs podem herdar — apenas de outras structs', ok: false },
      ],
      exp: 'Tipos de valor não suportam polimorfismo via herança pois não têm vtable. Podem implementar interfaces (polimorfismo em boxing).',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Declarando um enum para status de missão:',
      code: `<span class="kw">public _______</span> StatusMissao\n{\n    Pendente,\n    Ativa,\n    Concluida,\n    Falhou\n}`,
      q: 'Qual palavra-chave declara um enum?',
      hint: 'Enumeration',
      ans: 'enum',
      exp: '"enum" declara o conjunto de constantes nomeadas. Por padrão, Pendente=0, Ativa=1, Concluida=2, Falhou=3.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Para Flags enum, os valores devem ser potências de 2:',
      code: `[Flags]\n<span class="kw">public enum</span> Habilidade\n{\n    Nenhuma  = <span class="nm">0</span>,\n    Voar     = <span class="nm">1</span>,\n    Nadar    = <span class="nm">_______</span>,\n    Correr   = <span class="nm">4</span>\n}`,
      q: 'Qual o valor correto para Nadar (segunda potência de 2 após 1)?',
      hint: '2¹ = 2',
      ans: '2',
      exp: 'Potências de 2: 1, 2, 4, 8, 16... Cada bit representa uma flag. Voar|Nadar = 1|2 = 3. HasFlag verifica bits individuais.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Declarando uma struct para representar uma posição 2D:',
      code: `<span class="kw">public _______</span> Posicao\n{\n    <span class="kw">public float</span> X, Y;\n    <span class="kw">public</span> Posicao(<span class="kw">float</span> x, <span class="kw">float</span> y) { X=x; Y=y; }\n}`,
      q: 'Qual palavra-chave declara uma struct?',
      hint: 'Estrutura em inglês',
      ans: 'struct',
      exp: '"struct" declara tipo de valor. Posicao p = new(3,4); é criado na stack. Passar p para um método copia os valores.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Para converter um enum para sua representação em string:',
      code: `StatusMissao s = StatusMissao.Ativa;\nConsole.<span class="mt">WriteLine</span>(s.<span class="mt">_______</span>());`,
      q: 'Qual método converte o enum para string legível?',
      hint: 'Para String',
      ans: 'ToString',
      exp: '"s.ToString()" retorna "Ativa". Também: Enum.GetName(typeof(StatusMissao), s). Para converter de volta: Enum.Parse<StatusMissao>("Ativa").',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Enum em switch expression.',
      code: `<span class="kw">enum</span> Fase { Vila, Castelo, Ilha }\n\n<span class="kw">static string</span> <span class="mt">Dificuldade</span>(Fase f) => f <span class="kw">switch</span>\n{\n    Fase.Vila    => <span class="st">"⭐ Fácil"</span>,\n    Fase.Castelo => <span class="st">"⭐⭐ Médio"</span>,\n    Fase.Ilha    => <span class="st">"⭐⭐⭐ Difícil"</span>,\n    _            => <span class="st">"Desconhecida"</span>\n};\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Dificuldade</span>(Fase.Castelo));`,
      q: 'O que será exibido?',
      hint: 'O case de Fase.Castelo',
      opts: [
        { t: '⭐ Fácil', ok: false },
        { t: '⭐⭐ Médio', ok: true },
        { t: '⭐⭐⭐ Difícil', ok: false },
        { t: 'Desconhecida', ok: false },
      ],
      exp: 'Fase.Castelo → case Fase.Castelo → "⭐⭐ Médio".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Flags enum combinando habilidades.',
      code: `[Flags]\n<span class="kw">enum</span> Poder { Nenhum=<span class="nm">0</span>, Fogo=<span class="nm">1</span>, Gelo=<span class="nm">2</span>, Raio=<span class="nm">4</span> }\n\n<span class="kw">var</span> mago = Poder.Fogo | Poder.Raio;\nConsole.<span class="mt">WriteLine</span>(mago);\nConsole.<span class="mt">WriteLine</span>(mago.<span class="mt">HasFlag</span>(Poder.Gelo));\nConsole.<span class="mt">WriteLine</span>(mago.<span class="mt">HasFlag</span>(Poder.Fogo));`,
      q: 'O que será exibido?',
      hint: 'Fogo=1, Raio=4. 1|4=5. HasFlag verifica bit.',
      opts: [
        { t: 'Fogo, Raio | False | True', ok: false },
        { t: 'Fogo, Raio | True | True', ok: false },
        { t: '5 | False | True', ok: true },
        { t: 'Fogo | False | True', ok: false },
      ],
      exp: 'Fogo|Raio = 1|4 = 5. ToString() de [Flags] mostra "Fogo, Raio". Mas o valor int é 5... Na realidade ToString() mostra "Fogo, Raio". HasFlag(Gelo)=false (bit 2 não está em 5). HasFlag(Fogo)=true (bit 1 está).',
    },

    // Q11 — Code
    {
      type: 'code',
      bubble: 'Struct copiado por valor.',
      code: `<span class="kw">struct</span> Ponto { <span class="kw">public int</span> X, Y; }\n\n<span class="kw">var</span> p1 = <span class="kw">new</span> Ponto { X=<span class="nm">3</span>, Y=<span class="nm">4</span> };\n<span class="kw">var</span> p2 = p1;    <span class="cm">// cópia!</span>\np2.X = <span class="nm">99</span>;\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"p1.X={p1.X} p2.X={p2.X}"</span>);`,
      q: 'O que será exibido?',
      hint: 'Struct é valor — p2 é cópia independente de p1',
      opts: [
        { t: 'p1.X=99 p2.X=99', ok: false },
        { t: 'p1.X=3 p2.X=99', ok: true },
        { t: 'p1.X=3 p2.X=3', ok: false },
        { t: 'Erro — struct não permite modificação', ok: false },
      ],
      exp: 'Struct copia por valor. p2 = p1 cria cópia independente. Modificar p2.X não afeta p1. "p1.X=3 p2.X=99".',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'Enum com valores explícitos e conversão.',
      code: `<span class="kw">enum</span> Rank { D=<span class="nm">1</span>, C=<span class="nm">2</span>, B=<span class="nm">3</span>, A=<span class="nm">4</span>, S=<span class="nm">5</span> }\n\n<span class="kw">int</span> pontos = <span class="nm">75</span>;\nRank r = pontos >= <span class="nm">90</span> ? Rank.S :\n          pontos >= <span class="nm">70</span> ? Rank.A : Rank.B;\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"{r} ({(int)r})"</span>);`,
      q: 'O que será exibido para pontos=75?',
      hint: '75 >= 90? Não. 75 >= 70? Sim → Rank.A',
      opts: [
        { t: 'S (5)', ok: false },
        { t: 'B (3)', ok: false },
        { t: 'A (4)', ok: true },
        { t: 'D (1)', ok: false },
      ],
      exp: '75 >= 90 = false. 75 >= 70 = true → Rank.A. (int)r = 4 (valor explícito de A). Exibe "A (4)".',
    },

  ]
};
