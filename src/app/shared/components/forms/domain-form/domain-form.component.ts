import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EncryptionLevel } from '@acaengine/ts-client';

import { Identity } from 'src/app/shared/utilities/types.utilities';

@Component({
    selector: 'domain-form',
    templateUrl: './domain-form.component.html',
    styleUrls: ['./domain-form.component.scss']
})
export class DomainFormComponent {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;
    /** Levels of encyption available for the system's settings */
    public encryption_levels: Identity[] = [
        { id: EncryptionLevel.None, name: 'None' },
        { id: EncryptionLevel.Support, name: 'Support' },
        { id: EncryptionLevel.Admin, name: 'Admin' },
        { id: EncryptionLevel.NeverDisplay, name: 'Never Display' }
    ];
}
