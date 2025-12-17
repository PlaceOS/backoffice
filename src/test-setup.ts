import '@analogjs/vitest-angular/setup-zone';
import '@angular/compiler';

import { getTestBed } from '@angular/core/testing';
import {
    BrowserTestingModule,
    platformBrowserTesting,
} from '@angular/platform-browser/testing';

// Suppress Angular CDK component ID collision warnings (NG0912)
// This is a known Angular 20 issue with CDK overlay components
const is_ng0912_warning = (message: unknown): boolean =>
    typeof message === 'string' &&
    message.includes('NG0912') &&
    message.includes('Component ID generation collision');

const original_console_error = console.error;
console.error = (...args: unknown[]) => {
    if (is_ng0912_warning(args[0])) return;
    original_console_error.apply(console, args);
};

const original_console_warn = console.warn;
console.warn = (...args: unknown[]) => {
    if (is_ng0912_warning(args[0])) return;
    original_console_warn.apply(console, args);
};

getTestBed().initTestEnvironment(
    BrowserTestingModule,
    platformBrowserTesting(),
);
