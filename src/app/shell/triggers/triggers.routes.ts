
import { Routes } from '@angular/router';
import { TriggersComponent } from './triggers.component';

export const ROUTES: Routes = [
    { path: '', component: TriggersComponent, children: [] },
    { path: '**',      redirectTo: '' },
];
