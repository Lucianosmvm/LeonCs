// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 28 — PIP E AMBIENTES VIRTUAIS
// Tema: Pacotes, pip e venv
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_27 = {
  id: 27,
  title: "MISSÃO 28 — PIP E AMBIENTES VIRTUAIS",
  icon: '📦',
  free: false,
  desc: "Projetos reais usam bibliotecas externas e ambientes isolados. pip instala pacotes; venv evita conflitos entre projetos.",
  objs: [
    "Instalar pacotes com pip",
    "Criar e ativar ambientes virtuais",
    "Congelar dependências em requirements.txt"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<code>pip</code> é o gerenciador de pacotes oficial do Python.',
      q: 'O que é o pip?',
      opts: [
        { t: 'Um editor de código', ok: false },
        { t: 'Um interpretador alternativo', ok: false },
        { t: 'O gerenciador de pacotes do Python', ok: true },
        { t: 'Um framework web', ok: false },
      ],
      exp: 'pip instala, atualiza e remove pacotes do PyPI (Python Package Index).',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Para instalar um pacote, use <code>pip install nome</code>.',
      q: 'Qual comando instala o pacote requests?',
      opts: [
        { t: 'pip install requests', ok: true },
        { t: 'pip get requests', ok: false },
        { t: 'python install requests', ok: false },
        { t: 'pip add requests', ok: false },
      ],
      exp: 'pip install requests baixa o pacote do PyPI e o instala no ambiente atual.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Um <strong>ambiente virtual</strong> isola as dependências de cada projeto.',
      q: 'Por que usar um ambiente virtual?',
      opts: [
        { t: 'Para deixar o código mais rápido', ok: false },
        { t: 'Para compilar o Python', ok: false },
        { t: 'Para criptografar pacotes', ok: false },
        { t: 'Para isolar as dependências de cada projeto', ok: true },
      ],
      exp: 'Sem isolamento, projetos diferentes brigam por versões. O venv dá a cada projeto seu próprio conjunto de pacotes.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'O módulo padrão para criar ambientes virtuais é o <code>venv</code>.',
      q: 'Qual módulo cria ambientes virtuais na biblioteca padrão?',
      opts: [
        { t: 'virtual', ok: false },
        { t: 'venv', ok: true },
        { t: 'env', ok: false },
        { t: 'pipenv', ok: false },
      ],
      exp: 'python -m venv .venv cria um ambiente isolado na pasta .venv.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'O arquivo <code>requirements.txt</code> lista as dependências do projeto.',
      q: 'Para que serve o requirements.txt?',
      opts: [
        { t: 'Guardar variáveis de ambiente', ok: false },
        { t: 'Configurar o interpretador', ok: false },
        { t: 'Listar as dependências do projeto', ok: true },
        { t: 'Documentar a API', ok: false },
      ],
      exp: 'Ele fixa nomes e versões dos pacotes, permitindo recriar o ambiente com pip install -r requirements.txt.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<code>pip freeze</code> lista os pacotes instalados com suas versões exatas.',
      q: 'O que pip freeze faz?',
      opts: [
        { t: 'Trava a versão do Python', ok: false },
        { t: 'Lista os pacotes instalados e versões', ok: true },
        { t: 'Congela o ambiente impedindo instalações', ok: false },
        { t: 'Remove todos os pacotes', ok: false },
      ],
      exp: 'pip freeze > requirements.txt gera o arquivo de dependências no formato pacote==versão.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Repositório central de onde o pip baixa pacotes é o <strong>PyPI</strong>.',
      q: 'De onde o pip baixa os pacotes por padrão?',
      opts: [
        { t: 'GitHub', ok: false },
        { t: 'npm', ok: false },
        { t: 'Docker Hub', ok: false },
        { t: 'PyPI', ok: true },
      ],
      exp: 'PyPI (Python Package Index) é o repositório oficial em pypi.org de onde o pip instala por padrão.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Complete o comando que instala um pacote (linha de terminal).',
      code: `<span class="cm"># terminal</span>\npip <span class="kw">_______</span> pandas`,
      q: 'Qual subcomando do pip instala um pacote?',
      ans: 'install',
      exp: 'pip install pandas baixa e instala o pacote no ambiente ativo.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Complete o comando que cria um ambiente virtual chamado .venv.',
      code: `<span class="cm"># terminal</span>\npython <span class="kw">-m</span> <span class="kw">_______</span> .venv`,
      q: 'Qual módulo cria o ambiente virtual?',
      ans: 'venv',
      exp: 'python -m venv .venv cria a pasta .venv com um interpretador e pip isolados.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise o resultado esperado destes comandos de terminal.',
      code: `<span class="cm"># terminal</span>\npip install requests\npip freeze <span class="kw">&gt;</span> requirements.txt`,
      q: 'O que acontece após esses comandos?',
      opts: [
        { t: 'requests é instalado e as dependências salvas em requirements.txt', ok: true },
        { t: 'requests é removido do sistema', ok: false },
        { t: 'O Python é reinstalado', ok: false },
        { t: 'Um ambiente virtual é criado', ok: false },
      ],
      exp: 'O primeiro instala requests; o segundo grava a lista de pacotes (incluindo requests e suas dependências) no arquivo.',
    },

  ]
};
