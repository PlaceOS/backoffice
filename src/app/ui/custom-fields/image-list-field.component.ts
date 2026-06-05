import { Clipboard } from '@angular/cdk/clipboard';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
    AfterViewInit,
    Component,
    computed,
    effect,
    ElementRef,
    forwardRef,
    inject,
    signal,
    viewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';

import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AsyncHandler } from '../../common/async-handler.class';
import { unique } from '../../common/general';
import { notifyInfo } from '../../common/notifications';
import { UploadDetails } from '../../common/uploads';
import { UploadsService } from '../../common/uploads.service';
import { AuthenticatedImageDirective } from '../authenticated-image.directive';
import { IconComponent } from '../icon.component';
import { TranslatePipe } from '../translate.pipe';

@Component({
    selector: 'image-list-field',
    template: `
        <div
            images
            #image_list
            class="relative mb-2 flex w-full items-center space-x-2 overflow-hidden py-2"
            (window:resize)="ngAfterViewInit()"
        >
            <div
                image
                class="hover:bg-base-content/10 :bg-base-100/10 border-base-200 relative flex h-32 w-36 shrink-0 cursor-pointer flex-col items-center justify-center rounded-sm border-2 border-dashed"
                [style.transform]="'translate(-' + offset + '00%)'"
                [class.pointer-events-none]="disabled()"
                [class.opacity-30]="disabled()"
            >
                <icon class="text-4xl opacity-60">add</icon>
                <p class="w-4/5 text-center opacity-60">
                    {{ 'COMMON.IMAGE_UPLOADS' | translate }}
                </p>
                <input
                    type="file"
                    class="absolute inset-0 h-32 w-32 cursor-pointer opacity-0"
                    [disabled]="disabled()"
                    (change)="uploadImages($event)"
                />
            </div>
            @for (url of list(); track url; let i = $index) {
                <div
                    image
                    class="border-base-300 bg-base-200 relative h-32 w-36 shrink-0 overflow-hidden rounded-sm border"
                    [style.transform]="'translate(-' + offset + '00%)'"
                >
                    <img
                        auth
                        [source]="url"
                        [alt]="'Preview - ' + url"
                        class="pointer-events-none absolute inset-0 z-10 object-contain p-2 text-center align-middle text-xs"
                    />
                    <div overlay class="text-base-100 absolute inset-0 z-20">
                        <div
                            bg
                            class="absolute inset-0 bg-black opacity-0"
                        ></div>
                        <div
                            actions
                            class="absolute top-0 right-0 left-0 flex items-center justify-center space-x-2 opacity-0"
                        >
                            <button icon (click)="copyLink(url)">
                                <icon>link</icon>
                            </button>
                            <button icon (click)="viewImage(url)">
                                <icon>visibility</icon>
                            </button>
                            <button
                                icon
                                [disabled]="disabled()"
                                (click)="removeImage(url)"
                            >
                                <icon>close</icon>
                            </button>
                        </div>
                    </div>
                </div>
            }
            @for (item of uploads(); track item.id; let i = $index) {
                <button
                    image
                    class="border-base-content/10 /5 bg-base-200 flex h-32 w-36 shrink-0 items-center justify-center rounded-sm border bg-cover bg-center"
                    [style.transform]="'translate(-' + offset + '00%)'"
                    [matTooltip]="item.error"
                    (click)="retryUpload(item)"
                >
                    @if (!item.error) {
                        <mat-progress-spinner
                            [value]="item.progress"
                            [diameter]="64"
                            mode="determinate"
                        ></mat-progress-spinner>
                    }
                    @if (item.error) {
                        <icon class="text-error text-6xl">warning</icon>
                    }
                    @if (item.error) {
                        <div
                            overlay
                            class="text-base-100 hover:bg-base-content hover:bg-opacity-50 absolute inset-0 flex items-center justify-center"
                        >
                            <icon class="text-3xl opacity-0">refresh</icon>
                        </div>
                    }
                </button>
            }
            @if (length() > view_space()) {
                <button
                    icon
                    matRipple
                    [disabled]="offset() === 0"
                    class="bg-base-100 absolute top-1/2 left-0 -translate-y-1/2 transform"
                    (click)="decrement()"
                >
                    <icon>chevron_left</icon>
                </button>
                <button
                    icon
                    matRipple
                    [disabled]="offset() >= length() - view_space()"
                    class="bg-base-100 absolute top-1/2 right-0 -translate-y-1/2 transform"
                    (click)="increment()"
                >
                    <icon>chevron_right</icon>
                </button>
            }
        </div>
        <mat-form-field appearance="outline" class="w-full">
            <mat-chip-grid #chipList aria-label="Image List">
                @for (item of list(); track item) {
                    <mat-chip-row (removed)="removeImage(item)">
                        <div class="max-w-md truncate">{{ item }}</div>
                        <button
                            matChipRemove
                            [attr.aria-label]="'Remove ' + item"
                            [disabled]="disabled()"
                        >
                            <icon>cancel</icon>
                        </button>
                    </mat-chip-row>
                }
            </mat-chip-grid>
            <input
                [placeholder]="'COMMON.IMAGE_ADD_URL' | translate"
                [matChipInputFor]="chipList"
                [matChipInputSeparatorKeyCodes]="separators"
                [matChipInputAddOnBlur]="true"
                [disabled]="disabled()"
                (matChipInputTokenEnd)="addImage($event)"
            />
        </mat-form-field>
    `,
    styles: [
        `
            :host {
                width: 100%;
            }

            [overlay] {
                transition: background 200ms;
            }

            [image]:hover [actions],
            [image]:hover > icon {
                opacity: 1 !important;
            }

            [image]:hover [bg] {
                opacity: 0.4 !important;
            }

            [actions],
            [image] > icon {
                transition: opacity 200ms;
            }

            [image] {
                transition: transform 200ms;
            }
        `,
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ImageListFieldComponent),
            multi: true,
        },
    ],
    imports: [
        TranslatePipe,
        IconComponent,
        MatFormFieldModule,
        MatChipsModule,
        MatRippleModule,
        MatProgressSpinnerModule,
        AuthenticatedImageDirective,
        MatTooltipModule,
    ],
})
export class ImageListFieldComponent
    extends AsyncHandler
    implements AfterViewInit, ControlValueAccessor
{
    private _clipboard = inject(Clipboard);
    private _uploads = inject(UploadsService);

    /** List of images */
    public list = signal<string[]>([]);
    /** List of images */
    public readonly upload_ids = signal<number[]>([]);
    private readonly _upload_list = signal<UploadDetails[]>([]);
    public readonly upload_list = this._upload_list;
    public readonly offset = signal(0);
    public readonly view_space = signal(0);
    public readonly disabled = signal(false);
    public readonly separators = [COMMA, ENTER];
    public readonly length = computed(
        () => this.list().length + this.upload_list().length + 1,
    );

    public readonly uploads = computed(() => {
        const ids = this.upload_ids();
        return this.upload_list().filter((i) => ids.includes(i.id));
    });

    private readonly _list_el =
        viewChild<ElementRef<HTMLDivElement>>('image_list');

    /** Form control on change handler */
    private _onChange: (_: string[]) => void;
    /** Form control on touch handler */
    private _onTouch: (_: string[]) => void;

    constructor() {
        super();
        effect(() => {
            const list = this.upload_list();
            const id_list = this.upload_ids();
            for (const id of id_list) {
                const item = list.find((_) => _.id === id);
                if (item && item.progress >= 100) {
                    this.addImageUrl(item.link);
                    this.upload_ids.update((ids) =>
                        ids.filter((_) => _ !== id),
                    );
                }
            }
        });
    }

    public ngAfterViewInit() {
        const box = this._list_el().nativeElement.getBoundingClientRect();
        this.view_space.set(Math.floor(box.width / 152));
    }

    public increment() {
        this.offset.update((o) => o + 1);
    }

    public decrement() {
        this.offset.update((o) => o - 1);
    }

    public copyLink(url: string) {
        this._clipboard.copy(url);
        notifyInfo('Copied image URL to clipboard');
    }

    public viewImage(_url: string) {
        // TODO: Implement image viewer
    }

    public removeImage(url: string) {
        if (this.disabled()) return;
        this.setValue(this.list().filter((_) => _ !== url));
    }

    public addImage(event: MatChipInputEvent) {
        if (this.disabled()) return;
        if (!event.value) return;
        this.setValue(unique([...this.list(), event.value]) as string[]);
        event.chipInput.inputElement.value = '';
    }

    public addImageUrl(url: string) {
        if (this.disabled()) return;
        this.setValue(unique([...this.list(), url]) as string[]);
    }

    public retryUpload(item: UploadDetails) {
        if (this.disabled()) return;
        if (item.error) {
            item.error = null;
            item.upload.resume();
        }
    }

    public async uploadImages(event: Event) {
        if (this.disabled()) return;
        const element = event.target as HTMLInputElement;
        /* istanbul ignore else */
        if (element?.files) {
            const files: FileList = element.files;
            /* istanbul ignore else */
            if (files.length) {
                this.interval('update_status', () =>
                    this._updateUploadHistory(),
                );
                for (let i = 0; i < files.length; i++) {
                    const id = await this._uploads.uploadFileWithPermissions(
                        files[i],
                    );
                    this.upload_ids.update((list) => [...list, id]);
                }
            }
        }
    }

    public setValue(value: string[]) {
        if (this.disabled()) return;
        this.list.set(value);
        if (this._onChange) this._onChange(value);
        this._onTouch?.(value);
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: string[]) {
        this.list.set(value || []);
    }

    public readonly registerOnChange = (fn: (_: string[]) => void) =>
        (this._onChange = fn);
    public readonly registerOnTouched = (fn: (_: string[]) => void) =>
        (this._onTouch = fn);

    public setDisabledState(disabled: boolean) {
        this.disabled.set(disabled);
    }

    private async _updateUploadHistory() {
        const list = this.upload_ids();
        if (list.length === 0) return;
        const global_list = this._uploads.upload_list();
        const new_list = global_list.filter((_) =>
            list.find((i) => i === _.id),
        );
        const done_list = new_list.filter((file) => file.progress >= 100);
        this._upload_list.set(new_list);
        done_list.forEach((i) => delete i.upload);
        if (done_list.length >= list.length)
            this.clearInterval('update_status');
    }
}
