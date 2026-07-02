// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 21 — DECORATORS
// Tema: Funções que modificam funções
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_20 = {
  id: 20,
  title: "MISSÃO 21 — DECORATORS",
  icon: '🎀',
  free: false,
  desc: "Decorators envolvem funções para estender comportamento sem tocar no código original. Poder de metaprogramação em Python.",
  objs: [
    "Entender o que é um decorator",
    "Aplicar decorators com @",
    "Preservar metadados com functools.wraps"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Um <strong>decorator</strong> é uma função que recebe outra função e retorna uma nova função, estendendo o comportamento sem alterar o original.',
      q: 'O que é um decorator em Python?',
      opts: [
        { t: 'Função que recebe outra função e estende seu comportamento', ok: true },
        { t: 'Um tipo de variável especial', ok: false },
        { t: 'Um laço de repetição otimizado', ok: false },
        { t: 'Um módulo da biblioteca padrão', ok: false },
      ],
      exp: 'Decorator é uma função de ordem superior: recebe uma função como argumento e devolve outra função que a "envolve".',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Para aplicar um decorator, usamos o símbolo <code>@</code> na linha acima da definição da função.',
      q: 'Qual símbolo aplica um decorator?',
      opts: [
        { t: '#', ok: false },
        { t: '@', ok: true },
        { t: '$', ok: false },
        { t: '&', ok: false },
      ],
      exp: '@nome_do_decorator escrito acima de def é açúcar sintático para funcao = decorator(funcao).',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Ao envolver uma função, o nome e a docstring originais se perdem. <code>functools.wraps</code> preserva esses metadados.',
      q: 'Qual decorator preserva __name__ e __doc__ da função original?',
      opts: [
        { t: '@staticmethod', ok: false },
        { t: '@property', ok: false },
        { t: '@functools.wraps', ok: true },
        { t: '@classmethod', ok: false },
      ],
      exp: '@functools.wraps(func) aplicado no wrapper interno copia __name__, __doc__ e outros metadados da função decorada.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>@property</code> transforma um método em um atributo de leitura, acessado sem parênteses.',
      q: 'O que @property faz?',
      opts: [
        { t: 'Cria um laço interno', ok: false },
        { t: 'Importa um módulo', ok: false },
        { t: 'Deleta um atributo', ok: false },
        { t: 'Transforma um método em atributo de leitura', ok: true },
      ],
      exp: '@property permite acessar obj.valor em vez de obj.valor(). Útil para atributos calculados com aparência de campo.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Para funcionar com qualquer função, o wrapper interno deve aceitar argumentos arbitrários.',
      q: 'Como o wrapper interno deve receber argumentos genéricos?',
      opts: [
        { t: '*args, **kwargs', ok: true },
        { t: 'apenas args', ok: false },
        { t: 'sem parâmetros', ok: false },
        { t: 'apenas self', ok: false },
      ],
      exp: 'def wrapper(*args, **kwargs) captura qualquer combinação de posicionais e nomeados, repassando para a função original.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<code>@staticmethod</code> define um método que não recebe <code>self</code> nem <code>cls</code>.',
      q: 'O que caracteriza um @staticmethod?',
      opts: [
        { t: 'Recebe self como primeiro parâmetro', ok: false },
        { t: 'Não recebe self nem cls', ok: true },
        { t: 'Recebe cls como primeiro parâmetro', ok: false },
        { t: 'Só existe fora de classes', ok: false },
      ],
      exp: 'Método estático se comporta como função comum dentro do namespace da classe — sem acesso à instância ou à classe.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: '<code>@classmethod</code> recebe a própria classe como primeiro parâmetro, por convenção chamado <code>cls</code>.',
      q: 'Qual é o primeiro parâmetro de um @classmethod?',
      opts: [
        { t: 'self', ok: false },
        { t: 'nenhum', ok: false },
        { t: 'cls', ok: true },
        { t: 'super', ok: false },
      ],
      exp: 'cls referencia a classe, permitindo criar factory methods e acessar atributos de classe.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Aplique o decorator acima da função usando o símbolo correto.',
      code: `<span class="kw">_______</span>meu_log\n<span class="kw">def</span> processar():\n    <span class="mt">print</span>(<span class="st">"rodando"</span>)`,
      q: 'Qual símbolo aplica o decorator meu_log?',
      ans: '@',
      exp: '@meu_log acima de def processar equivale a processar = meu_log(processar).',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Importe a função que preserva metadados ao criar decorators.',
      code: `<span class="kw">from</span> functools <span class="kw">import</span> <span class="kw">_______</span>\n\n<span class="cm"># usado como @wraps(func) no wrapper interno</span>`,
      q: 'Qual função de functools preserva os metadados?',
      ans: 'wraps',
      exp: 'from functools import wraps — depois @wraps(func) no wrapper mantém __name__ e __doc__ originais.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise este decorator que repete a chamada.',
      code: `<span class="kw">def</span> repete(f):\n    <span class="kw">def</span> wrapper():\n        f()\n        f()\n    <span class="kw">return</span> wrapper\n\n<span class="kw">@</span>repete\n<span class="kw">def</span> ola():\n    <span class="mt">print</span>(<span class="st">"oi"</span>)\n\nola()`,
      q: 'O que este código exibe?',
      opts: [
        { t: 'oi (uma vez)', ok: false },
        { t: 'Erro de sintaxe', ok: false },
        { t: 'nada', ok: false },
        { t: 'oi\\noi', ok: true },
      ],
      exp: '@repete substitui ola por wrapper, que chama f() duas vezes. Saída: "oi" seguido de "oi".',
    },

  ]
};
