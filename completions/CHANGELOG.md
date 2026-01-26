# Changelog - Shell Completions

## [2.0.0] - 2026-01-26

### Added - Bash Completion
- ✅ Support for `install` and `uninstall` commands
- ✅ Flag completion for `import` command (`--installer`, `--profile`, `--install-path`)
- ✅ Flag completion for `remote install` command
- ✅ Completion for `oc` alias
- ✅ Helper function `_is_flag()` to detect flag arguments
- ✅ Helper function `_complete_flags()` for consistent flag completion
- ✅ Support for flags at any position in command line

### Added - Zsh Completion
- ✅ Detailed descriptions for all commands
- ✅ Support for `install` and `uninstall` commands
- ✅ Advanced flag completion using `_arguments`
- ✅ Directory completion for `--install-path` flag
- ✅ Inline help for all flags and options
- ✅ Completion for `oc` alias via `#compdef opencode-config oc`
- ✅ Better descriptions for all subcommands

### Added - Documentation
- ✅ Quick reference guide (`opencode-config-help.txt`)
- ✅ Comprehensive README with examples
- ✅ Usage examples for all commands
- ✅ Troubleshooting section
- ✅ Development and debugging guide

### Improved
- 📝 Better organization of completion logic
- 📝 Consistent flag handling across commands
- 📝 More descriptive help text for all options
- 📝 Better support for multi-word commands

### Fixed
- 🐛 Flags now complete at any position (not just position 3)
- 🐛 Remote install flags now work correctly
- 🐛 Recover options now have proper descriptions

## [1.0.0] - Previous Version

### Features
- Basic command completion
- Configuration name completion
- Subcommand completion for `completion`, `aliases`, `remote`
- Basic flag support for `recover`

---

## Migration Guide

If you have the old completions installed:

1. **Uninstall old version**:
   ```bash
   opencode-config completion uninstall
   ```

2. **Reload shell**:
   ```bash
   source ~/.bashrc  # or ~/.zshrc
   ```

3. **Install new version**:
   ```bash
   opencode-config completion install
   ```

4. **Test**:
   ```bash
   opencode-config remote install <TAB>
   # Should show: --profile, --install-path, --installer
   ```

## What's Next

Planned improvements:
- [ ] Session ID completion for `recover -s <TAB>`
- [ ] Profile name completion from common profiles (essential, full, minimal)
- [ ] Git URL completion from clipboard
- [ ] Smart completion based on command history
- [ ] Fuzzy matching for configuration names
