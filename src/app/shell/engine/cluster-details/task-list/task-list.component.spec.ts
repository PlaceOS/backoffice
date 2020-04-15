import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineClusterTaskListComponent } from './task-list.component';

describe('EngineClusterTaskListComponent', () => {
    let component: EngineClusterTaskListComponent;
    let fixture: ComponentFixture<EngineClusterTaskListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EngineClusterTaskListComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EngineClusterTaskListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
