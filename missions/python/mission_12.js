// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 13 — F-STRINGS AVANÇADAS  [PREMIUM]
// Tema: f-strings com formatação, expressões, alinhamento
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_12 = {
  id: 12,
  title: "MISSÃO 13 — F-STRINGS AVANÇADAS",
  icon: '✍️',
  free: false,
  desc: "F-strings vão além de inserir variáveis — você pode formatar números, alinhar texto e executar expressões inline.",
  objs: [
    "Formatar decimais com :.2f",
    "Executar expressões dentro de f-strings",
    "Alinhar e preencher texto com f-strings"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'F-strings formatam números decimais com <code>{valor:.2f}</code> — 2 casas decimais fixas.',
      q: 'O que exibe: preco = 9.9; print(f"R$ {preco:.2f}")?',
      opts: [
        { t: 'R$ 9.90', ok: true },
        { t: 'R$ 9.9', ok: false },
        { t: 'Erro', ok: false },
        { t: 'R$ 9.900', ok: false },
      ],
      exp: ':.2f formata com exatamente 2 casas decimais. 9.9 vira 9.90. Perfeito para exibir preços.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Dentro de {}, você pode executar qualquer expressão Python.',
      q: 'O que exibe: n = 7; print(f"Quadrado: {n**2}")?',
      opts: [
        { t: 'Quadrado: n**2', ok: false },
        { t: 'Quadrado: 49', ok: true },
        { t: 'Erro', ok: false },
        { t: 'Quadrado: {n**2}', ok: false },
      ],
      exp: '{n**2} avalia a expressão: 7**2 = 49. F-strings avaliam qualquer expressão Python válida.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>{valor:>10}</code> alinha à direita em campo de 10 caracteres. <code>{valor:<10}</code> alinha à esquerda.',
      q: 'O que exibe: f"{"OK":>10}"?',
      opts: [
        { t: 'Erro', ok: false },
        { t: '"OK        "', ok: false },
        { t: '"OK"', ok: false },
        { t: '"        OK"', ok: true },
      ],
      exp: ':>10 alinha à DIREITA em campo de 10. "OK" tem 2 chars, então 8 espaços à esquerda.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>{valor:0>5}</code> preenche com zeros à esquerda até 5 caracteres.',
      q: 'O que exibe: id = 42; print(f"{id:0>5}")?',
      opts: [
        { t: '42000', ok: false },
        { t: 'Erro', ok: false },
        { t: '00042', ok: true },
        { t: '42', ok: false },
      ],
      exp: ':0>5 preenche com "0" à esquerda (>) até largura 5. 42 → 00042.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>{valor:,}</code> formata números com separador de milhar.',
      q: 'O que exibe: print(f"{1000000:,}")?',
      opts: [
        { t: '1.000.000', ok: false },
        { t: '1,000,000', ok: true },
        { t: 'Erro', ok: false },
        { t: '1000000', ok: false },
      ],
      exp: ':, usa vírgula como separador de milhar (padrão americano). 1000000 → 1,000,000.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: '<code>{valor:.0f}</code> arredonda para zero casas decimais (inteiro, mas como float formatado).',
      q: 'O que exibe: f"{3.7:.0f}"?',
      opts: [
        { t: '4', ok: true },
        { t: '3', ok: false },
        { t: '3.7', ok: false },
        { t: '3.0', ok: false },
      ],
      exp: ':.0f arredonda para o inteiro mais próximo. 3.7 → 4.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'F-strings podem chamar métodos de strings dentro das chaves.',
      q: 'O que exibe: nome = "leon"; print(f"{nome.upper()}")?',
      opts: [
        { t: 'Erro', ok: false },
        { t: 'nome.upper()', ok: false },
        { t: 'LEON', ok: true },
        { t: 'leon', ok: false },
      ],
      exp: '{nome.upper()} chama o método upper() dentro da f-string. Resultado: "LEON".',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Formate um número com 2 casas decimais.',
      code: `nota = <span class="nm">8.5678</span>\n<span class="mt">print</span>(<span class="kw">f</span><span class="st">"Nota: {nota:<span class="kw">_______</span>}"</span>)\n<span class="cm"># exibe: Nota: 8.57</span>`,
      q: 'Qual especificador formata com 2 casas decimais?',
      ans: '.2f',
      exp: ':.2f formata como float com 2 casas. 8.5678 → 8.57 (arredondado).',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Execute expressão dentro da f-string.',
      code: `a = <span class="nm">15</span>\nb = <span class="nm">4</span>\n<span class="mt">print</span>(<span class="kw">f</span><span class="st">"Resultado: {<span class="kw">_______</span>}"</span>)\n<span class="cm"># exibe: Resultado: 3</span>`,
      q: 'Qual expressão de divisão inteira preenche o espaço?',
      ans: 'a // b',
      exp: 'a // b = 15 // 4 = 3. F-strings avaliam expressões Python completas dentro de {}.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise esta tabela formatada.',
      code: `itens = [(<span class="st">"Pistola"</span>, <span class="nm">150.5</span>), (<span class="st">"Faca"</span>, <span class="nm">30.0</span>)]\n<span class="kw">for</span> nome, preco <span class="kw">in</span> itens:\n    <span class="mt">print</span>(<span class="kw">f</span><span class="st">"{nome:<span class="nm">10</span>} R$ {preco:<span class="nm">.2f</span>}"</span>)`,
      q: 'O que este código exibe?',
      opts: [
        { t: 'Erro de formato', ok: false },
        { t: '"Pistola" "Faca"', ok: false },
        { t: 'Pistola R$ 150.5 / Faca R$ 30.0', ok: false },
        { t: 'Pistola    R$ 150.50 / Faca       R$ 30.00', ok: true },
      ],
      exp: '{nome:<10} alinha à esquerda em 10 chars. {preco:.2f} formata com 2 decimais. Resultado: tabela alinhada.',
    },

  ]
};
