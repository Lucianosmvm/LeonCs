const MISSION_25 = {
  id: 25,
  title: "MISSÃO 26 — A BIBLIOTECA",
  icon: '📚',
  free: false,
  desc: "A biblioteca do castelo guarda segredos que não podem ser acessados por qualquer um. Encapsulamento é a arte de proteger os dados internos de um objeto, expondo apenas o necessário.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>Encapsulamento</strong> é o princípio de esconder os detalhes internos de um objeto e expor apenas uma interface controlada (API pública).',
      q: 'Por que encapsulamento é importante?',
      hint: 'Protege o estado interno de uso indevido',
      opts: [
        { t: 'Para tornar o código mais lento e seguro', ok: false },
        { t: 'Protege o estado interno de modificações inválidas e reduz acoplamento', ok: true },
        { t: 'É obrigatório em todas as linguagens', ok: false },
        { t: 'Apenas para esconder bugs', ok: false },
      ],
      exp: 'Encapsulamento impede que código externo quebre invariantes do objeto (ex: HP nunca negativo). Reduz acoplamento e facilita manutenção.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<strong>Properties</strong> são membros que expõem campos privados com controle de leitura (<code>get</code>) e escrita (<code>set</code>).',
      q: 'Qual a vantagem de usar uma property em vez de um campo público?',
      hint: 'Controle + validação',
      opts: [
        { t: 'Properties são mais rápidas que campos', ok: false },
        { t: 'Permitem adicionar lógica de validação na leitura/escrita sem mudar a interface', ok: true },
        { t: 'Properties sempre retornam string', ok: false },
        { t: 'Não há diferença prática', ok: false },
      ],
      exp: 'Property com set pode validar antes de atribuir: "if (value < 0) throw...". Sem mudar como é usada externamente.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Uma <strong>auto-property</strong> (<code>{ get; set; }</code>) gera automaticamente o campo privado de apoio (backing field).',
      q: 'O que "public int HP { get; set; }" faz internamente?',
      hint: 'O compilador cria o campo privado automaticamente',
      opts: [
        { t: 'Apenas declara uma variável chamada HP', ok: false },
        { t: 'Cria um campo privado oculto e os accessors get/set automaticamente', ok: true },
        { t: 'É equivalente a "public int HP;"', ok: false },
        { t: 'Cria uma constante imutável', ok: false },
      ],
      exp: 'Auto-property: o compilador gera um campo privado "_hp" nos bastidores. Economiza código sem abrir mão de properties.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Uma property com <code>set</code> privado (<code>private set</code>) permite leitura pública mas escrita apenas de dentro da classe.',
      q: 'Quando usar "public int HP { get; private set; }"?',
      hint: 'Leitura livre, escrita protegida',
      opts: [
        { t: 'Quando HP nunca deve ser lido', ok: false },
        { t: 'Quando qualquer código pode ler HP mas só a classe pode modificar', ok: true },
        { t: 'Quando HP precisa de validação na leitura', ok: false },
        { t: 'Para criar uma constante', ok: false },
      ],
      exp: '"private set" — leitura pública, escrita restrita à classe. Expõe o dado sem permitir modificação externa direta.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Declaração de property completa com campo privado e validação no set:',
      code: `<span class="kw">private int</span> _hp;\n<span class="kw">public int</span> HP\n{\n    <span class="kw">get</span> => _hp;\n    <span class="kw">_______</span> { _hp = value > <span class="nm">0</span> ? value : <span class="nm">0</span>; }\n}`,
      q: 'Qual palavra-chave define o accessor de escrita?',
      hint: 'Definir em inglês',
      ans: 'set',
      exp: '"set" define o accessor de escrita. "value" é a palavra reservada que representa o valor sendo atribuído.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Dentro do <code>set</code>, a palavra reservada <code>value</code> representa o valor que está sendo atribuído.',
      code: `<span class="kw">set</span>\n{\n    <span class="kw">if</span> (<span class="kw">_______</span> < <span class="nm">0</span>) <span class="kw">throw new</span> ArgumentException(<span class="st">"HP inválido"</span>);\n    _hp = <span class="kw">_______</span>;\n}`,
      q: 'Qual palavra reservada representa o valor sendo atribuído no set?',
      hint: 'O valor que vem de fora',
      ans: 'value',
      exp: '"value" é sempre o nome do parâmetro implícito do set. Não pode ser renomeado. Representa o que foi atribuído: obj.HP = 50 → value = 50.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Uma property somente leitura usa apenas <code>get</code>, sem set.',
      code: `<span class="kw">public bool</span> EstaVivo => HP > <span class="nm">_______</span>;`,
      q: 'Para verificar se HP > 0 na property de leitura, qual valor colocar?',
      hint: 'Zero',
      ans: '0',
      exp: '"public bool EstaVivo => HP > 0" é uma property somente leitura com expression body. Não precisa de "get" explícito nesse formato.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Uma property <code>init</code> só pode ser definida na construção do objeto (object initializer ou construtor).',
      code: `<span class="kw">public string</span> Id { <span class="kw">get</span>; <span class="kw">_______</span>; }`,
      q: 'Qual accessor permite atribuição apenas na inicialização do objeto?',
      hint: 'Inicializar em inglês',
      ans: 'init',
      exp: '"init" (C# 9+) permite atribuição somente no "new Obj { Id = "X" }". Depois disso, a property é somente leitura. Ideal para objetos imutáveis.',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Property com validação impedindo HP negativo.',
      code: `<span class="kw">public class</span> Personagem\n{\n    <span class="kw">private int</span> _hp;\n    <span class="kw">public int</span> HP\n    {\n        <span class="kw">get</span> => _hp;\n        <span class="kw">set</span> => _hp = value < <span class="nm">0</span> ? <span class="nm">0</span> : value;\n    }\n}\n<span class="kw">var</span> p = <span class="kw">new</span> Personagem();\np.HP = <span class="nm">100</span>;\np.HP -= <span class="nm">150</span>;\nConsole.<span class="mt">WriteLine</span>(p.HP);`,
      q: 'O que será exibido?',
      hint: '100 - 150 = -50, mas o set trata negativos',
      opts: [
        { t: '-50', ok: false },
        { t: '0', ok: true },
        { t: '100', ok: false },
        { t: 'Exceção', ok: false },
      ],
      exp: 'p.HP = 100-150 = -50. O set: value=-50 < 0 → _hp = 0. A validação impede HP negativo. Exibe "0".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Auto-property com private set — proteção simples.',
      code: `<span class="kw">public class</span> Missao\n{\n    <span class="kw">public string</span> Nome { <span class="kw">get</span>; <span class="kw">private set</span>; }\n    <span class="kw">public int</span> XP  { <span class="kw">get</span>; <span class="kw">private set</span>; }\n    <span class="kw">public</span> Missao(<span class="kw">string</span> nome, <span class="kw">int</span> xp)\n        { Nome = nome; XP = xp; }\n}\n<span class="kw">var</span> m = <span class="kw">new</span> Missao(<span class="st">"Infiltração"</span>, <span class="nm">100</span>);\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"{m.Nome}: {m.XP}xp"</span>);`,
      q: 'O que será exibido?',
      hint: 'Construtor define Nome e XP via private set',
      opts: [
        { t: 'Erro — private set', ok: false },
        { t: 'Infiltração: 100xp', ok: true },
        { t: 'Nome: XPxp', ok: false },
        { t: 'null: 0xp', ok: false },
      ],
      exp: 'O construtor pode usar "private set" internamente. Externamente "m.Nome = X" seria erro. Exibe "Infiltração: 100xp".',
    },

    // Q11 — Code
    {
      type: 'code',
      bubble: 'Property computed (calculada) sem backing field.',
      code: `<span class="kw">public class</span> Retangulo\n{\n    <span class="kw">public double</span> Largura { <span class="kw">get</span>; <span class="kw">set</span>; }\n    <span class="kw">public double</span> Altura  { <span class="kw">get</span>; <span class="kw">set</span>; }\n    <span class="kw">public double</span> Area => Largura * Altura;\n}\n<span class="kw">var</span> r = <span class="kw">new</span> Retangulo { Largura = <span class="nm">5</span>, Altura = <span class="nm">3</span> };\nConsole.<span class="mt">WriteLine</span>(r.Area);`,
      q: 'O que será exibido?',
      hint: '5 × 3',
      opts: [
        { t: '8', ok: false },
        { t: '15', ok: true },
        { t: '0', ok: false },
        { t: 'Erro — property sem set', ok: false },
      ],
      exp: '"Area" é uma property calculada: retorna Largura × Altura sem armazenar. 5 × 3 = 15. Sem set pois é derivada.',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'Property init — imutabilidade após criação.',
      code: `<span class="kw">public class</span> Config\n{\n    <span class="kw">public string</span> Servidor { <span class="kw">get</span>; <span class="kw">init</span>; }\n    <span class="kw">public int</span>    Porta    { <span class="kw">get</span>; <span class="kw">init</span>; }\n}\n<span class="kw">var</span> cfg = <span class="kw">new</span> Config { Servidor = <span class="st">"localhost"</span>, Porta = <span class="nm">8080</span> };\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"{cfg.Servidor}:{cfg.Porta}"</span>);\n<span class="cm">// cfg.Porta = 9090; ← erro de compilação!</span>`,
      q: 'O que será exibido?',
      hint: 'Init define os valores na criação',
      opts: [
        { t: 'Erro de compilação', ok: false },
        { t: 'localhost:8080', ok: true },
        { t: 'Servidor:Porta', ok: false },
        { t: 'null:0', ok: false },
      ],
      exp: '"init" aceita atribuição no object initializer. Após a criação, a property é read-only. Exibe "localhost:8080".',
    },

  ]
};
