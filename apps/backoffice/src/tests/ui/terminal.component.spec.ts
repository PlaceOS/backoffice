import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { fakeAsync } from "@angular/core/testing";
import { MockComponent } from "ng-mocks";
import { TerminalComponent } from "../../app/ui/terminal.component";

jest.mock('xterm');

import * as xterm from 'xterm';

class TERMINAL {
    open = jest.fn();
    clear = jest.fn();
    dispose = jest.fn();
    resize = jest.fn();
    selectAll = jest.fn();
    clearSelection = jest.fn();
    write = jest.fn();
    writeln = jest.fn();
    options = {}
}

describe('TerminalComponent', () => {
    let spectator: Spectator<TerminalComponent>;
    const createComponent = createComponentFactory({
        component: TerminalComponent,
        providers: [],
        declarations: []
    });

    beforeEach(() => {
        (xterm as any).Terminal = TERMINAL;
        spectator = createComponent()
    });

    it('should create component', () => expect(spectator.component).toBeTruthy());

    it('should have an output for the terminal', () => expect('[terminal]').toExist());

    it('should open the terminal', () => expect(spectator.component.terminal.open).toBeCalled());

    it('should allow resizing the terminal', fakeAsync(() => {
        expect(spectator.component.terminal.resize).not.toBeCalled();
        spectator.setInput({ resize: true });
        spectator.tick(301);
        expect(spectator.component.terminal.resize).toBeCalled();
    }));

    it('should allow updating the terminal contents', () => {
        expect(spectator.component.terminal.writeln).not.toBeCalled();
        spectator.setInput({ content: 'Test' });
        expect(spectator.component.terminal.writeln).toBeCalledWith('Test');
    });

});