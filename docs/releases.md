# Releases

Backoffice releases follow the releases of
[PlaceOS/PlaceOS](https://github.com/PlaceOS/PlaceOS). Each PlaceOS release
ships the backoffice commit that its `interfaces/backoffice` submodule pins.
Thus the PlaceOS changelog agrees with the backoffice that installs get.

## Branches

| Branch       | Contents                       | Updated by                                         |
| ------------ | ------------------------------ | -------------------------------------------------- |
| `develop`    | Source                         | Pull requests                                      |
| `build/dev`  | Development build of `develop` | `BUILD` (`.github/workflows/build.yml`), each push |
| `build/prod` | Production build of a release  | `RELEASE` (`.github/workflows/release.yml`)        |

PlaceOS installs load backoffice from `build/prod`. `PlaceOS/init` sets this
branch when it creates the backoffice repository.

Do not make `release/*` or `rc/*` branches. No workflow builds them.

## How a release occurs

1. Each night, PlaceOS/PlaceOS moves its `interfaces/backoffice` submodule to
   the latest commit on `develop`.
2. The PlaceOS release team makes a release, for example `2.2611.6`.
3. The "Tag and release" job of the PlaceOS `build.yml` sends a
   `placeos-release` event to this repository, with the version.
4. `RELEASE` finds the backoffice commit that `2.2611.6` pins. Then it:
    1. Tags the commit `v2.2611.6`. The version info in the build shows this tag.
    2. Runs lint, the unit tests and the Chromium e2e tests.
    3. Makes a production build and uploads the source maps to Sentry.
    4. Publishes the build to `build/prod` when the tests pass.
    5. Pushes the tag, and commits `CHANGELOG.md` to `develop`.

## Get a change into a release

Merge it to `develop`. The next PlaceOS release ships it. PlaceOS makes a
minor release approximately each week. For an urgent fix, ask the PlaceOS
release team to run "New Release" in PlaceOS/PlaceOS after the nightly
submodule update.

## Retry or roll back a release

Run `RELEASE` from the Actions tab, and enter a PlaceOS version.

- To retry a failed release, enter the same version. A tag that a run pushed
  before is used again.
- To roll back, enter an earlier version. `build/prod` gets the backoffice
  of that version. `CHANGELOG.md` on `develop` does not change.

`RELEASE` stops when:

- The commit that PlaceOS pins is not on `develop`. Only reviewed code ships.
- The tag `v<version>` is on a different commit than the commit that PlaceOS
  pins.
