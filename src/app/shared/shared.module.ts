
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { ADropdownsModule } from '@acaprojects/ngx-dropdown';
import { ASpinnerModule } from '@acaprojects/ngx-spinners';
import { AButtonsModule } from '@acaprojects/ngx-buttons';
import { APipesModule } from '@acaprojects/ngx-pipes';
import { AOverlayModule } from '@acaprojects/ngx-overlays';
import { ADynamicFormsModule } from '@acaprojects/ngx-dynamic-forms';
import { ACustomEventsModule } from '@acaprojects/ngx-custom-events';
import { ACheckboxModule } from '@acaprojects/ngx-checkbox';
import { ATabsModule } from '@acaprojects/ngx-tabs';

import { BaseDirective } from './globals/base.directive';
import { CustomDropdownFieldComponent } from './components/custom-fields/item-dropdown-field/item-dropdown-field.component';
import { CustomSettingsFieldComponent } from './components/custom-fields/settings-field/settings-field.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { ItemDisplayComponent } from './components/item-display/item-display.component';
import { LOGIN_COMPONENTS } from './components/login';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SystemExecComponent } from './components/system-exec/system-exec.component';
import { SettingsDisplayComponent } from './components/settings-display/settings-display.component';
import { EngineItemDropdownComponent } from './components/item-dropdown/item-dropdown.component';
import { CronOptionsComponent } from './components/cron-options/cron-options.component';
import { BaseRootComponent } from './components/base-root.component';
import { IconComponent } from './components/icon/icon.component';
import { RouterModule } from '@angular/router';

const COMPONENTS: Type<any>[] = [
    BaseDirective,
    BaseRootComponent,
    ItemDisplayComponent,
    SearchbarComponent,
    SidebarComponent,
    SystemExecComponent,
    SettingsDisplayComponent,
    ...LOGIN_COMPONENTS,
    EngineItemDropdownComponent,
    CronOptionsComponent,
    IconComponent
];

const ENTRY_COMPONENT: Type<any>[] = [
    CustomDropdownFieldComponent,
    CustomSettingsFieldComponent,
    ContextMenuComponent,
]

@NgModule({
    declarations: [
        ...COMPONENTS,
        ...ENTRY_COMPONENT,
    ],
    imports: [
        CommonModule,
        ADropdownsModule,
        ASpinnerModule,
        AButtonsModule,
        AOverlayModule,
        FormsModule,
        APipesModule,
        ReactiveFormsModule,
        ACustomEventsModule,
        ADynamicFormsModule,
        ATabsModule,
        ScrollingModule,
        RouterModule.forChild([])
    ],
    exports: [
        ADropdownsModule,
        ASpinnerModule,
        AButtonsModule,
        APipesModule,
        AOverlayModule,
        ACustomEventsModule,
        ADynamicFormsModule,
        ACheckboxModule,
        ATabsModule,
        ...COMPONENTS,
        ...ENTRY_COMPONENT
    ],
    entryComponents: [
        ...COMPONENTS,
        ...ENTRY_COMPONENT
    ]
})
export class SharedContentModule {}
