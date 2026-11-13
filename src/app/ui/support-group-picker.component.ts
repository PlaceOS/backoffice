import { Component, computed, signal } from '@angular/core';
import {
    hasSupportRole,
    selected_support_group_id,
    support_groups,
} from '../common/support-access';
import { DialogCloseDirective } from './controls/dialog';
import { FormFieldComponent } from './controls/form-field.component';
import { DialogTitleDirective } from './dialog-title.directive';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'app-support-group-picker',
    imports: [
        DialogCloseDirective,
        DialogTitleDirective,
        FormFieldComponent,
        IconComponent,
        TranslatePipe,
    ],
    template: `
        <h2 appDialogTitle class="px-6 pt-6 pb-4 text-xl font-medium">
            {{ 'GROUPS.SWITCH_GROUP' | translate }}
        </h2>
        <div class="max-h-[65vh] w-96 max-w-full overflow-auto px-6 pb-2">
            <label for="support-group-search">{{
                'GROUPS.SEARCH_GROUPS' | translate
            }}</label>
            <app-form-field class="w-full">
                <input
                    id="support-group-search"
                    #search_input
                    cdkFocusInitial
                    (input)="search.set(search_input.value)"
                />
            </app-form-field>
            <div class="flex flex-col gap-1" data-testid="support-groups">
                @if (show_all() && !search()) {
                    <button
                        class="hover:bg-base-200 flex items-center gap-2 rounded p-3 text-left"
                        [appDialogClose]="''"
                        [attr.aria-current]="!selected_id() ? 'true' : null"
                    >
                        <icon>{{ !selected_id() ? 'check' : 'public' }}</icon>
                        {{ 'GROUPS.ALL_GROUPS' | translate }}
                    </button>
                }
                @for (item of groups(); track item.group.id) {
                    <button
                        class="hover:bg-base-200 flex items-center gap-2 rounded p-3 text-left"
                        [appDialogClose]="item.group.id"
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
        </div>
        <div class="flex justify-end gap-2 p-2" data-testid="support-actions">
            <button [appDialogClose]="undefined" class="rounded px-4 py-2">
                {{ 'COMMON.CANCEL' | translate }}
            </button>
        </div>
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
