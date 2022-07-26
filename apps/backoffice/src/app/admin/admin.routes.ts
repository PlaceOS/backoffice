import { Routes } from '@angular/router';

import { AuthorisedAdminGuard } from 'apps/backoffice/src/app/ui/guards/authorised-admin.guard';

import { PlaceComponent } from './admin.component';
import { PlaceDatabaseDetailsComponent } from './database-details.component';
import { PlaceDetailsComponent } from './details.component';
import { PlaceClusterDetailsComponent } from './cluster-details/cluster-details.component';
import { AdminInterfacesComponent } from './interfaces.component';
import { AdminBrokersComponent } from './brokers.component';
import { ExtensionOutletComponent } from '../ui/extension-outlet.component';
import { PlaceExtensionsComponent } from './extensions.component';
import { PlaceStaffAPIComponent } from './staff-api.component';
import { PlaceEdgeComponent } from './edge.component';
import { AdminSchemasComponent } from './schemas.component';
import { AdminAPIKeysComponent } from './api-keys/api-keys.component';

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
            { path: 'edge', component: PlaceEdgeComponent },
            { path: 'extensions', component: PlaceExtensionsComponent },
            { path: 'staff-api', component: PlaceStaffAPIComponent },
            { path: 'schemas', component: AdminSchemasComponent },
            { path: 'api-keys', component: AdminAPIKeysComponent },
            { path: 'extend/:id', component: ExtensionOutletComponent },
            { path: '**', redirectTo: 'about' },
        ],
    },
    { path: '**', redirectTo: '' },
];
