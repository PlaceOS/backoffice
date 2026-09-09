import { Routes } from '@angular/router';
import { AuthorisedAdminGuard } from '../ui/guards/authorised-admin.guard';
import { AuthorisedUserGuard } from '../ui/guards/authorised-user.guard';

export const ROUTES: Routes = [
    {
        path: ':id',
        loadComponent: () =>
            import('./zones.component').then((m) => m.ZonesComponent),
        children: [
            {
                path: 'about',
                loadComponent: () =>
                    import('./zone-about.component').then(
                        (m) => m.ZoneAboutComponent,
                    ),
            },
            {
                path: 'systems',
                loadComponent: () =>
                    import('./zone-systems.component').then(
                        (m) => m.ZoneSystemsComponent,
                    ),
            },
            {
                path: 'triggers',
                canActivate: [AuthorisedUserGuard],
                data: { role_only: true },
                loadComponent: () =>
                    import('./zone-triggers.component').then(
                        (m) => m.ZoneTriggersComponent,
                    ),
            },
            {
                path: 'children',
                loadComponent: () =>
                    import('./zone-children.component').then(
                        (m) => m.ZoneChildrenComponent,
                    ),
            },
            {
                path: 'metadata',
                loadComponent: () =>
                    import('./zone-metadata.component').then(
                        (m) => m.ZoneMetadataComponent,
                    ),
            },
            {
                path: 'groups',
                canActivate: [AuthorisedAdminGuard],
                loadComponent: () =>
                    import('./zone-groups.component').then(
                        (m) => m.ZoneGroupsComponent,
                    ),
            },
            {
                path: 'extend/:id',
                loadComponent: () =>
                    import('../ui/extension-outlet.component').then(
                        (m) => m.ExtensionOutletComponent,
                    ),
            },
            {
                path: 'history',
                canActivate: [AuthorisedAdminGuard],
                loadComponent: () =>
                    import('../ui/settings-history-view.component').then(
                        (m) => m.SettingsHistoryViewComponent,
                    ),
            },
            { path: '**', redirectTo: 'about' },
        ],
    },
    { path: '**', redirectTo: '-' },
];
