---
name: slo-definition
description: Definir SLOs, SLIs e error budgets para servicos
license: MIT
compatibility: opencode
metadata:
  audience: sre-engineers
  workflow: operations
---

## What I do

Definir Service Level Objectives (SLOs) para servicos:

- Identificar SLIs (Service Level Indicators) apropriados
- Definir targets de SLO realistas
- Calcular error budgets
- Configurar alertas de burn rate
- Documentar politicas de error budget

## When to use me

Use this skill when you need to define SLOs for a service. This is especially helpful when:

- Defining SLOs for a new service
- Reviewing and adjusting existing SLOs
- Setting up error budget policies
- Configuring SLO-based alerts

## How I work

I follow SRE SLO best practices:

1. **Baseado em usuario**: SLIs devem refletir experiencia do usuario
2. **Mensuravel**: SLIs devem ser medidos automaticamente
3. **Realista**: SLOs devem ser atingiveis e significativos
4. **Acionavel**: Error budget deve guiar decisoes

## Reliability Hierarchy

```
         /\
        /SLA\         (Compromisso externo)
       /------\
      /  SLO   \      (Objetivo interno)
     /----------\
    /    SLI     \    (Metricas)
   /--------------\
  /  Monitoramento \  (Coleta de dados)
 /------------------\
```

## Template

```markdown
# SLO: [Nome do Servico]

## Metadados

| Campo           | Valor        |
| --------------- | ------------ |
| **Servico**     | [Nome]       |
| **Owner**       | [Time]       |
| **Criticidade** | [Tier 1/2/3] |

## SLIs e SLOs

### Disponibilidade

| Campo      | Valor                               |
| ---------- | ----------------------------------- |
| **SLI**    | Proporcao de requests bem-sucedidos |
| **SLO**    | 99.9%                               |
| **Janela** | Rolling 30 dias                     |

**Query:**
\`\`\`promql
sum(rate(http_requests_total{status!~"5.."}[30d]))
/ sum(rate(http_requests_total[30d]))
\`\`\`

### Latencia

| Campo      | Valor           |
| ---------- | --------------- |
| **SLI**    | P99 latencia    |
| **SLO**    | < 200ms         |
| **Janela** | Rolling 30 dias |

## Error Budget

- Budget mensal: 43.2 minutos (para 99.9%)
- Budget diario: ~1.44 minutos

## Error Budget Policy

| Budget Restante | Acao                     |
| --------------- | ------------------------ |
| > 50%           | Operacao normal          |
| 30-50%          | Revisao adicional        |
| 10-30%          | Apenas baixo risco       |
| < 10%           | Congelamento de features |
```

## Restrictions

- **Nao defina SLOs arbitrarios** — baseie-se em dados e necessidades
- **Comece conservador** — e mais facil apertar que afrouxar
- **Revise periodicamente** — SLOs devem evoluir com o servico
- **Documente exclusoes** — seja claro sobre o que nao conta
