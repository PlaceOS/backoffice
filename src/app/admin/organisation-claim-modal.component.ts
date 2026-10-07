import { Component, inject, OnInit, signal } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {
    claimZonesForOrganisation,
    PlaceOrganisation,
    PlaceZone,
    queryZones,
} from '@placeos/ts-client';
import { readError } from '../common/errors';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { collectPages } from '../common/support-access';
import { TranslatePipe } from '../ui/translate.pipe';

@Component({
    selector: 'organisation-claim-modal',
    imports: [
        MatCheckboxModule,
        MatDialogModule,
        MatProgressBarModule,
        MatRippleModule,
        TranslatePipe,
    ],
    template: `
        <h2 mat-dialog-title>
            {{
                'ORGANISATIONS.CLAIM_TITLE'
                    | translate: { name: organisation.name }
            }}
        </h2>
        <mat-dialog-content class="w-120 max-w-full">
            <p class="mb-4 text-sm opacity-80">
                {{ 'ORGANISATIONS.CLAIM_DESC' | translate }}
            </p>
            <mat-progress-bar
                mode="indeterminate"
                class="w-full"
                [class.opacity-0]="!loading()"
            />
            <div class="flex flex-col gap-1">
                @for (zone of zones(); track zone.id) {
                    <mat-checkbox
                        [checked]="selected().has(zone.id)"
                        (change)="toggle(zone.id)"
                    >
                        {{ zone.name }}
                        @if (zone.tags?.length) {
                            <span class="text-xs opacity-60">
                                ({{ zone.tags.join(', ') }})
                            </span>
                        }
                    </mat-checkbox>
                } @empty {
                    @if (!loading()) {
                        <p class="p-3 opacity-60">
                            {{ 'ORGANISATIONS.CLAIM_EMPTY' | translate }}
                        </p>
                    }
                }
            </div>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-dialog-close class="rounded px-4 py-2">
                {{ 'COMMON.CANCEL' | translate }}
            </button>
            <button
                btn
                matRipple
                [disabled]="!selected().size || loading()"
                (click)="claim()"
            >
                {{ 'ORGANISATIONS.CLAIM_ACTION' | translate }}
            </button>
        </mat-dialog-actions>
    `,
})
export class OrganisationClaimModalComponent implements OnInit {
    private _dialog_ref =
        inject<MatDialogRef<OrganisationClaimModalComponent>>(MatDialogRef);
    private _data = inject<{ organisation: PlaceOrganisation }>(
        MAT_DIALOG_DATA,
    );

    public readonly organisation = this._data.organisation;
    public readonly loading = signal(false);
    public readonly zones = signal<PlaceZone[]>([]);
    public readonly selected = signal(new Set<string>());

    public async ngOnInit() {
        this.loading.set(true);
        const roots = await collectPages(
            queryZones({ parent_id: 'root', limit: 500 }),
        ).catch(() => [] as PlaceZone[]);
        this.zones.set(roots.filter((zone) => !zone.organisation_id));
        this.loading.set(false);
    }

    public toggle(id: string) {
        this.selected.update((set) => {
            const next = new Set(set);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    }

    public async claim() {
        this.loading.set(true);
        try {
            const result = await claimZonesForOrganisation(
                this.organisation.id,
                [...this.selected()],
            );
            notifySuccess(i18n('ORGANISATIONS.CLAIM_SUCCESS', { ...result }));
            this._dialog_ref.close(result);
        } catch (err) {
            notifyError(
                i18n('ORGANISATIONS.CLAIM_ERROR', {
                    error: await readError(err),
                }),
            );
            this.loading.set(false);
        }
    }
}
