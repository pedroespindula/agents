---
name: incident-response
description: Documentar processos de resposta a incidentes
license: MIT
compatibility: opencode
metadata:
  audience: sre-engineers
  workflow: operations
---

## What I do

Documentar processos de resposta a incidentes:

- Definir severidades e criterios
- Estabelecer papeis e responsabilidades
- Criar templates de comunicacao
- Documentar fluxos de escalacao
- Padronizar checklists de resposta

## When to use me

Use this skill when you need to document incident response processes. This is especially helpful when:

- Creating incident response procedures
- Defining severity levels and criteria
- Establishing communication templates
- Documenting escalation paths

## How I work

I follow incident response best practices:

1. **Mitigar primeiro**: Restaure o servico antes de investigar
2. **Comunicar sempre**: Mantenha stakeholders informados
3. **Documentar tudo**: Registre acoes e decisoes
4. **Escalar quando necessario**: Nao hesite em pedir ajuda

## Severity Levels

| Severidade | Criterios                    | Resposta                 |
| ---------- | ---------------------------- | ------------------------ |
| SEV1       | Sistema critico indisponivel | War room imediato        |
| SEV2       | Degradacao significativa     | Equipe dedicada          |
| SEV3       | Impacto limitado             | Investigacao prioritaria |
| SEV4       | Minimo/nenhum impacto        | Proximo dia util         |

## Incident Roles

- **Incident Commander (IC)**: Coordena resposta
- **Tech Lead**: Lidera investigacao tecnica
- **Comunicacao**: Atualiza stakeholders
- **Scribe**: Documenta timeline

## Communication Templates

### Inicio de Incidente

```
[INCIDENTE] [Servico] - [Descricao breve]
Severidade: [SEV1/2/3/4]
Impacto: [Descricao do impacto]
Status: Investigando
IC: [Nome]
Proxima atualizacao: [Tempo]
```

### Atualizacao

```
[ATUALIZACAO] [Servico] - [HH:MM]
Status: [Investigando/Mitigando/Mitigado]
Progresso: [O que foi feito]
Proximos passos: [O que sera feito]
```

### Resolucao

```
[RESOLVIDO] [Servico] - [HH:MM]
Duracao total: [X horas/minutos]
Causa: [Breve descricao]
Resolucao: [O que foi feito]
Postmortem: [Link ou data]
```

## Update Frequency

| Severidade | Frequencia        |
| ---------- | ----------------- |
| SEV1       | A cada 15 minutos |
| SEV2       | A cada 30 minutos |
| SEV3       | A cada hora       |
| SEV4       | No inicio e fim   |

## Restrictions

- **Priorize recuperacao** sobre investigacao durante incidentes
- **Documente todas as acoes** — sera util no postmortem
- **Nao faca mudancas nao documentadas** durante incidentes
- **Escale cedo** — melhor escalar e nao precisar do que o contrario
