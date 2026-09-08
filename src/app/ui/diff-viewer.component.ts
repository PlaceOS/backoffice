/// <reference path="../../../node_modules/monaco-editor/monaco.d.ts" />

import {
    AfterViewInit,
    Component,
    DestroyRef,
    ElementRef,
    inject,
    input,
    OnChanges,
    signal,
    SimpleChanges,
    viewChild,
} from '@angular/core';
import { AsyncHandler } from '../common/async-handler.class';
import { loadMonaco } from '../common/monaco';
import { BackofficeUsersService } from '../users/users.service';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'diff-viewer',
    template: `
        @if (load_error()) {
            <p role="alert">{{ 'COMMON.EDITOR_LOAD_ERROR' | translate }}</p>
            <button type="button" (click)="resizeEditor()">
                {{ 'COMMON.RETRY' | translate }}
            </button>
        }
        <div
            class="select-initial relative h-128 w-full border border-gray-300"
            editor
            (window:resize)="resizeEditor()"
            #editor
        ></div>
    `,
    styles: [``],
    imports: [TranslatePipe],
})
export class DiffViewerComponent
    extends AsyncHandler
    implements AfterViewInit, OnChanges
{
    private _users = inject(BackofficeUsersService);
    private _destroy_ref = inject(DestroyRef);
    private _load_id = 0;
    public readonly load_error = signal(false);

    /** Original version of the document */
    public readonly original = input('');
    /** Newer version of the document */
    public readonly modified = input('');
    /** Input language for syntax highlighting */
    public readonly lang = input('yaml');

    private _editor: monaco.editor.IStandaloneDiffEditor | null = null;

    private readonly _editor_el =
        viewChild<ElementRef<HTMLDivElement>>('editor');

    public ngAfterViewInit() {
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

    private async _createEditor() {
        const load_id = ++this._load_id;
        this.load_error.set(false);
        try {
            await loadMonaco();
        } catch {
            if (!this._destroy_ref.destroyed && load_id === this._load_id) {
                this.load_error.set(true);
            }
            return;
        }
        if (this._destroy_ref.destroyed || load_id !== this._load_id) return;
        this.unsub('models');
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
        this.unsub('models');
        const m_model = monaco.editor.createModel(
            this.modified(),
            'text/plain',
        );
        const o_model = monaco.editor.createModel(
            this.original(),
            'text/plain',
        );
        this.subscription('models', () => {
            m_model.dispose();
            o_model.dispose();
        });
        this._editor.setModel({
            original: o_model,
            modified: m_model,
        });
    }
}
