import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './triggers.routes';

import { TriggerAboutComponent } from './trigger-about.component';
import { TriggerInstancesComponent } from './trigger-instances.component';

import { TriggersComponent } from './triggers.component';

@NgModule({
    declarations: [],
    imports: [
        TriggerAboutComponent,
        TriggerInstancesComponent,
        TriggersComponent,
        RouterModule.forChild(ROUTES),
    ],
})
export class AppTriggersModule {}
