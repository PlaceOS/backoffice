import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./dashboard.component').then(
                (m) => m.MqttDashboardComponent,
            ),
    },
    { path: '**', redirectTo: '' },
];
