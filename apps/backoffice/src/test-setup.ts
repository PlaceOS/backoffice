import { defineGlobalsInjections } from '@ngneat/spectator';
import 'jest-preset-angular/setup-jest';

import { MockPipe } from 'ng-mocks';
import { TextEncoder, TextDecoder } from 'util';

import { TranslatePipe } from 'apps/backoffice/src/app/ui/translate.pipe';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

defineGlobalsInjections({
    declarations: [MockPipe(TranslatePipe)],
});
