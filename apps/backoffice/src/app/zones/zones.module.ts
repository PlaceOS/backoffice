import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './zones.routes';

import { SharedContentModule } from '../ui/ui.module';
import { ZoneAboutComponent } from './zone-about.component';
import { ZoneChildrenComponent } from './zone-children.component';
import { ZoneMetadataComponent } from './zone-metadata.component';
import { ZoneSystemsComponent } from './zone-systems.component';
import { ZoneTriggersComponent } from './zone-triggers.component';
import { ZonesComponent } from './zones.component';

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
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule,
    ],
})
export class AppZonesModule {}
