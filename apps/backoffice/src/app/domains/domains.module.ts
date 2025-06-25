import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './domains.routes';

import { DomainAboutComponent } from './domain-about.component';
import { DomainApplicationsComponent } from './domain-applications.component';
import { DomainAuthenticationComponent } from './domain-authentication.component';
import { DomainUsersComponent } from './domain-users.component';

import { SharedContentModule } from '../ui/ui.module';
import { DomainsComponent } from './domains.component';

@NgModule({
    declarations: [
        DomainApplicationsComponent,
        DomainAuthenticationComponent,
        DomainUsersComponent,
        DomainAboutComponent,
        DomainsComponent,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule,
    ],
})
export class AppDomainsModule {}
