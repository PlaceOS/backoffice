
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComposerModule } from '@acaprojects/ngx-composer';
import { WidgetsModule } from '@acaprojects/ngx-widgets';

import { ROUTES } from './devices.routes';

import { DevicesComponent } from './devices.component';


@NgModule({
    declarations: [
        DevicesComponent
    ],
    imports: [
        FormsModule,
        ComposerModule,
        WidgetsModule,
        RouterModule.forChild(ROUTES)
    ]
})
export class AppDevicesModule { }
