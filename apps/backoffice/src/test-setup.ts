import { defineGlobalsInjections } from '@ngneat/spectator';
import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

import { MockPipe } from 'ng-mocks';
import { TextDecoder, TextEncoder } from 'util';

import { TranslatePipe } from 'apps/backoffice/src/app/ui/translate.pipe';

setupZoneTestEnv();

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

declare global {
    interface Window {
        debug: boolean;
    }
}

defineGlobalsInjections({
    declarations: [MockPipe(TranslatePipe)],
});
