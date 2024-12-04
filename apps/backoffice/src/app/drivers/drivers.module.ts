import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ROUTES } from './drivers.routes';

import { DriverAboutComponent } from './driver-about.component';
import { DriverModulesComponent } from './driver-devices.component';
import { SharedContentModule } from 'apps/backoffice/src/app/ui/ui.module';
import { DriversComponent } from './drivers.component';
import { DriverUpdateListModalComponent } from './driver-update-list-modal.component';

@NgModule({
    declarations: [
        DriverAboutComponent,
        DriverModulesComponent,
        DriversComponent,
        DriverUpdateListModalComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule,
        TranslateModule.forChild(),
    ],
})
export class AppDriversModule {}
