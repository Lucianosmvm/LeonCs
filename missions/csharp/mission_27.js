const MISSION_27 = {
  id: 27,
  title: "MISSÃO 28 — O LABORATÓRIO",
  icon: '🔬',
  free: false,
  desc: "No laboratório do Dr. Salazar, criaturas são moldadas por contratos rígidos. Interfaces definem contratos que qualquer classe pode implementar. Classes abstratas definem moldes incompletos.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Uma <strong>interface</strong> define um contrato — lista de métodos e properties que uma classe deve implementar. Sem implementação própria.',
      q: 'Qual a principal diferença entre interface e classe abstrata?',
      hint: 'Uma pode ter implementação, a outra não (em geral)',
      opts: [
        { t: 'Não há diferença prática', ok: false },
        { t: 'Interface é puro contrato; classe abstrata pode ter implementação parcial e estado', ok: true },
        { t: 'Interface é mais rápida', ok: false },
        { t: 'Classe abstrata pode ser instanciada', ok: false },
      ],
      exp: 'Interface: puro contrato, sem estado, uma classe pode implementar várias. Abstrata: pode ter campos, construtores e métodos implementados.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Uma classe pode implementar <strong>múltiplas interfaces</strong> mas só pode herdar de <strong>uma classe</strong>.',
      q: 'class Inimigo : IAtacavel, ICuravel, IMovivel — isso é válido?',
      hint: 'Quantas interfaces uma classe pode implementar?',
      opts: [
        { t: 'Não — apenas uma interface por classe', ok: false },
        { t: 'Sim — uma classe pode implementar múltiplas interfaces', ok: true },
        { t: 'Apenas se as interfaces não tiverem métodos em comum', ok: false },
        { t: 'Apenas com a palavra multi', ok: false },
      ],
      exp: 'C# permite múltiplas interfaces: "class X : IA, IB, IC" é válido. Mas herança de classe é única: "class X : Base" — apenas uma.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Métodos <strong>abstract</strong> em uma classe abstrata não têm implementação. A classe filha concreta DEVE implementá-los.',
      q: 'O que acontece se uma classe concreta não implementar todos os métodos abstract herdados?',
      hint: 'O compilador não perdoa',
      opts: [
        { t: 'O programa lança exceção em runtime', ok: false },
        { t: 'Erro de compilação — métodos abstract devem ser implementados', ok: true },
        { t: 'Os métodos ficam com comportamento padrão (void)', ok: false },
        { t: 'A classe vira abstrata também automaticamente', ok: false },
      ],
      exp: 'Se a classe concreta não implementar todos os abstract, o compilador exige que ela também seja "abstract". Sem essa flag, erro de compilação.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<strong>Default interface methods</strong> (C# 8+) permitem que interfaces tenham implementação padrão, reduzindo código duplicado.',
      q: 'Qual o benefício de default methods em interfaces?',
      hint: 'Evolução sem quebrar clientes existentes',
      opts: [
        { t: 'Tornam a interface equivalente a uma classe', ok: false },
        { t: 'Permitem adicionar novos métodos sem quebrar classes que já implementam a interface', ok: true },
        { t: 'Aumentam a performance', ok: false },
        { t: 'Não há benefício — é uma má prática', ok: false },
      ],
      exp: 'Default methods: adicione "void NovoMetodo() { ... }" na interface sem quebrar implementações existentes. Backward compatibility.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Interfaces são declaradas com a palavra-chave interface (convenção: nome começa com I maiúsculo).',
      code: `<span class="kw">public _______</span> IAtacavel\n{\n    <span class="kw">void</span> <span class="mt">Atacar</span>(<span class="kw">int</span> dano);\n    <span class="kw">bool</span> <span class="mt">PodeAtacar</span>();\n}`,
      q: 'Qual palavra-chave declara uma interface?',
      hint: 'Interface em inglês',
      ans: 'interface',
      exp: '"interface" declara o contrato. Membros são implicitamente public abstract. A convenção "I" no nome (IAtacavel) é padrão C#.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Para uma classe implementar uma interface, usa-se a mesma sintaxe de herança com ":".',
      code: `<span class="kw">public class</span> Ganado : Inimigo, <span class="kw">_______</span>\n{\n    <span class="kw">public void</span> <span class="mt">Atacar</span>(<span class="kw">int</span> dano) { <span class="cm">/* ... */</span> }\n    <span class="kw">public bool</span> <span class="mt">PodeAtacar</span>() => <span class="kw">true</span>;\n}`,
      q: 'Qual interface de ataque o Ganado deve implementar aqui?',
      hint: 'Interface que define Atacar e PodeAtacar',
      ans: 'IAtacavel',
      exp: '"class Ganado : Inimigo, IAtacavel" — herda de Inimigo E implementa IAtacavel. A classe deve fornecer implementação para todos os membros da interface.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Classes abstratas são declaradas com abstract. Não podem ser instanciadas diretamente.',
      code: `<span class="kw">public _______ class</span> InimigoBase\n{\n    <span class="kw">public abstract void</span> <span class="mt">Atacar</span>();\n    <span class="kw">public void</span> <span class="mt">Morrer</span>() => Console.<span class="mt">WriteLine</span>(<span class="st">"Morreu"</span>);\n}`,
      q: 'Qual palavra-chave torna a classe abstrata?',
      hint: 'Abstrato em inglês',
      ans: 'abstract',
      exp: '"abstract class" não pode ser instanciada. Pode ter métodos abstract (sem corpo) e métodos concretos (com corpo).',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Para implementar um método abstract herdado de uma classe abstrata, use override.',
      code: `<span class="kw">public class</span> Ganado : InimigoBase\n{\n    <span class="kw">public _______</span> <span class="kw">void</span> <span class="mt">Atacar</span>()\n        => Console.<span class="mt">WriteLine</span>(<span class="st">"Ataque Ganado!"</span>);\n}`,
      q: 'Qual palavra-chave implementa o método abstract?',
      hint: 'Sobrescrever',
      ans: 'override',
      exp: '"override" implementa o método abstract do pai. Sem override, o compilador exige que Ganado também seja abstract.',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Interface como contrato — múltiplas implementações.',
      code: `<span class="kw">public interface</span> IDescricao { <span class="kw">string</span> <span class="mt">Descrever</span>(); }\n\n<span class="kw">public class</span> Pistola  : IDescricao\n    { <span class="kw">public string</span> <span class="mt">Descrever</span>() => <span class="st">"Pistola 9mm"</span>; }\n<span class="kw">public class</span> Escopeta : IDescricao\n    { <span class="kw">public string</span> <span class="mt">Descrever</span>() => <span class="st">"Escopeta calibre 12"</span>; }\n\n<span class="kw">var</span> armas = <span class="kw">new</span> List&lt;IDescricao&gt; { <span class="kw">new</span> Pistola(), <span class="kw">new</span> Escopeta() };\n<span class="kw">foreach</span> (<span class="kw">var</span> a <span class="kw">in</span> armas)\n    Console.<span class="mt">WriteLine</span>(a.<span class="mt">Descrever</span>());`,
      q: 'O que será exibido?',
      hint: 'Cada classe implementa Descrever() diferente',
      opts: [
        { t: 'IDescricao IDescricao', ok: false },
        { t: 'Pistola 9mm e Escopeta calibre 12', ok: true },
        { t: 'Descrever Descrever', ok: false },
        { t: 'Erro — interface em List', ok: false },
      ],
      exp: 'List<IDescricao> aceita qualquer implementação. Cada Descrever() chama a versão correta via polimorfismo de interface.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Classe abstrata com método concreto e abstrato.',
      code: `<span class="kw">public abstract class</span> Chefe\n{\n    <span class="kw">public string</span> Nome;\n    <span class="kw">public abstract void</span> <span class="mt">AtaqueEspecial</span>();\n    <span class="kw">public void</span> <span class="mt">Introduzir</span>() => Console.<span class="mt">WriteLine</span>(<span class="st">$"Eu sou {Nome}!"</span>);\n}\n<span class="kw">public class</span> Salazar : Chefe\n{\n    <span class="kw">public</span> Salazar() => Nome = <span class="st">"Ramon Salazar"</span>;\n    <span class="kw">public override void</span> <span class="mt">AtaqueEspecial</span>()\n        => Console.<span class="mt">WriteLine</span>(<span class="st">"Vermes!"</span>);\n}\n<span class="kw">var</span> s = <span class="kw">new</span> Salazar();\ns.<span class="mt">Introduzir</span>();\ns.<span class="mt">AtaqueEspecial</span>();`,
      q: 'O que será exibido?',
      hint: 'Introduzir() vem do pai, AtaqueEspecial() do filho',
      opts: [
        { t: 'Eu sou Ramon Salazar! e Vermes!', ok: true },
        { t: 'Apenas Vermes!', ok: false },
        { t: 'Erro — abstract não pode ter métodos concretos', ok: false },
        { t: 'Eu sou Chefe! e Vermes!', ok: false },
      ],
      exp: '"Introduzir()" é concreto no pai — usa this.Nome="Ramon Salazar". "AtaqueEspecial()" é override do filho. Duas linhas exibidas.',
    },

    // Q11 — Code
    {
      type: 'code',
      bubble: 'Checando tipo com is — pattern matching.',
      code: `<span class="kw">public interface</span> IVenenoso { <span class="kw">int</span> Veneno { <span class="kw">get</span>; } }\n<span class="kw">public class</span> Inimigo { <span class="kw">public int</span> HP = <span class="nm">50</span>; }\n<span class="kw">public class</span> Cobra : Inimigo, IVenenoso\n    { <span class="kw">public int</span> Veneno => <span class="nm">10</span>; }\n\nInimigo e = <span class="kw">new</span> Cobra();\n<span class="kw">if</span> (e <span class="kw">is</span> IVenenoso v)\n    Console.<span class="mt">WriteLine</span>(<span class="st">$"Veneno: {v.Veneno}"</span>);\n<span class="kw">else</span>\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Não é venenoso"</span>);`,
      q: 'O que será exibido?',
      hint: 'Cobra implementa IVenenoso',
      opts: [
        { t: 'Não é venenoso', ok: false },
        { t: 'Veneno: 10', ok: true },
        { t: 'Erro de compilação', ok: false },
        { t: 'Veneno: 0', ok: false },
      ],
      exp: '"e is IVenenoso v" — o pattern verifica se e implementa IVenenoso e extrai para "v". Cobra implementa → v.Veneno = 10.',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'Interface com default method — comportamento padrão opcional.',
      code: `<span class="kw">public interface</span> ILogavel\n{\n    <span class="kw">void</span> <span class="mt">Log</span>(<span class="kw">string</span> msg);\n    <span class="kw">void</span> <span class="mt">LogErro</span>(<span class="kw">string</span> msg) => Log(<span class="st">$"[ERRO] {msg}"</span>);\n}\n<span class="kw">public class</span> Jogo : ILogavel\n{\n    <span class="kw">public void</span> <span class="mt">Log</span>(<span class="kw">string</span> msg) => Console.<span class="mt">WriteLine</span>(msg);\n}\n<span class="kw">var</span> j = <span class="kw">new</span> Jogo();\n((ILogavel)j).<span class="mt">LogErro</span>(<span class="st">"HP zerado"</span>);`,
      q: 'O que será exibido?',
      hint: 'LogErro usa o default method que chama Log()',
      opts: [
        { t: 'HP zerado', ok: false },
        { t: '[ERRO] HP zerado', ok: true },
        { t: 'Erro — default method não implementado', ok: false },
        { t: 'LogErro HP zerado', ok: false },
      ],
      exp: '"Jogo" implementa apenas Log(). LogErro() usa o default da interface, que chama Log("[ERRO] HP zerado"). Exibe "[ERRO] HP zerado".',
    },

  ]
};
