import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ChipListComponent } from '../../../app/ui/controls/chip-list.component';

describe('ChipListComponent', () => {
    let fixture: ComponentFixture<ChipListComponent>;
    let component: ChipListComponent;
    let input: HTMLInputElement;
    let changed: ReturnType<typeof vi.fn>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            providers: [provideZonelessChangeDetection()],
        });
        fixture = TestBed.createComponent(ChipListComponent);
        component = fixture.componentInstance;
        changed = vi.fn();
        component.registerOnChange(changed);
        component.writeValue(['a', 'b', 'c']);
        await fixture.whenStable();
        input = fixture.nativeElement.querySelector('.chip-input');
    });

    const type = (text: string, key: string) => {
        input.value = text;
        input.dispatchEvent(new KeyboardEvent('keydown', { key }));
    };

    it('adds the trimmed text on a separator key and clears the input', () => {
        type(' d ', ',');
        expect(component.value()).toEqual(['a', 'b', 'c', 'd']);
        expect(changed).toHaveBeenCalledWith(['a', 'b', 'c', 'd']);
        expect(input.value).toBe('');
    });

    it('does not add a duplicate', () => {
        type('a', 'Enter');
        expect(component.value()).toEqual(['a', 'b', 'c']);
        expect(changed).not.toHaveBeenCalled();
    });

    it('removes the last item on Backspace in an empty input', () => {
        type('', 'Backspace');
        expect(component.value()).toEqual(['a', 'b']);
    });

    describe('finishEdit', () => {
        beforeEach(() => component.startEdit('b'));

        it('replaces the item in place with the trimmed text', () => {
            component.finishEdit('b', ' x ');
            expect(component.value()).toEqual(['a', 'x', 'c']);
        });

        it('removes the item when the text is empty', () => {
            component.finishEdit('b', '  ');
            expect(component.value()).toEqual(['a', 'c']);
        });

        it('merges the item into an existing duplicate', () => {
            component.finishEdit('b', 'c');
            expect(component.value()).toEqual(['a', 'c']);
        });
    });

    describe('focus after a keyboard action', () => {
        /** Chip buttons are Edit then Remove */
        const chipButton = (index: number, name: 'edit' | 'remove') => {
            const buttons = fixture.nativeElement
                .querySelectorAll('.chip')
                [index].querySelectorAll('.chip-action');
            return name === 'edit' ? buttons[0] : buttons[buttons.length - 1];
        };

        beforeEach(async () => {
            fixture.componentRef.setInput('editable', true);
            await fixture.whenStable();
        });

        it('moves the focus to the Edit button when Escape stops an edit', async () => {
            component.startEdit('b');
            await fixture.whenStable();
            const editor: HTMLInputElement =
                fixture.nativeElement.querySelector('.chip-edit');
            editor.dispatchEvent(
                new KeyboardEvent('keydown', { key: 'Escape' }),
            );
            await fixture.whenStable();
            expect(document.activeElement).toBe(chipButton(1, 'edit'));
        });

        it('moves the focus to the next Remove button after a remove', async () => {
            chipButton(1, 'remove').click();
            await fixture.whenStable();
            expect(component.value()).toEqual(['a', 'c']);
            expect(document.activeElement).toBe(chipButton(1, 'remove'));
        });

        it('moves the focus to the text input when no chip stays', async () => {
            component.writeValue(['a']);
            await fixture.whenStable();
            chipButton(0, 'remove').click();
            await fixture.whenStable();
            expect(document.activeElement).toBe(input);
        });
    });
});
