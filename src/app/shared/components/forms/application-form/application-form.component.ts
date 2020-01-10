import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'application-form',
    templateUrl: './application-form.component.html',
    styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;
}
