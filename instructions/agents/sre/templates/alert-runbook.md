# Template: Runbook de Alerta

Use este template para criar runbooks vinculados a alertas específicos.

---

# Runbook: [Nome do Alerta]

## Identificação

| Campo                  | Valor                       |
| ---------------------- | --------------------------- |
| **Alerta**             | [Nome exato do alerta]      |
| **Severidade**         | [Critical / Warning / Info] |
| **Serviço**            | [Nome do serviço]           |
| **Owner**              | [Time responsável]          |
| **Última atualização** | [YYYY-MM-DD]                |

## Descrição do Alerta

### O que este alerta significa

[Explicação clara do que o alerta indica e por que é importante]

### Condição de disparo

```promql
[Query ou condição exata que dispara o alerta]
```

### Thresholds

| Parâmetro            | Valor       |
| -------------------- | ----------- |
| Threshold            | [valor]     |
| For (duração)        | [X minutos] |
| Período de avaliação | [X minutos] |

## Impacto

### Quando este alerta dispara, o que está acontecendo?

- [Impacto 1 - ex: Usuários podem ver erros 500]
- [Impacto 2 - ex: Processamento de pedidos pode falhar]
- [Impacto 3 - ex: Latência aumentada para todos os requests]

### Urgência

| Severidade | Tempo de Resposta | Ação                  |
| ---------- | ----------------- | --------------------- |
| Critical   | Imediato          | Acordar se necessário |
| Warning    | < 1 hora          | Horário comercial     |
| Info       | Próximo dia útil  | Monitorar tendência   |

## Diagnóstico

### Verificações Iniciais

Execute estes comandos para entender a situação:

```bash
# 1. Verificar status do serviço
kubectl get pods -n [namespace] -l app=[serviço]

# 2. Verificar logs recentes
kubectl logs -n [namespace] -l app=[serviço] --tail=100 --since=10m

# 3. Verificar métricas
curl -s http://[prometheus]/api/v1/query?query=[métrica] | jq
```

### Dashboard

**Link**: [URL do dashboard relevante]

### Logs

**Query de logs**:

```
[Query para buscar logs relevantes no sistema de logging]
```

### Perguntas para Diagnóstico

1. [ ] O alerta começou após algum deploy recente?
2. [ ] Há outros alertas relacionados disparando?
3. [ ] O problema é em todas as instâncias ou apenas algumas?
4. [ ] Há padrão de horário (picos de tráfego)?
5. [ ] Dependências externas estão saudáveis?

## Causas Comuns

### Causa 1: [Nome da causa comum]

**Sintomas:**

- [Sintoma identificador]
- [Outro sintoma]

**Verificação:**

```bash
[Comando para verificar se é esta causa]
```

**Resolução:**

1. [Passo 1]
2. [Passo 2]
3. [Verificação de que resolveu]

---

### Causa 2: [Nome da causa comum]

**Sintomas:**

- [Sintoma identificador]
- [Outro sintoma]

**Verificação:**

```bash
[Comando para verificar se é esta causa]
```

**Resolução:**

1. [Passo 1]
2. [Passo 2]
3. [Verificação de que resolveu]

---

### Causa 3: [Nome da causa comum]

**Sintomas:**

- [Sintoma identificador]

**Verificação:**

```bash
[Comando para verificar]
```

**Resolução:**

1. [Passo 1]
2. [Passo 2]

## Mitigações de Emergência

Se a causa não for identificada rapidamente, considere estas mitigações:

### Opção 1: Rollback

```bash
# Fazer rollback para versão anterior
kubectl rollout undo deployment/[nome] -n [namespace]

# Verificar status
kubectl rollout status deployment/[nome] -n [namespace]
```

### Opção 2: Escalar Recursos

```bash
# Aumentar número de réplicas
kubectl scale deployment/[nome] -n [namespace] --replicas=[N]

# Ou aumentar recursos
kubectl set resources deployment/[nome] -n [namespace] \
  --limits=cpu=2000m,memory=2Gi
```

### Opção 3: Failover

```bash
# Redirecionar tráfego para região/cluster backup
[Comandos específicos do seu setup]
```

### Opção 4: Circuit Breaker

```bash
# Ativar feature flag para desabilitar funcionalidade problemática
[Comando para ativar feature flag]
```

## Escalação

### Quando Escalar

- [ ] Problema não resolvido em [X] minutos
- [ ] Causa raiz não identificada
- [ ] Impacto maior que esperado
- [ ] Necessita mudança em outro serviço

### Para Quem Escalar

| Nível | Quem                   | Como Contatar     |
| ----- | ---------------------- | ----------------- |
| L1    | [Time de plantão]      | [Slack/PagerDuty] |
| L2    | [Tech Lead do serviço] | [Contato]         |
| L3    | [Arquiteto/SRE Senior] | [Contato]         |

## Pós-resolução

### Checklist

- [ ] Confirmar que alerta parou de disparar
- [ ] Verificar métricas voltaram ao normal
- [ ] Documentar causa e resolução
- [ ] Criar ticket para postmortem (se SEV1/SEV2)
- [ ] Atualizar este runbook se necessário

### Monitoramento Pós-incidente

Mantenha atenção aumentada por [X horas]:

- [Métrica 1 para monitorar]
- [Métrica 2 para monitorar]

## Referências

- [Link para documentação do serviço]
- [Link para arquitetura]
- [Link para runbooks relacionados]
- [Link para postmortems anteriores relacionados]

## Histórico de Mudanças

| Data   | Autor  | Mudança                |
| ------ | ------ | ---------------------- |
| [Data] | [Nome] | Criação inicial        |
| [Data] | [Nome] | [Descrição da mudança] |
