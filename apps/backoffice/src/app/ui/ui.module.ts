import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { BindingDirective } from './binding/binding.directive';
import { ContextMenuComponent } from './context-menu.component';
import { DateFieldComponent } from './custom-fields/date-field/date-field.component';
import { ImageListFieldComponent } from './custom-fields/image-list-field.component';
import { ItemSearchFieldComponent } from './custom-fields/item-search-field/item-search-field.component';
import { ObjectListFieldComponent } from './custom-fields/object-list-field/object-list-field.component';
import { SettingsFieldComponent } from './custom-fields/settings-field/settings-field.component';
import { SystemExecFieldComponent } from './custom-fields/system-exec-field/system-exec-field.component';
import { TimeFieldComponent } from './custom-fields/time-field/time-field.component';
import { DebugOutputComponent } from './debug-output.component';
import { ExtensionOutletComponent } from './extension-outlet.component';
import { ApplicationFormComponent } from './forms/application-form/application-form.component';
import { BrokerFormComponent } from './forms/broker-form/broker-form.component';
import { DomainFormComponent } from './forms/domain-form/domain-form.component';
import { DriverFormComponent } from './forms/driver-form/driver-form.component';
import { LdapSourceFormComponent } from './forms/ldap-source-form/ldap-source-form.component';
import { ModuleFormComponent } from './forms/module-form/module-form.component';
import { OauthSourceFormComponent } from './forms/oauth-source-form/oauth-source-form.component';
import { RepositoryFormComponent } from './forms/repository-form/repository-form.component';
import { SamlSourceFormComponent } from './forms/saml-source-form/saml-source-form.component';
import { SettingsFormComponent } from './forms/settings-form/settings-form.component';
import { SystemFormComponent } from './forms/system-form/system-form.component';
import { SystemTriggerFormComponent } from './forms/system-trigger-form/system-trigger-form.component';
import { TriggerActionFormComponent } from './forms/trigger-action-form/trigger-action-form.component';
import { TriggerConditionComparisonFormComponent } from './forms/trigger-condition-form/comparison-form/comparison-form.component';
import { TriggerConditionTimeFormComponent } from './forms/trigger-condition-form/time-form/time-form.component';
import { TriggerConditionFormComponent } from './forms/trigger-condition-form/trigger-condition-form.component';
import { TriggerFormComponent } from './forms/trigger-form/trigger-form.component';
import { UserFormComponent } from './forms/user-form/user-form.component';
import { ZoneFormComponent } from './forms/zone-form/zone-form.component';
import { IconComponent } from './icon/icon.component';
import { ItemDisplayComponent } from './item-display/item-display.component';
import { DateFromPipe } from './pipes/date-from.pipe';
import { DriverFormatPipe } from './pipes/driver-format.pipe';
import { FormatListPipe } from './pipes/format-list.pipe';
import { SafePipe } from './safe.pipe';
import { SanitizePipe } from './sanitise.pipe';
import { SearchbarComponent } from './searchbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TerminalComponent } from './terminal.component';
import { UnauthorisedComponent } from './unauthorised.component';
import { UploadListComponent } from './upload-list.component';
import { BasicLineGraphComponent } from './basic-line-graph.component';

import { ExecuteMethodFieldComponent } from './custom-fields/system-exec/execute-method-field.component';
import { SelectModuleComponent } from './custom-fields/system-exec/select-module.component';
import { SelectMethodComponent } from './custom-fields/system-exec/select-method.component';
import { FunctionArgumentComponent } from './custom-fields/system-exec/function-argument.component';

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
    ExtensionOutletComponent,

    ExecuteMethodFieldComponent,
    SelectModuleComponent,
    SelectMethodComponent,
    FunctionArgumentComponent,
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
    BasicLineGraphComponent,
];

const PIPES: Type<any>[] = [
    DriverFormatPipe,
    DateFromPipe,
    FormatListPipe,
    SafePipe,
    SanitizePipe,
];

const ENTRY_COMPONENT: Type<any>[] = [
    ItemSearchFieldComponent,
    SettingsFieldComponent,
    DateFieldComponent,
    TimeFieldComponent,
    ContextMenuComponent,
    SystemExecFieldComponent,
    ImageListFieldComponent,
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
    CdkTableModule,
    MatDatepickerModule,
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
        ReactiveFormsModule,
        ScrollingModule,
        ...MATERIAL_MODULES,
        RouterModule.forChild([]),
    ],
    exports: [...COMPONENTS, ...PIPES, ...ENTRY_COMPONENT, ...MATERIAL_MODULES],
})
export class SharedContentModule {}
