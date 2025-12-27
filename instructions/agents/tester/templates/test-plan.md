# Template: Plano de Testes

Use este template para criar planos de teste estruturados para features ou projetos.

---

# Plano de Testes: [Nome da Feature/Projeto]

## Metadados

| Campo       | Valor                              |
| ----------- | ---------------------------------- |
| **Versão**  | 1.0                                |
| **Data**    | [YYYY-MM-DD]                       |
| **Autor**   | [Nome]                             |
| **Status**  | [Rascunho / Em Revisão / Aprovado] |
| **Projeto** | [Nome do projeto]                  |

## Resumo Executivo

[Breve descrição do que será testado e os objetivos principais do plano de testes]

## Escopo

### Em Escopo

- [Funcionalidade 1]
- [Funcionalidade 2]
- [Integração X]

### Fora de Escopo

- [Item excluído 1]
- [Item excluído 2]

### Premissas

- [Premissa 1]
- [Premissa 2]

### Dependências

- [Dependência 1]
- [Dependência 2]

## Estratégia de Testes

### Tipos de Teste

| Tipo        | Escopo               | Ferramenta       | Responsável     |
| ----------- | -------------------- | ---------------- | --------------- |
| Unitário    | Lógica de negócio    | Jest             | Desenvolvedores |
| Integração  | APIs e serviços      | Jest + Supertest | QA              |
| E2E         | Fluxos críticos      | Playwright       | QA              |
| Performance | Endpoints principais | k6               | SRE             |

### Ambientes

| Ambiente | URL             | Dados       | Propósito       |
| -------- | --------------- | ----------- | --------------- |
| Local    | localhost:3000  | Mocks       | Desenvolvimento |
| CI       | -               | Fixtures    | Automação       |
| Staging  | staging.app.com | Sanitizados | Validação       |

## Cenários de Teste

### Módulo: [Nome do Módulo]

#### Funcionalidade: [Nome]

| ID     | Cenário                | Tipo       | Prioridade | Status   |
| ------ | ---------------------- | ---------- | ---------- | -------- |
| TC-001 | [Descrição do cenário] | Unitário   | Alta       | Pendente |
| TC-002 | [Descrição do cenário] | Integração | Alta       | Pendente |
| TC-003 | [Descrição do cenário] | E2E        | Média      | Pendente |

### Módulo: [Nome do Módulo 2]

#### Funcionalidade: [Nome]

| ID     | Cenário                | Tipo       | Prioridade | Status   |
| ------ | ---------------------- | ---------- | ---------- | -------- |
| TC-004 | [Descrição do cenário] | Unitário   | Alta       | Pendente |
| TC-005 | [Descrição do cenário] | Integração | Baixa      | Pendente |

## Dados de Teste

### Fixtures Necessárias

| Nome          | Descrição         | Localização             |
| ------------- | ----------------- | ----------------------- |
| users.json    | Usuários de teste | /fixtures/users.json    |
| products.json | Produtos de teste | /fixtures/products.json |

### Massa de Dados

| Cenário        | Dados Necessários   | Como Criar         |
| -------------- | ------------------- | ------------------ |
| Login válido   | Usuário ativo       | Fixture users.json |
| Login inválido | Credenciais erradas | Hardcoded no teste |

## Critérios de Qualidade

### Critérios de Entrada

- [ ] Código implementado e em code review
- [ ] Ambiente de teste disponível
- [ ] Dados de teste preparados
- [ ] Documentação atualizada

### Critérios de Saída

- [ ] Todos os testes críticos passando
- [ ] Cobertura mínima de [X]% atingida
- [ ] Zero bugs críticos abertos
- [ ] Documentação de testes atualizada

### Critérios de Aceite

| Métrica             | Meta | Atual |
| ------------------- | ---- | ----- |
| Cobertura de código | 80%  | -     |
| Testes passando     | 100% | -     |
| Bugs críticos       | 0    | -     |
| Bugs altos          | ≤ 2  | -     |

## Riscos e Mitigações

| Risco     | Probabilidade | Impacto | Mitigação |
| --------- | ------------- | ------- | --------- |
| [Risco 1] | Alta          | Alto    | [Ação]    |
| [Risco 2] | Média         | Médio   | [Ação]    |

## Cronograma

| Fase                    | Início | Fim    | Responsável |
| ----------------------- | ------ | ------ | ----------- |
| Planejamento            | [Data] | [Data] | [Nome]      |
| Implementação de testes | [Data] | [Data] | [Nome]      |
| Execução                | [Data] | [Data] | [Nome]      |
| Relatório               | [Data] | [Data] | [Nome]      |

## Recursos

### Equipe

| Nome   | Papel      | Dedicação |
| ------ | ---------- | --------- |
| [Nome] | QA Lead    | 100%      |
| [Nome] | QA Analyst | 50%       |

### Ferramentas

- [Ferramenta 1]: [Propósito]
- [Ferramenta 2]: [Propósito]

## Entregáveis

- [ ] Plano de testes aprovado
- [ ] Casos de teste documentados
- [ ] Testes automatizados implementados
- [ ] Relatório de execução
- [ ] Relatório de bugs

## Aprovações

| Nome   | Papel         | Data | Assinatura |
| ------ | ------------- | ---- | ---------- |
| [Nome] | QA Lead       |      |            |
| [Nome] | Tech Lead     |      |            |
| [Nome] | Product Owner |      |            |
