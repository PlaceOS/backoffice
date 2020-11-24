
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ROUTES } from './systems.routes';

import { SystemsComponent } from './systems.component';
import { SystemAboutComponent } from './system-about.component';
import { SystemModulesComponent } from './system-modules.component';
import { SystemTriggersComponent } from './system-triggers.component';
import { SystemZonesComponent } from './system-zones.component';
import { SystemMetadataComponent } from './system-metadata/system-metadata.component';
import { SharedContentModule } from 'src/app/ui/ui.module';

@NgModule({
    declarations: [
        SystemsComponent,
        SystemAboutComponent,
        SystemModulesComponent,
        SystemTriggersComponent,
        SystemZonesComponent,
        SystemMetadataComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule,
        DragDropModule
    ]
})
export class AppSystemsModule { }
