
import { Routes } from '@angular/router';
import { DomainsComponent } from './domains.component';

export const ROUTES: Routes = [
    { path: '', component: DomainsComponent, children: [] },
    { path: '**',      redirectTo: '' },
];
