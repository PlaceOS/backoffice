import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './admin.routes';

import { SharedContentModule } from '../ui/ui.module';
import { PlaceComponent } from './admin.component';
import { APIKeyModalComponent } from './api-keys/api-key-modal.component';
import { AdminAPIKeysComponent } from './api-keys/api-keys.component';
import { APIKeyService } from './api-keys/api-keys.service';
import { BookingLimitsModalComponent } from './booking-limits-modal.component';
import { AdminBrokersComponent } from './brokers.component';
import { PlaceBuildListComponent } from './build-list.component';
import { PlaceClusterDetailsComponent } from './cluster-details/cluster-details.component';
import { AdminClusterNodeComponent } from './cluster-details/cluster-node.component';
import { PlaceClusterTaskListComponent } from './cluster-details/cluster-task-list.component';
import { PlaceDatabaseDetailsComponent } from './database-details.component';
import { PlaceDetailsComponent } from './details.component';
import { EdgeModalComponent } from './edge-modal.component';
import { PlaceEdgeComponent } from './edge.component';
import { ExtensionModalComponent } from './extension-modal/extension-modal.component';
import { PlaceExtensionsComponent } from './extensions.component';
import { AdminInterfacesComponent } from './interfaces.component';
import { EmailTemplateFormComponent } from './mailing-lists/email-template-form.component';
import { EmailTemplatesComponent } from './mailing-lists/email-templates.component';
import { ResourceImportsComponent } from './resource-imports.component';
import { AdminSchemasComponent } from './schemas.component';
import { PlaceStaffAPIComponent } from './staff-api.component';
import { StaffTenantModalComponent } from './staff-tenant-modal.component';
import { StorageProviderModalComponent } from './storage/storage-provider-modal.component';
import { StorageComponent } from './storage/storage.component';
import { UploadLibraryComponent } from './upload-library.component';
import { ViewUploadModalComponent } from './view-upload-modal.component';

@NgModule({
    declarations: [
        PlaceComponent,
        PlaceDatabaseDetailsComponent,
        PlaceDetailsComponent,
        PlaceClusterDetailsComponent,
        PlaceClusterTaskListComponent,
        PlaceExtensionsComponent,
        AdminInterfacesComponent,
        AdminBrokersComponent,
        ExtensionModalComponent,
        PlaceStaffAPIComponent,
        StaffTenantModalComponent,
        PlaceEdgeComponent,
        EdgeModalComponent,
        AdminClusterNodeComponent,
        AdminSchemasComponent,
        AdminAPIKeysComponent,
        APIKeyModalComponent,
        BookingLimitsModalComponent,
        StorageComponent,
        StorageProviderModalComponent,
        UploadLibraryComponent,
        ViewUploadModalComponent,
        ResourceImportsComponent,
        EmailTemplatesComponent,
        EmailTemplateFormComponent,
        PlaceBuildListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule,
    ],
    providers: [APIKeyService],
})
export class AppPlaceModule {}
