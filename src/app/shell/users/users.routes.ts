import { Routes } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserAboutComponent } from './user-about/user-about.component';
import { UserHistoryComponent } from './user-history/user-history.component';

export const ROUTES: Routes = [
    {
        path: ':id',
        component: UsersComponent,
        children: [
            { path: 'about', component: UserAboutComponent },
            { path: 'history', component: UserHistoryComponent },
            { path: '**', redirectTo: 'about' }
        ]
    },
    { path: '**', redirectTo: '-' }
];
