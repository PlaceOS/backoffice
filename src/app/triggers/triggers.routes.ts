import { Routes } from '@angular/router';

import { TriggersComponent } from './triggers.component';
import { TriggerAboutComponent } from './trigger-about/trigger-about.component';
import { TriggerSystemsComponent } from './trigger-systems/trigger-systems.component';

export const ROUTES: Routes = [
    {
        path: ':id',
        component: TriggersComponent,
        children: [
            { path: 'about', component: TriggerAboutComponent },
            { path: 'systems', component: TriggerSystemsComponent },
            { path: '**', redirectTo: 'about' },
        ],
    },
    { path: '**', redirectTo: '-' },
];
