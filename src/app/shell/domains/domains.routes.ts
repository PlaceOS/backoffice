
import { Routes } from '@angular/router';
import { DomainsComponent } from './domains.component';
import { DomainApplicationsComponent } from './domain-applications/domain-applications.component';
import { DomainAuthenticationComponent } from './domain-authentication/domain-authentication.component';
import { DomainUsersComponent } from './domain-users/domain-users.component';

export const ROUTES: Routes = [
    { path: '', component: DomainsComponent, children: [] },
    {
        path: ':id', component: DomainsComponent, children: [
            { path: 'applications', component: DomainApplicationsComponent },
            { path: 'authentication', component: DomainAuthenticationComponent },
            { path: 'users', component: DomainUsersComponent },
            { path: '**', redirectTo: 'applications' },
        ]
    },
    { path: '**',      redirectTo: '' },
];
