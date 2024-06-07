import { Clipboard } from '@angular/cdk/clipboard';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    PlaceEdge,
    queryEdges,
    removeEdge,
    retrieveEdgeToken,
} from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    map,
    shareReplay,
    startWith,
    switchMap,
} from 'rxjs/operators';
import { copyToClipboard, openConfirmModal } from '../common/general';
import {
    notifyError,
    notifyInfo,
    notifySuccess,
} from '../common/notifications';
import { EdgeModalComponent } from './edge-modal.component';

@Component({
    selector: '[admin-edge]',
    template: `
        <div
            *ngIf="(last_change | async)?.x_api_key"
            (click)="copyKey(item.x_api_key)"
            matRipple
            [matTooltip]="'Copy API Key for ' + item.name"
            class="absolute flex rounded cursor-pointer items-center right-4 top-4 bg-base-100  shadow border border-base-200  max-w-[calc(100%-11rem)] overflow-hidden"
        >
            <div
                class="p-2 flex-1 w-1/2 flex h-full items-center border-r border-base-200  "
            >
                <code class="flex-1 truncate">{{ item.x_api_key }}</code>
            </div>
            <button btn icon class="rounded-none">
                <app-icon>content_copy</app-icon>
            </button>
        </div>
        <div class="flex flex-col h-full w-full">
            <div class="flex items-center justify-between space-x-2 my-4">
                <div class="text-2xl">PlaceOS Edge Nodes</div>
                <div class="flex items-center space-x-2">
                    <button btn class="w-40" (click)="edit()">
                        Add New Edge
                    </button>
                </div>
            </div>
            <div class="flex-1 w-full h-1/2 overflow-auto">
                <simple-table
                    class="min-w-[64rem] block text-sm"
                    [data]="edges"
                    [columns]="[
                        {
                            key: 'id',
                            name: 'Name',
                            content: name_template,
                        },
                        {
                            key: 'description',
                            name: 'Description',
                            size: '40rem',
                            content: description_template
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            content: actions_template,
                            size: '6rem',
                            sortable: false
                        }
                    ]"
                    [sortable]="true"
                    empty_message="No available edges on cluster"
                ></simple-table>
            </div>
        </div>
        <ng-template #name_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <div>{{ row.name }}</div>
                <div class="text-xs opacity-30">{{ row.id }}</div>
            </div>
        </ng-template>
        <ng-template #description_template let-row="row">
            <div class="px-4 py-2 select-text overflow-hidden w-full text-xs">
                {{ row.description }}
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="flex items-center space-x-2 p-2">
                <button icon matRipple (click)="edit(row)">
                    <app-icon>edit</app-icon>
                </button>
                <button icon matRipple class="text-error" (click)="remove(row)">
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
})
export class PlaceEdgeComponent {
    public loading: string = '';

    private _change = new BehaviorSubject<number>(0);
    private _hide = new BehaviorSubject<string>('');
    public last_change = new BehaviorSubject<PlaceEdge>(null);

    public get item() {
        return this.last_change.getValue();
    }

    private _edge_list: Observable<PlaceEdge[]> = this._change.pipe(
        debounceTime(300),
        switchMap((_) => {
            this.loading = 'Loading Edges...';
            return queryEdges();
        }),
        catchError((_) => of({})),
        map((details?: { data: PlaceEdge[] }) => {
            this.loading = '';
            return (details?.data || []).sort((a, b) =>
                a.id?.localeCompare(b.id)
            );
        }),
        startWith([]),
        shareReplay(1)
    );

    public readonly edges = combineLatest([this._edge_list, this._hide]).pipe(
        debounceTime(500),
        map(([list, hide]) => {
            if (!hide) return list;
            const edges = list.filter((_) => _.id !== hide);
            return edges.sort((a, b) => a.id?.localeCompare(b.id));
        })
    );

    public readonly token = async (edge: PlaceEdge) => {
        const details = await retrieveEdgeToken(edge.id).toPromise();
        copyToClipboard(details.token);
        notifyInfo(`Token copied to clickboard.`);
    };

    public readonly edit = async (edge?: PlaceEdge) => {
        const ref = this._dialog.open(EdgeModalComponent, { data: { edge } });
        ref.afterClosed().subscribe((_) => {
            sessionStorage.setItem('BACKOFFICE.last_edge', JSON.stringify(_));
            this.last_change.next(_);
            this._change.next(Date.now());
        });
    };

    public readonly remove = async (i: PlaceEdge) => {
        const details = await openConfirmModal(
            {
                title: 'Remove edge?',
                content: `Remove <strong>${i.name}</strong>?<br>You or your users may lose access to some data.`,
                icon: { type: 'icon', class: 'backoffice-trash' },
            },
            this._dialog
        );
        if (!details) return;
        details.loading('Removing edge...');
        const err = await removeEdge(i.id)
            .toPromise()
            .catch((_) => _);
        details.close();
        if (err)
            return notifyError(
                `Error removing edge. Error: ${
                    err.statusText || err.message || err
                }`
            );
        sessionStorage.removeItem('BACKOFFICE.last_edge');
        this.last_change.next(null);
        notifySuccess('Successfully removed Edge.');
        this._hide.next(i.id);
    };

    constructor(private _dialog: MatDialog, private _clipboard: Clipboard) {}

    public ngOnInit() {
        const edge_data = sessionStorage.getItem('BACKOFFICE.last_edge');
        try {
            this.last_change.next(JSON.parse(edge_data) || null);
        } catch {}
    }

    public copyKey(key: string) {
        if (key && this._clipboard.copy(key)) {
            notifySuccess('Edge API Key copied to clipboard.');
        }
    }
}
