import { Routes } from '@angular/router';
import { DomainApplicationsComponent } from './domain-applications.component';
import { DomainAuthenticationComponent } from './domain-authentication.component';
import { DomainUsersComponent } from './domain-users.component';
import { DomainAboutComponent } from './domain-about.component';
import { ExtensionOutletComponent } from '../ui/extension-outlet.component';
import { NewDomainsComponent } from './new-domains.component';

export const ROUTES: Routes = [
    {
        path: ':id',
        component: NewDomainsComponent,
        children: [
            { path: 'about', component: DomainAboutComponent },
            { path: 'applications', component: DomainApplicationsComponent },
            { path: 'authentication', component: DomainAuthenticationComponent },
            { path: 'users', component: DomainUsersComponent },
            { path: 'extend/:id', component: ExtensionOutletComponent },
            { path: '**', redirectTo: 'about' },
        ],
    },
    { path: '**', redirectTo: '-' },
];
