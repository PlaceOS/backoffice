
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './drivers.routes';

import { DriversComponent } from './drivers.component';
import { DriverAboutComponent } from './driver-about/driver-about.component';
import { DriverDevicesComponent } from './driver-devices/driver-devices.component';
import { SharedContentModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
        DriversComponent,
        DriverAboutComponent,
        DriverDevicesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule
    ]
})
export class AppDriversModule { }
