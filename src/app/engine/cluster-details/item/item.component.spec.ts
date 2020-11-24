import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlaceClusterItemComponent } from './item.component';

describe('PlaceClusterItemComponent', () => {
    let component: PlaceClusterItemComponent;
    let fixture: ComponentFixture<PlaceClusterItemComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [PlaceClusterItemComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlaceClusterItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
