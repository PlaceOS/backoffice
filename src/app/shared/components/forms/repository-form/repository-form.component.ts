import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Identity } from 'src/app/shared/utilities/types.utilities';
import { EngineRepositoryType } from '@acaprojects/ts-composer';

@Component({
    selector: 'repository-form',
    templateUrl: './repository-form.component.html',
    styleUrls: ['./repository-form.component.scss']
})
export class RepositoryFormComponent {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;
    /** List of available types of repositories */
    public repo_types: Identity[] = [
        { id: EngineRepositoryType.Driver, name: 'Driver' },
        { id: EngineRepositoryType.Interface, name: 'Interface' }
    ];
}
