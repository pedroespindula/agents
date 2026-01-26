# Como Revisar Pull Requests

Este documento descreve o processo para revisão completa de Pull Requests.

## Objetivo

Analisar um PR de forma holística, considerando não apenas o código, mas também descrição, testes, documentação e impacto no projeto.

## Fluxo de Revisão de PR

### 1. Análise da Descrição

Antes de olhar o código, revise a descrição do PR:

- [ ] Título é claro e descritivo?
- [ ] Descrição explica o "porquê" da mudança?
- [ ] Tipo de mudança está identificado?
- [ ] Issues relacionadas estão linkadas?
- [ ] Há instruções de como testar?
- [ ] Breaking changes estão documentadas?
- [ ] Screenshots/demos estão incluídos (se UI)?

**Se a descrição está inadequada**, peça melhorias antes de revisar o código.

### 2. Análise de Escopo

Verifique se o PR está bem delimitado:

- [ ] PR tem foco único (feature, bugfix, refactor)?
- [ ] Tamanho é razoável (< 400 linhas idealmente)?
- [ ] Não mistura mudanças não relacionadas?
- [ ] Não inclui refatorações desnecessárias?

**Se o escopo está muito amplo**, sugira dividir em PRs menores.

### 3. Análise de Commits

Revise o histórico de commits:

- [ ] Commits são atômicos e focados?
- [ ] Mensagens seguem convenções do projeto?
- [ ] Histórico é limpo (sem "fix typo", "wip")?
- [ ] Não há commits de merge desnecessários?

**Se o histórico está confuso**, sugira rebase/squash.

### 4. Análise de Código

Execute a revisão de código completa conforme `code-review.md`:

- Funcionalidade
- Corretude
- Segurança
- Performance
- Manutenibilidade
- Testes
- Documentação

### 5. Análise de Testes

Foque especialmente em testes:

#### 5.1 Cobertura

```bash
# Execute cobertura se disponível
npm run test:coverage
```

- [ ] Código novo tem cobertura adequada (>80%)?
- [ ] Casos principais estão testados?
- [ ] Edge cases estão testados?
- [ ] Testes de integração quando apropriado?

#### 5.2 Qualidade dos Testes

- [ ] Testes são legíveis e bem nomeados?
- [ ] Testes são independentes?
- [ ] Não há testes flaky?
- [ ] Mocks são apropriados?
- [ ] Assertions são específicas?

### 6. Análise de Impacto

Considere o impacto da mudança:

#### 6.1 Compatibilidade

- [ ] Há breaking changes?
- [ ] APIs públicas foram modificadas?
- [ ] Migrações de dados são necessárias?
- [ ] Versão deve ser bumped?

#### 6.2 Dependências

- [ ] Novas dependências são justificadas?
- [ ] Dependências têm boa manutenção?
- [ ] Não há vulnerabilidades conhecidas?
- [ ] Tamanho do bundle é aceitável?

```bash
# Verifique vulnerabilidades
npm audit

# Verifique tamanho
npm run build
ls -lh dist/
```

#### 6.3 Performance

- [ ] Mudança não degrada performance?
- [ ] Benchmarks foram executados (se relevante)?
- [ ] Não há regressões de performance?

### 7. Análise de Documentação

Verifique se documentação está atualizada:

- [ ] README reflete mudanças (se necessário)?
- [ ] Documentação de API atualizada?
- [ ] CHANGELOG atualizado?
- [ ] Comentários de código adequados?
- [ ] Exemplos de uso atualizados?

### 8. Verificação de CI/CD

Revise status dos checks automatizados:

- [ ] Todos os testes passam?
- [ ] Linters passam?
- [ ] Build é bem-sucedido?
- [ ] Checks de segurança passam?
- [ ] Cobertura atende mínimo?

**Se checks falham**, peça correção antes de continuar revisão.

### 9. Teste Local (Opcional)

Para mudanças complexas, considere testar localmente:

```bash
# Checkout do PR
gh pr checkout <número>

# Instale dependências
npm install

# Execute testes
npm test

# Execute aplicação
npm run dev

# Teste manualmente
```

### 10. Compilação do Feedback

Organize feedback em seções:

#### Estrutura Sugerida

```markdown
## Resumo

[Visão geral da revisão: aprovado com sugestões, mudanças necessárias, etc.]

## Pontos Positivos

- [Aspecto bem feito 1]
- [Aspecto bem feito 2]

## Problemas Críticos 🔴

[Problemas que devem ser corrigidos antes do merge]

## Problemas Importantes 🟡

[Problemas que deveriam ser corrigidos]

## Sugestões 🔵

[Melhorias opcionais]

## Nitpicks 💡

[Questões menores, opcionais]

## Checklist

- [ ] Código revisado
- [ ] Testes revisados
- [ ] Documentação revisada
- [ ] CI/CD verificado

## Próximos Passos

[O que o autor deve fazer]
```

### 11. Feedback Iterativo

Após o autor fazer mudanças:

- [ ] Revise apenas as mudanças novas
- [ ] Verifique se feedback anterior foi endereçado
- [ ] Confirme que não surgiram novos problemas
- [ ] Reconheça melhorias feitas

## Critérios de Aprovação

Um PR está pronto para merge quando:

- ✅ Funcionalidade está correta e completa
- ✅ Não há bugs ou vulnerabilidades conhecidas
- ✅ Código segue padrões do projeto
- ✅ Testes têm cobertura adequada
- ✅ Documentação está atualizada
- ✅ CI/CD passa completamente
- ✅ Feedback crítico foi endereçado
- ✅ Não há dívida técnica desnecessária

## Critérios de Rejeição

Um PR deve ser rejeitado se:

- ❌ Contém bugs críticos ou vulnerabilidades
- ❌ Quebra funcionalidades existentes
- ❌ Não segue padrões fundamentais do projeto
- ❌ Não tem testes para código crítico
- ❌ Escopo está muito amplo e confuso
- ❌ Autor não responde a feedback crítico

## Tipos de Feedback

### Bloqueante (Deve Corrigir)

Use para problemas críticos que impedem merge:

```markdown
🔴 **BLOQUEANTE**: [Descrição do problema]

[Explicação detalhada]

**Deve ser corrigido antes do merge.**
```

### Não-Bloqueante (Deveria Corrigir)

Use para problemas importantes mas não críticos:

```markdown
🟡 **Importante**: [Descrição do problema]

[Explicação]

**Recomendo fortemente corrigir, mas não bloqueia merge se houver justificativa.**
```

### Sugestão (Considere)

Use para melhorias opcionais:

```markdown
🔵 **Sugestão**: [Descrição da melhoria]

[Explicação]

**Considere implementar em um PR futuro se fizer sentido.**
```

### Pergunta

Use quando precisar de esclarecimentos:

```markdown
❓ **Pergunta**: [Sua dúvida]

[Contexto]

**Pode explicar a razão dessa abordagem?**
```

## Checklist Final

Antes de enviar a revisão:

- [ ] Revisei descrição, commits e código
- [ ] Verifiquei testes e cobertura
- [ ] Analisei impacto e compatibilidade
- [ ] Confirmei que CI/CD passa
- [ ] Organizei feedback por severidade
- [ ] Reconheci aspectos positivos
- [ ] Forneci feedback construtivo e acionável
- [ ] Indiquei claramente o que é bloqueante
- [ ] Tom é profissional e respeitoso

## Usando GitHub CLI

Para revisar PRs via CLI:

```bash
# Listar PRs
gh pr list

# Ver detalhes de um PR
gh pr view <número>

# Ver diff
gh pr diff <número>

# Checkout para testar
gh pr checkout <número>

# Comentar
gh pr comment <número> --body "Seu feedback"

# Revisar
gh pr review <número> --approve
gh pr review <número> --request-changes --body "Feedback"
gh pr review <número> --comment --body "Sugestões"
```

## Template de Resposta

Use o template `pr-feedback.md` para estruturar a revisão completa do PR.
