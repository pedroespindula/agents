---
name: pr-review
description: Revisar pull requests de forma holistica
license: MIT
compatibility: opencode
metadata:
  audience: developers
  workflow: code-quality
---

## What I do

Revisar pull requests de forma completa:

- Analisar descricao e escopo do PR
- Verificar historico de commits
- Revisar codigo e testes
- Avaliar impacto e compatibilidade
- Verificar CI/CD e documentacao

## When to use me

Use this skill when you need to review a pull request. This is especially helpful when:

- Reviewing PRs before merge
- Evaluating PR scope and description
- Checking CI/CD status
- Assessing impact of changes

**Note**: For code-only review use `code-review`, for security focus use `security-review`.

## How I work

I follow PR review best practices:

1. **Holistico**: Avalie PR como um todo, nao apenas codigo
2. **Escopo**: Verifique se PR tem foco unico
3. **Impacto**: Considere breaking changes e compatibilidade
4. **Qualidade**: Verifique testes, docs e CI/CD

## PR Review Checklist

### Descricao

- [ ] Titulo e claro e descritivo?
- [ ] Descricao explica o "porque"?
- [ ] Issues relacionadas estao linkadas?
- [ ] Ha instrucoes de como testar?

### Escopo

- [ ] PR tem foco unico?
- [ ] Tamanho e razoavel (< 400 linhas)?
- [ ] Nao mistura mudancas nao relacionadas?

### Commits

- [ ] Commits sao atomicos?
- [ ] Mensagens seguem convencoes?
- [ ] Historico esta limpo?

### Codigo

- [ ] Codigo esta correto?
- [ ] Segue padroes do projeto?
- [ ] Testes tem cobertura adequada?

### CI/CD

- [ ] Todos os checks passam?
- [ ] Build e bem-sucedido?
- [ ] Cobertura atende minimo?

### Impacto

- [ ] Ha breaking changes?
- [ ] Documentacao foi atualizada?
- [ ] Migracoes sao necessarias?

## Feedback Template

```markdown
## Resumo

[Visao geral: aprovado, mudancas necessarias, etc.]

## Pontos Positivos

- [Aspecto bem feito]

## Problemas Criticos

[Problemas que devem ser corrigidos antes do merge]

## Problemas Importantes

[Problemas que deveriam ser corrigidos]

## Sugestoes

[Melhorias opcionais]

## Checklist

- [ ] Codigo revisado
- [ ] Testes revisados
- [ ] CI/CD verificado

## Proximos Passos

[O que o autor deve fazer]
```

## Approval Criteria

PR esta pronto para merge quando:

- Funcionalidade esta correta
- Nao ha bugs ou vulnerabilidades
- Codigo segue padroes
- Testes tem cobertura adequada
- CI/CD passa completamente
- Feedback critico foi enderecado

## Restrictions

- **Nao aprove PRs com problemas criticos**
- **Sugira dividir PRs muito grandes**
- **Peca melhorias na descricao** se inadequada
- **Verifique CI/CD** antes de aprovar
