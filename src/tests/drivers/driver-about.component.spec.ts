import {
    Component,
    input,
    provideZonelessChangeDetection,
    signal,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import type { Settings } from '@placeos/ts-client';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ActiveItemService } from '../../app/common/item.service';
import { LocaleService } from '../../app/common/locale.service';
import { DriverAboutComponent } from '../../app/drivers/driver-about.component';
import { DriverStateService } from '../../app/drivers/driver-state.service';
import { SettingsFormComponent } from '../../app/ui/forms/settings-form.component';

/** Settings form double. The real form loads an editor. */
@Component({ selector: 'a-settings-form', template: '' })
class StubSettingsFormComponent {
    public readonly merge = input(false);
    public readonly id = input('');
    public readonly settings = input<readonly Settings[]>([]);
}

interface Driver {
    id: string;
    name: string;
    settings?: readonly Settings[];
}

describe('DriverAboutComponent settings retry', () => {
    let item: ReturnType<typeof signal<Driver>>;
    let settings_error: ReturnType<typeof signal<boolean>>;
    let finishRetry: () => void;

    beforeEach(() => {
        item = signal<Driver>({ id: 'driver-1', name: 'Display' });
        settings_error = signal(true);
        const settings_retrying = signal(false);
        // As the item service, the settings show before the retry resolves
        const retrySettings = vi.fn(() => {
            settings_retrying.set(true);
            return new Promise<boolean>((resolve) => {
                finishRetry = () => {
                    item.update((driver) => ({ ...driver, settings: [] }));
                    settings_error.set(false);
                    settings_retrying.set(false);
                    resolve(true);
                };
            });
        });
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                provideRouter([]),
                { provide: DriverStateService, useValue: { item } },
                {
                    provide: ActiveItemService,
                    useValue: {
                        settings_error,
                        settings_retrying,
                        retrySettings,
                    },
                },
            ],
        }).overrideComponent(DriverAboutComponent, {
            remove: { imports: [SettingsFormComponent] },
            add: { imports: [StubSettingsFormComponent] },
        });
    });

    afterEach(() => document.body.replaceChildren());

    /** Render the page with the settings error, with the focus on Retry */
    async function render() {
        // The text shows in English once the translations load
        await TestBed.inject(LocaleService).ready;
        const fixture = TestBed.createComponent(DriverAboutComponent);
        document.body.appendChild(fixture.nativeElement);
        await fixture.whenStable();
        const element: HTMLElement = fixture.nativeElement;
        const alert = element.querySelector<HTMLElement>('[role="alert"]');
        expect(alert?.textContent).toContain('Retry');
        const retry = alert.querySelector('button');
        retry.focus();
        retry.click();
        await fixture.whenStable();
        return { fixture, element, retry };
    }

    it('moves the focus from Retry to the settings that load', async () => {
        const { fixture, element } = await render();

        finishRetry();
        await fixture.whenStable();

        expect(element.querySelector('[role="alert"]')).toBeNull();
        const section = element.querySelector('section:has(a-settings-form)');
        expect(section).not.toBeNull();
        expect(document.activeElement).toBe(section);
    });

    it('keeps the focus on a control that the user moved it to', async () => {
        const { fixture, element } = await render();
        const update = [...element.querySelectorAll('button')].find(
            (button) => button.textContent.trim() === 'update',
        );
        update.focus();

        finishRetry();
        await fixture.whenStable();

        expect(element.querySelector('a-settings-form')).not.toBeNull();
        expect(document.activeElement).toBe(update);
    });
});
