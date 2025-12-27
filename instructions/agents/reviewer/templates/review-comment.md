# Template de Comentário de Revisão

Use este template para comentários individuais durante revisão de código.

---

## [Severidade] [Título do Problema]

**Localização:** `[arquivo]:[linha]` ou `[arquivo]:[função]`

**Problema:**

[Descrição clara e específica do problema identificado]

```[linguagem]
// Código problemático
[trecho de código relevante]
```

**Por quê é um problema:**

[Explicação do impacto, risco ou consequência]

**Sugestão:**

[Como corrigir o problema]

```[linguagem]
// Código sugerido
[exemplo de implementação correta]
```

**Referências:** (opcional)

- [Link para documentação]
- [Link para padrão/guideline]
- [Link para issue relacionada]

---

## Exemplos de Uso

### Exemplo 1: Problema Crítico

---

## 🔴 Vulnerabilidade de SQL Injection

**Localização:** `src/users/repository.js:45`

**Problema:**

A query SQL está concatenando input do usuário diretamente sem sanitização:

```javascript
const query = `SELECT * FROM users WHERE email = '${email}'`;
const result = await db.query(query);
```

**Por quê é um problema:**

Permite que atacantes executem SQL arbitrário através do parâmetro `email`. Por exemplo, `email = "' OR '1'='1"` retornaria todos os usuários. Isso pode levar a:

- Acesso não autorizado a dados
- Modificação ou deleção de dados
- Comprometimento completo do banco de dados

**Sugestão:**

Use prepared statements com parâmetros:

```javascript
const query = 'SELECT * FROM users WHERE email = ?';
const result = await db.query(query, [email]);
```

Ou use o query builder do ORM:

```javascript
const result = await User.findOne({ where: { email } });
```

**Referências:**

- [OWASP SQL Injection](https://owasp.org/www-community/attacks/SQL_Injection)
- [Node.js SQL Best Practices](https://github.com/goldbergyoni/nodebestpractices#-65-use-orm-libraries-to-prevent-sql-injection-vulnerabilities)

---

### Exemplo 2: Problema Importante

---

## 🟡 Função com Responsabilidade Múltipla

**Localização:** `src/orders/service.js:processOrder`

**Problema:**

A função `processOrder` está fazendo múltiplas coisas:

```javascript
async function processOrder(orderId) {
  // Valida ordem
  const order = await Order.findById(orderId);
  if (!order) throw new Error("Order not found");

  // Processa pagamento
  const payment = await stripe.charges.create({...});

  // Atualiza inventário
  await Inventory.decrement(order.items);

  // Envia email
  await sendEmail(order.user.email, "Order confirmed");

  // Cria nota fiscal
  await Invoice.create({...});

  return order;
}
```

**Por quê é um problema:**

Viola o princípio de responsabilidade única (SRP), tornando a função:

- Difícil de testar (precisa mockar 5 dependências)
- Difícil de manter (mudanças em qualquer área afetam a função)
- Difícil de reusar (não pode processar pagamento sem enviar email)
- Propensa a bugs (muita lógica em um lugar)

**Sugestão:**

Extraia cada responsabilidade para funções específicas:

```javascript
async function processOrder(orderId) {
  const order = await validateOrder(orderId);
  await processPayment(order);
  await updateInventory(order);
  await notifyCustomer(order);
  await generateInvoice(order);
  return order;
}

async function validateOrder(orderId) {
  const order = await Order.findById(orderId);
  if (!order) throw new Error("Order not found");
  return order;
}

async function processPayment(order) {
  return await stripe.charges.create({...});
}

// ... outras funções
```

Isso melhora testabilidade, manutenibilidade e reusabilidade.

**Referências:**

- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)
- [Clean Code - Functions](https://github.com/ryanmcdermott/clean-code-javascript#functions)

---

### Exemplo 3: Sugestão de Melhoria

---

## 🔵 Oportunidade de Otimização com Caching

**Localização:** `src/products/service.js:getProductDetails`

**Problema:**

A função busca dados do produto no banco a cada chamada, mesmo para produtos populares que raramente mudam:

```javascript
async function getProductDetails(productId) {
  const product = await Product.findById(productId);
  const reviews = await Review.find({ productId });
  const rating = calculateAverageRating(reviews);
  return { ...product, rating };
}
```

**Por quê é um problema:**

Para produtos populares, isso gera muitas queries desnecessárias ao banco, aumentando latência e carga no servidor.

**Sugestão:**

Considere adicionar cache com TTL curto:

```javascript
const cache = new NodeCache({ stdTTL: 300 }); // 5 minutos

async function getProductDetails(productId) {
  const cacheKey = `product:${productId}`;
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  const product = await Product.findById(productId);
  const reviews = await Review.find({ productId });
  const rating = calculateAverageRating(reviews);

  const result = { ...product, rating };
  cache.set(cacheKey, result);
  return result;
}
```

Ou use Redis para cache distribuído em produção.

**Impacto estimado:** Redução de 70-80% nas queries para produtos populares.

**Referências:**

- [Caching Strategies](https://aws.amazon.com/caching/best-practices/)

---

### Exemplo 4: Nitpick

---

## 💡 Nomenclatura Pouco Descritiva

**Localização:** `src/utils/helpers.js:processData`

**Problema:**

O nome da função `processData` é muito genérico:

```javascript
function processData(d) {
  return d.map((x) => x.value * 2);
}
```

**Por quê é um problema:**

Nomes genéricos dificultam entendimento do código. Não fica claro:

- Que tipo de dados são processados
- O que o processamento faz
- Quando usar essa função

**Sugestão:**

Use nomes mais descritivos:

```javascript
function doubleProductPrices(products) {
  return products.map((product) => product.value * 2);
}
```

Ou se for realmente genérico:

```javascript
function doubleValues(items) {
  return items.map((item) => item.value * 2);
}
```

**Referências:**

- [Clean Code - Meaningful Names](https://github.com/ryanmcdermott/clean-code-javascript#variables)

---

### Exemplo 5: Pergunta

---

## ❓ Razão para Abordagem Não Convencional

**Localização:** `src/auth/middleware.js:authenticate`

**Problema:**

Notei que a autenticação está usando um esquema customizado em vez de JWT padrão:

```javascript
function authenticate(req, res, next) {
  const token = req.headers['x-custom-auth'];
  const decoded = customDecode(token);
  // ...
}
```

**Pergunta:**

Pode explicar a razão para usar um esquema de autenticação customizado em vez de JWT padrão? Há algum requisito específico que JWT não atende?

Estou perguntando porque:

- Esquemas customizados são mais difíceis de auditar
- Podem ter vulnerabilidades não descobertas
- Dificultam integração com ferramentas padrão

Se houver uma boa razão, considere documentar no código ou em um ADR.

---

## Guia de Severidade

Use estes níveis de severidade:

- **🔴 Crítico**: Bugs, vulnerabilidades, quebra de funcionalidade → **Deve ser corrigido**
- **🟡 Importante**: Code smells, problemas de manutenibilidade → **Deveria corrigir**
- **🔵 Sugestão**: Melhorias, otimizações → **Considere**
- **💡 Nitpick**: Estilo, preferências menores → **Opcional**
- **❓ Pergunta**: Esclarecimentos, discussão → **Responda**

## Dicas

1. **Seja específico**: Aponte linha exata ou função
2. **Explique o porquê**: Não apenas o que está errado
3. **Forneça exemplos**: Mostre código correto
4. **Seja construtivo**: Foque em melhorar, não criticar
5. **Referencie fontes**: Links para docs, padrões, guidelines
6. **Considere contexto**: Trade-offs podem justificar decisões
