
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComposerModule } from '@acaprojects/ngx-composer';
import { WidgetsModule } from '@acaprojects/ngx-widgets';

import { ROUTES } from './triggers.routes';

import { TriggersComponent } from './triggers.component';


@NgModule({
    declarations: [
        TriggersComponent
    ],
    imports: [
        FormsModule,
        ComposerModule,
        WidgetsModule,
        RouterModule.forChild(ROUTES)
    ]
})
export class AppTriggersModule { }
