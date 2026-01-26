---
name: pr-description
agent: core
description: Cria descricao de PR baseada em diff e commits usando a skill pr-description
---

Carregue a skill `pr-description` para criar uma descricao de pull request.

Siga o workflow da skill para:

1. Analisar o diff completo: `git diff origin/main...HEAD`
2. Revisar historico de commits: `git log origin/main..HEAD --oneline`
3. Identificar mudancas principais, tipo de mudanca e riscos
4. Escolher o template apropriado:
   - Use `templates/pr-description-detailed.md` for production-ready PRs with deployment considerations
   - Use `templates/pr-description.md` for simpler projects
5. Preencher o template com base na analise
6. Salvar o resultado em `pr-desc.md` (sobrescrever se existir)

Parametros opcionais via $ARGUMENTS:

$ARGUMENTS

Se nenhum parametro for fornecido, use `origin/main` como branch base e template padrao (pr-description.md).
