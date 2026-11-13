import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import {
    executeOnSystem,
    PlaceModuleFunction,
    PlaceSystem,
} from '@placeos/ts-client';
import { describe, expect, it, vi } from 'vitest';
import { ExecuteMethodFieldComponent } from '../../../app/ui/custom-fields/system-exec/execute-method-field.component';

vi.mock('@placeos/ts-client', async () => ({
    ...(await vi.importActual<object>('@placeos/ts-client/dist/index.es.js')),
    executeOnSystem: vi.fn(() => Promise.resolve('ok')),
}));

vi.mock('../../../app/common/notifications', () => ({
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));

describe('ExecuteMethodFieldComponent', () => {
    it('sends arguments in method order with JSON values and defaults', async () => {
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                // The template loads modules from the API, so do not render it
                { provide: ComponentFixtureAutoDetect, useValue: false },
            ],
        });
        const fixture = TestBed.createComponent(ExecuteMethodFieldComponent);
        fixture.componentRef.setInput('system', { id: 'sys-1' } as PlaceSystem);
        const field = fixture.componentInstance;
        field.module.set({ module: 'Display', index: 2 } as never);
        field.fn.set({
            name: 'power',
            order: ['level', 'enabled', 'label', 'mode'],
            params: { mode: { default: 'auto' } },
        } as unknown as PlaceModuleFunction);
        field.arguments.set({
            mode: '',
            label: 'hello',
            enabled: 'false',
            level: '0',
        });

        await field.execute();

        expect(executeOnSystem).toHaveBeenCalledWith(
            'sys-1',
            'power',
            'Display',
            2,
            [0, false, 'hello', 'auto'],
        );
    });
});
