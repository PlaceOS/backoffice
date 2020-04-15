
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ROUTES } from './triggers.routes';

import { TriggersComponent } from './triggers.component';
import { TriggerAboutComponent } from './trigger-about/trigger-about.component';
import { TriggerSystemsComponent } from './trigger-systems/trigger-systems.component';
import { SharedContentModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
        TriggersComponent,
        TriggerAboutComponent,
        TriggerSystemsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule,
        DragDropModule
    ]
})
export class AppTriggersModule { }
