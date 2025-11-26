import { Clipboard } from '@angular/cdk/clipboard';
import { Component, inject } from '@angular/core';
import { PlaceUser, showDomain } from '@placeos/ts-client';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import {
    debounceTime,
    distinctUntilChanged,
    filter,
    shareReplay,
    switchMap,
} from 'rxjs';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { notifySuccess } from '../common/notifications';
import { DateFromPipe } from '../ui/pipes/date-from.pipe';
import { TranslatePipe } from '../ui/translate.pipe';

let domain_obs;

@Component({
    selector: 'user-about',
    template: `
        <section class="mb-4 flex items-center space-x-2">
            <div
                class="flex items-center space-x-2 rounded-3xl border border-base-300 p-2"
            >
                <div class="px-2">{{ 'USERS.ROLE_SUPPORT' | translate }}</div>
                <div
                    class="rounded-2xl px-2 py-1 text-xs"
                    [class.bg-success]="item?.support === true"
                    [class.text-success-content]="item?.support === true"
                    [class.bg-error]="item?.support !== true"
                    [class.text-error-content]="item?.support !== true"
                >
                    {{
                        (item?.support === true
                            ? 'COMMON.TRUE'
                            : 'COMMON.FALSE'
                        ) | translate
                    }}
                </div>
            </div>
            <div
                class="flex items-center space-x-2 rounded-3xl border border-base-300 p-2"
            >
                <div class="px-2">{{ 'USERS.ROLE_ADMIN' | translate }}</div>
                <div
                    class="rounded-2xl px-2 py-1 text-xs"
                    [class.bg-success]="item?.sys_admin === true"
                    [class.text-success-content]="item?.sys_admin === true"
                    [class.bg-error]="item?.sys_admin !== true"
                    [class.text-error-content]="item?.sys_admin !== true"
                >
                    {{
                        (item?.sys_admin === true
                            ? 'COMMON.TRUE'
                            : 'COMMON.FALSE'
                        ) | translate
                    }}
                </div>
            </div>
        </section>
        <section class="mb-4 flex space-x-2">
            <div
                class="grid w-1/3 flex-1 gap-2 rounded-sm border border-base-200 p-4"
                [style.gridTemplateColumns]="'5.5rem auto'"
            >
                <div class="flex items-center text-sm font-medium">
                    {{ 'COMMON.FIELD_EMAIL' | translate }}
                </div>
                <div>
                    <a
                        class="mono truncate text-sm underline"
                        [href]="'mailto:' + item?.email"
                    >
                        {{ item?.email }}
                    </a>
                </div>
                @if (item?.department) {
                    <div class="flex items-center text-sm font-medium">
                        {{ 'USERS.FIELD_DEPARTMENT' | translate }}
                    </div>
                    <div>{{ item?.department }}</div>
                }
                @if (domain | async) {
                    <div class="flex items-center text-sm font-medium">
                        {{ 'USERS.AUTHORITY_ID' | translate }}
                    </div>
                    <div class="mono text-sm">
                        <a
                            [routerLink]="['/domains', item?.authority_id]"
                            class="underline"
                        >
                            {{ (domain | async)?.name }} ({{
                                (domain | async)?.domain
                            }})
                        </a>
                    </div>
                }
                <div class="flex items-center text-sm font-medium" for="groups">
                    {{ 'USERS.FIELD_GROUPS' | translate }}
                </div>
                @if (item.groups?.length) {
                    <div class="-mx-1 flex flex-wrap">
                        @for (group of item.groups; track group) {
                            <button
                                matRipple
                                class="mono m-1 rounded-sm bg-base-200 px-2 py-1 text-[0.625rem]"
                                (click)="copyGroup(group)"
                            >
                                {{ group }}
                            </button>
                        }
                    </div>
                } @else {
                    <div class="opacity-30">
                        {{ 'USERS.NO_GROUPS' | translate }}
                    </div>
                }
                <div class="flex items-center text-sm font-medium">
                    {{ 'COMMON.CREATED_AT' | translate }}
                </div>
                <div class="flex items-center">
                    <span
                        [matTooltip]="
                            (item.created_at * 1000 | date: 'mediumDate') +
                            ', ' +
                            (item.created_at * 1000 | date: 'shortTime')
                        "
                        matTooltipPosition="right"
                    >
                        {{ item.created_at * 1000 | dateFrom }}
                    </span>
                </div>
                @if (item.updated_at) {
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.UPDATED_AT' | translate }}
                    </div>
                    <div class="flex items-center">
                        <span
                            [matTooltip]="
                                (item.updated_at * 1000 | date: 'mediumDate') +
                                ', ' +
                                (item.updated_at * 1000 | date: 'shortTime')
                            "
                            matTooltipPosition="right"
                        >
                            {{ item.updated_at * 1000 | dateFrom }}
                        </span>
                    </div>
                }
            </div>
        </section>
    `,
    styles: [
        `
            :host {
                width: 100%;
                height: 100%;
            }
        `,
    ],
    imports: [
        CommonModule,
        TranslatePipe,
        DateFromPipe,
        MatTooltipModule,
        MatRippleModule,
        RouterLink,
    ],
})
export class UserAboutComponent {
    private _service = inject(ActiveItemService);
    private _clipboard = inject(Clipboard);

    public readonly domain = this._service.item.pipe(
        distinctUntilChanged(),
        debounceTime(300),
        filter((_) => !!_ && (_ as any).authority_id),
        switchMap((i) => showDomain((i as any).authority_id)),
        shareReplay(1),
    );

    public get item(): PlaceUser {
        return (this._service.active_item as any) || {};
    }

    public copyGroup(group: string) {
        this._clipboard.copy(group);
        notifySuccess(i18n('USERS.GROUP_COPIED'));
    }
}
