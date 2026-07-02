// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 46 — MÉTODOS MÁGICOS (DUNDER)
// Tema: __str__, __len__, __eq__ e sobrecarga de operadores
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_45 = {
  id: 45,
  title: "MISSÃO 46 — MÉTODOS MÁGICOS",
  icon: '✨',
  free: false,
  desc: "Métodos dunder (__nome__) deixam seus objetos se comportarem como tipos nativos: imprimir bonito, somar, comparar, ter tamanho.",
  objs: [
    "Definir __str__ e __repr__",
    "Sobrecarregar operadores com __add__ etc.",
    "Implementar __len__ e __eq__"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Métodos <strong>dunder</strong> (double underscore) como <code>__str__</code> personalizam o comportamento do objeto.',
      q: 'O que significa "método dunder"?',
      opts: [
        { t: 'Um método privado', ok: false },
        { t: 'Um método com duplo underscore no nome', ok: true },
        { t: 'Um método estático', ok: false },
        { t: 'Um método sem retorno', ok: false },
      ],
      exp: 'Dunder = "double underscore". __init__, __str__, __add__ são chamados implicitamente pelo Python.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>__str__</code> define o texto amigável exibido por <code>print()</code>.',
      q: 'Qual método print() usa para exibir um objeto?',
      opts: [
        { t: '__repr__ apenas', ok: false },
        { t: '__show__', ok: false },
        { t: '__str__', ok: true },
        { t: '__print__', ok: false },
      ],
      exp: 'print(obj) chama __str__ (com fallback para __repr__ se __str__ não existir).',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>__len__</code> permite que <code>len(obj)</code> funcione no seu objeto.',
      q: 'Qual método faz len(obj) funcionar?',
      opts: [
        { t: '__size__', ok: false },
        { t: '__count__', ok: false },
        { t: '__length__', ok: false },
        { t: '__len__', ok: true },
      ],
      exp: 'Definindo __len__(self) para devolver um inteiro, len(obj) passa a funcionar.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>__add__</code> sobrecarrega o operador <code>+</code>.',
      q: 'Qual método é chamado por a + b?',
      opts: [
        { t: 'a.__add__(b)', ok: true },
        { t: 'a.__plus__(b)', ok: false },
        { t: 'a.__sum__(b)', ok: false },
        { t: 'a.__concat__(b)', ok: false },
      ],
      exp: 'O operador + invoca __add__. Há __sub__ (-), __mul__ (*), __truediv__ (/), etc.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>__eq__</code> define o comportamento do operador <code>==</code>.',
      q: 'Qual método personaliza a comparação com ==?',
      opts: [
        { t: '__equals__', ok: false },
        { t: '__eq__', ok: true },
        { t: '__cmp__', ok: false },
        { t: '__is__', ok: false },
      ],
      exp: '__eq__(self, other) devolve True/False definindo quando dois objetos são considerados iguais.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<code>__repr__</code> deve devolver uma representação técnica, ideal para depuração.',
      q: 'Qual a diferença entre __str__ e __repr__?',
      opts: [
        { t: 'São idênticos', ok: false },
        { t: '__repr__ é mais bonito para o usuário', ok: false },
        { t: '__str__ é para o usuário; __repr__ é técnico/para debug', ok: true },
        { t: '__str__ só funciona em números', ok: false },
      ],
      exp: '__str__ = legível para humanos; __repr__ = sem ambiguidade, usado no console e em repr().',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: '<code>__getitem__</code> permite indexação com <code>obj[chave]</code>.',
      q: 'Qual método faz obj[i] funcionar?',
      opts: [
        { t: '__index__', ok: false },
        { t: '__get__', ok: false },
        { t: '__item__', ok: false },
        { t: '__getitem__', ok: true },
      ],
      exp: 'obj[i] chama __getitem__(self, i), permitindo que o objeto se comporte como lista/dict.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Defina o texto amigável do objeto.',
      code: `<span class="kw">class</span> Carta:\n    <span class="kw">def</span> <span class="kw">_______</span>(self):\n        <span class="kw">return</span> <span class="st">"Ás de Espadas"</span>`,
      q: 'Qual dunder o print() usa para exibir o objeto?',
      ans: '__str__',
      exp: '__str__ devolve o texto exibido por print() e str().',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Sobrecarregue o operador + para somar pontos.',
      code: `<span class="kw">class</span> Placar:\n    <span class="kw">def</span> <span class="kw">_______</span>(self, outro):\n        <span class="kw">return</span> self.pts <span class="kw">+</span> outro.pts`,
      q: 'Qual dunder é chamado pelo operador +?',
      ans: '__add__',
      exp: '__add__(self, outro) é invocado quando você faz placar1 + placar2.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise a sobrecarga de + entre dois objetos.',
      code: `<span class="kw">class</span> V:\n    <span class="kw">def</span> __init__(self, n):\n        self.n <span class="kw">=</span> n\n    <span class="kw">def</span> __add__(self, o):\n        <span class="kw">return</span> V(self.n <span class="kw">+</span> o.n)\n\nr <span class="kw">=</span> V(<span class="nm">2</span>) <span class="kw">+</span> V(<span class="nm">3</span>)\n<span class="mt">print</span>(r.n)`,
      q: 'O que este código exibe?',
      opts: [
        { t: '5', ok: true },
        { t: 'Erro', ok: false },
        { t: '23', ok: false },
        { t: 'V(5)', ok: false },
      ],
      exp: '__add__ soma os atributos n (2 + 3 = 5) e devolve um novo V. r.n é 5.',
    },

  ]
};
