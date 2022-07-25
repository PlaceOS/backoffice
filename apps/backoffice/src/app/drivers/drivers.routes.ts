import { Routes } from '@angular/router';

import { DriverAboutComponent } from './driver-about.component';
import { DriverModulesComponent } from './driver-devices.component';
import { ExtensionOutletComponent } from '../ui/extension-outlet.component';
import { SettingsHistoryViewComponent } from '../ui/settings-history-view.component';
import { DriversComponent } from './drivers.component';

export const ROUTES: Routes = [
    {
        path: ':id',
        component: DriversComponent,
        children: [
            { path: 'about', component: DriverAboutComponent },
            { path: 'modules', component: DriverModulesComponent },
            { path: 'extend/:id', component: ExtensionOutletComponent },
            { path: 'history', component: SettingsHistoryViewComponent },
            { path: '**', redirectTo: 'about' },
        ],
    },
    { path: '**', redirectTo: '-' },
];
