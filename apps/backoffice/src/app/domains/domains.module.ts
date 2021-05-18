import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './domains.routes';

import { DomainsComponent } from './domains.component';
import { DomainApplicationsComponent } from './domain-applications.component';
import { DomainAuthenticationComponent } from './domain-authentication.component';
import { DomainUsersComponent } from './domain-users.component';
import { DomainAboutComponent } from './domain-about.component';

import { SharedContentModule } from 'apps/backoffice/src/app/ui/ui.module';

@NgModule({
    declarations: [
        DomainsComponent,
        DomainApplicationsComponent,
        DomainAuthenticationComponent,
        DomainUsersComponent,
        DomainAboutComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule,
    ],
})
export class AppDomainsModule {}
