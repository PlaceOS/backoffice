import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Route, RouterModule } from '@angular/router';
import { SharedContentModule } from '../ui/ui.module';

import { DashboardClockComponent } from './clock.component';
import { MqttDashboardComponent } from './dashboard.component';

const ROUTES: Route[] = [
    { component: MqttDashboardComponent, path: '' },
    { path: '**', redirectTo: '' },
];

@NgModule({
    declarations: [MqttDashboardComponent, DashboardClockComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        SharedContentModule
    ],
})
export class MqttDashboardModule {}
