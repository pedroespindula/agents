# OpenCode Agents

Multi-configuration manager for OpenCode agent setups. Switch between independent
configurations of agents, skills, and commands with a single command.

## Structure

```
agents/
├── bin/
│   └── opencode-config          # CLI tool
├── specs/                       # All configurations
│   ├── core/                    # Local: primary config
│   │   └── config/
│   │       ├── opencode.jsonc
│   │       ├── agent/
│   │       ├── skills/
│   │       └── command/
│   ├── default/                 # Local: minimal config
│   ├── raw/                     # Local: bare-bones config
│   ├── open-native/             # Remote: git submodule
│   └── platform-sre-agents/     # Remote: git submodule
├── .gitmodules                  # Remote spec submodules
└── AGENTS.md                    # AI agent instructions
```

**Convention:** every spec must have `config/opencode.jsonc` and use `config/`
as the root directory for agents, skills, and commands.

## Quick Start

```bash
# 1. Initialize configuration (creates ~/.agents symlink)
./bin/opencode-config init

# 2. Add env vars to ~/.zshrc
export OPENCODE_CONFIG="$HOME/.agents/opencode.jsonc"
export OPENCODE_CONFIG_DIR="$HOME/.agents"

# 3. Reload shell
source ~/.zshrc
```

## Commands

| Command | Description |
|---------|-------------|
| `opencode-config init [name]` | Initialize ~/.agents symlink (default: core) |
| `opencode-config list` | List all available configurations |
| `opencode-config current` | Show current active configuration |
| `opencode-config use <name>` | Switch to a different configuration |
| `opencode-config show <name>` | Show details of a specific configuration |
| `opencode-config create <name> [tpl]` | Create new local configuration |
| `opencode-config remote install <url> [name]` | Install remote config (git submodule) |
| `opencode-config remote uninstall <name>` | Remove remote config |
| `opencode-config remote update <name>` | Update remote config to latest |
| `opencode-config remote list` | List remote configurations |

## Configuration

The `~/.agents` symlink points to the active spec's `config/` directory.

Add the following to your shell profile:

```bash
export OPENCODE_CONFIG="$HOME/.agents/opencode.jsonc"
export OPENCODE_CONFIG_DIR="$HOME/.agents"
```

## Adding Configurations

### Local

```bash
# From scratch
opencode-config create my-config

# Copy from existing
opencode-config create my-config core

# Activate
opencode-config use my-config
```

### Remote

Remote configurations are git repositories added as submodules directly in `specs/`.
They must follow the same `config/opencode.jsonc` convention.

```bash
# Install
opencode-config remote install git@github.com:org/repo.git

# Update
opencode-config remote update repo-name

# Remove
opencode-config remote uninstall repo-name
```
