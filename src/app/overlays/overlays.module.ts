
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthSourceModalComponent } from './auth-source-modal/auth-source-modal.component';
import { ViewResponseModalComponent } from './view-response-modal/view-response-modal.component';
import { MetadataDetailsModalComponent } from './metadata-details-modal/metadata-details-modal.component';
import { BulkItemModalComponent } from './bulk-item-modal/bulk-item-modal.component';
import { CsvUploadComponent } from './bulk-item-modal/csv-upload/csv-upload.component';
import { MatchFieldsComponent } from './bulk-item-modal/match-fields/match-fields.component';
import { ListComponent } from './bulk-item-modal/list/list.component';
import { StatusListComponent } from './bulk-item-modal/status-list/status-list.component';
import { DuplicateModalComponent } from './duplicate-modal/duplicate-modal.component';


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
    ViewResponseModalComponent,
    MetadataDetailsModalComponent,
    BulkItemModalComponent,
];

@NgModule({
    declarations: [
        ...OVERLAYS,
        CsvUploadComponent,
        MatchFieldsComponent,
        ListComponent,
        StatusListComponent,
        DuplicateModalComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedContentModule
    ],
    exports: [
        ...OVERLAYS
    ]
})
export class SharedOverlaysModule {}
