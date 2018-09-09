
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComposerModule } from '@acaprojects/ngx-composer';
import { WidgetsModule } from '@acaprojects/ngx-widgets';

import { ROUTES } from './drivers.routes';

import { DriversComponent } from './drivers.component';
import { DriverAboutComponent } from './driver-about/driver-about.component';
import { DriverDevicesComponent } from './driver-devices/driver-devices.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';


@NgModule({
    declarations: [
        DriversComponent,
        DriverAboutComponent,
        DriverDevicesComponent
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
export class AppDriversModule { }
