import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExtensionOutletComponent } from '../ui/extension-outlet.component';
import { TriggerAboutComponent } from './trigger-about.component';
import { TriggerInstancesComponent } from './trigger-instances.component';
import { TriggersComponent } from './triggers.component';

export const ROUTES: Routes = [
    {
        path: ':id',
        component: TriggersComponent,
        children: [
            { path: 'about', component: TriggerAboutComponent },
            { path: 'instances', component: TriggerInstancesComponent },
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
export class AppTriggersModule {}
