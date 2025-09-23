import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './modules.routes';

import { ModuleAboutComponent } from './module-about.component';
import { ModuleSystemsComponent } from './module-systems.component';

import { ModulesComponent } from './modules.component';

@NgModule({
    declarations: [],
    imports: [
        ModuleAboutComponent,
        ModuleSystemsComponent,
        ModulesComponent,
        RouterModule.forChild(ROUTES),
    ],
})
export class AppModulesModule {}
