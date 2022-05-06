import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ROUTES } from './triggers.routes';

import { TriggersComponent } from './triggers.component';
import { TriggerAboutComponent } from './trigger-about.component';
import { TriggerInstancesComponent } from './trigger-instances.component';
import { SharedContentModule } from 'apps/backoffice/src/app/ui/ui.module';
import { NewTriggersComponent } from './new-triggers.component';

@NgModule({
    declarations: [
        TriggersComponent,
        TriggerAboutComponent,
        TriggerInstancesComponent,
        NewTriggersComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule,
        DragDropModule,
    ],
})
export class AppTriggersModule {}
