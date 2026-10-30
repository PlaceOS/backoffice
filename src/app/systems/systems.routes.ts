import { Routes } from '@angular/router';
import { authorisedAdminGuard } from '../ui/guards/authorised.guard';

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
                    import('../ui/item-metadata.component').then(
                        (m) => m.ItemMetadataComponent,
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
