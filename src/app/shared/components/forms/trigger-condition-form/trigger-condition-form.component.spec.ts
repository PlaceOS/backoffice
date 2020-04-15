import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerConditionFormComponent } from './trigger-condition-form.component';

describe('TriggerConditionFormComponent', () => {
  let component: TriggerConditionFormComponent;
  let fixture: ComponentFixture<TriggerConditionFormComponent>;

  beforeEach(async(() => {
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
