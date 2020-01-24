
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
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { BaseDirective } from './globals/base.directive';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { ItemDisplayComponent } from './components/item-display/item-display.component';
import { LOGIN_COMPONENTS } from './components/login';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CronOptionsComponent } from './components/cron-options/cron-options.component';
import { BaseRootComponent } from './components/base-root.component';
import { IconComponent } from './components/icon/icon.component';

import { SettingsFieldComponent } from './components/custom-fields/settings-field/settings-field.component';
import { ItemSearchFieldComponent } from './components/custom-fields/item-search-field/item-search-field.component';
import { DateFieldComponent } from './components/custom-fields/date-field/date-field.component';
import { TimeFieldComponent } from './components/custom-fields/time-field/time-field.component';
import { SystemExecFieldComponent } from './components/custom-fields/system-exec-field/system-exec-field.component';

import { SystemFormComponent } from './components/forms/system-form/system-form.component';
import { ModuleFormComponent } from './components/forms/module-form/module-form.component';
import { ZoneFormComponent } from './components/forms/zone-form/zone-form.component';
import { DriverFormComponent } from './components/forms/driver-form/driver-form.component';
import { UserFormComponent } from './components/forms/user-form/user-form.component';
import { DomainFormComponent } from './components/forms/domain-form/domain-form.component';
import { ApplicationFormComponent } from './components/forms/application-form/application-form.component';
import { RepositoryFormComponent } from './components/forms/repository-form/repository-form.component';
import { TriggerFormComponent } from './components/forms/trigger-form/trigger-form.component';
import { TriggerConditionFormComponent } from './components/forms/trigger-condition-form/trigger-condition-form.component';
import { TriggerConditionComparisonFormComponent } from './components/forms/trigger-condition-form/comparison-form/comparison-form.component';
import { TriggerConditionTimeFormComponent } from './components/forms/trigger-condition-form/time-form/time-form.component';
import { TriggerActionFormComponent } from './components/forms/trigger-action-form/trigger-action-form.component';

import { DriverFormatPipe } from './pipes/driver-format.pipe';
import { DateFromPipe } from './pipes/date-from.pipe';

const FORM_COMPONENTS: Type<any>[] = [
    SystemFormComponent,
    ModuleFormComponent,
    ZoneFormComponent,
    DriverFormComponent,
    UserFormComponent,
    DomainFormComponent,
    ApplicationFormComponent,
    TriggerFormComponent,
    RepositoryFormComponent,
    TriggerConditionFormComponent,
    TriggerActionFormComponent,
];

const COMPONENTS: Type<any>[] = [
    BaseDirective,
    BaseRootComponent,
    ItemDisplayComponent,
    SearchbarComponent,
    SidebarComponent,
    ...LOGIN_COMPONENTS,
    CronOptionsComponent,
    IconComponent,
    ...FORM_COMPONENTS
];

const PIPES: Type<any>[] = [
    DriverFormatPipe,
    DateFromPipe
];

const ENTRY_COMPONENT: Type<any>[] = [
    ItemSearchFieldComponent,
    SettingsFieldComponent,
    DateFieldComponent,
    TimeFieldComponent,
    ContextMenuComponent,
    SystemExecFieldComponent
];

const MATERIAL_MODULES: any[] = [
    MatButtonModule,
    MatButtonToggleModule,
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
    MatSlideToggleModule,
    MatChipsModule
];

@NgModule({
    declarations: [
        ...COMPONENTS,
        ...PIPES,
        ...ENTRY_COMPONENT,
        TriggerConditionComparisonFormComponent,
        TriggerConditionTimeFormComponent,
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
        ...PIPES,
        ...ENTRY_COMPONENT,
        ...MATERIAL_MODULES
    ],
    entryComponents: [
        ...ENTRY_COMPONENT
    ]
})
export class SharedContentModule {}
