# Como Analisar Cobertura de Testes

Este documento descreve o processo para análise e melhoria de cobertura de testes.

## Objetivo

Avaliar a cobertura de testes existente, identificar gaps e priorizar melhorias para aumentar a confiabilidade do código.

## Métricas de Cobertura

### Tipos de Cobertura

| Métrica                | Descrição                     | Meta Típica |
| ---------------------- | ----------------------------- | ----------- |
| **Line Coverage**      | Linhas executadas             | 80%+        |
| **Branch Coverage**    | Branches (if/else) executados | 75%+        |
| **Function Coverage**  | Funções chamadas              | 85%+        |
| **Statement Coverage** | Statements executados         | 80%+        |

### Interpretação

- **Alta cobertura ≠ Bons testes**: Cobertura mede quantidade, não qualidade
- **100% não é sempre necessário**: Foque em código crítico
- **Cobertura baixa = Risco**: Indica áreas não testadas

## Fluxo de Análise

### 1. Coleta de Métricas

Execute ferramentas de cobertura:

```bash
# JavaScript/TypeScript (Jest)
npm test -- --coverage

# Python (pytest)
pytest --cov=src --cov-report=html

# Go
go test -coverprofile=coverage.out ./...
go tool cover -html=coverage.out
```

### 2. Análise do Relatório

Examine o relatório identificando:

- Arquivos com menor cobertura
- Funções não testadas
- Branches não cobertos
- Código crítico sem testes

### 3. Classificação de Gaps

Categorize os gaps encontrados:

| Categoria                 | Prioridade | Ação                           |
| ------------------------- | ---------- | ------------------------------ |
| Código crítico de negócio | Alta       | Testar imediatamente           |
| Handlers de erro          | Alta       | Testar cenários de falha       |
| Código de integração      | Média      | Adicionar testes de integração |
| Código utilitário         | Média      | Testar funções públicas        |
| Código legado             | Baixa      | Testar ao modificar            |
| Código de UI              | Baixa      | Considerar testes visuais      |

### 4. Plano de Melhoria

Crie um plano priorizado:

```markdown
## Plano de Melhoria de Cobertura

### Sprint Atual

- [ ] Adicionar testes para `PaymentService` (crítico, 0% cobertura)
- [ ] Cobrir branches em `UserValidator` (70% → 90%)

### Próximo Sprint

- [ ] Testes de integração para `OrderProcessor`
- [ ] Edge cases em `DateUtils`

### Backlog

- [ ] Aumentar cobertura de `ReportGenerator`
- [ ] Testes E2E para fluxo de checkout
```

## Identificação de Código Crítico

### Critérios de Criticidade

- **Impacto financeiro**: Processamento de pagamentos, cálculos
- **Dados sensíveis**: Autenticação, autorização
- **Frequência de uso**: Funcionalidades core
- **Complexidade**: Muitas branches, lógica complexa
- **Histórico de bugs**: Áreas com bugs recorrentes

### Matriz de Priorização

```
                    Alta Frequência de Uso
                           ▲
                           │
    Prioridade ALTA   │   Prioridade CRÍTICA
                      │
    ──────────────────┼────────────────────► Alta Complexidade
                      │
    Prioridade BAIXA  │   Prioridade MÉDIA
                      │
```

## Estratégias de Aumento

### Quick Wins

- Testar funções públicas sem testes
- Adicionar testes para código recém modificado
- Cobrir happy paths óbvios

### Melhorias Estruturais

- Refatorar código para ser mais testável
- Extrair lógica de funções complexas
- Adicionar injeção de dependência

### Testes de Alto Valor

- Focar em código com histórico de bugs
- Priorizar fluxos críticos de negócio
- Testar integrações principais

## Armadilhas a Evitar

### Cobertura Inflada

```javascript
// RUIM - testa implementação, não comportamento
it('should call internal method', () => {
  const spy = jest.spyOn(service, '_internalMethod');
  service.doSomething();
  expect(spy).toHaveBeenCalled(); // Aumenta cobertura mas não valor
});
```

### Testes Vazios

```javascript
// RUIM - aumenta cobertura sem verificar nada
it('should work', () => {
  const result = calculate(1, 2);
  // Sem assertions!
});
```

### Ignorar Branches

```javascript
// Código com branch não testado
function process(data) {
  if (data.type === 'A') {
    return handleA(data); // Testado
  } else {
    return handleB(data); // NÃO testado - risco!
  }
}
```

## Relatório de Análise

### Template

```markdown
# Análise de Cobertura - [Data]

## Resumo

- **Cobertura Total**: X%
- **Meta**: Y%
- **Gap**: Z pontos percentuais

## Métricas por Área

| Módulo | Lines | Branches | Functions |
| ------ | ----- | -------- | --------- |
| Core   | 85%   | 78%      | 90%       |
| API    | 72%   | 65%      | 80%       |
| Utils  | 95%   | 90%      | 100%      |

## Áreas Críticas Sem Cobertura

1. **[Área]**: [Descrição do risco]
2. **[Área]**: [Descrição do risco]

## Recomendações

### Imediatas

- [Ação 1]
- [Ação 2]

### Curto Prazo

- [Ação 3]
- [Ação 4]

## Próximos Passos

- [Próximo passo]
```

## Checklist de Análise

- [ ] Relatório de cobertura gerado
- [ ] Áreas de baixa cobertura identificadas
- [ ] Código crítico mapeado
- [ ] Gaps classificados por prioridade
- [ ] Plano de melhoria criado
- [ ] Quick wins identificados
- [ ] Métricas de acompanhamento definidas
