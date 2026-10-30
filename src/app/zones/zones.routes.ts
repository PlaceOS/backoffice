import { Routes } from '@angular/router';
import {
    authorisedAdminGuard,
    authorisedUserGuard,
} from '../ui/guards/authorised.guard';

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
                canActivate: [authorisedUserGuard],
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
                    import('../ui/item-metadata.component').then(
                        (m) => m.ItemMetadataComponent,
                    ),
            },
            {
                path: 'groups',
                canActivate: [authorisedAdminGuard],
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
                canActivate: [authorisedAdminGuard],
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
