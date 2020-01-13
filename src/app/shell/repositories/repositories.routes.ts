
import { Routes } from '@angular/router';

import { RepositoriesComponent } from './repositories.component';

export const ROUTES: Routes = [
    { path: '', component: RepositoriesComponent, children: [] },
    { path: ':id', component: RepositoriesComponent, children: [] },
    { path: '**',      redirectTo: '' },
];
