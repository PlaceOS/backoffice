import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineDatabaseDetailsComponent } from './database-details.component';

describe('EngineDatabaseDetailsComponent', () => {
    let component: EngineDatabaseDetailsComponent;
    let fixture: ComponentFixture<EngineDatabaseDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EngineDatabaseDetailsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EngineDatabaseDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
