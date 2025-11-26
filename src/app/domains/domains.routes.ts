import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: ':id',
        loadComponent: () =>
            import('./domains.component').then((m) => m.DomainsComponent),
        children: [
            {
                path: 'about',
                loadComponent: () =>
                    import('./domain-about.component').then(
                        (m) => m.DomainAboutComponent,
                    ),
            },
            {
                path: 'applications',
                loadComponent: () =>
                    import('./domain-applications.component').then(
                        (m) => m.DomainApplicationsComponent,
                    ),
            },
            {
                path: 'authentication',
                loadComponent: () =>
                    import('./domain-authentication.component').then(
                        (m) => m.DomainAuthenticationComponent,
                    ),
            },
            {
                path: 'users',
                loadComponent: () =>
                    import('./domain-users.component').then(
                        (m) => m.DomainUsersComponent,
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
