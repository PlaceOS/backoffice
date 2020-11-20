import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlaceClusterDetailsComponent } from './cluster-details.component';

describe('PlaceClusterDetailsComponent', () => {
    let component: PlaceClusterDetailsComponent;
    let fixture: ComponentFixture<PlaceClusterDetailsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [PlaceClusterDetailsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlaceClusterDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
