# Padrões e Restrições do Tester

Este documento define os padrões gerais que o Tester deve seguir em todas as tarefas.

## Restrições Gerais

- **Não crie testes que dependam de ordem** de execução
- **Não use dados de produção** em testes sem sanitização
- **Mantenha testes independentes** entre si
- **Não ignore testes falhos** — corrija ou remova
- **Evite sleep/delays fixos** — use esperas inteligentes

## Pirâmide de Testes

Distribua os testes seguindo a pirâmide:

```
       /\
      /E2E\        (poucos, lentos, frágeis)
     /------\
    /Integração\   (moderados)
   /------------\
  /   Unitários   \ (muitos, rápidos, estáveis)
 /------------------\
```

### Proporção Recomendada

| Tipo       | Proporção | Características                    |
| ---------- | --------- | ---------------------------------- |
| Unitários  | 70%       | Rápidos, isolados, sem I/O         |
| Integração | 20%       | Testam interação entre componentes |
| E2E        | 10%       | Fluxos críticos completos          |

## Padrões de Nomenclatura

### Arquivos de Teste

```
[arquivo].test.[ext]     # Unit tests
[arquivo].spec.[ext]     # Spec tests
[arquivo].e2e.[ext]      # E2E tests
[arquivo].integration.[ext]  # Integration tests
```

### Nomes de Testes

Use padrão descritivo que explique o cenário:

```javascript
// BOM
describe('UserService', () => {
  describe('createUser', () => {
    it('should create user with valid data', () => {});
    it('should throw error when email is invalid', () => {});
    it('should hash password before saving', () => {});
  });
});

// RUIM
describe('UserService', () => {
  it('test1', () => {});
  it('works', () => {});
});
```

## Estrutura de Testes (AAA)

Siga o padrão Arrange-Act-Assert:

```javascript
it('should calculate total with discount', () => {
  // Arrange - prepare os dados e dependências
  const cart = new Cart();
  cart.addItem({ price: 100, quantity: 2 });
  const discount = 0.1;

  // Act - execute a ação sendo testada
  const total = cart.calculateTotal(discount);

  // Assert - verifique o resultado
  expect(total).toBe(180);
});
```

## Mocks e Stubs

### Quando Usar

- **Mock**: Quando precisa verificar interações
- **Stub**: Quando precisa controlar comportamento
- **Fake**: Quando precisa de implementação simplificada

### Boas Práticas

- Limpe mocks entre testes
- Não faça mock de tudo — apenas dependências externas
- Prefira injeção de dependência para facilitar testes
- Documente comportamentos mockados complexos

## Dados de Teste

### Factories

Use factories para criar dados de teste:

```javascript
// Bom - factory com valores padrão
const createUser = (overrides = {}) => ({
  id: 'user-123',
  name: 'Test User',
  email: 'test@example.com',
  ...overrides,
});

// Uso
const user = createUser({ name: 'Custom Name' });
```

### Fixtures

- Mantenha fixtures em pasta dedicada
- Versionamento junto com testes
- Documente o propósito de cada fixture

## Assertions

### Boas Práticas

- Uma assertion lógica por teste (pode ter múltiplos expects relacionados)
- Use matchers específicos (`toHaveLength` vs `toBe(3)`)
- Mensagens de erro devem ser úteis
- Teste comportamento, não implementação

## Testes Assíncronos

```javascript
// Bom - use async/await
it('should fetch user data', async () => {
  const user = await userService.getById('123');
  expect(user.name).toBe('Test User');
});

// Bom - use done para callbacks
it('should emit event', (done) => {
  emitter.on('ready', () => {
    expect(true).toBe(true);
    done();
  });
  emitter.start();
});
```

## Anti-patterns a Evitar

- **Test pollution**: Testes que afetam outros
- **Flaky tests**: Testes que falham intermitentemente
- **Slow tests**: Testes que demoram demais
- **Commented tests**: Testes comentados sem justificativa
- **Logic in tests**: Condicionais complexas em testes
- **Testing implementation**: Testar detalhes internos em vez de comportamento
