
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { RouterModule } from '@angular/router';

import { ASpinnerModule } from '@acaprojects/ngx-spinners';
import { APipesModule } from '@acaprojects/ngx-pipes';
import { ACustomEventsModule } from '@acaprojects/ngx-custom-events';
import { ATabsModule } from '@acaprojects/ngx-tabs';

import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { BaseDirective } from './globals/base.directive';
import { SettingsFieldComponent } from './components/custom-fields/settings-field/settings-field.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { ItemDisplayComponent } from './components/item-display/item-display.component';
import { LOGIN_COMPONENTS } from './components/login';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SystemExecComponent } from './components/system-exec/system-exec.component';
import { CronOptionsComponent } from './components/cron-options/cron-options.component';
import { BaseRootComponent } from './components/base-root.component';
import { IconComponent } from './components/icon/icon.component';
import { ItemSearchFieldComponent } from './components/custom-fields/item-search-field/item-search-field.component';

import { SystemFormComponent } from './components/forms/system-form/system-form.component';

const COMPONENTS: Type<any>[] = [
    BaseDirective,
    BaseRootComponent,
    ItemDisplayComponent,
    SearchbarComponent,
    SidebarComponent,
    SystemExecComponent,
    ...LOGIN_COMPONENTS,
    CronOptionsComponent,
    IconComponent,
    SystemFormComponent,
];

const ENTRY_COMPONENT: Type<any>[] = [
    ItemSearchFieldComponent,
    SettingsFieldComponent,
    ContextMenuComponent,
]

const MATERIAL_MODULES: any[] = [
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    // MatProgressSpinnerModule,
    // MatProgressBarModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatTooltipModule,
    MatMenuModule,
    MatCheckboxModule,
    MatSlideToggleModule
];

@NgModule({
    declarations: [
        ...COMPONENTS,
        ...ENTRY_COMPONENT,
    ],
    imports: [
        CommonModule,
        ASpinnerModule,
        FormsModule,
        APipesModule,
        ReactiveFormsModule,
        ACustomEventsModule,
        ATabsModule,
        ScrollingModule,
        ...MATERIAL_MODULES,
        RouterModule.forChild([])
    ],
    exports: [
        ASpinnerModule,
        APipesModule,
        ACustomEventsModule,
        ATabsModule,
        ...COMPONENTS,
        ...ENTRY_COMPONENT,
        ...MATERIAL_MODULES
    ],
    entryComponents: [
        ...ENTRY_COMPONENT
    ]
})
export class SharedContentModule {}
