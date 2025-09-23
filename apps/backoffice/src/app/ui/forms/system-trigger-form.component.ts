import { Component, input } from '@angular/core';
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { addChipItem, removeChipItem } from '../../common/forms';
import { SettingsToggleComponent } from '../settings-toggle.component';
import { TranslatePipe } from '../translate.pipe';

@Component({
    selector: 'system-trigger-form',
    template: `
        <form system-trigger class="flex flex-col" [formGroup]="form()">
            <div class="mb-4 flex space-x-4">
                @if (form().controls.name) {
                    <div
                        class="relative flex flex-1 items-center rounded border border-base-300 p-4"
                    >
                        <div
                            class="truncation absolute left-4 top-0 -translate-y-1/2 rounded bg-base-100 p-2 text-xs"
                        >
                            {{ 'SYSTEMS.TRIGGER_NAME' | translate }}
                        </div>
                        <div class="text-xl">
                            {{ form().controls.name.value }}
                        </div>
                    </div>
                }
                @if (form().controls.name) {
                    <div
                        class="relative flex-1 rounded border border-base-300 p-4"
                    >
                        <div
                            class="absolute left-4 top-0 -translate-y-1/2 rounded bg-base-100 p-2 text-xs"
                        >
                            {{ 'SYSTEMS.TRIGGER_ACTIVE' | translate }}
                        </div>
                        <div class="flex">
                            <div
                                class="rounded-full px-4 py-2 text-sm"
                                [class.bg-success]="form().value.triggered"
                                [class.text-success-content]="
                                    form().value.triggered
                                "
                                [class.bg-error]="!form().value.triggered"
                                [class.text-error-content]="
                                    !form().value.triggered
                                "
                            >
                                {{
                                    (form().value.triggered
                                        ? 'COMMON.TRUE'
                                        : 'COMMON.FALSE'
                                    ) | translate
                                }}
                            </div>
                        </div>
                    </div>
                }
            </div>
            @if (form().controls.playlists) {
                <div class="flex flex-col">
                    <label for="playlists">{{
                        'SYSTEMS.PLAYLISTS' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-chip-grid #chipList aria-label="Playlists">
                            @for (item of form().value.playlists; track scope) {
                                <mat-chip
                                    [selectable]="true"
                                    [removable]="true"
                                    (removed)="removePlaylist(item)"
                                >
                                    {{ item }}
                                    <app-icon matChipRemove>close</app-icon>
                                </mat-chip>
                            }
                            <input
                                matInput
                                placeholder="Playlist IDs"
                                [matChipInputFor]="chipList"
                                [matChipInputSeparatorKeyCodes]="separators"
                                [matChipInputAddOnBlur]="true"
                                (matChipInputTokenEnd)="addPlaylist($event)"
                            />
                        </mat-chip-grid>
                    </mat-form-field>
                </div>
            }
            <div class="-mx-2 flex flex-wrap items-center">
                <settings-toggle
                    class="m-2 min-w-[40%] max-w-[calc(50%-1rem)] flex-1"
                    [name]="'SYSTEMS.TRIGGER_ENABLED' | translate"
                    formControlName="enabled"
                ></settings-toggle>
                <settings-toggle
                    class="m-2 min-w-[40%] max-w-[calc(50%-1rem)] flex-1"
                    [name]="'SYSTEMS.TRIGGER_EXECUTE_ENABLED' | translate"
                    formControlName="exec_enabled"
                ></settings-toggle>
                <settings-toggle
                    class="m-2 min-w-[40%] max-w-[calc(50%-1rem)] flex-1"
                    [name]="'SYSTEMS.TRIGGER_IMPORTANT' | translate"
                    formControlName="important"
                ></settings-toggle>
            </div>
        </form>
    `,
    styles: [``],
    imports: [
        SettingsToggleComponent,
        TranslatePipe,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatChipsModule,
        MatInputModule,
    ],
})
export class SystemTriggerFormComponent {
    /** Group of form fields used for creating the system */
    public readonly form = input<UntypedFormGroup>(undefined);

    public readonly addPlaylist = (e) =>
        addChipItem(this.form().controls.playlists as any, e);
    public readonly removePlaylist = (i) =>
        removeChipItem(this.form().controls.playlists as any, i);
}
