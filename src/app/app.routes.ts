
import { Routes } from '@angular/router';
import { AppShellComponent } from './shell/shell.component';

export const ROUTES: Routes = [
    { path: '', component: AppShellComponent, children: [
        { path: 'devices', loadChildren: './shell/devices/devices.module#AppDevicesModule' },
        { path: 'domains', loadChildren: './shell/domains/domains.module#AppDomainsModule' },
        { path: 'drivers', loadChildren: './shell/drivers/drivers.module#AppDriversModule' },
        { path: 'metrics', loadChildren: './shell/metrics/metrics.module#AppMetricsModule' },
        { path: 'systems', loadChildren: './shell/systems/systems.module#AppSystemsModule' },
        { path: 'triggers', loadChildren: './shell/triggers/triggers.module#AppTriggersModule' },
        { path: 'users', loadChildren: './shell/users/users.module#AppUsersModule' },
        { path: 'zones', loadChildren: './shell/zones/zones.module#AppZonesModule' },
        { path: '**',      redirectTo: 'systems' },
    ] },
    { path: '**',      redirectTo: '' },
];
