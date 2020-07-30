import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { EngineDomain } from '@placeos/ts-client';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { ApplicationService } from 'src/app/services/app.service';
import { validateJSONString } from 'src/app/shared/utilities/validation.utilities';

@Component({
    selector: 'app-domain-about',
    templateUrl: './domain-about.component.html',
    styleUrls: ['./domain-about.component.scss'],
})
export class DomainAboutComponent extends BaseDirective implements OnInit {
    /** Domain to display details for */
    public item: EngineDomain;
    /** Form group for edit domain settings */
    public form: FormGroup;
    /** Index of the active tab */
    public index: number;

    constructor(private _service: ApplicationService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.listen('BACKOFFICE.active_item').subscribe((item) => {
                this.item = item;
                this.loadForm();
            })
        );
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
                    const domain = new EngineDomain({
                        ...this.item,
                        config: JSON.parse(this.form.value.config),
                        internals: JSON.parse(this.form.value.internals),
                    });
                    const item = await domain.save();
                    this.item = item as any;
                }
            },
            3000
        );
    }
}
