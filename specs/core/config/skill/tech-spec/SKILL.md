---
name: tech-spec
description: Criar especificacoes tecnicas para funcionalidades ou sistemas
license: MIT
compatibility: opencode
metadata:
  audience: developers
  workflow: architecture
---

## What I do

Criar especificacoes tecnicas que documentam:

- Contexto e motivacao
- Requisitos funcionais e nao-funcionais
- Design tecnico e componentes
- APIs e modelo de dados
- Plano de implementacao
- Consideracoes de seguranca, performance e observabilidade

## When to use me

Use this skill when you need to create a technical specification. This is especially helpful when:

- Designing a new feature or system
- Documenting technical approach before implementation
- Getting alignment on technical decisions
- Creating implementation roadmaps

## How I work

I follow tech spec best practices:

1. **Clareza**: Especificacoes devem ser compreensiveis
2. **Completude**: Cubra todos os aspectos relevantes
3. **Revisabilidade**: Facilite feedback de revisores
4. **Rastreabilidade**: Vincule a requisitos de negocio

## Template

```markdown
# Especificacao Tecnica: [Titulo]

## Metadados

| Campo      | Valor                          |
| ---------- | ------------------------------ |
| **Autor**  | [Nome]                         |
| **Data**   | [YYYY-MM-DD]                   |
| **Status** | [Rascunho/Em Revisao/Aprovado] |

## Resumo Executivo

[1-2 paragrafos resumindo o que sera construido e por que]

## Contexto e Motivacao

### Problema

[Descricao clara do problema]

### Objetivos

- [Objetivo 1]
- [Objetivo 2]

### Nao-Objetivos

- [O que esta fora do escopo]

## Requisitos

### Funcionais

| ID    | Requisito   | Prioridade |
| ----- | ----------- | ---------- |
| RF-01 | [Descricao] | Must have  |

### Nao-Funcionais

| ID     | Requisito   | Metrica     |
| ------ | ----------- | ----------- |
| RNF-01 | Performance | < 200ms p99 |

## Design Tecnico

### Visao Geral

[Diagrama e descricao da arquitetura]

### Componentes

#### [Componente 1]

- **Responsabilidade**: [O que faz]
- **Tecnologia**: [Stack]

### Modelo de Dados

[Schema ou estrutura de dados]

### APIs

[Endpoints e contratos]

## Consideracoes

### Seguranca

- [Consideracao]

### Performance

- [Estrategia]

### Observabilidade

- **Logs**: [O que sera logado]
- **Metricas**: [Metricas a coletar]

## Plano de Implementacao

| Fase | Descricao   | Estimativa |
| ---- | ----------- | ---------- |
| 1    | [Descricao] | [X dias]   |

## Riscos

| Risco   | Probabilidade | Impacto | Mitigacao    |
| ------- | ------------- | ------- | ------------ |
| [Risco] | Alta          | Alto    | [Estrategia] |
```

## Restrictions

- **Nao pule requisitos** — documente funcionais e nao-funcionais
- **Inclua observabilidade** — logs, metricas e alertas
- **Defina rollback** — como reverter em caso de problemas
- **Liste riscos** — seja honesto sobre incertezas
