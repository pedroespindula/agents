# Template: Documentação de Endpoint

Use este template para documentar endpoints de API de forma consistente.

---

# [Método] [Path]

[Descrição breve do que o endpoint faz]

## Sumário

| Atributo         | Valor                                       |
| ---------------- | ------------------------------------------- |
| **Método**       | `GET` / `POST` / `PUT` / `PATCH` / `DELETE` |
| **Path**         | `/api/v1/recurso/{id}`                      |
| **Autenticação** | Obrigatória / Opcional / Não requer         |
| **Rate Limit**   | X requests/minuto                           |

## Descrição

[Descrição detalhada do endpoint:

- O que ele faz
- Quando usar
- Comportamentos especiais]

## Parâmetros

### Path Parameters

| Nome | Tipo   | Obrigatório | Descrição                      |
| ---- | ------ | ----------- | ------------------------------ |
| `id` | string | Sim         | Identificador único do recurso |

### Query Parameters

| Nome    | Tipo    | Padrão      | Descrição                   |
| ------- | ------- | ----------- | --------------------------- |
| `page`  | integer | 1           | Número da página (min: 1)   |
| `limit` | integer | 20          | Itens por página (max: 100) |
| `sort`  | string  | `createdAt` | Campo de ordenação          |
| `order` | string  | `desc`      | Direção: `asc` ou `desc`    |

### Headers

| Nome            | Obrigatório | Descrição            |
| --------------- | ----------- | -------------------- |
| `Authorization` | Sim         | `Bearer {token}`     |
| `Content-Type`  | Sim         | `application/json`   |
| `X-Request-ID`  | Não         | ID para rastreamento |

## Request Body

**Content-Type**: `application/json`

### Schema

| Campo      | Tipo   | Obrigatório | Validação    | Descrição            |
| ---------- | ------ | ----------- | ------------ | -------------------- |
| `name`     | string | Sim         | 1-100 chars  | Nome do recurso      |
| `email`    | string | Sim         | Email válido | Email de contato     |
| `status`   | string | Não         | enum         | `active`, `inactive` |
| `metadata` | object | Não         | -            | Dados adicionais     |

### Exemplo

```json
{
  "name": "Exemplo de Recurso",
  "email": "contato@exemplo.com",
  "status": "active",
  "metadata": {
    "source": "api",
    "tags": ["importante", "novo"]
  }
}
```

## Responses

### 200 OK / 201 Created

**Descrição**: [Quando retorna este status]

**Schema**:

| Campo       | Tipo     | Descrição                  |
| ----------- | -------- | -------------------------- |
| `id`        | string   | ID único gerado            |
| `name`      | string   | Nome do recurso            |
| `createdAt` | datetime | Data de criação (ISO 8601) |
| `updatedAt` | datetime | Data de atualização        |

**Exemplo**:

```json
{
  "id": "rec_abc123",
  "name": "Exemplo de Recurso",
  "email": "contato@exemplo.com",
  "status": "active",
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```

### 400 Bad Request

**Descrição**: Dados de entrada inválidos

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Dados de entrada inválidos",
    "details": [
      {
        "field": "email",
        "message": "Email em formato inválido"
      }
    ]
  }
}
```

### 401 Unauthorized

**Descrição**: Token ausente ou inválido

```json
{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Token de autenticação inválido"
  }
}
```

### 404 Not Found

**Descrição**: Recurso não encontrado

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Recurso não encontrado"
  }
}
```

### 429 Too Many Requests

**Descrição**: Limite de requisições excedido

```json
{
  "error": {
    "code": "RATE_LIMITED",
    "message": "Limite de requisições excedido. Tente novamente em 60 segundos."
  }
}
```

## Exemplos de Uso

### cURL

```bash
curl -X POST https://api.exemplo.com/api/v1/recursos \
  -H "Authorization: Bearer seu_token" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Novo Recurso",
    "email": "novo@exemplo.com"
  }'
```

### JavaScript (fetch)

```javascript
const response = await fetch('https://api.exemplo.com/api/v1/recursos', {
  method: 'POST',
  headers: {
    Authorization: 'Bearer seu_token',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Novo Recurso',
    email: 'novo@exemplo.com',
  }),
});

const data = await response.json();
```

## Notas

- [Observação importante 1]
- [Observação importante 2]

## Relacionados

- [Link para endpoint relacionado 1]
- [Link para endpoint relacionado 2]
