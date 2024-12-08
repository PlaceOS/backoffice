import { defineGlobalsInjections } from '@ngneat/spectator';
import { TranslateModule } from '@ngx-translate/core';
import 'jest-preset-angular/setup-jest';

import { MockModule } from 'ng-mocks';
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

defineGlobalsInjections({
    imports: [MockModule(TranslateModule.forRoot())],
});
