import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EncryptionLevel } from '@placeos/ts-client';

import { Identity } from 'src/app/common/types';

@Component({
    selector: 'domain-form',
    templateUrl: './domain-form.component.html',
    styleUrls: ['./domain-form.component.scss']
})
export class DomainFormComponent {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;
}
