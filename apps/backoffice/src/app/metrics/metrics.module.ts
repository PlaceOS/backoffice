import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ROUTES } from './metrics.routes';

import { MetricsComponent } from './metrics.component';
import { SharedContentModule } from 'apps/backoffice/src/app/ui/ui.module';
import { ClockComponent } from './clock.component';

@NgModule({
    declarations: [MetricsComponent, ClockComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule,
        TranslateModule.forChild(),
    ],
})
export class AppMetricsModule {}
