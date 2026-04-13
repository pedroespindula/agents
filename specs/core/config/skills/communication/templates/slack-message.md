# Template: Mensagem Slack

Use este template para criar mensagens Slack consistentes e efetivas.

---

## Template Básico

```
[Emoji] [Título/Assunto]

[Contexto breve]

[Informação principal ou ação requerida]

[Links ou referências]
```

---

## Template: Notificação Informativa

```
🔔 [Título da Informação]

[Contexto breve sobre o que aconteceu]

**Detalhes**:
• [Detalhe 1]
• [Detalhe 2]
• [Detalhe 3]

Mais informações: [link]
```

**Exemplo preenchido**:

```
🔔 Deploy da v2.3.0 concluído com sucesso

Acabamos de fazer deploy da nova versão em produção às 14h.

**Detalhes**:
• Performance 30% melhor em queries
• Novo endpoint de autenticação OAuth2
• Correção de 5 bugs reportados

Changelog: https://github.com/org/api/releases/v2.3.0
Docs: https://docs.company.com/api/v2.3.0
```

---

## Template: Ação Requerida

```
⚠️ [Ação Necessária] [Título]

[Contexto sobre por que a ação é necessária]

**Ação requerida**: [Descrição específica do que fazer]
**Prazo**: [Data e horário]
**Responsável**: @pessoa

[Informações adicionais ou links]
```

**Exemplo preenchido**:

```
⚠️ [Ação Necessária] Atualizar dependências vulneráveis

Identificamos 3 dependências com vulnerabilidades de segurança que precisam ser atualizadas antes do release.

**Ação requerida**: Atualizar pacotes listados no issue e rodar testes
**Prazo**: Sexta-feira, 10/01 até 17h
**Responsável**: @joao @maria

Issue: https://jira.company.com/PROJ-123
Guia de atualização: https://docs.company.com/security-updates
```

---

## Template: Incidente em Andamento

```
🚨 [INCIDENTE] [Título do Problema]

**Status**: [Investigando/Identificado/Resolvendo/Resolvido]
**Impacto**: [Descrição do impacto nos usuários/sistemas]
**Início**: [Horário de início]

[Descrição breve do que está acontecendo]

**Próximos passos**: [O que está sendo feito para resolver]

War room: [link para canal ou call]
Status page: [link]
```

**Exemplo preenchido**:

```
🚨 [INCIDENTE] API de pagamentos com alta latência

**Status**: Investigando
**Impacto**: Checkout 50% mais lento, sem perda de transações
**Início**: 14:23

Detectamos aumento significativo de latência no serviço de pagamentos. Usuários podem experimentar lentidão no processo de checkout, mas nenhuma transação está sendo perdida.

**Próximos passos**: Time SRE analisando logs e métricas do banco de dados

War room: #incident-2026-01-06
Status page: https://status.company.com
```

---

## Template: Resolução de Incidente

```
✅ [RESOLVIDO] [Título do Problema]

**Duração**: [Tempo total do incidente]
**Causa raiz**: [Breve explicação da causa]

[Descrição da resolução e ações tomadas]

**Impacto final**: [Resumo do impacto]
**Próximos passos**: [Ações preventivas ou postmortem]

Postmortem: [link quando disponível]
```

**Exemplo preenchido**:

```
✅ [RESOLVIDO] API de pagamentos normalizada

**Duração**: 47 minutos (14:23 - 15:10)
**Causa raiz**: Pool de conexões do banco saturado devido a pico de tráfego

Aumentamos o pool de conexões de 50 para 100 e reiniciamos os workers. Latência voltou aos níveis normais (~100ms).

**Impacto final**: ~500 usuários experimentaram lentidão, nenhuma transação perdida
**Próximos passos**: Postmortem agendado para amanhã 10h, implementar auto-scaling

Postmortem: [será adicionado após reunião]
```

---

## Template: Release/Deploy

```
🚀 [Deploy] [Sistema] v[versão] em [ambiente]

[Breve descrição do release]

**Principais mudanças**:
• [Mudança 1]
• [Mudança 2]
• [Mudança 3]

**Breaking changes**: [Sim/Não - detalhes se sim]
**Rollback**: [Disponível/Não disponível]

Changelog: [link]
Docs: [link]
```

**Exemplo preenchido**:

```
🚀 [Deploy] User Service v3.1.0 em produção

Deploy concluído com sucesso às 15h30. Todos os health checks passando.

**Principais mudanças**:
• Novo endpoint de autenticação OAuth2 (/auth/oauth2)
• Performance 30% melhor em queries de perfil
• Correção de bug em reset de senha
• Suporte a MFA via TOTP

**Breaking changes**: Não
**Rollback**: Disponível se necessário

Changelog: https://github.com/org/user-service/releases/v3.1.0
Docs: https://docs.company.com/user-service/v3.1.0
Migration guide: https://docs.company.com/user-service/migration-3.1.0
```

---

## Template: Atualização de Status

```
📊 [Status] [Projeto/Iniciativa] - [Período]

**Status geral**: 🟢 No prazo | 🟡 Atenção | 🔴 Atrasado

**Concluído**:
• [Item 1]
• [Item 2]

**Em andamento**:
• [Item 3] - [% ou status]
• [Item 4] - [% ou status]

**Bloqueadores**: [Nenhum / Descrição]

**Próxima semana**: [Principais atividades]

Detalhes: [link para documento completo]
```

**Exemplo preenchido**:

```
📊 [Status] Migração PostgreSQL 15 - Semana 2/4

**Status geral**: 🟢 No prazo

**Concluído**:
• Setup de ambiente de staging
• Migração de schema e dados de teste
• Testes de performance iniciais

**Em andamento**:
• Ajustes de queries otimizadas - 60%
• Documentação de procedimentos - 40%

**Bloqueadores**: Nenhum

**Próxima semana**: Migração de produção agendada para quarta-feira 08/01 às 3h

Detalhes: https://docs.company.com/projects/pg15-migration
```

---

## Template: Pergunta/Discussão

```
❓ [Tópico da Discussão]

[Contexto da pergunta ou discussão]

**Pergunta**: [Pergunta específica]

**Opções** (se aplicável):
1. [Opção 1] - [Prós/Contras]
2. [Opção 2] - [Prós/Contras]

**Prazo para decisão**: [Data se houver]

cc: @pessoa1 @pessoa2 [pessoas relevantes]
```

**Exemplo preenchido**:

```
❓ Estratégia de cache para API de produtos

Estamos enfrentando alta latência nas queries de produtos (avg 800ms). Precisamos decidir a estratégia de cache.

**Pergunta**: Qual abordagem de cache devemos implementar?

**Opções**:
1. Redis cache - Rápido, requer infra adicional, custo ~$200/mês
2. In-memory cache - Sem custo adicional, limitado por memória da aplicação
3. CDN cache - Ótimo para reads, complexo para invalidação

**Prazo para decisão**: Sexta-feira 10/01 (precisamos implementar na próxima sprint)

cc: @tech-lead @sre-team @product-manager

Análise técnica: https://docs.company.com/proposals/cache-strategy
```

---

## Emojis Úteis

**Status**:

- ✅ Concluído/Sucesso
- ⚠️ Atenção/Ação necessária
- 🚨 Incidente/Urgente
- 🔴 Crítico/Bloqueado
- 🟡 Atenção
- 🟢 OK/No prazo

**Tipo**:

- 🔔 Notificação
- 📊 Status/Métricas
- 🚀 Deploy/Release
- ❓ Pergunta/Discussão
- 💡 Ideia/Sugestão
- 📝 Documentação

**Ação**:

- 🔄 Em andamento
- ⏸️ Pausado
- 🎯 Meta/Objetivo
- 🐛 Bug
- ✨ Nova feature

---

## Notas de Uso

1. **Escolha o template apropriado** ao tipo de mensagem
2. **Adapte conforme necessário** - templates são guias, não regras rígidas
3. **Mantenha conciso** - Slack é para mensagens rápidas
4. **Use threads** para detalhes adicionais
5. **Mencione pessoas relevantes** mas evite @channel desnecessário
6. **Inclua links** em vez de explicações longas
7. **Teste formatação** antes de enviar em canais importantes
