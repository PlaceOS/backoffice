import { Routes } from '@angular/router';

import { ModulesComponent } from './modules.component';
import { ModuleAboutComponent } from './module-about.component';
import { ModuleSystemsComponent } from './module-systems.component';
import { ExtensionOutletComponent } from '../ui/extension-outlet.component';

export const ROUTES: Routes = [
    {
        path: ':id',
        component: ModulesComponent,
        children: [
            { path: 'about', component: ModuleAboutComponent },
            { path: 'systems', component: ModuleSystemsComponent },
            { path: 'extend/:id', component: ExtensionOutletComponent },
            { path: '**', redirectTo: 'about' },
        ],
    },
    { path: '**', redirectTo: '-' },
];
