import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HotkeysService } from './hotkeys.service';

function keypress(code: string, hold_duration: number = 10) {
    window.dispatchEvent(new KeyboardEvent('keydown', { code, repeat: false }));
    setTimeout(
        () => window.dispatchEvent(new KeyboardEvent('keyup', { code, repeat: false })),
        hold_duration
    );
}

describe('HotkeysService', () => {
    let service: HotkeysService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [HotkeysService]
        });
        service = TestBed.inject(HotkeysService);
    });

    it('should emit hotkey events', fakeAsync(() => {
        const spy = jasmine.createSpyObj('Obj', ['callback']);
        const sub = service.listen(['Alt', 'KeyK'], spy.callback);
        keypress('AltLeft');
        keypress('KeyK');
        tick(100);
        sub.unsubscribe();
        expect(spy.callback).toHaveBeenCalledTimes(1);
        service.listen(['Alt', 'Shift', 'KeyK'], spy.callback);
        keypress('AltLeft');
        keypress('ShiftLeft');
        keypress('KeyK');
        tick(100);
        expect(spy.callback).toHaveBeenCalledTimes(2);
    }));

    it('should emit hotkey events only if the keys are pressed in the correct order', fakeAsync(() => {
        const spy = jasmine.createSpyObj('Obj', ['callback']);
        service.listen(['Alt', 'KeyK'], spy.callback);
        keypress('KeyK');
        keypress('AltLeft', 150);
        tick(100);
        expect(spy.callback).toHaveBeenCalledTimes(0);
        keypress('KeyK');
        tick(100);
        expect(spy.callback).toHaveBeenCalledTimes(1);
    }));

    it('should not allow invalid key combinations', fakeAsync(() => {
        const spy = jasmine.createSpyObj('Obj', ['callback']);
        service.listen(['Alt', 'Shift'], spy.callback);
        keypress('AltLeft');
        keypress('ShiftLeft');
        tick(100);
        expect(spy.callback).toHaveBeenCalledTimes(0);
        service.listen(['Alt', 'KeyK'], spy.callback);
        keypress('AltLeft');
        keypress('KeyK');
        tick(100);
        expect(spy.callback).toHaveBeenCalledTimes(1);
    }));
});
