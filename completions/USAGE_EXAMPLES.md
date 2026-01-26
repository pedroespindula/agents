# OpenCode Config Completions - Usage Examples

Visual guide showing how completions work in practice.

## Basic Commands

### List all commands
```bash
$ opencode-config <TAB>
init        install      uninstall    list         ls           current
use         switch       show         info         create       new
remote      import       completion   completions  aliases      alias
recover     help
```

### Switch configuration
```bash
$ opencode-config use <TAB>
core                    # Core OpenCode configuration
personal-agents         # Personal agents setup
openagentscontrol       # External: OpenAgentsControl
```

### Show configuration details
```bash
$ opencode-config show <TAB>
core                    # Core OpenCode configuration
personal-agents         # Personal agents setup
openagentscontrol       # External: OpenAgentsControl
```

## Remote Commands

### Remote subcommands
```bash
$ opencode-config remote <TAB>
install     # Install remote configuration from repository
uninstall   # Remove remote configuration
update      # Update remote configuration to latest version
upgrade     # Update remote configuration (alias)
list        # List all remote configurations
ls          # List all remote configurations (alias)
help        # Show remote help
```

### Remote install with flags
```bash
$ opencode-config remote install <TAB>
--profile       # Profile to pass to installer (e.g., essential, full)
--install-path  # Custom installation path (default: config/)
--installer     # Custom installer command to run

$ opencode-config remote install https://github.com/user/repo.git <TAB>
--profile       # Profile to pass to installer
--install-path  # Custom installation path
--installer     # Custom installer command

$ opencode-config remote install https://github.com/user/repo.git --profile <TAB>
# (waiting for user input: essential, full, minimal, etc.)

$ opencode-config remote install https://github.com/user/repo.git --install-path <TAB>
# (zsh shows directory completion)
config/     source/     bin/
```

### Remote uninstall/update
```bash
$ opencode-config remote uninstall <TAB>
openagentscontrol       # External configuration
my-custom-config        # Custom configuration

$ opencode-config remote update <TAB>
openagentscontrol       # External configuration
my-custom-config        # Custom configuration
```

## Import Command (Deprecated)

### Import with flags
```bash
$ opencode-config import <TAB>
--installer     # Custom installer command to run
--profile       # Profile to pass to installer
--install-path  # Custom installation path

$ opencode-config import https://github.com/user/repo.git <TAB>
--installer     # Custom installer command
--profile       # Profile to pass to installer
--install-path  # Custom installation path

$ opencode-config import https://github.com/user/repo.git --profile essential <TAB>
--installer     # Custom installer command
--install-path  # Custom installation path
```

## Completion Management

### Completion subcommands
```bash
$ opencode-config completion <TAB>
install     # Install shell completions
uninstall   # Remove shell completions
status      # Check completion installation status
help        # Show completion help
```

### Install for specific shell
```bash
$ opencode-config completion install <TAB>
bash    # Install for bash shell
zsh     # Install for zsh shell
auto    # Auto-detect current shell
```

## Aliases Management

### Aliases subcommands
```bash
$ opencode-config aliases <TAB>
install     # Install shell aliases
uninstall   # Remove shell aliases
status      # Check alias installation status
help        # Show aliases help
```

### Install for specific shell
```bash
$ opencode-config aliases install <TAB>
bash    # Install for bash shell
zsh     # Install for zsh shell
auto    # Auto-detect current shell
```

## Recover Command

### Recover options
```bash
$ opencode-config recover <TAB>
-s          # Treat argument as session ID
--session   # Treat argument as session ID
-l          # List only found sessions (without messages)
--list      # List only found sessions (without messages)
-a          # Show all messages from all sessions
--all       # Show all messages from all sessions
-u          # Show only user messages
--user      # Show only user messages
-t          # Show only assistant messages
--assistant # Show only assistant messages
-r          # Remove colors from output (for piping to file)
--raw       # Remove colors from output (for piping to file)
-h          # Show help
--help      # Show help
```

### Recover with flags
```bash
$ opencode-config recover --<TAB>
--session   # Treat argument as session ID
--list      # List only found sessions
--all       # Show all messages from all sessions
--user      # Show only user messages
--assistant # Show only assistant messages
--raw       # Remove colors from output
--help      # Show help

$ opencode-config recover -<TAB>
-s  # Treat argument as session ID
-l  # List only found sessions
-a  # Show all messages
-u  # Show only user messages
-t  # Show only assistant messages
-r  # Remove colors from output
-h  # Show help
```

## Using the Alias

All completions work with the `oc` alias:

```bash
$ oc <TAB>
# (same as opencode-config)

$ oc use <TAB>
core    personal-agents    openagentscontrol

$ oc remote install <TAB>
--profile    --install-path    --installer

$ oc recover -<TAB>
-s  -l  -a  -u  -t  -r  -h
```

## Create Command

### Create new configuration
```bash
$ opencode-config create <TAB>
# (waiting for user input: new configuration name)

$ opencode-config create my-config <TAB>
core                    # Use core as template
personal-agents         # Use personal-agents as template
openagentscontrol       # Use openagentscontrol as template
```

## Install/Uninstall Commands

### Full installation
```bash
$ opencode-config install <TAB>
core                    # Install with core configuration
personal-agents         # Install with personal-agents configuration
openagentscontrol       # Install with openagentscontrol configuration

$ opencode-config uninstall <TAB>
core                    # Uninstall core configuration
personal-agents         # Uninstall personal-agents configuration
```

## Zsh-Specific Features

### Directory completion for paths
```bash
$ opencode-config remote install https://... --install-path <TAB>
# (shows actual directories in current location)
config/
source/
bin/
specs/
```

### Inline descriptions (Zsh only)
```bash
$ opencode-config <TAB>
init        -- Initialize .opencode-env file with a configuration
install     -- Full installation (init + completions + aliases)
uninstall   -- Full uninstallation (remove config + completions + aliases)
list        -- List all available configurations
# ... (all commands show descriptions)
```

## Tips

1. **Press TAB twice** in bash to see all options if there are many matches
2. **Start typing** and press TAB to filter completions
3. **Use flags anywhere** in the command line (not just at the end)
4. **Mix flags and arguments** freely:
   ```bash
   opencode-config remote install --profile essential https://... --install-path config/
   ```

## Troubleshooting

If completions don't work:

1. **Reload shell**:
   ```bash
   source ~/.bashrc  # or ~/.zshrc
   ```

2. **Check installation**:
   ```bash
   opencode-config completion status
   ```

3. **Reinstall**:
   ```bash
   opencode-config completion uninstall
   opencode-config completion install
   ```

4. **Test manually** (Bash):
   ```bash
   source ~/agents/completions/opencode-config-completion.bash
   ```

5. **Clear cache** (Zsh):
   ```bash
   rm -f ~/.zcompdump*
   source ~/.zshrc
   ```
