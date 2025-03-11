import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { lastValueFrom, timer } from 'rxjs';
import { TerminalComponent } from '../../app/ui/terminal.component';

jest.mock('@xterm/xterm', () => {
    class TERMINAL {
        open = jest.fn();
        clear = jest.fn();
        dispose = jest.fn();
        resize = jest.fn();
        selectAll = jest.fn();
        clearSelection = jest.fn();
        write = jest.fn();
        writeln = jest.fn();
        options = {};
    }
    return {
        Terminal: TERMINAL,
    };
});

describe('TerminalComponent', () => {
    let spectator: Spectator<TerminalComponent>;
    const createComponent = createComponentFactory({
        component: TerminalComponent,
        providers: [],
        declarations: [],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should have an output for the terminal', () =>
        expect('[terminal]').toExist());

    it('should open the terminal', () =>
        expect(spectator.component.terminal.open).toHaveBeenCalled());

    it('should allow resizing the terminal', async () => {
        expect(spectator.component.terminal.resize).not.toHaveBeenCalled();
        spectator.setInput({ resize: true });
        await lastValueFrom(timer(301));
        expect(spectator.component.terminal.resize).toHaveBeenCalled();
    });

    it('should allow updating the terminal contents', () => {
        expect(spectator.component.terminal.writeln).not.toHaveBeenCalled();
        spectator.setInput({ content: 'Test' });
        expect(spectator.component.terminal.writeln).toHaveBeenCalledWith(
            'Test',
        );
    });
});
