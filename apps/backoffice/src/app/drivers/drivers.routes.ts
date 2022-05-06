import { Routes } from '@angular/router';

import { DriversComponent } from './drivers.component';
import { DriverAboutComponent } from './driver-about.component';
import { DriverModulesComponent } from './driver-devices.component';
import { ExtensionOutletComponent } from '../ui/extension-outlet.component';
import { SettingsHistoryViewComponent } from '../ui/settings-history-view.component';
import { NewDriversComponent } from './new-drivers.component';

export const ROUTES: Routes = [
    {
        path: ':id',
        component: NewDriversComponent,
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
