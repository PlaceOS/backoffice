
import { Routes } from '@angular/router';
import { UsersComponent } from './users.component';

export const ROUTES: Routes = [
    { path: '', component: UsersComponent, children: [] },
    { path: ':id', component: UsersComponent, children: [] },
    { path: ':id/:tab', component: UsersComponent, children: [] },
    { path: '**', redirectTo: '' },
];
