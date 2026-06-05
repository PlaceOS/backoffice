import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PlaceRepository, PlaceRepositoryType } from '@placeos/ts-client';
import { map } from 'rxjs/operators';
import { DateFromPipe } from '../ui/pipes/date-from.pipe';
import { MarkdownPipe } from '../ui/pipes/markdown.pipe';
import { SafePipe } from '../ui/pipes/safe.pipe';
import { TranslatePipe } from '../ui/translate.pipe';
import { RepositoriesStateService } from './repositories-state.service';

@Component({
    selector: 'repository-about',
    template: `
        <section class="mb-4 flex space-x-2">
            <div class="w-1/3 flex-1">
                <div
                    class="border-base-200 grid gap-4 rounded-sm border p-4"
                    [style.gridTemplateColumns]="'5.5rem auto'"
                >
                    <div class="flex items-center text-sm font-medium">
                        {{ 'REPOS.FIELD_TYPE' | translate }}
                    </div>
                    <div>
                        {{
                            (is_interface()
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
                        [class.underline]="item().type === 'interface'"
                        [class.pointer-events-none]="
                            item().type !== 'interface'
                        "
                    >
                        <a [href]="local_url()" target="_blank">
                            {{ item().folder_name }}
                            @if (!item().folder_name) {
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
                        {{ item().root_path }}
                        @if (item().root_path === '') {
                            <span class="opacity-30">Not set</span>
                        }
                    </div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.CREATED_AT' | translate }}
                    </div>
                    <div class="flex items-center">
                        <span
                            [matTooltip]="
                                (item().created_at * 1000
                                    | date: 'mediumDate') +
                                ', ' +
                                (item().created_at * 1000 | date: 'shortTime')
                            "
                            matTooltipPosition="right"
                        >
                            {{ item().created_at * 1000 | dateFrom }}
                        </span>
                    </div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.UPDATED_AT' | translate }}
                    </div>
                    <div class="flex items-center">
                        <span
                            [matTooltip]="
                                (item().updated_at * 1000
                                    | date: 'mediumDate') +
                                ', ' +
                                (item().updated_at * 1000 | date: 'shortTime')
                            "
                            matTooltipPosition="right"
                        >
                            {{ item().updated_at * 1000 | dateFrom }}
                        </span>
                    </div>
                </div>
            </div>
            <div class="w-1/3 flex-1">
                <div
                    class="border-base-200 grid gap-4 overflow-hidden rounded-sm border p-4"
                    [style.gridTemplateColumns]="'6.5rem auto'"
                >
                    <div class="flex items-center text-sm font-medium">
                        {{ 'REPOS.URI' | translate }}
                    </div>
                    <div class="overflow-hidden underline select-all">
                        <a
                            class="block w-full truncate"
                            [href]="item().uri | safe: 'url'"
                            target="_blank"
                            >{{ repo_uri() || 'No URI set' }}</a
                        >
                    </div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.GIT_BRANCH' | translate }}
                    </div>
                    <div class="flex items-center overflow-hidden">
                        <code
                            class="inline-block max-w-full truncate text-xs"
                            [matTooltip]="item().branch"
                        >
                            {{ item().branch }}
                        </code>
                    </div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.GIT_COMMIT' | translate }}
                    </div>
                    <div class="flex items-center overflow-hidden">
                        <code
                            class="inline-block max-w-full truncate text-xs"
                            [matTooltip]="
                                commit() && commit() !== item().commit_hash
                                    ? commit()
                                    : item().commit_hash
                            "
                        >
                            {{ item().commit_hash || 'HEAD' }}
                            @if (commit() && commit() !== item().commit_hash) {
                                <span class="mono wrap-break-word select-text">
                                    ({{ commit() }})
                                </span>
                            }
                        </code>
                    </div>
                    @if (is_interface()) {
                        <button
                            btn
                            matRipple
                            class="col-span-2 w-full"
                            [disabled]="pulling()"
                            (click)="pullLatestCommit()"
                        >
                            @if (!pulling()) {
                                {{ 'COMMON.GIT_PULL_LATEST' | translate }}
                            } @else {
                                <mat-spinner diameter="32"></mat-spinner>
                            }
                        </button>
                    }
                </div>
            </div>
        </section>
        @if (item()?.description) {
            <hr class="text-base-300 my-4" />
            <div class="border-base-200 w-full rounded-sm border">
                <h3
                    class="bg-base-200 w-full rounded-sm p-4 text-lg font-medium"
                >
                    {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                </h3>
                <div
                    class="markdown w-full overflow-auto p-4 text-sm"
                    [innerHTML]="
                        $safeNavigationMigration(item()?.description)
                            | markdown
                            | async
                    "
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
        MarkdownPipe,
        TranslatePipe,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatTooltipModule,
        SafePipe,
        DateFromPipe,
    ],
})
export class RepositoryAboutComponent {
    private _service = inject(RepositoriesStateService);

    /** Whether the latest commit is being pulled on the server */
    public readonly pulling = signal(false);
    public readonly commit = toSignal(this._service.commit, {
        initialValue: '',
    });
    public readonly item = toSignal(
        this._service.item.pipe(map((item) => item as PlaceRepository)),
        {
            initialValue: undefined as PlaceRepository | undefined,
        },
    );

    public readonly local_url = computed(() =>
        this.item()?.type === PlaceRepositoryType.Interface
            ? `${location.origin}/${this.item()?.folder_name}/`
            : `${location.hash}`,
    );
    public readonly repo_uri = computed(() =>
        this.item()?.uri.replace(/\/[a-zA-Z0-9\-.:]*@/, '/...@'),
    );
    public readonly is_interface = computed(
        () => this.item()?.type === PlaceRepositoryType.Interface,
    );
    /**
     * Send request to server to pull the latest commit for the active repository
     */
    public async pullLatestCommit() {
        this.pulling.set(true);
        await this._service.pullLatestCommit();
        this.pulling.set(false);
    }
}
