# Como Analisar Sistemas

Este documento descreve o processo para análise de sistemas existentes.

## Objetivo

Compreender a arquitetura atual de um sistema para identificar características, problemas e oportunidades de evolução.

## Fluxo de Análise

### 1. Visão Geral

Comece pelo alto nível:

- Qual o propósito do sistema?
- Quem são os usuários/consumidores?
- Quais são os principais fluxos de negócio?
- Como o sistema se integra com outros?

### 2. Mapeamento de Componentes

Identifique os componentes:

- Serviços/aplicações existentes
- Bancos de dados e storages
- Filas e sistemas de mensageria
- APIs e integrações externas
- Infraestrutura (cloud, containers, etc.)

### 3. Análise de Dependências

Mapeie as relações:

- Dependências entre componentes internos
- Dependências de sistemas externos
- Fluxo de dados entre componentes
- Pontos de integração críticos

### 4. Avaliação de Qualidade

Analise os atributos de qualidade:

#### Performance

- Tempos de resposta atuais
- Throughput suportado
- Gargalos identificados

#### Escalabilidade

- Limites atuais
- Estratégia de scaling
- Pontos de contenção

#### Disponibilidade

- SLA atual
- Pontos únicos de falha
- Estratégia de recuperação

#### Segurança

- Autenticação/autorização
- Criptografia de dados
- Vulnerabilidades conhecidas

#### Observabilidade

- Cobertura de logs
- Métricas disponíveis
- Capacidade de troubleshooting

### 5. Identificação de Problemas

Documente issues encontrados:

- Débito técnico acumulado
- Padrões inconsistentes
- Código/componentes legados
- Documentação desatualizada

### 6. Recomendações

Proponha melhorias:

- Quick wins (baixo esforço, alto impacto)
- Melhorias estruturais (médio prazo)
- Transformações (longo prazo)

## Template de Análise

```markdown
# Análise do Sistema: [Nome]

## Visão Geral

- **Propósito**: [Descrição]
- **Usuários**: [Quem usa]
- **Criticidade**: [Alta/Média/Baixa]

## Arquitetura Atual

### Componentes

| Componente | Tipo             | Tecnologia | Responsabilidade |
| ---------- | ---------------- | ---------- | ---------------- |
| [Nome]     | [Serviço/DB/etc] | [Tech]     | [O que faz]      |

### Diagrama

[Diagrama C4 ou similar]

### Integrações

- [Sistema A] ↔ [Protocolo] ↔ [Sistema B]

## Avaliação

### Pontos Fortes

- [Aspecto positivo]

### Pontos Fracos

- [Problema identificado]

### Riscos

- [Risco]: [Impacto] / [Probabilidade]

## Recomendações

### Curto Prazo

- [Ação]: [Benefício esperado]

### Médio Prazo

- [Ação]: [Benefício esperado]

### Longo Prazo

- [Ação]: [Benefício esperado]
```

## Ferramentas Úteis

- **Diagramas**: C4 Model, Mermaid, PlantUML
- **Dependências**: Dependency graphs, import analyzers
- **Métricas**: APM tools, profilers
- **Documentação**: Wikis, ADRs existentes
