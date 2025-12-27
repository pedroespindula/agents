# Agents Repository for OpenCode

This repository provides a structured setup to use OpenCode as the main engine and LLM gateway. It centralizes agent context and ensures identical instructions across LLMs using symlinks.

## Key Structure

- `opencode.jsonc` — project config using the OpenCode schema
- `instructions/AGENTS.md` — single source of truth
- `instructions/CLAUDE.md` — symlink to `AGENTS.md`
- `instructions/GEMINI.md` — symlink to `AGENTS.md`
- `agent/` — file-based agents
- `command/` — file-based commands
- `workflow/` — workflows as JSON files
- `skill/` — skills catalog
- `.github/workflows/ci.yml` — CI to validate symlinks and run checks

## Symlink Setup

macOS/Linux:

- `cd instructions`
- `ln -s AGENTS.md CLAUDE.md`
- `ln -s AGENTS.md GEMINI.md`

Windows:

- Enable Developer Mode (Settings > For developers) for non-admin symlink support
- PowerShell (Administrator if Developer Mode is off):
  - `cd agents\instructions`
  - `New-Item -ItemType SymbolicLink -Path CLAUDE.md -Target AGENTS.md`
  - `New-Item -ItemType SymbolicLink -Path GEMINI.md -Target AGENTS.md`
- Git on Windows: `git config core.symlinks true` before cloning to preserve symlinks

If symlinks are not supported, mirror contents manually (not recommended). See `npm run opencode:sync-md:fix` for a reminder.

## Usage

- List agents: `npm run opencode:list-agents`
- Validate configuration: `npm run opencode:validate-config`
- Run CI locally: `npm run opencode:ci`

## Policies

- Edit only `AGENTS.md`; never the mirrors.
- Avoid destructive commands; never commit unless explicitly requested.
- Keep changes minimal and focused; validate with tests when available.

## Next Steps

- Flesh out agents, skills, workflows.
- Add linters and more robust tests according to your stack.
