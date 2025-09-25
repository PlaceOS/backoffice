import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { MqttDashboardComponent } from './dashboard.component';

const ROUTES: Route[] = [
    { component: MqttDashboardComponent, path: '' },
    { path: '**', redirectTo: '' },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(ROUTES)],
})
export class MqttDashboardModule {}
