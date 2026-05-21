const MISSION_40 = {
  id: 40,
  title: "MISSÃO 41 — A CRIPTA",
  icon: '⚰️',
  free: false,
  desc: "Na cripta, os cultistas respondem a sinais invisíveis — um sino toca e todos reagem. Eventos são o mecanismo do C# para que objetos se comuniquem sem se conhecerem diretamente.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Um <strong>evento</strong> é um mecanismo de notificação: um objeto (<em>publisher</em>) dispara um sinal, e outros objetos (<em>subscribers</em>) reagem sem que o publisher precise conhecê-los.',
      q: 'Qual o padrão de design que eventos implementam em C#?',
      hint: 'Publicador notifica assinantes',
      opts: [
        { t: 'Factory', ok: false },
        { t: 'Observer (Publisher/Subscriber)', ok: true },
        { t: 'Singleton', ok: false },
        { t: 'Strategy', ok: false },
      ],
      exp: 'Eventos implementam o padrão Observer. O publisher não sabe quem são os subscribers — apenas dispara o evento. Baixo acoplamento.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>EventHandler</code> é o delegate padrão do .NET para eventos: <code>void Handler(object sender, EventArgs e)</code>.',
      q: 'O que representa o parâmetro "sender" num EventHandler?',
      hint: 'Quem enviou o evento',
      opts: [
        { t: 'Os dados extras do evento', ok: false },
        { t: 'O objeto que disparou o evento (o publisher)', ok: true },
        { t: 'O objeto que recebe o evento', ok: false },
        { t: 'Sempre é null', ok: false },
      ],
      exp: '"sender" é o objeto que disparou o evento (this, geralmente). "e" contém dados extras do evento (EventArgs ou subclasse).',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'A palavra-chave <code>event</code> restringe o delegate: de fora da classe, só é possível += e -=. Não se pode invocar ou reatribuir.',
      q: 'Por que usar "event" em vez de um delegate público diretamente?',
      hint: 'Encapsulamento do mecanismo de notificação',
      opts: [
        { t: 'Eventos são mais rápidos que delegates', ok: false },
        { t: 'Previne que código externo invoque ou sobrescreva o delegate — apenas += e -= são permitidos', ok: true },
        { t: 'Eventos funcionam apenas com EventHandler', ok: false },
        { t: 'Não há diferença prática', ok: false },
      ],
      exp: '"event" encapsula: código externo só pode se inscrever/desinscrever. Sem "event", qualquer um poderia invocar ou zerar o delegate.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Antes de disparar um evento, é boa prática verificar se há assinantes — caso contrário, invocar um evento nulo lança NullReferenceException.',
      q: 'Qual o padrão mais seguro para disparar um evento chamado "Morreu"?',
      hint: 'Verificação antes de invocar',
      opts: [
        { t: 'Morreu(this, EventArgs.Empty)', ok: false },
        { t: 'Morreu?.Invoke(this, EventArgs.Empty)', ok: true },
        { t: 'if (Morreu) Morreu()', ok: false },
        { t: 'try { Morreu(); } catch { }', ok: false },
      ],
      exp: '"Morreu?.Invoke(this, EventArgs.Empty)" — o operador ?. verifica se há assinantes antes de invocar. Thread-safe e conciso.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Para declarar um evento usando EventHandler como tipo de delegate:',
      code: `<span class="kw">public</span> <span class="kw">_______</span> EventHandler Morreu;`,
      q: 'Qual palavra-chave declara um evento?',
      hint: 'Evento em inglês',
      ans: 'event',
      exp: '"public event EventHandler Morreu" declara um evento. A palavra "event" restringe acesso: externos só podem += e -=.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Para subscrever (assinar) um evento, usamos +=.',
      code: `inimigo.Morreu <span class="kw">_______</span> OnInimigoMorreu;`,
      q: 'Qual operador inscreve um método num evento?',
      hint: 'Adicionar e atribuir',
      ans: '+=',
      exp: '"+=" inscreve o handler. "-=" cancela a inscrição. Múltiplos handlers podem ser inscritos — todos executam quando o evento dispara.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Para criar dados customizados para um evento, herde de EventArgs.',
      code: `<span class="kw">public class</span> DanoEventArgs : <span class="kw">_______</span>\n{\n    <span class="kw">public int</span> Dano { <span class="kw">get</span>; }\n    <span class="kw">public</span> DanoEventArgs(<span class="kw">int</span> dano) => Dano = dano;\n}`,
      q: 'De qual classe base os argumentos de evento devem herdar?',
      hint: 'Argumentos de evento padrão do .NET',
      ans: 'EventArgs',
      exp: '"EventArgs" é a classe base para dados de eventos. "EventHandler<DanoEventArgs>" usa seus dados customizados como parâmetro "e".',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Para disparar o evento com segurança usando o operador null-conditional:',
      code: `Morreu<span class="kw">?.</span><span class="mt">_______</span>(<span class="kw">this</span>, EventArgs.Empty);`,
      q: 'Qual método invoca o delegate de um evento?',
      hint: 'Invocar em inglês',
      ans: 'Invoke',
      exp: '"?.Invoke(sender, args)" — verifica se há assinantes (null-check) e chama todos os handlers inscritos.',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Evento simples — publisher dispara, subscriber reage.',
      code: `<span class="kw">public class</span> Inimigo\n{\n    <span class="kw">public event</span> EventHandler Morreu;\n    <span class="kw">public void</span> <span class="mt">ReceberDano</span>(<span class="kw">int</span> d, <span class="kw">int</span> hp)\n    {\n        <span class="kw">if</span> (hp - d <= <span class="nm">0</span>) Morreu?.<span class="mt">Invoke</span>(<span class="kw">this</span>, EventArgs.Empty);\n    }\n}\n<span class="kw">var</span> e = <span class="kw">new</span> Inimigo();\ne.Morreu += (s, _) => Console.<span class="mt">WriteLine</span>(<span class="st">"Inimigo eliminado!"</span>);\ne.<span class="mt">ReceberDano</span>(<span class="nm">100</span>, <span class="nm">50</span>);`,
      q: 'O que será exibido?',
      hint: '50 - 100 = -50 → dispara o evento',
      opts: [
        { t: 'Nada — evento não disparado', ok: false },
        { t: 'Inimigo eliminado!', ok: true },
        { t: 'Erro — NullReferenceException', ok: false },
        { t: 'Inimigo eliminado! Inimigo eliminado!', ok: false },
      ],
      exp: 'hp-d = 50-100 = -50 <= 0 → dispara Morreu. O handler imprime "Inimigo eliminado!". ?. garante que não lança exceção.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Múltiplos subscribers no mesmo evento.',
      code: `<span class="kw">public class</span> Alarme\n{\n    <span class="kw">public event</span> EventHandler Disparou;\n    <span class="kw">public void</span> <span class="mt">Ativar</span>() => Disparou?.<span class="mt">Invoke</span>(<span class="kw">this</span>, EventArgs.Empty);\n}\n<span class="kw">var</span> a = <span class="kw">new</span> Alarme();\na.Disparou += (s,_) => Console.<span class="mt">WriteLine</span>(<span class="st">"Leon acordou!"</span>);\na.Disparou += (s,_) => Console.<span class="mt">WriteLine</span>(<span class="st">"Cultistas alertados!"</span>);\na.<span class="mt">Ativar</span>();`,
      q: 'Quantas linhas serão exibidas?',
      hint: 'Dois subscribers inscritos',
      opts: [
        { t: '0', ok: false },
        { t: '1 — apenas o último', ok: false },
        { t: '2 — ambos executam', ok: true },
        { t: 'Erro — dois += no mesmo evento', ok: false },
      ],
      exp: 'Multicast: dois handlers inscritos com +=. Ativar() dispara o evento — ambos executam em ordem. 2 linhas exibidas.',
    },

    // Q11 — Code
    {
      type: 'code',
      bubble: 'EventArgs customizado — passando dados no evento.',
      code: `<span class="kw">public class</span> DanoArgs : EventArgs { <span class="kw">public int</span> Dano; }\n<span class="kw">public class</span> Lutador\n{\n    <span class="kw">public event</span> EventHandler&lt;DanoArgs&gt; DanoRecebido;\n    <span class="kw">public void</span> <span class="mt">Atacar</span>(<span class="kw">int</span> d)\n        => DanoRecebido?.<span class="mt">Invoke</span>(<span class="kw">this</span>, <span class="kw">new</span> DanoArgs { Dano = d });\n}\n<span class="kw">var</span> l = <span class="kw">new</span> Lutador();\nl.DanoRecebido += (s, e) => Console.<span class="mt">WriteLine</span>(<span class="st">$"Dano: {e.Dano}"</span>);\nl.<span class="mt">Atacar</span>(<span class="nm">75</span>);`,
      q: 'O que será exibido?',
      hint: 'O handler recebe e.Dano = 75',
      opts: [
        { t: 'Dano: 0', ok: false },
        { t: 'Dano: 75', ok: true },
        { t: 'Erro — EventArgs customizado', ok: false },
        { t: 'Dano: DanoArgs', ok: false },
      ],
      exp: 'EventHandler<DanoArgs> passa dados customizados. Atacar(75) cria DanoArgs{Dano=75}. Handler acessa e.Dano = 75.',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'Cancelando inscrição com -= para evitar memory leaks.',
      code: `<span class="kw">public class</span> Sensor\n{\n    <span class="kw">public event</span> EventHandler Ativado;\n    <span class="kw">public void</span> <span class="mt">Ligar</span>() => Ativado?.<span class="mt">Invoke</span>(<span class="kw">this</span>, EventArgs.Empty);\n}\n<span class="kw">var</span> s = <span class="kw">new</span> Sensor();\nEventHandler h = (_, _) => Console.<span class="mt">WriteLine</span>(<span class="st">"Detectado!"</span>);\ns.Ativado += h;\ns.<span class="mt">Ligar</span>();\ns.Ativado -= h;\ns.<span class="mt">Ligar</span>();`,
      q: 'Quantas vezes "Detectado!" será exibido?',
      hint: 'Após -=, o handler não está mais inscrito',
      opts: [
        { t: '0', ok: false },
        { t: '1', ok: true },
        { t: '2', ok: false },
        { t: 'Erro — -= inválido', ok: false },
      ],
      exp: 'Primeiro Ligar(): handler inscrito → exibe "Detectado!". Depois -=: cancela. Segundo Ligar(): sem subscribers → nada exibido. Total: 1.',
    },

  ]
};
