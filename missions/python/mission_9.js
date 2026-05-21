// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 10 — FUNÇÕES
// Tema: def, parâmetros, return, escopo
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_9 = {
  id: 9,
  title: "MISSÃO 10 — FUNÇÕES",
  icon: '🔧',
  free: true,
  desc: "Funções são blocos reutilizáveis de código. Elas recebem dados, processam e devolvem resultados — o fundamento da programação modular.",
  objs: [
    "Criar funções com def",
    "Passar parâmetros e usar return",
    "Entender escopo local vs global"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Funções são definidas com <code>def nome():</code> e chamadas pelo nome. O bloco é indentado.',
      q: 'Como definir uma função chamada "atirar" em Python?',
      opts: [
        { t: 'define atirar():', ok: false },
        { t: 'def atirar():', ok: true },
        { t: 'function atirar() {}', ok: false },
        { t: 'func atirar():', ok: false },
      ],
      exp: 'Python usa a palavra-chave def. O corpo da função é indentado. Não há chaves — a indentação delimita o bloco.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<strong>Parâmetros</strong> são variáveis que a função recebe. <strong>Argumentos</strong> são os valores passados na chamada.',
      q: 'Na definição def saudar(nome):, "nome" é:',
      opts: [
        { t: 'Um parâmetro', ok: true },
        { t: 'Um argumento', ok: false },
        { t: 'Um tipo', ok: false },
        { t: 'Uma variável global', ok: false },
      ],
      exp: 'Parâmetro = na definição da função. Argumento = na chamada. saudar("Leon") — "Leon" é o argumento.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>return</code> devolve um valor da função para quem a chamou. Sem return, a função retorna None.',
      q: 'O que retorna: def soma(a, b): return a + b; soma(3, 4)?',
      opts: [
        { t: 'a + b', ok: false },
        { t: 'None', ok: false },
        { t: 'Erro', ok: false },
        { t: '7', ok: true },
      ],
      exp: 'soma(3, 4): a=3, b=4, return 3+4 = 7. O valor 7 é retornado para quem chamou a função.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Funções podem ter <strong>valores padrão</strong> nos parâmetros. Se o argumento não for passado, usa o padrão.',
      q: 'def saudar(nome="Agente"): print("Olá,", nome) — o que exibe saudar()?',
      opts: [
        { t: 'Olá,', ok: false },
        { t: 'Olá, None', ok: false },
        { t: 'Olá, Agente', ok: true },
        { t: 'Erro — nome não foi passado', ok: false },
      ],
      exp: 'nome="Agente" é o padrão. Se não passar argumento, usa "Agente". saudar("Leon") exibiria "Olá, Leon".',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Variáveis criadas dentro de uma função são <strong>locais</strong> — não existem fora dela.',
      q: 'O que acontece ao acessar uma variável local fora da função?',
      opts: [
        { t: 'NameError — variável não existe', ok: true },
        { t: 'ValueError', ok: false },
        { t: 'Retorna None', ok: false },
        { t: 'Funciona normalmente', ok: false },
      ],
      exp: 'Escopo local: variáveis dentro de def só existem durante a execução da função. Fora = NameError.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Uma função pode retornar múltiplos valores como uma tupla.',
      q: 'O que retorna: def mm(lst): return min(lst), max(lst)?',
      opts: [
        { t: 'Apenas o mínimo', ok: false },
        { t: 'Uma tupla (mínimo, máximo)', ok: true },
        { t: 'Apenas o máximo', ok: false },
        { t: 'Erro — só um return é permitido', ok: false },
      ],
      exp: 'return a, b retorna uma tupla (a, b). Você pode desempacotar: mn, mx = mm([1,5,3]).',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Funções devem ter um único propósito claro — princípio da responsabilidade única.',
      q: 'Qual é a principal vantagem de usar funções?',
      opts: [
        { t: 'Python exige funções', ok: false },
        { t: 'O programa fica mais lento', ok: false },
        { t: 'Usa menos memória sempre', ok: false },
        { t: 'Código reutilizável e organizado', ok: true },
      ],
      exp: 'Funções evitam repetição (DRY: Don\'t Repeat Yourself), facilitam testes e organizam o código.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Defina uma função com def.',
      code: `<span class="kw">_______</span> calcular_dano(ataque, defesa):\n    <span class="kw">return</span> ataque <span class="kw">-</span> defesa\n\n<span class="mt">print</span>(calcular_dano(<span class="nm">50</span>, <span class="nm">20</span>))\n<span class="cm"># exibe: 30</span>`,
      q: 'Qual palavra-chave define uma função?',
      ans: 'def',
      exp: 'def é a palavra-chave para definir funções em Python. A função retorna ataque - defesa = 30.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Use return para devolver o resultado.',
      code: `<span class="kw">def</span> dobrar(n):\n    <span class="kw">_______</span> n <span class="kw">*</span> <span class="nm">2</span>\n\nresultado = dobrar(<span class="nm">7</span>)\n<span class="mt">print</span>(resultado)\n<span class="cm"># exibe: 14</span>`,
      q: 'Qual palavra-chave devolve o valor?',
      ans: 'return',
      exp: 'return n * 2 devolve o dobro de n. dobrar(7) retorna 14.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise esta função com parâmetro padrão.',
      code: `<span class="kw">def</span> nivel(<span class="nm">xp</span>, base=<span class="nm">100</span>):\n    <span class="kw">return</span> xp <span class="kw">//</span> base\n\n<span class="mt">print</span>(nivel(<span class="nm">350</span>))\n<span class="mt">print</span>(nivel(<span class="nm">350</span>, <span class="nm">50</span>))`,
      q: 'O que este código exibe?',
      opts: [
        { t: 'Erro', ok: false },
        { t: '3 e 3', ok: false },
        { t: '3 e 7', ok: true },
        { t: '3.5 e 7', ok: false },
      ],
      exp: 'nivel(350): 350//100 = 3. nivel(350, 50): 350//50 = 7. O parâmetro base=50 sobrescreve o padrão 100.',
    },

  ]
};
