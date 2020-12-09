import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlaceEdge, queryEdges, removeEdge, retrieveEdgeToken } from '@placeos/ts-client';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, shareReplay, switchMap } from 'rxjs/operators';

import { copyToClipboard, openConfirmModal } from '../common/general';
import { notifyError, notifyInfo, notifySuccess } from '../common/notifications';
import { EdgeModalComponent } from './edge-modal.component';

@Component({
    selector: 'admin-edge',
    template: `
        <button mat-button class="w-full sm:w-32 mb-4" (click)="edit()">Add New Edge</button>
        <ng-container *ngIf="!loading; else load_state">
            <div class="w-full" *ngIf="(edges | async)?.length; else empty_state">
                <div table-head>
                    <div class="w-32 p-2">Name</div>
                    <div class="flex-1 p-2">description</div>
                    <div class="w-28 p-2 h-10"></div>
                </div>
                <div table-body>
                    <div table-row *ngFor="let item of edges | async">
                        <div class="w-32 p-2 truncate">{{ item.name }}</div>
                        <div class="flex-1 p-2 truncate">{{ item.description }}</div>
                        <div class="w-28 px-2 flex items-center justify-end ">
                            <button mat-icon-button class="h-10 w-10" (click)="token(item)">
                                <app-icon className="backoffice-key"></app-icon>
                            </button>
                            <button mat-icon-button class="h-10 w-10" (click)="edit(item)">
                                <app-icon className="backoffice-edit"></app-icon>
                            </button>
                            <button mat-icon-button class="h-10 w-10" (click)="remove(item)">
                                <app-icon className="backoffice-trash"></app-icon>
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
            }
        `,
    ],
})
export class PlaceEdgeComponent {
    public loading: string = '';

    private _change = new BehaviorSubject<boolean>(false);

    public readonly edges: Observable<PlaceEdge[]> = this._change.pipe(
        switchMap((_) => {
            this.loading = 'Loading Edges...';
            return queryEdges();
        }),
        catchError((_) => of({})),
        map((details: any) => {
            this.loading = '';
            return details?.data || [];
        }),
        shareReplay()
    );

    public readonly token = async (edge: PlaceEdge) => {
        const details = await retrieveEdgeToken(edge.id).toPromise();
        notifyInfo(`Token: ${details.token}`, 'Copy', () => copyToClipboard(details.token));
    };

    public readonly edit = async (edge?: PlaceEdge) =>
        this._dialog.open(EdgeModalComponent, { data: { edge } });

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
                `Error removing edge. Error: ${err.statusText || err.message || err}`
            );
        notifySuccess('Successfully removed Edge.');
        this._change.next(!this._change.getValue());
    };

    constructor(private _dialog: MatDialog) {}
}
