import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './drivers.routes';

import { DriversComponent } from './drivers.component';
import { DriverAboutComponent } from './driver-about.component';
import { DriverModulesComponent } from './driver-devices.component';
import { SharedContentModule } from 'apps/backoffice/src/app/ui/ui.module';

@NgModule({
    declarations: [
        DriversComponent,
        DriverAboutComponent,
        DriverModulesComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule,
    ],
})
export class AppDriversModule {}
