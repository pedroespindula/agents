# Como Fazer Revisão de Segurança

Este documento descreve o processo para revisão focada em segurança de código.

## Objetivo

Identificar vulnerabilidades, riscos de segurança e más práticas que possam comprometer a segurança da aplicação, dados ou usuários.

## Quando Fazer Revisão de Segurança

Priorize revisão de segurança quando o código:

- Lida com autenticação ou autorização
- Processa dados sensíveis (senhas, tokens, PII)
- Aceita input de usuários
- Faz queries a banco de dados
- Executa comandos do sistema
- Faz upload/download de arquivos
- Integra com APIs externas
- Lida com criptografia

## Checklist de Segurança

### 1. Autenticação e Autorização

#### 1.1 Autenticação

- [ ] Senhas são hasheadas com algoritmo seguro (bcrypt, argon2)?
- [ ] Não há senhas em plaintext?
- [ ] Tokens são gerados de forma segura (crypto.randomBytes)?
- [ ] Sessões têm timeout apropriado?
- [ ] Há proteção contra brute force?
- [ ] MFA está implementado quando apropriado?

**Exemplo de problema:**

```javascript
// ❌ INSEGURO
const password = req.body.password;
const user = await User.findOne({ password }); // Senha em plaintext

// ✅ SEGURO
const password = req.body.password;
const user = await User.findOne({ email });
const isValid = await bcrypt.compare(password, user.passwordHash);
```

#### 1.2 Autorização

- [ ] Permissões são verificadas no backend?
- [ ] Não há confiança apenas em checks do frontend?
- [ ] Princípio do menor privilégio é seguido?
- [ ] Não há IDOR (Insecure Direct Object Reference)?
- [ ] IDs de recursos são validados contra usuário atual?

**Exemplo de problema:**

```javascript
// ❌ INSEGURO - IDOR
app.get("/api/users/:id", (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user); // Qualquer um pode ver qualquer usuário
});

// ✅ SEGURO
app.get("/api/users/:id", authenticate, (req, res) => {
  if (req.params.id !== req.user.id && !req.user.isAdmin) {
    return res.status(403).json({ error: "Forbidden" });
  }
  const user = await User.findById(req.params.id);
  res.json(user);
});
```

### 2. Validação de Input

- [ ] Todos os inputs são validados?
- [ ] Validação acontece no backend?
- [ ] Tipos são verificados?
- [ ] Tamanhos/limites são enforçados?
- [ ] Caracteres especiais são tratados?
- [ ] Whitelist é preferida sobre blacklist?

**Exemplo de problema:**

```javascript
// ❌ INSEGURO
const age = req.body.age;
const user = new User({ age }); // Sem validação

// ✅ SEGURO
const age = parseInt(req.body.age, 10);
if (isNaN(age) || age < 0 || age > 150) {
  return res.status(400).json({ error: 'Invalid age' });
}
const user = new User({ age });
```

### 3. Injection Attacks

#### 3.1 SQL Injection

- [ ] Queries usam prepared statements/parameterized queries?
- [ ] Não há concatenação de strings em SQL?
- [ ] ORM é usado corretamente?

**Exemplo de problema:**

```javascript
// ❌ INSEGURO - SQL Injection
const email = req.body.email;
const query = `SELECT * FROM users WHERE email = '${email}'`;
const users = await db.query(query);

// ✅ SEGURO
const email = req.body.email;
const query = 'SELECT * FROM users WHERE email = ?';
const users = await db.query(query, [email]);
```

#### 3.2 NoSQL Injection

- [ ] Queries MongoDB são sanitizadas?
- [ ] Não há uso direto de objetos de input?

**Exemplo de problema:**

```javascript
// ❌ INSEGURO - NoSQL Injection
const user = await User.findOne({ email: req.body.email });
// Se req.body.email = { $gt: "" }, retorna qualquer usuário

// ✅ SEGURO
const email = String(req.body.email);
const user = await User.findOne({ email });
```

#### 3.3 Command Injection

- [ ] Comandos do sistema são evitados quando possível?
- [ ] Inputs são sanitizados antes de exec/spawn?
- [ ] Whitelist de comandos é usada?

**Exemplo de problema:**

```javascript
// ❌ INSEGURO - Command Injection
const filename = req.body.filename;
exec(`cat ${filename}`, callback); // Pode executar comandos arbitrários

// ✅ SEGURO
const filename = path.basename(req.body.filename); // Remove path traversal
const safePath = path.join(UPLOAD_DIR, filename);
fs.readFile(safePath, callback);
```

#### 3.4 XSS (Cross-Site Scripting)

- [ ] Output é escapado/sanitizado?
- [ ] Não há uso de dangerouslySetInnerHTML sem sanitização?
- [ ] Content-Security-Policy está configurado?
- [ ] Inputs HTML são sanitizados (DOMPurify)?

**Exemplo de problema:**

```javascript
// ❌ INSEGURO - XSS
<div dangerouslySetInnerHTML={{ __html: userComment }} />;

// ✅ SEGURO
import DOMPurify from 'dompurify';
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userComment) }} />;
```

### 4. Dados Sensíveis

#### 4.1 Armazenamento

- [ ] Secrets não estão hardcoded?
- [ ] Variáveis de ambiente são usadas?
- [ ] Dados sensíveis são criptografados em repouso?
- [ ] Logs não contêm dados sensíveis?

**Exemplo de problema:**

```javascript
// ❌ INSEGURO
const API_KEY = 'sk_live_abc123xyz'; // Hardcoded

// ✅ SEGURO
const API_KEY = process.env.API_KEY;
if (!API_KEY) {
  throw new Error('API_KEY not configured');
}
```

#### 4.2 Transmissão

- [ ] HTTPS é enforçado?
- [ ] Dados sensíveis não são enviados em URLs?
- [ ] Tokens não são expostos em logs/errors?

#### 4.3 Exposição

- [ ] Respostas de API não expõem dados desnecessários?
- [ ] Mensagens de erro não revelam detalhes internos?
- [ ] Stack traces não são expostos em produção?

**Exemplo de problema:**

```javascript
// ❌ INSEGURO
res.json(user); // Expõe passwordHash, tokens, etc.

// ✅ SEGURO
res.json({
  id: user.id,
  name: user.name,
  email: user.email,
  // Apenas campos necessários
});
```

### 5. Criptografia

- [ ] Algoritmos modernos são usados (AES-256, RSA-2048+)?
- [ ] Não há uso de MD5, SHA1 para segurança?
- [ ] IVs são gerados aleatoriamente?
- [ ] Chaves têm tamanho adequado?
- [ ] Bibliotecas estabelecidas são usadas (crypto, não custom)?

**Exemplo de problema:**

```javascript
// ❌ INSEGURO
const hash = crypto.createHash('md5').update(password).digest('hex');

// ✅ SEGURO
const hash = await bcrypt.hash(password, 12);
```

### 6. Sessões e Tokens

- [ ] Tokens JWT têm expiração?
- [ ] Secrets de JWT são fortes e seguros?
- [ ] Refresh tokens são implementados corretamente?
- [ ] Cookies têm flags apropriadas (httpOnly, secure, sameSite)?
- [ ] CSRF protection está implementada?

**Exemplo de problema:**

```javascript
// ❌ INSEGURO
res.cookie('token', token); // Acessível via JavaScript

// ✅ SEGURO
res.cookie('token', token, {
  httpOnly: true, // Não acessível via JS
  secure: true, // Apenas HTTPS
  sameSite: 'strict', // CSRF protection
  maxAge: 3600000, // 1 hora
});
```

### 7. Upload de Arquivos

- [ ] Tipos de arquivo são validados?
- [ ] Tamanho máximo é enforçado?
- [ ] Arquivos são escaneados para malware?
- [ ] Nomes de arquivo são sanitizados?
- [ ] Arquivos não são executáveis?
- [ ] Path traversal é prevenido?

**Exemplo de problema:**

```javascript
// ❌ INSEGURO
const filename = req.file.originalname;
fs.writeFileSync(`./uploads/${filename}`, req.file.buffer);

// ✅ SEGURO
const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
if (!allowedTypes.includes(req.file.mimetype)) {
  return res.status(400).json({ error: 'Invalid file type' });
}

const filename = `${crypto.randomUUID()}.${mime.extension(req.file.mimetype)}`;
const safePath = path.join(UPLOAD_DIR, filename);
fs.writeFileSync(safePath, req.file.buffer);
```

### 8. Rate Limiting e DoS

- [ ] Rate limiting está implementado?
- [ ] Há proteção contra brute force?
- [ ] Timeouts são configurados?
- [ ] Tamanho de payload é limitado?

**Exemplo:**

```javascript
// ✅ SEGURO
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // 100 requests por IP
});

app.use('/api/', limiter);
```

### 9. Dependências

- [ ] Dependências estão atualizadas?
- [ ] Não há vulnerabilidades conhecidas?
- [ ] Dependências são de fontes confiáveis?
- [ ] Número de dependências é minimizado?

```bash
# Verifique vulnerabilidades
npm audit
npm audit fix

# Ou use ferramentas especializadas
snyk test
```

### 10. Configuração

- [ ] Debug mode está desabilitado em produção?
- [ ] Variáveis de ambiente são validadas?
- [ ] Defaults são seguros?
- [ ] CORS está configurado corretamente?
- [ ] Headers de segurança estão configurados?

**Exemplo:**

```javascript
// ✅ SEGURO - Headers de segurança
const helmet = require('helmet');
app.use(helmet());

// CORS restritivo
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS.split(','),
    credentials: true,
  })
);
```

## Ferramentas de Análise

Execute ferramentas automatizadas:

```bash
# Vulnerabilidades de dependências
npm audit
snyk test

# Análise estática
eslint --plugin security
semgrep --config=auto

# Secrets scanning
trufflehog git file://. --only-verified
git-secrets --scan

# SAST
sonarqube
checkmarx
```

## Classificação de Vulnerabilidades

Use CVSS ou classificação similar:

| Severidade | Impacto                                 | Exemplo                      |
| ---------- | --------------------------------------- | ---------------------------- |
| Crítica    | Comprometimento completo do sistema     | RCE, SQL Injection           |
| Alta       | Acesso não autorizado a dados sensíveis | IDOR, XSS armazenado         |
| Média      | Exposição limitada de informações       | XSS refletido, CSRF          |
| Baixa      | Impacto mínimo                          | Information disclosure menor |

## Checklist Final

- [ ] Revisei autenticação e autorização
- [ ] Verifiquei validação de inputs
- [ ] Procurei por injection attacks
- [ ] Analisei tratamento de dados sensíveis
- [ ] Verifiquei uso de criptografia
- [ ] Revisei sessões e tokens
- [ ] Analisei upload de arquivos
- [ ] Verifiquei rate limiting
- [ ] Executei ferramentas automatizadas
- [ ] Classifiquei vulnerabilidades por severidade

## Quando Escalar

Escale para especialistas quando:

- Encontrar vulnerabilidades críticas
- Precisar de análise de penetration testing
- Houver dúvidas sobre implementação de segurança
- Necessitar de revisão de arquitetura de segurança

## Referências

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- [CWE Top 25](https://cwe.mitre.org/top25/)
- [NIST Guidelines](https://www.nist.gov/cybersecurity)
