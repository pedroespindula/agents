# ℹ️ Contexto

Atualmente, o gerenciamento de tarefas no Jira foca quase exclusivamente na entrega de funcionalidades e correções. Não existe uma categorização clara para o tempo investido no crescimento dos engenheiros ou na manutenção da saúde do código. Atividades como cursos, workshops e itens de PDI (Plano de Desenvolvimento Individual) acabam invisíveis no quadro ou misturadas com tarefas de projeto.

Essa falta de distinção dificulta a resposta a perguntas como "Quanto da nossa capacidade semanal estamos investindo na evolução técnica do time?" ou "Quanto tempo dedicamos pagando dívida técnica?". Sem tipos específicos, a priorização de itens de aprendizado e manutenção técnica perde força frente às demandas de produto.

# 🎯 Decisão

Para melhorar a governança, a categorização do trabalho e valorizar a cultura de aprendizado contínuo, decidimos padronizar os tipos de issues (Issue Types) utilizados nos projetos do Jira.

A estrutura será composta pelos **5 tipos padrão** da ferramenta, acrescida de **2 novos tipos** específicos para a engenharia e gestão de pessoas:

## **Tipos Padrão (Entrega de Valor)**

Continuaremos utilizando os tipos nativos para o fluxo de desenvolvimento de funcionalidades e correção de erros:

1. **Épico (Epic):** Grandes iniciativas que agrupam várias histórias e tarefas. Representa um corpo de trabalho maior que pode levar **várias semanas** para ser concluído.
2. **História (Story):** Requisito de funcionalidade ou valor de negócio focado no usuário final. Deve seguir o padrão "Como \[usuário\], eu quero \[ação\], para que \[benefício\]".
3. **Tarefa (Task):** Atividades operacionais necessárias para o projeto, mas que não entregam funcionalidade direta ao usuário final (ex: investigações técnicas, configurações, scripts manuais).
4. **Sub-tarefa (Sub-task):** Unidade menor de trabalho contida dentro de uma História, Tarefa ou Bug, utilizada para quebrar a implementação em passos técnicos.
5. **Bug:** Falha ou comportamento inesperado em uma funcionalidade já existente ou em produção.

## **Novos Tipos (Investimento e Manutenção)**

Serão criados e disponibilizados os seguintes tipos para dar visibilidade a trabalhos internos cruciais:

6. **Desenvolvimento Pessoal:**

- **Definição:** Tarefas dedicadas ao aprimoramento profissional do colaborador. Inclui itens de PDI, cursos, workshops, leitura técnica, mentorias ou _pet projects_ de aprendizado.
- **Objetivo:** Garantir e visualizar que parte da capacidade semanal do time está sendo reservada para educação e evolução de carreira, evitando que a operação consuma 100% do tempo.

7\. **Débito Técnico (Technical Debt):**

- **Definição:** Tarefas focadas em refatoração, atualização de bibliotecas, melhorias de arquitetura ou correções de código que não alteram o comportamento funcional para o usuário (melhorias internas).
- **Objetivo:** Tornar explícito o esforço dedicado à manutenção da saúde do código e da plataforma, permitindo negociação de capacidade dedicada para este fim.

# 🏹 Consequências

## ✅ Positivas

- **Cultura de Aprendizado:** Oficializa o "tempo de estudo" dentro do fluxo de trabalho, legitimando o investimento na carreira do engenheiro durante o horário de expediente.
- **Métricas de Investimento:** Permite mensurar a distribuição de esforço entre _Entrega (Features/Bugs)_, _Saúde do Código (Débito Técnico)_ e _Evolução do Time (Desenvolvimento Pessoal)_.
- **Visibilidade de PDI:** Os líderes conseguem acompanhar o progresso dos itens de PDI dos liderados diretamente no board da semana, sem precisar de planilhas paralelas.
- **Planejamento Realista:** Ao criar cards de "Desenvolvimento Pessoal", a capacidade disponível para entregas de produto é ajustada de forma mais transparente, evitando sobrecarga.

## ❌ Negativas

- **Conflito de Prioridades:** Pode haver pressão para despriorizar cards de "Desenvolvimento Pessoal" em semanas de entregas críticas. (Mitigador: Definir um acordo de time sobre uma % mínima de tempo protegido para desenvolvimento pessoal).
- **Gestão de Granularidade:** O time precisará aprender a quebrar estudos longos em entregáveis semanais tangíveis (ex: "Concluir módulo 1 do curso X" em vez de "Fazer curso X").
- **Complexidade no Board:** Aumenta a quantidade de cards no quadro que não geram valor direto imediato para o cliente final.

---

# :thought_balloon: Propostas consideradas

Segue uma lista de propostas e ideias que foram consideradas nesta ADR, mas não serão implementadas.

## **Manter "Estudo" (Spike) como Tipo**

Consideramos criar um tipo específico para "Spike" (investigação técnica de projeto) em vez de "Desenvolvimento Pessoal".

**Motivação para descartarmos a proposta:**

Investigações técnicas voltadas para o projeto (Spikes) são parte do trabalho de entrega e podem ser categorizadas como "Tarefas" ou sub-tarefas de uma História. Optamos por priorizar o "Desenvolvimento Pessoal" como tipo separado para destacar explicitamente o tempo que **não** é dedicado ao projeto, mas sim ao indivíduo.

## **Rastrear PDI fora do Jira**

Consideramos manter o acompanhamento de cursos e PDI apenas em ferramentas de RH ou planilhas de 1:1.

**Motivação para descartarmos a proposta:**

Manter o desenvolvimento pessoal fora do Jira cria a ilusão de que o engenheiro tem 100% do tempo disponível para codar features. Trazer esses itens para o Jira torna o consumo de tempo visível e ajuda a justificar por que, em determinadas semanas, a entrega de código pode ser menor (devido ao foco em treinamento).
