
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ScrollingModule } from '@angular/cdk/scrolling';


import { ComposerModule } from '@acaprojects/ngx-composer';
import { WidgetsModule } from '@acaprojects/ngx-widgets';

import { BaseComponent } from './base.component';
import { BaseRootComponent } from './base-root.component';
import { LOGIN_COMPONENTS } from './login';

import { SidebarComponent } from './sidebar/sidebar.component';
import { SettingsDisplayComponent } from './settings-display/settings-display.component';
import { ItemDisplayComponent } from './item-display/item-display.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { SystemExecComponent } from './system-exec/system-exec.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { CronOptionsComponent } from './cron-options/cron-options.component';
import { CUSTOM_FIELD_COMPONENTS } from './custom-fields';
import { EngineItemDropdownComponent } from './item-dropdown/item-dropdown.component';

const COMPONENTS: any[] = [
    ...LOGIN_COMPONENTS,
    BaseComponent,
    BaseRootComponent,
    SidebarComponent,
    SettingsDisplayComponent,
    ItemDisplayComponent,
    ContextMenuComponent,
    SystemExecComponent,
    SearchbarComponent,
    CronOptionsComponent,
    ...CUSTOM_FIELD_COMPONENTS,
    EngineItemDropdownComponent
];

@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    imports: [
        CommonModule,
        FormsModule,
        ComposerModule,
        WidgetsModule,
        ScrollingModule
    ],
    exports: [
        ...COMPONENTS
    ],
    entryComponents: [
        ContextMenuComponent,
        ...CUSTOM_FIELD_COMPONENTS
    ]
})
export class SharedComponentsModule { }
