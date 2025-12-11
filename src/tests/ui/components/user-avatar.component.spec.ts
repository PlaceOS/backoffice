import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { UserAvatarComponent } from '../../../app/ui/user-avatar.component';
import { mockDirective } from '../../test-helpers';
import { AuthenticatedImageDirective } from '../../../app/ui/authenticated-image.directive';

// Mock the ts-client to avoid CJS/ESM issues
vi.mock('@placeos/ts-client', () => ({
    apiKey: vi.fn(() => ''),
    authority: vi.fn(() => null),
    token: vi.fn(() => ''),
}));

// Define a local type since we can't import from mocked module
interface MockPlaceUser {
    id: string;
    name: string;
    photo?: string;
    image?: string;
}

describe('UserAvatarComponent', () => {
    let component: UserAvatarComponent;
    let fixture: ComponentFixture<UserAvatarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                UserAvatarComponent,
                mockDirective(AuthenticatedImageDirective),
            ],
        })
            .overrideComponent(UserAvatarComponent, {
                remove: { imports: [AuthenticatedImageDirective] },
                add: { imports: [mockDirective(AuthenticatedImageDirective)] },
            })
            .compileComponents();

        fixture = TestBed.createComponent(UserAvatarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('default state', () => {
        it('should have undefined user by default', () => {
            expect(component.user()).toBeUndefined();
        });

        it('should not render content when user is undefined', () => {
            const wrapper = fixture.nativeElement.querySelector('[user-id]');
            expect(wrapper).toBeFalsy();
        });
    });

    describe('initials computation', () => {
        it('should return NA when user is undefined', () => {
            expect(component.initials()).toBe('NA');
        });

        it('should return first two characters when name has single word', () => {
            const user = { name: 'John', id: '1' } as MockPlaceUser;
            fixture.componentRef.setInput('user', user);
            fixture.detectChanges();

            expect(component.initials()).toBe('Jo');
        });

        it('should return first letter of first and last name', () => {
            const user = { name: 'John Doe', id: '1' } as MockPlaceUser;
            fixture.componentRef.setInput('user', user);
            fixture.detectChanges();

            expect(component.initials()).toBe('JD');
        });

        it('should handle names with multiple words', () => {
            const user = { name: 'John Michael Doe', id: '1' } as MockPlaceUser;
            fixture.componentRef.setInput('user', user);
            fixture.detectChanges();

            expect(component.initials()).toBe('JD');
        });

        it('should remove special characters from name', () => {
            const user = { name: 'John [Admin] Doe', id: '1' } as MockPlaceUser;
            fixture.componentRef.setInput('user', user);
            fixture.detectChanges();

            expect(component.initials()).toBe('JD');
        });

        it('should handle names with parentheses', () => {
            const user = { name: 'John (Staff) Smith', id: '1' } as MockPlaceUser;
            fixture.componentRef.setInput('user', user);
            fixture.detectChanges();

            expect(component.initials()).toBe('JS');
        });

        it('should handle empty name', () => {
            const user = { name: '', id: '1' } as MockPlaceUser;
            fixture.componentRef.setInput('user', user);
            fixture.detectChanges();

            expect(component.initials()).toBe('');
        });
    });

    describe('photo_url computation', () => {
        it('should return empty string when user has no photo', () => {
            const user = { name: 'John', id: '1' } as MockPlaceUser;
            fixture.componentRef.setInput('user', user);
            fixture.detectChanges();

            expect(component.photo_url()).toBe('');
        });

        it('should return photo property if available', () => {
            const user = {
                name: 'John',
                id: '1',
                photo: 'https://example.com/photo.jpg',
            } as MockPlaceUser;
            fixture.componentRef.setInput('user', user);
            fixture.detectChanges();

            expect(component.photo_url()).toBe('https://example.com/photo.jpg');
        });

        it('should return image property if photo not available', () => {
            const user = {
                name: 'John',
                id: '1',
                image: 'https://example.com/image.jpg',
            } as MockPlaceUser;
            fixture.componentRef.setInput('user', user);
            fixture.detectChanges();

            expect(component.photo_url()).toBe('https://example.com/image.jpg');
        });

        it('should prefer photo over image', () => {
            const user = {
                name: 'John',
                id: '1',
                photo: 'https://example.com/photo.jpg',
                image: 'https://example.com/image.jpg',
            } as MockPlaceUser;
            fixture.componentRef.setInput('user', user);
            fixture.detectChanges();

            expect(component.photo_url()).toBe('https://example.com/photo.jpg');
        });
    });

    describe('rendering', () => {
        it('should render user container when user is provided', () => {
            const user = { name: 'John Doe', id: '123' } as MockPlaceUser;
            fixture.componentRef.setInput('user', user);
            fixture.detectChanges();

            const container = fixture.nativeElement.querySelector('[user-id]');
            expect(container).toBeTruthy();
            expect(container.getAttribute('user-id')).toBe('123');
        });

        it('should render initials when no photo url', () => {
            const user = { name: 'John Doe', id: '1' } as MockPlaceUser;
            fixture.componentRef.setInput('user', user);
            fixture.detectChanges();

            const initials_el =
                fixture.nativeElement.querySelector('[initials]');
            expect(initials_el).toBeTruthy();
            expect(initials_el.textContent.trim()).toBe('JD');
        });

        it('should render img element when photo url exists', () => {
            const user = {
                name: 'John Doe',
                id: '1',
                photo: 'https://example.com/photo.jpg',
            } as MockPlaceUser;
            fixture.componentRef.setInput('user', user);
            fixture.detectChanges();

            const img_el = fixture.nativeElement.querySelector('img');
            expect(img_el).toBeTruthy();
        });

        it('should not render initials when photo url exists', () => {
            const user = {
                name: 'John Doe',
                id: '1',
                photo: 'https://example.com/photo.jpg',
            } as MockPlaceUser;
            fixture.componentRef.setInput('user', user);
            fixture.detectChanges();

            const initials_el =
                fixture.nativeElement.querySelector('[initials]');
            expect(initials_el).toBeFalsy();
        });
    });

    describe('with Record<string, unknown> user type', () => {
        it('should handle plain object with name', () => {
            const user = { name: 'Jane Smith', id: 'abc' };
            fixture.componentRef.setInput('user', user);
            fixture.detectChanges();

            expect(component.initials()).toBe('JS');
        });

        it('should handle plain object with image property', () => {
            const user = {
                name: 'Jane',
                id: 'abc',
                image: 'https://example.com/img.png',
            };
            fixture.componentRef.setInput('user', user);
            fixture.detectChanges();

            expect(component.photo_url()).toBe('https://example.com/img.png');
        });
    });
});
