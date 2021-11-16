import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, forwardRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { BaseClass } from 'apps/backoffice/src/app/common/base.class';
import {
    copyToClipboard,
    unique,
} from 'apps/backoffice/src/app/common/general';
import { notifyInfo } from 'apps/backoffice/src/app/common/notifications';
import {
    UploadDetails,
    uploadFile,
} from 'apps/backoffice/src/app/common/uploads';

@Component({
    selector: 'image-list-field',
    template: `
        <div
            images
            #image_list
            class="space-x-2 py-2 overflow-hidden mb-2 w-full flex items-center relative"
            (window:resize)="ngAfterViewInit()"
        >
            <div
                image
                class="relative rounded border-2 border-gray-600 border-dashed flex-shrink-0 flex flex-col items-center justify-center h-32 w-36 hover:bg-gray-200 cursor-pointer"
                [style.transform]="'translate(-' + offset + '00%)'"
            >
                <app-icon
                    class="text-4xl"
                    className="backoffice-plus"
                ></app-icon>
                <p>Upload Image(s)</p>
                <input
                    type="file"
                    class="absolute inset-0 opacity-0 h-32 w-32"
                    (change)="uploadImages($event)"
                />
            </div>
            <div
                image
                *ngFor="let url of list; let i = index"
                class="bg-center bg-cover h-32 w-36 relative rounded overflow-hidden flex-shrink-0"
                [style.transform]="'translate(-' + offset + '00%)'"
                [style.background-image]="'url(' + url + ')'"
            >
                <div
                    overlay
                    class="absolute inset-0 hover:bg-black hover:bg-opacity-50 text-white"
                >
                    <div
                        actions
                        class="absolute top-0 left-0 right-0 flex items-center justify-center space-x-2 opacity-0"
                    >
                        <button mat-icon-button (click)="copyLink(url)">
                            <app-icon className="backoffice-link"></app-icon>
                        </button>
                        <button mat-icon-button (click)="viewImage(url)">
                            <app-icon className="backoffice-eye"></app-icon>
                        </button>
                        <button mat-icon-button (click)="removeImage(url)">
                            <app-icon className="backoffice-cross"></app-icon>
                        </button>
                    </div>
                </div>
            </div>
            <div
                image
                *ngFor="let item of upload_list; let i = index"
                class="bg-center bg-cover h-32 w-36 rounded border bg-secondary bg-opacity-30 border-gray-200 flex items-center justify-center flex-shrink-0"
                [style.transform]="'translate(-' + offset + '00%)'"
                [matTooltip]="item.error"
                (click)="retryUpload(item)"
            >
                <mat-progress-spinner
                    *ngIf="!item.error"
                    [value]="item.progress"
                    [diameter]="64"
                    mode="determinate"
                ></mat-progress-spinner>
                <app-icon
                    *ngIf="item.error"
                    class="text-error text-6xl"
                    className="backoffice-warning"
                ></app-icon>
                <div
                    overlay
                    *ngIf="item.error"
                    class="absolute inset-0 hover:bg-black hover:bg-opacity-50 text-white flex items-center justify-center"
                >
                    <app-icon
                        class="text-3xl opacity-0"
                        className="backoffice-retweet"
                    ></app-icon>
                </div>
            </div>
            <button
                mat-icon-button
                *ngIf="length > view_space"
                [disabled]="offset === 0"
                class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white"
                (click)="offset = offset - 1"
            >
                <app-icon className="backoffice-chevron-left"></app-icon>
            </button>
            <button
                mat-icon-button
                *ngIf="length > view_space"
                [disabled]="offset >= length - view_space"
                class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white"
                (click)="offset = offset + 1"
            >
                <app-icon className="backoffice-chevron-right"></app-icon>
            </button>
        </div>
        <mat-form-field appearance="outline" class="w-full">
            <mat-chip-list #chipList aria-label="Editor Groups">
                <input
                    placeholder="Add image via URL"
                    i18n-placeholder="@@editorsPlaceholder"
                    [matChipInputFor]="chipList"
                    [matChipInputSeparatorKeyCodes]="separators"
                    [matChipInputAddOnBlur]="true"
                    (matChipInputTokenEnd)="addImage($event)"
                />
            </mat-chip-list>
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

            [overlay]:hover [actions],
            [overlay]:hover > app-icon {
                opacity: 1 !important;
            }

            [actions],
            [overlay] > app-icon {
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
})
export class ImageListFieldComponent extends BaseClass {
    /** List of images */
    public list: string[] = [];
    /** List of images */
    public upload_list: UploadDetails[] = [];

    public offset: number = 0;

    public view_space: number = 0;

    public readonly separators = [COMMA, ENTER];

    public get length() {
        return this.list.length + this.upload_list.length + 1;
    }

    @ViewChild('image_list') private _list_el: ElementRef<HTMLDivElement>;

    /** Form control on change handler */
    private _onChange: (_: string[]) => void;
    /** Form control on touch handler */
    private _onTouch: (_: string[]) => void;

    public ngAfterViewInit() {
        const box = this._list_el.nativeElement.getBoundingClientRect();
        this.view_space = Math.floor(box.width / 152);
    }

    public copyLink(url: string) {
        copyToClipboard(url);
        notifyInfo('Copied image URL to clipboard');
    }

    public viewImage(url: string) {}

    public removeImage(url: string) {
        this.setValue(this.list.filter((_) => _ !== url));
    }

    public addImage(event: MatChipInputEvent) {
        if (!event.value) return;
        this.setValue(unique([...this.list, event.value]));
        event.input.value = '';
    }

    public uploadImages(event) {
        const element: HTMLInputElement = event.target as any;
        /* istanbul ignore else */
        if (element?.files) {
            const files: FileList = element.files;
            /* istanbul ignore else */
            if (files.length) {
                for (let i = 0; i < files.length; i++) {
                    uploadFile(files[i]).subscribe(
                        (details) =>
                            (this.upload_list = [
                                ...this.upload_list.filter(
                                    (_) => _.id !== details.id
                                ),
                                details,
                            ]),
                        (details) =>
                            (this.upload_list = [
                                ...this.upload_list.filter(
                                    (_) => _.id !== details.id
                                ),
                                details,
                            ]),
                        () => this.updateList()
                    );
                }
            }
        }
    }

    /**
     * Retry a failed upload
     * @param details Details of the failed upload
     */
    public retryUpload(details: UploadDetails) {
        console.log('Retry:', details);
        if (details.error) {
            details.error = null;
            details.upload.resume();
        }
    }

    public updateList() {
        const list = [...this.list];
        for (const upload of this.upload_list) {
            if (upload.progress >= 100) {
                list.push(upload.link);
            }
        }
        this.upload_list = this.upload_list.filter((_) => _.progress >= 100);
        this.setValue(list);
    }

    public setValue(value: string[]) {
        this.list = value;
        if (this._onChange) this._onChange(value);
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: string[]) {
        this.list = value;
    }

    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange(fn: (_: string[]) => void): void {
        this._onChange = fn;
    }

    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched(fn: (_: string[]) => void): void {
        this._onTouch = fn;
    }
}
