# Template: Runbook Operacional

Use este template para criar runbooks que guiam operadores em procedimentos e resolução de incidentes.

---

# Runbook: [Nome do Procedimento/Alerta]

## Metadados

| Campo                  | Valor                            |
| ---------------------- | -------------------------------- |
| **Serviço**            | [Nome do serviço]                |
| **Severidade**         | [Crítica / Alta / Média / Baixa] |
| **Última atualização** | [YYYY-MM-DD]                     |
| **Autor**              | [Nome]                           |
| **Revisores**          | [Nomes]                          |

## Descrição

[Descrição do que este runbook cobre:

- Qual problema/procedimento
- Quando usar este runbook
- Impacto se não resolvido]

## Pré-requisitos

### Acessos Necessários

- [ ] Acesso ao [sistema X]
- [ ] Permissão de [tipo] no [recurso]
- [ ] VPN conectada (se aplicável)

### Ferramentas

- [Ferramenta 1] - [Propósito]
- [Ferramenta 2] - [Propósito]

### Conhecimento Prévio

- Familiaridade com [tecnologia/sistema]
- Entendimento de [conceito]

## Diagnóstico

### Sintomas

- [Sintoma 1]: [Descrição de como identificar]
- [Sintoma 2]: [Descrição de como identificar]

### Verificação Inicial

```bash
# Comando para verificar status
[comando]

# Comando para verificar logs
[comando]

# Comando para verificar métricas
[comando]
```

### Causas Comuns

| Causa     | Probabilidade | Como Identificar |
| --------- | ------------- | ---------------- |
| [Causa 1] | Alta          | [Evidência]      |
| [Causa 2] | Média         | [Evidência]      |
| [Causa 3] | Baixa         | [Evidência]      |

## Procedimento de Resolução

### Cenário 1: [Nome do Cenário]

**Quando**: [Condições que indicam este cenário]

**Passos**:

1. **[Ação 1]**

   ```bash
   [comando se aplicável]
   ```

   - Resultado esperado: [O que deve acontecer]
   - Se falhar: [O que fazer]

2. **[Ação 2]**

   ```bash
   [comando se aplicável]
   ```

   - Resultado esperado: [O que deve acontecer]
   - Se falhar: [O que fazer]

3. **[Verificação]**
   ```bash
   [comando para verificar se resolveu]
   ```

### Cenário 2: [Nome do Cenário]

**Quando**: [Condições que indicam este cenário]

**Passos**:

1. [Passo 1]
2. [Passo 2]
3. [Verificação]

## Rollback

Se a resolução causar problemas adicionais:

```bash
# Comandos para reverter mudanças
[comando 1]
[comando 2]
```

## Escalação

### Quando Escalar

- [ ] Problema não resolvido após [X minutos]
- [ ] Impacto maior que [threshold]
- [ ] Causa raiz desconhecida
- [ ] Necessidade de mudança em produção

### Para Quem Escalar

| Nível | Contato       | Canal            | Quando     |
| ----- | ------------- | ---------------- | ---------- |
| L1    | [Time/Pessoa] | [Slack/Telefone] | [Condição] |
| L2    | [Time/Pessoa] | [Slack/Telefone] | [Condição] |
| L3    | [Time/Pessoa] | [Slack/Telefone] | [Condição] |

## Comunicação

### Templates de Comunicação

**Início do incidente**:

```
[INCIDENTE] [Serviço] - [Descrição breve]
Impacto: [Descrição do impacto]
Status: Investigando
Próxima atualização: [tempo]
```

**Atualização**:

```
[ATUALIZAÇÃO] [Serviço]
Status: [Em progresso / Mitigado / Resolvido]
Ações: [O que foi feito]
Próximos passos: [O que será feito]
```

**Resolução**:

```
[RESOLVIDO] [Serviço]
Causa raiz: [Descrição]
Resolução: [O que foi feito]
Duração: [Tempo total]
```

## Pós-incidente

### Checklist

- [ ] Verificar se serviço está estável
- [ ] Documentar timeline do incidente
- [ ] Criar ticket para postmortem (se aplicável)
- [ ] Notificar stakeholders da resolução

### Métricas para Monitorar

- [Métrica 1]: [Valor normal esperado]
- [Métrica 2]: [Valor normal esperado]

## Referências

- [Link para documentação do serviço]
- [Link para dashboard de monitoramento]
- [Link para logs]
- [Link para runbooks relacionados]

## Histórico de Revisões

| Data   | Autor  | Mudança                |
| ------ | ------ | ---------------------- |
| [Data] | [Nome] | Versão inicial         |
| [Data] | [Nome] | [Descrição da mudança] |
