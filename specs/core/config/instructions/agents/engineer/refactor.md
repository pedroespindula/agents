# Como Conduzir Refatorações

Este documento descreve o processo para refatoração de código existente.

## Princípios de Refatoração

- **Não altere comportamento**: Refatoração muda estrutura, não funcionalidade
- **Pequenos passos**: Faça mudanças incrementais e verificáveis
- **Testes primeiro**: Garanta cobertura de testes antes de refatorar
- **Um objetivo por vez**: Foque em um tipo de melhoria por refatoração

## Fluxo de Refatoração

### 1. Avaliação

Antes de começar:

- Entenda o código atual completamente
- Identifique o problema específico a ser resolvido
- Verifique a cobertura de testes existente
- Defina o estado final desejado

### 2. Preparação

Prepare o terreno:

- Adicione testes se a cobertura for insuficiente
- Execute todos os testes e confirme que passam
- Crie um snapshot do comportamento atual (se aplicável)

### 3. Execução

Refatore em etapas:

1. Faça uma mudança pequena e isolada
2. Execute os testes
3. Confirme que o comportamento não mudou
4. Commite a mudança
5. Repita até atingir o objetivo

### 4. Validação Final

Após completar:

- Execute a suíte completa de testes
- Compare o comportamento antes/depois
- Revise o diff completo
- Verifique performance se relevante

## Tipos Comuns de Refatoração

### Extração

- **Extrair função**: Código duplicado ou muito longo
- **Extrair variável**: Expressões complexas
- **Extrair classe**: Responsabilidades misturadas

### Renomeação

- **Renomear variável/função**: Nome não reflete propósito
- **Renomear arquivo**: Organização do projeto

### Simplificação

- **Remover código morto**: Código não utilizado
- **Simplificar condicionais**: If/else complexos
- **Remover duplicação**: DRY (Don't Repeat Yourself)

### Reorganização

- **Mover função/classe**: Melhor localização
- **Agrupar parâmetros**: Muitos parâmetros em objeto

## Checklist de Refatoração

- [ ] Código original entendido
- [ ] Testes existentes passando
- [ ] Cobertura adequada para a área refatorada
- [ ] Mudanças feitas em pequenos incrementos
- [ ] Comportamento preservado
- [ ] Código mais limpo/legível após refatoração

## Sinais de Alerta

Pare e reavalie se:

- Os testes começarem a falhar inesperadamente
- A refatoração estiver crescendo além do escopo original
- Você estiver mudando comportamento sem intenção
- O código ficar mais complexo em vez de mais simples
