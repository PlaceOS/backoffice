import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './domains.routes';

import { DomainAboutComponent } from './domain-about.component';
import { DomainApplicationsComponent } from './domain-applications.component';
import { DomainAuthenticationComponent } from './domain-authentication.component';
import { DomainUsersComponent } from './domain-users.component';
import { DomainsComponent } from './domains.component';

@NgModule({
    declarations: [],
    imports: [
        DomainApplicationsComponent,
        DomainAuthenticationComponent,
        DomainUsersComponent,
        DomainAboutComponent,
        DomainsComponent,
        RouterModule.forChild(ROUTES),
    ],
})
export class AppDomainsModule {}
