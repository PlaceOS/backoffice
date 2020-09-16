import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerConditionComparisonFormComponent } from './comparison-form.component';

describe('ComparisonFormComponent', () => {
  let component: TriggerConditionComparisonFormComponent;
  let fixture: ComponentFixture<TriggerConditionComparisonFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriggerConditionComparisonFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggerConditionComparisonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
