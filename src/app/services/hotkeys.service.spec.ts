import { TestBed } from '@angular/core/testing';

import { HotkeysService } from './hotkeys.service';

function keypress(code: string) {
    window.dispatchEvent(new KeyboardEvent('keydown', { code, repeat: false }));
    setTimeout(() => window.dispatchEvent(new KeyboardEvent('keyup', { code, repeat: false })));
}

describe('HotkeysService', () => {
    let service: HotkeysService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [HotkeysService]
        });
        service = TestBed.get(HotkeysService);
    });

    it('should emit hotkey events', done => {
        const spy = jasmine.createSpyObj('Obj', ['callback']);
        const sub = service.listen(['Alt', 'KeyK'], spy.callback);
        keypress('AltLeft');
        keypress('KeyK');
        setTimeout(() => {
            sub.unsubscribe();
            expect(spy.callback).toHaveBeenCalledTimes(1);
            service.listen(['Alt', 'Shift', 'KeyK'], spy.callback);
            keypress('AltLeft');
            keypress('ShiftLeft');
            keypress('KeyK');
            setTimeout(() => {
                expect(spy.callback).toHaveBeenCalledTimes(2);
                done();
            });
        });
    });

    it('should emit hotkey events only if the keys are pressed in the correct order', done => {
        const spy = jasmine.createSpyObj('Obj', ['callback']);
        service.listen(['Alt', 'KeyK'], spy.callback);
        keypress('KeyK');
        keypress('AltLeft');
        setTimeout(() => {
            expect(spy.callback).toHaveBeenCalledTimes(0);
            keypress('KeyK');
            setTimeout(() => {
                expect(spy.callback).toHaveBeenCalledTimes(1);
                done();
            });
        });
    });

    it('should not allow invalid key combinations', done => {
        const spy = jasmine.createSpyObj('Obj', ['callback']);
        service.listen(['Alt', 'Shift'], spy.callback);
        keypress('AltLeft');
        keypress('ShiftLeft');
        setTimeout(() => {
            expect(spy.callback).toHaveBeenCalledTimes(0);
            service.listen(['Alt', 'KeyK'], spy.callback);
            keypress('AltLeft');
            keypress('KeyK');
            setTimeout(() => {
                expect(spy.callback).toHaveBeenCalledTimes(1);
                done();
            });
        });
    });
});
