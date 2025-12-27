# Como Implementar Testes

Este documento descreve o processo para implementação de testes.

## Fluxo de Implementação

### 1. Preparação

Antes de escrever testes:

- Entenda o código/funcionalidade a ser testada
- Identifique dependências que precisam ser mockadas
- Verifique se já existem testes relacionados
- Configure o ambiente de testes se necessário

### 2. Identificação de Cenários

Liste os cenários a serem testados:

#### Happy Path (Caminho Feliz)

- Fluxo principal com dados válidos
- Resultado esperado em condições normais

#### Edge Cases (Casos de Borda)

- Valores limite (mínimo, máximo)
- Listas vazias, strings vazias
- Valores nulos/undefined
- Primeiro e último elemento

#### Error Cases (Casos de Erro)

- Dados inválidos
- Recursos indisponíveis
- Timeout/falhas de rede
- Permissões negadas

### 3. Estruturação dos Testes

Organize os testes logicamente:

```javascript
describe('NomeDoModulo', () => {
  // Setup comum
  beforeEach(() => {
    // Preparação para cada teste
  });

  afterEach(() => {
    // Limpeza após cada teste
  });

  describe('nomeDaFuncao', () => {
    describe('quando condição X', () => {
      it('deve fazer Y', () => {});
      it('deve fazer Z', () => {});
    });

    describe('quando condição W', () => {
      it('deve fazer V', () => {});
    });
  });
});
```

### 4. Implementação

Para cada teste, siga o padrão AAA:

```javascript
it('deve calcular desconto corretamente', () => {
  // Arrange
  const produto = criarProduto({ preco: 100 });
  const desconto = 0.2;

  // Act
  const precoFinal = calcularPrecoComDesconto(produto, desconto);

  // Assert
  expect(precoFinal).toBe(80);
});
```

### 5. Verificação

Após implementar:

- Execute os testes e confirme que passam
- Verifique cobertura alcançada
- Teste que os testes falham quando devem (mude o código)
- Revise legibilidade e manutenibilidade

## Tipos de Teste por Camada

### Testes Unitários

```javascript
// Testando função pura
describe('formatCurrency', () => {
  it('should format positive numbers', () => {
    expect(formatCurrency(1234.56)).toBe('R$ 1.234,56');
  });

  it('should handle zero', () => {
    expect(formatCurrency(0)).toBe('R$ 0,00');
  });

  it('should handle negative numbers', () => {
    expect(formatCurrency(-100)).toBe('-R$ 100,00');
  });
});
```

### Testes de Integração

```javascript
// Testando integração com banco de dados
describe('UserRepository', () => {
  beforeAll(async () => {
    await database.connect();
  });

  afterAll(async () => {
    await database.disconnect();
  });

  beforeEach(async () => {
    await database.clear('users');
  });

  it('should save and retrieve user', async () => {
    const user = { name: 'Test', email: 'test@test.com' };

    await userRepository.save(user);
    const found = await userRepository.findByEmail('test@test.com');

    expect(found.name).toBe('Test');
  });
});
```

### Testes E2E

```javascript
// Testando fluxo completo com Playwright
describe('Login Flow', () => {
  it('should login with valid credentials', async ({ page }) => {
    await page.goto('/login');

    await page.fill('[data-testid="email"]', 'user@test.com');
    await page.fill('[data-testid="password"]', 'password123');
    await page.click('[data-testid="submit"]');

    await expect(page).toHaveURL('/dashboard');
    await expect(page.locator('[data-testid="welcome"]')).toBeVisible();
  });

  it('should show error with invalid credentials', async ({ page }) => {
    await page.goto('/login');

    await page.fill('[data-testid="email"]', 'wrong@test.com');
    await page.fill('[data-testid="password"]', 'wrong');
    await page.click('[data-testid="submit"]');

    await expect(page.locator('[data-testid="error"]')).toBeVisible();
  });
});
```

## Mocking

### Mocking de Módulos

```javascript
// Mock de módulo externo
jest.mock('axios');

it('should fetch data', async () => {
  axios.get.mockResolvedValue({ data: { id: 1, name: 'Test' } });

  const result = await fetchUser(1);

  expect(result.name).toBe('Test');
  expect(axios.get).toHaveBeenCalledWith('/users/1');
});
```

### Mocking de Funções

```javascript
// Mock de função específica
const mockCallback = jest.fn();

it('should call callback on success', async () => {
  await processData(data, mockCallback);

  expect(mockCallback).toHaveBeenCalledTimes(1);
  expect(mockCallback).toHaveBeenCalledWith({ success: true });
});
```

## Checklist de Implementação

- [ ] Cenários identificados (happy path, edge cases, errors)
- [ ] Testes estruturados logicamente
- [ ] Padrão AAA seguido
- [ ] Mocks configurados corretamente
- [ ] Todos os testes passando
- [ ] Cobertura adequada alcançada
- [ ] Testes são legíveis e mantíveis
- [ ] Testes são independentes entre si
