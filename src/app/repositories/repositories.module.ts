
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './repositories.routes';

import { RepositoriesComponent } from './repositories.component';
import { RepositoryAboutComponent } from './about/repository-about.component';
import { RepositoryDriversComponent } from './drivers/repository-drivers.component';
import { SharedContentModule } from 'src/app/ui/ui.module';


@NgModule({
    declarations: [
        RepositoriesComponent,
        RepositoryAboutComponent,
        RepositoryDriversComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule
    ]
})
export class AppRepositoriesModule { }
