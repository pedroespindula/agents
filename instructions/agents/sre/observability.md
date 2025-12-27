# Como Configurar Observabilidade

Este documento descreve o processo para configuração de observabilidade em sistemas.

## Os Três Pilares

### 1. Logs

Registro de eventos discretos.

**Quando usar:**

- Debug de problemas específicos
- Auditoria e compliance
- Eventos de negócio

**Boas práticas:**

```json
{
  "timestamp": "2024-01-15T10:30:00.000Z",
  "level": "ERROR",
  "service": "user-service",
  "trace_id": "abc123",
  "span_id": "def456",
  "message": "Failed to process request",
  "error": {
    "type": "ValidationError",
    "message": "Invalid email format"
  },
  "context": {
    "user_id": "usr_123",
    "endpoint": "/api/users"
  }
}
```

**Níveis de log:**

| Nível | Uso                | Exemplo              |
| ----- | ------------------ | -------------------- |
| DEBUG | Desenvolvimento    | Valores de variáveis |
| INFO  | Operação normal    | Request processado   |
| WARN  | Potencial problema | Retry necessário     |
| ERROR | Falha recuperável  | Validação falhou     |
| FATAL | Falha crítica      | Serviço não inicia   |

### 2. Métricas

Dados numéricos agregados ao longo do tempo.

**Quando usar:**

- Monitoramento de saúde
- Alertas
- Dashboards
- Capacity planning

**Tipos de métricas:**

| Tipo      | Descrição               | Exemplo              |
| --------- | ----------------------- | -------------------- |
| Counter   | Valor que só aumenta    | Total de requests    |
| Gauge     | Valor que varia         | Memória em uso       |
| Histogram | Distribuição de valores | Latência de requests |
| Summary   | Percentis calculados    | p99 de latência      |

**Convenções de nomenclatura:**

```
# Formato: <namespace>_<subsystem>_<name>_<unit>

http_requests_total
http_request_duration_seconds
process_memory_bytes
database_connections_active
```

**Metodologias:**

RED (para serviços):

- **R**ate: Requests por segundo
- **E**rrors: Taxa de erros
- **D**uration: Latência

USE (para recursos):

- **U**tilization: % de uso
- **S**aturation: Fila de espera
- **E**rrors: Erros de recurso

### 3. Traces

Rastreamento de requisições através do sistema.

**Quando usar:**

- Debug de sistemas distribuídos
- Análise de latência
- Mapeamento de dependências

**Estrutura:**

```
Trace (trace_id: abc123)
├── Span: API Gateway (span_id: 001, duration: 150ms)
│   ├── Span: Auth Service (span_id: 002, duration: 20ms)
│   └── Span: User Service (span_id: 003, duration: 100ms)
│       ├── Span: Database Query (span_id: 004, duration: 50ms)
│       └── Span: Cache Lookup (span_id: 005, duration: 5ms)
```

**Atributos importantes:**

- `service.name`
- `http.method`, `http.url`, `http.status_code`
- `db.system`, `db.statement`
- `error`, `error.message`

## Implementação

### Checklist de Logs

- [ ] Formato estruturado (JSON)
- [ ] Timestamp em UTC ISO 8601
- [ ] Correlation ID (trace_id) incluído
- [ ] Níveis de log apropriados
- [ ] Sem dados sensíveis (PII, secrets)
- [ ] Rotação configurada
- [ ] Centralização (ELK, Datadog, etc.)

### Checklist de Métricas

- [ ] Métricas RED para endpoints
- [ ] Métricas USE para recursos
- [ ] Labels consistentes
- [ ] Histogramas para latências
- [ ] Scraping/push configurado
- [ ] Retenção adequada
- [ ] Dashboards criados

### Checklist de Traces

- [ ] SDK/agent instalado
- [ ] Context propagation configurado
- [ ] Sampling apropriado
- [ ] Spans com atributos relevantes
- [ ] Integração com logs (trace_id)

## Alertas

### Baseados em Sintomas (Preferido)

```yaml
# Bom: alerta sobre sintoma visível ao usuário
- alert: HighErrorRate
  expr: rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m]) > 0.01
  for: 5m
  labels:
    severity: critical
  annotations:
    summary: 'Taxa de erro acima de 1%'
```

### Baseados em Causa (Usar com Cautela)

```yaml
# Usar apenas quando sintoma não é observável
- alert: DiskSpaceLow
  expr: node_filesystem_avail_bytes / node_filesystem_size_bytes < 0.1
  for: 10m
  labels:
    severity: warning
  annotations:
    summary: 'Disco com menos de 10% livre'
```

### Multi-window, Multi-burn-rate

Para alertas de SLO:

```yaml
# Burn rate alto por pouco tempo OU burn rate médio por mais tempo
- alert: SLOBudgetBurn
  expr: |
    (
      slo_errors_per_request:ratio_rate1h > (14.4 * 0.001)
      and
      slo_errors_per_request:ratio_rate5m > (14.4 * 0.001)
    )
    or
    (
      slo_errors_per_request:ratio_rate6h > (6 * 0.001)
      and
      slo_errors_per_request:ratio_rate30m > (6 * 0.001)
    )
```

## Dashboards

### Estrutura Recomendada

1. **Overview**: Saúde geral do sistema
2. **Por serviço**: Métricas detalhadas
3. **Infraestrutura**: Recursos e capacidade
4. **Negócio**: KPIs e métricas de produto

### Elementos de um Bom Dashboard

- Título e descrição claros
- Período de tempo selecionável
- Variáveis para filtrar (ambiente, serviço)
- Indicadores de status (verde/amarelo/vermelho)
- Links para runbooks e logs
