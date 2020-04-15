
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ConfirmModalComponent } from './confirm-modal.component';

describe('ConfirmModalComponent', () => {
    let fixture: ComponentFixture<ConfirmModalComponent>;
    let component: ConfirmModalComponent;
    let item: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ConfirmModalComponent],
            providers: [{
                provide: MAT_DIALOG_DATA,
                useValue: {
                    title: 'Test Confirm',
                    content: 'This is for testing the confirm modal',
                    action: 'test action',
                    icon: { type: 'icon', class: 'material-icons', content: 'delete' }
                }
            }],
            imports: [CommonModule]
        }).compileComponents();
        fixture = TestBed.createComponent(ConfirmModalComponent);
        item = TestBed.get(MAT_DIALOG_DATA);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });

    it('should show title', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.header .text').textContent).toBe('Confirm');
        component.title = 'Testing a title';
        fixture.detectChanges();
        expect(compiled.querySelector('.header .text').textContent).toBe('Testing a title');
        item.data = { title: 'Another testing title' };
        component.ngOnInit();
        fixture.detectChanges();
        expect(compiled.querySelector('.header .text').textContent).not.toBe('Testing a title');
        expect(compiled.querySelector('.header .text').textContent).toBe(item.data.title);
    });

    it('should show a body', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const body = 'Test body for testing purposes';
        expect(compiled.querySelector('.body .content').textContent).toBe('Are you sure?');
        component.content = body;
        fixture.detectChanges();
        expect(compiled.querySelector('.body .content').textContent).toBe(body);
        item.data = { body: 'Another testing body to isn\'t really needed' };
        component.ngOnInit();
        fixture.detectChanges();
        expect(compiled.querySelector('.body .content').textContent).not.toBe(body);
        expect(compiled.querySelector('.body .content').textContent).toBe(item.data.body);
    });

    it('should show an icon', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const icon: any = { type: 'icon', class: 'test-class', value: 'here' };
        expect(compiled.querySelector('.body .icon')).toBeFalsy();
        component.icon = icon;
        fixture.detectChanges();
        expect(compiled.querySelector('.body .icon img')).toBeFalsy();
        expect(compiled.querySelector('.body .icon i').classList.contains(icon.class)).toBeTruthy();
        expect(compiled.querySelector('.body .icon i').textContent).toBe(icon.value);
        item.data = { icon: { class: 'text-class-test', value: 'now_what' } };
        component.ngOnInit();
        fixture.detectChanges();
        expect(compiled.querySelector('.body .icon i').classList.contains(icon.class)).toBeFalsy();
        expect(compiled.querySelector('.body .icon i').textContent).not.toBe(icon.value);
        expect(compiled.querySelector('.body .icon i').classList.contains(item.data.icon.class)).toBeTruthy();
        expect(compiled.querySelector('.body .icon i').textContent).toBe(item.data.icon.value);
    });

    it('should show a custom action button', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const action = 'Test Action';
        expect(compiled.querySelector('button[name="accept"]').textContent).toBe('Ok');
        component.action = action;
        fixture.detectChanges();
        expect(compiled.querySelector('button[name="accept"]').textContent).toBe(action);
        item.data = { action: 'Some other action' };
        component.ngOnInit();
        fixture.detectChanges();
        expect(compiled.querySelector('button[name="accept"]').textContent).not.toBe(action);
        expect(compiled.querySelector('button[name="accept"]').textContent).toBe(item.data.action);
    });

    it('should show call close', fakeAsync(() => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        compiled.querySelector('button[name="cancel"]').dispatchEvent(new Event('tapped'));
        tick(320);
        expect(item.close).toHaveBeenCalled();
    }));

    it('should post accept', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        compiled.querySelector('button[name="accept"]').dispatchEvent(new Event('tapped'));
        expect(item.post).toHaveBeenCalled();
    });
});
