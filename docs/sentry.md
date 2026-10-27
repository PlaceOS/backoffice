# Sentry error reporting

Backoffice sends errors, performance traces and session replays to
[Sentry](https://sentry.io). The code is in
[`src/app/common/sentry.ts`](../src/app/common/sentry.ts).

## What Backoffice sends

| Data     | When                                                     |
| -------- | -------------------------------------------------------- |
| Errors   | All errors that go to the Angular error handler          |
| Traces   | 10% of page loads and navigations (100% on dev builds)   |
| Replays  | Only for a session that has an error                     |
| User     | The user ID. Backoffice does not send the email or name. |
| `domain` | Tag with the domain of the authority                     |

Replays mask all text and block all media.

Backoffice loads Sentry after the user signs in. Errors that occur before this
stay in a queue (20 errors maximum). Backoffice sends them when Sentry starts.

Sentry does not start:

- On `localhost`
- In mock mode
- When the DSN is empty

## Set the DSN for a domain

Each domain can set its DSN in the domain config at
`config.backoffice.sentry_dsn`:

```json
{
    "backoffice": {
        "sentry_dsn": "https://<key>@<org-id>.ingest.sentry.io/<project-id>"
    }
}
```

| Value           | Result                                  |
| --------------- | --------------------------------------- |
| Not set         | Backoffice uses the PlaceOS default DSN |
| A DSN           | Backoffice sends to that Sentry project |
| `""` or `false` | Backoffice does not send data to Sentry |

To change the default DSN, change `DEFAULT_SENTRY_DSN` in
[`src/app/common/sentry.ts`](../src/app/common/sentry.ts).

## Upload source maps

The build minifies the scripts. To show the original code in Sentry stack
traces, CI uploads source maps to Sentry. Do these steps one time.

### 1. Find the organization slug

The slug is the short name of the organization in the Sentry URL:
`https://<org-slug>.sentry.io/`. You can also find it in **Settings →
Organization → General Settings → Organization Slug**.

### 2. Find the project slug

1. Go to **Settings → Projects** and open the project.
2. Open **Client Keys (DSN)**. Make sure that the DSN is the same as the
   default DSN in `sentry.ts`. The last number of the DSN is the project ID.
3. Open **General Settings**. The **Name** field is the project slug.

Do not use the numbers in the DSN. These are IDs, not slugs.

### 3. Make an auth token

Go to **Settings → Developer Settings → Organization Tokens** and make a token.
On some Sentry versions, this page has the name **Auth Tokens**.

### 4. Add the GitHub secrets

In the GitHub repository, go to **Settings → Secrets and variables → Actions**.
Add these repository secrets:

| Secret              | Value                          |
| ------------------- | ------------------------------ |
| `SENTRY_AUTH_TOKEN` | The token from step 3          |
| `SENTRY_ORG`        | The organization slug (step 1) |
| `SENTRY_PROJECT`    | The project slug (step 2)      |

CI does not upload source maps until all three secrets have a value. The
upload starts on the next run of the **BUILD** workflow.

### 5. Make sure that the upload works

1. Open the **BUILD** workflow run in GitHub Actions.
2. Open the **Upload source maps to Sentry** step. Make sure that it does not
   show `Skipping upload`.
3. In Sentry, open an error from the new release. The stack trace must show
   the TypeScript source, not minified code.

## How the upload works

The **Upload source maps to Sentry** step in
[`.github/workflows/build.yml`](../.github/workflows/build.yml) does these
steps:

1. `sentry-cli sourcemaps inject` adds a debug ID to each script and its map.
   Sentry uses the debug ID to find the map for a script.
2. [`config/ngsw-rehash.js`](../config/ngsw-rehash.js) updates the file hashes
   in `ngsw.json`. The debug IDs change the scripts, and the service worker
   does not accept a file if its hash is different. Only production builds
   have a service worker.
3. `sentry-cli sourcemaps upload` uploads the maps to the release
   `backoffice@<git hash>`. This name must be the same as `SENTRY_RELEASE` in
   `sentry.ts`.

Production builds make hidden source maps. The scripts do not link to the maps,
and CI deletes the maps before the deploy. Development builds keep their maps.
