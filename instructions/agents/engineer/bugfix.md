# Como Corrigir Bugs

Este documento descreve o processo para correção de bugs.

## Princípios de Correção

- **Entenda antes de corrigir**: Nunca corrija sem entender a causa raiz
- **Reproduza primeiro**: Confirme o bug antes de tentar corrigir
- **Mínima intervenção**: Altere apenas o necessário para corrigir
- **Previna recorrência**: Adicione teste que captura o bug

## Fluxo de Correção

### 1. Reprodução

Confirme o problema:

- Reproduza o bug localmente
- Documente os passos exatos para reproduzir
- Identifique as condições necessárias (dados, estado, ambiente)
- Capture evidências (logs, screenshots, stack traces)

### 2. Investigação

Encontre a causa raiz:

- Analise logs e mensagens de erro
- Use debugger se necessário
- Trace o fluxo de execução
- Identifique onde o comportamento diverge do esperado

### 3. Análise de Impacto

Antes de corrigir:

- Identifique todos os lugares afetados
- Verifique se a correção pode causar efeitos colaterais
- Considere se outros bugs similares podem existir

### 4. Correção

Implemente a solução:

1. Escreva um teste que falha reproduzindo o bug
2. Implemente a correção mínima necessária
3. Confirme que o teste agora passa
4. Execute a suíte completa de testes

### 5. Validação

Confirme a correção:

- Reproduza o cenário original e confirme que foi corrigido
- Teste cenários relacionados
- Verifique que não houve regressão

## Checklist de Bugfix

- [ ] Bug reproduzido localmente
- [ ] Causa raiz identificada
- [ ] Teste escrito que captura o bug
- [ ] Correção implementada
- [ ] Teste do bug passando
- [ ] Suíte completa de testes passando
- [ ] Cenário original validado

## Classificação de Bugs

### Por Severidade

- **Crítico**: Sistema inutilizável, perda de dados
- **Alto**: Funcionalidade principal comprometida
- **Médio**: Funcionalidade secundária afetada
- **Baixo**: Inconveniência menor, cosmético

### Por Tipo

- **Lógico**: Erro na lógica de negócio
- **Runtime**: Erro em tempo de execução (null pointer, etc.)
- **Integração**: Falha na comunicação entre componentes
- **Performance**: Degradação de desempenho
- **Segurança**: Vulnerabilidade exploratável

## Boas Práticas

- Documente a causa raiz no commit/PR
- Considere se é necessário comunicar stakeholders
- Verifique se existe issue relacionada para vincular
- Atualize documentação se o bug revelou gap de conhecimento
