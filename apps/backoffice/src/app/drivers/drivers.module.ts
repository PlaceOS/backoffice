import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExtensionOutletComponent } from '../ui/extension-outlet.component';
import { SettingsHistoryViewComponent } from '../ui/settings-history-view.component';
import { DriverAboutComponent } from './driver-about.component';
import { DriverModulesComponent } from './driver-devices.component';
import { DriverDocsComponent } from './driver-docs.component';
import { DriversComponent } from './drivers.component';

export const ROUTES: Routes = [
    {
        path: ':id',
        component: DriversComponent,
        children: [
            { path: 'about', component: DriverAboutComponent },
            { path: 'docs', component: DriverDocsComponent },
            { path: 'modules', component: DriverModulesComponent },
            { path: 'extend/:id', component: ExtensionOutletComponent },
            { path: 'history', component: SettingsHistoryViewComponent },
            { path: '**', redirectTo: 'about' },
        ],
    },
    { path: '**', redirectTo: '-' },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(ROUTES)],
})
export class AppDriversModule {}
