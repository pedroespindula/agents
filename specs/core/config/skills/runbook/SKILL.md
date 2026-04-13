---
name: runbook
description: Criar runbooks operacionais para alertas e incidentes
license: MIT
compatibility: opencode
metadata:
  audience: sre-engineers
  workflow: operations
---

## What I do

Criar runbooks operacionais vinculados a alertas especificos, documentando:

- Identificacao e descricao do alerta
- Impacto e urgencia
- Passos de diagnostico
- Causas comuns e resolucoes
- Mitigacoes de emergencia
- Processo de escalacao

## When to use me

Use this skill when you need to create an operational runbook for an alert. This is especially helpful when:

- Creating a new runbook for a new alert
- Documenting troubleshooting steps for an existing alert
- Standardizing incident response procedures

## How I work

I follow SRE runbook best practices:

1. **Clareza**: Passos devem ser claros e executaveis por qualquer engenheiro de plantao
2. **Completude**: Incluir todas as informacoes necessarias para diagnostico e resolucao
3. **Atualizacao**: Runbooks devem ser atualizados apos cada incidente
4. **Testabilidade**: Comandos devem ser testados e funcionais

## Template

```markdown
# Runbook: [Nome do Alerta]

## Identificacao

| Campo          | Valor                       |
| -------------- | --------------------------- |
| **Alerta**     | [Nome exato do alerta]      |
| **Severidade** | [Critical / Warning / Info] |
| **Servico**    | [Nome do servico]           |
| **Owner**      | [Time responsavel]          |

## Descricao do Alerta

[O que este alerta significa e por que e importante]

## Impacto

- [Impacto 1]
- [Impacto 2]

## Diagnostico

### Verificacoes Iniciais

\`\`\`bash

# Comandos de diagnostico

\`\`\`

### Dashboard

**Link**: [URL do dashboard]

## Causas Comuns

### Causa 1: [Nome]

**Sintomas**: [Lista]
**Verificacao**: [Comando]
**Resolucao**: [Passos]

## Mitigacoes de Emergencia

### Rollback

\`\`\`bash
[Comandos]
\`\`\`

### Escalar Recursos

\`\`\`bash
[Comandos]
\`\`\`

## Escalacao

| Nivel | Quem        | Contato   |
| ----- | ----------- | --------- |
| L1    | [Time]      | [Contato] |
| L2    | [Tech Lead] | [Contato] |
```

## Restrictions

- **Nao inclua credenciais** ou secrets nos runbooks
- **Teste todos os comandos** antes de documentar
- **Mantenha atualizado** apos cada incidente
- **Use linguagem clara** — evite jargoes desnecessarios
