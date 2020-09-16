import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerActionFormComponent } from './trigger-action-form.component';

describe('TriggerActionFormComponent', () => {
  let component: TriggerActionFormComponent;
  let fixture: ComponentFixture<TriggerActionFormComponent>;

  beforeEach(async(() => {
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
