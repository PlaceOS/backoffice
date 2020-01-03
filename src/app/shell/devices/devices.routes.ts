
import { Routes } from '@angular/router';
import { DevicesComponent } from './devices.component';

export const ROUTES: Routes = [
    { path: '', component: DevicesComponent, children: [] },
    { path: ':id', component: DevicesComponent, children: [] },
    { path: '**',      redirectTo: '' }
];
