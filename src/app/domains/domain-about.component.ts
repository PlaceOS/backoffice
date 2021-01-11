import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { PlaceDomain } from '@placeos/ts-client';

import { BaseClass } from 'src/app/common/base.class';
import { validateJSONString } from 'src/app/common/validation';
import { DomainStateService } from './domain-state.service';

@Component({
    selector: 'app-domain-about',
    template: `
        <h3 class="text-lg font-medium mb-2">Settings</h3>
        <section *ngIf="form" [formGroup]="form">
            <mat-tab-group [(selectedIndex)]="index">
                <mat-tab label="Config"> </mat-tab>
                <mat-tab label="Internals"> </mat-tab>
            </mat-tab-group>
            <settings-form-field
                *ngIf="index !== 1"
                formControlName="config"
                lang="json"
                [readonly]="false"
            ></settings-form-field>
            <settings-form-field
                *ngIf="index === 1"
                formControlName="internals"
                lang="json"
                [readonly]="false"
            ></settings-form-field>
        </section>
    `,
    styles: [
        `
            :host {
                padding: 1rem;
                height: 100%;
                width: 100%;
            }
        `,
    ],
})
export class DomainAboutComponent extends BaseClass implements OnInit {
    /** Form group for edit domain settings */
    public form: FormGroup;
    /** Index of the active tab */
    public index: number;

    public get item(): PlaceDomain {
        return this._service.active_item as any;
    }

    constructor(private _service: DomainStateService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.item.subscribe((_) => this.loadForm())
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
                    const domain = new PlaceDomain({
                        ...this.item,
                        config: JSON.parse(this.form.value.config),
                        internals: JSON.parse(this.form.value.internals),
                    });
                    this._service.update(domain);
                }
            },
            3000
        );
    }
}
