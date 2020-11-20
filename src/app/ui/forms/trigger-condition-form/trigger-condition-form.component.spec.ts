import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TriggerConditionFormComponent } from './trigger-condition-form.component';

describe('TriggerConditionFormComponent', () => {
  let component: TriggerConditionFormComponent;
  let fixture: ComponentFixture<TriggerConditionFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TriggerConditionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggerConditionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
