import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './systems.routes';

import { SystemAboutComponent } from './system-about.component';
import { SystemMetadataComponent } from './system-metadata.component';
import { SystemModulesComponent } from './system-modules.component';
import { SystemTriggersComponent } from './system-triggers.component';
import { SystemZonesComponent } from './system-zones.component';
import { SystemsComponent } from './systems.component';

@NgModule({
    declarations: [],
    imports: [
        SystemAboutComponent,
        SystemModulesComponent,
        SystemTriggersComponent,
        SystemZonesComponent,
        SystemMetadataComponent,
        SystemsComponent,
        RouterModule.forChild(ROUTES),
    ],
})
export class AppSystemsModule {}
