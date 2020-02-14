import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemTriggerFormComponent } from './system-trigger-form.component';

describe('SystemTriggerFormComponent', () => {
  let component: SystemTriggerFormComponent;
  let fixture: ComponentFixture<SystemTriggerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemTriggerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemTriggerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
