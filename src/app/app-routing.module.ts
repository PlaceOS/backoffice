import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppShellComponent } from './shell/shell.component';
import { AppAboutComponent } from './shell/about/about.component';

const routes: Routes = [
    { path: '', component: AppShellComponent, children: [
        { path: 'devices', loadChildren: () => import('./shell/devices/devices.module').then(m => m.AppDevicesModule) },
        { path: 'domains', loadChildren: () => import('./shell/domains/domains.module').then(m => m.AppDomainsModule) },
        { path: 'drivers', loadChildren: () => import('./shell/drivers/drivers.module').then(m => m.AppDriversModule) },
        { path: 'metrics', loadChildren: () => import('./shell/metrics/metrics.module').then(m => m.AppMetricsModule) },
        { path: 'systems', loadChildren: () => import('./shell/systems/systems.module').then(m => m.AppSystemsModule) },
        { path: 'triggers', loadChildren: () => import('./shell/triggers/triggers.module').then(m => m.AppTriggersModule) },
        { path: 'users', loadChildren: () => import('./shell/users/users.module').then(m => m.AppUsersModule) },
        { path: 'zones', loadChildren: () => import('./shell/zones/zones.module').then(m => m.AppZonesModule) },
        { path: 'tests', loadChildren: () => import('./shell/tests/tests.module').then(m => m.AppTestsModule) },
        { path: 'about', component: AppAboutComponent },
        { path: '**',      redirectTo: 'systems' }
    ] },
    { path: '**',      redirectTo: 'systems' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
