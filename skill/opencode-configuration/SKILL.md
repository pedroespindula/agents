---
name: opencode-configuration
description: Configure OpenCode agents, tools, commands, permissions, MCP servers, and skills
license: MIT
compatibility: opencode
metadata:
  audience: developers
  workflow: opencode-setup
---

## What I do

- Configure OpenCode agents (primary and subagents)
- Set up custom tools and MCP servers
- Define custom slash commands
- Manage permissions and access control
- Create agent skills
- Set up rules via AGENTS.md files
- Configure ACP support for IDE integration

## When to use me

Use this skill when you need to configure or extend OpenCode. This is especially helpful when:

- Creating custom agents for specific workflows
- Adding MCP servers (local or remote)
- Defining custom slash commands
- Setting up permission rules
- Creating reusable skills
- Configuring tools globally or per agent
- Setting up AGENTS.md rules files

## How I work

I fetch documentation dynamically from the official OpenCode docs based on what you need. Before making any configuration changes, I will:

1. **Identify the task** - Determine which OpenCode feature you need to configure
2. **Fetch documentation** - Load the relevant docs from the official source
3. **Apply configuration** - Create or modify config files following official patterns
4. **Validate** - Ensure the configuration follows OpenCode conventions

## Documentation Sources

When you need specific guidance, I will fetch from these official documentation URLs:

| Topic        | URL                                    | Use When                                             |
| ------------ | -------------------------------------- | ---------------------------------------------------- |
| Tools        | https://opencode.ai/docs/tools/        | Configuring built-in tools, enabling/disabling tools |
| Rules        | https://opencode.ai/docs/rules/        | Creating AGENTS.md files, custom instructions        |
| Agents       | https://opencode.ai/docs/agents/       | Creating primary agents or subagents                 |
| Commands     | https://opencode.ai/docs/commands/     | Creating custom slash commands                       |
| Permissions  | https://opencode.ai/docs/permissions/  | Setting up permission rules (allow/ask/deny)         |
| MCP Servers  | https://opencode.ai/docs/mcp-servers/  | Adding local or remote MCP servers                   |
| ACP Support  | https://opencode.ai/docs/acp/          | IDE integration via Agent Client Protocol            |
| Skills       | https://opencode.ai/docs/skills/       | Creating reusable SKILL.md definitions               |
| Custom Tools | https://opencode.ai/docs/custom-tools/ | Creating TypeScript/JavaScript tools                 |

## Configuration Locations

OpenCode configuration can be placed in:

- **Project config**: `opencode.json` or `opencode.jsonc` in project root
- **Global config**: `~/.config/opencode/opencode.json`
- **Project agents**: `.opencode/agent/*.md`
- **Global agents**: `~/.config/opencode/agent/*.md`
- **Project commands**: `.opencode/command/*.md`
- **Global commands**: `~/.config/opencode/command/*.md`
- **Project skills**: `.opencode/skill/<name>/SKILL.md`
- **Global skills**: `~/.config/opencode/skill/<name>/SKILL.md`
- **Project tools**: `.opencode/tool/*.ts`
- **Global tools**: `~/.config/opencode/tool/*.ts`
- **Rules**: `AGENTS.md` (project root or nested directories)

## Workflow

1. Tell me what you want to configure
2. I will fetch the relevant documentation
3. I will propose the configuration following official patterns
4. You confirm and I apply the changes

Ask clarifying questions if the configuration requirements are unclear.
