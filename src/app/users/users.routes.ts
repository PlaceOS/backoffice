import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: ':id',
        loadComponent: () =>
            import('./users.component').then((m) => m.UsersComponent),
        children: [
            {
                path: 'about',
                loadComponent: () =>
                    import('./user-about.component').then(
                        (m) => m.UserAboutComponent,
                    ),
            },
            {
                path: 'metadata',
                loadComponent: () =>
                    import('./user-metadata.component').then(
                        (m) => m.UserMetadataComponent,
                    ),
            },
            {
                path: 'history',
                loadComponent: () =>
                    import('./user-history.component').then(
                        (m) => m.UserHistoryComponent,
                    ),
            },
            {
                path: 'extend/:id',
                loadComponent: () =>
                    import('../ui/extension-outlet.component').then(
                        (m) => m.ExtensionOutletComponent,
                    ),
            },
            { path: '**', redirectTo: 'about' },
        ],
    },
    { path: '**', redirectTo: '-' },
];
