# Padrões e Restrições do SRE

Este documento define os padrões gerais que o SRE deve seguir em todas as tarefas.

## Restrições Gerais

- **Não faça mudanças em produção** sem aprovação e plano de rollback
- **Documente todas as ações** durante incidentes
- **Não culpe pessoas** — foque em melhorar sistemas
- **Priorize a recuperação** sobre a investigação durante incidentes
- **Sempre tenha um plano B** para mudanças críticas

## Princípios SRE

### Error Budget

- Confiabilidade 100% não é o objetivo
- Use error budget para balancear velocidade vs estabilidade
- Quando budget esgotado, priorize confiabilidade

### Eliminação de Toil

Toil é trabalho:

- Manual e repetitivo
- Automatizável
- Sem valor duradouro
- Que cresce linearmente com o sistema

**Meta**: Máximo 50% do tempo em toil.

### Simplicidade

- Sistemas simples são mais confiáveis
- Cada componente adicional é um ponto de falha potencial
- Prefira soluções boring que funcionam

## Hierarquia de Confiabilidade

```
         /\
        /SLA\         (Compromisso externo)
       /------\
      /  SLO   \      (Objetivo interno)
     /----------\
    /    SLI     \    (Métricas)
   /--------------\
  /  Monitoramento \  (Coleta de dados)
 /------------------\
```

## Padrões de Observabilidade

### Logs

- Estruturados (JSON)
- Com correlation IDs
- Níveis apropriados (DEBUG, INFO, WARN, ERROR)
- Sem dados sensíveis

### Métricas

- USE para recursos (Utilization, Saturation, Errors)
- RED para serviços (Rate, Errors, Duration)
- Nomeação consistente
- Labels padronizadas

### Traces

- Span IDs propagados entre serviços
- Atributos relevantes incluídos
- Sampling adequado para volume

## Padrões de Alertas

### Características de Bons Alertas

- **Acionável**: Requer ação humana
- **Urgente**: Precisa de atenção imediata
- **Contextual**: Inclui informações para diagnóstico
- **Único**: Não duplica outros alertas

### Severidades

| Severidade   | Resposta                    | Exemplo                   |
| ------------ | --------------------------- | ------------------------- |
| P1 - Crítico | Imediata, 24/7              | Sistema fora do ar        |
| P2 - Alto    | < 1 hora, horário comercial | Degradação significativa  |
| P3 - Médio   | < 4 horas                   | Funcionalidade secundária |
| P4 - Baixo   | Próximo dia útil            | Warning, tendência        |

## Resposta a Incidentes

### Papéis

- **Incident Commander (IC)**: Coordena resposta
- **Tech Lead**: Lidera investigação técnica
- **Comunicação**: Atualiza stakeholders
- **Scribe**: Documenta timeline

### Prioridades

1. **Mitigar** — Restaurar serviço
2. **Comunicar** — Informar afetados
3. **Investigar** — Entender causa
4. **Documentar** — Registrar para postmortem

## Mudanças em Produção

### Checklist Pré-deploy

- [ ] Mudança revisada por peer
- [ ] Testes passando
- [ ] Rollback plan documentado
- [ ] Métricas de sucesso definidas
- [ ] Janela de deploy apropriada
- [ ] Comunicação feita se necessário

### Rollback

- Sempre tenha um plano de rollback
- Teste o rollback antes de precisar
- Defina critérios claros para rollback
- Documente o processo

## Anti-patterns a Evitar

- **Alert fatigue**: Muitos alertas que são ignorados
- **Hero culture**: Dependência de indivíduos específicos
- **Firefighting constante**: Sempre reagindo, nunca prevenindo
- **Blame game**: Culpar pessoas em vez de melhorar sistemas
- **Documentação desatualizada**: Runbooks que não funcionam
