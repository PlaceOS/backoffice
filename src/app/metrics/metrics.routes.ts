import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./metrics.component').then((m) => m.MetricsComponent),
        children: [],
    },
    {
        path: 'dashboard',
        loadComponent: () =>
            import('./metrics.component').then((m) => m.MetricsComponent),
        children: [],
    },
    {
        path: 'dashboard/:period',
        loadComponent: () =>
            import('./metrics.component').then((m) => m.MetricsComponent),
        children: [],
    },
    {
        path: ':period',
        loadComponent: () =>
            import('./metrics.component').then((m) => m.MetricsComponent),
        children: [],
    },
    { path: '**', redirectTo: '' },
];
