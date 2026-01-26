# OpenCode Agents

Sistema de gerenciamento multi-configuração para agentes OpenCode com suporte a múltiplos setups independentes.

[![Shell](https://img.shields.io/badge/shell-bash%20%7C%20zsh-blue)](https://www.gnu.org/software/bash/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## 📋 Sobre

Este repositório gerencia múltiplas configurações de agentes OpenCode, permitindo alternar facilmente entre diferentes setups de agentes, skills e comandos personalizados através de um único comando.

**Principais recursos:**
- 🔄 Troca rápida entre configurações
- 🎨 Interface colorida e amigável
- 🔒 Backup automático antes de mudanças
- ✅ Validação de configurações
- 📦 Desacoplado do shell (portável)
- 🚀 Configuração versionável

## 📁 Estrutura

```
agents/
├── specs/                           # Configurações disponíveis
│   ├── personal-agents/             # Configuração de agentes pessoais
│   │   ├── opencode.jsonc          # Config do OpenCode
│   │   ├── opencode.metadata.jsonc # Metadata da configuração (opcional)
│   │   ├── agent/                  # Definições de agentes
│   │   ├── skill/                  # Skills customizadas
│   │   └── command/                # Comandos personalizados
│   └── open-agents/                # Outra configuração
├── bin/                             # Scripts de uso contínuo
│   ├── opencode-config             # Gerenciador de configurações (inclui subcomando completion)
│   └── opencode-recover            # Recuperador de sessões
├── completions/                     # Shell completions (autocomplete)
│   ├── opencode-config-completion.bash   # Bash completion para opencode-config
│   ├── opencode-config-completion.zsh    # Zsh completion para opencode-config
│   ├── opencode-recover-completion.bash  # Bash completion para opencode-recover
│   ├── opencode-recover-completion.zsh   # Zsh completion para opencode-recover
│   └── README.md                   # Documentação dos completions
├── .opencode-env                   # Configuração ativa (não versionado)
└── .opencode-env.example           # Exemplo de configuração
```

## 🚀 Quick Start

```bash
# 1. Clone o repositório
git clone <repo-url> ~/agents && cd ~/agents

# 2. Inicialize a configuração
./bin/opencode-config init

# 3. Configure seu shell (adicione ao ~/.zshrc ou ~/.bashrc)
echo '[ -f "$HOME/agents/.opencode-env" ] && source "$HOME/agents/.opencode-env"' >> ~/.zshrc

# 4. Recarregue o shell
source ~/.zshrc

# 5. (Opcional) Instale autocomplete com tab
opencode-config completion install

# 6. Verifique a instalação
opencode-config current
```

**Pronto!** 🎉

## 📦 Instalação Detalhada

### Passo 1: Clone o repositório

```bash
git clone <repo-url> ~/agents
cd ~/agents
```

### Passo 2: Inicialize a configuração

```bash
# Usar configuração padrão (personal-agents)
./bin/opencode-config init

# Ou especificar uma configuração
./bin/opencode-config init open-agents
```

### Passo 3: Configure seu shell

Adicione ao seu `~/.zshrc` ou `~/.bashrc`:

```bash
# OpenCode Configuration
[ -f "$HOME/agents/.opencode-env" ] && source "$HOME/agents/.opencode-env"
```

**Opcional:** Adicione aliases para facilitar o uso:

```bash
# OpenCode aliases
alias occ='opencode-config'
alias occ-ls='opencode-config list'
alias occ-use='opencode-config use'
alias occ-cur='opencode-config current'
```

### Passo 4: Recarregue o shell

```bash
source ~/.zshrc
# ou
source ~/.bashrc
```

### Passo 5: (Opcional) Instale autocomplete

Para habilitar autocomplete com tab nos comandos `opencode-config` e `opencode-recover`:

```bash
# Instalação automática (detecta bash ou zsh)
opencode-config completion install

# Ou especifique o shell manualmente
opencode-config completion install bash   # Para bash
opencode-config completion install zsh    # Para zsh

# Verificar status da instalação
opencode-config completion status

# Ver ajuda
opencode-config completion help
```

Após a instalação, recarregue o shell:

```bash
source ~/.zshrc  # ou ~/.bashrc
```

**Recursos do autocomplete:**

- **`opencode-config`**: Completa comandos (`list`, `use`, `show`, `completion`, etc.) e nomes de configurações
- **`opencode-recover`**: Completa opções (`-s`, `--session`, etc.) e IDs de sessões

**Teste o autocomplete:**

```bash
opencode-config <TAB>              # Lista comandos disponíveis
opencode-config use <TAB>          # Lista configurações disponíveis
opencode-config completion <TAB>   # Lista subcomandos de completion
opencode-recover -<TAB>            # Lista opções disponíveis
```

### Passo 6: Verifique a instalação

```bash
# Verificar variáveis de ambiente
echo $OPENCODE_AGENTS
echo $OPENCODE_CONFIG

# Testar comando
opencode-config current
```

## 💻 Uso

### Comandos Básicos

#### Listar configurações disponíveis

```bash
opencode-config list
# ou com alias
occ ls
```

<details>
<summary>📸 Ver saída de exemplo</summary>

```
Available OpenCode configurations:

  • open-agents (no opencode.jsonc)
  • personal-agents (active)
```
</details>

#### Ver configuração atual

```bash
opencode-config current
# ou com alias
occ cur
```

<details>
<summary>📸 Ver saída de exemplo</summary>

```
Current configuration: personal-agents

Environment variables:
  OPENCODE_AGENTS="personal-agents"
  PATH="$PATH:$HOME/agents/specs/$OPENCODE_AGENTS/bin/"
  OPENCODE_CONFIG=$HOME/agents/specs/$OPENCODE_AGENTS/opencode.jsonc
  OPENCODE_CONFIG_DIR=$HOME/agents/specs/$OPENCODE_AGENTS/
```
</details>

#### Trocar de configuração

```bash
opencode-config use open-agents
# ou com alias
occ use open-agents
```

<details>
<summary>📸 Ver saída de exemplo</summary>

```
✓ Backed up existing configuration to .opencode-env.backup
✓ Switched to configuration: open-agents
⚠ Reload your shell to apply changes: source ~/.zshrc
```
</details>

**Importante:** Após trocar, recarregue o shell:
```bash
source ~/.zshrc
```

#### Ver detalhes de uma configuração

```bash
opencode-config show personal-agents
# ou com alias
occ show personal-agents
```

<details>
<summary>📸 Ver saída de exemplo</summary>

```
Configuration: personal-agents

Location: /Users/pedro/agents/specs/personal-agents

Structure:
  ✓ opencode.jsonc
  ✓ agent/
  ✓ skill/
  ✓ command/
  ✓ bin/

Agents:
  • architect
  • core
  • engineer
  • sre
  • tester

Skills:
  • adr
  • code-review
  • commit-conventions
  • documentation
  ...
```
</details>

#### Ajuda

```bash
opencode-config help
# ou
opencode-config --help
```

### Referência de Comandos

| Comando                           | Alias      | Descrição                                    |
| --------------------------------- | ---------- | -------------------------------------------- |
| `opencode-config init [name]`     | -          | Inicializa .opencode-env (padrão: personal)  |
| `opencode-config list`            | `ls`       | Lista todas configurações disponíveis        |
| `opencode-config current`         | -          | Mostra configuração ativa                    |
| `opencode-config use <name>`      | `switch`   | Troca para configuração especificada         |
| `opencode-config show <name>`     | `info`     | Mostra detalhes de uma configuração          |
| `opencode-config create <name> [template]` | `new` | Cria nova configuração a partir de template |
| `opencode-config completion <cmd>` | `completions` | Gerencia autocomplete (install/uninstall/status) |
| `opencode-config help`            | `-h`, `--help` | Mostra ajuda                             |

### Workflow Típico

#### Trocar entre configurações existentes

```bash
# 1. Ver configurações disponíveis
opencode-config list

# 2. Ver detalhes de uma configuração
opencode-config show open-agents

# 3. Trocar para a configuração
opencode-config use open-agents

# 4. Recarregar shell
source ~/.zshrc

# 5. Confirmar mudança
opencode-config current
```

#### Criar e usar nova configuração

```bash
# 1. Criar nova configuração
opencode-config create my-project

# 2. Customizar (opcional)
vim specs/my-project/opencode.jsonc

# 3. Ativar
opencode-config use my-project

# 4. Recarregar shell
source ~/.zshrc

# 5. Verificar
opencode-config current
```

## 🛠️ Criando Nova Configuração

### Método 1: Usando o comando `create` (Recomendado)

O comando `create` cria uma nova configuração vazia ou a partir de um template existente:

```bash
# Criar nova configuração vazia (estrutura básica)
opencode-config create my-config

# Criar a partir de um template existente
opencode-config create my-config core
```

<details>
<summary>📸 Ver saída de exemplo (configuração vazia)</summary>

```
ℹ Creating new configuration 'my-config' with empty template...
✓ Configuration structure created at /Users/pedro/agents/specs/my-config
ℹ Edit opencode.metadata.jsonc to customize description, author, and tags

Created structure:
  ✓ opencode.jsonc
  ✓ opencode.metadata.jsonc
  ✓ agent/ (empty)
  ✓ skill/ (empty)
  ✓ command/ (empty)

ℹ Next steps:
  1. Edit configuration: vim /Users/pedro/agents/specs/my-config/opencode.jsonc
  2. Customize agents, skills, and commands as needed
  3. Activate: opencode-config use my-config
  4. Reload shell: source ~/.zshrc
```
</details>

<details>
<summary>📸 Ver saída de exemplo (com template)</summary>

```
ℹ Creating new configuration 'my-config' from template 'core'...
✓ Configuration structure created at /Users/pedro/agents/specs/my-config
ℹ Edit opencode.metadata.jsonc to customize description, author, and tags

Created structure:
  ✓ opencode.jsonc
  ✓ opencode.metadata.jsonc
  ✓ agent/ (5 agents)
  ✓ skill/ (20 skills)
  ✓ command/ (6 commands)

ℹ Next steps:
  1. Edit configuration: vim /Users/pedro/agents/specs/my-config/opencode.jsonc
  2. Customize agents, skills, and commands as needed
  3. Activate: opencode-config use my-config
  4. Reload shell: source ~/.zshrc
```
</details>

**Próximos passos:**

```bash
# 1. Editar configuração
vim specs/my-config/opencode.jsonc

# 2. Customizar agentes, skills e comandos conforme necessário
# ... edite os arquivos em agent/, skill/, command/

# 3. Ativar a nova configuração
opencode-config use my-config
source ~/.zshrc
```

### Método 2: Cópia manual

```bash
# 1. Copiar configuração existente
cp -r specs/personal-agents specs/my-config

# 2. Editar e customizar
vim specs/my-config/opencode.jsonc

# 3. Ativar
opencode-config use my-config
source ~/.zshrc
```

### Método 3: Do zero

```bash
# 1. Criar estrutura de diretórios
mkdir -p specs/my-config/{agent,skill,command}

# 2. Criar opencode.jsonc
cat > specs/my-config/opencode.jsonc << 'EOF'
{
  "$schema": "https://opencode.ai/config.json",
  "instructions": ["instructions/**/*.md"],
  "default_agent": "core",
  "agent": {
    "core": {
      "steps": 50,
      "color": "#6366F1"
    }
  }
}
EOF

# 3. Adicionar agentes, skills e comandos conforme necessário

# 4. Ativar a configuração
opencode-config use my-config
source ~/.zshrc
```

## 📝 Metadata de Configuração

Cada configuração pode ter um arquivo `opencode.metadata.jsonc` com informações descritivas:

```jsonc
{
  // Metadata for OpenCode configuration
  "name": "Core Agents",
  "description": "Core OpenCode agents with architect, engineer, tester, and SRE specialists",
  "version": "1.0.0",
  "author": "Your Name",
  "tags": ["core", "development", "production"],
  "created": "2024-01-26",
  "updated": "2024-01-26"
}
```

### Campos Disponíveis

| Campo         | Tipo     | Descrição                                    |
| ------------- | -------- | -------------------------------------------- |
| `name`        | string   | Nome amigável da configuração                |
| `description` | string   | Descrição detalhada da configuração          |
| `version`     | string   | Versão da configuração (semver)              |
| `author`      | string   | Autor ou responsável pela configuração       |
| `tags`        | array    | Tags para categorização                      |
| `created`     | string   | Data de criação (YYYY-MM-DD)                 |
| `updated`     | string   | Data da última atualização (YYYY-MM-DD)      |

### Como o Metadata é Usado

- **`opencode-config list`**: Mostra a descrição ao lado de cada configuração
- **`opencode-config show <name>`**: Exibe todos os campos do metadata
- **`opencode-config create`**: Cria automaticamente o arquivo com valores padrão

### Exemplo de Uso

```bash
# Criar configuração (metadata é criado automaticamente)
opencode-config create my-project

# Editar metadata
vim specs/my-project/opencode.metadata.jsonc

# Ver metadata
opencode-config show my-project
```

<details>
<summary>📸 Ver saída com metadata</summary>

```bash
$ opencode-config list
Available OpenCode configurations:

  • core (active) - Core OpenCode agents with architect, engineer, tester, and SRE specialists
  • my-project - OpenCode configuration for my-project

$ opencode-config show my-project
Configuration: my-project
Description: OpenCode configuration for my-project
Version: 1.0.0
Author: Your Name
Tags: development, personal

Location: /Users/pedro/agents/specs/my-project
...
```
</details>

## 🌍 Variáveis de Ambiente

O arquivo `.opencode-env` exporta as seguintes variáveis:

| Variável               | Descrição                                    | Exemplo                                      |
| ---------------------- | -------------------------------------------- | -------------------------------------------- |
| `OPENCODE_AGENTS`      | Nome da configuração ativa                   | `personal-agents`                            |
| `OPENCODE_CONFIG`      | Caminho para opencode.jsonc                  | `$HOME/agents/specs/personal-agents/opencode.jsonc` |
| `OPENCODE_CONFIG_DIR`  | Diretório da configuração                    | `$HOME/agents/specs/personal-agents/`        |
| `PATH`                 | Inclui bin/ da configuração no PATH          | `$PATH:$HOME/agents/specs/$OPENCODE_AGENTS/bin/` |

## ⌨️ Autocomplete com Tab

O repositório inclui suporte a autocomplete para bash e zsh, facilitando o uso dos comandos `opencode-config` e `opencode-recover`.

### Instalação

```bash
# Instalação automática (recomendado)
opencode-config completion install

# Ou especifique o shell
opencode-config completion install bash
opencode-config completion install zsh

# Verificar status
opencode-config completion status

# Ver ajuda
opencode-config completion help
```

### Funcionalidades

#### opencode-config

- **Comandos**: `init`, `list`, `current`, `use`, `show`, `create`, `completion`, `help`
- **Configurações**: Autocomplete de nomes de configurações disponíveis
- **Templates**: Autocomplete de templates ao criar nova configuração
- **Completion**: Autocomplete de subcomandos (`install`, `uninstall`, `status`, `help`)

**Exemplos:**

```bash
opencode-config <TAB>                    # Lista: init, list, current, use, show, create, completion, help
opencode-config use <TAB>                # Lista: core, personal-agents, my-project, ...
opencode-config show <TAB>               # Lista: core, personal-agents, my-project, ...
opencode-config create my-cfg <TAB>      # Lista templates disponíveis
opencode-config completion <TAB>         # Lista: install, uninstall, status, help
opencode-config completion install <TAB> # Lista: bash, zsh, auto
```

#### opencode-recover

- **Opções**: `-s`, `--session`, `-l`, `--list`, `-a`, `--all`, `-u`, `--user`, `-t`, `--assistant`, `-r`, `--raw`, `-h`, `--help`
- **Sessões**: Autocomplete de IDs de sessões (quando usar `-s` ou `--session`)

**Exemplos:**

```bash
opencode-recover -<TAB>            # Lista todas as opções
opencode-recover --<TAB>           # Lista opções longas
opencode-recover -s <TAB>          # Lista IDs de sessões disponíveis
```

### Instalação Manual

Se preferir instalar manualmente, adicione ao seu `~/.bashrc` ou `~/.zshrc`:

**Bash (~/.bashrc):**

```bash
# OpenCode completions
[ -f "$HOME/agents/completions/opencode-config-completion.bash" ] && source "$HOME/agents/completions/opencode-config-completion.bash"
[ -f "$HOME/agents/completions/opencode-recover-completion.bash" ] && source "$HOME/agents/completions/opencode-recover-completion.bash"
```

**Zsh (~/.zshrc):**

```bash
# OpenCode completions
fpath=($HOME/agents/completions $fpath)
autoload -Uz compinit && compinit
```

Para zsh, também crie os symlinks:

```bash
cd ~/agents/completions
ln -sf opencode-config-completion.zsh _opencode-config
ln -sf opencode-recover-completion.zsh _opencode-recover
```

### Desinstalação

```bash
# Remover autocomplete
opencode-config completion uninstall

# Ou especifique o shell
opencode-config completion uninstall bash
opencode-config completion uninstall zsh
```

Um backup do arquivo de configuração do shell será criado automaticamente.

## 🎨 Cores e Temas

O script detecta automaticamente se o terminal suporta cores e as ativa quando apropriado.

### Forçar cores

```bash
# Por comando
FORCE_COLOR=1 opencode-config list

# Permanente (adicione ao ~/.zshrc)
export FORCE_COLOR=1

# Via alias
alias occ='FORCE_COLOR=1 opencode-config'
```

### Desabilitar cores

```bash
# Por comando
NO_COLOR=1 opencode-config list

# Permanente (adicione ao ~/.zshrc)
export NO_COLOR=1
```

### Verificar suporte

```bash
# Ver tipo de terminal
echo $TERM

# Ver número de cores suportadas
tput colors
```

## 🔧 Troubleshooting

### ❌ Cores não aparecem no terminal

**Causa:** Terminal não detectado como interativo ou não suporta cores.

**Solução:**
```bash
# Forçar cores por comando
FORCE_COLOR=1 opencode-config list

# Ou adicionar permanentemente ao ~/.zshrc
export FORCE_COLOR=1

# Ou criar alias
alias occ='FORCE_COLOR=1 opencode-config'
```

### ❌ Configuração não está sendo aplicada

**Causa:** Shell não está carregando o arquivo `.opencode-env`.

**Diagnóstico:**
```bash
# Verificar se o arquivo existe
ls -la ~/agents/.opencode-env

# Verificar se está sendo carregado no shell
grep "opencode-env" ~/.zshrc

# Verificar variáveis
echo $OPENCODE_AGENTS
echo $OPENCODE_CONFIG
```

**Solução:**
```bash
# Adicionar ao ~/.zshrc se não estiver
echo '[ -f "$HOME/agents/.opencode-env" ] && source "$HOME/agents/.opencode-env"' >> ~/.zshrc

# Recarregar shell
source ~/.zshrc

# Ou source direto
source ~/agents/.opencode-env
```

### ❌ Comando não encontrado

**Causa:** Script não está no PATH ou não é executável.

**Solução:**
```bash
# Verificar se script existe
ls -la ~/agents/bin/opencode-config

# Tornar executável
chmod +x ~/agents/bin/opencode-config

# Adicionar ao PATH temporariamente
export PATH="$PATH:$HOME/agents/bin"

# Ou adicionar permanentemente ao ~/.zshrc
echo 'export PATH="$PATH:$HOME/agents/bin"' >> ~/.zshrc
```

### ❌ Configuração não encontrada

**Causa:** Configuração não existe em `specs/`.

**Diagnóstico:**
```bash
# Liste configurações disponíveis
opencode-config list

# Verifique estrutura
ls -la ~/agents/specs/
```

**Solução:**
```bash
# Criar nova configuração
mkdir -p ~/agents/specs/my-config/{agent,skill,command}
cp ~/agents/specs/personal-agents/opencode.jsonc ~/agents/specs/my-config/

# Ou usar uma configuração existente
opencode-config list
opencode-config use personal-agents
```

### ❌ Variáveis não carregam após trocar configuração

**Causa:** Shell não foi recarregado após a troca.

**Solução:**
```bash
# Sempre recarregar após trocar
source ~/.zshrc

# Ou reabrir o terminal
```

## 🔄 Migração do Sistema Antigo

Se você estava usando variáveis definidas diretamente no `~/.zsh_paths`:

### Antes (Sistema Antigo)

```bash
# ~/.zsh_paths
export OPENCODE_AGENTS="personal-agents"
export PATH="~/repos/cora/alerts-manager/bin/:$PATH"
export OPENCODE_CONFIG=$HOME/agents/specs/$OPENCODE_AGENTS/opencode.jsonc
export OPENCODE_CONFIG_DIR=$HOME/agents/specs/$OPENCODE_AGENTS/
```

### Depois (Sistema Novo)

```bash
# ~/.zsh_paths
[ -f "$HOME/agents/.opencode-env" ] && source "$HOME/agents/.opencode-env"
```

### Passos da Migração

1. **Backup do arquivo atual:**
   ```bash
   cp ~/.zsh_paths ~/.zsh_paths.backup
   ```

2. **Inicialize o novo sistema:**
   ```bash
   cd ~/agents
   ./bin/opencode-config init personal-agents
   ```

3. **Edite o `~/.zsh_paths`:**
   - Remova as linhas antigas de `OPENCODE_*`
   - Adicione: `[ -f "$HOME/agents/.opencode-env" ] && source "$HOME/agents/.opencode-env"`

4. **Recarregue o shell:**
   ```bash
   source ~/.zshrc
   ```

5. **Verifique:**
   ```bash
   opencode-config current
   ```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça suas alterações
4. Teste com `opencode-config`
5. Commit seguindo [Conventional Commits](https://www.conventionalcommits.org/)
6. Push para a branch (`git push origin feature/nova-feature`)
7. Abra um Pull Request

## 📄 Licença

[Especificar licença]

## 📧 Contato

[Informações de contato]

---

**Feito com ❤️ para facilitar o gerenciamento de agentes OpenCode**
