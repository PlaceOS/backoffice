import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: ':id',
        loadComponent: () =>
            import('./drivers.component').then((m) => m.DriversComponent),
        children: [
            {
                path: 'about',
                loadComponent: () =>
                    import('./driver-about.component').then(
                        (m) => m.DriverAboutComponent,
                    ),
            },
            {
                path: 'docs',
                loadComponent: () =>
                    import('./driver-docs.component').then(
                        (m) => m.DriverDocsComponent,
                    ),
            },
            {
                path: 'modules',
                loadComponent: () =>
                    import('./driver-devices.component').then(
                        (m) => m.DriverModulesComponent,
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
