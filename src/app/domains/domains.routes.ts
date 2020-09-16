import { Routes } from '@angular/router';
import { DomainsComponent } from './domains.component';
import { DomainApplicationsComponent } from './domain-applications/domain-applications.component';
import { DomainAuthenticationComponent } from './domain-authentication/domain-authentication.component';
import { DomainUsersComponent } from './domain-users/domain-users.component';
import { DomainAboutComponent } from './domain-about/domain-about.component';

export const ROUTES: Routes = [
    {
        path: ':id',
        component: DomainsComponent,
        children: [
            { path: 'about', component: DomainAboutComponent },
            { path: 'applications', component: DomainApplicationsComponent },
            { path: 'authentication', component: DomainAuthenticationComponent },
            { path: 'users', component: DomainUsersComponent },
            { path: '**', redirectTo: 'about' },
        ],
    },
    { path: '**', redirectTo: '-' },
];
