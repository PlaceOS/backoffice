import { Routes } from '@angular/router';

import { ZoneAboutComponent } from './zone-about.component';
import { ZoneSystemsComponent } from './zone-systems.component';
import { ZoneTriggersComponent } from './zone-triggers.component';
import { ZoneChildrenComponent } from './zone-children.component';
import { ZoneMetadataComponent } from './zone-metadata.component';
import { ExtensionOutletComponent } from '../ui/extension-outlet.component';
import { SettingsHistoryViewComponent } from '../ui/settings-history-view.component';
import { ZonesComponent } from './zones.component';

export const ROUTES: Routes = [
    {
        path: ':id',
        component: ZonesComponent,
        children: [
            { path: 'about', component: ZoneAboutComponent },
            { path: 'systems', component: ZoneSystemsComponent },
            { path: 'triggers', component: ZoneTriggersComponent },
            { path: 'children', component: ZoneChildrenComponent },
            { path: 'metadata', component: ZoneMetadataComponent },
            { path: 'extend/:id', component: ExtensionOutletComponent },
            { path: 'history', component: SettingsHistoryViewComponent },
            { path: '**', redirectTo: 'about' },
        ],
    },
    { path: '**', redirectTo: '-' },
];
