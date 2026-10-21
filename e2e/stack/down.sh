#!/usr/bin/env bash
# Stop the isolated e2e stack. Pass --volumes to remove its data too.
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")"
docker compose -p "${E2E_STACK_PROJECT:-backoffice-e2e}" down --remove-orphans "$@"
