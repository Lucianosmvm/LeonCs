// ══════════════════════════════════════════════════════
// PYTHON — MISSÃO 27 — TESTES AUTOMATIZADOS
// Tema: assert, unittest e pytest
// Tipo: Normal (10 questões) | Progressão: 7 MC → 2 Fill → 1 Code
// ══════════════════════════════════════════════════════

const MISSION_PYTHON_26 = {
  id: 26,
  title: "MISSÃO 27 — TESTES AUTOMATIZADOS",
  icon: '✅',
  free: false,
  desc: "Testes garantem que o código funciona e continua funcionando após mudanças. Base da confiança em qualquer projeto sério.",
  objs: [
    "Validar condições com assert",
    "Escrever testes com unittest e pytest",
    "Entender o ciclo de teste automatizado"
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'A instrução <code>assert</code> lança <code>AssertionError</code> se a condição for falsa.',
      q: 'O que acontece quando um assert falha?',
      opts: [
        { t: 'O programa continua normalmente', ok: false },
        { t: 'Lança AssertionError', ok: true },
        { t: 'Retorna False', ok: false },
        { t: 'Imprime um aviso e segue', ok: false },
      ],
      exp: 'assert cond, "msg": se cond for falsa, lança AssertionError com a mensagem opcional.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>unittest</code> é o framework de testes embutido na biblioteca padrão.',
      q: 'Qual framework de testes já vem com Python?',
      opts: [
        { t: 'pytest', ok: false },
        { t: 'nose', ok: false },
        { t: 'testlib', ok: false },
        { t: 'unittest', ok: true },
      ],
      exp: 'unittest está na biblioteca padrão. pytest é externo, mas muito popular por sua sintaxe simples.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'No pytest, os testes são funções cujo nome começa com <code>test_</code>.',
      q: 'Como o pytest reconhece uma função de teste?',
      opts: [
        { t: 'Pelo nome que começa com test_', ok: true },
        { t: 'Pelo decorator @test', ok: false },
        { t: 'Por herdar de TestCase', ok: false },
        { t: 'Pela extensão do arquivo', ok: false },
      ],
      exp: 'pytest coleta automaticamente funções test_* em arquivos test_*.py ou *_test.py.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Em <code>unittest</code>, os casos de teste herdam de <code>unittest.TestCase</code>.',
      q: 'De qual classe herda um caso de teste no unittest?',
      opts: [
        { t: 'Test', ok: false },
        { t: 'Assert', ok: false },
        { t: 'unittest.TestCase', ok: true },
        { t: 'unittest.Runner', ok: false },
      ],
      exp: 'class MeuTeste(unittest.TestCase) dá acesso a assertEqual, assertTrue e outros métodos de verificação.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: '<code>assertEqual(a, b)</code> verifica se dois valores são iguais.',
      q: 'O que assertEqual(a, b) verifica?',
      opts: [
        { t: 'Se a e b são iguais', ok: true },
        { t: 'Se a é maior que b', ok: false },
        { t: 'Se a é do tipo b', ok: false },
        { t: 'Se a e b são o mesmo objeto', ok: false },
      ],
      exp: 'assertEqual(a, b) falha se a != b. Para identidade use assertIs; para tipo, assertIsInstance.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Um bom teste segue o padrão <strong>Arrange, Act, Assert</strong>: preparar, executar, verificar.',
      q: 'Qual a última etapa do padrão AAA de um teste?',
      opts: [
        { t: 'Arrange (preparar)', ok: false },
        { t: 'Act (executar)', ok: false },
        { t: 'Await (esperar)', ok: false },
        { t: 'Assert (verificar)', ok: true },
      ],
      exp: 'Arrange prepara os dados, Act executa a operação, Assert compara o resultado com o esperado.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Testes automatizados protegem contra <strong>regressões</strong> — bugs reintroduzidos ao mexer no código.',
      q: 'O que é uma regressão em testes?',
      opts: [
        { t: 'Um teste que roda mais devagar', ok: false },
        { t: 'Um bug reintroduzido por uma mudança', ok: true },
        { t: 'Um teste que nunca executa', ok: false },
        { t: 'Um erro de sintaxe', ok: false },
      ],
      exp: 'Regressão é quando algo que funcionava para de funcionar. Testes as detectam cedo, antes de chegar em produção.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Verifique uma condição diretamente com a instrução apropriada.',
      code: `<span class="kw">_______</span> soma(<span class="nm">2</span>, <span class="nm">3</span>) <span class="kw">==</span> <span class="nm">5</span>, <span class="st">"soma incorreta"</span>`,
      q: 'Qual instrução valida a condição e lança erro se falsa?',
      ans: 'assert',
      exp: 'assert cond, msg lança AssertionError("soma incorreta") se soma(2,3) não for 5.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'Nomeie a função de teste para que o pytest a detecte.',
      code: `<span class="kw">def</span> <span class="kw">_______</span>_soma():\n    <span class="kw">assert</span> <span class="nm">1</span> <span class="kw">+</span> <span class="nm">1</span> <span class="kw">==</span> <span class="nm">2</span>`,
      q: 'Com qual prefixo o nome da função de teste deve começar?',
      ans: 'test',
      exp: 'pytest coleta funções cujo nome começa com test_. Aqui: test_soma.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Analise a execução deste bloco de asserts.',
      code: `<span class="kw">def</span> em_dobro(x):\n    <span class="kw">return</span> x <span class="kw">*</span> <span class="nm">2</span>\n\n<span class="kw">assert</span> em_dobro(<span class="nm">4</span>) <span class="kw">==</span> <span class="nm">8</span>\n<span class="kw">assert</span> em_dobro(<span class="nm">0</span>) <span class="kw">==</span> <span class="nm">0</span>\n<span class="mt">print</span>(<span class="st">"OK"</span>)`,
      q: 'O que este código exibe?',
      opts: [
        { t: 'AssertionError', ok: false },
        { t: 'nada', ok: false },
        { t: 'OK', ok: true },
        { t: '8 0 OK', ok: false },
      ],
      exp: 'Ambos os asserts passam (8==8 e 0==0), então a execução chega ao print e exibe "OK".',
    },

  ]
};
