
import { Routes } from '@angular/router';
import { TestsComponent } from './tests.component';

export const ROUTES: Routes = [
    { path: '', component: TestsComponent, children: [] },
    { path: ':id', component: TestsComponent, children: [] },
    { path: ':id/:tab', component: TestsComponent, children: [] },
    { path: '**',      redirectTo: '' },
];
