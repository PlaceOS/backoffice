import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ModuleFormComponent } from '../../app/modules/module-form.component';

let resolve_system: (system: unknown) => void;

// Mock the ts-client to avoid CJS/ESM issues and control network calls
vi.mock('@placeos/ts-client', () => ({
    PlaceDriverRole: { SSH: 0, Device: 1, Service: 2, Websocket: 3, Logic: 99 },
    PlaceModule: class PlaceModule {},
    PlaceSettings: class PlaceSettings {},
    EncryptionLevel: { Support: 2 },
    cleanObject: (obj: unknown) => obj,
    addModule: vi.fn(),
    updateModule: vi.fn(),
    addSettings: vi.fn(),
    showMetadata: vi.fn(() => Promise.resolve({})),
    queryDrivers: vi.fn(() => Promise.resolve({ data: [] })),
    querySystems: vi.fn(() => Promise.resolve({ data: [] })),
    queryEdges: vi.fn(() => Promise.resolve({ data: [] })),
    showSystem: vi.fn(
        () => new Promise((resolve) => (resolve_system = resolve)),
    ),
}));

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

describe('ModuleFormComponent', () => {
    let fixture: ComponentFixture<ModuleFormComponent>;

    // A logic module as returned by `showModule` — `system` is always
    // constructed by PlaceModule, empty when the API omits `control_system`
    const item = {
        id: 'mod-1',
        name: 'A Module',
        role: 99,
        driver_id: 'driver-1',
        control_system_id: 'sys-1',
        system: { id: '', name: '' },
        toJSON: () => ({}),
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ModuleFormComponent],
            providers: [
                provideZonelessChangeDetection(),
                provideNoopAnimations(),
                { provide: MatDialogRef, useValue: { close: vi.fn() } },
                { provide: MAT_DIALOG_DATA, useValue: { item } },
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(ModuleFormComponent);
    });

    const systemInput = () =>
        fixture.nativeElement.querySelector(
            'item-search-field input',
        ) as HTMLInputElement;

    it('should render immediately without waiting for the system to load', () => {
        fixture.detectChanges();
        expect(systemInput()).toBeTruthy();
    });

    it('should show the system name once loaded', async () => {
        fixture.detectChanges();
        await sleep(10);
        resolve_system({ id: 'sys-1', name: 'Test System' });
        await sleep(400);
        fixture.detectChanges();
        expect(systemInput().value).toBe('Test System');
    });

    it('should hide connection fields for logic modules', () => {
        fixture.detectChanges();
        const text = fixture.nativeElement.textContent;
        expect(text).not.toContain('MODULES.FIELD_IP');
        expect(text).not.toContain('MODULES.PORT_NUMBER');
        expect(text).not.toContain('COMMON.TLS');
        expect(text).not.toContain('COMMON.UDP');
    });

    it('should keep control_system_id while the system is loading', async () => {
        fixture.detectChanges();
        await sleep(10);
        expect(fixture.componentInstance.formModel().control_system_id).toBe(
            'sys-1',
        );
    });
});
