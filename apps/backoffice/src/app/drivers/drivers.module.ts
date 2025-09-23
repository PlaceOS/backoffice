import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './drivers.routes';

import { DriverAboutComponent } from './driver-about.component';
import { DriverModulesComponent } from './driver-devices.component';
import { DriverUpdateListModalComponent } from './driver-update-list-modal.component';
import { DriversComponent } from './drivers.component';

@NgModule({
    declarations: [],
    imports: [
        DriverAboutComponent,
        DriverModulesComponent,
        DriversComponent,
        DriverUpdateListModalComponent,
        RouterModule.forChild(ROUTES),
    ],
})
export class AppDriversModule {}
