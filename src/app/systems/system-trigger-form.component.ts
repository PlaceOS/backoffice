import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import {
    Component,
    EventEmitter,
    OnInit,
    Output,
    Signal,
    inject,
} from '@angular/core';
import {
    FormControl,
    ReactiveFormsModule,
    UntypedFormGroup,
} from '@angular/forms';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PlaceTrigger, cleanObject } from '@placeos/ts-client';
import { AsyncHandler } from '../common/async-handler.class';
import { addChipItem, removeChipItem } from '../common/forms';
import { getInvalidFields } from '../common/general';
import { HotkeysService } from '../common/hotkeys.service';
import { i18n } from '../common/locale.service';
import { notifyError } from '../common/notifications';
import { toSignal } from '../common/signals';
import { DialogEvent, Identity } from '../common/types';
import { generateTriggerSettingsFormFields } from '../triggers/triggers.utilities';
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
                <form system-trigger class="flex flex-col" [formGroup]="form">
                    <div class="mb-4 flex space-x-4">
                        @if (form.controls.name) {
                            <div
                                class="border-base-300 relative flex flex-1 items-center rounded-sm border p-4"
                            >
                                <div
                                    class="truncation bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm p-2 text-xs"
                                >
                                    {{ 'SYSTEMS.TRIGGER_NAME' | translate }}
                                </div>
                                <div class="text-xl">
                                    {{ form.controls.name.value }}
                                </div>
                            </div>
                        }
                        @if (form.controls.name) {
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
                    @if (form.controls.playlists) {
                        <div class="flex flex-col">
                            <label for="playlists">{{
                                'SYSTEMS.PLAYLISTS' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <mat-chip-grid #chipList aria-label="Playlists">
                                    @for (
                                        item of trigger_state().playlists;
                                        track item
                                    ) {
                                        <mat-chip
                                            [removable]="true"
                                            (removed)="removePlaylist(item)"
                                        >
                                            {{ item }}
                                            <icon matChipRemove>close</icon>
                                        </mat-chip>
                                    }
                                    <input
                                        matInput
                                        placeholder="Playlist IDs"
                                        [matChipInputFor]="chipList"
                                        [matChipInputSeparatorKeyCodes]="
                                            separators
                                        "
                                        [matChipInputAddOnBlur]="true"
                                        (matChipInputTokenEnd)="
                                            addPlaylist($event)
                                        "
                                    />
                                </mat-chip-grid>
                            </mat-form-field>
                        </div>
                    }
                    <div class="-mx-2 flex flex-wrap items-center">
                        <settings-toggle
                            class="m-2 max-w-[calc(50%-1rem)] min-w-[40%] flex-1"
                            [name]="'SYSTEMS.TRIGGER_ENABLED' | translate"
                            formControlName="enabled"
                        ></settings-toggle>
                        <settings-toggle
                            class="m-2 max-w-[calc(50%-1rem)] min-w-[40%] flex-1"
                            [name]="
                                'SYSTEMS.TRIGGER_EXECUTE_ENABLED' | translate
                            "
                            formControlName="exec_enabled"
                        ></settings-toggle>
                        <settings-toggle
                            class="m-2 max-w-[calc(50%-1rem)] min-w-[40%] flex-1"
                            [name]="'SYSTEMS.TRIGGER_IMPORTANT' | translate"
                            formControlName="important"
                        ></settings-toggle>
                    </div>
                </form>
            }
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        SettingsToggleComponent,
        TranslatePipe,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatChipsModule,
        MatInputModule,
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

    public form: UntypedFormGroup = generateTriggerSettingsFormFields(
        this._data.item,
    );
    public loading: string;
    public heading = i18n(`Trigger.${this._data.item.id ? 'EDIT' : 'NEW'}`);
    public trigger_state: Signal<{
        triggered?: boolean;
        playlists?: string[];
    }> = toSignal(this.form.valueChanges, {
        initialValue: this.form.getRawValue(),
    });

    public readonly separators: number[] = [ENTER, COMMA, SPACE];

    public readonly addPlaylist = (e: MatChipInputEvent) =>
        addChipItem(this.form.controls.playlists as FormControl<string[]>, e);
    public readonly removePlaylist = (i: string) =>
        removeChipItem(
            this.form.controls.playlists as FormControl<string[]>,
            i,
        );

    public ngOnInit(): void {
        this.subscription(
            'save_item_key',
            this._hotkey.listen(['KeyS'], () => this.submit()),
        );
    }

    public submit(): void {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return notifyError(
                i18n('COMMON.INVALID_FIELDS', {
                    field_list: getInvalidFields(this.form).join(', '),
                }),
            );
        }
        const item = this._data.item;
        const item_json = item.toJSON ? item.toJSON() : item;
        const form_item = (
            item.id
                ? cleanObject({ ...item_json, ...this.form.value }, [undefined])
                : { ...item_json, ...this.form.value }
        ) as Identity;
        // System trigger uses external save - emit action event
        this.event.emit({ reason: 'action', metadata: form_item });
    }
}
