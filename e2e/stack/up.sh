#!/usr/bin/env bash
# Bring up the isolated PlaceOS stack for the backoffice e2e suite.
#
# It is its own compose project (`backoffice-e2e`) on its own network, volumes
# and ports, so it never touches a developer's PlaceOS/local stack or the
# user-interfaces e2e stack.
#
#   ./up.sh              bring up (keeps the volumes)
#   ./up.sh --fresh      remove the volumes first: a genuine cold start
#   ./up.sh --pull       pull the current images first
#   ./up.sh --pull-only  pull and stop (CI runs this as its own bounded step)
#   ./down.sh            stop (--volumes to remove the data)
#
# The suite seeds its own fixtures (e2e/support/seed.ts) before the specs run,
# so this script only starts the services and runs `init`.
#
# -E (errtrace) is load-bearing: without it the ERR trap is not inherited by
# shell functions, and a failure in `dc()` exits with no diagnostics.
set -euEo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")"

PROJECT=${E2E_STACK_PROJECT:-backoffice-e2e}
HTTPS_PORT=${E2E_HTTPS_PORT:-9543}
export E2E_HTTPS_PORT=$HTTPS_PORT
export E2E_DOMAIN=${E2E_DOMAIN:-localhost:${HTTPS_PORT}}
ADMIN_EMAIL=${E2E_ADMIN_EMAIL:-support@place.tech}
ADMIN_PASSWORD=${E2E_ADMIN_PASSWORD:-development}

# Always run compose from this directory with an explicit -p. A bare
# `docker compose` elsewhere can pick up a different compose file.
dc() { docker compose -p "$PROJECT" "$@"; }
step() { printf '\n\033[1m== %s\033[0m\n' "$1"; }

fresh=false
pull=false
pull_only=false
for arg in "$@"; do
    case "$arg" in
        --fresh) fresh=true ;;
        --pull) pull=true ;;
        --pull-only) pull=true; pull_only=true ;;
        *) echo "unknown option: $arg" >&2; exit 64 ;;
    esac
done

if [[ "$fresh" == true ]]; then
    step "tearing down (volumes included)"
    dc down --volumes --remove-orphans || true
fi

# Compose refuses to load the project while an env_file is missing, so make
# them empty first. The real values are generated below.
mkdir -p .secrets
touch .secrets/.env.secret_key .secrets/.env.public_key

if [[ "$pull" == true ]]; then
    step "pulling images"
    # An image that fails to pull is reported, and the stack then runs on the
    # image already present
    dc pull --ignore-pull-failures
    if [[ "$pull_only" == true ]]; then exit 0; fi
fi

# The init image's generator is the one PlaceOS/local uses. Existing values are
# kept, not rotated.
step "secrets"
if ! grep -q 'JWT_SECRET' .secrets/.env.secret_key; then
    # The generator reads the admin credentials from .env
    printf 'PLACE_EMAIL=%s\nPLACE_PASSWORD=%s\n' "$ADMIN_EMAIL" "$ADMIN_PASSWORD" > .secrets/.env
    docker run --rm -w /tmp/secrets -v "$PWD/.secrets:/tmp/secrets" \
        -e PLACE_EMAIL="$ADMIN_EMAIL" -e PLACE_PASSWORD="$ADMIN_PASSWORD" \
        "placeos/init:${PLACEOS_TAG:-latest}" generate-secrets >/dev/null
    # SECRET_KEY_BASE must be exactly 30 characters: nginx's lua HMAC and
    # auth.cr both key off it, and they disagree on a longer value.
    awk -F'=' '{ if ($1 == "SECRET_KEY_BASE") print $1"="substr($2,1,30); else print }' \
        .secrets/.env.secret_key > .secrets/.tmp && mv .secrets/.tmp .secrets/.env.secret_key
    echo "  generated"
else
    echo "  present (not rotated)"
fi

# `compose --wait` reports only "container X is unhealthy". Print the state
# and logs of every service so the output alone explains a failure.
diagnose() {
    echo
    echo "=== compose ps ==="
    dc ps --all || true
    echo
    echo "=== logs (all services, last 60 lines each) ==="
    dc logs --tail 60 || true
}
trap 'rc=$?; [[ $rc -ne 0 ]] && diagnose; exit $rc' ERR

# Poll a URL until it answers with a status that matches `want` (a regex).
# Bounded: 60 tries, 2 seconds apart.
wait_for() {
    local url=$1 want=$2 code=""
    for _ in $(seq 1 60); do
        code=$(curl -sk -o /dev/null -w '%{http_code}' "$url" || true)
        [[ "$code" =~ $want ]] && { echo "  $url -> $code"; return 0; }
        sleep 2
    done
    echo "  $url never answered as expected (last: ${code:-none})" >&2
    return 1
}

step "starting services"
dc up -d --wait --wait-timeout 300 postgres elastic redis
dc up -d search-ingest frontend-loader auth rest-api staff-api nginx

step "waiting for the API"
wait_for "https://localhost:${HTTPS_PORT}/api/engine/v2/" '^[1-4][0-9][0-9]$'

# frontend-loader clones PlaceOS/www-core into the `www` volume on startup.
# Until it lands, nginx answers 404 at /login.
step "waiting for the platform login page"
wait_for "https://localhost:${HTTPS_PORT}/login" '^200$'

# Creates the authority, the admin user, the `backoffice` OAuth app and a
# placeholder zone tree. Safe to run again.
step "seeding platform entities (init)"
dc run --rm init start

printf '\n\033[32mstack ready\033[0m  backend=https://localhost:%s  project=%s\n' "$HTTPS_PORT" "$PROJECT"
printf 'run the suite with:\n  bun run e2e:local\n'
