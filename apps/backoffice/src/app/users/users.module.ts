import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExtensionOutletComponent } from '../ui/extension-outlet.component';
import { UserAboutComponent } from './user-about.component';
import { UserHistoryComponent } from './user-history.component';
import { UserMetadataComponent } from './user-metadata.component';
import { UsersComponent } from './users.component';

export const ROUTES: Routes = [
    {
        path: ':id',
        component: UsersComponent,
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

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(ROUTES)],
})
export class AppUsersModule {}
