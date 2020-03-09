
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './metrics.routes';

import { MetricsComponent } from './metrics.component';
import { SharedContentModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        MetricsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule
    ]
})
export class AppMetricsModule { }
