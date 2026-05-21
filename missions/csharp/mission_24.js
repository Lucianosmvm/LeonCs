const MISSION_24 = {
  id: 24,
  title: "MISSÃO 25 — O GRIMÓRIO",
  icon: '📖',
  free: false,
  desc: "O grimório do castelo revela os segredos mais poderosos: a Orientação a Objetos. Classes são a base de tudo — aprenda a criar e usar objetos como um mago do código.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'<strong>OOP (Programação Orientada a Objetos)</strong> organiza código em objetos que combinam dados (atributos) e comportamentos (métodos).',
      q:'Qual é o principal benefício da OOP em comparação à programação procedural?',
      hint:'Organização + reutilização',
      opts:[
        {t:'O código fica mais rápido automaticamente', ok:false},
        {t:'Modela o mundo real com objetos que têm dados e comportamentos juntos', ok:true},
        {t:'Elimina a necessidade de variáveis', ok:false},
        {t:'Funciona apenas em C#', ok:false},
      ],
      exp:'OOP: encapsula dados e comportamentos em unidades coesas (objetos). Facilita modelar domínios complexos, reutilizar e manter código.',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'Uma <strong>classe</strong> é o molde/blueprint. Um <strong>objeto</strong> é uma instância criada a partir desse molde.',
      q:'Qual a relação entre classe e objeto?',
      hint:'Forma vs. produto',
      opts:[
        {t:'São a mesma coisa', ok:false},
        {t:'Classe é o molde; objeto é a instância criada a partir dele', ok:true},
        {t:'Objeto define a estrutura; classe é a instância', ok:false},
        {t:'Classe só existe em tempo de compilação', ok:false},
      ],
      exp:'Classe "Inimigo" é o blueprint. "new Inimigo()" cria uma instância (objeto). Vários objetos podem ser criados da mesma classe.',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'O <strong>construtor</strong> é um método especial chamado automaticamente ao criar um objeto com <code>new</code>. Inicializa o estado do objeto.',
      q:'Qual é o nome do construtor de uma classe chamada "Inimigo"?',
      hint:'O construtor tem o mesmo nome da classe',
      opts:[
        {t:'Create()', ok:false},
        {t:'Init()', ok:false},
        {t:'Inimigo()', ok:true},
        {t:'New()', ok:false},
      ],
      exp:'O construtor tem o mesmo nome da classe. "class Inimigo { public Inimigo() {} }" — chamado automaticamente no "new Inimigo()".',
    },

    // Q4 — MC
    {
      type:'mc',
      bubble:'Os quatro pilares da OOP são: <strong>Encapsulamento</strong>, <strong>Herança</strong>, <strong>Polimorfismo</strong> e <strong>Abstração</strong>.',
      q:'Qual pilar da OOP permite que uma classe herde características de outra?',
      hint:'Filho herda do pai',
      opts:[
        {t:'Encapsulamento', ok:false},
        {t:'Polimorfismo', ok:false},
        {t:'Herança', ok:true},
        {t:'Abstração', ok:false},
      ],
      exp:'Herança: uma classe filha herda campos e métodos da classe pai. "class Regenerador : Inimigo" herda tudo de Inimigo.',
    },

    // Q5 — MC
    {
      type:'mc',
      bubble:'<code>public</code>, <code>private</code> e <code>protected</code> são <strong>modificadores de acesso</strong> que controlam quem pode acessar o membro.',
      q:'Um campo "private int hp" pode ser acessado de onde?',
      hint:'Private = privado = somente dentro da própria classe',
      opts:[
        {t:'De qualquer lugar do código', ok:false},
        {t:'De classes filhas apenas', ok:false},
        {t:'Somente dentro da própria classe', ok:true},
        {t:'De qualquer classe no mesmo arquivo', ok:false},
      ],
      exp:'"private" = acesso restrito à própria classe. "public" = acesso de qualquer lugar. "protected" = classe + filhas.',
    },

    // Q6 — MC
    {
      type:'mc',
      bubble:'<strong>this</strong> é uma referência ao objeto atual. Usado para diferenciar campos de parâmetros com o mesmo nome.',
      q:'Para que serve a palavra-chave "this" dentro de um método ou construtor?',
      hint:'Referência para si mesmo',
      opts:[
        {t:'Cria uma cópia do objeto', ok:false},
        {t:'Refere-se ao objeto atual — útil para diferenciar campo de parâmetro', ok:true},
        {t:'Chama o construtor pai', ok:false},
        {t:'É obrigatório em todo método', ok:false},
      ],
      exp:'"this.hp = hp" — "this.hp" é o campo da classe, "hp" é o parâmetro. Sem "this", o parâmetro sobrescreveria a si mesmo.',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'Para declarar uma classe em C#:',
      code:`<span class="kw">public _______</span> Inimigo\n{\n    <span class="kw">public string</span> Nome;\n    <span class="kw">public int</span> HP;\n}`,
      q:'Qual palavra-chave define uma classe?',
      hint:'Blueprint em inglês é class',
      ans:'class',
      exp:'"class" define uma classe. "struct" define um tipo de valor. "record" define um tipo imutável de valor/referência.',
    },

    // Q8 — Fill
    {
      type:'fill',
      bubble:'Para criar um objeto (instância) de uma classe:',
      code:`<span class="kw">var</span> ganado = <span class="kw">_______</span> Inimigo();`,
      q:'Qual palavra-chave instancia um objeto?',
      hint:'Novo em inglês',
      ans:'new',
      exp:'"new Inimigo()" aloca memória e chama o construtor. "var ganado = new Inimigo()" cria o objeto e infere o tipo.',
    },

    // Q9 — Fill
    {
      type:'fill',
      bubble:'O construtor é declarado com o mesmo nome da classe e sem tipo de retorno.',
      code:`<span class="kw">public class</span> Inimigo\n{\n    <span class="kw">public int</span> HP;\n    <span class="kw">public _______</span>(int hpInicial)\n    {\n        HP = hpInicial;\n    }\n}`,
      q:'Como se chama o construtor de Inimigo?',
      hint:'Mesmo nome da classe',
      ans:'Inimigo',
      exp:'O construtor tem o mesmo nome da classe e sem "void" ou tipo de retorno. "public Inimigo(int hpInicial)" é o construtor.',
    },

    // Q10 — Fill
    {
      type:'fill',
      bubble:'Para chamar um método de um objeto, usamos o operador ponto (.).',
      code:`<span class="kw">var</span> inimigo = <span class="kw">new</span> Inimigo();\ninimigo<span class="kw">._______</span>();`,
      q:'Qual operador acessa membros de um objeto?',
      hint:'Um ponto',
      ans:'Atacar',
      exp:'O operador "." acessa campos e métodos de um objeto: inimigo.HP, inimigo.Atacar(). Chame o método Atacar do inimigo.',
    },

    // Q11 — Fill
    {
      type:'fill',
      bubble:'Para verificar se um objeto é de um tipo específico, usamos o operador <code>is</code>.',
      code:`<span class="kw">if</span> (inimigo <span class="kw">_______</span> Regenerador)\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Cuidado — regenera!"</span>);`,
      q:'Qual operador verifica o tipo de um objeto em runtime?',
      hint:'É em inglês',
      ans:'is',
      exp:'"is" verifica o tipo: "inimigo is Regenerador" retorna true se inimigo for um Regenerador. Pode combinar com pattern: "if (inimigo is Regenerador r)".',
    },

    // Q12 — Code
    {
      type:'code',
      bubble:'Classe simples com campo e método.',
      code:`<span class="kw">public class</span> Inimigo\n{\n    <span class="kw">public string</span> Nome = <span class="st">"Ganado"</span>;\n    <span class="kw">public int</span> HP = <span class="nm">50</span>;\n    <span class="kw">public void</span> <span class="mt">Apresentar</span>()\n        => Console.<span class="mt">WriteLine</span>(<span class="st">$"{Nome} — HP: {HP}"</span>);\n}\n\n<span class="kw">var</span> e = <span class="kw">new</span> Inimigo();\ne.<span class="mt">Apresentar</span>();`,
      q:'O que será exibido?',
      hint:'Os valores padrão dos campos',
      opts:[
        {t:'Nome — HP: HP', ok:false},
        {t:'Ganado — HP: 50', ok:true},
        {t:'Inimigo — HP: 0', ok:false},
        {t:'e — HP: 50', ok:false},
      ],
      exp:'"new Inimigo()" cria o objeto com os valores padrão. Apresentar() acessa this.Nome e this.HP. Exibe "Ganado — HP: 50".',
    },

    // Q13 — Code
    {
      type:'code',
      bubble:'Construtor inicializando o objeto com parâmetros.',
      code:`<span class="kw">public class</span> Inimigo\n{\n    <span class="kw">public string</span> Nome;\n    <span class="kw">public int</span> HP;\n    <span class="kw">public</span> Inimigo(<span class="kw">string</span> nome, <span class="kw">int</span> hp)\n    { Nome = nome; HP = hp; }\n}\n\n<span class="kw">var</span> r = <span class="kw">new</span> Inimigo(<span class="st">"Regenerador"</span>, <span class="nm">200</span>);\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"{r.Nome}: {r.HP}"</span>);`,
      q:'O que será exibido?',
      hint:'Os valores passados ao construtor',
      opts:[
        {t:'Inimigo: 0', ok:false},
        {t:'Regenerador: 200', ok:true},
        {t:'Nome: HP', ok:false},
        {t:'Ganado: 50', ok:false},
      ],
      exp:'"new Inimigo("Regenerador", 200)" chama o construtor que inicializa Nome="Regenerador" e HP=200. Exibe "Regenerador: 200".',
    },

    // Q14 — Code
    {
      type:'code',
      bubble:'Múltiplos objetos da mesma classe são independentes.',
      code:`<span class="kw">public class</span> Soldado { <span class="kw">public int</span> HP = <span class="nm">100</span>; }\n\n<span class="kw">var</span> s1 = <span class="kw">new</span> Soldado();\n<span class="kw">var</span> s2 = <span class="kw">new</span> Soldado();\ns1.HP -= <span class="nm">40</span>;\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"s1:{s1.HP} s2:{s2.HP}"</span>);`,
      q:'O que será exibido?',
      hint:'s2 não foi modificado',
      opts:[
        {t:'s1:60 s2:60', ok:false},
        {t:'s1:60 s2:100', ok:true},
        {t:'s1:100 s2:100', ok:false},
        {t:'s1:60 s2:40', ok:false},
      ],
      exp:'s1 e s2 são objetos independentes na memória. Modificar s1.HP não afeta s2.HP. s1:60, s2:100.',
    },

    // Q15 — Code
    {
      type:'code',
      bubble:'Método que modifica o estado do objeto.',
      code:`<span class="kw">public class</span> Personagem\n{\n    <span class="kw">public int</span> HP = <span class="nm">100</span>;\n    <span class="kw">public void</span> <span class="mt">ReceberDano</span>(<span class="kw">int</span> dano) => HP -= dano;\n    <span class="kw">public bool</span> <span class="mt">EstaVivo</span>() => HP > <span class="nm">0</span>;\n}\n\n<span class="kw">var</span> leon = <span class="kw">new</span> Personagem();\nleon.<span class="mt">ReceberDano</span>(<span class="nm">30</span>);\nleon.<span class="mt">ReceberDano</span>(<span class="nm">50</span>);\nConsole.<span class="mt">WriteLine</span>(leon.<span class="mt">EstaVivo</span>());`,
      q:'O que será exibido?',
      hint:'100 - 30 - 50 = ?',
      opts:[
        {t:'False', ok:false},
        {t:'True', ok:true},
        {t:'20', ok:false},
        {t:'Erro', ok:false},
      ],
      exp:'HP: 100-30=70, 70-50=20. EstaVivo(): 20 > 0 = true. Exibe "True".',
    },

    // Q16 — Code
    {
      type:'code',
      bubble:'Object initializer — inicializando propriedades sem construtor personalizado.',
      code:`<span class="kw">public class</span> Arma\n{\n    <span class="kw">public string</span> Nome { <span class="kw">get</span>; <span class="kw">set</span>; }\n    <span class="kw">public int</span> Dano { <span class="kw">get</span>; <span class="kw">set</span>; }\n}\n\n<span class="kw">var</span> pistola = <span class="kw">new</span> Arma\n{\n    Nome = <span class="st">"Matilda"</span>,\n    Dano = <span class="nm">25</span>\n};\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"{pistola.Nome}: {pistola.Dano}"</span>);`,
      q:'O que será exibido?',
      hint:'Object initializer define as propriedades',
      opts:[
        {t:'Arma: 0', ok:false},
        {t:'Matilda: 25', ok:true},
        {t:'Nome: Dano', ok:false},
        {t:'Erro — falta construtor', ok:false},
      ],
      exp:'Object initializer: "new Arma { Nome = "Matilda", Dano = 25 }" — define propriedades após a construção. Exibe "Matilda: 25".',
    },

    // Q17 — Code
    {
      type:'code',
      bubble:'this diferenciando campo de parâmetro.',
      code:`<span class="kw">public class</span> Inimigo\n{\n    <span class="kw">private string</span> nome;\n    <span class="kw">private int</span> hp;\n    <span class="kw">public</span> Inimigo(<span class="kw">string</span> nome, <span class="kw">int</span> hp)\n    {\n        <span class="kw">this</span>.nome = nome;\n        <span class="kw">this</span>.hp   = hp;\n    }\n    <span class="kw">public override string</span> <span class="mt">ToString</span>()\n        => <span class="st">$"{nome}({hp})"</span>;\n}\nConsole.<span class="mt">WriteLine</span>(<span class="kw">new</span> Inimigo(<span class="st">"Krauser"</span>, <span class="nm">500</span>));`,
      q:'O que será exibido?',
      hint:'ToString() é chamado automaticamente pelo WriteLine',
      opts:[
        {t:'Inimigo', ok:false},
        {t:'Krauser(500)', ok:true},
        {t:'nome(hp)', ok:false},
        {t:'Erro — private não acessível', ok:false},
      ],
      exp:'"this.nome" e "this.hp" recebem os parâmetros. ToString() é sobrescrito com override. WriteLine chama ToString() automaticamente.',
    },

    // Q18 — Code
    {
      type:'code',
      bubble:'🏆 DESAFIO CHEFE — Sistema de combate com classes.',
      code:`<span class="kw">public class</span> Lutador\n{\n    <span class="kw">public string</span> Nome; <span class="kw">public int</span> HP;\n    <span class="kw">public</span> Lutador(<span class="kw">string</span> n, <span class="kw">int</span> hp) { Nome=n; HP=hp; }\n    <span class="kw">public void</span> <span class="mt">Atacar</span>(Lutador alvo, <span class="kw">int</span> dano) => alvo.HP -= dano;\n    <span class="kw">public bool</span> <span class="mt">Vivo</span>() => HP > <span class="nm">0</span>;\n}\n\n<span class="kw">var</span> leon   = <span class="kw">new</span> Lutador(<span class="st">"Leon"</span>, <span class="nm">100</span>);\n<span class="kw">var</span> krauser = <span class="kw">new</span> Lutador(<span class="st">"Krauser"</span>, <span class="nm">80</span>);\n\nleon.<span class="mt">Atacar</span>(krauser, <span class="nm">50</span>);\nkrauser.<span class="mt">Atacar</span>(leon, <span class="nm">30</span>);\nleon.<span class="mt">Atacar</span>(krauser, <span class="nm">50</span>);\n\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"Leon:{leon.HP} Vivo:{leon.Vivo()} | Krauser:{krauser.HP} Vivo:{krauser.Vivo()}"</span>);`,
      q:'O que será exibido após o combate?',
      hint:'Leon recebe 30 de dano; Krauser recebe 50+50=100',
      opts:[
        {t:'Leon:70 Vivo:True | Krauser:-20 Vivo:False', ok:true},
        {t:'Leon:100 Vivo:True | Krauser:0 Vivo:False', ok:false},
        {t:'Leon:70 Vivo:True | Krauser:0 Vivo:False', ok:false},
        {t:'Leon:70 Vivo:False | Krauser:-20 Vivo:True', ok:false},
      ],
      exp:'leon.HP: 100-30=70. krauser.HP: 80-50-50=-20. leon.Vivo(): 70>0=True. krauser.Vivo(): -20>0=False. Saída: "Leon:70 Vivo:True | Krauser:-20 Vivo:False".',
    },

  ]
};
