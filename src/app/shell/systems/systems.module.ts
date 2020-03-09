
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ROUTES } from './systems.routes';

import { SystemsComponent } from './systems.component';
import { SystemAboutComponent } from './system-about/system-about.component';
import { SystemDevicesComponent } from './system-devices/system-devices.component';
import { SystemTriggersComponent } from './system-triggers/system-triggers.component';
import { SystemZonesComponent } from './system-zones/system-zones.component';
import { SharedContentModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        SystemsComponent,
        SystemAboutComponent,
        SystemDevicesComponent,
        SystemTriggersComponent,
        SystemZonesComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule,
        DragDropModule
    ]
})
export class AppSystemsModule { }
