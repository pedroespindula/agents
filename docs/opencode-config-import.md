# opencode-config import

Import external OpenCode configurations from Git repositories as submodules.

## Usage

```bash
opencode-config import <repository-url> [name] [--installer <command>]
```

## Arguments

- `<repository-url>` (required): Git repository URL to import
- `[name]` (optional): Custom name for the configuration (auto-detected from URL if not provided)
- `--installer <command>` (optional): Custom installer command (auto-detected if not provided)

## Features

### Automatic Kebab-Case Conversion

All configuration names are automatically converted to kebab-case:

```bash
# Repository: OpenAgentsControl
# Auto-generated name: openagentscontrol

# Custom name: MyCustomAgents
# Converted to: my-custom-agents
```

### Git Submodules

Repositories are imported as Git submodules in `specs/<name>/source/`:

```
specs/
├── openagentscontrol/
│   ├── source/              # Git submodule
│   │   ├── .opencode/
│   │   ├── install.sh
│   │   └── ...
│   └── opencode.metadata.jsonc
```

### Automatic Installer Detection

The command automatically detects and runs installers:

| File/Pattern | Detected Command |
|--------------|------------------|
| `install.sh` | `bash install.sh` |
| `package.json` with `postinstall` | `npx <package-name>` |
| `package.json` with `setup` script | `npm install && npm run setup` |
| `package.json` (generic) | `npm install` |

### Automatic Structure Detection

The command recursively searches for OpenCode configuration files:

1. Checks common locations first:
   - `opencode.jsonc`
   - `opencode.json`
   - `.opencode/opencode.jsonc`
   - `.opencode/opencode.json`

2. Falls back to recursive search (max depth 3)

3. Automatically determines `config_root` based on config location:
   - Config in `.opencode/` → root is `.opencode/`
   - Config in subdirectory → root is that subdirectory
   - Config in root → root is `.`

### Metadata Generation

Creates `opencode.metadata.jsonc` with:

```jsonc
{
  "name": "openagentscontrol",
  "description": "Imported from https://github.com/...",
  "version": "1.0.0",
  "tags": ["external", "submodule", "imported"],
  "created": "2026-01-26",
  "updated": "2026-01-26",
  
  "repository": {
    "url": "https://github.com/...",
    "type": "git-submodule"
  },
  
  // Paths relative to wrapper directory
  "config_path": "source/.opencode/opencode.json",
  "config_root": "source/.opencode"
}
```

## Examples

### Basic Import (Auto-detect Everything)

```bash
opencode-config import https://github.com/darrenhinde/OpenAgentsControl.git
```

**Result:**
- Name: `openagentscontrol` (auto-detected from URL)
- Installer: `bash install.sh` (auto-detected)
- Config: `source/.opencode/opencode.json` (auto-detected)

### Custom Name

```bash
opencode-config import https://github.com/darrenhinde/OpenAgentsControl.git my-agents
```

**Result:**
- Name: `my-agents` (converted to kebab-case)
- Installer: `bash install.sh` (auto-detected)
- Config: `source/.opencode/opencode.json` (auto-detected)

### Custom Installer

```bash
opencode-config import https://github.com/darrenhinde/OpenAgentsControl.git \
  openagents \
  --installer "bash install.sh essential"
```

**Result:**
- Name: `openagents`
- Installer: `bash install.sh essential` (custom command)
- Config: `source/.opencode/opencode.json` (auto-detected)

### NPM Package Import

```bash
opencode-config import https://github.com/code-yeongyu/oh-my-opencode.git
```

**Result:**
- Name: `oh-my-opencode`
- Installer: `npx oh-my-opencode` (auto-detected from package.json)
- Config: Auto-detected (may not exist for plugins)

## Workflow

1. **Validate URL**: Checks if repository URL is provided
2. **Generate Name**: Auto-detect from URL or use provided name (converted to kebab-case)
3. **Check Conflicts**: Ensures configuration doesn't already exist
4. **Add Submodule**: Adds repository as Git submodule in `specs/<name>/source/`
5. **Initialize Submodule**: Runs `git submodule init` and `git submodule update`
6. **Detect Installer**: Searches for `install.sh`, `package.json`, etc.
7. **Run Installer**: Executes detected or provided installer command
8. **Detect Structure**: Finds `opencode.json(c)` and determines paths
9. **Create Metadata**: Generates `opencode.metadata.jsonc` with all information
10. **Show Summary**: Displays import results and next steps

## Error Handling

### Installer Failures

If the installer fails, the import continues with a warning:

```
⚠ Installer failed (exit code: 1)
ℹ You may need to run the installer manually
```

You can run the installer manually later:

```bash
cd specs/<name>/source
bash install.sh
```

### Rollback on Failure

If submodule addition fails, the command automatically rolls back:

```bash
# Removes submodule
git submodule deinit -f specs/<name>/source
git rm -f specs/<name>/source

# Removes wrapper directory
rm -rf specs/<name>
```

### Missing Config Files

If no `opencode.json(c)` is found, the command uses a default path:

```
⚠ No opencode.json(c) found in repository
```

This is normal for plugins like `oh-my-opencode` that don't have standalone configs.

## Next Steps After Import

1. **Review Configuration**:
   ```bash
   opencode-config show <name>
   ```

2. **Activate Configuration**:
   ```bash
   opencode-config use <name>
   ```

3. **Reload Shell**:
   ```bash
   source ~/.zshrc  # or ~/.bashrc
   ```

## Updating Imported Configurations

To update an imported configuration:

```bash
cd specs/<name>/source
git pull origin main
cd ../../..
git add specs/<name>/source
git commit -m "chore(submodule): update <name>"
```

Or use the global submodule update:

```bash
git submodule update --remote specs/<name>/source
```

## Removing Imported Configurations

To remove an imported configuration:

```bash
# Remove submodule
git submodule deinit -f specs/<name>/source
git rm -f specs/<name>/source
rm -rf .git/modules/specs/<name>/source

# Remove wrapper directory
rm -rf specs/<name>
```

## Supported Repository Types

### Standalone Configurations

Repositories with complete OpenCode setups:
- `opencode.json(c)` in root or `.opencode/`
- Agent, skill, and command directories
- Optional installer scripts

**Example**: [OpenAgentsControl](https://github.com/darrenhinde/OpenAgentsControl)

### NPM Plugins

Repositories that are OpenCode plugins:
- `package.json` with OpenCode plugin code
- May not have `opencode.json(c)` (added to user config instead)
- Installed via `npm` or `npx`

**Example**: [oh-my-opencode](https://github.com/code-yeongyu/oh-my-opencode)

## Troubleshooting

### "Configuration already exists"

```bash
# Remove existing configuration first
rm -rf specs/<name>
git submodule deinit -f specs/<name>/source
git rm -f specs/<name>/source
```

### "Failed to add git submodule"

Check:
- Repository URL is correct and accessible
- You have Git installed and configured
- You're in the repository root directory

### "Installer failed"

Common causes:
- Missing dependencies (npm, node, bash, etc.)
- Interactive installer requires terminal
- Installer expects specific arguments

**Solution**: Run installer manually with correct arguments:

```bash
cd specs/<name>/source
bash install.sh essential  # or other profile
```

### "No opencode.json(c) found"

This is normal for:
- NPM plugins (they're added to user config)
- Repositories with non-standard structures

**Solution**: Manually specify paths in `opencode.metadata.jsonc` if needed.

## See Also

- [opencode-config use](./opencode-config-use.md) - Switch configurations
- [opencode-config show](./opencode-config-show.md) - View configuration details
- [opencode-config list](./opencode-config-list.md) - List all configurations
- [Git Submodules](../AGENTS.md#git-submodules) - Submodule management guide
