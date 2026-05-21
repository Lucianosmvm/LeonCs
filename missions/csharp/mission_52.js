// ══════════════════════════════════════════════════════
// ACT III — A ILHA
// MISSÃO 53 — O LABORATÓRIO SECRETO
// Tema: Exception handling avançado — custom exceptions, filtros
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_52 = {
  id: 52,
  title: "MISSÃO 53 — O LABORATÓRIO SECRETO",
  icon: '🧬',
  free: false,
  desc: "O laboratório da ilha está cheio de armadilhas — sistemas que explodem se você errar o protocolo. Exceções customizadas e filtros de catch são sua proteção contra erros catastróficos.",
  objs: [
    "Criar exceções customizadas herdando de Exception",
    "Usar filtros de catch com when para tratamento seletivo",
    "Entender ExceptionDispatchInfo e relançamento correto",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Criar exceções customizadas permite comunicar erros específicos do domínio. A convenção é herdar de <code>Exception</code> e terminar o nome com "Exception".',
      q: 'Por que criar exceções customizadas em vez de usar Exception genérica?',
      hint: 'Comunicação semântica do erro',
      opts: [
        { t: 'Exceções customizadas são mais rápidas', ok: false },
        { t: 'Para comunicar o tipo exato do erro e permitir catch específico por tipo', ok: true },
        { t: 'Exceções customizadas têm mais campos', ok: false },
        { t: 'Para evitar stack traces', ok: false },
      ],
      exp: '"catch (NivelInvalidoException ex)" captura só esse tipo de erro. "catch (Exception ex)" captura tudo. Exceções customizadas dão semântica ao erro.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'O filtro <code>catch (Exception ex) when (condição)</code> só entra no catch se a condição for verdadeira. Permite diferenciação sem relançar.',
      q: 'Qual a vantagem do filtro "when" no catch?',
      hint: 'Filtra sem desenrolar a stack',
      opts: [
        { t: 'É mais rápido que múltiplos catch', ok: false },
        { t: 'Permite condicionar o catch sem capturar e relançar — preserva o stack trace original', ok: true },
        { t: 'when substitui o bloco finally', ok: false },
        { t: 'when só funciona com ArgumentException', ok: false },
      ],
      exp: '"when" avalia a condição ANTES de capturar a exceção. Se false, continua procurando. Preserva o stack trace — diferente de capturar e relançar.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Ao relançar uma exceção, use <code>throw;</code> (sem argumento) para preservar o stack trace original. <code>throw ex;</code> reinicia o stack trace.',
      q: 'Qual a diferença entre "throw;" e "throw ex;" no catch?',
      hint: 'Stack trace é a pista do crime',
      opts: [
        { t: 'São equivalentes — ambos relançam a mesma exceção', ok: false },
        { t: '"throw;" preserva o stack trace; "throw ex;" reinicia o stack trace (perde informação)', ok: true },
        { t: '"throw ex;" é mais correto', ok: false },
        { t: '"throw;" só funciona sem variável de exceção', ok: false },
      ],
      exp: '"throw;" relança a exceção original com stack trace completo. "throw ex;" cria nova exceção a partir de ex, perdendo o caminho original. Sempre prefira "throw;".',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'A classe <code>AggregateException</code> agrupa múltiplas exceções. É lançada por Task.WhenAll e Parallel.ForEach quando várias operações falham.',
      q: 'Como iterar sobre as exceções internas de uma AggregateException?',
      hint: 'Ela tem uma coleção',
      opts: [
        { t: 'agg.Message', ok: false },
        { t: 'agg.InnerExceptions — coleção de todas as exceções', ok: true },
        { t: 'agg.GetBaseException()', ok: false },
        { t: 'agg.Flatten().Data', ok: false },
      ],
      exp: '"agg.InnerExceptions" é uma ReadOnlyCollection<Exception>. "agg.Flatten()" nivela AggregateExceptions aninhadas. "agg.Handle(pred)" trata cada uma.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Criando uma exceção customizada com mensagem e dado adicional:',
      code: `<span class="kw">public class</span> NivelInvalidoException : <span class="kw">_______</span>\n{\n    <span class="kw">public int</span> NivelTentado { <span class="kw">get</span>; }\n    <span class="kw">public</span> <span class="mt">NivelInvalidoException</span>(<span class="kw">int</span> nivel)\n        : <span class="kw">base</span>(<span class="st">$"Nível {nivel} inválido"</span>)\n        => NivelTentado = nivel;\n}`,
      q: 'De qual classe exceções customizadas devem herdar?',
      hint: 'Classe base de todas as exceções',
      ans: 'Exception',
      exp: 'Herdar de "Exception" é o padrão. Para exceções de sistema, herde de "SystemException". Para domínio da aplicação, herde de "ApplicationException" ou diretamente de "Exception".',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Filtro condicional no catch — só entra se a exceção contiver a palavra "crítico":',
      code: `<span class="kw">catch</span> (Exception ex) <span class="kw">_______</span> (ex.Message.<span class="mt">Contains</span>(<span class="st">"crítico"</span>))\n{\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Erro crítico detectado!"</span>);\n}`,
      q: 'Qual palavra-chave introduz o filtro de catch?',
      hint: 'Quando em inglês',
      ans: 'when',
      exp: '"when (condição)" filtra o catch. Se a condição for false, a exceção não é capturada e continua subindo. Preserva o stack trace original.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Para relançar corretamente a exceção sem perder o stack trace:',
      code: `<span class="kw">catch</span> (Exception ex)\n{\n    <span class="mt">LogarErro</span>(ex);\n    <span class="kw">_______</span>; <span class="cm">// relança preservando stack trace</span>\n}`,
      q: 'Como relançar a exceção preservando o stack trace?',
      hint: 'Sem nome da variável',
      ans: 'throw',
      exp: '"throw;" (sem argumento) relança a exceção original. "throw ex;" recriaria o stack trace a partir daqui — perda de informação de debug.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'Exceção customizada sendo lançada e capturada.',
      code: `<span class="kw">class</span> HPZeradoException : Exception\n{\n    <span class="kw">public</span> <span class="mt">HPZeradoException</span>(<span class="kw">string</span> nome)\n        : <span class="kw">base</span>(<span class="st">$"{nome} morreu!"</span>) { }\n}\n\n<span class="kw">try</span>\n{\n    <span class="kw">throw new</span> HPZeradoException(<span class="st">"Leon"</span>);\n}\n<span class="kw">catch</span> (HPZeradoException ex)\n{\n    Console.<span class="mt">WriteLine</span>(ex.Message);\n}`,
      q: 'O que será exibido?',
      hint: 'A mensagem passada ao construtor base',
      opts: [
        { t: 'HPZeradoException', ok: false },
        { t: 'Leon morreu!', ok: true },
        { t: 'Erro não tratado', ok: false },
        { t: 'null', ok: false },
      ],
      exp: 'HPZeradoException("Leon") chama base("Leon morreu!"). ex.Message = "Leon morreu!". Console.WriteLine exibe "Leon morreu!".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Filtro "when" em ação.',
      code: `<span class="kw">void</span> <span class="mt">Processar</span>(<span class="kw">int</span> codigo)\n{\n    <span class="kw">try</span> { <span class="kw">throw new</span> InvalidOperationException(<span class="st">$"Código {codigo}"</span>); }\n    <span class="kw">catch</span> (InvalidOperationException ex) <span class="kw">when</span> (codigo > <span class="nm">100</span>)\n        { Console.<span class="mt">WriteLine</span>(<span class="st">"Crítico: "</span> + ex.Message); }\n    <span class="kw">catch</span> (InvalidOperationException ex)\n        { Console.<span class="mt">WriteLine</span>(<span class="st">"Normal: "</span> + ex.Message); }\n}\n<span class="mt">Processar</span>(<span class="nm">50</span>);`,
      q: 'O que será exibido para Processar(50)?',
      hint: '50 > 100? Não',
      opts: [
        { t: 'Crítico: Código 50', ok: false },
        { t: 'Normal: Código 50', ok: true },
        { t: 'Nada — exceção não capturada', ok: false },
        { t: 'Erro de compilação', ok: false },
      ],
      exp: 'codigo=50. O primeiro catch: when(50 > 100) = false → ignora. Segundo catch sem filtro captura. "Normal: Código 50".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Hierarquia de exceções customizadas — catch mais específico primeiro.',
      code: `<span class="kw">class</span> MissaoException : Exception { <span class="kw">public</span> <span class="mt">MissaoException</span>(<span class="kw">string</span> m) : <span class="kw">base</span>(m) { } }\n<span class="kw">class</span> MissaoFalhouException : MissaoException\n    { <span class="kw">public</span> <span class="mt">MissaoFalhouException</span>() : <span class="kw">base</span>(<span class="st">"Missão falhou"</span>) { } }\n\n<span class="kw">try</span> { <span class="kw">throw new</span> MissaoFalhouException(); }\n<span class="kw">catch</span> (MissaoFalhouException) { Console.<span class="mt">WriteLine</span>(<span class="st">"Falha específica"</span>); }\n<span class="kw">catch</span> (MissaoException)       { Console.<span class="mt">WriteLine</span>(<span class="st">"Falha geral"</span>); }`,
      q: 'O que será exibido?',
      hint: 'Catch mais específico vem primeiro',
      opts: [
        { t: 'Falha geral', ok: false },
        { t: 'Falha específica', ok: true },
        { t: 'Ambas as mensagens', ok: false },
        { t: 'Erro — herança de exceção inválida', ok: false },
      ],
      exp: 'MissaoFalhouException herda de MissaoException. O catch mais específico (MissaoFalhouException) é testado primeiro e captura. "Falha específica".',
    },

  ]
};
