const MISSION_26 = {
  id: 26,
  title: "MISSÃO 27 — A GALERIA",
  icon: '🖼️',
  free: false,
  desc: "Na galeria de retratos, cada inimigo é uma variação do mesmo tema. Herança permite criar hierarquias de classes — o Regenerador é um Inimigo, mas com poderes extras.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>Herança</strong> permite que uma classe filha (<em>derived</em>) herde campos, properties e métodos de uma classe pai (<em>base</em>), usando o símbolo <code>:</code>.',
      q: 'Qual a sintaxe para Regenerador herdar de Inimigo?',
      hint: 'Dois pontos separam filho de pai',
      opts: [
        { t: 'class Regenerador extends Inimigo', ok: false },
        { t: 'class Regenerador inherits Inimigo', ok: false },
        { t: 'class Regenerador : Inimigo', ok: true },
        { t: 'class Regenerador(Inimigo)', ok: false },
      ],
      exp: '"class Filho : Pai" é a sintaxe de herança em C#. "extends" é Java. C# usa o operador ":".',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Para sobrescrever um método herdado, o pai precisa marcá-lo com <code>virtual</code> e o filho usa <code>override</code>.',
      q: 'O que acontece se tentar override de um método sem virtual no pai?',
      hint: 'O compilador vai reclamar',
      opts: [
        { t: 'Funciona normalmente', ok: false },
        { t: 'Erro de compilação — o método pai deve ser virtual, abstract ou já override', ok: true },
        { t: 'Cria uma nova versão independente', ok: false },
        { t: 'Apenas um aviso, não erro', ok: false },
      ],
      exp: 'Sem "virtual" no pai, não é possível fazer "override" no filho. Use "new" para ocultar (não é polimorfismo real).',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<strong>Polimorfismo</strong>: um objeto de classe filha pode ser referenciado pelo tipo da classe pai. O método chamado é sempre o do objeto real.',
      q: 'Uma variável do tipo "Inimigo" aponta para um "Regenerador". Qual método Atacar() será chamado?',
      hint: 'O método do objeto real, não da referência',
      opts: [
        { t: 'O método Atacar() de Inimigo', ok: false },
        { t: 'O método Atacar() de Regenerador (se for override)', ok: true },
        { t: 'Depende do compilador', ok: false },
        { t: 'Lança exceção de tipo', ok: false },
      ],
      exp: 'Polimorfismo: o método chamado é do objeto real (Regenerador). Isso é "dynamic dispatch" — decisão em runtime.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>base</code> referencia a classe pai. Permite chamar o construtor pai ou métodos sobrescritos do pai.',
      q: 'Como chamar o construtor da classe pai dentro do construtor filho?',
      hint: 'Base é a palavra para o pai',
      opts: [
        { t: 'parent(args)', ok: false },
        { t: 'super(args)', ok: false },
        { t: ': base(args) na assinatura do construtor', ok: true },
        { t: 'Pai.Construtor(args)', ok: false },
      ],
      exp: '"public Filho(args) : base(args)" chama o construtor do pai antes do corpo do filho. Garante inicialização correta.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Para permitir que filhos sobrescrevam um método, marque-o com virtual no pai.',
      code: `<span class="kw">public class</span> Inimigo\n{\n    <span class="kw">public _______</span> <span class="kw">void</span> <span class="mt">Atacar</span>()\n        => Console.<span class="mt">WriteLine</span>(<span class="st">"Ataque básico"</span>);\n}`,
      q: 'Qual palavra-chave permite que filhos sobrescrevam Atacar()?',
      hint: 'Virtual = pode ser sobrescrito',
      ans: 'virtual',
      exp: '"virtual" marca o método como substituível. Sem virtual, filhos não podem fazer override — apenas "new" (que não é polimorfismo).',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Para sobrescrever o método na classe filha, use override.',
      code: `<span class="kw">public class</span> Regenerador : Inimigo\n{\n    <span class="kw">public _______</span> <span class="kw">void</span> <span class="mt">Atacar</span>()\n        => Console.<span class="mt">WriteLine</span>(<span class="st">"Ataque + Regeneração"</span>);\n}`,
      q: 'Qual palavra-chave sobrescreve o método virtual do pai?',
      hint: 'Sobrescrever em inglês',
      ans: 'override',
      exp: '"override" indica que este método substitui o virtual do pai. O compilador verifica se o pai tem um virtual compatível.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Para chamar o método original do pai dentro do método sobrescrito:',
      code: `<span class="kw">public override void</span> <span class="mt">Atacar</span>()\n{\n    <span class="kw">_______</span>.<span class="mt">Atacar</span>(); <span class="cm">// executa o Atacar() do pai primeiro</span>\n    Console.<span class="mt">WriteLine</span>(<span class="st">"+ Veneno!"</span>);\n}`,
      q: 'Qual palavra-chave referencia a implementação da classe pai?',
      hint: 'Base = pai',
      ans: 'base',
      exp: '"base.Atacar()" chama o método Atacar() da classe pai dentro do override. Permite estender sem duplicar código.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Para impedir que uma classe seja herdada, marque-a com sealed.',
      code: `<span class="kw">public _______ class</span> Saddler : Chefe\n{\n    <span class="cm">// Nenhuma classe pode herdar de Saddler</span>\n}`,
      q: 'Qual palavra-chave impede herança da classe?',
      hint: 'Selado, lacrado em inglês',
      ans: 'sealed',
      exp: '"sealed class" não pode ser herdada. "sealed override" num método impede que filhos ainda mais derivados façam override.',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Herança simples — Regenerador herda de Inimigo.',
      code: `<span class="kw">public class</span> Inimigo\n{\n    <span class="kw">public string</span> Nome;\n    <span class="kw">public int</span> HP;\n    <span class="kw">public</span> Inimigo(<span class="kw">string</span> n, <span class="kw">int</span> hp) { Nome=n; HP=hp; }\n}\n<span class="kw">public class</span> Regenerador : Inimigo\n{\n    <span class="kw">public int</span> RegHP;\n    <span class="kw">public</span> Regenerador(<span class="kw">int</span> hp, <span class="kw">int</span> reg) : <span class="kw">base</span>(<span class="st">"Regenerador"</span>, hp)\n        => RegHP = reg;\n}\n<span class="kw">var</span> r = <span class="kw">new</span> Regenerador(<span class="nm">200</span>, <span class="nm">15</span>);\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"{r.Nome} HP:{r.HP} Reg:{r.RegHP}"</span>);`,
      q: 'O que será exibido?',
      hint: 'base("Regenerador", 200) inicializa Nome e HP',
      opts: [
        { t: 'Regenerador HP:200 Reg:15', ok: true },
        { t: 'Inimigo HP:0 Reg:15', ok: false },
        { t: 'Erro — construtor pai não chamado', ok: false },
        { t: 'null HP:200 Reg:15', ok: false },
      ],
      exp: '": base("Regenerador", 200)" chama o construtor de Inimigo. RegHP=15 no corpo filho. Exibe "Regenerador HP:200 Reg:15".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Polimorfismo — método virtual + override em ação.',
      code: `<span class="kw">public class</span> Inimigo\n{\n    <span class="kw">public virtual void</span> <span class="mt">Gritar</span>() => Console.<span class="mt">WriteLine</span>(<span class="st">"Argh!"</span>);\n}\n<span class="kw">public class</span> Cultista : Inimigo\n{\n    <span class="kw">public override void</span> <span class="mt">Gritar</span>() => Console.<span class="mt">WriteLine</span>(<span class="st">"Salazar nos guia!"</span>);\n}\n\nInimigo e = <span class="kw">new</span> Cultista();\ne.<span class="mt">Gritar</span>();`,
      q: 'O que será exibido?',
      hint: 'O tipo real do objeto é Cultista',
      opts: [
        { t: 'Argh!', ok: false },
        { t: 'Salazar nos guia!', ok: true },
        { t: 'Argh! Salazar nos guia!', ok: false },
        { t: 'Erro de tipo', ok: false },
      ],
      exp: 'Polimorfismo: a referência é Inimigo mas o objeto real é Cultista. Gritar() chama o override de Cultista. "Salazar nos guia!"',
    },

    // Q11 — Code
    {
      type: 'code',
      bubble: 'base. — estendendo comportamento do pai.',
      code: `<span class="kw">public class</span> Inimigo\n{\n    <span class="kw">public virtual void</span> <span class="mt">Morrer</span>() => Console.<span class="mt">WriteLine</span>(<span class="st">"[Inimigo morreu]"</span>);\n}\n<span class="kw">public class</span> Chefe : Inimigo\n{\n    <span class="kw">public override void</span> <span class="mt">Morrer</span>()\n    {\n        <span class="kw">base</span>.<span class="mt">Morrer</span>();\n        Console.<span class="mt">WriteLine</span>(<span class="st">"[Cutscene épica de morte]"</span>);\n    }\n}\n<span class="kw">new</span> Chefe().<span class="mt">Morrer</span>();`,
      q: 'O que será exibido?',
      hint: 'base.Morrer() executa primeiro',
      opts: [
        { t: 'Apenas [Cutscene épica de morte]', ok: false },
        { t: '[Inimigo morreu] e depois [Cutscene épica de morte]', ok: true },
        { t: 'Apenas [Inimigo morreu]', ok: false },
        { t: 'As duas linhas em ordem inversa', ok: false },
      ],
      exp: '"base.Morrer()" executa o método pai primeiro: "[Inimigo morreu]". Depois o código do filho: "[Cutscene épica de morte]".',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'Lista polimórfica — processando inimigos de tipos diferentes.',
      code: `<span class="kw">public class</span> Inimigo { <span class="kw">public virtual string</span> <span class="mt">Tipo</span>() => <span class="st">"Inimigo"</span>; }\n<span class="kw">public class</span> Ganado   : Inimigo { <span class="kw">public override string</span> <span class="mt">Tipo</span>() => <span class="st">"Ganado"</span>; }\n<span class="kw">public class</span> Cultista : Inimigo { <span class="kw">public override string</span> <span class="mt">Tipo</span>() => <span class="st">"Cultista"</span>; }\n\n<span class="kw">var</span> sala = <span class="kw">new</span> List&lt;Inimigo&gt;\n    { <span class="kw">new</span> Ganado(), <span class="kw">new</span> Cultista(), <span class="kw">new</span> Ganado() };\n<span class="kw">foreach</span> (<span class="kw">var</span> e <span class="kw">in</span> sala)\n    Console.<span class="mt">Write</span>(e.<span class="mt">Tipo</span>() + <span class="st">" "</span>);`,
      q: 'O que será exibido?',
      hint: 'Cada objeto chama seu próprio Tipo()',
      opts: [
        { t: 'Inimigo Inimigo Inimigo', ok: false },
        { t: 'Ganado Cultista Ganado', ok: true },
        { t: 'Ganado Ganado Cultista', ok: false },
        { t: 'Erro — List<Inimigo> não aceita subtipos', ok: false },
      ],
      exp: 'Lista de Inimigo aceita subtipos (polimorfismo). Cada e.Tipo() chama o override correto. "Ganado Cultista Ganado".',
    },

  ]
};
