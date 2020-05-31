
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './engine.routes';
import { SharedContentModule } from 'src/app/shared/shared.module';

import { EngineComponent } from './engine.component';
import { EngineDatabaseDetailsComponent } from './database-details/database-details.component';
import { EngineDetailsComponent } from './details/details.component';
import { EngineClusterDetailsComponent } from './cluster-details/cluster-details.component';
import { EngineClusterItemComponent } from './cluster-details/item/item.component';
import { EngineClusterTaskListComponent } from './cluster-details/task-list/task-list.component';
import { AdminInterfacesComponent } from './interfaces/interfaces.component';
import { AdminBrokersComponent } from './brokers/brokers.component';


@NgModule({
    declarations: [
        EngineComponent,
        EngineDatabaseDetailsComponent,
        EngineDetailsComponent,
        EngineClusterDetailsComponent,
        EngineClusterItemComponent,
        EngineClusterTaskListComponent,
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
export class AppEngineModule { }
