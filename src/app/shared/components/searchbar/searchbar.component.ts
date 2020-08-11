
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { BaseDirective } from '../../globals/base.directive';
import { ApplicationService } from 'src/app/services/app.service';
import { BackofficeUsersService } from 'src/app/services/data/users.service';


@Component({
    selector: 'searchbar',
    templateUrl: './searchbar.template.html',
    styleUrls: ['./searchbar.styles.scss']
})
export class SearchbarComponent extends BaseDirective {
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

    constructor(private _service: ApplicationService, private _users: BackofficeUsersService) {
        super();
        const win = window as any;
        this.model.speech = !!(win.SpeechRecognition || win.webkitSpeechRecognition);
    }

    /**
     * Activate dictation search
     */
    public startDictation() {
        if (!this.input) { return; }
        if (this.model.recognition) {
            this.model.recognition.stop();
            this.model.dictate = false;
            this.model.recognition = null;
            return;
        }
        const win = self as any;
        const speech: any = win.SpeechRecognition || win.webkitSpeechRecognition;
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
        this.timeout('focus', () => {
            if (this.input && this.input.nativeElement) {
                this.input.nativeElement.focus();
                this.focus.emit();
            }
        }, 50);
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
        if (!this.limit) { return; }
        for (let i = 0; i < (this.filter || '').length; i++) {
            if (this.limit.indexOf(this.filter[i]) >= 0) {
                this.filter = this.filter.substr(0, i) + this.filter.substr(i + 1);
                i--;
            }
        }
    }
}
