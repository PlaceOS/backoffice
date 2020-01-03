
import { Routes } from '@angular/router';
import { SystemsComponent } from './systems.component';

export const ROUTES: Routes = [
    { path: '', component: SystemsComponent, children: [] },
    { path: ':id', component: SystemsComponent, children: [] },
    { path: '**',      redirectTo: '' },
];
