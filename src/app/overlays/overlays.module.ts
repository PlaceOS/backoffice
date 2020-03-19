
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedContentModule } from '../shared/shared.module';

import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { ChangelogModalComponent } from './changelog-modal/changelog-modal.component';
import { ItemCreateUpdateModalComponent } from './item-modal/item-modal.component';
import { SelectItemModalComponent } from './select-item-modal/select-item-modal.component';
import { SystemLogModalComponent } from './system-log-modal/system-log-modal.component';
import { TriggerActionModalComponent } from './trigger-action-modal/trigger-action-modal.component';
import { TriggerConditionModalComponent } from './trigger-condition-modal/trigger-condition-modal.component';
import { ViewModuleStateModalComponent } from './view-module-state/view-module-state.component';
import { FormsModule } from '@angular/forms';
import { AuthSourceModalComponent } from './auth-source-modal/auth-source-modal.component';
import { ViewResponseModalComponent } from './view-response-modal/view-response-modal.component';


const OVERLAYS: Type<any>[] = [
    ConfirmModalComponent,
    ChangelogModalComponent,
    ItemCreateUpdateModalComponent,
    SelectItemModalComponent,
    SystemLogModalComponent,
    TriggerActionModalComponent,
    TriggerConditionModalComponent,
    ViewModuleStateModalComponent,
    AuthSourceModalComponent,
    ViewResponseModalComponent
];

@NgModule({
    declarations: [
        ...OVERLAYS
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedContentModule
    ],
    exports: [
        ...OVERLAYS
    ]
})
export class SharedOverlaysModule {}
