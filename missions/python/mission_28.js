// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 29 — CONCORRÊNCIA E ASYNC
// Tema: threading, async/await e o GIL
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_28 = {
  id: 28,
  title: "MISSÃO 29 — CONCORRÊNCIA E ASYNC",
  icon: '⚡',
  free: false,
  desc: "Fazer várias coisas ao mesmo tempo acelera tarefas de espera (rede, disco). Threads e async são as ferramentas.",
  objs: [
    "Entender concorrência vs paralelismo",
    "Conhecer threading e o GIL",
    "Escrever corrotinas com async/await"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>Concorrência</strong> é lidar com várias tarefas em progresso; <strong>paralelismo</strong> é executá-las literalmente ao mesmo tempo.',
      q: 'Qual a diferença central entre concorrência e paralelismo?',
      opts: [
        { t: 'Concorrência intercala tarefas; paralelismo as executa simultaneamente', ok: true },
        { t: 'São exatamente a mesma coisa', ok: false },
        { t: 'Concorrência só existe com várias CPUs', ok: false },
        { t: 'Paralelismo é mais lento que concorrência', ok: false },
      ],
      exp: 'Concorrência = estrutura para alternar entre tarefas; paralelismo = execução simultânea real (vários núcleos).',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'O <strong>GIL</strong> (Global Interpreter Lock) permite apenas uma thread executando bytecode Python por vez no CPython.',
      q: 'O que o GIL limita no CPython?',
      opts: [
        { t: 'O número de arquivos abertos', ok: false },
        { t: 'Uma thread executando bytecode por vez', ok: true },
        { t: 'O tamanho das listas', ok: false },
        { t: 'A memória disponível', ok: false },
      ],
      exp: 'Por causa do GIL, threads não dão paralelismo real em CPU-bound. Para isso use multiprocessing.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Threads brilham em tarefas <strong>I/O-bound</strong> (espera de rede, disco), onde o GIL é liberado durante a espera.',
      q: 'Threads são mais úteis para qual tipo de tarefa?',
      opts: [
        { t: 'Cálculo pesado de CPU', ok: false },
        { t: 'Tarefas I/O-bound (espera de rede/disco)', ok: true },
        { t: 'Renderização gráfica', ok: false },
        { t: 'Compressão de vídeo', ok: false },
      ],
      exp: 'Em I/O-bound, a thread espera muito; o GIL é liberado nesse intervalo, permitindo outras threads avançarem.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Para paralelismo real de CPU, <code>multiprocessing</code> usa processos separados, cada um com seu próprio interpretador.',
      q: 'Qual módulo dá paralelismo real em tarefas CPU-bound?',
      opts: [
        { t: 'threading', ok: false },
        { t: 'asyncio', ok: false },
        { t: 'queue', ok: false },
        { t: 'multiprocessing', ok: true },
      ],
      exp: 'multiprocessing cria processos independentes, contornando o GIL e usando múltiplos núcleos de verdade.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Uma função definida com <code>async def</code> vira uma <strong>corrotina</strong>.',
      q: 'O que async def cria?',
      opts: [
        { t: 'Uma corrotina', ok: true },
        { t: 'Uma thread', ok: false },
        { t: 'Um processo', ok: false },
        { t: 'Um generator comum', ok: false },
      ],
      exp: 'Chamar uma função async def não a executa: devolve um objeto corrotina, agendado por um event loop.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Dentro de uma corrotina, <code>await</code> pausa até a operação assíncrona terminar.',
      q: 'O que await faz dentro de uma corrotina?',
      opts: [
        { t: 'Cria uma nova thread', ok: false },
        { t: 'Encerra o programa', ok: false },
        { t: 'Ignora o resultado', ok: false },
        { t: 'Pausa até a operação assíncrona concluir', ok: true },
      ],
      exp: 'await libera o event loop para rodar outras corrotinas enquanto a operação aguardada não termina.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'O <code>asyncio</code> fornece o <strong>event loop</strong> que agenda e executa as corrotinas.',
      q: 'Qual módulo fornece o event loop para async/await?',
      opts: [
        { t: 'threading', ok: false },
        { t: 'concurrent', ok: false },
        { t: 'asyncio', ok: true },
        { t: 'multiprocessing', ok: false },
      ],
      exp: 'asyncio.run(corrotina()) cria o event loop, executa a corrotina e o encerra ao final.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Defina uma corrotina.',
      code: `<span class="kw">_______</span> <span class="kw">def</span> tarefa():\n    <span class="kw">await</span> asyncio.sleep(<span class="nm">1</span>)\n    <span class="mt">print</span>(<span class="st">"pronto"</span>)`,
      q: 'Qual palavra-chave, antes de def, cria uma corrotina?',
      ans: 'async',
      exp: 'async def tarefa() define uma corrotina que pode usar await no corpo.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Aguarde a operação assíncrona dentro da corrotina.',
      code: `<span class="kw">async</span> <span class="kw">def</span> baixar():\n    dados <span class="kw">=</span> <span class="kw">_______</span> buscar()\n    <span class="kw">return</span> dados`,
      q: 'Qual palavra-chave aguarda o resultado de uma corrotina?',
      ans: 'await',
      exp: 'await buscar() pausa baixar() até buscar() concluir, sem bloquear o event loop.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise o que ocorre ao chamar uma função async sem await.',
      code: `<span class="kw">import</span> asyncio\n\n<span class="kw">async</span> <span class="kw">def</span> oi():\n    <span class="kw">return</span> <span class="st">"oi"</span>\n\nresultado <span class="kw">=</span> oi()\n<span class="mt">print</span>(<span class="mt">type</span>(resultado).__name__)`,
      q: 'O que este código exibe?',
      opts: [
        { t: 'str', ok: false },
        { t: 'function', ok: false },
        { t: 'coroutine', ok: true },
        { t: 'oi', ok: false },
      ],
      exp: 'Chamar oi() sem await não executa o corpo: devolve um objeto coroutine. Só asyncio.run(oi()) daria "oi".',
    },

  ]
};
