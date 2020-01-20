import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EngineSystem } from '@acaprojects/ts-composer';

import { Identity } from 'src/app/shared/utilities/types.utilities';

@Component({
    selector: 'trigger-condition-form',
    templateUrl: './trigger-condition-form.component.html',
    styleUrls: ['./trigger-condition-form.component.scss']
})
export class TriggerConditionFormComponent {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;
    /** Systems used for templating the status variables */
    @Input() public system: EngineSystem;

    /** Types of trigger conditions */
    public condition_types: Identity[] = [
        { id: 'compare', name: 'Compare values' },
        { id: 'time', name: 'Particular time' }
    ];
}
