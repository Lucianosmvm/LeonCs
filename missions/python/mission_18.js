// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 19 — ORIENTAÇÃO A OBJETOS  [PREMIUM]
// Tema: class, __init__, métodos, herança básica
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_18 = {
  id: 18,
  title: "MISSÃO 19 — ORIENTAÇÃO A OBJETOS",
  icon: '🏛️',
  free: false,
  desc: "Classes organizam código em estruturas com dados e comportamento. O paradigma orientado a objetos estrutura programas complexos.",
  objs: [
    "Definir classes com class e __init__",
    "Criar instâncias e usar self",
    "Adicionar métodos e entender herança básica"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<code>class Nome:</code> define uma classe. <code>__init__</code> é o construtor — executado ao criar uma instância.',
      q: 'Qual método é chamado automaticamente ao criar um objeto?',
      opts: [
        { t: '__start__', ok: false },
        { t: '__new__', ok: false },
        { t: '__init__', ok: true },
        { t: '__create__', ok: false },
      ],
      exp: '__init__ é o construtor. Executado ao fazer: obj = MinhaClasse(). Inicializa os atributos do objeto.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>self</code> referencia o objeto atual. Todo método de instância deve ter <code>self</code> como primeiro parâmetro.',
      q: 'Para que serve o parâmetro "self" em métodos Python?',
      opts: [
        { t: 'Referencia a instância atual do objeto', ok: true },
        { t: 'É obrigatório apenas no __init__', ok: false },
        { t: 'Referencia a classe, não o objeto', ok: false },
        { t: 'É opcional — pode ser omitido', ok: false },
      ],
      exp: 'self é a referência ao próprio objeto. self.nome = "Leon" cria o atributo "nome" na instância.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Atributos são dados do objeto. Métodos são funções do objeto.',
      q: 'Na classe Agente com hp=100 e metodo atirar(), "hp" é:',
      opts: [
        { t: 'Uma classe', ok: false },
        { t: 'Um atributo', ok: true },
        { t: 'Um parâmetro', ok: false },
        { t: 'Um método', ok: false },
      ],
      exp: 'Atributos = dados (hp, nome, nivel). Métodos = comportamentos (atirar, mover, curar). hp é um atributo.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Para criar uma instância (objeto), chame a classe como uma função.',
      q: 'Como criar um objeto da classe Agente passando nome="Leon"?',
      opts: [
        { t: 'agente = class Agente("Leon")', ok: false },
        { t: 'new Agente(nome="Leon")', ok: false },
        { t: 'Agente.create(nome="Leon")', ok: false },
        { t: 'agente = Agente(nome="Leon")', ok: true },
      ],
      exp: 'Python não usa "new". Chame a classe diretamente: Agente("Leon") cria a instância e chama __init__.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Herança: uma classe pode herdar atributos e métodos de outra.',
      q: 'Como criar classe Sniper que herda de Agente?',
      opts: [
        { t: 'class Sniper(Agente):', ok: true },
        { t: 'class Sniper inherits Agente:', ok: false },
        { t: 'class Sniper <- Agente:', ok: false },
        { t: 'class Sniper extends Agente:', ok: false },
      ],
      exp: 'class Sniper(Agente): herda de Agente. Sniper terá todos os métodos e atributos de Agente.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<code>__str__</code> define como o objeto é exibido pelo print().',
      q: 'Qual método especial define a representação textual de um objeto?',
      opts: [
        { t: '__display__', ok: false },
        { t: '__print__', ok: false },
        { t: '__str__', ok: true },
        { t: '__text__', ok: false },
      ],
      exp: '__str__ é chamado por print() e str(). Defina-o para exibir informações úteis do objeto.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Métodos de instância recebem self. Métodos de classe recebem cls. Métodos estáticos não recebem nenhum.',
      q: 'Qual decorador transforma um método em método estático?',
      opts: [
        { t: '@classmethod', ok: false },
        { t: '@method', ok: false },
        { t: '@static', ok: false },
        { t: '@staticmethod', ok: true },
      ],
      exp: '@staticmethod: não recebe self nem cls. Usado para utilitários que não dependem da instância ou classe.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Defina o construtor da classe.',
      code: `<span class="kw">class</span> Agente:\n    <span class="kw">def</span> <span class="mt">_______</span>(<span class="kw">self</span>, nome, hp):\n        <span class="kw">self</span>.nome = nome\n        <span class="kw">self</span>.hp = hp\n\na = Agente(<span class="st">"Leon"</span>, <span class="nm">100</span>)\n<span class="mt">print</span>(a.nome)`,
      q: 'Qual é o nome do método construtor?',
      ans: '__init__',
      exp: '__init__(self, nome, hp) é o construtor. Cria os atributos self.nome e self.hp na instância.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Acesse o atributo usando self dentro do método.',
      code: `<span class="kw">class</span> Agente:\n    <span class="kw">def</span> __init__(<span class="kw">self</span>, hp):\n        <span class="kw">self</span>.hp = hp\n    <span class="kw">def</span> status(<span class="kw">self</span>):\n        <span class="mt">print</span>(<span class="kw">f</span><span class="st">"HP: {<span class="kw">_______</span>.hp}"</span>)\n\nAgente(<span class="nm">80</span>).status()`,
      q: 'Qual palavra referencia a instância dentro de métodos?',
      ans: 'self',
      exp: 'self.hp acessa o atributo hp da instância. Sem self, Python buscaria uma variável local chamada hp.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise esta classe com método.',
      code: `<span class="kw">class</span> Inimigo:\n    <span class="kw">def</span> __init__(<span class="kw">self</span>, nome, hp):\n        <span class="kw">self</span>.nome = nome\n        <span class="kw">self</span>.hp = hp\n    <span class="kw">def</span> receber_dano(<span class="kw">self</span>, dano):\n        <span class="kw">self</span>.hp <span class="kw">-=</span> dano\n\ng = Inimigo(<span class="st">"Ganado"</span>, <span class="nm">50</span>)\ng.receber_dano(<span class="nm">30</span>)\n<span class="mt">print</span>(g.hp)`,
      q: 'O que este código exibe?',
      opts: [
        { t: 'Erro', ok: false },
        { t: '20', ok: true },
        { t: '50', ok: false },
        { t: '30', ok: false },
      ],
      exp: 'g.hp começa em 50. receber_dano(30): self.hp -= 30 → 50-30=20. print(g.hp) exibe 20.',
    },

  ]
};
