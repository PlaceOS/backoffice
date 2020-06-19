# PlaceOS Angular Backoffice UI

![PROD](https://github.com/PlaceOS/backoffice/workflows/PROD/badge.svg)
![DEVELOP](https://github.com/PlaceOS/backoffice/workflows/DEVELOP/badge.svg)

## Setup

1. Install [NodeJS](https://nodejs.org/en/download/current/)
1. Run `npm install` in the root folder
1. Run `npm install --global @angular/cli` to Install [Angular CLI](https://github.com/angular/angular-cli)

## Development

To run the dev server use the command `ng serve`

By default the dev web server proxies all requests to the set live system, if you wish to use a mock system change `mock` to true in `src/assets/settings.js`

## Compilation

Compile the application into static files using `ng build`

The command takes the arguments `--prod` to minify the resulting build and `--aot` to compile the angular code using the angular Ahead of Time compiler.

Application/Runtime settings can be found in `src/assets/settings.json`

## Tests

Unit tests can be run using `npm run test:local`
Code coverage can be run using `npm run coverage`
E2E tests can be run using `npm run test:e2e`

## Usage

