import { Routes } from '@angular/router';
import { authorisedAdminGuard } from '../ui/guards/authorised.guard';

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
                    import('../ui/item-metadata.component').then(
                        (m) => m.ItemMetadataComponent,
                    ),
            },
            {
                path: 'groups',
                canActivate: [authorisedAdminGuard],
                loadComponent: () =>
                    import('./user-groups.component').then(
                        (m) => m.UserGroupsComponent,
                    ),
            },
            {
                path: 'history',
                canActivate: [authorisedAdminGuard],
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
