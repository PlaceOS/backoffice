
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ComposerModule } from '@acaprojects/ngx-composer';
import { WidgetsModule } from '@acaprojects/ngx-widgets';

import { BaseComponent } from './base.component';
import { LOGIN_COMPONENTS } from './login';

import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
    declarations: [
        ...LOGIN_COMPONENTS,
        BaseComponent,
        ItemListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ComposerModule,
        WidgetsModule
    ],
    exports: [
        ...LOGIN_COMPONENTS,
        BaseComponent,
        ItemListComponent
    ]
})
export class SharedComponentsModule { }
