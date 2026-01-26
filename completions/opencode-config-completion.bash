#!/usr/bin/env bash
# Bash completion for opencode-config

_opencode_config_completion() {
  local cur prev words cword
  _init_completion || return

  local commands="init install uninstall list ls current use switch show info create new remote import completion completions aliases alias recover help"
  local specs_dir="$HOME/agents/specs"
  local completion_commands="install uninstall status help"
  local aliases_commands="install uninstall status help"
  local remote_commands="install uninstall update upgrade list ls help"
  local recover_options="-s --session -l --list -a --all -u --user -t --assistant -r --raw -h --help"
  local import_flags="--installer --profile --install-path"
  local remote_install_flags="--profile --install-path --installer"

  # Get available configurations
  _get_configs() {
    if [ -d "$specs_dir" ]; then
      find "$specs_dir" -mindepth 1 -maxdepth 1 -type d -exec basename {} \; 2>/dev/null
    fi
  }

  # Check if current word is a flag
  _is_flag() {
    [[ "$cur" == -* ]]
  }

  # Complete flags for import/remote install
  _complete_flags() {
    local flags="$1"
    if _is_flag; then
      COMPREPLY=($(compgen -W "$flags" -- "$cur"))
      return 0
    fi
    return 1
  }

  case $cword in
    1)
      # Complete commands
      COMPREPLY=($(compgen -W "$commands" -- "$cur"))
      ;;
    2)
      # Complete based on previous command
      case $prev in
        use|switch|show|info)
          # Complete with available configurations
          COMPREPLY=($(compgen -W "$(_get_configs)" -- "$cur"))
          ;;
        create|new)
          # No completion for new config name (user input)
          COMPREPLY=()
          ;;
        init|install|uninstall)
          # Complete with available configurations (optional)
          COMPREPLY=($(compgen -W "$(_get_configs)" -- "$cur"))
          ;;
        completion|completions)
          # Complete completion subcommands
          COMPREPLY=($(compgen -W "$completion_commands" -- "$cur"))
          ;;
        aliases|alias)
          # Complete aliases subcommands
          COMPREPLY=($(compgen -W "$aliases_commands" -- "$cur"))
          ;;
        remote)
          # Complete remote subcommands
          COMPREPLY=($(compgen -W "$remote_commands" -- "$cur"))
          ;;
        recover)
          # Complete recover options
          COMPREPLY=($(compgen -W "$recover_options" -- "$cur"))
          ;;
        import)
          # Complete flags or no completion for URL
          _complete_flags "$import_flags" || COMPREPLY=()
          ;;
        *)
          COMPREPLY=()
          ;;
      esac
      ;;
    3)
      # Complete template for create command or shell for completion install
      case ${words[1]} in
        create|new)
          # Complete with available configurations as templates
          COMPREPLY=($(compgen -W "$(_get_configs)" -- "$cur"))
          ;;
        completion|completions)
          # Complete shell type for install/uninstall
          if [[ "${words[2]}" == "install" || "${words[2]}" == "uninstall" ]]; then
            COMPREPLY=($(compgen -W "bash zsh auto" -- "$cur"))
          fi
          ;;
        aliases|alias)
          # Complete shell type for install/uninstall
          if [[ "${words[2]}" == "install" || "${words[2]}" == "uninstall" ]]; then
            COMPREPLY=($(compgen -W "bash zsh auto" -- "$cur"))
          fi
          ;;
        remote)
          # Complete based on remote subcommand
          case ${words[2]} in
            uninstall|update|upgrade)
              # Complete with available remote configurations
              COMPREPLY=($(compgen -W "$(_get_configs)" -- "$cur"))
              ;;
            install)
              # Complete flags or no completion for URL
              _complete_flags "$remote_install_flags" || COMPREPLY=()
              ;;
            *)
              COMPREPLY=()
              ;;
          esac
          ;;
        import)
          # Complete flags or config name for import (optional second argument)
          _complete_flags "$import_flags" || COMPREPLY=()
          ;;
        *)
          COMPREPLY=()
          ;;
      esac
      ;;
    *)
      # Handle flags at any position for import and remote install
      case ${words[1]} in
        import)
          _complete_flags "$import_flags" || COMPREPLY=()
          ;;
        remote)
          if [[ "${words[2]}" == "install" ]]; then
            _complete_flags "$remote_install_flags" || COMPREPLY=()
          else
            COMPREPLY=()
          fi
          ;;
        *)
          COMPREPLY=()
          ;;
      esac
      ;;
  esac
}

complete -F _opencode_config_completion opencode-config
# Also complete for 'oc' alias
complete -F _opencode_config_completion oc
