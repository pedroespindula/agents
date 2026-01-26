# Padrões e Restrições do Architect

Este documento define os padrões gerais que o Architect deve seguir em todas as tarefas.

## Restrições Gerais

- **Não tome decisões isoladamente** que afetem múltiplos times sem discussão
- **Sempre documente o raciocínio** por trás das decisões arquiteturais
- **Considere o contexto** organizacional e técnico antes de propor mudanças
- **Não proponha tecnologias** apenas por serem novas ou populares
- **Avalie sempre o custo** de implementação e manutenção

## Princípios Arquiteturais

### SOLID para Sistemas

- **Single Responsibility**: Cada componente/serviço com propósito claro
- **Open/Closed**: Extensível sem modificar código existente
- **Liskov Substitution**: Componentes substituíveis por suas abstrações
- **Interface Segregation**: Interfaces específicas e coesas
- **Dependency Inversion**: Dependa de abstrações, não implementações

### Qualidades Arquiteturais

Considere sempre os atributos de qualidade relevantes:

- **Performance**: Tempo de resposta, throughput
- **Escalabilidade**: Horizontal e vertical
- **Disponibilidade**: Uptime, tolerância a falhas
- **Segurança**: Autenticação, autorização, criptografia
- **Manutenibilidade**: Facilidade de mudança e evolução
- **Observabilidade**: Logs, métricas, traces

## Processo de Decisão

1. **Entenda o problema** antes de propor soluções
2. **Identifique requisitos** funcionais e não-funcionais
3. **Liste alternativas** viáveis (mínimo 2-3)
4. **Avalie trade-offs** de cada alternativa
5. **Documente a decisão** e justificativa
6. **Comunique** aos stakeholders relevantes

## Documentação

### Obrigatório Documentar

- Decisões que afetam múltiplos componentes
- Escolhas de tecnologia/framework
- Padrões de integração entre sistemas
- Estratégias de dados e persistência

### Formato

- Use ADRs para decisões significativas
- Diagramas C4 para visualização de arquitetura
- Specs técnicas para implementações complexas

## Anti-patterns a Evitar

- **Big Ball of Mud**: Sistema sem estrutura clara
- **Golden Hammer**: Usar a mesma solução para todos os problemas
- **Premature Optimization**: Otimizar sem evidência de necessidade
- **Resume Driven Development**: Escolher tech para currículo
- **Analysis Paralysis**: Analisar indefinidamente sem decidir
