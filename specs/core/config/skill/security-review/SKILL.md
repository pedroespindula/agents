---
name: security-review
description: Revisar codigo focando em vulnerabilidades e seguranca
license: MIT
compatibility: opencode
metadata:
  audience: developers
  workflow: code-quality
---

## What I do

Revisar codigo focando em seguranca:

- Identificar vulnerabilidades
- Verificar autenticacao e autorizacao
- Analisar validacao de inputs
- Detectar injection attacks
- Avaliar tratamento de dados sensiveis

## When to use me

Use this skill when you need a security-focused review. This is especially helpful when:

- Reviewing authentication/authorization code
- Analyzing code that handles sensitive data
- Checking input validation
- Evaluating API security

**Note**: For general code review use `code-review`, for PR review use `pr-review`.

## How I work

I follow security review best practices:

1. **Defense in depth**: Multiplas camadas de protecao
2. **Least privilege**: Minimo acesso necessario
3. **Input validation**: Nunca confie em inputs
4. **Secure defaults**: Configuracoes seguras por padrao

## Security Checklist

### Autenticacao

- [ ] Senhas sao hasheadas (bcrypt, argon2)?
- [ ] Tokens sao gerados de forma segura?
- [ ] Sessoes tem timeout?
- [ ] Ha protecao contra brute force?

### Autorizacao

- [ ] Permissoes sao verificadas no backend?
- [ ] Nao ha IDOR?
- [ ] Principio do menor privilegio?

### Validacao de Input

- [ ] Todos os inputs sao validados?
- [ ] Validacao acontece no backend?
- [ ] Tipos e tamanhos sao verificados?

### Injection

- [ ] SQL usa prepared statements?
- [ ] NoSQL queries sao sanitizadas?
- [ ] Comandos do sistema sao evitados?
- [ ] XSS e prevenido?

### Dados Sensiveis

- [ ] Secrets nao estao hardcoded?
- [ ] Variaveis de ambiente sao usadas?
- [ ] Logs nao contem dados sensiveis?
- [ ] Respostas nao expoe dados desnecessarios?

### Criptografia

- [ ] Algoritmos modernos (AES-256, bcrypt)?
- [ ] Nao usa MD5/SHA1 para seguranca?
- [ ] Chaves tem tamanho adequado?

### Sessoes e Tokens

- [ ] JWT tem expiracao?
- [ ] Cookies tem flags corretas (httpOnly, secure)?
- [ ] CSRF protection implementada?

## Vulnerability Severity

| Severidade | Impacto                  | Exemplo               |
| ---------- | ------------------------ | --------------------- |
| Critica    | Comprometimento total    | RCE, SQL Injection    |
| Alta       | Acesso a dados sensiveis | IDOR, XSS armazenado  |
| Media      | Exposicao limitada       | XSS refletido, CSRF   |
| Baixa      | Impacto minimo           | Info disclosure menor |

## Common Vulnerabilities

### SQL Injection

```javascript
// INSEGURO
const query = `SELECT * FROM users WHERE email = '${email}'`;

// SEGURO
const query = 'SELECT * FROM users WHERE email = ?';
await db.query(query, [email]);
```

### XSS

```javascript
// INSEGURO
<div dangerouslySetInnerHTML={{ __html: userInput }} />;

// SEGURO
import DOMPurify from 'dompurify';
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userInput) }} />;
```

### Hardcoded Secrets

```javascript
// INSEGURO
const API_KEY = 'sk_live_abc123';

// SEGURO
const API_KEY = process.env.API_KEY;
```

## Restrictions

- **Reporte vulnerabilidades criticas imediatamente**
- **Nao exponha detalhes de vulnerabilidades** publicamente
- **Sugira correcoes especificas** para cada problema
- **Referencie OWASP** quando relevante
