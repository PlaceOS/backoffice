import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: ':id',
        loadComponent: () =>
            import('./groups.component').then((m) => m.GroupsComponent),
        children: [
            {
                path: 'about',
                loadComponent: () =>
                    import('./group-about.component').then(
                        (m) => m.GroupAboutComponent,
                    ),
            },
            {
                path: 'users',
                loadComponent: () =>
                    import('./group-users.component').then(
                        (m) => m.GroupUsersComponent,
                    ),
            },
            {
                path: 'zones',
                loadComponent: () =>
                    import('./group-zones.component').then(
                        (m) => m.GroupZonesComponent,
                    ),
            },
            { path: '**', redirectTo: 'about' },
        ],
    },
    { path: '**', redirectTo: '-' },
];
