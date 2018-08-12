
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ComposerModule } from '@acaprojects/ngx-composer';
import { WidgetsModule } from '@acaprojects/ngx-widgets';

import { LOGIN_COMPONENTS } from './login';
import { BaseComponent } from './base.component';

@NgModule({
    declarations: [
        ...LOGIN_COMPONENTS,
        BaseComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ComposerModule,
        WidgetsModule
    ],
    exports: [
        ...LOGIN_COMPONENTS,
        BaseComponent
    ]
})
export class SharedComponentsModule { }
