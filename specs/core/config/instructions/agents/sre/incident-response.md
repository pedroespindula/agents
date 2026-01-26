# Como Responder a Incidentes

Este documento descreve o processo para resposta a incidentes de produção.

## Objetivo

Restaurar o serviço o mais rápido possível, minimizando impacto aos usuários e coletando informações para prevenção futura.

## Fases da Resposta

### 1. Detecção

**Fontes de detecção:**

- Alertas automáticos (preferido)
- Monitoramento/dashboards
- Relatos de usuários
- Relatos internos

**Ações imediatas:**

- Reconheça o alerta
- Avalie severidade inicial
- Acione o processo de incidente se necessário

### 2. Triagem

**Avalie rapidamente:**

- Qual é o impacto? (usuários, receita, dados)
- Qual é o escopo? (parcial, total, específico)
- Está piorando ou estável?

**Defina severidade:**

| Severidade | Critérios                    | Resposta                 |
| ---------- | ---------------------------- | ------------------------ |
| SEV1       | Sistema crítico indisponível | War room imediato        |
| SEV2       | Degradação significativa     | Equipe dedicada          |
| SEV3       | Impacto limitado             | Investigação prioritária |
| SEV4       | Mínimo/nenhum impacto        | Próximo dia útil         |

### 3. Mobilização

**Para SEV1/SEV2:**

```
1. Criar canal de comunicação (Slack, call)
2. Designar papéis:
   - Incident Commander (IC)
   - Tech Lead
   - Comunicação
   - Scribe
3. Comunicar stakeholders iniciais
```

### 4. Investigação e Mitigação

**Prioridade: Mitigar primeiro, investigar depois**

```
┌─────────────────────────────────────────┐
│ O serviço pode ser restaurado          │
│ sem entender a causa raiz?              │
├─────────────────────────────────────────┤
│ SIM → Restaure primeiro, investigue    │
│       depois                            │
│ NÃO → Investigue causa provável e      │
│       implemente fix mínimo            │
└─────────────────────────────────────────┘
```

**Técnicas de mitigação:**

- Rollback de deploy recente
- Escalar recursos (pods, instâncias)
- Ativar feature flag
- Redirecionar tráfego
- Reiniciar serviços
- Failover para backup

**Durante investigação:**

- Documente todas as ações e hipóteses
- Comunique progresso regularmente
- Peça ajuda se necessário
- Não faça mudanças não documentadas

### 5. Resolução

**Critérios de resolução:**

- Serviço operando normalmente
- Métricas dentro dos SLOs
- Causa imediata endereçada
- Monitoramento confirmando estabilidade

**Ações:**

- Confirme resolução com métricas
- Comunique resolução aos stakeholders
- Mantenha monitoramento aumentado temporariamente

### 6. Pós-incidente

**Imediatamente após:**

- Documente timeline enquanto fresco
- Preserve logs e evidências
- Agende postmortem (até 5 dias úteis)

**Postmortem:**

- Análise de causa raiz
- Identificação de action items
- Compartilhamento de aprendizados

## Comunicação Durante Incidente

### Templates

**Início:**

```
[INCIDENTE] [Serviço] - [Descrição breve]
Severidade: [SEV1/2/3/4]
Impacto: [Descrição do impacto]
Status: Investigando
IC: [Nome]
Próxima atualização: [Tempo]
```

**Atualização:**

```
[ATUALIZAÇÃO] [Serviço] - [HH:MM]
Status: [Investigando / Mitigando / Mitigado]
Progresso: [O que foi feito]
Próximos passos: [O que será feito]
Próxima atualização: [Tempo]
```

**Resolução:**

```
[RESOLVIDO] [Serviço] - [HH:MM]
Duração total: [X horas/minutos]
Causa: [Breve descrição]
Resolução: [O que foi feito]
Postmortem: [Link ou data agendada]
```

### Frequência de Atualizações

| Severidade | Frequência        |
| ---------- | ----------------- |
| SEV1       | A cada 15 minutos |
| SEV2       | A cada 30 minutos |
| SEV3       | A cada hora       |
| SEV4       | No início e fim   |

## Checklist de Resposta

### Durante o Incidente

- [ ] Severidade avaliada e comunicada
- [ ] Papéis designados (IC, Tech Lead, etc.)
- [ ] Canal de comunicação estabelecido
- [ ] Stakeholders notificados
- [ ] Timeline sendo documentada
- [ ] Atualizações regulares enviadas

### Pós-resolução

- [ ] Resolução comunicada
- [ ] Timeline documentada
- [ ] Evidências preservadas
- [ ] Postmortem agendado
- [ ] Monitoramento aumentado ativo
