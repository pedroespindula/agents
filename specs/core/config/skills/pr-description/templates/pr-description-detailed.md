# Pull Request Description - Detailed

Comprehensive template for production-ready pull requests with deployment considerations.

---

## Critical Level: 🟢 LOW

[Ajuste o nível conforme necessário: 🟢 LOW | 🟡 MEDIUM | 🔴 HIGH]

## Type of change

- [ ] Bug fix
- [ ] New feature
- [ ] Chore
- [ ] Refactoring
- [ ] Performance improvement
- [ ] Documentation
- [ ] Other: [specify]

## What

[Descreva de forma concisa o que este PR faz - 2-3 frases no máximo]

## Why

[Explique a motivação e contexto - por que essa mudança é necessária? Qual problema resolve?]

## Changes

- [Mudança principal 1]
- [Mudança principal 2]
- [Mudança principal 3]
- [Adicione mais conforme necessário]

## How to Test

1. [Passo 1]
2. [Passo 2]
3. [Passo 3]
4. [Resultado esperado]

## Risks

- [ ] Any changes to the database schema?
- [ ] Any changes to the event/command schema?
- [ ] Should this change be deployed outside of business hours?
- [ ] Requires feature flag or gradual rollout?
- [ ] Breaking changes that affect other services?
- [ ] Performance impact on critical paths?

**Risk Details**:
[Adicione detalhes para qualquer item marcado acima]

## Deployment Considerations

[Adicione considerações especiais de deployment, ordem de deploy, configurações necessárias, etc.]

## Monitoring

[Descreva métricas ou logs que devem ser monitorados após o deploy]

## Rollback Plan

[Descreva como fazer rollback se necessário]

## Related Issues

Closes #[issue number]
Relates to #[issue number]

---

## Checklist

- [ ] Code follows project standards
- [ ] Tests added/updated with adequate coverage
- [ ] Documentation updated (if needed)
- [ ] Self-review completed
- [ ] No console.logs or debug code
- [ ] Breaking changes documented (if applicable)
- [ ] Migration scripts tested (if applicable)
- [ ] Monitoring/alerting configured (if needed)
