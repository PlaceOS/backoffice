import {
    Component,
    Pipe,
    PipeTransform,
    provideZonelessChangeDetection,
    signal,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { Subject } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { openConfirmModal } from '../../../app/overlays/confirm-modal.component';
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
    imports: [FullscreenModalShellComponent, MatChipsModule, MatSelectModule],
    template: `
        <fullscreen-modal-shell [loading]="loading()">
            <mat-chip-set>
                <mat-chip-row>
                    Tag
                    <button matChipRemove>x</button>
                </mat-chip-row>
            </mat-chip-set>
            <mat-select value="a">
                <mat-option value="a">A</mat-option>
                <mat-option value="b">B</mat-option>
            </mat-select>
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
        backdropClick: () => new Subject<MouseEvent>(),
        keydownEvents: () => escape,
    };

    function createForm() {
        TestBed.configureTestingModule({
            imports: [TestFormComponent],
            providers: [
                provideZonelessChangeDetection(),
                provideNoopAnimations(),
                { provide: MatDialogRef, useValue: ref },
                { provide: MatDialog, useValue: {} },
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

    it('asks before closing after a chip was removed', async () => {
        const { element, shell } = createForm();
        element.querySelector<HTMLElement>('[matChipRemove]').click();
        await shell.close();
        expect(openConfirmModal).toHaveBeenCalled();
        expect(ref.close).not.toHaveBeenCalled();
    });

    it('asks before closing after a select was changed by keyboard', async () => {
        const { element, shell } = createForm();
        const select = element.querySelector<HTMLElement>('mat-select');
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
            .querySelector('mat-select')
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
