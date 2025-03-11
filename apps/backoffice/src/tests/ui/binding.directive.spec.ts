import {
    createDirectiveFactory,
    SpectatorDirective,
} from '@ngneat/spectator/jest';
import { BehaviorSubject, lastValueFrom, of, timer } from 'rxjs';

import { BindingDirective } from '../../app/ui/binding.directive';

jest.mock('@placeos/ts-client', () => ({
    authority: jest.fn(() => true),
    onlineState: jest.fn(() => of(true)),
    getModule: jest.fn(),
}));

import * as ts_client from '@placeos/ts-client';

const DELAY = 301;

describe('BindingDirective', () => {
    let spectator: SpectatorDirective<BindingDirective>;
    const createDirective = createDirectiveFactory(BindingDirective);

    beforeEach(() => {
        spectator = createDirective(
            `
            <div 
                binding 
                [sys]="sys" [mod]="mod" [index]="index" [bind]="bind" 
                [exec]="exec" [(model)]="model" [params]="params" 
                [onEvent]="on_event"
            >
                Testing Binding Directive
            </div>
            `,
            {
                hostProps: {
                    sys: '',
                    mod: '',
                    index: 1,
                    bind: '',
                    exec: '',
                    model: false,
                    params: [],
                    on_event: '',
                },
            },
        );
    });

    it('should create an instance', () => {
        expect(spectator.directive).toBeTruthy();
    });

    it('should listen to binding changes', async () => {
        const value = new BehaviorSubject('');
        (ts_client as any).getModule.mockImplementation(() => ({
            binding: jest.fn(() => ({
                bind: jest.fn(() => null),
                listen: () => value.asObservable(),
            })),
        }));
        spectator.setHostInput({
            sys: 'system-1',
            mod: 'System',
            index: 2,
            bind: 'power',
        });
        await lastValueFrom(timer(DELAY));
        expect(ts_client.getModule).toHaveBeenCalledWith(
            'system-1',
            'System',
            2,
        );
        spectator.directive.modelChange.subscribe((value) => {
            if (!value) return;
            expect(value).toBe('Testing');
        });
        value.next('Testing');
        await lastValueFrom(timer(DELAY));
    });

    it('should allow performing executions', async () => {
        const execute = jest.fn(async (_) => null);
        (ts_client as any).getModule.mockImplementation(() => ({
            execute,
        }));
        spectator.setHostInput({
            sys: 'system-1',
            mod: 'System',
            exec: 'power',
        });
        spectator.detectChanges();
        expect(execute).not.toHaveBeenCalled();
        spectator.setHostInput({ model: true });
        spectator.detectChanges();
        await lastValueFrom(timer(DELAY));
        expect(ts_client.getModule).toHaveBeenCalledWith(
            'system-1',
            'System',
            1,
        );
        expect(execute).toHaveBeenCalledWith('power', []);
        spectator.setHostInput({ params: [false], model: 2 });
        spectator.detectChanges();
        await lastValueFrom(timer(DELAY));
        expect(execute).toHaveBeenCalledWith('power', [false]);
    });

    it('should allow executing on parent element DOM events', async () => {
        const execute = jest.fn(async (_) => null);
        (ts_client as any).getModule.mockImplementation(() => ({
            execute,
        }));
        spectator.setHostInput({
            sys: 'system-1',
            mod: 'System',
            exec: 'power',
            on_event: 'click',
        });
        spectator.detectChanges();
        expect(execute).not.toHaveBeenCalled();
        spectator.click('[binding]');
        await lastValueFrom(timer(DELAY));
        expect(execute).toHaveBeenCalledWith('power', []);
        spectator.setHostInput({ on_event: 'random_event', params: ['Jim'] });
        spectator.triggerEventHandler('[binding]', 'random_event', {});
        await lastValueFrom(timer(DELAY));
        expect(execute).toHaveBeenCalledWith('power', ['Jim']);
    });
});
