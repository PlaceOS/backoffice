import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { IconComponent } from '../../../app/ui/icon.component';
import { ApplicationIcon } from '../../../app/common/types';

describe('IconComponent', () => {
    let component: IconComponent;
    let fixture: ComponentFixture<IconComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [IconComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(IconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('default state', () => {
        it('should have default className of material-symbols-rounded', () => {
            expect(component.className()).toBe('material-symbols-rounded');
        });

        it('should have undefined icon by default', () => {
            expect(component.icon()).toBeUndefined();
        });

        it('should render an i element with default class when no icon is provided', () => {
            const i_element = fixture.nativeElement.querySelector('i');
            expect(i_element).toBeTruthy();
            expect(i_element.className).toContain('material-symbols-rounded');
        });
    });

    describe('with icon input', () => {
        it('should render icon content when icon type is not img', () => {
            const icon: ApplicationIcon = {
                type: 'icon',
                class: 'test-icon-class',
                content: 'home',
            };

            fixture.componentRef.setInput('icon', icon);
            fixture.detectChanges();

            const i_element = fixture.nativeElement.querySelector('i');
            expect(i_element).toBeTruthy();
            expect(i_element.className).toContain('test-icon-class');
            expect(i_element.textContent).toContain('home');
        });

        it('should render img element when icon type is img', () => {
            const icon: ApplicationIcon = {
                type: 'img',
                src: 'https://example.com/icon.png',
            };

            fixture.componentRef.setInput('icon', icon);
            fixture.detectChanges();

            const img_element = fixture.nativeElement.querySelector('img');
            expect(img_element).toBeTruthy();
        });

        it('should not render i element when icon type is img', () => {
            const icon: ApplicationIcon = {
                type: 'img',
                src: 'https://example.com/icon.png',
            };

            fixture.componentRef.setInput('icon', icon);
            fixture.detectChanges();

            const i_element = fixture.nativeElement.querySelector('i');
            expect(i_element).toBeFalsy();
        });

        it('should use icon class over default className', () => {
            const icon: ApplicationIcon = {
                type: 'icon',
                class: 'custom-class',
            };

            fixture.componentRef.setInput('icon', icon);
            fixture.detectChanges();

            const i_element = fixture.nativeElement.querySelector('i');
            expect(i_element.className).toContain('custom-class');
        });

        it('should fallback to className when icon has no class', () => {
            const icon: ApplicationIcon = {
                type: 'icon',
                content: 'settings',
            };

            fixture.componentRef.setInput('className', 'fallback-class');
            fixture.componentRef.setInput('icon', icon);
            fixture.detectChanges();

            const i_element = fixture.nativeElement.querySelector('i');
            expect(i_element.className).toContain('fallback-class');
        });
    });

    describe('className input', () => {
        it('should apply custom className to i element', () => {
            fixture.componentRef.setInput('className', 'custom-icon-class');
            fixture.detectChanges();

            const i_element = fixture.nativeElement.querySelector('i');
            expect(i_element.className).toContain('custom-icon-class');
        });
    });

    describe('ng-content projection', () => {
        it('should render wrapper div with correct classes', () => {
            const wrapper = fixture.nativeElement.querySelector('div');
            expect(wrapper).toBeTruthy();
            expect(wrapper.className).toContain('flex');
            expect(wrapper.className).toContain('items-center');
            expect(wrapper.className).toContain('justify-center');
        });
    });
});
