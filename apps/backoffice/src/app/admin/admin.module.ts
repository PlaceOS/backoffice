import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './admin.routes';
import { SharedContentModule } from 'apps/backoffice/src/app/ui/ui.module';

import { PlaceComponent } from './admin.component';
import { PlaceDatabaseDetailsComponent } from './database-details.component';
import { PlaceDetailsComponent } from './details.component';
import { PlaceClusterDetailsComponent } from './cluster-details/cluster-details.component';
import { PlaceClusterItemComponent } from './cluster-details/cluster-item.component';
import { PlaceClusterTaskListComponent } from './cluster-details/cluster-task-list.component';
import { AdminInterfacesComponent } from './interfaces.component';
import { AdminBrokersComponent } from './brokers.component';
import { PlaceExtensionsComponent } from './extensions.component';
import { ExtensionModalComponent } from './extension-modal/extension-modal.component';
import { PlaceStaffAPIComponent } from './staff-api.component';
import { StaffTenantModalComponent } from './staff-tenant-modal.component';
import { PlaceEdgeComponent } from './edge.component';
import { EdgeModalComponent } from './edge-modal.component';
import { AdminClusterNodeComponent } from './cluster-details/cluster-node.component';
import { AdminSchemasComponent } from './schemas.component';
import { AdminAPIKeysComponent } from './api-keys/api-keys.component';
import { APIKeyModalComponent } from './api-keys/api-key-modal.component';
import { APIKeyService } from './api-keys/api-keys.service';
import { BookingLimitsModalComponent } from './booking-limits-modal.component';
import { StorageComponent } from './storage/storage.component';
import { StorageProviderModalComponent } from './storage/storage-provider-modal.component';

@NgModule({
    declarations: [
        PlaceComponent,
        PlaceDatabaseDetailsComponent,
        PlaceDetailsComponent,
        PlaceClusterDetailsComponent,
        PlaceClusterItemComponent,
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
