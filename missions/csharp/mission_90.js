// ══════════════════════════════════════════════════════
// EPÍLOGO — O LEGADO
// MISSÃO 91 — HERANÇA DO CÓDIGO
// Tema: Clean Architecture — SOLID principles, DDD basics, CQRS
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_90 = {
  id: 90,
  title: "MISSÃO 91 — HERANÇA DO CÓDIGO",
  icon: '🏛️',
  free: false,
  desc: "O legado de Leon não são suas armas — é o código que escreve. Clean Architecture, SOLID, DDD e CQRS são os princípios que garantem que o próximo agente possa continuar a missão sem reescrever tudo do zero.",
  objs: [
    "Aplicar os princípios SOLID no design de classes C#",
    "Entender as camadas da Clean Architecture",
    "Conhecer os padrões CQRS e Repository",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>SRP</strong> (Single Responsibility Principle): uma classe deve ter apenas um motivo para mudar — uma única responsabilidade. Evita "God classes".',
      q: 'Qual violação do SRP é exemplificada por uma classe UserService que valida, salva no banco E envia email?',
      hint: 'Três responsabilidades em uma classe',
      opts: [
        { t: 'Não é violação — serviços podem ter múltiplas funções', ok: false },
        { t: 'Três responsabilidades distintas — mudança em email afeta classe que gerencia usuários', ok: true },
        { t: 'Apenas email é responsabilidade extra', ok: false },
        { t: 'SRP não se aplica a serviços', ok: false },
      ],
      exp: 'SRP violado: UserService deve apenas coordenar. Separar: UserValidator, UserRepository, EmailService. Cada um com único motivo para mudar.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<strong>DIP</strong> (Dependency Inversion Principle): módulos de alto nível não devem depender de baixo nível — ambos devem depender de abstrações (interfaces).',
      q: 'Qual implementação segue o DIP?',
      hint: 'Depender de interface, não de implementação concreta',
      opts: [
        { t: 'class OrderService { var db = new SqlDatabase(); }', ok: false },
        { t: 'class OrderService(IDatabase db) — depende da abstração IDatabase', ok: true },
        { t: 'class OrderService : SqlDatabase — herança de implementação', ok: false },
        { t: 'static class OrderService — sem dependências', ok: false },
      ],
      exp: 'DIP: depender de IDatabase (abstração), não de SqlDatabase (concreto). Permite trocar implementação sem modificar OrderService. DI + interfaces = DIP na prática.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<strong>CQRS</strong> (Command Query Responsibility Segregation): separar operações de leitura (Query) de escrita (Command). Modelos diferentes para cada operação.',
      q: 'Qual a vantagem principal do CQRS?',
      hint: 'Leitura e escrita têm requisitos diferentes',
      opts: [
        { t: 'Elimina necessidade de banco de dados', ok: false },
        { t: 'Otimizar leitura e escrita independentemente — Query pode usar read replica, Command pode usar model de domínio rico', ok: true },
        { t: 'CQRS é obrigatório com DDD', ok: false },
        { t: 'Reduz o número de classes', ok: false },
      ],
      exp: 'CQRS: Queries retornam DTOs simples (projeções), Commands usam domain model com regras. Permite escalar leitura e escrita independentemente.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<strong>Repository Pattern</strong>: abstrai o acesso a dados — camada de domínio não conhece banco, EF Core ou SQL. Apenas conhece IRepository.',
      q: 'Por que usar Repository Pattern com Entity Framework Core?',
      hint: 'Testabilidade e abstração',
      opts: [
        { t: 'EF Core não é eficiente sem Repository', ok: false },
        { t: 'Abstrair DbContext — testes usam fake repository sem banco; trocar ORM sem mudar domínio', ok: true },
        { t: 'Repository melhora performance de queries', ok: false },
        { t: 'Repository é obrigatório pelo EF Core', ok: false },
      ],
      exp: 'Repository: domínio depende de IMissaoRepository (abstração). Implementação usa EF Core. Testes: FakeMissaoRepository em memória. Troca ORM sem mudar domínio.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Interface de repository:',
      code: `<span class="kw">interface</span> IMissaoRepository
{
    Task&lt;Missao?&gt; <span class="mt">ObterPorId</span>(<span class="kw">int</span> id);
    Task&lt;IEnumerable&lt;Missao&gt;&gt; <span class="mt">ListarTodas</span>();
    Task <span class="mt">_______</span>(Missao missao);
    Task <span class="mt">Atualizar</span>(Missao missao);
    Task <span class="mt">Deletar</span>(<span class="kw">int</span> id);
}`,
      q: 'Qual método de escrita falta na interface CRUD (criação)?',
      hint: 'Adicionar uma entidade',
      ans: 'Adicionar',
      exp: 'CRUD: Create (Adicionar), Read (ObterPorId/ListarTodas), Update (Atualizar), Delete (Deletar). Nome em português por ser convenção do domínio.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Comando CQRS:',
      code: `<span class="kw">record</span> CriarMissaoCommand(<span class="kw">string</span> Nome, <span class="kw">int</span> XP);
<span class="kw">record</span> MissaoCreatedDto(<span class="kw">int</span> Id, <span class="kw">string</span> Nome);

<span class="kw">interface</span> ICommandHandler&lt;TCmd, TResult&gt;
{
    Task&lt;TResult&gt; <span class="mt">_______</span>(TCmd command);
}`,
      q: 'Qual nome semântico para o método que executa um command?',
      hint: 'Handle em inglês',
      ans: 'Handle',
      exp: 'Handle(command): método padrão de command handlers. MediatR usa IRequestHandler<TRequest, TResponse> com Handle. Padrão mediator para CQRS.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Clean Architecture — camadas:',
      code: `<span class="cm">// Camadas da Clean Architecture (de dentro para fora):</span>
<span class="cm">// 1. Domain (Entities, Value Objects, Domain Events)</span>
<span class="cm">// 2. Application (Use Cases, Commands, Queries)</span>
<span class="cm">// 3. Infrastructure (EF Core, APIs externas)</span>
<span class="cm">// 4. _______ (Controllers, Minimal API, UI)</span>`,
      q: 'Qual é a camada mais externa da Clean Architecture?',
      hint: 'Apresentação ao usuário',
      ans: 'Presentation',
      exp: 'Presentation (ou UI/Web): camada mais externa. Dependência sempre de fora para dentro. Domain: zero dependências externas. Regra de dependência: dependências apontam para o centro.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'ISP — Interface Segregation Principle.',
      code: `<span class="kw">interface</span> ILeitor { <span class="kw">string</span> <span class="mt">Ler</span>(); }
<span class="kw">interface</span> IEscritor { <span class="kw">void</span> <span class="mt">Escrever</span>(<span class="kw">string</span> s); }
<span class="kw">class</span> ArquivoSoLeitura : ILeitor
{
    <span class="kw">public string</span> <span class="mt">Ler</span>() => <span class="st">"conteúdo"</span>;
}
<span class="kw">var</span> a = <span class="kw">new</span> ArquivoSoLeitura();
Console.<span class="mt">WriteLine</span>(a.<span class="mt">Ler</span>());`,
      q: 'O que será exibido?',
      hint: 'ISP: interfaces segregadas por responsabilidade',
      opts: [
        { t: 'Erro — falta implementar IEscritor', ok: false },
        { t: 'conteúdo', ok: true },
        { t: 'null', ok: false },
        { t: 'ArquivoSoLeitura', ok: false },
      ],
      exp: 'ArquivoSoLeitura implementa apenas ILeitor (ISP: não forçar implementação desnecessária). Ler() = "conteúdo". "conteúdo".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Open/Closed Principle com strategy.',
      code: `<span class="kw">interface</span> IDesconto { <span class="kw">decimal</span> <span class="mt">Calcular</span>(<span class="kw">decimal</span> preco); }
<span class="kw">class</span> SemDesconto : IDesconto
    { <span class="kw">public decimal</span> <span class="mt">Calcular</span>(<span class="kw">decimal</span> p) => p; }
<span class="kw">class</span> Desconto10 : IDesconto
    { <span class="kw">public decimal</span> <span class="mt">Calcular</span>(<span class="kw">decimal</span> p) => p * <span class="nm">0.9m</span>; }

IDesconto d = <span class="kw">new</span> Desconto10();
Console.<span class="mt">WriteLine</span>(d.<span class="mt">Calcular</span>(<span class="nm">100m</span>));`,
      q: 'O que será exibido?',
      hint: '100 - 10% = 90',
      opts: [
        { t: '100', ok: false },
        { t: '90', ok: true },
        { t: '10', ok: false },
        { t: '0.9', ok: false },
      ],
      exp: 'Desconto10.Calcular(100m) = 100 * 0.9 = 90. OCP: novo desconto = nova classe, sem modificar existentes. "90".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Liskov Substitution Principle.',
      code: `<span class="kw">class</span> Forma { <span class="kw">public virtual double</span> <span class="mt">Area</span>() => <span class="nm">0</span>; }
<span class="kw">class</span> Circulo : Forma
{
    <span class="kw">double</span> _r;
    <span class="kw">public</span> <span class="mt">Circulo</span>(<span class="kw">double</span> r) => _r = r;
    <span class="kw">public override double</span> <span class="mt">Area</span>() => Math.PI * _r * _r;
}

Forma f = <span class="kw">new</span> Circulo(<span class="nm">5</span>);
Console.<span class="mt">WriteLine</span>(f.<span class="mt">Area</span>().<span class="mt">ToString</span>(<span class="st">"F2"</span>));`,
      q: 'O que será exibido? (π ≈ 3.14159)',
      hint: 'π * 5² ≈ 78.54',
      opts: [
        { t: '0.00', ok: false },
        { t: '78.54', ok: true },
        { t: '25.00', ok: false },
        { t: 'Erro — LSP violado', ok: false },
      ],
      exp: 'LSP: Circulo pode substituir Forma. f.Area() = Math.PI * 25 ≈ 78.54. "78.54". Polimorfismo correto.',
    },

  ]
};
