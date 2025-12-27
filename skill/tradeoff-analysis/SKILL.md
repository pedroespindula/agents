---
name: tradeoff-analysis
description: Analisar trade-offs entre diferentes alternativas tecnicas
license: MIT
compatibility: opencode
metadata:
  audience: developers
  workflow: architecture
---

## What I do

Analisar trade-offs entre alternativas tecnicas:

- Definir criterios de avaliacao
- Comparar alternativas sistematicamente
- Criar matrizes de decisao
- Identificar riscos de cada opcao
- Formular recomendacoes fundamentadas

## When to use me

Use this skill when you need to compare technical alternatives. This is especially helpful when:

- Choosing between different technologies
- Evaluating architectural approaches
- Making build vs buy decisions
- Comparing implementation strategies

## How I work

I follow trade-off analysis best practices:

1. **Sistematico**: Use criterios claros e consistentes
2. **Objetivo**: Evite vieses de confirmacao
3. **Transparente**: Documente o raciocinio
4. **Pragmatico**: Considere contexto e restricoes

## Principles

- **Nao existe bala de prata**: Toda escolha tem custos e beneficios
- **Contexto importa**: A melhor opcao depende do cenario
- **Reversibilidade**: Prefira decisoes que possam ser revertidas

## Template

```markdown
# Analise de Trade-off: [Titulo]

## Contexto

[Descricao do problema e motivacao]

## Alternativas

### Alternativa A: [Nome]

- **Descricao**: [Como funciona]
- **Pros**: [Lista de vantagens]
- **Contras**: [Lista de desvantagens]

### Alternativa B: [Nome]

- **Descricao**: [Como funciona]
- **Pros**: [Lista de vantagens]
- **Contras**: [Lista de desvantagens]

## Criterios de Avaliacao

| Criterio     | Peso | Descricao                      |
| ------------ | ---- | ------------------------------ |
| Performance  | 3    | Tempo de resposta e throughput |
| Complexidade | 2    | Facilidade de implementacao    |
| Custo        | 2    | Desenvolvimento + operacao     |

## Matriz de Decisao

| Criterio     | Peso | Alt A  | Alt B  |
| ------------ | ---- | ------ | ------ |
| Performance  | 3    | 4      | 3      |
| Complexidade | 2    | 3      | 4      |
| Custo        | 2    | 4      | 3      |
| **Total**    |      | **25** | **23** |

## Analise

### Alternativa Recomendada

[Qual e por que]

### Riscos da Escolha

- [Risco 1]: [Mitigacao]

### Condicoes de Revisao

- Se [condicao], reconsiderar [alternativa]

## Decisao

[Decisao final e proximos passos]
```

## Restrictions

- **Liste minimo 2-3 alternativas** — evite analise de opcao unica
- **Defina criterios antes** de avaliar — evite vies
- **Documente incertezas** — seja honesto sobre o que nao sabe
- **Evite paralisia** — analise suficiente, nao perfeita
