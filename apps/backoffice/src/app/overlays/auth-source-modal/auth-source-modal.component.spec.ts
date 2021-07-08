import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AuthSourceModalComponent } from './auth-source-modal.component';

describe('AuthSourceModalComponent', () => {
    let component: AuthSourceModalComponent;
    let fixture: ComponentFixture<AuthSourceModalComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AuthSourceModalComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthSourceModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
