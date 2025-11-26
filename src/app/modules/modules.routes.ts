import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: ':id',
        loadComponent: () =>
            import('./modules.component').then((m) => m.ModulesComponent),
        children: [
            {
                path: 'about',
                loadComponent: () =>
                    import('./module-about.component').then(
                        (m) => m.ModuleAboutComponent,
                    ),
            },
            {
                path: 'systems',
                loadComponent: () =>
                    import('./module-systems.component').then(
                        (m) => m.ModuleSystemsComponent,
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
