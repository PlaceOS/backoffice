import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlaceClusterTaskListComponent } from './task-list.component';

describe('PlaceClusterTaskListComponent', () => {
    let component: PlaceClusterTaskListComponent;
    let fixture: ComponentFixture<PlaceClusterTaskListComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [PlaceClusterTaskListComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlaceClusterTaskListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
