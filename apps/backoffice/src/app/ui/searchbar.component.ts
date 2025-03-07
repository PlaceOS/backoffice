import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from '@angular/core';

import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { BackofficeUsersService } from 'apps/backoffice/src/app/users/users.service';

@Component({
    selector: 'searchbar',
    template: `
        <div
            [class]="
                'absolute right-16 top-2 flex w-12 items-center space-x-2 overflow-hidden rounded px-2 sm:relative sm:right-auto sm:top-auto sm:!w-full sm:bg-base-100 ' +
                (model.focus || filter || model.dictate
                    ? 'w-4/5 bg-base-100 bg-opacity-100 text-base-content'
                    : 'bg-opacity-20 text-base-100 sm:bg-opacity-20')
            "
            widget
            tabindex="0"
            (focus)="model.focus || filter || model.dictate ? '' : focusInput()"
        >
            <app-icon class="text-xl">search</app-icon>
            <input
                #input
                class="w-24 flex-1 border-none bg-base-100 bg-opacity-0 outline-none"
                [(ngModel)]="filter"
                (ngModelChange)="post()"
                (focus)="model.focus = true; focus.emit($event)"
                (blur)="model.focus = false; blur.emit($event)"
                [placeholder]="placeholder"
            />
            <button
                icon
                matRipple
                *ngIf="
                    model.speech && dictation && (model.focus || model.dictate)
                "
                [class.active]="model.dictate"
                (click)="startDictation()"
            >
                <app-icon>mic</app-icon>
            </button>
            <button
                icon
                matRipple
                class="close"
                *ngIf="filter && clearable"
                (click)="clear()"
            >
                <app-icon>close</app-icon>
            </button>
            <ng-content></ng-content>
        </div>
    `,
    styles: [
        `
            .active {
                color: var(--pending);
            }

            input::placeholder {
                color: rgba(255, 255, 255, 0.35);
            }

            .bg-opacity-100 input::placeholder {
                color: rgba(0, 0, 0, 0.35);
            }

            [widget] {
                transition:
                    color 200ms,
                    background-color 200ms,
                    width 200ms;
            }
        `,
    ],
    standalone: false
})
export class SearchbarComponent extends AsyncHandler {
    @Input() public filter: string;
    @Input() public limit: string;
    @Input() public dictation = true;
    @Input() public clearable = true;
    @Input() public placeholder = 'Search...';
    @Output() public filterChange = new EventEmitter();
    @Output() public focus = new EventEmitter();
    @Output() public blur = new EventEmitter();

    public model: any = {};

    @ViewChild('input', { static: true }) private input: ElementRef;

    /** Whether dark mode is enabled */
    public get dark_mode(): boolean {
        return this._users.dark_mode;
    }

    constructor(private _users: BackofficeUsersService) {
        super();
        const win = window as any;
        this.model.speech = !!(
            win.SpeechRecognition || win.webkitSpeechRecognition
        );
    }

    /**
     * Activate dictation search
     */
    public startDictation() {
        if (!this.input) {
            return;
        }
        if (this.model.recognition) {
            this.model.recognition.stop();
            this.model.dictate = false;
            this.model.recognition = null;
            return;
        }
        const win = self as any;
        const speech: any =
            win.SpeechRecognition || win.webkitSpeechRecognition;
        if (speech) {
            this.model.recognition = new speech();

            this.model.recognition.continuous = false;
            this.model.recognition.interimResults = false;

            this.model.recognition.lang = 'en-US';
            this.model.recognition.start();
            this.model.dictate = true;

            this.model.recognition.onresult = (e: any) => {
                // Update search field with dictation result
                this.input.nativeElement.value = e.results[0][0].transcript;
                this.filter = e.results[0][0].transcript;
                this.model.recognition.stop();
                this.post();
                this.model.dictate = false;
            };

            this.model.recognition.onerror = (e: any) => {
                this.model.recognition.stop();
                this.model.dictate = false;
            };
        }
    }

    public focusInput() {
        this.model.focus = true;
        this.timeout(
            'focus',
            () => {
                if (this.input && this.input.nativeElement) {
                    this.input.nativeElement.focus();
                    this.focus.emit();
                }
            },
            50,
        );
    }

    public clear() {
        this.filter = '';
        this.post();
    }

    public post() {
        this.checkLimitations();
        this.timeout('post', () => {
            this.filterChange.emit(this.filter);
        });
    }

    public checkLimitations() {
        if (!this.limit) {
            return;
        }
        for (let i = 0; i < (this.filter || '').length; i++) {
            if (this.limit.indexOf(this.filter[i]) >= 0) {
                this.filter =
                    this.filter.substr(0, i) + this.filter.substr(i + 1);
                i--;
            }
        }
    }
}
