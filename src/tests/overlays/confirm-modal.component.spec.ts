import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { beforeEach, describe, expect, it, vi, afterEach } from 'vitest';

// Mock the ts-client - factory must be self-contained
vi.mock('@placeos/ts-client', () => {
    class MockPlaceUser {
        id = '';
        name = '';
    }
    return {
        authority: vi.fn(() => null),
        PlaceUser: MockPlaceUser,
        apiKey: vi.fn(() => ''),
        token: vi.fn(() => ''),
    };
});

import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA,
} from '../../app/overlays/confirm-modal.component';
import { mockComponent } from '../test-helpers';
import { IconComponent } from '../../app/ui/icon.component';

describe('ConfirmModalComponent', () => {
    let component: ConfirmModalComponent;
    let fixture: ComponentFixture<ConfirmModalComponent>;
    let dialog_ref_mock: {
        close: ReturnType<typeof vi.fn>;
        disableClose: boolean;
    };

    const default_data: ConfirmModalData = {
        title: 'Test Title',
        content: 'Test Content',
        icon: { class: 'material-symbols-rounded', content: 'warning' },
    };

    beforeEach(async () => {
        dialog_ref_mock = {
            close: vi.fn(),
            disableClose: false,
        };

        await TestBed.configureTestingModule({
            imports: [
                ConfirmModalComponent,
                MatDialogModule,
                NoopAnimationsModule,
            ],
            providers: [
                { provide: MatDialogRef, useValue: dialog_ref_mock },
                { provide: MAT_DIALOG_DATA, useValue: default_data },
            ],
        })
            .overrideComponent(ConfirmModalComponent, {
                remove: { imports: [IconComponent] },
                add: { imports: [mockComponent(IconComponent)] },
            })
            .compileComponents();

        fixture = TestBed.createComponent(ConfirmModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('default state', () => {
        it('should have empty loading signal', () => {
            expect(component.loading()).toBe('');
        });

        it('should have event emitter defined', () => {
            expect(component.event).toBeDefined();
        });
    });

    describe('with provided data', () => {
        it('should use title from data', () => {
            expect(component.title).toBe('Test Title');
        });

        it('should use content from data', () => {
            expect(component.content).toBe('Test Content');
        });

        it('should use icon from data', () => {
            expect(component.icon.content).toBe('warning');
        });
    });

    describe('with default values when data is missing', () => {
        let minimal_component: ConfirmModalComponent;

        beforeEach(async () => {
            await TestBed.resetTestingModule();

            await TestBed.configureTestingModule({
                imports: [
                    ConfirmModalComponent,
                    MatDialogModule,
                    NoopAnimationsModule,
                ],
                providers: [
                    { provide: MatDialogRef, useValue: dialog_ref_mock },
                    { provide: MAT_DIALOG_DATA, useValue: {} },
                ],
            })
                .overrideComponent(ConfirmModalComponent, {
                    remove: { imports: [IconComponent] },
                    add: { imports: [mockComponent(IconComponent)] },
                })
                .compileComponents();

            const minimal_fixture = TestBed.createComponent(
                ConfirmModalComponent,
            );
            minimal_component = minimal_fixture.componentInstance;
        });

        it('should default title to COMMON.CONFIRM', () => {
            expect(minimal_component.title).toBe('COMMON.CONFIRM');
        });

        it('should default content to "Are you sure?"', () => {
            expect(minimal_component.content).toBe('Are you sure?');
        });

        it('should default confirm_text to COMMON.ACCEPT', () => {
            expect(minimal_component.confirm_text).toBe('COMMON.ACCEPT');
        });

        it('should default cancel_text to COMMON.CANCEL', () => {
            expect(minimal_component.cancel_text).toBe('COMMON.CANCEL');
        });

        it('should have default icon', () => {
            expect(minimal_component.icon).toBeDefined();
            expect(minimal_component.icon.content).toBe('done');
        });

        it('should default extra to empty tuple', () => {
            expect(minimal_component.extra).toEqual(['', '']);
        });
    });

    describe('custom text options', () => {
        beforeEach(async () => {
            await TestBed.resetTestingModule();

            await TestBed.configureTestingModule({
                imports: [
                    ConfirmModalComponent,
                    MatDialogModule,
                    NoopAnimationsModule,
                ],
                providers: [
                    { provide: MatDialogRef, useValue: dialog_ref_mock },
                    {
                        provide: MAT_DIALOG_DATA,
                        useValue: {
                            ...default_data,
                            confirm_text: 'Yes, Delete',
                            cancel_text: 'No, Keep',
                            extra: ['warning', 'This action cannot be undone'],
                        },
                    },
                ],
            })
                .overrideComponent(ConfirmModalComponent, {
                    remove: { imports: [IconComponent] },
                    add: { imports: [mockComponent(IconComponent)] },
                })
                .compileComponents();

            fixture = TestBed.createComponent(ConfirmModalComponent);
            component = fixture.componentInstance;
        });

        it('should use custom confirm_text', () => {
            expect(component.confirm_text).toBe('Yes, Delete');
        });

        it('should use custom cancel_text', () => {
            expect(component.cancel_text).toBe('No, Keep');
        });

        it('should use custom extra text', () => {
            expect(component.extra[0]).toBe('warning');
            expect(component.extra[1]).toBe('This action cannot be undone');
        });
    });

    describe('onConfirm', () => {
        it('should emit done event', () => {
            const event_spy = vi.fn();
            component.event.subscribe(event_spy);

            component.onConfirm();

            expect(event_spy).toHaveBeenCalledWith({ reason: 'done' });
        });
    });

    describe('with options', () => {
        let details: ReturnType<typeof vi.fn>;
        let resolve_details: (value: unknown) => void;

        const build = async (option_overrides = {}) => {
            await TestBed.resetTestingModule();
            await TestBed.configureTestingModule({
                imports: [
                    ConfirmModalComponent,
                    MatDialogModule,
                    NoopAnimationsModule,
                ],
                providers: [
                    { provide: MatDialogRef, useValue: dialog_ref_mock },
                    {
                        provide: MAT_DIALOG_DATA,
                        useValue: {
                            ...default_data,
                            options: [
                                {
                                    id: 'cascade',
                                    label: 'Also delete associated resources',
                                    description: 'Removes orphaned systems',
                                    details,
                                    ...option_overrides,
                                },
                            ],
                        },
                    },
                ],
            })
                .overrideComponent(ConfirmModalComponent, {
                    remove: { imports: [IconComponent] },
                    add: { imports: [mockComponent(IconComponent)] },
                })
                .compileComponents();
            fixture = TestBed.createComponent(ConfirmModalComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        };

        beforeEach(async () => {
            details = vi.fn(
                () =>
                    new Promise((resolve) => {
                        resolve_details = resolve;
                    }),
            );
            await build();
        });

        it('should start with the option disabled', () => {
            expect(component.isSelected('cascade')).toBe(false);
        });

        it('should honour an option that defaults to enabled', async () => {
            await build({ enabled: true });
            expect(component.isSelected('cascade')).toBe(true);
        });

        it('should not resolve details until the option is enabled', () => {
            expect(details).not.toHaveBeenCalled();
        });

        it('should resolve details when the option is enabled', async () => {
            component.toggleOption(component.options[0], true);
            expect(details).toHaveBeenCalledOnce();
            expect(component.isLoadingDetails('cascade')).toBe(true);
            expect(component.resolving()).toBe(true);

            resolve_details({ summary: ['2 systems'], warnings: [] });
            await Promise.resolve();
            await Promise.resolve();

            expect(component.resolving()).toBe(false);
            expect(component.detailsFor('cascade')).toEqual({
                summary: ['2 systems'],
                warnings: [],
            });
        });

        it('should only resolve details once', async () => {
            component.toggleOption(component.options[0], true);
            resolve_details({ summary: [] });
            await Promise.resolve();
            await Promise.resolve();
            component.toggleOption(component.options[0], false);
            component.toggleOption(component.options[0], true);
            expect(details).toHaveBeenCalledOnce();
        });

        it('should surface a failure to resolve details', async () => {
            details.mockImplementation(() =>
                Promise.reject(new Error('lookup failed')),
            );
            await build();
            component.toggleOption(component.options[0], true);
            await Promise.resolve();
            await Promise.resolve();
            await Promise.resolve();
            expect(component.detailsError('cascade')).toBe('lookup failed');
            expect(component.resolving()).toBe(false);
        });

        it('should block confirmation while details are resolving', () => {
            const event_spy = vi.fn();
            component.event.subscribe(event_spy);
            component.toggleOption(component.options[0], true);

            component.onConfirm();

            expect(event_spy).not.toHaveBeenCalled();
        });

        it('should report the selection on confirmation', () => {
            const event_spy = vi.fn();
            component.event.subscribe(event_spy);

            component.onConfirm();

            expect(event_spy).toHaveBeenCalledWith({
                reason: 'done',
                metadata: { options: { cascade: false } },
            });
        });

        it('should report an enabled selection on confirmation', async () => {
            await build({ enabled: true, details: undefined });
            const event_spy = vi.fn();
            component.event.subscribe(event_spy);

            component.onConfirm();

            expect(event_spy).toHaveBeenCalledWith({
                reason: 'done',
                metadata: { options: { cascade: true } },
            });
        });

        it('should render the option checkbox', () => {
            const option_el =
                fixture.nativeElement.querySelector('[confirm-option]');
            expect(option_el).toBeTruthy();
            expect(option_el.textContent).toContain(
                'Also delete associated resources',
            );
        });
    });

    describe('disableClose/enableClose', () => {
        it('should set disableClose to true when calling disableClose', () => {
            expect(dialog_ref_mock.disableClose).toBe(false);
            component.disableClose();
            expect(dialog_ref_mock.disableClose).toBe(true);
        });

        it('should set disableClose to false when calling enableClose', () => {
            dialog_ref_mock.disableClose = true;
            component.enableClose();
            expect(dialog_ref_mock.disableClose).toBe(false);
        });
    });

    describe('ngOnInit with close_delay', () => {
        beforeEach(async () => {
            vi.useFakeTimers();

            await TestBed.resetTestingModule();

            await TestBed.configureTestingModule({
                imports: [
                    ConfirmModalComponent,
                    MatDialogModule,
                    NoopAnimationsModule,
                ],
                providers: [
                    { provide: MatDialogRef, useValue: dialog_ref_mock },
                    {
                        provide: MAT_DIALOG_DATA,
                        useValue: {
                            ...default_data,
                            close_delay: 3000,
                        },
                    },
                ],
            })
                .overrideComponent(ConfirmModalComponent, {
                    remove: { imports: [IconComponent] },
                    add: { imports: [mockComponent(IconComponent)] },
                })
                .compileComponents();

            fixture = TestBed.createComponent(ConfirmModalComponent);
            component = fixture.componentInstance;
        });

        afterEach(() => {
            vi.useRealTimers();
        });

        it('should set timeout to close dialog after close_delay', () => {
            component.ngOnInit();

            expect(dialog_ref_mock.close).not.toHaveBeenCalled();

            vi.advanceTimersByTime(3000);

            expect(dialog_ref_mock.close).toHaveBeenCalled();
        });
    });

    describe('loading state', () => {
        it('should update loading signal', () => {
            component.loading.set('Processing...');
            expect(component.loading()).toBe('Processing...');
        });

        it('should clear loading signal', () => {
            component.loading.set('Processing...');
            component.loading.set('');
            expect(component.loading()).toBe('');
        });
    });

    describe('template rendering', () => {
        it('should render header with title', () => {
            const header = fixture.nativeElement.querySelector('header');
            expect(header).toBeTruthy();
            expect(header.textContent).toContain('Test Title');
        });

        it('should render main content when not loading', () => {
            const main = fixture.nativeElement.querySelector('main');
            expect(main).toBeTruthy();
        });

        it('should render content text', () => {
            const content_el =
                fixture.nativeElement.querySelector('[content]');
            expect(content_el).toBeTruthy();
            expect(content_el.innerHTML).toContain('Test Content');
        });

        it('should render footer with buttons when not loading', () => {
            const footer = fixture.nativeElement.querySelector('footer');
            expect(footer).toBeTruthy();

            const buttons = footer.querySelectorAll('button');
            expect(buttons.length).toBe(2);
        });

        it('should render loading state when loading is set', () => {
            component.loading.set('Please wait...');
            fixture.detectChanges();

            const loading_main =
                fixture.nativeElement.querySelector('main[loading]');
            expect(loading_main).toBeTruthy();
            expect(loading_main.textContent).toContain('Please wait...');
        });

        it('should not render footer when loading', () => {
            component.loading.set('Processing...');
            fixture.detectChanges();

            const footer = fixture.nativeElement.querySelector('footer');
            expect(footer).toBeFalsy();
        });
    });
});

describe('CONFIRM_METADATA', () => {
    it('should have height set to auto', () => {
        expect(CONFIRM_METADATA.height).toBe('auto');
    });
});
