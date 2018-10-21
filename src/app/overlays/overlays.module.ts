
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
import { ZoneModalComponent } from './zone-modal/zone-modal.component';
import { TriggerModalComponent } from './trigger-modal/trigger-modal.component';
import { UserModalComponent } from './user-modal/user-modal.component';
import { DomainModalComponent } from './domain-modal/domain-modal.component';

const OVERLAYS: any[] = [
    ConfirmModalComponent,
    ViewModuleStateModalComponent,
    SystemModalComponent,
    DeviceModalComponent,
    ZoneModalComponent,
    TriggerModalComponent,
    UserModalComponent,
    DomainModalComponent
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
