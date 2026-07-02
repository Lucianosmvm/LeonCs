// ══════════════════════════════════════════════════════
// JAVASCRIPT — MISSÃO 10 — ASSÍNCRONO
// Tema: Promises, async/await e fetch
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_JAVASCRIPT_9 = {
  id: 9,
  title: "MISSÃO 10 — ASSÍNCRONO",
  icon: '⏳',
  free: false,
  desc: "Buscar dados na rede leva tempo. Código assíncrono não trava a página enquanto espera. Missão final da jornada JS.",
  objs: [
    "Entender Promises",
    "Usar async e await",
    "Buscar dados com fetch"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Uma <strong>Promise</strong> representa um valor que ficará disponível no futuro.',
      q: 'O que é uma Promise?',
      opts: [
        { t: 'Um tipo de loop', ok: false },
        { t: 'Um valor que estará pronto no futuro', ok: true },
        { t: 'Uma variável constante', ok: false },
        { t: 'Um elemento do DOM', ok: false },
      ],
      exp: 'Promise é a promessa de um resultado futuro: pode resolver (sucesso) ou rejeitar (erro).',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Uma Promise tem três estados: <strong>pending</strong>, <strong>fulfilled</strong> e <strong>rejected</strong>.',
      q: 'Qual NÃO é um estado de Promise?',
      opts: [
        { t: 'pending', ok: false },
        { t: 'fulfilled', ok: false },
        { t: 'looping', ok: true },
        { t: 'rejected', ok: false },
      ],
      exp: 'Estados: pending (pendente), fulfilled (resolvida) e rejected (rejeitada). "looping" não existe.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>.then()</code> trata o sucesso; <code>.catch()</code> trata o erro de uma Promise.',
      q: 'Qual método trata o ERRO de uma Promise?',
      opts: [
        { t: '.then()', ok: false },
        { t: '.error()', ok: false },
        { t: '.fail()', ok: false },
        { t: '.catch()', ok: true },
      ],
      exp: '.catch(fn) captura rejeições. .then(fn) recebe o valor resolvido.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>async</code> antes de uma função faz ela devolver uma Promise.',
      q: 'O que async faz a uma função?',
      opts: [
        { t: 'Faz ela retornar uma Promise', ok: true },
        { t: 'Executa em outra thread', ok: false },
        { t: 'Impede o uso de await', ok: false },
        { t: 'Torna a função mais rápida', ok: false },
      ],
      exp: 'Uma função async sempre devolve uma Promise e pode usar await no corpo.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>await</code> pausa a função async até a Promise resolver.',
      q: 'Onde await pode ser usado?',
      opts: [
        { t: 'Em qualquer lugar', ok: false },
        { t: 'Dentro de uma função async', ok: true },
        { t: 'Só em loops', ok: false },
        { t: 'Só no HTML', ok: false },
      ],
      exp: 'await só funciona dentro de funções async (ou no top-level de módulos), aguardando a Promise.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<code>fetch(url)</code> faz uma requisição HTTP e devolve uma Promise.',
      q: 'O que fetch() retorna?',
      opts: [
        { t: 'O texto direto', ok: false },
        { t: 'Um array', ok: false },
        { t: 'Uma Promise que resolve para a resposta', ok: true },
        { t: 'undefined', ok: false },
      ],
      exp: 'fetch devolve uma Promise. Com await, obtém-se a resposta; depois response.json() lê o corpo.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: '<code>response.json()</code> também é assíncrono: converte o corpo em objeto.',
      q: 'O que await response.json() devolve?',
      opts: [
        { t: 'O texto bruto', ok: false },
        { t: 'O código de status', ok: false },
        { t: 'Uma string vazia', ok: false },
        { t: 'Os dados já convertidos em objeto/array', ok: true },
      ],
      exp: '.json() lê e converte o corpo JSON em objeto JavaScript. É assíncrono, por isso usa await.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Complete a palavra-chave que declara uma função assíncrona.',
      code: `<span class="kw">_______</span> <span class="kw">function</span> carregar() {\n  <span class="kw">const</span> r <span class="kw">=</span> <span class="kw">await</span> fetch(<span class="st">"/api"</span>);\n}`,
      q: 'Qual palavra-chave (antes de function) permite usar await?',
      ans: 'async',
      exp: 'async function permite await no corpo e faz a função devolver uma Promise.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Complete a palavra que aguarda a Promise resolver.',
      code: `<span class="kw">async</span> <span class="kw">function</span> pegar() {\n  <span class="kw">const</span> resp <span class="kw">=</span> <span class="kw">_______</span> fetch(<span class="st">"/dados"</span>);\n  <span class="kw">return</span> <span class="kw">await</span> resp.json();\n}`,
      q: 'Qual palavra-chave aguarda uma Promise?',
      ans: 'await',
      exp: 'await pausa a função até a Promise do fetch resolver, devolvendo a resposta.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Missão final! Analise a função assíncrona.',
      code: `<span class="kw">async</span> <span class="kw">function</span> soma() {\n  <span class="kw">return</span> <span class="nm">2</span> <span class="kw">+</span> <span class="nm">3</span>;\n}\nsoma().then(r <span class="kw">=&gt;</span> <span class="mt">console</span>.log(r));`,
      q: 'O que este código exibe?',
      opts: [
        { t: '5', ok: true },
        { t: 'Promise { 5 }', ok: false },
        { t: '23', ok: false },
        { t: 'undefined', ok: false },
      ],
      exp: 'Uma função async devolve uma Promise que resolve para 5; .then recebe esse valor e exibe 5. Parabéns — jornada JavaScript completa! 🏆',
    },

  ]
};
