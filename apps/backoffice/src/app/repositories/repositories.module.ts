import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './repositories.routes';

import { RepositoryAboutComponent } from './repository-about.component';
import { RepositoryDriversComponent } from './repository-drivers.component';
import { SharedContentModule } from 'apps/backoffice/src/app/ui/ui.module';
import { NewRepositoriesComponent } from './new-repositories.component';

@NgModule({
    declarations: [
        RepositoryAboutComponent,
        RepositoryDriversComponent,
        NewRepositoriesComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule,
    ],
})
export class AppRepositoriesModule {}
