# Como Definir Confiabilidade

Este documento descreve o processo para definição de SLIs, SLOs e SLAs.

## Conceitos Fundamentais

### SLI (Service Level Indicator)

**O que é**: Métrica quantitativa de algum aspecto do serviço.

**Exemplos:**

- Proporção de requests bem-sucedidos
- Latência do percentil 99
- Taxa de disponibilidade
- Throughput

### SLO (Service Level Objective)

**O que é**: Valor alvo para um SLI.

**Exemplos:**

- 99.9% dos requests devem ser bem-sucedidos
- p99 da latência deve ser < 200ms
- Disponibilidade de 99.95%

### SLA (Service Level Agreement)

**O que é**: Contrato formal com consequências se SLO não for atingido.

**Exemplos:**

- Se disponibilidade < 99.9%, crédito de 10%
- Se p99 > 500ms, reembolso proporcional

### Relação entre eles

```
SLA ⊂ SLO ⊂ SLI

SLI: O que medimos
SLO: O que prometemos internamente
SLA: O que prometemos externamente (com penalidades)
```

## Escolhendo SLIs

### Metodologia por Tipo de Sistema

**Sistemas orientados a request:**

- Disponibilidade: requests bem-sucedidos / total
- Latência: tempo de resposta
- Throughput: requests por segundo

**Sistemas de processamento de dados:**

- Freshness: quão atuais são os dados
- Correctness: dados processados corretamente
- Coverage: dados processados / dados recebidos

**Sistemas de armazenamento:**

- Durability: dados não perdidos
- Availability: dados acessíveis quando solicitados
- Latency: tempo para ler/escrever

### Boas Práticas para SLIs

1. **Meça do ponto de vista do usuário**
   - Prefira métricas sintéticas do cliente sobre métricas do servidor

2. **Agregue apropriadamente**
   - Use percentis para latência (p50, p95, p99)
   - Use proporções para disponibilidade

3. **Defina limites claros**
   - O que conta como sucesso?
   - O que conta como falha?

## Definindo SLOs

### Processo

1. **Comece com dados históricos**
   - Qual é o desempenho atual?
   - Qual é a variação normal?

2. **Considere as expectativas dos usuários**
   - O que os usuários precisam?
   - O que eles tolerariam?

3. **Balanceie com custo e esforço**
   - 99.9% vs 99.99% tem custo muito diferente

4. **Comece conservador, ajuste depois**
   - Mais fácil apertar SLO do que afrouxar

### Níveis Comuns

| SLO     | Downtime/mês  | Downtime/ano  |
| ------- | ------------- | ------------- |
| 99%     | 7.2 horas     | 3.65 dias     |
| 99.9%   | 43.8 minutos  | 8.76 horas    |
| 99.95%  | 21.9 minutos  | 4.38 horas    |
| 99.99%  | 4.38 minutos  | 52.56 minutos |
| 99.999% | 26.3 segundos | 5.26 minutos  |

### Janelas de Tempo

- **Rolling window**: Últimos 30 dias (recomendado)
- **Calendar window**: Mês/trimestre calendário

Rolling window é preferido porque:

- Não "reseta" no início do mês
- Reflete comportamento recente
- Mais previsível para error budget

## Error Budget

### Conceito

```
Error Budget = 100% - SLO

Se SLO = 99.9%
Error Budget = 0.1% = 43.8 minutos/mês
```

### Uso do Error Budget

| Budget Restante | Ação                                    |
| --------------- | --------------------------------------- |
| > 50%           | Velocidade normal de desenvolvimento    |
| 25-50%          | Cautela com mudanças arriscadas         |
| 10-25%          | Foco em estabilidade                    |
| < 10%           | Congelamento, apenas fixes críticos     |
| Esgotado        | Parar features, focar em confiabilidade |

### Error Budget Policy

Defina o que acontece quando o budget é consumido:

```markdown
## Error Budget Policy

### Quando budget > 50%

- Desenvolvimento normal
- Deploys frequentes permitidos

### Quando budget entre 20-50%

- Revisão adicional para mudanças
- Rollout gradual obrigatório

### Quando budget < 20%

- Apenas bug fixes e melhorias de confiabilidade
- Cada deploy requer aprovação de SRE

### Quando budget esgotado

- Congelamento de features
- Postmortem obrigatório para qualquer incidente
- Revisão de arquitetura se recorrente
```

## Documentação de SLO

### Template

```markdown
# SLO: [Nome do Serviço]

## Visão Geral

[Descrição do serviço e sua criticidade]

## SLIs e SLOs

### Disponibilidade

- **SLI**: Proporção de requests HTTP com status < 500
- **SLO**: 99.9% em janela de 30 dias
- **Medição**: sum(rate(http_requests_total{status!~"5.."})) / sum(rate(http_requests_total))

### Latência

- **SLI**: Latência do percentil 99 de requests bem-sucedidos
- **SLO**: < 200ms
- **Medição**: histogram_quantile(0.99, http_request_duration_seconds_bucket)

## Error Budget

- **Budget mensal**: 43.8 minutos
- **Policy**: [Link para política]

## Exceções

- Manutenções programadas não contam contra SLO
- Requests de health check excluídos

## Revisão

- Frequência: Trimestral
- Última revisão: [Data]
- Próxima revisão: [Data]
```

## Checklist de Confiabilidade

- [ ] SLIs definidos do ponto de vista do usuário
- [ ] SLOs baseados em dados históricos e necessidades
- [ ] Error budget calculado e comunicado
- [ ] Policy de error budget documentada
- [ ] Alertas configurados para burn rate
- [ ] Dashboard de SLO criado
- [ ] Processo de revisão estabelecido
