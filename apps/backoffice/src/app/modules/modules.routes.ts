import { Routes } from '@angular/router';

import { ModuleAboutComponent } from './module-about.component';
import { ModuleSystemsComponent } from './module-systems.component';
import { ExtensionOutletComponent } from '../ui/extension-outlet.component';
import { SettingsHistoryViewComponent } from '../ui/settings-history-view.component';
import { NewModulesComponent } from './new-modules.component';

export const ROUTES: Routes = [
    {
        path: ':id',
        component: NewModulesComponent,
        children: [
            { path: 'about', component: ModuleAboutComponent },
            { path: 'systems', component: ModuleSystemsComponent },
            { path: 'extend/:id', component: ExtensionOutletComponent },
            { path: 'history', component: SettingsHistoryViewComponent },
            { path: '**', redirectTo: 'about' },
        ],
    },
    { path: '**', redirectTo: '-' },
];
