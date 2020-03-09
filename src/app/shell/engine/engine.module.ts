
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './engine.routes';
import { SharedContentModule } from 'src/app/shared/shared.module';

import { EngineComponent } from './engine.component';
import { EngineDatabaseDetailsComponent } from './database-details/database-details.component';
import { EngineDetailsComponent } from './details/details.component';


@NgModule({
    declarations: [
        EngineComponent,
        EngineDatabaseDetailsComponent,
        EngineDetailsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule
    ]
})
export class AppEngineModule { }
