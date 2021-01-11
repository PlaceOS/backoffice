import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorisedAdminGuard } from './ui/guards/authorised-admin.guard';
import { AuthorisedUserGuard } from './ui/guards/authorised-user.guard';
import { UnauthorisedComponent } from './ui/unauthorised.component';

const routes: Routes = [
    { path: 'unauthorised', component: UnauthorisedComponent },
    {
        path: 'modules',
        canLoad: [AuthorisedUserGuard],
        canActivate: [AuthorisedUserGuard],
        loadChildren: () => import('./modules/modules.module').then((m) => m.AppModulesModule),
    },
    {
        path: 'domains',
        canLoad: [AuthorisedAdminGuard],
        canActivate: [AuthorisedAdminGuard],
        loadChildren: () => import('./domains/domains.module').then((m) => m.AppDomainsModule),
    },
    {
        path: 'drivers',
        canLoad: [AuthorisedUserGuard],
        canActivate: [AuthorisedUserGuard],
        loadChildren: () => import('./drivers/drivers.module').then((m) => m.AppDriversModule),
    },
    {
        path: 'metrics',
        canLoad: [AuthorisedUserGuard],
        canActivate: [AuthorisedUserGuard],
        loadChildren: () => import('./metrics/metrics.module').then((m) => m.AppMetricsModule),
    },
    {
        path: 'systems',
        canLoad: [AuthorisedUserGuard],
        canActivate: [AuthorisedUserGuard],
        loadChildren: () => import('./systems/systems.module').then((m) => m.AppSystemsModule),
    },
    {
        path: 'repositories',
        canLoad: [AuthorisedAdminGuard],
        canActivate: [AuthorisedAdminGuard],
        loadChildren: () =>
            import('./repositories/repositories.module').then((m) => m.AppRepositoriesModule),
    },
    {
        path: 'triggers',
        canLoad: [AuthorisedUserGuard],
        canActivate: [AuthorisedUserGuard],
        loadChildren: () => import('./triggers/triggers.module').then((m) => m.AppTriggersModule),
    },
    {
        path: 'users',
        canLoad: [AuthorisedAdminGuard],
        canActivate: [AuthorisedAdminGuard],
        loadChildren: () => import('./users/users.module').then((m) => m.AppUsersModule),
    },
    {
        path: 'zones',
        canLoad: [AuthorisedUserGuard],
        canActivate: [AuthorisedUserGuard],
        loadChildren: () => import('./zones/zones.module').then((m) => m.AppZonesModule),
    },
    {
        path: 'admin',
        canLoad: [AuthorisedAdminGuard],
        canActivate: [AuthorisedAdminGuard],
        loadChildren: () => import('./engine/engine.module').then((m) => m.AppPlaceModule),
    },
    { path: '**', redirectTo: 'systems' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
