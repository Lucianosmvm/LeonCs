// ══════════════════════════════════════════════════════
// ACT V — A FUGA
// MISSÃO 76 — PROTOCOLO DE TESTES
// Tema: Unit Testing — MSTest, xUnit, NUnit, mocks
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_75 = {
  id: 75,
  title: "MISSÃO 76 — PROTOCOLO DE TESTES",
  icon: '🧪',
  free: false,
  desc: "Antes de escapar, Leon precisa garantir que cada sistema funciona. Unit tests são os protocolos de verificação do agente — cada método testado é uma ameaça neutralizada antes da fuga.",
  objs: [
    "Escrever unit tests com MSTest, xUnit ou NUnit",
    "Usar Assert para verificar resultados esperados",
    "Aplicar mocking para isolar dependências",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'O padrão <strong>AAA</strong> (Arrange, Act, Assert) organiza testes: prepare o estado, execute a ação, verifique o resultado.',
      q: 'No padrão AAA, o que acontece na fase "Act"?',
      hint: 'A ação que você está testando',
      opts: [
        { t: 'Verificar o resultado esperado', ok: false },
        { t: 'Preparar objetos e estado necessários', ok: false },
        { t: 'Executar o método ou comportamento sendo testado', ok: true },
        { t: 'Limpar recursos após o teste', ok: false },
      ],
      exp: 'AAA: Arrange (preparar mocks/dados), Act (chamar o método testado), Assert (verificar resultado com Assert.AreEqual, Assert.True etc.).',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>[Fact]</code> (xUnit) marca um teste simples. <code>[Theory]</code> + <code>[InlineData]</code> permitem rodar o mesmo teste com múltiplos dados.',
      q: 'Qual atributo do xUnit permite testar um método com múltiplos conjuntos de dados?',
      hint: 'Teoria com dados inline',
      opts: [
        { t: '[Fact]', ok: false },
        { t: '[Theory] com [InlineData]', ok: true },
        { t: '[DataRow]', ok: false },
        { t: '[TestCase]', ok: false },
      ],
      exp: '[Theory] + [InlineData(1,2,3)] → método chamado para cada InlineData. [DataRow] é MSTest, [TestCase] é NUnit. [Fact] = teste único.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<strong>Mocking</strong> substitui dependências reais por objetos controlados. Frameworks como <strong>Moq</strong> criam mocks de interfaces automaticamente.',
      q: 'Por que usar mocks em unit tests?',
      hint: 'Isolamento da unidade testada',
      opts: [
        { t: 'Para testar múltiplas classes ao mesmo tempo', ok: false },
        { t: 'Para isolar a unidade testada de dependências externas como banco de dados ou APIs', ok: true },
        { t: 'Para tornar os testes mais rápidos sempre', ok: false },
        { t: 'Mocks substituem unit tests completamente', ok: false },
      ],
      exp: 'Mock de IRepositorio: simula DB sem conexão real. Testa só a lógica do serviço. Rápido, isolado, determinístico.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>Assert.ThrowsException&lt;T&gt;</code> (MSTest) verifica que um método lança a exceção esperada. Em xUnit: <code>Assert.Throws&lt;T&gt;</code>.',
      q: 'Como verificar que um método lança ArgumentNullException no xUnit?',
      hint: 'Assert.Throws com tipo da exceção',
      opts: [
        { t: 'Assert.IsTrue(method() == null)', ok: false },
        { t: 'Assert.Throws<ArgumentNullException>(() => metodo(null))', ok: true },
        { t: 'try { metodo(null); } catch { Assert.Pass(); }', ok: false },
        { t: '[ExpectedException(typeof(ArgumentNullException))]', ok: false },
      ],
      exp: 'Assert.Throws<T>(action): verifica que action lança T. Retorna a exceção para inspeção adicional. [ExpectedException] é MSTest/NUnit (não recomendado — não localiza onde a exceção ocorre).',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Marcando uma classe de teste no MSTest:',
      code: `[<span class="kw">_______</span>]
<span class="kw">public class</span> <span class="tp">MissaoServiceTests</span>
{
    [TestMethod]
    <span class="kw">public void</span> <span class="mt">Calcular_XP_Retorna_Correto</span>() { }
}`,
      q: 'Qual atributo marca a classe como contendo testes no MSTest?',
      hint: 'Classe de teste em inglês',
      ans: 'TestClass',
      exp: '[TestClass] marca a classe para o runner do MSTest. [TestMethod] marca cada teste. xUnit não precisa de atributo na classe.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Verificando que dois valores são iguais:',
      code: `[TestMethod]
<span class="kw">public void</span> <span class="mt">Soma_Dois_Mais_Dois_Igual_Quatro</span>()
{
    <span class="kw">var</span> resultado = Calculadora.<span class="mt">Somar</span>(<span class="nm">2</span>, <span class="nm">2</span>);
    Assert.<span class="mt">_______</span>(<span class="nm">4</span>, resultado);
}`,
      q: 'Qual método Assert verifica igualdade (esperado, atual)?',
      hint: 'Are Equal em inglês',
      ans: 'AreEqual',
      exp: 'Assert.AreEqual(expected, actual): falha se diferentes. Ordem: esperado primeiro, depois atual — mensagem de erro mais clara.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Configurando mock com Moq para retornar valor específico:',
      code: `<span class="kw">var</span> mock = <span class="kw">new</span> Mock&lt;IArmaRepository&gt;();
mock.<span class="mt">Setup</span>(r => r.<span class="mt">ObterPorId</span>(<span class="nm">1</span>))
    .<span class="mt">_______</span>(<span class="kw">new</span> Arma { Id = <span class="nm">1</span>, Nome = <span class="st">"Shotgun"</span> });`,
      q: 'Qual método Moq configura o valor de retorno?',
      hint: 'Retornar em inglês',
      ans: 'Returns',
      exp: '.Returns(value): quando ObterPorId(1) chamado, retorna o Arma configurado. .ReturnsAsync(value) para métodos async.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'Teste com Assert básico.',
      code: `<span class="kw">static int</span> <span class="mt">Dobrar</span>(<span class="kw">int</span> n) => n * <span class="nm">2</span>;

<span class="cm">// Pseudo-teste:</span>
<span class="kw">var</span> resultado = <span class="mt">Dobrar</span>(<span class="nm">7</span>);
<span class="kw">bool</span> passou = resultado == <span class="nm">14</span>;
Console.<span class="mt">WriteLine</span>(passou ? <span class="st">"PASS"</span> : <span class="st">"FAIL"</span>);
Console.<span class="mt">WriteLine</span>(resultado);`,
      q: 'O que será exibido?',
      hint: '7 * 2 = 14',
      opts: [
        { t: 'FAIL e 14', ok: false },
        { t: 'PASS e 14', ok: true },
        { t: 'PASS e 7', ok: false },
        { t: 'Erro — método estático', ok: false },
      ],
      exp: 'Dobrar(7) = 14. resultado == 14 → true → "PASS". Console.WriteLine(14). "PASS" e "14".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Theory com InlineData (xUnit estilo).',
      code: `<span class="cm">// Simulando Theory com múltiplos casos:</span>
(<span class="kw">int</span> a, <span class="kw">int</span> b, <span class="kw">int</span> esperado)[] casos = {
    (<span class="nm">1</span>, <span class="nm">1</span>, <span class="nm">2</span>), (<span class="nm">2</span>, <span class="nm">3</span>, <span class="nm">5</span>), (<span class="nm">0</span>, <span class="nm">0</span>, <span class="nm">0</span>)
};
<span class="kw">int</span> passou = <span class="nm">0</span>;
<span class="kw">foreach</span> (<span class="kw">var</span> (a, b, esp) <span class="kw">in</span> casos)
    <span class="kw">if</span> (a + b == esp) passou++;
Console.<span class="mt">WriteLine</span>(passou);`,
      q: 'O que será exibido?',
      hint: 'Quantos casos passam de 3?',
      opts: [
        { t: '2', ok: false },
        { t: '3', ok: true },
        { t: '1', ok: false },
        { t: '0', ok: false },
      ],
      exp: '1+1=2✓, 2+3=5✓, 0+0=0✓ — todos 3 passam. passou=3.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Verificando exceção em teste.',
      code: `<span class="kw">static int</span> <span class="mt">Dividir</span>(<span class="kw">int</span> a, <span class="kw">int</span> b)
{
    <span class="kw">if</span> (b == <span class="nm">0</span>) <span class="kw">throw new</span> DivideByZeroException();
    <span class="kw">return</span> a / b;
}

<span class="kw">bool</span> excecaoLancada = <span class="kw">false</span>;
<span class="kw">try</span> { <span class="mt">Dividir</span>(<span class="nm">10</span>, <span class="nm">0</span>); }
<span class="kw">catch</span> (DivideByZeroException) { excecaoLancada = <span class="kw">true</span>; }
Console.<span class="mt">WriteLine</span>(excecaoLancada);`,
      q: 'O que será exibido?',
      hint: 'Dividir por zero lança exceção',
      opts: [
        { t: 'False', ok: false },
        { t: 'True', ok: true },
        { t: 'Erro não tratado', ok: false },
        { t: '0', ok: false },
      ],
      exp: 'Dividir(10, 0): b==0 → throw DivideByZeroException. Catch captura → excecaoLancada=true. "True".',
    },

  ]
};
