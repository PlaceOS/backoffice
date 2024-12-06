import { Component } from '@angular/core';
import { PlaceRepositoryType } from '@placeos/ts-client';
import { AsyncHandler } from '../common/async-handler.class';
import { RepositoriesStateService } from './repositories-state.service';

@Component({
    selector: 'repository-about',
    template: `
        <section class="mb-4 flex space-x-2">
            <div
                class="rounded p-4 border border-base-200 w-1/3 flex-1 grid gap-2"
                [style.gridTemplateColumns]="'5.5rem auto'"
            >
                <div class="text-sm font-medium flex items-center">
                    {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                </div>
                <div class="select-all">
                    {{ item.description || 'No description' }}
                </div>
                <div class="text-sm font-medium flex items-center">
                    {{ 'REPOS.FIELD_TYPE' | translate }}
                </div>
                <div>
                    {{
                        (item.type === 'interface'
                            ? 'REPOS.INTERFACE_REPO'
                            : 'REPOS.DRIVER_REPO'
                        ) | translate
                    }}
                </div>
                <div class="text-sm font-medium flex items-center">
                    {{ 'REPOS.FOLDER_NAME' | translate }}
                </div>
                <div
                    class="select-all"
                    [class.underline]="item.type === 'interface'"
                    [class.pointer-events-none]="item.type !== 'interface'"
                >
                    <a [href]="local_url" target="_blank">
                        {{ item.folder_name }}
                        <span class="opacity-30" *ngIf="!item.folder_name">
                            {{ 'REPOS.FOLDER_NAME_EMPTY' | translate }}
                        </span>
                    </a>
                </div>
                <div class="text-sm font-medium flex items-center">
                    {{ 'COMMON.CREATED_AT' | translate }}
                </div>
                <div class=" flex items-center">
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
                <div class="text-sm font-medium flex items-center">
                    {{ 'COMMON.UPDATED_AT' | translate }}
                </div>
                <div class=" flex items-center">
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
            </div>
            <div
                class="rounded p-4 border border-base-200 w-1/3 flex-1 grid gap-2 overflow-hidden"
                [style.gridTemplateColumns]="'6.5rem auto'"
            >
                <div class="text-sm font-medium flex items-center">
                    {{ 'REPOS.URI' | translate }}
                </div>
                <div class="underline select-all overflow-hidden">
                    <a
                        class="truncate w-full block"
                        [href]="item.uri | safe: 'url'"
                        target="_blank"
                        >{{ repo_uri || 'No URI set' }}</a
                    >
                </div>
                <div class="text-sm font-medium flex items-center">
                    {{ 'COMMON.GIT_BRANCH' | translate }}
                </div>
                <div class="flex items-center overflow-hidden">
                    <code
                        class="text-xs truncate inline-block max-w-full"
                        [matTooltip]="item.branch"
                    >
                        {{ item.branch }}
                    </code>
                </div>
                <div class="text-sm font-medium flex items-center">
                    {{ 'COMMON.GIT_COMMIT' | translate }}
                </div>
                <div class="flex items-center overflow-hidden">
                    <code
                        class="text-xs truncate inline-block max-w-full"
                        [matTooltip]="
                            commit && commit !== item.commit_hash
                                ? commit
                                : item.commit_hash
                        "
                    >
                        {{ item.commit_hash || 'HEAD' }}
                        <span
                            class="select-text mono  break-words"
                            *ngIf="commit && commit !== item.commit_hash"
                        >
                            ({{ commit }})
                        </span>
                    </code>
                </div>
                <button
                    btn
                    class="w-full col-span-2"
                    [disabled]="pulling"
                    (click)="pullLatestCommit()"
                >
                    <ng-container *ngIf="!pulling; else spinner">
                        {{ 'COMMON.GIT_PULL_LATEST' | translate }}
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
export class RepositoryAboutComponent extends AsyncHandler {
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
