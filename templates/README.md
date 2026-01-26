# Templates

This directory contains reusable templates for creating new OpenCode configurations and components.

## Available Templates

### `spec/`

Base template for creating new OpenCode specification configurations. Contains the minimal structure needed for a working OpenCode setup:

- `agent/` - Agent definitions (markdown files)
- `skill/` - Custom skills (directories with SKILL.md)
- `command/` - Custom commands (markdown files)
- `opencode.jsonc` - OpenCode configuration file
- `opencode.metadata.jsonc` - Configuration metadata (name, description, version, etc.)

**Usage:**

```bash
# Create new config using this template (automatic)
opencode-config create my-config

# The script automatically uses templates/spec/ as the default template
```

## Adding New Templates

To add a new reusable template:

1. Create a new directory in `templates/` with a descriptive name
2. Add a `README.md` explaining what the template is for
3. Include all necessary files and directory structure
4. Document usage examples

**Example structure:**

```
templates/
├── README.md                    # This file
├── spec/                        # Default spec template
├── agent/                       # Template for new agents
├── skill/                       # Template for new skills
└── command/                     # Template for new commands
```

## Template Guidelines

- Keep templates minimal and focused
- Include clear documentation in each template
- Use descriptive names (kebab-case)
- Provide usage examples
- Keep templates version-controlled
