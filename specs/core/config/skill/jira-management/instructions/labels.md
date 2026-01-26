# ℹ️ Contexto

Atualmente, a criação e gestão de issues no Jira (Épicos, Histórias e Tarefas) carece de uma taxonomia padronizada para classificação. A ausência de etiquetas (labels) estruturadas dificulta a extração de métricas precisas sobre onde o esforço dos times está sendo alocado.

Sem essa padronização, não conseguimos responder com clareza a perguntas como: "Quanto tempo estamos investindo na manutenção do produto X?" ou "Qual o esforço dedicado à jornada de observabilidade neste trimestre?". Isso impacta nossa capacidade de priorização, geração de relatórios gerenciais e a visibilidade sobre o impacto das entregas nas diferentes verticais de negócio.

# 🎯 Decisão

Para resolver esse problema e garantir rastreabilidade e governança sobre as atividades, fica decidido o uso obrigatório de categorias padronizadas em todas as **Épicos, Tarefas e Histórias** no Jira.

Utilizaremos o campo de _Labels_ (Etiquetas) seguindo uma estrutura de `chave:valor`. As duas categorias mandatórias são:

## **1. Categoria de Produto (**`**produto**`**)**

Representa o software, ferramenta ou aplicação específica da qual a issue faz parte.

- **Sintaxe:** `produto:<nome-do-produto>`
- **Exemplos:**
  - `produto:rootly`
  - `produto:incident-manager`
  - `produto:datadog`
  - `produto:grafana`

## **2. Categoria de Jornada (**`**jornada**`**)**

Representa o contexto de negócio, o fluxo do usuário ou a capacidade técnica que aquela issue impacta ou evolui.

- **Sintaxe:** `jornada:<nome-da-jornada>`
- **Exemplos:**
  - `jornada:alertas`
  - `jornada:incidentes`
  - `jornada:observabilidade`

A aplicação dessas labels deve ser feita no momento da criação da issue, garantindo que nenhum item entre no backlog sem a devida classificação.

# 🏹 Consequências

## ✅ Positivas

- **Relatórios Precisos:** Facilita a criação de dashboards no Jira e ferramentas de BI para visualizar a distribuição de esforço por Produto e Jornada.
- **Melhoria no Planejamento:** Permite que product managers e tech leads identifiquem gargalos ou excesso de investimento em áreas específicas.
- **Busca Otimizada:** Simplifica o filtro de tickets através da linguagem de consulta do Jira (JQL), ex: `labels = "produto:datadog"`.
- **Consistência de Dados:** Cria um vocabulário comum entre os times, evitando que o mesmo produto seja chamado por nomes diferentes (ex: "dd" vs "datadog").

## ❌ Negativas

- **Fricção no Cadastro:** Adiciona uma etapa manual extra no momento de abertura de tickets, o que pode ser visto como burocracia pelos desenvolvedores. (Mitigador: Criar templates de criação de issues no Jira que já sugiram ou exijam esses campos).
- **Manutenção da Taxonomia:** Será necessário manter uma lista oficial de "Produtos" e "Jornadas" válidos para evitar a proliferação de variações (ex: `jornada:alerta` vs `jornada:alertas`).
- **Curva de Adoção:** Issues antigas (legado) não terão essas etiquetas, gerando um vácuo de dados históricos até que o padrão se consolide.

---

# :thought_balloon: Propostas consideradas

Segue uma lista de propostas e ideias que foram consideradas nesta ADR, mas não serão implementadas.

## **Utilização de Campos Personalizados (Custom Fields)**

Consideramos criar campos do tipo "Dropdown" (Caixa de seleção) específicos no Jira para "Produto" e "Jornada".

**Motivação para descartarmos a proposta:**

A criação de _Custom Fields_ no Jira exige permissões de administração global e torna a manutenção rígida. Cada novo produto ou jornada exigiria uma solicitação ao administrador do Jira para atualizar as opções do campo. O uso de _Labels_ oferece maior flexibilidade e autonomia para os times criarem novas tags conforme o ecossistema evolui, sem burocracia excessiva.
