// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 20 — PROJETO FINAL  [PREMIUM]
// Tema: Consolida tudo — variáveis, loops, funções, dicts, OOP
// Tipo: Normal (10 questões) | Progressão: 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_19 = {
  id: 19,
  title: "MISSÃO 20 — PROJETO FINAL",
  icon: '🏆',
  free: false,
  desc: "A missão final consolida tudo que você aprendeu. Código real, problemas reais — é hora de provar que você é um agente completo.",
  objs: [
    "Integrar variáveis, loops, funções e estruturas de dados",
    "Ler e processar dados do usuário",
    "Estruturar um programa completo com classes"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Revisão: escolha a estrutura de dados correta para cada caso.',
      q: 'Qual estrutura usar para armazenar configurações nome/valor que mudam durante o jogo?',
      opts: [
        { t: 'Tupla — é imutável e eficiente', ok: false },
        { t: 'Set — elimina duplicatas', ok: false },
        { t: 'Dicionário — acesso por chave nomeada', ok: true },
        { t: 'String — fácil de serializar', ok: false },
      ],
      exp: 'Dicionário é ideal para config: {"volume": 80, "idioma": "pt", "dificuldade": "normal"}. Acesso por nome da chave.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Revisão: qual estrutura de controle usar?',
      q: 'Você precisa processar todos os itens de uma lista de inimigos. Qual construção usar?',
      opts: [
        { t: 'while com contador manual', ok: false },
        { t: 'for inimigo in inimigos:', ok: true },
        { t: 'if para cada inimigo', ok: false },
        { t: 'try/except', ok: false },
      ],
      exp: '"for inimigo in inimigos:" é o idioma Python para percorrer coleções. Claro, direto, sem índice manual.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Revisão: boas práticas de função.',
      q: 'Uma função que calcula dano deveria:',
      opts: [
        { t: 'Imprimir o resultado diretamente com print()', ok: false },
        { t: 'Modificar variáveis globais', ok: false },
        { t: 'Receber parâmetros e retornar o valor calculado', ok: true },
        { t: 'Pedir input() do usuário', ok: false },
      ],
      exp: 'Funções devem receber dados via parâmetros e devolver via return. Isso as torna testáveis e reutilizáveis.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Revisão: tratamento de erros em programas reais.',
      q: 'Num sistema de inventário com dicionário, ao acessar item não cadastrado, qual é a forma mais segura?',
      opts: [
        { t: 'inventario["item_inexistente"]', ok: false },
        { t: 'inventario.get("item_inexistente", 0)', ok: true },
        { t: 'try: inventario["item"] (sem except)', ok: false },
        { t: 'if "item" in inventario: (verificar antes é obsoleto)', ok: false },
      ],
      exp: '.get("chave", padrão) retorna 0 (ou qualquer padrão) sem lançar KeyError. Elegante e seguro.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Complete este sistema de pontuação.',
      code: `<span class="kw">def</span> calcular_score(kills, tempo, dificuldade):\n    base = kills <span class="kw">*</span> <span class="nm">100</span>\n    bonus = base <span class="kw">*</span> dificuldade\n    penalidade = tempo <span class="kw">*</span> <span class="nm">2</span>\n    <span class="kw">_______</span> <span class="mt">int</span>(bonus <span class="kw">-</span> penalidade)\n\n<span class="mt">print</span>(calcular_score(<span class="nm">10</span>, <span class="nm">120</span>, <span class="nm">1.5</span>))`,
      q: 'Qual instrução devolve o resultado?',
      ans: 'return',
      exp: 'return int(bonus - penalidade): kills=10, base=1000, bonus=1500, penalidade=240. Resultado: 1260.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Complete o processamento com list comprehension.',
      code: `inimigos = [{<span class="st">"nome"</span>: <span class="st">"A"</span>, <span class="st">"vivo"</span>: <span class="kw">True</span>},\n             {<span class="st">"nome"</span>: <span class="st">"B"</span>, <span class="st">"vivo"</span>: <span class="kw">False</span>},\n             {<span class="st">"nome"</span>: <span class="st">"C"</span>, <span class="st">"vivo"</span>: <span class="kw">True</span>}]\nvivos = [e[<span class="st">"nome"</span>] <span class="kw">for</span> e <span class="kw">in</span> inimigos <span class="kw">if</span> e[<span class="st">"_______"</span>]]\n<span class="mt">print</span>(vivos)\n<span class="cm"># exibe: ['A', 'C']</span>`,
      q: 'Qual chave do dict filtra os inimigos vivos?',
      ans: 'vivo',
      exp: 'e["vivo"] retorna True/False. if e["vivo"] mantém apenas os True. Resultado: ["A", "C"].',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Complete a classe Missão.',
      code: `<span class="kw">class</span> Missao:\n    <span class="kw">def</span> __init__(<span class="kw">self</span>, titulo, recompensa):\n        <span class="kw">self</span>.titulo = titulo\n        <span class="kw">self</span>.recompensa = recompensa\n        <span class="kw">self</span>.completa = <span class="kw">False</span>\n    <span class="kw">def</span> completar(<span class="kw">_______</span>):\n        <span class="kw">self</span>.completa = <span class="kw">True</span>`,
      q: 'Qual parâmetro obrigatório falta no método completar()?',
      ans: 'self',
      exp: 'Todo método de instância precisa de self como primeiro parâmetro. Sem self, Python não sabe a qual objeto se refere.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'Analise este sistema de inventário completo.',
      code: `<span class="kw">class</span> Inventario:\n    <span class="kw">def</span> __init__(<span class="kw">self</span>):\n        <span class="kw">self</span>.itens = {}\n    <span class="kw">def</span> adicionar(<span class="kw">self</span>, item, qtd):\n        <span class="kw">self</span>.itens[item] = <span class="kw">self</span>.itens.<span class="mt">get</span>(item, <span class="nm">0</span>) <span class="kw">+</span> qtd\n\ninv = Inventario()\ninv.adicionar(<span class="st">"bala"</span>, <span class="nm">30</span>)\ninv.adicionar(<span class="st">"bala"</span>, <span class="nm">15</span>)\n<span class="mt">print</span>(inv.itens[<span class="st">"bala"</span>])`,
      q: 'O que este código exibe?',
      opts: [
        { t: '30', ok: false },
        { t: '15', ok: false },
        { t: '45', ok: true },
        { t: 'Erro', ok: false },
      ],
      exp: '.get("bala", 0) + 30 = 30. Segunda chamada: .get("bala", 0) = 30 + 15 = 45. Total: 45 balas.',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Analise este processador de missões.',
      code: `missoes = [\n    {<span class="st">"nome"</span>: <span class="st">"Resgatar Ashley"</span>, <span class="st">"xp"</span>: <span class="nm">500</span>},\n    {<span class="st">"nome"</span>: <span class="st">"Destruir Las Plagas"</span>, <span class="st">"xp"</span>: <span class="nm">300</span>},\n    {<span class="st">"nome"</span>: <span class="st">"Escapar do Castelo"</span>, <span class="st">"xp"</span>: <span class="nm">700</span>},\n]\ntotal_xp = <span class="mt">sum</span>(m[<span class="st">"xp"</span>] <span class="kw">for</span> m <span class="kw">in</span> missoes)\n<span class="mt">print</span>(<span class="kw">f</span><span class="st">"XP Total: {total_xp}"</span>)`,
      q: 'O que este código exibe?',
      opts: [
        { t: 'XP Total: 500', ok: false },
        { t: 'XP Total: 1500', ok: true },
        { t: 'XP Total: 3', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: 'Generator expression soma todos os "xp": 500+300+700=1500. sum() com generator é mais eficiente que list comprehension.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise este programa completo.',
      code: `<span class="kw">def</span> nivel_por_xp(xp, tabela):\n    <span class="kw">for</span> nivel, minimo <span class="kw">in</span> tabela.\n        <span class="mt">items</span>():\n        <span class="kw">if</span> xp <span class="kw"><</span> minimo:\n            <span class="kw">return</span> nivel <span class="kw">-</span> <span class="nm">1</span>\n    <span class="kw">return</span> <span class="mt">max</span>(tabela)\n\ntabela = {<span class="nm">1</span>: <span class="nm">0</span>, <span class="nm">2</span>: <span class="nm">200</span>, <span class="nm">3</span>: <span class="nm">500</span>, <span class="nm">4</span>: <span class="nm">1000</span>}\n<span class="mt">print</span>(nivel_por_xp(<span class="nm">350</span>, tabela))`,
      q: 'O que este código exibe?',
      opts: [
        { t: '1', ok: false },
        { t: '2', ok: true },
        { t: '3', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: 'xp=350. Itera: nível 1 (min 0): 350<0? Não. nível 2 (min 200): 350<200? Não. nível 3 (min 500): 350<500? Sim → retorna 3-1=2.',
    },

  ]
};
