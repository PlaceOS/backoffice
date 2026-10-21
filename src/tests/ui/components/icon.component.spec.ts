import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTooltip } from '@angular/material/tooltip';
import { beforeEach, describe, expect, it } from 'vitest';
import { ApplicationIcon } from '../../../app/common/types';
import { IconComponent } from '../../../app/ui/icon.component';

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

    describe('inside buttons', () => {
        @Component({
            imports: [IconComponent, MatTooltip],
            template: `
                <button matTooltip="More actions">
                    <icon>more_vert</icon>
                </button>
                <button><icon>save</icon> Save</button>
                <button><icon>warning</icon><icon>refresh</icon></button>
            `,
        })
        class TestButtonsComponent {}

        it('labels icon-only buttons from their tooltip and hides icon names', async () => {
            const host = TestBed.createComponent(TestButtonsComponent);
            host.detectChanges();
            await host.whenStable();
            const [icon_only, with_text, two_icons] =
                host.nativeElement.querySelectorAll('button');
            expect(icon_only.getAttribute('aria-label')).toBe('More actions');
            expect(
                icon_only.querySelector('icon').getAttribute('aria-hidden'),
            ).toBe('true');
            // Other icons are not text, so these stay readable
            expect(
                two_icons.querySelector('icon').hasAttribute('aria-hidden'),
            ).toBe(false);
            expect(with_text.hasAttribute('aria-label')).toBe(false);
            expect(
                with_text.querySelector('icon').getAttribute('aria-hidden'),
            ).toBe('true');
        });
    });
});
