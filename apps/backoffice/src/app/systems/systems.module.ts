import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './systems.routes';

import { SystemAboutComponent } from './system-about.component';
import { SystemMetadataComponent } from './system-metadata.component';
import { SystemModulesComponent } from './system-modules.component';
import { SystemTriggersComponent } from './system-triggers.component';
import { SystemZonesComponent } from './system-zones.component';

import { SharedContentModule } from '../ui/ui.module';
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
