import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './modules.routes';

import { ModuleAboutComponent } from './module-about.component';
import { ModuleSystemsComponent } from './module-systems.component';

import { SharedContentModule } from '../ui/ui.module';
import { ModulesComponent } from './modules.component';

@NgModule({
    declarations: [
        ModuleAboutComponent,
        ModuleSystemsComponent,
        ModulesComponent,
    ],
    imports: [FormsModule, RouterModule.forChild(ROUTES), SharedContentModule],
})
export class AppModulesModule {}
