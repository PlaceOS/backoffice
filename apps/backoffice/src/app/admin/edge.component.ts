import { Clipboard } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    PlaceEdge,
    queryEdges,
    removeEdge,
    retrieveEdgeToken,
} from '@placeos/ts-client';
import { lastValueFrom } from 'rxjs';
import { copyToClipboard, openConfirmModal } from '../common/general';
import {
    notifyError,
    notifyInfo,
    notifySuccess,
} from '../common/notifications';
import { IconComponent } from '../ui/icon.component';
import { DateFromPipe } from '../ui/pipes/date-from.pipe';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { EdgeModalComponent } from './edge-modal.component';

@Component({
    selector: '[admin-edge]',
    template: `
        @if (last_change()?.x_api_key) {
            @let item = last_change();
            <div
                (click)="copyKey(item.x_api_key)"
                matRipple
                [matTooltip]="'Copy API Key for ' + item.name"
                class="absolute right-4 top-4 flex max-w-[calc(100%-11rem)] cursor-pointer items-center overflow-hidden rounded border border-base-200 bg-base-100 shadow"
            >
                <div
                    class="flex h-full w-1/2 flex-1 items-center border-r border-base-200 p-2"
                >
                    <code class="flex-1 truncate">{{ item.x_api_key }}</code>
                </div>
                <button btn icon class="rounded-none">
                    <app-icon>content_copy</app-icon>
                </button>
            </div>
        }
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2 px-4">
                <div class="text-2xl">
                    {{ 'ADMIN.EDGE_HEADER' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <button btn class="w-40" (click)="edit()">
                        {{ 'ADMIN.EDGE_ADD' | translate }}
                    </button>
                </div>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!loading()"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-[64rem] text-sm"
                    [data]="edges()"
                    [columns]="[
                        {
                            key: 'online',
                            name: ' ',
                            content: bool_template,
                        },
                        {
                            key: 'id',
                            name: 'COMMON.FIELD_NAME' | translate,
                            content: name_template,
                        },
                        {
                            key: 'description',
                            name: 'COMMON.FIELD_DESCRIPTION' | translate,
                            size: '36rem',
                            content: description_template,
                        },
                        {
                            key: 'last_seen',
                            name: 'COMMON.LAST_SEEN' | translate,
                            content: time_template,
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            content: actions_template,
                            size: '6rem',
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'ADMIN.EDGE_LIST_EMPTY' | translate"
                ></simple-table>
            </div>
        </div>
        <ng-template #name_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <div>{{ row.name }}</div>
                <div class="text-xs opacity-30">{{ row.id }}</div>
            </div>
        </ng-template>
        <ng-template #time_template let-data="data">
            <div class="flex flex-col p-4">
                <div>{{ data | dateFrom }}</div>
            </div>
        </ng-template>
        <ng-template #bool_template let-data="data">
            <div
                class="flex h-full w-full items-center justify-center"
                [matTooltip]="
                    (data ? 'COMMON.ONLINE' : 'COMMON.OFFLINE') | translate
                "
                matTooltipPosition="right"
            >
                <div
                    class="h-3 w-3 rounded-full"
                    [class.bg-success]="data"
                    [class.bg-error]="!data"
                ></div>
            </div>
        </ng-template>
        <ng-template #description_template let-data="data">
            <div class="w-full select-text overflow-hidden px-4 py-2 text-xs">
                {{ data }}
                @if (!data) {
                    <span class="opacity-30">
                        {{ 'COMMON.DESCRIPTION_EMPTY' | translate }}
                    </span>
                }
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="flex items-center space-x-2 p-2">
                <button
                    icon
                    matRipple
                    [matTooltip]="'ADMIN.EDGE_EDIT' | translate"
                    (click)="edit(row)"
                >
                    <app-icon>edit</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    class="text-error"
                    [matTooltip]="'ADMIN.EDGE_REMOVE' | translate"
                    (click)="remove(row)"
                >
                    <app-icon>delete</app-icon>
                </button>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
                min-height: 10rem;
            }
        `,
    ],
    imports: [
        CommonModule,
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        MatTooltipModule,
        DateFromPipe,
        SimpleTableComponent,
        MatProgressBarModule,
    ],
})
export class PlaceEdgeComponent implements OnInit {
    private _dialog = inject(MatDialog);
    private _clipboard = inject(Clipboard);

    public readonly loading = signal('');
    public readonly hide_edge = signal('');
    public readonly edge_list = signal<PlaceEdge[]>([]);
    public readonly edges = computed(() => {
        return this.edge_list().filter(({ id }) => id !== this.hide_edge());
    });
    public readonly last_change = signal<PlaceEdge>(null);

    public ngOnInit() {
        const edge_data = sessionStorage.getItem('BACKOFFICE.last_edge');
        try {
            this.last_change.set(JSON.parse(edge_data) || null);
        } catch {}
        this.loadEdges();
    }

    public async token(edge: PlaceEdge) {
        const details = await lastValueFrom(retrieveEdgeToken(edge.id));
        copyToClipboard(details.token);
        notifyInfo(`Token copied to clickboard.`);
    }

    public async edit(edge?: PlaceEdge) {
        const ref = this._dialog.open(EdgeModalComponent, { data: { edge } });
        ref.afterClosed().subscribe((_) => {
            sessionStorage.setItem('BACKOFFICE.last_edge', JSON.stringify(_));
            this.last_change.set(_);
            this.loadEdges();
        });
    }

    public async remove(i: PlaceEdge) {
        const details = await openConfirmModal(
            {
                title: 'Remove edge?',
                content: `Remove <strong>${i.name}</strong>?<br>You or your users may lose access to some data.`,
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog,
        );
        if (!details) return;
        details.loading('Removing edge...');
        const err = await lastValueFrom(removeEdge(i.id)).catch((_) => _);
        details.close();
        if (err)
            return notifyError(
                `Error removing edge. Error: ${
                    err.statusText || err.message || err
                }`,
            );
        sessionStorage.removeItem('BACKOFFICE.last_edge');
        this.last_change.set(null);
        notifySuccess('Successfully removed Edge.');
        this.hide_edge.set(i.id);
    }

    public copyKey(key: string) {
        if (key && this._clipboard.copy(key)) {
            notifySuccess('Edge API Key copied to clipboard.');
        }
    }

    public async loadEdges() {
        this.loading.set('Loading edge node list...');
        const { data } = await lastValueFrom(queryEdges());
        this.edge_list.set(
            (data || []).sort((a, b) => a.id?.localeCompare(b.id)),
        );
        this.loading.set('');
    }
}
