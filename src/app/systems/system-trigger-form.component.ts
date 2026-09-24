import {
    Component,
    EventEmitter,
    OnInit,
    Output,
    inject,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormField, form, submit } from '@angular/forms/signals';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    PlaceTrigger,
    SignagePlaylist,
    cleanObject,
    querySignagePlaylists,
    showSignagePlaylist,
} from '@placeos/ts-client';
import { AsyncHandler } from '../common/async-handler.class';
import { getInvalidSignalFields } from '../common/forms';
import { HotkeysService } from '../common/hotkeys.service';
import { i18n } from '../common/locale.service';
import { notifyError } from '../common/notifications';
import { DialogEvent, Identity } from '../common/types';
import { generateTriggerSettingsFormModel } from '../triggers/triggers.utilities';
import { ItemSearchFieldComponent } from '../ui/custom-fields/item-search-field.component';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { IconComponent } from '../ui/icon.component';
import { SettingsToggleComponent } from '../ui/settings-toggle.component';
import { TranslatePipe } from '../ui/translate.pipe';

@Component({
    selector: 'system-trigger-form',
    template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading"
            (save)="submit()"
        >
            @if (form) {
                <form system-trigger class="flex flex-col">
                    <div class="mb-4 flex space-x-4">
                        @if (form.name) {
                            <div
                                class="border-base-300 relative flex flex-1 items-center rounded-sm border p-4"
                            >
                                <div
                                    class="truncation bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm p-2 text-xs"
                                >
                                    {{ 'SYSTEMS.TRIGGER_NAME' | translate }}
                                </div>
                                <div class="text-xl">
                                    {{ formModel().name }}
                                </div>
                            </div>
                        }
                        @if (form.name) {
                            <div
                                class="border-base-300 relative flex-1 rounded-sm border p-4"
                            >
                                <div
                                    class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm p-2 text-xs"
                                >
                                    {{ 'SYSTEMS.TRIGGER_ACTIVE' | translate }}
                                </div>
                                <div class="flex">
                                    <div
                                        class="rounded-full px-4 py-2 text-sm"
                                        [class.bg-success]="
                                            trigger_state().triggered
                                        "
                                        [class.text-success-content]="
                                            trigger_state().triggered
                                        "
                                        [class.bg-error]="
                                            !trigger_state().triggered
                                        "
                                        [class.text-error-content]="
                                            !trigger_state().triggered
                                        "
                                    >
                                        {{
                                            (trigger_state().triggered
                                                ? 'COMMON.TRUE'
                                                : 'COMMON.FALSE'
                                            ) | translate
                                        }}
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    @if (form.playlists) {
                        <div class="mb-4 flex flex-col">
                            <label for="playlists">{{
                                'SYSTEMS.PLAYLISTS' | translate
                            }}</label>
                            <item-search-field
                                name="playlists"
                                [placeholder]="
                                    'SYSTEMS.PLAYLISTS_SEARCH' | translate
                                "
                                [query_fn]="query_fn"
                                [exclude]="exclude_fn"
                                [clear_on_select]="true"
                                [ngModel]="null"
                                [ngModelOptions]="{ standalone: true }"
                                (ngModelChange)="addPlaylist($event)"
                            />
                            <div
                                class="border-base-300 divide-base-300 divide-y rounded-sm border"
                            >
                                @for (
                                    id of trigger_state().playlists;
                                    track id
                                ) {
                                    <div
                                        playlist
                                        class="flex items-center gap-2 py-1 pr-1 pl-4"
                                    >
                                        <div class="min-w-0 flex-1">
                                            <div class="truncate">
                                                {{ playlist_names()[id] || id }}
                                            </div>
                                            <div
                                                class="truncate text-xs opacity-30"
                                            >
                                                {{ id }}
                                            </div>
                                        </div>
                                        <button
                                            icon
                                            matRipple
                                            type="button"
                                            [attr.aria-label]="
                                                'SYSTEMS.PLAYLIST_REMOVE'
                                                    | translate
                                            "
                                            (click)="removePlaylist(id)"
                                        >
                                            <icon>close</icon>
                                        </button>
                                    </div>
                                } @empty {
                                    <p
                                        class="p-4 text-center text-sm opacity-30"
                                    >
                                        {{
                                            'SYSTEMS.PLAYLISTS_EMPTY'
                                                | translate
                                        }}
                                    </p>
                                }
                            </div>
                        </div>
                    }
                    <div class="-mx-2 flex flex-wrap items-center">
                        <settings-toggle
                            class="m-2 max-w-[calc(50%-1rem)] min-w-[40%] flex-1"
                            [label]="'SYSTEMS.TRIGGER_ENABLED' | translate"
                            [formField]="form.enabled"
                        />
                        <settings-toggle
                            class="m-2 max-w-[calc(50%-1rem)] min-w-[40%] flex-1"
                            [label]="
                                'SYSTEMS.TRIGGER_EXECUTE_ENABLED' | translate
                            "
                            [formField]="form.exec_enabled"
                        />
                        <settings-toggle
                            class="m-2 max-w-[calc(50%-1rem)] min-w-[40%] flex-1"
                            [label]="'SYSTEMS.TRIGGER_IMPORTANT' | translate"
                            [formField]="form.important"
                        />
                    </div>
                </form>
            }
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        SettingsToggleComponent,
        TranslatePipe,
        FormField,
        FormsModule,
        ItemSearchFieldComponent,
        MatRippleModule,
        FullscreenModalShellComponent,
        IconComponent,
    ],
})
export class SystemTriggerFormComponent extends AsyncHandler implements OnInit {
    private _dialog_ref =
        inject<MatDialogRef<SystemTriggerFormComponent>>(MatDialogRef);
    private _data = inject<{ item: PlaceTrigger; readonly?: string }>(
        MAT_DIALOG_DATA,
    );
    private _hotkey = inject(HotkeysService);

    @Output() public event = new EventEmitter<DialogEvent>();

    public readonly formModel = signal(
        generateTriggerSettingsFormModel(this._data.item),
    );
    public readonly form = form(this.formModel);
    public loading: string;
    public heading = i18n(`Trigger.${this._data.item.id ? 'EDIT' : 'NEW'}`);
    public readonly trigger_state = this.formModel.asReadonly();

    /** Playlist names keyed by playlist ID. IDs without a name show the ID. */
    public readonly playlist_names = signal<Record<string, string>>({});

    public readonly query_fn = (q: string) =>
        querySignagePlaylists({ q, limit: 20 }).then((resp) => resp.data);
    public readonly exclude_fn = (playlist: SignagePlaylist) =>
        this.formModel().playlists.includes(playlist.id);

    /** Add the selected playlist from the search field to the trigger */
    public readonly addPlaylist = (playlist: SignagePlaylist | null) => {
        if (!playlist?.id) return;
        this.playlist_names.update((names) => ({
            ...names,
            [playlist.id]: playlist.name,
        }));
        this.formModel.update((model) =>
            model.playlists.includes(playlist.id)
                ? model
                : { ...model, playlists: [...model.playlists, playlist.id] },
        );
    };
    public readonly removePlaylist = (id: string) =>
        this.formModel.update((model) => ({
            ...model,
            playlists: model.playlists.filter((_) => _ !== id),
        }));

    public ngOnInit(): void {
        this.subscription(
            'save_item_key',
            this._hotkey.listen(['KeyS'], () => this.submit()),
        );
        this._loadPlaylistNames();
    }

    public async submit(): Promise<void> {
        await submit(this.form, async () => undefined);
        if (this.form().invalid()) {
            return notifyError(
                i18n('COMMON.INVALID_FIELDS', {
                    field_list: getInvalidSignalFields(this.form).join(', '),
                }),
            );
        }
        const item = this._data.item;
        const item_json = item.toJSON ? item.toJSON() : item;
        const form_item = (
            item.id
                ? cleanObject({ ...item_json, ...this.formModel() }, [
                      undefined,
                  ])
                : { ...item_json, ...this.formModel() }
        ) as Identity;
        // System trigger uses external save - emit action event
        this.event.emit({ reason: 'action', metadata: form_item });
    }

    /** Load names for the playlists already assigned to the trigger */
    private async _loadPlaylistNames() {
        const playlists = await Promise.all(
            this.formModel().playlists.map((id) =>
                showSignagePlaylist(id).catch(() => null),
            ),
        );
        const names: Record<string, string> = {};
        for (const playlist of playlists) {
            if (playlist?.id) names[playlist.id] = playlist.name;
        }
        this.playlist_names.update((current) => ({ ...names, ...current }));
    }
}
