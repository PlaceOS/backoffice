
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComposerModule } from '@acaengine/composer';

import { ROUTES } from './users.routes';

import { UsersComponent } from './users.component';
import { UserAboutComponent } from './user-about/user-about.component';
import { UserHistoryComponent } from './user-history/user-history.component';
import { SharedContentModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
        UsersComponent,
        UserAboutComponent,
        UserHistoryComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ComposerModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule
    ]
})
export class AppUsersModule { }
