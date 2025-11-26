import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExtensionOutletComponent } from '../ui/extension-outlet.component';
import { AuthorisedAdminGuard } from '../ui/guards/authorised-admin.guard';
import { PlaceComponent } from './admin.component';
import { AdminAPIKeysComponent } from './api-keys/api-keys.component';
import { APIKeyService } from './api-keys/api-keys.service';
import { AdminBrokersComponent } from './brokers.component';
import { PlaceBuildListComponent } from './build-list.component';
import { PlaceClusterDetailsComponent } from './cluster-details/cluster-details.component';
import { PlaceClusterTaskListComponent } from './cluster-details/cluster-task-list.component';
import { PlaceDatabaseDetailsComponent } from './database-details.component';
import { PlaceDetailsComponent } from './details.component';
import { PlaceEdgeComponent } from './edge.component';
import { PlaceExtensionsComponent } from './extensions.component';
import { AdminInterfacesComponent } from './interfaces.component';
import { EmailTemplateFormComponent } from './mailing-lists/email-template-form.component';
import { EmailTemplatesComponent } from './mailing-lists/email-templates.component';
import { ResourceImportsComponent } from './resource-imports.component';
import { AdminSchemasComponent } from './schemas.component';
import { PlaceStaffAPIComponent } from './staff-api.component';
import { StorageComponent } from './storage/storage.component';
import { UploadLibraryComponent } from './upload-library.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: PlaceComponent,
        canActivate: [AuthorisedAdminGuard],
        children: [
            { path: 'about', component: PlaceDetailsComponent },
            { path: 'database', component: PlaceDatabaseDetailsComponent },
            { path: 'clusters', component: PlaceClusterDetailsComponent },
            { path: 'clusters/:id', component: PlaceClusterTaskListComponent },
            { path: 'interfaces', component: AdminInterfacesComponent },
            { path: 'brokers', component: AdminBrokersComponent },
            { path: 'edge', component: PlaceEdgeComponent },
            { path: 'edge/:id', component: PlaceEdgeComponent },
            { path: 'extensions', component: PlaceExtensionsComponent },
            { path: 'staff-api', component: PlaceStaffAPIComponent },
            { path: 'resource-imports', component: ResourceImportsComponent },
            { path: 'schemas', component: AdminSchemasComponent },
            { path: 'api-keys', component: AdminAPIKeysComponent },
            { path: 'upload-storage', component: StorageComponent },
            { path: 'upload-library', component: UploadLibraryComponent },
            {
                path: 'mailing-list',
                children: [
                    { path: '', component: EmailTemplatesComponent },
                    { path: 'edit', component: EmailTemplateFormComponent },
                    { path: 'edit/:id', component: EmailTemplateFormComponent },
                    { path: '**', redirectTo: '' },
                ],
            },
            { path: 'build-jobs', component: PlaceBuildListComponent },
            { path: 'extend/:id', component: ExtensionOutletComponent },
            { path: '**', redirectTo: 'about' },
        ],
    },
    { path: '**', redirectTo: '' },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(ROUTES)],
    providers: [APIKeyService],
})
export class AppPlaceModule {}
