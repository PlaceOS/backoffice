import { Routes } from '@angular/router';
import { SystemAboutComponent } from './system-about.component';
import { SystemModulesComponent } from './system-modules.component';
import { SystemTriggersComponent } from './system-triggers.component';
import { SystemZonesComponent } from './system-zones.component';
import { SystemMetadataComponent } from './system-metadata.component';
import { ExtensionOutletComponent } from '../ui/extension-outlet.component';
import { SettingsHistoryViewComponent } from '../ui/settings-history-view.component';
import { SystemsComponent } from './systems.component';

export const ROUTES: Routes = [
    {
        path: ':id',
        component: SystemsComponent,
        children: [
            { path: 'about', component: SystemAboutComponent },
            { path: 'modules', component: SystemModulesComponent },
            { path: 'triggers', component: SystemTriggersComponent },
            { path: 'zones', component: SystemZonesComponent },
            { path: 'metadata', component: SystemMetadataComponent },
            { path: 'extend/:id', component: ExtensionOutletComponent },
            { path: 'history', component: SettingsHistoryViewComponent },
            { path: '**', redirectTo: 'about' }
        ]
    },
    { path: '**', redirectTo: '-' }
];
