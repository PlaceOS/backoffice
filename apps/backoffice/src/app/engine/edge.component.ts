import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    PlaceEdge,
    queryEdges,
    removeEdge,
    retrieveEdgeToken,
} from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { catchError, debounce, debounceTime, map, shareReplay, switchMap } from 'rxjs/operators';
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
        <button mat-button class="w-full sm:w-32 mb-4" (click)="edit()">
            Add New Edge
        </button>
        <ng-container *ngIf="!loading; else load_state">
            <div
                class="w-full"
                *ngIf="(edges | async)?.length; else empty_state"
            >
                <div table-head>
                    <div class="w-32 p-2">ID</div>
                    <div class="w-32 p-2">Name</div>
                    <div class="flex-1 p-2">Description</div>
                    <div class="w-32 p-2">API Key</div>
                    <div class="w-24 p-2 h-10"></div>
                </div>
                <div table-body>
                    <div table-row *ngFor="let item of edges | async">
                        <div class="w-32 p-2 truncate text-xs font-mono">
                            {{ item.id }}
                        </div>
                        <div class="w-32 p-2 truncate">{{ item.name }}</div>
                        <div class="flex-1 p-2 truncate">
                            {{ item.description }}
                        </div>
                        <div class="w-32 p-2">
                            <code>{{ item.x_api_key || '********' }}</code>
                        </div>
                        <div class="w-24 px-2 flex items-center justify-end ">
                            <button
                                mat-icon-button
                                class="h-10 w-10"
                                (click)="edit(item)"
                            >
                                <app-icon
                                    className="backoffice-edit"
                                ></app-icon>
                            </button>
                            <button
                                mat-icon-button
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
                padding: 1rem;
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
    private _last_change = new BehaviorSubject<PlaceEdge>(null);

    private _edge_list: Observable<PlaceEdge[]> = this._change.pipe(
        switchMap((_) => {
            this.loading = 'Loading Edges...';
            this._last_change.next(null);
            return queryEdges();
        }),
        catchError((_) => of({})),
        map((details?: { data: PlaceEdge[] }) => {
            this.loading = '';
            return (details?.data || []).sort((a, b) =>
                a.id.localeCompare(b.id)
            );
        }),
        shareReplay()
    );

    public readonly edges = combineLatest([
        this._last_change,
        this._edge_list,
    ]).pipe(
        debounceTime(500),
        map(([edge, list]) => {
            if (!edge) return list;
            const edges = list.filter((_) => _.id !== edge.id);
            edges.push(edge);
            return edges.sort((a, b) => a.id.localeCompare(b.id));
        })
    );

    public readonly token = async (edge: PlaceEdge) => {
        const details = await retrieveEdgeToken(edge.id).toPromise();
        copyToClipboard(details.token);
        notifyInfo(`Token copied to clickboard.`);
    };

    public readonly edit = async (edge?: PlaceEdge) => {
        const ref = this._dialog.open(EdgeModalComponent, { data: { edge } });
        ref.afterClosed().subscribe(_ => this._last_change.next(_));
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
        notifySuccess('Successfully removed Edge.');
        this._change.next(Date.now());
    };

    constructor(private _dialog: MatDialog) {}
}
