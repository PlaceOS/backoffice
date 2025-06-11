import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PortalModule } from '@angular/cdk/portal';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

import { BasicLineGraphComponent } from './basic-line-graph.component';
import { BindingDirective } from './binding.directive';
import { ContextMenuComponent } from './context-menu.component';
import { DateFieldComponent } from './custom-fields/date-field.component';
import { ImageListFieldComponent } from './custom-fields/image-list-field.component';
import { ItemSearchFieldComponent } from './custom-fields/item-search-field.component';
import { ObjectListFieldComponent } from './custom-fields/object-list-field.component';
import { RichTextInputComponent } from './custom-fields/rich-text-input.component';
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
import { SettingsFormComponent } from './forms/settings-form.component';
import { SystemFormComponent } from './forms/system-form.component';
import { SystemTriggerFormComponent } from './forms/system-trigger-form.component';
import { TriggerConditionComparisonFormComponent } from './forms/trigger-condition-form/comparison-form.component';
import { TriggerConditionTimeFormComponent } from './forms/trigger-condition-form/time-form.component';
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
import { TerminalComponent } from './terminal.component';
import { UnauthorisedComponent } from './unauthorised.component';
import { UploadListComponent } from './upload-list.component';

import { AuthenticatedImageDirective } from './authenticated-image.directive';
import { CounterComponent } from './counter.component';
import { ActionFieldComponent } from './custom-fields/action-field.component';
import { CronInputFieldComponent } from './custom-fields/cron-input-field.component';
import { ExecuteMethodFieldComponent } from './custom-fields/system-exec/execute-method-field.component';
import { FunctionArgumentComponent } from './custom-fields/system-exec/function-argument.component';
import { SelectMethodComponent } from './custom-fields/system-exec/select-method.component';
import { SelectModuleComponent } from './custom-fields/system-exec/select-module.component';
import { CustomTooltipComponent } from './custom-tooltip.component';
import { DiffViewerComponent } from './diff-viewer.component';
import { TriggerActionModalComponent } from './forms/trigger-action-modal.component';
import { TriggerConditionModalComponent } from './forms/trigger-condition-modal.component';
import { FullscreenModalShellComponent } from './fullscreen-modal-shell.component';
import { GlobalBannerComponent } from './global-banner.component';
import { ItemDetailsComponent } from './item-details.component';
import { ItemSelectionComponent } from './item-selection.component';
import { ItemSidebarComponent } from './item-sidebar.component';
import { ItemTablistComponent } from './item-tablist.component';
import { MetadataDisplayComponent } from './metadata-display.component';
import { ModuleRuntimeErrorsModalComponent } from './module-runtime-errors.modal';
import { NewTerminalComponent } from './new-terminal.component';
import { SettingsFormatPipe } from './pipes/settings-format.pipe';
import { UserPipe } from './pipes/user.pipe';
import { ReorderItemsModalComponent } from './reorder-items-modal.component';
import { SettingsHistoryViewComponent } from './settings-history-view.component';
import { SettingsToggleComponent } from './settings-toggle.component';
import { SidebarMenuComponent } from './sidebar-menu.component';
import { SimpleTableComponent } from './simple-table.component';
import { TranslatePipe } from './translate.pipe';
import { UploadPermissionsModalComponent } from './upload-permissions-modal.component';
import { UserAvatarComponent } from './user-avatar.component';
import { UserMenuTooltipComponent } from './user-menu-tooltip.component';

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
    NewTerminalComponent,
    RichTextInputComponent,
    SettingsToggleComponent,
    CronInputFieldComponent,
];

const COMPONENTS: Type<any>[] = [
    SearchbarComponent,
    UserAvatarComponent,
    ...FORM_COMPONENTS,
    TerminalComponent,
    DebugOutputComponent,
    UnauthorisedComponent,
    UploadListComponent,
    BindingDirective,
    AuthenticatedImageDirective,
    BasicLineGraphComponent,
    DiffViewerComponent,
    SettingsHistoryViewComponent,
    MetadataDisplayComponent,
    TriggerConditionModalComponent,
    TriggerActionModalComponent,

    SidebarMenuComponent,
    ItemSelectionComponent,
    UserMenuTooltipComponent,
    ItemDetailsComponent,
    ItemTablistComponent,
    UploadPermissionsModalComponent,
    GlobalBannerComponent,
    ModuleRuntimeErrorsModalComponent,

    SimpleTableComponent,
    ReorderItemsModalComponent,
    FullscreenModalShellComponent,
    CounterComponent,
];

const PIPES: Type<any>[] = [
    DriverFormatPipe,
    DateFromPipe,
    FormatListPipe,
    SafePipe,
    SanitizePipe,
    SettingsFormatPipe,
    UserPipe,
];

const ENTRY_COMPONENT: Type<any>[] = [
    ItemSearchFieldComponent,
    SettingsFieldComponent,
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
    MatChipsModule,
    MatRippleModule,
    PortalModule,
    DragDropModule,
    CdkTableModule,
];

const STANDALONE_COMPONENTS: any[] = [
    IconComponent,
    DateFieldComponent,
    TranslatePipe,
    CustomTooltipComponent,
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
        ...STANDALONE_COMPONENTS,
    ],
    exports: [
        ...COMPONENTS,
        ...PIPES,
        ...ENTRY_COMPONENT,
        ...MATERIAL_MODULES,
        ...STANDALONE_COMPONENTS,
    ],
})
export class SharedContentModule {}
