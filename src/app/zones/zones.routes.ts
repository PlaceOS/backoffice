import { Routes } from '@angular/router';

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
