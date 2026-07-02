// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 39 — ARGPARSE (CLI)
// Tema: Programas de linha de comando com argparse
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_38 = {
  id: 38,
  title: "MISSÃO 39 — ARGPARSE (CLI)",
  icon: '💻',
  free: false,
  desc: "Ferramentas de linha de comando profissionais leem argumentos, geram ajuda e validam entradas. argparse cuida de tudo isso.",
  objs: [
    "Ler argumentos com argparse",
    "Diferenciar argumentos posicionais de opcionais",
    "Gerar ajuda automática (-h)"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'O módulo padrão <code>argparse</code> interpreta argumentos da linha de comando.',
      q: 'Para que serve o argparse?',
      opts: [
        { t: 'Fazer requisições HTTP', ok: false },
        { t: 'Criar interfaces gráficas', ok: false },
        { t: 'Ler e validar argumentos de linha de comando', ok: true },
        { t: 'Ler arquivos JSON', ok: false },
      ],
      exp: 'argparse transforma sys.argv em valores tipados, com validação e mensagens de ajuda automáticas.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Começa-se criando um <code>ArgumentParser</code>.',
      q: 'Qual objeto é o ponto de partida do argparse?',
      opts: [
        { t: 'CommandLine()', ok: false },
        { t: 'Parser.new()', ok: false },
        { t: 'ArgReader()', ok: false },
        { t: 'ArgumentParser()', ok: true },
      ],
      exp: 'parser = argparse.ArgumentParser(description="...") cria o interpretador de argumentos.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>add_argument("nome")</code> define um argumento <strong>posicional</strong> (obrigatório).',
      q: 'Como é add_argument("arquivo")?',
      opts: [
        { t: 'Um argumento posicional obrigatório', ok: true },
        { t: 'Um argumento opcional', ok: false },
        { t: 'Uma flag booleana', ok: false },
        { t: 'Um comentário', ok: false },
      ],
      exp: 'Sem o prefixo --, o argumento é posicional e obrigatório: o usuário deve informá-lo.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Argumentos com <code>--</code> são <strong>opcionais</strong>: <code>add_argument("--verbose")</code>.',
      q: 'O que o prefixo -- indica em add_argument?',
      opts: [
        { t: 'Que é obrigatório', ok: false },
        { t: 'Que o argumento é opcional', ok: true },
        { t: 'Que é um número', ok: false },
        { t: 'Que é um comentário', ok: false },
      ],
      exp: 'add_argument("--verbose") cria um argumento opcional, informado como --verbose na linha de comando.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>parse_args()</code> lê os argumentos e devolve um objeto com os valores.',
      q: 'O que parse_args() retorna?',
      opts: [
        { t: 'Uma lista de strings', ok: false },
        { t: 'Um dicionário JSON', ok: false },
        { t: 'Um objeto com os argumentos como atributos', ok: true },
        { t: 'None', ok: false },
      ],
      exp: 'args = parser.parse_args(); depois args.arquivo, args.verbose etc. acessam os valores.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'O argparse gera automaticamente a ajuda acessível por <code>-h</code> ou <code>--help</code>.',
      q: 'Como o usuário vê a ajuda de um programa com argparse?',
      opts: [
        { t: 'Digitando help', ok: false },
        { t: 'Não há ajuda automática', ok: false },
        { t: 'Com --info', ok: false },
        { t: 'Com -h ou --help', ok: true },
      ],
      exp: 'argparse cria -h/--help sozinho, listando argumentos e descrições.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Para uma flag liga/desliga use <code>action="store_true"</code>.',
      q: 'O que action="store_true" faz num argumento opcional?',
      opts: [
        { t: 'Vira True se a flag estiver presente', ok: true },
        { t: 'Guarda um número', ok: false },
        { t: 'Torna o argumento obrigatório', ok: false },
        { t: 'Lê vários valores', ok: false },
      ],
      exp: 'add_argument("--debug", action="store_true"): args.debug é True se --debug for passado, senão False.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Importe o módulo de argumentos de linha de comando.',
      code: `<span class="kw">import</span> <span class="kw">_______</span>\n\nparser <span class="kw">=</span> argparse.ArgumentParser()`,
      q: 'Qual módulo importar?',
      ans: 'argparse',
      exp: 'import argparse habilita ArgumentParser e add_argument.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Leia os argumentos definidos.',
      code: `parser.add_argument(<span class="st">"nome"</span>)\nargs <span class="kw">=</span> parser.<span class="kw">_______</span>()\n<span class="mt">print</span>(args.nome)`,
      q: 'Qual método lê e devolve os argumentos?',
      ans: 'parse_args',
      exp: 'parse_args() interpreta a linha de comando e devolve o objeto com os valores.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise o comportamento de uma flag store_true (sem passar a flag).',
      code: `<span class="kw">import</span> argparse\np <span class="kw">=</span> argparse.ArgumentParser()\np.add_argument(<span class="st">"--v"</span>, action<span class="kw">=</span><span class="st">"store_true"</span>)\nargs <span class="kw">=</span> p.parse_args([])\n<span class="mt">print</span>(args.v)`,
      q: 'O que este código exibe?',
      opts: [
        { t: 'None', ok: false },
        { t: 'False', ok: true },
        { t: 'True', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: 'Sem passar --v (lista vazia), store_true deixa o padrão False.',
    },

  ]
};
