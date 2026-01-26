---
name: postmortem
description: Documentar postmortems de incidentes de forma blameless
license: MIT
compatibility: opencode
metadata:
  audience: sre-engineers
  workflow: operations
---

## What I do

Documentar postmortems de incidentes seguindo cultura blameless:

- Resumo executivo do incidente
- Metricas de impacto
- Timeline detalhada
- Analise de causa raiz (5 Porques)
- O que deu certo e errado
- Action items priorizados
- Licoes aprendidas

## When to use me

Use this skill when you need to document a postmortem after an incident. This is especially helpful when:

- Documenting SEV1/SEV2 incidents
- Conducting root cause analysis
- Creating action items to prevent recurrence
- Sharing learnings with the organization

## How I work

I follow blameless postmortem best practices:

1. **Blameless**: Foque em sistemas, nao em pessoas
2. **Factual**: Baseie-se em fatos e evidencias
3. **Acionavel**: Action items devem ser especificos e atribuidos
4. **Educativo**: Compartilhe aprendizados amplamente

## Template

```markdown
# Postmortem: [Titulo do Incidente]

## Metadados

| Campo                  | Valor                          |
| ---------------------- | ------------------------------ |
| **Data do Incidente**  | [YYYY-MM-DD]                   |
| **Severidade**         | [SEV1/SEV2/SEV3/SEV4]          |
| **Incident Commander** | [Nome]                         |
| **Status**             | [Rascunho/Em Revisao/Completo] |

## Resumo Executivo

[2-3 frases resumindo o que aconteceu, impacto e causa raiz]

## Impacto

| Metrica               | Valor             |
| --------------------- | ----------------- |
| **Duracao total**     | [X horas/minutos] |
| **Usuarios afetados** | [Numero ou %]     |

## Timeline

| Hora (UTC) | Evento   |
| ---------- | -------- |
| HH:MM      | [Evento] |

## Causa Raiz

**5 Porques:**

1. Porque [causa imediata]
2. Porque [causa anterior]
3. Porque [causa anterior]
4. Porque [causa anterior]
5. Porque [causa raiz fundamental]

## O Que Deu Certo

- [Aspecto positivo]

## O Que Deu Errado

- [Problema]

## Action Items

| #   | Acao   | Responsavel | Prazo  | Status   |
| --- | ------ | ----------- | ------ | -------- |
| 1   | [Acao] | [Nome]      | [Data] | Pendente |

## Licoes Aprendidas

- [Licao]
```

## Restrictions

- **Nao culpe pessoas** — foque em melhorar sistemas
- **Seja factual** — baseie-se em evidencias
- **Priorize action items** — nem tudo precisa ser feito
- **Compartilhe amplamente** — postmortems sao para aprender
