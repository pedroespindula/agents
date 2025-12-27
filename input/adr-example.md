# 🚨 ADR-ALR-004: Escolha do Rootly como Plataforma de On-Call

> - **Status:** ==Em implantação==
> - **Data:** 2025-12-09
> - **Decisores:** Time de SRE

# ℹ️ Contexto

Com a descontinuação programada do suporte ao Grafana OnCall Open Source (OSS), identificou-se a necessidade crítica de migrar para uma outra solução. A ferramenta atual teve seu fim de vida anunciado e será completamente descontinuada em [24 de Março de 2026](https://www.google.com/search?q=https://github.com/grafana/oncall%23:~:text%3Dbe%2520archived%2520on-,2026%252D03%252D24,-.%2520While%2520you%2520may).

Após a definição de requisitos e uma análise de mercado que filtrou candidatos como PagerDuty e Opsgenie por questões de custo e legado técnico, foram selecionados três finalistas para Prova de Conceito (PoC): Zenduty, Rootly e Grafana IRM.

O objetivo desta decisão é oficializar a escolha da ferramenta que demonstrou, na prática, a melhor aderência técnica aos fluxos da engenharia, apresentando funcionalidades mais robustas, melhor equilíbrio entre Experiência do Desenvolvedor (DX) e interface, capacidades de integração (ChatOps/Terraform), suporte da ferramenta e sustentabilidade financeira.

# 🎯 Decisão

Decidimos adotar o **Rootly** como nossa nova plataforma oficial de gerenciamento de alertas e escalas de plantão (On-Call).

A escolha pelo Rootly se fundamenta nos resultados práticos obtidos durante a fase de testes e negociação, onde a ferramenta se destacou ao unificar critérios técnicos e de usabilidade em uma lista consolidada de diferenciais:

1. **Experiência de Usuário (UX) Superior:** A interface demonstrou ser a mais amigável e intuitiva entre as testadas, facilitando a adoção pelos times de engenharia.
2. **Fluxo "Slack-Native" para Alertas:** O Rootly oferece um fluxo de trabalho maduro focado em alertas dentro do Slack. É possível receber notificações, realizar o reconhecimento (_Acknowledge_) e iniciar a tratativa de _paging_ diretamente pela interface do chat, sem necessidade de troca de contexto constante para a interface web.
3. **Flexibilidade de Configuração e Governança:** A ferramenta permite configurações granulares de permissões (Create, Read, Update, Delete) e personalização de serviços. Isso viabiliza a criação de perfis de acesso específicos, como o de "Liderança", concedendo autonomia aos gestores para alterarem as escalas de seus próprios times sem riscos de impacto global ou necessidade de privilégios de Administrador.
4. **Robustez na Gestão de Escalas (Schedules):** O modelo de criação de escalas provou ser superior ao permitir múltiplas rotações dentro de uma mesma escala de time/squad. A manutenção é simplificada (alteração direta na _Schedule_ sem editar _Escalation Policies_) e o escalonamento é flexível, permitindo caminhos diferentes baseados na severidade do alerta.
5. **Redução de Ruído (Alert Grouping):** A ferramenta demonstrou eficácia nativa no agrupamento de alertas via funcionalidade _Combine duplicate alerts into one alert_, consolidando falhas recorrentes e evitando a fadiga de alertas.
6. **Aplicativo Móvel:** Disponibilidade de um aplicativo móvel nativo que facilita o gerenciamento de incidentes e a visualização de escalas em qualquer lugar, aumentando a eficiência e a resposta do on-call fora do computador.
7. **Observabilidade e Dashboards:** O Rootly destacou-se pela capacidade de criação de dashboards personalizados de alta qualidade, permitindo a visualização clara de métricas essenciais e visões específicas para gestão.
8. **Suporte Técnico:** A equipe de suporte do Rootly demonstrou alta disponibilidade e eficácia durante a PoC, atuando como parceira na resolução de dúvidas, inclusive com canal de comunicação direto via Slack.
9. **Custo-Benefício:** O valor negociado alinhou-se ao orçamento proposto, garantindo suporte às funcionalidades mínimas necessárias com um TCO competitivo ($20 por usuário por mês).

## **Solução de Conflito Técnico: Comando** `**/incident**`

Um ponto de atenção crítico durante os testes foi o conflito de namespace no Slack. Tanto a nossa ferramenta atual (Incident Manager) quanto o Rootly utilizam o comando `/incident`. Durante a instalação do Rootly, o comando da ferramenta antiga foi sobrescrito.

**Resolução:** O problema foi contornado com sucesso durante a PoC. O procedimento de desabilitar o Incident Manager e realizar uma nova instalação no workspace gerou um novo token (`SLACK_BOT_USER_OAUTH_TOKEN`), restaurando o funcionamento correto do Incident Manager. Isso garante que podemos conviver com ambas as ferramentas durante a fase de transição sem impacto operacional.

## **Implantação e Migração**

A migração seguirá as práticas de _Infrastructure as Code_ (IaC), aproveitando a robustez do provider do Rootly.

- **Negociação**: Precisamos negociar o nosso contrato com a Rootly em conjunto com o time de Compras para conseguir o melhor TOC possivel;
- **Acesso:** Configuração via SSO para gestão de identidade.
- **Fontes de Dados:** Integração nativa com Datadog, Prometheus, Grafana e quaisquer outras ferramentas geradoras de alertas criadas.
- **Configuração:** Migração das configurações de acionamento atuais (Schedules, Routes, Escalation Policies e afins) aproveitando todos os recursos de roteamento e acionamento do Rootly.
- **Treinamentos:** Treinamentos para os times de Engenharia para garantir uma fluidez no uso da ferramenta;
- **Rollout**: Migração faseada dos alertas e por time para garantia de funcionamento e entrega;

# 🏹 Consequências

## ✅ Positivas:

- **Autonomia das Lideranças:** Gestores terão independência para gerenciar as escalas e rotações de seus squads sem depender do time de Plataforma/SRE.
- **Melhoria na Qualidade de Vida (On-Call):** O agrupamento inteligente de alertas reduz notificações repetitivas para o engenheiro de plantão.
- **Governança via Código:** Capacidade de gerenciar permissões e serviços de forma granular, garantindo segurança e auditabilidade.
- **Dashboards Ricos:** Acesso nativo a métricas e dashboards personalizados.
- **Padronização:** Estabelecimento de um fluxo único e coeso para tratamento de alertas em toda a organização.
- **Melhoria nos KPIs:** Espera-se uma redução no **MTTA** (Mean Time to Acknowledge) e um aumento na **Ack Rate** devido à facilidade de interação via Slack e clareza das notificações.

## ❌ Negativas:

- **Reescrita de IaC:** Será necessário reescrever todo o código Terraform existente do Grafana OnCall para o padrão do provider Rootly.
- **Necessidade de Treinamentos:** Apesar do fluxo se assimilar bastante ao existente, ainda será necessário realizar sessões de treinamento para capacitar os times no novo fluxo operacional e na interface do Rootly, garantindo uma transição fluida e sem atritos.

---

# :thought_balloon: Propostas consideradas

Abaixo as ferramentas finalistas que foram avaliadas e descartadas em favor do Rootly.

## **Zenduty**

Consideramos o Zenduty devido ao seu TCO (Custo Total de Propriedade) ser o mais baixo do mercado inicialmente e possuir boas integrações.

**Motivação para descartarmos a proposta:**

Apesar do custo atrativo, a interface de usuário (UI) foi considerada menos intuitiva. O conceito de alerta vs. incidente na ferramenta mostrou-se conflitante e confuso, gerando atrito na experiência de uso. Além disso, a granularidade de permissões é mais geral do que a necessária para nossos requisitos de governança.

Por fim, em reunião com a Zenduty, o preço apresentado para nossa organização foi de $21.50 por usuário se tornando ainda mais caro que o Rootly.

## **Grafana IRM (Cloud)**

Consideramos migrar para a versão Cloud do Grafana OnCall pela facilidade de transição e familiaridade da ferramenta.

**Motivação para descartarmos a proposta:**

A falta de transparência nos custos variáveis de notificação (SMS/Voz) representava um risco orçamentário. Adicionalmente, o suporte técnico oferecido durante a avaliação foi insatisfatório e a ferramenta demonstrou dificuldades na configuração granular de roles via UI.
