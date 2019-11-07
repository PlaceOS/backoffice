
import { Routes } from '@angular/router';
import { DriversComponent } from './drivers.component';

export const ROUTES: Routes = [
    { path: '', component: DriversComponent, children: [] },
    { path: ':id', redirectTo: ':id/about' },
    { path: ':id/:tab', component: DriversComponent, children: [] },
    { path: '**',      redirectTo: '' }
];
