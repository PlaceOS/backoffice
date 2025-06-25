import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './repositories.routes';

import { RepositoryAboutComponent } from './repository-about.component';
import { RepositoryDriversComponent } from './repository-drivers.component';

import { SharedContentModule } from '../ui/ui.module';
import { RepositoriesComponent } from './repositories.component';

@NgModule({
    declarations: [
        RepositoryAboutComponent,
        RepositoryDriversComponent,
        RepositoriesComponent,
    ],
    imports: [FormsModule, RouterModule.forChild(ROUTES), SharedContentModule],
})
export class AppRepositoriesModule {}
