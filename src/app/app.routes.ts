import { Route } from '@angular/router';
import { AuthorisedAdminGuard } from './ui/guards/authorised-admin.guard';
import { AuthorisedUserGuard } from './ui/guards/authorised-user.guard';
import { UnauthorisedComponent } from './ui/unauthorised.component';

export const appRoutes: Route[] = [
    { path: 'unauthorised', component: UnauthorisedComponent },
    {
        path: 'modules',
        canActivate: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./modules/modules.routes').then((m) => m.ROUTES),
    },
    {
        path: 'domains',
        canActivate: [AuthorisedAdminGuard],
        loadChildren: () =>
            import('./domains/domains.routes').then((m) => m.ROUTES),
    },
    {
        path: 'drivers',
        canActivate: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./drivers/drivers.routes').then((m) => m.ROUTES),
    },
    {
        path: 'systems',
        canActivate: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./systems/systems.routes').then((m) => m.ROUTES),
    },
    {
        path: 'repositories',
        canActivate: [AuthorisedAdminGuard],
        loadChildren: () =>
            import('./repositories/repositories.routes').then((m) => m.ROUTES),
    },
    {
        path: 'triggers',
        canActivate: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./triggers/triggers.routes').then((m) => m.ROUTES),
    },
    {
        path: 'users',
        canActivate: [AuthorisedAdminGuard],
        loadChildren: () =>
            import('./users/users.routes').then((m) => m.ROUTES),
    },
    {
        path: 'zones',
        canActivate: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./zones/zones.routes').then((m) => m.ROUTES),
    },
    {
        path: 'admin',
        canActivate: [AuthorisedAdminGuard],
        loadChildren: () =>
            import('./admin/admin.routes').then((m) => m.ROUTES),
    },
    { path: '**', redirectTo: 'systems' },
];
