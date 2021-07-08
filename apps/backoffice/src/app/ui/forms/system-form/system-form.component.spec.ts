import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SystemFormComponent } from './system-form.component';

describe('SystemFormComponent', () => {
  let component: SystemFormComponent;
  let fixture: ComponentFixture<SystemFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
