import { Component, computed, inject, signal } from '@angular/core';
import { form, FormField, required, submit } from '@angular/forms/signals';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { i18n } from '../../common/locale.service';
import { notifyError, notifySuccess } from '../../common/notifications';
import { FullscreenModalShellComponent } from '../../ui/fullscreen-modal-shell.component';
import { SettingsToggleComponent } from '../../ui/settings-toggle.component';
import { TranslatePipe } from '../../ui/translate.pipe';
import { saveSignageAIProvider, SignageAIProvider } from './signage-ai.fn';

/**
 * Credentials differ per vendor, so the form swaps the middle section rather
 * than showing every field at once. They are only ever sent, never returned:
 * on an edit the boxes start empty and staying empty keeps what is stored.
 */
@Component({
    selector: 'signage-ai-provider-modal',
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
                    <label for="name">{{
                        'ADMIN.AI_PROVIDER_NAME' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input matInput [formField]="form.name" />
                        <mat-error>{{
                            'ADMIN.AI_PROVIDER_NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="provider">{{
                        'ADMIN.AI_PROVIDER_VENDOR' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select [formField]="form.provider">
                            <mat-option value="OPENAI">OpenAI</mat-option>
                            <mat-option value="AZURE_OPENAI"
                                >Azure OpenAI</mat-option
                            >
                            <mat-option value="GOOGLE_VERTEX"
                                >Google (Vertex)</mat-option
                            >
                        </mat-select>
                    </mat-form-field>
                </div>

                @if (is_google()) {
                    <div class="flex flex-col">
                        <label for="project">{{
                            'ADMIN.AI_PROVIDER_PROJECT' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input matInput [formField]="form.project_id" />
                        </mat-form-field>
                    </div>
                    <div class="flex flex-col">
                        <label for="client-email">{{
                            'ADMIN.AI_PROVIDER_CLIENT_EMAIL' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input matInput [formField]="form.client_email" />
                        </mat-form-field>
                    </div>
                    <div class="flex flex-col">
                        <label for="private-key">{{
                            'ADMIN.AI_PROVIDER_PRIVATE_KEY' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                rows="4"
                                [formField]="form.private_key"
                            ></textarea>
                        </mat-form-field>
                    </div>
                } @else {
                    <div class="flex flex-col">
                        <label for="api-key">{{
                            'ADMIN.AI_PROVIDER_API_KEY' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input matInput [formField]="form.api_key" />
                        </mat-form-field>
                    </div>
                    @if (is_azure()) {
                        <div class="flex space-x-2">
                            <div class="flex flex-1 flex-col">
                                <label for="deployment">{{
                                    'ADMIN.AI_PROVIDER_DEPLOYMENT' | translate
                                }}</label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        [formField]="form.deployment"
                                    />
                                </mat-form-field>
                            </div>
                            <div class="flex flex-1 flex-col">
                                <label for="api-version">{{
                                    'ADMIN.AI_PROVIDER_API_VERSION' | translate
                                }}</label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        [formField]="form.api_version"
                                    />
                                </mat-form-field>
                            </div>
                        </div>
                    }
                }

                <div class="flex flex-col">
                    <label for="endpoint">{{
                        'ADMIN.AI_PROVIDER_ENDPOINT' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input matInput [formField]="form.endpoint" />
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="model">{{
                        'ADMIN.AI_PROVIDER_MODEL' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input matInput [formField]="form.default_model" />
                    </mat-form-field>
                </div>
                <div class="flex space-x-2">
                    <div class="flex flex-1 flex-col">
                        <label for="user-quota">{{
                            'ADMIN.AI_PROVIDER_USER_QUOTA' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                type="number"
                                [formField]="form.user_per_day"
                            />
                        </mat-form-field>
                    </div>
                    <div class="flex flex-1 flex-col">
                        <label for="domain-quota">{{
                            'ADMIN.AI_PROVIDER_DOMAIN_QUOTA' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                type="number"
                                [formField]="form.domain_per_month"
                            />
                        </mat-form-field>
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
        FullscreenModalShellComponent,
        SettingsToggleComponent,
        TranslatePipe,
        MatFormFieldModule,
        MatSelectModule,
        FormField,
        MatInputModule,
    ],
})
export class SignageAIProviderModalComponent {
    private _data = inject<{ item?: SignageAIProvider; domain?: string }>(
        MAT_DIALOG_DATA,
    );
    private _dialog_ref = inject(
        MatDialogRef<SignageAIProviderModalComponent>,
    );

    public readonly item = this._data.item;
    public readonly loading = signal('');

    public readonly formModel = signal({
        id: this._data.item?.id || '',
        authority_id: this._data.item?.authority_id ?? this._data.domain ?? '',
        name: this._data.item?.name || '',
        provider: this._data.item?.provider || 'OPENAI',
        endpoint: this._data.item?.endpoint || '',
        default_model: this._data.item?.default_model || 'gpt-image-2',
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

    public readonly form = form(this.formModel, (path) => {
        required(path.name);
        required(path.provider);
    });

    public readonly is_google = computed(
        () => this.formModel().provider === 'GOOGLE_VERTEX',
    );
    public readonly is_azure = computed(
        () => this.formModel().provider === 'AZURE_OPENAI',
    );

    public async save() {
        await submit(this.form, async () => undefined);
        if (this.form().invalid()) return;

        const model = this.formModel();
        const credentials = this._credentials(model);
        if (!model.id && !Object.keys(credentials).length) {
            notifyError(i18n('ADMIN.AI_PROVIDER_CREDENTIALS_REQUIRED'));
            return;
        }

        this.loading.set(i18n('ADMIN.AI_PROVIDER_SAVING'));
        this._dialog_ref.disableClose = true;

        const body: any = {
            id: model.id || undefined,
            name: model.name,
            provider: model.provider,
            authority_id: model.authority_id || null,
            endpoint: model.endpoint || null,
            default_model: model.default_model || null,
            enabled: model.enabled,
            is_default: model.is_default,
            quotas: {
                user_per_day: +model.user_per_day,
                domain_per_month: +model.domain_per_month,
            },
        };
        // an edit that leaves the boxes empty keeps the stored credentials
        if (Object.keys(credentials).length) body.credentials = credentials;

        await saveSignageAIProvider(body).catch((error) => {
            notifyError(i18n('ADMIN.AI_PROVIDER_SAVE_ERROR'));
            this.loading.set('');
            this._dialog_ref.disableClose = false;
            throw error;
        });

        this.loading.set('');
        this._dialog_ref.disableClose = false;
        notifySuccess(i18n('ADMIN.AI_PROVIDER_SAVE_SUCCESS'));
        this._dialog_ref.close(true);
    }

    private _credentials(model: ReturnType<typeof this.formModel>) {
        const out: Record<string, string> = {};
        if (model.provider === 'GOOGLE_VERTEX') {
            if (model.project_id) out.project_id = model.project_id;
            if (model.client_email) out.client_email = model.client_email;
            if (model.private_key) out.private_key = model.private_key;
        } else {
            if (model.api_key) out.api_key = model.api_key;
            if (model.deployment) out.deployment = model.deployment;
            if (model.api_version) out.api_version = model.api_version;
        }
        return out;
    }
}
