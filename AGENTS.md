# AGENTS.md

**Generated:** 2026-01-26 | **Commit:** 8af57ff | **Branch:** main

Single source of truth for AI coding agents (Claude, Gemini, Copilot, Cursor).
CLAUDE.md, GEMINI.md, .cursorrules, and .github/copilot-instructions.md are symlinks to this file.

## Repository Overview

Multi-configuration manager for OpenCode agent setups. CLI tool (`opencode-config`) switches between independent agent configurations stored in `specs/`.

| Directory | Purpose |
|-----------|---------|
| `bin/` | CLI tools (`opencode-config`, 1800+ lines) |
| `specs/core/` | Primary configuration (agents, skills, commands) |
| `specs/oh-my-opencode/` | External: OhMyOpenCode plugin (submodule) |
| `specs/openagentscontrol/` | External: OpenAgentsControl (submodule) |
| `templates/` | New config scaffolds |

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Switch config | `./bin/opencode-config use <name>` | Generates `.opencode-env` |
| Add agent | `specs/<name>/config/agent/` | YAML frontmatter in `.md` |
| Add skill | `specs/<name>/config/skill/<name>/SKILL.md` | Dir + SKILL.md |
| Add command | `specs/<name>/config/command/` | Dir + COMMAND.md |
| Validate | `npm run opencode:ci` | From any spec directory |
| Create config | `./bin/opencode-config create <name>` | Uses `templates/spec/` |
| Import external | `./bin/opencode-config remote install <url>` | Auto-detects installer |

## Build/Lint/Test Commands

```bash
# Install dependencies (run from specs/core or any spec directory)
npm install

# Run all checks (CI pipeline)
npm run opencode:ci

# Individual commands
npm run opencode:lint-agents      # Lint agent configurations
npm run opencode:validate-config  # Validate JSON configs
npm run opencode:test             # Run all tests
npm run opencode:format           # Format code with Prettier
npm run opencode:sync-md          # Sync AGENTS.md symlinks

# Run a single test file
node tests/unit/<test-file>.test.js

# Examples:
node tests/unit/config-validation.test.js
node tests/unit/symlink.test.js
node tests/unit/sample.test.js

# Configuration management (from root)
./bin/opencode-config list                           # List available configurations
./bin/opencode-config use <name>                     # Switch to a configuration
./bin/opencode-config current                        # Show active configuration
./bin/opencode-config create <name> [template]       # Create new config

# External configuration management
./bin/opencode-config remote install <url> [name]    # Install external config
./bin/opencode-config remote list                    # List external configs
./bin/opencode-config remote update <name>           # Update external config
./bin/opencode-config remote uninstall <name>        # Remove external config
```

## Code Style Guidelines

### Bash Scripts

**File structure:**
```bash
#!/usr/bin/env bash
set -e  # Exit on error

# Constants
readonly REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Functions (snake_case)
function print_error() {
  echo "Error: $1" >&2
}

# Main logic
main() {
  # Implementation
}

main "$@"
```

**Conventions:**
- Shebang: `#!/usr/bin/env bash`
- Strict mode: `set -e` (exit on error)
- Function naming: `snake_case`
- Variables: `lowercase` for local, `UPPERCASE` for constants/env vars
- Quotes: Always quote variables: `"$var"` not `$var`
- Color support: Use `tput` with `NO_COLOR`/`FORCE_COLOR` env var checks
- Error handling: Print to stderr with `>&2`, exit with non-zero code

### JavaScript/Node.js

**Formatting (Prettier):**
- Semi-colons: required
- Quotes: single quotes
- Print width: 100 characters
- Tab width: 2 spaces
- Trailing commas: ES5 style

**ESLint Rules:**
- Use `const` by default, `let` when reassignment needed, never `var`
- No unused variables (prefix with `_` if intentionally unused)
- Console: only `console.error()` and `console.warn()` allowed
- Target: ES2022

**Naming Conventions:**
- Files: kebab-case (`my-agent.md`, `config-validation.test.js`)
- Variables/functions: camelCase (`readJSON`, `validateConfig`)
- Constants: UPPER_SNAKE_CASE for true constants (`MAX_RETRIES`)
- No single-letter variable names (except `i`, `j`, `k` in loops)

**Imports:**
- Use CommonJS (`require`/`module.exports`) for Node.js scripts
- Group imports: built-in modules first, then external, then local
- Destructure when importing multiple items from same module

**Error Handling:**
- Always handle errors explicitly
- Use descriptive error messages
- Exit with non-zero code on failure in scripts (`process.exit(1)`)

### Markdown

- Use ATX-style headers (`#` not underlines)
- Code blocks: Always specify language (```bash, ```javascript)
- Line length: Soft limit at 100 characters
- Lists: Use `-` for unordered, `1.` for ordered
- Emphasis: `**bold**` for strong, `*italic*` for emphasis

## File Structure

```
/
├── bin/                          # CLI utilities
│   └── opencode-config          # Configuration manager
├── specs/                        # Agent configurations
│   ├── core/                    # Core configuration
│   │   ├── opencode.jsonc       # OpenCode config
│   │   ├── AGENTS.md            # This file (in each spec)
│   │   ├── agent/               # Agent definitions
│   │   ├── skill/               # Skills
│   │   ├── command/             # Custom commands
│   │   ├── instructions/        # Shared instructions
│   │   ├── tests/unit/          # Unit tests
│   │   └── package.json         # Node.js dependencies
│   ├── personal-agents/         # Another configuration
│   └── openagents/              # External project wrapper
│       ├── opencode.metadata.jsonc  # Configuration metadata
│       ├── source/              # Git submodule (actual repository)
│       └── config/              # Installed OpenCode configuration
├── .gitmodules                  # Git submodules configuration
├── .opencode-env                # Active config (not versioned)
├── .opencode-env.example        # Example config
└── AGENTS.md                    # This file (root)
```

## Environment Variables

The `opencode-config` script generates a `.opencode-env` file with these environment variables:

- **`OPENCODE_AGENTS`**: Name of the active configuration (e.g., `core`)
- **`OPENCODE_CONFIG`**: Absolute path to the `opencode.jsonc` file
- **`OPENCODE_CONFIG_DIR`**: Directory containing agents/, skills/, commands/ (used by OpenCode to find configuration resources)
- **`PATH`**: Extended with `$config_dir/bin/` for custom scripts

**Important**: 
- `OPENCODE_CONFIG_DIR` tells OpenCode where to find agents, skills, and commands
- It does **NOT** change the working directory where OpenCode creates files
- OpenCode always uses your current directory (`pwd`) as the working directory for file operations
- The configuration directory is only for reading configuration resources

Example `.opencode-env` for the core configuration:
```bash
export OPENCODE_AGENTS="core"
export PATH="$PATH:/Users/pedro/agents/specs/core/bin/"
export OPENCODE_CONFIG="/Users/pedro/agents/specs/core/config/opencode.jsonc"
export OPENCODE_CONFIG_DIR="/Users/pedro/agents/specs/core/config"
```

## Git Submodules

This repository supports importing external projects as Git submodules in the `specs/` directory.

### Adding a Submodule

**Recommended: Use the `remote install` command** (handles everything automatically):

```bash
# Auto-detect name, installer, and structure
./bin/opencode-config remote install https://github.com/darrenhinde/OpenAgentsControl.git

# Custom name (converted to kebab-case)
./bin/opencode-config remote install https://github.com/darrenhinde/OpenAgentsControl.git my-agents

# With profile (passed to installer)
./bin/opencode-config remote install <url> <name> --profile essential

# Custom install path (default: config/)
./bin/opencode-config remote install <url> <name> --profile essential --install-path my-config

# Custom installer command
./bin/opencode-config remote install <url> <name> --installer "bash install.sh"
```

The `remote install` command automatically:
- Converts names to kebab-case (OpenAgentsControl → openagentscontrol)
- Adds repository as Git submodule in `specs/<name>/source/` (read-only)
- Detects and runs installers with optional `--profile` parameter
- Installs configuration to `config/` by default (customizable with `--install-path`)
- Finds `opencode.json(c)` in the install path, or copies from source if not found
- Creates `opencode.metadata.jsonc` with all configuration

**Important**: 
- The `source/` directory contains the original repository (read-only submodule)
- The installer creates the OpenCode configuration in a separate directory (default: `config/`)
- If the installer doesn't create an `opencode.json(c)`, the script will copy it from `source/` to `config/`
- This keeps the source code untouched while allowing customization of the config
- **Git tracking**: Only `opencode.json(c)` is committed in the `config/` directory, all other files are ignored via `.gitignore`

**Manual method** (if you need more control):

```bash
# Create wrapper directory
mkdir -p specs/<project-name>

# Add submodule in source/ subdirectory
git submodule add <repository-url> specs/<project-name>/source

# Example
mkdir -p specs/openagents
git submodule add https://github.com/darrenhinde/OpenAgentsControl.git specs/openagents/source
```

### Cloning Repository with Submodules

```bash
# Clone with submodules initialized
git clone --recurse-submodules <repository-url>

# Or initialize submodules after cloning
git clone <repository-url>
cd <repository>
git submodule init
git submodule update
```

### Updating Submodules

```bash
# Update all submodules to latest commit
git submodule update --remote

# Update specific submodule
git submodule update --remote specs/<project-name>/source

# Pull changes in submodule
cd specs/<project-name>/source
git pull origin main
cd ../../..
git add specs/<project-name>/source
git commit -m "chore(submodule): update <project-name>"
```

### Removing a Submodule

```bash
# Remove submodule
git submodule deinit -f specs/<project-name>/source
git rm -f specs/<project-name>/source
rm -rf .git/modules/specs/<project-name>/source

# Remove wrapper directory if desired
rm -rf specs/<project-name>
```

### Integration with opencode-config

The `opencode-config` script automatically initializes submodules when switching configurations:

```bash
# Submodules are initialized automatically
./bin/opencode-config use core
```

### Supported Installers

The `import` command automatically detects and runs installers:

| Installer Type | Detection | Command Executed |
|----------------|-----------|------------------|
| Bash script | `install.sh` exists | `bash install.sh [profile] <install-path>` |
| NPM with postinstall | `package.json` with `postinstall` script | `npx <package-name> [profile] <install-path>` |
| NPM with setup | `package.json` with `setup` script | `npm install && npm run setup [profile] <install-path>` |
| NPM generic | `package.json` exists | `npm install [profile] <install-path>` |
| Custom | `--installer` flag provided | User-specified command [profile] <install-path> |

**Important**: 
- The installer receives the **profile** (if `--profile` is provided) and **install-path** as arguments
- The install-path is **absolute** and points to `specs/<name>/<install-path>` (default: `specs/<name>/config/`)
- The installer should create the OpenCode configuration in the provided install-path
- The `source/` directory remains untouched (read-only submodule)

**Examples**:

```bash
# Auto-detect installer (bash install.sh)
./bin/opencode-config import https://github.com/darrenhinde/OpenAgentsControl.git

# With profile (passed to installer)
./bin/opencode-config import https://github.com/darrenhinde/OpenAgentsControl.git \
  openagents \
  --profile essential

# Custom install path
./bin/opencode-config import https://github.com/darrenhinde/OpenAgentsControl.git \
  openagents \
  --profile essential \
  --install-path my-config

# Custom installer command
./bin/opencode-config import <url> <name> --installer "bash install.sh"

# NPM package (auto-detects npx)
./bin/opencode-config import https://github.com/code-yeongyu/oh-my-opencode.git
```

### Configuring External Projects

External projects (submodules) may have different directory structures. The `import` command automatically detects paths and creates `opencode.metadata.jsonc`:

```jsonc
{
  "name": "openagentscontrol",
  "description": "Imported from https://github.com/...",
  "version": "1.0.0",
  "author": "",
  "tags": ["external", "submodule", "imported"],
  "created": "2026-01-26",
  "updated": "2026-01-26",
  
  // Repository information
  "repository": {
    "url": "https://github.com/darrenhinde/OpenAgentsControl.git",
    "type": "git-submodule"
  },
  
  // Path to OpenCode config file (relative to this directory)
  "config_path": "config/opencode.json",
  
  // Root directory for OpenCode structure (relative to this directory)
  "config_root": "config"
}
```

**Example**: The installer creates the OpenCode configuration in `config/` directory:

```bash
# The opencode-config script automatically uses the correct paths
./bin/opencode-config use openagentscontrol

# Generated environment variables:
# OPENCODE_CONFIG=$HOME/agents/specs/openagentscontrol/config/opencode.json
# OPENCODE_CONFIG_DIR=$HOME/agents/specs/openagentscontrol/config
```

### Git Tracking for Remote Configurations

When you install a remote configuration, the script automatically creates a `.gitignore` file in the `config/` directory that ensures only `opencode.json(c)` is committed:

```gitignore
# Ignore everything in this directory (remote config)
*

# Except opencode config files (these should be committed)
!opencode.json
!opencode.jsonc

# Keep this .gitignore file
!.gitignore
```

**Important**: If you already have files tracked by git in the `config/` directory before installing the remote configuration, you need to remove them from git tracking:

```bash
# Remove all files from git tracking (but keep them on disk)
cd specs/<config-name>/config
git rm -r --cached .

# Re-add only the files that should be tracked
git add .gitignore opencode.json

# Commit the changes
cd ../../..
git add specs/<config-name>/config
git commit -m "chore(config): ignore remote config files except opencode.json"
```

This ensures that:
- ✅ `opencode.json(c)` is committed (your custom configuration)
- ✅ `.gitignore` is committed (to maintain the ignore rules)
- ❌ All other files are ignored (agents, commands, skills, etc. from the installer)

## Commit Conventions

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(scope): <subject>

Types: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert
```

**Examples:**
- `feat(agents): add code-review skill`
- `fix(config): correct permission settings`
- `docs(readme): update installation steps`
- `chore: initial commit` (first commit only)

**Rules:**
- Subject in imperative mood ("add" not "added")
- No period at end of subject
- Body explains "why", diff shows "what"
- Never commit secrets or `.env` files
- Commits are validated via commitlint + husky hooks

## Agent Development Guidelines

### Creating Agents

1. Place agent file in `agent/<name>.md`
2. Use YAML frontmatter for metadata:
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

### Creating Skills

1. Create directory `skill/<skill-name>/`
2. Add `SKILL.md` with frontmatter:
   ```yaml
   ---
   name: skill-name
   description: What the skill does (max 1024 chars)
   ---
   ```
3. Skill names: lowercase, alphanumeric, hyphens only

### Creating Commands

1. Create directory `command/<command-name>/`
2. Add `COMMAND.md` with slash command definition
3. Command names: lowercase, alphanumeric, hyphens only

## Testing

Tests use Node.js built-in assertions. Each test file is self-contained:

```javascript
#!/usr/bin/env node

function fail(message) {
  console.error(`❌ ${message}`);
  process.exit(1);
}

// Test implementation
if (actual !== expected) {
  fail(`Expected ${expected}, got ${actual}`);
}

console.log('✅ Test passed');
```

Run individual tests directly with `node tests/unit/<file>.test.js`.

## Operational Rules

- **Never commit** unless explicitly requested
- **Never push** unless explicitly requested
- **Use plan tool** for multi-step tasks
- **Validate changes** with tests before completing
- **Avoid destructive commands** without approval
- **Respect sandboxing** and permission boundaries

## Security

- Never commit secrets, tokens, or credentials
- Use environment variables for sensitive config
- Check `.gitignore` exists before first commit
- Deny read access to `.env` files by default
- `.opencode-env` is gitignored (contains active config)

## File References

- Wrap paths in backticks: `path/to/file.js`
- Reference specific lines: `path/to/file.js:42`
- Never provide line ranges, only single line numbers
