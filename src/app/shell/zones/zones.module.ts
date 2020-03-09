
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './zones.routes';

import { ZonesComponent } from './zones.component';
import { ZoneAboutComponent } from './zone-about/zone-about.component';
import { ZoneSystemsComponent } from './zone-systems/zone-systems.component';
import { ZoneTriggersComponent } from './zone-triggers/zone-triggers.component';
import { SharedContentModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
        ZonesComponent,
        ZoneAboutComponent,
        ZoneSystemsComponent,
        ZoneTriggersComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule
    ]
})
export class AppZonesModule { }
