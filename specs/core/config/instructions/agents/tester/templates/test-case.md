# Template: Caso de Teste

Use este template para documentar casos de teste individuais de forma detalhada.

---

# Caso de Teste: [ID] - [Título Descritivo]

## Identificação

| Campo          | Valor                                  |
| -------------- | -------------------------------------- |
| **ID**         | TC-[NÚMERO]                            |
| **Título**     | [Título descritivo do teste]           |
| **Módulo**     | [Módulo/Feature]                       |
| **Tipo**       | [Unitário / Integração / E2E / Manual] |
| **Prioridade** | [Crítica / Alta / Média / Baixa]       |
| **Autor**      | [Nome]                                 |
| **Data**       | [YYYY-MM-DD]                           |
| **Status**     | [Rascunho / Aprovado / Automatizado]   |

## Descrição

[Descrição clara do que este caso de teste verifica e por que é importante]

## Requisitos Relacionados

- [REQ-001]: [Descrição do requisito]
- [US-001]: [Descrição da user story]

## Pré-condições

- [ ] [Pré-condição 1 - ex: Usuário autenticado]
- [ ] [Pré-condição 2 - ex: Produto existente no catálogo]
- [ ] [Pré-condição 3 - ex: Ambiente de staging disponível]

## Dados de Teste

| Campo      | Valor            | Observação     |
| ---------- | ---------------- | -------------- |
| Email      | test@example.com | Usuário válido |
| Senha      | Test@123         | Senha válida   |
| Produto ID | prod-001         | Produto ativo  |

## Passos de Execução

| #   | Ação                   | Dados              | Resultado Esperado         |
| --- | ---------------------- | ------------------ | -------------------------- |
| 1   | [Ação a ser executada] | [Dados utilizados] | [O que deve acontecer]     |
| 2   | [Ação a ser executada] | [Dados utilizados] | [O que deve acontecer]     |
| 3   | [Ação a ser executada] | [Dados utilizados] | [O que deve acontecer]     |
| 4   | [Verificação final]    | -                  | [Resultado final esperado] |

## Resultado Esperado

[Descrição detalhada do resultado esperado ao final da execução do teste]

### Critérios de Sucesso

- [ ] [Critério 1]
- [ ] [Critério 2]
- [ ] [Critério 3]

## Pós-condições

- [Estado do sistema após o teste]
- [Dados que devem existir/não existir]

## Implementação (se automatizado)

### Localização

```
/tests/[tipo]/[modulo]/[arquivo].test.ts
```

### Código

```javascript
describe('[Módulo]', () => {
  describe('[Funcionalidade]', () => {
    it('[Descrição do teste]', async () => {
      // Arrange
      const dados = {
        email: 'test@example.com',
        senha: 'Test@123',
      };

      // Act
      const resultado = await executarAcao(dados);

      // Assert
      expect(resultado.status).toBe('sucesso');
      expect(resultado.dados).toMatchObject({
        // verificações específicas
      });
    });
  });
});
```

## Variações

| Variação | Dados Diferentes | Resultado Esperado |
| -------- | ---------------- | ------------------ |
| [Nome]   | [Dados]          | [Resultado]        |
| [Nome]   | [Dados]          | [Resultado]        |

## Casos de Borda Relacionados

- TC-[XXX]: [Descrição do edge case]
- TC-[XXX]: [Descrição do edge case]

## Histórico de Execução

| Data   | Versão | Executor | Resultado   | Observações |
| ------ | ------ | -------- | ----------- | ----------- |
| [Data] | [v1.0] | [Nome]   | [Pass/Fail] | [Obs]       |

## Bugs Relacionados

| ID        | Título   | Status           |
| --------- | -------- | ---------------- |
| BUG-[XXX] | [Título] | [Aberto/Fechado] |

## Notas

[Observações adicionais, dicas de execução, pontos de atenção]

---

## Exemplo Preenchido

# Caso de Teste: TC-001 - Login com credenciais válidas

## Identificação

| Campo          | Valor                         |
| -------------- | ----------------------------- |
| **ID**         | TC-001                        |
| **Título**     | Login com credenciais válidas |
| **Módulo**     | Autenticação                  |
| **Tipo**       | E2E                           |
| **Prioridade** | Crítica                       |
| **Autor**      | Maria Silva                   |
| **Data**       | 2024-01-15                    |
| **Status**     | Automatizado                  |

## Descrição

Verifica que um usuário consegue fazer login com email e senha válidos e é redirecionado para o dashboard.

## Pré-condições

- [ ] Usuário cadastrado e ativo no sistema
- [ ] Ambiente de staging disponível

## Dados de Teste

| Campo | Valor             | Observação    |
| ----- | ----------------- | ------------- |
| Email | usuario@teste.com | Usuário ativo |
| Senha | Senha@123         | Senha correta |

## Passos de Execução

| #   | Ação                      | Dados             | Resultado Esperado           |
| --- | ------------------------- | ----------------- | ---------------------------- |
| 1   | Acessar página de login   | /login            | Página carregada             |
| 2   | Preencher campo email     | usuario@teste.com | Campo preenchido             |
| 3   | Preencher campo senha     | Senha@123         | Campo preenchido (mascarado) |
| 4   | Clicar em "Entrar"        | -                 | Loading exibido              |
| 5   | Aguardar redirecionamento | -                 | URL = /dashboard             |

## Resultado Esperado

Usuário é autenticado e redirecionado para /dashboard. Nome do usuário é exibido no header.
