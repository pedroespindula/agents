# Como Analisar Trade-offs

Este documento descreve o processo para análise de trade-offs em decisões arquiteturais.

## Objetivo

Avaliar sistematicamente as vantagens e desvantagens de diferentes alternativas para tomar decisões informadas.

## Princípios

- **Não existe bala de prata**: Toda escolha tem custos e benefícios
- **Contexto importa**: A melhor opção depende do cenário específico
- **Transparência**: Documente o raciocínio para futuras revisões
- **Reversibilidade**: Prefira decisões que possam ser revertidas

## Fluxo de Análise

### 1. Definição do Problema

Antes de comparar alternativas:

- Qual problema estamos resolvendo?
- Quais são os requisitos obrigatórios?
- Quais são os requisitos desejáveis?
- Quais são as restrições (tempo, budget, skills)?

### 2. Identificação de Alternativas

Liste as opções viáveis:

- Mínimo 2-3 alternativas
- Inclua a opção "não fazer nada" se aplicável
- Considere variações híbridas
- Elimine opções claramente inviáveis

### 3. Definição de Critérios

Estabeleça critérios de avaliação:

#### Critérios Técnicos

- Performance esperada
- Escalabilidade
- Complexidade de implementação
- Manutenibilidade
- Compatibilidade com stack atual

#### Critérios de Negócio

- Tempo de implementação
- Custo (desenvolvimento + operação)
- Risco de projeto
- Alinhamento estratégico

#### Critérios Operacionais

- Facilidade de deploy
- Observabilidade
- Suporte e comunidade
- Curva de aprendizado

### 4. Avaliação

Para cada alternativa, avalie cada critério:

- Use escala consistente (1-5, Baixo/Médio/Alto)
- Documente justificativa para cada nota
- Identifique incertezas e assunções
- Considere pesos diferentes por critério

### 5. Análise Comparativa

Compare as alternativas:

- Monte matriz de decisão
- Identifique pontos de diferenciação
- Avalie sensibilidade a mudanças de peso
- Considere cenários futuros

### 6. Recomendação

Formule a recomendação:

- Indique a alternativa preferida
- Justifique com base nos critérios
- Liste riscos e mitigações
- Defina condições que invalidariam a escolha

## Template de Análise

```markdown
# Análise de Trade-off: [Título da Decisão]

## Contexto

[Descrição do problema e motivação]

## Alternativas

### Alternativa A: [Nome]

- **Descrição**: [Como funciona]
- **Prós**: [Lista de vantagens]
- **Contras**: [Lista de desvantagens]

### Alternativa B: [Nome]

- **Descrição**: [Como funciona]
- **Prós**: [Lista de vantagens]
- **Contras**: [Lista de desvantagens]

## Matriz de Decisão

| Critério     | Peso | Alt A  | Alt B  | Alt C  |
| ------------ | ---- | ------ | ------ | ------ |
| Performance  | 3    | 4      | 3      | 5      |
| Complexidade | 2    | 3      | 4      | 2      |
| Custo        | 2    | 4      | 3      | 2      |
| **Total**    |      | **25** | **23** | **24** |

## Análise

### Alternativa Recomendada

[Qual e por quê]

### Riscos da Escolha

- [Risco 1]: [Mitigação]
- [Risco 2]: [Mitigação]

### Condições de Revisão

- Se [condição], reconsiderar [alternativa]

## Decisão

[Decisão final e próximos passos]
```

## Armadilhas Comuns

- **Viés de confirmação**: Favorecer opção já preferida
- **Análise incompleta**: Ignorar critérios importantes
- **Otimismo excessivo**: Subestimar dificuldades
- **Paralisia**: Analisar indefinidamente sem decidir
- **Falsa precisão**: Números detalhados sem fundamento
