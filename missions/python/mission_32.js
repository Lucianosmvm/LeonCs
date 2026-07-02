// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 33 — ENUMS
// Tema: Enumerações com o módulo enum
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_32 = {
  id: 32,
  title: "MISSÃO 33 — ENUMS",
  icon: '🔢',
  free: false,
  desc: "Enums dão nomes a conjuntos fixos de valores — estados, categorias, opções. Código mais seguro e legível que 'strings mágicas'.",
  objs: [
    "Definir enumerações com Enum",
    "Acessar nome e valor dos membros",
    "Usar enums em comparações"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Uma <strong>enumeração</strong> é um conjunto de nomes simbólicos ligados a valores constantes.',
      q: 'Para que serve um Enum?',
      opts: [
        { t: 'Dar nomes a um conjunto fixo de valores', ok: true },
        { t: 'Repetir código', ok: false },
        { t: 'Criar loops', ok: false },
        { t: 'Ordenar listas', ok: false },
      ],
      exp: 'Enums substituem "strings mágicas" e números soltos por nomes claros: Cor.VERMELHO em vez de "vermelho".',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Enums vêm do módulo padrão <code>enum</code>, herdando de <code>Enum</code>.',
      q: 'De qual módulo e classe se cria um enum?',
      opts: [
        { t: 'from enums import Enumeration', ok: false },
        { t: 'from enum import Enum', ok: true },
        { t: 'from typing import Enum', ok: false },
        { t: 'import enumerate', ok: false },
      ],
      exp: 'class Cor(Enum): define uma enumeração cujos membros são constantes únicas.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Cada membro tem um atributo <code>.name</code> (o nome) e <code>.value</code> (o valor).',
      q: 'O que Cor.VERMELHO.value retorna?',
      opts: [
        { t: 'O nome "VERMELHO"', ok: false },
        { t: 'A classe Cor', ok: false },
        { t: 'O valor associado ao membro', ok: true },
        { t: 'Sempre um inteiro', ok: false },
      ],
      exp: '.value devolve o valor atribuído; .name devolve a string "VERMELHO".',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Membros de um enum são <strong>únicos e comparáveis por identidade</strong>.',
      q: 'Como comparar membros de enum?',
      opts: [
        { t: 'Convertendo para string', ok: false },
        { t: 'Somando os valores', ok: false },
        { t: 'Apenas com <', ok: false },
        { t: 'Diretamente com == ou is', ok: true },
      ],
      exp: 'Cor.VERMELHO == Cor.VERMELHO é True; cada membro é um singleton dentro da enumeração.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>auto()</code> gera valores automaticamente para os membros.',
      q: 'O que auto() faz em um enum?',
      opts: [
        { t: 'Atribui valores automaticamente aos membros', ok: true },
        { t: 'Executa o enum', ok: false },
        { t: 'Ordena os membros', ok: false },
        { t: 'Cria membros aleatórios', ok: false },
      ],
      exp: 'from enum import auto — auto() gera 1, 2, 3... liberando você de digitar valores manualmente.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Você pode iterar sobre um enum com <code>for</code>, percorrendo seus membros.',
      q: 'O que um for sobre um Enum percorre?',
      opts: [
        { t: 'Apenas os valores', ok: false },
        { t: 'Os membros da enumeração', ok: true },
        { t: 'Somente o primeiro membro', ok: false },
        { t: 'Os nomes como strings', ok: false },
      ],
      exp: 'for cor in Cor: dá cada membro (Cor.VERMELHO, Cor.VERDE...), de onde acessa .name e .value.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Acessar por valor: <code>Cor(2)</code> devolve o membro cujo value é 2.',
      q: 'O que Cor(2) retorna, se VERDE tem valor 2?',
      opts: [
        { t: 'Erro', ok: false },
        { t: 'O número 2', ok: false },
        { t: 'Cor.VERDE', ok: true },
        { t: 'A string "VERDE"', ok: false },
      ],
      exp: 'Chamar a enum com um valor faz a busca reversa e devolve o membro correspondente.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Importe a classe base das enumerações.',
      code: `<span class="kw">from</span> enum <span class="kw">import</span> <span class="kw">_______</span>\n\n<span class="kw">class</span> Status(Enum):\n    ATIVO <span class="kw">=</span> <span class="nm">1</span>\n    INATIVO <span class="kw">=</span> <span class="nm">2</span>`,
      q: 'Qual classe importar de enum?',
      ans: 'Enum',
      exp: 'from enum import Enum — a classe base de toda enumeração.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Acesse o nome do membro.',
      code: `<span class="mt">print</span>(Status.ATIVO.<span class="kw">_______</span>)\n<span class="cm"># exibe: ATIVO</span>`,
      q: 'Qual atributo devolve o nome do membro?',
      ans: 'name',
      exp: '.name devolve a string do identificador: "ATIVO". .value devolveria 1.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise o acesso a nome e valor.',
      code: `<span class="kw">from</span> enum <span class="kw">import</span> Enum\n\n<span class="kw">class</span> Nivel(Enum):\n    BAIXO <span class="kw">=</span> <span class="nm">1</span>\n    ALTO <span class="kw">=</span> <span class="nm">9</span>\n\n<span class="mt">print</span>(Nivel.ALTO.value)`,
      q: 'O que este código exibe?',
      opts: [
        { t: 'ALTO', ok: false },
        { t: 'Nivel.ALTO', ok: false },
        { t: '1', ok: false },
        { t: '9', ok: true },
      ],
      exp: '.value devolve o valor associado a ALTO, que é 9.',
    },

  ]
};
