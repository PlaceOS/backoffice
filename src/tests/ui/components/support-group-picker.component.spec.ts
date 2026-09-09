import {
    ApplicationRef,
    Pipe,
    PipeTransform,
    provideZonelessChangeDetection,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { SupportGroupPickerComponent } from '../../../app/ui/support-group-picker.component';
import { TranslatePipe } from '../../../app/ui/translate.pipe';

vi.mock('@placeos/ts-client', () =>
    vi.importActual('@placeos/ts-client/dist/index.es.js'),
);

const state = vi.hoisted(() => ({
    role: false,
    selected: 'group-2',
    groups: [
        {
            group: { id: 'group-1', name: 'Office', parent_id: '' },
            permissions: 1,
        },
        {
            group: {
                id: 'group-2',
                name: 'Meeting rooms',
                parent_id: 'group-1',
            },
            permissions: 1,
        },
    ],
}));
vi.mock('../../../app/common/support-access', () => ({
    hasSupportRole: () => state.role,
    support_groups: () => state.groups,
    selected_support_group_id: () => state.selected,
}));

@Pipe({ name: 'translate' })
class TestTranslatePipe implements PipeTransform {
    transform(value: string) {
        return value;
    }
}

describe('support group picker', () => {
    beforeEach(() => {
        state.role = false;
        TestBed.configureTestingModule({
            imports: [SupportGroupPickerComponent],
            providers: [
                provideZonelessChangeDetection(),
                provideNoopAnimations(),
            ],
        }).overrideComponent(SupportGroupPickerComponent, {
            remove: { imports: [TranslatePipe] },
            add: { imports: [TestTranslatePipe] },
        });
    });
    afterEach(() => TestBed.inject(MatDialog).closeAll());

    it('marks the active group, filters names, and returns a selected group', async () => {
        const ref = TestBed.inject(MatDialog).open(SupportGroupPickerComponent);
        await TestBed.inject(ApplicationRef).whenStable();
        expect(
            document.querySelector('[aria-current="true"]')?.textContent,
        ).toContain('Meeting rooms');
        const input = document.querySelector<HTMLInputElement>(
            'mat-dialog-content input',
        );
        input.value = 'meeting';
        input.dispatchEvent(new Event('input'));
        await TestBed.inject(ApplicationRef).whenStable();
        const buttons = document.querySelectorAll<HTMLButtonElement>(
            'mat-dialog-content button',
        );
        expect(buttons).toHaveLength(1);
        expect(buttons[0].textContent).toContain('Office');
        const closed = vi.fn();
        ref.afterClosed().subscribe(closed);
        buttons[0].click();
        await TestBed.inject(ApplicationRef).whenStable();
        expect(closed).toHaveBeenCalledWith('group-2');
    });

    it('allows role users to choose all groups', async () => {
        state.role = true;
        const ref = TestBed.inject(MatDialog).open(SupportGroupPickerComponent);
        await TestBed.inject(ApplicationRef).whenStable();
        const closed = vi.fn();
        ref.afterClosed().subscribe(closed);
        document
            .querySelector<HTMLButtonElement>('mat-dialog-content button')
            .click();
        await TestBed.inject(ApplicationRef).whenStable();
        expect(closed).toHaveBeenCalledWith('');
    });

    it('returns no selection when cancelled', async () => {
        const ref = TestBed.inject(MatDialog).open(SupportGroupPickerComponent);
        await TestBed.inject(ApplicationRef).whenStable();
        const closed = vi.fn();
        ref.afterClosed().subscribe(closed);
        document
            .querySelector<HTMLButtonElement>('mat-dialog-actions button')
            .click();
        await TestBed.inject(ApplicationRef).whenStable();
        expect(closed).toHaveBeenCalledWith(undefined);
    });
});
