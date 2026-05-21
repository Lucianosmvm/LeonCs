// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 09 — LISTAS
// Tema: Criar, acessar, modificar listas; métodos básicos
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_8 = {
  id: 8,
  title: "MISSÃO 09 — LISTAS",
  icon: '📋',
  free: true,
  desc: "Listas são coleções ordenadas e modificáveis. São a estrutura de dados mais usada em Python.",
  objs: [
    "Criar e acessar listas com índices",
    "Usar append(), remove(), len() em listas",
    "Percorrer listas com for"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Listas em Python são criadas com colchetes <code>[]</code> e podem conter qualquer tipo de dado.',
      q: 'Como criar uma lista com os números 1, 2, 3?',
      opts: [
        { t: 'lista = (1, 2, 3)', ok: false },
        { t: 'lista = {1, 2, 3}', ok: false },
        { t: 'lista = [1, 2, 3]', ok: true },
        { t: 'lista = <1, 2, 3>', ok: false },
      ],
      exp: '[] cria uma lista. () cria tupla, {} cria set ou dicionário. Listas são mutáveis — podem ser modificadas.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Assim como strings, listas usam índices começando no zero.',
      q: 'Qual é o resultado: armas = ["faca", "pistola", "espingarda"]; print(armas[1])?',
      opts: [
        { t: 'faca', ok: false },
        { t: 'pistola', ok: true },
        { t: 'espingarda', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: 'Índice 0 = "faca", índice 1 = "pistola", índice 2 = "espingarda". Sempre começa do zero.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>.append(valor)</code> adiciona um item ao final da lista.',
      q: 'Após: lista = [1, 2]; lista.append(3), qual é lista?',
      opts: [
        { t: '[3, 1, 2]', ok: false },
        { t: '[1, 2, 3]', ok: true },
        { t: '[1, 2]', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: '.append() adiciona ao final. Para adicionar no início ou posição específica, use .insert(índice, valor).',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>.remove(valor)</code> remove a primeira ocorrência do valor. <code>.pop()</code> remove o último (ou índice específico).',
      q: 'Após: lista = [1, 2, 3, 2]; lista.remove(2), qual é lista?',
      opts: [
        { t: '[1, 3]', ok: false },
        { t: '[1, 3, 2]', ok: true },
        { t: '[1, 2, 3]', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: '.remove(2) remove a PRIMEIRA ocorrência de 2. O segundo 2 permanece. Resultado: [1, 3, 2].',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>len(lista)</code> retorna o número de itens. O último índice válido é sempre <code>len(lista) - 1</code>.',
      q: 'Lista tem 4 itens. Qual é o índice do último?',
      opts: [
        { t: '4', ok: false },
        { t: '3', ok: true },
        { t: '-1 (só com índice negativo)', ok: false },
        { t: '5', ok: false },
      ],
      exp: 'Com 4 itens, índices são 0, 1, 2, 3. O último é len(lista)-1 = 3. lista[4] causaria IndexError.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'O operador <code>in</code> verifica se um valor existe na lista.',
      q: 'O que retorna: "pistola" in ["faca", "pistola", "granada"]?',
      opts: [
        { t: '1', ok: false },
        { t: 'True', ok: true },
        { t: 'False', ok: false },
        { t: 'Índice 1', ok: false },
      ],
      exp: '"in" retorna True se o valor está na lista. Muito mais legível que percorrer a lista manualmente.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Listas podem conter tipos mistos e até outras listas (listas aninhadas).',
      q: 'É válido em Python: lista = [1, "Leon", True, 3.14]?',
      opts: [
        { t: 'Não — tipos diferentes causam erro', ok: false },
        { t: 'Sim — listas aceitam tipos mistos', ok: true },
        { t: 'Só se todos forem convertidos para string', ok: false },
        { t: 'Depende da versão do Python', ok: false },
      ],
      exp: 'Python não exige tipos homogêneos em listas. [1, "Leon", True, 3.14] é perfeitamente válido.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Adicione um item ao final da lista.',
      code: `inimigos = [<span class="st">"Ganado"</span>, <span class="st">"Illuminado"</span>]\ninimigos.<span class="mt">_______</span>(<span class="st">"Regenerador"</span>)\n<span class="mt">print</span>(inimigos)`,
      q: 'Qual método adiciona ao final?',
      ans: 'append',
      exp: '.append("Regenerador") adiciona ao final. Resultado: ["Ganado", "Illuminado", "Regenerador"].',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'len() conta os itens da lista.',
      code: `missões = [<span class="st">"A"</span>, <span class="st">"B"</span>, <span class="st">"C"</span>, <span class="st">"D"</span>]\n<span class="mt">print</span>(<span class="mt">_______</span>(missões))\n<span class="cm"># exibe: 4</span>`,
      q: 'Qual função conta os itens?',
      ans: 'len',
      exp: 'len(missões) retorna 4 — o número de itens na lista.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Percorra e some os valores da lista.',
      code: `pontos = [<span class="nm">10</span>, <span class="nm">20</span>, <span class="nm">30</span>]\ntotal = <span class="nm">0</span>\n<span class="kw">for</span> p <span class="kw">in</span> pontos:\n    total <span class="kw">+=</span> p\n<span class="mt">print</span>(total)`,
      q: 'O que este código exibe?',
      opts: [
        { t: '[10, 20, 30]', ok: false },
        { t: '30', ok: false },
        { t: '60', ok: true },
        { t: '3', ok: false },
      ],
      exp: 'for percorre [10, 20, 30]. total: 0+10=10, +20=30, +30=60. Exibe 60.',
    },

  ]
};
