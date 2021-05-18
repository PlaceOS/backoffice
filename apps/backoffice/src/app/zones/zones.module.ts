import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './zones.routes';
import { SharedContentModule } from 'apps/backoffice/src/app/ui/ui.module';

import { ZonesComponent } from './zones.component';
import { ZoneAboutComponent } from './zone-about.component';
import { ZoneSystemsComponent } from './zone-systems.component';
import { ZoneTriggersComponent } from './zone-triggers.component';
import { ZoneChildrenComponent } from './zone-children.component';
import { ZoneMetadataComponent } from './zone-metadata.component';

@NgModule({
    declarations: [
        ZonesComponent,
        ZoneAboutComponent,
        ZoneSystemsComponent,
        ZoneTriggersComponent,
        ZoneChildrenComponent,
        ZoneMetadataComponent,
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
