import { Routes } from '@angular/router';

import { ZonesComponent } from './zones.component';
import { ZoneAboutComponent } from './zone-about/zone-about.component';
import { ZoneSystemsComponent } from './zone-systems/zone-systems.component';
import { ZoneTriggersComponent } from './zone-triggers/zone-triggers.component';

export const ROUTES: Routes = [
    { path: '', component: ZonesComponent, children: [] },
    {
        path: ':id',
        component: ZonesComponent,
        children: [
            { path: 'about', component: ZoneAboutComponent },
            { path: 'systems', component: ZoneSystemsComponent },
            { path: 'triggers', component: ZoneTriggersComponent },
            { path: '**', redirectTo: 'about' }
        ]
    },
    { path: '**', redirectTo: '' }
];
