# E2E Tests for PlaceOS Backoffice

There are two suites:

- **Mock** (`src/*.spec.ts`): the app runs against the mock backend. CI runs
  this suite. Most of this document is about it.
- **Local backend** (`src/local/*.spec.ts`): the app runs against a real
  PlaceOS stack in Docker. See [Local backend](#local-backend).

The mock tests run the app against the mock backend in
`src/app/mocks/`. Each test gets a new browser context, so it starts with
fresh mock data. The mock backend keeps creates, edits and deletes in session
storage, so a change stays after `page.reload()` in the same test.

## Run the tests

Install the browsers one time with `bunx playwright install`.

```bash
bun run e2e                                         # all projects
bunx nx e2e e2e -- --project=chromium              # one browser
bunx nx e2e e2e -- --project=chromium zones.spec   # one spec file
bunx nx e2e e2e -- --ui                             # UI mode
```

The config starts the dev server, or uses the server that runs on port 4200.

| Project                            | Specs                    |
| ---------------------------------- | ------------------------ |
| `chromium`, `firefox`, `webkit`    | `*.spec.ts`              |
| `mobile-chrome`, `mobile-safari`   | `*.mobile.spec.ts`       |

CI runs `chromium` and `mobile-chrome` for pull requests to `develop`, and
all projects on other branches.

`USE_MOCK=false` stops the tests from switching on the mock backend. Most
tests expect the mock data, so use this only to debug. To test against a real
backend, use the [local backend](#local-backend) suite.

## Coverage

Tests use the ids from `user-stories/*.md` (e.g. `AC-ZON-004-5`) in their
names.

| Spec                     | Covers                                                         |
| ------------------------ | -------------------------------------------------------------- |
| `systems.spec.ts`        | List, search, create, edit, delete, tabs, start and stop       |
| `zones.spec.ts`          | List, search, create, edit, delete, parent link, child zones   |
| `cascade-delete.spec.ts` | Optional removal of the systems inside a deleted zone          |
| `modules.spec.ts`        | List, create from a driver, edit, delete, start and stop       |
| `drivers.spec.ts`        | List, readme, modules, edit, delete, recompile and reload      |
| `repositories.spec.ts`   | List, details, edit, delete, add a driver from a repository    |
| `triggers.spec.ts`       | List, search, create, edit, delete, instances                  |
| `users.spec.ts`          | List, search, create, edit, delete, metadata, history          |
| `groups.spec.ts`         | Group tree, create, edit, delete, members, zone access         |
| `domains.spec.ts`        | List, create, edit, delete, applications, auth methods, users  |
| `admin.spec.ts`          | Every admin section, brokers, extensions, tenants, API keys    |
| `navigation.spec.ts`     | Main menu, redirects, deep links, browser back                 |
| `mobile.mobile.spec.ts`  | Hamburger menu, item picker, system details on phones          |

## Write a test

```typescript
import { expect, seedMockData, test } from './fixtures/test-fixtures';
import { FeaturePage } from './pages';

test('a renamed trigger keeps its new name', async ({ page }) => {
    await seedMockData(page, 'triggers', [{ id: 'trigger-1', name: 'Alarm' }]);
    const triggers = new FeaturePage(page, 'triggers');

    await triggers.gotoItem('trigger-1');
    await triggers.openEditModal();
    await triggers.dialog.getByRole('textbox', { name: 'Name*' }).fill('Fire');
    await triggers.saveButton.click();

    await page.reload();
    await triggers.waitForItemDetails();
    await expect(triggers.itemName).toHaveText('Fire');
});
```

Rules:

1. Import `test` and `expect` from `fixtures/test-fixtures`. This `test`
   switches on the mock backend.
2. Use `FeaturePage` for a list/detail section. `BasePage` has the shared
   helpers: `gotoItem`, `itemLink`, `itemName`, `openTab`, `createWith`,
   `openEditModal`, `deleteSelected`, `tableRow` and `notification`. Add a
   page object only for helpers that one section needs (e.g. `UsersPage`).
3. Seed the data a test needs. `seedMockData(page, 'triggers', rows)` replaces
   the rows of an endpoint made with `generateBasicHandlers`.
   `seedSession(page, key, rows)` replaces any other mock store, e.g.
   `api_keys`.
4. Make each test fail when the feature breaks. Check the value that changed,
   the URL, or that a change stays after a reload. Do not only check that an
   element is visible.
5. Do not use `waitForTimeout` or `.catch()` on assertions. Web-first
   assertions (`toHaveText`, `toHaveURL`, `toHaveCount`) wait for the app.
6. The item list is virtual and shows only part of a long list. Search for an
   item before you look for it in a long list.

## Local backend

These specs run against a PlaceOS stack on your computer. They make, change
and delete real data, so the config refuses a backend that is not on a
loopback host. The stack and the suite are adapted from the
`PlaceOS/user-interfaces` e2e stack.

You need Docker with about 2 GB of free memory for the stack.

```bash
e2e/stack/up.sh                    # start the stack (--fresh: remove its data first, --pull: pull new images)
bun run e2e:local                  # run the specs
bun run e2e:local -- zones.spec    # run one spec file
bun run e2e:local -- --ui          # UI mode
e2e/stack/down.sh                  # stop the stack (--volumes: remove its data)
```

### The stack

`e2e/stack/` is its own compose project (`backoffice-e2e`) with its own
network, volumes and secrets. It uses ports 9543 (HTTPS) and 9180 (HTTP). Thus
it can run at the same time as PlaceOS/local (8443) and the user-interfaces
e2e stack (9443).

It has: postgres, elasticsearch, redis, search-ingest, frontend-loader, auth,
rest-api, staff-api, nginx and init. It does not have core, so no driver
compiles and no module starts. Add core from the user-interfaces stack when a
spec needs it.

`up.sh` makes the secrets in `e2e/stack/.secrets/` (not in git), starts the
services, waits for the API and the login page, and runs `init`. `init` makes
the authority, the admin user (`support@place.tech` / `development`) and a
zone tree.

`frontend-loader` is necessary. It copies `PlaceOS/www-core` into the `www`
volume, and the platform `/login` page comes from there. Thus the first
start needs access to GitHub.

### How a run works

1. Playwright starts the dev server on port 4216, with its proxy
   (`config/proxy.conf.js`) pointed at the stack. It does not use port 4200,
   because a dev server there can proxy to a shared deployment.
2. The `setup` project (`support/stack.setup.ts`) checks that the stack
   answers, then seeds it (`support/seed.ts`). The seed is idempotent:
    - It registers an OAuth app for `http://localhost:4216/oauth-resp.html`.
      ts-client uses `Md5(redirect_uri)` as its client id, and the sign-in
      fails if no app has that id.
    - It makes the authority's `login_url` absolute. A new authority has a
      relative `login_url`, and ts-client then sends the browser to
      `http://localhost/login`, which has no port.
    - It makes a user that is not an admin (`e2e-staff@place.tech`).
3. The setup signs in as each user through the API (OAuth code + PKCE) and
   writes a storageState to `e2e/.auth/` (not in git). These files hold
   bearer tokens.
4. The `local` project runs `src/local/*.spec.ts`. `page` is signed in as
   the admin.

### CI

`.github/workflows/e2e-local.yml` runs this suite on a self-hosted runner
with the label `placeos-e2e`. It runs:

- on a push to `develop`, `release/**`, `rc/**` and `e2e/**`
- every day at 01:40 UTC
- from **Run workflow**

It has no `pull_request` trigger. This repository is public, so a fork pull
request could run any code on the runner. Do not add the trigger, except if
the job moves to `ubuntu-latest`.

The job is advisory. Do not make it a required check until it has a record of
runs with no false failures.

Each run removes what an earlier run left, pulls the images, starts the stack
with no data, runs the suite and removes the stack and its volumes. The step
summary shows the image ids and the flaky specs. On failure, the artifacts
have the traces, the videos and the log of each service.

To set up the runner machine, follow
[`SELF_HOSTED_RUNNER.md`](https://github.com/PlaceOS/user-interfaces/blob/develop/e2e/stack/SELF_HOSTED_RUNNER.md)
in `PlaceOS/user-interfaces`, with these changes:

- Register the runner for `PlaceOS/backoffice` (a repository runner serves
  one repository), or use an organisation runner for both repositories.
- The suite uses ports 9543, 9180 and 4216, and the user-interfaces suite uses
  9443, 9080 and 4214. Thus the two jobs can run on one machine at the same
  time if it has the memory.

### Write a local spec

```typescript
import { ENGINE_API, uniqueName } from '../../support/api';
import { expect, test } from '../../support/fixtures';
import { FeaturePage } from '../pages';

test('AC-ZON-004-5: a renamed zone is saved', async ({ page, api }) => {
    const res = await api.post(`${ENGINE_API}/zones`, {
        data: { name: uniqueName('E2E Zone') },
    });
    const zone = await res.json();
    try {
        // ...change the zone in the UI with FeaturePage...
        // ...then check the result through `api`, not only on the page
    } finally {
        await api.delete(`${ENGINE_API}/zones/${zone.id}`);
    }
});
```

Rules:

1. Import `test` and `expect` from `support/fixtures`. The fixtures are:
   `page` (signed in as the admin), `staffPage` (signed in as a user that is
   not an admin) and `api` (an API context with an admin bearer).
2. Each spec makes its own data with `uniqueName()` and removes it in a
   `finally`. Specs run in parallel on the same stack.
3. Check the result through the API. The page can show a change that the
   backend did not save.
4. Check access rules as `staffPage`. A sys_admin passes every check, so the
   same test as the admin proves nothing.
5. A spec about sign-in starts with no token:
   `test.use({ storageState: { cookies: [], origins: [] } })`. See
   `src/local/login.spec.ts`.
6. Make the new assertion fail one time, and make sure that it fails for the
   correct reason.

| Spec                   | Covers                                               |
| ---------------------- | ---------------------------------------------------- |
| `local/login.spec.ts`  | Sign-in through the platform login page              |
| `local/access.spec.ts` | An admin opens domains; other users get the 403 page |
| `local/zones.spec.ts`  | Create, rename and delete a zone, checked on the API |
