import {
    Component,
    computed,
    input,
    TemplateRef,
    viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { i18n } from '../common/locale.service';
import { ItemSearchFieldComponent } from '../ui/custom-fields/item-search-field.component';
import { IconComponent } from '../ui/icon.component';
import {
    SimpleTableComponent,
    TableColumn,
} from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { GroupMembership } from './group-membership';
import { groupPermissionLabels } from './group-permissions';

/** Tab content that lists, adds and edits one kind of group membership */
@Component({
    selector: 'group-membership',
    template: `
        @let opts = members().options;
        <div class="flex h-full min-w-0 flex-col">
            <section class="flex items-center gap-2 p-4">
                <item-search-field
                    [placeholder]="opts.search | translate"
                    class="h-12 flex-1"
                    [query_fn]="query_fn"
                    [exclude]="exclude_fn"
                    [clear_on_select]="true"
                    [ngModel]="null"
                    (ngModelChange)="members().add($event)"
                />
                <button
                    btn
                    matRipple
                    class="h-12"
                    [matTooltip]="opts.many + '_BULK' | translate"
                    (click)="members().bulkAdd()"
                >
                    <icon class="mr-2">playlist_add</icon>
                    {{ opts.many + '_BULK' | translate }}
                </button>
            </section>
            <section
                class="flex h-1/2 min-h-0 w-full flex-1 flex-col overflow-auto px-4"
            >
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.invisible]="!loading()"
                />
                <simple-table
                    class="block min-h-0 w-full flex-1 text-sm"
                    [class]="opts.show_deny ? 'min-w-[64rem]' : 'min-w-[56rem]'"
                    [virtual_row_height]="72"
                    [data]="rows()"
                    [columns]="columns()"
                    [sortable]="true"
                    [empty_message]="opts.many + '_EMPTY' | translate"
                />
            </section>
        </div>
        <ng-template #member_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <a
                    class="text-sm underline"
                    [routerLink]="[
                        '/',
                        opts.route,
                        opts.member_id(row),
                        'about',
                    ]"
                >
                    {{ opts.member_name(row) }}
                </a>
                <div class="text-xs opacity-30">
                    {{ opts.member_detail(row) }}
                </div>
            </div>
        </ng-template>
        <ng-template #permissions_template let-row="row">
            <div class="flex flex-wrap gap-1 px-4 py-2">
                @let labels = permissionLabels(row.permissions);
                @for (label of labels; track label) {
                    <span class="bg-base-200 rounded px-2 py-1 text-xs">
                        {{ label | translate }}
                    </span>
                }
                @if (!labels.length) {
                    <span class="opacity-30">{{
                        opts.no_permissions | translate
                    }}</span>
                }
            </div>
        </ng-template>
        <ng-template #deny_template let-row="row">
            <div class="px-4 py-2">
                <span
                    class="inline-flex rounded px-2 py-1 text-xs font-medium"
                    [class.bg-error]="row.deny"
                    [class.text-error-content]="row.deny"
                    [class.bg-success]="!row.deny"
                    [class.text-success-content]="!row.deny"
                >
                    {{
                        (row.deny ? 'COMMON.TRUE' : 'COMMON.FALSE') | translate
                    }}
                </span>
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="opts.one + '_PERMISSIONS' | translate"
                    (click)="members().editPermissions(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    matRipple
                    [matTooltip]="opts.one + '_REMOVE' | translate"
                    (click)="members().remove(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                display: block;
                height: 100%;
                width: 100%;
            }
        `,
    ],
    imports: [
        FormsModule,
        IconComponent,
        ItemSearchFieldComponent,
        MatProgressBarModule,
        MatRippleModule,
        MatTooltipModule,
        RouterModule,
        SimpleTableComponent,
        TranslatePipe,
    ],
})
export class GroupMembershipComponent {
    public readonly members = input.required<GroupMembership>();
    /** Whether the membership rows are loading or saving */
    public readonly loading = input(false);

    public readonly permissionLabels = groupPermissionLabels;
    public readonly rows = computed(() => this.members().options.rows());
    private readonly _member =
        viewChild<TemplateRef<unknown>>('member_template');
    private readonly _permissions = viewChild<TemplateRef<unknown>>(
        'permissions_template',
    );
    private readonly _deny = viewChild<TemplateRef<unknown>>('deny_template');
    private readonly _actions =
        viewChild<TemplateRef<unknown>>('actions_template');

    public readonly columns = computed<TableColumn[]>(() => {
        const opts = this.members().options;
        return [
            {
                key: opts.member_key,
                name: i18n(opts.column),
                content: this._member(),
            },
            {
                key: 'permissions',
                name: i18n('GROUPS.FIELD_PERMISSIONS'),
                content: this._permissions(),
                size: '24rem',
            },
            {
                key: 'deny',
                name: i18n('GROUPS.FIELD_DENY'),
                content: this._deny(),
                size: '6rem',
                show: !!opts.show_deny,
            },
            {
                key: 'actions',
                name: i18n('COMMON.ACTIONS'),
                hide_name: true,
                size: '7rem',
                content: this._actions(),
            },
        ];
    });
    public readonly query_fn = (q: string) =>
        this.members().options.query(q, this.members().options.authority_id());
    public readonly exclude_fn = (item: { id: string; name: string }) =>
        this.members().exclude(item);
}
