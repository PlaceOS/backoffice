
import { Routes } from '@angular/router';

import { DriversComponent } from './drivers.component';
import { DriverAboutComponent } from './driver-about/driver-about.component';
import { DriverModulesComponent } from './driver-devices/driver-devices.component';

export const ROUTES: Routes = [
    {
        path: ':id', component: DriversComponent, children: [
            { path: 'about', component: DriverAboutComponent },
            { path: 'devices', component: DriverModulesComponent },
            { path: '**',      redirectTo: 'about' }
        ]
    },
    { path: '**',      redirectTo: '-' }
];
