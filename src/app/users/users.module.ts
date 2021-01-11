
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './users.routes';

import { UsersComponent } from './users.component';
import { UserAboutComponent } from './user-about.component';
import { UserHistoryComponent } from './user-history.component';
import { SharedContentModule } from 'src/app/ui/ui.module';


@NgModule({
    declarations: [
        UsersComponent,
        UserAboutComponent,
        UserHistoryComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule
    ]
})
export class AppUsersModule { }
