
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './engine.routes';
import { SharedContentModule } from 'src/app/shared/shared.module';

import { PlaceComponent } from './engine.component';
import { PlaceDatabaseDetailsComponent } from './database-details/database-details.component';
import { PlaceDetailsComponent } from './details/details.component';
import { PlaceClusterDetailsComponent } from './cluster-details/cluster-details.component';
import { PlaceClusterItemComponent } from './cluster-details/item/item.component';
import { PlaceClusterTaskListComponent } from './cluster-details/task-list/task-list.component';
import { AdminInterfacesComponent } from './interfaces/interfaces.component';
import { AdminBrokersComponent } from './brokers/brokers.component';


@NgModule({
    declarations: [
        PlaceComponent,
        PlaceDatabaseDetailsComponent,
        PlaceDetailsComponent,
        PlaceClusterDetailsComponent,
        PlaceClusterItemComponent,
        PlaceClusterTaskListComponent,
        AdminInterfacesComponent,
        AdminBrokersComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule
    ]
})
export class AppPlaceModule { }
