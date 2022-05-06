import { Routes } from '@angular/router';

import { RepositoriesComponent } from './repositories.component';
import { RepositoryAboutComponent } from './repository-about.component';
import { RepositoryDriversComponent } from './repository-drivers.component';
import { ExtensionOutletComponent } from '../ui/extension-outlet.component';
import { NewRepositoriesComponent } from './new-repositories.component';

export const ROUTES: Routes = [
    {
        path: ':id',
        component: NewRepositoriesComponent,
        children: [
            { path: 'about', component: RepositoryAboutComponent },
            { path: 'drivers', component: RepositoryDriversComponent },
            { path: 'extend/:id', component: ExtensionOutletComponent },
            { path: '**', redirectTo: 'about' },
        ],
    },
    { path: '**', redirectTo: '-' },
];
