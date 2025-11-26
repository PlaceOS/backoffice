import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: ':id',
        loadComponent: () =>
            import('./triggers.component').then((m) => m.TriggersComponent),
        children: [
            {
                path: 'about',
                loadComponent: () =>
                    import('./trigger-about.component').then(
                        (m) => m.TriggerAboutComponent,
                    ),
            },
            {
                path: 'instances',
                loadComponent: () =>
                    import('./trigger-instances.component').then(
                        (m) => m.TriggerInstancesComponent,
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
