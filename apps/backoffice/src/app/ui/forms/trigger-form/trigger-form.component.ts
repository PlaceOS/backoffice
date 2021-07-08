import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'trigger-form',
    templateUrl: './trigger-form.component.html',
    styleUrls: ['./trigger-form.component.scss']
})
export class TriggerFormComponent {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;
}
