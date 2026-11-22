import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { type System, systems } from '@placeos/ts-client';
import { mockReply } from '@placeos/ts-client/compat';
import { describe, expect, it, vi } from 'vitest';
import { ExecuteMethodFieldComponent } from '../../../app/ui/custom-fields/system-exec/execute-method-field.component';
import type { ModuleFunction } from '../../../app/ui/custom-fields/system-exec/select-method.component';

vi.mock('@placeos/ts-client', { spy: true });

vi.mock('../../../app/common/notifications', () => ({
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));

describe('ExecuteMethodFieldComponent', () => {
    it('sends arguments in method order with JSON values and defaults', async () => {
        vi.mocked(systems.execute).mockResolvedValue(mockReply('ok'));
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                // The template loads modules from the API, so do not render it
                { provide: ComponentFixtureAutoDetect, useValue: false },
            ],
        });
        const fixture = TestBed.createComponent(ExecuteMethodFieldComponent);
        fixture.componentRef.setInput('system', { id: 'sys-1' } as System);
        const field = fixture.componentInstance;
        field.module.set({ module: 'Display', index: 2 } as never);
        field.fn.set({
            name: 'power',
            order: ['level', 'enabled', 'label', 'mode'],
            arity: 4,
            params: { mode: { default: 'auto' } },
        } as ModuleFunction);
        field.arguments.set({
            mode: '',
            label: 'hello',
            enabled: 'false',
            level: '0',
        });

        await field.execute();

        expect(systems.execute).toHaveBeenCalledWith({
            sys_id: 'sys-1',
            module_slug: 'Display_2',
            method: 'power',
            body: [0, false, 'hello', 'auto'],
        });
    });
});
