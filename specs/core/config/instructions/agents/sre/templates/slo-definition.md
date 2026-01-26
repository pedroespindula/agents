# Template: Definição de SLO

Use este template para documentar SLOs de serviços.

---

# SLO: [Nome do Serviço]

## Metadados

| Campo               | Valor                            |
| ------------------- | -------------------------------- |
| **Serviço**         | [Nome do serviço]                |
| **Owner**           | [Time responsável]               |
| **Criticidade**     | [Tier 1 / Tier 2 / Tier 3]       |
| **Última revisão**  | [YYYY-MM-DD]                     |
| **Próxima revisão** | [YYYY-MM-DD]                     |
| **Status**          | [Ativo / Em revisão / Deprecado] |

## Descrição do Serviço

[Breve descrição do que o serviço faz, quem são os usuários e qual sua importância]

### Dependências

- **Upstream**: [Serviços que dependem deste]
- **Downstream**: [Serviços dos quais este depende]

### Arquitetura Simplificada

```
[Diagrama simples da arquitetura]
```

## SLIs e SLOs

### 1. Disponibilidade

| Campo      | Valor                                                   |
| ---------- | ------------------------------------------------------- |
| **SLI**    | Proporção de requests HTTP bem-sucedidos (status < 500) |
| **SLO**    | 99.9%                                                   |
| **Janela** | Rolling 30 dias                                         |

**Definição de sucesso:**

- Requests com status HTTP 2xx ou 4xx (erros do cliente não contam)
- Timeout não é considerado sucesso

**Query de medição:**

```promql
sum(rate(http_requests_total{service="nome", status!~"5.."}[30d]))
/
sum(rate(http_requests_total{service="nome"}[30d]))
```

**Error Budget:**

- Budget mensal: 43.2 minutos
- Budget diário médio: ~1.44 minutos

### 2. Latência

| Campo      | Valor                                              |
| ---------- | -------------------------------------------------- |
| **SLI**    | Percentil 99 da latência de requests bem-sucedidos |
| **SLO**    | < 200ms                                            |
| **Janela** | Rolling 30 dias                                    |

**Query de medição:**

```promql
histogram_quantile(0.99,
  sum(rate(http_request_duration_seconds_bucket{service="nome", status!~"5.."}[30d])) by (le)
)
```

### 3. [Outro SLI se aplicável]

| Campo      | Valor       |
| ---------- | ----------- |
| **SLI**    | [Descrição] |
| **SLO**    | [Valor]     |
| **Janela** | [Período]   |

## Exclusões

Os seguintes cenários NÃO contam contra o SLO:

- [ ] Manutenções programadas (com aviso de X horas)
- [ ] Requests de health check (`/health`, `/ready`)
- [ ] Requests de monitoramento sintético interno
- [ ] Falhas causadas por dependências externas documentadas
- [ ] [Outra exclusão específica]

## Alertas

### Burn Rate Alerts

| Alerta               | Condição                  | Severidade |
| -------------------- | ------------------------- | ---------- |
| SLO Budget Burn Fast | 2% budget consumido em 1h | Critical   |
| SLO Budget Burn Slow | 5% budget consumido em 6h | Warning    |
| SLO Budget Low       | < 20% budget restante     | Warning    |
| SLO Budget Exhausted | Budget esgotado           | Critical   |

**Exemplo de configuração:**

```yaml
groups:
  - name: slo-alerts
    rules:
      - alert: SLOBudgetBurnFast
        expr: |
          (
            1 - (sum(rate(http_requests_total{service="nome",status!~"5.."}[1h])) 
            / sum(rate(http_requests_total{service="nome"}[1h])))
          ) > (14.4 * 0.001)
        for: 2m
        labels:
          severity: critical
        annotations:
          summary: 'SLO budget burning too fast'
```

## Error Budget Policy

### Níveis de Resposta

| Budget Restante | Ação                                                 |
| --------------- | ---------------------------------------------------- |
| **> 50%**       | Operação normal, deploys frequentes permitidos       |
| **30-50%**      | Revisão adicional para mudanças, rollout gradual     |
| **10-30%**      | Apenas mudanças de baixo risco, foco em estabilidade |
| **< 10%**       | Congelamento de features, apenas fixes               |
| **Esgotado**    | Revisão obrigatória, postmortem, plano de ação       |

### Processo de Exceção

Para solicitar exceção à policy:

1. Documentar justificativa
2. Aprovação de [Papel]
3. Plano de mitigação de risco

## Dashboard

**Link**: [URL do dashboard de SLO]

### Painéis Incluídos

- SLO atual vs target
- Error budget restante
- Tendência de 7/30 dias
- Breakdown por endpoint/região
- Incidentes relacionados

## Histórico de SLO

| Data   | SLO Anterior | SLO Novo | Motivo                     |
| ------ | ------------ | -------- | -------------------------- |
| [Data] | -            | 99.9%    | Definição inicial          |
| [Data] | 99.9%        | 99.95%   | Melhoria de infraestrutura |

## Revisão

### Frequência

- Revisão completa: Trimestral
- Check de métricas: Mensal

### Critérios para Ajuste

**Apertar SLO (tornar mais restritivo):**

- SLO consistentemente superado por 3+ meses
- Capacidade de infraestrutura suporta
- Custo-benefício justificado

**Afrouxar SLO (tornar menos restritivo):**

- SLO frequentemente não atingido
- Impacto real nos usuários é menor que SLO sugere
- Custo de manter SLO atual é desproporcional

## Contatos

| Papel         | Contato     |
| ------------- | ----------- |
| **Owner**     | [Nome/Time] |
| **Escalação** | [Nome/Time] |
| **Slack**     | [Canal]     |
