import { AsyncPipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { form, FormField, submit, validate } from '@angular/forms/signals';

import { PlaceDomain } from '@placeos/ts-client';

import { Clipboard } from '@angular/cdk/clipboard';
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AsyncHandler } from '../common/async-handler.class';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { validateJSONString } from '../common/validation';
import { SettingsFieldComponent } from '../ui/custom-fields/settings-field.component';
import { IconComponent } from '../ui/icon.component';
import { MarkdownPipe } from '../ui/pipes/markdown.pipe';
import { TranslatePipe } from '../ui/translate.pipe';
import { DomainStateService } from './domain-state.service';

@Component({
    selector: 'app-domain-about',
    template: `
        @if (item?.description) {
            <div class="border-base-200 w-full rounded-sm border">
                <h3
                    class="bg-base-200 w-full rounded-sm p-4 text-lg font-medium"
                >
                    {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                </h3>
                <div
                    class="markdown w-full overflow-auto p-4 text-sm"
                    [innerHTML]="item?.description | markdown | async"
                ></div>
            </div>
            <hr class="text-base-300 my-4" />
        }
        @if (item?.email_domains?.length) {
            <div
                class="border-base-200 relative my-2 flex w-1/2 min-w-[20rem] flex-col rounded-sm border p-4"
            >
                <div
                    class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm p-2 text-sm font-medium"
                >
                    {{ 'DOMAINS.EMAIL_DOMAINS' | translate }}
                </div>
                @for (domain of item?.email_domains; track domain) {
                    <button
                        matRipple
                        class="mono hover:bg-base-200 rounded-sm p-2 text-left text-sm"
                        (click)="copyEmailDomain(domain)"
                    >
                        {{ domain }}
                    </button>
                }
            </div>
        }
        <header
            class="bg-base-200 mb-2 flex h-14 w-full items-center justify-between rounded-sm px-2"
        >
            <h3 class="px-2 text-lg font-medium">
                {{ 'COMMON.SETTINGS' | translate }}
            </h3>
            <button
                icon
                default
                matRipple
                [matTooltip]="'COMMON.SAVE_CHANGES' | translate"
                (click)="saveChanges()"
            >
                <icon>save</icon>
            </button>
        </header>
        @if (form) {
            <section>
                <mat-tab-group
                    [(selectedIndex)]="index"
                    class="border-base-300 border-x border-t"
                >
                    <mat-tab [label]="'DOMAINS.SETTINGS_CONFIG' | translate" />
                    <mat-tab
                        [label]="'DOMAINS.SETTINGS_INTERNALS' | translate"
                    />
                </mat-tab-group>
                @if (index !== 1) {
                    <settings-form-field
                        [formField]="form.config"
                        lang="json"
                        [readonly]="false"
                    />
                }
                @if (index === 1) {
                    <settings-form-field
                        [formField]="form.internals"
                        lang="json"
                        [readonly]="false"
                    />
                }
            </section>
        }
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }
        `,
    ],
    imports: [
        SettingsFieldComponent,
        MatTabsModule,
        FormField,
        MatRippleModule,
        IconComponent,
        MatTooltipModule,
        TranslatePipe,
        AsyncPipe,
        MarkdownPipe,
    ],
})
export class DomainAboutComponent extends AsyncHandler {
    private _service = inject(DomainStateService);
    private _clipboard = inject(Clipboard);

    /** Signal model for edit domain settings */
    public readonly formModel = signal({
        config: '',
        internals: '',
    });
    public readonly form = form(this.formModel, (path) => {
        validate(path.config, ({ value }) =>
            validateJSONString({ value: value() } as never)
                ? { kind: 'json', message: 'Invalid JSON' }
                : undefined,
        );
        validate(path.internals, ({ value }) =>
            validateJSONString({ value: value() } as never)
                ? { kind: 'json', message: 'Invalid JSON' }
                : undefined,
        );
    });
    /** Index of the active tab */
    public index: number;

    private readonly _item = this._service.item;
    public get item(): PlaceDomain | null {
        return this._item();
    }

    constructor() {
        super();
        effect(() => {
            if (this._item()) this.loadForm();
        });
    }

    public copyEmailDomain(domain: string) {
        this._clipboard.copy(domain);
        notifySuccess(i18n('DOMAINS.COPIED_EMAIL_DOMAIN'));
    }

    /** Save changes to the settings fields */
    public async saveChanges() {
        await submit(this.form, async () => undefined);
        if (this.form().invalid())
            return notifyError(i18n('DOMAINS.SETTINGS_ERROR'));
        const domain = new PlaceDomain({
            ...this.item,
            config: JSON.parse(this.formModel().config),
            internals: JSON.parse(this.formModel().internals),
        });
        await this._service.update(domain);
        notifySuccess(i18n('DOMAINS.SETTINGS_SAVED'));
    }

    /** Load settings fields for active item */
    private loadForm(): void {
        const item = this.item;
        if (!item) return;
        this.formModel.set({
            internals: JSON.stringify(item.internals, undefined, 4),
            config: JSON.stringify(item.config, undefined, 4),
        });
    }
}
