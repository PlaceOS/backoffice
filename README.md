# ACA Angular Backoffice UI

[![pipeline status](https://gitlab.com/aca-engine/frontend-base/ngx-backoffice/badges/master/pipeline.svg)](https://gitlab.com/aca-engine/frontend-base/ngx-backoffice/commits/master)

## Setup

1. Install [NodeJS](https://nodejs.org/en/download/current/)
1. Run `npm install` in the root folder
1. Run `npm install --global gulp-cli` to Install [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
1. Run `npm install --global @angular/cli` to Install [Angular CLI](https://github.com/angular/angular-cli)

## Development

To run the dev server use the command `gulp serve`

By default the dev web server proxies all requests to the set live system, if you wish to use a mock system use `--mock` when calling `gulp serve`

## Compilation

Compile the application into static files using `gulp build`

The command takes the arguments `--prod` to minify the resulting build and `--aot` to compile the angular code using the angular Ahead of Time compiler.

Application/Runtime settings can be found in `assets/settings.json`

## Tests

Unit tests can be run using `npm run test:local`
Code coverage can be run using `npm run coverage`
E2E tests can be run using `npm run test:e2e`

## Usage

