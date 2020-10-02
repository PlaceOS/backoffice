import { Routes } from '@angular/router';

import { RepositoriesComponent } from './repositories.component';
import { RepositoryAboutComponent } from './about/repository-about.component';
import { RepositoryDriversComponent } from './drivers/repository-drivers.component';
import { ExtensionOutletComponent } from '../ui/extension-outlet.component';

export const ROUTES: Routes = [
    {
        path: ':id',
        component: RepositoriesComponent,
        children: [
            { path: 'about', component: RepositoryAboutComponent },
            { path: 'drivers', component: RepositoryDriversComponent },
            { path: 'extend/:id', component: ExtensionOutletComponent },
            { path: '**', redirectTo: 'about' },
        ],
    },
    { path: '**', redirectTo: '-' },
];
