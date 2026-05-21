// ══════════════════════════════════════════════════════
// EPÍLOGO — O LEGADO
// MISSÃO 93 — CÓDIGO IMPLACÁVEL
// Tema: Advanced C# — unsafe code, pointers, stackalloc avançado, native interop
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_92 = {
  id: 92,
  title: "MISSÃO 93 — CÓDIGO IMPLACÁVEL",
  icon: '⚠️',
  free: false,
  desc: "As missões mais perigosas exigem as ferramentas mais extremas. Código unsafe, ponteiros, interop com código nativo — as armas de última instância do C# para quando performance e controle absolutos são necessários.",
  objs: [
    "Entender código unsafe e ponteiros em C#",
    "Usar stackalloc com Span para buffers de alta performance",
    "Conhecer P/Invoke para interoperabilidade nativa",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>unsafe code</strong> em C# permite usar ponteiros diretamente — memória não gerenciada, sem GC. Requer <code>unsafe</code> keyword e configuração no projeto (<AllowUnsafeBlocks>true</AllowUnsafeBlocks>).',
      q: 'Por que código unsafe deve ser minimizado em C#?',
      hint: 'GC e segurança de memória',
      opts: [
        { t: 'Código unsafe é mais lento', ok: false },
        { t: 'Perde garantias do GC — memory leaks, dangling pointers, buffer overflows são possíveis', ok: true },
        { t: 'Unsafe não é suportado no .NET 8', ok: false },
        { t: 'Código unsafe não compila em Release', ok: false },
      ],
      exp: 'Unsafe: sem verificação de bounds, sem GC, sem type safety. Alternativas modernas: Span<T>, Memory<T>, stackalloc — performance sem unsafe em muitos casos.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>stackalloc</code> aloca memória na stack — sem GC, sem heap. Com Span<T> (C# 7.2+), pode ser usado em código safe em alguns contextos.',
      q: 'Qual a limitação principal de stackalloc?',
      hint: 'Tamanho limitado',
      opts: [
        { t: 'Não suporta tipos primitivos', ok: false },
        { t: 'Stack tem tamanho limitado (~1MB) — stackalloc grande pode causar StackOverflowException', ok: true },
        { t: 'stackalloc não pode ser usado com Span', ok: false },
        { t: 'stackalloc é apenas para código 64-bit', ok: false },
      ],
      exp: 'Stack: ~1MB por thread. stackalloc para buffers pequenos (centenas de bytes). Para buffers grandes: ArrayPool ou heap. StackOverflowException se stack esgotada.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<strong>P/Invoke</strong> (Platform Invocation Services) permite chamar funções de DLLs nativas (C/C++, Win32 API) diretamente do C#.',
      q: 'Qual atributo é usado para P/Invoke em C#?',
      hint: 'DllImport',
      opts: [
        { t: '[NativeMethod]', ok: false },
        { t: '[DllImport("library.dll")]', ok: true },
        { t: '[Interop("library.dll")]', ok: false },
        { t: '[Extern("library.dll")]', ok: false },
      ],
      exp: '[DllImport("kernel32.dll")] static extern bool CloseHandle(IntPtr h): importa função do kernel32. .NET 7+: LibraryImport (source generator) é preferido ao DllImport.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<strong>fixed</strong> statement em código unsafe "prega" um objeto gerenciado na memória para que o GC não mova ele enquanto o ponteiro está em uso.',
      q: 'Por que usar "fixed" ao trabalhar com ponteiros para objetos gerenciados?',
      hint: 'GC pode mover objetos',
      opts: [
        { t: 'Para evitar que o objeto seja coletado', ok: false },
        { t: 'O GC pode mover objetos — fixed impede movimentação enquanto o ponteiro está em uso', ok: true },
        { t: 'fixed torna o objeto readonly', ok: false },
        { t: 'Apenas para arrays', ok: false },
      ],
      exp: 'GC compacting: move objetos para desfragmentar heap. Se você tem ponteiro para o objeto e GC move → ponteiro inválido. fixed: "prega" na memória durante o bloco.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'stackalloc com Span (safe context):',
      code: `Span&lt;<span class="kw">int</span>&gt; buffer = <span class="kw">_______</span> <span class="kw">int</span>[<span class="nm">16</span>];
buffer[<span class="nm">0</span>] = <span class="nm">42</span>;
Console.<span class="mt">WriteLine</span>(buffer[<span class="nm">0</span>]);`,
      q: 'Qual keyword aloca memória na stack?',
      hint: 'Stack allocate',
      ans: 'stackalloc',
      exp: 'stackalloc int[16]: 16 ints na stack (64 bytes). Span<int> wrapping = safe. Sem GC pressure. Para buffers temporários pequenos em hot paths.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'P/Invoke básico (conceitual):',
      code: `[<span class="tp">DllImport</span>(<span class="st">"kernel32.dll"</span>)]
<span class="kw">static extern</span> IntPtr <span class="mt">GetCurrentProcess</span>();

<span class="kw">var</span> handle = _______();
Console.<span class="mt">WriteLine</span>(handle != IntPtr.Zero);`,
      q: 'Como chamar a função P/Invoke importada?',
      hint: 'O nome do método declarado',
      ans: 'GetCurrentProcess',
      exp: 'GetCurrentProcess(): chamada direta ao método extern. P/Invoke faz o marshaling automaticamente. handle = ponteiro para processo atual. Não zero = válido.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Ponteiro com unsafe (conceitual):',
      code: `<span class="kw">unsafe</span>
{
    <span class="kw">int</span> x = <span class="nm">42</span>;
    <span class="kw">int</span>* ptr = _______x;
    Console.<span class="mt">WriteLine</span>(*ptr);
}`,
      q: 'Qual operador obtém o endereço de uma variável?',
      hint: 'Address-of operator',
      ans: '&',
      exp: '&x: address-of operator. int* ptr = &x: ptr aponta para x. *ptr: dereference = valor em ptr = 42. unsafe block necessário para ponteiros.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'stackalloc com Span — operações.',
      code: `Span&lt;<span class="kw">int</span>&gt; nums = <span class="kw">stackalloc int</span>[<span class="nm">5</span>];
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i < <span class="nm">5</span>; i++) nums[i] = (i + <span class="nm">1</span>) * <span class="nm">2</span>;
<span class="kw">int</span> soma = <span class="nm">0</span>;
<span class="kw">foreach</span> (<span class="kw">var</span> n <span class="kw">in</span> nums) soma += n;
Console.<span class="mt">WriteLine</span>(soma);`,
      q: 'O que será exibido?',
      hint: '2+4+6+8+10',
      opts: [
        { t: '20', ok: false },
        { t: '30', ok: true },
        { t: '10', ok: false },
        { t: 'Erro — stackalloc em foreach', ok: false },
      ],
      exp: 'nums = {2,4,6,8,10}. Soma = 2+4+6+8+10 = 30. Span suporta foreach. "30".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'MemoryMarshal para reinterpretar bytes.',
      code: `<span class="kw">int</span>[] ints = { <span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span> };
<span class="kw">var</span> intSpan = ints.<span class="mt">AsSpan</span>();
<span class="kw">var</span> byteSpan = MemoryMarshal.<span class="mt">AsBytes</span>(intSpan);
Console.<span class="mt">WriteLine</span>(intSpan.<span class="mt">Length</span>);
Console.<span class="mt">WriteLine</span>(byteSpan.<span class="mt">Length</span>);`,
      q: 'O que será exibido?',
      hint: 'int = 4 bytes; 3 ints = 12 bytes',
      opts: [
        { t: '3 e 3', ok: false },
        { t: '3 e 12', ok: true },
        { t: '12 e 3', ok: false },
        { t: 'Erro — MemoryMarshal', ok: false },
      ],
      exp: 'intSpan.Length = 3 (elementos int). byteSpan.Length = 3 * sizeof(int) = 3 * 4 = 12. "3" e "12".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'NativeMemory para alocação não gerenciada.',
      code: `<span class="kw">unsafe</span>
{
    <span class="kw">void</span>* ptr = NativeMemory.<span class="mt">Alloc</span>(<span class="nm">16</span>);
    <span class="kw">var</span> span = <span class="kw">new</span> Span&lt;<span class="kw">byte</span>&gt;(ptr, <span class="nm">16</span>);
    span.<span class="mt">Fill</span>(<span class="nm">0xFF</span>);
    Console.<span class="mt">WriteLine</span>(span[<span class="nm">0</span>] == <span class="nm">0xFF</span>);
    NativeMemory.<span class="mt">Free</span>(ptr);
}`,
      q: 'O que será exibido?',
      hint: 'Fill com 0xFF e verificar primeiro byte',
      opts: [
        { t: 'False', ok: false },
        { t: 'True', ok: true },
        { t: 'Erro — NativeMemory requer unsafe', ok: false },
        { t: '255', ok: false },
      ],
      exp: 'NativeMemory.Alloc(16): 16 bytes sem GC. Span.Fill(0xFF): todos bytes = 255. span[0] == 0xFF = true. NativeMemory.Free: libera manualmente. "True".',
    },

  ]
};
