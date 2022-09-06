import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './modules.routes';

import { ModuleAboutComponent } from './module-about.component';
import { ModuleSystemsComponent } from './module-systems.component';
import { SharedContentModule } from 'apps/backoffice/src/app/ui/ui.module';
import { ModulesComponent } from './modules.component';

@NgModule({
    declarations: [
        ModuleAboutComponent,
        ModuleSystemsComponent,
        ModulesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule,
    ],
})
export class AppModulesModule {}
