// ══════════════════════════════════════════════════════
// ACT IV — O BUNKER
// MISSÃO 62 — SISTEMA DE VIGILÂNCIA
// Tema: Eventos avançados — EventHandler<T>, pattern Observer
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_61 = {
  id: 61,
  title: "MISSÃO 62 — SISTEMA DE VIGILÂNCIA",
  icon: '👁️',
  free: false,
  desc: "O sistema de vigilância do bunker alerta múltiplos subsistemas quando detecta uma ameaça. O padrão Observer com eventos é a arquitetura por trás disso — um evento, múltiplos ouvintes.",
  objs: [
    "Usar EventHandler<TEventArgs> com args customizados",
    "Implementar o padrão Observer com eventos C#",
    "Entender como desinscrever eventos para evitar vazamento de memória",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'O padrão <strong>Observer</strong> define uma dependência um-para-muitos: quando um objeto muda de estado, todos os seus dependentes são notificados automaticamente.',
      q: 'Como os eventos C# implementam o padrão Observer?',
      hint: 'Um evento, muitos handlers',
      opts: [
        { t: 'Usando herança para notificar subclasses', ok: false },
        { t: 'Através de delegates multicast — múltiplos handlers se inscrevem com += e são chamados ao disparar o evento', ok: true },
        { t: 'Polling periódico do estado', ok: false },
        { t: 'Via Reflection em runtime', ok: false },
      ],
      exp: 'Evento = delegate multicast. Handlers se inscrevem com +=. Ao disparar o evento (Invoke), todos os handlers são chamados. Padrão Observer nativo do C#.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<code>EventHandler&lt;TEventArgs&gt;</code> é o delegate padrão para eventos em .NET. Assinatura: <code>void Handler(object? sender, TEventArgs e)</code>.',
      q: 'Por que usar EventHandler<T> em vez de um delegate customizado?',
      hint: 'Convenção do .NET',
      opts: [
        { t: 'EventHandler é mais rápido', ok: false },
        { t: 'Segue a convenção .NET — sender identifica a origem, e contém os dados do evento', ok: true },
        { t: 'EventHandler funciona apenas com eventos', ok: false },
        { t: 'EventHandler permite múltiplos retornos', ok: false },
      ],
      exp: 'Convenção: "sender" = quem disparou, "e" = dados do evento. Frameworks .NET esperam essa assinatura. Facilita integração e reconhecimento.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Não desinscrever eventos (<code>-=</code>) causa vazamento de memória: o publisher mantém referência para o subscriber, impedindo a coleta pelo GC.',
      q: 'Quando é CRÍTICO desinscrever um evento com -=?',
      hint: 'Ciclo de vida diferente',
      opts: [
        { t: 'Sempre — todo += precisa de um -=', ok: false },
        { t: 'Quando o subscriber tem ciclo de vida MAIS CURTO que o publisher', ok: true },
        { t: 'Apenas quando o evento tem muitos subscribers', ok: false },
        { t: 'Nunca — o GC coleta automaticamente', ok: false },
      ],
      exp: 'Publisher vive mais que subscriber: sem -=, publisher mantém referência viva ao subscriber "morto". GC não coleta. Memória vaza.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'O operador <code>?.</code> (null-conditional) ao disparar eventos garante segurança thread-safe: <code>Evento?.Invoke(this, e)</code>.',
      q: 'Por que usar "Evento?.Invoke(this, e)" em vez de "if (Evento != null) Evento(this, e)"?',
      hint: 'Race condition',
      opts: [
        { t: 'Não há diferença', ok: false },
        { t: '?.Invoke é thread-safe: evita race condition onde o último subscriber desinscrevia entre a checagem de null e a invocação', ok: true },
        { t: '?.Invoke é mais legível apenas', ok: false },
        { t: 'if (null) lança exceção', ok: false },
      ],
      exp: '"evento?.Invoke()" copia a referência do delegate antes de invocar. Evita NullReferenceException por race condition em ambiente multithreaded.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Criando EventArgs customizado para passar dados no evento:',
      code: `<span class="kw">public class</span> AmeacaEventArgs : <span class="kw">_______</span>\n{\n    <span class="kw">public string</span> TipoAmeaca { <span class="kw">get</span>; }\n    <span class="kw">public int</span> Nivel { <span class="kw">get</span>; }\n    <span class="kw">public</span> <span class="mt">AmeacaEventArgs</span>(<span class="kw">string</span> tipo, <span class="kw">int</span> niv)\n        { TipoAmeaca = tipo; Nivel = niv; }\n}`,
      q: 'De qual classe base os EventArgs customizados herdam?',
      hint: 'Argumentos de evento',
      ans: 'EventArgs',
      exp: '"EventArgs" é a classe base. Convenção: sufixo "EventArgs". Seus campos contêm os dados do evento. EventArgs.Empty para eventos sem dados.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Declarando um evento na classe publisher:',
      code: `<span class="kw">public class</span> Vigilancia\n{\n    <span class="kw">public event</span> EventHandler&lt;AmeacaEventArgs&gt; <span class="mt">_______</span>;\n    <span class="kw">protected virtual void</span> <span class="mt">OnAmeacaDetectada</span>(AmeacaEventArgs e)\n        => AmeacaDetectada?.<span class="mt">Invoke</span>(<span class="kw">this</span>, e);\n}`,
      q: 'Qual nome descritivo para o evento de ameaça detectada?',
      hint: 'Passado do verbo detectar',
      ans: 'AmeacaDetectada',
      exp: 'Convenção: nome do evento no passado (algo que aconteceu). "On" prefix para o método protetor de disparo. AmeacaDetectada é o evento.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Inscrevendo um handler no evento:',
      code: `<span class="kw">var</span> cam = <span class="kw">new</span> Vigilancia();\ncam.AmeacaDetectada <span class="kw">_______</span> (s, e) => Console.<span class="mt">WriteLine</span>(<span class="st">$"Alerta: {e.TipoAmeaca}"</span>);`,
      q: 'Qual operador inscreve um handler em um evento?',
      hint: 'Adição e atribuição',
      ans: '+=',
      exp: '"+=" inscreve o handler. "-=" desinscre. Múltiplos += adicionam múltiplos handlers (multicast). Ao disparar o evento, todos chamados em sequência.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'Evento simples em ação.',
      code: `<span class="kw">class</span> Alarme\n{\n    <span class="kw">public event</span> EventHandler Disparado;\n    <span class="kw">public void</span> <span class="mt">Acionar</span>() => Disparado?.<span class="mt">Invoke</span>(<span class="kw">this</span>, EventArgs.Empty);\n}\n\n<span class="kw">var</span> alarme = <span class="kw">new</span> Alarme();\nalarme.Disparado += (s, e) => Console.<span class="mt">WriteLine</span>(<span class="st">"🚨 ALARME!"</span>);\nalarme.Disparado += (s, e) => Console.<span class="mt">WriteLine</span>(<span class="st">"📱 SMS enviado"</span>);\nalarme.<span class="mt">Acionar</span>();`,
      q: 'Quantas linhas serão exibidas?',
      hint: 'Dois handlers inscritos',
      opts: [
        { t: '1', ok: false },
        { t: '2', ok: true },
        { t: '0', ok: false },
        { t: '3', ok: false },
      ],
      exp: 'Dois handlers inscritos com +=. Ao Acionar(), ambos são chamados em sequência. "🚨 ALARME!" e "📱 SMS enviado" — 2 linhas.',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'EventHandler<T> com dados customizados.',
      code: `<span class="kw">class</span> SensorArgs : EventArgs { <span class="kw">public int</span> Valor { <span class="kw">get</span>; <span class="kw">init</span>; } }\n<span class="kw">class</span> Sensor\n{\n    <span class="kw">public event</span> EventHandler&lt;SensorArgs&gt; Leitura;\n    <span class="kw">public void</span> <span class="mt">Medir</span>(<span class="kw">int</span> v) => Leitura?.<span class="mt">Invoke</span>(<span class="kw">this</span>, <span class="kw">new</span> SensorArgs { Valor = v });\n}\n\n<span class="kw">var</span> s = <span class="kw">new</span> Sensor();\ns.Leitura += (_, e) => Console.<span class="mt">WriteLine</span>(<span class="st">$"Sensor: {e.Valor}"</span>);\ns.<span class="mt">Medir</span>(<span class="nm">42</span>);`,
      q: 'O que será exibido?',
      hint: 'e.Valor = 42',
      opts: [
        { t: 'Sensor: 0', ok: false },
        { t: 'Sensor: 42', ok: true },
        { t: 'Leitura: 42', ok: false },
        { t: 'Erro — event com T customizado', ok: false },
      ],
      exp: 'Medir(42) cria SensorArgs { Valor=42 } e dispara o evento. Handler acessa e.Valor = 42. "Sensor: 42".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Desinscrevendo evento para evitar memory leak.',
      code: `<span class="kw">var</span> alarme = <span class="kw">new</span> Alarme();\n<span class="kw">int</span> contagem = <span class="nm">0</span>;\n<span class="kw">void</span> <span class="mt">Handler</span>(<span class="kw">object</span>? s, EventArgs e) => contagem++;\n\nalarme.Disparado += Handler;\nalarme.<span class="mt">Acionar</span>();\nalarme.Disparado -= Handler; <span class="cm">// desinscrevendo</span>\nalarme.<span class="mt">Acionar</span>();\nConsole.<span class="mt">WriteLine</span>(contagem);`,
      q: 'Qual o valor de contagem?',
      hint: 'Handler removido antes do segundo Acionar',
      opts: [
        { t: '0', ok: false },
        { t: '1', ok: true },
        { t: '2', ok: false },
        { t: 'Erro — -= inválido', ok: false },
      ],
      exp: 'Primeiro Acionar: Handler chamado → contagem=1. -= remove o handler. Segundo Acionar: sem handlers → contagem não muda. Total: 1.',
    },

  ]
};
