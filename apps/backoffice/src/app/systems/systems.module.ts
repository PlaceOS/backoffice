import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ROUTES } from './systems.routes';

import { SystemAboutComponent } from './system-about.component';
import { SystemModulesComponent } from './system-modules.component';
import { SystemTriggersComponent } from './system-triggers.component';
import { SystemZonesComponent } from './system-zones.component';
import { SystemMetadataComponent } from './system-metadata.component';
import { SharedContentModule } from 'apps/backoffice/src/app/ui/ui.module';
import { SystemsComponent } from './systems.component';

@NgModule({
    declarations: [
        SystemAboutComponent,
        SystemModulesComponent,
        SystemTriggersComponent,
        SystemZonesComponent,
        SystemMetadataComponent,
        SystemsComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule,
        DragDropModule,
    ],
})
export class AppSystemsModule {}
