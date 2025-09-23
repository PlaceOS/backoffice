import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './users.routes';

import { UserAboutComponent } from './user-about.component';
import { UserHistoryComponent } from './user-history.component';

import { UserMetadataComponent } from './user-metadata.component';
import { UsersComponent } from './users.component';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(ROUTES),
        UserAboutComponent,
        UserHistoryComponent,
        UserMetadataComponent,
        UsersComponent,
    ],
})
export class AppUsersModule {}
