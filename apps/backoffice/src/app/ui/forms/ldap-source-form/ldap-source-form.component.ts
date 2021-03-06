import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Identity } from 'apps/backoffice/src/app/common/types';

@Component({
    selector: 'ldap-source-form',
    templateUrl: './ldap-source-form.component.html',
    styleUrls: ['./ldap-source-form.component.scss'],
})
export class LdapSourceFormComponent {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;
    /** List of available authentication schemes */
    public auth_methods: Identity[] = [
        { id: 'plain', name: 'Plain' },
        { id: 'ssl', name: 'SSL' },
        { id: 'tls', name: 'TLS' },
    ];
}
