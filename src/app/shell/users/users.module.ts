
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComposerModule } from '@acaprojects/ngx-composer';
import { WidgetsModule } from '@acaprojects/ngx-widgets';

import { ROUTES } from './users.routes';

import { UsersComponent } from './users.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';


@NgModule({
    declarations: [
        UsersComponent
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
export class AppUsersModule { }
