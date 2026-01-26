# Shell Completions

Este diretório contém os arquivos de autocomplete (completions) para bash e zsh do comando `opencode-config`.

## Arquivos

- `opencode-config-completion.bash` - Autocomplete para bash do comando `opencode-config`
- `opencode-config-completion.zsh` - Autocomplete para zsh do comando `opencode-config`
- `opencode-config-help.txt` - Referência rápida de comandos
- `_opencode-config` - Symlink para zsh (criado automaticamente)

## Instalação

**Não instale manualmente!** Use o comando integrado:

```bash
# Instalação automática (detecta bash ou zsh)
opencode-config completion install

# Ou especifique o shell
opencode-config completion install bash
opencode-config completion install zsh

# Verificar status
opencode-config completion status

# Desinstalar
opencode-config completion uninstall
```

## Instalação Manual (Avançado)

Se você preferir instalar manualmente ou está tendo problemas com a instalação automática:

### Bash

Adicione ao seu `~/.bashrc`:

```bash
# OpenCode completions
if [ -f "$HOME/agents/completions/opencode-config-completion.bash" ]; then
  source "$HOME/agents/completions/opencode-config-completion.bash"
fi
```

Depois recarregue:

```bash
source ~/.bashrc
```

### Zsh

Adicione ao seu `~/.zshrc`:

```bash
# OpenCode completions
fpath=($HOME/agents/completions $fpath)
autoload -Uz compinit && compinit
```

O symlink `_opencode-config` é criado automaticamente pelo comando `opencode-config completion install`.

Depois recarregue:

```bash
source ~/.zshrc
```

## Funcionalidades

### Comandos Principais
- ✅ Autocomplete de todos os comandos: `init`, `install`, `uninstall`, `list`, `current`, `use`, `show`, `create`, `remote`, `completion`, `aliases`, `recover`, `help`
- ✅ Autocomplete de nomes de configurações disponíveis (para `use`, `show`, `init`, etc.)
- ✅ Autocomplete de templates (para `create`)
- ✅ Funciona com alias `oc`

### Subcomandos

**completion/completions:**
- Subcomandos: `install`, `uninstall`, `status`, `help`
- Shells: `bash`, `zsh`, `auto`

**aliases/alias:**
- Subcomandos: `install`, `uninstall`, `status`, `help`
- Shells: `bash`, `zsh`, `auto`

**remote:**
- Subcomandos: `install`, `uninstall`, `update`, `upgrade`, `list`, `ls`, `help`
- Flags para `install`: `--profile`, `--install-path`, `--installer`
- Autocomplete de configurações instaladas (para `uninstall`, `update`)

**recover:**
- Flags: `-s/--session`, `-l/--list`, `-a/--all`, `-u/--user`, `-t/--assistant`, `-r/--raw`, `-h/--help`
- Descrições inline (zsh)

**import:**
- Flags: `--installer`, `--profile`, `--install-path`
- Autocomplete de diretórios para `--install-path` (zsh)

### Diferenças Bash vs Zsh

**Bash:**
- Completions básicos com flags
- Sem descrições inline
- Mais rápido em sistemas lentos

**Zsh:**
- Completions avançados com `_arguments`
- Descrições inline para todos os comandos e flags
- Autocomplete de diretórios para paths
- Melhor experiência visual

## Desenvolvimento

### Estrutura dos Arquivos de Completion

**Bash:**
- Usa `_init_completion` do bash-completion
- Função principal: `_opencode_config_completion`
- Registra com `complete -F` para `opencode-config` e `oc`
- Suporta flags em qualquer posição para `import` e `remote install`

**Zsh:**
- Usa `#compdef opencode-config oc` no topo do arquivo
- Função principal: `_opencode_config`
- Usa `_describe` para comandos com descrições
- Usa `_arguments` para flags avançados com descrições
- Requer symlinks com prefixo `_` (convenção do zsh)

### Testando Mudanças

Após modificar os arquivos de completion:

```bash
# Bash
source ~/agents/completions/opencode-config-completion.bash

# Zsh - limpar cache e recarregar
rm -f ~/.zcompdump*
unfunction _opencode_config 2>/dev/null
autoload -Uz compinit && compinit
```

### Debugging

**Bash:**
```bash
# Ver função de completion carregada
declare -f _opencode_config_completion

# Testar manualmente (set variables first)
COMP_WORDS=(opencode-config use)
COMP_CWORD=2
_opencode_config_completion
echo "${COMPREPLY[@]}"
```

**Zsh:**
```bash
# Ver função de completion carregada
which _opencode_config

# Modo verbose para debug
setopt BASH_REMATCH
zstyle ':completion:*' verbose yes
zstyle ':completion:*:descriptions' format '%B%d%b'
```

## Exemplos de Uso

```bash
# Comandos principais
opencode-config <TAB>              # Mostra todos os comandos
opencode-config use <TAB>          # Mostra configurações disponíveis
oc list<TAB>                       # Usando alias

# Remote install com flags
opencode-config remote install <TAB>                    # Mostra flags
opencode-config remote install https://... --<TAB>      # Mostra --profile, --install-path, --installer
opencode-config remote install https://... --profile <TAB>  # Aguarda input do profile

# Recover com flags
opencode-config recover <TAB>      # Mostra todas as flags
opencode-config recover -<TAB>     # Mostra flags curtas: -s, -l, -a, -u, -t, -r, -h
opencode-config recover --<TAB>    # Mostra flags longas: --session, --list, --all, etc.

# Completion management
opencode-config completion <TAB>           # Mostra: install, uninstall, status, help
opencode-config completion install <TAB>   # Mostra: bash, zsh, auto
```

## Notas

- Os arquivos de completion são carregados automaticamente quando você usa `opencode-config completion install`
- Para bash, os scripts são sourced diretamente no `~/.bashrc`
- Para zsh, o diretório é adicionado ao `fpath` e symlinks são criados
- A instalação cria backups automáticos dos arquivos de configuração do shell
