---
name: pr-description
description: Criar descricoes de pull request claras e completas baseadas em diff e commits
license: MIT
compatibility: opencode
metadata:
  audience: developers
  workflow: version-control
---

## What I do

- Analisar diff e commits para entender mudancas
- Criar descricoes de PR claras e informativas
- Aplicar templates apropriados (generico ou especifico do projeto)
- Identificar tipo de mudanca (feature, bugfix, refactor, etc.)
- Destacar riscos e impactos (breaking changes, migrations, etc.)
- Sugerir checklist de validacao

## When to use me

Use this skill when you need to create pull request descriptions. This is especially helpful when:

- Creating a new PR and need to write the description
- Updating an existing PR description to be more complete
- Standardizing PR descriptions across a team
- Documenting what changed and why for reviewers
- Identifying risks and deployment considerations

**Note**: For reviewing PRs use `pr-review`, for commit messages use `commit-conventions`.

## How I work

I follow PR description best practices:

1. **Analise primeiro**: Reviso diff e commits antes de escrever
2. **Clareza**: Explico "o que" e "por que", nao apenas "como"
3. **Contexto**: Forneço informacao suficiente para reviewers
4. **Riscos**: Identifico breaking changes, migrations, deployment concerns
5. **Templates**: Uso template apropriado (generico ou especifico do projeto)

## Restrictions

- Sempre analisar diff completo antes de criar descricao
- Focar no "why" (motivacao) e "what" (mudancas), nao no "how" (implementacao)
- Identificar breaking changes e riscos de deployment
- Usar template apropriado para o contexto do projeto
- Manter descricao concisa mas completa

## Available Resources

When you need specific guidance, load these files:

### Standards and Guidelines

- `skill/pr-description/standards.md` - Padroes e boas praticas para descricoes de PR

### Instructions by Task Type

- `skill/pr-description/instructions/general.md` - Guia completo para criar descricoes efetivas

### Templates

- `skill/pr-description/templates/pr-description.md` - Template generico reutilizavel
- `skill/pr-description/templates/pr-description-detailed.md` - Template detalhado para PRs production-ready

Use the Read tool to load the appropriate file based on the task at hand.
