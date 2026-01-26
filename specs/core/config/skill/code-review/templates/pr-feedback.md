# Template de Feedback de Pull Request

Use este template para fornecer feedback completo e estruturado em Pull Requests.

---

# Revisão: [Título do PR]

## 📋 Resumo

**Status:** [Aprovado / Aprovado com Sugestões / Mudanças Necessárias / Rejeitado]

**Resumo Executivo:**

[Breve resumo da revisão em 2-3 frases: o que o PR faz, qualidade geral, principais preocupações]

**Complexidade:** [Baixa / Média / Alta]
**Risco:** [Baixo / Médio / Alto]

---

## ✅ Pontos Positivos

[Liste aspectos bem feitos do PR - sempre reconheça o bom trabalho]

- [Aspecto positivo 1]
- [Aspecto positivo 2]
- [Aspecto positivo 3]

---

## 🔴 Problemas Críticos

[Problemas que **devem** ser corrigidos antes do merge]

### [Título do Problema 1]

**Localização:** `[arquivo]:[linha]`

**Descrição:**

[Descrição detalhada]

**Impacto:**

[Por que é crítico]

**Solução:**

[Como corrigir]

---

## 🟡 Problemas Importantes

[Problemas que **deveriam** ser corrigidos]

### [Título do Problema 1]

**Localização:** `[arquivo]:[linha]`

**Descrição:**

[Descrição]

**Recomendação:**

[Como melhorar]

---

## 🔵 Sugestões

[Melhorias opcionais que agregariam valor]

- [Sugestão 1]
- [Sugestão 2]
- [Sugestão 3]

---

## 💡 Nitpicks

[Questões menores, completamente opcionais]

<details>
<summary>Clique para expandir nitpicks</summary>

- [Nitpick 1]
- [Nitpick 2]

</details>

---

## 🧪 Análise de Testes

**Cobertura:** [X%] ([Aumentou/Diminuiu/Manteve] em relação ao baseline)

**Avaliação:**

- [ ] Testes cobrem casos principais
- [ ] Testes cobrem edge cases
- [ ] Testes são legíveis e mantíveis
- [ ] Não há testes flaky

**Comentários:**

[Observações sobre qualidade e cobertura dos testes]

---

## 📚 Análise de Documentação

- [ ] README atualizado (se necessário)
- [ ] Comentários de código adequados
- [ ] Documentação de API atualizada
- [ ] CHANGELOG atualizado

**Comentários:**

[Observações sobre documentação]

---

## 🔍 Análise de Impacto

**Breaking Changes:** [Sim/Não]

[Se sim, liste as breaking changes]

**Dependências Novas:** [Sim/Não]

[Se sim, liste e justifique]

**Performance:** [Melhora/Neutra/Piora]

[Comentários sobre impacto de performance]

**Segurança:** [Melhora/Neutra/Piora]

[Comentários sobre impacto de segurança]

---

## ✓ Checklist de Revisão

- [ ] Código revisado completamente
- [ ] Funcionalidade está correta
- [ ] Testes são adequados
- [ ] Documentação está atualizada
- [ ] Sem vulnerabilidades de segurança
- [ ] Performance é aceitável
- [ ] Código segue padrões do projeto
- [ ] CI/CD passa completamente

---

## 🎯 Próximos Passos

[Instruções claras sobre o que o autor deve fazer]

1. [Ação 1]
2. [Ação 2]
3. [Ação 3]

**Após correções:** [Marque-me para re-revisão / Pode mergear após CI passar / etc.]

---

## 💬 Comentários Adicionais

[Qualquer contexto adicional, discussões de trade-offs, sugestões para PRs futuros, etc.]

---

**Revisado por:** @[seu-username]
**Data:** [YYYY-MM-DD]

---

## Exemplo Completo

---

# Revisão: Add user authentication with JWT

## 📋 Resumo

**Status:** Aprovado com Sugestões

**Resumo Executivo:**

Este PR implementa autenticação JWT para a API. A implementação está funcionalmente correta e bem testada. Identifiquei uma vulnerabilidade de segurança crítica relacionada ao armazenamento de secrets e algumas oportunidades de melhoria na estrutura do código. Com as correções sugeridas, este PR estará pronto para merge.

**Complexidade:** Média
**Risco:** Médio (após correções)

---

## ✅ Pontos Positivos

- Implementação clara e bem estruturada da autenticação JWT
- Excelente cobertura de testes (95%) incluindo casos de erro
- Documentação detalhada dos endpoints de autenticação
- Uso correto de bcrypt para hashing de senhas
- Middleware de autenticação bem implementado e reutilizável
- Tratamento de erros consistente e informativo

---

## 🔴 Problemas Críticos

### Secret JWT Hardcoded

**Localização:** `src/auth/jwt.js:5`

**Descrição:**

O secret do JWT está hardcoded no código:

```javascript
const JWT_SECRET = 'my-super-secret-key-12345';
```

**Impacto:**

- Secret exposto no repositório Git
- Qualquer pessoa com acesso ao código pode gerar tokens válidos
- Impossível rotacionar secret sem deploy de código
- Viola práticas de segurança fundamentais

**Solução:**

Use variável de ambiente:

```javascript
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is required');
}
```

Adicione ao `.env.example`:

```
JWT_SECRET=your-secret-here-use-strong-random-string
```

E documente no README como gerar um secret seguro:

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

**Referências:**

- [OWASP Secrets Management](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)

---

## 🟡 Problemas Importantes

### Função de Login com Múltiplas Responsabilidades

**Localização:** `src/auth/controller.js:login`

**Descrição:**

A função `login` está fazendo validação, autenticação, geração de token e logging:

```javascript
async function login(req, res) {
  // Validação
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ error: 'Missing credentials' });
  }

  // Autenticação
  const user = await User.findOne({ email: req.body.email });
  if (!user || !(await bcrypt.compare(req.body.password, user.passwordHash))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Geração de token
  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

  // Logging
  await AuditLog.create({ userId: user.id, action: 'login', timestamp: new Date() });

  res.json({ token });
}
```

**Recomendação:**

Extraia responsabilidades para funções/serviços separados:

```javascript
async function login(req, res) {
  const credentials = validateCredentials(req.body);
  const user = await authenticateUser(credentials);
  const token = generateToken(user);
  await logAuthEvent(user, 'login');
  res.json({ token });
}
```

Isso melhora testabilidade e manutenibilidade.

### Falta Rate Limiting

**Localização:** `src/auth/routes.js`

**Descrição:**

Os endpoints de autenticação não têm rate limiting, permitindo ataques de brute force.

**Recomendação:**

Adicione rate limiting específico para auth:

```javascript
const rateLimit = require('express-rate-limit');

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // 5 tentativas
  message: 'Too many login attempts, please try again later',
});

router.post('/login', authLimiter, authController.login);
```

---

## 🔵 Sugestões

- Considere adicionar refresh tokens para melhor UX (usuário não precisa fazer login a cada hora)
- Adicione endpoint de logout que invalide tokens (usando blacklist ou Redis)
- Implemente MFA (2FA) para contas sensíveis em um PR futuro
- Considere adicionar rate limiting por usuário (não apenas por IP) para prevenir ataques distribuídos

---

## 💡 Nitpicks

<details>
<summary>Clique para expandir nitpicks</summary>

- `src/auth/middleware.js:15` - Variável `token` poderia ter nome mais descritivo como `authToken`
- `src/auth/jwt.js:20` - Considere extrair `expiresIn: '1h'` para constante configurável
- Alguns comentários estão em português, outros em inglês - padronize

</details>

---

## 🧪 Análise de Testes

**Cobertura:** 95% (Aumentou de 87%)

**Avaliação:**

- [x] Testes cobrem casos principais
- [x] Testes cobrem edge cases
- [x] Testes são legíveis e mantíveis
- [x] Não há testes flaky

**Comentários:**

Excelente cobertura de testes! Os testes estão bem estruturados e cobrem:

- Login com credenciais válidas
- Login com credenciais inválidas
- Token expirado
- Token inválido
- Middleware de autenticação

Sugestão: Adicione teste para caso de JWT_SECRET não configurado.

---

## 📚 Análise de Documentação

- [x] README atualizado (se necessário)
- [x] Comentários de código adequados
- [x] Documentação de API atualizada
- [ ] CHANGELOG atualizado

**Comentários:**

Documentação está ótima! Apenas falta adicionar entrada no CHANGELOG:

```markdown
## [1.1.0] - 2026-01-06

### Added

- JWT authentication for API endpoints
- Login and register endpoints
- Authentication middleware
```

---

## 🔍 Análise de Impacto

**Breaking Changes:** Sim

- Todos os endpoints protegidos agora requerem header `Authorization: Bearer <token>`
- Clientes existentes precisarão se autenticar

**Dependências Novas:** Sim

- `jsonwebtoken` (^9.0.0) - Biblioteca estabelecida e bem mantida ✓
- `bcrypt` (^5.1.0) - Padrão da indústria para hashing ✓

Ambas são dependências apropriadas e seguras.

**Performance:** Neutra

Overhead de validação de JWT é mínimo (~1ms). Bcrypt é intencionalmente lento (segurança), mas apenas no login.

**Segurança:** Melhora (após correções)

Adiciona camada essencial de segurança. Após corrigir o secret hardcoded, a implementação estará sólida.

---

## ✓ Checklist de Revisão

- [x] Código revisado completamente
- [x] Funcionalidade está correta
- [x] Testes são adequados
- [x] Documentação está atualizada
- [ ] Sem vulnerabilidades de segurança (após correção do secret)
- [x] Performance é aceitável
- [x] Código segue padrões do projeto
- [x] CI/CD passa completamente

---

## 🎯 Próximos Passos

1. **CRÍTICO:** Mova JWT_SECRET para variável de ambiente
2. **IMPORTANTE:** Adicione rate limiting nos endpoints de auth
3. **IMPORTANTE:** Refatore função de login para separar responsabilidades
4. **OPCIONAL:** Adicione entrada no CHANGELOG
5. **OPCIONAL:** Considere implementar refresh tokens em PR futuro

**Após correções:** Marque-me para re-revisão. Assim que o secret estiver corrigido e rate limiting adicionado, aprovarei o merge.

---

## 💬 Comentários Adicionais

Ótimo trabalho na implementação! A estrutura está sólida e os testes são exemplares. A questão do secret hardcoded é crítica mas fácil de corrigir. Após as correções, este será um excelente PR.

Considere documentar a estratégia de autenticação em um ADR para referência futura, especialmente se planeja adicionar OAuth ou outros métodos no futuro.

---

**Revisado por:** @reviewer
**Data:** 2026-01-06

---

## Guia de Status

Use estes status:

- **Aprovado**: Pronto para merge sem mudanças
- **Aprovado com Sugestões**: Pode mergear, mas considere sugestões
- **Mudanças Necessárias**: Requer correções antes do merge
- **Rejeitado**: Problemas fundamentais, precisa ser refeito

## Dicas

1. **Seja completo mas conciso**: Cubra todos os aspectos sem ser verboso
2. **Priorize problemas**: Comece pelos críticos
3. **Seja construtivo**: Sempre reconheça o bom trabalho
4. **Forneça contexto**: Explique o "porquê" das sugestões
5. **Seja acionável**: Deixe claro o que precisa ser feito
6. **Use exemplos**: Mostre código quando possível
7. **Considere o autor**: Seja respeitoso e profissional
