# Como Criar Comunicação por Email

Este documento descreve o processo para criação de emails efetivos e profissionais.

## Fluxo de Criação

### 1. Planejamento

Antes de escrever:

- Defina o objetivo do email
- Identifique destinatários (To, Cc, Bcc)
- Determine o nível de formalidade
- Liste informações essenciais a incluir

### 2. Estruturação

Organize o email:

- **Subject**: Claro e descritivo
- **Saudação**: Apropriada ao contexto
- **Introdução**: Contexto e objetivo
- **Corpo**: Informação principal
- **Conclusão**: Próximos passos ou call-to-action
- **Fechamento**: Assinatura profissional

### 3. Redação

Escreva o conteúdo:

- Parágrafos curtos (3-4 linhas)
- Uma ideia por parágrafo
- Use listas para enumerar itens
- Destaque informações importantes
- Inclua links relevantes

### 4. Revisão

Antes de enviar:

- Verifique ortografia e gramática
- Confirme destinatários corretos
- Valide links e anexos
- Revise tom e clareza
- Confirme que objetivo foi atendido

## Estrutura de Email

### Subject Line

**Boas práticas**:

- Máximo 50-60 caracteres
- Específico e descritivo
- Inclua contexto quando necessário
- Use prefixos para categorizar

**Exemplos**:

- ✅ `[Ação Requerida] Aprovação de proposta técnica - Prazo 10/01`
- ✅ `Atualização: Migração de banco de dados concluída`
- ✅ `Convite: Reunião de planejamento Q1 - 15/01 às 14h`
- ❌ `Importante` (vago)
- ❌ `Re: Re: Re: Fw: Assunto` (confuso)

### Saudação

**Formal**:

- `Prezado(a) [Nome],`
- `Prezados(as),` (múltiplos destinatários)
- `Caro(a) [Nome],`

**Semi-formal**:

- `Olá [Nome],`
- `Oi [Nome],`
- `Bom dia/Boa tarde [Nome],`

**Informal** (apenas para contextos muito informais):

- `E aí [Nome],`
- `Opa [Nome],`

### Corpo

**Estrutura recomendada**:

```
[Saudação]

[Parágrafo de contexto - por que este email]

[Parágrafo principal - informação ou solicitação]

[Detalhes adicionais se necessário]

[Próximos passos ou call-to-action]

[Fechamento]
[Assinatura]
```

### Fechamento

**Formal**:

- `Atenciosamente,`
- `Cordialmente,`
- `Respeitosamente,`

**Semi-formal**:

- `Abraços,`
- `Obrigado(a),`
- `Até breve,`

**Informal**:

- `Valeu,`
- `Falou,`

## Tipos de Email

### Informativo

**Objetivo**: Compartilhar informação

**Estrutura**:

```
Subject: [Atualização] [Tópico]

Olá [Nome/Time],

Gostaria de compartilhar uma atualização sobre [tópico].

[Informação principal]

[Detalhes relevantes]

Qualquer dúvida, estou à disposição.

Abraços,
[Nome]
```

**Exemplo**:

```
Subject: [Atualização] Nova versão da API em produção

Olá time,

Gostaria de compartilhar que fizemos o deploy da v2.3.0 da API em produção hoje às 14h.

Principais mudanças:
• Novo endpoint de autenticação OAuth2
• Melhorias de performance (30% mais rápido)
• Correção de 5 bugs reportados

Documentação atualizada: https://docs.company.com/api/v2.3.0
Changelog completo: https://github.com/org/api/releases/v2.3.0

Qualquer dúvida, estou à disposição.

Abraços,
João Silva
```

### Solicitação

**Objetivo**: Pedir ação ou aprovação

**Estrutura**:

```
Subject: [Ação Requerida] [Solicitação] - Prazo [data]

Prezado(a) [Nome],

Solicito [ação específica] para [objetivo].

**Contexto**: [Por que é necessário]

**Detalhes**: [Informações relevantes]

**Prazo**: [Data e horário]

**Próximos passos**: [O que acontece após aprovação]

Agradeço a atenção.

Atenciosamente,
[Nome]
```

**Exemplo**:

```
Subject: [Ação Requerida] Aprovação de proposta técnica - Prazo 10/01

Prezada Maria,

Solicito aprovação da proposta técnica para migração do banco de dados para PostgreSQL 15.

**Contexto**: A versão atual (PostgreSQL 12) sairá de suporte em novembro/2026.

**Detalhes**:
• Custo estimado: R$ 15.000 (infra + horas de engenharia)
• Prazo de execução: 3 semanas
• Impacto: Zero downtime, performance 20% melhor
• Riscos: Baixo, temos ambiente de staging para testes

**Prazo**: Preciso da aprovação até 10/01 para iniciar em 13/01.

**Próximos passos**: Após aprovação, agendaremos kickoff com o time.

Proposta completa: https://docs.company.com/proposals/pg15-migration

Agradeço a atenção.

Atenciosamente,
João Silva
```

### Resposta

**Objetivo**: Responder solicitação ou pergunta

**Estrutura**:

```
Subject: Re: [Assunto original]

Olá [Nome],

[Resposta direta à pergunta/solicitação]

[Detalhes adicionais se necessário]

[Próximos passos se aplicável]

Abraços,
[Nome]
```

**Exemplo**:

```
Subject: Re: Dúvida sobre integração com API de pagamentos

Olá Pedro,

Sim, a API suporta pagamentos recorrentes via endpoint `/subscriptions`.

Você precisará:
1. Criar uma subscription com POST /subscriptions
2. Configurar o webhook para receber notificações de cobrança
3. Tratar os eventos `subscription.charged` e `subscription.failed`

Documentação completa: https://docs.company.com/api/subscriptions
Exemplo de código: https://github.com/org/examples/subscription

Se precisar de ajuda na implementação, posso agendar uma call.

Abraços,
João Silva
```

### Anúncio

**Objetivo**: Comunicar mudança ou novidade

**Estrutura**:

```
Subject: [Anúncio] [Título]

Olá [Time/Todos],

Temos o prazer de anunciar [novidade].

[Descrição da mudança/novidade]

**O que muda**:
• [Mudança 1]
• [Mudança 2]

**Quando**: [Data de vigência]

**Impacto**: [Quem/o que é afetado]

**Próximos passos**: [O que fazer]

[Informações adicionais]

Abraços,
[Nome]
```

**Exemplo**:

```
Subject: [Anúncio] Novo processo de code review

Olá time de engenharia,

Temos o prazer de anunciar a implementação de um novo processo de code review para melhorar a qualidade e compartilhamento de conhecimento.

**O que muda**:
• Todo PR precisa de pelo menos 2 aprovações
• Revisores serão automaticamente atribuídos via CODEOWNERS
• PRs devem incluir testes e documentação

**Quando**: A partir de 15/01/2026

**Impacto**: Todos os desenvolvedores

**Próximos passos**:
1. Revisar o guia de code review: https://docs.company.com/code-review
2. Participar do workshop dia 12/01 às 15h
3. Atualizar seus PRs em aberto conforme novo padrão

Dúvidas podem ser enviadas no #engineering ou diretamente para mim.

Abraços,
Maria Santos
Tech Lead
```

## Boas Práticas

### Destinatários

- **To**: Pessoas que devem agir ou responder
- **Cc**: Pessoas que devem estar cientes
- **Bcc**: Use apenas para listas grandes ou quando privacidade é necessária

### Timing

- **Horário comercial**: Preferível para emails não urgentes
- **Resposta esperada**: Indique prazo claramente
- **Follow-up**: Aguarde 2-3 dias úteis antes de cobrar resposta

### Anexos

- Mencione anexos no corpo do email
- Use nomes descritivos para arquivos
- Considere links em vez de anexos grandes
- Verifique se anexou antes de enviar

### Formatação

- Use parágrafos curtos
- Listas para enumerar itens
- **Negrito** para destacar informações importantes
- Evite CAPS LOCK (parece que está gritando)
- Evite cores e fontes exóticas

## Anti-patterns a Evitar

- **Subject vago**: "Importante", "Urgente", "Assunto"
- **Texto em bloco**: Parágrafos longos sem quebras
- **Falta de contexto**: Assumir que destinatário sabe do que se trata
- **Reply all desnecessário**: Responder para todos quando não é necessário
- **Anexos sem menção**: Anexar arquivo sem explicar no corpo
- **Sem call-to-action**: Não fica claro o que fazer com a informação
- **Tom inadequado**: Muito casual em contexto formal ou vice-versa

## Checklist de Email

- [ ] Subject claro e descritivo
- [ ] Destinatários corretos (To, Cc, Bcc)
- [ ] Saudação apropriada ao contexto
- [ ] Objetivo claro no início
- [ ] Informações essenciais incluídas
- [ ] Parágrafos curtos e organizados
- [ ] Call-to-action explícito (se aplicável)
- [ ] Links e referências incluídos
- [ ] Anexos mencionados e anexados
- [ ] Fechamento e assinatura profissional
- [ ] Revisão ortográfica feita
- [ ] Tom apropriado à audiência
