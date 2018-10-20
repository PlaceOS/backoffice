
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ComposerModule } from '@acaprojects/ngx-composer';
import { WidgetsModule } from '@acaprojects/ngx-widgets';

import { BaseComponent } from './base.component';
import { BaseRootComponent } from './base-root.component';
import { LOGIN_COMPONENTS } from './login';

import { ItemListComponent } from './item-list/item-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SettingsDisplayComponent } from './settings-display/settings-display.component';
import { ItemDisplayComponent } from './item-display/item-display.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';

const COMPONENTS: any[] = [
    ...LOGIN_COMPONENTS,
    BaseComponent,
    BaseRootComponent,
    ItemListComponent,
    SidebarComponent,
    SettingsDisplayComponent,
    ItemDisplayComponent,
    ContextMenuComponent
];

@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    imports: [
        CommonModule,
        FormsModule,
        ComposerModule,
        WidgetsModule
    ],
    exports: [
        ...COMPONENTS
    ],
    entryComponents: [
        ContextMenuComponent
    ]
})
export class SharedComponentsModule { }
