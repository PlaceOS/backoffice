import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'system-trigger-form',
  templateUrl: './system-trigger-form.component.html',
  styleUrls: ['./system-trigger-form.component.scss']
})
export class SystemTriggerFormComponent {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;
}
