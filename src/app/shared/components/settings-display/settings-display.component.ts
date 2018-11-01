
import { Component, Input, OnChanges, EventEmitter, Output } from '@angular/core';

import { BaseComponent } from '../base.component';

import * as json_lint from 'durable-json-lint';
import { AppService } from '../../../services/app.service';
import { Utils } from '../../utility.class';

@Component({
    selector: 'settings-display',
    templateUrl: './settings-display.template.html',
    styleUrls: ['./settings-display.styles.scss']
})
export class SettingsDisplayComponent extends BaseComponent implements OnChanges {
    @Input() public model: any;
    @Input() public group = '';
    @Input() public show = true;
    @Input() public sub = false;
    @Input() public input = false;
    @Output() public valid = new EventEmitter();
    @Output() public modelChange = new EventEmitter();

    public settings = [];

    public length = 0;
    public hover = -1;
    public depth = 0;
    public focused = false;
    public text_string = '{}';
    public error_list: any = {};

    constructor(private service: AppService) {
        super();
    }

    public ngOnChanges(changes: any) {
        if (changes.model) {
            this.timeout('change', () => {
                if (!this.model) { this.model = {}; }
                if (this.input && this.text_string === '{}') {
                    this.text_string = JSON.stringify(this.model || '{}', null, 4);
                }
                this.updateSettings();
            }, 100);
        }
    }

    public updateSettings() {
        if (this.input) { return this.inputToSettings(); }
        this.length = 0;
        this.settings = [];
        let formatted = JSON.stringify(this.model, null, 4);
        if (formatted === '{}') {
            formatted = (this.text_string || '{}');
        }
        const lines = formatted.split('\n');
        while (lines.length < 4) { lines.push(''); }
        for (const line of lines) {
            const line_data: any = {
                index: lines.indexOf(line),
                value: line,
                depth: (line.match(/ {4}/g) || []).length - 1,
                formatted: this.format(line)
            };
            if (this.error_list) {
                for (const error of (this.error_list.errors || [])) {
                    if (line_data.index + 1 === error.lineNumber) {
                        line_data.error = error.description;
                        break;
                    }
                }
            }
            this.settings.push(line_data);
            this.length = line.length > this.length ? line.length : this.length;
        }
    }

    public hovering(i) {
        this.hover = i;
        this.depth = this.settings[i].depth || 0;
    }

    public leave(i) {
        this.hover = -1;
        this.depth = 0;
    }

    public focus() {
        this.focused = true;
        this.updateCursor();
    }

    public updateCursor() {

    }

    public checkSettings() {
        this.error_list = json_lint(this.text_string);
        if (this.error_list && this.error_list.errors.length <= 0) {
            try {
                this.model = JSON.parse(this.text_string);
                this.modelChange.emit(this.model);
                this.valid.emit(true);
            } catch (e) {
                const message: string = e.message;
                const pos = this.getPosition(+(message.match(/[0-9]*$/g)[0]));
                this.error_list.errors.push({ description: message, lineNumber: pos.line, column: pos.column });
                this.valid.emit(false);
            }
        } else {
            this.valid.emit(false);
        }
        this.inputToSettings();
    }

    public inputToSettings() {
        this.length = 0;
        this.settings = [];
        const lines = (this.text_string || '{}').split('\n');
        while (lines.length < 4) { lines.push(''); }
        for (const line of lines) {
            const line_data: any = {
                index: lines.indexOf(line),
                value: line,
                depth: (line.match(/ {4}/g) || []).length - 1,
                formatted: this.format(line)
            };
            if (this.error_list) {
                for (const error of (this.error_list.errors || [])) {
                    if (line_data.index + 1 === error.lineNumber) {
                        line_data.error = error.description || error.message;
                        break;
                    }
                }
            }
            this.settings.push(line_data);
            this.length = line.length > this.length ? line.length : this.length;
        }
    }

    public getPosition(position: number): { line: number, column: number } {
        const lines = (this.text_string || '').split('\n');
        let remainder = position;
        for (const line of lines) {
            if (line.length + 1 < remainder) {
                remainder -= line.length + 1;
            } else {
                return { line: lines.indexOf(line) + 1, column: remainder };
            }
        }
        return { line: 1, column: position };
    }

    public format(line) {
        return line.replace(/"[^:]*"/g, '<span class="string">$&</span>')
            .replace(/\<span class="string"\>".*"\<\/span\> *:/g, '<span class="key">$&</span>')
            .replace(/[0-9]*.?[0-9]+ *,?/g, '<span class="number">$&</span>')
            .replace(/(true|false) *,?/g, '<span class="boolean">$&</span>')
            .replace(/(null|nil|undefined) *,?/g, '<span class="null">$&</span>')
            .replace(/ {4}/g, '<span class="depth"> </span>   ')
            .replace(/:\<\/span\>/g, '</span>:')
            .replace(/,\<\/span\>/g, '</span>,');
    }

    public copy() {
        Utils.copyToClipboard(JSON.stringify(this.model, null, 4));
        this.service.info('Copied settings to clipboard');
    }
}
