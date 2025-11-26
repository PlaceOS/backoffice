import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: ':id',
        loadComponent: () =>
            import('./systems.component').then((m) => m.SystemsComponent),
        children: [
            {
                path: 'about',
                loadComponent: () =>
                    import('./system-about.component').then(
                        (m) => m.SystemAboutComponent,
                    ),
            },
            {
                path: 'modules',
                loadComponent: () =>
                    import('./system-modules.component').then(
                        (m) => m.SystemModulesComponent,
                    ),
            },
            {
                path: 'triggers',
                loadComponent: () =>
                    import('./system-triggers.component').then(
                        (m) => m.SystemTriggersComponent,
                    ),
            },
            {
                path: 'zones',
                loadComponent: () =>
                    import('./system-zones.component').then(
                        (m) => m.SystemZonesComponent,
                    ),
            },
            {
                path: 'metadata',
                loadComponent: () =>
                    import('./system-metadata.component').then(
                        (m) => m.SystemMetadataComponent,
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
