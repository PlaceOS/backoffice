import { Component } from '@angular/core';
import { PlaceRepositoryType } from '@placeos/ts-client';
import { BaseClass } from '../common/base.class';
import { RepositoriesStateService } from './repositories-state.service';

@Component({
    selector: 'repository-about',
    template: `
        <section class="mb-4 text-center flex space-x-2">
            <div
                class="rounded p-2 border border-gray-200 dark:border-neutral-500 space-y-2 w-1/3 flex-1 flex flex-col"
            >
                <div class="flex items-center space-x-2">
                    <label i18n="@@descriptionLabel">Description:</label>
                    <div class="value select-all">
                        {{ item.description || 'No description' }}
                    </div>
                </div>
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
                <div class="flex items-center space-x-2">
                    <label i18n="@@repoCreatedAtLabel">Created:</label>
                    <div class="value">
                        {{ item.created_at * 1000 | dateFrom }}
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <label i18n="@@repoUpdatedAtLabel">Updated:</label>
                    <div class="value">
                        {{ item.updated_at * 1000 | dateFrom }}
                    </div>
                </div>
            </div>
            <div
                class="rounded p-2 border border-gray-200 dark:border-neutral-500 space-y-2 w-1/3 flex-1 flex flex-col"
            >
                <div class="flex items-center space-x-2">
                    <label i18n="@@repoUriLabel">Repository URI:</label>
                    <div class="value underline select-all">
                        <a [href]="item.uri | safe: 'url'" target="_blank">{{
                            repo_uri || 'No URI set'
                        }}</a>
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <label i18n="@@repoBranchLabel">Branch:</label>
                    <code class="text-xs">
                        {{ item.branch }}
                    </code>
                </div>
                <div class="flex items-center space-x-2">
                    <label i18n="@@repoCommitHashLabel" class="whitespace-nowrap">Commit hash:</label>
                    <code class="text-xs truncate">
                        {{ item.commit_hash || 'No Commit hash set' }}
                        <span
                            class="select-text mono"
                            *ngIf="commit && commit !== item.commit_hash"
                        >
                            ({{ commit }})
                        </span>
                    </code>
                </div>
                <div class="flex-1"></div>
                <button
                    mat-button
                    class="w-full"
                    [disabled]="pulling"
                    (click)="pullLatestCommit()"
                >
                    <ng-container
                        *ngIf="!pulling; else spinner"
                        i18n="@@repoPullAction"
                    >
                        Pull latest commit
                    </ng-container>
                </button>
            </div>
        </section>
        <ng-template #spinner>
            <mat-spinner diameter="32"></mat-spinner>
        </ng-template>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }

            .mono {
                font-family: var(--mono-font);
            }

            label {
                width: 6rem;
                text-align: left;
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
