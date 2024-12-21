import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './zones.routes';

import { ZoneAboutComponent } from './zone-about.component';
import { ZoneSystemsComponent } from './zone-systems.component';
import { ZoneTriggersComponent } from './zone-triggers.component';
import { ZoneChildrenComponent } from './zone-children.component';
import { ZoneMetadataComponent } from './zone-metadata.component';
import { ZonesComponent } from './zones.component';
import { SharedContentModule } from '../ui/ui.module';

@NgModule({
    declarations: [
        ZoneAboutComponent,
        ZoneSystemsComponent,
        ZoneTriggersComponent,
        ZoneChildrenComponent,
        ZoneMetadataComponent,
        ZonesComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule,
    ],
})
export class AppZonesModule {}
