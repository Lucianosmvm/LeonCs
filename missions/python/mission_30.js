// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 31 — TYPE HINTS
// Tema: Anotações de tipo e o módulo typing
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_30 = {
  id: 30,
  title: "MISSÃO 31 — TYPE HINTS",
  icon: '🏷️',
  free: false,
  desc: "Anotações de tipo tornam o código mais claro e permitem que ferramentas peguem erros antes de rodar. Profissionalismo em ação.",
  objs: [
    "Anotar variáveis, parâmetros e retornos",
    "Usar tipos do módulo typing",
    "Entender que hints não mudam a execução"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Type hints anotam o tipo esperado, mas o Python <strong>não os impõe</strong> em tempo de execução.',
      q: 'O que os type hints fazem em tempo de execução?',
      opts: [
        { t: 'Convertem os valores automaticamente', ok: false },
        { t: 'Impedem a execução se o tipo errar', ok: false },
        { t: 'Nada — são apenas anotações informativas', ok: true },
        { t: 'Aceleram o programa', ok: false },
      ],
      exp: 'Hints não alteram a execução. Ferramentas como mypy os checam estaticamente; em runtime são ignorados.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Anotamos um parâmetro com <code>nome: tipo</code> e o retorno com <code>-&gt; tipo</code>.',
      q: 'Como anotar que uma função retorna um int?',
      opts: [
        { t: 'def f() : int', ok: false },
        { t: 'def f() => int:', ok: false },
        { t: 'def f() as int:', ok: false },
        { t: 'def f() -> int:', ok: true },
      ],
      exp: 'A seta -> antes dos dois-pontos anota o tipo de retorno: def f() -> int:.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'A ferramenta <code>mypy</code> verifica os tipos estaticamente, sem executar o código.',
      q: 'O que o mypy faz?',
      opts: [
        { t: 'Verifica os tipos estaticamente', ok: true },
        { t: 'Executa os testes', ok: false },
        { t: 'Formata o código', ok: false },
        { t: 'Instala pacotes', ok: false },
      ],
      exp: 'mypy analisa as anotações e aponta incompatibilidades de tipo antes da execução.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Para anotar uma lista de inteiros, usa-se <code>list[int]</code> (Python 3.9+).',
      q: 'Como anotar uma lista de inteiros?',
      opts: [
        { t: 'list(int)', ok: false },
        { t: 'list[int]', ok: true },
        { t: 'array<int>', ok: false },
        { t: 'int[]', ok: false },
      ],
      exp: 'list[int] descreve uma lista cujos elementos são int. Antes do 3.9 usava-se typing.List[int].',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>Optional[X]</code> significa "X ou None".',
      q: 'O que Optional[str] representa?',
      opts: [
        { t: 'Uma str obrigatória', ok: false },
        { t: 'Uma lista de str', ok: false },
        { t: 'Uma str ou None', ok: true },
        { t: 'Qualquer tipo', ok: false },
      ],
      exp: 'Optional[str] equivale a Union[str, None] — o valor pode ser uma string ou None.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Muitos tipos genéricos ficam no módulo <code>typing</code> (Dict, Optional, Union, Callable...).',
      q: 'De qual módulo vêm Optional e Union?',
      opts: [
        { t: 'types', ok: false },
        { t: 'abc', ok: false },
        { t: 'collections', ok: false },
        { t: 'typing', ok: true },
      ],
      exp: 'from typing import Optional, Union, Callable, Any. É o módulo padrão para anotações mais ricas.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: '<code>Any</code> desativa a checagem: aceita qualquer tipo.',
      q: 'O que a anotação Any indica?',
      opts: [
        { t: 'Qualquer tipo, sem checagem', ok: true },
        { t: 'Somente None', ok: false },
        { t: 'Somente números', ok: false },
        { t: 'Um tipo desconhecido inválido', ok: false },
      ],
      exp: 'Any é a "válvula de escape" do sistema de tipos: compatível com tudo. Use com moderação.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Anote o tipo de retorno da função.',
      code: `<span class="kw">def</span> somar(a: <span class="mt">int</span>, b: <span class="mt">int</span>) <span class="kw">_______</span> <span class="mt">int</span>:\n    <span class="kw">return</span> a <span class="kw">+</span> b`,
      q: 'Qual símbolo anota o tipo de retorno (dois caracteres)?',
      ans: '->',
      exp: 'A seta -> antes dos dois-pontos indica o tipo devolvido pela função.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Importe o tipo que representa "valor ou None".',
      code: `<span class="kw">from</span> typing <span class="kw">import</span> <span class="kw">_______</span>\n\n<span class="kw">def</span> achar(id) <span class="kw">-&gt;</span> Optional[<span class="mt">str</span>]:\n    ...`,
      q: 'Qual tipo de typing significa "X ou None"?',
      ans: 'Optional',
      exp: 'from typing import Optional habilita Optional[str], ou seja str | None.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise se os hints afetam o resultado.',
      code: `<span class="kw">def</span> dobro(x: <span class="mt">int</span>) <span class="kw">-&gt;</span> <span class="mt">int</span>:\n    <span class="kw">return</span> x <span class="kw">*</span> <span class="nm">2</span>\n\n<span class="mt">print</span>(dobro(<span class="st">"ab"</span>))`,
      q: 'O que este código exibe?',
      opts: [
        { t: 'TypeError em runtime', ok: false },
        { t: 'abab', ok: true },
        { t: 'ab', ok: false },
        { t: 'Erro de anotação', ok: false },
      ],
      exp: 'Hints não são impostos: "ab" * 2 é permitido e resulta em "abab". mypy alertaria, mas o Python roda normal.',
    },

  ]
};
