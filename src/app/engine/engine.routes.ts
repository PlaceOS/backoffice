import { Routes } from '@angular/router';

import { PlaceComponent } from './engine.component';
import { PlaceDatabaseDetailsComponent } from './database-details/database-details.component';
import { PlaceDetailsComponent } from './details/details.component';
import { AuthorisedAdminGuard } from 'src/app/ui/guards/authorised-admin.guard';
import { PlaceClusterDetailsComponent } from './cluster-details/cluster-details.component';
import { AdminInterfacesComponent } from './interfaces/interfaces.component';
import { AdminBrokersComponent } from './brokers/brokers.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: PlaceComponent,
        canActivate: [AuthorisedAdminGuard],
        children: [
            { path: 'about', component: PlaceDetailsComponent },
            { path: 'database', component: PlaceDatabaseDetailsComponent },
            { path: 'clusters', component: PlaceClusterDetailsComponent },
            { path: 'interfaces', component: AdminInterfacesComponent },
            { path: 'brokers', component: AdminBrokersComponent },
            { path: '**', redirectTo: 'about' }
        ]
    },
    { path: '**', redirectTo: '' }
];
