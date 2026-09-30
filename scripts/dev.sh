#!/usr/bin/env bash
set -e

NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
NVM_SCRIPT="$NVM_DIR/nvm.sh"

if [[ ! -s "$NVM_SCRIPT" ]]; then
  for candidate in /opt/homebrew/opt/nvm/nvm.sh /usr/local/opt/nvm/nvm.sh; do
    if [[ -s "$candidate" ]]; then
      NVM_SCRIPT="$candidate"
      break
    fi
  done
fi

if [[ ! -s "$NVM_SCRIPT" ]]; then
  printf 'nvm is required to run the development server. Install nvm and run `nvm install` in the project directory.\n' >&2
  exit 1
fi

export NVM_DIR
unset npm_config_prefix
. "$NVM_SCRIPT"
nvm use
exec next dev