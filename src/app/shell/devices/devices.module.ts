
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComposerModule } from '@acaprojects/ngx-composer';

import { ROUTES } from './devices.routes';

import { DevicesComponent } from './devices.component';
import { DeviceAboutComponent } from './device-about/device-about.component';
import { DeviceSystemsComponent } from './device-systems/device-systems.component';
import { SharedContentModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
        DevicesComponent,
        DeviceAboutComponent,
        DeviceSystemsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ComposerModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule
    ]
})
export class AppDevicesModule { }
