import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './metrics.routes';

import { MetricsComponent } from './metrics.component';

import { SharedContentModule } from '../ui/ui.module';
import { ClockComponent } from './clock.component';

@NgModule({
    declarations: [MetricsComponent, ClockComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule,
    ],
})
export class AppMetricsModule {}
