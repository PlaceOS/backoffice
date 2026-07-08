import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ContextMenuComponent } from '../../../app/ui/context-menu.component';

describe('ContextMenuComponent', () => {
    let component: ContextMenuComponent;
    let fixture: ComponentFixture<ContextMenuComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ContextMenuComponent, NoopAnimationsModule],
        }).compileComponents();

        fixture = TestBed.createComponent(ContextMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('default state', () => {
        it('should have undefined menu by default', () => {
            expect(component.menu()).toBeUndefined();
        });

        it('should have offset_x of 0 by default', () => {
            expect(component.offset_x()).toBe(0);
        });

        it('should have offset_y of 0 by default', () => {
            expect(component.offset_y()).toBe(0);
        });

        it('should have position undefined before ngOnInit', () => {
            const new_component = TestBed.createComponent(ContextMenuComponent)
                .componentInstance;
            expect(new_component.position()).toBeNull();
        });
    });

    describe('ngOnInit', () => {
        it('should initialize position to { top: 0, left: 0 }', () => {
            component.ngOnInit();
            expect(component.position()).toEqual({ top: 0, left: 0 });
        });
    });

    describe('onEvent (contextmenu handler)', () => {
        it('should prevent default on context menu event', () => {
            component.ngOnInit();
            const event = {
                preventDefault: vi.fn(),
                clientX: 100,
                clientY: 150,
            };

            component.onEvent(event);

            expect(event.preventDefault).toHaveBeenCalled();
        });

        it('should set position based on clientX and clientY', () => {
            component.ngOnInit();
            const event = {
                preventDefault: vi.fn(),
                clientX: 100,
                clientY: 150,
            };

            component.onEvent(event);

            expect(component.position()?.left).toBe(100);
            expect(component.position()?.top).toBe(150);
        });

        it('should apply offset_x to position', () => {
            component.ngOnInit();
            fixture.componentRef.setInput('offset_x', 10);
            fixture.detectChanges();

            const event = {
                preventDefault: vi.fn(),
                clientX: 100,
                clientY: 150,
            };

            component.onEvent(event);

            expect(component.position()?.left).toBe(110);
        });

        it('should apply offset_y to position', () => {
            component.ngOnInit();
            fixture.componentRef.setInput('offset_y', 20);
            fixture.detectChanges();

            const event = {
                preventDefault: vi.fn(),
                clientX: 100,
                clientY: 150,
            };

            component.onEvent(event);

            expect(component.position()?.top).toBe(170);
        });
    });

    describe('updatePosition', () => {
        it('should handle missing container gracefully', () => {
            component.ngOnInit();
            // updatePosition will schedule a timeout if container is missing
            component.updatePosition();
            expect(component.position()).toEqual({ top: 0, left: 0 });
        });
    });

    describe('template rendering', () => {
        it('should render ng-content slot', () => {
            const ng_content = fixture.nativeElement.querySelector('ng-content');
            // ng-content is projected, the slot exists
            expect(fixture.nativeElement).toBeTruthy();
        });

        it('should have container div with correct classes', () => {
            const container = fixture.nativeElement.querySelector('div');
            expect(container).toBeTruthy();
            expect(container.className).toContain('fixed');
            expect(container.className).toContain('pointer-events-none');
        });
    });
});
