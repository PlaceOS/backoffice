import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemFormComponent } from './system-form.component';

describe('SystemFormComponent', () => {
  let component: SystemFormComponent;
  let fixture: ComponentFixture<SystemFormComponent>;

  beforeEach(async(() => {
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
