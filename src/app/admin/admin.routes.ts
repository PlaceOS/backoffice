import { Routes } from '@angular/router';

import { AuthorisedAdminGuard } from '../ui/guards/authorised-admin.guard';

export const ROUTES: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./admin.component').then((m) => m.PlaceComponent),
        canActivate: [AuthorisedAdminGuard],
        children: [
            {
                path: 'about',
                loadComponent: () =>
                    import('./details.component').then(
                        (m) => m.PlaceDetailsComponent,
                    ),
            },
            {
                path: 'database',
                loadComponent: () =>
                    import('./database-details.component').then(
                        (m) => m.PlaceDatabaseDetailsComponent,
                    ),
            },
            {
                path: 'clusters',
                loadComponent: () =>
                    import('./cluster-details/cluster-details.component').then(
                        (m) => m.PlaceClusterDetailsComponent,
                    ),
            },
            {
                path: 'clusters/:id',
                loadComponent: () =>
                    import('./cluster-details/cluster-task-list.component').then(
                        (m) => m.PlaceClusterTaskListComponent,
                    ),
            },
            {
                path: 'interfaces',
                loadComponent: () =>
                    import('./interfaces.component').then(
                        (m) => m.AdminInterfacesComponent,
                    ),
            },
            {
                path: 'brokers',
                loadComponent: () =>
                    import('./brokers.component').then(
                        (m) => m.AdminBrokersComponent,
                    ),
            },
            {
                path: 'edge',
                loadComponent: () =>
                    import('./edge.component').then((m) => m.PlaceEdgeComponent),
            },
            {
                path: 'edge/:id',
                loadComponent: () =>
                    import('./edge.component').then((m) => m.PlaceEdgeComponent),
            },
            {
                path: 'extensions',
                loadComponent: () =>
                    import('./extensions.component').then(
                        (m) => m.PlaceExtensionsComponent,
                    ),
            },
            {
                path: 'staff-api',
                loadComponent: () =>
                    import('./staff-api.component').then(
                        (m) => m.PlaceStaffAPIComponent,
                    ),
            },
            {
                path: 'resource-imports',
                loadComponent: () =>
                    import('./resource-imports.component').then(
                        (m) => m.ResourceImportsComponent,
                    ),
            },
            {
                path: 'schemas',
                loadComponent: () =>
                    import('./schemas.component').then(
                        (m) => m.AdminSchemasComponent,
                    ),
            },
            {
                path: 'api-keys',
                loadComponent: () =>
                    import('./api-keys/api-keys.component').then(
                        (m) => m.AdminAPIKeysComponent,
                    ),
            },
            {
                path: 'upload-storage',
                loadComponent: () =>
                    import('./storage/storage.component').then(
                        (m) => m.StorageComponent,
                    ),
            },
            {
                path: 'upload-library',
                loadComponent: () =>
                    import('./upload-library.component').then(
                        (m) => m.UploadLibraryComponent,
                    ),
            },
            {
                path: 'mailing-list',
                children: [
                    {
                        path: '',
                        loadComponent: () =>
                            import('./mailing-lists/email-templates.component').then(
                                (m) => m.EmailTemplatesComponent,
                            ),
                    },
                    {
                        path: 'edit',
                        loadComponent: () =>
                            import('./mailing-lists/email-template-form.component').then(
                                (m) => m.EmailTemplateFormComponent,
                            ),
                    },
                    {
                        path: 'edit/:id',
                        loadComponent: () =>
                            import('./mailing-lists/email-template-form.component').then(
                                (m) => m.EmailTemplateFormComponent,
                            ),
                    },
                    { path: '**', redirectTo: '' },
                ],
            },
            {
                path: 'build-jobs',
                loadComponent: () =>
                    import('./build-list.component').then(
                        (m) => m.PlaceBuildListComponent,
                    ),
            },
            {
                path: 'extend/:id',
                loadComponent: () =>
                    import('../ui/extension-outlet.component').then(
                        (m) => m.ExtensionOutletComponent,
                    ),
            },
            { path: '**', redirectTo: 'about' },
        ],
    },
    { path: '**', redirectTo: '' },
];
