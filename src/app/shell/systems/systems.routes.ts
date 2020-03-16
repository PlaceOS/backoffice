import { Routes } from '@angular/router';
import { SystemsComponent } from './systems.component';
import { SystemAboutComponent } from './system-about/system-about.component';
import { SystemDevicesComponent } from './system-devices/system-devices.component';
import { SystemTriggersComponent } from './system-triggers/system-triggers.component';
import { SystemZonesComponent } from './system-zones/system-zones.component';

export const ROUTES: Routes = [
    {
        path: ':id',
        component: SystemsComponent,
        children: [
            { path: 'about', component: SystemAboutComponent },
            { path: 'devices', component: SystemDevicesComponent },
            { path: 'triggers', component: SystemTriggersComponent },
            { path: 'zones', component: SystemZonesComponent },
            { path: '**', redirectTo: 'about' }
        ]
    },
    { path: '**', redirectTo: '-' }
];
