
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './domains.routes';

import { DomainsComponent } from './domains.component';
import { DomainApplicationsComponent } from './domain-applications/domain-applications.component';
import { DomainAuthenticationComponent } from './domain-authentication/domain-authentication.component';
import { DomainUsersComponent } from './domain-users/domain-users.component';
import { SharedContentModule } from 'src/app/shared/shared.module';
import { DomainAboutComponent } from './domain-about/domain-about.component';


@NgModule({
    declarations: [
        DomainsComponent,
        DomainApplicationsComponent,
        DomainAuthenticationComponent,
        DomainUsersComponent,
        DomainAboutComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule
    ]
})
export class AppDomainsModule { }
