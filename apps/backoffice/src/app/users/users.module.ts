import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './users.routes';

import { UserAboutComponent } from './user-about.component';
import { UserHistoryComponent } from './user-history.component';
import { SharedContentModule } from 'apps/backoffice/src/app/ui/ui.module';
import { UserMetadataComponent } from './user-metadata.component';
import { UsersComponent } from './users.component';

@NgModule({
    declarations: [
        UserAboutComponent,
        UserHistoryComponent,
        UserMetadataComponent,
        UsersComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule,
    ],
})
export class AppUsersModule {}
