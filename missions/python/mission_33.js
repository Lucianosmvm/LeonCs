// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 34 — CONTEXT MANAGERS
// Tema: with, __enter__ / __exit__ e contextlib
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_33 = {
  id: 33,
  title: "MISSÃO 34 — CONTEXT MANAGERS",
  icon: '🚪',
  free: false,
  desc: "O bloco with garante que recursos sejam liberados — arquivos fechados, conexões encerradas — mesmo se der erro no meio.",
  objs: [
    "Usar with para gerenciar recursos",
    "Entender __enter__ e __exit__",
    "Criar context managers com contextlib"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'O bloco <code>with</code> garante a liberação do recurso ao final, mesmo se ocorrer uma exceção.',
      q: 'Qual a principal vantagem do with?',
      opts: [
        { t: 'Deixa o código mais rápido', ok: false },
        { t: 'Libera o recurso automaticamente ao sair do bloco', ok: true },
        { t: 'Cria um loop', ok: false },
        { t: 'Ignora exceções', ok: false },
      ],
      exp: 'with abre e fecha o recurso em torno do bloco. Ex: with open(...) fecha o arquivo mesmo se der erro.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Um context manager implementa os métodos <code>__enter__</code> e <code>__exit__</code>.',
      q: 'Quais métodos definem um context manager?',
      opts: [
        { t: '__init__ e __del__', ok: false },
        { t: '__open__ e __close__', ok: false },
        { t: '__enter__ e __exit__', ok: true },
        { t: '__with__ e __end__', ok: false },
      ],
      exp: '__enter__ roda ao entrar no with (e devolve o objeto do "as"); __exit__ roda ao sair.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'O valor após <code>as</code> vem do retorno de <code>__enter__</code>.',
      q: 'O que a variável do "as" no with recebe?',
      opts: [
        { t: 'O retorno de __exit__', ok: false },
        { t: 'Sempre None', ok: false },
        { t: 'A classe do context manager', ok: false },
        { t: 'O retorno de __enter__', ok: true },
      ],
      exp: 'with obj as x: — x recebe o que __enter__ retornar. Em arquivos, é o próprio objeto de arquivo.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>__exit__</code> é chamado ao sair do bloco, inclusive quando há exceção.',
      q: 'Quando __exit__ é chamado?',
      opts: [
        { t: 'Sempre ao sair do bloco, com ou sem erro', ok: true },
        { t: 'Só se não houver erro', ok: false },
        { t: 'Só no início do bloco', ok: false },
        { t: 'Nunca', ok: false },
      ],
      exp: '__exit__(self, exc_type, exc, tb) sempre roda ao sair, permitindo limpar recursos de forma garantida.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'O decorator <code>@contextmanager</code> (de contextlib) cria um context manager com um generator.',
      q: 'O que @contextmanager permite?',
      opts: [
        { t: 'Fechar o programa', ok: false },
        { t: 'Criar um context manager a partir de um generator', ok: true },
        { t: 'Criar threads', ok: false },
        { t: 'Substituir o for', ok: false },
      ],
      exp: 'Com @contextmanager, o código antes do yield é o __enter__ e o depois é o __exit__.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'No generator de @contextmanager, o <code>yield</code> separa o setup do teardown.',
      q: 'O que o yield representa em um @contextmanager?',
      opts: [
        { t: 'O fim do programa', ok: false },
        { t: 'Um erro', ok: false },
        { t: 'O ponto onde o corpo do with executa', ok: true },
        { t: 'O valor de retorno de __exit__', ok: false },
      ],
      exp: 'Antes do yield = entrar; o valor do yield vira o "as"; depois do yield = sair (limpeza).',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'É possível abrir vários recursos em um único <code>with</code>, separados por vírgula.',
      q: 'Como abrir dois arquivos no mesmo with?',
      opts: [
        { t: 'É proibido', ok: false },
        { t: 'Com with a as x; b as y', ok: false },
        { t: 'Só com dois blocos with aninhados obrigatórios', ok: false },
        { t: 'Com with a as x, b as y:', ok: true },
      ],
      exp: 'with open("a") as x, open("b") as y: gerencia ambos, fechando os dois ao sair.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Abra o arquivo de forma segura, fechando automaticamente.',
      code: `<span class="kw">_______</span> <span class="mt">open</span>(<span class="st">"dados.txt"</span>) <span class="kw">as</span> f:\n    conteudo <span class="kw">=</span> f.read()`,
      q: 'Qual palavra-chave inicia o bloco de gerenciamento de contexto?',
      ans: 'with',
      exp: 'with open(...) as f: garante f.close() ao final, mesmo com exceção.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Complete o método chamado ao entrar no bloco with.',
      code: `<span class="kw">class</span> Timer:\n    <span class="kw">def</span> <span class="kw">_______</span>(self):\n        <span class="mt">print</span>(<span class="st">"inicio"</span>)\n        <span class="kw">return</span> self`,
      q: 'Qual método dunder roda ao ENTRAR no with?',
      ans: '__enter__',
      exp: '__enter__ executa ao entrar no bloco; seu retorno vai para a variável do "as".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise a ordem de execução deste context manager.',
      code: `<span class="kw">class</span> Ctx:\n    <span class="kw">def</span> __enter__(self):\n        <span class="mt">print</span>(<span class="st">"A"</span>); <span class="kw">return</span> self\n    <span class="kw">def</span> __exit__(self, *a):\n        <span class="mt">print</span>(<span class="st">"C"</span>)\n\n<span class="kw">with</span> Ctx():\n    <span class="mt">print</span>(<span class="st">"B"</span>)`,
      q: 'O que este código exibe (em ordem)?',
      opts: [
        { t: 'A B C', ok: true },
        { t: 'B A C', ok: false },
        { t: 'A C B', ok: false },
        { t: 'C B A', ok: false },
      ],
      exp: '__enter__ imprime A, o corpo imprime B, __exit__ imprime C. Ordem: A, B, C.',
    },

  ]
};
