
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComposerModule } from '@acaprojects/ngx-composer';

import { ROUTES } from './tests.routes';

import { TestsComponent } from './tests.component';
import { SharedContentModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
        TestsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ComposerModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule
    ]
})
export class AppTestsModule { }
