import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Identity } from 'src/app/shared/utilities/types.utilities';

@Component({
    selector: 'ldap-source-form',
    templateUrl: './ldap-source-form.component.html',
    styleUrls: ['./ldap-source-form.component.scss']
})
export class LdapSourceFormComponent {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;
    /** List of available authentication schemes */
    public auth_methods: Identity[] = [
        { id: 'plain', name: 'Plain' },
        { id: 'ssl', name: 'SSL' },
        { id: 'tls', name: 'TLS' }
    ];

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.form) {
            console.log('Form:', this.form);
        }
    }
}
