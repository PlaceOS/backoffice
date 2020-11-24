import { Routes } from '@angular/router';

import { PlaceComponent } from './engine.component';
import { PlaceDatabaseDetailsComponent } from './database-details/database-details.component';
import { PlaceDetailsComponent } from './details/details.component';
import { AuthorisedAdminGuard } from 'src/app/ui/guards/authorised-admin.guard';
import { PlaceClusterDetailsComponent } from './cluster-details/cluster-details.component';
import { AdminInterfacesComponent } from './interfaces/interfaces.component';
import { AdminBrokersComponent } from './brokers/brokers.component';
import { ExtensionOutletComponent } from '../ui/extension-outlet.component';
import { PlaceExtensionsComponent } from './extensions/extensions.component';
import { PlaceStaffAPIComponent } from './staff-api.component';

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
            { path: 'extensions', component: PlaceExtensionsComponent },
            { path: 'staff-api', component: PlaceStaffAPIComponent },
            { path: 'extend/:id', component: ExtensionOutletComponent },
            { path: '**', redirectTo: 'about' }
        ]
    },
    { path: '**', redirectTo: '' }
];
