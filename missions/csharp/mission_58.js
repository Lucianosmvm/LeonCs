// ══════════════════════════════════════════════════════
// ACT III — A ILHA
// MISSÃO 59 — TRANSMISSÃO CODIFICADA
// Tema: Span<T>, Memory<T>, string.Create — eficiência de memória
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_58 = {
  id: 58,
  title: "MISSÃO 59 — TRANSMISSÃO CODIFICADA",
  icon: '📟',
  free: false,
  desc: "As transmissões da ilha usam protocolos de alta eficiência — zero cópias, zero desperdício. Span<T> e Memory<T> são as ferramentas para manipular dados em memória sem alocações desnecessárias.",
  objs: [
    "Entender Span<T> para acesso a fatias de memória sem alocação",
    "Usar Memory<T> para operações assíncronas",
    "Aplicar stackalloc para alocação no stack",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<code>Span&lt;T&gt;</code> é uma view sobre uma sequência contígua de memória — array, stack ou memória nativa — sem copiar os dados.',
      q: 'Qual a principal vantagem de usar Span<T> em vez de array?',
      hint: 'Zero cópia',
      opts: [
        { t: 'Span<T> é mais seguro que array', ok: false },
        { t: 'Span<T> permite fatiar memória sem criar cópia — zero alocação extra', ok: true },
        { t: 'Span<T> pode ser null', ok: false },
        { t: 'Span<T> é mais fácil de serializar', ok: false },
      ],
      exp: 'Span<T> é uma "janela" sobre memória existente. Fatiar string ou array com Span não aloca novo objeto. Crítico para hot paths de performance.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>Span&lt;T&gt;</code> é um ref struct — não pode ser armazenado no heap (sem campos em classes), não funciona com async. Para isso, use <code>Memory&lt;T&gt;</code>.',
      q: 'Por que Span<T> não pode ser usado em métodos async?',
      hint: 'Ref struct não vai para heap',
      opts: [
        { t: 'Porque async não suporta tipos genéricos', ok: false },
        { t: 'Porque Span<T> é ref struct — não pode ser no heap, e async usa máquina de estado no heap', ok: true },
        { t: 'Porque Span<T> é muito grande para await', ok: false },
        { t: 'Span<T> funciona normalmente com async', ok: false },
      ],
      exp: 'Máquinas de estado de async são classes (heap). Span<T> como ref struct não pode estar nelas. Use Memory<T> em async — pode ir para o heap.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>stackalloc</code> aloca memória no stack (não no heap), evitando pressão no GC. Resulta em <code>Span&lt;T&gt;</code> em código seguro.',
      q: 'Qual a vantagem de stackalloc para arrays pequenos temporários?',
      hint: 'Stack vs Heap',
      opts: [
        { t: 'Stackalloc é mais lento', ok: false },
        { t: 'Stackalloc evita alocação no heap e pressão no GC — ideal para arrays pequenos temporários', ok: true },
        { t: 'Stackalloc permite arrays de qualquer tamanho', ok: false },
        { t: 'Stackalloc funciona apenas com unsafe code', ok: false },
      ],
      exp: 'stackalloc: memória no stack. Sem GC, sem heap. Liberada quando o método retorna. Limit: ~1MB. Para buffers pequenos e frequentes — performance crítica.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>string.AsSpan()</code> retorna um <code>ReadOnlySpan&lt;char&gt;</code> sobre os caracteres da string — sem cópia.',
      q: 'Para processar uma substring sem criar nova string, qual abordagem usar?',
      hint: 'Fatiar a string sem copiar',
      opts: [
        { t: 'str.Substring(start, len) — cria nova string', ok: false },
        { t: 'str.AsSpan().Slice(start, len) — zero alocação', ok: true },
        { t: 'str[start..end] — cria nova string', ok: false },
        { t: 'Não é possível sem copiar', ok: false },
      ],
      exp: '"str.AsSpan().Slice(start, len)" retorna ReadOnlySpan<char> sobre os chars da string original — zero cópia. Ideal para parsing de alto desempenho.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Criando um Span sobre um array existente:',
      code: `<span class="kw">int</span>[] nums = { <span class="nm">10</span>, <span class="nm">20</span>, <span class="nm">30</span>, <span class="nm">40</span>, <span class="nm">50</span> };\nSpan&lt;<span class="kw">int</span>&gt; fatia = <span class="kw">new</span> Span&lt;<span class="kw">int</span>&gt;(nums, <span class="nm">1</span>, <span class="nm">3</span>);\n<span class="cm">// ou: nums._______[1..4]</span>`,
      q: 'Qual extensão cria um Span sobre um array sem construtor?',
      hint: 'As + Span',
      ans: 'AsSpan',
      exp: '"nums.AsSpan()" cria Span<int> sobre todo o array. "nums.AsSpan(1, 3)" ou "nums.AsSpan()[1..4]" cria fatia. Zero cópia — mesmo buffer.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Usando stackalloc para buffer no stack:',
      code: `Span&lt;<span class="kw">byte</span>&gt; buffer = <span class="kw">_______</span> <span class="kw">byte</span>[<span class="nm">256</span>];\nbuffer.<span class="mt">Fill</span>(<span class="nm">0</span>); <span class="cm">// zerando buffer</span>`,
      q: 'Qual palavra-chave aloca no stack?',
      hint: 'Alloc no stack',
      ans: 'stackalloc',
      exp: '"stackalloc byte[256]" aloca 256 bytes no stack. Retorna Span<byte> em código seguro. Não precisa de unsafe. Liberado ao sair do método.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'ReadOnlySpan para processar substring sem alocação:',
      code: `<span class="kw">string</span> codigo = <span class="st">"MISSAO-51-ILHA"</span>;\nReadOnlySpan&lt;<span class="kw">char</span>&gt; numero = codigo.<span class="mt">AsSpan</span>().<span class="mt">_______</span>(<span class="nm">7</span>, <span class="nm">2</span>);\nConsole.<span class="mt">WriteLine</span>(numero.<span class="mt">ToString</span>());`,
      q: 'Qual método de Span cria uma fatia a partir de posição e comprimento?',
      hint: 'Cortar em inglês',
      ans: 'Slice',
      exp: '"Slice(7, 2)" = chars na posição 7 com comprimento 2 = "51". ToString() converte de volta para string apenas quando necessário.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'Modificando array via Span.',
      code: `<span class="kw">int</span>[] danos = { <span class="nm">10</span>, <span class="nm">20</span>, <span class="nm">30</span> };\nSpan&lt;<span class="kw">int</span>&gt; span = danos.<span class="mt">AsSpan</span>();\nspan[<span class="nm">1</span>] = <span class="nm">99</span>; <span class="cm">// modifica via Span</span>\nConsole.<span class="mt">WriteLine</span>(danos[<span class="nm">1</span>]);`,
      q: 'O que será exibido?',
      hint: 'Span é uma view — modificação afeta o array original',
      opts: [
        { t: '20', ok: false },
        { t: '99', ok: true },
        { t: 'Erro — Span é imutável', ok: false },
        { t: '30', ok: false },
      ],
      exp: 'Span<T> é uma view — mesmo buffer. span[1]=99 modifica danos[1]. danos[1] agora é 99. Console.WriteLine(99).',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Processando string sem alocação com AsSpan.',
      code: `<span class="kw">static bool</span> <span class="mt">ComecaCom</span>(ReadOnlySpan&lt;<span class="kw">char</span>&gt; texto, ReadOnlySpan&lt;<span class="kw">char</span>&gt; prefixo)\n    => texto.<span class="mt">StartsWith</span>(prefixo);\n\n<span class="kw">string</span> codigo = <span class="st">"MISSAO-51"</span>;\nConsole.<span class="mt">WriteLine</span>(<span class="mt">ComecaCom</span>(codigo, <span class="st">"MISSAO"</span>));`,
      q: 'O que será exibido?',
      hint: '"MISSAO-51" começa com "MISSAO"',
      opts: [
        { t: 'False', ok: false },
        { t: 'True', ok: true },
        { t: 'Erro — string para ReadOnlySpan', ok: false },
        { t: '6', ok: false },
      ],
      exp: 'string → ReadOnlySpan<char> implicitamente. StartsWith compara chars. "MISSAO-51" começa com "MISSAO" → True.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Stackalloc para buffer temporário sem GC.',
      code: `<span class="kw">static int</span> <span class="mt">SomarBuffer</span>(<span class="kw">int</span> n)\n{\n    Span&lt;<span class="kw">int</span>&gt; buf = <span class="kw">stackalloc int</span>[n];\n    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i < n; i++) buf[i] = i + <span class="nm">1</span>;\n    <span class="kw">int</span> soma = <span class="nm">0</span>;\n    <span class="kw">foreach</span> (<span class="kw">var</span> v <span class="kw">in</span> buf) soma += v;\n    <span class="kw">return</span> soma;\n}\nConsole.<span class="mt">WriteLine</span>(<span class="mt">SomarBuffer</span>(<span class="nm">5</span>));`,
      q: 'O que será exibido?',
      hint: '1+2+3+4+5, alocado no stack',
      opts: [
        { t: '10', ok: false },
        { t: '15', ok: true },
        { t: '5', ok: false },
        { t: 'Erro — stackalloc em método com parâmetro', ok: false },
      ],
      exp: 'buf = [1,2,3,4,5] no stack. soma = 1+2+3+4+5 = 15. Sem alocação no heap. Console.WriteLine(15).',
    },

  ]
};
