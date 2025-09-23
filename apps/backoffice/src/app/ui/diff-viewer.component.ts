/// <reference path="../../../../../node_modules/monaco-editor/monaco.d.ts" />

import {
    Component,
    ElementRef,
    OnChanges,
    OnInit,
    SimpleChanges,
    inject,
    input,
    viewChild,
} from '@angular/core';
import { AsyncHandler } from '../common/async-handler.class';
import { BackofficeUsersService } from '../users/users.service';

@Component({
    selector: 'diff-viewer',
    template: `
        <div
            class="border-gray-300 select-initial relative h-[32rem] w-full border"
            editor
            (window:resize)="resizeEditor()"
            #editor
        ></div>
    `,
    styles: [``],
    imports: [],
})
export class DiffViewerComponent
    extends AsyncHandler
    implements OnInit, OnChanges
{
    private _users = inject(BackofficeUsersService);

    /** Original version of the document */
    public readonly original = input('');
    /** Newer version of the document */
    public readonly modified = input('');
    /** Input language for syntax highlighting */
    public readonly lang = input('yaml');

    private _editor: any;

    private readonly _editor_el =
        viewChild<ElementRef<HTMLDivElement>>('editor');

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
            this._editor_el().nativeElement,
            {
                fontFamily: `"Fira Code", monospace`,
                theme: !this._users.dark_mode ? 'vs' : 'vs-dark',
                readOnly: true,
            },
        );
        this.subscription('editor', () => this._editor.dispose());
        this._updateModel();
        monaco.editor.remeasureFonts();
    }

    private _updateModel() {
        if (!this._editor) return;
        const m_model = monaco.editor.createModel(
            this.modified(),
            'text/plain',
        );
        const o_model = monaco.editor.createModel(
            this.original(),
            'text/plain',
        );
        this._editor.setModel({
            original: o_model,
            modified: m_model,
        });
    }
}
