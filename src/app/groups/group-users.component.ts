import { Component, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { PlaceGroupUser, PlaceUser, queryUsers } from '@placeos/ts-client';
import { ItemSearchFieldComponent } from '../ui/custom-fields/item-search-field.component';
import { IconComponent } from '../ui/icon.component';
import { LoadingLabelDirective } from '../ui/loading-label.directive';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { groupPermissionLabels } from './group-permissions';
import { GroupStateService } from './group-state.service';

@Component({
    selector: 'group-users',
    template: `
        <div class="flex h-full min-w-0 flex-col">
            <section class="flex items-center gap-2 p-4">
                <item-search-field
                    [placeholder]="'GROUPS.USER_SEARCH' | translate"
                    class="h-12 flex-1"
                    [query_fn]="query_fn"
                    [exclude]="exclude_fn"
                    [clear_on_select]="true"
                    [ngModel]="null"
                    (ngModelChange)="addUser($event)"
                />
                <button
                    btn
                    matRipple
                    class="h-12"
                    [matTooltip]="'GROUPS.USERS_BULK' | translate"
                    (click)="bulkAddUsers()"
                >
                    <icon class="mr-2">playlist_add</icon>
                    {{ 'GROUPS.USERS_BULK' | translate }}
                </button>
            </section>
            <section
                class="flex h-1/2 min-h-0 w-full flex-1 flex-col overflow-auto px-4"
            >
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.invisible]="loading() !== true"
                />
                <simple-table
                    class="block min-h-0 w-full min-w-[56rem] flex-1 text-sm"
                    [virtual_row_height]="72"
                    [data]="users"
                    [columns]="[
                        {
                            key: 'user',
                            name: 'GROUPS.FIELD_USER' | translate,
                            content: user_template,
                        },
                        {
                            key: 'permissions',
                            name: 'GROUPS.FIELD_PERMISSIONS' | translate,
                            content: permissions_template,
                            size: '24rem',
                        },
                        {
                            key: 'actions',
                            name: 'COMMON.ACTIONS' | translate,
                            hide_name: true,
                            size: '7rem',
                            content: actions_template,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'GROUPS.USERS_EMPTY' | translate"
                />
            </section>
        </div>
        <ng-template #user_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <a
                    class="text-sm underline"
                    [routerLink]="['/users', row.user_id, 'about']"
                >
                    {{ row.user?.name || row.user_id }}
                </a>
                <div class="text-xs opacity-30">{{ row.user?.email }}</div>
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
                        'COMMON.NONE' | translate
                    }}</span>
                }
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'GROUPS.USER_PERMISSIONS' | translate"
                    (click)="editPermissions(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    matRipple
                    [matTooltip]="'GROUPS.USER_REMOVE' | translate"
                    (click)="removeUser(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }
        `,
    ],
    imports: [
        LoadingLabelDirective,
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
export class GroupUsersComponent {
    private _service = inject(GroupStateService);

    public readonly users = this._service.users;
    public readonly loading = this._service.loading;
    public readonly permissionLabels = groupPermissionLabels;
    public readonly addUser = (user: PlaceUser) => this._service.addUser(user);
    public readonly bulkAddUsers = () =>
        this._service.bulkAddUsers(this._current_users);
    public readonly removeUser = (row: PlaceGroupUser) =>
        this._service.removeUser(row);
    public readonly editPermissions = (row: PlaceGroupUser) =>
        this._service.editUserPermissions(row);
    public readonly query_fn = (_: string) =>
        queryUsers({
            q: _,
            authority_id: this._service.active_item?.authority_id,
        }).then((resp) => resp.data);
    public readonly exclude_fn = (user: PlaceUser, __: string) => {
        const authority_id = this._service.active_item?.authority_id;
        return (
            !!this._service.active_item &&
            (!!this._current_users.find((_) => _.user_id === user.id) ||
                (!!authority_id && user.authority_id !== authority_id))
        );
    };

    private _current_users: PlaceGroupUser[] = [];

    constructor() {
        effect(() => (this._current_users = this.users()));
    }
}
