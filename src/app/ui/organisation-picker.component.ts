import { Component, computed, signal } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
    organisations,
    selected_organisation_id,
} from '../common/organisation-access';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'app-organisation-picker',
    imports: [
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        IconComponent,
        TranslatePipe,
    ],
    template: `
        <h2 mat-dialog-title>{{ 'ORGANISATIONS.SWITCH' | translate }}</h2>
        <mat-dialog-content class="w-96 max-w-full">
            <mat-form-field appearance="outline" class="w-full">
                <mat-label>{{ 'ORGANISATIONS.SEARCH' | translate }}</mat-label>
                <input
                    matInput
                    #search_input
                    cdkFocusInitial
                    (input)="search.set(search_input.value)"
                />
            </mat-form-field>
            <div class="flex flex-col gap-1">
                @if (!search()) {
                    <button
                        class="hover:bg-base-200 flex items-center gap-2 rounded p-3 text-left"
                        [mat-dialog-close]="''"
                        [attr.aria-current]="!selected_id() ? 'true' : null"
                    >
                        <icon>{{ !selected_id() ? 'check' : 'public' }}</icon>
                        {{ 'ORGANISATIONS.ALL' | translate }}
                    </button>
                }
                @for (item of list(); track item.id) {
                    <button
                        class="hover:bg-base-200 flex items-center gap-2 rounded p-3 text-left"
                        [mat-dialog-close]="item.id"
                        [attr.aria-current]="
                            selected_id() === item.id ? 'true' : null
                        "
                    >
                        <icon>{{
                            selected_id() === item.id
                                ? 'check'
                                : 'corporate_fare'
                        }}</icon>
                        <span class="min-w-0">
                            <span class="block">{{ item.name }}</span>
                            @if (item.description) {
                                <span class="block text-xs opacity-60">{{
                                    item.description
                                }}</span>
                            }
                        </span>
                    </button>
                } @empty {
                    <p class="p-3 opacity-60">
                        {{ 'ORGANISATIONS.NO_MATCHING' | translate }}
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
export class OrganisationPickerComponent {
    public readonly search = signal('');
    public readonly selected_id = selected_organisation_id;
    public readonly list = computed(() => {
        const search = this.search().trim().toLowerCase();
        return organisations().filter((item) =>
            `${item.name} ${item.description}`.toLowerCase().includes(search),
        );
    });
}
