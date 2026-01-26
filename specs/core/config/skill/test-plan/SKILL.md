---
name: test-plan
description: Criar planos de teste estruturados para features ou projetos
license: MIT
compatibility: opencode
metadata:
  audience: developers
  workflow: quality-assurance
---

## What I do

Criar planos de teste estruturados que definem:

- Escopo e objetivos do teste
- Estrategia e tipos de teste
- Cenarios e casos de teste
- Dados e ambientes necessarios
- Criterios de entrada e saida
- Cronograma e recursos

## When to use me

Use this skill when you need to create a test plan. This is especially helpful when:

- Planning tests for a new feature
- Defining test strategy for a project
- Documenting test scope and approach
- Creating test schedules and resource plans

## How I work

I follow test planning best practices:

1. **Escopo claro**: Defina o que sera e nao sera testado
2. **Priorizacao**: Foque em areas de maior risco
3. **Rastreabilidade**: Vincule testes a requisitos
4. **Mensurabilidade**: Defina criterios claros de sucesso

## Test Pyramid

```
       /\
      /E2E\        (poucos, lentos, frageis)
     /------\
    /Integracao\   (moderados)
   /------------\
  /   Unitarios   \ (muitos, rapidos, estaveis)
 /------------------\
```

## Template

```markdown
# Plano de Testes: [Nome da Feature]

## Metadados

| Campo      | Valor               |
| ---------- | ------------------- |
| **Versao** | 1.0                 |
| **Data**   | [YYYY-MM-DD]        |
| **Autor**  | [Nome]              |
| **Status** | [Rascunho/Aprovado] |

## Escopo

### Em Escopo

- [Funcionalidade 1]
- [Funcionalidade 2]

### Fora de Escopo

- [Item excluido]

## Estrategia de Testes

| Tipo       | Escopo            | Ferramenta | Responsavel |
| ---------- | ----------------- | ---------- | ----------- |
| Unitario   | Logica de negocio | Jest       | Devs        |
| Integracao | APIs              | Supertest  | QA          |
| E2E        | Fluxos criticos   | Playwright | QA          |

## Cenarios de Teste

| ID     | Cenario     | Tipo     | Prioridade | Status   |
| ------ | ----------- | -------- | ---------- | -------- |
| TC-001 | [Descricao] | Unitario | Alta       | Pendente |

## Criterios de Qualidade

| Metrica         | Meta |
| --------------- | ---- |
| Cobertura       | 80%  |
| Testes passando | 100% |
| Bugs criticos   | 0    |

## Cronograma

| Fase         | Inicio | Fim    | Responsavel |
| ------------ | ------ | ------ | ----------- |
| Planejamento | [Data] | [Data] | [Nome]      |
| Execucao     | [Data] | [Data] | [Nome]      |
```

## Restrictions

- **Nao crie testes que dependam de ordem** de execucao
- **Nao use dados de producao** sem sanitizacao
- **Mantenha testes independentes** entre si
- **Defina criterios claros** de sucesso e falha
