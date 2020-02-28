import { Routes } from '@angular/router';

import { EngineComponent } from './engine.component';
import { EngineDatabaseDetailsComponent } from './database-details/database-details.component';
import { EngineDetailsComponent } from './details/details.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: EngineComponent,
        children: [
            { path: 'about', component: EngineDetailsComponent },
            { path: 'database', component: EngineDatabaseDetailsComponent },
            { path: '**', redirectTo: 'about' }
        ]
    },
    { path: '**', redirectTo: '' }
];
