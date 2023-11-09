/// <reference path="../../../../../node_modules/monaco-editor/monaco.d.ts" />

import {
    Component,
    ElementRef,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import { AsyncHandler } from '../common/async-handler.class';
import { BackofficeUsersService } from '../users/users.service';

@Component({
    selector: 'diff-viewer',
    template: `
        <div
            class="relative w-full h-[32rem] border border-gray-300  select-initial"
            editor
            (window:resize)="resizeEditor()"
            #editor
        ></div>
    `,
    styles: [``],
})
export class DiffViewerComponent
    extends AsyncHandler
    implements OnInit, OnChanges
{
    /** Original version of the document */
    @Input() public original = '';
    /** Newer version of the document */
    @Input() public modified = '';
    /** Input language for syntax highlighting */
    @Input() public lang = 'yaml';

    private _editor: any;

    @ViewChild('editor', { static: true })
    private _editor_el: ElementRef<HTMLDivElement>;

    constructor(private _users: BackofficeUsersService) {
        super();
    }

    public ngOnInit() {
        this._createEditor();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.original || changes.modified) {
            this._updateModel();
        }
    }

    /** Update sizing of the editor after window has resized */
    public resizeEditor() {
        this.timeout('resize', () => this._createEditor(), 100);
    }

    private _createEditor() {
        this.unsub('editor');
        this._editor = monaco.editor.createDiffEditor(
            this._editor_el.nativeElement,
            {
                fontFamily: `"Fira Code", monospace`,
                theme: !this._users.dark_mode ? 'vs' : 'vs-dark',
                readOnly: true,
            }
        );
        this.subscription('editor', () => this._editor.dispose());
        this._updateModel();
        monaco.editor.remeasureFonts();
    }

    private _updateModel() {
        if (!this._editor) return;
        const m_model = monaco.editor.createModel(this.modified, 'text/plain');
        const o_model = monaco.editor.createModel(this.original, 'text/plain');
        this._editor.setModel({
            original: o_model,
            modified: m_model,
        });
    }
}
