import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './metrics.routes';

import { MetricsComponent } from './metrics.component';

import { ClockComponent } from './clock.component';
import { SharedContentModule } from '../ui/ui.module';

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
