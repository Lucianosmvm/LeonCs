const MISSION_31 = {
  id: 31,
  title: "MISSÃO 32 — O PORÃO",
  icon: '🕳️',
  free: false,
  desc: "No porão do castelo, há armadilhas invisíveis — referências que parecem existir mas não existem. NullReferenceException é o inimigo mais perigoso. Aprenda a lidar com o null.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<code>NullReferenceException</code> ocorre ao tentar acessar membro de uma referência null. Tony Hoare chamou null de "billion-dollar mistake".',
      q: 'O que causa uma NullReferenceException?',
      hint: 'Acessar algo que não existe',
      opts: [
        { t: 'Dividir por zero', ok: false },
        { t: 'Tentar acessar método ou propriedade de uma referência null', ok: true },
        { t: 'Usar int sem inicializar', ok: false },
        { t: 'Overflow de int', ok: false },
      ],
      exp: '"string s = null; s.Length" → NullReferenceException. A variável existe mas não aponta para nenhum objeto na memória.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>int?</code> é açúcar sintático para <code>Nullable&lt;int&gt;</code> — um int que também pode ser null.',
      q: 'Por que tipos de valor (int, bool) normalmente não podem ser null?',
      hint: 'Tipos de valor ficam na stack',
      opts: [
        { t: 'Por limitação do compilador', ok: false },
        { t: 'Tipos de valor sempre têm um valor padrão (0, false); null significa "sem objeto"', ok: true },
        { t: 'Tipos de valor não existem em C#', ok: false },
        { t: 'Apenas string pode ser null', ok: false },
      ],
      exp: 'Tipos de valor na stack sempre têm um valor. int? envolve o int em Nullable<int>, adicionando um flag HasValue para representar null.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'O operador <code>??</code> (null-coalescing) retorna o valor da esquerda se não for null; caso contrário, retorna o da direita.',
      q: 'O que "string nome = entrada ?? \"Desconhecido\"" faz?',
      hint: 'Plano B quando null',
      opts: [
        { t: 'Sempre usa "Desconhecido"', ok: false },
        { t: 'Usa "entrada" se não for null; senão usa "Desconhecido"', ok: true },
        { t: 'Lança exceção se entrada for null', ok: false },
        { t: 'Compara entrada com "Desconhecido"', ok: false },
      ],
      exp: '"a ?? b": retorna a se a != null, senão retorna b. Substitui o padrão "if (a != null) return a; else return b;"',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'O operador <code>?.</code> (null-conditional) acessa um membro apenas se o objeto não for null — retorna null em vez de lançar exceção.',
      q: 'O que "inimigo?.HP" retorna se inimigo for null?',
      hint: 'Propagação segura de null',
      opts: [
        { t: 'Lança NullReferenceException', ok: false },
        { t: '0 (valor padrão de int)', ok: false },
        { t: 'null (int? neste caso)', ok: true },
        { t: 'false', ok: false },
      ],
      exp: '"inimigo?.HP" retorna int? (nullable int). Se inimigo == null → retorna null. Se não for null → retorna o HP. Sem exceção.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Declarando uma variável int que também aceita null:',
      code: `<span class="kw">int</span><span class="kw">_______</span> munição = <span class="kw">null</span>;`,
      q: 'Qual símbolo torna o tipo de valor nullable?',
      hint: 'Ponto de interrogação',
      ans: '?',
      exp: '"int?" é Nullable<int>. Aceita null além de valores inteiros. Propriedades: .HasValue (bool) e .Value (int).',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'O operador ??= atribui apenas se a variável for null:',
      code: `<span class="kw">string</span> nome = <span class="kw">null</span>;\nnome <span class="kw">_______</span> <span class="st">"Agente"</span>; <span class="cm">// atribui apenas se null</span>`,
      q: 'Qual operador atribui somente se o valor atual for null?',
      hint: 'Null coalescing assignment',
      ans: '??=',
      exp: '"??=" (C# 8+): atribui somente se o lado esquerdo for null. "nome ??= "Agente"" → nome vira "Agente" apenas se era null.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Para verificar se um nullable tem valor antes de usá-lo:',
      code: `<span class="kw">int</span>? hp = <span class="kw">null</span>;\n<span class="kw">if</span> (hp.<span class="kw">_______</span>)\n    Console.<span class="mt">WriteLine</span>(hp.Value);`,
      q: 'Qual propriedade de Nullable<T> indica se há um valor?',
      hint: 'Tem valor?',
      ans: 'HasValue',
      exp: '"hp.HasValue" retorna true se hp != null. "hp.Value" acessa o int subjacente — lança exceção se HasValue for false.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Encadeando operadores null-conditional para acessar propriedades aninhadas:',
      code: `<span class="kw">int</span>? hp = personagem<span class="kw">?.</span>Inventario<span class="kw">?.</span>ArmaAtual<span class="kw">?.</span><span class="kw">_______</span>;`,
      q: 'Se quisermos acessar o Dano da ArmaAtual, o que vai no espaço?',
      hint: 'A propriedade que queremos ao final da cadeia',
      ans: 'Dano',
      exp: '"personagem?.Inventario?.ArmaAtual?.Dano" — se qualquer parte for null, retorna null sem exceção. Null propagation em cadeia.',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Operador ?? com fallback.',
      code: `<span class="kw">string</span> codinome = <span class="kw">null</span>;\n<span class="kw">string</span> display = codinome ?? <span class="st">"Agente Desconhecido"</span>;\nConsole.<span class="mt">WriteLine</span>(display);\n\ncodinome = <span class="st">"Leon"</span>;\ndisplay = codinome ?? <span class="st">"Agente Desconhecido"</span>;\nConsole.<span class="mt">WriteLine</span>(display);`,
      q: 'O que será exibido nas duas linhas?',
      hint: 'Primeiro null, depois com valor',
      opts: [
        { t: 'null e Leon', ok: false },
        { t: 'Agente Desconhecido e Leon', ok: true },
        { t: 'Agente Desconhecido e Agente Desconhecido', ok: false },
        { t: 'Erro na primeira linha', ok: false },
      ],
      exp: 'codinome=null → ?? retorna "Agente Desconhecido". codinome="Leon" → ?? retorna "Leon" (não é null).',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Operador ?. evitando NullReferenceException.',
      code: `<span class="kw">string</span>? msg = <span class="kw">null</span>;\nConsole.<span class="mt">WriteLine</span>(msg?.<span class="mt">Length</span> ?? <span class="nm">-1</span>);\n\nmsg = <span class="st">"Leon"</span>;\nConsole.<span class="mt">WriteLine</span>(msg?.<span class="mt">Length</span> ?? <span class="nm">-1</span>);`,
      q: 'O que será exibido?',
      hint: 'msg null → ?.Length = null → ?? -1. msg "Leon" → length = 4',
      opts: [
        { t: '0 e 4', ok: false },
        { t: '-1 e 4', ok: true },
        { t: 'Exceção e 4', ok: false },
        { t: '-1 e -1', ok: false },
      ],
      exp: 'msg=null: msg?.Length = null → ?? -1 → exibe -1. msg="Leon": msg?.Length = 4 → ?? não aplica → exibe 4.',
    },

    // Q11 — Code
    {
      type: 'code',
      bubble: 'Nullable<T> com HasValue e Value.',
      code: `<span class="kw">int</span>? kills = <span class="kw">null</span>;\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"HasValue: {kills.HasValue}"</span>);\n\nkills = <span class="nm">42</span>;\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"HasValue: {kills.HasValue}, Value: {kills.Value}"</span>);`,
      q: 'O que será exibido?',
      hint: 'Primeiro null, depois com valor 42',
      opts: [
        { t: 'HasValue: False e HasValue: True, Value: 42', ok: true },
        { t: 'HasValue: True e HasValue: True, Value: 42', ok: false },
        { t: 'Exceção ao acessar kills.Value', ok: false },
        { t: 'HasValue: False e HasValue: False, Value: 42', ok: false },
      ],
      exp: 'kills=null → HasValue=False. kills=42 → HasValue=True, Value=42. Acesso seguro ao verificar HasValue antes.',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'Pattern matching com null — is null e is not null.',
      code: `<span class="kw">static string</span> <span class="mt">Status</span>(<span class="kw">string</span>? nome) => nome <span class="kw">switch</span>\n{\n    <span class="kw">null</span>         => <span class="st">"Sem nome"</span>,\n    <span class="st">""</span>           => <span class="st">"Nome vazio"</span>,\n    <span class="kw">var</span> n <span class="kw">when</span> n.<span class="mt">Length</span> > <span class="nm">10</span> => <span class="st">"Nome longo"</span>,\n    <span class="kw">var</span> n        => <span class="st">$"Olá, {n}"</span>\n};\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Status</span>(<span class="kw">null</span>));\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Status</span>(<span class="st">"Leon"</span>));`,
      q: 'O que será exibido?',
      hint: 'null → primeiro case; "Leon" tem 4 chars → último case',
      opts: [
        { t: 'Sem nome e Nome longo', ok: false },
        { t: 'Sem nome e Olá, Leon', ok: true },
        { t: 'Sem nome e Nome vazio', ok: false },
        { t: 'Erro — switch não aceita null', ok: false },
      ],
      exp: 'Status(null) → case null → "Sem nome". Status("Leon"): não é null, não é vazio, 4 ≤ 10 → var n → "Olá, Leon".',
    },

  ]
};
