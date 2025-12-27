---
name: adr
description: Criar Architecture Decision Records para documentar decisoes arquiteturais
license: MIT
compatibility: opencode
metadata:
  audience: developers
  workflow: architecture
---

## What I do

Criar Architecture Decision Records (ADRs) que documentam:

- Contexto e problema que motivou a decisao
- Decisores e stakeholders envolvidos
- Decisao tomada com justificativas detalhadas
- Alternativas consideradas e motivos de rejeicao
- Resolucao de conflitos tecnicos (quando aplicavel)
- Plano de implantacao/migracao
- Consequencias (positivas e negativas)

## When to use me

Use this skill when you need to document an architecture decision. This is especially helpful when:

- Making significant technical decisions
- Choosing between different approaches
- Documenting why a technology was selected
- Recording decisions for future reference
- Migrating between platforms or tools

## How I work

I follow ADR best practices:

1. **Imutabilidade**: ADRs aceitos nao devem ser editados
2. **Contexto**: Documente o "porque", nao apenas o "o que"
3. **Alternativas**: Sempre liste opcoes consideradas com motivos de rejeicao
4. **Consequencias**: Seja honesto sobre trade-offs
5. **Acionabilidade**: Inclua plano de implantacao quando aplicavel
6. **Navegacao Visual**: Use emojis consistentes para facilitar leitura
7. **Codigo Estruturado**: Use formato ADR-[CODIGO]-[NUMERO] para identificacao unica
8. **Detalhamento**: Liste minimo 3 diferenciais, recomendado 5-10 para decisoes complexas

## ADR Status

- **Proposto**: Em discussao, ainda nao decidido
- **Aceito**: Decisao tomada e em vigor
- **Em implantacao**: Decisao aceita, implementacao em andamento
- **Implementado**: Decisao completamente implementada
- **Deprecado**: Nao mais relevante
- **Substituido**: Substituido por outro ADR

## Template

```markdown
# [EMOJI] ADR-[CODIGO]-[NUMERO]: [Titulo da Decisao]

> - **Status:** ==[Proposto | Aceito | Em implantacao | Implementado | Deprecado | Substituido por ADR-XXX]==
> - **Data:** [YYYY-MM-DD]
> - **Decisores:** [Time ou pessoas responsaveis pela decisao]

# ℹ️ Contexto

[Descreva o contexto e o problema que motivou esta decisao. Inclua:

- Situacao atual e suas limitacoes
- Drivers de negocio ou tecnicos
- Restricoes e requisitos identificados
- Processo de avaliacao (PoC, analise de mercado, etc.)
- Objetivo da decisao]

# 🎯 Decisao

Decidimos adotar o **[solucao escolhida]** como [descricao do papel da solucao].

A escolha pelo [solucao] se fundamenta nos resultados [praticos/teoricos] obtidos durante [fase de avaliacao], onde a [solucao] se destacou ao [resumo dos diferenciais]:

1. **[Diferencial 1]:** [Descricao detalhada do beneficio e impacto]
2. **[Diferencial 2]:** [Descricao detalhada do beneficio e impacto]
3. **[Diferencial 3]:** [Descricao detalhada do beneficio e impacto]
4. **[Diferencial 4]:** [Descricao detalhada do beneficio e impacto]
   [Continue conforme necessario - minimo 3, recomendado 5-10 diferenciais]

## **Solucao de Conflito Tecnico: [Nome do Conflito]** (opcional)

[Documente conflitos tecnicos criticos identificados durante avaliacao/PoC]

**Problema:** [Descricao detalhada do conflito tecnico]

**Resolucao:** [Como foi contornado/resolvido com detalhes da solucao implementada]

## **Implantacao e Migracao** (opcional)

[Descreva o plano de implementacao quando aplicavel. Use lista de acoes concretas:]

- **[Fase/Etapa 1]:** [Descricao da acao e responsaveis]
- **[Fase/Etapa 2]:** [Descricao da acao e responsaveis]
- **[Fase/Etapa 3]:** [Descricao da acao e responsaveis]
- **[Fase/Etapa 4]:** [Descricao da acao e responsaveis]

# 🏹 Consequencias

## ✅ Positivas:

- **[Beneficio 1]:** [Descricao do impacto positivo esperado]
- **[Beneficio 2]:** [Descricao do impacto positivo esperado]
- **[Beneficio 3]:** [Descricao do impacto positivo esperado]
- **[Beneficio 4]:** [Descricao do impacto positivo esperado]
  [Liste todos os beneficios esperados]

## ❌ Negativas:

- **[Trade-off 1]:** [Descricao do impacto negativo e como sera mitigado]
- **[Trade-off 2]:** [Descricao do impacto negativo e como sera mitigado]
  [Seja honesto sobre custos e limitacoes]

---

# :thought_balloon: Propostas consideradas

[Introducao opcional explicando o processo de selecao]

## **[Nome da Alternativa 1]**

Consideramos o [alternativa] devido a [motivo inicial de consideracao e pontos fortes].

**Motivacao para descartarmos a proposta:**

[Descricao detalhada dos motivos que levaram a rejeicao desta alternativa, incluindo:

- Problemas identificados durante avaliacao/PoC
- Limitacoes tecnicas ou de usabilidade
- Questoes de custo ou suporte
- Comparacao direta com a solucao escolhida]

## **[Nome da Alternativa 2]**

Consideramos [alternativa] devido a [motivo inicial de consideracao e pontos fortes].

**Motivacao para descartarmos a proposta:**

[Descricao detalhada dos motivos que levaram a rejeicao desta alternativa]

[Repita para todas as alternativas avaliadas - minimo 2-3 opcoes]
```

## Emojis Padrao

### Emoji do Titulo (baseado no dominio/contexto)

Escolha o emoji que melhor representa o **dominio ou contexto** da decisao:

| Emoji | Dominio/Contexto                     | Exemplo                                    |
| ----- | ------------------------------------ | ------------------------------------------ |
| 🚨    | Alertas, On-Call, Monitoramento      | Plataforma de alertas, sistema de paging   |
| 🔒    | Seguranca, Autenticacao, Autorizacao | SSO, criptografia, controle de acesso      |
| 💾    | Dados, Storage, Banco de Dados       | Escolha de DB, estrategia de backup        |
| 🌐    | Rede, Infraestrutura, Cloud          | Load balancer, CDN, arquitetura cloud      |
| 🔧    | Ferramentas, Tooling, DevEx          | CI/CD, IDE, ferramentas de desenvolvimento |
| 📊    | Analytics, Observabilidade, Metricas | Plataforma de metricas, dashboards         |
| 🚀    | Deploy, Release, Entrega             | Estrategia de deploy, feature flags        |
| 🧪    | Testes, Qualidade, QA                | Framework de testes, estrategia de QA      |
| 🏗️    | Arquitetura, Design de Sistema       | Padroes arquiteturais, microservicos       |
| 📱    | Mobile, Frontend, UI/UX              | Framework mobile, biblioteca de UI         |
| 🔌    | Integracao, APIs, Comunicacao        | API Gateway, message broker, webhooks      |
| 🤖    | Automacao, IA/ML, Bots               | Automacao de processos, modelos ML         |
| 📦    | Pacotes, Dependencias, Bibliotecas   | Gerenciador de pacotes, bibliotecas        |
| 🎨    | Design System, Branding, Temas       | Sistema de design, paleta de cores         |

**Dica:** Se nenhum emoji acima se encaixar perfeitamente, escolha o mais proximo ou use um emoji generico como 📝 (documentacao) ou ⚙️ (configuracao).

### Emojis das Secoes (fixos)

Use emojis consistentes para as secoes internas:

- **ℹ️** - Contexto (informacao de background)
- **🎯** - Decisao (objetivo/alvo)
- **🏹** - Consequencias (impacto/resultado)
- **✅** - Consequencias Positivas
- **❌** - Consequencias Negativas
- **:thought_balloon:** - Propostas Consideradas (alternativas)

## Formato do Codigo

O codigo do ADR deve seguir o formato: **ADR-[CODIGO]-[NUMERO]**

- **CODIGO**: Identificador do dominio/area (ex: ALR para Alerting, SEC para Security, DATA para Data)
- **NUMERO**: Numero sequencial com 3 digitos (ex: 001, 002, 004)
- Exemplo completo: `ADR-ALR-004`, `ADR-SEC-001`, `ADR-DATA-012`

## Restrictions

- **Nao edite ADRs aceitos** — crie novo ADR que substitui
- **Nunca reutilize numeros** de ADRs deprecados
- **Documente alternativas** — minimo 2-3 opcoes com motivos detalhados de rejeicao
- **Seja honesto** sobre consequencias negativas e trade-offs
- **Inclua decisores** — sempre identifique quem tomou a decisao
- **Escolha emoji contextual** — emoji do titulo deve refletir o dominio/contexto da decisao
- **Use emojis de secao fixos** — siga o padrao definido para secoes internas (ℹ️ 🎯 🏹 etc)
- **Detalhe diferenciais** — minimo 3, recomendado 5-10 para decisoes complexas
- **Status com destaque** — use == == para destacar status no Obsidian/Markdown
