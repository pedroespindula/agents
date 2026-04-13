# AGENTS.md

Single source of truth for AI coding agents working in this repository.

## Repository Overview

Multi-configuration manager for OpenCode agent setups. The CLI tool
(`opencode-config`) switches between independent configurations stored in
`specs/`. Each configuration (called a "spec") contains agents, skills, and
commands for OpenCode.

## File Structure

```
agents/
├── bin/
│   └── opencode-config          # CLI tool (~770 lines)
├── specs/                       # All configurations
│   ├── core/                    # Local: primary config
│   │   └── config/
│   │       ├── opencode.jsonc
│   │       ├── agent/
│   │       ├── skill/
│   │       └── command/
│   ├── default/                 # Local: minimal config
│   ├── raw/                     # Local: bare-bones config
│   ├── open-native/             # Remote: git submodule (flattened)
│   └── platform-sre-agents/     # Remote: git submodule (flattened)
├── .gitmodules                  # Declares remote spec submodules
├── .opencode-env                # Active config env vars (gitignored)
├── AGENTS.md                    # This file
└── README.md                    # User-facing documentation
```

**Convention:** every spec must have `config/opencode.jsonc` at its root and use
`config/` as the root directory for agents, skills, and commands.

**Remote vs local:** a spec is considered remote if it appears in `.gitmodules`.
The submodule is added directly at `specs/<name>/` (no `source/` wrapper, no
metadata files). Detection uses `.gitmodules` instead of metadata file existence.

## WHERE TO LOOK

| Task | Location |
|------|----------|
| Switch config | `./bin/opencode-config use <name>` |
| Show active config | `./bin/opencode-config current` |
| List all configs | `./bin/opencode-config list` |
| Show config details | `./bin/opencode-config show <name>` |
| Create local config | `./bin/opencode-config create <name> [template]` |
| Install remote config | `./bin/opencode-config remote install <url> [name]` |
| Remove remote config | `./bin/opencode-config remote uninstall <name>` |
| Update remote config | `./bin/opencode-config remote update <name>` |
| List remote configs | `./bin/opencode-config remote list` |
| Add agent | `specs/<name>/config/agent/<agent>.md` |
| Add skill | `specs/<name>/config/skill/<skill>/SKILL.md` |
| Add command | `specs/<name>/config/command/<cmd>/COMMAND.md` |

## CLI Commands

```bash
# Initialize configuration (generates .opencode-env)
./bin/opencode-config init [name]

# List available configurations
./bin/opencode-config list

# Show active configuration
./bin/opencode-config current

# Switch to a different configuration
./bin/opencode-config use <name>

# Show details of a specific configuration
./bin/opencode-config show <name>

# Create new local configuration
./bin/opencode-config create <name> [template]

# Remote configuration management
./bin/opencode-config remote install <url> [name]
./bin/opencode-config remote uninstall <name>
./bin/opencode-config remote update <name>
./bin/opencode-config remote list

# Help
./bin/opencode-config help
```

## Environment Variables

The `.opencode-env` file exports four variables:

| Variable | Description |
|----------|-------------|
| `OPENCODE_AGENTS` | Name of the active configuration |
| `OPENCODE_CONFIG` | Absolute path to `opencode.jsonc` |
| `OPENCODE_CONFIG_DIR` | Directory containing agents/, skills/, commands/ |
| `PATH` | Extended with the spec's `bin/` directory |

`OPENCODE_CONFIG_DIR` tells OpenCode where to find configuration resources.
It does **not** change the working directory for file operations.

## Code Style

### Bash

- Shebang: `#!/usr/bin/env bash`
- Strict mode: `set -e`
- Functions: `snake_case`, no `function` keyword
- Variables: `lowercase` for local, `UPPERCASE` for constants/env vars
- Always quote variables: `"$var"`
- Color: `tput` with `NO_COLOR`/`FORCE_COLOR` checks
- Errors: print to stderr with `>&2`, exit non-zero

### Markdown

- ATX-style headers (`#`)
- Always specify language in code blocks
- Use `-` for unordered lists
- Soft line length limit: 100 characters

## Agent/Skill/Command Development

### Agents

Place in `config/agent/<name>.md` with YAML frontmatter:

```yaml
---
name: my-agent
description: Brief description
mode: subagent
temperature: 0.1
tools:
  write: true
  edit: true
  bash: true
---
```

### Skills

Create `config/skill/<name>/SKILL.md` with frontmatter:

```yaml
---
name: skill-name
description: What the skill does
---
```

### Commands

Create `config/command/<name>/COMMAND.md` with slash command definition.

## Git Submodules

Remote specs are git submodules added directly at `specs/<name>/`. They must
follow the `config/opencode.jsonc` convention at their repository root.

```bash
# Install via CLI (recommended)
opencode-config remote install git@github.com:org/repo.git

# Submodules are initialized automatically when switching configs
opencode-config use <remote-spec>

# Update to latest
opencode-config remote update <name>

# Remove
opencode-config remote uninstall <name>
```

## Commit Conventions

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(scope): <subject>

Types: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert
```

- Imperative mood ("add" not "added")
- No period at end of subject
- Never commit secrets or `.env` files

## Operational Rules

- **Never commit** unless explicitly requested
- **Never push** unless explicitly requested
- **Validate changes** before completing
- **Avoid destructive commands** without approval

## File References

- Wrap paths in backticks: `path/to/file.js`
- Reference specific lines: `path/to/file.js:42`
- Never provide line ranges, only single line numbers
