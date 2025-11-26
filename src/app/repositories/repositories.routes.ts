import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: ':id',
        loadComponent: () =>
            import('./repositories.component').then(
                (m) => m.RepositoriesComponent,
            ),
        children: [
            {
                path: 'about',
                loadComponent: () =>
                    import('./repository-about.component').then(
                        (m) => m.RepositoryAboutComponent,
                    ),
            },
            {
                path: 'drivers',
                loadComponent: () =>
                    import('./repository-drivers.component').then(
                        (m) => m.RepositoryDriversComponent,
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
