# Template: Postmortem de Incidente

Use este template para documentar postmortems de incidentes de forma blameless.

---

# Postmortem: [Título do Incidente]

## Metadados

| Campo                  | Valor                              |
| ---------------------- | ---------------------------------- |
| **Data do Incidente**  | [YYYY-MM-DD]                       |
| **Data do Postmortem** | [YYYY-MM-DD]                       |
| **Severidade**         | [SEV1 / SEV2 / SEV3 / SEV4]        |
| **Autor**              | [Nome]                             |
| **Incident Commander** | [Nome]                             |
| **Status**             | [Rascunho / Em Revisão / Completo] |

## Resumo Executivo

[2-3 frases resumindo o que aconteceu, o impacto e a causa raiz]

## Impacto

### Métricas de Impacto

| Métrica                  | Valor             |
| ------------------------ | ----------------- |
| **Duração total**        | [X horas/minutos] |
| **Tempo para detecção**  | [X minutos]       |
| **Tempo para mitigação** | [X minutos]       |
| **Usuários afetados**    | [Número ou %]     |
| **Requests com erro**    | [Número ou %]     |
| **Receita afetada**      | [Se aplicável]    |

### Descrição do Impacto

[Descrição qualitativa do impacto para usuários e negócio]

## Timeline

| Hora (UTC) | Evento                           |
| ---------- | -------------------------------- |
| HH:MM      | [Evento que iniciou o incidente] |
| HH:MM      | [Primeiro alerta disparado]      |
| HH:MM      | [Primeira resposta/ação]         |
| HH:MM      | [Escalação se houve]             |
| HH:MM      | [Mitigação aplicada]             |
| HH:MM      | [Serviço restaurado]             |
| HH:MM      | [Incidente declarado resolvido]  |

## Causa Raiz

### Análise

[Descrição detalhada da causa raiz. Use técnica dos "5 Porquês" se útil]

**Por que o incidente aconteceu?**

1. Porque [causa imediata]
2. Porque [causa anterior]
3. Porque [causa anterior]
4. Porque [causa anterior]
5. Porque [causa raiz fundamental]

### Diagrama (se aplicável)

```
[Diagrama mostrando a cadeia de eventos ou arquitetura afetada]
```

## O Que Deu Certo

- [Aspecto positivo 1 - ex: Alertas funcionaram corretamente]
- [Aspecto positivo 2 - ex: Runbook estava atualizado]
- [Aspecto positivo 3 - ex: Comunicação foi eficiente]

## O Que Deu Errado

- [Problema 1 - ex: Detecção demorou X minutos]
- [Problema 2 - ex: Faltou runbook para cenário Y]
- [Problema 3 - ex: Rollback não estava automatizado]

## Onde Tivemos Sorte

- [Fator de sorte 1 - ex: Aconteceu fora do horário de pico]
- [Fator de sorte 2 - ex: Apenas um shard foi afetado]

## Action Items

### Críticos (Devem ser feitos)

| #   | Ação                             | Responsável | Prazo  | Status   | Ticket |
| --- | -------------------------------- | ----------- | ------ | -------- | ------ |
| 1   | [Ação para prevenir recorrência] | [Nome]      | [Data] | Pendente | [Link] |
| 2   | [Ação para melhorar detecção]    | [Nome]      | [Data] | Pendente | [Link] |

### Importantes (Deveriam ser feitos)

| #   | Ação                   | Responsável | Prazo  | Status   | Ticket |
| --- | ---------------------- | ----------- | ------ | -------- | ------ |
| 3   | [Melhoria de processo] | [Nome]      | [Data] | Pendente | [Link] |
| 4   | [Documentação/runbook] | [Nome]      | [Data] | Pendente | [Link] |

### Nice to Have (Podem ser feitos)

| #   | Ação                 | Responsável | Prazo  | Status   | Ticket |
| --- | -------------------- | ----------- | ------ | -------- | ------ |
| 5   | [Melhoria adicional] | [Nome]      | [Data] | Pendente | [Link] |

## Lições Aprendidas

### Para a Equipe

- [Lição 1]
- [Lição 2]

### Para a Organização

- [Lição que pode beneficiar outros times]

## Apêndices

### Logs Relevantes

```
[Trechos de logs importantes]
```

### Gráficos

[Links ou imagens de dashboards durante o incidente]

### Referências

- [Link para canal do incidente]
- [Link para alertas]
- [Link para PRs de fix]

---

## Revisões

| Data   | Revisor | Comentários   |
| ------ | ------- | ------------- |
| [Data] | [Nome]  | [Comentários] |

## Aprovação

| Nome   | Papel               | Data |
| ------ | ------------------- | ---- |
| [Nome] | Tech Lead           |      |
| [Nome] | Engineering Manager |      |
