# AGENTS.md

Single source of truth for AI coding agents (Claude, Gemini, Copilot, Cursor).
CLAUDE.md, GEMINI.md, .cursorrules, and .github/copilot-instructions.md are symlinks to this file.

## Repository Overview

This repository contains OpenCode agent configurations, skills, and instructions for LLM-powered coding assistants. It follows a multi-agent architecture with a Core orchestrator delegating to specialized subagents and skills.

## Build/Lint/Test Commands

```bash
# Install dependencies
npm install

# Run all checks (CI pipeline)
npm run opencode:ci

# Individual commands
npm run opencode:lint-agents      # Lint agent configurations
npm run opencode:validate-config  # Validate JSON configs
npm run opencode:test             # Run all tests
npm run opencode:format           # Format code with Prettier

# Run a single test file
node tests/unit/<test-file>.test.js

# Examples:
node tests/unit/config-validation.test.js
node tests/unit/symlink.test.js
node tests/unit/sample.test.js

# Check symlinks are valid
npm run opencode:sync-md
```

## Code Style Guidelines

### Formatting (Prettier)

- Semi-colons: required
- Quotes: single quotes
- Print width: 100 characters
- Tab width: 2 spaces
- Trailing commas: ES5 style

### ESLint Rules

- Use `const` by default, `let` when reassignment needed, never `var`
- No unused variables (prefix with `_` if intentionally unused)
- Console: only `console.error()` and `console.warn()` allowed

### Naming Conventions

- Files: kebab-case (`my-agent.md`, `config-validation.test.js`)
- Variables/functions: camelCase (`readJSON`, `validateConfig`)
- Constants: UPPER_SNAKE_CASE for true constants (`MAX_RETRIES`)
- No single-letter variable names (except `i`, `j`, `k` in loops)

### Imports

- Use CommonJS (`require`/`module.exports`) for Node.js scripts
- Group imports: built-in modules first, then external, then local
- Destructure when importing multiple items from same module

### Error Handling

- Always handle errors explicitly
- Use descriptive error messages
- Exit with non-zero code on failure in scripts (`process.exit(1)`)

## File Structure

```
/
├── agent/                    # Agent definitions (.md files)
│   ├── core.md              # Primary orchestrator agent
│   ├── architect.md         # Architecture subagent
│   ├── engineer.md          # Implementation subagent
│   ├── tester.md            # Testing subagent
│   └── sre.md               # SRE subagent
├── skill/                    # Skill definitions
│   └── <skill-name>/SKILL.md
├── command/                  # Custom slash commands
├── instructions/             # Global shared instructions (cross-project)
├── policies/rules/           # Policy documents
├── schemas/                  # JSON schemas for validation
├── scripts/                  # Build and validation scripts
├── tests/unit/               # Unit tests
└── opencode.jsonc            # Main OpenCode configuration
```

## Commit Conventions

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(scope): <subject>

Types: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert
```

Examples:

- `feat(agents): add code-review skill`
- `fix(config): correct permission settings`
- `docs(readme): update installation steps`
- `chore: initial commit` (first commit only)

Rules:

- Subject in imperative mood ("add" not "added")
- No period at end of subject
- Body explains "why", diff shows "what"
- Never commit secrets or `.env` files

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

## File References

- Wrap paths in backticks: `path/to/file.js`
- Reference specific lines: `path/to/file.js:42`
- Never provide line ranges, only single line numbers

## Testing

Tests use Node.js built-in assertions. Each test file is self-contained:

```javascript
#!/usr/bin/env node
const assert = require('assert');

// Test implementation
assert.strictEqual(actual, expected, 'Error message');

console.log('Test passed');
```

Run individual tests directly with `node tests/unit/<file>.test.js`.
