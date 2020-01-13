
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComposerModule } from '@acaprojects/ngx-composer';

import { ROUTES } from './repositories.routes';

import { RepositoriesComponent } from './repositories.component';
import { RepositoryAboutComponent } from './about/repository-about.component';
import { RepositorySystemsComponent } from './drivers/repository-drivers.component';
import { SharedContentModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
        RepositoriesComponent,
        RepositoryAboutComponent,
        RepositorySystemsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ComposerModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule
    ]
})
export class AppRepositoriesModule { }
