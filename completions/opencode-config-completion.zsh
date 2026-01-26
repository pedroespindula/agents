#compdef opencode-config oc

# Zsh completion for opencode-config

_opencode_config() {
  local specs_dir="$HOME/agents/specs"
  
  # Get available configurations
  local -a configs
  if [ -d "$specs_dir" ]; then
    configs=(${(f)"$(find "$specs_dir" -mindepth 1 -maxdepth 1 -type d -exec basename {} \; 2>/dev/null)"})
  fi

  local -a commands
  commands=(
    'init:Initialize .opencode-env file with a configuration'
    'install:Full installation (init + completions + aliases)'
    'uninstall:Full uninstallation (remove config + completions + aliases)'
    'list:List all available configurations'
    'ls:List all available configurations (alias)'
    'current:Show current active configuration'
    'use:Switch to a different configuration'
    'switch:Switch to a different configuration (alias)'
    'show:Show details of a specific configuration'
    'info:Show details of a specific configuration (alias)'
    'create:Create new configuration from scratch or template'
    'new:Create new configuration (alias)'
    'remote:Manage remote configurations (install/update/list)'
    'import:Import external repository as submodule (deprecated)'
    'completion:Manage shell completions (install/uninstall/status)'
    'completions:Manage shell completions (alias)'
    'aliases:Manage shell aliases (install/uninstall/status)'
    'alias:Manage shell aliases (alias)'
    'recover:Recover OpenCode session messages by text or ID'
    'help:Show help message'
  )

  local -a completion_commands
  completion_commands=(
    'install:Install shell completions'
    'uninstall:Remove shell completions'
    'status:Check completion installation status'
    'help:Show completion help'
  )

  local -a aliases_commands
  aliases_commands=(
    'install:Install shell aliases'
    'uninstall:Remove shell aliases'
    'status:Check alias installation status'
    'help:Show aliases help'
  )

  local -a remote_commands
  remote_commands=(
    'install:Install remote configuration from repository'
    'uninstall:Remove remote configuration'
    'update:Update remote configuration to latest version'
    'upgrade:Update remote configuration to latest version (alias)'
    'list:List all remote configurations'
    'ls:List all remote configurations (alias)'
    'help:Show remote help'
  )

  local -a recover_options
  recover_options=(
    '-s:Treat argument as session ID'
    '--session:Treat argument as session ID'
    '-l:List only found sessions (without messages)'
    '--list:List only found sessions (without messages)'
    '-a:Show all messages from all sessions'
    '--all:Show all messages from all sessions'
    '-u:Show only user messages'
    '--user:Show only user messages'
    '-t:Show only assistant messages'
    '--assistant:Show only assistant messages'
    '-r:Remove colors from output (for piping to file)'
    '--raw:Remove colors from output (for piping to file)'
    '-h:Show help'
    '--help:Show help'
  )

  local -a shells
  shells=(
    'bash:Install for bash shell'
    'zsh:Install for zsh shell'
    'auto:Auto-detect current shell'
  )

  local -a import_flags
  import_flags=(
    '--installer:Custom installer command to run'
    '--profile:Profile to pass to installer (e.g., essential, full)'
    '--install-path:Custom installation path (default: config/)'
  )

  local -a remote_install_flags
  remote_install_flags=(
    '--profile:Profile to pass to installer (e.g., essential, full)'
    '--install-path:Custom installation path (default: config/)'
    '--installer:Custom installer command to run'
  )

  case $words[2] in
    use|switch|show|info)
      _describe 'configuration' configs
      ;;
    create|new)
      if [ $CURRENT -eq 3 ]; then
        # First argument: new config name (no completion)
        _message 'new configuration name'
      elif [ $CURRENT -eq 4 ]; then
        # Second argument: template
        _describe 'template configuration' configs
      fi
      ;;
    init|install|uninstall)
      if [ $CURRENT -eq 3 ]; then
        _describe 'configuration' configs
      fi
      ;;
    completion|completions)
      if [ $CURRENT -eq 3 ]; then
        # Complete completion subcommands
        _describe 'completion command' completion_commands
      elif [ $CURRENT -eq 4 ]; then
        # Complete shell type for install/uninstall
        if [[ "$words[3]" == "install" || "$words[3]" == "uninstall" ]]; then
          _describe 'shell' shells
        fi
      fi
      ;;
    aliases|alias)
      if [ $CURRENT -eq 3 ]; then
        # Complete aliases subcommands
        _describe 'aliases command' aliases_commands
      elif [ $CURRENT -eq 4 ]; then
        # Complete shell type for install/uninstall
        if [[ "$words[3]" == "install" || "$words[3]" == "uninstall" ]]; then
          _describe 'shell' shells
        fi
      fi
      ;;
    remote)
      if [ $CURRENT -eq 3 ]; then
        # Complete remote subcommands
        _describe 'remote command' remote_commands
      elif [ $CURRENT -eq 4 ]; then
        # Complete based on remote subcommand
        case $words[3] in
          uninstall|update|upgrade)
            # Complete with available remote configurations
            _describe 'configuration' configs
            ;;
          install)
            # Complete flags or repository URL
            _arguments \
              '--profile[Profile to pass to installer]:profile:' \
              '--install-path[Custom installation path]:path:_directories' \
              '--installer[Custom installer command]:command:' \
              '1:repository URL:'
            ;;
        esac
      elif [ $CURRENT -ge 5 ]; then
        # Complete flags for remote install at any position
        if [[ "$words[3]" == "install" ]]; then
          _arguments \
            '--profile[Profile to pass to installer]:profile:' \
            '--install-path[Custom installation path]:path:_directories' \
            '--installer[Custom installer command]:command:' \
            '*:configuration name or flag:'
        fi
      fi
      ;;
    recover)
      # Complete recover options and allow text search
      _arguments \
        '(-s --session)'{-s,--session}'[Treat argument as session ID]' \
        '(-l --list)'{-l,--list}'[List only found sessions]' \
        '(-a --all)'{-a,--all}'[Show all messages from all sessions]' \
        '(-u --user)'{-u,--user}'[Show only user messages]' \
        '(-t --assistant)'{-t,--assistant}'[Show only assistant messages]' \
        '(-r --raw)'{-r,--raw}'[Remove colors from output]' \
        '(-h --help)'{-h,--help}'[Show help]' \
        '*:search text or session ID:'
      ;;
    import)
      # Complete flags or repository URL and config name
      _arguments \
        '--installer[Custom installer command]:command:' \
        '--profile[Profile to pass to installer]:profile:' \
        '--install-path[Custom installation path]:path:_directories' \
        '1:repository URL:' \
        '2:configuration name (optional):'
      ;;
    *)
      if [ $CURRENT -eq 2 ]; then
        _describe 'command' commands
      fi
      ;;
  esac
}

_opencode_config "$@"
