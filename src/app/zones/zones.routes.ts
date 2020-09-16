import { Routes } from '@angular/router';

import { ZonesComponent } from './zones.component';
import { ZoneAboutComponent } from './zone-about/zone-about.component';
import { ZoneSystemsComponent } from './zone-systems/zone-systems.component';
import { ZoneTriggersComponent } from './zone-triggers/zone-triggers.component';
import { ZoneChildrenComponent } from './zone-children/zone-children.component';
import { ZoneMetadataComponent } from './zone-metadata/zone-metadata.component';

export const ROUTES: Routes = [
    {
        path: ':id',
        component: ZonesComponent,
        children: [
            { path: 'about', component: ZoneAboutComponent },
            { path: 'systems', component: ZoneSystemsComponent },
            { path: 'triggers', component: ZoneTriggersComponent },
            { path: 'children', component: ZoneChildrenComponent },
            { path: 'metadata', component: ZoneMetadataComponent },
            { path: '**', redirectTo: 'about' },
        ],
    },
    { path: '**', redirectTo: '-' },
];
