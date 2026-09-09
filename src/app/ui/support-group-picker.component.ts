import { Component, computed, signal } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
    hasSupportRole,
    selected_support_group_id,
    support_groups,
} from '../common/support-access';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'app-support-group-picker',
    imports: [
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        IconComponent,
        TranslatePipe,
    ],
    template: `
        <h2 mat-dialog-title>{{ 'GROUPS.SWITCH_GROUP' | translate }}</h2>
        <mat-dialog-content class="w-96 max-w-full">
            <mat-form-field appearance="outline" class="w-full">
                <mat-label>{{ 'GROUPS.SEARCH_GROUPS' | translate }}</mat-label>
                <input
                    matInput
                    #search_input
                    cdkFocusInitial
                    (input)="search.set(search_input.value)"
                />
            </mat-form-field>
            <div class="flex flex-col gap-1">
                @if (show_all() && !search()) {
                    <button
                        class="hover:bg-base-200 flex items-center gap-2 rounded p-3 text-left"
                        [mat-dialog-close]="''"
                        [attr.aria-current]="!selected_id() ? 'true' : null"
                    >
                        <icon>{{ !selected_id() ? 'check' : 'public' }}</icon>
                        {{ 'GROUPS.ALL_GROUPS' | translate }}
                    </button>
                }
                @for (item of groups(); track item.group.id) {
                    <button
                        class="hover:bg-base-200 flex items-center gap-2 rounded p-3 text-left"
                        [mat-dialog-close]="item.group.id"
                        [attr.aria-current]="
                            selected_id() === item.group.id ? 'true' : null
                        "
                    >
                        <icon>{{
                            selected_id() === item.group.id ? 'check' : 'groups'
                        }}</icon>
                        <span class="min-w-0">
                            <span class="block">{{ item.group.name }}</span>
                            @if (parentName(item.group.parent_id); as parent) {
                                <span class="block text-xs opacity-60">{{
                                    parent
                                }}</span>
                            }
                        </span>
                    </button>
                } @empty {
                    <p class="p-3 opacity-60">
                        {{ 'GROUPS.NO_MATCHING_GROUPS' | translate }}
                    </p>
                }
            </div>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button [mat-dialog-close]="undefined" class="rounded px-4 py-2">
                {{ 'COMMON.CANCEL' | translate }}
            </button>
        </mat-dialog-actions>
    `,
})
export class SupportGroupPickerComponent {
    public readonly search = signal('');
    public readonly selected_id = selected_support_group_id;
    public readonly show_all = hasSupportRole;
    public readonly groups = computed(() => {
        const search = this.search().trim().toLowerCase();
        return support_groups().filter(({ group }) =>
            `${group.name} ${this.parentName(group.parent_id)}`
                .toLowerCase()
                .includes(search),
        );
    });
    public parentName(id: string) {
        return (
            support_groups().find(({ group }) => group.id === id)?.group.name ||
            ''
        );
    }
}
