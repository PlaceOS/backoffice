import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './domains.routes';

import { DomainApplicationsComponent } from './domain-applications.component';
import { DomainAuthenticationComponent } from './domain-authentication.component';
import { DomainUsersComponent } from './domain-users.component';
import { DomainAboutComponent } from './domain-about.component';

import { DomainsComponent } from './domains.component';
import { SharedContentModule } from '../ui/ui.module';

@NgModule({
    declarations: [
        DomainApplicationsComponent,
        DomainAuthenticationComponent,
        DomainUsersComponent,
        DomainAboutComponent,
        DomainsComponent,
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
