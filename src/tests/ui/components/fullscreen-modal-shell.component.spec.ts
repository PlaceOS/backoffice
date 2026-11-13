import { Dialog, DialogRef } from '@angular/cdk/dialog';
import {
    Component,
    Pipe,
    PipeTransform,
    provideZonelessChangeDetection,
    signal,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { openConfirmModal } from '../../../app/overlays/confirm-modal.component';
import { ChipListComponent } from '../../../app/ui/controls/chip-list.component';
import { OptionComponent } from '../../../app/ui/controls/option.component';
import { SelectComponent } from '../../../app/ui/controls/select.component';
import { FullscreenModalShellComponent } from '../../../app/ui/fullscreen-modal-shell.component';
import { TranslatePipe } from '../../../app/ui/translate.pipe';

vi.mock('@placeos/ts-client', () =>
    vi.importActual('@placeos/ts-client/dist/index.es.js'),
);
vi.mock('../../../app/overlays/confirm-modal.component', () => ({
    openConfirmModal: vi.fn(),
}));

@Pipe({ name: 'translate' })
class TestTranslatePipe implements PipeTransform {
    transform(value: string) {
        return value;
    }
}

@Component({
    imports: [
        OptionComponent,
        SelectComponent,
        FullscreenModalShellComponent,
        ChipListComponent,
    ],
    template: `
        <fullscreen-modal-shell [loading]="loading()">
            <app-chip-list [value]="['Tag']" />
            <app-select value="a">
                <app-option value="a">A</app-option>
                <app-option value="b">B</app-option>
            </app-select>
        </fullscreen-modal-shell>
    `,
})
class TestFormComponent {
    public readonly loading = signal('');
}

describe('FullscreenModalShellComponent', () => {
    const escape = new Subject<KeyboardEvent>();
    const ref = {
        close: vi.fn(),
        disableClose: false,
        backdropClick: new Subject<MouseEvent>(),
        keydownEvents: escape,
    };

    function createForm() {
        TestBed.configureTestingModule({
            imports: [TestFormComponent],
            providers: [
                provideZonelessChangeDetection(),
                { provide: DialogRef, useValue: ref },
                { provide: Dialog, useValue: {} },
            ],
        }).overrideComponent(FullscreenModalShellComponent, {
            remove: { imports: [TranslatePipe] },
            add: { imports: [TestTranslatePipe] },
        });
        const fixture = TestBed.createComponent(TestFormComponent);
        fixture.detectChanges();
        const element: HTMLElement = fixture.nativeElement;
        const shell = fixture.debugElement.children[0]
            .componentInstance as FullscreenModalShellComponent;
        return { fixture, element, shell };
    }

    beforeEach(() => {
        vi.resetAllMocks();
        vi.mocked(openConfirmModal).mockResolvedValue({
            reason: undefined,
            loading: vi.fn(),
            close: vi.fn(),
        });
    });

    it('closes on Escape when nothing was edited', async () => {
        createForm();
        expect(ref.disableClose).toBe(true);
        escape.next(new KeyboardEvent('keydown', { key: 'Escape' }));
        await Promise.resolve();
        expect(openConfirmModal).not.toHaveBeenCalled();
        expect(ref.close).toHaveBeenCalled();
    });

    it('asks before closing once a field was typed in', async () => {
        const { element } = createForm();
        element
            .querySelector('main')
            .dispatchEvent(new Event('input', { bubbles: true }));
        escape.next(new KeyboardEvent('keydown', { key: 'Escape' }));
        await Promise.resolve();
        expect(openConfirmModal).toHaveBeenCalled();
        expect(ref.close).not.toHaveBeenCalled();
    });

    it('closes both dialogs once discarding is confirmed', async () => {
        const confirm = {
            reason: 'done' as const,
            loading: vi.fn(),
            close: vi.fn(),
        };
        vi.mocked(openConfirmModal).mockResolvedValue(confirm);
        const { element, shell } = createForm();
        element
            .querySelector('main')
            .dispatchEvent(new Event('input', { bubbles: true }));
        await shell.close();
        expect(confirm.close).toHaveBeenCalled();
        expect(ref.close).toHaveBeenCalled();
    });

    it('asks before closing after a chip was removed', async () => {
        const { element, shell } = createForm();
        element.querySelector<HTMLElement>('.chip-action').click();
        await shell.close();
        expect(openConfirmModal).toHaveBeenCalled();
        expect(ref.close).not.toHaveBeenCalled();
    });

    it('asks before closing after a select was changed by keyboard', async () => {
        const { element, shell } = createForm();
        const select = element.querySelector<HTMLElement>('app-select');
        select.focus();
        select.dispatchEvent(
            new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }),
        );
        await shell.close();
        expect(openConfirmModal).toHaveBeenCalled();
    });

    it('does not count moving between fields as an edit', async () => {
        const { element, shell } = createForm();
        element
            .querySelector('app-select')
            .dispatchEvent(
                new KeyboardEvent('keydown', { key: 'Tab', bubbles: true }),
            );
        await shell.close();
        expect(openConfirmModal).not.toHaveBeenCalled();
        expect(ref.close).toHaveBeenCalled();
    });

    it('does not close while saving', async () => {
        const { fixture, shell } = createForm();
        fixture.componentInstance.loading.set('Saving...');
        await fixture.whenStable();
        await shell.close();
        expect(ref.close).not.toHaveBeenCalled();
    });
});
