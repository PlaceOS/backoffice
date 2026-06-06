import {
    Component,
    ElementRef,
    inject,
    input,
    model,
    OnInit,
    output,
    signal,
    viewChild,
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { AsyncHandler } from '../common/async-handler.class';
import { BackofficeUsersService } from '../users/users.service';
import { IconComponent } from './icon.component';

@Component({
    selector: 'searchbar',
    template: `
        <div
            [class]="
                'sm:bg-base-100 absolute top-2 right-16 flex w-12 items-center space-x-2 overflow-hidden rounded-sm px-2 sm:relative sm:top-auto sm:right-auto sm:w-full! ' +
                (focused() || filter() || dictate()
                    ? 'bg-base-100 bg-opacity-100 text-base-content w-4/5'
                    : 'bg-opacity-20 text-base-100 sm:bg-opacity-20')
            "
            widget
            tabindex="0"
            (focus)="focused() || filter() || dictate() ? '' : focusInput()"
        >
            <icon class="text-xl">search</icon>
            <input
                #input
                class="bg-base-100 bg-opacity-0 w-24 flex-1 border-none outline-hidden"
                [ngModel]="filter()"
                (ngModelChange)="filter.set($event); post()"
                (focus)="focused.set(true); inputFocus.emit()"
                (blur)="focused.set(false); inputBlur.emit()"
                [placeholder]="placeholder()"
            />
            @if (has_speech() && dictation() && (focused() || dictate())) {
                <button
                    icon
                    matRipple
                    [class.active]="dictate()"
                    (click)="startDictation()"
                >
                    <icon>mic</icon>
                </button>
            }
            @if (filter() && clearable()) {
                <button icon matRipple class="close" (click)="clear()">
                    <icon>close</icon>
                </button>
            }
            <ng-content />
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
    imports: [IconComponent, MatRippleModule, FormsModule],
})
export class SearchbarComponent extends AsyncHandler implements OnInit {
    private _users = inject(BackofficeUsersService);

    public readonly filter = model<string>(undefined);
    public readonly limit = input<string>(undefined);
    public readonly dictation = input(true);
    public readonly clearable = input(true);
    public readonly placeholder = input('Search...');
    public readonly inputFocus = output();
    public readonly inputBlur = output();
    public readonly focused = signal(false);
    public readonly has_speech = signal(false);
    public readonly dictate = signal(false);
    public readonly recognition = signal<unknown>(null);

    private readonly _input_el = viewChild<ElementRef>('input');

    /** Whether dark mode is enabled */
    public get dark_mode(): boolean {
        return this._users.dark_mode;
    }

    public ngOnInit() {
        const win = window as unknown as Record<string, unknown>;
        this.has_speech.set(
            !!(win.SpeechRecognition || win.webkitSpeechRecognition),
        );
    }
    /**
     * Activate dictation search
     */
    public startDictation() {
        if (!this._input_el()?.nativeElement) return;
        if (this.recognition()) {
            (this.recognition() as unknown as { stop: () => void }).stop();
            this.dictate.set(false);
            this.recognition.set(null);
            return;
        }
        const win = self as unknown as Record<string, unknown>;
        const Speech: unknown =
            win.SpeechRecognition || win.webkitSpeechRecognition;
        if (Speech) {
            const sr = new (Speech as new () => unknown)();
            (sr as unknown as Record<string, unknown>).continuous = false;
            (sr as unknown as Record<string, unknown>).interimResults = false;

            (sr as unknown as Record<string, unknown>).lang = 'en-US';
            (sr as unknown as { start: () => void }).start();
            this.recognition.set(sr);
            this.dictate.set(true);

            (sr as unknown as Record<string, unknown>).onresult = (
                _e: unknown,
            ) => {
                // Update search field with dictation result
                this._input_el().nativeElement.value = (
                    _e as Record<string, unknown>
                ).results[0][0].transcript;
                this.filter.set(
                    (_e as Record<string, unknown>).results[0][0].transcript,
                );
                (sr as unknown as { stop: () => void }).stop();
                this.post();
                this.dictate.set(false);
            };

            (sr as unknown as Record<string, unknown>).onerror = (
                _e: unknown,
            ) => {
                (sr as unknown as { stop: () => void }).stop();
                this.dictate.set(false);
            };
        }
    }

    public focusInput() {
        this.focused.set(true);
        this.timeout(
            'focus',
            () => {
                const inputValue = this._input_el();
                if (inputValue && inputValue.nativeElement) {
                    inputValue.nativeElement.focus();
                    this.inputFocus.emit();
                }
            },
            50,
        );
    }

    public clear() {
        this.filter.set('');
        this.post();
    }

    public post() {
        this.checkLimitations();
        this.timeout('post', () => {
            this.filter.set(this.filter());
        });
    }

    public checkLimitations() {
        const limit = this.limit();
        if (!limit) {
            return;
        }
        for (let i = 0; i < (this.filter() || '').length; i++) {
            if (limit.indexOf(this.filter()[i]) >= 0) {
                this.filter.update(
                    (str) => str.substr(0, i) + str.substr(i + 1),
                );
                i--;
            }
        }
    }
}
