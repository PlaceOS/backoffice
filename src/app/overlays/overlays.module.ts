
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComposerModule } from '@acaprojects/ngx-composer';
import { WidgetsModule } from '@acaprojects/ngx-widgets';
import { SharedComponentsModule } from '../shared/components/shared-components.module';

import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { ViewModuleStateModalComponent } from './view-module-state/view-module-state.component';

import { SystemModalComponent } from './system-modal/system-modal.component';
import { DeviceModalComponent } from './device-modal/device-modal.component';

const OVERLAYS: any[] = [
    ConfirmModalComponent,
    ViewModuleStateModalComponent,
    SystemModalComponent,
    DeviceModalComponent
];

@NgModule({
    declarations: [
        ...OVERLAYS
    ],
    imports: [
        CommonModule,
        FormsModule,
        ComposerModule,
        WidgetsModule,
        SharedComponentsModule
    ],
    exports: [
        ...OVERLAYS
    ],
    entryComponents: [
        ...OVERLAYS
    ]
})
export class AppOverlaysModule {}
