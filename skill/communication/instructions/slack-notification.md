# Como Criar Notificações via Slack

Este documento descreve o processo para criação de notificações efetivas via Slack.

## Fluxo de Criação

### 1. Planejamento

Antes de escrever:

- Identifique o canal apropriado (público, privado, DM)
- Defina o objetivo da notificação
- Determine a urgência (normal, importante, crítico)
- Liste as pessoas que devem ser mencionadas

### 2. Estruturação

Organize a mensagem:

- **Primeira linha**: Informação mais importante
- **Corpo**: Contexto e detalhes
- **Ação**: O que fazer com esta informação
- **Links**: Referências para mais detalhes

### 3. Formatação

Use recursos do Slack:

- **Negrito** para ênfase: `*texto*`
- _Itálico_ para termos: `_texto_`
- `Código` para comandos: `` `texto` ``
- Blocos de código: ` ```código``` `
- Listas com `•` ou numeradas
- Emojis para contexto visual

### 4. Menções

Use menções apropriadamente:

- `@pessoa` — Mencionar indivíduo específico
- `@channel` — Todos no canal (use com moderação)
- `@here` — Apenas membros ativos (menos intrusivo)
- Evite `@channel` e `@here` fora de horário comercial

### 5. Threads

Use threads para:

- Detalhes adicionais que não cabem na mensagem principal
- Discussões relacionadas
- Atualizações progressivas
- Manter o canal organizado

## Tipos de Notificação

### Informativa

**Objetivo**: Compartilhar informação sem ação requerida

```
🔔 [Título da Informação]

[Contexto breve]

Detalhes: [link para documentação]
```

**Exemplo**:

```
🔔 Nova versão do API Gateway em produção

Acabamos de fazer deploy da v2.3.0 com melhorias de performance.

Detalhes: https://github.com/org/api-gateway/releases/v2.3.0
```

### Ação Requerida

**Objetivo**: Solicitar ação específica

```
⚠️ [Ação Necessária] [Título]

[Contexto]

**Ação requerida**: [O que fazer]
**Prazo**: [Quando]
**Responsável**: @pessoa

Mais informações: [link]
```

**Exemplo**:

```
⚠️ [Ação Necessária] Atualizar dependências antes do release

Identificamos vulnerabilidades em 3 dependências que precisam ser atualizadas.

**Ação requerida**: Atualizar pacotes listados no issue
**Prazo**: Até sexta-feira, 10/01
**Responsável**: @joao @maria

Issue: https://jira.company.com/PROJ-123
```

### Incidente

**Objetivo**: Comunicar problema em andamento

```
🚨 [INCIDENTE] [Título]

**Status**: [Investigando/Identificado/Resolvendo/Resolvido]
**Impacto**: [Descrição do impacto]
**Início**: [Horário]

[Descrição breve do problema]

**Próximos passos**: [O que está sendo feito]

War room: [link]
Status page: [link]
```

**Exemplo**:

```
🚨 [INCIDENTE] API de pagamentos com latência elevada

**Status**: Investigando
**Impacto**: Checkout 50% mais lento, sem perda de transações
**Início**: 14:23

Detectamos aumento de latência no serviço de pagamentos. Usuários podem experimentar lentidão no checkout.

**Próximos passos**: Time SRE investigando logs e métricas

War room: #incident-2026-01-06
Status page: https://status.company.com
```

### Resolução

**Objetivo**: Comunicar resolução de problema

```
✅ [RESOLVIDO] [Título]

**Duração**: [Tempo total]
**Causa raiz**: [Breve explicação]

[Descrição da resolução]

**Próximos passos**: [Ações preventivas]

Postmortem: [link quando disponível]
```

**Exemplo**:

```
✅ [RESOLVIDO] API de pagamentos normalizada

**Duração**: 47 minutos (14:23 - 15:10)
**Causa raiz**: Timeout em conexões com banco de dados

Aumentamos o pool de conexões e reiniciamos os workers. Latência voltou ao normal.

**Próximos passos**: Postmortem agendado para amanhã 10h

Postmortem: [será adicionado]
```

### Release/Deploy

**Objetivo**: Anunciar nova versão ou deploy

```
🚀 [Deploy] [Sistema] v[versão] em [ambiente]

**Principais mudanças**:
• [Mudança 1]
• [Mudança 2]
• [Mudança 3]

**Breaking changes**: [Sim/Não - detalhes se sim]

Changelog: [link]
Docs: [link]
```

**Exemplo**:

```
🚀 [Deploy] User Service v3.1.0 em produção

**Principais mudanças**:
• Novo endpoint de autenticação OAuth2
• Performance 30% melhor em queries de perfil
• Correção de bug em reset de senha

**Breaking changes**: Não

Changelog: https://github.com/org/user-service/releases/v3.1.0
Docs: https://docs.company.com/user-service
```

## Boas Práticas

### Timing

- **Horário comercial**: Preferível para notificações não urgentes
- **Fora de horário**: Apenas para incidentes críticos
- **Finais de semana**: Evite, exceto emergências

### Frequência

- **Atualizações de incidente**: A cada 30-60 minutos ou quando houver mudança significativa
- **Status de projeto**: Semanal ou conforme acordado
- **Releases**: Sempre que houver deploy em produção

### Clareza

- Primeira frase deve conter a informação essencial
- Use formatação para facilitar escaneamento
- Inclua links em vez de explicações longas
- Seja específico sobre ações e prazos

## Checklist de Notificação Slack

- [ ] Canal apropriado selecionado
- [ ] Objetivo claro na primeira linha
- [ ] Emoji/indicador visual apropriado
- [ ] Contexto suficiente fornecido
- [ ] Ação requerida explícita (se aplicável)
- [ ] Pessoas relevantes mencionadas
- [ ] Links incluídos para mais detalhes
- [ ] Formatação facilita leitura
- [ ] Urgência apropriada (evitar @channel desnecessário)
- [ ] Horário apropriado para envio
