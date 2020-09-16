import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { PlaceDomain, updateDomain } from '@placeos/ts-client';

import { BaseClass } from 'src/app/common/base.class';
import { validateJSONString } from 'src/app/shared/utilities/validation.utilities';

@Component({
    selector: 'app-domain-about',
    templateUrl: './domain-about.component.html',
    styleUrls: ['./domain-about.component.scss'],
})
export class DomainAboutComponent extends BaseClass {
    /** Domain to display details for */
    @Input() public item: PlaceDomain;
    /** Form group for edit domain settings */
    public form: FormGroup;
    /** Index of the active tab */
    public index: number;

    constructor() {
        super();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.item && this.item) {
            this.loadForm();
        }
    }

    /** Load form fields for active item */
    private loadForm(): void {
        this.form = new FormGroup({
            config: new FormControl(JSON.stringify(this.item.config, undefined, 4), [
                validateJSONString,
            ]),
            internals: new FormControl(JSON.stringify(this.item.internals, undefined, 4), [
                validateJSONString,
            ]),
        });
        this.subscription(
            'form',
            this.form.valueChanges.subscribe(() => this.saveChanges())
        );
    }

    /** Save changes to the form fields */
    private saveChanges(): void {
        this.timeout(
            'save',
            async () => {
                if (this.form.valid) {
                    const domain = new PlaceDomain({
                        ...this.item,
                        config: JSON.parse(this.form.value.config),
                        internals: JSON.parse(this.form.value.internals),
                    });
                    const item = await updateDomain(domain.id, domain).toPromise();
                    this.item = item as any;
                }
            },
            3000
        );
    }
}
