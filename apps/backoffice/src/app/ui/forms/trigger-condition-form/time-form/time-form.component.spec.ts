import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TriggerConditionTimeFormComponent } from './time-form.component';

describe('TimeFormComponent', () => {
  let component: TriggerConditionTimeFormComponent;
  let fixture: ComponentFixture<TriggerConditionTimeFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TriggerConditionTimeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggerConditionTimeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
