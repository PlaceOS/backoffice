import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineClusterDetailsComponent } from './cluster-details.component';

describe('EngineClusterDetailsComponent', () => {
    let component: EngineClusterDetailsComponent;
    let fixture: ComponentFixture<EngineClusterDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EngineClusterDetailsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EngineClusterDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
