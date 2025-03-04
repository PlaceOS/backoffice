import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedContentModule } from '../ui/ui.module';

import { AuthSourceModalComponent } from './auth-source-modal.component';
import { BulkItemModalComponent } from './bulk-item-modal/bulk-item-modal.component';
import { CsvUploadComponent } from './bulk-item-modal/csv-upload.component';
import { ListComponent } from './bulk-item-modal/list.component';
import { MatchFieldsComponent } from './bulk-item-modal/match-fields.component';
import { StatusListComponent } from './bulk-item-modal/status-list.component';
import { ChangelogModalComponent } from './changelog-modal.component';
import { ConfirmModalComponent } from './confirm-modal.component';
import { DuplicateModalComponent } from './duplicate-modal/duplicate-modal.component';
import { ItemCreateUpdateModalComponent } from './item-modal.component';
import { MetadataDetailsModalComponent } from './metadata-details-modal/metadata-details-modal.component';
import { MetadataHistoryModalComponent } from './metadata-history-modal.component';
import { SelectItemModalComponent } from './select-item-modal.component';
import { SystemLogModalComponent } from './system-log-modal/system-log-modal.component';
import { ViewModuleStateModalComponent } from './view-module-state.component';
import { ViewResponseModalComponent } from './view-response-modal.component';

const OVERLAYS: Type<any>[] = [
    ConfirmModalComponent,
    ChangelogModalComponent,
    ItemCreateUpdateModalComponent,
    SelectItemModalComponent,
    SystemLogModalComponent,
    ViewModuleStateModalComponent,
    AuthSourceModalComponent,
    ViewResponseModalComponent,
    MetadataDetailsModalComponent,
    BulkItemModalComponent,
    MetadataHistoryModalComponent,
];

@NgModule({
    declarations: [
        ...OVERLAYS,
        CsvUploadComponent,
        MatchFieldsComponent,
        ListComponent,
        StatusListComponent,
        DuplicateModalComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedContentModule,
    ],
    exports: [...OVERLAYS],
})
export class SharedOverlaysModule {}
