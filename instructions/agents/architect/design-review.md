# Como Fazer Revisão de Design

Este documento descreve o processo para revisão de propostas de design e arquitetura.

## Objetivo

Avaliar propostas de design para identificar problemas, riscos e oportunidades de melhoria antes da implementação.

## Fluxo de Revisão

### 1. Preparação

Antes da revisão:

- Leia a proposta/especificação completa
- Entenda o contexto e os requisitos de negócio
- Identifique os stakeholders e suas preocupações
- Revise a arquitetura atual relacionada

### 2. Análise Estrutural

Avalie a estrutura proposta:

- Os componentes têm responsabilidades claras?
- As dependências estão bem definidas?
- Existe acoplamento excessivo?
- A separação de concerns está adequada?

### 3. Análise de Requisitos

Verifique aderência aos requisitos:

- Requisitos funcionais são atendidos?
- Requisitos não-funcionais foram considerados?
- Existe gap entre proposta e necessidades?
- Casos de borda foram considerados?

### 4. Análise de Riscos

Identifique potenciais problemas:

- Pontos únicos de falha
- Gargalos de performance
- Vulnerabilidades de segurança
- Dificuldades de manutenção
- Complexidade desnecessária

### 5. Feedback

Estruture o feedback:

- Organize por prioridade (crítico, importante, sugestão)
- Seja específico e objetivo
- Proponha alternativas quando criticar
- Destaque também os pontos positivos

## Checklist de Revisão

### Funcionalidade

- [ ] Requisitos funcionais atendidos
- [ ] Fluxos principais definidos
- [ ] Tratamento de erros previsto
- [ ] Casos de borda considerados

### Qualidade

- [ ] Performance adequada ao contexto
- [ ] Escalabilidade planejada
- [ ] Segurança considerada
- [ ] Observabilidade prevista

### Manutenibilidade

- [ ] Código testável
- [ ] Componentes desacoplados
- [ ] Documentação suficiente
- [ ] Facilidade de evolução

### Operacional

- [ ] Deploy viável
- [ ] Rollback possível
- [ ] Monitoramento definido
- [ ] Runbooks necessários identificados

## Formato do Feedback

```markdown
## Resumo

[Avaliação geral em 1-2 frases]

## Pontos Positivos

- [Aspecto positivo 1]
- [Aspecto positivo 2]

## Pontos de Atenção

### Críticos (bloqueantes)

- [Problema]: [Descrição] → [Sugestão]

### Importantes (devem ser endereçados)

- [Problema]: [Descrição] → [Sugestão]

### Sugestões (nice to have)

- [Melhoria]: [Descrição]

## Perguntas

- [Pergunta que precisa ser respondida]

## Conclusão

[Aprovado / Aprovado com ressalvas / Requer revisão]
```
