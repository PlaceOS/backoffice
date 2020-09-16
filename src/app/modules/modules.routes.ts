import { Routes } from '@angular/router';

import { ModulesComponent } from './modules.component';
import { ModuleAboutComponent } from './module-about/module-about.component';
import { ModuleSystemsComponent } from './module-systems/module-systems.component';

export const ROUTES: Routes = [
    {
        path: ':id',
        component: ModulesComponent,
        children: [
            { path: 'about', component: ModuleAboutComponent },
            { path: 'systems', component: ModuleSystemsComponent },
            { path: '**', redirectTo: 'about' },
        ],
    },
    { path: '**', redirectTo: '-' },
];
