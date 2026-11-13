import { AsyncPipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { form, FormField, submit, validate } from '@angular/forms/signals';

import { PlaceDomain } from '@placeos/ts-client';

import { Clipboard } from '@angular/cdk/clipboard';
import { readError } from '../common/errors';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { validateJSONString } from '../common/validation';
import { TabsComponent } from '../ui/controls/tabs.component';
import { TooltipDirective } from '../ui/controls/tooltip.directive';
import { SettingsFieldComponent } from '../ui/custom-fields/settings-field.component';
import { IconComponent } from '../ui/icon.component';
import { MarkdownPipe } from '../ui/pipes/markdown.pipe';
import { TranslatePipe } from '../ui/translate.pipe';
import { DomainStateService } from './domain-state.service';

@Component({
    selector: 'app-domain-about',
    template: `
        <div class="h-full w-full overflow-auto p-4">
            @if (item?.description) {
                <div class="border-base-200 w-full rounded-sm border">
                    <h3
                        class="bg-base-200 w-full rounded-sm p-4 text-lg font-medium"
                    >
                        {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                    </h3>
                    <div
                        class="markdown selectable w-full overflow-auto p-4 text-sm"
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
                            ripple
                            class="mono hover:bg-base-200 rounded-sm p-2 text-left text-sm select-text"
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
                    ripple
                    [appTooltip]="'COMMON.SAVE_CHANGES' | translate"
                    [disabled]="saving()"
                    (click)="saveChanges()"
                >
                    <icon>save</icon>
                </button>
            </header>
            @if (form) {
                <section>
                    <app-tabs
                        class="border-base-300 border-x border-t"
                        [labels]="[
                            'DOMAINS.SETTINGS_CONFIG' | translate,
                            'DOMAINS.SETTINGS_INTERNALS' | translate,
                        ]"
                        [(selectedIndex)]="index"
                    />
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
        </div>
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
        TooltipDirective,
        SettingsFieldComponent,
        TabsComponent,
        FormField,
        IconComponent,
        TranslatePipe,
        AsyncPipe,
        MarkdownPipe,
    ],
})
export class DomainAboutComponent {
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
    /** Whether a settings save is in flight */
    public readonly saving = signal(false);
    /** Index of the active tab */
    public index = 0;

    private readonly _item = this._service.item;
    public get item(): PlaceDomain | null {
        return this._item();
    }

    constructor() {
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
        if (this.saving()) return;
        await submit(this.form, async () => undefined);
        if (this.form().invalid())
            return notifyError(i18n('DOMAINS.SETTINGS_ERROR'));
        this.saving.set(true);
        try {
            const { config, internals } = this.formModel();
            // An empty editor is valid and means no settings
            const domain = new PlaceDomain({
                ...this.item,
                config: JSON.parse(config || '{}'),
                internals: JSON.parse(internals || '{}'),
            });
            await this._service.update(domain);
            notifySuccess(i18n('DOMAINS.SETTINGS_SAVED'));
        } catch (err) {
            notifyError(
                i18n('DOMAINS.SAVE_ERROR', { error: await readError(err) }),
            );
        } finally {
            this.saving.set(false);
        }
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
