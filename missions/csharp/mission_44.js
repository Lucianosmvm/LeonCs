const MISSION_44 = {
  id: 44,
  title: "MISSÃO 45 — O TRONO PROIBIDO",
  icon: '🚫',
  free: false,
  desc: "O trono proibido só pode ser alcançado por quem domina todos os segredos do castelo. Uma revisão brutal dos temas 36 a 44 — exceções, eventos, async, extensions e patterns.",
  objs: [],
  steps: [

    // Q1 — MC (Exceções)
    {
      type: 'mc',
      bubble: 'Revisão de Exceções — o bloco <code>finally</code> sempre executa, independente de exceção.',
      q: 'Em try/catch/finally, quando o finally NÃO executa?',
      hint: 'Há um caso extremo',
      opts: [
        { t: 'Quando há uma exceção no catch', ok: false },
        { t: 'Nunca — finally sempre executa, exceto se o processo for morto (Environment.FailFast)', ok: true },
        { t: 'Quando o return está no try', ok: false },
        { t: 'Quando não há exceção', ok: false },
      ],
      exp: 'finally sempre executa — mesmo com return, throw ou exceção. A única exceção é processos finalizados abruptamente (crash, FailFast).',
    },

    // Q2 — MC (StringBuilder)
    {
      type: 'mc',
      bubble: 'Revisão de Strings — concatenar strings em loop com "+" cria N objetos na memória.',
      q: 'Qual a solução eficiente para construir uma string em loop?',
      hint: 'Builder pattern para strings',
      opts: [
        { t: 'string.Concat()', ok: false },
        { t: 'StringBuilder — mutável, evita alocações intermediárias', ok: true },
        { t: 'string.Format()', ok: false },
        { t: 'Interpolação com $"{}"', ok: false },
      ],
      exp: '"StringBuilder" é mutável — Append() não cria nova string. Para N concatenações em loop, é O(N) em vez de O(N²).',
    },

    // Q3 — MC (Enums)
    {
      type: 'mc',
      bubble: 'Revisão de Enums — "[Flags]" permite combinar valores de enum com o operador bitwise OR.',
      q: 'Para um enum de permissões que pode combinar valores (Ler | Escrever | Executar), qual atributo usar?',
      hint: 'Bandeiras de bits',
      opts: [
        { t: '[Combinable]', ok: false },
        { t: '[Flags]', ok: true },
        { t: '[BitEnum]', ok: false },
        { t: '[MultiValue]', ok: false },
      ],
      exp: '"[Flags]" permite combinar valores com "|": "Ler | Escrever". Os valores devem ser potências de 2: 1, 2, 4, 8...',
    },

    // Q4 — MC (Async)
    {
      type: 'mc',
      bubble: 'Revisão de Async — "async void" é perigoso fora de event handlers.',
      q: 'Por que evitar "async void" fora de event handlers?',
      hint: 'Exceções e await',
      opts: [
        { t: 'async void é mais lento', ok: false },
        { t: 'Exceções em async void não podem ser capturadas pelo caller, e não pode ser await-ado', ok: true },
        { t: 'async void não compila', ok: false },
        { t: 'async void bloqueia a thread', ok: false },
      ],
      exp: '"async void": não é possível await-ar, e exceções lançadas não chegam ao caller — crasham o app. Use "async Task" sempre que possível.',
    },

    // Q5 — MC (Events)
    {
      type: 'mc',
      bubble: 'Revisão de Eventos — memory leak clássico: objeto A inscreve em evento de B, mas A nunca é desregistrado.',
      q: 'Por que eventos podem causar memory leaks?',
      hint: 'O publisher mantém referência ao subscriber',
      opts: [
        { t: 'Eventos alocam muita memória por evento', ok: false },
        { t: 'O publisher mantém referência ao subscriber via delegate — impedindo GC mesmo que o subscriber seja "descartado"', ok: true },
        { t: 'Eventos não são coletados pelo GC', ok: false },
        { t: 'Não causam memory leak — GC cuida automaticamente', ok: false },
      ],
      exp: 'O delegate guarda referência ao subscriber. Se não há -=, o GC não coleta o subscriber mesmo sem outras referências. Sempre faça -= ao descartar.',
    },

    // Q6 — MC (Pattern Matching)
    {
      type: 'mc',
      bubble: 'Revisão de Pattern Matching — "switch expression" exige exaustividade.',
      q: 'O que acontece se um switch expression não cobrir todos os casos possíveis?',
      hint: 'O compilador é rigoroso',
      opts: [
        { t: 'Retorna null automaticamente', ok: false },
        { t: 'Warning em tempo de compilação', ok: false },
        { t: 'Erro ou warning — e em runtime lança SwitchExpressionException se nenhum arm corresponder', ok: true },
        { t: 'Executa o último arm como padrão', ok: false },
      ],
      exp: 'Sem "_ =>" cobrindo o default, o compilador avisa. Em runtime, se nenhum arm corresponder, lança SwitchExpressionException.',
    },

    // Q7 — Fill (Exceções customizadas)
    {
      type: 'fill',
      bubble: 'Para criar uma exceção customizada, herde de Exception:',
      code: `<span class="kw">public class</span> MissaoFalhouException : <span class="kw">_______</span>\n{\n    <span class="kw">public</span> MissaoFalhouException(<span class="kw">string</span> msg) : <span class="kw">base</span>(msg) { }\n}`,
      q: 'De qual classe base as exceções customizadas devem herdar?',
      hint: 'Classe base de todas as exceções',
      ans: 'Exception',
      exp: '"Exception" é a classe base. Herdar dela cria uma exceção customizada. "base(msg)" passa a mensagem para Exception.Message.',
    },

    // Q8 — Fill (Records)
    {
      type: 'fill',
      bubble: 'Records são tipos imutáveis por padrão — com igualdade por valor e ToString automático:',
      code: `<span class="kw">public _______</span> Inimigo(<span class="kw">string</span> Nome, <span class="kw">int</span> HP);`,
      q: 'Qual palavra-chave declara um record em C#?',
      hint: 'Registro em inglês',
      ans: 'record',
      exp: '"record" cria tipo imutável com igualdade por valor, ToString, Deconstruct e With gerados automaticamente.',
    },

    // Q9 — Fill (Extension Methods)
    {
      type: 'fill',
      bubble: 'Extension method que verifica se HP está em estado crítico:',
      code: `<span class="kw">public static bool</span> <span class="mt">EhCritico</span>(<span class="kw">this int</span> hp)\n    => hp > <span class="nm">0</span> && hp < <span class="kw">_______</span>;`,
      q: 'Qual valor delimita HP crítico (abaixo de 20)?',
      hint: 'Limite crítico',
      ans: '20',
      exp: '"hp > 0 && hp < 20" verifica estado crítico — vivo mas com menos de 20 HP. "this int hp" estende o tipo int.',
    },

    // Q10 — Fill (Async)
    {
      type: 'fill',
      bubble: 'Para criar um método async que retorna bool:',
      code: `<span class="kw">public async</span> <span class="kw">_______</span>&lt;<span class="kw">bool</span>&gt; <span class="mt">VerificarConexaoAsync</span>()\n{\n    <span class="kw">await</span> Task.<span class="mt">Delay</span>(<span class="nm">100</span>);\n    <span class="kw">return</span> <span class="kw">true</span>;\n}`,
      q: 'Qual tipo envolve o bool de retorno de um método async?',
      hint: 'Tarefa genérica',
      ans: 'Task',
      exp: '"async Task<bool>" — Task<T> é o tipo de retorno para métodos async que retornam valor. await desempacota para bool.',
    },

    // Q11 — Fill (Tuplas)
    {
      type: 'fill',
      bubble: 'Para desestruturar uma tupla retornada por um método:',
      code: `<span class="kw">var</span> (<span class="kw">_______</span>, hp) = <span class="mt">ObterPersonagem</span>();\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"HP: {hp}"</span>);`,
      q: 'Qual nome usar para a primeira parte da tupla (nome do personagem)?',
      hint: 'Identificador para o nome',
      ans: 'nome',
      exp: '"var (nome, hp) = ObterPersonagem()" desestrutura a tupla. "nome" e "hp" recebem os valores das posições 1 e 2.',
    },

    // Q12 — Code (Exceções)
    {
      type: 'code',
      bubble: 'try/catch/finally em ação.',
      code: `<span class="kw">static int</span> <span class="mt">Dividir</span>(<span class="kw">int</span> a, <span class="kw">int</span> b)\n{\n    <span class="kw">try</span>   { <span class="kw">return</span> a / b; }\n    <span class="kw">catch</span> (DivideByZeroException)\n           { Console.<span class="mt">WriteLine</span>(<span class="st">"Div/0!"</span>); <span class="kw">return</span> -<span class="nm">1</span>; }\n    <span class="kw">finally</span> { Console.<span class="mt">WriteLine</span>(<span class="st">"Fim."</span>); }\n}\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Dividir</span>(<span class="nm">10</span>, <span class="nm">0</span>));`,
      q: 'O que será exibido?',
      hint: 'Catch executa, finally executa, depois o return do catch',
      opts: [
        { t: 'Div/0! e Fim. e -1', ok: true },
        { t: 'Apenas Div/0!', ok: false },
        { t: 'Fim. e -1', ok: false },
        { t: 'Div/0! e -1', ok: false },
      ],
      exp: 'b=0 → DivideByZeroException → catch: imprime "Div/0!". finally: sempre imprime "Fim.". catch retorna -1. Saída: "Div/0!" → "Fim." → "-1".',
    },

    // Q13 — Code (StringBuilder)
    {
      type: 'code',
      bubble: 'StringBuilder construindo relatório.',
      code: `<span class="kw">var</span> sb = <span class="kw">new</span> System.Text.StringBuilder();\n<span class="kw">var</span> kills = <span class="kw">new</span>[] { <span class="st">"Ganado"</span>, <span class="st">"Cultista"</span>, <span class="st">"Ganado"</span> };\n<span class="kw">foreach</span> (<span class="kw">var</span> k <span class="kw">in</span> kills)\n    sb.<span class="mt">Append</span>(k[<span class="nm">0</span>]); <span class="cm">// primeiro char</span>\nConsole.<span class="mt">WriteLine</span>(sb.<span class="mt">ToString</span>());`,
      q: 'O que será exibido?',
      hint: 'Pega o primeiro char de cada nome',
      opts: [
        { t: 'GCG', ok: true },
        { t: 'Ganado Cultista Ganado', ok: false },
        { t: 'GGC', ok: false },
        { t: 'G C G', ok: false },
      ],
      exp: '"Ganado"[0]="G", "Cultista"[0]="C", "Ganado"[0]="G". StringBuilder acumula. ToString() = "GCG".',
    },

    // Q14 — Code (Enum Flags)
    {
      type: 'code',
      bubble: 'Enum com [Flags] para permissões.',
      code: `[Flags]\n<span class="kw">enum</span> Acesso { Nenhum=<span class="nm">0</span>, Ler=<span class="nm">1</span>, Escrever=<span class="nm">2</span>, Executar=<span class="nm">4</span> }\n\n<span class="kw">var</span> permissao = Acesso.Ler | Acesso.Executar;\nConsole.<span class="mt">WriteLine</span>(permissao);\nConsole.<span class="mt">WriteLine</span>(permissao.<span class="mt">HasFlag</span>(Acesso.Escrever));`,
      q: 'O que será exibido?',
      hint: 'Ler(1) | Executar(4) = 5; HasFlag(Escrever=2)?',
      opts: [
        { t: 'Ler, Executar e True', ok: false },
        { t: 'Ler, Executar e False', ok: true },
        { t: '5 e True', ok: false },
        { t: '5 e False', ok: false },
      ],
      exp: '[Flags] faz ToString() retornar "Ler, Executar". HasFlag(Escrever): 5 & 2 = 0 → False. Sem permissão de escrita.',
    },

    // Q15 — Code (Event + Pattern)
    {
      type: 'code',
      bubble: 'Evento com pattern matching no handler.',
      code: `<span class="kw">public class</span> Sensor\n{\n    <span class="kw">public event</span> EventHandler&lt;<span class="kw">int</span>&gt; Detectou;\n    <span class="kw">public void</span> <span class="mt">Scan</span>(<span class="kw">int</span> dist) => Detectou?.<span class="mt">Invoke</span>(<span class="kw">this</span>, dist);\n}\n<span class="kw">var</span> s = <span class="kw">new</span> Sensor();\ns.Detectou += (_, dist) => Console.<span class="mt">WriteLine</span>(\n    dist <span class="kw">switch</span> { < <span class="nm">5</span> => <span class="st">"🔴 Perigoso"</span>, < <span class="nm">15</span> => <span class="st">"🟡 Alerta"</span>, _ => <span class="st">"🟢 Seguro"</span> });\ns.<span class="mt">Scan</span>(<span class="nm">8</span>);`,
      q: 'O que será exibido?',
      hint: 'dist=8: < 5? Não. < 15? Sim',
      opts: [
        { t: '🔴 Perigoso', ok: false },
        { t: '🟡 Alerta', ok: true },
        { t: '🟢 Seguro', ok: false },
        { t: 'Nada — evento não disparado', ok: false },
      ],
      exp: 'Scan(8) dispara evento com dist=8. Switch: 8 < 5 = false. 8 < 15 = true → "🟡 Alerta".',
    },

    // Q16 — Code (Extension + LINQ)
    {
      type: 'code',
      bubble: 'Extension method combinado com LINQ.',
      code: `<span class="kw">public static class</span> Ext\n{\n    <span class="kw">public static</span> IEnumerable&lt;<span class="kw">int</span>&gt; <span class="mt">SomentePares</span>(<span class="kw">this</span> IEnumerable&lt;<span class="kw">int</span>&gt; src)\n        => src.<span class="mt">Where</span>(n => n % <span class="nm">2</span> == <span class="nm">0</span>);\n}\n\n<span class="kw">var</span> nums = <span class="kw">new</span>[] { <span class="nm">1</span>,<span class="nm">2</span>,<span class="nm">3</span>,<span class="nm">4</span>,<span class="nm">5</span>,<span class="nm">6</span> };\nConsole.<span class="mt">WriteLine</span>(nums.<span class="mt">SomentePares</span>().<span class="mt">Sum</span>());`,
      q: 'O que será exibido?',
      hint: 'Pares: 2, 4, 6',
      opts: [
        { t: '21', ok: false },
        { t: '12', ok: true },
        { t: '6', ok: false },
        { t: '3', ok: false },
      ],
      exp: 'SomentePares(): {2, 4, 6}. Sum() = 2+4+6 = 12.',
    },

    // Q17 — Code (Record + Tupla)
    {
      type: 'code',
      bubble: 'Record com desestruturação e with-expression.',
      code: `<span class="kw">public record</span> Missao(<span class="kw">string</span> Nome, <span class="kw">int</span> XP);\n\n<span class="kw">var</span> m1 = <span class="kw">new</span> Missao(<span class="st">"Infiltração"</span>, <span class="nm">100</span>);\n<span class="kw">var</span> m2 = m1 <span class="kw">with</span> { XP = <span class="nm">200</span> };\n<span class="kw">var</span> (nome, xp) = m2;\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"{nome}: {xp}xp"</span>);`,
      q: 'O que será exibido?',
      hint: 'with{} cria cópia modificada; deconstruct extrai valores',
      opts: [
        { t: 'Infiltração: 100xp', ok: false },
        { t: 'Infiltração: 200xp', ok: true },
        { t: 'null: 200xp', ok: false },
        { t: 'Erro — records são imutáveis', ok: false },
      ],
      exp: '"with { XP = 200 }" cria nova cópia de m1 com XP=200, nome permanece "Infiltração". Deconstruct: nome="Infiltração", xp=200.',
    },

    // Q18 — Code (DESAFIO FINAL)
    {
      type: 'code',
      bubble: '🏆 DESAFIO CHEFE — Sistema completo integrando exceções, async, pattern e events.',
      code: `<span class="kw">public class</span> Missao\n{\n    <span class="kw">public event</span> EventHandler&lt;<span class="kw">string</span>&gt; Concluida;\n\n    <span class="kw">public async</span> Task <span class="mt">ExecutarAsync</span>(<span class="kw">int</span> hp)\n    {\n        <span class="kw">await</span> Task.<span class="mt">Delay</span>(<span class="nm">0</span>);\n        <span class="kw">string</span> resultado = hp <span class="kw">switch</span>\n        {\n            <= <span class="nm">0</span>  => <span class="kw">throw new</span> Exception(<span class="st">"Morto!"</span>),\n            < <span class="nm">30</span>  => <span class="st">"Sobreviveu por pouco"</span>,\n            <span class="kw">_</span>     => <span class="st">"Missão concluída!"</span>\n        };\n        Concluida?.<span class="mt">Invoke</span>(<span class="kw">this</span>, resultado);\n    }\n}\n<span class="kw">var</span> m = <span class="kw">new</span> Missao();\nm.Concluida += (_, r) => Console.<span class="mt">WriteLine</span>(r);\n<span class="kw">await</span> m.<span class="mt">ExecutarAsync</span>(<span class="nm">25</span>);`,
      q: 'O que será exibido para hp = 25?',
      hint: '25 > 0 e < 30',
      opts: [
        { t: 'Missão concluída!', ok: false },
        { t: 'Sobreviveu por pouco', ok: true },
        { t: 'Exceção: Morto!', ok: false },
        { t: 'Nada — evento não disparado', ok: false },
      ],
      exp: 'hp=25: <=0? não. <30? sim → resultado="Sobreviveu por pouco". Concluida?.Invoke dispara o evento. Handler imprime o resultado.',
    },

  ]
};
