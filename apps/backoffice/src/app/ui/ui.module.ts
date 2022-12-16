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
import { BindingDirective } from './binding.directive';
import { ContextMenuComponent } from './context-menu.component';
import { DateFieldComponent } from './custom-fields/date-field.component';
import { ImageListFieldComponent } from './custom-fields/image-list-field.component';
import { ItemSearchFieldComponent } from './custom-fields/item-search-field.component';
import { ObjectListFieldComponent } from './custom-fields/object-list-field.component';
import { SettingsFieldComponent } from './custom-fields/settings-field.component';
import { TimeFieldComponent } from './custom-fields/time-field.component';
import { DebugOutputComponent } from './debug-output.component';
import { ExtensionOutletComponent } from './extension-outlet.component';
import { ApplicationFormComponent } from './forms/application-form.component';
import { BrokerFormComponent } from './forms/broker-form.component';
import { DomainFormComponent } from './forms/domain-form.component';
import { DriverFormComponent } from './forms/driver-form/driver-form.component';
import { LdapSourceFormComponent } from './forms/ldap-source-form.component';
import { ModuleFormComponent } from './forms/module-form.component';
import { OauthSourceFormComponent } from './forms/oauth-source-form.component';
import { RepositoryFormComponent } from './forms/repository-form.component';
import { SamlSourceFormComponent } from './forms/saml-source-form.component';
import { SettingsFormComponent } from './forms/settings-form/settings-form.component';
import { SystemFormComponent } from './forms/system-form.component';
import { SystemTriggerFormComponent } from './forms/system-trigger-form.component';
import { TriggerActionFormComponent } from './forms/trigger-action-form.component';
import { TriggerConditionComparisonFormComponent } from './forms/trigger-condition-form/comparison-form/comparison-form.component';
import { TriggerConditionTimeFormComponent } from './forms/trigger-condition-form/time-form/time-form.component';
import { TriggerConditionFormComponent } from './forms/trigger-condition-form/trigger-condition-form.component';
import { TriggerFormComponent } from './forms/trigger-form.component';
import { UserFormComponent } from './forms/user-form.component';
import { ZoneFormComponent } from './forms/zone-form.component';
import { IconComponent } from './icon.component';
import { DateFromPipe } from './pipes/date-from.pipe';
import { DriverFormatPipe } from './pipes/driver-format.pipe';
import { FormatListPipe } from './pipes/format-list.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { SanitizePipe } from './pipes/sanitise.pipe';
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
import { ActionFieldComponent } from './custom-fields/action-field.component';
import { DiffViewerComponent } from './diff-viewer.component';
import { SettingsHistoryViewComponent } from './settings-history-view.component';
import { SettingsFormatPipe } from './pipes/settings-format.pipe';
import { UserPipe } from './pipes/user.pipe';
import { MetadataDisplayComponent } from './metadata-display.component';
import { SidebarMenuComponent } from './sidebar-menu.component';
import { ItemSelectionComponent } from './item-selection.component';
import { MatRippleModule } from '@angular/material/core';
import { CustomTooltipComponent } from './custom-tooltip.component';
import { UserMenuTooltipComponent } from './user-menu-tooltip.component';
import { PortalModule } from '@angular/cdk/portal';
import { ItemDetailsComponent } from './item-details.component';
import { ItemTablistComponent } from './item-tablist.component';
import { ItemSidebarComponent } from './item-sidebar.component';
import { NewTerminalComponent } from './new-terminal.component';

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
    ActionFieldComponent,

    ExecuteMethodFieldComponent,
    SelectModuleComponent,
    SelectMethodComponent,
    FunctionArgumentComponent,
    ItemSidebarComponent,
    NewTerminalComponent
];

const COMPONENTS: Type<any>[] = [
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
    DiffViewerComponent,
    SettingsHistoryViewComponent,
    MetadataDisplayComponent,

    SidebarMenuComponent,
    ItemSelectionComponent,
    CustomTooltipComponent,
    UserMenuTooltipComponent,
    ItemDetailsComponent,
    ItemTablistComponent
];

const PIPES: Type<any>[] = [
    DriverFormatPipe,
    DateFromPipe,
    FormatListPipe,
    SafePipe,
    SanitizePipe,
    SettingsFormatPipe,
    UserPipe
];

const ENTRY_COMPONENT: Type<any>[] = [
    ItemSearchFieldComponent,
    SettingsFieldComponent,
    DateFieldComponent,
    TimeFieldComponent,
    ContextMenuComponent,
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
    MatRippleModule,
    PortalModule
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
