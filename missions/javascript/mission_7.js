// ══════════════════════════════════════════════════════
// JAVASCRIPT — MISSÃO 08 — OBJETOS
// Tema: Propriedades, métodos e this
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_JAVASCRIPT_7 = {
  id: 7,
  title: "MISSÃO 08 — OBJETOS",
  icon: '📦',
  free: false,
  desc: "Objetos agrupam dados relacionados em pares chave-valor. São a estrutura central para modelar coisas do mundo real.",
  objs: [
    "Criar objetos com propriedades",
    "Acessar e alterar valores",
    "Definir métodos e usar this"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Objetos usam chaves <code>{ }</code> com pares <code>chave: valor</code>.',
      q: 'Como criar um objeto com nome "Leon" e nível 5?',
      opts: [
        { t: '[ nome: "Leon", nivel: 5 ]', ok: false },
        { t: '( nome = "Leon" )', ok: false },
        { t: '&lt;nome: "Leon"&gt;', ok: false },
        { t: '{ nome: "Leon", nivel: 5 }', ok: true },
      ],
      exp: 'Objetos literais: { chave: valor, ... }. Aqui, nome e nivel são propriedades.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Acesse propriedades com <strong>ponto</strong> (<code>obj.nome</code>) ou colchetes (<code>obj["nome"]</code>).',
      q: 'Como acessar a propriedade nome de um objeto p?',
      opts: [
        { t: 'p.nome', ok: true },
        { t: 'p->nome', ok: false },
        { t: 'p::nome', ok: false },
        { t: 'nome(p)', ok: false },
      ],
      exp: 'p.nome (notação de ponto) é a forma mais comum de ler uma propriedade.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Você pode adicionar ou alterar propriedades a qualquer momento.',
      q: 'O que p.vidas = 3 faz se vidas não existia?',
      opts: [
        { t: 'Gera erro', ok: false },
        { t: 'Cria a propriedade vidas com valor 3', ok: true },
        { t: 'Ignora a atribuição', ok: false },
        { t: 'Apaga o objeto', ok: false },
      ],
      exp: 'Objetos são dinâmicos: atribuir a uma chave inexistente cria a propriedade.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Um <strong>método</strong> é uma função que é propriedade de um objeto.',
      q: 'O que é um método?',
      opts: [
        { t: 'Uma variável global', ok: false },
        { t: 'Um tipo de loop', ok: false },
        { t: 'Uma função dentro de um objeto', ok: true },
        { t: 'Um array', ok: false },
      ],
      exp: 'Método é uma função ligada ao objeto, geralmente operando sobre seus próprios dados.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Dentro de um método, <code>this</code> se refere ao próprio objeto.',
      q: 'A que this se refere dentro de um método?',
      opts: [
        { t: 'À função global', ok: false },
        { t: 'Ao navegador', ok: false },
        { t: 'A undefined sempre', ok: false },
        { t: 'Ao objeto que possui o método', ok: true },
      ],
      exp: 'this aponta para o objeto dono do método, permitindo acessar suas propriedades (this.nome).',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<code>Object.keys(obj)</code> devolve um array com os nomes das propriedades.',
      q: 'O que Object.keys({a:1, b:2}) retorna?',
      opts: [
        { t: '["a", "b"]', ok: true },
        { t: '[1, 2]', ok: false },
        { t: '2', ok: false },
        { t: '{a, b}', ok: false },
      ],
      exp: 'Object.keys lista as chaves: ["a", "b"]. Object.values daria [1, 2].',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Acessar propriedade inexistente devolve <code>undefined</code>, não erro.',
      q: 'O que { nome: "Leon" }.idade retorna?',
      opts: [
        { t: 'null', ok: false },
        { t: 'undefined', ok: true },
        { t: '0', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: 'Propriedade que não existe devolve undefined, sem lançar erro.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Complete o acesso à propriedade por ponto.',
      code: `<span class="kw">const</span> heroi <span class="kw">=</span> { nome: <span class="st">"Leon"</span> };\n<span class="mt">console</span>.log(heroi<span class="kw">_______</span>nome);\n<span class="cm">// exibe: Leon</span>`,
      q: 'Qual caractere acessa uma propriedade por notação de ponto?',
      ans: '.',
      exp: 'heroi.nome usa o ponto para ler a propriedade nome.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Complete a palavra que referencia o próprio objeto no método.',
      code: `<span class="kw">const</span> p <span class="kw">=</span> {\n  nome: <span class="st">"Leon"</span>,\n  ola() { <span class="kw">return</span> <span class="kw">_______</span>.nome; }\n};`,
      q: 'Qual palavra-chave referencia o próprio objeto?',
      ans: 'this',
      exp: 'this.nome acessa a propriedade nome do objeto dono do método.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise o método usando this.',
      code: `<span class="kw">const</span> conta <span class="kw">=</span> {\n  saldo: <span class="nm">100</span>,\n  depositar(v) { <span class="kw">this</span>.saldo <span class="kw">+=</span> v; }\n};\nconta.depositar(<span class="nm">50</span>);\n<span class="mt">console</span>.log(conta.saldo);`,
      q: 'O que este código exibe?',
      opts: [
        { t: '100', ok: false },
        { t: '50', ok: false },
        { t: '150', ok: true },
        { t: 'undefined', ok: false },
      ],
      exp: 'depositar(50) faz this.saldo (100) += 50 = 150.',
    },

  ]
};
