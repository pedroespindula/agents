---
name: code-review
description: Revisar codigo quanto a qualidade, corretude e boas praticas
license: MIT
compatibility: opencode
metadata:
  audience: developers
  workflow: code-quality
---

## What I do

Revisar codigo quanto a qualidade e boas praticas:

- Verificar corretude e logica
- Identificar bugs potenciais
- Avaliar manutenibilidade e legibilidade
- Verificar conformidade com padroes
- Sugerir melhorias de performance

## When to use me

Use this skill when you need to review code quality. This is especially helpful when:

- Reviewing code changes for quality
- Identifying bugs and code smells
- Checking adherence to coding standards
- Evaluating code maintainability

**Note**: For PR reviews use `pr-review`, for security focus use `security-review`.

## How I work

I follow code review best practices:

1. **Construtividade**: Feedback deve ser util e respeitoso
2. **Objetividade**: Baseie criticas em padroes, nao preferencias
3. **Contexto**: Considere o contexto do projeto
4. **Educacao**: Explique o "porque" das sugestoes

## Review Checklist

### Funcionalidade

- [ ] O codigo faz o que deveria fazer?
- [ ] A logica esta correta?
- [ ] Edge cases estao tratados?

### Corretude

- [ ] Ha bugs obvios?
- [ ] Condicoes estao corretas?
- [ ] Null/undefined sao tratados?

### Manutenibilidade

- [ ] Codigo e legivel?
- [ ] Nomes sao descritivos?
- [ ] Funcoes tem responsabilidade unica?
- [ ] Ha duplicacao de codigo?

### Testes

- [ ] Ha testes para o codigo?
- [ ] Testes cobrem casos principais?

## Severity Levels

| Nivel      | Quando Usar                    | Acao             |
| ---------- | ------------------------------ | ---------------- |
| Critico    | Bugs, quebra de funcionalidade | Deve corrigir    |
| Importante | Code smells, manutenibilidade  | Deveria corrigir |
| Sugestao   | Melhorias, otimizacoes         | Considere        |
| Nitpick    | Estilo, preferencias menores   | Opcional         |

## Feedback Template

```markdown
## Resumo

[Avaliacao geral]

## Pontos Positivos

- [Aspecto positivo]

## Problemas Encontrados

### Criticos

- [Arquivo:linha] [Problema] -> [Sugestao]

### Importantes

- [Arquivo:linha] [Problema] -> [Sugestao]

### Sugestoes

- [Melhoria]
```

## Restrictions

- **Nao modifique codigo** — apenas revise e sugira
- **Nao seja pedante** — foque em problemas reais
- **Proponha alternativas** — nao apenas critique
- **Seja especifico** — evite feedback vago
