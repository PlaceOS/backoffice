import { Component } from '@angular/core';
import { PlaceRepository, PlaceRepositoryType } from '@placeos/ts-client';

import { RepositoriesStateService } from './repositories-state.service';

@Component({
    selector: 'repository-about',
    template: `
        <section class="mb-4 text-center">
            <mat-card class="w-52">
                <mat-card-content i18n="@@repoPullActionDetails">
                    Pull the latest commit for<br />
                    this repository
                </mat-card-content>
                <mat-card-actions>
                    <button
                        mat-button
                        class="w-40"
                        [disabled]="pulling"
                        (click)="pullLatestCommit()"
                    >
                        <ng-container *ngIf="!pulling; else spinner" i18n="@@repoPullAction">
                            Pull
                        </ng-container>
                    </button>
                </mat-card-actions>
            </mat-card>
        </section>
        <section class="space-y-2">
            <div class="flex items-center space-x-2">
                <label i18n="@@repoTypeLabel">Type:</label>
                <div class="value" i18n="@@driverListEmpty">
                    { item.type, select, Interface { Interface Repository } Driver { Driver
                    Repository } }
                </div>
            </div>
            <div class="flex items-center space-x-2">
                <label i18n="@@repoFolderNameLabel">Folder name:</label>
                <div class="value" [class.underline]="item.type === 'Interface'">
                    <a [href]="local_url">{{ item.folder_name || 'No folder set' }}</a>
                </div>
            </div>
            <div class="flex items-center space-x-2" *ngIf="item.type === 'Interface'">
                <label i18n="@@repoBranchLabel">Branch:</label>
                <div class="value">{{ item.branch || 'master' }}</div>
            </div>
            <div class="flex items-center space-x-2">
                <label i18n="@@repoUriLabel">Repository URI:</label>
                <div class="value underline">
                    <a [href]="item.uri | safe: 'url'">{{ repo_uri || 'No URI set' }}</a>
                </div>
            </div>
            <div class="flex items-center space-x-2">
                <label i18n="@@repoCommitHashLabel">Commit hash:</label>
                <div class="value">
                    {{ item.commit_hash || 'No Commit hash set' }}
                    <span *ngIf="(commit | async) !== item.commit_hash">
                        ({{ commit | async }})
                    </span>
                </div>
            </div>
            <div class="flex items-center space-x-2">
                <label i18n="@@descriptionLabel">Description:</label>
                <div class="value">{{ item.description || 'No description' }}</div>
            </div>
            <div class="flex items-center space-x-2">
                <label i18n="@@repoCreatedAtLabel">Created:</label>
                <div class="value">{{ item.created_at * 1000 | dateFrom }}</div>
            </div>
            <div class="flex items-center space-x-2">
                <label i18n="@@repoUpdatedAtLabel">Updated:</label>
                <div class="value">{{ item.updated_at * 1000 | dateFrom }}</div>
            </div>
        </section>
        <ng-template #spinner>
            <mat-spinner diameter="32"></mat-spinner>
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
export class RepositoryAboutComponent {
    /** Whether the latest commit is being pulled on the server */
    public pulling: boolean;

    public readonly commit = this._service.commit;

    public get item(): PlaceRepository {
        return this._service.active_item as any;
    }

    public get local_url() {
        return this.item.type === PlaceRepositoryType.Interface
            ? `${location.origin}/${this.item.folder_name}/`
            : `${location.hash}`;
    }

    public get repo_uri() {
        return this.item?.uri.replace(/\/[a-zA-Z0-9\-\.:]*@/, '/...@');
    }

    constructor(private _service: RepositoriesStateService) {}

    /**
     * Send request to server to pull the latest commit for the active repository
     */
    public async pullLatestCommit() {
        this.pulling = true;
        await this._service.pullLatestCommit();
        this.pulling = false;
    }
}
