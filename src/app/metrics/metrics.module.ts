import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MetricsComponent } from './metrics.component';

import { ClockComponent } from './clock.component';

export const ROUTES: Routes = [
    { path: '', component: MetricsComponent, children: [] },
    { path: 'dashboard', component: MetricsComponent, children: [] },
    { path: 'dashboard/:period', component: MetricsComponent, children: [] },
    { path: ':period', component: MetricsComponent, children: [] },
    { path: '**', redirectTo: '' },
];

@NgModule({
    declarations: [],
    imports: [MetricsComponent, ClockComponent, RouterModule.forChild(ROUTES)],
})
export class AppMetricsModule {}
