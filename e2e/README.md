# E2E Tests for PlaceOS Backoffice

These Playwright tests run the app against the mock backend in
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

`USE_MOCK=false` stops the tests from switching on the mock backend. There is
no sign-in flow for a live server, and most tests expect the mock data, so
use this only to debug.

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
