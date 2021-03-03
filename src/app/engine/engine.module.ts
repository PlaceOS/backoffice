
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './engine.routes';
import { SharedContentModule } from 'src/app/ui/ui.module';

import { PlaceComponent } from './engine.component';
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
        AdminClusterNodeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule
    ]
})
export class AppPlaceModule { }
