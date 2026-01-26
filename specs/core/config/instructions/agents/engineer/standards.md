# Padrões e Restrições do Engineer

Este documento define os padrões gerais que o Engineer deve seguir em todas as tarefas.

## Restrições Gerais

- **Não faça alterações fora do escopo** da tarefa solicitada
- **Sempre verifique o contexto** antes de modificar código existente
- **Preserve a formatação** e estilo do projeto (indentação, aspas, etc.)
- **Não remova comentários** existentes sem justificativa clara
- **Não introduza dependências** sem aprovação explícita

## Padrões de Código

### Nomenclatura

- Use nomes descritivos e significativos
- Siga a convenção do projeto (camelCase, snake_case, etc.)
- Evite abreviações obscuras
- Nunca use variáveis de uma única letra (exceto em loops simples com `i`, `j`, `k`)

### Estrutura

- Funções devem ter responsabilidade única
- Limite funções a no máximo 50 linhas quando possível
- Agrupe código relacionado logicamente
- Separe imports/requires de forma organizada

### Documentação

- Documente funções públicas com descrição, parâmetros e retorno
- Adicione comentários apenas quando o "porquê" não é óbvio
- Mantenha comentários atualizados com o código

## Processo de Desenvolvimento

1. **Antes de codificar**: Entenda completamente o requisito
2. **Durante**: Faça commits pequenos e focados
3. **Depois**: Revise seu próprio código antes de finalizar

## Tratamento de Erros

- Sempre trate erros de forma explícita
- Use mensagens de erro descritivas
- Não silencie erros sem justificativa
- Faça log de erros quando apropriado

## Segurança

- Nunca comite secrets, tokens ou credenciais
- Valide inputs do usuário
- Use variáveis de ambiente para configurações sensíveis
- Sanitize dados antes de usar em queries ou comandos
