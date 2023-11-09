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
        <button btn class="w-full sm:w-40 my-4" (click)="edit()">
            Add New Edge
        </button>
        <ng-container *ngIf="!loading; else load_state">
            <div
                table
                class="w-full min-w-[52rem]"
                *ngIf="(edges | async)?.length; else empty_state"
            >
                <div table-head>
                    <div class="w-32 p-2">ID</div>
                    <div class="w-40 p-2">Name</div>
                    <div class="flex-1 p-2">Description</div>
                    <div class="w-24 p-2 h-10"></div>
                </div>
                <div table-body>
                    <div table-row *ngFor="let item of edges | async">
                        <div class="w-32 p-2 truncate text-xs font-mono">
                            {{ item.id }}
                        </div>
                        <div class="w-40 p-2 truncate text-sm">
                            {{ item.name }}
                        </div>
                        <div class="flex-1 w-1/4 p-2 truncate text-xs">
                            {{ item.description }}
                        </div>
                        <div class="w-24 px-2 flex items-center justify-end ">
                            <button
                                btn
                                icon
                                class="h-10 w-10"
                                (click)="edit(item)"
                            >
                                <app-icon
                                    className="backoffice-edit"
                                ></app-icon>
                            </button>
                            <button
                                btn
                                icon
                                class="h-10 w-10"
                                (click)="remove(item)"
                            >
                                <app-icon
                                    className="backoffice-trash"
                                ></app-icon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </ng-container>
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
                <app-icon className="backoffice-copy"></app-icon>
            </button>
        </div>
        <ng-template #empty_state>
            <div class="flex flex-col items-center justify-center">
                <p>No edges</p>
            </div>
        </ng-template>
        <ng-template #load_state>
            <div class="w-full flex flex-col items-center justify-center">
                <mat-spinner class="mb-4" [diameter]="48"></mat-spinner>
                <p>{{ loading }}</p>
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
        shareReplay()
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
