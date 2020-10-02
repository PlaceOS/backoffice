
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

import { ContextMenuComponent } from './context-menu/context-menu.component';
import { ItemDisplayComponent } from './item-display/item-display.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IconComponent } from './icon/icon.component';
import { TerminalComponent } from './terminal/terminal.component';

import { SettingsFieldComponent } from './custom-fields/settings-field/settings-field.component';
import { ItemSearchFieldComponent } from './custom-fields/item-search-field/item-search-field.component';
import { DateFieldComponent } from './custom-fields/date-field/date-field.component';
import { TimeFieldComponent } from './custom-fields/time-field/time-field.component';
import { SystemExecFieldComponent } from './custom-fields/system-exec-field/system-exec-field.component';

import { SystemFormComponent } from './forms/system-form/system-form.component';
import { ModuleFormComponent } from './forms/module-form/module-form.component';
import { ZoneFormComponent } from './forms/zone-form/zone-form.component';
import { DriverFormComponent } from './forms/driver-form/driver-form.component';
import { UserFormComponent } from './forms/user-form/user-form.component';
import { DomainFormComponent } from './forms/domain-form/domain-form.component';
import { ApplicationFormComponent } from './forms/application-form/application-form.component';
import { RepositoryFormComponent } from './forms/repository-form/repository-form.component';
import { TriggerFormComponent } from './forms/trigger-form/trigger-form.component';
import { TriggerConditionFormComponent } from './forms/trigger-condition-form/trigger-condition-form.component';
import { TriggerConditionComparisonFormComponent } from './forms/trigger-condition-form/comparison-form/comparison-form.component';
import { TriggerConditionTimeFormComponent } from './forms/trigger-condition-form/time-form/time-form.component';
import { TriggerActionFormComponent } from './forms/trigger-action-form/trigger-action-form.component';
import { SystemTriggerFormComponent } from './forms/system-trigger-form/system-trigger-form.component';

import { DriverFormatPipe } from './pipes/driver-format.pipe';
import { DateFromPipe } from './pipes/date-from.pipe';
import { FormatListPipe } from './pipes/format-list.pipe';
import { OauthSourceFormComponent } from './forms/oauth-source-form/oauth-source-form.component';
import { LdapSourceFormComponent } from './forms/ldap-source-form/ldap-source-form.component';
import { SamlSourceFormComponent } from './forms/saml-source-form/saml-source-form.component';
import { ObjectListFieldComponent } from './custom-fields/object-list-field/object-list-field.component';
import { DebugOutputComponent } from './debug-output/debug-output.component';
import { SettingsFormComponent } from './forms/settings-form/settings-form.component';
import { BrokerFormComponent } from './forms/broker-form/broker-form.component';
import { UnauthorisedComponent } from './unauthorised/unauthorised.component';
import { UploadListComponent } from './upload-list/upload-list.component';
import { BindingDirective } from './binding/binding.directive';
import { ExtensionOutletComponent } from './extension-outlet.component';

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
    ExtensionOutletComponent
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
