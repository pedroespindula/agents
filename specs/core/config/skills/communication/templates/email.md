# Template: Email

Use este template para criar emails consistentes e profissionais.

---

## Template Básico

```
Subject: [Assunto claro e descritivo]

[Saudação],

[Parágrafo de contexto]

[Parágrafo principal com informação ou solicitação]

[Detalhes adicionais se necessário]

[Próximos passos ou call-to-action]

[Fechamento],
[Nome]
[Cargo/Time]
```

---

## Template: Email Informativo

```
Subject: [Atualização] [Tópico]

[Saudação],

Gostaria de compartilhar uma atualização sobre [tópico].

[Informação principal]

[Detalhes relevantes organizados em parágrafos ou listas]

Qualquer dúvida, estou à disposição.

[Fechamento],
[Nome]
[Cargo/Time]
[Contato]
```

**Exemplo preenchido**:

```
Subject: [Atualização] Nova versão da API em produção

Olá time,

Gostaria de compartilhar que fizemos o deploy da v2.3.0 da API em produção hoje às 14h.

Principais mudanças:
• Novo endpoint de autenticação OAuth2 (/auth/oauth2)
• Melhorias de performance - queries 30% mais rápidas
• Correção de 5 bugs reportados pelos usuários
• Suporte a paginação em todos os endpoints de listagem

O deploy foi concluído sem incidentes e todos os health checks estão passando. Monitoramento não detectou nenhuma anomalia nas primeiras 2 horas.

Documentação atualizada: https://docs.company.com/api/v2.3.0
Changelog completo: https://github.com/org/api/releases/v2.3.0

Qualquer dúvida, estou à disposição.

Abraços,
João Silva
Tech Lead - API Team
joao.silva@company.com | Slack: @joao
```

---

## Template: Solicitação/Aprovação

```
Subject: [Ação Requerida] [Solicitação] - Prazo [data]

[Saudação formal],

Solicito [ação específica] para [objetivo].

**Contexto**: [Por que é necessário]

**Detalhes**:
• [Detalhe 1]
• [Detalhe 2]
• [Detalhe 3]

**Prazo**: [Data e horário]

**Próximos passos**: [O que acontece após aprovação]

[Informações adicionais ou anexos]

Agradeço a atenção.

[Fechamento formal],
[Nome]
[Cargo/Time]
[Contato]
```

**Exemplo preenchido**:

```
Subject: [Ação Requerida] Aprovação de proposta técnica - Prazo 10/01

Prezada Maria,

Solicito aprovação da proposta técnica para migração do banco de dados para PostgreSQL 15.

**Contexto**: A versão atual (PostgreSQL 12) sairá de suporte oficial em novembro/2026. A migração preventiva garante segurança e acesso a melhorias de performance.

**Detalhes**:
• Custo estimado: R$ 15.000 (infraestrutura + horas de engenharia)
• Prazo de execução: 3 semanas (13/01 a 31/01)
• Impacto: Zero downtime, performance 20% melhor
• Riscos: Baixo - temos ambiente de staging completo para testes
• Time alocado: 2 engenheiros + 1 SRE

**Prazo**: Preciso da aprovação até 10/01 para iniciar o projeto em 13/01 conforme planejado.

**Próximos passos**: Após aprovação, agendaremos kickoff com o time e comunicaremos stakeholders sobre o cronograma.

Proposta completa (com análise técnica e financeira): https://docs.company.com/proposals/pg15-migration

Agradeço a atenção e fico à disposição para esclarecer dúvidas.

Atenciosamente,
João Silva
Tech Lead - Infrastructure
joao.silva@company.com | Slack: @joao | Tel: (11) 98765-4321
```

---

## Template: Resposta

```
Subject: Re: [Assunto original]

[Saudação],

[Resposta direta à pergunta ou solicitação]

[Detalhes adicionais se necessário]

[Próximos passos se aplicável]

[Fechamento],
[Nome]
```

**Exemplo preenchido**:

```
Subject: Re: Dúvida sobre integração com API de pagamentos

Olá Pedro,

Sim, a API suporta pagamentos recorrentes via endpoint `/subscriptions`.

Para implementar, você precisará:

1. Criar uma subscription com POST /subscriptions
   - Enviar dados do cliente e plano escolhido
   - Receber subscription_id na resposta

2. Configurar webhook para receber notificações
   - Endpoint deve aceitar POST com eventos de cobrança
   - Validar assinatura do webhook para segurança

3. Tratar os eventos principais:
   - `subscription.charged` - Cobrança bem-sucedida
   - `subscription.failed` - Falha na cobrança
   - `subscription.cancelled` - Cancelamento

Recursos úteis:
• Documentação completa: https://docs.company.com/api/subscriptions
• Exemplo de código (Node.js): https://github.com/org/examples/subscription
• Postman collection: https://docs.company.com/api/postman

Se precisar de ajuda na implementação ou quiser revisar o código, posso agendar uma call. Minha agenda está aberta terça e quinta à tarde.

Abraços,
João Silva
Tech Lead - Payments API
joao.silva@company.com | Slack: @joao
```

---

## Template: Anúncio/Comunicado

```
Subject: [Anúncio] [Título]

[Saudação],

Temos o prazer de anunciar [novidade/mudança].

[Descrição da mudança ou novidade]

**O que muda**:
• [Mudança 1]
• [Mudança 2]
• [Mudança 3]

**Quando**: [Data de vigência]

**Impacto**: [Quem ou o que é afetado]

**Próximos passos**: [O que fazer]

[Informações adicionais]

[Fechamento],
[Nome]
[Cargo/Time]
```

**Exemplo preenchido**:

```
Subject: [Anúncio] Novo processo de code review - Vigência 15/01

Olá time de engenharia,

Temos o prazer de anunciar a implementação de um novo processo de code review para melhorar a qualidade do código e promover compartilhamento de conhecimento entre o time.

**O que muda**:
• Todo PR precisa de pelo menos 2 aprovações antes do merge
• Revisores serão automaticamente atribuídos via arquivo CODEOWNERS
• PRs devem incluir testes automatizados e documentação atualizada
• Limite de 400 linhas por PR (PRs maiores devem ser quebrados)

**Quando**: A partir de 15/01/2026

**Impacto**: Todos os desenvolvedores e PRs abertos após 15/01

**Próximos passos**:
1. Revisar o guia completo de code review: https://docs.company.com/code-review
2. Participar do workshop de alinhamento dia 12/01 às 15h (link na agenda)
3. Atualizar PRs em aberto para seguir novo padrão até 14/01

O objetivo é melhorar a qualidade do código, reduzir bugs em produção e facilitar o onboarding de novos membros. Estudos mostram que code review efetivo reduz bugs em até 60%.

Dúvidas podem ser enviadas no canal #engineering ou diretamente para mim.

Abraços,
Maria Santos
Engineering Manager
maria.santos@company.com | Slack: @maria
```

---

## Template: Convite para Reunião

```
Subject: Convite: [Assunto da Reunião] - [Data] às [Horário]

[Saudação],

Gostaria de convidar você para uma reunião sobre [assunto].

**Objetivo**: [Objetivo principal da reunião]

**Data**: [Data completa]
**Horário**: [Horário de início] às [Horário de fim]
**Local**: [Presencial/Link de videoconferência]

**Agenda**:
1. [Tópico 1] - [Tempo estimado]
2. [Tópico 2] - [Tempo estimado]
3. [Tópico 3] - [Tempo estimado]

**Preparação** (se aplicável):
• [Item a revisar antes]
• [Item a preparar antes]

Por favor, confirme sua presença até [data].

[Fechamento],
[Nome]
```

**Exemplo preenchido**:

```
Subject: Convite: Planejamento Q1 2026 - 15/01 às 14h

Olá time,

Gostaria de convidar você para a reunião de planejamento do primeiro trimestre de 2026.

**Objetivo**: Alinhar prioridades, definir OKRs e distribuir projetos para Q1

**Data**: Terça-feira, 15 de janeiro de 2026
**Horário**: 14h às 16h (2 horas)
**Local**: Sala de reuniões 3 / Zoom: https://zoom.us/j/123456789

**Agenda**:
1. Retrospectiva Q4 2025 - 20min
2. Apresentação de OKRs Q1 2026 - 30min
3. Discussão e ajustes - 40min
4. Distribuição de projetos - 20min
5. Próximos passos - 10min

**Preparação**:
• Revisar resultados de Q4: https://docs.company.com/q4-2025-results
• Pensar em sugestões de melhorias para Q1

Por favor, confirme sua presença até 10/01 respondendo este email.

Abraços,
Maria Santos
Engineering Manager
maria.santos@company.com | Slack: @maria
```

---

## Template: Follow-up

```
Subject: Follow-up: [Assunto original]

[Saudação],

Estou fazendo follow-up sobre [assunto] que enviei em [data].

[Breve recapitulação do contexto]

[Reforço da ação necessária ou pergunta]

[Novo prazo se aplicável]

Fico no aguardo do seu retorno.

[Fechamento],
[Nome]
```

**Exemplo preenchido**:

```
Subject: Follow-up: Aprovação de proposta técnica

Prezada Maria,

Estou fazendo follow-up sobre a proposta de migração para PostgreSQL 15 que enviei em 03/01.

Para recapitular: precisamos migrar o banco de dados antes que a versão atual saia de suporte em novembro. A proposta inclui cronograma de 3 semanas, custo de R$ 15.000 e zero downtime.

Você teve oportunidade de revisar a proposta? Há alguma dúvida ou informação adicional que posso fornecer?

O prazo ideal para início seria 13/01 para concluirmos antes do release de fevereiro. Se precisar de mais tempo para análise, posso ajustar o cronograma.

Proposta: https://docs.company.com/proposals/pg15-migration

Fico no aguardo do seu retorno.

Atenciosamente,
João Silva
Tech Lead - Infrastructure
joao.silva@company.com | Slack: @joao
```

---

## Elementos de Formatação

### Saudações

**Formal**:

- Prezado(a) [Nome],
- Prezados(as),
- Caro(a) [Nome],

**Semi-formal**:

- Olá [Nome],
- Oi [Nome],
- Bom dia/Boa tarde [Nome],

**Informal**:

- E aí [Nome],
- Opa [Nome],

### Fechamentos

**Formal**:

- Atenciosamente,
- Cordialmente,
- Respeitosamente,

**Semi-formal**:

- Abraços,
- Obrigado(a),
- Até breve,

**Informal**:

- Valeu,
- Falou,

### Assinatura

```
[Nome Completo]
[Cargo] - [Time/Departamento]
[Email] | [Slack] | [Telefone opcional]
```

---

## Notas de Uso

1. **Escolha o template apropriado** ao tipo de comunicação
2. **Adapte o tom** à audiência e contexto
3. **Seja conciso** - emails longos raramente são lidos completamente
4. **Use listas** para facilitar leitura
5. **Inclua links** em vez de anexos grandes quando possível
6. **Revise antes de enviar** - erros prejudicam credibilidade
7. **Subject line claro** - destinatário deve saber do que se trata
8. **Call-to-action explícito** - deixe claro o que espera do destinatário
