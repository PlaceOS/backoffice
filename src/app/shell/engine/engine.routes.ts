import { Routes } from '@angular/router';

import { EngineComponent } from './engine.component';
import { EngineDatabaseDetailsComponent } from './database-details/database-details.component';
import { EngineDetailsComponent } from './details/details.component';
import { AuthorisedAdminGuard } from 'src/app/shared/guards/authorised-admin.guard';
import { EngineClusterDetailsComponent } from './cluster-details/cluster-details.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: EngineComponent,
        canActivate: [AuthorisedAdminGuard],
        children: [
            { path: 'about', component: EngineDetailsComponent },
            { path: 'database', component: EngineDatabaseDetailsComponent },
            { path: 'clusters', component: EngineClusterDetailsComponent },
            { path: '**', redirectTo: 'about' }
        ]
    },
    { path: '**', redirectTo: '' }
];
