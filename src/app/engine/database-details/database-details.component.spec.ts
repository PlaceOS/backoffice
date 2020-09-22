import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceDatabaseDetailsComponent } from './database-details.component';

describe('PlaceDatabaseDetailsComponent', () => {
    let component: PlaceDatabaseDetailsComponent;
    let fixture: ComponentFixture<PlaceDatabaseDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PlaceDatabaseDetailsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlaceDatabaseDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});