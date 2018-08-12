
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComposerModule } from '@acaprojects/ngx-composer';
import { WidgetsModule } from '@acaprojects/ngx-widgets';

import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

const OVERLAYS: any[] = [
    ConfirmModalComponent
]

@NgModule({
    declarations: [
        ...OVERLAYS
    ],
    imports: [
        CommonModule,
        FormsModule,
        ComposerModule,
        WidgetsModule
    ],
    exports: [
        ...OVERLAYS
    ],
    entryComponents: [
        ...OVERLAYS
    ]
})
export class AppOverlaysModule {}
