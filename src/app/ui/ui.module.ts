
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { RouterModule } from '@angular/router';

import { APipesModule } from '@acaprojects/ngx-pipes';
import { ADatePickerModule } from '@acaprojects/ngx-date-picker';

import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkTableModule } from '@angular/cdk/table';

import { ContextMenuComponent } from '../shared/components/context-menu/context-menu.component';
import { ItemDisplayComponent } from '../shared/components/item-display/item-display.component';
import { SearchbarComponent } from '../shared/components/searchbar/searchbar.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { IconComponent } from '../shared/components/icon/icon.component';
import { TerminalComponent } from '../shared/components/terminal/terminal.component';

import { SettingsFieldComponent } from '../shared/components/custom-fields/settings-field/settings-field.component';
import { ItemSearchFieldComponent } from '../shared/components/custom-fields/item-search-field/item-search-field.component';
import { DateFieldComponent } from '../shared/components/custom-fields/date-field/date-field.component';
import { TimeFieldComponent } from '../shared/components/custom-fields/time-field/time-field.component';
import { SystemExecFieldComponent } from '../shared/components/custom-fields/system-exec-field/system-exec-field.component';

import { SystemFormComponent } from '../shared/components/forms/system-form/system-form.component';
import { ModuleFormComponent } from '../shared/components/forms/module-form/module-form.component';
import { ZoneFormComponent } from '../shared/components/forms/zone-form/zone-form.component';
import { DriverFormComponent } from '../shared/components/forms/driver-form/driver-form.component';
import { UserFormComponent } from '../shared/components/forms/user-form/user-form.component';
import { DomainFormComponent } from '../shared/components/forms/domain-form/domain-form.component';
import { ApplicationFormComponent } from '../shared/components/forms/application-form/application-form.component';
import { RepositoryFormComponent } from '../shared/components/forms/repository-form/repository-form.component';
import { TriggerFormComponent } from '../shared/components/forms/trigger-form/trigger-form.component';
import { TriggerConditionFormComponent } from '../shared/components/forms/trigger-condition-form/trigger-condition-form.component';
import { TriggerConditionComparisonFormComponent } from '../shared/components/forms/trigger-condition-form/comparison-form/comparison-form.component';
import { TriggerConditionTimeFormComponent } from '../shared/components/forms/trigger-condition-form/time-form/time-form.component';
import { TriggerActionFormComponent } from '../shared/components/forms/trigger-action-form/trigger-action-form.component';
import { SystemTriggerFormComponent } from '../shared/components/forms/system-trigger-form/system-trigger-form.component';

import { DriverFormatPipe } from './pipes/driver-format.pipe';
import { DateFromPipe } from './pipes/date-from.pipe';
import { FormatListPipe } from './pipes/format-list.pipe';
import { OauthSourceFormComponent } from '../shared/components/forms/oauth-source-form/oauth-source-form.component';
import { LdapSourceFormComponent } from '../shared/components/forms/ldap-source-form/ldap-source-form.component';
import { SamlSourceFormComponent } from '../shared/components/forms/saml-source-form/saml-source-form.component';
import { ObjectListFieldComponent } from '../shared/components/custom-fields/object-list-field/object-list-field.component';
import { DebugOutputComponent } from '../shared/components/debug-output/debug-output.component';
import { SettingsFormComponent } from '../shared/components/forms/settings-form/settings-form.component';
import { BrokerFormComponent } from '../shared/components/forms/broker-form/broker-form.component';
import { UnauthorisedComponent } from '../shared/components/unauthorised/unauthorised.component';
import { UploadListComponent } from '../shared/components/upload-list/upload-list.component';
import { BindingDirective } from './binding/binding.directive';

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
    SystemTriggerFormComponent,
    OauthSourceFormComponent,
    LdapSourceFormComponent,
    SamlSourceFormComponent,
    SettingsFormComponent,
    BrokerFormComponent,
];

const COMPONENTS: Type<any>[] = [
    ItemDisplayComponent,
    SearchbarComponent,
    SidebarComponent,
    IconComponent,
    ...FORM_COMPONENTS,
    TerminalComponent,
    DebugOutputComponent,
    UnauthorisedComponent,
    UploadListComponent,
    BindingDirective,
];

const PIPES: Type<any>[] = [
    DriverFormatPipe,
    DateFromPipe,
    FormatListPipe,
];

const ENTRY_COMPONENT: Type<any>[] = [
    ItemSearchFieldComponent,
    SettingsFieldComponent,
    DateFieldComponent,
    TimeFieldComponent,
    ContextMenuComponent,
    SystemExecFieldComponent,
    ObjectListFieldComponent,
];

const MATERIAL_MODULES: any[] = [
    MatButtonModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatTooltipModule,
    MatMenuModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatTabsModule,
    MatCardModule,
    MatExpansionModule,
    CdkTableModule
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
        FormsModule,
        APipesModule,
        ReactiveFormsModule,
        ADatePickerModule,
        ScrollingModule,
        ...MATERIAL_MODULES,
        RouterModule.forChild([])
    ],
    exports: [
        APipesModule,
        ADatePickerModule,
        ...COMPONENTS,
        ...PIPES,
        ...ENTRY_COMPONENT,
        ...MATERIAL_MODULES
    ]
})
export class SharedContentModule {}
