---
name: agent-new
agent: core
description: Cria um novo subagente com estrutura completa de instruções e templates
---

Crie um novo subagente para o OpenCode seguindo o padrão estabelecido neste repositório.

## Informações do Novo Agente

$ARGUMENTS

## Processo de Criação

Siga este processo passo a passo:

### 1. Coleta de Informações

Se as informações acima estiverem incompletas, pergunte ao usuário:

- **Nome do agente**: Identificador único em kebab-case (ex: `engineer`, `scribe`)
- **Descrição**: Breve descrição da especialidade (1 linha)
- **Responsabilidades**: Lista de 4-6 responsabilidades principais
- **Tipos de tarefa**: Quais instruções específicas o agente precisa (ex: feature.md, bugfix.md)
- **Templates**: Quais templates reutilizáveis o agente deve ter

### 2. Definição de Configuração

Defina com o usuário:

- **Ferramentas**: Quais ferramentas habilitar (`write`, `edit`, `bash`, `atlassian`)
- **Temperature**: Geralmente `0.1` para tarefas precisas, `0.2` para tarefas criativas
- **Mode**: Sempre `subagent` (a menos que seja um agente primário)

### 3. Criação da Estrutura

Crie os seguintes arquivos:

```
agent/<nome>.md                              # Definição do agente
instructions/agents/<nome>/
├── standards.md                             # Padrões e restrições
├── <instrucao-1>.md                         # Instruções de tarefa
├── <instrucao-2>.md                         # Instruções de tarefa
└── templates/                               # Templates reutilizáveis
    └── <template>.md
```

### 4. Padrões a Seguir

#### Arquivo do Agente (`agent/<nome>.md`)

```markdown
---
name: <nome>
description: <descrição concisa>
mode: subagent
temperature: 0.1
tools:
  write: true
  edit: <true/false>
  bash: <true/false>
  atlassian: false
---

Você é o **<Nome>**, o subagente especializado em <especialidade>.
Seu papel é <descrição do papel>.

## Princípios Fundamentais

1. **<Princípio 1>**: <Descrição>
2. **<Princípio 2>**: <Descrição>
3. **<Princípio 3>**: <Descrição>
4. **<Princípio 4>**: <Descrição>

## Responsabilidades

- <Responsabilidade 1>
- <Responsabilidade 2>
- <Responsabilidade 3>
- <Responsabilidade 4>

## Restrições e Padrões

@instructions/agents/<nome>/standards.md

## Instruções por Tipo de Tarefa

### <Tipo de Tarefa 1>

@instructions/agents/<nome>/<instrucao-1>.md

### <Tipo de Tarefa 2>

@instructions/agents/<nome>/<instrucao-2>.md

## Templates Disponíveis

### <Nome do Template>

@instructions/agents/<nome>/templates/<template>.md
```

#### Arquivo de Standards (`instructions/agents/<nome>/standards.md`)

Deve conter:

- Restrições gerais do agente
- Princípios e boas práticas da especialidade
- Anti-patterns a evitar
- Checklist de qualidade

#### Arquivos de Instrução (`instructions/agents/<nome>/<instrucao>.md`)

Deve conter:

- Objetivo da tarefa
- Fluxo de execução passo a passo
- Checklist de verificação
- Exemplos quando relevante

#### Templates (`instructions/agents/<nome>/templates/<template>.md`)

Deve conter:

- Estrutura reutilizável
- Placeholders claros com `[descrição]`
- Exemplo preenchido quando útil

### 5. Atualização do Core

Após criar o agente, atualize a tabela de subagentes em `agent/core.md`:

```markdown
| `@<nome>` | <Especialidade> | <Quando usar> |
```

### 6. Validação

Verifique se:

- [ ] Arquivo do agente criado em `agent/<nome>.md`
- [ ] Pasta de instruções criada em `instructions/agents/<nome>/`
- [ ] `standards.md` criado
- [ ] Instruções de tarefa criadas
- [ ] Templates criados (se aplicável)
- [ ] Referências `@` no arquivo do agente estão corretas
- [ ] Tabela no `core.md` atualizada

## Referências

Use os agentes existentes como referência:

- `agent/engineer.md` — Exemplo de agente de desenvolvimento
- `agent/architect.md` — Exemplo de agente de arquitetura
- `agent/scribe.md` — Exemplo de agente de documentação
- `agent/tester.md` — Exemplo de agente de testes
- `agent/sre.md` — Exemplo de agente de operações
