import { SettingsFieldComponent } from './settings-field.component';
import { ItemSearchFieldComponent } from './item-search-field/item-search-field.component';
import { DateFieldComponent } from './date-field/date-field.component';
import { TimeFieldComponent } from './time-field/time-field.component';
import { ImageListFieldComponent } from './image-list-field.component';

import { ExecuteMethodFieldComponent } from './system-exec/execute-method-field.component';
import { SelectModuleComponent } from './system-exec/select-module.component';
import { SelectMethodComponent } from './system-exec/select-method.component';
import { FunctionArgumentComponent } from './system-exec/function-argument.component';

export const CUSTOM_FIELD_COMPONENTS: any[] = [
    SettingsFieldComponent,
    ItemSearchFieldComponent,
    DateFieldComponent,
    TimeFieldComponent,
    ImageListFieldComponent,

    ExecuteMethodFieldComponent,
    SelectModuleComponent,
    SelectMethodComponent,
    FunctionArgumentComponent,
];
