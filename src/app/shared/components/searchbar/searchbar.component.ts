
import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';

import { BaseComponent } from '../base.component';

@Component({
    selector: 'searchbar',
    templateUrl: './searchbar.template.html',
    styleUrls: ['./searchbar.styles.scss']
})
export class SearchbarComponent extends BaseComponent {
    @Input() public filter: string;
    @Input() public limit: string;
    @Input() public dictation = true;
    @Input() public clearable = true;
    @Input() public placeholder = 'Search...';
    @Output() public filterChange = new EventEmitter();
    @Output() public focus = new EventEmitter();
    @Output() public blur = new EventEmitter();

    public model: any = {};

    @ViewChild('input') private input: ElementRef;

    constructor() {
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
        const Speech: any = win.SpeechRecognition || win.webkitSpeechRecognition;
        if (Speech) {
            this.model.recognition = new Speech();

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
