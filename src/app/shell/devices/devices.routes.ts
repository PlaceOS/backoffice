
import { Routes } from '@angular/router';

import { DevicesComponent } from './devices.component';
import { DeviceAboutComponent } from './device-about/device-about.component';
import { DeviceSystemsComponent } from './device-systems/device-systems.component';

export const ROUTES: Routes = [
    {
        path: ':id', component: DevicesComponent, children: [
            { path: 'about', component: DeviceAboutComponent },
            { path: 'systems', component: DeviceSystemsComponent },
            { path: '**',      redirectTo: 'about' }
        ]
    },
    { path: '**',      redirectTo: '-' }
];
