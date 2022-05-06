import { Routes } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserAboutComponent } from './user-about.component';
import { UserHistoryComponent } from './user-history.component';
import { ExtensionOutletComponent } from '../ui/extension-outlet.component';
import { UserMetadataComponent } from './user-metadata.component';
import { NewUsersComponent } from './new-users.component';

export const ROUTES: Routes = [
    {
        path: ':id',
        component: NewUsersComponent,
        children: [
            { path: 'about', component: UserAboutComponent },
            { path: 'metadata', component: UserMetadataComponent },
            { path: 'history', component: UserHistoryComponent },
            { path: 'extend/:id', component: ExtensionOutletComponent },
            { path: '**', redirectTo: 'about' },
        ],
    },
    { path: '**', redirectTo: '-' },
];
