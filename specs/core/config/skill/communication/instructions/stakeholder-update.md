# Como Criar Atualizações para Stakeholders

Este documento descreve o processo para criação de atualizações efetivas para stakeholders.

## Fluxo de Criação

### 1. Planejamento

Antes de escrever:

- Identifique os stakeholders e seus interesses
- Defina o período coberto pela atualização
- Liste conquistas, desafios e próximos passos
- Colete métricas e dados relevantes

### 2. Estruturação

Organize a atualização:

- **Sumário executivo**: Visão geral em 2-3 frases
- **Progresso**: O que foi feito
- **Métricas**: Dados quantitativos
- **Desafios**: Problemas e como estão sendo tratados
- **Próximos passos**: O que vem a seguir
- **Riscos**: Potenciais bloqueadores

### 3. Redação

Escreva o conteúdo:

- Comece com o mais importante
- Use linguagem clara e não técnica
- Inclua dados e métricas
- Seja transparente sobre desafios
- Destaque impacto no negócio

### 4. Revisão

Antes de enviar:

- Verifique precisão dos dados
- Confirme que atende expectativas dos stakeholders
- Valide tom e clareza
- Revise ortografia e formatação

## Estrutura de Atualização

### Sumário Executivo

**Objetivo**: Visão geral rápida do status

**Formato**:

```
**Status Geral**: 🟢 No prazo | 🟡 Atenção necessária | 🔴 Atrasado

[2-3 frases resumindo o período]
```

**Exemplo**:

```
**Status Geral**: 🟢 No prazo

Concluímos 85% das funcionalidades planejadas para o sprint. A migração do banco de dados foi finalizada com sucesso, resultando em 30% de melhoria de performance. Identificamos um risco relacionado à integração com sistema legado que está sendo mitigado.
```

### Progresso

**Objetivo**: Detalhar o que foi realizado

**Formato**:

```
## Progresso

### Concluído
• [Item 1] - [Impacto/benefício]
• [Item 2] - [Impacto/benefício]

### Em Andamento
• [Item 3] - [% completo] - [Previsão de conclusão]
• [Item 4] - [% completo] - [Previsão de conclusão]
```

**Exemplo**:

```
## Progresso

### Concluído ✅
• Migração PostgreSQL 15 - Melhoria de 30% em performance de queries
• Novo dashboard de métricas - Visibilidade em tempo real para o time
• Correção de 12 bugs críticos - Redução de 40% em tickets de suporte

### Em Andamento 🔄
• Integração com API de pagamentos - 70% completo - Conclusão prevista 20/01
• Refatoração do módulo de autenticação - 45% completo - Conclusão prevista 25/01
```

### Métricas

**Objetivo**: Quantificar resultados

**Formato**:

```
## Métricas

| Métrica | Atual | Meta | Variação |
|---------|-------|------|----------|
| [Métrica 1] | [Valor] | [Valor] | [+/-X%] |
| [Métrica 2] | [Valor] | [Valor] | [+/-X%] |
```

**Exemplo**:

```
## Métricas

| Métrica | Atual | Meta | Variação |
|---------|-------|------|----------|
| Uptime | 99.95% | 99.9% | +0.05% ✅ |
| Latência média | 120ms | 150ms | -20% ✅ |
| Bugs em produção | 3 | 5 | -40% ✅ |
| Cobertura de testes | 78% | 80% | -2% ⚠️ |
| Velocity (story points) | 42 | 40 | +5% ✅ |
```

### Desafios

**Objetivo**: Transparência sobre problemas

**Formato**:

```
## Desafios

### [Desafio 1]
**Impacto**: [Descrição do impacto]
**Ação**: [O que está sendo feito]
**Status**: [Situação atual]

### [Desafio 2]
**Impacto**: [Descrição do impacto]
**Ação**: [O que está sendo feito]
**Status**: [Situação atual]
```

**Exemplo**:

```
## Desafios

### Integração com sistema legado
**Impacto**: Pode atrasar release em 1 semana
**Ação**: Time dedicado trabalhando em adapter layer; reunião com time legado agendada
**Status**: Solução técnica definida, implementação em andamento

### Rotatividade no time
**Impacto**: Redução temporária de 20% na capacidade
**Ação**: Processo de contratação acelerado; redistribuição de tarefas entre membros atuais
**Status**: 2 candidatos em fase final; onboarding planejado para 15/01
```

### Próximos Passos

**Objetivo**: Clareza sobre o que vem a seguir

**Formato**:

```
## Próximos Passos

**Próxima semana**:
• [Atividade 1]
• [Atividade 2]

**Próximo mês**:
• [Milestone 1] - [Data]
• [Milestone 2] - [Data]
```

**Exemplo**:

```
## Próximos Passos

**Próxima semana (06-10/01)**:
• Finalizar integração com API de pagamentos
• Iniciar testes de carga em ambiente de staging
• Code review e documentação do módulo de autenticação

**Próximo mês (Janeiro)**:
• Release v2.0 em produção - 20/01
• Início do projeto de microserviços - 22/01
• Workshop de arquitetura com time - 25/01
```

### Riscos

**Objetivo**: Antecipar potenciais problemas

**Formato**:

```
## Riscos

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| [Risco 1] | Alta/Média/Baixa | Alto/Médio/Baixo | [Ação] |
| [Risco 2] | Alta/Média/Baixa | Alto/Médio/Baixo | [Ação] |
```

**Exemplo**:

```
## Riscos

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| Atraso na integração legado | Média | Alto | Time dedicado + escalação para gestão |
| Dependência de API externa | Baixa | Médio | Implementar fallback e cache |
| Falta de recursos para Q1 | Alta | Médio | Processo de contratação acelerado |
```

## Tipos de Atualização

### Atualização Semanal

**Frequência**: Toda semana
**Audiência**: Time e gestão imediata
**Formato**: Conciso (1-2 páginas)

**Estrutura**:

- Sumário executivo
- Progresso da semana
- Desafios e bloqueadores
- Próxima semana

### Atualização Mensal

**Frequência**: Todo mês
**Audiência**: Gestão e stakeholders
**Formato**: Detalhado (2-4 páginas)

**Estrutura**:

- Sumário executivo
- Progresso do mês
- Métricas e KPIs
- Desafios e resoluções
- Próximo mês
- Riscos

### Atualização de Projeto

**Frequência**: Conforme milestones
**Audiência**: Stakeholders do projeto
**Formato**: Completo (3-5 páginas)

**Estrutura**:

- Sumário executivo
- Status vs. plano original
- Progresso por workstream
- Métricas de sucesso
- Desafios e mitigações
- Timeline atualizado
- Próximos milestones
- Riscos e dependências

### Atualização de Incidente

**Frequência**: Durante e após incidente
**Audiência**: Stakeholders afetados
**Formato**: Objetivo e factual

**Estrutura**:

- Status atual
- Impacto
- Timeline
- Ações tomadas
- Próximos passos
- Postmortem (após resolução)

## Boas Práticas

### Linguagem

- **Evite jargão técnico**: Use linguagem acessível
- **Seja específico**: "30% mais rápido" em vez de "muito mais rápido"
- **Foque no impacto**: Traduza técnico para valor de negócio
- **Seja transparente**: Não esconda problemas

### Dados

- **Use métricas**: Quantifique sempre que possível
- **Mostre tendências**: Compare com períodos anteriores
- **Contextualize**: Explique o que os números significam
- **Seja preciso**: Verifique dados antes de compartilhar

### Formato

- **Sumário no início**: Stakeholders ocupados leem só o início
- **Visual**: Use tabelas, listas, emojis para facilitar leitura
- **Consistente**: Mantenha formato similar entre atualizações
- **Escaneável**: Facilite encontrar informações específicas

### Timing

- **Regular**: Mantenha frequência consistente
- **Pontual**: Envie no dia/horário acordado
- **Proativo**: Não espere ser cobrado

## Anti-patterns a Evitar

- **Só boas notícias**: Esconder problemas destrói confiança
- **Excesso de detalhes técnicos**: Stakeholders querem impacto, não implementação
- **Falta de dados**: Atualizações vagas sem métricas
- **Inconsistência**: Formato diferente a cada vez
- **Atrasos**: Enviar atualização com dias de atraso
- **Sem contexto**: Números sem explicação do que significam

## Checklist de Atualização

- [ ] Sumário executivo claro e objetivo
- [ ] Status geral indicado (🟢🟡🔴)
- [ ] Progresso detalhado com impacto
- [ ] Métricas relevantes incluídas
- [ ] Desafios comunicados com transparência
- [ ] Ações de mitigação descritas
- [ ] Próximos passos claros
- [ ] Riscos identificados e avaliados
- [ ] Linguagem acessível (não técnica)
- [ ] Dados verificados e precisos
- [ ] Formatação facilita leitura
- [ ] Enviado no prazo acordado
