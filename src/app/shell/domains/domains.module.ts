
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComposerModule } from '@acaprojects/ngx-composer';
import { WidgetsModule } from '@acaprojects/ngx-widgets';

import { ROUTES } from './domains.routes';

import { DomainsComponent } from './domains.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { DomainApplicationsComponent } from './domain-applications/domain-applications.component';
import { DomainAuthenticationComponent } from './domain-authentication/domain-authentication.component';
import { DomainUsersComponent } from './domain-users/domain-users.component';


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
        ComposerModule,
        WidgetsModule,
        RouterModule.forChild(ROUTES),
        SharedComponentsModule
    ]
})
export class AppDomainsModule { }
