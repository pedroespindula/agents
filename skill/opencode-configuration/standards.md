# OpenCode Configuration Standards

## General Principles

1. **Schema validation**: Always include `"$schema": "https://opencode.ai/config.json"` in opencode.json
2. **Minimal configuration**: Only configure what differs from defaults
3. **Documentation**: Comment complex configurations using JSONC format
4. **Precedence**: Project config overrides global config

## File Naming Conventions

- Agent files: lowercase with hyphens (e.g., `code-reviewer.md`)
- Command files: lowercase with hyphens (e.g., `run-tests.md`)
- Skill directories: lowercase with hyphens (e.g., `git-release/`)
- Tool files: lowercase with hyphens (e.g., `database-query.ts`)

## Configuration Patterns

### Agents

- Use `mode: primary` for main conversation agents
- Use `mode: subagent` for specialized task agents
- Disable tools that shouldn't be available (e.g., `write: false` for read-only agents)
- Set appropriate permissions per agent

### Permissions

- Use `"allow"` for trusted operations
- Use `"ask"` for operations requiring approval
- Use `"deny"` for blocked operations
- Use glob patterns for batch rules (e.g., `"git *": "allow"`)
- Put catch-all `"*"` rules first, specific rules after

### MCP Servers

- Use descriptive names for MCP servers
- Store secrets in environment variables, reference with `{env:VAR_NAME}`
- Set `enabled: false` for servers not needed by default
- Use glob patterns to manage MCP tools (e.g., `"mymcp_*": false`)

### Skills

- Skill name must match directory name
- Names: 1-64 chars, lowercase alphanumeric with single hyphens
- Description: 1-1024 chars, specific enough for agent selection
- Required frontmatter: `name`, `description`

### Commands

- Use `$ARGUMENTS` for full argument string
- Use `$1`, `$2`, etc. for positional arguments
- Use `!command` to inject shell output
- Use `@filepath` to include file contents
