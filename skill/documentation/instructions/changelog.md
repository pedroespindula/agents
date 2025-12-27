# Como Manter Changelogs

Este documento descreve o processo para manutenção de changelogs de projeto.

## Princípios

- **Para humanos**: Escrito para pessoas, não máquinas
- **Organizado**: Agrupado por tipo de mudança
- **Cronológico**: Versão mais recente primeiro
- **Linkado**: Referências para PRs/issues quando relevante

## Formato Keep a Changelog

Seguimos o padrão [Keep a Changelog](https://keepachangelog.com/):

```markdown
# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [Unreleased]

### Added

- Nova funcionalidade X

## [1.2.0] - 2024-01-15

### Added

- Suporte a autenticação OAuth2
- Endpoint para exportação de dados

### Changed

- Melhoria de performance na listagem de usuários

### Fixed

- Correção de bug no cálculo de totais

## [1.1.0] - 2024-01-01

...
```

## Categorias de Mudanças

Use estas categorias na ordem indicada:

| Categoria      | Descrição                              | Exemplo                          |
| -------------- | -------------------------------------- | -------------------------------- |
| **Added**      | Novas funcionalidades                  | "Adicionado endpoint de busca"   |
| **Changed**    | Mudanças em funcionalidades existentes | "Atualizado formato de resposta" |
| **Deprecated** | Funcionalidades que serão removidas    | "Deprecado parâmetro X"          |
| **Removed**    | Funcionalidades removidas              | "Removido suporte a API v1"      |
| **Fixed**      | Correções de bugs                      | "Corrigido erro de validação"    |
| **Security**   | Correções de segurança                 | "Corrigida vulnerabilidade XSS"  |

## Boas Práticas

### O que Incluir

- Mudanças que afetam usuários/consumidores
- Breaking changes (sempre destacar)
- Deprecações
- Correções de segurança
- Novas funcionalidades significativas

### O que NÃO Incluir

- Mudanças internas sem impacto externo
- Refatorações que não mudam comportamento
- Atualizações de dependências (exceto se relevante)
- Correções de typos em código

### Como Escrever Entradas

**Bom**:

```markdown
- Adicionado suporte a paginação no endpoint `/users` com parâmetros `page` e `limit`
- Corrigido bug onde emails com caracteres especiais não eram validados corretamente (#123)
```

**Ruim**:

```markdown
- Mudanças no código
- Fix bug
- Atualização
```

## Versionamento Semântico

### Formato: MAJOR.MINOR.PATCH

- **MAJOR**: Breaking changes (incompatível com versão anterior)
- **MINOR**: Novas funcionalidades (compatível com versão anterior)
- **PATCH**: Correções de bugs (compatível com versão anterior)

### Exemplos

| Mudança             | Versão        |
| ------------------- | ------------- |
| Correção de bug     | 1.0.0 → 1.0.1 |
| Nova funcionalidade | 1.0.1 → 1.1.0 |
| Breaking change     | 1.1.0 → 2.0.0 |

## Processo de Atualização

### Durante Desenvolvimento

1. Adicione entrada em `[Unreleased]` ao mergear PR
2. Use a categoria apropriada
3. Inclua link para PR/issue se relevante

### No Release

1. Mova entradas de `[Unreleased]` para nova versão
2. Adicione número da versão e data
3. Crie nova seção `[Unreleased]` vazia
4. Atualize links de comparação (se usar)

## Links de Comparação

No final do arquivo, adicione links para comparar versões:

```markdown
[Unreleased]: https://github.com/org/repo/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/org/repo/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/org/repo/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/org/repo/releases/tag/v1.0.0
```
