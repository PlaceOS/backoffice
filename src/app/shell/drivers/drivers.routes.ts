
import { Routes } from '@angular/router';

import { DriversComponent } from './drivers.component';
import { DriverAboutComponent } from './driver-about/driver-about.component';
import { DriverDevicesComponent } from './driver-devices/driver-devices.component';

export const ROUTES: Routes = [
    { path: '', component: DriversComponent, children: [] },
    {
        path: ':id', component: DriversComponent, children: [
            { path: 'about', component: DriverAboutComponent },
            { path: 'about', component: DriverDevicesComponent },
            { path: '**',      redirectTo: 'about' }
        ]
    },
    { path: '**',      redirectTo: '' }
];
