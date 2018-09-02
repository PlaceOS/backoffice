
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


@NgModule({
    declarations: [
        ZonesComponent,
        ZoneDisplayComponent
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
