import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './repositories.routes';

import { RepositoriesComponent } from './repositories.component';
import { RepositoryAboutComponent } from './repository-about.component';
import { RepositoryDriversComponent } from './repository-drivers.component';
import { SharedContentModule } from 'apps/backoffice/src/app/ui/ui.module';

@NgModule({
    declarations: [
        RepositoriesComponent,
        RepositoryAboutComponent,
        RepositoryDriversComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule,
    ],
})
export class AppRepositoriesModule {}
