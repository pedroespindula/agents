---
name: init
agent: core
description: create/update AI agents files
---

Please analyze this codebase and create an AGENTS.md file containing:

1. Build/lint/test commands - especially for running a single test
2. Code style guidelines including imports, formatting, types, naming conventions, error handling, etc.

The file you create will be given to agentic coding agents (such as yourself) that operate in this repository. Make it about 150 lines long.

If there are Cursor rules (in .cursor/rules/ or .cursorrules) or Copilot rules (in .github/copilot-instructions.md) or Gemini rules (in GEMINI.md) or Claude rules (CLAUDE.md), make sure to include them.

If any of those files don't exist, create them as syslinks of the AGENTS.md file. Also, if any of them exists, after including them on AGENTS.md, delete them and create a syslink for the AGENTS.md file.

If there's already an AGENTS.md, improve it if it's located in the current root directory.

$ARGUMENTS
