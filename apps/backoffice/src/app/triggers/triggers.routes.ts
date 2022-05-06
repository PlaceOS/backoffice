import { Routes } from '@angular/router';

import { TriggersComponent } from './triggers.component';
import { TriggerAboutComponent } from './trigger-about.component';
import { TriggerInstancesComponent } from './trigger-instances.component';
import { ExtensionOutletComponent } from '../ui/extension-outlet.component';
import { NewRepositoriesComponent } from '../repositories/new-repositories.component';
import { NewTriggersComponent } from './new-triggers.component';

export const ROUTES: Routes = [
    {
        path: ':id',
        component: NewTriggersComponent,
        children: [
            { path: 'about', component: TriggerAboutComponent },
            { path: 'instances', component: TriggerInstancesComponent },
            { path: 'extend/:id', component: ExtensionOutletComponent },
            { path: '**', redirectTo: 'about' },
        ],
    },
    { path: '**', redirectTo: '-' },
];
