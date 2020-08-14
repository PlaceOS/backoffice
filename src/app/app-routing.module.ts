import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppShellComponent } from './shell/shell.component';
import { AuthorisedAdminGuard } from './shared/guards/authorised-admin.guard';
import { AuthorisedUserGuard } from './shared/guards/authorised-user.guard';
import { UnauthorisedComponent } from './shared/components/unauthorised/unauthorised.component';

const routes: Routes = [
    { path: 'unauthorised', component: UnauthorisedComponent },
    {
        path: '',
        component: AppShellComponent,
        children: [
            {
                path: 'modules',
                canLoad: [AuthorisedUserGuard],
                canActivate: [AuthorisedUserGuard],
                loadChildren: () =>
                    import('./shell/modules/modules.module').then((m) => m.AppModulesModule),
            },
            {
                path: 'domains',
                canLoad: [AuthorisedUserGuard],
                canActivate: [AuthorisedUserGuard],
                loadChildren: () =>
                    import('./shell/domains/domains.module').then((m) => m.AppDomainsModule),
            },
            {
                path: 'drivers',
                canLoad: [AuthorisedUserGuard],
                canActivate: [AuthorisedUserGuard],
                loadChildren: () =>
                    import('./shell/drivers/drivers.module').then((m) => m.AppDriversModule),
            },
            {
                path: 'metrics',
                canLoad: [AuthorisedUserGuard],
                canActivate: [AuthorisedUserGuard],
                loadChildren: () =>
                    import('./shell/metrics/metrics.module').then((m) => m.AppMetricsModule),
            },
            {
                path: 'systems',
                canLoad: [AuthorisedUserGuard],
                canActivate: [AuthorisedUserGuard],
                loadChildren: () =>
                    import('./shell/systems/systems.module').then((m) => m.AppSystemsModule),
            },
            {
                path: 'repositories',
                canLoad: [AuthorisedUserGuard],
                canActivate: [AuthorisedUserGuard],
                loadChildren: () =>
                    import('./shell/repositories/repositories.module').then(
                        (m) => m.AppRepositoriesModule
                    ),
            },
            {
                path: 'triggers',
                canLoad: [AuthorisedUserGuard],
                canActivate: [AuthorisedUserGuard],
                loadChildren: () =>
                    import('./shell/triggers/triggers.module').then((m) => m.AppTriggersModule),
            },
            {
                path: 'users',
                canLoad: [AuthorisedUserGuard],
                canActivate: [AuthorisedUserGuard],
                loadChildren: () =>
                    import('./shell/users/users.module').then((m) => m.AppUsersModule),
            },
            {
                path: 'zones',
                canLoad: [AuthorisedUserGuard],
                canActivate: [AuthorisedUserGuard],
                loadChildren: () =>
                    import('./shell/zones/zones.module').then((m) => m.AppZonesModule),
            },
            {
                path: 'admin',
                canLoad: [AuthorisedAdminGuard],
                canActivate: [AuthorisedAdminGuard],
                loadChildren: () =>
                    import('./shell/engine/engine.module').then((m) => m.AppPlaceModule),
            },
            { path: '**', redirectTo: 'systems' },
        ],
    },
    { path: '**', redirectTo: 'systems' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
