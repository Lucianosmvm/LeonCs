// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 45 — HERANÇA E SUPER
// Tema: Herança, super() e MRO
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_44 = {
  id: 44,
  title: "MISSÃO 45 — HERANÇA E SUPER",
  icon: '🧬',
  free: false,
  desc: "Herança reaproveita e especializa classes. super() conecta filha e mãe; o MRO define a ordem em heranças múltiplas.",
  objs: [
    "Herdar e estender classes",
    "Chamar a superclasse com super()",
    "Entender sobrescrita de métodos"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Uma classe herda de outra colocando a mãe entre parênteses: <code>class Filha(Mae):</code>.',
      q: 'Como uma classe herda de outra?',
      opts: [
        { t: 'class Filha(Mae):', ok: true },
        { t: 'class Filha extends Mae:', ok: false },
        { t: 'class Filha : Mae', ok: false },
        { t: 'class Filha inherits Mae:', ok: false },
      ],
      exp: 'A superclasse vai entre parênteses após o nome. A filha ganha atributos e métodos da mãe.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>super()</code> acessa métodos da superclasse.',
      q: 'Para que serve super() em um método?',
      opts: [
        { t: 'Criar uma nova classe', ok: false },
        { t: 'Chamar o método da superclasse', ok: true },
        { t: 'Deletar a instância', ok: false },
        { t: 'Tornar o método estático', ok: false },
      ],
      exp: 'super().__init__(...) chama o construtor da mãe, evitando repetir a inicialização.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Redefinir um método na filha com o mesmo nome é chamado de <strong>sobrescrita</strong> (override).',
      q: 'O que acontece ao definir na filha um método com nome igual ao da mãe?',
      opts: [
        { t: 'Erro de duplicação', ok: false },
        { t: 'Os dois rodam juntos', ok: false },
        { t: 'A versão da filha substitui a da mãe', ok: true },
        { t: 'A versão da mãe prevalece', ok: false },
      ],
      exp: 'A filha sobrescreve o método; usa-se super() se ainda quiser aproveitar o comportamento da mãe.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>isinstance(obj, Classe)</code> considera a hierarquia de herança.',
      q: 'Se Gato herda de Animal, o que isinstance(g, Animal) retorna para um Gato g?',
      opts: [
        { t: 'False', ok: false },
        { t: 'Erro', ok: false },
        { t: 'None', ok: false },
        { t: 'True', ok: true },
      ],
      exp: 'Uma instância de Gato também é um Animal, então isinstance devolve True.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'O <strong>MRO</strong> (Method Resolution Order) define a ordem de busca de métodos em heranças múltiplas.',
      q: 'O que o MRO determina?',
      opts: [
        { t: 'A ordem de busca de métodos entre as superclasses', ok: true },
        { t: 'A memória usada', ok: false },
        { t: 'A ordem de criação de objetos', ok: false },
        { t: 'O número de heranças permitidas', ok: false },
      ],
      exp: 'O MRO (visível em Classe.__mro__) diz qual método é encontrado primeiro na herança múltipla.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Python permite <strong>herança múltipla</strong>: <code>class C(A, B):</code>.',
      q: 'Python suporta herdar de mais de uma classe?',
      opts: [
        { t: 'Não, apenas uma', ok: false },
        { t: 'Sim, é herança múltipla', ok: true },
        { t: 'Só com decorators', ok: false },
        { t: 'Apenas em dataclasses', ok: false },
      ],
      exp: 'class C(A, B) herda de A e B. O MRO resolve conflitos de nomes entre elas.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Chamar <code>super().__init__()</code> costuma ser a primeira linha do __init__ da filha.',
      q: 'Por que chamar super().__init__() na filha?',
      opts: [
        { t: 'Para deletar a mãe', ok: false },
        { t: 'Para tornar a classe abstrata', ok: false },
        { t: 'Para inicializar a parte herdada da mãe', ok: true },
        { t: 'É proibido', ok: false },
      ],
      exp: 'Assim os atributos definidos no __init__ da mãe são criados antes de a filha adicionar os seus.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Chame o construtor da superclasse.',
      code: `<span class="kw">class</span> Cao(Animal):\n    <span class="kw">def</span> __init__(self, nome):\n        <span class="kw">_______</span>().__init__(nome)`,
      q: 'Qual função acessa a superclasse?',
      ans: 'super',
      exp: 'super().__init__(nome) chama o construtor de Animal, reaproveitando sua inicialização.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Faça a classe Gato herdar de Animal.',
      code: `<span class="kw">class</span> Gato(<span class="kw">_______</span>):\n    <span class="kw">def</span> som(self):\n        <span class="kw">return</span> <span class="st">"miau"</span>`,
      q: 'Qual classe deve ir entre parênteses para herdar dela?',
      ans: 'Animal',
      exp: 'class Gato(Animal) faz Gato herdar tudo de Animal, adicionando/sobrescrevendo o que precisar.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise a sobrescrita com uso de super.',
      code: `<span class="kw">class</span> A:\n    <span class="kw">def</span> nome(self):\n        <span class="kw">return</span> <span class="st">"A"</span>\n\n<span class="kw">class</span> B(A):\n    <span class="kw">def</span> nome(self):\n        <span class="kw">return</span> <span class="kw">super</span>().nome() <span class="kw">+</span> <span class="st">"B"</span>\n\n<span class="mt">print</span>(B().nome())`,
      q: 'O que este código exibe?',
      opts: [
        { t: 'A', ok: false },
        { t: 'B', ok: false },
        { t: 'BA', ok: false },
        { t: 'AB', ok: true },
      ],
      exp: 'B.nome chama super().nome() → "A" e concatena "B": resultado "AB".',
    },

  ]
};
