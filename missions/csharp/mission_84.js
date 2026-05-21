// ══════════════════════════════════════════════════════
// ACT VI — O CONFRONTO FINAL
// MISSÃO 85 — PROTOCOLO DE SEGURANÇA
// Tema: SignalR, WebSockets, real-time communication
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_84 = {
  id: 84,
  title: "MISSÃO 85 — PROTOCOLO DE SEGURANÇA",
  icon: '📶',
  free: false,
  desc: "A sede precisa de atualizações em tempo real do campo. SignalR é o protocolo de comunicação bidirecional do .NET — Leon transmite dados ao vivo enquanto elimina os últimos soldados de Saddler.",
  objs: [
    "Entender SignalR Hubs e conexões cliente-servidor",
    "Usar grupos e broadcasting no SignalR",
    "Configurar SignalR em ASP.NET Core",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>SignalR</strong> abstrai WebSockets, Server-Sent Events e Long Polling — escolhe o melhor transporte disponível automaticamente. Usado para real-time: chat, dashboards, notificações.',
      q: 'Qual o tipo de comunicação que o SignalR habilita entre cliente e servidor?',
      hint: 'Bidirecional e em tempo real',
      opts: [
        { t: 'Apenas servidor → cliente (push)', ok: false },
        { t: 'Bidirecional: servidor pode chamar métodos do cliente e vice-versa', ok: true },
        { t: 'Apenas request/response como HTTP', ok: false },
        { t: 'Apenas para aplicações mobile', ok: false },
      ],
      exp: 'SignalR: Hub no servidor. Cliente chama métodos do Hub. Hub chama métodos do cliente via Clients.All.SendAsync("Metodo", dados). Verdadeiramente bidirecional.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<strong>Hub</strong> é a classe central do SignalR — ponto de comunicação. Clientes conectam ao Hub e chamam seus métodos. Hub pode chamar métodos de volta nos clientes.',
      q: 'Como criar um Hub SignalR?',
      hint: 'Herdar de Hub',
      opts: [
        { t: 'Implementar ISignalRHub', ok: false },
        { t: 'Herdar de Hub ou Hub<T> e adicionar métodos públicos', ok: true },
        { t: 'Decorar uma classe com [SignalRHub]', ok: false },
        { t: 'Registrar como middleware', ok: false },
      ],
      exp: 'class MissaoHub : Hub { public async Task Enviar(string msg) { await Clients.All.SendAsync("Receber", msg); } }',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<code>Clients.All</code>, <code>Clients.Caller</code>, <code>Clients.Others</code>, <code>Clients.Group("nome")</code> — diferentes targets de envio no SignalR.',
      q: 'Para enviar mensagem apenas para o cliente que chamou o método do Hub, qual target usar?',
      hint: 'O que chamou',
      opts: [
        { t: 'Clients.All', ok: false },
        { t: 'Clients.Caller', ok: true },
        { t: 'Clients.Others', ok: false },
        { t: 'Clients.Self', ok: false },
      ],
      exp: 'Clients.Caller: apenas o cliente que invocou. Clients.Others: todos exceto o caller. Clients.All: todos conectados. Clients.Group("g"): grupo específico.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'SignalR <strong>groups</strong> permitem broadcasting para subconjunto de clientes. <code>Groups.AddToGroupAsync</code> e <code>RemoveFromGroupAsync</code> gerenciam membros.',
      q: 'Qual cenário de uso típico para Groups no SignalR?',
      hint: 'Chat rooms, salas',
      opts: [
        { t: 'Limitar conexões simultâneas', ok: false },
        { t: 'Chat rooms, salas de jogos — enviar mensagem só para membros de um grupo', ok: true },
        { t: 'Autenticação de usuários', ok: false },
        { t: 'Groups substituem conexões individuais', ok: false },
      ],
      exp: 'Grupos: chat room "Missao1" — apenas membros recebem. await Groups.AddToGroupAsync(Context.ConnectionId, "Missao1"). Clients.Group("Missao1").SendAsync(...).',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Configurando SignalR no pipeline:',
      code: `builder.Services.<span class="mt">AddSignalR</span>();
<span class="kw">var</span> app = builder.<span class="mt">Build</span>();
app.<span class="mt">_______</span>&lt;MissaoHub&gt;(<span class="st">"/missaohub"</span>);
app.<span class="mt">Run</span>();`,
      q: 'Qual método registra um Hub no endpoint?',
      hint: 'Map Hub',
      ans: 'MapHub',
      exp: 'app.MapHub<T>(pattern): registra Hub no URL. Clientes conectam via WebSocket para "/missaohub". AddSignalR() registra serviços necessários.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Enviando mensagem para todos os clientes conectados:',
      code: `<span class="kw">public async</span> Task <span class="mt">Broadcast</span>(<span class="kw">string</span> mensagem)
{
    <span class="kw">await</span> Clients._______
        .<span class="mt">SendAsync</span>(<span class="st">"ReceberMensagem"</span>, mensagem);
}`,
      q: 'Qual target envia para TODOS os clientes conectados?',
      hint: 'All em inglês',
      ans: 'All',
      exp: 'Clients.All.SendAsync("método", dados): broadcast para todos. Clientes devem ter handler registrado para "ReceberMensagem".',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Adicionando cliente a um grupo:',
      code: `<span class="kw">public async</span> Task <span class="mt">JuntarGrupo</span>(<span class="kw">string</span> grupo)
{
    <span class="kw">await</span> Groups.<span class="mt">_______</span>(
        Context.ConnectionId, grupo);
}`,
      q: 'Qual método adiciona o cliente ao grupo?',
      hint: 'Add To Group Async',
      ans: 'AddToGroupAsync',
      exp: 'Groups.AddToGroupAsync(connectionId, groupName): adiciona ao grupo. Context.ConnectionId: ID único da conexão atual. Groups.RemoveFromGroupAsync para remover.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'Simulando chamada de Hub.',
      code: `<span class="kw">class</span> FakeClients
{
    <span class="kw">public</span> List&lt;<span class="kw">string</span>&gt; Messages = <span class="kw">new</span>();
    <span class="kw">public</span> Task <span class="mt">SendAsync</span>(<span class="kw">string</span> method, <span class="kw">string</span> msg)
    {
        Messages.<span class="mt">Add</span>(<span class="st">$"{method}:{msg}"</span>);
        <span class="kw">return</span> Task.<span class="mt">CompletedTask</span>;
    }
}
<span class="kw">var</span> clients = <span class="kw">new</span> FakeClients();
<span class="kw">await</span> clients.<span class="mt">SendAsync</span>(<span class="st">"Receber"</span>, <span class="st">"Alerta"</span>);
Console.<span class="mt">WriteLine</span>(clients.Messages[<span class="nm">0</span>]);`,
      q: 'O que será exibido?',
      hint: 'method:msg format',
      opts: [
        { t: 'Receber Alerta', ok: false },
        { t: 'Receber:Alerta', ok: true },
        { t: 'Alerta', ok: false },
        { t: 'Erro — await em Task.CompletedTask', ok: false },
      ],
      exp: 'SendAsync("Receber", "Alerta"): Messages.Add("Receber:Alerta"). Messages[0] = "Receber:Alerta".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'IHubContext para enviar de fora do Hub.',
      code: `<span class="cm">// IHubContext permite enviar sem estar em uma chamada de Hub</span>
<span class="kw">class</span> AlertaService
{
    <span class="kw">private readonly</span> List&lt;<span class="kw">string</span>&gt; _log = <span class="kw">new</span>();
    <span class="kw">public void</span> <span class="mt">Registrar</span>(<span class="kw">string</span> msg) => _log.<span class="mt">Add</span>(msg);
    <span class="kw">public int</span> Count => _log.<span class="mt">Count</span>;
}
<span class="kw">var</span> svc = <span class="kw">new</span> AlertaService();
svc.<span class="mt">Registrar</span>(<span class="st">"Missão iniciada"</span>);
svc.<span class="mt">Registrar</span>(<span class="st">"Inimigo detectado"</span>);
Console.<span class="mt">WriteLine</span>(svc.Count);`,
      q: 'O que será exibido?',
      hint: 'Dois registros',
      opts: [
        { t: '1', ok: false },
        { t: '2', ok: true },
        { t: '0', ok: false },
        { t: 'Erro', ok: false },
      ],
      exp: 'Dois Registrar() chamados. _log.Count = 2. "2".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'OnConnectedAsync e OnDisconnectedAsync.',
      code: `<span class="kw">var</span> connected = <span class="nm">0</span>;
<span class="kw">var</span> disconnected = <span class="nm">0</span>;

<span class="cm">// Simula ciclo de vida de conexão:</span>
<span class="kw">void</span> <span class="mt">Connect</span>() => connected++;
<span class="kw">void</span> <span class="mt">Disconnect</span>() => disconnected++;

<span class="mt">Connect</span>(); <span class="mt">Connect</span>(); <span class="mt">Disconnect</span>(); <span class="mt">Connect</span>();
Console.<span class="mt">WriteLine</span>(<span class="st">$"Online: {connected - disconnected}"</span>);`,
      q: 'O que será exibido?',
      hint: '3 connects, 1 disconnect',
      opts: [
        { t: 'Online: 2', ok: true },
        { t: 'Online: 3', ok: false },
        { t: 'Online: 1', ok: false },
        { t: 'Online: 4', ok: false },
      ],
      exp: '3 connects - 1 disconnect = 2 online. "Online: 2".',
    },

  ]
};
