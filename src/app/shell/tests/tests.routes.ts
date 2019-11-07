
import { Routes } from '@angular/router';
import { TestsComponent } from './tests.component';

export const ROUTES: Routes = [
    { path: '', component: TestsComponent, children: [] },
    { path: ':id', redirectTo: ':id/about' },
    { path: ':id/:tab', component: TestsComponent, children: [] },
    { path: '**',      redirectTo: '' },
];
