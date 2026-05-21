// ══════════════════════════════════════════════════════
// ACT V — A FUGA
// MISSÃO 79 — CIFRAS E CÓDIGOS
// Tema: Criptografia básica — hashing, HMAC, AES, RSA conceitos
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_78 = {
  id: 78,
  title: "MISSÃO 79 — CIFRAS E CÓDIGOS",
  icon: '🔐',
  free: false,
  desc: "Os arquivos de Saddler estão encriptados. Leon precisa decifrar os dados sem deixar rastros. Criptografia em .NET — hashing para verificação, AES para dados, RSA para troca de chaves.",
  objs: [
    "Usar SHA256 e outros algoritmos de hashing",
    "Entender criptografia simétrica (AES) e assimétrica (RSA) conceitualmente",
    "Aplicar PBKDF2 para hashing seguro de senhas",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>Hashing</strong> é unidirecional — não é possível reverter. <strong>Criptografia</strong> é bidirecional — pode criptografar e descriptografar com chave.',
      q: 'Para armazenar senhas de usuário, o que deve ser usado?',
      hint: 'Senhas não devem ser recuperáveis',
      opts: [
        { t: 'AES — criptografia simétrica', ok: false },
        { t: 'Hash seguro com salt (PBKDF2, bcrypt) — não reversível', ok: true },
        { t: 'RSA — criptografia assimétrica', ok: false },
        { t: 'Base64 — encoding', ok: false },
      ],
      exp: 'Senhas: nunca armazenar em texto plano ou reversível. Hash com salt: PBKDF2 (Rfc2898DeriveBytes), bcrypt, Argon2. Verificação: hash do input == hash armazenado.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<strong>SHA256</strong> gera hash de 256 bits (32 bytes). Determinístico — mesma entrada, mesmo hash. Não tem chave — para integridade, não confidencialidade.',
      q: 'Para que serve SHA256 em aplicações?',
      hint: 'Verificar integridade, não esconder dados',
      opts: [
        { t: 'Criptografar dados sensíveis', ok: false },
        { t: 'Verificar integridade de arquivos, criar fingerprints, checksums', ok: true },
        { t: 'Transmitir dados com segurança', ok: false },
        { t: 'Substituir TLS/HTTPS', ok: false },
      ],
      exp: 'SHA256: hash de arquivo antes e depois → se igual, não foi corrompido/alterado. Também para ETags, cache keys, deduplicação.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<strong>AES</strong> (Advanced Encryption Standard) é criptografia simétrica — mesma chave para criptografar e descriptografar. Rápida para grandes volumes de dados.',
      q: 'Qual o desafio principal da criptografia simétrica como AES?',
      hint: 'Como compartilhar a chave com segurança?',
      opts: [
        { t: 'AES é muito lento', ok: false },
        { t: 'A chave precisa ser compartilhada de forma segura — problema de distribuição de chaves', ok: true },
        { t: 'AES não é seguro contra ataques modernos', ok: false },
        { t: 'AES usa duas chaves', ok: false },
      ],
      exp: 'Simétrica: mesma chave nos dois lados. Como compartilhar a chave com segurança? Solução híbrida: RSA para trocar a chave AES, AES para os dados.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<strong>Salt</strong> é um valor aleatório adicionado antes do hash de senha. Evita ataques de rainbow table — mesmo a mesma senha gera hashes diferentes com salts diferentes.',
      q: 'Por que usar salt ao fazer hash de senhas?',
      hint: 'Rainbow tables e senhas iguais',
      opts: [
        { t: 'Para tornar o hash mais longo', ok: false },
        { t: 'Para que a mesma senha gere hashes diferentes — impede rainbow tables e identifica senhas iguais', ok: true },
        { t: 'Salt é apenas para performance', ok: false },
        { t: 'Salt substitui o hash', ok: false },
      ],
      exp: 'Sem salt: "123456" sempre gera mesmo hash → rainbow table. Com salt aleatório: "123456"+salt1 ≠ "123456"+salt2. Cada usuário tem salt único armazenado junto com o hash.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Calculando SHA256 de uma string:',
      code: `<span class="kw">using var</span> sha = SHA256.<span class="mt">_______</span>();
<span class="kw">byte</span>[] bytes = Encoding.UTF8.<span class="mt">GetBytes</span>(<span class="st">"dados"</span>);
<span class="kw">byte</span>[] hash = sha.<span class="mt">ComputeHash</span>(bytes);
<span class="kw">string</span> hex = Convert.<span class="mt">ToHexString</span>(hash);`,
      q: 'Qual método estático cria uma instância de SHA256?',
      hint: 'Criar em inglês',
      ans: 'Create',
      exp: 'SHA256.Create(): cria instância do algoritmo. .ComputeHash(bytes): retorna byte[] com 32 bytes de hash. Convert.ToHexString: converte para representação hex.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Hashing seguro de senha com PBKDF2:',
      code: `<span class="kw">using var</span> pbkdf2 = <span class="kw">new</span> Rfc2898DeriveBytes(
    senha, salt, <span class="nm">100_000</span>,
    HashAlgorithmName.<span class="mt">_______</span>);
<span class="kw">byte</span>[] hashSenha = pbkdf2.<span class="mt">GetBytes</span>(<span class="nm">32</span>);`,
      q: 'Qual algoritmo usar no PBKDF2 para senhas seguras modernas?',
      hint: 'SHA com 256 bits',
      ans: 'SHA256',
      exp: 'HashAlgorithmName.SHA256 com 100.000+ iterações é o mínimo atual. Iterações tornam brute-force caro. GetBytes(32): deriva 32 bytes de chave.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Convertendo bytes para Base64 para transmissão:',
      code: `<span class="kw">byte</span>[] dados = { <span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span> };
<span class="kw">string</span> b64 = Convert.<span class="mt">_______</span>(dados);
<span class="kw">byte</span>[] original = Convert.<span class="mt">FromBase64String</span>(b64);`,
      q: 'Qual método Convert transforma byte[] em string Base64?',
      hint: 'To Base 64 String',
      ans: 'ToBase64String',
      exp: 'Convert.ToBase64String(bytes): byte[] → string segura para JSON/HTTP. Convert.FromBase64String: reverso. Base64 não é criptografia — apenas encoding.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'Hash determinístico — mesma entrada, mesmo hash.',
      code: `<span class="kw">using var</span> sha = SHA256.<span class="mt">Create</span>();
<span class="kw">byte</span>[] h1 = sha.<span class="mt">ComputeHash</span>(Encoding.UTF8.<span class="mt">GetBytes</span>(<span class="st">"Leon"</span>));
<span class="kw">byte</span>[] h2 = sha.<span class="mt">ComputeHash</span>(Encoding.UTF8.<span class="mt">GetBytes</span>(<span class="st">"Leon"</span>));
Console.<span class="mt">WriteLine</span>(h1.<span class="mt">SequenceEqual</span>(h2));`,
      q: 'O que será exibido?',
      hint: 'SHA256 é determinístico',
      opts: [
        { t: 'False', ok: false },
        { t: 'True', ok: true },
        { t: 'Erro — SHA256 requer reset entre chamadas', ok: false },
        { t: 'Depende da versão do .NET', ok: false },
      ],
      exp: 'SHA256 é determinístico: mesma entrada → mesmo hash sempre. h1 == h2 byte a byte. SequenceEqual compara elementos. "True".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'HMAC — Hash com chave para autenticação de mensagem.',
      code: `<span class="kw">byte</span>[] chave = Encoding.UTF8.<span class="mt">GetBytes</span>(<span class="st">"chave-secreta"</span>);
<span class="kw">using var</span> hmac = <span class="kw">new</span> HMACSHA256(chave);
<span class="kw">byte</span>[] mac1 = hmac.<span class="mt">ComputeHash</span>(Encoding.UTF8.<span class="mt">GetBytes</span>(<span class="st">"msg"</span>));
<span class="kw">byte</span>[] mac2 = hmac.<span class="mt">ComputeHash</span>(Encoding.UTF8.<span class="mt">GetBytes</span>(<span class="st">"msg"</span>));
Console.<span class="mt">WriteLine</span>(mac1.<span class="mt">SequenceEqual</span>(mac2));`,
      q: 'O que será exibido?',
      hint: 'HMAC com mesma chave e mensagem',
      opts: [
        { t: 'False', ok: false },
        { t: 'True', ok: true },
        { t: 'Erro — HMAC precisa ser reiniciado', ok: false },
        { t: 'Não determinístico', ok: false },
      ],
      exp: 'HMACSHA256 com mesma chave + mesma mensagem = mesmo MAC. Determinístico. "True". HMAC verifica autenticidade — apenas quem tem a chave pode gerar o MAC correto.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Gerando bytes aleatórios criptograficamente seguros.',
      code: `<span class="kw">byte</span>[] salt = <span class="kw">new byte</span>[<span class="nm">16</span>];
RandomNumberGenerator.<span class="mt">Fill</span>(salt);
Console.<span class="mt">WriteLine</span>(salt.<span class="mt">Length</span>);
Console.<span class="mt">WriteLine</span>(salt[<span class="nm">0</span>] == salt[<span class="nm">1</span>]);`,
      q: 'O que é garantido sobre o resultado?',
      hint: 'Length é certo; igualdade é improvável mas possível',
      opts: [
        { t: 'Length=16 e False sempre', ok: false },
        { t: 'Length=16 garantido; comparação pode ser True ou False (aleatório)', ok: true },
        { t: 'Erro — RandomNumberGenerator estático', ok: false },
        { t: 'Length pode variar', ok: false },
      ],
      exp: 'RandomNumberGenerator.Fill(salt): preenche com bytes aleatórios criptograficamente seguros. salt.Length=16 garantido. salt[0]==salt[1]: possível mas improvável (1/256 chance). "16" e resultado aleatório.',
    },

  ]
};
