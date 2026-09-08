# Bundle size maintenance

Build with statistics in a separate directory:

```sh
NX_DAEMON=false bunx nx build backoffice --configuration=production --outputPath=/tmp/backoffice-bundle --stats-json --skip-nx-cache
```

The initial budget covers the Angular entry files. Check copied assets and the
service worker manifest as well. They can add downloads outside that budget.

## Icon fonts

The fonts in `public/assets` retain all icon names, including names supplied by
the server. They use weight 400, fill 0, and grade 0. Optical sizing remains
variable. The source is `material-symbols` 0.39.3, with its license copied beside
the fonts.

After updating that package, regenerate the fonts and review the rendered icons:

```sh
python3 -m venv /tmp/backoffice-font-tools
/tmp/backoffice-font-tools/bin/pip install 'fonttools[woff]==4.61.1'
/tmp/backoffice-font-tools/bin/python config/build-icon-fonts.py
```

Normal builds use the checked-in fonts and do not require Python or network access
to generate them. Do not add the original variable fonts to the build asset list.

## Editors and highlighting

Settings and diff editors call `loadMonaco()` before using its API. The loader
shares concurrent requests, has a 30-second timeout, and permits retry. Components
must check whether they were destroyed before creating an editor after the load.

`markdown-languages.ts` lists the existing web languages and aliases explicitly.
Only `github-dark` is packaged. Add new language loaders there. Importing the
Shiki web preset at runtime also brings its unused theme registry into the build.

## Themes and caching

`src/material-theme.scss` retains the indigo-pink palette and includes the Material
components used by the app. Add the matching theme mixin when adding a component.

The service worker prefetches the app shell. It downloads optional JavaScript
chunks only when requested. An unvisited page can require a network connection;
do not assume every route is available offline immediately after installation.

Keep the upload permissions dialog behind its dynamic import. The global upload
list must not import its form components at startup.
