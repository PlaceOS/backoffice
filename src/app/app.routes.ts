import { Route } from '@angular/router';
import {
    authorisedAdminGuard,
    authorisedUserGuard,
} from './ui/guards/authorised.guard';
import { UnauthorisedComponent } from './ui/unauthorised.component';

export const appRoutes: Route[] = [
    { path: 'unauthorised', component: UnauthorisedComponent },
    {
        path: 'modules',
        canActivate: [authorisedUserGuard],
        loadChildren: () =>
            import('./modules/modules.routes').then((m) => m.ROUTES),
    },
    {
        path: 'domains',
        canActivate: [authorisedAdminGuard],
        loadChildren: () =>
            import('./domains/domains.routes').then((m) => m.ROUTES),
    },
    {
        path: 'drivers',
        data: { role_only: true },
        canActivate: [authorisedUserGuard],
        loadChildren: () =>
            import('./drivers/drivers.routes').then((m) => m.ROUTES),
    },
    {
        path: 'groups',
        canActivate: [authorisedAdminGuard],
        loadChildren: () =>
            import('./groups/groups.routes').then((m) => m.ROUTES),
    },
    {
        path: 'systems',
        canActivate: [authorisedUserGuard],
        loadChildren: () =>
            import('./systems/systems.routes').then((m) => m.ROUTES),
    },
    {
        path: 'repositories',
        canActivate: [authorisedAdminGuard],
        loadChildren: () =>
            import('./repositories/repositories.routes').then((m) => m.ROUTES),
    },
    {
        path: 'triggers',
        data: { role_only: true },
        canActivate: [authorisedUserGuard],
        loadChildren: () =>
            import('./triggers/triggers.routes').then((m) => m.ROUTES),
    },
    {
        path: 'users',
        data: { allow_subsystem: true },
        canActivate: [authorisedAdminGuard],
        loadChildren: () =>
            import('./users/users.routes').then((m) => m.ROUTES),
    },
    {
        path: 'zones',
        canActivate: [authorisedUserGuard],
        loadChildren: () =>
            import('./zones/zones.routes').then((m) => m.ROUTES),
    },
    {
        path: 'admin',
        canActivate: [authorisedAdminGuard],
        loadChildren: () =>
            import('./admin/admin.routes').then((m) => m.ROUTES),
    },
    { path: '**', redirectTo: 'systems' },
];
