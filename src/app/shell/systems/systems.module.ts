
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComposerModule } from '@acaprojects/ngx-composer';
import { WidgetsModule } from '@acaprojects/ngx-widgets';

import { ROUTES } from './systems.routes';

import { SystemsComponent } from './systems.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { SystemAboutComponent } from './system-about/system-about.component';
import { SystemDevicesComponent } from './system-devices/system-devices.component';
import { SystemTriggersComponent } from './system-triggers/system-triggers.component';
import { SystemZonesComponent } from './system-zones/system-zones.component';

@NgModule({
    declarations: [
        SystemsComponent,
        SystemAboutComponent,
        SystemDevicesComponent,
        SystemTriggersComponent,
        SystemZonesComponent
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
export class AppSystemsModule { }
