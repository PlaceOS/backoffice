import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PlaceRepository, PlaceRepositoryType } from '@placeos/ts-client';
import { marked } from 'marked';
import { AsyncHandler } from '../common/async-handler.class';
import { DateFromPipe } from '../ui/pipes/date-from.pipe';
import { SafePipe } from '../ui/pipes/safe.pipe';
import { SanitizePipe } from '../ui/pipes/sanitise.pipe';
import { TranslatePipe } from '../ui/translate.pipe';
import { RepositoriesStateService } from './repositories-state.service';

@Component({
    selector: 'repository-about',
    template: `
        <section class="mb-4 flex space-x-2">
            <div class="w-1/3 flex-1">
                <div
                    class="grid gap-4 rounded border border-base-200 p-4"
                    [style.gridTemplateColumns]="'5.5rem auto'"
                >
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                    </div>
                    <div class="select-all">
                        {{ item.description || 'No description' }}
                    </div>
                    <div class="flex items-center text-sm font-medium">
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
                    <div class="flex items-center text-sm font-medium">
                        {{ 'REPOS.FOLDER_NAME' | translate }}
                    </div>
                    <div
                        class="select-all"
                        [class.underline]="item.type === 'interface'"
                        [class.pointer-events-none]="item.type !== 'interface'"
                    >
                        <a [href]="local_url" target="_blank">
                            {{ item.folder_name }}
                            @if (!item.folder_name) {
                                <span class="opacity-30">
                                    {{ 'REPOS.FOLDER_NAME_EMPTY' | translate }}
                                </span>
                            }
                        </a>
                    </div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'REPOS.ROOT_PATH' | translate }}
                    </div>
                    <div class="flex items-center font-mono text-sm">
                        {{ item.root_path }}
                        @if (item.root_path === '') {
                            <span class="opacity-30">Not set</span>
                        }
                    </div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.CREATED_AT' | translate }}
                    </div>
                    <div class="flex items-center">
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
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.UPDATED_AT' | translate }}
                    </div>
                    <div class="flex items-center">
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
            </div>
            <div class="w-1/3 flex-1">
                <div
                    class="grid gap-4 overflow-hidden rounded border border-base-200 p-4"
                    [style.gridTemplateColumns]="'6.5rem auto'"
                >
                    <div class="flex items-center text-sm font-medium">
                        {{ 'REPOS.URI' | translate }}
                    </div>
                    <div class="select-all overflow-hidden underline">
                        <a
                            class="block w-full truncate"
                            [href]="item.uri | safe: 'url'"
                            target="_blank"
                            >{{ repo_uri || 'No URI set' }}</a
                        >
                    </div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.GIT_BRANCH' | translate }}
                    </div>
                    <div class="flex items-center overflow-hidden">
                        <code
                            class="inline-block max-w-full truncate text-xs"
                            [matTooltip]="item.branch"
                        >
                            {{ item.branch }}
                        </code>
                    </div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.GIT_COMMIT' | translate }}
                    </div>
                    <div class="flex items-center overflow-hidden">
                        <code
                            class="inline-block max-w-full truncate text-xs"
                            [matTooltip]="
                                commit && commit !== item.commit_hash
                                    ? commit
                                    : item.commit_hash
                            "
                        >
                            {{ item.commit_hash || 'HEAD' }}
                            @if (commit && commit !== item.commit_hash) {
                                <span class="mono select-text break-words">
                                    ({{ commit }})
                                </span>
                            }
                        </code>
                    </div>
                    @if (is_interface) {
                        <button
                            btn
                            matRipple
                            class="col-span-2 w-full"
                            [disabled]="pulling"
                            (click)="pullLatestCommit()"
                        >
                            @if (!pulling) {
                                {{ 'COMMON.GIT_PULL_LATEST' | translate }}
                            } @else {
                                <mat-spinner diameter="32"></mat-spinner>
                            }
                        </button>
                    }
                </div>
            </div>
        </section>
        @if (item?.description) {
            <hr class="my-4 text-base-300" />
            <div class="w-full rounded border border-base-200">
                <h3 class="w-full rounded bg-base-200 p-4 text-lg font-medium">
                    {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                </h3>
                <div
                    class="markdown w-full overflow-auto p-4 text-sm"
                    [innerHTML]="description | sanitize"
                ></div>
            </div>
        }
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
    imports: [
        CommonModule,
        SanitizePipe,
        TranslatePipe,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatTooltipModule,
        SafePipe,
        DateFromPipe,
    ],
})
export class RepositoryAboutComponent extends AsyncHandler implements OnInit {
    private _service = inject(RepositoriesStateService);

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

    public get is_interface() {
        return (
            (this.item as PlaceRepository).type ===
            PlaceRepositoryType.Interface
        );
    }

    /** HTML string for rendering the description */
    public get description(): string {
        return marked(this.item.description || '', { async: false }) as string;
    }

    public ngOnInit(): void {
        this.commit = '';
        this.subscription(
            'commit',
            this._service.commit.subscribe((_) => (this.commit = _)),
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
