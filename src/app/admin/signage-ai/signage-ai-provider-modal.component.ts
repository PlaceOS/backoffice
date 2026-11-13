import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, computed, inject, signal } from '@angular/core';
import { form, FormField, required, submit } from '@angular/forms/signals';
import { readError } from '../../common/errors';
import { i18n } from '../../common/locale.service';
import { notifyError, notifySuccess } from '../../common/notifications';
import { FormFieldComponent } from '../../ui/controls/form-field.component';
import { OptionComponent } from '../../ui/controls/option.component';
import { SelectComponent } from '../../ui/controls/select.component';
import { FullscreenModalShellComponent } from '../../ui/fullscreen-modal-shell.component';
import { SettingsToggleComponent } from '../../ui/settings-toggle.component';
import { TranslatePipe } from '../../ui/translate.pipe';
import {
    saveSignageAIProvider,
    SignageAIProvider,
    SignageAIProviderType,
} from './signage-ai.fn';

type SignageAICredentialField =
    | 'api_key'
    | 'deployment'
    | 'api_version'
    | 'project_id'
    | 'client_email'
    | 'private_key';

const SIGNAGE_AI_CREDENTIAL_FIELDS: Record<
    SignageAIProviderType,
    readonly SignageAICredentialField[]
> = {
    OPENAI: ['api_key'],
    AZURE_OPENAI: ['api_key', 'deployment', 'api_version'],
    GOOGLE_VERTEX: ['project_id', 'client_email', 'private_key'],
};

@Component({
    selector: 'app-signage-ai-provider-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (item?.id ? 'ADMIN.AI_PROVIDER_EDIT' : 'ADMIN.AI_PROVIDER_NEW')
                    | translate
            "
            [loading]="loading()"
            (save)="save()"
        >
            <form class="w-full">
                <div class="flex flex-col">
                    <label for="ai-name">{{
                        'ADMIN.AI_PROVIDER_NAME' | translate
                    }}</label>
                    <app-form-field>
                        <input id="ai-name" [formField]="form.name" />
                        <div error>
                            {{ 'ADMIN.AI_PROVIDER_NAME_REQUIRED' | translate }}
                        </div>
                    </app-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="ai-provider" id="ai-provider-label">{{
                        'ADMIN.AI_PROVIDER_VENDOR' | translate
                    }}</label>
                    <app-form-field>
                        <app-select
                            id="ai-provider"
                            aria-labelledby="ai-provider-label"
                            [formField]="form.provider"
                        >
                            <app-option value="OPENAI">OpenAI</app-option>
                            <app-option value="AZURE_OPENAI"
                                >Azure OpenAI</app-option
                            >
                            <app-option value="GOOGLE_VERTEX"
                                >Google (Vertex)</app-option
                            >
                        </app-select>
                    </app-form-field>
                </div>

                @if (is_google()) {
                    <div class="flex flex-col">
                        <label for="ai-project-id">{{
                            'ADMIN.AI_PROVIDER_PROJECT' | translate
                        }}</label>
                        <app-form-field>
                            <input
                                id="ai-project-id"
                                [formField]="form.project_id"
                            />
                        </app-form-field>
                    </div>
                    <div class="flex flex-col">
                        <label for="ai-client-email">{{
                            'ADMIN.AI_PROVIDER_CLIENT_EMAIL' | translate
                        }}</label>
                        <app-form-field>
                            <input
                                id="ai-client-email"
                                [formField]="form.client_email"
                            />
                        </app-form-field>
                    </div>
                    <div class="flex flex-col">
                        <label for="ai-private-key">{{
                            'ADMIN.AI_PROVIDER_PRIVATE_KEY' | translate
                        }}</label>
                        <app-form-field>
                            <textarea
                                id="ai-private-key"
                                rows="4"
                                [formField]="form.private_key"
                            ></textarea>
                        </app-form-field>
                    </div>
                    <div class="flex flex-col">
                        <label for="ai-location">{{
                            'ADMIN.AI_PROVIDER_LOCATION' | translate
                        }}</label>
                        <app-form-field>
                            <input
                                id="ai-location"
                                [formField]="form.location"
                                placeholder="us-central1"
                            />
                            <div error>
                                {{
                                    'ADMIN.AI_PROVIDER_LOCATION_REQUIRED'
                                        | translate
                                }}
                            </div>
                        </app-form-field>
                    </div>
                } @else {
                    <div class="flex flex-col">
                        <label for="ai-api-key">{{
                            'ADMIN.AI_PROVIDER_API_KEY' | translate
                        }}</label>
                        <app-form-field>
                            <input id="ai-api-key" [formField]="form.api_key" />
                        </app-form-field>
                    </div>
                    @if (is_azure()) {
                        <div class="flex space-x-2">
                            <div class="flex flex-1 flex-col">
                                <label for="ai-deployment">{{
                                    'ADMIN.AI_PROVIDER_DEPLOYMENT' | translate
                                }}</label>
                                <app-form-field>
                                    <input
                                        id="ai-deployment"
                                        [formField]="form.deployment"
                                    />
                                </app-form-field>
                            </div>
                            <div class="flex flex-1 flex-col">
                                <label for="ai-api-version">{{
                                    'ADMIN.AI_PROVIDER_API_VERSION' | translate
                                }}</label>
                                <app-form-field>
                                    <input
                                        id="ai-api-version"
                                        [formField]="form.api_version"
                                    />
                                </app-form-field>
                            </div>
                        </div>
                    }
                }

                <div class="flex flex-col">
                    <label for="ai-endpoint">{{
                        'ADMIN.AI_PROVIDER_ENDPOINT' | translate
                    }}</label>
                    <app-form-field>
                        <input id="ai-endpoint" [formField]="form.endpoint" />
                    </app-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="ai-default-model">{{
                        'ADMIN.AI_PROVIDER_MODEL' | translate
                    }}</label>
                    <app-form-field>
                        <input
                            id="ai-default-model"
                            [formField]="form.default_model"
                        />
                    </app-form-field>
                </div>
                <div class="flex space-x-2">
                    <div class="flex flex-1 flex-col">
                        <label for="ai-user-per-day">{{
                            'ADMIN.AI_PROVIDER_USER_QUOTA' | translate
                        }}</label>
                        <app-form-field>
                            <input
                                id="ai-user-per-day"
                                type="number"
                                [formField]="form.user_per_day"
                            />
                        </app-form-field>
                    </div>
                    <div class="flex flex-1 flex-col">
                        <label for="ai-domain-per-month">{{
                            'ADMIN.AI_PROVIDER_DOMAIN_QUOTA' | translate
                        }}</label>
                        <app-form-field>
                            <input
                                id="ai-domain-per-month"
                                type="number"
                                [formField]="form.domain_per_month"
                            />
                        </app-form-field>
                    </div>
                </div>
                <settings-toggle [formField]="form.enabled">{{
                    'ADMIN.AI_PROVIDER_ENABLED' | translate
                }}</settings-toggle>
                <settings-toggle [formField]="form.is_default">{{
                    'ADMIN.AI_PROVIDER_IS_DEFAULT' | translate
                }}</settings-toggle>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        OptionComponent,
        SelectComponent,
        FormFieldComponent,
        FullscreenModalShellComponent,
        SettingsToggleComponent,
        TranslatePipe,
        FormField,
    ],
})
export class SignageAIProviderModalComponent {
    private _data = inject<{ item?: SignageAIProvider }>(DIALOG_DATA);
    private _dialog_ref = inject(
        DialogRef<unknown, SignageAIProviderModalComponent>,
    );

    public readonly item = this._data.item;
    public readonly loading = signal('');

    public readonly form_model = signal({
        id: this._data.item?.id || '',
        authority_id: this._data.item?.authority_id ?? '',
        name: this._data.item?.name || '',
        provider: this._data.item?.provider || 'OPENAI',
        endpoint: this._data.item?.endpoint || '',
        location: this._data.item?.location || '',
        default_model:
            this._data.item?.default_model || 'gpt-image-2.5-sunburst',
        enabled: this._data.item?.enabled ?? true,
        is_default: this._data.item?.is_default ?? false,
        user_per_day: this._data.item?.quotas?.user_per_day ?? 60,
        domain_per_month: this._data.item?.quotas?.domain_per_month ?? 2000,
        // credentials, never returned by the API
        api_key: '',
        deployment: '',
        api_version: '',
        project_id: '',
        client_email: '',
        private_key: '',
    });

    public readonly form = form(this.form_model, (path) => {
        required(path.name);
        required(path.provider);
        required(path.location, {
            when: ({ valueOf }) => valueOf(path.provider) === 'GOOGLE_VERTEX',
        });
    });

    private readonly _credential_fields = computed(
        () => SIGNAGE_AI_CREDENTIAL_FIELDS[this.form_model().provider],
    );
    public readonly is_google = computed(() =>
        this._credential_fields().includes('project_id'),
    );
    public readonly is_azure = computed(() =>
        this._credential_fields().includes('deployment'),
    );

    public async save() {
        await submit(this.form, async () => undefined);
        if (this.form().invalid()) return;

        const model = this.form_model();
        const credentials = this._credentials(model);
        if (!model.id && !Object.keys(credentials).length) {
            notifyError(i18n('ADMIN.AI_PROVIDER_CREDENTIALS_REQUIRED'));
            return;
        }

        this.loading.set(i18n('ADMIN.AI_PROVIDER_SAVING'));

        const body: Partial<SignageAIProvider> & {
            credentials?: Record<string, unknown>;
        } = {
            id: model.id || undefined,
            name: model.name,
            provider: model.provider,
            authority_id: model.authority_id || null,
            // sent as an empty string rather than null when cleared: null means
            // "leave it alone", empty means "unset it"
            endpoint: model.endpoint,
            location: model.location,
            default_model: model.default_model,
            enabled: model.enabled,
            is_default: model.is_default,
            quotas: {
                user_per_day: +model.user_per_day,
                domain_per_month: +model.domain_per_month,
            },
        };
        // an edit that leaves the boxes empty keeps the stored credentials
        if (Object.keys(credentials).length) body.credentials = credentials;

        try {
            await saveSignageAIProvider(body);
        } catch (error) {
            return notifyError(
                `${i18n('ADMIN.AI_PROVIDER_SAVE_ERROR')}: ${await readError(error)}`,
            );
        } finally {
            this.loading.set('');
        }
        notifySuccess(i18n('ADMIN.AI_PROVIDER_SAVE_SUCCESS'));
        this._dialog_ref.close(true);
    }

    private _credentials(model: ReturnType<typeof this.form_model>) {
        const out: Record<string, string> = {};
        for (const field of SIGNAGE_AI_CREDENTIAL_FIELDS[model.provider]) {
            if (model[field]) out[field] = model[field];
        }
        return out;
    }
}
