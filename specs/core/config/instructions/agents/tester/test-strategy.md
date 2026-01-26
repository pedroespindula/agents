# Como Definir Estratégia de Testes

Este documento descreve o processo para definição de estratégia de testes.

## Objetivo

Definir uma abordagem sistemática para testar uma feature, componente ou sistema, garantindo cobertura adequada com esforço otimizado.

## Fluxo de Definição

### 1. Análise de Requisitos

Entenda o que será testado:

- Quais são os requisitos funcionais?
- Quais são os requisitos não-funcionais (performance, segurança)?
- Quais são os fluxos críticos de negócio?
- Quais são as integrações envolvidas?

### 2. Identificação de Riscos

Mapeie os riscos:

| Área   | Risco       | Probabilidade    | Impacto          | Prioridade de Teste |
| ------ | ----------- | ---------------- | ---------------- | ------------------- |
| [Área] | [Descrição] | Alta/Média/Baixa | Alto/Médio/Baixo | [1-5]               |

### 3. Definição de Escopo

Determine o que testar e o que não testar:

**Em escopo:**

- Funcionalidades novas
- Funcionalidades modificadas
- Integrações afetadas

**Fora de escopo:**

- Funcionalidades não alteradas
- Componentes de terceiros (assumindo funcionam)
- Cenários de baixíssima probabilidade

### 4. Tipos de Teste

Defina quais tipos de teste usar:

| Tipo        | Quando Usar                      | Ferramentas             |
| ----------- | -------------------------------- | ----------------------- |
| Unitário    | Lógica de negócio, funções puras | Jest, Vitest, pytest    |
| Integração  | Interação entre componentes      | Jest, pytest, Supertest |
| E2E         | Fluxos críticos completos        | Playwright, Cypress     |
| Performance | Requisitos de tempo/carga        | k6, Artillery           |
| Segurança   | Autenticação, autorização        | OWASP ZAP, Snyk         |

### 5. Ambientes

Defina os ambientes de teste:

| Ambiente | Propósito       | Dados             |
| -------- | --------------- | ----------------- |
| Local    | Desenvolvimento | Mocks/Fakes       |
| CI       | Automação       | Fixtures          |
| Staging  | Validação final | Dados sanitizados |

### 6. Critérios de Qualidade

Estabeleça critérios de aceite:

- **Cobertura mínima**: X% de cobertura de código
- **Testes passando**: 100% dos testes devem passar
- **Performance**: Tempo de resposta < Xms
- **Zero bugs críticos**: Nenhum bug de severidade alta

## Matriz de Cobertura

Crie uma matriz relacionando funcionalidades e tipos de teste:

| Funcionalidade | Unit | Integration | E2E | Performance |
| -------------- | ---- | ----------- | --- | ----------- |
| Login          | ✓    | ✓           | ✓   | ✓           |
| Cadastro       | ✓    | ✓           | ✓   | -           |
| Listagem       | ✓    | ✓           | -   | ✓           |
| Exportação     | ✓    | ✓           | -   | -           |

## Priorização

Priorize testes usando a fórmula:

```
Prioridade = (Impacto do Bug × Probabilidade de Bug) / Custo do Teste
```

### Ordem de Implementação

1. **Críticos**: Fluxos principais, alta visibilidade
2. **Importantes**: Funcionalidades secundárias, integrações
3. **Complementares**: Edge cases, cenários raros

## Automação vs Manual

| Automatizar         | Manter Manual            |
| ------------------- | ------------------------ |
| Regressão           | Exploratório             |
| Fluxos repetitivos  | Usabilidade              |
| Validações de dados | Testes visuais complexos |
| Smoke tests         | Cenários únicos          |

## Checklist de Estratégia

- [ ] Requisitos analisados e entendidos
- [ ] Riscos identificados e priorizados
- [ ] Escopo definido claramente
- [ ] Tipos de teste selecionados
- [ ] Ambientes definidos
- [ ] Critérios de qualidade estabelecidos
- [ ] Matriz de cobertura criada
- [ ] Priorização definida
