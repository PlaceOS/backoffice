import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TriggerActionFormComponent } from './trigger-action-form.component';

describe('TriggerActionFormComponent', () => {
  let component: TriggerActionFormComponent;
  let fixture: ComponentFixture<TriggerActionFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TriggerActionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggerActionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
