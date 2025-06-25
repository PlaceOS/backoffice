import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './drivers.routes';

import { DriverAboutComponent } from './driver-about.component';
import { DriverModulesComponent } from './driver-devices.component';

import { SharedContentModule } from '../ui/ui.module';
import { DriverUpdateListModalComponent } from './driver-update-list-modal.component';
import { DriversComponent } from './drivers.component';

@NgModule({
    declarations: [
        DriverAboutComponent,
        DriverModulesComponent,
        DriversComponent,
        DriverUpdateListModalComponent,
    ],
    imports: [FormsModule, RouterModule.forChild(ROUTES), SharedContentModule],
})
export class AppDriversModule {}
