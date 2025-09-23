import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './repositories.routes';

import { RepositoryAboutComponent } from './repository-about.component';
import { RepositoryDriversComponent } from './repository-drivers.component';

import { RepositoriesComponent } from './repositories.component';

@NgModule({
    declarations: [],
    imports: [
        RepositoryAboutComponent,
        RepositoryDriversComponent,
        RepositoriesComponent,
        RouterModule.forChild(ROUTES),
    ],
})
export class AppRepositoriesModule {}
