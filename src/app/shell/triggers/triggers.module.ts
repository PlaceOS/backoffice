
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComposerModule } from '@acaprojects/ngx-composer';
import { WidgetsModule } from '@acaprojects/ngx-widgets';

import { ROUTES } from './triggers.routes';

import { TriggersComponent } from './triggers.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { TriggerAboutComponent } from './trigger-about/trigger-about.component';
import { TriggerSystemsComponent } from './trigger-systems/trigger-systems.component';


@NgModule({
    declarations: [
        TriggersComponent,
        TriggerAboutComponent,
        TriggerSystemsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ComposerModule,
        WidgetsModule,
        RouterModule.forChild(ROUTES),
        SharedComponentsModule
    ]
})
export class AppTriggersModule { }
