import { Routes } from '@angular/router';

import { TriggersComponent } from './triggers.component';
import { TriggerAboutComponent } from './trigger-about.component';
import { TriggerSystemsComponent } from './trigger-systems.component';
import { ExtensionOutletComponent } from '../ui/extension-outlet.component';

export const ROUTES: Routes = [
    {
        path: ':id',
        component: TriggersComponent,
        children: [
            { path: 'about', component: TriggerAboutComponent },
            { path: 'systems', component: TriggerSystemsComponent },
            { path: 'extend/:id', component: ExtensionOutletComponent },
            { path: '**', redirectTo: 'about' },
        ],
    },
    { path: '**', redirectTo: '-' },
];
