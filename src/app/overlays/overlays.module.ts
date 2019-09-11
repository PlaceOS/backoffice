
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComposerModule } from '@acaprojects/ngx-composer';
import { WidgetsModule, DynamicFormComponentModule } from '@acaprojects/ngx-widgets';
import { SharedComponentsModule } from '../shared/components/shared-components.module';

import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { ViewModuleStateModalComponent } from './view-module-state/view-module-state.component';

import { TriggerConditionModalComponent } from './trigger-condition-modal/trigger-condition-modal.component';
import { TriggerActionModalComponent } from './trigger-action-modal/trigger-action-modal.component';
import { ItemCreateUpdateModalComponent } from './item-modal/item-modal.component';
import { ChangelogModalComponent } from './changelog-modal/changelog-modal.component';
import { SelectItemModalComponent } from './select-item-modal/select-item-modal.component';
import { SystemLogModalComponent } from './system-log-modal/system-log-modal.component';

const OVERLAYS: any[] = [
    ConfirmModalComponent,
    ViewModuleStateModalComponent,
    TriggerConditionModalComponent,
    TriggerActionModalComponent,
    ItemCreateUpdateModalComponent,
    ChangelogModalComponent,
    SelectItemModalComponent,
    SystemLogModalComponent
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
        DynamicFormComponentModule,
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
