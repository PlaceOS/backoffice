
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComposerModule } from '@acaprojects/ngx-composer';
import { WidgetsModule } from '@acaprojects/ngx-widgets';

import { ROUTES } from './zones.routes';

import { ZonesComponent } from './zones.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { ZoneDisplayComponent } from './zone-display/zone-display.component';
import { ZoneAboutComponent } from './zone-display/zone-about/zone-about.component';
import { ZoneSystemsComponent } from './zone-display/zone-systems/zone-systems.component';
import { ZoneTriggersComponent } from './zone-display/zone-triggers/zone-triggers.component';


@NgModule({
    declarations: [
        ZonesComponent,
        ZoneDisplayComponent,
        ZoneAboutComponent,
        ZoneSystemsComponent,
        ZoneTriggersComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ComposerModule,
        WidgetsModule,
        RouterModule.forChild(ROUTES),
        SharedComponentsModule
    ]
})
export class AppZonesModule { }
