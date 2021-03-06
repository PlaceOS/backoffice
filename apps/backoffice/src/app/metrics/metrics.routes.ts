
import { Routes } from '@angular/router';
import { MetricsComponent } from './metrics.component';

export const ROUTES: Routes = [
    { path: '', component: MetricsComponent, children: [] },
    { path: 'dashboard', component: MetricsComponent, children: [] },
    { path: 'dashboard/:period', component: MetricsComponent, children: [] },
    { path: ':period', component: MetricsComponent, children: [] },
    { path: '**',      redirectTo: '' },
];
