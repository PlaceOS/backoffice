import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineClusterItemComponent } from './item.component';

describe('EngineClusterItemComponent', () => {
    let component: EngineClusterItemComponent;
    let fixture: ComponentFixture<EngineClusterItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EngineClusterItemComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EngineClusterItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
