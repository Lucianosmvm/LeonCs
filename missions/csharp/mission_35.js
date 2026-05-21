const MISSION_35 = {
  id: 35,
  title: "MISSÃO 36 — A ARMARIA",
  icon: '🔫',
  free: false,
  desc: "Na armaria, armas quebradas podem explodir nas mãos de quem as usa. Exceções são os erros em runtime — aprenda a capturá-los, tratá-los e criar os seus próprios.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>Exceções</strong> representam erros em runtime. Em C#, toda exceção herda de <code>Exception</code>. O bloco <code>try/catch</code> captura e trata.',
      q: 'O que acontece se uma exceção não for capturada?',
      hint: 'O programa não consegue continuar',
      opts: [
        { t: 'O código continua normalmente', ok: false },
        { t: 'O programa encerra com mensagem de erro (unhandled exception)', ok: true },
        { t: 'A exceção é ignorada silenciosamente', ok: false },
        { t: 'O C# reinicia o bloco automaticamente', ok: false },
      ],
      exp: 'Sem catch, a exceção sobe pela call stack. Se nenhum nível capturar, o processo termina abruptamente — unhandled exception.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'O bloco <code>finally</code> executa sempre — com ou sem exceção. Ideal para liberar recursos.',
      q: 'Quando o bloco finally NÃO executa?',
      hint: 'Situação extrema',
      opts: [
        { t: 'Quando uma exceção é lançada', ok: false },
        { t: 'Quando o try termina normalmente', ok: false },
        { t: 'Quando o processo é terminado abruptamente (Environment.Exit, crash de SO)', ok: true },
        { t: 'Finally sempre executa, sem exceção', ok: false },
      ],
      exp: 'Finally executa em quase todo caso. Exceções: Environment.FailFast(), StackOverflow fatal, crash de processo pelo SO.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Múltiplos <code>catch</code> permitem tratar tipos diferentes de exceção. O mais específico deve vir antes.',
      q: 'Por que colocar "catch (Exception e)" antes de "catch (IOException e)" é um erro?',
      hint: 'IOException é filho de Exception',
      opts: [
        { t: 'Não é um erro — a ordem não importa', ok: false },
        { t: 'Exception captura tudo; IOException nunca seria alcançado', ok: true },
        { t: 'O compilador aceita mas é lento', ok: false },
        { t: 'Apenas IOException pode ser capturado', ok: false },
      ],
      exp: 'Exception é pai de IOException. O catch mais geral captura antes do específico. Compilador até alerta: "unreachable code".',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>throw</code> lança uma exceção. <code>throw;</code> (sem argumento) dentro de um catch re-lança preservando o stack trace original.',
      q: 'Qual a diferença entre "throw ex;" e "throw;" dentro de um catch?',
      hint: 'Stack trace preservation',
      opts: [
        { t: 'São idênticos', ok: false },
        { t: '"throw ex" reseta o stack trace; "throw" preserva o original', ok: true },
        { t: '"throw" lança uma nova exceção', ok: false },
        { t: '"throw ex" é inválido', ok: false },
      ],
      exp: '"throw ex" perde o stack trace original (parece que o erro veio do catch). "throw;" re-lança preservando onde realmente ocorreu.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Estrutura básica try/catch para capturar divisão por zero:',
      code: `<span class="kw">try</span>\n{\n    <span class="kw">int</span> r = <span class="nm">10</span> / x;\n}\n<span class="kw">_______</span> (DivideByZeroException ex)\n{\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Divisão por zero!"</span>);\n}`,
      q: 'Qual palavra-chave captura a exceção?',
      hint: 'Pegar em inglês',
      ans: 'catch',
      exp: '"catch (TipoExcecao ex)" captura exceções do tipo especificado. "ex" contém Message, StackTrace e InnerException.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'O bloco finally garante execução mesmo com exceção — útil para fechar conexões:',
      code: `<span class="kw">try</span> { <span class="cm">/* usa recurso */</span> }\n<span class="kw">catch</span> (Exception e) { <span class="cm">/* trata */</span> }\n<span class="kw">_______</span> { conexao.<span class="mt">Fechar</span>(); }`,
      q: 'Qual palavra-chave garante execução ao final, com ou sem exceção?',
      hint: 'Finalmente em inglês',
      ans: 'finally',
      exp: '"finally" sempre executa. Mas prefira "using" para recursos IDisposable — é mais limpo e seguro.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Para lançar uma exceção manualmente com mensagem personalizada:',
      code: `<span class="kw">if</span> (hp < <span class="nm">0</span>)\n    <span class="kw">_______</span> <span class="kw">new</span> ArgumentOutOfRangeException(<span class="st">"HP não pode ser negativo"</span>);`,
      q: 'Qual palavra-chave lança uma exceção?',
      hint: 'Jogar, lançar em inglês',
      ans: 'throw',
      exp: '"throw new ExcecaoTipo("mensagem")" lança imediatamente. A execução para e sobe pela call stack até um catch ou o programa termina.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Criando uma exceção customizada herdando de Exception:',
      code: `<span class="kw">public class</span> MunicaoInsuficienteException : <span class="kw">_______</span>\n{\n    <span class="kw">public</span> MunicaoInsuficienteException(<span class="kw">string</span> msg) : <span class="kw">base</span>(msg) {}\n}`,
      q: 'De qual classe todas as exceções customizadas devem herdar?',
      hint: 'A classe base de todas as exceções',
      ans: 'Exception',
      exp: 'Exceções customizadas herdam de Exception (ou de uma subclasse como ApplicationException). "base(msg)" repassa a mensagem.',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Try/catch capturando exceção específica.',
      code: `<span class="kw">int</span>[] arr = { <span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span> };\n<span class="kw">try</span>\n{\n    Console.<span class="mt">WriteLine</span>(arr[<span class="nm">5</span>]);\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Nunca chego aqui"</span>);\n}\n<span class="kw">catch</span> (IndexOutOfRangeException)\n{\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Índice inválido!"</span>);\n}\nConsole.<span class="mt">WriteLine</span>(<span class="st">"Após o try"</span>);`,
      q: 'O que será exibido?',
      hint: 'arr[5] não existe — o catch captura',
      opts: [
        { t: 'Índice inválido! e Após o try', ok: true },
        { t: 'Apenas Índice inválido!', ok: false },
        { t: 'O programa termina com erro', ok: false },
        { t: 'Nunca chego aqui e Após o try', ok: false },
      ],
      exp: 'arr[5] lança IndexOutOfRangeException. catch captura → "Índice inválido!". Execução continua após o try/catch → "Após o try".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Finally garantindo limpeza de recursos.',
      code: `<span class="kw">string</span> fase = <span class="st">""</span>;\n<span class="kw">try</span>\n{\n    fase = <span class="st">"Tentando"</span>;\n    <span class="kw">throw new</span> Exception(<span class="st">"Falhou"</span>);\n    fase = <span class="st">"Sucesso"</span>;\n}\n<span class="kw">catch</span> (Exception e)\n{\n    fase += <span class="st">" → Erro: "</span> + e.Message;\n}\n<span class="kw">finally</span>\n{\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Finally: "</span> + fase);\n}\nConsole.<span class="mt">WriteLine</span>(<span class="st">"Fim"</span>);`,
      q: 'O que será exibido?',
      hint: 'fase recebe valor no try e no catch, finally usa o valor final',
      opts: [
        { t: 'Finally: Tentando → Erro: Falhou e Fim', ok: true },
        { t: 'Finally: Tentando e Fim', ok: false },
        { t: 'Finally: Sucesso e Fim', ok: false },
        { t: 'Apenas Fim', ok: false },
      ],
      exp: 'fase="Tentando". throw interrompe. catch: fase+=" → Erro: Falhou". finally executa com fase="Tentando → Erro: Falhou". Depois "Fim".',
    },

    // Q11 — Code
    {
      type: 'code',
      bubble: 'Múltiplos catch — do mais específico ao geral.',
      code: `<span class="kw">static void</span> <span class="mt">Ler</span>(<span class="kw">string</span> input)\n{\n    <span class="kw">try</span> { <span class="kw">int</span> n = <span class="kw">int</span>.<span class="mt">Parse</span>(input); }\n    <span class="kw">catch</span> (FormatException)\n        { Console.<span class="mt">WriteLine</span>(<span class="st">"Formato inválido"</span>); }\n    <span class="kw">catch</span> (OverflowException)\n        { Console.<span class="mt">WriteLine</span>(<span class="st">"Número muito grande"</span>); }\n    <span class="kw">catch</span> (Exception e)\n        { Console.<span class="mt">WriteLine</span>(<span class="st">"Erro geral: "</span> + e.Message); }\n}\n<span class="mt">Ler</span>(<span class="st">"abc"</span>);\n<span class="mt">Ler</span>(<span class="st">"99999999999999"</span>);`,
      q: 'O que será exibido?',
      hint: '"abc" → FormatException; número enorme → OverflowException',
      opts: [
        { t: 'Formato inválido e Número muito grande', ok: true },
        { t: 'Erro geral e Erro geral', ok: false },
        { t: 'Formato inválido e Erro geral', ok: false },
        { t: 'Exceção não tratada', ok: false },
      ],
      exp: '"abc" → int.Parse lança FormatException → 1º catch. "999...999" → OverflowException → 2º catch. Específicos antes do geral.',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'Exceção customizada com informação extra.',
      code: `<span class="kw">class</span> SemMunicaoException : Exception\n{\n    <span class="kw">public string</span> Arma;\n    <span class="kw">public</span> SemMunicaoException(<span class="kw">string</span> arma)\n        : <span class="kw">base</span>(<span class="st">$"{arma} sem munição!"</span>)\n        => Arma = arma;\n}\n<span class="kw">try</span>\n{\n    <span class="kw">throw new</span> SemMunicaoException(<span class="st">"Pistola"</span>);\n}\n<span class="kw">catch</span> (SemMunicaoException e)\n{\n    Console.<span class="mt">WriteLine</span>(<span class="st">$"[{e.Arma}] {e.Message}"</span>);\n}`,
      q: 'O que será exibido?',
      hint: 'e.Arma = "Pistola", e.Message = mensagem do construtor',
      opts: [
        { t: '[Pistola] Pistola sem munição!', ok: true },
        { t: '[SemMunicaoException] Pistola', ok: false },
        { t: 'Pistola sem munição!', ok: false },
        { t: 'Erro — exceção customizada inválida', ok: false },
      ],
      exp: 'e.Arma = "Pistola". e.Message = "Pistola sem munição!" (passado ao base). Exibe "[Pistola] Pistola sem munição!".',
    },

  ]
};
