
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './devices.routes';

import { ModulesComponent } from './devices.component';
import { ModuleAboutComponent } from './device-about/device-about.component';
import { ModuleSystemsComponent } from './device-systems/device-systems.component';
import { SharedContentModule } from './node_modules/src/app/shared/shared.module';


@NgModule({
    declarations: [
        ModulesComponent,
        ModuleAboutComponent,
        ModuleSystemsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule
    ]
})
export class AppModulesModule { }
