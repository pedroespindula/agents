---
name: coverage-analysis
description: Analisar cobertura de testes e identificar gaps
license: MIT
compatibility: opencode
metadata:
  audience: developers
  workflow: quality-assurance
---

## What I do

Analisar cobertura de testes existente:

- Coletar metricas de cobertura
- Identificar areas com baixa cobertura
- Classificar gaps por criticidade
- Priorizar melhorias de cobertura
- Criar planos de acao

## When to use me

Use this skill when you need to analyze test coverage. This is especially helpful when:

- Evaluating current test coverage
- Identifying untested critical code
- Prioritizing test improvements
- Creating coverage improvement plans

## How I work

I follow coverage analysis best practices:

1. **Qualidade sobre quantidade**: Alta cobertura nao significa bons testes
2. **Foco no critico**: Priorize codigo de alto impacto
3. **Branches importam**: Cobertura de branches e mais importante que linhas
4. **Acao orientada**: Analise deve gerar acoes concretas

## Coverage Metrics

| Metrica               | Descricao           | Meta Tipica |
| --------------------- | ------------------- | ----------- |
| **Line Coverage**     | Linhas executadas   | 80%+        |
| **Branch Coverage**   | Branches executados | 75%+        |
| **Function Coverage** | Funcoes chamadas    | 85%+        |

## Criticality Matrix

```
                    Alta Frequencia de Uso
                           ^
                           |
    Prioridade ALTA   |   Prioridade CRITICA
                      |
    ------------------+--------------------> Alta Complexidade
                      |
    Prioridade BAIXA  |   Prioridade MEDIA
                      |
```

## Template

```markdown
# Analise de Cobertura - [Data]

## Resumo

- **Cobertura Total**: X%
- **Meta**: Y%
- **Gap**: Z pontos percentuais

## Metricas por Area

| Modulo | Lines | Branches | Functions |
| ------ | ----- | -------- | --------- |
| Core   | 85%   | 78%      | 90%       |
| API    | 72%   | 65%      | 80%       |

## Areas Criticas Sem Cobertura

1. **[Area]**: [Descricao do risco]
2. **[Area]**: [Descricao do risco]

## Plano de Melhoria

### Imediatas (Sprint Atual)

- [ ] [Acao 1]
- [ ] [Acao 2]

### Curto Prazo (Proximo Sprint)

- [ ] [Acao 3]

### Backlog

- [ ] [Acao 4]

## Quick Wins

- [Funcao sem teste que e facil testar]
- [Branch nao coberto em codigo simples]
```

## Restrictions

- **Nao busque 100%** — foque em codigo critico
- **Nao ignore branches** — sao mais importantes que linhas
- **Nao infle cobertura** — testes sem assertions nao contam
- **Priorize por risco** — nem todo codigo precisa de teste
