# PR Description Standards

## Principios Fundamentais

### 1. Clareza e Contexto

- **Explique o "por que"**: Motivacao e problema sendo resolvido
- **Descreva o "o que"**: Mudancas realizadas em alto nivel
- **Evite o "como"**: Implementacao esta no codigo, nao na descricao
- **Forneça contexto**: Links para issues, RFCs, documentacao relevante

### 2. Completude

Uma boa descricao de PR deve responder:

- **O que mudou?** Lista de mudancas principais
- **Por que mudou?** Motivacao e problema resolvido
- **Como testar?** Instrucoes para validar as mudancas
- **Quais os riscos?** Breaking changes, migrations, deployment concerns
- **O que mais?** Decisoes de design, trade-offs, limitacoes conhecidas

### 3. Estrutura

- **Titulo descritivo**: Resumo conciso da mudanca principal
- **Secoes organizadas**: Use template apropriado para o projeto
- **Listas e checkboxes**: Facilita leitura e tracking
- **Formatacao markdown**: Melhora legibilidade

## Tipos de Mudanca

Identifique corretamente o tipo de mudanca:

- **Feature**: Nova funcionalidade ou capacidade
- **Bugfix**: Correcao de comportamento incorreto
- **Refactor**: Melhoria de codigo sem mudar comportamento
- **Chore**: Tarefas de manutencao (deps, config, etc.)
- **Docs**: Mudancas apenas em documentacao
- **Perf**: Melhorias de performance
- **Test**: Adicao ou correcao de testes

## Identificacao de Riscos

### Breaking Changes

Identifique mudancas que quebram compatibilidade:

- Mudancas em APIs publicas
- Remocao de funcionalidades
- Mudancas em schemas (DB, eventos, APIs)
- Mudancas em comportamento esperado

### Database Migrations

Sinalize quando houver:

- Mudancas em schema de banco de dados
- Migrations que requerem downtime
- Migrations que afetam grande volume de dados
- Rollback considerations

### Deployment Considerations

Destaque quando necessario:

- Deploy fora do horario comercial
- Deploy em ordem especifica (backend antes de frontend)
- Feature flags ou rollout gradual
- Monitoramento especial pos-deploy

### Event/Message Schema Changes

Para sistemas event-driven:

- Mudancas em formato de eventos
- Novos eventos ou comandos
- Deprecacao de eventos existentes
- Compatibilidade com consumidores

## Tamanho e Escopo

### Tamanho Ideal

- **Pequeno**: < 200 linhas (ideal)
- **Medio**: 200-400 linhas (aceitavel)
- **Grande**: > 400 linhas (considere dividir)

### Escopo Unico

- Um PR deve resolver um problema ou adicionar uma feature
- Evite misturar refactoring com features
- Evite misturar bugfixes nao relacionados
- Se necessario fazer mudancas nao relacionadas, explique o motivo

## Checklist de Qualidade

Antes de finalizar a descricao, verifique:

- [ ] Titulo e claro e descritivo
- [ ] Motivacao esta explicada
- [ ] Mudancas principais estao listadas
- [ ] Instrucoes de teste estao presentes
- [ ] Riscos foram identificados
- [ ] Issues relacionadas estao linkadas
- [ ] Breaking changes estao destacados (se houver)
- [ ] Consideracoes de deployment estao documentadas (se houver)

## Exemplos

### Bom Exemplo

```markdown
## What

Add rate limiting to authentication endpoints to prevent brute force attacks.

## Why

We've observed suspicious login attempts patterns that could indicate brute force attacks. This change adds rate limiting to protect user accounts.

## Changes

- Added rate limiting middleware using express-rate-limit
- Applied 5 requests per minute limit to /login and /register
- Added Redis store for distributed rate limiting
- Updated error responses to include Retry-After header

## How to Test

1. Make 6 login requests within 1 minute
2. Verify 6th request returns 429 Too Many Requests
3. Wait 1 minute and verify requests work again

## Risks

- [ ] No database schema changes
- [ ] No event/command schema changes
- [x] Should monitor rate limit hits after deployment

## Related Issues

Closes #1234
```

### Exemplo Ruim

```markdown
Fixed login

Updated the login code to work better.
```

**Problemas**:

- Titulo vago
- Nao explica o problema
- Nao lista mudancas
- Nao fornece contexto
- Nao identifica riscos

## Anti-Patterns

Evite:

- **Descricoes vazias**: "See commits" nao e uma descricao
- **Apenas codigo**: Copiar/colar codigo na descricao
- **Muito tecnico**: Focar em detalhes de implementacao
- **Muito vago**: "Fixed some bugs" sem especificar
- **Sem contexto**: Nao explicar o "por que"
- **Sem riscos**: Ignorar breaking changes ou deployment concerns
