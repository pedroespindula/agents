# Como Documentar APIs

Este documento descreve o processo para documentação de APIs REST/HTTP.

## Princípios

- **Completude**: Documente todos os endpoints públicos
- **Exemplos reais**: Use requests/responses que funcionam
- **Consistência**: Mesmo formato para todos os endpoints
- **Atualização**: Mantenha sincronizado com o código

## Estrutura de Documentação de API

### Visão Geral

Toda API deve ter:

1. **Introdução**: O que a API faz
2. **Autenticação**: Como se autenticar
3. **Base URL**: Endpoint base
4. **Versionamento**: Política de versões
5. **Rate Limiting**: Limites de uso
6. **Erros**: Formato e códigos de erro

### Por Endpoint

Cada endpoint deve documentar:

1. **Método e Path**: `GET /users/{id}`
2. **Descrição**: O que faz
3. **Parâmetros**: Path, query, header
4. **Request Body**: Schema e exemplo
5. **Responses**: Códigos, schemas, exemplos
6. **Erros específicos**: Erros possíveis

## Formato de Parâmetros

### Path Parameters

```markdown
| Parâmetro | Tipo   | Obrigatório | Descrição           |
| --------- | ------ | ----------- | ------------------- |
| id        | string | Sim         | ID único do recurso |
```

### Query Parameters

```markdown
| Parâmetro | Tipo    | Padrão | Descrição                   |
| --------- | ------- | ------ | --------------------------- |
| page      | integer | 1      | Número da página            |
| limit     | integer | 20     | Itens por página (max: 100) |
```

### Headers

```markdown
| Header        | Obrigatório | Descrição                    |
| ------------- | ----------- | ---------------------------- |
| Authorization | Sim         | Bearer token de autenticação |
| Content-Type  | Sim         | application/json             |
```

## Formato de Request/Response

### Request Body

````markdown
**Content-Type**: application/json

| Campo | Tipo   | Obrigatório | Descrição       |
| ----- | ------ | ----------- | --------------- |
| name  | string | Sim         | Nome do usuário |
| email | string | Sim         | Email válido    |

**Exemplo**:

```json
{
  "name": "João Silva",
  "email": "joao@exemplo.com"
}
```
````

### Response

````markdown
**Status**: 201 Created

| Campo     | Tipo     | Descrição       |
| --------- | -------- | --------------- |
| id        | string   | ID gerado       |
| name      | string   | Nome do usuário |
| createdAt | datetime | Data de criação |

**Exemplo**:

```json
{
  "id": "usr_123abc",
  "name": "João Silva",
  "createdAt": "2024-01-15T10:30:00Z"
}
```
````

## Documentação de Erros

### Formato Padrão

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email inválido",
    "details": [
      {
        "field": "email",
        "message": "Formato de email inválido"
      }
    ]
  }
}
```

### Códigos Comuns

| Código HTTP | Código Erro      | Descrição              |
| ----------- | ---------------- | ---------------------- |
| 400         | VALIDATION_ERROR | Dados inválidos        |
| 401         | UNAUTHORIZED     | Não autenticado        |
| 403         | FORBIDDEN        | Sem permissão          |
| 404         | NOT_FOUND        | Recurso não encontrado |
| 429         | RATE_LIMITED     | Limite excedido        |
| 500         | INTERNAL_ERROR   | Erro interno           |

## Ferramentas e Formatos

### OpenAPI/Swagger

- Formato padrão da indústria
- Permite geração automática de docs
- Suporta validação de schema

### Markdown + Exemplos

- Mais flexível
- Fácil de manter no repositório
- Bom para documentação narrativa

## Checklist de API

- [ ] Visão geral da API documentada
- [ ] Autenticação explicada com exemplo
- [ ] Todos os endpoints documentados
- [ ] Exemplos de request/response para cada endpoint
- [ ] Códigos de erro documentados
- [ ] Rate limits documentados
- [ ] Exemplos testados e funcionando
