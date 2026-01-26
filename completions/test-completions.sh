#!/usr/bin/env bash
# Test script for shell completions

set -e

echo "🧪 Testing OpenCode Config Completions"
echo "======================================"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Test counter
TESTS_PASSED=0
TESTS_FAILED=0

# Test function
test_completion() {
  local description="$1"
  local test_command="$2"
  
  echo -n "Testing: $description... "
  
  if eval "$test_command" >/dev/null 2>&1; then
    echo -e "${GREEN}✓${NC}"
    ((TESTS_PASSED++))
  else
    echo -e "${RED}✗${NC}"
    ((TESTS_FAILED++))
  fi
}

# Syntax tests
echo "1. Syntax Validation"
echo "-------------------"
test_completion "Bash completion syntax" "bash -n opencode-config-completion.bash"
test_completion "Zsh completion syntax" "zsh -n opencode-config-completion.zsh"
echo ""

# Structure tests
echo "2. Structure Validation"
echo "----------------------"
test_completion "Bash has _opencode_config_completion function" \
  "grep -q '_opencode_config_completion()' opencode-config-completion.bash"

test_completion "Bash registers completion for opencode-config" \
  "grep -q 'complete -F _opencode_config_completion opencode-config' opencode-config-completion.bash"

test_completion "Bash registers completion for oc alias" \
  "grep -q 'complete -F _opencode_config_completion oc' opencode-config-completion.bash"

test_completion "Zsh has #compdef directive" \
  "grep -q '#compdef opencode-config oc' opencode-config-completion.zsh"

test_completion "Zsh has _opencode_config function" \
  "grep -q '_opencode_config()' opencode-config-completion.zsh"
echo ""

# Feature tests
echo "3. Feature Validation"
echo "--------------------"
test_completion "Bash has import flags" \
  "grep -q 'import_flags=' opencode-config-completion.bash"

test_completion "Bash has remote install flags" \
  "grep -q 'remote_install_flags=' opencode-config-completion.bash"

test_completion "Bash has install/uninstall commands" \
  "grep -q 'install uninstall' opencode-config-completion.bash"

test_completion "Zsh has import flags array" \
  "grep -q 'import_flags=' opencode-config-completion.zsh"

test_completion "Zsh has remote install flags array" \
  "grep -q 'remote_install_flags=' opencode-config-completion.zsh"

test_completion "Zsh uses _arguments for advanced completion" \
  "grep -q '_arguments' opencode-config-completion.zsh"

test_completion "Zsh has command descriptions" \
  "grep -q 'init:Initialize' opencode-config-completion.zsh"
echo ""

# Documentation tests
echo "4. Documentation Validation"
echo "--------------------------"
test_completion "README.md exists" "[ -f README.md ]"
test_completion "CHANGELOG.md exists" "[ -f CHANGELOG.md ]"
test_completion "Help file exists" "[ -f opencode-config-help.txt ]"
test_completion "Symlink exists" "[ -L _opencode-config ]"
echo ""

# Summary
echo "======================================"
echo "Summary"
echo "======================================"
echo -e "Tests passed: ${GREEN}${TESTS_PASSED}${NC}"
echo -e "Tests failed: ${RED}${TESTS_FAILED}${NC}"
echo ""

if [ $TESTS_FAILED -eq 0 ]; then
  echo -e "${GREEN}✓ All tests passed!${NC}"
  exit 0
else
  echo -e "${RED}✗ Some tests failed${NC}"
  exit 1
fi
