
import { Routes } from '@angular/router';
import { ZonesComponent } from './zones.component';

export const ROUTES: Routes = [
    { path: '', component: ZonesComponent, children: [] },
    { path: ':id', redirectTo: ':id/about' },
    { path: ':id/:tab', component: ZonesComponent, children: [] },
    { path: '**',      redirectTo: '' },
];
