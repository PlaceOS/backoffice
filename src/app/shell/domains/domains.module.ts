
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './domains.routes';

import { DomainsComponent } from './domains.component';
import { DomainApplicationsComponent } from './domain-applications/domain-applications.component';
import { DomainAuthenticationComponent } from './domain-authentication/domain-authentication.component';
import { DomainUsersComponent } from './domain-users/domain-users.component';
import { SharedContentModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
        DomainsComponent,
        DomainApplicationsComponent,
        DomainAuthenticationComponent,
        DomainUsersComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule
    ]
})
export class AppDomainsModule { }
