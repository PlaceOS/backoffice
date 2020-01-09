/// <reference path="../../../../../node_modules/monaco-editor/monaco.d.ts" />
import { Component, Input, OnChanges, EventEmitter, Output, Renderer2, ViewChild, ElementRef, OnInit, SimpleChanges } from '@angular/core';

import { ApplicationService } from '../../../services/app.service';
import { BaseDirective } from '../../globals/base.directive';
import { copyToClipboard } from '../../utilities/general.utilities';
import { HashMap } from '../../utilities/types.utilities';

@Component({
    selector: 'settings-display',
    templateUrl: './settings-display.template.html',
    styleUrls: ['./settings-display.styles.scss']
})
export class SettingsDisplayComponent extends BaseDirective implements OnInit {
    @Input() public model: string;
    @Input() public group = '';
    @Input() public show = true;
    @Input() public sub = false;
    @Input() public input = false;
    @Output() public valid = new EventEmitter();
    @Output() public modelChange = new EventEmitter();

    @ViewChild('editor', { static: true }) private element: ElementRef;

    private editor: any;

    public get code(): string {
        console.log('Model:', this.model);
        return this.model;
    }

    constructor(private service: ApplicationService, private renderer: Renderer2) {
        super();
    }

    public ngOnInit(): void {
        if (this.element && this.element.nativeElement) {
            this.editor = monaco.editor.create(this.element.nativeElement, {
                value: this.code,
                language: 'yaml',
                fontFamily: `"Fira Code", monospace`,

                lineNumbers: 'on',
                roundedSelection: false,
                scrollBeyondLastLine: false,
                readOnly: !this.input,
                theme: 'vs-dark'
            });
        }
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.model && this.model && this.editor) {
            this.editor.setValue(this.code);
        }
    }
}
