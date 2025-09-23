import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './zones.routes';

import { ZoneAboutComponent } from './zone-about.component';
import { ZoneChildrenComponent } from './zone-children.component';
import { ZoneMetadataComponent } from './zone-metadata.component';
import { ZoneSystemsComponent } from './zone-systems.component';
import { ZoneTriggersComponent } from './zone-triggers.component';
import { ZonesComponent } from './zones.component';

@NgModule({
    declarations: [],
    imports: [
        ZoneAboutComponent,
        ZoneSystemsComponent,
        ZoneTriggersComponent,
        ZoneChildrenComponent,
        ZoneMetadataComponent,
        ZonesComponent,
        RouterModule.forChild(ROUTES),
    ],
})
export class AppZonesModule {}
