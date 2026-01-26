# Template: Especificação Técnica

Use este template para documentar especificações técnicas de funcionalidades ou sistemas.

---

# Especificação Técnica: [Título]

## Metadados

| Campo         | Valor                              |
| ------------- | ---------------------------------- |
| **Autor**     | [Nome]                             |
| **Data**      | [YYYY-MM-DD]                       |
| **Status**    | [Rascunho / Em Revisão / Aprovado] |
| **Revisores** | [Lista de revisores]               |

## Resumo Executivo

[1-2 parágrafos resumindo o que será construído e por quê]

## Contexto e Motivação

### Problema

[Descrição clara do problema a ser resolvido]

### Impacto

[Quem é afetado e como]

### Objetivos

- [Objetivo 1]
- [Objetivo 2]

### Não-Objetivos

- [O que está explicitamente fora do escopo]

## Requisitos

### Funcionais

| ID    | Requisito   | Prioridade  |
| ----- | ----------- | ----------- |
| RF-01 | [Descrição] | Must have   |
| RF-02 | [Descrição] | Should have |

### Não-Funcionais

| ID     | Requisito       | Métrica           |
| ------ | --------------- | ----------------- |
| RNF-01 | Performance     | [Ex: < 200ms p99] |
| RNF-02 | Disponibilidade | [Ex: 99.9%]       |

## Design Técnico

### Visão Geral

[Diagrama de alto nível e descrição da arquitetura]

### Componentes

#### [Componente 1]

- **Responsabilidade**: [O que faz]
- **Tecnologia**: [Stack utilizada]
- **Interfaces**: [APIs expostas/consumidas]

#### [Componente 2]

- **Responsabilidade**: [O que faz]
- **Tecnologia**: [Stack utilizada]
- **Interfaces**: [APIs expostas/consumidas]

### Modelo de Dados

[Diagrama ER ou descrição das entidades principais]

```
[Exemplo de schema ou estrutura de dados]
```

### APIs

#### [Endpoint 1]

```
[Método] [Path]
Request: [Estrutura]
Response: [Estrutura]
```

### Fluxos Principais

#### [Fluxo 1: Nome]

1. [Passo 1]
2. [Passo 2]
3. [Passo 3]

[Diagrama de sequência se necessário]

## Considerações

### Segurança

- [Consideração de segurança 1]
- [Consideração de segurança 2]

### Performance

- [Estratégia de otimização]
- [Pontos de atenção]

### Escalabilidade

- [Como o sistema escala]
- [Limites conhecidos]

### Observabilidade

- **Logs**: [O que será logado]
- **Métricas**: [Métricas a serem coletadas]
- **Alertas**: [Alertas necessários]

## Plano de Implementação

### Fases

| Fase | Descrição   | Estimativa       |
| ---- | ----------- | ---------------- |
| 1    | [Descrição] | [X dias/semanas] |
| 2    | [Descrição] | [X dias/semanas] |

### Dependências

- [Dependência 1]
- [Dependência 2]

### Riscos

| Risco     | Probabilidade      | Impacto            | Mitigação    |
| --------- | ------------------ | ------------------ | ------------ |
| [Risco 1] | [Alta/Média/Baixa] | [Alto/Médio/Baixo] | [Estratégia] |

## Plano de Rollout

### Estratégia

[Feature flag / Canary / Blue-green / Big bang]

### Critérios de Sucesso

- [Métrica 1]: [Valor esperado]
- [Métrica 2]: [Valor esperado]

### Rollback

[Como reverter em caso de problemas]

## Referências

- [Link para ADRs relacionados]
- [Link para documentação externa]
- [Link para discussões]

## Histórico de Revisões

| Data   | Autor  | Descrição      |
| ------ | ------ | -------------- |
| [Data] | [Nome] | Versão inicial |
