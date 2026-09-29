import {
    Component,
    computed,
    inject,
    input,
    model,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PlaceGroupAdMappings } from '@placeos/ts-client';
import { waitForEvent } from '../common/signals';
import { ItemSearchFieldComponent } from '../ui/custom-fields/item-search-field.component';
import { IconComponent } from '../ui/icon.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { groupPermissionLabels } from './group-permissions';
import { GroupPermissionsModalComponent } from './group-permissions-modal.component';
import {
    removeAdGroupMapping,
    searchStaffGroups,
    setAdGroupMapping,
    StaffDirectoryGroup,
} from './groups.utilities';

/**
 * Edits the AD group mappings of a group.
 * New mappings get `default_permissions`. When `searchable` is set the AD
 * groups are found with the staff API, otherwise the ID and name are typed in.
 */
@Component({
    selector: 'group-ad-groups-field',
    template: `
        <div class="flex flex-col gap-2">
            @if (searchable()) {
                <item-search-field
                    [placeholder]="'GROUPS.AD_GROUP_SEARCH' | translate"
                    [query_fn]="query_fn"
                    [exclude]="exclude_fn"
                    [clear_on_select]="true"
                    [ngModel]="null"
                    [ngModelOptions]="{ standalone: true }"
                    (ngModelChange)="addGroup($event)"
                />
            } @else if (searchable() === false) {
                <div class="flex items-center gap-2">
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript flex-1"
                    >
                        <input
                            matInput
                            name="ad-group-id"
                            [placeholder]="'GROUPS.AD_GROUP_ID' | translate"
                            [(ngModel)]="new_id"
                            (keydown.enter)="addManual()"
                        />
                    </mat-form-field>
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript flex-1"
                    >
                        <input
                            matInput
                            name="ad-group-name"
                            [placeholder]="'GROUPS.AD_GROUP_NAME' | translate"
                            [(ngModel)]="new_name"
                            (keydown.enter)="addManual()"
                        />
                    </mat-form-field>
                    <button
                        type="button"
                        btn
                        icon
                        matRipple
                        class="h-12 w-12"
                        [disabled]="!new_id().trim()"
                        [matTooltip]="'GROUPS.AD_GROUP_ADD' | translate"
                        (click)="addManual()"
                    >
                        <icon>add</icon>
                    </button>
                </div>
            }
            @for (row of rows(); track row.id) {
                <div
                    class="border-base-200 flex items-center gap-2 rounded-sm border px-4 py-2"
                >
                    <div class="flex min-w-0 flex-1 flex-col">
                        <div class="truncate text-sm">{{ row.name }}</div>
                        <div class="mono truncate text-xs opacity-30">
                            {{ row.id }}
                        </div>
                    </div>
                    <div class="flex max-w-[50%] flex-wrap justify-end gap-1">
                        @for (
                            label of permissionLabels(row.permissions);
                            track label
                        ) {
                            <span class="bg-base-200 rounded px-2 py-1 text-xs">
                                {{ label | translate }}
                            </span>
                        } @empty {
                            <span class="text-xs opacity-30">{{
                                'COMMON.NONE' | translate
                            }}</span>
                        }
                    </div>
                    <button
                        type="button"
                        icon
                        matRipple
                        [matTooltip]="'GROUPS.AD_GROUP_PERMISSIONS' | translate"
                        (click)="editPermissions(row)"
                    >
                        <icon>edit</icon>
                    </button>
                    <button
                        type="button"
                        icon
                        error
                        matRipple
                        [matTooltip]="'GROUPS.AD_GROUP_REMOVE' | translate"
                        (click)="removeGroup(row.id)"
                    >
                        <icon>delete</icon>
                    </button>
                </div>
            } @empty {
                <p class="p-2 text-center text-sm opacity-30">
                    {{ 'GROUPS.AD_GROUPS_EMPTY' | translate }}
                </p>
            }
        </div>
    `,
    styles: [``],
    imports: [
        FormsModule,
        IconComponent,
        ItemSearchFieldComponent,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        MatTooltipModule,
        TranslatePipe,
    ],
})
export class GroupAdGroupsFieldComponent {
    private _dialog = inject(MatDialog);

    public readonly mappings = model<PlaceGroupAdMappings>({});
    public readonly default_permissions = input(0);
    /** Unset while the form checks for staff API search */
    public readonly searchable = input<boolean>();

    public readonly new_id = signal('');
    public readonly new_name = signal('');
    public readonly permissionLabels = groupPermissionLabels;
    public readonly rows = computed(() =>
        Object.entries(this.mappings())
            .map(([id, [name, permissions]]) => ({ id, name, permissions }))
            .sort((a, b) => a.name.localeCompare(b.name)),
    );
    public readonly query_fn = (q: string) => searchStaffGroups(q);
    public readonly exclude_fn = (group: StaffDirectoryGroup) =>
        !!this.mappings()[group.id.trim().toLowerCase()];

    /** Maps a new AD group with the default permissions. Existing ones are kept */
    public addGroup(group: StaffDirectoryGroup | null) {
        if (!group?.id || this.mappings()[group.id.trim().toLowerCase()]) {
            return;
        }
        this.mappings.update((mappings) =>
            setAdGroupMapping(
                mappings,
                group.id,
                group.name,
                this.default_permissions(),
            ),
        );
    }

    public addManual() {
        if (!this.new_id().trim()) return;
        this.addGroup({ id: this.new_id(), name: this.new_name() });
        this.new_id.set('');
        this.new_name.set('');
    }

    public removeGroup(id: string) {
        this.mappings.update((mappings) => removeAdGroupMapping(mappings, id));
    }

    public async editPermissions(row: {
        id: string;
        name: string;
        permissions: number;
    }) {
        const result = await waitForEvent(
            this._dialog
                .open(GroupPermissionsModalComponent, {
                    data: {
                        title: 'GROUPS.AD_GROUP_PERMISSIONS',
                        permissions: row.permissions,
                    },
                })
                .afterClosed(),
        );
        if (!result) return;
        this.mappings.update((mappings) =>
            setAdGroupMapping(mappings, row.id, row.name, result.permissions),
        );
    }
}
