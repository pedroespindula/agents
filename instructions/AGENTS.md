# AGENTS Instructions

Objective: Single source of truth for agent guidelines across LLMs. CLAUDE.md and GEMINI.md are symlinks to this file.

Scope:

- Applies to entire repository unless overridden by more deeply nested AGENTS.md.
- Direct system/developer/user instructions take precedence over AGENTS.md.

Principles:

- Precise, safe, helpful. Concise and actionable.
- Surgical changes in existing codebases; avoid gold-plating.
- Respect sandboxing, approvals, and transparency on actions.

Structure & Files:

- Instructions location: `agents/instructions/AGENTS.md` (source).
- Mirrors: `agents/instructions/CLAUDE.md` and `agents/instructions/GEMINI.md` as symlinks.
- All agents, commands, and skills must comply.

Coding Guidelines:

- Fix root causes; avoid unrelated changes.
- Minimal, focused diffs; keep style consistent.
- No adding licenses unless requested.
- No one-letter variable names.
- Avoid inline citations; use clickable paths.

Operational Rules:

- Use plan tool for multi-step tasks.
- Provide brief preambles before tool calls.
- Validate with tests/builds when available.
- Never commit unless explicitly requested.
- Avoid destructive commands without explicit approval.
- When committing, use Conventional Commits. First commit must be `chore: initial commit`.

File References:

- Wrap paths and commands in backticks.
- Reference with explicit file path and optional single line number.
- Do not provide line ranges.

Policies for LLM Use:

- Source of truth is AGENTS.md; do not edit mirrors.
- Symlinks must remain intact; edits only in AGENTS.md.
- Respect security: no secrets, use env vars.

Next:

- Edit this file to adapt guidelines.
