import { Component } from '@angular/core';
import { PlaceRepositoryType } from '@placeos/ts-client';
import { BaseClass } from '../common/base.class';
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
                        <ng-container
                            *ngIf="!pulling; else spinner"
                            i18n="@@repoPullAction"
                        >
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
                    { item.type, select, interface { Interface Repository }
                    driver { Driver Repository }, other { =Unknown=} }
                </div>
            </div>
            <div class="flex items-center space-x-2">
                <label i18n="@@repoFolderNameLabel">Folder name:</label>
                <div
                    class="value select-all"
                    [class.underline]="item.type === 'interface'"
                    [class.pointer-events-none]="item.type !== 'interface'"
                >
                    <a [href]="local_url" target="_blank">{{
                        item.folder_name || 'No folder set'
                    }}</a>
                </div>
            </div>
            <div
                class="flex items-center space-x-2"
                *ngIf="item.type === 'Interface'"
            >
                <label i18n="@@repoBranchLabel">Branch:</label>
                <div class="value select-all">{{ item.branch || 'master' }}</div>
            </div>
            <div class="flex items-center space-x-2">
                <label i18n="@@repoUriLabel">Repository URI:</label>
                <div class="value underline select-all">
                    <a [href]="item.uri | safe: 'url'" target="_blank">{{
                        repo_uri || 'No URI set'
                    }}</a>
                </div>
            </div>
            <div class="flex items-center space-x-2">
                <label i18n="@@repoCommitHashLabel">Commit hash:</label>
                <div class="value select-text">
                    {{ item.commit_hash || 'No Commit hash set' }}
                    <span class="select-text" *ngIf="commit && commit !== item.commit_hash">
                        ({{ commit }})
                    </span>
                </div>
            </div>
            <div class="flex items-center space-x-2">
                <label i18n="@@descriptionLabel">Description:</label>
                <div class="value select-all">
                    {{ item.description || 'No description' }}
                </div>
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
export class RepositoryAboutComponent extends BaseClass {
    /** Whether the latest commit is being pulled on the server */
    public pulling: boolean;

    public commit = '';

    public get item(): any {
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

    constructor(private _service: RepositoriesStateService) {
        super();
    }

    public ngOnInit(): void {
        this.commit = '';
        this.subscription(
            'commit',
            this._service.commit.subscribe((_) => (this.commit = _))
        );
    }

    /**
     * Send request to server to pull the latest commit for the active repository
     */
    public async pullLatestCommit() {
        this.pulling = true;
        await this._service.pullLatestCommit();
        this.pulling = false;
    }
}
