
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComposerModule } from '@acaprojects/ngx-composer';
import { WidgetsModule } from '@acaprojects/ngx-widgets';

import { ROUTES } from './drivers.routes';

import { DriversComponent } from './drivers.component';


@NgModule({
    declarations: [
        DriversComponent
    ],
    imports: [
        FormsModule,
        ComposerModule,
        WidgetsModule,
        RouterModule.forChild(ROUTES)
    ]
})
export class AppDriversModule { }
