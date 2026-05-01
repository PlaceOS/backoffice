import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { PlaceGroup, PlaceGroupUser, queryGroups } from '@placeos/ts-client';
import { map } from 'rxjs/operators';
import { groupPermissionLabels } from '../groups/group-permissions';
import { ItemSearchFieldComponent } from '../ui/custom-fields/item-search-field.component';
import { IconComponent } from '../ui/icon.component';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { UsersStateService } from './users-state.service';

@Component({
    selector: 'user-groups',
    template: `
        <div class="flex h-full min-w-0 flex-col">
            <section class="flex items-center gap-2 px-4 pt-4">
                <item-search-field
                    [placeholder]="'GROUPS.SEARCH' | translate"
                    class="flex-1"
                    [query_fn]="query_fn"
                    [exclude]="exclude_fn"
                    [clear_on_select]="true"
                    [ngModel]="null"
                    (ngModelChange)="addGroup($event)"
                ></item-search-field>
                <button
                    btn
                    matRipple
                    class="h-12"
                    [matTooltip]="'USERS.GROUPS_BULK' | translate"
                    (click)="bulkAddGroups()"
                >
                    <icon class="mr-2">playlist_add</icon>
                    {{ 'USERS.GROUPS_BULK' | translate }}
                </button>
            </section>
            <section class="h-1/2 min-h-0 w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="(loading | async) !== true"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-[56rem] text-sm"
                    [data]="groups"
                    [columns]="[
                        {
                            key: 'group',
                            name: 'GROUPS.SINGULAR' | translate,
                            content: group_template,
                        },
                        {
                            key: 'permissions',
                            name: 'GROUPS.FIELD_PERMISSIONS' | translate,
                            content: permissions_template,
                            size: '24rem',
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            size: '7rem',
                            content: actions_template,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'USERS.GROUPS_EMPTY' | translate"
                ></simple-table>
            </section>
        </div>
        <ng-template #group_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <a
                    class="text-sm underline"
                    [routerLink]="['/groups', row.group_id, 'about']"
                >
                    {{ row.group?.name || row.group_id }}
                </a>
                <div class="text-xs opacity-30">{{ row.group_id }}</div>
            </div>
        </ng-template>
        <ng-template #permissions_template let-row="row">
            <div class="flex flex-wrap gap-1 px-4 py-2">
                @for (label of permissionLabels(row.permissions); track label) {
                    <span class="bg-base-200 rounded px-2 py-1 text-xs">
                        {{ label | translate }}
                    </span>
                }
                @if (!permissionLabels(row.permissions).length) {
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
                    matRipple
                    [matTooltip]="'USERS.GROUP_PERMISSIONS' | translate"
                    (click)="editPermissions(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    matRipple
                    [matTooltip]="'USERS.GROUP_REMOVE' | translate"
                    (click)="removeGroup(row)"
                >
                    <icon class="text-error">delete</icon>
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
        CommonModule,
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
export class UserGroupsComponent {
    private _service = inject(UsersStateService);

    public readonly groups = this._service.groups;
    public readonly loading = this._service.loading;
    public readonly permissionLabels = groupPermissionLabels;
    public readonly addGroup = (group: PlaceGroup) =>
        this._service.addGroup(group);
    public readonly bulkAddGroups = () =>
        this._service.bulkAddGroups(this._current_groups);
    public readonly removeGroup = (row: PlaceGroupUser) =>
        this._service.removeGroup(row);
    public readonly editPermissions = (row: PlaceGroupUser) =>
        this._service.editGroupPermissions(row);
    public readonly query_fn = (_: string) =>
        queryGroups({ q: _, limit: 20 }).pipe(map((resp) => resp.data));
    public readonly exclude_fn = (group: PlaceGroup, __: string) =>
        !!this._service.active_item &&
        !!this._current_groups.find((_) => _.group_id === group.id);

    private _current_groups: PlaceGroupUser[] = [];

    constructor() {
        this.groups.subscribe((groups) => (this._current_groups = groups));
    }
}
