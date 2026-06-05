import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { AsyncPipe } from '@angular/common';
import {
    Component,
    EventEmitter,
    inject,
    OnInit,
    Output,
    signal,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
    addGroup,
    cleanObject,
    PlaceGroup,
    queryDomains,
    queryGroups,
    showGroup,
    updateGroup,
} from '@placeos/ts-client';
import { lastValueFrom } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AsyncHandler } from '../common/async-handler.class';
import { addChipItem, removeChipItem } from '../common/forms';
import { getInvalidFields } from '../common/general';
import { HotkeysService } from '../common/hotkeys.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { DialogEvent, Identity } from '../common/types';
import { ItemSearchFieldComponent } from '../ui/custom-fields/item-search-field.component';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { IconComponent } from '../ui/icon.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { generateGroupFormFields } from './groups.utilities';

@Component({
    selector: 'group-form',
    template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading"
            (save)="submit()"
        >
            <form class="flex flex-col" [formGroup]="form">
                <div class="field">
                    <label
                        for="group-name"
                        [class.error]="
                            form.controls.name.invalid &&
                            form.controls.name.touched
                        "
                    >
                        {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            id="group-name"
                            name="group-name"
                            [placeholder]="'COMMON.FIELD_NAME' | translate"
                            formControlName="name"
                            required
                        />
                        <mat-error>{{
                            'GROUPS.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="field">
                    <label for="group-description">{{
                        'COMMON.FIELD_DESCRIPTION' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            id="group-description"
                            name="group-description"
                            [placeholder]="
                                'COMMON.FIELD_DESCRIPTION' | translate
                            "
                            formControlName="description"
                        ></textarea>
                    </mat-form-field>
                </div>
                <div class="fieldset">
                    <div class="field">
                        <label for="group-parent">{{
                            'GROUPS.PARENT_ID' | translate
                        }}</label>
                        <item-search-field
                            [placeholder]="'GROUPS.PARENT_SEARCH' | translate"
                            [query_fn]="query_parent_groups"
                            [exclude]="exclude_parent_group"
                            [ngModel]="parent_group()"
                            [ngModelOptions]="{ standalone: true }"
                            (ngModelChange)="setParentGroup($event)"
                        ></item-search-field>
                    </div>
                    <div class="field">
                        <label for="group-authority">{{
                            'GROUPS.AUTHORITY_ID' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                name="group-authority"
                                [placeholder]="
                                    'GROUPS.AUTHORITY_SELECT' | translate
                                "
                                formControlName="authority_id"
                            >
                                @for (
                                    domain of domain_list | async;
                                    track domain.id
                                ) {
                                    <mat-option [value]="domain.id">
                                        {{ domain.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                </div>
                <div class="field">
                    <label for="group-subsystems">{{
                        'GROUPS.SUBSYSTEMS' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-chip-grid #chipList aria-label="Subsystem List">
                            @for (
                                subsystem of subsystem_list();
                                track subsystem
                            ) {
                                <mat-chip-row
                                    (removed)="removeSubsystem(subsystem)"
                                >
                                    <div class="max-w-md truncate">
                                        {{ subsystem }}
                                    </div>
                                    <button
                                        matChipRemove
                                        [attr.aria-label]="
                                            'COMMON.ITEM_REMOVE'
                                                | translate: { item: subsystem }
                                        "
                                    >
                                        <icon>cancel</icon>
                                    </button>
                                </mat-chip-row>
                            }
                        </mat-chip-grid>
                        <input
                            id="group-subsystems"
                            name="group-subsystems"
                            [placeholder]="'GROUPS.SUBSYSTEMS_HINT' | translate"
                            [matChipInputFor]="chipList"
                            [matChipInputSeparatorKeyCodes]="separators"
                            [matChipInputAddOnBlur]="true"
                            (matChipInputTokenEnd)="addSubsystem($event)"
                        />
                    </mat-form-field>
                </div>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatChipsModule,
        AsyncPipe,
        FormsModule,
        ItemSearchFieldComponent,
        IconComponent,
        TranslatePipe,
        ReactiveFormsModule,
        FullscreenModalShellComponent,
    ],
})
export class GroupFormComponent extends AsyncHandler implements OnInit {
    private _dialog_ref =
        inject<MatDialogRef<GroupFormComponent>>(MatDialogRef);
    private _data = inject<{ item: PlaceGroup }>(MAT_DIALOG_DATA);
    private _hotkey = inject(HotkeysService);
    private readonly _name = 'GROUPS';

    @Output() public event = new EventEmitter<DialogEvent>();

    public form = generateGroupFormFields(this._data.item);
    public loading: string;
    public heading = i18n(
        `${this._name}.${this._data.item.id ? 'EDIT' : 'NEW'}`,
    );
    public readonly domain_list = queryDomains({ limit: 1000 }).pipe(
        map(({ data }) => data),
        shareReplay(1),
    );
    public readonly parent_group = signal<PlaceGroup | null>(null);
    public readonly subsystem_list = signal<string[]>(
        this.form.controls.subsystems.value || [],
    );
    public readonly separators: number[] = [ENTER, COMMA];
    public readonly query_parent_groups = (_: string) =>
        queryGroups({ q: _, limit: 20 }).pipe(map(({ data }) => data));
    public readonly exclude_parent_group = (group: PlaceGroup, __: string) =>
        group.id === this._data.item.id;

    public ngOnInit(): void {
        this.subscription(
            'save_item_key',
            this._hotkey.listen(['KeyS'], () => this.submit()),
        );
        this.loadParentGroup();
        this.subscription(
            'subsystems',
            this.form.controls.subsystems.valueChanges.subscribe((list) =>
                this.subsystem_list.set(list || []),
            ),
        );
    }

    public setParentGroup(group: PlaceGroup | null) {
        this.parent_group.set(group);
        this.form.controls.parent_id.setValue(group?.id || '');
        if (!group?.subsystems?.length) return;
        this.form.controls.subsystems.setValue(
            Array.from(
                new Set([
                    ...(this.form.controls.subsystems.value || []),
                    ...group.subsystems,
                ]),
            ),
        );
    }

    public readonly addSubsystem = (event: MatChipInputEvent) =>
        addChipItem(this.form.controls.subsystems, event);

    public readonly removeSubsystem = (subsystem: string) =>
        removeChipItem(this.form.controls.subsystems, subsystem);

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
        this.loading = i18n(`${this._name}.SAVING`);
        this._dialog_ref.disableClose = true;
        const form_value = this.form.value;
        const form_item = cleanObject(
            {
                ...item,
                ...form_value,
                subsystems: form_value.subsystems || [],
            },
            ['', undefined],
        ) as Identity;
        (form_item.id
            ? updateGroup(
                  form_item.id as string,
                  form_item as unknown as PlaceGroup,
              )
            : addGroup(form_item as unknown as PlaceGroup)
        ).subscribe(
            (_item) => {
                this._dialog_ref.disableClose = false;
                this.event.emit({ reason: 'done', metadata: { item: _item } });
                notifySuccess(i18n(`${this._name}.SAVE_SUCCESS`));
                this._dialog_ref.close();
            },
            async (err) => {
                this.loading = null;
                this._dialog_ref.disableClose = false;
                notifyError(
                    i18n(`${this._name}.SAVE_ERROR`, {
                        error: JSON.stringify(
                            (await err.text?.()) || err.message || err,
                        ),
                    }),
                );
            },
        );
    }

    private async loadParentGroup() {
        const parent_id = this.form.controls.parent_id.value;
        if (!parent_id) return;
        const parent = await lastValueFrom(showGroup(parent_id)).catch(
            () => null,
        );
        this.parent_group.set(parent);
    }
}
