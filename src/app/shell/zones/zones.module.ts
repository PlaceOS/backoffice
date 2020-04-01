
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './zones.routes';
import { SharedContentModule } from 'src/app/shared/shared.module';

import { ZonesComponent } from './zones.component';
import { ZoneAboutComponent } from './zone-about/zone-about.component';
import { ZoneSystemsComponent } from './zone-systems/zone-systems.component';
import { ZoneTriggersComponent } from './zone-triggers/zone-triggers.component';
import { ZoneChildrenComponent } from './zone-children/zone-children.component';
import { ZoneMetadataComponent } from './zone-metadata/zone-metadata.component';


@NgModule({
    declarations: [
        ZonesComponent,
        ZoneAboutComponent,
        ZoneSystemsComponent,
        ZoneTriggersComponent,
        ZoneChildrenComponent,
        ZoneMetadataComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule
    ]
})
export class AppZonesModule { }
