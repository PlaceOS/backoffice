import { Routes } from '@angular/router';

import { RepositoriesComponent } from './repositories.component';
import { RepositoryAboutComponent } from './about/repository-about.component';
import { RepositoryDriversComponent } from './drivers/repository-drivers.component';

export const ROUTES: Routes = [
    { path: '', component: RepositoriesComponent, children: [] },
    {
        path: ':id',
        component: RepositoriesComponent,
        children: [
            { path: 'about', component: RepositoryAboutComponent },
            { path: 'drivers', component: RepositoryDriversComponent },
            { path: '**', redirectTo: 'about' }
        ]
    },
    { path: '**', redirectTo: '' }
];
